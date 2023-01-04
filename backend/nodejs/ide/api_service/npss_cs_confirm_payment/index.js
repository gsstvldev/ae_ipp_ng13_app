var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {



    
    

    /*  Created By :   Siva Harish
Created Date : 04/01/2023
Modified By : 
Modified Date : 
Reason for : 
* 
*/
var serviceName = 'NPSS Confirm Payment'; //service name 
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
        objSessionLogInfo.HANDLER_CODE = 'NPSS Confirm Payment';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSS Confirm Payment';
        // Get DB Connection 
        reqTranDBInstance.GetTranDBConn(headers, true, function (pSession) {
            mTranConn = pSession; //  assign connection 
            //get prct id                              
            try {

                  var Takejson = `select param_value from core_rule_prod_params where rule_code = 'P2P Confirm Payment' and tenant_id = '${params.TenantId}'`
                ExecuteQuery1(Takejson, function (arrjson) {
                    if (arrjson.length) {
                        var JsonValue = JSON.parse(arrjson[0].param_value)
                        var url = JsonValue["URL"]["subgroup"][0]["url"]
                        var parameter = {}
                        parameter.request_id = JsonValue["General"]["subgroup"][0]["x-request-id"]
                        parameter.lang = JsonValue["General"]["subgroup"][0]["language"]
                        parameter.bankcode = JsonValue["General"]["subgroup"][0]["bankcode"]
                        parameter.groupcode = JsonValue["General"]["subgroup"][0]["groupcode"]
                        parameter.authTypeHead = JsonValue["General"]["subgroup"][0]["authorizationtypeheader"]
                       
                        url = url.replace('{groupCode}', parameter.groupcode)
                        url = url.replace('{bankCode}', parameter.bankcode)
                        url = url.replace('{bankUserId}', params.bankUserId)
                        
                       
                        // sendResponse(null,objresponse)
                        fndoapicall(parameter, url, function (result) {
                        
                                objresponse.status = 'SUCCESS'
                                objresponse.data = result
                                sendResponse(null, objresponse)
                           
                           
                        })

                    } else {
                        objresponse.status = 'JSON not found in core rule prod params';
                        sendResponse(null, objresponse);
                    }
                })






                function fndoapicall(parameter, url, callbackapi) {
                    try {
                        var Date = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                        var splitdate = Date.split(' ')
                        var formatdate = `${splitdate[0]}T${splitdate[1]}+00:00`
                        var request = require('request');
                        var apiURL =
                            apiURL = url // apiURL + apiName
                        var options = {
                            url: apiURL,
                            timeout: 18000000,
                            method: 'POST',
                            json: {

                                "payment": {
                                    "paymentId": params.paymentId,
                                    "bankAccountId": params.bankAcctId,
                                    "amount": params.amount,
                                    "currency": params.currency,
                                    
                                    "mobile": params.Mobile_Number,
                                    "proxy": {
                                        "type": params.proxy_type,
                                        "value": params.proxy_value
                                    },
                                   
                                  }                               
                                    
                                  
                              }, headers: {
                                "X-Request-ID": parameter.requestid,
                                "language": parameter.lang,
                                "timestamp": formatdate,
                                "channel-Id": params.channelId,
                                "bankCode": parameter.bankcode,
                                "groupCode":parameter.groupcode,
                                "bankUserId":params.bankUserId,
                                "authorizationTypeHeader":parameter.authTypeHead,
                                'Content-Type': 'application/json'
                            }
                        }



                        console.log('------------API JSON-------' + JSON.stringify(options));
                        reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                        request(options, function (error, responseFromImagingService, responseBody) {

                            if (error) {
                                reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                sendResponse(error, null);
                            } else {

                                console.log("------API CALL SUCCESS----", JSON.stringify(responseBody));
                                callbackapi(responseBody)
                            }
                        });

                    } catch (error) {
                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                        sendResponse(error, null);
                    }
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
