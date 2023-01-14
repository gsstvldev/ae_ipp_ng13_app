var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    try {
        /*   Created By : Siva Harish M
        Created Date :23-11-2022
        Modified By :Siva Harish M
        Modified Date :25-11-2022
   
        Reason for : 
        */
        var serviceName = 'Torus (CS) Change RoutingKey';
        var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
        var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
        var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
        var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
        var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
        var params = appRequest.body.PARAMS; //  Client input fromm Server
        var headers = appRequest.headers; // header details 
        var objSessionLogInfo = null; // set value is null

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
                objSessionLogInfo.HANDLER_CODE = 'Torus (CS) Change RoutingKey';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'Torus (CS) Change RoutingKey';
                var cus_iban;
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, true, async function (pSession) {
                    mTranConn = pSession; //  assign connection     

                    try {
                        var routingsetup = `Select * from CORE_ROLE_LISTING_PARAMS where role_id = '${params.roleid}' and vph_app_code = '${params.AppCode}' and screen_name = '${params.screenname}'`;
                        var getDpcode = `select channel_department_code from CORE_NC_LISTING_MODE_SETUP where user_role = '${params.roleid}' and screen = '${params.screenname}'`
                        var getRoutingKey = await runquery(routingsetup)
                        var getDepartmentCode = await runquery(getDpcode)
                        var result = {
                            'status': 'SUCCESS',
                            'routingkey': getRoutingKey,
                            'Departmentcode': getDepartmentCode
                        }

                        reqInstanceHelper.SendResponse(serviceName, appResponse, result, objLogInfo);

                        async function runquery(query) {
                            return new Promise((resolve, reject) => {
                                ExecuteQuery1(query, function (arrResult) {
                                    try {
                                        if (arrResult.length) {
                                            resolve(arrResult)
                                        } else {
                                            resolve([])
                                        }
                                    } catch (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, 'Exception occured ' + error, objLogInfo);
                                        reqInstanceHelper.SendResponse(serviceName, appResponse, '', objLogInfo, 'ERR-002', 'Exception occured  ', error, 'FAILURE');
                                    }

                                })
                            })
                        }






                        //Execute Query Function
                        function ExecuteQuery1(query, callback) {
                            reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                                try {
                                    if (error) {
                                        sendResponse(error, null);
                                    } else {
                                        if (result.rows.length > 0) {
                                            callback(result.rows);
                                        } else {
                                            callback([]);
                                        }
                                    }
                                } catch (error) {
                                    sendResponse(error, null);
                                }
                            });
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
                    } catch (error) {
                        sendResponse(error, null);
                    }

                })
            } catch (error) {
                sendResponse(error, null);
            }
        })





    }
    catch (error) {
        sendResponse(error, null);
    }














});

module.exports = app;
