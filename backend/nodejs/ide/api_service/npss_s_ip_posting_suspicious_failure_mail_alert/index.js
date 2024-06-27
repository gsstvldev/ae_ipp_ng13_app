var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


    /*  Created By : suresh 
    Created Date :21-02-2024
    Modified By : 
    Modified Date : 
    Modified Date : 
    */
    var serviceName = 'NPSS (S) Ip Posting Suspicious failure Mail Alert';
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
    var reqAsync = require('async');
    var mTranConn = "";
    var producer
    var moment = require('moment');
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Ip Posting Suspicious failure Mail Alert';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (S) Ip Posting Suspicious failure Mail Alert';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    try {
                        var PRCT_ID = prct_id
                        var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL'`
                        ExecuteQuery1(takeurl, async function (arrUrl) {
                            if (arrUrl.length == 0) {
                                objresponse.status = 'FAILURE';
                                objresponse.msg = 'No URL found';
                                sendResponse(null, objresponse)
                            }
                            else {
                                function arraytostr(arrstr) {
                                    return new Promise((resolve, reject) => {
                                        if (Array.isArray(arrstr)) {
                                            arrTranstr = arrstr.map(function (eachTran) { return eachTran.toString(); });
                                        }
                                        else {
                                            arrTranstr = [arrstr.toString()];
                                        }
                                        resolve(retstr = '(' + "'" + arrTranstr.toString().split(',').join("','") + "'" + ')');
                                    })
                                }
                                var status = await arraytostr(params.status);
                                var process_status = await arraytostr(params.process_status);
                                var Takedata=`SELECT * FROM npss_trn_process_log AS log  INNER JOIN npss_transactions AS trans ON log.uetr = trans.uetr WHERE log.status IN ${status} AND log.process_status IN ${process_status} AND trans.process_type = 'IP'  and (trans.fx_resv_text5 <>'Mail_Sent'  or trans.fx_resv_text5 isnull)`
                               // var Takedata = `SELECT * FROM npss_trn_process_log AS log  INNER JOIN npss_transactions AS trans ON log.uetr = trans.uetr WHERE log.status IN ${status} AND log.process_status IN ${process_status}  AND trans.process_type = 'IP'`
                                var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN' and need_sync='Y'`
                                ExecuteQuery1(Takeorg, function (arrorg) {
                                    ExecuteQuery1(Takedata, async function (arrAllData) {
                                        if (arrAllData.length > 0) {
                                            var TakeCometo = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}'  and param_name='COMM_TO' and need_sync='Y'`
                                            ExecuteQuery1(TakeCometo, function (arrCometo) {
                                                var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}'  and param_name = 'COMM_CC' and need_sync='Y'`
                                                ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                                    var Takebcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}'  and param_name = 'COMM_BCC' and need_sync='Y'`
                                                    ExecuteQuery1(Takebcc, function (arrbcc) {
                                                        var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}'  and param_name = 'COMM_GROUP' and need_sync='Y'`
                                                        ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                                            var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}'  and param_name = 'COM_CATEGORY' and need_sync='Y'`
                                                            ExecuteQuery1(TakecomCat, function (arrCatgory) {
                                                                reqAsync.forEachOfSeries(arrAllData, function (arrDataobj, i, nextobjctfunc) {
                                                                    var Takeerr = `select error_code,error_description,cncec_id from core_nc_error_codes where error_code='${arrDataobj.t24_return_code}' and need_sync='Y'`
                                                                    ExecuteQuery1(Takeerr, function (arrerr) {
                                                                        var takeacccur = `select currency from core_nc_cbs_accounts  where alternate_account_id='${arrDataobj.dbtr_iban}'`
                                                                        ExecuteQuery1(takeacccur, function (arracccur) {
                                                                            if (arracccur.length > 0) {
                                                                                try {
                                                                                    var frtodata = [{
                                                                                        TO: arrCometo.length > 0 ? arrCometo[0].param_value : '',
                                                                                        CC: arrcomcc.length > 0 ? arrcomcc[0].param_value : '',
                                                                                        BCC: arrbcc.length > 0 ? arrbcc[0].param_value : '',
                                                                                        ORIGIN: arrorg.length > 0 ? arrorg[0].param_value : '',
                                                                                        COMM_GROUP: arrcomgp.length > 0 ? arrcomgp[0].param_value : '',
                                                                                        POSTINGAPPLICATION: arrAllData.length > 0 ? arrDataobj.processing_system : '',
                                                                                        MESSAGETYPE: arrAllData.length > 0 ? arrDataobj.process_name : '',
                                                                                        TXNVALUEDATE: arrDataobj.value_date ? moment(arrDataobj.value_date).format('YYYY-MM-DD') : '',
                                                                                        CRACCOUNTNUMBER: arrDataobj.cdtr_iban ? arrDataobj.cdtr_iban : '',
                                                                                        CRACCOUNTNAME: arrDataobj.cdtr_acct_name ? arrDataobj.cdtr_acct_name : '',
                                                                                        CRACCOUNTCURRENCY: arrDataobj.intrbk_sttlm_cur ? arrDataobj.intrbk_sttlm_cur : '',
                                                                                        CRBANKNAME: arrDataobj.cr_sort_code ? arrDataobj.cr_sort_code : '',
                                                                                        TRANSACTIONAMOUNT: arrDataobj.intrbk_sttlm_amnt ? arrDataobj.intrbk_sttlm_amnt : '',
                                                                                        DRACCOUNTNUMBER: arrDataobj.dbtr_iban ? arrDataobj.dbtr_iban : '',
                                                                                        DRACCOUNTNAME: arrDataobj.dbtr_acct_name ? arrDataobj.dbtr_acct_name : '',
                                                                                        DRBANKNAME: arrDataobj.dr_sort_code ? arrDataobj.dr_sort_code : '',
                                                                                        DRACCOUNTCURRENCY: arracccur.length > 0 ? arracccur[0].currency : '',
                                                                                        CLEARINGSYSREFNUMBER: arrDataobj.clrsysref ? arrDataobj.clrsysref : '',
                                                                                        E2EREFERENCEID: arrDataobj.payment_endtoend_id ? arrDataobj.payment_endtoend_id : '',
                                                                                        FAILUREERRORCODE: arrAllData.length > 0 ? arrDataobj.t24_return_code : '',
                                                                                        ERRORDESCRIPTION: arrerr.length > 0 ? arrerr[0].error_description : '' || '',
                                                                                    }]
                                                                                    var trndetail = JSON.stringify(frtodata)
                                                                                    var request = require('request');
                                                                                    var options = {
                                                                                        url: arrUrl[0].param_detail,
                                                                                        timeout: 18000000,
                                                                                        method: 'POST',
                                                                                        json:
                                                                                        {
                                                                                            "PARAMS": {
                                                                                                "WFTPA_ID": "DEFAULT",
                                                                                                "PRCT_ID": "",
                                                                                                "EVENT_CODE": "DEFAULT",
                                                                                                "USER_EMAIL": "",
                                                                                                "USER_MOBILE": "",
                                                                                                "TRN_DETAILS": trndetail,
                                                                                                "TEMPLATECODE": arrCatgory.length > 0 ? arrCatgory[0].param_value : '',
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
                                                                                            "session-id": params.session_id,
                                                                                            "routingKey": params.routingKey,
                                                                                            'Content-Type': 'application/json'
                                                                                        }
                                                                                    }
                                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                                                    request(options, async function (error, responseFromImagingService, responseBody) {
                                                                                        if (error) {
                                                                                            reqInstanceHelper.PrintInfo(serviceName, '------------Mail API ERROR-------' + error, objSessionLogInfo);
                                                                                            sendResponse(error, null);
                                                                                        }
                                                                                        else {
                                                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + JSON.stringify(responseBody), objSessionLogInfo);
                                                                                            reqInstanceHelper.PrintInfo(serviceName, '------------Mail has been sent for -------' + arrDataobj.npsst_id, objSessionLogInfo);

                                                                                            let Updatetran = await TakeeliTran(arrDataobj.npsst_id)
                                                                                            if (Updatetran == 'SUCCESS') {
                                                                                                nextobjctfunc();
                                                                                            }
                                                                                            else {
                                                                                                nextobjctfunc();
                                                                                            }
                                                                                        }
                                                                                    });

                                                                                } catch (error) {
                                                                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                                    sendResponse(error, null);
                                                                                }
                                                                            }
                                                                            else {
                                                                                reqInstanceHelper.PrintInfo(serviceName, '-----------Account table entry  not found for npsstl_id------' + arrDataobj.npsstl_id, objSessionLogInfo);
                                                                                nextobjctfunc();
                                                                            }
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            }, function () {
                                                objresponse.status = 'SUCCESS';
                                                sendResponse(null, objresponse)
                                            })
                                        }
                                        else {
                                            reqInstanceHelper.PrintInfo(serviceName, '-----------No data Found in Tran Table------', objSessionLogInfo);
                                            objresponse.status = 'Failure';
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                })
                            }
                        })

                        function TakeeliTran(TakeTrnid) {
                            return new Promise((resolve, reject) => {
                                let Updtbl = `update npss_transactions set fx_resv_text5 = 'Mail_Sent' where npsst_id in (${TakeTrnid})`
                                ExecuteQuery(Updtbl, function (result) {
                                    if (result == 'SUCCESS') {
                                        reqInstanceHelper.PrintInfo(serviceName, '-----------Update success for------' + TakeTrnid, objSessionLogInfo);
                                        resolve('SUCCESS')
                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '-----------Update failure for------' + TakeTrnid, objSessionLogInfo);
                                        resolve('FAILURE')
                                    }
                                })
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
                        function ExecuteQuery1(query, callback) {
                            reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                                try {
                                    if (error) {
                                        sendResponse(error)
                                    } else {
                                        if (result.rows.length > 0) {
                                            callback(result.rows);
                                        } else {
                                            callback([]);
                                        }
                                    }
                                } catch (error) {
                                    sendResponse(error)
                                }
                            });
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