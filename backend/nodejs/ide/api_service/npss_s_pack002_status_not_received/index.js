var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    






    /*  Created By :Daseen
    Created Date :18/02/2023
    Modified By : 
    Modified Date : 
   }
    */
   var serviceName = 'NPSS (S) Pack002 Status Not Received ';

   var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
   var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
   var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
   var reqXlsx = require('node-xlsx').default;
   var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
   var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
   var params = appRequest.body.PARAMS; //  Client input fromm Server
   var headers = appRequest.headers; // header details 
   var objSessionLogInfo = null; // set value is null
   var success_process_status, success_status;
   var moment = require('moment-timezone');
   var mTranConn = "";
   var process_type, message_type;
   var reqAsync = require('async');
   var failedData = []
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
           objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Pack002 Status Not Received';
           objSessionLogInfo.ACTION = 'ACTION';
           objSessionLogInfo.PROCESS = 'NPSS (S) Pack002 Status Not Received';
           // Get DB Connection 
           reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
               mTranConn = pSession; //  assign connection     

               try {
                   //  var takeTrn = `select l.npsstpl_id,l.additional_info,l.status,l.uetr,nt.cdtr_iban, fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,nt.base_amount,nt.dbtr_iban ,ac.customer_email_id  from npss_trn_process_log l left join  npss_transactions nt on l.uetr=nt.uetr    left join core_nc_cbs_accounts ac on nt.cdtr_iban = ac.alternate_account_id    where l.status ='${params.status}' and( l.additional_info <>('Mail_Triggered') OR  l.additional_info ISNULL)`
                   var takeTrn = `select npsst_id,uetr,department_code,Value_Date,process_type,cdtr_iban,fn_pcidss_decrypt(cr_acct_identification,$PCIDSS_KEY) as cr_acct_identification,intrbk_sttlm_cur,cdtr_acct_name,intrbk_sttlm_amnt,clrsysref,PAYMENT_ENDTOEND_ID,DBTR_IBAN,DBTR_acct_NAME from npss_transactions where  TO_DATE(TO_CHAR(CREATED_DATE, 'DD-MON-YY'),'DD-MON-YY') = CURRENT_DATE `
                   var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL'`

                   ExecuteQuery1(takeurl, function (arrUrl) {
                       //   for(var i=0;i<=arrCount.length;arrCount++){
                       if (arrUrl.length == 0) {

                           objresponse.status = 'FAILURE';
                           objresponse.msg = 'No URL found';
                           sendResponse(null, objresponse)
                       } else {
                           var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN'`
                           ExecuteQuery1(Takeorg, function (arrorg) {
                               var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_GROUP'`
                               ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                   var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_CC'`
                                   ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                       var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_CATEGORY'`
                                       ExecuteQuery1(TakecomCat, function (arrCatgory) {
                                           ExecuteQuery1(takeTrn, function (arrTrn) {
                                               if (arrTrn.length > 0) {
                                                   reqAsync.forEachOfSeries(arrTrn, function (arrTrnobj, i, nextobjctfunc) {
                                                       var Takelog = `select l.uetr,l.Process_name,l.npsstpl_id from  npss_trn_process_log l where uetr='${arrTrnobj.uetr}' order by npsstpl_id`
                                                       ExecuteQuery1(Takelog, function (arrlog) {
                                                           if (arrlog.length > 0) {
                                                               var Twocount = 0
                                                               var multicount = 0
                                                
                                                               var Recvpac002count = 0
                                                               var Otherprocess = 0
                                                               for (let i = 0; i < arrlog.length; i++) {
                                                                   if (arrlog[i].process_name == 'Place Pacs002' || arrlog[i].process_name == 'Place Pacs004' || arrlog[i].process_name == 'Place Pacs008') {
                                                                       for (let h = i+1; h < arrlog.length; h++) {
                                                                           if (arrlog[h].process_name == 'Place Pacs028') {
                                                                               if (arrlog.length > 2) {
                                                                                  
                                                                                   for (let k = h+1; k < arrlog.length; k++) {
                                                                                       if (arrlog[k].process_name == 'Receive Pacs002') {
                                                                                           Recvpac002count++
                                                                                           break
                                                                                       } else {
                                                                                           Otherprocess++
                                                                                       }

                                                                                       
                                                                                   }
                                                                               } else {
                                                                                   Twocount++
                                                                                   break

                                                                               }

                                                                           }

                                                                       }
                                                                   }
                                                                   if(Twocount || multicount){
                                                                    break
                                                                   }
                                                               }


                                                               if(Twocount || Recvpac002count == 0){
                                                                console.log(i)
                                                                   var TakeCometo = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and destination_system = '${arrTrnobj.department_code}' and param_name='COMM_TO'`
                                                                               ExecuteQuery1(TakeCometo, function (arrCometo) {
                                                                                   if (arrCometo.length > 0) {
                                                                                       if (arrlog[0].process_type == 'IP') {
                                                                                           process_type = 'Inward Payment';
                                                                                           message_type = 'Pacs.004'
                                                                                       }
                                                                                       else {
                                                                                           process_type = 'Outward Payment';
                                                                                           message_type = 'Pacs.008'
                                                                                       }
                                                                                       try {
                                                                                           var frtodata = [{
                                                                                               TO: arrCometo[0].param_value ? arrCometo[0].param_value : '',
                                                                                               CC: arrcomcc[0].param_value ? arrcomcc[0].param_value : '',
                                                                                               BCC: '',
                                                                                               ORIGIN: arrorg[0].param_value ? arrorg[0].param_value : '',
                                                                                               COMM_GROUP: arrcomgp[0].param_value ? arrcomgp[0].param_value : '',
                                                                                               DATE: arrTrnobj.value_date,
                                                                                               MESSAGETYPE: message_type,
                                                                                               PROCESSTYPE: process_type,
                                                                                               CRACCTNUM: arrTrnobj.cdtr_iban ? 'XXXX' + (arrTrnobj.cdtr_iban).substring(arrTrnobj.cdtr_iban.length - 4) : arrTrnobj.cr_acct_identification,
                                                                                               CRACCTCUR: arrTrnobj.intrbk_sttlm_cur,
                                                                                               CRACCYNAME: arrTrnobj.cdtr_acct_name,
                                                                                               INTBRKAMNT: arrTrnobj.intrbk_sttlm_amnt,
                                                                                               CLRSYSREF: arrTrnobj.clrsysref,
                                                                                               E2FREFNO: arrTrnobj.payment_endtoend_id,
                                                                                               DRACCTNUM: 'XXXX' + (arrTrnobj.dbtr_iban).substring(arrTrnobj.dbtr_iban.length - 4),
                                                                                               DRACCTNAM: arrTrnobj.dbtr_acct_name

                                                                                           }]
                                                                                           var trndetail = JSON.stringify(frtodata)
                                                                                           var request = require('request');

                                                                                           var options = {
                                                                                               url: arrUrl[0].param_detail,
                                                                                               timeout: 18000000,
                                                                                               method: 'POST',
                                                                                               json: {
                                                                                                   "PARAMS": {

                                                                                                       "WFTPA_ID": "DEFAULT",

                                                                                                       "PRCT_ID": "",

                                                                                                       "EVENT_CODE": "DEFAULT",

                                                                                                       "USER_EMAIL": "",

                                                                                                       "USER_MOBILE": "",

                                                                                                       "TRN_DETAILS": trndetail,

                                                                                                       "TEMPLATECODE": arrCatgory[0].param_value,

                                                                                                       "DT_CODE": "",

                                                                                                       "DTT_CODE": "",

                                                                                                       "COMM_INFO": "",

                                                                                                       "SKIP_COMM_FLOW": true

                                                                                                   },

                                                                                                   "PROCESS_INFO": {

                                                                                                       "MODULE": "MODULE",

                                                                                                       "MENU_GROUP": "MENU_GROUP",

                                                                                                       "MENU_ITEM": "MENU_ITEM",

                                                                                                       "PROCESS_NAME": "PROCESS_NAME"

                                                                                                   }
                                                                                               },
                                                                                               headers: {
                                                                                                   "session-id": params.session_id,
                                                                                                   "routingKey": params.routingKey,
                                                                                                   'Content-Type': 'application/json'

                                                                                               }
                                                                                           }

                                                                                           reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                                                           request(options, function (error, responseFromImagingService, responseBody) {

                                                                                               if (error) {
                                                                                                   reqInstanceHelper.PrintInfo(serviceName, '------------ sent mail API ERROR-------' + error, objSessionLogInfo);
                                                                                                   sendResponse(error, null);
                                                                                               } else {
                                                                                                   reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + JSON.stringify(responseBody), objSessionLogInfo);
                                                                                                   reqInstanceHelper.PrintInfo(serviceName, '------------Mail has been sent for -------' + arrTrnobj.npsst_id, objSessionLogInfo);
                                                                                                   nextobjctfunc();
                                                                                               }
                                                                                           });

                                                                                       } catch (error) {
                                                                                           reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                                           sendResponse(error, null);
                                                                                       }
                                                                                   }
                                                                                   else {
                                                                                       reqInstanceHelper.PrintInfo(serviceName, '------------No email id available for-------' + arrTrnobj.department_code, objSessionLogInfo);
                                                                                       nextobjctfunc();
                                                                                   }
                                                                               })
                                                               }else {
                                                                   nextobjctfunc();
                                                               }





                                               
                                                               
                                                           } else {
                                                               nextobjctfunc()
                                                           }

                                                       })

                                                   }, function () {
                                                       objresponse.status = 'SUCCESS';
                                                       sendResponse(null, objresponse)
                                                   })
                                               }
                                               else {
                                                   reqInstanceHelper.PrintInfo(serviceName, '----------No tran found-------', objSessionLogInfo);
                                                   objresponse.status = 'FAILURE';
                                                   sendResponse(null, objresponse)
                                               }
                                           })



                                       })






                                   })

                               })
                           })

                       }



                   })




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

               } catch (error) {
                   reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
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
