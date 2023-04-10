var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


     /*  Created By :   Siva Harish
     Created Date :31/12/2022
     Modified By : Siva Harish
     Modified Date : 13/01/2023
      Modified By : Siva Harish
     Modified Date : 17/01/2023
     Reason for : Remove Console log
      Modified Date : 23/02/2023
     */
      var serviceName = 'NPSS (S) Send Kafka Purpose Code Notification';
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
      var { Kafka } = require('kafkajs')
      var reqAsync = require('async');
      var mTranConn = "";
      var producer
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
              objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Send Kafka Purpose Code Notification';
              objSessionLogInfo.ACTION = 'ACTION';
              objSessionLogInfo.PROCESS = 'NPSS (S) Send Kafka Purpose Code Notification';
              // Get DB Connection 
              reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                  mTranConn = pSession; //  assign connection     
                  reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                     try {
                         var PRCT_ID = prct_id
                         var TakeUrl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync = 'Y'`
                        var taketrnlist = `select cncpc_id,purpose_code,purpose_description,enable_flag,action_flag from core_nc_purpose_codes where published is null or published = 'N'`
                        ExecuteQuery1(TakeUrl, function (arrUrl) {
                            if(arrUrl.length > 0){
                                ExecuteQuery1(taketrnlist,  function (arrresult) {
                                    if (arrresult.length > 0) {
                                        var Takechnl = `select process_name,destination_system from core_ns_params where need_sync = 'Y' and process_name = '${params.processName}' group by process_name,destination_system`
                                        ExecuteQuery1(Takechnl,  function (arrChnl) {
                                            if (arrChnl.length > 0) {
                                                reqAsync.forEachOfSeries(arrChnl, function (arrrearrChnlsultObj, i, channelnextobjctfunc) {
                                                    var TakeKafkaTp = `select param_value from core_ns_params where process_name = '${params.processName}' and destination_system ='${arrrearrChnlsultObj.destination_system}' and param_name = 'KAFKA_TOPIC' and need_sync = 'Y'`
                                                    ExecuteQuery1(TakeKafkaTp, function (arrTopic) {
                                                        if(arrTopic.length > 0){
                                                            var TakeComCat = `select param_value from core_ns_params where process_name = '${params.processName}' and destination_system ='${arrrearrChnlsultObj.destination_system}' and param_name = 'COMM_GROUP' and need_sync = 'Y'`
                                                            ExecuteQuery1(TakeComCat,  function (arrComCat) {
                                                                if(arrComCat.length > 0){
                                                                    reqAsync.forEachOfSeries(arrresult, function (arrresultObj, i, nextobjctfunc) {
                                                                        var dataobj = {
                                                                            code:arrresultObj.purpose_code,
                                                                            description:arrresultObj.purpose_description,
                                                                            enabled:arrresultObj.enable_flag,
                                                                             Action: arrresultObj.action_flag,
                                                                        }
                                                                        var paramData = dataobj
                                                                        try {
            
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
                                                                                        "TEMPLATECODE": arrComCat[0].param_value,
                                                                                        "DT_CODE": "",
                                                                                        "DTT_CODE": "",
                                                                                        "TOPIC_NAME": arrTopic[0].param_value || '',
                                                                                        "STATIC_DATA": paramData || '',
                                                                                        "SKIP_COMM_FLOW": true
                                                                                    },
                                                                                    "PROCESS_INFO": {
                                                                                        "MODULE": "NPSS",
                                                                                        "MENU_GROUP": "NPSS",
                                                                                        "MENU_ITEM": "NPSS",
                                                                                        "PROCESS_NAME": params.processName
                                                                                    }
                                                                                },
                                                                                headers: {
                                                                                    "session-id": "STATIC-SESSION-NPSS",
                                                                                    "routingKey": "CLT-0~APP-0~TNT-0~ENV-0",
                                                                                    'Content-Type': 'application/json'
            
            
                                                                                }
                                                                            }
            
                                                                           
                                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                                            request(options, function (error, responseFromImagingService, responseBody) {
                                                                                if (error) {
                                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                                                    sendResponse(error, null);
                                                                                } else {
                                                                                    reqInstanceHelper.PrintInfo(serviceName, "........................-API CALL STATUS FOR ..............."+arrresultObj.cncpc_id + JSON.stringify(responseBody), objSessionLogInfo);
                                                                                    var Updateprscode = `Update core_nc_purpose_codes set iv_published = 'Y' ,MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where cncpc_id = '${arrresultObj.cncpc_id}'`
                                                                                    ExecuteQuery(Updateprscode, function (arrUpdate) {
                                                                                        if (arrUpdate == 'SUCCESS') {
                                                                                            nextobjctfunc()
                                                                                        }
                                                                                        else {
                                                                                            nextobjctfunc()
                                                                                        }
                                                                                    })
                                                                                    
                                                                                }
                                                                            });
            
                                                                        } catch (error) {
                                                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                            sendResponse(error, null);
                                                                        }
            
                                                                    },function(){
                                                                        reqInstanceHelper.PrintInfo(serviceName, ".......................ALL DATA MOVE TO THIS CHANNEL..............."+arrrearrChnlsultObj.destination_system, objSessionLogInfo);
                                                                        channelnextobjctfunc()
                                                                    }) 
            
                                                                }else{
                                                                    reqInstanceHelper.PrintInfo(serviceName, "........................No COMM_GROUP Found..............."+arrrearrChnlsultObj.destination_system, objSessionLogInfo);
                                                                    channelnextobjctfunc()
                                                                }
                    
                                                            })
                                                        }else{
                                                            reqInstanceHelper.PrintInfo(serviceName, "........................No Topic found ..............."+arrrearrChnlsultObj.destination_system, objSessionLogInfo);
                                                            channelnextobjctfunc()
            
                                                        }
                                                   
            
                                                    })
            
                                                }, function () {
                                                    reqInstanceHelper.PrintInfo(serviceName, "........................ALL DATA MOVED SUCCESSFULLY TO ALL CHANNEL...............", objSessionLogInfo);
                                                    objresponse.status = 'SUCCESS';
                                                    objresponse.msg = 'ALL DATA MOVED SUCCESSFULLY TO ALL CHANNEL';
                                                    sendResponse(null, objresponse)
                                                })
            
                                            } else {
                                                reqInstanceHelper.PrintInfo(serviceName, "........................No Data Found in corensparam table...............", objSessionLogInfo);
                                                objresponse.status = 'SUCCESS';
                                                objresponse.msg = 'No Data Found in corensparam table';
                                                sendResponse(null, objresponse)
                                            }
            
                                        })
                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, "........................ NO Data FOUND in table...............", objSessionLogInfo);
                                     
                                        objresponse.status = 'SUCCESS';
                                        objresponse.msg = 'No data Found in core_nc_purpose_codes';
                                        sendResponse(null, objresponse)
                                    }
            
                                })
                            }else{
                                reqInstanceHelper.PrintInfo(serviceName, "........................API Url Not Found...............", objSessionLogInfo);
                               
                                objresponse.status = 'FAILURE';
                                objresponse.msg = 'API Url Not Found';
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
