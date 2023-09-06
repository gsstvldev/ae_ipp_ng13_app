var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
     /*  Created By :Daseen WI 2865
Created Date :01/09/2023
 

*/
  var serviceName = 'NPSS LARI(S) P2B Refund Unfreeze Customer Account';

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
      objSessionLogInfo.HANDLER_CODE = 'NPSS lari (S) P2B Refund Unfreeze Customer Account';
      objSessionLogInfo.ACTION = 'ACTION';
      objSessionLogInfo.PROCESS = 'NPSS LARI (S) P2B Refund Unfreeze Customer Account';
      // Get DB Connection 
      reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
        mTranConn = pSession; //  assign connection     
        reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
          try {
            var PRCT_ID = prct_id
            var QueryStatus = await Prepareparam(params.GetTranstatus)
            var QueryProcessName = await Prepareparam(params.GetprocessName)
            var Firstaddinfo = await Prepareparam(params.Getaddinfo)
            var Secondstatus = await Prepareparam(params.CheckTranstatus)
            var SecondprocessName = await Prepareparam(params.CheckprocessName)
            var sctstatus = await Prepareparam(params.sctPrcsstatus)
            var sctprssname = await Prepareparam(params.sctPrcsname)
            //  var Secondaddinfo = await Prepareparam(params.checkaddinfo)
            var TakerequestData = await Prepareparam(params.RequestprocessName)

            var Takehours = `select param_detail from core_nc_system_setup where param_category = '${params.param_category}' and param_code = '${params.param_code}' and need_sync = 'Y' and product_code='${params.PROD_CODE}'`
            var arrTakehrs = await ExecuteQuery1(Takehours)

            if (arrTakehrs.length > 0) {
              var utcMoment = moment.utc();
              console.log(utcMoment)
              var Formdate = utcMoment.subtract(arrTakehrs[0].param_detail, 'hours')
              Formdate = moment(Formdate).format('YYYY-MM-DD HH:mm:ss')
              var TakeTrnid = `select npsstpl_id from npss_trn_process_log where status in ${QueryStatus} and process_name in ${QueryProcessName} and additional_info in ${Firstaddinfo} and created_date_utc < '${Formdate}' and (org_status <> ('UNFREEZE_TAKEN') or org_status isnull)`
              //  var Takedata = `select * from npss_trn_process_log where status in ${QueryStatus} and process_name in ${QueryProcessName} and additional_info in ${Firstaddinfo} and created_date_utc < '${Formdate}' and org_status <> 'UNFREEZE_TAKEN'`
              var Takedata = `select * from npss_trn_process_log where status in ${QueryStatus} and process_name in ${QueryProcessName} and additional_info in ${Firstaddinfo} and created_date_utc < '${Formdate}' and (org_status <> ('UNFREEZE_TAKEN') or org_status isnull)`
              var Takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='${params.unfreeze_url_category}' and param_code='URL' and need_sync = 'Y'`
              var arrurl = await ExecuteQuery1(Takeurl)
              var arrData = await ExecuteQuery1(Takedata)
              if (arrData.length > 0) {
                var updateTable = await UpdateTran(TakeTrnid, PRCT_ID)
                if (updateTable == 'SUCCESS') {
                  reqAsync.forEachOfSeries(arrData, function (arrDataobj, i, nextobjctfunc) {
                    var sctcond = `select npsstpl_id, * from npss_trn_process_log where status in ${sctstatus} and process_name in ${sctprssname} and npsstrrd_refno='${arrDataobj.npsstrrd_refno}'`
                    var Checkcond = `select npsstpl_id, * from npss_trn_process_log where status in ${Secondstatus} and process_name in ${SecondprocessName} and npsstrrd_refno='${arrDataobj.npsstrrd_refno}'`
                    var callasync = async () => {
                      sctcondres = await ExecuteQuery1(sctcond)
                      if (sctcondres.length == 0) {
                        chkcond = await ExecuteQuery1(Checkcond)
                        if (chkcond.length == 0) {
                          if (arrurl.length > 0) {
                            var apicallresult = await kafkaapi(arrDataobj, arrurl, TakerequestData)
                            if (apicallresult != "Failure") {
                              reqInstanceHelper.PrintInfo(serviceName, '------------API RESPONSE-------' + arrDataobj.uetr, objSessionLogInfo);
                              let loginsertRes = await ProcessInstData(apicallresult, arrDataobj)
                              nextobjctfunc()

                            } else {
                              reqInstanceHelper.PrintInfo(serviceName, '------------some values are misssing for api call-------' + arrDataobj.uetr, objSessionLogInfo);
                              nextobjctfunc()
                            }

                          } else {
                            reqInstanceHelper.PrintInfo(serviceName, '------------No URL Found-------', objSessionLogInfo);
                            objresponse.status = 'FAILURE';
                            objresponse.msg = 'NO URL FOUND';
                            sendResponse(null, objresponse)
                          }
                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '------------Not a eligible tran-------' + arrDataobj.uetr, objSessionLogInfo);
                          nextobjctfunc()
                        }

                      } else {
                        reqInstanceHelper.PrintInfo(serviceName, '------------Not a eligible tran-------' + arrDataobj.uetr, objSessionLogInfo);
                        nextobjctfunc()
                      }


                    }
                    callasync();


                  }, function () {
                    objresponse.status = 'SUCCESS';
                    objresponse.msg = 'ALL SUCCESS';
                    sendResponse(null, objresponse)
                  })
                } else {
                  reqInstanceHelper.PrintInfo(serviceName, '------------Tran update is not success-------', objSessionLogInfo);

                }
              } else {
                reqInstanceHelper.PrintInfo(serviceName, '------------No eligible tran found in log Table-------', objSessionLogInfo);
                objresponse.status = 'FAILURE';
                objresponse.msg = 'No eligible tran found in log Table';
                sendResponse(null, objresponse)
              }

            }
            else {
              reqInstanceHelper.PrintInfo(serviceName, '------------No Time details found in core_nc_system_setup Table-------', objSessionLogInfo);
              objresponse.status = 'FAILURE';
              objresponse.msg = 'No Time details found in core_nc_system_setup Table';
              sendResponse(null, objresponse)
            }



            //Function for insert in TrnProcess Log Table
            function ProcessInstData(apicallresult, arrDataobj) {
              return new Promise((resolve, reject) => {

                var arrCusTranInst = [];
                var objCusTranInst = {};
                objCusTranInst.MSG_ID = arrDataobj.msg_id;
                objCusTranInst.PRCT_ID = PRCT_ID;
                objCusTranInst.PROCESS_TIME = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                objCusTranInst.UETR = arrDataobj.uetr;
                objCusTranInst.NPSSTRRD_REFNO = arrDataobj.npsstrrd_refno;
                objCusTranInst.PROCESS_NAME = 'LARICBS'
                objCusTranInst.PROCESS_STATUS = 'RCTCancelled';
                objCusTranInst.STATUS = 'P2B_FUND_RES_CANCELLED';
                objCusTranInst.TENANT_ID = params.TENANT_ID;
                objCusTranInst.APP_ID = '215'
                objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                objCusTranInst.CREATED_BY = params.CREATED_BY;
                objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                objCusTranInst.T24_RETURN_CODE = null;
                objCusTranInst.CREATED_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                objCusTranInst.MODIFIED_BY = "";
                objCusTranInst.MODIFIED_BY_NAME = "";
                objCusTranInst.MODIFIED_DATE = null;
                objCusTranInst.SYSTEM_ID = params.SYSTEM_ID;
                objCusTranInst.SYSTEM_NAME = params.SYSTEM_NAME;
                objCusTranInst.CREATED_BY_STS_ID = "";
                objCusTranInst.MODIFIED_BY_STS_ID = "";
                objCusTranInst.created_clientip = objSessionLogInfo.CLIENTIP;
                objCusTranInst.created_tz = objSessionLogInfo.CLIENTTZ;
                objCusTranInst.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                objCusTranInst.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                objCusTranInst.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                objCusTranInst.routingkey = headers.routingkey;
                arrCusTranInst.push(objCusTranInst)

                _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(logInsertRes) {
                  resolve(logInsertRes)

                })
              })

            }
            function UpdateTran(arrTran, prct_id) {
              return new Promise((resolve, reject) => {
                let UpdTrntbl = `update npss_trn_process_log set org_status = 'UNFREEZE_TAKEN', MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${prct_id}' where npsstpl_id in (${arrTran})`
                ExecuteQuery(UpdTrntbl, function (arrUpdTranTbl) {
                  if (arrUpdTranTbl == 'SUCCESS') {
                    resolve('SUCCESS')
                  } else {
                    resolve('Failure')
                  }


                })
              })

            }

            function kafkaapi(arrpayverobj, arrurl, process_name1) {
              var postrefno;
              return new Promise(async (resolve, reject) => {
                var TakepostingRefno = `select process_ref_no from npss_trn_process_log where process_name='${params.postingrefnoprocess_name}' and uetr='${arrpayverobj.uetr}'`
                var arrpostrefno = await ExecuteQuery1(TakepostingRefno)
                postrefno = arrpostrefno[0].process_ref_no ? arrpostrefno[0].process_ref_no : ''
                var takereqjson = `select npsstpl_id,fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY) as request_data_json,npsstrrd_refno,msg_id, additional_info as tran_type_code  from npss_trn_process_log where process_name in ${process_name1}  and uetr='${arrpayverobj.uetr}'`

                var arrtakereqjson = await ExecuteQuery1(takereqjson)
                if (arrtakereqjson.length > 0 && arrtakereqjson[0].request_data_json != null) {
                  var JsonData
                  var Bankcode
                  var cdtr_iban
                  var tran_ref_id
                  var amount
                  var currency
                  var dbtr_iban
                  var dbtr_acct_name
                  var cdtr_acct_name
                  var TranTypecode
                  var npssrefno
                  var reson
                  JsonData = JSON.parse(arrtakereqjson[0].request_data_json)
                  Bankcode = JsonData['merchant']['bankCode'] || ''
                  cdtr_iban = JsonData['merchant']['IBAN'] || ''
                  tran_ref_id = JsonData['transactionId'] || ''
                  amount = JsonData['amount']["requested"] || ''
                  currency = JsonData['amount']['currency'] || ''
                  dbtr_iban = JsonData['buyer']['IBAN'] || ''
                  dbtr_acct_name = JsonData['buyer']['name'] || ''
                  cdtr_acct_name = JsonData['merchant']['merchantName'] || ''
                  TranTypecode = JsonData['transactionType'] || ''
                  npssrefno = JsonData['refTransactionId'] || ''
                  reson = JsonData['reason']
                  try {
                    var request = require('request');
                    var options = {
                      url: arrurl[0].param_detail,
                      timeout: 18000000,
                      method: 'POST',
                      json: {
                        batch_name: params.topicName,
                        data: {
                          "payload": {
                            "tran_ref_id": tran_ref_id || '',
                            "uetr": arrpayverobj.uetr || '',
                            "hdr_msg_id": '',
                            "hdr_total_records": '1' || '',
                            "x_req_id": arrtakereqjson[0].msg_id || '',
                            "dbtr_country": '',
                            "process_ref_no": arrtakereqjson[0].npsstrrd_refno || '',
                            "intrbk_sttlm_amnt": amount || '',
                            "hdr_total_amount": amount || '',
                            "intrbk_sttlm_cur": currency || '',
                            "dbtr_iban": dbtr_iban || '',
                            "customer_mobile_number":  '',
                            "dbtr_acct_name": dbtr_acct_name || '',
                            "dr_sort_code": '',
                            "cdtr_iban": cdtr_iban || '',
                            "cdtr_acct_name": cdtr_acct_name || '',
                            "cr_sort_code": Bankcode || '',
                            "tran_type_code": TranTypecode || '',
                            "merchantTrxId": arrtakereqjson[0].msg_id || '',
                            "hdr_settlement_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                            "participant_clearing_system": 'CRTLBP.0.o',
                            "process_type": "P2BUNFR",
                            "payment_processing_method": "P2B_SCT_INITITATION",
                            "extIdentifier": tran_ref_id || '',
                            "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                            "hdr_created_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                            "dbtr_prvt_id": arrpayverobj.dbtr_prvt_id||'',
                            "ext_org_id_code": '',
                            "issuer_type_code": arrpayverobj.issuer_type_code||'',
                            "dbtr_document_id": arrpayverobj.dbtr_document_id||'',
                            "dbtr_birth_date": arrpayverobj.dbtr_birth_date||'',
                            "dbtr_city_birth":arrpayverobj.dbtr_city_birth||'',
                            "ext_person_id_code": 'NIDN',
                            "dbtr_other_issuer": 'AE',
                            "cr_acct_identification": '',
                            "is_merchant": "false",
                            "dr_department_code": "DEFAULT",
                            "process": "Pacs.008 Real Time Credit Transfer P2B",
                            "process_status": '',
                            "status": '',
                            "channel_id": 'IPP',
                            "channel_refno": tran_ref_id || '',
                            "category_purpose": "IPP",
                            "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.09",
                            "account_currency": "AED",
                            "remittance_information": reson || '',

                            "npsstrrd_refno": npssrefno || '',

                          }
                        }
                      },
                      'headers': 'application/json'
                    }
                    let PrintInfo = {
                      url: arrurl[0].param_detail,
                      uetr: arrpayverobj.uetr

                    }
                    reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                    request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                      if (error) {
                        reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                        sendResponse(error, null);

                      } else {
                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                        if (responseBodyFromImagingService == 'SUCCESS') {
                          resolve(responseBodyFromImagingService);

                        } else {
                          resolve(responseBodyFromImagingService);
                        }
                      }
                    });

                  } catch (error) {
                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                    sendResponse(error, null);
                  }


                } else {
                  reqInstanceHelper.PrintInfo(serviceName, '------------No request data json found in log-------' + arrpayverobj.uetr, objSessionLogInfo);
                  resolve('Failure');
                }
              })
            }



            function Prepareparam(parameter) {
              return new Promise((resolve, reject) => {
                var arrdata
                if (Array.isArray(parameter)) {
                  arrdata = parameter.map(function (eachTran) {
                    return eachTran.toString();
                  });
                } else {
                  arrdata = [parameter.toString()];
                }
                var Tempdata = '(' + "'" + arrdata.toString().split(',').join("','") + "'" + ')';

                resolve(Tempdata)

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


            function ExecuteQuery1(query) {
              return new Promise((resolve, reject) => {
                reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                  try {
                    if (error) {
                      sendResponse(error)
                    } else {
                      if (result.rows.length > 0) {
                        resolve(result.rows);
                      } else {
                        resolve([]);
                      }
                    }
                  } catch (error) {
                    sendResponse(error)
                  }
                });
              })

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
