var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    


     /*  Created By :  Siva Harish M
    Created Date : 14/10/2022
    Modified By : 
    Modified Date : 
    Reason for : 
     
    */
    var serviceName = 'NPSSP Verify Recipent IBAN';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var reqAsync = require('async');
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
            objSessionLogInfo.HANDLER_CODE = 'NPSSP Intiate Credit Transfer';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSSP Intiate Credit Transfer';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {
                        var PRCT_ID = prct_id
                        var ApitrnId
                        var app_id

                        try {

                            try {

                                var TakeCdtrDtls

                                var TkDrdetails = `select processdata from Transactions where msgid = '${params.Id}' and processtype = 'OUTWARD'`
                                ExecuteQuery1(TkDrdetails, function (arrDrcustDtls) {
                                    if (arrDrcustDtls.length) {
                                        var buf = arrDrcustDtls[0].processdata
                                        var xmlfile = buf.toString()


                                        var processdata = xmlfile.replace('<MsgId>' + params.Id + '</MsgId>', '<MsgId>' + params.unique_id + '</MsgId>')
                                        console.log(processdata);

                                        fn_CallNestApi(processdata, function (result) {
                                            // if (result.outcome == '000') {
                                            var TakRecpDtls = `select distinct iban from npss_cust_proxy_address where phone_no = '${params.cr_phone_no}'`
                                            ExecuteQuery1(TakRecpDtls, function (arrRecDtls) {

                                                fn_CoreBankApi(arrRecDtls[0].iban,params.amount, function (result) {
                                                  //  var arrresult = result['data']['CUSTOMERS'] ? result['data']['CUSTOMERS'] : ''
                                                    if(result.service_status == 'SUCCESS'){
                                                        if(result['data']['CUSTOMERS'][0]['ACCOUNTSTATUS'] == 'Active'){
                                                            objresponse.status = 'Active';
                                                            sendResponse(null, objresponse)
                                                           }else if(result['data']['CUSTOMERS'][0]['ACCOUNTSTATUS'] == 'Inactive'){
                                                            objresponse.status = 'Inctive';
                                                            sendResponse(null, objresponse)
                                                           }
                                                    }else{
                                                        objresponse.status = result['data']
                                                        sendResponse(null, objresponse)
                                                    }
                                                    

                                                    
                                                })
                                            })



                                        })






                                        // })

                                    } else {
                                        objresponse.status = 'FAILURE';
                                        sendResponse(null, objresponse)
                                    }

                                })



                            } catch (error) {
                                sendResponse(error)
                            }
                            // });

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

                            function _BulkInsertProcessItem(insertarr, strTrnTableName, callbackInsert) {
                                try {
                                    reqTranDBInstance.InsertBulkTranDB(mTranConn, strTrnTableName, insertarr, objSessionLogInfo, 300, function callbackInsertBulk(result, error) {
                                        try {
                                            if (error) {
                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, 'IDE_SERVICE_10049', 'ERROR IN BULK INSERT FUNCTION', error);
                                                sendResponse(error)
                                            } else {
                                                if (result.length > 0) {
                                                    callbackInsert(result);
                                                } else {
                                                    callbackInsert([]);
                                                }
                                            }
                                        } catch (error) {
                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, 'IDE_SERVICE_10048', 'ERROR IN BULK INSERT FUNCTION', error);
                                            sendResponse(error)
                                        }
                                    });
                                } catch (error) {
                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, 'IDE_SERVICE_10047', 'ERROR IN BULK INSERT FUNCTION', error);
                                    sendResponse(error)
                                }
                            }

                        } catch (error) {
                            sendResponse(error)
                        }
                    }



                    function fn_CallNestApi(apiparam, callbackapi) {
                        try {
                            var request = require('request');
                            var options = {
                                url: 'http://192.168.2.40:3000/simulation/sct-initiation/pacs008-recipient-inward-account-validation',
                                timeout: 18000000,
                                method: 'POST',
                                json: apiparam,
                                headers: {
                                    'senderBankUserId': '627978',
                                    'x-consent-id': 'x-consent-id',
                                    'authorizationType': '01',
                                    'x-osd': 'IOS',
                                    'x-osv': '14',
                                    'x-idempotency-key': '0003P420001046321665',
                                    'X-Request-ID': '0003P4200010463216652012-11-25T23:50:56.193+01:00',
                                    'client-id': '2c7a008c946a11ea84800aee602f0000',
                                    'Authorization': 'Authorization',
                                    'x-api-customer-ip': '192.168.1.1',
                                    'x-timestamp': '2012-11-25T23:50:56.193+01:00',
                                    'x-jws-signature': 'eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ.dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk',
                                    'sessionId': '8cc3271a-ddde-4df1-9df3-7319c2a5d2ba',
                                    'loginStartTime': '2021-05-26T09:45:00.000Z',
                                    'screenResolution': '1920x1080',
                                    'timeZone': '+05:00',
                                    'language': 'en',
                                    'country': 'IR',
                                    'deviceId': 'deviceId',
                                    'appInstance': 'appInstance',
                                    'Additional-customer-authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhGRDVxbXdYeVB5bTk1dGFGR0szIn0.eyJpc3MiOiJodHRwczovL2p3dC1pZHAuamlmZnkuc2lhLmV1IiwianRpIjoidG52NXpCMFdiM2FMQ2dYa2ZFTEUiLCJoY2kiOiIyNzQwQUQ3MDMzM0FBMjY3M0YyOURDMThGNTFBMjdGMEVFMjM3QTRBMDQwREE5MDgyMjdCNTkwNkU0NTI1RkVGIiwiZXhwIjoxNjAwMjYzMTA2ODM4LCJvcG4iOiJQMlAiLCJhbXQiOiI1MDAwIiwiY2N5IjoiRVVSIiwiYWlkIjoiODcyMzM4NDcxNSIsInNpYiI6IklFNjJCT0ZJOTAwMDE3OTI4NjUxIiwicmliIjoiSUUxMEJPRkk5MDAwMTc3MjU4ODciLCJzcG4iOiIrMzkzMzUxMjEyMTIzIiwicnBuIjoiKzM5MzM0NzQ4Nzg3NiIsIm9zZCI6IklPUyIsIm9zdiI6IjE0IiwibXNnIjoiWW91IGFyZSBzZW5kaW5nIDUwLjAwIEVVUiB0byBNYXIqKiogUG9sKioqIHdpdGggeW91ciBhY2NvdW50ICoqKio4NjUxIn0.s4yL6NTf3AbduAcYdYf3OI2F43orNwWibRPjLKpquhI',
                                    'Content-Type': 'application/json'
                                }

                            };
                            console.log('------------IPSP API CALL API JSON-------' + JSON.stringify(options));
                            reqInstanceHelper.PrintInfo(serviceName, '------------IPSP API CALL API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error);
                                } else {
                                    console.log("------API CALL SUCCESS----");
                                    reqInstanceHelper.PrintInfo(serviceName, '------------IPSP Credit Transfer-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    if (responseBodyFromImagingService) {

                                        callbackapi(responseBodyFromImagingService)
                                    }


                                }
                            });
                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_014", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error);
                        }

                    }


                    function fn_CoreBankApi(iban, amount, callbackapi) {
                        try {
                            var request = require('request');
                            var options = {
                                url: 'http://192.168.2.210:30509/microsvc/ibs_s_verify_reserve',
                                timeout: 18000000,
                                method: 'POST',
                                json: {

                                    "session_id": "STATIC_EOD-1",

                                    "routingkey": "CLT-1304~APP-200~TNT-adsrj~ENV-ENV_1",

                                    "NEED_RESERVE": "N",

                                    "AMOUNT": amount,

                                    "ACCOUNT_NO": iban,
                                    
                                    "CRDR": "DEBIT"

                                },
                                headers: {
                                    'senderBankUserId': '627978',
                                    'x-consent-id': 'x-consent-id',
                                    'authorizationType': '01',
                                    'x-osd': 'IOS',
                                    'x-osv': '14',
                                    'x-idempotency-key': '0003P420001046321665',
                                    'X-Request-ID': '0003P4200010463216652012-11-25T23:50:56.193+01:00',
                                    'client-id': '2c7a008c946a11ea84800aee602f0000',
                                    'Authorization': 'Authorization',
                                    'x-api-customer-ip': '192.168.1.1',
                                    'x-timestamp': '2012-11-25T23:50:56.193+01:00',
                                    'x-jws-signature': 'eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ.dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk',
                                    'sessionId': '8cc3271a-ddde-4df1-9df3-7319c2a5d2ba',
                                    'loginStartTime': '2021-05-26T09:45:00.000Z',
                                    'screenResolution': '1920x1080',
                                    'timeZone': '+05:00',
                                    'language': 'en',
                                    'country': 'IR',
                                    'deviceId': 'deviceId',
                                    'appInstance': 'appInstance',
                                    'Additional-customer-authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhGRDVxbXdYeVB5bTk1dGFGR0szIn0.eyJpc3MiOiJodHRwczovL2p3dC1pZHAuamlmZnkuc2lhLmV1IiwianRpIjoidG52NXpCMFdiM2FMQ2dYa2ZFTEUiLCJoY2kiOiIyNzQwQUQ3MDMzM0FBMjY3M0YyOURDMThGNTFBMjdGMEVFMjM3QTRBMDQwREE5MDgyMjdCNTkwNkU0NTI1RkVGIiwiZXhwIjoxNjAwMjYzMTA2ODM4LCJvcG4iOiJQMlAiLCJhbXQiOiI1MDAwIiwiY2N5IjoiRVVSIiwiYWlkIjoiODcyMzM4NDcxNSIsInNpYiI6IklFNjJCT0ZJOTAwMDE3OTI4NjUxIiwicmliIjoiSUUxMEJPRkk5MDAwMTc3MjU4ODciLCJzcG4iOiIrMzkzMzUxMjEyMTIzIiwicnBuIjoiKzM5MzM0NzQ4Nzg3NiIsIm9zZCI6IklPUyIsIm9zdiI6IjE0IiwibXNnIjoiWW91IGFyZSBzZW5kaW5nIDUwLjAwIEVVUiB0byBNYXIqKiogUG9sKioqIHdpdGggeW91ciBhY2NvdW50ICoqKio4NjUxIn0.s4yL6NTf3AbduAcYdYf3OI2F43orNwWibRPjLKpquhI',
                                    'Content-Type': 'application/json'
                                }

                            };
                            console.log('------------IPSP API CALL API JSON-------' + JSON.stringify(options));
                            reqInstanceHelper.PrintInfo(serviceName, '------------IPSP API CALL API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error);
                                } else {
                                    console.log("------API CALL SUCCESS----",responseBodyFromImagingService);
                                    reqInstanceHelper.PrintInfo(serviceName, '------------IPSP Credit Transfer-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    if (responseBodyFromImagingService) {

                                        callbackapi(responseBodyFromImagingService)
                                    }


                                }
                            });
                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_014", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error);
                        }
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
                })
            })
        } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }
    })



















});

module.exports = app;
