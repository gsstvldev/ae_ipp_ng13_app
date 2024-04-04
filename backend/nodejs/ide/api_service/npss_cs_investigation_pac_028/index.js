var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    
    
    


      /*   Created By :   Siva Harish
      Created Date : 28/10/2022
      Modified By : Siva Harish
      Modified Date : 11/01/2023
        Reason for change : Daseen 06-03-2023 Status change after api call success
         Reason for change : CHANGING 028 payload siva harish 22/03/2023
         Reason for change : CHANGING 028 process group 19/04/2023
         Reason for change : handling process ,payment process mthd  for BCT 19/03/2024 by daseen WI 3598
           Reason for change : handling hdr_msg_is,message_format  for OP_BCT_RTN_STAT_PENDING 04/04/2024 by daseen WI 3704
       
      */
         var serviceName = 'NPSS Investigation Pac 028';
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
         }; // Response to   Client
         // Assign function for loginformation and session info
         reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
             try {
                 objSessionLogInfo = objLogInfo; // Assing log information
                 // Log Viewer Setup
                 objSessionLogInfo.HANDLER_CODE = 'NPSS Investigation Pac 028';
                 objSessionLogInfo.ACTION = 'ACTION';
                 objSessionLogInfo.PROCESS = 'NPSS Investigation Pac 028';
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
                             var final_status
                             var final_process_status
                             try {
                                 try {
                                     var TakeStsPsts = `select * from npss_transactions where npsst_id = '${params.Tran_Id}'`
                                     var TakeApiurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_INVESTIGATION_PAC_028' and param_code='URL' and need_sync = 'Y'`
                                     var Takstatus = `Select success_process_status,success_status from core_nc_workflow_setup where rule_code='${params.rule_code}' and eligible_status='${params.eligible_status}' and  eligible_process_status='${params.eligible_process_status}'`
                                     ExecuteQuery1(TakeApiurl, function (arrUrl) {
                                         if (arrUrl.length) {
                                             ExecuteQuery1(TakeStsPsts, function (arrresult) {
                                                 try {
                                                     if (arrresult.length > 0) {
                                                       var payment_processing_method 
                                                  
                                                     
                                                             
                                                               if(arrresult[0].process_group == 'P2P'){
                                                                   payment_processing_method =  "SCT_INITITATION" 
                                                                 
                                                               }else if(arrresult[0].process_group == 'P2B'){
                                                                   payment_processing_method =  "P2B_SCT_INITITATION" 
                                                                   
                                                               }else if(arrresult[0].process_group == 'IBAN' || arrresult[0].process_group == 'BCT'){
                                                                   payment_processing_method = "AC_AC_IBAN" 
                                                                  
                                                               }else{
                                                                   payment_processing_method = ''
                                                               }
                                                         fn_callApi(arrresult, arrUrl, payment_processing_method,function (result) {
                                                             if (result == 'SUCCESS') {
                                                                 ExecuteQuery1(Takstatus, function (arrstatus) {
                                                                     if (arrstatus.length > 0) {
                                                                         var UpdTrnTbl = `update npss_transactions set status='${arrstatus[0].success_status}',process_status='${arrstatus[0].success_process_status}' ,MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`;
                                                                         ExecuteQuery(UpdTrnTbl, function (Updres) {
                                                                             if(Updres == 'SUCCESS'){
                                                                                 objresponse.status = 'SUCCESS';
                                                                                 sendResponse(null, objresponse);
                                                                             }else{
                                                                                 objresponse.status = 'Fail in Trn Update';
                                                                                 sendResponse(null, objresponse);
                                                                             }
     
                                                                         })
                                                                     } else {
                                                                         objresponse.status = 'No data found in workflow setup Table';
                                                                         sendResponse(null, objresponse);
                                                                     }
                                                                 })
                                                                
                                                             } else {
     
                                                                 objresponse.status = 'Pac028 Api Call Failure';
                                                                 sendResponse(null, objresponse);
     
                                                             }
                                                         })
     
                                                     } else {
                                                         objresponse.status = 'NO Data Found for Tran Id';
                                                         sendResponse(null, objresponse);
                                                     }
     
                                                 } catch (error) {
                                                     sendResponse(error)
                                                 }
                                             })
                                         } else {
                                             objresponse.status = 'API Url Not Found';
                                             sendResponse(null, objresponse);
                                         }
                                     })
     
     
     
     
     
     
                                     function fn_callApi(arrresult, arrUrl,payment_processing_method, callbackapi) {
                                         try {
                                             var request = require('request');
                                             var apiURL =
                                                 apiURL = arrUrl[0].param_detail; // apiURL + apiName
                                             var options = {
                                                 url: apiURL,
                                                 timeout: 99999999,
                                                 method: 'POST',
                                                 json: {
                                                     "hdr_created_date": arrresult[0].hdr_created_date,
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
                                             if(arrresult[0].process_group == 'BCT'){
                                                options.json.process='Investigation_pacs028_batch'
                                             }
                                             if(arrresult[0].status.includes('OP_BCT_RTN_INVEST_INITIATED') && arrresult[0].process_type =='OP' ){
                                                options.json.hdr_msg_id=arrresult[0].fx_resv_text5;
                                                options.json. message_format='urn:iso:std:iso:20022:tech:xsd:pacs.004.001.11'

                                             }else{
                                                options.json.hdr_msg_id=arrresult[0].hdr_msg_id;
                                                options.json. message_format='urn:iso:std:iso:20022:tech:xsd:pacs.008.001.09'

                                             }
     
     
                                             reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                             request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
     
                                                 if (error) {
                                                     reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                                     sendResponse(error, null);
                                                 } else {
                                                     reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
     
                                                     callbackapi(responseBodyFromImagingService)
                                                 }
                                             });
                                         } catch (error) {
                                             reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                             sendResponse(error, null);
                                         }
                                     }
     
     
     
     
     
     
     
     
                                 } catch (error) {
                                     sendResponse(error)
                                 }
                                 // });
     
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
                                                 sendResponse(error);
                                             } else {
                                                 callback("SUCCESS");
                                             }
                                         } catch (error) {
                                             sendResponse(error);
                                         }
                                     });
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
