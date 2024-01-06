var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    


    /*  Created By :   Daseen
    Created Date :7/1/2022
    Modified By : Siva Harish
    Reason for : Dynamic process name taken on 06/01/2023 by Daseen
     
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
                    var TakeCometo = `select param_value from CORE_NS_PARAMS  where process_name = '${params.processName}' and param_name = 'COMM_TO' and need_sync = 'Y'`
                    ExecuteQuery1(TakeCometo, function (arrcomto) {
                        var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name =  '${params.processName}'  and param_name = 'ORIGIN' and need_sync = 'Y'`
                        ExecuteQuery1(Takeorg, function (arrorg) {
                            var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name =  '${params.processName}'  and param_name = 'COMM_GROUP' and need_sync = 'Y'`
                            ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name =  '${params.processName}'  and param_name = 'COMM_CC' and need_sync = 'Y'`
                                ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                    var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name =  '${params.processName}'  and param_name = 'COM_CATEGORY' and need_sync = 'Y'`
                                    ExecuteQuery1(TakecomCat, function (arrCatgory) {
                                        var TakeIntvl = `select param_value from CORE_NS_PARAMS  where process_name =  '${params.processName}'  and param_name = 'CHECK_INTERVAL' and need_sync = 'Y'`
                                        ExecuteQuery1(TakeIntvl, function (arrintvl) {
                                            if (arrintvl.length > 0) {
                                                var Takefrq = `select param_value from CORE_NS_PARAMS  where process_name =  '${params.processName}'  and param_name = 'CHECK_FREQ' and need_sync = 'Y'`
                                                ExecuteQuery1(Takefrq, function (arrfrq) {
                                                    if (arrfrq.length > 0) {
                                                        var objtrndetail = [{
                                                            TO: arrcomto.length > 0 ? arrcomto[0].param_value : '',
                                                            CC: arrcomcc.length > 0 ? arrcomcc[0].param_value : '',
                                                            BCC: '',
                                                            ORIGIN: arrorg.length > 0 ? arrorg[0].param_value : '',
                                                            COMM_GROUP: arrcomgp.length > 0 ? arrcomgp[0].param_value : ''
                                                           
                                                        }]
                                                        var checkData = `SELECT CREATED_DATE_UTC ,NOW()::timestamp,NOW()::timestamp - INTERVAL '${arrintvl[0]["param_value"]} ${arrfrq[0]["param_value"]}' before_hour,* FROM npss_trn_process_log   WHERE status='${params.status}'   and CREATED_DATE_UTC between NOW()::timestamp - INTERVAL '${arrintvl[0]["param_value"]} ${arrfrq[0]["param_value"]}' and now()::timestamp  ORDER BY CREATED_DATE_UTC DESC`
                                
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
                                
                                                                                        "TEMPLATECODE": arrCatgory.length > 0 ? arrCatgory[0]["param_value"] : '',
                                
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
                                                        reqInstanceHelper.PrintInfo(serviceName, ".....................CHECK_Frequency NO Data FOUND in CORE_NS_PARAMS.................", objSessionLogInfo);
                                                        objresponse.status = 'FAILURE';
                                                        objresponse.msg = 'CHECK_Frequency NO Data FOUND in CORE_NS_PARAMS';
                                                        sendResponse(null, objresponse)
                                                    }

                                                })
                                            } else {
                                                reqInstanceHelper.PrintInfo(serviceName, ".....................CHECK_INTERVAL NO Data FOUND in CORE_NS_PARAMS.................", objSessionLogInfo);
                                                objresponse.status = 'FAILURE';
                                                objresponse.msg = 'CHECK_INTERVAL NO Data FOUND in CORE_NS_PARAMS';
                                                sendResponse(null, objresponse)
                                            }

                                        })

                                    })
                                })
                            })
                        })
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
