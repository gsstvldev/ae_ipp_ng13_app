
/*  Created By : Siva Harish
Created Date :14/12/2022
Modified By : 
Modified Date : 
Reason for : 
 
*/
var serviceName = 'IP REV Reject INAU Reserve Fund';
var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
var reqXlsx = require('node-xlsx').default;
var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
var params = appRequest.body.PARAMS; //  Client input fromm Server
var headers = appRequest.headers; // header details 
var objSessionLogInfo = null; // set value is null
var fs = require("fs");
var reqAsync = require('async');
var success_process_status, success_status;
var Id = params.Id;
var dt_code, dtt_code;
var mTranConn = "";
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
        objSessionLogInfo.HANDLER_CODE = 'IP REV Reject INAU Reserve Fund';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'IP REV Reject INAU Reserve Fund';
        // Get DB Connection 
        reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
            mTranConn = pSession; //  assign connection     
            reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                if (error) {
                    sendResponse(error);
                } else {
                    var PRCT_ID = prct_id
                    var ApitrnId
                    var app_id
                    try {
                       // var takeerrordesc = `select error_description from core_nc_error_codes where product_code = '${params.PROD_CODE}' and error_code = '${params.ResonCode}'`                      
                        var seltranqry = `select * from npss_transactions where npsst_id='${params.Id}'`
                        var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}'and eligible_process_status='${params.eligible_process_status}'and eligible_status='${params.eligible_status}'`                  
                        ExecuteQuery1(ruleqry, function (result) {
                            if (result.length) {

                                success_process_status = result[0].success_process_status;
                                success_status = result[0].success_status;
                                ExecuteQuery1(seltranqry, function (arrTran) {
                                    var arrCusTranInst = [];
                                    var objCusTranInst = {};
    
                                    objCusTranInst.MSG_ID = arrTran[0].hdr_msg_id;
                                    objCusTranInst.PRCT_ID = PRCT_ID;
                                    objCusTranInst.REVERSAL_CODE = params.reversalcode
                                    objCusTranInst.UETR = arrTran[0].uetr;
                                    objCusTranInst.NPSSTRRD_REFNO = arrTran[0].tran_ref_id;
                                    objCusTranInst.PROCESS_NAME = 'Reject Reversal'
                                    objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
                                    objCusTranInst.PROCESS_STATUS = success_process_status;
                                    objCusTranInst.STATUS = success_status;
                                    objCusTranInst.TENANT_ID = params.TENANT_ID;
                                    objCusTranInst.T24_RETURN_CODE = params.T24_Return_code;
                                    objCusTranInst.CBUAE_RETURN_CODE = params.CBUAE_RETURN_CODE;
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
                                })
                               
                                _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTranInsertRes) {
                                    if (CusTranInsertRes.length > 0) {
                                        var updtranqry = `update npss_transactions set  status='${success_status}',process_status='${success_process_status}',remarks = '${params.ResonCode}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id='${params.Id}' `
                                        ExecuteQuery(updtranqry, function (tranresult) {
                                            if (tranresult == 'SUCCESS') {
                                                objresponse.status = 'SUCCESS';
                                                sendResponse(null, objresponse)
                                                                         
                                            }
                                            else {
                                                console.log("Error in update transaction");
                                                objresponse.status = 'No Tran Update in NPSS Transactions Table';
                                                sendResponse(null, objresponse)
                                            }
                                        })
                                    }
                                })
                               
                            }
                            else {
                                console.log("No data Found In Rule Code");
                                objresponse.status = 'No data Found In Rule Code';
                                sendResponse(null, objresponse)
                            }

                        })


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










