var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    /*  Created By : Siva Harish M
    Created Date : 14/10/2022
    Modified By : 
    Modified Date : 
    Reason for : 
     
    */
    var serviceName = 'IPSP Insert Tran';
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
            objSessionLogInfo.HANDLER_CODE = 'IPSP Insert Tran';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'IPSP Insert Tran';
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
                            var TakeExtraValue = `select rule_param_value from VPH_AM_AP_RULE_PARAM_VALUE where  ap_code = 'InternetBankingCreditSave'`
                            // Take Value from API Manager Table

                            ExecuteQuery1(TakeExtraValue, function (arrApiManRes) {
                                try {
                                    if (arrApiManRes.length > 0) {
                                        var arrCusTranInst = [];
                                        var objCusTranInst = {};
                                        // prepare Tran Insert
                                        var param_val = JSON.parse(arrApiManRes[0].rule_param_value);

                                        objCusTranInst.DBTR_ACCT_NAME = params.DBTR_ACCT_NAME;
                                        objCusTranInst.PRCT_ID = PRCT_ID;
                                        objCusTranInst.PRODUCT_CODE = params.PRODUCT_CODE;
                                        objCusTranInst.DBTR_PHONE_NO = params.DBTR_PHONE_NO;
                                        objCusTranInst.DBTR_ACCT_BALANCE = params.DBTR_ACCT_BALANCE;
                                        objCusTranInst.DBTR_SANCTION_LIMIT =  ''
                                        objCusTranInst.CDTR_PMT_TYPE = params.CDTR_PMT_TYPE;
                                        objCusTranInst.VALUE_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                        objCusTranInst.CDTR_PHONE_NO = params.CDTR_PHONE_NO;
                                        objCusTranInst.CDTR_EMAIL_ID = params.CDTR_EMAIL_ID;
                                        objCusTranInst.CDTR_EMIRATES = params.CDTR_EMIRATES
                                        objCusTranInst.CDTR_IBAN = params.CDTR_IBAN;
                                        objCusTranInst.INTRBK_STTLM_AMNT = params.INTRBK_STTLM_AMNT;
                                        objCusTranInst.TENANT_ID = params.TENANT_ID;
                                        objCusTranInst.APP_ID = '222'
                                        objCusTranInst.STATUS = 'PAYMENT'
                                        objCusTranInst.PROCESS_STATUS = 'PAYMENTCOMPLETED'
                                        objCusTranInst.DT_CODE = 'DT_1304_1665384453253'
                                        objCusTranInst.DTT_CODE = 'DTT_1304_1665385772257'
                                        objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                                        objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                                        objCusTranInst.CREATED_BY = params.CREATED_BY;
                                        objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                        objCusTranInst.CREATED_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                        objCusTranInst.MODIFIED_BY = "";
                                        objCusTranInst.MODIFIED_BY_NAME = "";
                                        objCusTranInst.MODIFIED_DATE = "";
                                        objCusTranInst.SYSTEM_ID = params.SYSTEM_ID;
                                        objCusTranInst.SYSTEM_NAME = params.SYSTEM_NAME;
                                        objCusTranInst.CREATED_BY_STS_ID = "";
                                        objCusTranInst.MODIFIED_BY_STS_ID = "";
                                        objCusTranInst.created_clientip = objSessionLogInfo.CLIENTIP;
                                        objCusTranInst.created_tz = objSessionLogInfo.CLIENTTZ;
                                        objCusTranInst.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                        objCusTranInst.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                        objCusTranInst.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                        objCusTranInst.routingkey = 'CLT-1408~APP-30~TNT-aexyz~ENV-0';
                                        arrCusTranInst.push(objCusTranInst)
                                        _BulkInsertProcessItem(arrCusTranInst, 'npss_cust_transactions', function callbackInsert(CusTranInsertRes) {
                                            if (CusTranInsertRes.length > 0) {
                                                objresponse.status = 'SUCCESS';
                                                sendResponse(null, objresponse)
                                            } else {
                                                objresponse.status = 'FAILURE';
                                                sendResponse(null, objresponse)
                                            }

                                        })

                                    } else {
                                        objresponse.status = 'FAILURE';
                                        sendResponse(null, objresponse)
                                    }

                                } catch (error) {
                                    sendResponse(error)
                                }
                            });

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
