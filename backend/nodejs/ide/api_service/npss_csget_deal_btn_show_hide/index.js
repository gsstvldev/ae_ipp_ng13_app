var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {





    /*  Created By :   Daseen
    Created Date :05-07-2023
    * 
    */
    var serviceName = 'NPSS (CS) Get Deal btn show hide'; //service name 
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
    const { resolve } = require('path');
    const { reject } = require('lodash');
    var success_status, success_process_status;
    var elgobj = {};
    var arrTranId
    //console.log('**************************' + headers['session-id'])
    var objresponse = {
        'status': 'FAILURE',
        'data': '',
        'errocode': '',
        'msg': ''
    }; // Response to Client
    // Assign function for loginformation and session info
    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
        try {
            objSessionLogInfo = objLogInfo; // Assing log information
            // Log Viewer Setup
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Get Deal btn show hide';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) Get Deal btn show hide';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection 
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    var PRCT_ID = prct_id
                    //get prct id                              
                    try {
                        let TkdbtrIban = `select dbtr_iban from npss_transactions where npsst_id = '${params.TranId}'`
                        ExecuteQuery1(TkdbtrIban, function (dbtrIban) {
                            if (dbtrIban.length > 0) {
                                let chkcur = `select currency,customer_id from core_nc_cbs_accounts where alternate_account_id = '${dbtrIban[0].dbtr_iban}'`
                                ExecuteQuery1(chkcur, function (ibncurrency) {
                                    if (ibncurrency.length > 0 && (ibncurrency[0].currency != 'AED')) {
                                        objresponse.status = 'SUCCESS'
                                        objresponse.data = ibncurrency[0].currency
                                        sendResponse(null, objresponse)

                                    } else {
                                        objresponse.status = 'FAILURE'
                                        objresponse.data = 'Currency is AED in cbs accounts table'
                                        sendResponse(null, objresponse)
                                    }
                                })

                            } else {
                                objresponse.status = 'DBTR Iban Not Found'
                                sendResponse(null, objresponse)
                            }

                        })

                    } catch (error) {
                        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10003', 'ERROR IN DB CONNECTION FUNCTION', error);
                    }
                })

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
                //send response fucntion
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

            });
        } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }

    })







});

module.exports = app;
