var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    
try {
    /*   Created By :     Daseen
    Created Date :14-10-2022
    Modified By : 
    Modified Date :     
    Reason for : 
    */
    var serviceName = 'IPSP Show Account Balance';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var mTranConn = "";
    var addquery = "";
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS Show Account Balance';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS Show Account Balance';
            var cus_iban;
            // Get DB Connection                                                                                                                                      
            reqTranDBInstance.GetTranDBConn(headers, true, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    try {
                       var take_api_url = `select API_URL from CORE_API_MASTER_RULE_SETUP where api_code='${params.api_code}'`;
                     
                        var take_phone_no = `select phone_no,IBAN from  NPSS_CUST_PROXY_ADDRESS where phone_no='${params.dr_phoneno}'`;
                      
                        ExecuteQuery1(take_phone_no, function (arrResult) {
                           if (arrResult.length) {
                                cus_iban = arrResult[0].iban;
                                //var param_val=JSON.parse(arrResult[0].rule_param_value);
                                //var url=param_val['general']['subgroup'][0]['url']
                                  // var rule_code= param_val['general']['subgroup'][0]['business_rule_code']
                                ExecuteQuery1(take_api_url, function (arrurlResult) {
                                     if (arrurlResult.length) {
                                        // var param_val = JSON.parse(arrurlResult[0].rule_param_value);
                                        var url = arrurlResult[0].api_url;
                                         var ibanurl = url.replace('{IBAN}', cus_iban)
                                         console.log(ibanurl);
                                        fn_doapicall(ibanurl,cus_iban, function (result) {
                                            if (result) {
                                                sendResponse(null, result)
                                            } else {
                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Data not received from service", result);
                                                sendResponse(result, null);
                                            }
                                        })

                                     } else {
                                     console.log("No URL found in Rule code");
                                         objresponse.status = "No URL found in Rule code"
                                        sendResponse(objresponse, null)
                                    }
                               })

                             } else {
                                 console.log("No IBAN found in  Phone Number");
                                 objresponse.status = "No Data For this payor Number"
                         sendResponse(objresponse, null)
                             }
                        })




                        // Do API Call for Service 
                        function fn_doapicall(url,cus_iban, callbackapi) {
                            try {
                                var apiName = 'Show Account Balance'
                                var request = require('request');
                                var apiURL =
                                    apiURL = url // apiURL + apiName
                                var options = {
                                    url: apiURL,
                                    timeout: 18000000,
                                    method: 'GET',
                                    json: {


                                    },
                                    headers: {
                                       // 'IBAN':cus_iban,
                                        'bankUserId':'627978',
                                        'x-consent-id':'x-consent-id',
                                        'x-idempotency-key':'0003P420001046321665',
                                        'X-Request-ID':'0003P4200010463216652012-11-25T23:50:56.193+01:00',
                                        'client-id':'2c7a008c946a11ea84800aee602f0000',
                                        'Authorization':'Authorization',
                                        'x-api-customer-ip':'192.168.1.1',
                                        'x-timestamp':'2012-11-25T23:50:56.193+01:00',
                                        'Additional-customer-authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhGRDVxbXdYeVB5bTk1dGFGR0szIn0'
                                    }
                                };

                                console.log('------------API JSON-------' + JSON.stringify(options));
                                reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                    if (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                        sendResponse(error, null);
                                    } else {
                                     responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                        console.log("------API CALL SUCCESS----");
                                        callbackapi(responseBodyFromImagingService)
                                    }
                                });
                            } catch (error) {
                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                sendResponse(error, null);
                            }
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
