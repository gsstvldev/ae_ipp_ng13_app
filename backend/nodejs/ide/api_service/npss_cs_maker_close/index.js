var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    /*  Created By :   Daseen
    Created Date :06/03/2023
      Modified By : Siva Harish
    Modified Date :25/04/2023 
    Reason for : 
       Modified By : Suresh
    Modified Date :21/03/2024 
    Reason for : new insert NPSS_TRN_PROCESS_LOG
    */
    var uuid = require('uuid');
    var serviceName = ' NPSS (CS) Maker Close'; //service name 
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
            objSessionLogInfo.HANDLER_CODE = ' NPSS (CS) Maker Close';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = ' NPSS (CS) Maker Close';
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
                                msg_id =uuid.v1()
                                if (params.Tran_id) {
                                    var uptTrnqry
                                    if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') {
                                        uptTrnqry = `update npss_transactions set maker = '${params.CREATED_BY_NAME}',status='${success_status}',process_status='${success_process_status}',remarks = '${params.remarks}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id in` + TempTranID;
                                    } else {
                                        uptTrnqry = `update npss_transactions set checker = '${params.CREATED_BY_NAME}',status='${success_status}',process_status='${success_process_status}',remarks = '${params.remarks}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id in` + TempTranID;
                                    }
                                    ExecuteQuery(uptTrnqry, async function (trnRes) {
                                        if (trnRes == "SUCCESS") {
                                            //objresponse.status = 'SUCCESS';
                                            //sendResponse(null, objresponse);
                                            var insertlog = await ProcessInstData(success_status, success_process_status,msg_id)
                                            if (insertlog.length > 0) {
                                                objresponse.data = 'SUCCESS';
                                                objresponse.status = 'SUCCESS';
                                                sendResponse(null, objresponse);
                                            }
                                            else {
                                                objresponse.data = 'FAILURE';
                                                objresponse.status = ' Error in NPSS_TRN_PROCESS_LOG Table insert';
                                                sendResponse(null, objresponse);
                                            }
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
                        function ProcessInstData(success_status, success_process_status,msg_id) {
                            return new Promise((resolve, reject) => {
                                var arrCusTranInst = [];
                                var objCusTranInst = {};
                                objCusTranInst.MSG_ID = msg_id;
                                objCusTranInst.uetr=params.uetr||''
                                objCusTranInst.PRCT_ID = PRCT_ID;
                                objCusTranInst.PROCESS_TIME = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                objCusTranInst.PROCESS_NAME = ''
                                objCusTranInst.PROCESS_STATUS = success_process_status;
                                objCusTranInst.STATUS = success_status;
                                objCusTranInst.TENANT_ID = params.TENANT_ID;
                                objCusTranInst.APP_ID = params.APP_ID
                                objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                                objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                                objCusTranInst.DT_DESCRIPTION = ''
                                objCusTranInst.DTT_DESCRIPTION = ''
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
                                _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(logInsertRes) {
                                    resolve(logInsertRes)
                                })
                            })
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

            });
        } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }

    })


});

module.exports = app;
