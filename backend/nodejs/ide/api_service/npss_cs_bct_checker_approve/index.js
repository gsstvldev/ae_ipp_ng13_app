var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

/*Created By :   Daseen
  Created Date :06/03/2023
Modified By :  (NPSS WI - 3781)
Modified Date : 03/05/2024
Reason for :
*/
var serviceName = ' NPSS (CS) BCT Checker Approve'; //service name
var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail
var reqAuditLog = require($REFPATH + 'log/audit/AuditLog'); //audit log information
var reqFXDBInstance = require($REFPATH + 'instance/DBInstance'); // casandra db pointing
var reqInsHelper = require($REFPATH + 'common/InstanceHelper'); //  Response,error,info msg printing        
var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter'); //date formatter
var params = appRequest.body.PARAMS; //  Client input fromm Server
console.log("app headers=====================>", appRequest.headers);
var reqAsync = require('async')
var headers = appRequest.headers; // header details
// headers["session-id"] = "STATIC-SESSION-KEEQB-4";
console.log("headers after adding session id ========>", headers);
var objSessionLogInfo = null; // set value is null
var mTranConn = "";
var request = require('request');
var momentTimezone = require("moment-timezone");
var success_status, success_process_status;
var elgobj = {};
var arrTranId
//console.log('**************************' + headers['session-id'])
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
    objSessionLogInfo.HANDLER_CODE = ' NPSS (CS) BCT Checker Approve';
    objSessionLogInfo.ACTION = 'ACTION';
    objSessionLogInfo.PROCESS = ' NPSS (CS) BCT Checker Approve';
    // Get DB Connection
    reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
      mTranConn = pSession; //  assign connection
      reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
        var PRCT_ID = prct_id
        //get prct id                              
        try {
          var take_status = `Select success_process_status,success_status from core_nc_workflow_setup where rule_code='${params.rule_code}' and eligible_status='${params.eligible_status}' and  eligible_process_status='${params.eligible_process_status}'`, arrTranID;
          // if (Array.isArray(params.Tran_id)) {
          // arrTranID = params.Tran_id.map(function (eachTran) { return eachTran.toString(); });
          arrTranID = `${params.Tran_id}`;
          // }
          // else {
          // arrTranID = [params.Tran_id.toString()];
          // arrTranID =`'${params.Tran_id}'`;
          // }
          TempTranID = `${params.Tran_id}`;
          // TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
          // TempTranID = '('  + arrTranID.toString().split(',').join("','")  + ')';
          ExecuteQuery1(take_status, async function (arrSts) {
            if (arrSts.length) {
              var TakeStsPsts = `select * from npss_transactions where npsst_id = '${arrTranID}'`
              var TakeApiurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_INVESTIGATION_PAC_028' and param_code='URL' and need_sync = 'Y'`
              //arrresult, arrUrl, payment_processing_method
              let arrNpssTrnReusult = await ExecSelectQuery(TakeStsPsts)
              let arrUrlValue = await ExecSelectQuery(TakeApiurl), apicalRes
              if (arrNpssTrnReusult.length > 0) {
                apicalRes = await doIteration(arrNpssTrnReusult, arrUrlValue)
                if (apicalRes == 'SUCCESS') {
                  success_status = arrSts[0].success_status;
                  success_process_status = arrSts[0].success_process_status;
                  if (params.Tran_id) {
                    var uptTrnqry = `update npss_transactions set status='${success_status}',process_status='${success_process_status}' ,MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id =` + TempTranID;
                    ExecuteQuery(uptTrnqry, function (trnRes) {
                      if (trnRes == "SUCCESS") {
                        objresponse.status = 'SUCCESS';
                        sendResponse(null, objresponse);
                      }
                      else {
                        objresponse.status = 'Error in Transaction  Table update';
                        objresponse.data = 'Error in Transaction  Table update';
                        sendResponse(null, objresponse)
                      }
                    })
                  } else {
                    objresponse.status = 'No Transaction Found';
                    objresponse.data = 'No Transaction Found';
                    sendResponse(null, objresponse)
                  }
                }
              }
              else {
                objresponse.status = 'No Data found for Pacs028'
                objresponse.data = 'No Data found for Pacs028'
                sendResponse(null, objresponse)
              }
            } else {
              objresponse.status = '"No Rule found in Workflow Table'
              objresponse.data = "No Rule found in Workflow Table"
              sendResponse(null, objresponse)
            }
          }
          )
          function doIteration(arrNpssTrnReusult, arrUrlValue) {
            return new Promise(async (resolve, reject) => {
              try {
                let api_succ_count = 0
                for (let i = 0; i < arrNpssTrnReusult.length; i++) {
                  let arrdata = []
                  // }
                  if ((arrNpssTrnReusult[i].status.includes('IP_BCT_INVEST_INITIATED') || arrNpssTrnReusult[i].status.includes('IP_BCT_RTN_INVEST_INITIATED'))) {
                    arrdata = arrNpssTrnReusult[i]
                    let apicalRes = await fn_callApi(arrdata, arrUrlValue)
                    if (apicalRes == 'SUCCESS')
                      api_succ_count++
                  }
                  else {
                    api_succ_count++
                  }
                }
                if (api_succ_count == arrNpssTrnReusult.length) {
                  resolve('SUCCESS')
                }
                else {
                  resolve('Failure')
                }
              }
              catch (error) {
                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                sendResponse(error, null);
              }
            })
          }
          function ExecSelectQuery(ExecQry) {
            return new Promise((resolve, reject) => {
              try {
                ExecuteQuery1(ExecQry, (arrresult) => {
                  resolve(arrresult)
                })
              }
              catch (error) {
                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                sendResponse(error, null);
              }
            })
          }
          function fn_callApi(arrresult, arrUrl) {
            return new Promise((resolve, reject) => {
              try {
                var request = require('request');
                var apiURL =
                  apiURL = arrUrl[0].param_detail; // apiURL + apiName
                var options = {
                  url: apiURL,
                  timeout: 99999999,
                  method: 'POST',
                  json: {
                    "hdr_created_date": (arrresult[0].status.includes('IP_BCT_INVEST_INITIATED') && arrresult[0].process_type == 'IP') ? arrresult[0].hdr_created_date : arrresult[0].fx_resv_text1 || '',
                    "cr_sort_code": arrresult[0].cr_sort_code,
                    "payment_endtoend_id": arrresult[0].payment_endtoend_id,
                    "uetr": arrresult[0].uetr,
                    "tran_ref_id": arrresult[0].tran_ref_id,
                    "payment_processing_method": payment_processing_method,
                    "process_type": arrresult[0].process_type || ''
                  },
                  headers: {
                    'content-type': 'application/json'
                  }
                };
                if (arrresult[0].process_type == 'IP') {
                  options.json.process = 'Investigation_pacs028_batch'
                }
                if (arrresult[0].status.includes('IP_BCT_INVEST_INITIATED') && arrresult[0].process_type == 'IP') {
                  options.json.hdr_msg_id = arrresult[0].hdr_msg_id;
                  options.json.message_format = 'urn:iso:std:iso:20022:tech:xsd:pacs.004.001.11'

                } else if (arrresult[0].status.includes('IP_BCT_RTN_INVEST_INITIATED') && arrresult[0].process_type == 'IP') {
                  options.json.hdr_msg_id = arrresult[0].fx_resv_text5;
                  options.json.message_format = 'urn:iso:std:iso:20022:tech:xsd:pacs.008.001.09'
                }
                else {
                  options.json.hdr_msg_id = ''
                  options.json.message_format = ''
                }
                reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {

                  if (error) {
                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                    sendResponse(error, null);
                  } else {
                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                    resolve(responseBodyFromImagingService)
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

          //fucntion to execute select query
          function ExecuteQuery1(query, callback) {
            reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
              try {
                if (error) {
                  //reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, "IDE_SERVICE_10005", "ERROR IN EXECUTE QUERY EXECUTION FUNCTION", error);
                  sendResponse(error);
                } else {
                  if (result.rows.length > 0) {
                    callback(result.rows);
                  } else {
                    callback([]);
                  }
                }
              } catch (error) {
                //reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, "IDE_SERVICE_10004", "ERROR IN EXECUTE QUERY FUNCTION", error);
                sendResponse(error);
              }
            });
          }
        } catch (error) {
          reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10003', 'ERROR IN DB CONNECTION FUNCTION', error);
        }
      })
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
