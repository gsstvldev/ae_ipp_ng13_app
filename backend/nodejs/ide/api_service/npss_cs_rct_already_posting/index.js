var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    

    /*  Created By : Siva   Harish
    Created Date :19/11/2022
    Modified By : 
    Modified Date : 
    Reason for : 
     
    */
    var serviceName = 'NPSS RCT Already Posting';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var success_process_status, success_status;
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS RCT Already Posting';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS RCT Already Posting';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {
                        var PRCT_ID = prct_id
                        try {
                            if (Array.isArray(params.Id)) {
                                arrTranID = params.Id.map(function (eachTran) { return eachTran.toString(); });
                            }
                            else {
                                arrTranID = [params.Id.toString()];
                            }
                            TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                            //  var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}'`
                            var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}' and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                            ExecuteQuery1(ruleqry, function (result) {
                                if (result.length) {
                                    success_process_status = result[0].success_process_status;
                                    success_status = result[0].success_status;
                                    var updtranqry
                                    if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') {
                                        updtranqry = `update npss_transactions set maker = '${params.CREATED_BY_NAME}', cbs_ref_no = '${params.Refno}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id in${TempTranID} `
                                    }else{
                                        updtranqry = `update npss_transactions set  checker = '${params.CREATED_BY_NAME}',cbs_ref_no = '${params.Refno}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id in${TempTranID} `
                                    }
                                   
                                    ExecuteQuery(updtranqry, function (tranresult) {
                                        if (tranresult == 'SUCCESS') {
                                           //var updprclogqry = `update npss_trn_process_log set  status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where uetr='${params.UETR}' `
                                            //ExecuteQuery(updprclogqry, function (prclogresult) {
                                             //   if (prclogresult == 'SUCCESS') {
                                                    objresponse.status = 'SUCCESS';
                                                    sendResponse(null, objresponse)
                                               // }
                                               // else {
                                              //      console.log("Error in Process Log Updation");
                                               //     objresponse.status = 'FAILURE';
                                              //      sendResponse(null, objresponse)
                                              //  }

                                           // })




                                        }
                                        else {
                                            console.log("Error in update transaction");
                                            objresponse.status = 'FAILURE';
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                }
                                else {
                                    console.log("No data Found In Rule Code");
                                    objresponse.status = 'FAILURE';
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














});

module.exports = app;
