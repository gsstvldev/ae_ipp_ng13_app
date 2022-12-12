var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
   /*  Created By :     Siva Harish
Created Date : 
Modified By : 
Modified Date : 
Reason for : 
* 
*/
var serviceName = 'NPSS Show Table'; //service name 
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
        objSessionLogInfo.HANDLER_CODE = 'NPSS Show Table';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSS Show Table';
        // Get DB Connection 
        reqTranDBInstance.GetTranDBConn(headers, true, function (pSession) {
            mTranConn = pSession; //  assign connection 
            //get prct id                              
            try {
                var TakeresponseJson = `select response_data_json from npss_core_api_process_log where npsscapl_id = '${params.Id}'`
                //function to execute query 
                ExecuteQuery1(TakeresponseJson, function (arrresult) {
                    if (arrresult.length) {
                        objresponse.status = 'SUCCESS'
                        objresponse.data = arrresult[0].response_data_json
                        sendResponse(null, objresponse);
                    } else {
                        objresponse.status = 'No Data In Transaction Table';
                        sendResponse(null, objresponse);
                    }

                });


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
                            sendResponse(errro);
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

        });
    } catch (error) {
        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
    }
});



});

module.exports = app;
