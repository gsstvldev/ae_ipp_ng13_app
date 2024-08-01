var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    /*  Created By : Suresh
   Created Date : 31/07/2024 
   wi - npss   3991  */
    var serviceName = 'NPSS DEEM (CS) Liquidity Export Excel File';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqXlsx = require('node-xlsx').default;
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var fs = require("fs");
    var reqAsync = require('async');
    var success_process_status, success_status;
    var Id = params.Id;
    var dt_code, dtt_code;
    var moment = require('moment')
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS DEEM (CS) Liquidity Export Excel File';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS DEEM (CS) Liquidity Export Excel File';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection     
                try {
                    let Taketran;
                    if (params.S_DATE) {
                        Taketran = await fnSearchParamsQry();
                    } else {
                        Taketran = `select hdr_msg_id,hdr_msg_rcpt_name,hdr_msg_rcpt_id,stmt_id,stmt_from_to_date_time,stmt_to_date_time,instn_acct_id,parent_acct_id,balance_type,balance_amount,balance_crdb_ind,stmt_bal_date,orig_amount,instd_amount,txn_amount,uetr,txn_id from NPSS_CAMT53_STMT `;
                    }
                    console.log(Taketran);
                    ExecuteQuery1(Taketran, function (arrdata) {
                        if (arrdata.length > 0) {
                            let Jsonbody = [];
                            for (let i = 0; i < arrdata.length; i++) {
                                let body = arrdata[i];
                                if (typeof body === 'string') {
                                    try {
                                        body = JSON.parse(body);
                                    } catch (e) {
                                        console.error('Failed to parse JSON:', e);
                                        objresponse.status = 'ERROR';
                                        sendResponse(e, objresponse);
                                        return;
                                    }
                                }
                                if (Array.isArray(body)) {
                                    Jsonbody = Jsonbody.concat(body);
                                } else {
                                    Jsonbody.push(body);
                                }
                            }
                            if (Jsonbody.length > 0) {
                                let Header = Object.keys(Jsonbody[0]);
                                let Headers = Header.map(col => ({
                                    key: col,
                                    header: col.toUpperCase(),
                                    width: 30,
                                    style: {
                                        alignment: { vertical: 'top', horizontal: 'top', wrapText: true }
                                    }
                                }));
                                let RowValues = Jsonbody.map(row => {
                                    let Colobj = {};
                                    Header.forEach(col => {
                                        Colobj[col] = row[col];
                                    });
                                    return Colobj;
                                });
                                objresponse.status = 'SUCCESS';
                                objresponse.header = Headers;
                                objresponse.col = RowValues;
                                sendResponse(null, objresponse);
                            } else {
                                objresponse.status = 'ERROR';
                                objresponse.message = 'No valid data found.';
                                sendResponse(null, objresponse);
                            }
                        } else {
                            objresponse.status = 'ERROR';
                            objresponse.message = 'Input array is empty.';
                            sendResponse(null, objresponse);
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
                    function fnSearchParamsQry() {
                        return new Promise((resolve, reject) => {
                            try {
                                let conditionObj = {};
                                let dateOperator = params.S_DATE_OP;
                                let dateValue = params.S_DATE
                                let toDateValue = params.S_DATE_TO_VALUE
                                if (dateOperator === "Greater Than Or Equal" || dateOperator === ">=" || dateOperator === "&gt;=") {
                                    conditionObj["date"] = `Date(created_date) >= Date('${dateValue}')`;
                                } else if (dateOperator === "Less Than Or Equal" || dateOperator === "<=" || dateOperator === "&lt;=") {
                                    conditionObj["date"] = `Date(created_date) <=  Date('${dateValue}')`;
                                } else if (dateOperator === "=" || dateOperator === "Equals") {
                                    conditionObj["date"] = `Date(created_date) =  Date('${dateValue}')`;
                                } else if (dateOperator === "BETWEEN" && toDateValue) {
                                    conditionObj["date"] = `Date(created_date) BETWEEN  Date('${dateValue}') AND Date('${toDateValue}' )`;
                                } else if (dateOperator === "Not Equal" || dateOperator === "!=" || dateOperator === "&lt;&gt;") {
                                    conditionObj["date"] = `Date(created_date) !=  Date('${dateValue}')`;
                                }
                                else {
                                    reject(new Error('Invalid date operator or missing toDateValue for BETWEEN operator'));
                                }
                                let conditionQry = `Select hdr_msg_id,hdr_msg_rcpt_name,hdr_msg_rcpt_id,stmt_id,stmt_from_to_date_time,stmt_to_date_time,instn_acct_id,parent_acct_id,balance_type,balance_amount,balance_crdb_ind,stmt_bal_date,orig_amount,instd_amount,txn_amount,uetr,txn_id from NPSS_CAMT53_STMT WHERE ${conditionObj.date}`;
                                resolve(conditionQry);
                            } catch (error) {
                                reject(error);
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
                } catch (error) {
                    sendResponse(error)
                }
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
