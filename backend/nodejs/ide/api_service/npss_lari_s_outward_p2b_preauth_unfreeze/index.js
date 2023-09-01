var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    /*  Created By :Daseen
 Created Date :01/09/2023
 

 */
    var serviceName = 'NPSS LARI (S) P2B Refund Unfreeze Customer Account';

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
    var moment = require('moment');
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS lari (S) P2B Refund Unfreeze Customer Account';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS LARI (S) P2B Refund Unfreeze Customer Account';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    try {
                        var PRCT_ID = prct_id
                        var QueryStatus = await Prepareparam(params.GetTranstatus)
                        var QueryProcessName = await Prepareparam(params.GetprocessName)
                        var Firstaddinfo = await Prepareparam(params.Getaddinfo)
                        var Secondstatus = await Prepareparam(params.CheckTranstatus)
                        var SecondprocessName = await Prepareparam(params.CheckprocessName)
                        var sctstatus = await Prepareparam(params.sctPrcsstatus)
                        var sctprssname = await Prepareparam(params.sctPrcsname)
                        //  var Secondaddinfo = await Prepareparam(params.checkaddinfo)
                        var TakerequestData = await Prepareparam(params.RequestprocessName)

                        var Takehours = `select param_detail from core_nc_system_setup where param_category = '${params.param_category}' and param_code = '${params.param_code}' and need_sync = 'Y' and product_code='${params.product_code}'`
                        var arrTakehrs= await ExecuteQuery1 (Takehours)
                      
                            if (arrTakehrs.length > 0) {
                                var utcMoment = moment.utc();
                                console.log(utcMoment)
                                var Formdate = utcMoment.subtract(arrTakehrs[0].param_detail, 'hours')
                                Formdate = moment(Formdate).format('YYYY-MM-DD HH:mm:ss')
                                var TakeTrnid = `select npsstpl_id from npss_trn_process_log where status in ${QueryStatus} and process_name in ${QueryProcessName} and additional_info in ${Firstaddinfo} and created_date_utc < '${Formdate}' and (org_status <> ('UNFREEZE_TAKEN') or org_status isnull)`
                                //  var Takedata = `select * from npss_trn_process_log where status in ${QueryStatus} and process_name in ${QueryProcessName} and additional_info in ${Firstaddinfo} and created_date_utc < '${Formdate}' and org_status <> 'UNFREEZE_TAKEN'`
                                var Takedata = `select * from npss_trn_process_log where status in ${QueryStatus} and process_name in ${QueryProcessName} and additional_info in ${Firstaddinfo} and created_date_utc < '${Formdate}' and (org_status <> ('UNFREEZE_TAKEN') or org_status isnull)`
                                var Takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='${params.unfreeze_url_category}' and param_code='URL' and need_sync = 'Y'`
                                var arrurl = await ExecuteQuery1(Takeurl)
                                var arrData = await ExecuteQuery1(Takedata)
                                if(arrData.length >0) {
                                    var updateTable = await UpdateTran(TakeTrnid, PRCT_ID)
                                    if (updateTable == 'SUCCESS') {
                                        reqAsync.forEachOfSeries(arrData, function (arrDataobj, i, nextobjctfunc) {
                                            var sctcond = `select npsstpl_id, * from npss_trn_process_log where status in ${sctstatus} and process_name in ${sctprssname} and npsstrrd_refno='${arrDataobj.npsstrrd_refno}'`
                                            var Checkcond = `select npsstpl_id, * from npss_trn_process_log where status in ${Secondstatus} and process_name in ${SecondprocessName} and npsstrrd_refno='${arrDataobj.npsstrrd_refno}'`
                                            var callasync = async () => {
                                                sctcondres = await ExecuteQuery1(sctcond)
                                                if (sctcondres.length == 0) {
                                                    chkcond = await ExecuteQuery1(Checkcond)
                                                    if (chkcond.length == 0) {
                                                        if (arrurl.length > 0) {
                                                            var apicallresult = await kafkaapi(arrDataobj, arrurl, TakerequestData)
                                                            if (apicallresult != "Failure") {
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------API RESPONSE-------' + arrDataobj.uetr, objSessionLogInfo);
                                                                let loginsertRes = await ProcessInstData(apicallresult, arrDataobj)
                                                                nextobjctfunc()
    
                                                            } else {
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------some values are misssing for api call-------' + arrDataobj.uetr, objSessionLogInfo);
                                                                nextobjctfunc()
                                                            }
    
                                                        } else {
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------No URL Found-------', objSessionLogInfo);
                                                            objresponse.status = 'FAILURE';
                                                            objresponse.msg = 'NO URL FOUND';
                                                            sendResponse(null, objresponse)
                                                        }
                                                    } else {
                                                        reqInstanceHelper.PrintInfo(serviceName, '------------Not a eligible tran-------' + arrDataobj.uetr, objSessionLogInfo);
                                                        nextobjctfunc()
                                                    }
    
                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------Not a eligible tran-------' + arrDataobj.uetr, objSessionLogInfo);
                                                    nextobjctfunc()
                                                }
    
    
                                            }
                                            callasync();
    
    
                                        }, function () {
                                            objresponse.status = 'SUCCESS';
                                            objresponse.msg = 'ALL SUCCESS';
                                            sendResponse(null, objresponse)
                                        })
                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------Tran update is not success-------', objSessionLogInfo);
    
                                    }
                                }else {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------No eligible tran found in log Table-------', objSessionLogInfo);
                                    objresponse.status = 'FAILURE';
                                    objresponse.msg = 'No eligible tran found in log Table';
                                    sendResponse(null, objresponse)
                                }
                               
                            }
                            else {
                                reqInstanceHelper.PrintInfo(serviceName, '------------No Time details found in core_nc_system_setup Table-------', objSessionLogInfo);
                                objresponse.status = 'FAILURE';
                                objresponse.msg = 'No Time details found in core_nc_system_setup Table';
                                sendResponse(null, objresponse)
                            }
                    


                        //Function for insert in TrnProcess Log Table
                        function ProcessInstData(apicallresult, arrDataobj) {
                            return new Promise((resolve, reject) => {
                                let getstatus = [{ api_status: "SUCCESS", status: "OP_P2B_UNFR_POST_SUCCESS", process_status: "RCTCancelled" },
                                { api_status: "FAILURE", status: "OP_P2B_UNFR_POST_FAILURE", process_status: "RCTExceptionFailure" },
                                { api_status: "SUSPICIOUS", status: "OP_P2B_UNFR_POST_SUSPICIOUS", process_status: "RCTExceptionSuspicious" }
                                ]
                                let final_value = getstatus.find(x => x.api_status === apicallresult);
                                var arrCusTranInst = [];
                                var objCusTranInst = {};
                                objCusTranInst.MSG_ID = arrDataobj.msg_id;
                                objCusTranInst.PRCT_ID = PRCT_ID;
                                objCusTranInst.PROCESS_TIME = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                objCusTranInst.UETR = arrDataobj.uetr;
                                objCusTranInst.NPSSTRRD_REFNO = arrDataobj.npsstrrd_refno;
                                objCusTranInst.PROCESS_NAME = 'LARICBS'
                                objCusTranInst.PROCESS_STATUS = final_value.process_status;
                                objCusTranInst.STATUS = final_value.status;
                                objCusTranInst.TENANT_ID = params.TENANT_ID;
                                objCusTranInst.APP_ID = '215'
                                objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                                objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                                objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                                objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                                objCusTranInst.CREATED_BY = params.CREATED_BY;
                                objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                objCusTranInst.T24_RETURN_CODE = null;
                                objCusTranInst.CREATED_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                objCusTranInst.MODIFIED_BY = "";
                                objCusTranInst.MODIFIED_BY_NAME = "";
                                objCusTranInst.MODIFIED_DATE = null;
                                objCusTranInst.SYSTEM_ID = params.SYSTEM_ID;
                                objCusTranInst.SYSTEM_NAME = params.SYSTEM_NAME;
                                objCusTranInst.CREATED_BY_STS_ID = "";
                                objCusTranInst.MODIFIED_BY_STS_ID = "";
                                objCusTranInst.created_clientip = objSessionLogInfo.CLIENTIP;
                                objCusTranInst.created_tz = objSessionLogInfo.CLIENTTZ;
                                objCusTranInst.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                objCusTranInst.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                objCusTranInst.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                objCusTranInst.routingkey = headers.routingkey;
                                arrCusTranInst.push(objCusTranInst)

                                _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(logInsertRes) {
                                    resolve(logInsertRes)

                                })
                            })

                        }
                        function UpdateTran(arrTran, prct_id) {
                            return new Promise((resolve, reject) => {
                                let UpdTrntbl = `update npss_trn_process_log set org_status = 'UNFREEZE_TAKEN', MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${prct_id}' where npsstpl_id in (${arrTran})`
                                ExecuteQuery(UpdTrntbl, function (arrUpdTranTbl) {
                                    if (arrUpdTranTbl == 'SUCCESS') {
                                        resolve('SUCCESS')
                                    } else {
                                        resolve('Failure')
                                    }


                                })
                            })

                        }

                        function kafkaapi(arrpayverobj, arrurl, acct_contd) {
                            var postrefno;
                            return new Promise(async (resolve, reject) => {
                                var takeacctCode = `select account_value from core_nc_account_master where account_code in ${acct_contd}`
                                var acctcoderes = await ExecuteQuery1(takeacctCode)
                                var take_api_params = `select * from npss_transactions where uetr='${arrpayverobj.uetr}'`
                                var api_params = await ExecuteQuery1(take_api_params)
                                if ((api_params.length > 0) && (api_params[0].intrbk_sttlm_amnt != '' && api_params[0].dbtr_iban != '' && api_params[0].intrbk_sttlm_cur != '' && api_params[0].account_currency != '')) {
                                    if ((acctcoderes.length > 0) && (acctcoderes[0].account_value != '')) {
                                        try {
                                            var request = require('request');
                                            var options = {
                                                url: arrurl[0].param_detail,
                                                timeout: 18000000,
                                                method: 'POST',
                                                json: {
                                                    data: {
                                                        "payload": {
                                                            "source": "NPSS",
                                                            "procCode": "IPPO",
                                                            "procDesc": "Inward Presentment Posting",
                                                            "creditDebitFlag": "C",
                                                            "tranDate": moment().format('YYYYMMDD'),
                                                            "amount": api_params[0].intrbk_sttlm_amnt,
                                                            "drAccount": acctcoderes[0].account_value,
                                                            "crAccount": api_params[0]. dbtr_iban,
                                                            "drCurrency": api_params[0].intrbk_sttlm_cur,
                                                            "crCurrency": api_params[0].account_currency,
                                                            "exchangeRate": "",
                                                            "debitAmount": "",
                                                            "chargeAmount": "",
                                                            "narrative": "",
                                                            "cbsReferenceNo": "",
                                                            "birthDate": moment(api_params[0].dbtr_birth_date).format('YYYY-MM-DD') || '',
                                                            "cityOfBirth": api_params[0].dbtr_city_birth || '',
                                                            "countryOfBirth": api_params[0].dbtr_country || '',
                                                            "legalId": api_params[0].dbtr_document_id || '',
                                                            "nationalId": api_params[0].ext_person_id_code || '',
                                                            "economicActCode": api_params[0].ext_person_id_code || '',
                                                            "issuerTypeCode": api_params[0].issuer_type_code || '',
                                                            "emirateCode":(api_params[0].dbtr_prvt_id != '' &&  api_params[0].dbtr_prvt_id != null)? api_params[0].dbtr_prvt_id.substring(0, 3) : '',
                                                            "tradeLicenceNo":(api_params[0].dbtr_prvt_id != '' &&  api_params[0].dbtr_prvt_id != null)? api_params[0].dbtr_prvt_id.split('-')[2] : ''
                                                        }
                                                    }
                                                },
                                                'headers': 'application/json'
                                            }
                                            let PrintInfo = {
                                                url:arrurl[0].param_detail,
                                                uetr: api_params[0].uetr

                                            }
                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                if (error) {
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                    sendResponse(error, null);

                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                    if (responseBodyFromImagingService == 'SUCCESS') {
                                                        resolve(responseBodyFromImagingService);

                                                    } else {
                                                        resolve(responseBodyFromImagingService);
                                                    }
                                                }
                                            });

                                        } catch (error) {
                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                            sendResponse(error, null);
                                        }
                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------core_nc_account_master entry missing-------', objSessionLogInfo);
                                        resolve('Failure');
                                    }

                                } else {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------No tran found in Transaction-------', objSessionLogInfo);
                                    resolve('Failure');
                                }
                            })
                        }



                        function Prepareparam(parameter) {
                            return new Promise((resolve, reject) => {
                                var arrdata
                                if (Array.isArray(parameter)) {
                                    arrdata = parameter.map(function (eachTran) {
                                        return eachTran.toString();
                                    });
                                } else {
                                    arrdata = [parameter.toString()];
                                }
                                var Tempdata = '(' + "'" + arrdata.toString().split(',').join("','") + "'" + ')';

                                resolve(Tempdata)

                            })
                        }

                        //Execute Query for common
                        function ExecuteQuery(query, callback) {
                            reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                                try {
                                    if (error) {
                                        sendResponse(error)
                                    } else {
                                        callback("SUCCESS");

                                    }
                                } catch (error) {
                                    sendResponse(error)
                                }
                            });
                        }

                        function _BulkInsertProcessItem(insertarr, strTrnTableName, callbackInsert) {
                            try {
                                reqTranDBInstance.InsertBulkTranDB(mTranConn, strTrnTableName, insertarr, objSessionLogInfo, 300, function callbackInsertBulk(result, error) {
                                    try {
                                        if (error) {
                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, 'IDE_SERVICE_10049', 'ERROR IN BULK INSERT FUNCTION', error);
                                            sendResponse(error)
                                        } else {
                                            if (result.length > 0) {
                                                callbackInsert(result);
                                            } else {
                                                callbackInsert([]);
                                            }
                                        }
                                    } catch (error) {
                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, 'IDE_SERVICE_10048', 'ERROR IN BULK INSERT FUNCTION', error);
                                        sendResponse(error)
                                    }
                                });
                            } catch (error) {
                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, 'IDE_SERVICE_10047', 'ERROR IN BULK INSERT FUNCTION', error);
                                sendResponse(error)
                            }
                        }


                        function ExecuteQuery1(query) {
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
