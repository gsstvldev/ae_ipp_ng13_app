var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
    





    /*  Created By :Renga
    Created Date : 31/7/2024
    
     
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

                            var Taketran = `select ACCT_ID,PARENT_INST_ACCT_ID,BALANCE_TYPE_PROP,BALANCE_AMOUNT,BALANCE_CUR,BALANCE_CRDB_IND,STMT_BAL_DATE, STMT_BAL_DATE_TIME, COUNT_INDV_ENTRIES, SUM_INDV_ENTRIES, SUM_NET_ENTRIES, NET_CRDB_IND, TOT_CR_ENTRIES, SUM_CR_ENTRIES,TOT_DB_ENTRIES,SUM_DB_ENTRIES, ENTRY_REF,ENTRY_REF_CUR,ENTRY_AMOUNT,ENTRY_CRDB_IND,ENTRY_STATUS,ENTRY_BK_DATE,ENTRY_BK_DATE_TIME,VALUE_DATE,VALUE_DATE_TIME,ACCT_SERV_REF,BANK_CODE_PROP,INSTD_AMOUNT,INSTD_CUR,TXN_AMOUNT,TXN_CUR,BATCH_MSG_ID,BATCH_TXN_COUNT,BATCH_TOT_AMOUNT,BATCH_CRDB_IND,TXN_ACCSVC_REF,PAYMENT_INFO_ID,PAYMENT_INFO_ETE_ID,UETR,TXN_ID,CLR_SYSTEM_REF,CASH_TXN_AMOUNT,TXN_CRDB_IND,INSTRUCTING_FIN_INST_BIC,INSTRUCTED_FIN_INST_BIC,DBTR_BIC,CDTR_BIC from ad_gss_tran.npss_camt53_stmt`

                            let addquery = await fnSearchParamsQry(Taketran)



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
                                            width: 6300,
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
                                        var condtnQry = ""
                                        conditionObj = {}
                                        if (params.searchparams.dateoperatorvalue != null && params.searchparams.dateoperatorvalue != undefined && params.searchparams.dateoperatorvalue != "") {
                                            if ((params.searchparams.dateoperator == "Greater Than Or Equal") || (params.searchparams.dateoperator == ">=") || (params.searchparams.dateoperator == "&gt;=")) {
                                                conditionObj["date"] = "Date(created_date) >= Date('" + params.searchparams.dateoperatorvalue + "'" + ')';
                                            } else if ((params.searchparams.dateoperator == "Less Than Or Equal") || (params.searchparams.dateoperator == "<=") || (params.searchparams.dateoperator == "&lt;=")) {
                                                conditionObj["date"] = "Date(created_date)<= Date('" + params.searchparams.dateoperatorvalue + "'" + ')';
                                            } else if ((params.searchparams.dateoperator == "=") || (params.searchparams.dateoperator == "Equals")||(params.searchparams.dateoperator == "")) {
                                                conditionObj["date"] = "Date(created_date)= Date('" + params.searchparams.dateoperatorvalue + "'" + ')';
                                            } else if ((params.searchparams.dateoperator == "BETWEEN")) {
                                                conditionObj["date"] = "Date(created_date) between Date('" + params.searchparams.dateoperatorvalue + "'" + ')' + " and  Date('" + params.searchparams.dateoperatorTovalue + "'" + ')';
                                            } else if ((params.searchparams.dateoperator == "!=")) {
                                                conditionObj["date"] = "Date(created_date) != Date('" + params.searchparams.dateoperatorvalue + "'" + ')';
                                            }
                                        }

                                        if (params.searchparams.stmtfromoperatorvalue != null && params.searchparams.stmtfromoperatorvalue != undefined && params.searchparams.stmtfromoperatorvalue != "") {
                                            if ((params.searchparams.stmtfromoperator == "Greater Than Or Equal") || (params.searchparams.stmtfromoperator == ">=") || (params.searchparams.stmtfromoperator == "&gt;=")) {
                                                conditionObj["stmt_date"] = "Date(STMT_FROM_TO_DATE_TIME) >= Date('" + params.searchparams.stmtfromoperatorvalue + "'" + ')';
                                            } else if ((params.searchparams.stmtfromoperator == "Less Than Or Equal") || (params.searchparams.stmtfromoperator == "<=") || (params.searchparams.stmtfromoperator == "&lt;=")) {
                                                conditionObj["stmt_date"] = "Date(STMT_FROM_TO_DATE_TIME)<= Date('" + params.searchparams.stmtfromoperatorvalue + "'" + ')';
                                            } else if ((params.searchparams.stmtfromoperator == "=") || (params.searchparams.stmtfromoperator == "Equals")||(params.searchparams.stmtfromoperator == "")) {
                                                conditionObj["stmt_date"] = "Date(STMT_FROM_TO_DATE_TIME)= Date('" + params.searchparams.stmtfromoperatorvalue + "'" + ')';
                                            } else if ((params.searchparams.stmtfromoperator == "BETWEEN")) {
                                                conditionObj["stmt_date"] = "Date(STMT_FROM_TO_DATE_TIME) between Date('" + params.searchparams.stmtfromoperatorvalue + "'" + ')' + " and  Date('" + params.searchparams.stmtfromoperatorTovalue + "'" + ')';
                                            } else if ((params.searchparams.stmtfromoperator == "!=")) {
                                                conditionObj["stmt_date"] = "Date(STMT_FROM_TO_DATE_TIME) != Date('" + params.searchparams.stmtfromoperatorvalue + "'" + ')';
                                            }
                                        }

                                        if (params.searchparams.stmttooperatorvalue != null && params.searchparams.stmttooperatorvalue != undefined && params.searchparams.stmttooperatorvalue != "") {
                                            if ((params.searchparams.stmttooperator == "Greater Than Or Equal") || (params.searchparams.stmttooperator == ">=") || (params.searchparams.stmttooperator == "&gt;=")) {
                                                conditionObj["stmt_to_date"] = "Date(STMT_TO_DATE_TIME) >= Date('" + params.searchparams.stmttooperatorvalue + "'" + ')';
                                            } else if ((params.searchparams.stmttooperator == "Less Than Or Equal") || (params.searchparams.stmttooperator == "<=") || (params.searchparams.stmttooperator == "&lt;=")) {
                                                conditionObj["stmt_to_date"] = "Date(STMT_TO_DATE_TIME)<= Date('" + params.searchparams.stmttooperatorvalue + "'" + ')';
                                            } else if ((params.searchparams.stmttooperator == "=") || (params.searchparams.stmttooperator == "Equals")||(params.searchparams.stmttooperator == "")) {
                                                conditionObj["stmt_to_date"] = "Date(STMT_TO_DATE_TIME)= Date('" + params.searchparams.stmttooperatorvalue + "'" + ')';
                                            } else if ((params.searchparams.stmttooperator == "BETWEEN")) {
                                                conditionObj["stmt_to_date"] = "Date(STMT_TO_DATE_TIME) between Date('" + params.searchparams.stmttooperatorvalue + "'" + ')' + " and  Date('" + params.searchparams.stmttooperatorTovalue + "'" + ')';
                                            } else if ((params.searchparams.stmttooperator == "!=")) {
                                                conditionObj["stmt_to_date"] = "Date(STMT_TO_DATE_TIME) != Date('" + params.searchparams.stmttooperatorvalue + "'" + ')';
                                            }
                                        }

                                        if (params.searchparams.acctoperatorvalue != null && params.searchparams.acctoperatorvalue != undefined && params.searchparams.acctoperatorvalue != "") {
                                            if ((params.searchparams.acctoperator == "STARTS")) {
                                                conditionObj["acct_no"] = "ACCT_ID like" + "'" + params.searchparams.acctoperatorvalue + "%" + "'";
                                            } else if ((params.searchparams.acctoperator == "CONTAINS")) {
                                                conditionObj["acct_no"] = "ACCT_ID like" + "'" + "%" + params.searchparams.acctoperatorvalue + "%" + "'";
                                            } else if ((params.searchparams.acctoperator == "=") || (params.searchparams.acctoperator == "Equals") ||(params.searchparams.acctoperator == "")) {
                                                conditionObj["acct_no"] = "ACCT_ID = " + "'" + params.searchparams.acctoperatorvalue + "'";
                                            } else if ((params.searchparams.acctoperator == "!=") || (params.searchparams.acctoperator == "NOTEQUAL")) {
                                                conditionObj["acct_no"] = "ACCT_ID != " + "'" + params.searchparams.acctoperatorvalue + "'";
                                            }
                                        }

                                        if (params.searchparams.hdrmsdoperatorvalue != null && params.searchparams.hdrmsdoperatorvalue != undefined && params.searchparams.hdrmsdoperatorvalue != "") {
                                            if ((params.searchparams.hdrmsdoperator == "STARTS")) {
                                                conditionObj["hdr_msg_id"] = "HDR_MSG_ID like" + "'" + params.searchparams.hdrmsdoperatorvalue + "%" + "'";
                                            } else if ((params.searchparams.hdrmsdoperator == "CONTAINS")) {
                                                conditionObj["hdr_msg_id"] = "HDR_MSG_ID like" + "'" + "%" + params.searchparams.hdrmsdoperatorvalue + "%" + "'";
                                            } else if ((params.searchparams.hdrmsdoperator == "=") || (params.searchparams.hdrmsdoperator == "Equals")||(params.searchparams.hdrmsdoperator == "") ) {
                                                conditionObj["hdr_msg_id"] = "HDR_MSG_ID = " + "'" + params.searchparams.hdrmsdoperatorvalue + "'";
                                            } else if ((params.searchparams.hdrmsdoperator == "!=") || (params.searchparams.hdrmsdoperator == "NOTEQUAL")) {
                                                conditionObj["hdr_msg_id"] = "HDR_MSG_ID != " + "'" + params.searchparams.hdrmsdoperatorvalue + "'";
                                            }
                                        }

                                        if (params.searchparams.uetroperator != null && params.searchparams.uetroperator != undefined && params.searchparams.uetroperator != "") {
                                            if ((params.searchparams.uetroperator == "STARTS")) {
                                                conditionObj["uetr"] = "UETR like" + "'" + params.searchparams.uetroperatorvalue + "%" + "'";
                                            } else if ((params.searchparams.uetroperator == "CONTAINS")) {
                                                conditionObj["uetr"] = "UETR like" + "'" + "%" + params.searchparams.uetroperatorvalue + "%" + "'";
                                            } else if ((params.searchparams.uetroperator == "=") || (params.searchparams.uetroperator == "Equals")||(params.searchparams.uetroperator == "")) {
                                                conditionObj["uetr"] = "UETR = " + "'" + params.searchparams.uetroperatorvalue + "'";
                                            } else if ((params.searchparams.uetroperator == "!=") || (params.searchparams.uetroperator == "NOTEQUAL")) {
                                                conditionObj["uetr"] = "UETR != " + "'" + params.searchparams.uetroperatorvalue + "'";
                                            }
                                        }

                                        if (params.searchparams.txnidoperatorvalue != null && params.searchparams.txnidoperatorvalue != undefined && params.searchparams.txnidoperatorvalue != "") {
                                            if ((params.searchparams.txnidoperator == "STARTS")) {
                                                conditionObj["txn_id"] = "TXN_ID like" + "'" + params.searchparams.txnidoperatorvalue + "%" + "'";
                                            } else if ((params.searchparams.txnidoperator == "CONTAINS")) {
                                                conditionObj["txn_id"] = "TXN_ID like" + "'" + "%" + params.searchparams.txnidoperatorvalue + "%" + "'";
                                            } else if ((params.searchparams.txnidoperator == "=") || (params.searchparams.txnidoperator == "Equals")||(params.searchparams.txnidoperator == "")) {
                                                conditionObj["txn_id"] = "TXN_ID = " + "'" + params.searchparams.txnidoperatorvalue + "'";
                                            } else if ((params.searchparams.txnidoperator == "!=") || (params.searchparams.txnidoperator == "NOTEQUAL")) {
                                                conditionObj["txn_id"] = "TXN_ID != " + "'" + params.searchparams.txnidoperatorvalue + "'";
                                            }
                                        }

                                        if (params.searchparams.stmtidoperatorvalue != null && params.searchparams.stmtidoperatorvalue != undefined && params.searchparams.stmtidoperatorvalue != "") {
                                            if ((params.searchparams.stmtidoperator == "STARTS")) {
                                                conditionObj["stmt_id"] = "STMT_ID like" + "'" + params.searchparams.stmtidoperatorvalue + "%" + "'";
                                            } else if ((params.searchparams.stmtidoperator == "CONTAINS")) {
                                                conditionObj["stmt_id"] = "STMT_ID like" + "'" + "%" + params.searchparams.stmtidoperatorvalue + "%" + "'";
                                            } else if ((params.searchparams.stmtidoperator == "=") || (params.searchparams.stmtidoperator == "Equals")||(params.searchparams.stmtidoperator == "")) {
                                                conditionObj["stmt_id"] = "STMT_ID = " + "'" + params.searchparams.stmtidoperatorvalue + "'";
                                            } else if ((params.searchparams.stmtidoperator == "!=") || (params.searchparams.stmtidoperator == "NOTEQUAL")) {
                                                conditionObj["stmt_id"] = "STMT_ID != " + "'" + params.searchparams.stmtidoperatorvalue + "'";
                                            }
                                        }


                                        if (Object.keys(conditionObj).length > 0) {
                                            var first_iteration = true;
                                            for (const index in conditionObj) {
                                                if (conditionObj.hasOwnProperty(index)) {
                                                    if (first_iteration) {
                                                        condtnQry += query + ' ' + "where" + ' ' + conditionObj[index]
                                                        first_iteration = false;
                                                    } else {
                                                        condtnQry += "and" + ' ' + conditionObj[index]
                                                    }
                                                }
                                            }
                                        } else {
                                            condtnQry = query
                                        }


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
