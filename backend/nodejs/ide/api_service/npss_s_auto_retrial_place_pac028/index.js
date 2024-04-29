var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {












  /*  Created By :SIVA  hARISH
  Created Date :22/02/2023
  Modified By : 
  Modified Date : 25/02/2023
  Reason: Unique msg id generation for api call on 12/02/2024 by daseen
  Reason: Status change for pack 028 pack retry 19/02/2024 by daseen
  Reason: Status included for receive pace 002 for pack 028 pack retry 14/03/2024 by daseen WI 3087
  Reason: cbuae_retuen_code to response_code 15/04/2024 by daseen WI 3703
  Reason:  Handled pacs 028 call for pacs 008 after given interval time  18/04/2024 ,23/04/2024 by daseen WI 3087
  Reason:  Handled pacs 028 call for recv2 with PDNG  for if retry count reached on  25/04/2024  by daseen WI 3087
   Reason:  Handled pacs 028 based ob retry frequncy reached -on  26/04/2024  by daseen WI 3087
   Reason:  Handled pacs 028 api call based on the necessary status taken from uetr -on  29/04/2024  by Subramanian WI 3087
  }
  */
  var serviceName = 'NPSS (S) Auto Retrial Place Pac028';

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
  var moment = require('moment');
  var reqAsync = require('async');
  const schedule = require('node-schedule');
  const { reject } = require('lodash');
  var mTranConn = "";
  var producer
  var task;
  const { v4: uuidv4 } = require('uuid');
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
      objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Auto Retrial Place Pac028';
      objSessionLogInfo.ACTION = 'ACTION';
      objSessionLogInfo.PROCESS = 'NPSS (S) Auto Retrial Place Pac028';
      // Get DB Connection 
      reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
        mTranConn = pSession; //  assign connection     
        reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
          try {
            var PRCT_ID = prct_id
            var Takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_INVESTIGATION_PAC_028' and param_code='URL' and need_sync = 'Y'`
            var Taketime = `select * from core_nc_rule_book_setup where rule_code = '${params.rule_code}' and processing_system = '${params.process_system}' and need_sync = 'Y'`
            ExecuteQuery1(Takeurl, function (arrUrl) {
              if (arrUrl.length > 0) {
                ExecuteQuery1(Taketime, function (arrTakehrs) {
                  if (arrTakehrs.length > 0) {
                    var Takedata = `select distinct(l.uetr) , nt.npsst_id from npss_trn_process_log l inner join npss_transactions nt on l.uetr =nt.uetr where TO_DATE(TO_CHAR(l.CREATED_DATE, 'DD-MON-YY'),'DD-MON-YY') = CURRENT_DATE and (nt.fx_resv_text4 <>'${params.final_status}' or nt.fx_resv_text4 isnull ) and nt.process_group not in('BCT','MANUAL') `
                    ExecuteQuery1(Takedata, function (arruetrData) {
                      if (arruetrData.length > 0) {
                        reqAsync.forEachOfSeries(arruetrData, function (arruetrDataobj, i, nextobjctfunc) {

                          var TakeprocessGROUP = `select process_group from npss_transactions where uetr = '${arruetrDataobj.uetr}'`
                          var TakeuetrInfm = `select * from npss_trn_process_log where uetr = '${arruetrDataobj.uetr}' and (process_name in ( 'Place Pacs028', 'Place Pacs008','Receive Pacs002') ) order by npsstpl_id desc `
                          ExecuteQuery1(TakeprocessGROUP, function (processgroup) {
                            if (processgroup.length > 0) {
                              var payment_processing_method

                              if (processgroup[0].process_group == 'P2P') {
                                payment_processing_method = "SCT_INITITATION"

                              } else if (processgroup[0].process_group == 'P2B') {
                                payment_processing_method = "P2B_SCT_INITITATION"

                              } else if (processgroup[0].process_group == 'IBAN') {
                                payment_processing_method = "AC_AC_IBAN"

                              } else {
                                payment_processing_method = ''
                              }

                              ExecuteQuery1(TakeuetrInfm, async function (arruetrInformation) {

                                if (arruetrInformation.length > 0) {

                                  let recv_002_arr = arruetrInformation.filter((val) => {
                                    return (((val.process_name == 'Receive Pacs002') && (val.response_code != 'PDNG')) || ((val.process_name == 'Receive Pacs002') && (val.response_code == 'PDNG') && ((val.status != 'OP_AC_STATUS_RECEIVED' && val.status != 'OP_P2P_STATUS_ACCEPTED' && val.status != 'OP_P2B_STATUS_ACCEPTED'))))
                                  })
                                  let place_pacs028_arr = arruetrInformation.filter((val) => {
                                    return val.process_name == 'Place Pacs028'
                                  })
                                  if ((recv_002_arr.length > 0) || (place_pacs028_arr.length >= Number(arrTakehrs[0].retry_count))) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------ Already uetr Receive Pacs002 received or retry_count count reached ------' + arruetrDataobj.uetr, objSessionLogInfo);
                                    let updtTran = await updateTran(arruetrDataobj.npsst_id)
                                    if (updtTran == 'SUCCESS') {
                                      nextobjctfunc();
                                    } else {
                                      nextobjctfunc();
                                    }
                                  } else if (place_pacs028_arr.length < Number(arrTakehrs[0].retry_count)) {
                                    if ((arruetrInformation[0].process_name == 'Place Pacs008') || (arruetrInformation[0].process_name == 'Place Pacs028' && arruetrInformation[1].process_name == 'Place Pacs008')) {
                                      if (arruetrInformation[0].process_name == 'Place Pacs008') {

                                        reacTime = await fnReachdTime(arruetrInformation[0].created_date, arrTakehrs)
                                      } else {
                                        reacTime = await fnReachdTime(arruetrInformation[1].created_date, arrTakehrs)
                                      }
                                      if (reacTime == 'SUCCESS') {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------ Pacs008  or Pacs028 uetr eligible for pacs 028------' + arruetrDataobj.uetr, objSessionLogInfo);
                                        var doapicall = await apiCall(arruetrDataobj, arrUrl, payment_processing_method);
                                        if (doapicall == 'SUCCESS') {
                                          nextobjctfunc();
                                        } else {
                                          reqInstanceHelper.PrintInfo(serviceName, '------------Failed uetr-------' + arruetrDataobj.uetr, objSessionLogInfo);
                                          nextobjctfunc();
                                        }
                                      } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------Retry time not reached-------' + arruetrDataobj.uetr, objSessionLogInfo);
                                        nextobjctfunc();
                                      }
                                    } else {
                                      reqInstanceHelper.PrintInfo(serviceName, '------------ uetr eligible for pacs 028------' + arruetrDataobj.uetr, objSessionLogInfo);
                                      let reacTime = await fnReachdTime(arruetrInformation[0].created_date, arrTakehrs)
                                      if (reacTime == 'SUCCESS') {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------ uetr eligible for pacs------' + arruetrDataobj.uetr, objSessionLogInfo);
                                        var doapicall = await apiCall(arruetrDataobj, arrUrl, payment_processing_method);
                                        if (doapicall == 'SUCCESS') {
                                          nextobjctfunc();
                                        } else {
                                          reqInstanceHelper.PrintInfo(serviceName, '------------Failed uetr-------' + arruetrDataobj.uetr, objSessionLogInfo);
                                          nextobjctfunc();
                                        }
                                      } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------Retry time not reached-------' + arruetrDataobj.uetr, objSessionLogInfo);
                                        nextobjctfunc();
                                      }
                                    }
                                  }

                                } else {
                                  reqInstanceHelper.PrintInfo(serviceName, '------------Process Log Not Found  for uetr-------' + arruetrDataobj.uetr, objSessionLogInfo);
                                  nextobjctfunc();
                                }

                              })

                            } else {
                              reqInstanceHelper.PrintInfo(serviceName, '------------Process Group Not Found  for uetr-------' + arruetrDataobj.uetr, objSessionLogInfo);
                              nextobjctfunc();
                            }

                          })

                        }, function () {
                          objresponse.status = 'SUCCESS';
                          sendResponse(null, objresponse)
                        }
                        )
                      } else {
                        reqInstanceHelper.PrintInfo(serviceName, '------------No uetr data found in Tran Process log for currentData-------', objSessionLogInfo);
                        objresponse.status = 'FAILURE';
                        sendResponse(null, objresponse)
                      }

                    })

                  }
                  else {
                    reqInstanceHelper.PrintInfo(serviceName, '------------No data found in core_nc_rule_book_setup-------', objSessionLogInfo);
                    objresponse.status = 'FAILURE';
                    sendResponse(null, objresponse)
                  }


                })
              } else {
                reqInstanceHelper.PrintInfo(serviceName, '------------API Url Not Found-------', objSessionLogInfo);
                objresponse.status = 'FAILURE';
                sendResponse(null, objresponse)
              }
            })

            function updateTran(npsst_id) {
              return new Promise((resolve, reject) => {
                let tranUpdt = `update npss_transactions set fx_resv_text4='OP_AC_REQ_RECEIVED' where npsst_id='${npsst_id}'`
                ExecuteQuery(tranUpdt, function (arrresult) {
                  if (arrresult == 'SUCCESS')
                    resolve('SUCCESS')
                  else
                    resolve('FAILURE')
                })
              })
            }

            function fnReachdTime(uetrinfo, arrTakehrs) {
              return new Promise((resolve, reject) => {
                let startTime = moment(uetrinfo)
                let end = moment(new Date());

                var minutesDifference = end.diff(startTime, arrTakehrs[0].retry_frequency);
                reqInstanceHelper.PrintInfo(serviceName, '------------Time differ-------' + minutesDifference, objSessionLogInfo);
                if (minutesDifference >= arrTakehrs[0].retry_interval) {
                  reqInstanceHelper.PrintInfo(serviceName, '------------Minutes differ-------' + minutesDifference, objSessionLogInfo);
                  resolve('SUCCESS')
                }
                else resolve('FAILURE')
              })
            }
            function apiCall(arruetrDataobj, arrUrl, payment_processing_method) {
              return new Promise((resolve, reject) => {

                var TakeactInfm = `select uetr,hdr_msg_id,cr_sort_code,hdr_created_date,payment_endtoend_id,tran_ref_id from npss_transactions where uetr = '${arruetrDataobj.uetr}'`
                ExecuteQuery1(TakeactInfm, function (arrresult) {
                  if (arrresult.length > 0) {

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
                          "hdr_msg_id": uuidv4().replace(/-/g, ''),
                          "cr_sort_code": arrresult[0].cr_sort_code,
                          "payment_endtoend_id": arrresult[0].payment_endtoend_id,
                          "uetr": arrresult[0].uetr,
                          "tran_ref_id": arrresult[0].tran_ref_id,
                          "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.09",
                          "payment_processing_method": payment_processing_method,
                          "process_type": "OP"

                        },
                        headers: {
                          'content-type': 'application/json'
                        }
                      };
                      reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                      request(options, async function (error, responseFromImagingService, responseBody) {
                        try {
                          if (error) {
                            reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                            sendResponse(error, null);
                          } else {
                            reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBody + '---for uert....' + arruetrDataobj.uetr, objSessionLogInfo);
                            resolve('SUCCESS');

                          }
                        } catch (error) {
                          resolve('FAILURE')
                        }

                      });
                    } catch (error) {
                      reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                      sendResponse(error, null);
                    }
                  } else {
                    resolve('FAILURE')
                  }

                })

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
