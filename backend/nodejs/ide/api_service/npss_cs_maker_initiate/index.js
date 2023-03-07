var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
/*  Created By :   Daseen
    Created Date :06/03/2023
    Modified By : 
    Modified Date : 
     Reason for : 
    * 
    */
    var serviceName = ' NPSS (CS) Maker Initiate'; //service name 
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog'); //audit log information
    var reqFXDBInstance = require($REFPATH + 'instance/DBInstance'); // casandra db pointing
    var reqInsHelper = require($REFPATH + 'common/InstanceHelper'); //  Response,error,info msg printing        
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter'); //date formatter
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    console.log("app headers=====================>", appRequest.headers);
    var headers = appRequest.headers; // header details 
    // headers["session-id"] = "STATIC-SESSION-KEEQB-4";
    console.log("headers after adding session id ========>", headers);

    var objSessionLogInfo = null; // set value is null
    var mTranConn = "";
    var request = require('request');
    var momentTimezone = require("moment-timezone");
    var success_status, success_process_status;
    var elgobj = {};
    var arrTranId
    //console.log('**************************' + headers['session-id'])
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
            objSessionLogInfo.HANDLER_CODE = ' NPSS (CS) Maker Initiate';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = ' NPSS (CS) Maker Initiate';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection 
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    var PRCT_ID = prct_id
                    //get prct id                              
                    try {
                        var take_status = `Select success_process_status,success_status from core_nc_workflow_setup where rule_code='${params.rule_code}' and eligible_status='${params.eligible_status}' and  eligible_process_status='${params.eligible_process_status}'`;
                        if (Array.isArray(params.Tran_id)) {
                            arrTranID = params.Tran_id.map(function (eachTran) { return eachTran.toString(); });
                        }
                        else {
                            arrTranID = [params.Tran_id.toString()];
                        }
                        TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                       // TempTranID = '('  + arrTranID.toString().split(',').join("','")  + ')';
                        ExecuteQuery1(take_status, function (arrSts) {
                            if (arrSts.length) {
                                success_status = arrSts[0].success_status;
                                success_process_status = arrSts[0].success_process_status;
                                if (params.Tran_id) {
                                    var uptTrnqry = `update npss_transactions set status='${success_status}',process_status='${success_process_status}' ,MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id in` + TempTranID;
                                    ExecuteQuery(uptTrnqry, function (trnRes) {
                                        if (trnRes == "SUCCESS") {

                                            objresponse.status = 'SUCCESS';
                                            sendResponse(null, objresponse);
                                        }
                                        else {
                                            objresponse.status = 'Error in Transaction  Table update';
                                            objresponse.data = 'Error in Transaction  Table update';
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                } else {
                                    objresponse.status = 'No Transaction Found';
                                    objresponse.data = 'No Transaction Found';
                                    sendResponse(null, objresponse)
                                }


                            } else {
                                objresponse.status = '"No Rule found in Workflow Table'
                                objresponse.data = "No Rule found in Workflow Table"
                                sendResponse(null, objresponse)
                            }
                        }

                        )

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

                        //fucntion to execute select query
                        function ExecuteQuery1(query, callback) {
                            reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                                try {
                                    if (error) {
                                        //reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, "IDE_SERVICE_10005", "ERROR IN EXECUTE QUERY EXECUTION FUNCTION", error);
                                        sendResponse(error);
                                    } else {
                                        if (result.rows.length > 0) {
                                            callback(result.rows);
                                        } else {
                                            callback([]);
                                        }
                                    }
                                } catch (error) {
                                    //reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, "IDE_SERVICE_10004", "ERROR IN EXECUTE QUERY FUNCTION", error);
                                    sendResponse(error);
                                }
                            });
                        }


                    } catch (error) {
                        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10003', 'ERROR IN DB CONNECTION FUNCTION', error);
                    }
                })
                //send response fucntion
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

            });
        } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }

    })


});

module.exports = app;
