var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


    /*  Created By :   Daseen
    Created Date :7/1/2022
    Modified By : 
    Modified Date : 
    Reason for : 
     
    */
    var serviceName = 'NPSS (S) Comm CBUAE Pulse Check';
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
    var moment = require('moment')
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Comm CBUAE Pulse Check';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (S) Comm CBUAE Pulse Check';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection     
                try {
                    var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync = 'Y'`
                    var TakeprocessNameData = `select param_name,param_value,process_name from core_ns_params where need_sync = 'Y' and  param_name in ('CHECK_FREQ','CHECK_INTERVAL','COMM_CC','COMM_GROUP','COMM_TO','ORIGIN','COM_CATEGORY')and process_name ='CBUAE_NOT_AVAILABLE' order by param_name asc`
                    ExecuteQuery1(TakeprocessNameData, function (arrprsname) {
                        if (arrprsname.length == 7) {
                            var objtrndetail = [{

                                "TO": arrprsname[4]["param_value"],
                                "CC": arrprsname[2]["param_value"],
                                 "BCC":'',
                                "ORIGIN": arrprsname[6]["param_value"],
                                "COMM_GROUP": arrprsname[3]["param_value"]
                                // "EMAIL_ID":arrprsname[4]["param_value"],
                            }]
                            var checkData = `SELECT CREATED_DATE_UTC ,NOW()::timestamp,NOW()::timestamp - INTERVAL '${arrprsname[1]["param_value"]} ${arrprsname[0]["param_value"]}' before_hour,* FROM npss_trn_process_log   WHERE status='${params.status}'   and CREATED_DATE_UTC between NOW()::timestamp - INTERVAL '${arrprsname[1]["param_value"]} ${arrprsname[0]["param_value"]}' and now()::timestamp  ORDER BY CREATED_DATE_UTC DESC`

                            ExecuteQuery1(checkData, function (trnprslog) {
                                if (trnprslog.length == 0) {
                                    ExecuteQuery1(takeurl, function (arrurl) {
                                        if (arrurl.length) {
                                            try {

                                                var request = require('request');

                                                var options = {
                                                    url: arrurl[0].param_detail,
                                                    timeout: 18000000,
                                                    method: 'POST',
                                                    json: {
                                                        "PARAMS": {

                                                            "WFTPA_ID": "DEFAULT",

                                                            "PRCT_ID": "",

                                                            "EVENT_CODE": "DEFAULT",

                                                            "USER_EMAIL": "",

                                                            "USER_MOBILE": "",

                                                            
                                                            "TRN_DETAILS": JSON.stringify(objtrndetail),

                                                            "TEMPLATECODE": arrprsname[5]["param_value"],

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
                                                        "session-id": "STATIC-SESSION-NPSS",
                                                        "routingKey": "CLT-0~APP-0~TNT-0~ENV-0",
                                                        'Content-Type': 'application/json'

                                                    }
                                                }



                                               
                                                reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                request(options, function (error, responseFromImagingService, responseBody) {

                                                    if (error) {
                                                        reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                        sendResponse(error, null);
                                                    } else {

                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBody, objSessionLogInfo);
                                                        
                                                        objresponse.status = 'SUCCESS';

                                                        sendResponse(null, objresponse)


                                                    }
                                                });

                                            } catch (error) {
                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                sendResponse(error, null);
                                            }
                                        }
                                        else {
                                            reqInstanceHelper.PrintInfo(serviceName, ".....................NO URL FOUND in Trn process log.................", objSessionLogInfo);
                                            objresponse.status = 'FAILURE';
                                            objresponse.msg = 'NO URL FOUND in table';
                                            sendResponse(null, objresponse)
                                        }
                                    })

                                } else {
                                    reqInstanceHelper.PrintInfo(serviceName, ".....................NO Data FOUND in Trn process log.................", objSessionLogInfo);
                                    objresponse.status = 'FAILURE';
                                    objresponse.msg = 'NO Tran FOUND in table';
                                    sendResponse(null, objresponse)
                                }

                            })



                        } else {
                            reqInstanceHelper.PrintInfo(serviceName, "........................ NO FOUND FOR THIS PROCESS NAME...............", objSessionLogInfo);
                            objresponse.status = 'FAILURE';
                            objresponse.msg = 'NO FOUND FOR THIS PROCESS NAME';
                            sendResponse(null, objresponse)
                        }

                    })

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
