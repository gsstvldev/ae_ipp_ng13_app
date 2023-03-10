var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    /*  Created By :Daseen
    Created Date :15/02/2023
    Modified By : 
    Modified Date : 
   }
    */
   var serviceName = 'NPSS (S) RCT Inward Reversal Tran Available Mail Check';
	
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
    var mTranConn = "";
   var producer
   var failedData = []
   var objresponse = {
       'status': 'FAILURE',
       'data': '',
       'msg': ''
   }; // Response to Client
   // Assign function for loginformation and session info
console.log('tran.......................',serviceName )
   reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
       try {
 console.log('Tran connection');

           objSessionLogInfo = objLogInfo; // Assing log information
           // Log Viewer Setup
           objSessionLogInfo.HANDLER_CODE = 'NPSS (S) RCT Inward Reversal Tran Available Mail Check';
           objSessionLogInfo.ACTION = 'ACTION';
           objSessionLogInfo.PROCESS = 'NPSS (S) RCT Inward Reversal Tran Available Mail Check';
           // Get DB Connection 
           reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
               mTranConn = pSession; //  assign connection     
           console.log('Tran connection');
               try {
                   var takeCount = `select count(*) from npss_transactions where status in('IP_RCT_REVERSAL_REQ_RECEIVED' , 'IP_RCT_REVERSAL_VLD_FAILED')`
                   var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync = 'Y'`
                   var TakeCometo = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_TO' and need_sync = 'Y'`
                   ExecuteQuery1(takeCount, function (arrCount) {
console.log(params.process_name)
                       if (arrCount == 0) {
                 console.log('Tran count 0');

                           objresponse.status = 'FAILURE';
                           objresponse.msg = 'No data found';
                           sendResponse(null, objresponse)
                       }
                       else {
                           ExecuteQuery1(takeurl, function (arrUrl) {
                               if (arrUrl.length > 0) {
                                   ExecuteQuery1(TakeCometo, function (arrcomto) {
console.log('arrcomto');

                                       var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN' and need_sync = 'Y'`
                                       ExecuteQuery1(Takeorg, function (arrorg) {
console.log('arrorg');

                                           var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_GROUP' and need_sync = 'Y'`
                                           ExecuteQuery1(tkcomgp, function (arrcomgp) {
console.log('arrcomgp');
                                               var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_CC' and need_sync = 'Y'`
                                               ExecuteQuery1(Takecmcc, function (arrcomcc) {
console.log('arrcomcc');

                                                   var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_CATEGORY' and need_sync = 'Y'`
                                                   ExecuteQuery1(TakecomCat, function (arrCatgory) {
console.log('arrCatgory');


                                                       try {
                                                           var frtodata = [{
                                                               TO: arrcomto[0].param_value ? arrcomto[0].param_value : '',
                                                               CC: arrcomcc[0].param_value ? arrcomcc[0].param_value : '',
                                                               BCC: '',
                                                               ORIGIN: arrorg[0].param_value ? arrorg[0].param_value : '',
                                                               COMM_GROUP: arrcomgp[0].param_value ? arrcomgp[0].param_value : '',
                                                               COUNT:arrCount[0].count
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
                                                                   reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBody, objSessionLogInfo);

                                                                   objresponse.status = 'SUCCESS';

                                                                   sendResponse(null, objresponse)
                                                               }
                                                           });

                                                       } catch (error) {
                                                           reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                           sendResponse(error, null);
                                                       }

                                                   })






                                               })

                                           })
                                       })
                                   })
                               } else {
                                   reqInstanceHelper.PrintInfo(serviceName, ".....................Url Not Found.................", objSessionLogInfo);
                                   objresponse.status = 'FAILURE';
                                   objresponse.msg = 'Url Not Found';
                                   sendResponse(null, objresponse)
                               }
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
