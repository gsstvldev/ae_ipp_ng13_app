var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    /*  Created By :sIVA hARISH
    Created Date :22/02/2023
    Modified By : Siva Harish
    Modified Date : 17/05/2023
   }
    */
   var serviceName = 'NPSS (CS) Proxy Payment Rejected Mail Alert';

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
           objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Proxy Payment Rejected Mail Alert';
           objSessionLogInfo.ACTION = 'ACTION';
           objSessionLogInfo.PROCESS = 'NPSS (CS) Proxy Payment Rejected Mail Alert';
           // Get DB Connection 
           reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
               mTranConn = pSession; //  assign connection     
               reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                   try {
                       var PRCT_ID = prct_id

                       var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and  need_sync = 'Y'`
                       ExecuteQuery1(takeurl, function (arrUrl) {
                           if (arrUrl.length == 0) {

                               objresponse.status = 'FAILURE';
                               objresponse.msg = 'No URL found';
                               sendResponse(null, objresponse)
                           }
                           else {
                               var status = params.STATUS
                               var arrstatus
                               if (Array.isArray(status)) {
                                   arrstatus = status.map(function (eachTran) {
                                       return eachTran.toString();
                                   });
                               } else {
                                   arrstatus = [status.toString()];
                               }
                               var Tempdata = '(' + "'" + arrstatus.toString().split(',').join("','") + "'" + ')';

                               var Takedata = `select * from npss_trn_process_log where TO_DATE(TO_CHAR(CREATED_DATE, 'DD-MON-YY'),'DD-MON-YY') = CURRENT_DATE  and status in ${Tempdata}`
                               var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN' and  need_sync = 'Y' `
                               ExecuteQuery1(Takeorg, function (arrorg) {
                                   var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_GROUP' and  need_sync = 'Y'`
                                   ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                       var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_CC' and  need_sync = 'Y'`
                                       ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                           var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_CATEGORY'  and  need_sync = 'Y'`
                                           ExecuteQuery1(TakecomCat, function (arrCatgory) {
                                               ExecuteQuery1(Takedata, function (arrData) {
                                                   if (arrData.length > 0) {
                                                       var TakeCometo = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name='COMM_TO'  and  need_sync = 'Y'`
                                                       ExecuteQuery1(TakeCometo, function (arrCometo) {
                                                          
                                                               reqAsync.forEachOfSeries(arrData, function (arrDataobj, i, nextobjctfunc) {    
                                                                   var TakenpsstrRefno = `select npsstrrd_refno from npss_trn_process_log where process_name = 'SctInitiation' and uetr = '${arrDataobj.uetr}' and coalesce(additional_info,'') <>'Mail_Sent'`
                                                                   ExecuteQuery1(TakenpsstrRefno, function (arrnpstrefno) {
                                                                       if (arrnpstrefno.length > 0) {
                                                                           var TaketranInf = `select * from npss_transactions where uetr = '${arrDataobj.uetr}'`
                                                                           ExecuteQuery1(TaketranInf, function (arrInfrm) {
                                                                               if (arrInfrm.length > 0) {
                                                                                   try {
                                                                                       var frtodata = [{
                                                                                           TO: arrCometo.length > 0 ? arrCometo[0].param_value : '',
                                                                                           CC: arrcomcc.length > 0 ? arrcomcc[0].param_value : '',
                                                                                           BCC: '',
                                                                                           ORIGIN: arrorg.length > 0? arrorg[0].param_value : '',
                                                                                           COMM_GROUP: arrcomgp.length > 0 ? arrcomgp[0].param_value : '',
                                                                                           TRANSACTIONID: arrnpstrefno[0].npsstrrd_refno || '',
                                                                                           ENDTOENDID: arrInfrm[0].payment_endtoend_id || '',
                                                                                           PAYERACCOUNTNUMBER: arrInfrm[0].dbtr_iban || '',
                                                                                           AMOUNT: arrInfrm[0].intrbk_sttlm_amnt || '',
                                                                                           DATE: arrInfrm[0].value_date || '',
                                                                                           BENEACCOUNTNUMBER: arrInfrm[0].cdtr_iban || '',
                                                                                           BENENAME: arrInfrm[0].cdtr_acct_name || '',
                                                                                           BENEBANKNAME: arrInfrm[0].cr_sort_code || ''

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
                                                                                               reqInstanceHelper.PrintInfo(serviceName, '------------Mail has been sent for -------' + arrDataobj.uetr, objSessionLogInfo);
                                                                                               if (responseBody.service_status== 'SUCCESS') {
                                                                                                   var UpdateTrnTble = `Update npss_trn_process_log set additional_info = 'Mail_Sent' ,MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsstpl_id = '${arrDataobj.npsstpl_id}'`
                                                                                                   ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                                                                       if (arrUpdTranTbl == 'SUCCESS') {
                                                                                                           nextobjctfunc()
                                                                                                       }
                                                                                                       else {
                                                                                                           nextobjctfunc()
                                                                                                       }
                                                                                                   })
                                                                                               } else {
                                                                                                   nextobjctfunc()
                                                                                               }



                                                                                           }
                                                                                       });

                                                                                   } catch (error) {
                                                                                       reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                                       sendResponse(error, null);
                                                                                   }

                                                                               } else {
                                                                                   reqInstanceHelper.PrintInfo(serviceName, '------------Tran Table details not found for uetr-------' + arrDataobj.uetr, objSessionLogInfo);
                                                                                   nextobjctfunc()
                                                                               }

                                                                           })




                                                                       } else {
                                                                           reqInstanceHelper.PrintInfo(serviceName, '------------nO DATE FOUND IN TRAN TABLE-------', objSessionLogInfo);
                                                                           nextobjctfunc()
                                                                       }

                                                                   })


                                                               }, function () {
                                                                   objresponse.status = 'SUCCESS';
                                                                   sendResponse(null, objresponse)
                                                               })

                                                          
                                                       })

                                                   } else {
                                                       reqInstanceHelper.PrintInfo(serviceName, '-----------No data Found in Tran Table------', objSessionLogInfo);
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
               })



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
