var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    


try {
    /*   Created By :  Daseen
    Created Date :14-12-2022
    Modified By : 
    Modified Date :     
    Reason for : 
    */
    var serviceName = 'NPSS Change Customer Mobile';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var mTranConn = "";
    var url, x_request_id, language, bankcode, groupcode;
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS Change Customer Mobile';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS Change Customer Mobile';
            var cus_iban;
            // Get DB Connection                                                                                                                                      
            reqTranDBInstance.GetTranDBConn(headers, true, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    try {
                        var take_api_hdr = `select param_value from core_rule_prod_params where product_code='NPSS_AEFAB' and rule_code = 'CHANGE MOBILE NUMBER'`;

                  //      var take_api_url = `select phone_no,IBAN from  NPSS_CUST_PROXY_ADDRESS where phone_no='${params.dr_phoneno}'`;

                        ExecuteQuery1(take_api_hdr, function (arrResult) {
                            if (arrResult.length) {
                                //cus_iban = arrResult[0].iban;
                                var param_val = JSON.parse(arrResult[0].param_value);
                                url = param_val['URL']['subgroup'][0]['url']
                                x_request_id = param_val['General']['subgroup'][0]['x-request-id']
                                language = param_val['General']['subgroup'][0]['language']
                                bankcode = param_val['General']['subgroup'][0]['bankcode']
                                groupcode = param_val['General']['subgroup'][0]['groupcode']

                                fn_doapicall(url, function (result) {
                                    if (result) {
                                        var res =
                                        {
                                            "result": {
                                                "code": "00000",
                                                "result": true,
                                                "message": "Positive result",
                                                "X-Request-ID": "926d6610-c4cc-485c-ac55-8357c6e372bf"
                                            },
                                            "defaultAccount": false
                                        }
                                        sendResponse(null, res)
                                    } else {
                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Data not received from service", result);
                                        sendResponse(result, null);
                                    }
                                })

                                /* ExecuteQuery1(take_api_url, function (arrurlResult) {
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
                               }) */

                            } else {
                                console.log("No RULE  found ");
                                objresponse.status = "No RULE  found"
                                sendResponse(objresponse, null)
                            }
                        })




                        // Do API Call for Service 
                        function fn_doapicall(url, callbackapi) {
                            try {
                                var apiName = 'Change Account Number'
                                var request = require('request');
                                var Date = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                var splitdate = Date.split(' ')
                                var formatdate = `${splitdate[0]}T${splitdate[1]}+00:00`
                                var apiURL =
                                    apiURL = url // apiURL + apiName
                                var options = {
                                    url: apiURL,
                                    timeout: 18000000,
                                    method: 'PUT',
                                    json: {


                                    },
                                    headers: {
                                        'X-Request-ID': x_request_id,
                                        'language': language,
                                        'Content-Type': 'application/json',
                                        'channel-Id': params.channel_id,
                                        'timestamp': formatdate,
                                        'x-jws-signature': 'eyJhbGciOiJSUzI1NiJ9..aoYZZnqLXH0HAyrXtJV1uxZXB_LKgIdzPduJahRnV_09v35UZAEwEyJktWx0pnj3AVFGk7c2CZHbc1wPqRhVdECxcuG1_7H3bkJ-nl40VC1VUUQaymaNjJvgswtG441s6cC-yTUSyukF6vmbQqWH3sIJuF4y8EoOGZ_CLeQKRtSk6F8IRgSFUCpfw1VmDn-SrML3ixSDnSiBgu2XPa_ntUhcE6BJXQrUNIZ0HOC45vvlu0RjvwEEawElsB7H7RmF0fHjUKPKiQMym5GqhmTDatdHOl98mEcwelravUElzw6_4ErtW9Rlj1_ywPcYHJcoAOzuS-fOfIRmKrzApPV3DA',
                                        'bankUserId': params.bankUserId,
                                        'bankCode': bankcode,
                                        'groupCode': groupcode
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