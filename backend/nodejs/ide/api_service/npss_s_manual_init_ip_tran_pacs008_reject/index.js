var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {







    /*  Created By :Daseen
    Created Date :27/02/2024
    
    }
    */
    var serviceName = 'NPSS (S) Manual Initiation IP Tran Eligible for Pacs008 Reject Case';

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
    const schedule = require('node-schedule');
    const { reject } = require('lodash');
    var mTranConn = "";
    var producer
    var task;
    const { v4: uuidv4 } = require('uuid');
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Manual Initiation IP Tran Eligible for Pacs008 Reject Case';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (S) Manual Initiation IP Tran Eligible for Pacs008 Reject Case';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    try {
                        var PRCT_ID = prct_id
                        var TakeStsPsts = `select success_process_status,success_status,eligible_status,eligible_process_status from core_nc_workflow_setup where rule_code = '${params.rule_code}' and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                      
                        ExecuteQuery1(TakeStsPsts, function (arrSts) {
                            if (arrSts.length > 0) {
                                var Takedata =  `SELECT npsst_id,uetr FROM npss_transactions  WHERE process_type = 'IP'   AND uetr IN (   SELECT additional_info     FROM npss_trn_process_log   WHERE uetr IN (   SELECT uetr     FROM npss_transactions WHERE process_status = '${arrSts[0].eligible_process_status}'  AND status = '${arrSts[0].eligible_status}' AND process_group = 'MANUAL'   )    AND process_name = 'Initiate Dispute Tran'  AND status = 'OP_RCT_RET_INITIATED'     )`
                               

                                ExecuteQuery1(Takedata, async function (arruetrData) {
                                    if (arruetrData.length > 0) {
                                        
                                        let upadatests = await updateTran('(' + arruetrData.map((x) => x.npsst_id) + ')', arrSts[0].success_status, arrSts[0].success_process_status)
                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------No  data found in Tran IP-------', objSessionLogInfo);
                                        objresponse.status = 'FAILURE';
                                        sendResponse(null, objresponse)
                                    }

                                })



                            } else {
                                reqInstanceHelper.PrintInfo(serviceName, '------------API Url Not Found-------', objSessionLogInfo);
                                objresponse.status = 'FAILURE';
                                sendResponse(null, objresponse)
                            }
                        })

                        function updateTran(subquery, final_status, final_process_status) {
                            return new Promise((resolve, reject) => {
                                let tranUpdt = `update npss_transactions set status='${final_status}' ,process_status='${final_process_status}'where npsst_id in ${subquery}`
                                ExecuteQuery(tranUpdt, function (arrresult) {
                                    if (arrresult == 'SUCCESS') {
                                        objresponse.status = 'SUCCESS';
                                        sendResponse(null, objresponse)
                                    }

                                    else {
                                        objresponse.status = 'FAILURE';
                                        sendResponse(null, objresponse)
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
