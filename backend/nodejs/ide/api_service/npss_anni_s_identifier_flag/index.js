var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    /*  Created By :   Siva Harish
    Created Date :19/07/2023
      Modified By : 
    Modified Date :
    Reason for : 
    * 
    */
    var serviceName = ' NPSS ANNI (S) Identifier Flag'; //service name 
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog'); //audit log information
    var reqFXDBInstance = require($REFPATH + 'instance/DBInstance'); // casandra db pointing
    var reqInsHelper = require($REFPATH + 'common/InstanceHelper'); //  Response,error,info msg printing        
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter'); //date formatter
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 

    var objSessionLogInfo = null; // set value is null
    var mTranConn = "";
    var request = require('request');
    
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
            objSessionLogInfo.HANDLER_CODE = ' NPSS ANNI (S) Identifier Flag';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = ' NPSS ANNI (S) Identifier Flag';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection 
             
                    //get prct id                              
                    try {
                        let callFunction =`select fn_aani_process()`
                        ExecuteQuery1(callFunction, function (arrSts) {
                            try{
                                reqInstanceHelper.PrintInfo(serviceName, '------------Procedure Response-------' + arrSts, objSessionLogInfo);
                                objresponse.status = 'SUCCESS'
                                objresponse.result = arrSts
                                sendResponse(objresponse)
                            }catch(error){
                                objresponse.status = 'Failure'
                                objresponse.result = error
                                sendResponse(objresponse)
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
