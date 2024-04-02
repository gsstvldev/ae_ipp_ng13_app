var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

  
  





  try {
    /*   Created By : Siva Harish
    Created Date :30 -06-2023
  Modifiy by : 3/7/2023
    Modifiy by : Siva Harish 4/9/2023
    */
    var serviceName = 'NPSS (S) Posting Retry';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var cvAcNum, sell_margin, sell_rate;
    var xml2js = require('xml2js');
    var moment = require('moment');
    var mTranConn = "";
    var addquery = "";
    var PRCT_ID = ""
    var failcountobj = {}
    var failcount = []
    var final_status = ''
    var reqAsync = require('async');
    var arrTranID
    var objresponse = {
      'status': 'FAILURE',
      'data': '',
      'errdata': '',
      'msg': ''
    }; // Response to Client
    // Assign function for loginformation and session info

    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
      try {
        objSessionLogInfo = objLogInfo; // Assing log information
        // Log Viewer Setup
        objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Posting Retry';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSS (S) Posting Retry';
        var cus_iban;
        // Get DB Connection                                                                                                                                      
        reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
          mTranConn = pSession; //  assign connection     
          reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
            try {
              PRCT_ID = prct_id

              var Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
              ExecuteQuery1(Takekafkaurl, async function (arrurl) {
                if (arrurl.length > 0) {
                  let sts = params.eligible_status
                  let arrTranparams
                  reqAsync.forEachOfSeries(sts, function (stsObj, i, nextobjctstsfunc) {
                    var runfunction = async () => {
                      if (stsObj == 'OP_AC_REV_AUTO_POSTING_READY' || stsObj == 'OP_P2P_REV_AUTO_POSTING_READY') { //ORR Outward Reversal
                        arrTranparams = await GetTranData(stsObj)
                        if (arrTranparams != 'Failure') {
                          Apicalls = await CallORRAPI(arrTranparams, arrurl, stsObj, final_status, PRCT_ID)
                          nextobjctstsfunc()
                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '-----------Error in Iniated Status Udate for status or No data found in Trn table-------' + stsObj, objSessionLogInfo);
                          nextobjctstsfunc()
                        }

                      } else if (stsObj == 'OP_AC_RET_AUTO_POSTING_READY' || stsObj == 'OR_P2P_AUTO_POSTING_READY') { //OR Outward Return
                        arrTranparams = await GetTranData(stsObj)
                        if (arrTranparams != 'Failure') {
                          Apicalls = await CallORAPI(arrTranparams, arrurl, stsObj, final_status, PRCT_ID)
                          nextobjctstsfunc()
                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '-----------Error in Iniated Status Udate for status or No data found in Trn table-------' + stsObj, objSessionLogInfo);
                          nextobjctstsfunc()
                        }

                      } else if (stsObj == 'IP_RCT_CC_T24_AUTO_POSTING_READY') { //Inward Credit card T24  posting API
                        arrTranparams = await GetTranData(stsObj)
                        if (arrTranparams != 'Failure') {
                          Apicalls = await Callcreditapi(arrTranparams, arrurl, stsObj, final_status, PRCT_ID)
                          nextobjctstsfunc()
                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '-----------Error in Iniated Status Udate for status or No data found in Trn table------' + stsObj, objSessionLogInfo);
                          nextobjctstsfunc()
                        }

                      } else if (stsObj == 'IP_RCT_PC_T24_AUTO_POSTING_READY') { //Inward Prepaid card T24  posting API
                        arrTranparams = await GetTranData(stsObj)
                        if (arrTranparams != 'Failure') {
                          Apicalls = await Callprepaidapi(arrTranparams, arrurl, stsObj, final_status, PRCT_ID)
                          nextobjctstsfunc()
                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '-----------Error in Iniated Status Udate for status or No data found in Trn table-------' + stsObj, objSessionLogInfo);
                          nextobjctstsfunc()
                        }

                      } else if (stsObj == 'IP_RCT_RET_AUTO_POSTING_READY') { //Inward Nastro to Nastro posting API   //inward return Nostro Posting API  
                        arrTranparams = await GetTranData(stsObj)
                        if (arrTranparams != 'Failure') {
                          Apicalls = await CallNostroapi(arrTranparams, arrurl, stsObj, final_status, PRCT_ID)
                          nextobjctstsfunc()
                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '-----------Error in Iniated Status Udate for status or No data found in Trn table-------' + stsObj, objSessionLogInfo);
                          nextobjctstsfunc()
                        }

                      } else if (stsObj == 'IP_RCT_RR_AUTO_POSTING_READY') { //T24 inward return Posting API (Auto Return Case) 
                        arrTranparams = await GetTranData(stsObj)
                        if (arrTranparams != 'Failure') {
                          Apicalls = await CallautoReturn(arrTranparams, arrurl, stsObj, final_status, PRCT_ID)
                          nextobjctstsfunc()
                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '-----------Error in Iniated Status Udate for status or No data found in Trn table-------' + stsObj, objSessionLogInfo);
                          nextobjctstsfunc()
                        }

                      } else if (stsObj == 'IP_RCT_AUTO_POSTING_READY') { //T24 INward 
                        arrTranparams = await GetTranData(stsObj)
                        if (arrTranparams != 'Failure') {
                          Apicalls = await CallT24Posting(arrTranparams, arrurl, stsObj, final_status, PRCT_ID)
                          nextobjctstsfunc()
                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '-----------Error in Iniated Status Udate for status or No data found in Trn table-------' + stsObj, objSessionLogInfo);
                          nextobjctstsfunc()
                        }

                      } else if (stsObj == 'OP_P2P_AUTO_POSTING_READY') { //P2P 
                        arrTranparams = await GetTranData(stsObj)
                        if (arrTranparams != 'Failure') {
                          Apicalls = await CallP2PPosting(arrTranparams, arrurl, stsObj, final_status, PRCT_ID)
                          nextobjctstsfunc()
                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '-----------Error in Iniated Status Udate for status or No data found in Trn table-------' + stsObj, objSessionLogInfo);
                          nextobjctstsfunc()
                        }

                      } else {
                        reqInstanceHelper.PrintInfo(serviceName, '------------No Eligible status for Api call-------', objSessionLogInfo);
                        objresponse.status = "FAILURE"
                        objresponse.errdata = "No Eligible status for Api call"
                        sendResponse(null, objresponse)
                      }
                    }
                    runfunction()
                  }, function () {
                    reqInstanceHelper.PrintInfo(serviceName, '------------All data moved Successfully-------', objSessionLogInfo);
                    objresponse.status = 'SUCCESS';
                    objresponse.data = "All data moved Successfully"
                    sendResponse(null, objresponse)
                  })
                } else {
                  reqInstanceHelper.PrintInfo(serviceName, '------------kafka Api url not found-------', objSessionLogInfo);
                  objresponse.status = 'FAILURE';
                  objresponse.data = "kafka Api url not found"
                  sendResponse(null, objresponse)
                }
              })
            }
            catch (error) {
              reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
              sendResponse(error, null);
            }
          })

          function GetTranData(eligible_status) {
            return new Promise(async (resolve, reject) => {
              var take_api_params;
              if (eligible_status == 'OP_P2P_AUTO_POSTING_READY') {
                take_api_params = `select uetr,* from npss_trn_process_log ns  where status = '${eligible_status}' `;
              }
              else {
                take_api_params = `select ns.department_code,ns.process_group,ns.channel_refno,ns.channel_id,ns.middleware_ref_no,ns.cbs_ref_no,ns.reversal_amount,ns.npsst_id,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY ) as dbtr_acct_no,ns.dbtr_cust_type,ns.ext_acct_id_code,ns.intrbk_sttlm_amnt,ns.instrument_type,ns.instruction_id,ns.hdr_msg_id,ns.hdr_clearing_system,ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,fn_pcidss_decrypt(ns.message_data,$PCIDSS_KEY ) as message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,ns.accp_date_time as accp_dt_tm from npss_transactions ns where status = '${eligible_status}'`;
              }

              ExecuteQuery1(take_api_params, async function (arrTranparams) {
                if (arrTranparams.length > 0) {
                  reqInstanceHelper.PrintInfo(serviceName, '----------data found in Transaction Table  for the status -----' + eligible_status, objSessionLogInfo);
                  var intiateUpdtRes = await doInitiate(eligible_status)
                  if (intiateUpdtRes == 'Success') {
                    resolve(arrTranparams)
                  } else {
                    reqInstanceHelper.PrintInfo(serviceName, '-----------Error in Iniate Status Update-------', objSessionLogInfo);
                    resolve('Failure')
                  }


                } else {
                  reqInstanceHelper.PrintInfo(serviceName, '-----------No data in Tran Table for eligible status-------' + eligible_status, objSessionLogInfo);
                  resolve('Failure')

                }
              })
            })
          }














          function Callcreditapi(arrTranparams, arrurl, statusobj, final_status, PRCT_ID) {

            return new Promise((resolve, reject) => {
              reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {

                var runfunction = async () => {
                  let arrrefno = await getProcesslogdet(arrTranparamsObj, 'Receive Pacs002')

                  if (arrrefno != '') {
                    if (arrrefno[0].process_ref_no != null) {

                      let arrnpssRefno = await getProcesslogdet(arrTranparamsObj, 'Receive Pacs008')

                      if (arrnpssRefno != '') {
                        var lclinstrm
                        try {
                          if (arrTranparamsObj.message_data !== null) {
                            try {
                              var parser = new xml2js.Parser({ strict: false, trim: true });
                              parser.parseString(arrTranparamsObj.message_data, function (err, result) {
                                lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                              });
                            } catch (error) {
                              lclinstrm = "INST"
                            }

                          }
                          else {
                            lclinstrm = "INST"
                          }
                        } catch (error) {
                          lclinstrm = 'INST'
                        }

                        let TranInsertProcess = await InsertProcess(arrTranparamsObj, statusobj, PRCT_ID, 'IP')
                        if (TranInsertProcess == 'SUCCESS') {
                          var request = require('request');
                          var options = {
                            url: arrurl[0].param_detail,
                            timeout: 18000000,
                            method: 'POST',
                            json: {
                              batch_name: "CR-CBS-POSTING-Q",
                              data: {
                                "payload": {
                                  "department_code": arrTranparamsObj.department_code || '',

                                  "hdr_msg_id": arrTranparamsObj.hdr_msg_id || '',
                                  "hdr_created_date": arrTranparamsObj.hdr_created_date || '',
                                  "hdr_total_records": arrTranparamsObj.hdr_total_records || '',
                                  "hdr_total_amount": arrTranparamsObj.hdr_total_amount || '',
                                  "hdr_settlement_date": arrTranparamsObj.hdr_settlement_date || '',
                                  "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD") || '',
                                  "hdr_settlement_method": arrTranparamsObj.hdr_settlement_method || '',
                                  "hdr_clearing_system": arrTranparamsObj.hdr_clearing_system || '',
                                  "instruction_id": arrTranparamsObj.instruction_id || '',
                                  "dr_sort_code": arrTranparamsObj.dr_sort_code || '',
                                  "cr_sort_code": arrTranparamsObj.cr_sort_code || '',
                                  "cdtr_acct_name": arrTranparamsObj.cdtr_acct_name || '',
                                  "category_purpose": arrTranparamsObj.category_purpose || '',
                                  "category_purpose_prty": arrTranparamsObj.category_purpose_prty || '',
                                  "ext_purpose_code": arrTranparamsObj.ext_purpose_code || '',
                                  "ext_purpose_prty": arrTranparamsObj.ext_purpose_prty || '',
                                  "lclinstrm": lclinstrm,
                                  "instrument_type": arrTranparamsObj.instrument_type || '',
                                  "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                                  "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt || '',
                                  "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                                  "dbtr_acct_no": arrTranparamsObj.dbtr_acct_no || '',
                                  "ext_acct_id_code": arrTranparamsObj.ext_acct_id_code || '',
                                  "charge_code": arrTranparamsObj.dbtr_cust_type || '',
                                  "dbtr_cust_type": arrTranparamsObj.dbtr_cust_type || '',
                                  "ext_org_id_code": arrTranparamsObj.ext_org_id_code || '',
                                  "issuer_type_code": arrTranparamsObj.issuer_type_code || '',
                                  "dbtr_birth_date": arrTranparamsObj.dbtr_birth_date || '',
                                  "dbtr_city_birth": arrTranparamsObj.dbtr_city_birth || '',
                                  "dbtr_country": arrTranparamsObj.dbtr_country || '',
                                  "dbtr_document_id": arrTranparamsObj.dbtr_document_id || '',
                                  "ext_person_id_code": arrTranparamsObj.ext_person_id_code || '',
                                  "dbtr_other_issuer": arrTranparamsObj.dbtr_other_issuer || '',
                                  "dbtr_acct_name": arrTranparamsObj.dbtr_acct_name || '',
                                  "cdtr_iban": arrTranparamsObj.cdtr_iban || '',
                                  "dbtr_prvt_id": arrTranparamsObj.dbtr_prvt_id || '',
                                  "payment_endtoend_id": arrTranparamsObj.payment_endtoend_id || '',
                                  "accp_dt_tm": arrTranparamsObj.accp_dt_tm || '',
                                  "charge_bearer": arrTranparamsObj.charge_bearer || '',
                                  "tran_ref_id": arrTranparamsObj.tran_ref_id || '',
                                  "uetr": arrTranparamsObj.uetr || '',
                                  "cr_acct_identification": arrTranparamsObj.cr_acct_identification || '',
                                  "cr_acct_id_code": arrTranparamsObj.cr_acct_id_code || '',
                                  "message_data": arrTranparamsObj.message_data || '',
                                  "process_type": arrTranparamsObj.process_type || '',
                                  "status": arrTranparamsObj.status || '',
                                  "process_status": arrTranparamsObj.process_status || '',
                                  "process": "Pacs.002 Payment Status Report",
                                  "remittance_information": arrTranparamsObj.remittance_info || '',
                                  "clrsysref": arrTranparamsObj.clrsysref || '',
                                  "extIdentifier": arrTranparamsObj.clrsysref || '',
                                  "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.09",
                                  "card_type": "CREDIT_CARD",
                                  "active_status": "ACCP",
                                  "process_ref_no": arrrefno[0].process_ref_no,
                                  "originalTrasactionId": '',
                                  "status_accp_date": arrrefno[0].status_accp_date || '',
                                  "status_resp_amount": arrrefno[0].status_resp_amount || '',
                                  "status_intrbksttlmdt": arrrefno[0].status_intrbksttlmdt || '',
                                  "cbuae_return_code": "",
                                  "npsstrrd_refno": arrnpssRefno[0].npsstrrd_refno || '',
                                  "process_name": "Pacs.002 Payment Status Report",
                                  "request_data_json": "",
                                  "NOSTRO_POOL_ACC": "Y",
                                  "retry_count": "0",
                                }
                              }
                            },
                            headers: {
                              'Content-Type': 'application/json'
                            }

                          }

                          var PrintInfo = {}
                          PrintInfo.url = arrurl[0].param_detail
                          PrintInfo.card = 'Credit CARD POOL POSTING'
                          PrintInfo.uetr = arrTranparamsObj.uetr || ''
                          PrintInfo.npsst_id = arrTranparamsObj.npsst_id || ''
                          PrintInfo.msg_id = arrTranparamsObj.hdr_msg_id || ''
                          PrintInfo.clrsysref = arrTranparamsObj.clrsysref || ''

                          reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                          request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                            if (error) {
                              reqInstanceHelper.PrintInfo(serviceName, '------------API ERROR-------' + error, objSessionLogInfo);
                              sendResponse(error, null);

                            } else {
                              reqInstanceHelper.PrintInfo(serviceName, '------------Credit Card API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                              nextobjctfunc()
                            }
                          });
                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '------------Credit Card API - Error in Trnprslog table for Trnid-------' + arrTranparamsObj.npsst_id, objSessionLogInfo);
                          nextobjctfunc()
                        }

                      } else {
                        reqInstanceHelper.PrintInfo(serviceName, '------------Credit - npsstrrd_refno not found for-------' + arrTranparamsObj.npsst_id, objSessionLogInfo);
                        nextobjctfunc()

                      }




                    } else {
                      reqInstanceHelper.PrintInfo(serviceName, '------------Credit card - Process Ref no is Missing for-------' + arrTranparamsObj.npsst_id, objSessionLogInfo);
                      nextobjctfunc()

                    }
                  } else {
                    reqInstanceHelper.PrintInfo(serviceName, '------------Credit card - Process Ref no not found for Tran_id for-------' + arrTranparamsObj.npsst_id, objSessionLogInfo);
                    nextobjctfunc()
                  }

                }
                runfunction()
              }, function () {
                resolve('SUCCESS')
              })
            })
          }
          function fngetacctype(arrprocesslog) {
            return new Promise((resolve, reject) => {
              try {
                takeaccttypeqry = `select at.cb_acctype_code,at.cbs_category_id, ac.category_code from core_nc_cbs_accounts ac  inner join core_nc_cbscate_cbacctyp at
                on at.cbs_category_id = TO_CHAR(ac.category_code,'FM9999999999') where ac.alternate_account_id='${arrprocesslog}'`
                ExecuteQuery1(takeaccttypeqry, function (accttype) {
                  
                  if (accttype.length > 0 && accttype[0].cb_acctype_code != null) {
                    resolve(accttype[0].cb_acctype_code)
                  } else {
                    resolve('OTHR')
                  }

                })
              } catch (error) {
                resolve('OTHR')
              }
            })
          }
          function CallORRAPI(arrTranparams, arrurl, statusobj, final_status, PRCT_ID) {
            return new Promise((resolve, reject) => {
              var reason_code
              var npsst_refno
              reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {

                var runfunction = async () => {
                  var TakeacctInfrm = await AccountInformation(arrTranparamsObj, 'OP')
                  if (TakeacctInfrm.status == 'SUCCESS') {
                    var TakeRtncode = await Returncode(arrTranparamsObj)
                    var lclinstrm
                    try {
                      if (arrTranparamsObj.message_data !== null) {
                        try {
                          var parser = new xml2js.Parser({ strict: false, trim: true });
                          parser.parseString(arrTranparamsObj.message_data, function (err, result) {
                            lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                          });
                        } catch (error) {
                          lclinstrm = "INST"
                        }

                      }
                      else {
                        lclinstrm = "INST"
                      }
                    } catch (error) {
                      lclinstrm = "INST"
                    }
                    var payment_processing_method
                    let purp='';

                    if (arrTranparamsObj.process_group == 'P2P') {
                      payment_processing_method = "SCT_INITITATION"
                      purp='MP2P'

                    } else if (arrTranparamsObj.process_group == 'P2B') {
                      payment_processing_method = "P2B_SCT_INITITATION"
                      purp='MP2B'

                    } else if (arrTranparamsObj.process_group == 'IBAN') {
                      payment_processing_method = "AC_AC_IBAN"
                      purp='WEBI'
                    } else {
                      payment_processing_method = ''
                    }

                    let TranInsertProcess = await InsertProcess(arrTranparamsObj, statusobj, PRCT_ID, 'OP')
                    var takeaccttypecode = await fngetacctype(arrTranparamsObj.dbtr_iban)
                    if (TranInsertProcess == 'SUCCESS') {
                      var request = require('request');
                      var options = {
                        url: arrurl[0].param_detail,
                        timeout: 18000000,
                        method: 'POST',
                        json: {
                          batch_name: "DR-CBS-POSTING-Q",
                          data: {

                            "payload": {
                              "hdr_msg_id": arrTranparamsObj.hdr_msg_id || '',
                              "hdr_created_date": arrTranparamsObj.hdr_created_date || '',
                              "hdr_total_records": arrTranparamsObj.hdr_total_records || '1',
                              "hdr_total_amount": arrTranparamsObj.hdr_total_amount || '',
                              "hdr_settlement_date": arrTranparamsObj.hdr_settlement_date || '',
                              "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                              "hdr_settlement_method": "CLRG",
                              "hdr_clearing_system": arrTranparamsObj.hdr_clearing_system || '',
                              "instruction_id": arrTranparamsObj.instruction_id || '',
                              "channel_id": arrTranparamsObj.channel_id || '',
                              "channel_refno": arrTranparamsObj.channel_refno || '',
                              "dr_sort_code": arrTranparamsObj.dr_sort_code || '',
                              "cr_sort_code": arrTranparamsObj.cr_sort_code || '',
                              "cdtr_acct_name": arrTranparamsObj.cdtr_acct_name || '',
                              "category_purpose": arrTranparamsObj.category_purpose || '',
                              "category_purpose_prty": arrTranparamsObj.category_purpose_prty || '',
                              "ext_purpose_code": arrTranparamsObj.ext_purpose_code || '',
                              "ext_purpose_prty": arrTranparamsObj.ext_purpose_prty || '',
                              "lclinstrm": lclinstrm,
                              "instrument_type": arrTranparamsObj.instrument_type || '',
                              "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                              "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt || '',
                              "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                              "dbtr_acct_no": arrTranparamsObj.dbtr_acct_no || '',
                              "ext_acct_id_code": arrTranparamsObj.ext_acct_id_code || '',
                              "charge_code": '',
                              "dbtr_cust_type": arrTranparamsObj.dbtr_cust_type || '',
                              "ext_org_id_code": arrTranparamsObj.ext_org_id_code || '',
                              "issuer_type_code": arrTranparamsObj.issuer_type_code || '',
                              "dbtr_birth_date": arrTranparamsObj.dbtr_birth_date || '',
                              "dbtr_city_birth": arrTranparamsObj.dbtr_city_birth || '',
                              "dbtr_country": arrTranparamsObj.dbtr_country || '',
                              "dbtr_document_id": arrTranparamsObj.dbtr_document_id || '',
                              "ext_person_id_code": arrTranparamsObj.ext_person_id_code || '',
                              "dbtr_other_issuer": arrTranparamsObj.dbtr_other_issuer || '',
                              "dbtr_acct_name": arrTranparamsObj.dbtr_acct_name || '',
                              "cdtr_iban": arrTranparamsObj.cdtr_iban || '',
                              "dbtr_prvt_id": arrTranparamsObj.dbtr_prvt_id || '',
                              "bankuserid": '',
                              "rsn_code": TakeRtncode.reason_code,
                              "npsstrrd_refno": TakeRtncode.npsst_refno,
                              "AccountInformation": TakeacctInfrm.AccountInformations,
                              "payment_endtoend_id": arrTranparamsObj.payment_endtoend_id || '',
                              "accp_dt_tm": arrTranparamsObj.accp_dt_tm || '',
                              "charge_bearer": arrTranparamsObj.charge_bearer || '',
                              "tran_ref_id": arrTranparamsObj.tran_ref_id || '',
                              "uetr": arrTranparamsObj.uetr || '',
                              "cbs_ref_no": arrTranparamsObj.cbs_ref_no || '',
                              "middleware_ref_no": arrTranparamsObj.middleware_ref_no || '',
                              "cr_acct_identification": arrTranparamsObj.cr_acct_identification || '',
                              "cr_acct_id_code": arrTranparamsObj.cr_acct_id_code || '',
                              "message_data": arrTranparamsObj.message_data || '',
                              "process_type": 'ORR',
                              "status": arrTranparamsObj.status || '',
                              "process_status": arrTranparamsObj.process_status || '',
                              "remittance_information": arrTranparamsObj.remittance_info || '',
                              "clrsysref": arrTranparamsObj.clrsysref || '',
                              "extIdentifier": arrTranparamsObj.clrsysref || '',
                              "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.0",
                              "payment_processing_method": payment_processing_method || '',
                              "department_code": arrTranparamsObj.department_code || '',
                              "company_code": TakeacctInfrm.AccountInformations.company_code || '',
                              "error_code": "",
                              cb_acctype_code:takeaccttypecode,
                              "purp":purp

                            }
                          }
                        },
                        headers: {
                          'Content-Type': 'application/json'
                        }

                      }

                      var PrintInfo = {}
                      PrintInfo.url = arrurl[0].param_detail
                      PrintInfo.uetr = arrTranparamsObj.uetr || ''
                      PrintInfo.npsst_id = arrTranparamsObj.npsst_id || ''
                      PrintInfo.apiName = 'ORR'


                      reqInstanceHelper.PrintInfo(serviceName, '-----------ORR-API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                      request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                        if (error) {
                          reqInstanceHelper.PrintInfo(serviceName, '------------CallORRAPI API ERROR-------' + error, objSessionLogInfo);
                          sendResponse(error, null);

                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '------------ORR API Response JSON for TranId-------' + arrTranparamsObj.npsst_id + '..........' + responseBodyFromImagingService, objSessionLogInfo);
                          nextobjctfunc()
                        }
                      });

                    } else {
                      reqInstanceHelper.PrintInfo(serviceName, '------------ORR Error in Tran process log insert for TranId-------' + arrTranparamsObj.npsst_id, objSessionLogInfo);
                      nextobjctfunc()
                    }

                  } else {
                    reqInstanceHelper.PrintInfo(serviceName, '------------ORR Data not found IN CBS ACCounts table for Tranid-------' + arrTranparamsObj.npsst_id, objSessionLogInfo);
                    nextobjctfunc()
                  }
                }

                runfunction()

              }, function () {
                resolve('SUCCESS')
              })
            })



          }



          function CallORAPI(arrTranparams, arrurl, statusobj, final_status, PRCT_ID) {
            return new Promise((resolve, reject) => {
              reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                var runapifun = async () => {
                  var TakeacctInfrm = await AccountInformation(arrTranparamsObj, 'OP')
                  if (TakeacctInfrm.status == 'SUCCESS') {

                    var returncode = await getProcesslogdet(arrTranparamsObj, 'Receive Pacs004')
                    var RtrdIntrBkSttlmAmt = await getProcesslogdet(arrTranparamsObj, 'Place Pacs004')
                    var reason_code
                    var npsst_refno
                    if (returncode != '') {
                      reason_code = returncode[0].cbuae_return_code || '';
                      npsst_refno = returncode[0].npsstrrd_refno || ''
                    } else {
                      reason_code = ''
                      npsst_refno = ''
                    }
                    var takeaccttypecode = await fngetacctype(arrTranparamsObj.dbtr_iban)
                    let TranInsertProcess = await InsertProcess(arrTranparamsObj, statusobj, PRCT_ID, 'OP')
                    let purp='';
                    if(arrTranparamsObj.process_group=="P2P"){
                      purp='MP2P'
                    }else if(arrTranparamsObj.process_group=="P2B"){
                      purp='MP2B'
                    }else{
                      purp='WEBI'
                    }
                    if (TranInsertProcess == 'SUCCESS') {
                      var request = require('request');
                      var options = {
                        url: arrurl[0].param_detail,
                        timeout: 18000000,
                        method: 'POST',
                        json: {
                          batch_name: "DR-CBS-POSTING-Q",
                          data: {
                            "payload": {
                              "dr_sort_code": arrTranparamsObj.dr_sort_code || '',
                              "payment_endtoend_id": arrTranparamsObj.payment_endtoend_id || '',
                              "tran_ref_id": arrTranparamsObj.tran_ref_id || '',
                              "uetr": arrTranparamsObj.uetr || '',
                              "clrsysref": arrTranparamsObj.clrsysref || '',
                              "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt || '',
                              "reversal_amount": arrTranparamsObj.reversal_amount || '',
                              "reversal_code": "",
                              "hdr_msg_id": arrTranparamsObj.hdr_msg_id || '',
                              "intrbk_sttlm_dt": arrTranparamsObj.intrbk_sttlm_dt || '',
                              "AccountInformation": TakeacctInfrm.AccountInformations || '',
                              "cdtr_iban": arrTranparamsObj.cdtr_iban || '',
                              "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                              "cr_acct_identification": arrTranparamsObj.cr_acct_identification || '',
                              "post_reason_code": reason_code,
                              "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                              "hdr_settlement_date": arrTranparamsObj.hdr_created_date || '',
                              "hdr_settlement_method": "CLRG",
                              "cr_sort_code": arrTranparamsObj.cr_sort_code || '',
                              "return_id": "",
                              "hdr_new_settlement_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                              "participant_clearing_system": "CRTLBP.0.0",
                              "process_type": "OR",
                              "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.004.001.11",
                              "originalTrasactionId": "",
                              "cbuae_return_code": reason_code,
                              "remittance_information": arrTranparamsObj.remittance_info || '',
                              "extIdentifier": arrTranparamsObj.clrsysref || '',
                              "category_purpose": arrTranparamsObj.category_purpose || '',
                              "category_purpose_prty": arrTranparamsObj.category_purpose_prty || '',
                              "charge_bearer": arrTranparamsObj.charge_bearer || '',
                              "company_code": TakeacctInfrm.AccountInformations.company_code || '',
                              "alternate_account_type": TakeacctInfrm.AccountInformations.alternate_account_type || '',
                              "currency": TakeacctInfrm.AccountInformations.currency || '',
                              "charge_bearer": arrTranparamsObj.charge_bearer || '',
                              "account_number": TakeacctInfrm.AccountInformations.account_number || '',
                              "cdtr_acct_name": arrTranparamsObj.cdtr_acct_name || '',
                              "npsstrrd_refno": npsst_refno || '',
                              "RtrdIntrBkSttlmAmt": RtrdIntrBkSttlmAmt != '' ? RtrdIntrBkSttlmAmt[0].additional_info : '' || '',
                              cb_acctype_code:takeaccttypecode,
                              "purp":purp
                            }
                          }
                        },
                        headers: {
                          'Content-Type': 'application/json'
                        }

                      }

                      var PrintInfo = {}
                      PrintInfo.url = arrurl[0].param_detail
                      PrintInfo.uetr = arrTranparamsObj.uetr || ''
                      PrintInfo.npsst_id = arrTranparamsObj.npsst_id || ''
                      PrintInfo.apiName = 'OR Api'


                      reqInstanceHelper.PrintInfo(serviceName, '------------OR API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                      request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                        if (error) {
                          reqInstanceHelper.PrintInfo(serviceName, '------------OR API ERROR-------' + error, objSessionLogInfo);
                          sendResponse(error, null);

                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '------------OR API Response JSON for TranId-------' + arrTranparamsObj.npsst_id + '.............' + responseBodyFromImagingService, objSessionLogInfo);
                          nextobjctfunc()
                        }
                      });


                    } else {
                      reqInstanceHelper.PrintInfo(serviceName, '------------OR API Error in TrnPrs log Insert-------' + arrTranparamsObj.npsst_id, objSessionLogInfo);
                      nextobjctfunc()
                    }


                  } else {
                    reqInstanceHelper.PrintInfo(serviceName, '------------OR Data not found IN CBS ACCounts table for Tranid-------' + arrTranparamsObj.npsst_id, objSessionLogInfo);
                    nextobjctfunc()
                  }
                }
                runapifun()
              }, function () {
                resolve('SUCCESS')
              })
            })
          }



          function CallT24Posting(arrTranparams, arrurl, statusobj, final_status, PRCT_ID) {
            return new Promise((resolve, reject) => {
              reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                var Checkdata = async () => {
                  var arrrefno = await getProcesslogdet(arrTranparamsObj, 'Receive Pacs002')

                  if (arrrefno != '') {
                    var cbsaccount = `select account_officer,currency,account_number,company_code,customer_id,alternate_account_type from core_nc_cbs_accounts where alternate_account_id ='${arrTranparamsObj.cdtr_iban}'`
                    ExecuteQuery1(cbsaccount, async function (arrcbsdata) {
                      if (arrcbsdata.length > 0) {
                        var TakesellRate = await GetsellRate(arrcbsdata)
                        var arrnpssRefno = await getProcesslogdet(arrTranparamsObj, 'Receive Pacs008')
                        if (arrnpssRefno != '') {
                          var Virtual_account
                          if (arrcbsdata[0].alternate_account_type == 'VA.IBAN' || arrcbsdata[0].alternate_account_type == 'VA.BBAN') {
                            Virtual_account = 'Y'
                          } else {
                            Virtual_account = 'N'
                          }

                          var lclinstrm
                          try {
                            if (arrTranparamsObj.message_data !== null) {
                              try {
                                var parser = new xml2js.Parser({ strict: false, trim: true });
                                parser.parseString(arrTranparamsObj.message_data, function (err, result) {
                                  lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                });
                              } catch (error) {
                                lclinstrm = "INST"
                              }


                            }
                            else {
                              lclinstrm = "INST"
                            }
                          } catch (error) {
                            lclinstrm = "INST"
                          }

                          let TranInsertProcess = await InsertProcess(arrTranparamsObj, statusobj, PRCT_ID, 'IP')
                          if (TranInsertProcess == 'SUCCESS') {
                            var request = require('request');
                            var options = {
                              url: arrurl[0].param_detail,
                              timeout: 18000000,
                              method: 'POST',
                              json: {
                                batch_name: "CR-CBS-POSTING-Q",
                                data: {
                                  "payload": {
                                    "account_officer": arrcbsdata[0].account_officer || '',

                                    "internal_acc_no": arrcbsdata[0].account_number || '',
                                    "hdr_msg_id": arrTranparamsObj.hdr_msg_id || '',
                                    "department_code": arrTranparamsObj.department_code || '',
                                    "process_type": arrTranparamsObj.process_type || '',
                                    "hdr_created_date": arrTranparamsObj.hdr_created_date || '',
                                    "hdr_total_records": arrTranparamsObj.hdr_total_records || '',
                                    "hdr_total_amount": arrTranparamsObj.hdr_total_amount || '',
                                    "hdr_settlement_date": arrTranparamsObj.hdr_settlement_date || '',
                                    "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                    "hdr_settlement_method": arrTranparamsObj.hdr_settlement_method || '',
                                    "hdr_clearing_system": arrTranparamsObj.hdr_clearing_system || '',
                                    "instruction_id": arrTranparamsObj.instruction_id || '',
                                    "dr_sort_code": arrTranparamsObj.dr_sort_code || '',
                                    "cr_sort_code": arrTranparamsObj.cr_sort_code || '',
                                    "cdtr_acct_name": arrTranparamsObj.cdtr_acct_name || '',
                                    "category_purpose": arrTranparamsObj.category_purpose || '',
                                    "category_purpose_prty": arrTranparamsObj.category_purpose_prty || '',
                                    "ext_purpose_code": arrTranparamsObj.ext_purpose_code || '',
                                    "ext_purpose_prty": arrTranparamsObj.ext_purpose_prty || '',
                                    "lclinstrm": lclinstrm || '',
                                    "cr_acc_ccy": arrcbsdata[0].currency || '',
                                    "instrument_type": arrTranparamsObj.instrument_type || '',
                                    "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                                    "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt || '',
                                    "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                                    "dbtr_acct_no": arrTranparamsObj.dbtr_acct_no || '',
                                    "ext_acct_id_code": arrTranparamsObj.ext_acct_id_code || '',
                                    "charge_code": arrTranparamsObj.dbtr_cust_type || '',
                                    "dbtr_cust_type": arrTranparamsObj.dbtr_cust_type || '',
                                    "ext_org_id_code": arrTranparamsObj.ext_org_id_code || '',
                                    "issuer_type_code": arrTranparamsObj.issuer_type_code || '',
                                    "dbtr_birth_date": arrTranparamsObj.dbtr_birth_date || '',
                                    "dbtr_city_birth": arrTranparamsObj.dbtr_city_birth || '',
                                    "dbtr_country": arrTranparamsObj.dbtr_country || '',
                                    "dbtr_document_id": arrTranparamsObj.dbtr_document_id || '',
                                    "ext_person_id_code": arrTranparamsObj.ext_person_id_code || '',
                                    "dbtr_other_issuer": arrTranparamsObj.dbtr_other_issuer || '',
                                    "dbtr_acct_name": arrTranparamsObj.dbtr_acct_name || '',
                                    "cdtr_iban": arrTranparamsObj.cdtr_iban || '',
                                    "dbtr_prvt_id": arrTranparamsObj.dbtr_prvt_id || '',
                                    "payment_endtoend_id": arrTranparamsObj.payment_endtoend_id || '',
                                    "accp_dt_tm": arrTranparamsObj.accp_dt_tm || '',
                                    "charge_bearer": arrTranparamsObj.charge_bearer || '',
                                    "tran_ref_id": arrTranparamsObj.tran_ref_id || '',
                                    "uetr": arrTranparamsObj.uetr || '',
                                    "cr_acct_identification": arrTranparamsObj.cr_acct_identification || '',
                                    "cr_acct_id_code": arrTranparamsObj.cr_acct_id_code || '',
                                    "message_data": arrTranparamsObj.message_data || '',
                                    "process_type": arrTranparamsObj.process_type || '',
                                    "status": arrTranparamsObj.status || '',
                                    "process_status": arrTranparamsObj.process_status || '',
                                    "process": "Pacs.002 Payment Status Report",
                                    "remittance_information": arrTranparamsObj.remittance_info || '',
                                    "clrsysref": arrTranparamsObj.clrsysref || '',
                                    "extIdentifier": arrTranparamsObj.clrsysref || '',
                                    "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.004.001.11",
                                    "customer_id": arrcbsdata[0].customer_id,
                                    "company_code": arrcbsdata[0].company_code,
                                    "is_virtual_acc": Virtual_account,
                                    "active_status": "ACCP",
                                    "process_ref_no": arrrefno[0].process_ref_no,
                                    "originalTrasactionId": '',
                                    "status_accp_date": arrrefno[0].status_accp_date || '',
                                    "status_resp_amount": arrrefno[0].status_resp_amount || '',
                                    "status_intrbksttlmdt": arrrefno[0].status_intrbksttlmdt || '',
                                    "cbuae_return_code": "",
                                    "npsstrrd_refno": arrnpssRefno[0].npsstrrd_refno || '',
                                    "process_name": "Pacs.002 Payment Status Report",
                                    "request_data_json": "",
                                    "participant_clearing_system": "",
                                    "retry_count": "0"

                                  }
                                }
                              },
                              headers: {
                                'Content-Type': 'application/json'
                              }

                            }
                            if (TakesellRate != '') {
                              options.json.data.payload.sell_rate = TakesellRate.sell_rate || ''
                              options.json.data.payload.sell_margin = TakesellRate.sell_margin || ''
                            }
                            var PrintInfo = {}
                            PrintInfo.processName = 'T24 Inward API Call'
                            PrintInfo.url = arrurl[0].param_detail
                            PrintInfo.uetr = arrTranparamsObj.uetr || ''
                            PrintInfo.npsst_id = arrTranparamsObj.npsst_id || ''
                            PrintInfo.msg_id = arrTranparamsObj.hdr_msg_id || ''
                            PrintInfo.clrsysref = arrTranparamsObj.clrsysref || ''

                            reqInstanceHelper.PrintInfo(serviceName, '------------T24 Inward API Call API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                              if (error) {
                                reqInstanceHelper.PrintInfo(serviceName, '-----------T24 Inward API ERROR-------' + error, objSessionLogInfo);
                                sendResponse(error, null);

                              } else {
                                reqInstanceHelper.PrintInfo(serviceName, '------------T24 Inward API Call API Response JSON for Tran-------' + arrTranparamsObj.npsst_id + '.....................' + responseBodyFromImagingService, objSessionLogInfo);
                                nextobjctfunc()
                              }
                            });
                          } else {
                            reqInstanceHelper.PrintInfo(serviceName, '------------T24 Inward Error in TranProcesslog table for Tran-------' + arrTranparamsObj.npsst_id, objSessionLogInfo);
                            nextobjctfunc()
                          }

                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, "T24 Inward - npsstrrd_refno not found for Tran" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                          nextobjctfunc()

                        }




                      } else {
                        reqInstanceHelper.PrintInfo(serviceName, "T24 Inward - No data found in cbs account for tran_id" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                        nextobjctfunc()

                      }
                    })

                  } else {
                    reqInstanceHelper.PrintInfo(serviceName, "T24 Inward  - Process Ref no not found for Tran_id for" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                    nextobjctfunc()

                  }

                }

                Checkdata()
              }, function () {
                resolve('SUCCESS')
              })
            })
          }

          function CallNostroapi(arrTranparams, arrurl, statusobj, final_status, PRCT_ID) {

            return new Promise((resolve, reject) => {
              reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                try {
                  var runfunction = async () => {
                    var arrrefno = await getProcesslogdet(arrTranparamsObj, 'Receive Pacs002');
                    if (arrrefno != '') {
                      var cbsaccount = `select company_code,customer_id,alternate_account_type from core_nc_cbs_accounts where alternate_account_id ='${arrTranparamsObj.cdtr_iban}'`
                      ExecuteQuery1(cbsaccount, async function (arrcbsdata) {
                        if (arrcbsdata.length > 0) {

                          var arrnpssRefno = await getProcesslogdet(arrTranparamsObj, 'Receive Pacs008');

                          if (arrnpssRefno != '') {
                            var Virtual_account
                            if (arrcbsdata[0].alternate_account_type == 'VA.IBAN' || arrcbsdata[0].alternate_account_type == 'VA.BBAN') {
                              Virtual_account = 'Y'
                            } else {
                              Virtual_account = 'N'
                            }

                            var lclinstrm
                            try {
                              if (arrTranparamsObj.message_data !== null) {
                                try {
                                  var parser = new xml2js.Parser({ strict: false, trim: true });
                                  parser.parseString(arrTranparamsObj.message_data, function (err, result) {
                                    lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                  });
                                } catch (error) {
                                  lclinstrm = "INST"
                                }

                              }
                              else {
                                lclinstrm = "INST"
                              }
                            } catch (error) {
                              lclinstrm = "INST"
                            }

                            let TranInsertProcess = await InsertProcess(arrTranparamsObj, statusobj, PRCT_ID, 'IP')
                            if (TranInsertProcess == 'SUCCESS') {
                              var request = require('request');
                              var options = {
                                url: arrurl[0].param_detail,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                  batch_name: "CR-CBS-POSTING-Q",
                                  data: {
                                    "payload": {
                                      "department_code": arrTranparamsObj.department_code || '',

                                      "hdr_msg_id": arrTranparamsObj.hdr_msg_id || '',
                                      "account_officer": arrcbsdata[0].account_officer || '',
                                      "msg_id": arrnpssRefno[0].msg_id || '',
                                      "hdr_created_date": arrTranparamsObj.hdr_created_date || '',
                                      "hdr_total_records": arrTranparamsObj.hdr_total_records || '',
                                      "hdr_total_amount": arrTranparamsObj.hdr_total_amount || '',
                                      "hdr_settlement_date": arrTranparamsObj.hdr_settlement_date || '',
                                      "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                      "hdr_settlement_method": arrTranparamsObj.hdr_settlement_method || '',
                                      "hdr_clearing_system": arrTranparamsObj.hdr_clearing_system || '',
                                      "instruction_id": arrTranparamsObj.instruction_id || '',
                                      "dr_sort_code": arrTranparamsObj.dr_sort_code || '',
                                      "cr_sort_code": arrTranparamsObj.cr_sort_code || '',
                                      "cdtr_acct_name": arrTranparamsObj.cdtr_acct_name || '',
                                      "category_purpose": arrTranparamsObj.category_purpose || '',
                                      "category_purpose_prty": arrTranparamsObj.category_purpose_prty || '',
                                      "ext_purpose_code": arrTranparamsObj.ext_purpose_code || '',
                                      "ext_purpose_prty": arrTranparamsObj.ext_purpose_prty || '',
                                      "lclinstrm": lclinstrm || '',
                                      "instrument_type": arrTranparamsObj.instrument_type || '',
                                      "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                                      "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt || '',
                                      "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                                      "dbtr_acct_no": arrTranparamsObj.dbtr_acct_no || '',
                                      "ext_acct_id_code": arrTranparamsObj.ext_acct_id_code || '',
                                      "charge_code": arrTranparamsObj.dbtr_cust_type || '',
                                      "dbtr_cust_type": arrTranparamsObj.dbtr_cust_type || '',
                                      "ext_org_id_code": arrTranparamsObj.ext_org_id_code || '',
                                      "issuer_type_code": arrTranparamsObj.issuer_type_code || '',
                                      "dbtr_birth_date": arrTranparamsObj.dbtr_birth_date || '',
                                      "dbtr_city_birth": arrTranparamsObj.dbtr_city_birth || '',
                                      "dbtr_country": arrTranparamsObj.dbtr_country || '',
                                      "dbtr_document_id": arrTranparamsObj.dbtr_document_id || '',
                                      "ext_person_id_code": arrTranparamsObj.ext_person_id_code || '',
                                      "dbtr_other_issuer": arrTranparamsObj.dbtr_other_issuer || '',
                                      "dbtr_acct_name": arrTranparamsObj.dbtr_acct_name || '',
                                      "cdtr_iban": arrTranparamsObj.cdtr_iban || '',
                                      "dbtr_prvt_id": arrTranparamsObj.dbtr_prvt_id || '',
                                      "payment_endtoend_id": arrTranparamsObj.payment_endtoend_id || '',
                                      "accp_dt_tm": arrTranparamsObj.accp_dt_tm || '',
                                      "charge_bearer": arrTranparamsObj.charge_bearer || '',
                                      "tran_ref_id": arrTranparamsObj.tran_ref_id || '',
                                      "uetr": arrTranparamsObj.uetr || '',
                                      "cr_acct_identification": arrTranparamsObj.cr_acct_identification || '',
                                      "cr_acct_id_code": arrTranparamsObj.cr_acct_id_code || '',
                                      "message_data": arrTranparamsObj.message_data || '',
                                      "process_type": 'IR',
                                      "status": arrTranparamsObj.status || '',
                                      "process_status": arrTranparamsObj.process_status || '',
                                      "process": "Pacs.002 Payment Status Report",
                                      "remittance_information": arrTranparamsObj.remittance_info || '',
                                      "clrsysref": arrTranparamsObj.clrsysref || '',
                                      "extIdentifier": arrTranparamsObj.clrsysref || '',
                                      "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.004.001.11",
                                      "customer_id": arrcbsdata[0].customer_id,
                                      "company_code": arrcbsdata[0].company_code,
                                      "is_virtual_acc": Virtual_account,
                                      "active_status": "ACCP",
                                      "ref_no": arrrefno[0].process_ref_no,
                                      "originalTrasactionId": '',
                                      "status_accp_date": arrrefno[0].status_accp_date || '',
                                      "status_resp_amount": arrrefno[0].status_resp_amount || '',
                                      "status_intrbksttlmdt": arrrefno[0].status_intrbksttlmdt || '',
                                      "cbuae_return_code": "",
                                      "npsstrrd_refno": arrnpssRefno[0].npsstrrd_refno || '',
                                      "process_name": "Pacs.002 Payment Status Report",
                                      "request_data_json": "",
                                      "participant_clearing_system": "",
                                      "retry_count": "0",

                                    }
                                  }
                                },
                                headers: {
                                  'Content-Type': 'application/json'
                                }

                              }

                              var PrintInfo = {}
                              PrintInfo.processName = 'NOSTRO API Call'
                              PrintInfo.url = arrurl[0].param_detail
                              PrintInfo.uetr = arrTranparamsObj.uetr || ''
                              PrintInfo.npsst_id = arrTranparamsObj.npsst_id || ''
                              PrintInfo.msg_id = arrTranparamsObj.hdr_msg_id || ''
                              PrintInfo.clrsysref = arrTranparamsObj.clrsysref || ''

                              reqInstanceHelper.PrintInfo(serviceName, '------------"Nostro API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                              request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                  reqInstanceHelper.PrintInfo(serviceName, '------------"Nostro API ERROR-------' + error, objSessionLogInfo);
                                  sendResponse(error, null);

                                } else {
                                  reqInstanceHelper.PrintInfo(serviceName, '------------"Nostro API Response JSON-------found for Tran' + arrTranparamsObj.npsst_id + '...................' + responseBodyFromImagingService, objSessionLogInfo);
                                  nextobjctfunc()

                                }
                              });
                            } else {
                              reqInstanceHelper.PrintInfo(serviceName, "Nostro - Error in Table Insert for Tran" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                              nextobjctfunc()
                            }

                          } else {
                            reqInstanceHelper.PrintInfo(serviceName, "Nostro - npsstrrd_refno not found for Tran" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                            nextobjctfunc()

                          }


                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, "NOSTRO API - No data found in cbs account for tran_id" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                          nextobjctfunc()

                        }
                      })

                    } else {
                      reqInstanceHelper.PrintInfo(serviceName, "Nostro  - Process Ref no not found for Tran_id for" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                      nextobjctfunc()

                    }

                  }
                  runfunction();
                } catch (error) {
                  sendResponse(error)
                }
              }, function () {
                resolve('SUCCESS')
              })

            })
          }
          function Callprepaidapi(arrTranparams, arrurl, statusobj, final_status, PRCT_ID) {
            return new Promise((resolve, reject) => {
              try {
                reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                  var runfunction = async () => {

                    var arrrefno = await getProcesslogdet(arrTranparamsObj, 'Receive Pacs002')

                    if (arrrefno != '') {
                      if (arrrefno[0].process_ref_no != null) {

                        var arrnpssRefno = await getProcesslogdet(arrTranparamsObj, 'Receive Pacs008')

                        if (arrnpssRefno != '') {
                          var lclinstrm
                          try {
                            if (arrTranparamsObj.message_data !== null) {
                              try {
                                var parser = new xml2js.Parser({ strict: false, trim: true });
                                parser.parseString(arrTranparamsObj.message_data, function (err, result) {
                                  lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                });
                              } catch (error) {
                                lclinstrm = "INST"
                              }

                            }
                            else {
                              lclinstrm = "INST"
                            }
                          } catch (error) {
                            lclinstrm = "INST"
                          }

                          let TranInsertProcess = await InsertProcess(arrTranparamsObj, statusobj, PRCT_ID, 'IP')
                          if (TranInsertProcess == 'SUCCESS') {
                            var request = require('request');
                            var options = {
                              url: arrurl[0].param_detail,
                              timeout: 18000000,
                              method: 'POST',
                              json: {
                                batch_name: "CR-CBS-POSTING-Q",
                                data: {
                                  "payload": {
                                    "department_code": arrTranparamsObj.department_code || '',

                                    "hdr_msg_id": arrTranparamsObj.hdr_msg_id || '',
                                    "hdr_created_date": arrTranparamsObj.hdr_created_date || '',
                                    "hdr_total_records": arrTranparamsObj.hdr_total_records || '',
                                    "hdr_total_amount": arrTranparamsObj.hdr_total_amount || '',
                                    "hdr_settlement_date": arrTranparamsObj.hdr_settlement_date || '',
                                    "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                    "hdr_settlement_method": arrTranparamsObj.hdr_settlement_method || '',
                                    "hdr_clearing_system": arrTranparamsObj.hdr_clearing_system || '',
                                    "instruction_id": arrTranparamsObj.instruction_id || '',
                                    "dr_sort_code": arrTranparamsObj.dr_sort_code || '',
                                    "cr_sort_code": arrTranparamsObj.cr_sort_code || '',
                                    "cdtr_acct_name": arrTranparamsObj.cdtr_acct_name || '',
                                    "category_purpose": arrTranparamsObj.category_purpose || '',
                                    "category_purpose_prty": arrTranparamsObj.category_purpose_prty || '',
                                    "ext_purpose_code": arrTranparamsObj.ext_purpose_code || '',
                                    "ext_purpose_prty": arrTranparamsObj.ext_purpose_prty || '',
                                    "lclinstrm": lclinstrm,
                                    "instrument_type": arrTranparamsObj.instrument_type || '',
                                    "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                                    "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt || '',
                                    "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                                    "dbtr_acct_no": arrTranparamsObj.dbtr_acct_no || '',
                                    "ext_acct_id_code": arrTranparamsObj.ext_acct_id_code || '',
                                    "charge_code": arrTranparamsObj.dbtr_cust_type || '',
                                    "dbtr_cust_type": arrTranparamsObj.dbtr_cust_type || '',
                                    "ext_org_id_code": arrTranparamsObj.ext_org_id_code || '',
                                    "issuer_type_code": arrTranparamsObj.issuer_type_code || '',
                                    "dbtr_birth_date": arrTranparamsObj.dbtr_birth_date || '',
                                    "dbtr_city_birth": arrTranparamsObj.dbtr_city_birth || '',
                                    "dbtr_country": arrTranparamsObj.dbtr_country || '',
                                    "dbtr_document_id": arrTranparamsObj.dbtr_document_id || '',
                                    "ext_person_id_code": arrTranparamsObj.ext_person_id_code || '',
                                    "dbtr_other_issuer": arrTranparamsObj.dbtr_other_issuer || '',
                                    "dbtr_acct_name": arrTranparamsObj.dbtr_acct_name || '',
                                    "cdtr_iban": arrTranparamsObj.cdtr_iban || '',
                                    "dbtr_prvt_id": arrTranparamsObj.dbtr_prvt_id || '',
                                    "payment_endtoend_id": arrTranparamsObj.payment_endtoend_id || '',
                                    "accp_dt_tm": arrTranparamsObj.accp_dt_tm || '',
                                    "charge_bearer": arrTranparamsObj.charge_bearer || '',
                                    "tran_ref_id": arrTranparamsObj.tran_ref_id || '',
                                    "uetr": arrTranparamsObj.uetr || '',
                                    "cr_acct_identification": arrTranparamsObj.cr_acct_identification || '',
                                    "cr_acct_id_code": arrTranparamsObj.cr_acct_id_code || '',
                                    "message_data": arrTranparamsObj.message_data || '',
                                    "process_type": arrTranparamsObj.process_type || '',
                                    "status": arrTranparamsObj.status || '',
                                    "process_status": arrTranparamsObj.process_status || '',
                                    "process": "Pacs.002 Payment Status Report",
                                    "remittance_information": arrTranparamsObj.remittance_info || '',
                                    "clrsysref": arrTranparamsObj.clrsysref || '',
                                    "extIdentifier": arrTranparamsObj.clrsysref || '',
                                    "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.09",
                                    "card_type": "PREPAID_CARD",
                                    "active_status": "ACCP",
                                    "process_ref_no": arrrefno[0].process_ref_no,
                                    "originalTrasactionId": '',
                                    "status_accp_date": arrrefno[0].status_accp_date || '',
                                    "status_resp_amount": arrrefno[0].status_resp_amount || '',
                                    "status_intrbksttlmdt": arrrefno[0].status_intrbksttlmdt || '',
                                    "cbuae_return_code": "",
                                    "npsstrrd_refno": arrnpssRefno[0].npsstrrd_refno || '',
                                    "process_name": "Pacs.002 Payment Status Report",
                                    "request_data_json": "",
                                    "PC_NOSTRO_POOL_ACC": "Y",
                                    "retry_count": "0",
                                  }
                                }
                              },
                              headers: {
                                'Content-Type': 'application/json'
                              }

                            }

                            var PrintInfo = {}
                            PrintInfo.processName = 'Prepaid Card Pool Posting'
                            PrintInfo.url = arrurl[0].param_detail
                            PrintInfo.uetr = arrTranparamsObj.uetr || ''
                            PrintInfo.npsst_id = arrTranparamsObj.npsst_id || ''
                            PrintInfo.msg_id = arrTranparamsObj.hdr_msg_id || ''
                            PrintInfo.clrsysref = arrTranparamsObj.clrsysref || ''

                            reqInstanceHelper.PrintInfo(serviceName, '------------Prepaid Card Pool Posting API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                              if (error) {
                                reqInstanceHelper.PrintInfo(serviceName, '------------ Prepaid Card Pool Posting API ERROR-------' + error, objSessionLogInfo);
                                sendResponse(error, null);

                              } else {
                                reqInstanceHelper.PrintInfo(serviceName, '------------Prepaid Card Pool Posting API Response JSON for Tran -------' + arrTranparamsObj.npsst_id + '..........' + responseBodyFromImagingService, objSessionLogInfo);
                                nextobjctfunc()

                              }
                            });
                          } else {
                            reqInstanceHelper.PrintInfo(serviceName, '------------Prepaid Card Pool Posting API Error in TrnPrs log Insert for Tran -------' + arrTranparamsObj.npsst_id, objSessionLogInfo);
                            nextobjctfunc()
                          }


                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, "Prepaid - npsstrrd_refno not found for" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                          nextobjctfunc()

                        }



                      } else {
                        reqInstanceHelper.PrintInfo(serviceName, "Prepaid - Process Ref no is Missing" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                        nextobjctfunc()

                      }
                    } else {
                      reqInstanceHelper.PrintInfo(serviceName, "Prepaid - Process Ref no not found for Tran_id" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                      nextobjctfunc()

                    }

                  }
                  runfunction()
                }, function () {
                  resolve('SUCCESS')
                })
              } catch (error) {
                sendResponse(error)
              }
            })



          }
          function CallautoReturn(arrTranparams, arrurl, statusobj, final_status, PRCT_ID) {
            return new Promise((resolve, reject) => {
              reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                var cbsaccount = `select curr_rate_segment,alternate_account_id,currency,account_number,account_officer,company_code,customer_id,alternate_account_type from core_nc_cbs_accounts where alternate_account_id ='${arrTranparamsObj.cdtr_iban}'`
                ExecuteQuery1(cbsaccount, function (arrcbsdata) {
                  if (arrcbsdata.length > 0) {
                    var CallApi = async () => {
                      var TakesellRate = await GetsellRate(arrcbsdata)
                      var TakenpsstrdRefno = `select npsstrrd_refno,msg_id from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name = 'Receive Pacs008'`
                      ExecuteQuery1(TakenpsstrdRefno, async function (arrnpssRefno) {
                        if (arrnpssRefno.length > 0) {
                          var Virtual_account
                          if (arrcbsdata[0].alternate_account_type == 'VA.IBAN' || arrcbsdata[0].alternate_account_type == 'VA.BBAN') {
                            Virtual_account = 'Y'
                          } else {
                            Virtual_account = 'N'
                          }
                          let TranInsertProcess = await InsertProcess(arrTranparamsObj, statusobj, PRCT_ID, 'IP')
                          if (TranInsertProcess == 'SUCCESS') {
                            var request = require('request');
                            var options = {
                              url: arrurl[0].param_detail,
                              timeout: 18000000,
                              method: 'POST',
                              json: {
                                batch_name: "CR-CBS-POSTING-Q",
                                data: {
                                  "payload": {
                                    "department_code": arrTranparamsObj.department_code || '',
                                    "internal_acc_no": arrcbsdata[0].account_number || '',
                                    "tran_ref_id": arrTranparamsObj.tran_ref_id || '',
                                    "uetr": arrTranparamsObj.uetr || '',
                                    "hdr_msg_id": arrTranparamsObj.hdr_msg_id || '',
                                    "payment_endtoend_id": arrTranparamsObj.payment_endtoend_id || '',
                                    "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt || '',
                                    "intrbk_sttlmt_amt_ccy": arrTranparamsObj.intrbk_sttlm_cur || '',
                                    "clrsysref": arrTranparamsObj.clrsysref,
                                    "reversal_amount": arrTranparamsObj.reversal_amount,
                                    "reversal_amount_ccy": arrTranparamsObj.account_currency || '',
                                    "reversal_code": "",
                                    "reversal_id": "",
                                    "account_officer": arrcbsdata[0].account_officer || '',
                                    "hdr_total_amount": arrTranparamsObj.hdr_total_amount || '',
                                    "process": "pacs.007 Payment Return Request",
                                    "msg_id": arrnpssRefno[0].msg_id || '',
                                    "hdr_created_date": arrTranparamsObj.hdr_created_date || '',
                                    "org_msg_id": "",
                                    "org_msgnm_id": "",
                                    "hdr_settlement_method": arrTranparamsObj.hdr_settlement_method || '',
                                    "company_code": arrcbsdata[0].company_code || '',
                                    "cr_acc_ccy": arrcbsdata[0].currency || '',
                                    "is_virtual_acc": Virtual_account || '',
                                    "hdr_settlement_date": arrTranparamsObj.hdr_settlement_date || '',
                                    "dbtr_acct_name": arrTranparamsObj.dbtr_acct_name || '',
                                    "category_purpose_prty": arrTranparamsObj.category_purpose_prty || '',
                                    "charge_bearer": arrTranparamsObj.charge_bearer || '',
                                    "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                                    "cdtr_iban": arrTranparamsObj.cdtr_iban || '',
                                    "category_purpose": arrTranparamsObj.category_purpose || '',
                                    "npsstrrd_refno": arrnpssRefno[0].npsstrrd_refno || '',
                                    "remittance_information": arrTranparamsObj.remittance_info || '',
                                    "cr_sort_code": arrTranparamsObj.dr_sort_code || '',
                                    "dr_sort_code": arrTranparamsObj.dr_sort_code || '',
                                    "tran_ref_no": arrTranparamsObj.tran_ref_no || '',
                                    "process_type": 'RR',
                                    "retry_count": "0",
                                    "AccountInformation": {
                                      "account_number": arrcbsdata[0].account_number || '',
                                      "company_code": arrcbsdata[0].company_code || '',
                                      "inactive_marker": arrcbsdata[0].inactive_marker || '',
                                      "currency": arrcbsdata[0].currency || '',
                                      "alternate_account_type": arrcbsdata[0].alternate_account_type || '',
                                      "alternate_account_id": arrcbsdata[0].alternate_account_id || '',
                                      "account_officer": arrcbsdata[0].account_officer || '',
                                      "curr_rate_segment": arrcbsdata[0].curr_rate_segment || '',
                                      "customer_id": arrcbsdata[0].customer_id || ''
                                    }
                                  }
                                }
                              },
                              headers: {
                                'Content-Type': 'application/json'
                              }

                            }
                            if (TakesellRate != '') {
                              options.json.data.payload.sell_rate = TakesellRate.sell_rate || ''
                              options.json.data.payload.sell_margin = TakesellRate.sell_margin || ''
                            }
                            var PrintInfo = {}
                            PrintInfo.url = arrurl[0].param_detail
                            PrintInfo.uetr = arrTranparamsObj.uetr || ''
                            PrintInfo.npsst_id = arrTranparamsObj.npsst_id || ''
                            PrintInfo.msg_id = arrTranparamsObj.hdr_msg_id || ''
                            PrintInfo.clrsysref = arrTranparamsObj.clrsysref || ''
                            PrintInfo.apiName = 'Auto Return Case'

                            reqInstanceHelper.PrintInfo(serviceName, '------------Auto Return Case API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                              if (error) {
                                reqInstanceHelper.PrintInfo(serviceName, '------------Auto Return Case API ERROR-------' + error, objSessionLogInfo);
                                sendResponse(error, null);

                              } else {
                                reqInstanceHelper.PrintInfo(serviceName, '------------Auto Return Case API Response JSON for tran_id------' + arrTranparamsObj.npsst_id + '...........' + responseBodyFromImagingService, objSessionLogInfo);
                                nextobjctfunc()
                              }
                            });
                          } else {
                            reqInstanceHelper.PrintInfo(serviceName, "Auto Return Case - Error in TrnPrs log Insert for tran_id" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                            nextobjctfunc()
                          }

                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, "Auto Return Case - npsstrrd_refno Not Found for tran_id" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                          nextobjctfunc()

                        }
                      })
                    }

                    CallApi()


                  } else {
                    reqInstanceHelper.PrintInfo(serviceName, "Auto Return Case - No data found in cbs account for tran_id" + arrTranparamsObj.npsst_id, objSessionLogInfo);
                    nextobjctfunc()

                  }
                })




              }, function () {
                resolve('SUCCESS')
              })
            })



          }
          function CallP2PPosting(arrTranparams, arrurl, statusobj, final_status, PRCT_ID) {
            return new Promise((resolve, reject) => {
              reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                var logqry = `select *,fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY ) as request_data_json from npss_trn_process_log where uetr='${arrTranparamsObj.uetr}' and process_name ='SctInitiation' and status='OP_P2P_PAYMENT_INITIATED' `
                ExecuteQuery1(logqry, function (arrlogdata) {
                  if (arrlogdata.length > 0) {

                    var cbsaccount = `select curr_rate_segment,alternate_account_id,nationality_country_code,resident_flag,national_id,currency,account_number,account_officer,company_code,customer_id,alternate_account_type,customer_mobile_number,countryofbirth,cityofbirth,birthdate from core_nc_cbs_accounts where alternate_account_id ='${arrlogdata[0].dbtr_iban}'`
                    ExecuteQuery1(cbsaccount, async function (arrcbsdata) {
                      if (arrcbsdata.length > 0) {
                        let req_json = JSON.parse(arrlogdata[0].request_data_json)
                        var Tkdbtrbiccode = await getBiccode(req_json.sender.bankCode)
                        var Tkcdtrbiccode = await getBiccode(req_json.recipient.bankCode)
                        var Tkdeptcode = await getDeptcode(arrcbsdata[0].company_code)

                        var CallApi = async () => {
                          var TakesellRate = await GetsellRate(arrcbsdata)
                          let CheckorgPvt = await TakeOrgPvt(arrlogdata[0])
                          var crddate = moment(arrlogdata[0].created_date).format('YYYY-MM-DDThh:mm:ss.ms+04:00')

                          if (CheckorgPvt != '') {
                            let TranInsertProcess = await InsertProcess(arrlogdata[0], statusobj, PRCT_ID, 'OP')
                            var takeaccttypecode = await fngetacctype( req_json.sender.iban )
                            if (TranInsertProcess == 'SUCCESS') {
                              var request = require('request');
                              var options = {
                                url: arrurl[0].param_detail,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                  batch_name: "DR-CBS-POSTING-Q",
                                  data: {
                                    "payload": {
                                      "tran_ref_id": arrlogdata[0].process_ref_no || '',
                                      "uetr": arrlogdata[0].uetr || '',
                                      "hdr_msg_id": arrlogdata[0].msg_id || '',
                                      "hdr_total_records": "01",
                                      "dbtr_country": arrcbsdata[0].nationality_country_code ? arrcbsdata[0].nationality_country_code : arrcbsdata[0].countryofbirth || '',
                                      "process_ref_no": arrlogdata[0].npsstrrd_refno || '',
                                      "intrbk_sttlm_amnt": req_json.amount.requested || '',
                                      "hdr_total_amount": req_json.amount.requested || '',
                                      "intrbk_sttlm_cur": req_json.amount.currency || '',
                                       "remittance_information": req_json.reason||'',
                                      "dbtr_iban": req_json.sender.iban || '',
                                      "customer_mobile_number": arrcbsdata[0].customer_mobile_number,
                                      "dbtr_acct_name": req_json.sender.name || '',
                                      "dr_sort_code": Tkdbtrbiccode[0].bic_code || '',
                                      "cdtr_iban": req_json.recipient.iban || '',
                                      "cdtr_acct_name": req_json.recipient.name || '',
                                      "cr_sort_code": Tkcdtrbiccode[0].bic_code || '',
                                      "tran_type_code": req_json.transactionType,
                                      "hdr_settlement_date": moment(arrlogdata[0].created_date, "DDMMYYYY").format("YYYY-MM-DD") || '',
                                      "participant_clearing_system": "CRTLBP.0.0",
                                      "process_type": "OP",
                                      "payment_processing_method": "SCT_INITITATION",
                                      "extIdentifier": arrlogdata[0].npsstrrd_refno || '',
                                      "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD") || '',
                                      "hdr_created_date": crddate,
                                      // "dbtr_prvt_id": CheckorgPvt.code || '',
                                      //  "ext_org_id_code": 'BOID',
                                      // "issuer_type_code": CheckorgPvt.issuer_type_code || '',
                                      "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.09",
                                      // "dbtr_document_id": CheckorgPvt.code || '',
                                      "dbtr_birth_date": moment(arrcbsdata[0].birthdate).format('YYYY-MM-DD'),
                                      "birth_date": arrcbsdata[0].birthdate || '',
                                      "dbtr_city_birth": arrcbsdata[0].cityofbirth || '',
                                      //  "ext_person_id_code": CheckorgPvt.extpersonidcode || '',
                                      // "dbtr_other_issuer": (CheckorgPvt.extpersonidcode == 'NIDN') ? 'AE' : arrcbsdata[0].nationality_country_code,
                                      "cr_acct_identification": "",
                                      "dr_department_code": (Tkdeptcode != '') ? Tkdeptcode[0].iv_channel_department_code : "DEFAULT",
                                      "process": "Pacs.008 Real Time Credit Transfer",
                                      "process_status": params.eligible_process_status[0],
                                      "category_purpose": "IPP",
                                      "category_purpose_prty": "NOWS",
                                      "status": statusobj,
                                      "account_currency": arrcbsdata[0].currency || '',
                                      cb_acctype_code:takeaccttypecode,
                                         purp:'MP2P',
                                      // "issr": (CheckorgPvt.extpersonidcode == 'NIDN') ? 'AE' : arrcbsdata[0].nationality_country_code,


                                      "AccountInformation": {
                                        "account_number": arrcbsdata[0].account_number || '',
                                        "company_code": arrcbsdata[0].company_code || '',
                                        "inactive_marker": arrcbsdata[0].inactive_marker || '',
                                        "currency": arrcbsdata[0].currency || '',
                                        "alternate_account_type": arrcbsdata[0].alternate_account_type || '',
                                        "alternate_account_id": arrcbsdata[0].alternate_account_id || '',
                                        "account_officer": arrcbsdata[0].account_officer || '',
                                        "curr_rate_segment": arrcbsdata[0].curr_rate_segment || '',
                                        "customer_id": arrcbsdata[0].customer_id || '',
                                        "department_code": (Tkdeptcode != '') ? Tkdeptcode[0].iv_channel_department_code : '',
                                        "recipient_bic_code": Tkcdtrbiccode[0].bic_code || '',
                                        "birth_date": arrcbsdata[0].birth_date,
                                        "country_of_birth": arrcbsdata[0].countryofbirth,
                                        "national_id": arrcbsdata[0].national_id,
                                        "sell_margin": TakesellRate.sell_margin || '',
                                        "sell_rate": TakesellRate.sell_rate || '',
                                        "nationality_country_code": arrcbsdata[0].nationality_country_code,
                                        "resident_flag": arrcbsdata[0].resident_flag,
                                        // "customer_detail": CheckorgPvt.type,
                                        //  "identification": CheckorgPvt.extpersonidcode,
                                        //"issuer": CheckorgPvt.issrtype || '',
                                        "birth_city": arrcbsdata[0].cityofbirth,
                                        "birth_country": arrcbsdata[0].countryofbirth
                                      }
                                    }
                                  }
                                },
                                headers: {
                                  'Content-Type': 'application/json'
                                }

                              }
                              if (CheckorgPvt != '' && CheckorgPvt != null) {
                                if (CheckorgPvt.type == 'Organisation') {
                                  options.json.data.payload.dbtr_prvt_id = CheckorgPvt.code
                                  options.json.data.payload.dbtr_document_id = ''
                                  options.json.data.payload.ext_org_id_code = 'BOID'
                                  options.json.data.payload.issuer_type_code = CheckorgPvt.cbuae_issur_code
                                 
                                } else {
                                  options.json.data.payload.dbtr_prvt_id = ''
                                  options.json.data.payload.dbtr_document_id = CheckorgPvt.code
                                  options.json.data.payload.ext_person_id_code = CheckorgPvt.extpersonidcode
                                  options.json.data.payload.issr = CheckorgPvt.issrtype || ''
                               
                                }


                              }
                              var PrintInfo = {}
                              PrintInfo.url = arrurl[0].param_detail
                              PrintInfo.uetr = arrlogdata[0].uetr || ''
                              PrintInfo.npsst_id = arrlogdata[0].npsstpl_id || ''
                              PrintInfo.msg_id = arrlogdata[0].msg_id || ''
                              // PrintInfo.clrsysref = arrTranparamsObj.clrsysref || ''
                              PrintInfo.apiName = 'OPP2P API'
                              reqInstanceHelper.PrintInfo(serviceName, '------------OP2P API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                              request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                  reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                  sendResponse(error, null);

                                } else {
                                  reqInstanceHelper.PrintInfo(serviceName, '------------OP2P API Response JSON for Tran ID -------' + arrlogdata[0].npsstpl_id + '........' + responseBodyFromImagingService, objSessionLogInfo);
                                  nextobjctfunc()
                                }
                              });
                            } else {
                              reqInstanceHelper.PrintInfo(serviceName, '------------OPP2P API Error in trnprslog insert for TranID-------' + arrlogdata[0].npsstpl_id, objSessionLogInfo);
                              nextobjctfunc()
                            }

                          } else {
                            reqInstanceHelper.PrintInfo(serviceName, '------------OP2P Data not found in Organisation or Private ID formation for TranID-------' + arrlogdata[0].npsstpl_id, objSessionLogInfo);
                            nextobjctfunc()
                          }
                        }
                        CallApi()
                        // })
                      } else {
                        reqInstanceHelper.PrintInfo(serviceName, "P2PPosting - No data found in cbs acct table" + arrlogdata[0].npsstpl_id, objSessionLogInfo);
                        nextobjctfunc()

                      }






                    })
                  } else {
                    reqInstanceHelper.PrintInfo(serviceName, "P2PPosting - No data found in npss_trn_process_log process_name ='SctInitiation' and status='OP_P2P_PAYMENT_INITIATED'" + arrlogdata[0].uetr, objSessionLogInfo);
                    nextobjctfunc()

                  }
                })





              }, function () {
                resolve('SUCCESS')
              })
            })
          }
















          function TakeOrgPvt(arrTranObj) {
            return new Promise((resolve, reject) => {
              let PrepareParam
              let FianlData = {}
              let TakeCbsAcct = `select * from core_nc_cbs_accounts where alternate_account_id = '${arrTranObj.dbtr_iban}'`
              ExecuteQuery1(TakeCbsAcct, function (arrcbsAct) {
                if (arrcbsAct.length > 0) {
                  let Chkorgorpvt = `select cb_cust_class from core_nc_cust_classif where target_id =  '${arrcbsAct[0].target_code}' and sector_id = '${arrcbsAct[0].sector_code}'`
                  ExecuteQuery1(Chkorgorpvt, async function (arcustif) {
                    if (arcustif.length > 0 && arcustif[0].cb_cust_class != null) {
                      if (arcustif[0].cb_cust_class == 'Organisation') {
                        PrepareParam = await PrepareOrgcode(arrcbsAct, arrTranObj)
                        if (PrepareParam != '') {
                          let emiratescode = arrcbsAct[0].emirates_code == null ? 'XXX' : arrcbsAct[0].emirates_code
                          let formation = emiratescode + '-' + PrepareParam.cbuae_issur_code + '-' + arrcbsAct[0].trade_license_number + '-' + PrepareParam.destination_economic_activity_code
                          FianlData.type = 'Organisation'
                          FianlData.code = formation
                          FianlData.cbuae_issur_code = PrepareParam.cbuae_issur_code
                          resolve(FianlData)
                        } else {
                          resolve('')
                        }

                      } else {
                        PrepareParam = await PreparePVTcode(arrcbsAct, arrTranObj)
                        if (PrepareParam != '') {
                          FianlData.type = 'Private'
                          FianlData.extpersonidcode = PrepareParam.extpersonidcode
                          FianlData.code = PrepareParam.FormPvtid
                          FianlData.issrtype = PrepareParam.issrtype || ''
                          resolve(FianlData)
                        } else {
                          resolve('')
                        }

                      }
                    } else {
                      reqInstanceHelper.PrintInfo(serviceName, "P2PPosting - cb_cust_class value not found for IBAN" + arrTranObj.dbtr_iban, objSessionLogInfo);
                      resolve('')

                    }
                  })

                } else {
                  reqInstanceHelper.PrintInfo(serviceName, "P2PPosting - No data found in core_nc_cbs_accounts for IBAN" + arrTranObj.dbtr_iban, objSessionLogInfo);
                  resolve('')

                }

              })
            })
          }
          function PreparePVTcode(arrcbsAct, arrprocesslog) {
            return new Promise((resolve, reject) => {
              let PvtParam = {}
              let TakeEconCode = `select destination_economic_activity_code from core_nc_eco_actvty_mapping where source_economic_activity_code = '${arrcbsAct[0].industry}'`
              ExecuteQuery1(TakeEconCode, function (economiccode) {
                if (economiccode.length > 0 && economiccode[0].destination_economic_activity_code != null) {
                  let destination_economic_activity_code = economiccode[0].destination_economic_activity_code
                  let IDcode
                  let extpersonidcode
                  let issrtype
                  if (arrcbsAct[0].resident_flag == 'Y') {
                    if (arrcbsAct[0].national_id != '' && arrcbsAct[0].national_id != null) {
                      IDcode = arrcbsAct[0].national_id
                      extpersonidcode = 'NIDN'
                      issrtype = 'AE'
                    } else {
                      IDcode = arrcbsAct[0].legal_id
                      extpersonidcode = 'CCPT'
                      issrtype = arrcbsAct[0].nationality_country_code || ''
                    }
                  } else {
                    IDcode = arrcbsAct[0].legal_id
                    extpersonidcode = 'CCPT'
                    issrtype = arrcbsAct[0].nationality_country_code || ''
                  }
                  let Params = {}
                  Params.FormPvtid = IDcode + '-' + destination_economic_activity_code
                  Params.extpersonidcode = extpersonidcode
                  Params.issrtype = issrtype || ''
                  resolve(Params)
                } else {
                  reqInstanceHelper.PrintInfo(serviceName, "Private - P2PPosting - destination_economic_activity_code not found for industry........" + arrcbsAct[0].industry, objSessionLogInfo);
                  resolve('')
                }
              })
            })
          }
          function PrepareOrgcode(arrcbsAct, arrprocesslog) {
            return new Promise((resolve, reject) => {
              let OrganParam = {}
              let Takecbuisuercode = `select cbuae_issur_code from core_nc_issuer_cd_mapping where UPPER(t24_reg_body)= UPPER('${arrcbsAct[0].issuer_type_code}')`
              ExecuteQuery1(Takecbuisuercode, function (cbuissuercode) {
                if (cbuissuercode.length > 0 && cbuissuercode[0].cbuae_issur_code != null) {
                  let TakeEconCode = `select destination_economic_activity_code from core_nc_eco_actvty_mapping where source_economic_activity_code = '${arrcbsAct[0].industry}'`
                  ExecuteQuery1(TakeEconCode, function (economiccode) {
                    if (economiccode.length > 0 && economiccode[0].destination_economic_activity_code != null) {
                      OrganParam.cbuae_issur_code = cbuissuercode[0].cbuae_issur_code
                      OrganParam.destination_economic_activity_code = economiccode[0].destination_economic_activity_code
                      resolve(OrganParam)
                    } else {
                      reqInstanceHelper.PrintInfo(serviceName, "P2PPosting - destination_economic_activity_code not found for industry.............." + arrcbsAct[0].industry, objSessionLogInfo);
                      resolve('')

                    }
                  })
                } else {
                  reqInstanceHelper.PrintInfo(serviceName, "P2PPosting - cbuae_issur_code not found for issurTypecode........" + arrcbsAct[0].issuer_type_code, objSessionLogInfo);
                  resolve('')

                }
              })
            })
          }
          function doInitiate(eligible_status) {
            return new Promise(async (resolve, reject) => {
              final_status = eligible_status.replace('READY', 'INITIATED')
              let updtqry;
              if (eligible_status == 'OP_P2P_AUTO_POSTING_READY') {
                updtqry = `update npss_trn_process_log set  status='OP_P2P_AUTO_POSTING_READY_TAKEN',process_status='${params.eligible_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where status='${eligible_status}' and process_status = '${params.eligible_process_status}'  `
              }
              else {
                updtqry = `update npss_transactions set  status='${final_status}',process_status='${params.eligible_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where status='${eligible_status}' and process_status = '${params.eligible_process_status}'  `
              }
              ExecuteQuery(updtqry, function (uptranresult) {
                if (uptranresult == 'SUCCESS') {
                  reqInstanceHelper.PrintInfo(serviceName, '----------Success NPSS Transaction Table Update for the status -----' + eligible_status, objSessionLogInfo);
                  resolve('Success')

                } else {
                  reqInstanceHelper.PrintInfo(serviceName, '----------Error NPSS Transaction Table Update for the status -----' + eligible_status, objSessionLogInfo);
                  resolve('Error')
                }
              })
            })
          }
          function GetsellRate(arrcbsdata) {
            return new Promise((resolve, reject) => {
              var Takesellrate = `select sell_margin, sell_rate ,cif_number from  core_nc_cust_spl_rate where  cif_number='${arrcbsdata[0].customer_id}' and currency_code = '${arrcbsdata[0].currency}'`
              ExecuteQuery1(Takesellrate, function (arrselldet) {
                var selldata = {}
                if (arrselldet.length > 0) {
                  if (arrselldet[0].sell_margin || arrselldet[0].sell_rate) {
                    selldata.sell_margin = arrselldet[0].sell_margin || ''
                    selldata.sell_rate = arrselldet[0].sell_rate || ''
                    resolve(selldata)
                  } else {
                    resolve('')
                  }

                } else {
                  resolve('')
                }
              })
            })

          }
          function getBiccode(bankcode) {
            return new Promise((resolve, reject) => {
              var Takebankcode = `select bank_code,bic_code from core_member_banks where bank_code='${bankcode}'`
              ExecuteQuery1(Takebankcode, function (arrbankcode) {

                if (arrbankcode.length > 0) {
                  resolve(arrbankcode)

                } else {
                  resolve('')
                }
              })
            })

          }
          function getDeptcode(companycode) {
            return new Promise((resolve, reject) => {
              var TakeDeptcode = `select iv_channel_department_code  from core_nc_channels_dept cncd where iv_channel_company_code= '${companycode}'`
              ExecuteQuery1(TakeDeptcode, function (arrDeptcode) {

                if (arrDeptcode.length > 0) {
                  resolve(arrDeptcode)

                } else {
                  resolve('')
                }
              })
            })

          }


          function InsertProcess(arrTranparams, final_status, PRCT_ID, processType) {
            return new Promise((resolve, reject) => {

              let finStatus = final_status.replace('READY', 'INITIATED')
              arrCusTranInst = [];

              var objCusTranInst = {}
              objCusTranInst.MSG_ID = arrTranparams.hdr_msg_id ? arrTranparams.hdr_msg_id : arrTranparams.msg_id;
              objCusTranInst.PRCT_ID = PRCT_ID;
              objCusTranInst.UETR = arrTranparams.uetr || "O"
              objCusTranInst.NPSSTRRD_REFNO = arrTranparams.tran_ref_id;
              objCusTranInst.PROCESS_TYPE = processType
              objCusTranInst.PROCESS_TIME = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
              objCusTranInst.PROCESS_NAME = 'Repost'
              objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
              objCusTranInst.PROCESS_STATUS = params.eligible_process_status
              objCusTranInst.STATUS = finStatus;
              objCusTranInst.TENANT_ID = params.TENANT_ID;
              objCusTranInst.APP_ID = '215'
              objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
              objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
              objCusTranInst.DT_DESCRIPTION = 'transaction_group'
              objCusTranInst.DTT_DESCRIPTION = 'Transaction'
              objCusTranInst.CREATED_BY = params.CREATED_BY;
              objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
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



              _BulkInsertProcessItem(arrCusTranInst, 'npss_trn_process_log', function callbackInsert(CusTranInsertRes) {
                if (CusTranInsertRes.length > 0) {
                  reqInstanceHelper.PrintInfo(serviceName, '----------SUCCESS -- NPSS TRN PROCESSLOG INSERT FOR TRANID -----' + arrTranparams.npsst_id + '.........Status.........' + final_status, objSessionLogInfo);
                  resolve('SUCCESS')
                } else {
                  reqInstanceHelper.PrintInfo(serviceName, '----------ERROR -- NPSS TRN PROCESSLOG INSERT FOR TRANID -----' + arrTranparams.npsst_id + '.........Status.........' + final_status, objSessionLogInfo);
                  resolve('FAILURE')
                }
              })
            })
          }




          function getProcesslogdet(arrTran, proces_name) {
            return new Promise((resolve, reject) => {
              var Takeprsslog = `select  additional_info,process_ref_no,msg_id,status_accp_date,status_intrbksttlmdt,status_resp_amount,cbuae_return_code,npsstrrd_refno from npss_trn_process_log where uetr = '${arrTran.uetr}' and process_name = '${proces_name}'`
              ExecuteQuery1(Takeprsslog, function (arrPrssDet) {
                if (arrPrssDet.length > 0) {
                  reqInstanceHelper.PrintInfo(serviceName, '-----------Getting Processlog details success(process_ref_no,msg_id,status_accp_date,status_intrbksttlmdt,status_resp_amount,cbuae_return_code,npsstrrd_refno) for tranId-------' + arrTran.npsst_id + '.......ProcessName....' + proces_name, objSessionLogInfo);
                  resolve(arrPrssDet)
                }
                else {
                  reqInstanceHelper.PrintInfo(serviceName, '-----------Getting Processlog details success(process_ref_no,msg_id,status_accp_date,status_intrbksttlmdt,status_resp_amount,cbuae_return_code,npsstrrd_refno ------------------ Not found Found) for tranId-------' + arrTran.npsst_id + '.......ProcessName....' + proces_name, objSessionLogInfo);
                  resolve('')

                }
              })
            })

          }


          function Returncode(arrTranparamsObj) {
            return new Promise((resolve, reject) => {
              var returnCodobj = {}
              var Takecode = `select response_code,npsstrrd_refno from npss_trn_process_log where status = 'OP_AC_VAL_FAILED' and process_name = 'Failure' and uetr = '${arrTranparamsObj.uetr}'`
              ExecuteQuery1(Takecode, function (arrcode) {
                if (arrcode.length > 0) {
                  if (arrcode.length > 0) {
                    returnCodobj.reason_code = arrcode[0].response_code;
                    returnCodobj.npsst_refno = arrcode[0].npsstrrd_refno
                    resolve(returnCodobj)
                  } else {
                    returnCodobj.reason_code = ''
                    returnCodobj.npsst_refno = ''
                    resolve(returnCodobj)
                  }
                } else {
                  var Takereturncode = `select cbuae_return_code,npsstrrd_refno from npss_trn_process_log where process_name='Receive Pacs002' and status = 'OP_AC_STATUS_REJECTED' and uetr = '${arrTranparamsObj.uetr}'`
                  ExecuteQuery1(Takereturncode, function (returncode) {
                    if (returncode.length > 0) {
                      returnCodobj.reason_code = returncode[0].cbuae_return_code;
                      returnCodobj.npsst_refno = returncode[0].npsstrrd_refno
                      resolve(returnCodobj)
                    } else {
                      returnCodobj.reason_code = ''
                      returnCodobj.npsst_refno = ''
                      resolve(returnCodobj)
                    }
                  })
                }

              })
            })
          }



          function AccountInformation(data, processType) {
            return new Promise((resolve, reject) => {
              let IBAN
              if (processType == 'OP') {
                IBAN = data.dbtr_iban
              } else {
                IBAN = data.cdtr_iban
              }
              var cbsdata = {}
              var cbsaccount = `select inactive_marker,curr_rate_segment,alternate_account_id,currency,account_number,account_officer,company_code,customer_id,alternate_account_type from core_nc_cbs_accounts where alternate_account_id ='${IBAN}'`
              ExecuteQuery1(cbsaccount, function (arrcbsdata) {
                if (arrcbsdata.length > 0) {
                  cbsdata.status = 'SUCCESS'
                  var acctInfrm = {}
                  acctInfrm.inactive_marker = arrcbsdata[0].inactive_marker || '',
                    acctInfrm.curr_rate_segment = arrcbsdata[0].curr_rate_segment || '',
                    acctInfrm.account_number = arrcbsdata[0].account_number || '',
                    acctInfrm.company_code = arrcbsdata[0].company_code || '',
                    acctInfrm.currency = arrcbsdata[0].currency || '',
                    acctInfrm.alternate_account_type = arrcbsdata[0].alternate_account_type || '',
                    acctInfrm.alternate_account_id = arrcbsdata[0].alternate_account_id || '',
                    acctInfrm.account_officer = arrcbsdata[0].account_officer || '',
                    acctInfrm.customer_id = arrcbsdata[0].customer_id || '',
                    acctInfrm.department_code = data.department_code || ''
                  cbsdata.AccountInformations = acctInfrm
                  resolve(cbsdata)
                } else {
                  reqInstanceHelper.PrintInfo(serviceName, '-----------No data found in cbsaccounts table for npsst_id-------' + data.npsst_id, objSessionLogInfo);
                  cbsdata.status = 'No cbs account Information found for TranId' + data.npsst_id
                  resolve(cbsdata)
                }


              })
            })
          }











          //Execute Query Function
          function ExecuteQuery1(query, callback) {
            reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
              try {
                if (error) {
                  sendResponse(error, null);
                } else {
                  if (result.rows.length > 0) {
                    callback(result.rows);
                  } else {
                    callback([]);
                  }
                }
              } catch (error) {
                sendResponse(error, null);
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
        sendResponse(error, null);
      }
    })
  }
  catch (error) {
    sendResponse(error, null);
  }











});

module.exports = app;
