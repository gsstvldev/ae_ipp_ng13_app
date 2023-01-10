var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

/*   Created By :   Siva Harish
Created Date : 28/10/2022
Modified By : 
Modified Date : 
Reason for : 
 
*/
var serviceName = 'NPSS Investigation Pac 028';
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
}; // Response to   Client
// Assign function for loginformation and session info
reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
    try {
        objSessionLogInfo = objLogInfo; // Assing log information
        // Log Viewer Setup
        objSessionLogInfo.HANDLER_CODE = 'NPSS Investigation Pac 028';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSS Investigation Pac 028';
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
                    var final_status
                    var final_process_status
                    try {
                        try {
                            var TakeStsPsts = `select * from npss_transactions where npsst_id = '${params.Tran_Id}'`
                            var TakeApiurl = `select api_url  from CORE_API_MASTER_RULE_SETUP where api_code =  'NPSS_INVESTIGATION_PAC_028'`
                            ExecuteQuery1(TakeApiurl, function (arrUrl) {
                                if (arrUrl.length) {
                                    ExecuteQuery1(TakeStsPsts, function (arrresult) {
                                        try {
                                            if (arrresult.length > 0) {
                                                fn_callApi(arrresult,arrUrl, function (result) {
        
                                                    if (result == 'SUCCESS') {
                                                        objresponse.status = 'SUCCESS';
                                                        sendResponse(null, objresponse);
                                                    } else {
        
                                                        objresponse.status = result;
                                                        sendResponse(null, objresponse);
        
                                                    }
                                                })
        
                                            } else {
                                                objresponse.status = 'NO Data Found for Tran Id';
                                                sendResponse(null, objresponse);
                                            }
        
                                        } catch (error) {
                                            sendResponse(error)
                                        }
                                    })
                                } else {
                                    objresponse.status = 'API Url Not Found';
                                    sendResponse(null, objresponse);
                                }
                            })
                           





                            function fn_callApi(arrresult,arrUrl, callbackapi) {
                                try {
                                    var request = require('request');
                                    var apiURL =
                                        apiURL = arrUrl[0].api_url; // apiURL + apiName
                                    var options = {
                                        url: apiURL,
                                        timeout: 99999999,
                                        method: 'POST',
                                        json: {
                                        "hdr_created_date": arrresult[0].hdr_created_date,
                                        "hdr_msg_id": arrresult[0].hdr_msg_id,

                                        "cr_sort_code": arrresult[0].cr_sort_code,

                                         "payment_endtoend_id": arrresult[0].payment_endtoend_id,

                                          "uetr": arrresult[0].uetr,

                                          "tran_ref_id": arrresult[0].tran_ref_id,
                                            
                                          "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.09"

                                        },
                                        headers: {
                                            'content-type': 'application/json'
                                        }
                                    };

                                    console.log('------------API JSON-------' + JSON.stringify(options));
                                    reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                    request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {

                                        if (error) {
                                            reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                            sendResponse(error, null);
                                        } else {
                                            console.log('API Response...................', responseBodyFromImagingService)
                                            console.log("------API CALL SUCCESS----");
                                            callbackapi(responseBodyFromImagingService)
                                        }
                                    });
                                } catch (error) {
                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                    sendResponse(error, null);
                                }
                            }








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
                                        sendResponse(error);
                                    } else {
                                        callback("SUCCESS");
                                    }
                                } catch (error) {
                                    sendResponse(error);
                                }
                            });
                        }



                    } catch (error) {
                        sendResponse(error)
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
