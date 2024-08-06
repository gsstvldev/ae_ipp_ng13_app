var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


/*  Created By : Suresh
Created Date : 05/08/2024 
wi - npss   3999  */
var serviceName = 'NPSS DEEM (CS) Liquidity Export Csv file';
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
    objSessionLogInfo.HANDLER_CODE = 'NPSS DEEM (CS) Liquidity Export Csv file';
    objSessionLogInfo.ACTION = 'ACTION';
    objSessionLogInfo.PROCESS = 'NPSS DEEM (CS) Liquidity Export Csv file';
    // Get DB Connection 
    reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
      mTranConn = pSession; //  assign connection     
      try {
        let Taketran;

        //  Taketran = `select hdr_msg_id,hdr_msg_rcpt_name,hdr_msg_rcpt_id,stmt_id,stmt_from_to_date_time,stmt_to_date_time,instn_acct_id,parent_acct_id,balance_type,balance_amount,balance_crdb_ind,stmt_bal_date,orig_amount,instd_amount,txn_amount,uetr,txn_id from NPSS_CAMT53_STMT `;
        Taketran = `select ACCT_ID,PARENT_INST_ACCT_ID,BALANCE_TYPE_PROP,BALANCE_AMOUNT, BALANCE_CUR, BALANCE_CRDB_IND, STMT_BAL_DATE, STMT_BAL_DATE_TIME, COUNT_INDV_ENTRIES, SUM_INDV_ENTRIES, SUM_NET_ENTRIES, NET_CRDB_IND, TOT_CR_ENTRIES, SUM_CR_ENTRIES, TOT_DB_ENTRIES, SUM_DB_ENTRIES, ENTRY_REF, ENTRY_REF_CUR, ENTRY_AMOUNT, ENTRY_CRDB_IND, ENTRY_STATUS, ENTRY_BK_DATE, ENTRY_BK_DATE_TIME, VALUE_DATE, VALUE_DATE_TIME, ACCT_SERV_REF, BANK_CODE_PROP, INSTD_AMOUNT, INSTD_CUR, TXN_AMOUNT, TXN_CUR, BATCH_MSG_ID, BATCH_TXN_COUNT, BATCH_TOT_AMOUNT, BATCH_CRDB_IND, TXN_ACCSVC_REF, PAYMENT_INFO_ID, PAYMENT_INFO_ETE_ID, UETR, TXN_ID, CLR_SYSTEM_REF, CASH_TXN_AMOUNT, TXN_CRDB_IND, INSTRUCTING_FIN_INST_BIC, INSTRUCTED_FIN_INST_BIC, DBTR_BIC, CDTR_BIC from ad_gss_tran.npss_camt53_stmt`;
        Taketranqry = await fnSearchParamsQry(Taketran);

        console.log(Taketran);
        ExecuteQuery1(Taketranqry, function (arrdata) {
          if (arrdata.length > 0) {
            objresponse.status = 'SUCCESS';
            objresponse.data = arrdata;
            sendResponse(null, objresponse);
                           /* 
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
*/                        } else {
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
        // function fnSearchParamsQry() {
        //     return new Promise((resolve, reject) => {
        //         try {
        //             let conditionObj = {};
        //             let dateOperator = params.S_DATE_OP;
        //             let dateValue = params.S_DATE
        //             let toDateValue = params.S_DATE_TO_VALUE
        //             if (dateOperator === "Greater Than Or Equal" || dateOperator === ">=" || dateOperator === "&gt;=") {
        //                 conditionObj["date"] = `Date(created_date) >= Date('${dateValue}')`;
        //             } else if (dateOperator === "Less Than Or Equal" || dateOperator === "<=" || dateOperator === "&lt;=") {
        //                 conditionObj["date"] = `Date(created_date) <=  Date('${dateValue}')`;
        //             } else if (dateOperator === "=" || dateOperator === "Equals") {
        //                 conditionObj["date"] = `Date(created_date) =  Date('${dateValue}')`;
        //             } else if (dateOperator === "BETWEEN" && toDateValue) {
        //                 conditionObj["date"] = `Date(created_date) BETWEEN  Date('${dateValue}') AND Date('${toDateValue}' )`;
        //             } else if (dateOperator === "Not Equal" || dateOperator === "!=" || dateOperator === "&lt;&gt;") {
        //                 conditionObj["date"] = `Date(created_date) !=  Date('${dateValue}')`;
        //             }
        //             else {
        //                 reject(new Error('Invalid date operator or missing toDateValue for BETWEEN operator'));
        //             }
        //             let conditionQry = `Select hdr_msg_id,hdr_msg_rcpt_name,hdr_msg_rcpt_id,stmt_id,stmt_from_to_date_time,stmt_to_date_time,instn_acct_id,parent_acct_id,balance_type,balance_amount,balance_crdb_ind,stmt_bal_date,orig_amount,instd_amount,txn_amount,uetr,txn_id from NPSS_CAMT53_STMT WHERE ${conditionObj.date}`;
        //             resolve(conditionQry);
        //         } catch (error) {
        //             reject(error);
        //         }
        //     });
        // }
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
        function fnSearchParamsQry(query) {
          return new Promise((resolve, reject) => {
            try {
              var condtnQry = ""
              conditionObj = {}
              if (params.S_DATE != null && params.S_DATE != undefined && params.S_DATE != "") {
                if ((params.S_DATE_OP == "Greater Than Or Equal") || (params.S_DATE_OP == ">=") || (params.S_DATE_OP == "&gt;=")) {
                  conditionObj["created_date"] = "Date(created_date) >= Date('" + params.S_DATE + "'" + ')';
                } else if ((params.S_DATE_OP == "Less Than Or Equal") || (params.S_DATE_OP == "<=") || (params.S_DATE_OP == "&lt;=")) {
                  conditionObj["created_date"] = "Date(created_date)<= Date('" + params.S_DATE + "'" + ')';
                } else if ((params.S_DATE_OP == "=") || (params.S_DATE_OP == "Equals")) {
                  conditionObj["created_date"] = "Date(created_date)= Date('" + params.S_DATE + "'" + ')';
                } else if ((params.S_DATE_OP == "BETWEEN")) {
                  conditionObj["created_date"] = "Date(created_date) between Date('" + params.S_DATE + "'" + ')' + " and  Date('" + params.S_DATE_TO_VALUE + "'" + ')';
                } else if ((params.S_DATE_OP == "!=")) {
                  conditionObj["created_date"] = "Date(created_date) != Date('" + params.S_DATE + "'" + ')';
                }
              }
              if (params.S_STD_FROM_VAL != null && params.S_STD_FROM_VAL != undefined && params.S_STD_FROM_VAL != "") {
                if ((params.S_STD_FROM_OPR == "Greater Than Or Equal") || (params.S_STD_FROM_OPR == ">=") || (params.S_STD_FROM_OPR == "&gt;=")) {
                  conditionObj["stmt_date"] = "Date(STMT_FROM_TO_DATE_TIME) >= Date('" + params.S_STD_FROM_VAL + "'" + ')';
                } else if ((params.S_STD_FROM_OPR == "Less Than Or Equal") || (params.S_STD_FROM_OPR == "<=") || (params.S_STD_FROM_OPR == "&lt;=")) {
                  conditionObj["stmt_date"] = "Date(STMT_FROM_TO_DATE_TIME)<= Date('" + params.S_STD_FROM_VAL + "'" + ')';
                } else if ((params.S_STD_FROM_OPR == "=") || (params.S_STD_FROM_OPR == "Equals")) {
                  conditionObj["stmt_date"] = "Date(STMT_FROM_TO_DATE_TIME)= Date('" + params.S_STD_FROM_VAL + "'" + ')';
                } else if ((params.S_STD_FROM_OPR == "BETWEEN")) {
                  conditionObj["stmt_date"] = "Date(STMT_FROM_TO_DATE_TIME) between Date('" + params.S_STD_FROM_VAL + "'" + ')' + " and  Date('" + params.S_STD_FROM_TOVAL + "'" + ')';
                } else if ((params.S_STD_FROM_OPR == "!=")) {
                  conditionObj["stmt_date"] = "Date(STMT_FROM_TO_DATE_TIME) != Date('" + params.S_STD_FROM_VAL + "'" + ')';
                }
              }

              if (params.S_STD_TO_VAL != null && params.S_STD_TO_VAL != undefined && params.S_STD_TO_VAL != "") {
                if ((params.S_STD_TO_OPR == "Greater Than Or Equal") || (params.S_STD_TO_OPR == ">=") || (params.S_STD_TO_OPR == "&gt;=")) {
                  conditionObj["stmt_to_date"] = "Date(STMT_TO_DATE_TIME) >= Date('" + params.S_STD_TO_VAL + "'" + ')';
                } else if ((params.S_STD_TO_OPR == "Less Than Or Equal") || (params.S_STD_TO_OPR == "<=") || (params.S_STD_TO_OPR == "&lt;=")) {
                  conditionObj["stmt_to_date"] = "Date(STMT_TO_DATE_TIME)<= Date('" + params.S_STD_TO_VAL + "'" + ')';
                } else if ((params.S_STD_TO_OPR == "=") || (params.S_STD_TO_OPR == "Equals")) {
                  conditionObj["stmt_to_date"] = "Date(STMT_TO_DATE_TIME)= Date('" + params.S_STD_TO_VAL + "'" + ')';
                } else if ((params.S_STD_TO_OPR == "BETWEEN")) {
                  conditionObj["stmt_to_date"] = "Date(STMT_TO_DATE_TIME) between Date('" + params.S_STD_TO_VAL + "'" + ')' + " and  Date('" + params.S_STD_TO_TOVAL + "'" + ')';
                } else if ((params.S_STD_TO_OPR == "!=")) {
                  conditionObj["stmt_to_date"] = "Date(STMT_TO_DATE_TIME) != Date('" + params.S_STD_TO_VAL + "'" + ')';
                }
              }

              if (params.S_ACC_ID_VAL != null && params.S_ACC_ID_VAL != undefined && params.S_ACC_ID_VAL != "") {
                if ((params.S_ACC_ID_OPR == "STARTS")) {
                  conditionObj["acct_no"] = "ACCT_ID like" + "'" + params.S_ACC_ID_VAL + "%" + "'";
                } else if ((params.S_ACC_ID_OPR == "CONTAINS")) {
                  conditionObj["acct_no"] = "ACCT_ID like" + "'" + "%" + params.S_ACC_ID_VAL + "%" + "'";
                } else if ((params.S_ACC_ID_OPR == "=") || (params.S_ACC_ID_OPR == "Equals")) {
                  conditionObj["acct_no"] = "ACCT_ID = " + "'" + params.S_ACC_ID_VAL + "'";
                } else if ((params.S_ACC_ID_OPR == "!=") || (params.S_ACC_ID_OPR == "NOTEQUAL")) {
                  conditionObj["acct_no"] = "ACCT_ID != " + "'" + params.S_ACC_ID_VAL + "'";
                }
              }

              if (params.S_MSG_ID != null && params.S_MSG_ID != undefined && params.S_MSG_ID != "") {
                if ((params.S_MSG_ID_OPT == "STARTS")) {
                  conditionObj["hdr_msg_id"] = "HDR_MSG_ID like" + "'" + params.S_MSG_ID + "%" + "'";
                } else if ((params.S_MSG_ID_OPT == "CONTAINS")) {
                  conditionObj["hdr_msg_id"] = "HDR_MSG_ID like" + "'" + "%" + params.S_MSG_ID + "%" + "'";
                } else if ((params.S_MSG_ID_OPT == "=") || (params.S_MSG_ID_OPT == "Equals")) {
                  conditionObj["hdr_msg_id"] = "HDR_MSG_ID = " + "'" + params.S_MSG_ID + "'";
                } else if ((params.S_MSG_ID_OPT == "!=") || (params.S_MSG_ID_OPT == "NOTEQUAL")) {
                  conditionObj["hdr_msg_id"] = "HDR_MSG_ID != " + "'" + params.S_MSG_ID + "'";
                }
              }

              if (params.S_UETR_VAL != null && params.S_UETR_VAL != undefined && params.S_UETR_VAL != "") {
                if ((params.S_UETR_OPR == "STARTS")) {
                  conditionObj["uetr"] = "UETR like" + "'" + params.S_UETR_VAL + "%" + "'";
                } else if ((params.S_UETR_OPR == "CONTAINS")) {
                  conditionObj["uetr"] = "UETR like" + "'" + "%" + params.S_UETR_VAL + "%" + "'";
                } else if ((params.S_UETR_OPR == "=") || (params.S_UETR_OPR == "Equals")) {
                  conditionObj["uetr"] = "UETR = " + "'" + params.S_UETR_VAL + "'";
                } else if ((params.S_UETR_OPR == "!=") || (params.S_UETR_OPR == "NOTEQUAL")) {
                  conditionObj["uetr"] = "UETR != " + "'" + params.S_UETR_VAL + "'";
                }
              }

              if (params.S_TRANSAC_ID_VAL != null && params.S_TRANSAC_ID_VAL != undefined && params.S_TRANSAC_ID_VAL != "") {
                if ((params.S_TRANSAC_ID_OPR == "STARTS")) {
                  conditionObj["txn_id"] = "TXN_ID like" + "'" + params.S_TRANSAC_ID_VAL + "%" + "'";
                } else if ((params.S_TRANSAC_ID_OPR == "CONTAINS")) {
                  conditionObj["txn_id"] = "TXN_ID like" + "'" + "%" + params.S_TRANSAC_ID_VAL + "%" + "'";
                } else if ((params.S_TRANSAC_ID_OPR == "=") || (params.S_TRANSAC_ID_OPR == "Equals")) {
                  conditionObj["txn_id"] = "TXN_ID = " + "'" + params.S_TRANSAC_ID_VAL + "'";
                } else if ((params.S_TRANSAC_ID_OPR == "!=") || (params.S_TRANSAC_ID_OPR == "NOTEQUAL")) {
                  conditionObj["txn_id"] = "TXN_ID != " + "'" + params.S_TRANSAC_ID_VAL + "'";
                }
              }

              if (params.S_STD_ID != null && params.S_STD_ID != undefined && params.S_STD_ID != "") {
                if ((params.S_STD_ID_OPR == "STARTS")) {
                  conditionObj["stmt_id"] = "STMT_ID like" + "'" + params.S_STD_ID + "%" + "'";
                } else if ((params.S_STD_ID_OPR == "CONTAINS")) {
                  conditionObj["stmt_id"] = "STMT_ID like" + "'" + "%" + params.S_STD_ID + "%" + "'";
                } else if ((params.S_STD_ID_OPR == "=") || (params.S_STD_ID_OPR == "Equals")) {
                  conditionObj["stmt_id"] = "STMT_ID = " + "'" + params.S_STD_ID + "'";
                } else if ((params.S_STD_ID_OPR == "!=") || (params.S_STD_ID_OPR == "NOTEQUAL")) {
                  conditionObj["stmt_id"] = "STMT_ID != " + "'" + params.S_STD_ID + "'";
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
