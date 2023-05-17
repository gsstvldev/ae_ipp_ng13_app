var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    




    /*  Created By :   Siva Harish
    Created Date :7/1/2022
    Modified By : Siva Harish
    Modified Date : 17/05/2023
    Reason for : 
     
    */
    var serviceName = 'NPSS (S) Communication Send CBUAE Not Available Pulse Check Mail';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Communication Send CBUAE Not Available Pulse Check Mail';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (S) Communication Send CBUAE Not Available Pulse Check Mail';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                try {
                    var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync = 'Y'`
                    var TakeCometo = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_TO' and need_sync = 'Y'`
                    ExecuteQuery1(takeurl, function (arrUrl) {
                        if (arrUrl.length > 0) {
                            ExecuteQuery1(TakeCometo, function (arrcomto) {
                                var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN' and need_sync = 'Y'`
                                ExecuteQuery1(Takeorg, function (arrorg) {
                                    var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_GROUP' and need_sync = 'Y'`
                                    ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                        var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_CC' and need_sync = 'Y'`
                                        ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                            var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_CATEGORY' and need_sync = 'Y'`
                                            ExecuteQuery1(TakecomCat, function (arrCatgory) {
                                                var Takedata = `select uetr from npss_transactions order by created_date desc`
                                                ExecuteQuery1(Takedata, function (arrData) {
                                                    if (arrData.length > 0) {
                                                        var checkData = `select * from npss_trn_process_log where status = '${params.status}' and process_status = '${params.process_status}' and uetr = '${arrData[0].uetr}' order by created_date desc`
                                                        ExecuteQuery1(checkData, function (trnprslog) {
                                                            if (trnprslog.length) {
                                                                try {
                                                                    var frtodata = [{
                                                                        TO: arrcomto.length > 0 ? arrcomto[0].param_value : '',
                                                                        CC: arrcomcc.length > 0 ? arrcomcc[0].param_value : '',
                                                                        BCC: '',
                                                                        ORIGIN: arrorg.length > 0 ? arrorg[0].param_value : '',
                                                                        COMM_GROUP: arrcomgp.length > 0 ? arrcomgp[0].param_value : ''
                                                                    }]
                                                                    var trndetail = JSON.stringify(frtodata)
                                                                    var request = require('request');

                                                                    var options = {
                                                                        url: arrUrl[0].param_detail,
                                                                        timeout: 18000000,
                                                                        method: 'POST',
                                                                        json: {
                                                                            "PARAMS": {

                                                                                "WFTPA_ID": "DEFAULT",

                                                                                "PRCT_ID": "",

                                                                                "EVENT_CODE": "DEFAULT",

                                                                                "USER_EMAIL": "",

                                                                                "USER_MOBILE": "",

                                                                                "TRN_DETAILS": trndetail,

                                                                                "TEMPLATECODE": arrCatgory[0].param_value,

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
                                                                            "session-id": params.session_id,
                                                                            "routingKey": params.routingKey,
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

                                                            } else {
                                                                reqInstanceHelper.PrintInfo(serviceName, ".....................NO Data FOUND in Trn process log.................", objSessionLogInfo);
                                                                objresponse.status = 'FAILURE';
                                                                objresponse.msg = 'NO Tran FOUND in table';
                                                                sendResponse(null, objresponse)
                                                            }

                                                        })
                                                    } else {
                                                        reqInstanceHelper.PrintInfo(serviceName, ".....................NO Tran FOUND in table.................", objSessionLogInfo);
                                                        objresponse.status = 'FAILURE';
                                                        objresponse.msg = 'NO Tran FOUND in table';
                                                        sendResponse(null, objresponse)
                                                    }

                                                })

                                            })






                                        })

                                    })
                                })
                            })
                        } else {
                            reqInstanceHelper.PrintInfo(serviceName, ".....................Url Not Found.................", objSessionLogInfo);
                            objresponse.status = 'FAILURE';
                            objresponse.msg = 'Url Not Found';
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
