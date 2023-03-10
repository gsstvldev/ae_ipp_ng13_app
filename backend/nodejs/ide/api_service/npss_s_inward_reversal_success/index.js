var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


    /*  Created By : Daseen
    Created Date :15/02/2023
    Modified By : 
    Modified Date : 
   }
    */
   var serviceName = 'NPSS Inward Reversal Success';

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
   var reqAsync = require('async');
   var mTranConn = "";
   var producer
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
           objSessionLogInfo.HANDLER_CODE = 'NPSS Inward Reversal Success ';
           objSessionLogInfo.ACTION = 'ACTION';
           objSessionLogInfo.PROCESS = 'NPSS Inward Reversal Success ';
           // Get DB Connection 
           reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
               mTranConn = pSession; //  assign connection     

               try {
                   //  var takeTrn = `select l.npsstpl_id,l.additional_info,l.status,l.uetr,nt.cdtr_iban, fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,nt.base_amount,nt.dbtr_iban ,ac.customer_email_id  from npss_trn_process_log l left join  npss_transactions nt on l.uetr=nt.uetr    left join core_nc_cbs_accounts ac on nt.cdtr_iban = ac.alternate_account_id    where l.status ='${params.status}' and( l.additional_info <>('Mail_Triggered') OR  l.additional_info ISNULL)`
                   var takeTrn = `select l.npsstpl_id,l.additional_info,l.status,l.uetr,nt.cdtr_iban,fn_pcidss_decrypt(cr_acct_identification,$PCIDSS_KEY) as cr_acct_identification,nt.intrbk_sttlm_amnt,nt.dbtr_iban ,ac.customer_email_id from npss_trn_process_log l left join npss_transactions nt on l.uetr=nt.uetr left join core_nc_cbs_accounts ac on ac.alternate_account_id in(nt.cdtr_iban,cr_acct_identification)where l.status ='${params.status}'and coalesce(l.additional_info,'') <>'Mail_Triggered'`
                   var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync='Y'`

                   ExecuteQuery1(takeurl, function (arrUrl) {
                       //   for(var i=0;i<=arrCount.length;arrCount++){
                       if (arrUrl.length == 0) {

                           objresponse.status = 'FAILURE';
                           objresponse.msg = 'No URL found';
                           sendResponse(null, objresponse)
                       } else {
                           var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN' and need_sync='Y'`
                           ExecuteQuery1(Takeorg, function (arrorg) {
                               var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_GROUP' and need_sync='Y'`
                               ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                   var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_CC' and need_sync='Y'`
                                   ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                       var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_CATEGORY' and need_sync='Y'`
                                       ExecuteQuery1(TakecomCat, function (arrCatgory) {
                                           ExecuteQuery1(takeTrn, function (arrTrn) {
                                               if (arrTrn.length > 0) {
                                                   reqAsync.forEachOfSeries(arrTrn, function (arrTrnobj, i, nextobjctfunc) {
                                                       if (arrTrnobj.customer_email_id != null) {
                                                           if (arrTrnobj.cdtr_iban.substring(0, 3) != 'AED') {
                                                               try {
                                                                   var frtodata = [{
                                                                       TO: arrTrnobj.customer_email_id ? arrTrnobj.customer_email_id : '',
                                                                       CC: arrcomcc[0].param_value ? arrcomcc[0].param_value : '',
                                                                       BCC: '',
                                                                       ORIGIN: arrorg[0].param_value ? arrorg[0].param_value : '',
                                                                       COMM_GROUP: arrcomgp[0].param_value ? arrcomgp[0].param_value : '',
                                                                       CDTRIBAN: 'XXXX' + (arrTrnobj.cdtr_iban).substring(arrTrnobj.cdtr_iban.length - 4),
                                                                       DBTRIBAN: 'XXXX' + (arrTrnobj.dbtr_iban).substring(arrTrnobj.dbtr_iban.length - 4),
                                                                       AMOUNT: arrTrnobj.intrbk_sttlm_amnt,
                                                                       CURRENTDATETIME: moment().tz("Asia/Dubai").format('DD/MM/YYYY HH:MM')
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
                                                                           reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                                           sendResponse(error, null);
                                                                       } else {
                                                                           reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + JSON.stringify(responseBody), objSessionLogInfo);
                                                                           reqInstanceHelper.PrintInfo(serviceName, '------------Mail has been sent for -------' + arrTrnobj.npsstpl_id, objSessionLogInfo);
                                                                           var uptLog = `update npss_trn_process_log set additional_info='Mail_Triggered' where npsstpl_id='${arrTrnobj.npsstpl_id}'`
                                                                           ExecuteQuery(uptLog, function (arrCatgory) {
                                                                               if (arrCatgory == 'SUCCESS') {
                                                                                   reqInstanceHelper.PrintInfo(serviceName, '------------Log table update success for  -------' + arrTrnobj.npsstpl_id, objSessionLogInfo);
                                                                                   nextobjctfunc();
                                                                               } else {
                                                                                   reqInstanceHelper.PrintInfo(serviceName, '------------Log table update not success for-------' + arrTrnobj.npsstpl_id, objSessionLogInfo);
                                                                                   var fail = {}
                                                                                   fail.updateFaildept = arrTrnobj.npsstpl_id
                                                                                   failedData.push(fail)
                                                                                   nextobjctfunc()
                                                                               }
                                                                           })


                                                                       }
                                                                   });

                                                               } catch (error) {
                                                                   reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                   sendResponse(error, null);
                                                               }
                                                           } else {
                                                               reqInstanceHelper.PrintInfo(serviceName, '-----------Mail Failure cdtr_iban for-------' + arrTrnobj.cdtr_iban, objSessionLogInfo);
                                                               var fail = {}
                                                               fail.updateFaildept = arrTrnobj.cdtr_iban
                                                               failedData.push(fail)
                                                               nextobjctfunc()
                                                           }
                                                       } else {
                                                           reqInstanceHelper.PrintInfo(serviceName, '-----------Mail Failure  for-------' + arrTrnobj.cdtr_iban, objSessionLogInfo);
                                                           var fail = {}
                                                           fail.updateFaildept = arrTrnobj.cdtr_iban
                                                           failedData.push(fail)
                                                           nextobjctfunc()
                                                       }


                                                   }, function () {
                                                       objresponse.status = 'SUCCESS';
                                                       objresponse.FailedData = failedData || '';
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
