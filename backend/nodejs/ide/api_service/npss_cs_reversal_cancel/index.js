var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


/*  Created By :sIVA hARISH
Created Date : 16-12-2022
Modified By : 
Modified Date : 
   Reason for : 
 
*/
var serviceName = 'NPSS Reversal Cancel';
var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
var params = appRequest.body.PARAMS; //  Client input fromm Server
var headers = appRequest.headers; // header details 
var objSessionLogInfo = null; // set value is null
var reqAsync = require('async');
var mTranConn = "";
var objresponse = {
    'status': 'FAILURE',
    'data': {},
    'msg': ''
}; // Response to Client
// Assign function for loginformation and session info
reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
    try {
        objSessionLogInfo = objLogInfo; // Assing log information
        // Log Viewer Setup
        objSessionLogInfo.HANDLER_CODE = 'NPSS Reversal Cancel';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSS Reversal Cancel';
        // Get DB Connection 
        reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
            mTranConn = pSession; //  assign connection     
            reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                if (error) {
                    sendResponse(error);
                } else {
                    var PRCT_ID = prct_id
                    var success_process_status
                    var success_status
                    try {
                        var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}'`
                        var take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_REVERSAL_CANCEL' and param_code='URL'`;
                        // Take Value from API Manager Table

                        ExecuteQuery1(ruleqry, function (arrrule) {
                            try {
                                if (arrrule.length > 0) {
                                    success_process_status = arrrule[0].success_process_status;
                                    success_status = arrrule[0].success_status;
                                    var TakedatafrmTrn = `select * from npss_transactions where npsst_id = '${params.Id}'`

                                    ExecuteQuery1(TakedatafrmTrn, function (arrdata) {
                                        if (arrdata.length > 0) {
                                            ExecuteQuery1(take_api_url, function (arrUrl) {
                                                if (arrUrl.length > 0) {
                                                    var TakeAcctInf = `select Alternate_Account_Type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrdata[0].cdtr_iban}'`
                                                    ExecuteQuery1(TakeAcctInf, function (arrcbsact) {
                                                        var arrCusTranInst = [];
                                                        var objCusTranInst = {};

                                                        objCusTranInst.MSG_ID = arrdata[0].hdr_msg_id;
                                                        objCusTranInst.PRCT_ID = PRCT_ID;
                                                        objCusTranInst.REVERSAL_CODE = params.reversalcode
                                                        objCusTranInst.UETR = arrdata[0].uetr;
                                                        objCusTranInst.NPSSTRRD_REFNO = arrdata[0].tran_ref_id;
                                                        objCusTranInst.PROCESS_NAME = 'Cancel Reversal'
                                                        objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
                                                        objCusTranInst.PROCESS_STATUS = success_process_status;
                                                        objCusTranInst.STATUS = success_status;
                                                        objCusTranInst.T24_RETURN_CODE = params.T24_RETURN_CODE;
                                                        objCusTranInst.CBUAE_RETURN_CODE = params.CBUAE_RETURN_CODE;
                                                        objCusTranInst.TENANT_ID = params.TENANT_ID;
                                                        objCusTranInst.APP_ID = '215'
                                                        objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                                                        objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                                                        objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                                                        objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                                                        objCusTranInst.CREATED_BY = params.CREATED_BY;
                                                        objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
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
                                                        _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTranInsertRes) {
                                                            if (CusTranInsertRes.length > 0) {
                                                                var Takepostrefno = `select * from npss_trn_process_log where status = 'IP_RCT_REV_INAU_POSTING_SUCCESS' and process_status = 'RCTRevINAUPostingSuccess'`
                                                                ExecuteQuery1(Takepostrefno, function (arrpostno) {
                                                                    fn_DoAPIServiceCall(arrdata, arrUrl, arrcbsact,arrpostno, function (apiresult) {
                                                                        if (apiresult === "SUCCESS") {
                                                                            var Takeurl = `Select param_detail from core_nc_system_setup where param_category = 'NPSS_REJECT_PACK002' and param_code = 'URL'`
                                                                            ExecuteQuery1(Takeurl, function (arrgeturl) {
                                                                                fn_DoAPI(arrdata, arrgeturl, function (getresult) {
                                                                                    if (getresult == 'SUCCESS') {
                                                                                        var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='RCT_REV_CANCEL_REQ'`
                                                                                        ExecuteQuery1(ruleqry, function (arrsts) {
                                                                                            var updtranqry = `update npss_transactions set  status='${arrsts[0].success_status}',process_status='${arrsts[0].success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                                                                            ExecuteQuery(updtranqry, function (uptranresult) {
                                                                                                if(uptranresult=='SUCCESS'){
                                                                                                    objresponse.status = 'SUCCESS';
                                                                                                    sendResponse(null, objresponse)
                                                                                                }
                                                                                            })
                                                                                        })
                                                                                       
                                                                                     
                                                                                    } else {
                                                                                        objresponse.status = 'Fail From Pac002';
                                                                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                                                        sendResponse(null, objresponse)
                                                                                    }
    
                                                                                })
                                                                            })
    
    
                                                                        } else {
                                                                            objresponse.status = 'Fail From T24 Unfreeze Posting';
                                                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                                            sendResponse(null, objresponse)
                                                                        }
                                                                    })
                                                                })
                                                           

                                                            } else {
                                                                objresponse.status = 'FAILURE';
                                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                                sendResponse(null, objresponse)
                                                            }

                                                        })
                                                    })


                                                } else {
                                                    objresponse.status = 'FAILURE'
                                                    objresponse.data.msg = 'No Url Found'
                                                    sendResponse(null, objresponse)
                                                }
                                            })


                                        } else {
                                            objresponse.status = 'No data found in npss tran table'
                                            sendResponse(null, objresponse)
                                        }

                                    })


                                } else {
                                    objresponse.status = 'FAILURE';
                                    objresponse.data.msg = 'No data found in core_nc_workflow_setup'
                                    sendResponse(null, objresponse)
                                }

                            } catch (error) {
                                sendResponse(error)
                            }
                        });


                        // Do API Call for Service 
                        function fn_DoAPI(trndata, url, arrActInf, callbackapi) {
                            try {

                                var request = require('request');
                                var apiURL =
                                    apiURL = url[0].param_detail // apiURL + apiName
                                var options = {
                                    url: apiURL,
                                    timeout: 18000000,
                                    method: 'POST',
                                    json: {


                                        "payload": {
                                            "hdr_settlement_date": trndata[0].hdr_settlement_date,
                                            "intrbk_sttlm_cur": trndata[0].intrbk_sttlm_cur,
                                            "intrbk_sttlm_amnt": trndata[0].intrbk_sttlm_amnt,
                                            "dbtr_iban": trndata[0].dbtr_iban,
                                            "cdtr_iban": trndata[0].cdtr_iban,

                                            "uetr": trndata[0].uetr,

                                            "posting_ref_no": arrpostno[0].process_ref_no,
                                            "dbtr_acct_name": trndata[0].dbtr_acct_name,
                                            "cdtr_acct_name": trndata[0].cdtr_acct_name,
                                            "process_type": "IP",



                                        },
                                        "AccountInformation": {
                                            "account_number": arrActInf[0].account_number || '',
                                            "company_code": arrActInf[0].company_code || '',

                                            "currency": arrActInf[0].currency || ''


                                        }
                                    },
                                    headers: {
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



                        // Do API Call for Service 
                        function fn_DoAPIServiceCall(tranresult, tplresult, url, rule_code, callbackapi) {
                            try {
                                var request = require('request');
                                var apiURL =
                                    apiURL = url // apiURL + apiName
                                var options = {
                                    url: apiURL,
                                    timeout: 18000000,
                                    method: 'POST',
                                    json: {
                                        "cr_sort_code": tranresult[0].cr_sort_code,
                                        "dr_sort_code": tranresult[0].dr_sort_code,
                                        "hdr_new_msg_id": tranresult[0].hdr_msg_id,
                                        "hdr_created_date": tranresult[0].hdr_created_date,
                                        "hdr_total_amount": tranresult[0].hdr_total_amount,
                                        "payment_endtoend_id": tranresult[0].payment_endtoend_id,
                                        "uetr": tranresult[0].uetr,
                                        "tran_ref_id": tranresult[0].tran_ref_id,
                                        "active_status": 'RJCT',
                                        "clrsysref": tranresult[0].clrsysref,
                                        "rsn_code": tplresult[0].response_code


                                    },
                                    headers: {
                                        'content-type': 'application/json'
                                    }
                                };

                                console.log('------------API JSON-------' + JSON.stringify(options));
                                reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                    if (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                        sendResponse(error);
                                    } else {
                                        console.log("------API CALL SUCCESS----");
                                        callbackapi(responseBodyFromImagingService)
                                    }
                                });
                            } catch (error) {
                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                sendResponse(error);
                            }
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

                    } catch (error) {
                        sendResponse(error)
                    }
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
            })
        })
    } catch (error) {
        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
    }
})







});

module.exports = app;
