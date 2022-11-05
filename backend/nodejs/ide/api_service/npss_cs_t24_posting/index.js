var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


try {
    /*   Created By : Daseen
    Created Date :04-11-2022
    Modified By : 
    Modified Date :     
    Reason for : 
    */
    var serviceName = 'NPSS Inward Posting Suspicious';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var mTranConn = "";
    var addquery = "";
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS Real time Posting';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS Real time Posting';
            var cus_iban;
            // Get DB Connection                                                                                                                                      
            reqTranDBInstance.GetTranDBConn(headers, true, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    try {
                        var take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL'`;
                        var take_batch_name = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='BATCH_NAME'`;
                        var take_api_params = `select  ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method,
                        ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty,
                        ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,
                        ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid
                        from npss_transactions ns where npsst_id = '${params.tran_id}'`;
                        var TakenpsstrRefno = `select npsstrrd_refno from npss_trn_process_log ns where ns.uetr = '${params.uetr}' and ns.status = '${params.STATUS}' and ns.process_status = '${params.ELIGIBLE_PROCESS_STATUS}' `
                        var TakenpsstrRefno2 = `select npsstrrd_refno,npsstpl_id from npss_trn_process_log  where uetr= '${params.uetr}' order by npsstpl_id  desc`
                        ExecuteQuery1(take_api_url, function (arrurlResult) {
                            if (arrurlResult.length) {
                                // var param_val = JSON.parse(arrurlResult[0].rule_param_value);
                                var url = arrurlResult[0].param_detail;
                                ExecuteQuery1(take_api_params, function (arrprocesslog) {

                                    if (arrprocesslog.length) {
                                        ExecuteQuery1(take_batch_name, function (arrbatchname) {
                                            if (arrbatchname.length) {
                                                //1st Case
                                                ExecuteQuery1(TakenpsstrRefno, function (arrRefno) {
                                                    if (arrRefno.length > 0) {
                                                        fn_doapicall(url, arrprocesslog, arrbatchname,arrRefno, function (result) {
                                                            if (result) {
                                                                sendResponse(null, result)
                                                            } else {
                                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Data not received from service", result);
                                                                sendResponse(result, null);
                                                            }
                                                        })
                                                    } else {
                                                        //2nd Case
                                                        ExecuteQuery1(TakenpsstrRefno2, function (arrRefno) {
                                                            if (arrRefno.length > 0) {
                                                                fn_doapicall(url, arrprocesslog, arrbatchname,arrRefno, function (result) {
                                                                    if (result) {
                                                                        sendResponse(null, result)
                                                                    } else {
                                                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Data not received from service", result);
                                                                        sendResponse(result, null);
                                                                    }
                                                                })
                                                            } else {
                                                                console.log("No Data found in NPSS trn process log Table");
                                                                objresponse.status = "No Data found in NPSS trn process log Table"
                                                                sendResponse(objresponse, null)
                                                            }

                                                        })
                                                    }
                                                })

                                            }
                                            else {
                                                console.log("No Data found in System Setup table");
                                                objresponse.status = "No Data found in System Setup table"
                                                sendResponse(objresponse, null)
                                            }

                                        })
                                    }
                                    else {
                                        console.log("No Data found in Transaction table");
                                        objresponse.status = "No Data found in Transaction table"
                                        sendResponse(objresponse, null)
                                    }

                                })



                            } else {
                                console.log("No URL found in Rule code");
                                objresponse.status = "No URL found in Rule code"
                                sendResponse(objresponse, null)
                            }
                        })




                        // Do API Call for Service 
                        function fn_doapicall(url, arrprocesslog, arrbatchname,arrRefno, callbackapi) {
                            try {
                                var apiName = 'NPSS CC posting'
                                var request = require('request');
                                var apiURL =
                                    apiURL = url // apiURL + apiName
                                var options = {
                                    url: apiURL,
                                    timeout: 18000000,
                                    method: 'POST',
                                    json: {
                                   
                                        "batch_name": arrbatchname[0].param_detail,
                                        "data": {
                                            "payload": {
                                                "hdr_msg_id": arrprocesslog[0].hdr_msg_id,
                                                "hdr_created_date": arrprocesslog[0].hdr_created_date,
                                                "hdr_total_records": arrprocesslog[0].hdr_total_records,
                                                "hdr_total_amount": arrprocesslog[0].hdr_total_amount,
                                                "hdr_settlement_date": arrprocesslog[0].hdr_settlement_date,
                                                "hdr_settlement_method": arrprocesslog[0].hdr_settlement_method,
                                                "hdr_clearing_system": arrprocesslog[0].hdr_clearing_system,
                                                "dr_sort_code": arrprocesslog[0].dr_sort_code,
                                                "cr_sort_code": arrprocesslog[0].cr_sort_code,
                                                "category_purpose": arrprocesslog[0].category_purpose,
                                                "category_purpose_prty": arrprocesslog[0].category_purpose_prty,
                                                "ext_purpose_code": arrprocesslog[0].ext_purpose_code,
                                                "ext_purpose_prty": arrprocesslog[0].ext_purpose_prty,
                                                "lclinstrm": arrprocesslog[0].lclinstrm,
                                                "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur,
                                                "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt,
                                                "dbtr_iban": arrprocesslog[0].dbtr_iban,
                                                "cdtr_iban": arrprocesslog[0].cdtr_iban,
                                                "dbtr_name": arrprocesslog[0].dbtr_acct_name,
                                                "cdtr_name": arrprocesslog[0].cdtr_acct_name,
                                                "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id,
                                                "charge_bearer": arrprocesslog[0].charge_bearer,
                                                "txid": arrprocesslog[0].txid,
                                                "uetr": arrprocesslog[0].uetr,
                                                "message_data": arrprocesslog[0].message_data,
                                                "process_type": arrprocesslog[0].process_type,
                                                "status": params.STATUS,
                                                "process_status": params.ELIGIBLE_PROCESS_STATUS,
                                                "process": "",
                                                "active_status": "",
                                                "npsstrrd_refno": arrRefno[0].npsstrrd_refno,
                                                "process_name": "CC Posting",
                                                "request_data_json": ""
                                            }
                                        }
                                    },  headers: {
                                              'Content-Type': 'application/json'
                                            }
                                }



                                console.log('------------API JSON-------' + JSON.stringify(options));
                                reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                    if (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                        sendResponse(error, null);
                                    } else {
                                        responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                        console.log("------API CALL SUCCESS----");
                                        callbackapi(responseBodyFromImagingService)
                                    }
                                });

                            } catch (error) {
                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                sendResponse(error, null);
                            }
                        }
                        //Execute Query Function
                        function ExecuteQuery1(query, callback) {
                            reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                                try {
                                    if (error) {
                                        sendResponse(error, null);
                                    } else {
                                        if (result.rows.length > 0) {
                                            callback(result.rows);
                                        } else {
                                            callback([]);
                                        }
                                    }
                                } catch (error) {
                                    sendResponse(error, null);
                                }
                            });
                        }

                        //Send Response Function Definition
                        function sendResponse(error, response) {
                            try {
                                if (error) {
                                    reqTranDBInstance.Commit(mTranConn, false, function callbackres(res) {
                                        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10005', '', error);
                                    });
                                } else {
                                    reqTranDBInstance.Commit(mTranConn, true, function callbackres(res) {
                                        reqInstanceHelper.SendResponse(serviceName, appResponse, response, objSessionLogInfo)
                                    });
                                }
                            } catch (error) {
                                reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10004', 'ERROR IN SEND RESPONSE FUNCTION : ', error);
                            }
                        }
                    } catch (error) {
                        sendResponse(error, null);
                    }
                })
            })
        } catch (error) {
            sendResponse(error, null);
        }
    })





}
catch (error) {
    sendResponse(error, null);
}






});

module.exports = app;
