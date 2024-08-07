var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


    /*   Created By :  Daseen
    Created Date : 09/12/2022
    Modified By : 
    Modified Date : 
    Reason for : 
     
    */
    var serviceName = 'NPSS BCT Timeout Retry';
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
        'data': '',
        'msg': ''
    }; // Response to   Client
    // Assign function for loginformation and session info
    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
        try {
            objSessionLogInfo = objLogInfo; // Assing log information
            // Log Viewer Setup
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) BCT Timeout Retry';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) BCT Timeout Retry';
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
                        var final_status
                        var final_process_status
                        try {
                            try {
                                // var TakeStsPsts = `select * from npss_transactions where npsst_id = '${params.Tran_Id}'`
                                //var TakeReasonCode = `select cbuae_return_code from npss_trn_process_log where npsstpl_id = '${params.npsstpl_id}'`
                                var TakeFinalStatus = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = '${params.Rule_Code}' and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                                //  var TakeapiUrl = `Select param_detail from core_nc_system_setup where param_category = 'NPSS_RETURN_PACK004' and param_code = 'URL'`
                                ExecuteQuery1(TakeFinalStatus, function (arrStatus) {
                                    if (arrStatus.length > 0) {
                                        final_status = arrStatus[0].success_status
                                        final_process_status = arrStatus[0].success_process_status
                                        var UpdateTrnTble = `Update npss_transactions set status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
                                        ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                            if (arrUpdTranTbl == 'SUCCESS') {
                                                objresponse.status = 'SUCCESS';
                                                sendResponse(null, objresponse);
                                            } else {
                                                objresponse.status = 'No Data Update In Transaction Table';
                                                sendResponse(null, objresponse);

                                            }
                                        })
                                    } else {
                                        objresponse.status = 'No Rule Code Found';
                                        sendResponse(null, objresponse);
                                    }
                                })

                            } catch (error) {
                                sendResponse(error)
                            }
                            // });

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
                                            sendResponse(error);
                                        } else {
                                            callback("SUCCESS");
                                        }
                                    } catch (error) {
                                        sendResponse(error);
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
                              
                                    reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10005', '', error);
                               
                            } else {
                                
                                    reqInstanceHelper.SendResponse(serviceName, appResponse, response, objSessionLogInfo)
                               
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
