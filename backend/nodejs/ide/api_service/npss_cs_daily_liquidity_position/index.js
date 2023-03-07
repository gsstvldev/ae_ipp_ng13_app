var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    
    

    /*  Created By :Siva Harish
    Created Date :25/02/2023
    Modified By : Siva Harish
    Modified Date : 27/02/2023 6:44pm
    }
    */
    var serviceName = 'NPSS (CS) Daily Liquidity Position';

    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqXlsx = require('node-xlsx').default;
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var success_process_status, success_status;
    var moment = require('moment');
    var reqAsync = require('async');

    var mTranConn = "";
    var producer
    var task
    var failedData = []
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Daily Liquidity Position';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) Daily Liquidity Position';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    try {

                        var Takeapiurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_LIQUIDITY' and param_code='URL'`
                        ExecuteQuery1(Takeapiurl, function (arrUrl) {
                            if (arrUrl.length > 0) {
                                var PRCT_ID = prct_id;
                                var objCoreApiInst = {};
                                var arrCoreApiInst = [];

                                objCoreApiInst.PROCESS_NAME = params.PROCESS_NAME;
                                objCoreApiInst.CURRENCY = params.CURRENCY;
                                objCoreApiInst.ACCOUNTHOLDERBIC = params.ACCOUNTHOLDERBIC;
                                objCoreApiInst.ACCOUNTNUMBER = params.ACCOUNTNUMBER;
                                objCoreApiInst.DATETIME = params.DATETIME;
                                objCoreApiInst.DATASOURCE = params.DATASOURCE;
                                objCoreApiInst.PRCT_ID = PRCT_ID;
                                objCoreApiInst.TENANT_ID = params.TENANT_ID;
                                objCoreApiInst.APP_ID = '222'
                                objCoreApiInst.STATUS = 'CREATED'
                                objCoreApiInst.PROCESS_STATUS = 'CREATED'
                                objCoreApiInst.DT_CODE = 'DT_1304_1665901130705'
                                objCoreApiInst.DTT_CODE = 'DTT_1304_1670589169341'
                                objCoreApiInst.DT_DESCRIPTION = 'transaction_group'
                                objCoreApiInst.DTT_DESCRIPTION = 'Transaction'
                                objCoreApiInst.CREATED_BY = params.CREATED_BY;
                                objCoreApiInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                objCoreApiInst.CREATED_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                objCoreApiInst.MODIFIED_BY = "";
                                objCoreApiInst.MODIFIED_BY_NAME = "";
                                objCoreApiInst.MODIFIED_DATE = null;
                                objCoreApiInst.SYSTEM_ID = params.SYSTEM_ID;
                                objCoreApiInst.SYSTEM_NAME = params.SYSTEM_NAME;
                                objCoreApiInst.CREATED_BY_STS_ID = "";
                                objCoreApiInst.MODIFIED_BY_STS_ID = "";
                                objCoreApiInst.created_clientip = objSessionLogInfo.CLIENTIP;
                                objCoreApiInst.created_tz = objSessionLogInfo.CLIENTTZ;
                                objCoreApiInst.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                objCoreApiInst.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                objCoreApiInst.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                objCoreApiInst.routingkey = headers.routingkey;
                                arrCoreApiInst.push(objCoreApiInst)
                                _BulkInsertProcessItem(arrCoreApiInst, 'npss_core_api_process_log', function callbackInsert(CoreTranInsertRes) {
                                    if (CoreTranInsertRes.length > 0) {
                                        var Taketran = `select * from npss_core_api_process_log where npsscapl_id = ${CoreTranInsertRes[0]['npsscapl_id']}`
                                        ExecuteQuery1(Taketran, async function (arrTran) {
                                            if (arrTran.length > 0) {
                                                var doapicall = await apiCall(arrTran, arrUrl);
                                                if (doapicall == 'SUCCESS') {
                                                    reqInstanceHelper.PrintInfo(serviceName, '-----------Liquidity   api call success for-------' + CoreTranInsertRes.npsscapl_id, objSessionLogInfo);
                                                  //  if (doapicall.data.status == 200 || doapicall.data.status == 201)
                                                        objresponse.status = 'SUCCESS';
                                                 
                                                    sendResponse(null, objresponse)
                                                }
                                                else {
                                                    reqInstanceHelper.PrintInfo(serviceName, '-----------Liquidity   api call not success for-------' + CoreTranInsertRes.npsscapl_id, objSessionLogInfo);
                                                    objresponse.status = 'SUCCESS';
                                                    objresponse.data='Error response from API Call'
                                                    sendResponse(null, objresponse)
                                                }
                                            } else {
                                                objresponse.status = 'FAILURE';
                                                objresponse.data = 'No Tran Found';
                                                sendResponse(null, objresponse)
                                            }

                                        })
                                    } else {
                                        objresponse.status = 'FAILURE';
                                        objresponse.data = 'Log Table insert is not success';
                                        sendResponse(null, objresponse)
                                    }

                                })
                            } else {
                                objresponse.status = 'FAILURE';
                                objresponse.data = 'URL is not found';
                                sendResponse(null, objresponse)
                            }
                        })





                        function apiCall(arrTran, arrUrl) {
                            return new Promise((resolve, reject) => {


                                try {
                                    var resobj={};
                                    //https://ipp.uat.fh.ae/npss-inq/dailyLiquidityPosition?currency=AED&accountHolderBic=FHOUAEA0&accountNumber=AE450810001000101100001&dateTime=2022-12-12&datasource=PRODUCTION
                                    //  url = url + '/exp-openapi/liquidityCycle?currency='+arrTran[0].currency +'&accountHolderBic='+arrTran[0].accountholderbic+'&accountNumber='+arrTran[0].accountnumber+'&dateTime='+arrTran[0].datetime+'&datasource='+datasource;
                                    var request = require('request');
                                    var dt = moment(arrTran[0].datetime).format("YYYY-MM-DD")
                                    var apiURL =
                                        apiURL = arrUrl[0].param_detail + '/dailyLiquidityPosition?currency=' + arrTran[0].currency + '&accountHolderBic=' + arrTran[0].accountholderbic + '&accountNumber=' + arrTran[0].accountnumber + '&dateTime=' + dt + '&datasource=' + arrTran[0].datasource;
                                    var options = {
                                        url: apiURL,
                                        timeout: 99999999,
                                        method: 'GET',
                                        json: {

                                        },
                                        headers: {
                                            'capl_id': arrTran[0].npsscapl_id,
                                            'content-type': 'application/json'
                                        }
                                    };
                                    reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                    request(options, async function (error, responseFromImagingService, responseBody) {
                                        try {
                                            if (error) {
                                                reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                sendResponse(error, null);
                                            } else {
                                              
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + JSON.stringify(responseBody)+ '---for npsscapl_id....' + arrTran[0].npsscapl_id, objSessionLogInfo);
                                                  //  resobj.status = 'SUCCESS'
                                                   // resobj.data = responseFromImagingService;
                                                    resolve('SUCCESS');
                                               

                                            }
                                        } catch (error) {
                                            resolve('FAILURE')
                                        }

                                    });
                                } catch (error) {
                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                    sendResponse(error, null);
                                }


                            })
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

                    } catch (error) {
                        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
                    }
                })



                //Send Response Function Definition
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

            })
        } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }
    })









});

module.exports = app;
