var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

/*  Created By :Daseen
Created Date : 14/10/2022
Modified By : 
Modified Date : 
Reason for : 
 
*/
var serviceName = 'NPSSP Verify IBAN';
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
        objSessionLogInfo.HANDLER_CODE = 'NPSSP Verify IBAN';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSSP Verify IBAN';
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
                               
                                                    //newly modified 
                                                    var TakeCdtrDtls
                                                    if (params.CDTR_PHONE_NO) {
                                                        TakeCdtrDtls = `select npsscpa_id,phone_no,emirates_id,email_id,iban,customer from NPSS_CUST_PROXY_ADDRESS where phone_no = '${params.CDTR_PHONE_NO}'`
                                                    } else if (params.CDTR_IBAN) {
                                                        TakeCdtrDtls = `select npsscpa_id,phone_no,emirates_id,email_id,iban,customer from NPSS_CUST_PROXY_ADDRESS where iban = '${params.CDTR_IBAN}' `
                                                    } else if (params.CDTR_EMAIL_ID) {
                                                        TakeCdtrDtls = `select npsscpa_id,phone_no,emirates_id,email_id,iban,customer from NPSS_CUST_PROXY_ADDRESS where email_id = '${params.CDTR_EMAIL_ID}' `
                                                    } else if (params.CDTR_EMIRATES) {
                                                        TakeCdtrDtls = `select npsscpa_id,phone_no,emirates_id,email_id,iban,customer from NPSS_CUST_PROXY_ADDRESS where emirates_id = '${params.CDTR_EMIRATES}' `
                                                    }
                                                    var TkDrdetails = `select distinct npsscpa_id,customer,iban from NPSS_CUST_PROXY_ADDRESS where phone_no = '${params.DBTR_PHONE_NO}'`
                                                    ExecuteQuery1(TkDrdetails, function (arrDrcustDtls) {
                                                        if (arrDrcustDtls.length) {
                                                            var TakeDrBnkCode = `select distinct bank_code from NPSS_CUST_PROXY_BANKS where npsscpa_id = '${arrDrcustDtls[0].npsscpa_id}'`
                                                            ExecuteQuery1(TakeDrBnkCode, function (arrBnkCode) {
                                                                if (arrBnkCode.length > 0) {
                                                                    ExecuteQuery1(TakeCdtrDtls, function (arrCdtrDtls) {
                                                                        if (arrCdtrDtls.length) {
                                                                            var TakeCrBnkCode = `select distinct bank_code from NPSS_CUST_PROXY_BANKS where npsscpa_id = '${arrCdtrDtls[0].npsscpa_id}'`
                                                                            ExecuteQuery1(TakeCrBnkCode, function (arrCrbnkcode) {
                                                                                if(arrCrbnkcode.length > 0){
                                                                                    var apiparam = {}
                                                                                    // apiparam.url = url
                                                                                     apiparam.ipsct_id = ApitrnId
                                                                                     apiparam.CrBankcode = arrCrbnkcode[0].bank_code
                                                                                     apiparam.DrBankcode = arrBnkCode[0].bank_code
                                                                                     apiparam.DBTR_IBAN = arrDrcustDtls[0].iban
                                                                                     apiparam.DBTR_PHONE_NO = params.DBTR_PHONE_NO;
                                                                                     apiparam.DBTR_ACCT_NAME = params.DBTR_ACCT_NAME;
                                                                                     apiparam.CDTR_ACCT_NAME = arrCdtrDtls[0].customer
                                                                                     apiparam.CDTR_PHONE_NO = params.CDTR_PHONE_NO ? params.CDTR_PHONE_NO : arrCdtrDtls[0].phone_no
                                                                                     apiparam.CDTR_EMAIL_ID = params.CDTR_EMAIL_ID ? params.CDTR_EMAIL_ID : arrCdtrDtls[0].email_id
                                                                                     apiparam.CDTR_EMIRATES = params.CDTR_EMIRATES ? params.CDTR_EMIRATES : arrCdtrDtls[0].emirates_id
                                                                                     apiparam.CDTR_IBAN = params.CDTR_IBAN ? params.CDTR_IBAN : arrCdtrDtls[0].iban
                                                                                     apiparam.INTRBK_STTLM_AMNT = params.INTRBK_STTLM_AMNT;
                                                                                     fn_CallNestApi(apiparam, function (result) {
                                                                                         if (result.outcome == '000') {
                                                                                             objresponse.status = 'SUCCESS';
                                                                                             objresponse.CDTR_IBAN=arrCdtrDtls[0].iban
                                                                                             objresponse.CDTR_ACCT_NAME=arrCdtrDtls[0].customer;
                                                                                             sendResponse(null, objresponse)
                                                                                         } else {
                                                                                             objresponse.status = result;
                                                                                             sendResponse(null, objresponse)
                                                                                         }
                                                                                     })
                                                                                }else{
                                                                                    objresponse.status = 'No Bank Code For this payee Number';
                                                                                    sendResponse(null, objresponse)
                                                                                }
                                                                               

                                                                            })
                                                                        } else {
                                                                            objresponse.status = '120 - Recipient Not Valid';
                                                                            sendResponse(null, objresponse)
                                                                        }
                                                                    })
                                                                } else {
                                                                    objresponse.status = 'No Bank Code For this payor Number';
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            })

                                                        } else {
                                                            objresponse.status = 'No Data For this payor Number';
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
                            url: 'http://192.168.2.40:3000/payments/verify-sender-iban',
                            timeout: 18000000,
                            method: 'POST',
                            json:{
                                "amount": {
                                  "requested": Number(apiparam.INTRBK_STTLM_AMNT),
                                  "currency": "AED"
                                },
                                "recipient": {
                                  "iban": apiparam.CDTR_IBAN,
                                  "bankCode": apiparam.CrBankcode
                                },
                                "sender": {
                                 "iban": apiparam.DBTR_IBAN,
                                  "bankCode": apiparam.DrBankcode
                                 
                                },
                                "serviceType": "P4",
                                "requestToPay": false,
                                "transactionType": "P400"
                              } ,
                            headers: {
                                'senderBankUserId': '627978',
                                'x-consent-id': 'x-consent-id',
                                'authorizationType':'01',
                                'x-osd':'IOS',
                                'x-osv':'14',
                                'x-idempotency-key': '0003P420001046321665',
                                'X-Request-ID': '0003P4200010463216652012-11-25T23:50:56.193+01:00',
                                'client-id': '2c7a008c946a11ea84800aee602f0000',
                                'Authorization': 'Authorization',
                                'x-api-customer-ip': '192.168.1.1',
                                'x-timestamp': '2012-11-25T23:50:56.193+01:00',
                                'x-jws-signature':'eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFtcGxlLmNvbS9pc19yb290Ijp0cnVlfQ.dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk',
                                'sessionId':'8cc3271a-ddde-4df1-9df3-7319c2a5d2ba',
                                'loginStartTime':'2021-05-26T09:45:00.000Z',
                                'screenResolution':'1920x1080',
                                'timeZone':'+05:00',
                                'language':'en',
                                'country':'IR',
                                'deviceId':'deviceId',
                                'appInstance':'appInstance',
                                'Additional-customer-authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlhGRDVxbXdYeVB5bTk1dGFGR0szIn0.eyJpc3MiOiJodHRwczovL2p3dC1pZHAuamlmZnkuc2lhLmV1IiwianRpIjoidG52NXpCMFdiM2FMQ2dYa2ZFTEUiLCJoY2kiOiIyNzQwQUQ3MDMzM0FBMjY3M0YyOURDMThGNTFBMjdGMEVFMjM3QTRBMDQwREE5MDgyMjdCNTkwNkU0NTI1RkVGIiwiZXhwIjoxNjAwMjYzMTA2ODM4LCJvcG4iOiJQMlAiLCJhbXQiOiI1MDAwIiwiY2N5IjoiRVVSIiwiYWlkIjoiODcyMzM4NDcxNSIsInNpYiI6IklFNjJCT0ZJOTAwMDE3OTI4NjUxIiwicmliIjoiSUUxMEJPRkk5MDAwMTc3MjU4ODciLCJzcG4iOiIrMzkzMzUxMjEyMTIzIiwicnBuIjoiKzM5MzM0NzQ4Nzg3NiIsIm9zZCI6IklPUyIsIm9zdiI6IjE0IiwibXNnIjoiWW91IGFyZSBzZW5kaW5nIDUwLjAwIEVVUiB0byBNYXIqKiogUG9sKioqIHdpdGggeW91ciBhY2NvdW50ICoqKio4NjUxIn0.s4yL6NTf3AbduAcYdYf3OI2F43orNwWibRPjLKpquhI',
                                'Content-Type': 'application/json'
                            }    
                   };
                        console.log('------------NPSSP API CALL API JSON-------' + JSON.stringify(options));
                        reqInstanceHelper.PrintInfo(serviceName, '------------NPSSP API CALL API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                            if (error) {
                                reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                sendResponse(error);
                            } else {
                                console.log("------API CALL SUCCESS----");
                                reqInstanceHelper.PrintInfo(serviceName, '------------NPSSP Credit Transfer-------' + responseBodyFromImagingService, objSessionLogInfo);
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
