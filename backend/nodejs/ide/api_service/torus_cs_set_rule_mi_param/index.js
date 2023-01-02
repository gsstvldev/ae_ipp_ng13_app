var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    /*  Created By :  Daseen
Created Date : 02/01/2023
Modified By : 
Modified Date : 
Reason for : 
* 
*/
var serviceName = 'NPSS Merchant Remove Bank Account'; //service name 
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
        objSessionLogInfo.HANDLER_CODE = 'NPSS Merchant Remove Bank Account';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSS Merchant Remove Bank Account';
        // Get DB Connection 
        reqTranDBInstance.GetTranDBConn(headers, true, function (pSession) {
            mTranConn = pSession; //  assign connection 
            //get prct id                              
            try {

                var Takejson = `select param_value from core_rule_prod_params where rule_code = '${params.rule_code}' and tenant_id = '${params.TenantId}'`
                ExecuteQuery1(Takejson, function (arrjson) {  //merchanttag,bankuserid,channelid,iban
                    if (arrjson.length) {
                        var JsonValue = JSON.parse(arrjson[0].param_value)
                        console.log(JsonValue);
                        
                        var stsobj = JsonValue["GENERAL"]["subgroup"][0]
                        console.log(stsobj);
                        if(stsobj){
                            objresponse.status = 'SUCCESS'
                                    objresponse.data = stsobj
                                    sendResponse(null, objresponse)
                           }
                           else{
                            objresponse.status = 'FAILURE'
                            objresponse.data = "No status Found"
                            sendResponse(null, objresponse)
                           }
                       
                           
                    } else{
                        objresponse.status = 'FAILURE'
                        objresponse.data = "No value found in Prod Params"
                        sendResponse(null, objresponse)
                       }
                }
                    
            )
    


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
})




});

module.exports = app;
