var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    /*  Created By : Daseen
   Created Date : 28/10/2022
   Modified By : 
   Modified Date : 
   Reason for : 
    
   */
   var serviceName = 'NPSS Reject Pack002';
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
   var api_url;
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
           objSessionLogInfo.HANDLER_CODE = 'NPSS Reject Pack 002';
           objSessionLogInfo.ACTION = 'ACTION';
           objSessionLogInfo.PROCESS = 'NPSS Reject Pack 002';
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
                           var urlqry = `select  api_url from core_api_master_rule_setup where api_code='${params.RULE_CODE}'`
                           var seltranqry = `select * from npss_transactions where npsst_id='${params.Id}'`
                           var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}`
                           var selplqry=`select tpl.cbuae_return_code,crn.return_description from npss_trn_process_log tpl inner join core_nc_return_codes crn on  tpl.cbuae_return_code=crn.return_code where npsstpl_id='${params.tpl_id}'`


                           ExecuteQuery1(ruleqry, function (result) {
                               if (result.length) {
                                   success_process_status = result[0].success_process_status;
                                   success_status = result[0].success_status;
                                   ExecuteQuery1(urlqry, function (urlresult) {
                                       if (urlresult.length > 0) {
                                           api_url = urlresult[0].api_url;
                                           ExecuteQuery1(seltranqry, function (tranresult) {
                                               if (tranresult.length > 0) {
                                                   ExecuteQuery1(selplqry, function (tplresult) {
                                                       if (tplresult.length > 0) {
                                                           fn_DoAPIServiceCall(tranresult,tplresult, api_url, function (apiresult) {
                                                               if (apiresult === "SUCCESS") {
                                                                   var updtranqry = `update npss_transactions set  status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                                                   ExecuteQuery(updtranqry, function (uptranresult) {
                                                                       if(uptranresult=='SUCCESS'){
                                                                           objresponse.status = 'SUCCESS';
                                                                           sendResponse(null, objresponse)
                                                                       }
                                                                   })
                                                                   
                                                               } else {
                                                                   reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Data not received from service", result);
                                                                   sendResponse('Data not received from service.please check the log');
                                                               }
                                                           })
                                                       }
                                                       else {
                                                           console.log("Error in update transaction");
                                                           objresponse.status = 'FAILURE';
                                                           sendResponse(null, objresponse)
                                                       }
                                                   })

                                                  



                                               }
                                               else {
                                                   console.log("Error in update transaction");
                                                   objresponse.status = 'FAILURE';
                                                   sendResponse(null, objresponse)
                                               }
                                           })
                                       }
                                       else {
                                           console.log("No Rule code Found");
                                           objresponse.status = 'FAILURE';
                                           sendResponse(null, objresponse)
                                       }

                                   })

                               }
                               else {
                                   console.log("No data Found In Rule Code");
                                   objresponse.status = 'FAILURE';
                                   sendResponse(null, objresponse)
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


                   // Do API Call for Service 
                   function fn_DoAPIServiceCall(tranresult, url, rule_code, callbackapi) {
                       try {
                           var request = require('request');
                           var apiURL =
                               apiURL = url // apiURL + apiName
                           var options = {
                               url: apiURL,
                               timeout: 18000000,
                               method: 'POST',
                               json: {
                                   "cr_sort_code": tranresult[0].cr_sort_code,
                                   "dr_sort_code": tranresult[0].dr_sort_code,
                                   "hdr_msg_id": tranresult[0].hdr_msg_id,
                                   "hdr_created_date": tranresult[0].hdr_created_date,
                                   "hdr_total_amount": tranresult[0].hdr_total_amount,
                                   "payment_endtoend_id": tranresult[0].payment_endtoend_id,
                                   "uetr": tranresult[0].uetr,
                                   "txid": tranresult[0].TRAN_REF_ID,
                                   "active_status": 'RJCT',
                                   "rsn_code":tplresult[0].cbuae_return_code,
                                   "rsn_additional_info":tplresult[0].return_description

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
                                   sendResponse(error);
                               } else {
                                   console.log("------API CALL SUCCESS----");
                                   callbackapi(responseBodyFromImagingService)
                               }
                           });
                       } catch (error) {
                           reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                           sendResponse(error);
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
