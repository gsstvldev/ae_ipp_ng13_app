var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {






/*  Created By :Renga
Created Date : 31/7/2024
WI no : 3990
 
 
*/
var serviceName = 'NPSS DEEM (CS) Liquidity Export Pdf';
var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
// var reqXlsx = require('node-xlsx').default;
var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
var params = appRequest.body.PARAMS; //  Client input fromm Server
var headers = appRequest.headers; // header details 
var objSessionLogInfo = null; // set value is null
// var fs = require("fs");
// var reqAsync = require('async');
// var success_process_status, success_status;
// var Id = params.Id;
// var dt_code, dtt_code;
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
        objSessionLogInfo.HANDLER_CODE = 'NPSS DEEM (CS) Liquidity Export Pdf';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSS DEEM (CS) Liquidity Export Pdf';
        // Get DB Connection 
        reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
            mTranConn = pSession; //  assign connection     
            reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                if (error) {
                    sendResponse(error);
                } else {
                    var PRCT_ID = prct_id
                    var ApitrnId
                    var app_id
                    var arrTranID
                    try {

                        // if (Array.isArray(params.Tran_Id)) {
                        //     arrTranID = params.Tran_Id.map(function (eachTran) {
                        //         return eachTran.toString();
                        //     });
                        // } else {
                        //     arrTranID = [params.Tran_Id.toString()];
                        // }
                        // tranid = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';

                        var Taketran = `select hdr_msg_id,hdr_msg_rcpt_name,hdr_msg_rcpt_id,stmt_id,stmt_from_to_date_time,stmt_to_date_time,instn_acct_id,parent_acct_id,balance_type,balance_amount,balance_crdb_ind,stmt_bal_date,orig_amount,instd_amount,txn_amount,uetr,txn_id from NPSS_CAMT53_STMT`
                        let addquery = ''
                        if (params.searchparams.dateoperatorvalue != null && params.searchparams.dateoperatorvalue != undefined && params.searchparams.dateoperatorvalue != "") {
                            addquery = await fnSearchParamsQry(Taketran)
                        } else {
                            addquery = Taketran
                        }



                        ExecuteQuery1(addquery, function (arrdata) {
                            if (arrdata.length) {
                                let Jsonbody = []
                                for (let m = 0; m < arrdata.length; m++) {

                                    let body = arrdata[m]
                                    Jsonbody.push(body)
                                }
                                let bodyContent = []
                                let Header = Object.keys(Jsonbody[0])
                                let Headersvalue = []
                                for (let k = 0; k < Header.length; k++) {
                                    let headerCol = {}
                                    headerCol.text = Header[k].toUpperCase()
                                    headerCol.style = 'tableheader'
                                    Headersvalue.push(headerCol)
                                }
                                bodyContent.push(Headersvalue)

                                for (let i = 0; i < Jsonbody.length; i++) {
                                    let ColValue = []
                                    let Values = Object.values(Jsonbody[i])
                                    for (let j = 0; j < Values.length; j++) {
                                        let Colobj = {}
                                        Colobj.text = Values[j]
                                        Colobj.style = 'tablcolmn'
                                        ColValue.push(Colobj)
                                    }
                                    bodyContent.push(ColValue)
                                }

                                var dd = {
                                    pageSize: {
                                        width: 3300,
                                        height: 'auto'
                                    },
                                    content: [
                                        {
                                            table: {
                                                body: bodyContent
                                            }
                                        },
                                    ],
                                    pageStyle: {
                                        width: 1200,
                                        height: 1000
                                    },
                                    styles: {
                                        tableheader: {
                                            fontSize: 15,
                                            align: 'center',
                                            bold: true,
                                            margin: [0, 0, 0, 10],
                                            fillColor: 'gray'
                                        }, tablcolmn: {
                                            bold: true,
                                            fontSize: 15,
                                        }
                                    }

                                }

                                objresponse.status = 'SUCCESS'
                                objresponse.screenName = params.screenName + '_' + moment().format('DDMMYYYY') + '_' + moment().format('HHMMSS')
                                objresponse.data = dd
                                sendResponse(null, objresponse)
                            }
                            else {
                                objresponse.status = 'No Eligible Data';
                                sendResponse(null, objresponse)
                            }

                        })


                        function fnSearchParamsQry(query) {
                            return new Promise((resolve, reject) => {
                                try {
                                    conditionObj = {}
                                    if ((params.searchparams.dateoperator == "Greater Than Or Equal") || (params.searchparams.dateoperator == ">=") || (params.searchparams.dateoperator == "&gt;=")) {
                                        conditionObj["date"] = "Date(created_date) >= Date('" + params.searchparams.dateoperatorvalue + "'" + ')';
                                    } else if ((params.searchparams.dateoperator == "Less Than Or Equal") || (params.searchparams.dateoperator == "<=") || (params.searchparams.dateoperator == "&lt;=")) {
                                        conditionObj["date"] = "Date(created_date)<= Date('" + params.searchparams.dateoperatorvalue + "'" + ')';
                                    } else if ((params.searchparams.dateoperator == "=") || (params.searchparams.dateoperator == "Equals")) {
                                        conditionObj["date"] = "Date(created_date)= Date('" + params.searchparams.dateoperatorvalue + "'" + ')';
                                    } else if ((params.searchparams.dateoperator == "BETWEEN")) {
                                        conditionObj["date"] = "Date(created_date) between Date('" + params.searchparams.dateoperatorvalue + "'" + ')' + " and  Date('" + params.searchparams.dateoperatorTovalue + "'" + ')';
                                    } else if ((params.searchparams.dateoperator == "!=")) {
                                        conditionObj["date"] = "Date(created_date) != Date('" + params.searchparams.dateoperatorvalue + "'" + ')';
                                    }
                                    let condtnQry = query + ' ' + 'where' + ' ' + conditionObj.date
                                    reqInstanceHelper.PrintInfo(serviceName, "..........formed query..............." + condtnQry, objSessionLogInfo);
                                    console.log(condtnQry)
                                    resolve(condtnQry)
                                } catch (error) {
                                    resolve(error)
                                }
                            })
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

                            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10005', '', error);

                        } else {

                            reqInstanceHelper.SendResponse(serviceName, appResponse, response, objSessionLogInfo)

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
