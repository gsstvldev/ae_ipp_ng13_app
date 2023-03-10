var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    



    /*  Created By :  Daseen
   Created Date : 28/10/2022
   Modified By : Siva Harish
   Modified Date : 29/11/2022
Modified By : Daseen
   Modified Date : 24/12/2022
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
   var rule_code = params.RULE_CODE;
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
                           var urlqry = `Select param_detail from core_nc_system_setup where param_category = 'NPSS_REJECT_PACK002' and param_code = 'URL' and need_sync = 'Y'`
                           var seltranqry = `select * from npss_transactions where npsst_id='${params.Id}'`
                           var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}' and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                           // var selplqry=`select tpl.cbuae_return_code,crn.return_description,tpl.npsstrrd_refno from npss_trn_process_log tpl inner join core_nc_return_codes crn on  tpl.cbuae_return_code=crn.return_code where npsstpl_id='${params.tpl_id}'`


                           ExecuteQuery1(ruleqry, function (result) {
                               if (result.length) {
                                   success_process_status = result[0].success_process_status;
                                   success_status = result[0].success_status;
                                   ExecuteQuery1(urlqry, function (urlresult) {
                                       if (urlresult.length > 0) {
                                           api_url = urlresult[0].param_detail;
                                           ExecuteQuery1(seltranqry, function (tranresult) {
                                               if (tranresult.length > 0) {
                                                     var selplqry = `select CBUAE_RETURN_CODE from npss_trn_process_log where status = 'IP_RCT_REV_REQ_REJECTED' and uetr = '${tranresult[0].uetr}'`
                                                   ExecuteQuery1(selplqry, function (tplresult) {
                                                       if (tplresult.length > 0) {
                                                           var hdrqry = `select process_name,status,uetr,msg_id,fx_resv_text1 from npss_trn_process_log where process_name='Receive Pacs.007' and  status = 'IP_RCT_REVERSAL_REQ_RECEIVED' and uetr =  '${tranresult[0].uetr}'`
                                                           ExecuteQuery1(hdrqry, function (hdrresult) {
                                                               if (hdrresult.length > 0) {
                                                                   fn_DoAPIServiceCall(tranresult, tplresult, api_url, rule_code, hdrresult, function (apiresult) {
                                                                       if (apiresult === "SUCCESS") {
                                                                           var updtranqry = `update npss_transactions set  status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                                                           ExecuteQuery(updtranqry, function (uptranresult) {
                                                                               if (uptranresult == 'SUCCESS') {
                                                                                   objresponse.status = 'SUCCESS';
                                                                                   sendResponse(null, objresponse)
                                                                               }
                                                                           })

                                                                       } else {
                                                                        objresponse.status = 'Pac002 Api Call Failed';
                                                                        sendResponse(null, objresponse)
                                                                       }
                                                                   })
                                                               } else {/*  */
                                                                   console.log("No Record in process log for 007");
                                                                   objresponse.status = 'No Data Found Against Pac007 in Trn Processlog Table';
                                                                   sendResponse(null, objresponse)
                                                               }
                                                           })
                                                       }
                                                       else {
                                                           console.log("No record found in   transaction log table");
                                                           objresponse.status = 'No CBUAE Return Code Found in Trn PreocessLog Table';
                                                           sendResponse(null, objresponse)
                                                       }
                                                   })





                                               }
                                               else {
                                                   console.log("Error in update transaction");
                                                   objresponse.status = 'No Data Found for this Tran in Tran Table';
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
                   function fn_DoAPIServiceCall(tranresult, tplresult, url, rule_code,hdrresult, callbackapi) {
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
                                   //"hdr_msg_id": tranresult[0].hdr_msg_id,
                                   //"hdr_created_date": tranresult[0].hdr_created_date,
                                   "hdr_msg_id": hdrresult[0].msg_id,
                                   "hdr_created_date": hdrresult[0].fx_resv_text1,
                                   
                                   "hdr_total_amount": tranresult[0].hdr_total_amount,
                                   "payment_endtoend_id": tranresult[0].payment_endtoend_id,
                                   "uetr": tranresult[0].uetr,
                                   "tran_ref_id": tranresult[0].tran_ref_id,
                                   "active_status": 'RJCT',
                                   "clrsysref": tranresult[0].clrsysref,
                                   "rsn_code": tplresult[0].cbuae_return_code,

                                   "parent_npsstrrd_refno": tplresult[0].npsstrrd_refno

                               },
                               headers: {
                                   'content-type': 'application/json'
                               }
                           };

                         
                           reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                           request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                               if (error) {
                                   reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                   sendResponse(error);
                               } else {
                                 reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
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
