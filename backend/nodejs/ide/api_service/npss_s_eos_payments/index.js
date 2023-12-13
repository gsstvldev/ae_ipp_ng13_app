var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {




    /*  Created By :  Daseen
    Created Date :12/12/2023
    Modified By : 
    Modified Date : 
    }
    */
    var serviceName = 'NPSS EOS Inward Credit Posting Payment Success';

    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqXlsx = require('node-xlsx').default;
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var success_process_status, success_status;
    var moment = require('moment-timezone');
    var reqAsync = require('async');
    var mTranConn = "";
    var producer
    var failedData = []
    var objresponse = {
        'status': 'FAILURE',
        'data': '',
        'msg': ''
    }; // Response to Client
    // Assign function for loginformation and session info

    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
        try {

            objSessionLogInfo = objLogInfo; // Assing log information
            // Log Viewer Setup
            objSessionLogInfo.HANDLER_CODE = 'NPSS EOS Inward Credit Posting Payment Success';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS EOS Inward Credit Posting Payment Success';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false,  function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo,async function prct(error, prct_id) {
                  var  PRCT_ID = prct_id

                    try {

                        var takeTrn = `select npsst_id,cdtr_acct_name,cdtr_iban,value_date,intrbk_sttlm_amnt,dr_sort_code,department_code from npss_transactions nt  inner join  npss_trn_process_log l on l.uetr =nt.uetr and  ((l.process_name= 'Inward Credit Posting' and l.status= 'IP_RCT_POSTING_SUCCESS')  or (l.process_name= 'Prepaid Card Posting' and l.status = 'IP_RCT_PC_POSTING_SUCCESS')    or (l.process_name ='Credit Card Posting' and l.status ='IP_RCT_CC_POSTING_SUCCESS')) where nt.category_purpose_prty='EOS' and nt.fx_resv_text2 <>'PSMailInitiated'`
                        var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync='Y'`

                        var arrTran = await ExecuteQuery1(takeTrn)
                        if (arrTran.length > 0) {
                            let trnId = arrTran.map((x) => x.npsst_id)
                            var updateRes = await updateEligibleTran('(' + trnId.join(',') + ')')
                            if (updateRes == 'SUCCESS') {
                                var arrUrl = await ExecuteQuery1(takeurl)
                                if (arrUrl.length > 0) {
                                    var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN' and need_sync='Y'`
                                    var arrorg = await ExecuteQuery1(Takeorg)
                                    var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_GROUP' and need_sync='Y'`
                                    var arrcomgp = await ExecuteQuery1(tkcomgp)
                                    var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_CC' and need_sync='Y'`
                                    var arrcomcc = await ExecuteQuery1(Takecmcc)
                                    var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_CATEGORY' and need_sync='Y'`
                                    var arrCatgory = await ExecuteQuery1(TakecomCat)
                                    var TakecomTo = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_TO' and need_sync='Y'`
                                    var arrComto = await ExecuteQuery1(TakecomTo)
                                    reqAsync.forEachOfSeries(arrTran, function (arrTrnobj, i, nextobjctfunc) {
                                        try {
                                            var frtodata = [{

                                                TO: arrComto.length>0?arrComto[0].param_value : '',
                                                CC: arrcomcc.length > 0 ? arrcomcc[0].param_value : '',
                                                BCC: '',
                                                ORIGIN: arrorg.length > 0 ? arrorg[0].param_value : '',
                                                COMM_GROUP: arrcomgp.length > 0 ? arrcomgp[0].param_value : '',
                                                BENEFICIARYACCOUNT: 'XXXX' + (arrTrnobj.cdtr_iban).substring(arrTrnobj.cdtr_iban.length - 4),
                                                AMOUNT: arrTrnobj.intrbk_sttlm_amnt || '',
                                                BENEFICIARYACCOUNTNAME: arrTrnobj.cdtr_acct_name || '',
                                                VALUEDATE: arrTrnobj.value_date || '',
                                                ORDERINGINSTITUTION: arrTrnobj.dr_sort_code || '',
                                                DEPARTMENT: arrTrnobj.department_code || ''
                                            }]
                                            var trndetail = JSON.stringify(frtodata)
                                            var request = require('request');

                                            var options = {
                                                url: arrUrl[0].param_detail,
                                                timeout: 18000000,
                                                method: 'POST',
                                                json: {
                                                    "PARAMS": {

                                                        "WFTPA_ID": "DEFAULT",

                                                        "PRCT_ID": "",

                                                        "EVENT_CODE": "DEFAULT",

                                                        "USER_EMAIL": "",

                                                        "USER_MOBILE": "",

                                                        "TRN_DETAILS": trndetail,

                                                        "TEMPLATECODE": arrCatgory[0].param_value,

                                                        "DT_CODE": "",

                                                        "DTT_CODE": "",

                                                        "COMM_INFO": "",

                                                        "SKIP_COMM_FLOW": true

                                                    },

                                                    "PROCESS_INFO": {

                                                        "MODULE": "MODULE",

                                                        "MENU_GROUP": "MENU_GROUP",

                                                        "MENU_ITEM": "MENU_ITEM",

                                                        "PROCESS_NAME": "PROCESS_NAME"

                                                    }
                                                },
                                                headers: {
                                                    "session-id": headers["session-id"],
                                                    "routingKey": headers.routingKey,
                                                    'Content-Type': 'application/json'

                                                }
                                            }

                                            reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                            request(options, function (error, responseFromImagingService, responseBody) {

                                                if (error) {
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------ SEND MAIL API ERROR-------' + error, objSessionLogInfo);
                                                    sendResponse(error, null);
                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + JSON.stringify(responseBody), objSessionLogInfo);
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------Mail has been sent for -------' + arrTrnobj.npsst_id, objSessionLogInfo);
                                                    nextobjctfunc();
                                                }
                                            });

                                        } catch (error) {
                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                            sendResponse(error, null);
                                        }
                                    }, function () {
                                        reqInstanceHelper.PrintInfo(serviceName, '----------Mail has been sent -------', objSessionLogInfo);
                                        objresponse.status = 'SUCCESS';
                                        sendResponse(null, objresponse)
                                    })

                                } else {
                                    reqInstanceHelper.PrintInfo(serviceName, '----------No URL found-------', objSessionLogInfo);
                                    objresponse.status = 'FAILURE';
                                    sendResponse(null, objresponse)
                                }

                            }


                        } else {
                            reqInstanceHelper.PrintInfo(serviceName, '----------No tran found-------', objSessionLogInfo);
                            objresponse.status = 'FAILURE';
                            sendResponse(null, objresponse)
                        }



                        //Execute Query for common
                        function ExecuteQuery(query, callback) {
                            return new Promise((resolve, reject) => {
                                reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                                    try {
                                        if (error) {
                                            sendResponse(error)
                                        } else {
                                            resolve("SUCCESS");

                                        }
                                    } catch (error) {
                                        sendResponse(error)
                                    }
                                });
                            })

                        }


                        function updateEligibleTran(contn) {
                            return new Promise((resolve, reject) => {
                                let updtQry = `update npss_transactions set  fx_resv_text2 = 'PSMailInitiated' ,MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id in ${contn}`
                                let callUpdate = async () => {
                                    let res = await ExecuteQuery(updtQry)

                                    if (res == 'SUCCESS') {
                                        reqInstanceHelper.PrintInfo(serviceName, '----------PSMailInitiated tran update success-------', objSessionLogInfo);
                                        resolve('SUCCESS')
                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '----------PSMailInitiated tran update Failure-------', objSessionLogInfo);
                                        objresponse.status = 'FAILURE';
                                        sendResponse(null, objresponse)
                                    }
                                }
                                callUpdate();

                            })
                        }

                        function ExecuteQuery1(query, callback) {
                            return new Promise((resolve, reject) => {
                                reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                                    try {
                                        if (error) {
                                            sendResponse(error)
                                        } else {
                                            if (result.rows.length > 0) {
                                                resolve(result.rows);
                                            } else {
                                                resolve([]);
                                            }
                                        }
                                    } catch (error) {
                                        sendResponse(error)
                                    }
                                });
                            })

                        }

                    } catch (error) {
                        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
                    }
                })

                //Send Response Function Definition
                function sendResponse(error, response) {
                    try {
                        if (error) {

                            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10005', '', error);

                        } else {

                            reqInstanceHelper.SendResponse(serviceName, appResponse, response, objSessionLogInfo)

                        }
                    } catch (error) {
                        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10004', 'ERROR IN SEND RESPONSE FUNCTION : ', error);
                    }
                }

            })
        } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }
    })



});

module.exports = app;
