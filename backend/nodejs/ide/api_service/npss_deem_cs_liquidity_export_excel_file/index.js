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
                  
                       
                   
                    let Taketran = `select HDR_MSG_ID, HDR_CREATED_DATE_TIME, HDR_MSG_RCPT_NAME, HDR_MSG_RCPT_ORG_BIC, HDR_MSG_PGNB, HDR_MSG_LAST_PG_IND, STMT_ID, STMT_SEQUENCE_NUMBER, STMT_CREATED_DATE_TIME, STMT_FROM_TO_DATE_TIME, STMT_TO_DATE_TIME, ACCT_ID, PARENT_INST_ACCT_ID, BALANCE_TYPE_PROP, BALANCE_AMOUNT, BALANCE_CUR, BALANCE_CRDB_IND, STMT_BAL_DATE, STMT_BAL_DATE_TIME, COUNT_INDV_ENTRIES, SUM_INDV_ENTRIES, SUM_NET_ENTRIES, NET_CRDB_IND, TOT_CR_ENTRIES, SUM_CR_ENTRIES, TOT_DB_ENTRIES, SUM_DB_ENTRIES, ENTRY_REF, ENTRY_REF_CUR, ENTRY_AMOUNT, ENTRY_CRDB_IND, ENTRY_STATUS, ENTRY_BK_DATE, ENTRY_BK_DATE_TIME, VALUE_DATE, VALUE_DATE_TIME, ACCT_SERV_REF, BANK_CODE_PROP, INSTD_AMOUNT, INSTD_CUR, TXN_AMOUNT, TXN_CUR, BATCH_MSG_ID, BATCH_TXN_COUNT, BATCH_TOT_AMOUNT, BATCH_CRDB_IND, TXN_ACCSVC_REF, PAYMENT_INFO_ID, PAYMENT_INFO_ETE_ID, UETR, TXN_ID, CLR_SYSTEM_REF, CASH_TXN_AMOUNT, TXN_CRDB_IND, INSTRUCTING_FIN_INST_BIC, INSTRUCTED_FIN_INST_BIC, DBTR_BIC, CDTR_BIC from npss_camt53_stmt`;
                   
                   let addquery = await fnSearchParamsQry(Taketran);
                   console.log(addquery);

                   ExecuteQuery1(addquery, function (arrdata) {
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
                                   } else if ((params.searchparams.acctoperator == "=") || (params.searchparams.acctoperator == "Equals")||(params.searchparams.acctoperator == "")) {
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
                                   } else if ((params.searchparams.hdrmsdoperator == "=") || (params.searchparams.hdrmsdoperator == "Equals")||(params.searchparams.hdrmsdoperator == "")) {
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
