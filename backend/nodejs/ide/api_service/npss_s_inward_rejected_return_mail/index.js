var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

     /*  Created By :Daseen
    Created Date :15/02/2023
    Modified By : Siva Harish
    Modified Date : 19/05/2023
   }
    */
   var serviceName = 'NPSS (S) Inward Rejected Return Mail';

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
           objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Inward Rejected Return Mail';
           objSessionLogInfo.ACTION = 'ACTION';
           objSessionLogInfo.PROCESS = 'NPSS (S) Inward Rejected Return Mail';
           // Get DB Connection 
           reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
               mTranConn = pSession; //  assign connection     

               try {

                   var stsStr = params.status.toString()
                   var remFir = stsStr.replace('[', '')
                   var FinSts = remFir.replace(']', '')

                   var takeCount = `select count(*),department_code from npss_transactions where status in(${FinSts}) group by department_code`
                   var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL'`

                   ExecuteQuery1(takeurl, function (arrUrl) {
                       //   for(var i=0;i<=arrCount.length;arrCount++){
                       if (arrUrl.length == 0) {

                           objresponse.status = 'FAILURE';
                           objresponse.msg = 'No URL found';
                           sendResponse(null, objresponse)
                       }
                       else {
                           var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN' and need_sync='Y'`
                           ExecuteQuery1(Takeorg, function (arrorg) {
                            
                                           ExecuteQuery1(takeCount, function (arrCount) {
                                               if (arrCount.length > 0) {
                                                   reqAsync.forEachOfSeries(arrCount, function (arrCountobj, i, nextobjctfunc) {

                                                       if (arrCountobj.count > 0) {
                                                           var TakeCometo = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and destination_system = '${arrCountobj.department_code}' and param_name='COMM_TO'  and need_sync='Y'`
                                                           ExecuteQuery1(TakeCometo, function (arrCometo) {
                                                               var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and destination_system = '${arrCountobj.department_code}' and param_name = 'COMM_CC'  and need_sync='Y'`
                                                               ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                                                   var Takebcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and destination_system = '${arrCountobj.department_code}' and param_name = 'COMM_BCC'  and need_sync='Y'`
                                                                   ExecuteQuery1(Takebcc, function (arbcc) {
                                                                    var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}'and destination_system = '${arrCountobj.department_code}' and param_name = 'COM_CATEGORY'  and need_sync='Y'`
                                                                    ExecuteQuery1(TakecomCat, function (arrCatgory) {
                                                                        var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and destination_system = '${arrCountobj.department_code}' and param_name = 'COMM_GROUP'  and need_sync='Y'`
                                                                        ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                                                            try {
                                                                                var frtodata = [{
                                                                                    TO: arrCometo.length > 0 ? arrCometo[0].param_value : '',
                                                                                    CC: arrcomcc.length > 0 ? arrcomcc[0].param_value : '',
                                                                                    BCC: arbcc.length > 0 ? arbcc[0].param_value : '',
                                                                                    ORIGIN: arrorg.length > 0 ? arrorg[0].param_value : '',
                                                                                    COMM_GROUP: arrcomgp.length > 0 ? arrcomgp[0].param_value : '',
                                                                                    COUNT: arrCountobj.count
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
                                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------Mail has been sent for -------' + arrCountobj.department_code, objSessionLogInfo);
                                                                                        nextobjctfunc();
     
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
                                                           reqInstanceHelper.PrintInfo(serviceName, '-----------Mail Failure Department for-------' + arrCountobj.department_code, objSessionLogInfo);
                                                           var fail = {}
                                                           fail.updateFaildept = arrCountobj.department_code
                                                           failedData.push(fail)
                                                           nextobjctfunc()
                                                       }
                                                   }, function () {
                                                       objresponse.status = 'SUCCESS';
                                                       objresponse.FailedData = failedData || '';
                                                       sendResponse(null, objresponse)
                                                   })

                                               } else {
                                                   objresponse.status = 'No data found in npss_transactions table';
                                                   sendResponse(null, objresponse)
                                               }

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
