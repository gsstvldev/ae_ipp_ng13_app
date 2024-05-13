var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {






  try {
    /*   Created By : Siva Harish
    Created Date :02-01-2023
    Modified_by:Siva Harish
      Modified Date :03-01-2023
      Reason for handling count for reverse id for cc and pc 19/06/2023
        Reason for handling category pupose for 008 on 12-07-2023 by daseen
        Reason for update intblk amount from pacs008 by harish 14/7/2023
         Reason for handling prepaid card missing field
         Reason for handling cb_acctype_code key for 008 by Daseen 11-09-2023
         Modified for: to take last inserted record for process refno(reversalid) for authposting
           Modified for: to take last inserted record for channel ref no(reversalid) for 008 after authposting 26 09 2023 by Daseen
   Modified for: Handling for validation in private and Organisation on 17/10/2023 by Daseen
    Modified for: Handling for transaction id chnage in every posting call on 2/11/2023 by Daseen
      Modified for: Handling for decrypt for response_data_json in every posting call on 8/11/2023 by Daseen
      Reason for : Adding  dbtr_acct_no in inau and auth posting on 16/11/2023 by  daseen
      Reason for : Removing  dbtr_acct_no,dbtr_iban in prepaid and posting on 1/12/2023 by  daseen
      Reason for : Changes for BCT flow on 22/1/2024 by  daseen
      Reason for : Changes for BCT flow no packs call after posting only status change on 16/02/2024 by  daseen
      Reason : changes for category_purpose_prty in 008 call on 06-03-2024
      Reason : changes for BCT -cbs ref no update in transaction after auth posting in 008 call on 11-03-2024
      Reason : changes for BCT -remarks update in transaction on 20-03-2024 by daseen on 20-03-2024 WI 3399
       Reason : Duplicate retry value for second time in ext_iden_retry_value   on 01-04-2024 by daseen  WI 3472
       reason : getcount,select query for IPUETR  based on schema(live or archival) 10-4-24 -renga WI 3683
       reason : added key in accountnumber for prepaid posting 27-4-24 -Daseen WI 3771
       Reason for : for checking prepaid or credit iban taken from core_nc_system_setup on 30/04/2024 by  Subramanian wi:3771
       reason for :  for prepaid  process group check from transaction table --renga  Wi 3771 13-05-24 function name : findBCTRCT
    */
    var serviceName = 'NPSS (CS) Manual Initiation Approve';
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
    var mTranConn = "";
    var addquery = "";

    var moment = require('moment')
    var Objfiledata
    var Getdata
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
        objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Manual Initiation Approve';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSS (CS) Manual Initiation Approve';
        var cus_iban;
        // Get DB Connection                                                                                                                                      
        reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
          mTranConn = pSession; //  assign connection     
          reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
            try {
              var PRCT_ID = prct_id
              var ApitrnId
              var app_id
              let Ipuetr
              var apicalls
              var reverandRefno
              var extend_retry_value
              var final_status
              var final_process_status
              var take_api_url
              var takedealRefno
              var GetsellRate
              var take_return_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_RETURN_PACK004' and param_code='URL' and need_sync = 'Y'`;
              var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = '${params.RULE_CODE}'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
              var take_api_params = `select   ns.dbtr_acct_no,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,ns.process_group,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY) as dbtr_account_no,ns.force_post_flag,ns.channel_id,ns.channel_refno,ns.fx_resv_text3,ns.amount_credited_loc_cur,ns.buy_margin,ns.buy_rate,ns.department_code,ns.fx_resv_text2,ns.account_currency,ns.org_pay_endtoend_id, ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,fn_pcidss_decrypt(ns.message_data,$PCIDSS_KEY ) as message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,process_type,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id = '${params.Tran_Id}'`;
              if (params.PROD_CODE == 'NPSS_AEFAB') {
                ExecuteQuery1(TakeStsPsts, function (arrurlResult) {
                  if (arrurlResult.length) {
                    final_process_status = arrurlResult[0].success_process_status
                    final_status = arrurlResult[0].success_status
                    ExecuteQuery1(take_api_params, async function (arrprocesslog) {
                      if (arrprocesslog.length) {
                        var lclinstrm
                        if (arrprocesslog[0].message_data !== null) {
                          var parser = new xml2js.Parser({ strict: false, trim: true });
                          parser.parseString(arrprocesslog[0].message_data, function (err, result) {
                            lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]

                          });

                        }
                        else {
                          lclinstrm = ""
                        }
                        let checkAlreadyPosted = await CheckTranStatus(arrprocesslog, final_process_status, final_status, lclinstrm, PRCT_ID)
                        if (checkAlreadyPosted == 'CallAuthPosting') {
                          var PreparedData = async () => {
                            Ipuetr = await TakeIpUetr(arrprocesslog)
                            extend_retry_value = await GetRetrycount(arrprocesslog[0].uetr, Ipuetr)
                            // Logic For Taking Reversal Id and Taking PostingRefno and account Information only for auth004 api call
                            reverandRefno = await TakeReversalIdandPostRefno(arrprocesslog, Ipuetr)
                            if (reverandRefno.currency != 'AED') {

                              GetsellRate = await GetsplRate(arrprocesslog, reverandRefno)
                              if (GetsellRate == 'Take GMrate') {
                                Getdata = await GetgmMargin(arrprocesslog, reverandRefno)
                              }
                              takedealRefno = await GetRefno(arrprocesslog, reverandRefno)
                            }
                            take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_IP_REV_RET_AUTH_PACS004' and param_code='URL' and need_sync = 'Y'`;
                            var amount
                            amount = arrprocesslog[0].intrbk_sttlm_amnt
                            ExecuteQuery1(take_api_url, function (arrurl) {
                              if (arrurl.length) {
                                var url = arrurl[0].param_detail;
                                fn_doapicall(url, arrprocesslog, lclinstrm, amount, reverandRefno, Objfiledata, Getdata, extend_retry_value, takedealRefno, GetsellRate, async function (firstapiresult) {
                                  if (firstapiresult.status === "SUCCESS" || firstapiresult.status === "Success" || firstapiresult.status === "success") {
                                    let Amount;
                                    let transactionId = ''


                                    if (firstapiresult && firstapiresult.response) {
                                      if (firstapiresult.response.header && firstapiresult.response.header.id) {
                                        transactionId = firstapiresult.response.header.id;
                                      } else if (firstapiresult.response.dataArea && firstapiresult.response.dataArea.offlineTransactionReferenceNumber) {
                                        transactionId = firstapiresult.response.dataArea.offlineTransactionReferenceNumber;
                                      } else {
                                        transactionId = ''
                                      }
                                    }
                                    if (reverandRefno.currency != 'AED') {
                                      if (firstapiresult.amountCredited) {
                                        Amount = firstapiresult.amountCredited

                                        /*  try {
                                             if (firstapiresult.amountCredited && arrprocesslog[0].intrbk_sttlm_amnt) {
                                                 if (Number(firstapiresult.amountCredited) > Number(arrprocesslog[0].intrbk_sttlm_amnt)) {
                                                     Amount = arrprocesslog[0].intrbk_sttlm_amnt || ''
                                                 } else {
                                                     Amount = firstapiresult.amountCredited
                                                 }
                                             } else {
                                                 Amount = arrprocesslog[0].intrbk_sttlm_amnt || ''
                                             }
                                         } catch (error) {
                                             Amount = arrprocesslog[0].intrbk_sttlm_amnt || ''
                                         } */
                                      } else {
                                        Amount = ''
                                      }




                                    } else {
                                      Amount = arrprocesslog[0].intrbk_sttlm_amnt || ''
                                    }
                                    let UpdateAmount = await UpdateCreditAmount(Amount, reverandRefno.retryCount, Ipuetr)
                                    if (UpdateAmount == 'FAILURE') {
                                      objresponse.status = "FAILURE"
                                      objresponse.errdata = "Failure in Amount Credited Coloumn in Tran Table"
                                      sendResponse(null, objresponse)
                                    }
                                    reqInstanceHelper.PrintInfo(serviceName, '------------fIRST API CALL SUCCESS-------', objSessionLogInfo);
                                    if (params.eligible_status != 'OP_BCT_RET_RESERVED' && params.eligible_process_status != 'BCTOutwardReturnReserved') {
                                      let CheckorgPvt = await TakeOrgPvt(arrprocesslog)
                                      reverandRefno.type = 'IBAN'
                                      let Pacs008 = await fn_doPac008apicall(arrprocesslog, reverandRefno, CheckorgPvt, Amount, transactionId)
                                      if (Pacs008 == 'SUCCESS') {
                                        let UpdateTran = await GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', '')
                                      } else {
                                        objresponse.status = "FAILURE"
                                        objresponse.errdata = "Failure in Pac008 Api"
                                        sendResponse(null, objresponse)
                                      }
                                    } else {
                                      let UpdateTran = await GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, transactionId, 'BCT')
                                    }

                                  } else {
                                    objresponse.status = "FAILURE"
                                    objresponse.errdata = 'Auth Api Call Failure  Error Code Found-' + firstapiresult.error_code
                                    sendResponse(null, objresponse);

                                  }
                                })


                              }
                              else {
                                reqInstanceHelper.PrintInfo(serviceName, '------------Posting Url Not Found-------', objSessionLogInfo);
                                objresponse.status = "FAILURE"
                                objresponse.errdata = "Posting URL not found workflow table"
                                sendResponse(null, objresponse)
                              }
                            })


                          }
                          PreparedData()
                        } else {
                          objresponse.status = "FAILURE"
                          objresponse.errdata = "Checking Auth Posting done error"
                          sendResponse(null, objresponse)
                        }

                      }
                      else {

                        objresponse.status = "FAILURE"
                        objresponse.errdata = "No Data found in Transaction table"
                        sendResponse(null, objresponse)
                      }

                    })
                  }
                  else {

                    objresponse.status = "FAILURE"
                    objresponse.errdata = "No Data found in Workflow table"
                    sendResponse(null, objresponse)
                  }

                })
              } else { //finance house
                ExecuteQuery1(TakeStsPsts, function (arrurlResult) {
                  if (arrurlResult.length) {
                    final_process_status = arrurlResult[0].success_process_status
                    final_status = arrurlResult[0].success_status
                    ExecuteQuery1(take_api_params, async function (arrprocesslog) {
                      if (arrprocesslog.length) {
                        var lclinstrm
                        if (arrprocesslog[0].message_data !== null) {
                          var parser = new xml2js.Parser({ strict: false, trim: true });
                          parser.parseString(arrprocesslog[0].message_data, function (err, result) {
                            lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                          });
                        }
                        else {
                          lclinstrm = ""
                        }
                        let CheckorgPvt = ''
                        let Amount = arrprocesslog[0].intrbk_sttlm_amnt
                        reverandRefno.type = 'IBAN'
                        let Pacs008 = await fn_doPac008apicall(arrprocesslog, reverandRefno, CheckorgPvt, Amount, '')
                        if (Pacs008 == 'SUCCESS') {
                          GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', '')
                        } else {
                          objresponse.status = "FAILURE"
                          objresponse.errdata = "Pacs008 Api Failure"
                          sendResponse(null, objresponse)
                        }
                      }
                      else {

                        objresponse.status = "FAILURE"
                        objresponse.errdata = "No Data found in Transaction table"
                        sendResponse(null, objresponse)
                      }

                    })
                  }
                  else {
                    objresponse.status = "FAILURE"
                    objresponse.errdata = "No Data found in Workflow table"
                    sendResponse(null, objresponse)
                  }

                })

              }

            }
            catch (error) {
              reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
              sendResponse(error, null);
            }
          })





          function GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, transactionId, remarks) {
            var UpdateTrnTble
            if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') {
              UpdateTrnTble = `Update npss_transactions set maker = '${params.CREATED_BY_NAME}',cbs_ref_no='${transactionId}',remarks='${remarks}',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}',intrbk_sttlm_amnt = '${Amount}' where npsst_id = '${params.Tran_Id}'`
            } else {
              UpdateTrnTble = `Update npss_transactions set checker = '${params.CREATED_BY_NAME}',cbs_ref_no='${transactionId}',remarks='${remarks}',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}',intrbk_sttlm_amnt = '${Amount}' where npsst_id = '${params.Tran_Id}'`
            }

            ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
              if (arrUpdTranTbl == 'SUCCESS') {
                objresponse.status = 'SUCCESS';
                sendResponse(null, objresponse);
              }
              else {
                objresponse.status = "FAILURE"
                objresponse.errdata = "No Data Updated in Transaction Table"
                sendResponse(null, objresponse)
              }
            })
          }


          function UpdateCreditAmount(Amount, extend_retry_value, ipuetr) {
            return new Promise((resolve, reject) => {
              let UpdateColumn = `update npss_transactions set fx_resv_text3 = '${Amount}' where npsst_id = '${params.Tran_Id}'`
              let updtQry = `update npss_trn_process_log set ext_iden_retry_value = ${extend_retry_value} where uetr ='${ipuetr}' and status in('IP_BCT_POSTING_SUCCESS','IP_RCT_POSTING_SUCCESS')`
              ExecuteQuery(UpdateColumn, function (arrcolmn) {
                if (arrcolmn == 'SUCCESS') {
                  ExecuteQuery(updtQry, function (arrUetr) {
                    if (arrUetr == 'SUCCESS') {
                      resolve('SUCCESS')
                    } else {
                      objresponse.status = "ext_iden_retry_value update Failed "
                      sendResponse(null, objresponse)
                    }
                  })

                }
                else {
                  resolve("FAILURE")

                }
              })
            })

          }



          function fnupdateoldIPUetr(extend_retry_value, ipuetr) {
            return new Promise((resolve, reject) => {

              let updtQry = `update npss_trn_process_log set ext_iden_retry_value = ${extend_retry_value} where uetr ='${ipuetr}' and status in ('IP_RCT_PC_T24_POSTING_SUCCESS','IP_BCT_PC_T24_POSTING_SUCCESS','IP_RCT_CC_T24_POSTING_SUCCESS','IP_BCT_CC_T24_POSTING_SUCCESS')`

              ExecuteQuery(updtQry, function (arrUetr) {
                if (arrUetr == 'SUCCESS') {
                  resolve('SUCCESS')
                } else {
                  objresponse.status = "ext_iden_retry_value update Failed "
                  sendResponse(null, objresponse)
                }
              })


            })

          }




          // Do API Call for Service 
          function fn_doapicall(url, arrprocesslog, lclinstrm, amount, reverandRefno, Objfiledata, Getdata, extend_retry_value, takedealRefno, GetsellRate, callbackapi) {
            try {
              var apiName = 'NPSS IP REV RET AUTH PACS004'
              var request = require('request');
              var apiURL =
                apiURL = url // apiURL + apiName
              var options = {
                url: apiURL,
                timeout: 18000000,
                method: 'POST',
                json: {


                  "payload": {
                    "department_code": arrprocesslog[0].department_code || '',
                    //  "ext_iden_retry_value": extend_retry_value || '',
                    "force_post_flag": arrprocesslog[0].force_post_flag,
                    "org_field_data": arrprocesslog[0].fx_resv_text2 || '',
                    "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                    "hdr_created_date": arrprocesslog[0].hdr_created_date || '',
                    "hdr_total_records": arrprocesslog[0].hdr_total_records || '',
                    "hdr_total_amount": arrprocesslog[0].hdr_total_amount || '',
                    "hdr_settlement_date": arrprocesslog[0].hdr_settlement_date || '',
                    "hdr_settlement_method": arrprocesslog[0].hdr_settlement_method || '',
                    "hdr_clearing_system": arrprocesslog[0].hdr_clearing_system || '',
                    "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                    "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                    "category_purpose": arrprocesslog[0].category_purpose || '',
                    "category_purpose_prty": arrprocesslog[0].category_purpose_prty || '',
                    "ext_purpose_code": arrprocesslog[0].ext_purpose_code || '',
                    "dbtr_acct_no": arrprocesslog[0].dbtr_account_no || '',
                    "lclinstrm": lclinstrm || '',
                    "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                    "intrbk_sttlm_amnt": amount || '',
                    "dbtr_iban": arrprocesslog[0].dbtr_iban || '',

                    "cdtr_iban": arrprocesslog[0].cdtr_iban || '',
                    "dbtr_acct_name": arrprocesslog[0].dbtr_acct_name || '',
                    "cdtr_acct_name": arrprocesslog[0].cdtr_acct_name || '',
                    "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                    "charge_bearer": arrprocesslog[0].charge_bearer || '',
                    "txid": arrprocesslog[0].tran_ref_id || '',
                    "uetr": arrprocesslog[0].uetr || '',
                    "cr_acct_identification": arrprocesslog[0].cr_acct_identification || '',
                    "cr_acct_id_code": arrprocesslog[0].cr_acct_id_code || '',
                    "message_data": arrprocesslog[0].message_data || '',

                    "process_type": arrprocesslog[0].process_type || '',
                    "status": params.STATUS || '',
                    "process_status": params.ELIGIBLE_PROCESS_STATUS || '',
                    "clrsysref": arrprocesslog[0].clrsysref,

                    "process": "",
                    "remittance_information": arrprocesslog[0].remittance_info || '',
                    "posting_ref_no": reverandRefno.processRefno || '',
                    "reversal_id": reverandRefno.reverseId || ''


                  },
                  "AccountInformation": {
                    "account_number": reverandRefno.account_number || '',
                    "company_code": reverandRefno.company_code || '',
                    "inactive_marker": reverandRefno.inactive_marker || '',
                    "currency": reverandRefno.currency || '',
                    "alternate_account_type": reverandRefno.alternate_account_type || '',
                    "alternate_account_id": reverandRefno.alternate_account_id || ''

                  }
                },
                headers: {
                  'Content-Type': 'application/json'
                }
              }

              if (reverandRefno.currency != 'AED') {
                if (GetsellRate != 'Take GMrate') {
                  if (arrprocesslog[0].buy_margin != 0 && arrprocesslog[0].buy_margin != null) {
                    options.json.payload.buy_margin = arrprocesslog[0].buy_margin || ''
                  }
                  if (arrprocesslog[0].buy_rate != 0 && arrprocesslog[0].buy_rate != null) {
                    options.json.payload.buy_rate = arrprocesslog[0].buy_rate || ''
                  }

                  options.json.payload.amount_credited_loc_cur = arrprocesslog[0].amount_credited_loc_cur || ''
                  options.json.payload.deal_ref_no = takedealRefno || ''

                } else {
                  if (Getdata != '') {
                    options.json.payload.GMMargin = Getdata.GMMargin || '',
                      options.json.payload.GMRate = Getdata.GMRate || '',
                      options.json.payload.amount_credited_loc_cur = Getdata.amount_credited_loc_cur || ''
                    options.json.payload.deal_ref_no = takedealRefno || ''


                  }
                }
              }


              var PrintInfo = {}
              PrintInfo.url = url || ''
              PrintInfo.uetr = arrprocesslog[0].uetr || ''
              PrintInfo.posting_ref_no = reverandRefno.processRefno || ''
              PrintInfo.reversal_id = reverandRefno.reverseId || ''
              PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
              PrintInfo.clrsysref = arrprocesslog[0].clrsysref || ''
              PrintInfo.currency = reverandRefno.currency || ''

              reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(options), objSessionLogInfo);


              request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                if (error) {
                  reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                  sendResponse(error, null);

                } else {
                  // callbackapi('SUCCESS')
                  responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                  reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                  var responseData = JSON.parse(responseBodyFromImagingService)
                  reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseData, objSessionLogInfo);
                  callbackapi(responseData)
                }
              });

            } catch (error) {
              reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
              sendResponse(error, null);
            }
          }

          function fngetacctype(arrprocesslog) {
            return new Promise((resolve, reject) => {
              try {
                takeaccttypeqry = `select at.cb_acctype_code,at.cbs_category_id, ac.category_code from core_nc_cbs_accounts ac  inner join core_nc_cbscate_cbacctyp at
              on at.cbs_category_id = TO_CHAR(ac.category_code,'FM9999999999') where ac.alternate_account_id='${arrprocesslog[0].dbtr_iban}'`
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


          function fn_doPac008apicall(arrprocesslog, reverandRefno, CheckorgPvt, Amount, transactionId) {
            return new Promise((resolve, reject) => {
              try {
                var Takepac008url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_MANUAL_INT_PAC008' and param_code='URL' and need_sync = 'Y'`;
                ExecuteQuery1(Takepac008url, async function (pac008url) {
                  if (pac008url.length > 0) {
                    var TakecatPurpose = `select param_detail from core_nc_system_setup where param_category ='MANUAL_INITATION' and param_code='MANUAL_INITATION_PURPOSE_CODE'`;
                    ExecuteQuery1(TakecatPurpose, async function (arrcatPurpose) {
                      //   if (arrcatPurpose.length > 0) {
                      var takeaccttypecode = await fngetacctype(arrprocesslog)
                      let purp = '';
                      if (arrprocesslog[0].process_group == "P2P") {
                        purp = 'MP2P'
                      } else if (arrprocesslog[0].process_group == "P2B") {
                        purp = 'MP2B'
                      } else {
                        purp = 'WEBI'
                      }
                      var category_prty
                      var hdrmsgid
                      if (arrprocesslog[0].category_purpose_prty == null || arrprocesslog[0].category_purpose_prty == '') {
                        category_prty = 'MIS'
                      } else {
                        category_prty = arrprocesslog[0].category_purpose_prty
                      }
                      if (arrprocesslog[0].hdr_msg_id != null) {
                        if (arrprocesslog[0].hdr_msg_id.length > 8) {
                          hdrmsgid = arrprocesslog[0].hdr_msg_id.slice(0, 8) + moment().format("DDMMYYYYhhmmss")
                        } else {
                          hdrmsgid = arrprocesslog[0].hdr_msg_id + moment().format("DDMMYYYYhhmmss")
                        }
                      } else {
                        hdrmsgid = ''
                      }
                      var apiName = 'NPSS Pac008 Api'
                      var request = require('request');
                      var apiURL =
                        apiURL = pac008url[0].param_detail // apiURL + apiName
                      var options = {
                        url: apiURL,
                        timeout: 18000000,
                        method: 'POST',
                        json: {
                          "hdr_msg_id": hdrmsgid,
                          "hdr_total_amount": Amount || '',
                          "value_date": moment().format('YYYY-MM-DD'),
                          "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                          "instr_id": arrprocesslog[0].org_pay_endtoend_id || '',
                          "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                          "tran_ref_id": transactionId || '',
                          "uetr": arrprocesslog[0].uetr || '',
                          "intrbk_sttlm_amnt": Amount || '',
                          // "dbtr_acct_name": reverandRefno.account_name || '',
                          // "dbtr_birth_date": reverandRefno.birthdate ? moment(reverandRefno.birthdate).format('YYYY-MM-DD') : '',
                          "dbtr_acct_name": reverandRefno.account_name ? reverandRefno.account_name : arrprocesslog[0].dbtr_acct_name ? arrprocesslog[0].dbtr_acct_name : '',
                          "dbtr_birth_date": reverandRefno.birthdate ? moment(reverandRefno.birthdate).format('YYYY-MM-DD') : '',
                          "dbtr_city_birth": reverandRefno.cityofbirth || 'XXXXX',
                          "dbtr_country": reverandRefno.countryofbirth || 'XX',
                          "dbtr_other_issuer": arrprocesslog[0].dbtr_other_issuer || '',
                          "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                          // "dbtr_acct_no":arrprocesslog[0].dbtr_account_no || '',
                          "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                          "cdtr_acct_name": arrprocesslog[0].cdtr_acct_name || '',
                          "cdtr_iban": arrprocesslog[0].cdtr_iban || '',
                          "cr_acct_identification": arrprocesslog[0].cr_acct_identification || '',
                          "remittance_information": arrprocesslog[0].remittance_info || '',
                          // "category_purpose": arrprocesslog[0].category_purpose_prty  || '',
                          "dbtr_acct_no": arrprocesslog[0].dbtr_account_no || '',
                          "category_purpose_prty": arrcatPurpose[0].param_detail || 'IPP',
                          "channel_id": 'IPP',

                          "cb_acctype_code": takeaccttypecode,
                          "purp": purp

                        },
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      }

                      if (params.PROD_CODE == 'NPSS_AEFAB') {
                        if (reverandRefno.type == 'IBAN') {
                          options.json.channel_refno = reverandRefno.reverseId || ''
                          if (CheckorgPvt != '' && CheckorgPvt != null) {
                            if (CheckorgPvt.type == 'Organisation') {
                              options.json.dbtr_prvt_id = CheckorgPvt.code
                              options.json.dbtr_document_id = ''
                              options.json.ext_org_id_code = 'BOID'
                              options.json.issuer_type_code = CheckorgPvt.cbuae_issur_code,
                                options.json.AccountInformation = reverandRefno || ''
                            } else {
                              options.json.dbtr_prvt_id = ''
                              options.json.dbtr_document_id = CheckorgPvt.code
                              options.json.ext_person_id_code = CheckorgPvt.extpersonidcode
                              options.json.issr = CheckorgPvt.issrtype || ''
                              options.json.AccountInformation = reverandRefno || ''
                            }


                          }

                        } else { //for credit and perpaid
                          options.json.channel_refno = arrprocesslog[0].clrsysref || '',
                            options.json.dbtr_prvt_id = ''
                          options.json.dbtr_document_id = reverandRefno.privateId || ''
                          options.json.ext_person_id_code = reverandRefno.extpersonidcode || ''
                          options.json.issr = 'AE',
                            options.json.AccountInformation = {}
                        }


                      } else {
                        options.json.dbtr_prvt_id = arrprocesslog[0].dbtr_prvt_id
                        options.json.dbtr_document_id = arrprocesslog[0].dbtr_document_id
                        options.json.ext_org_id_code = arrprocesslog[0].ext_org_id_code
                        options.json.issuer_type_code = arrprocesslog[0].issuer_type_code
                        options.json.ext_person_id_code = arrprocesslog[0].ext_person_id_code
                      }


                      reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(options), objSessionLogInfo);
                      request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                        if (error) {
                          reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                          sendResponse(error, null);


                        } else {
                          reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                          responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode

                          resolve(responseBodyFromImagingService)
                        }
                      });
                      /*  }
                        else {
                            objresponse.status = "FAILURE"
                            objresponse.errdata = "Category Purpose value not found"
                            sendResponse(null, objresponse)
                        } */
                    })
                  } else {
                    objresponse.status = "FAILURE"
                    objresponse.errdata = "Pac008 Url Not Found"
                    sendResponse(null, objresponse)
                  }
                })

              } catch (error) {
                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                sendResponse(error, null);
              }
            })

          }





          //function to check logic for reversal Id and Taking PostingRefno only for auth004

          function TakeReversalIdandPostRefno(arrprocesslog, ipuetr) {
            return new Promise((resolve, reject) => {
              var TakeAcctInf = `select birthdate,cityofbirth,countryofbirth,emirates_code,account_name,alternate_account_type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslog[0].dbtr_iban}'`
              var TakeprssRefno = `select process_ref_no  from npss_trn_process_log  where uetr = '${arrprocesslog[0].uetr}' and status = 'OP_RCT_MAN_INAU_POSTING_SUCCESS' order by created_date desc`;
              // var TakeCount = `select COUNT(npsstpl_id) as counts from npss_trn_process_log where status in ('OP_RCT_MAN_INAU_POSTING_SUCCESS','OP_RCT_MAN_INAU_POSTING_FAILURE') and uetr = '${arrprocesslog[0].uetr}'`
              var TakeCount = `select CAST(ext_iden_retry_value AS INTEGER) from <tran_db>.npss_trn_process_log where   uetr ='${ipuetr}' and  status in ('IP_RCT_POSTING_SUCCESS','IP_BCT_POSTING_SUCCESS')`
              var TakeCountArc = `select CAST(ext_iden_retry_value AS INTEGER) from <arc_tran_db>.npss_trn_process_log where   uetr ='${ipuetr}' and  status in ('IP_RCT_POSTING_SUCCESS','IP_BCT_POSTING_SUCCESS')`
              ExecuteQuery1(TakeprssRefno, function (arrprssRefno) {
                if (arrprssRefno.length > 0) {
                  var parameter = {}
                  if (arrprssRefno[0].process_ref_no != null) {
                    parameter.processRefno = arrprssRefno[0].process_ref_no
                    ExecuteQuery1(TakeAcctInf, function (arrActInf) {
                      if (arrActInf.length > 0) {
                        if (arrActInf[0].birthdate != "" && arrActInf[0].birthdate != undefined && arrActInf[0].birthdate != null) {
                          parameter.account_number = arrActInf[0].account_number || '',
                            parameter.company_code = arrActInf[0].company_code || '',
                            parameter.inactive_marker = arrActInf[0].inactive_marker || '',
                            parameter.currency = arrActInf[0].currency || '',
                            parameter.alternate_account_id = arrActInf[0].alternate_account_id || ''
                          parameter.customer_id = arrActInf[0].customer_id || '',
                            parameter.department_code = arrprocesslog[0].department_code || 'DEFAULT'
                          parameter.account_name = arrActInf[0].account_name || '',
                            parameter.emirates_code = arrActInf[0].emirates_code || '',
                            parameter.countryofbirth = arrActInf[0].countryofbirth || '',
                            parameter.cityofbirth = arrActInf[0].cityofbirth || ''
                          parameter.birthdate = arrActInf[0].birthdate || ''
                          parameter.alternate_account_type = arrActInf[0].alternate_account_type || ''
                          ExecuteQuery1(TakeCount, function (arrCount) {


                            if (arrprocesslog[0].clrsysref) {
                              if (arrCount.length > 0) {
                                if ((Number(arrCount[0].ext_iden_retry_value) < 10) || (arrCount[0].ext_iden_retry_value == null)) {
                                  var count = Number(arrCount[0].ext_iden_retry_value)
                                  count++
                                  parameter.retryCount = count
                                  parameter.reverseId = arrprocesslog[0].clrsysref + '.0' + count
                                  resolve(parameter)
                                } else {
                                  var count = Number(arrCount[0].ext_iden_retry_value)
                                  count++
                                  parameter.retryCount = count
                                  parameter.reverseId = arrprocesslog[0].clrsysref + '.' + count
                                  resolve(parameter)
                                }

                              } else {
                                ExecuteQuery1(TakeCountArc, function (arrCount) {
                                  if (arrCount.length > 0) {
                                    if ((Number(arrCount[0].ext_iden_retry_value) < 10) || (arrCount[0].ext_iden_retry_value == null)) {
                                      var count = Number(arrCount[0].ext_iden_retry_value)
                                      count++
                                      parameter.retryCount = count
                                      parameter.reverseId = arrprocesslog[0].clrsysref + '.0' + count
                                      resolve(parameter)
                                    } else {
                                      var count = Number(arrCount[0].ext_iden_retry_value)
                                      count++
                                      parameter.retryCount = count
                                      parameter.reverseId = arrprocesslog[0].clrsysref + '.' + count
                                      resolve(parameter)
                                    }

                                  } else {
                                    objresponse.status = "FAILURE"
                                    objresponse.errdata = "ext_iden_retry_value  is Missing"
                                    sendResponse(null, objresponse)
                                  }

                                })

                              }
                            } else {
                              objresponse.status = "FAILURE"
                              objresponse.errdata = "clrsysRef  is Missing"
                              sendResponse(null, objresponse)
                            }


                          })
                        } else {

                          objresponse.status = "FAILURE"
                          objresponse.errdata = "birthdate is missing"
                          sendResponse(null, objresponse)
                        }

                      } else {

                        objresponse.status = "FAILURE"
                        objresponse.errdata = "No Data found in accounts table"
                        sendResponse(null, objresponse)
                      }

                    })
                  } else {
                    objresponse.status = "FAILURE"
                    objresponse.errdata = "Process Refno is missing"
                    sendResponse(null, objresponse)
                  }

                } else {

                  objresponse.status = "FAILURE"
                  objresponse.errdata = "Process Refno is not in the table"
                  sendResponse(null, objresponse)

                }
              })


            })

          }
          function GetgmMargin(arrprocesslog, reverandRefno) {
            return new Promise((resolve, reject) => {
              if (reverandRefno.currency == '' || reverandRefno.currency == null) {
                resolve('')
              } else {
                if (reverandRefno.currency != 'AED') {
                  var Takedata = `select exchange_rate,gm_margin from npss_trn_process_log where status = 'OP_RCT_REV_DEAL_RECEIVED' and uetr = '${arrprocesslog[0].uetr}'`
                  ExecuteQuery1(Takedata, function (arrresponse) {
                    var senddata = {}
                    var Takeloccur = `SELECT amount_credited_loc_cur from npss_transactions where npsst_id = '${params.Tran_Id}'`
                    ExecuteQuery1(Takeloccur, function (localcur) {
                      if (localcur.length == 0) {
                        senddata.amount_credited_loc_cur = ''
                        if (arrresponse.length == 0) {
                          senddata.GMRate = '',
                            senddata.GMMargin = ''
                          resolve(senddata)
                        } else {
                          senddata.GMRate = arrresponse[0].exchange_rate,
                            senddata.GMMargin = arrresponse[0].gm_margin
                          resolve(senddata)
                        }
                      } else {
                        senddata.amount_credited_loc_cur = localcur[0].amount_credited_loc_cur
                        if (arrresponse.length == 0) {
                          senddata.GMRate = '',
                            senddata.GMMargin = ''
                          resolve(senddata)
                        } else {
                          senddata.GMRate = arrresponse[0].exchange_rate,
                            senddata.GMMargin = arrresponse[0].gm_margin
                          resolve(senddata)
                        }
                      }


                    })


                  })
                } else {
                  resolve('')
                }
              }

            })
          }

          function GetsplRate(arrprocesslog, reverandRefno) {

            return new Promise((resolve, reject) => {
              if (reverandRefno.currency == '' || reverandRefno.currency == null) {
                resolve('Take GMrate')
              } else {
                if (reverandRefno.currency != 'AED') {
                  var CheckRate = `select * from npss_trn_process_log where process_name = 'Customer Spl Rate' and status = 'OP_RCT_MAN_SPL_RATE_MARKED' and uetr = '${arrprocesslog[0].uetr}'`
                  // var CheckRate = `select * from npss_trn_process_log where process_name = 'Customer Spl Rate' and status = 'OP_RCT_MAN_SPL_RATE_MARKED' and uetr = '${arrprocesslog[0].uetr}'`
                  ExecuteQuery1(CheckRate, function (arrRate) {
                    if (arrRate.length > 0) {
                      resolve('Take Sellrate')
                    } else {
                      resolve('Take GMrate')
                    }

                  })
                } else {
                  resolve('Take GMrate')
                }
              }
            })
          }

          function GetRefno(arrprocesslog, reverseAcinfparam) {
            return new Promise((resolve, reject) => {
              if (reverseAcinfparam.currency == '' || reverseAcinfparam.currency == null) {
                resolve('')
              } else {
                if (reverseAcinfparam.currency != 'AED') {
                  var Takedelrefno = `select process_ref_no from npss_trn_process_log where status = 'OP_RCT_REV_DEAL_RECEIVED'  and uetr = '${arrprocesslog[0].uetr}'`
                  ExecuteQuery1(Takedelrefno, function (dealrefno) {
                    if (dealrefno.length > 0) {
                      resolve(dealrefno[0].process_ref_no)
                    } else {
                      resolve('')
                    }

                  })

                } else {
                  resolve('')
                }
              }

            })
          }

          function GetRetrycount(uetr, ipuetr) {
            return new Promise((resolve, reject) => {

              //var TakeretryValue = `select ext_iden_retry_value from npss_trn_process_log where   uetr ='${ipuetr}' and  status='${params.eligible_status}'`

              var TakeretryValue = `select ext_iden_retry_value from <tran_db>.npss_trn_process_log where ext_iden_retry_value IS NOT NULL and uetr = '${uetr}' order by npsstpl_id desc`

              var TakeretryValueArc = `select ext_iden_retry_value from <arc_tran_db>.npss_trn_process_log where ext_iden_retry_value IS NOT NULL and uetr = '${uetr}' order by npsstpl_id desc`
              ExecuteQuery1(TakeretryValue, function (extIdentValue) {
                if (extIdentValue.length > 0) {
                  if (extIdentValue[0].ext_iden_retry_value != null) {
                    var count = Number(extIdentValue[0].ext_iden_retry_value)
                    count++
                    resolve(count)
                  } else {
                    resolve(1)
                  }

                } else {
                  ExecuteQuery1(TakeretryValueArc, function (extIdentValueArc) {
                    if (extIdentValueArc.length > 0) {
                      if (extIdentValueArc[0].ext_iden_retry_value != null) {
                        var count = Number(extIdentValueArc[0].ext_iden_retry_value)
                        count++
                        resolve(count)
                      } else {
                        resolve(1)
                      }
                    } else {
                      resolve(1)
                    }
                  })

                }

              })
            })
          }

          function TakeIpUetr(arrprocesslog) {
            return new Promise((resolve, reject) => {
              var Takeuetr = `select additional_info from npss_trn_process_log where process_name = 'Initiate Dispute Tran' and uetr = '${arrprocesslog[0].uetr}'`
              ExecuteQuery1(Takeuetr, function (arrIpuetr) {
                if (arrIpuetr.length > 0 && arrIpuetr[0].additional_info != null) {
                  resolve(arrIpuetr[0].additional_info)
                } else {
                  objresponse.status = "Tran Process log IP uetr entry is missing"
                  sendResponse(null, objresponse)
                }
              })
            })
          }



          function getIbanParams(selIbanParamQry) {
            return new Promise((resolve, reject) => {
              ExecuteQuery1(selIbanParamQry, (arresult) => {
                resolve(arresult)
              })
            })
          }

          function CheckTranStatus(arrprocesslog, final_process_status, final_status, lclinstrm, PRCT_ID) {
            return new Promise(async (resolve, reject) => {
              let Amount = arrprocesslog[0].intrbk_sttlm_amnt
              let selIbanParamQry = `select * from core_nc_system_setup where param_category='ELPASO_PREPAID_CARD' and param_Code='BRANCH_CODES'`
              let ChkPrecdtCard = await CheckCreditPrepaid(await getIbanParams(selIbanParamQry), arrprocesslog, lclinstrm)
              if (ChkPrecdtCard.apitype == 0) {
                let TrnAldposted = await CheckTranAlrdyPosted(arrprocesslog[0].uetr)
                if (TrnAldposted == 'CallAuthPosting') {
                  resolve('CallAuthPosting')
                } else {

                  let transactionId = ''
                  let Amount = arrprocesslog[0].fx_resv_text3
                  if (params.eligible_status != 'OP_BCT_RET_RESERVED' && params.eligible_process_status != 'BCTOutwardReturnReserved') {
                    if (TrnAldposted.request_data_json.header && TrnAldposted.request_data_json.header.id) {
                      transactionId = TrnAldposted.request_data_json.header.id;
                    } else if (TrnAldposted.request_data_json.dataArea && TrnAldposted.request_data_json.dataArea.offlineTransactionReferenceNumber) {
                      transactionId = TrnAldposted.request_data_json.dataArea.offlineTransactionReferenceNumber;
                    } else {
                      transactionId = ''
                    }

                    let revAcctInfrm = await TakeIbanInfm(arrprocesslog)
                    let CheckorgPvt = await TakeOrgPvt(arrprocesslog)


                    revAcctInfrm.type = 'IBAN'
                    let Pacs008 = await fn_doPac008apicall(arrprocesslog, revAcctInfrm, CheckorgPvt, Amount, transactionId)
                    if (Pacs008 == 'SUCCESS') {
                      GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', '')
                    } else {
                      objresponse.status = "FAILURE"
                      objresponse.errdata = "Pacs008 api call not success"
                      sendResponse(null, objresponse)
                    }
                  } else {
                    let tranUpdateStatus = await GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', 'BCT')
                  }

                }

              } else {
                let IpUETR = await TakeIpUetr(arrprocesslog)
                let ElpasoApi
                let CheckorgPvt = ''
                let T24Api
                let Pacs008Api
                let ApiVal
                let Handleerror
                let extIdentValue = 5
                let CheckAlredyApiCalled = await CheckAldprcsTran(arrprocesslog, ChkPrecdtCard)
                let reversalNo = await TakeReversalId(IpUETR, ChkPrecdtCard, arrprocesslog)
                let TakeActcountInformation = await PreCrediAcctInfm(arrprocesslog, ChkPrecdtCard, IpUETR)
                TakeActcountInformation.type = 'Credit or Prepaid'
                if (CheckAlredyApiCalled.apicalls == 1) {
                  let ppActNo = await getppacno(arrprocesslog,IpUETR)
                  if (CheckAlredyApiCalled.Callapi == 'Call ELPASO Posting') {

                    ElpasoApi = await CallPrepaidEplapsoApi(arrprocesslog, lclinstrm, extIdentValue, reversalNo, ChkPrecdtCard, ppActNo)

                    if (ElpasoApi.status == 'SUCCESS' || ElpasoApi.status == 'Success') {
                      // let transactionId = ElpasoApi.response.header.id || ElpasoApi.response.dataArea.offlineTransactionReferenceNumber || '';
                      let transactionId = ''


                      if (ElpasoApi && ElpasoApi.response) {
                        if (ElpasoApi.response.header && ElpasoApi.response.header.id) {
                          transactionId = ElpasoApi.response.header.id;
                        } else if (ElpasoApi.response.dataArea && ElpasoApi.response.dataArea.offlineTransactionReferenceNumber) {
                          transactionId = ElpasoApi.response.dataArea.offlineTransactionReferenceNumber;
                        } else {
                          transactionId = ''
                        }
                      }
                      let updateoldIPUetr = await fnupdateoldIPUetr(reversalNo.retryCount, IpUETR)
                      if (params.eligible_status != 'OP_BCT_RET_RESERVED' && params.eligible_process_status != 'BCTOutwardReturnReserved') {
                        Pacs008Api = await fn_doPac008apicall(arrprocesslog, TakeActcountInformation, CheckorgPvt, Amount, transactionId)
                        if (Pacs008Api == 'SUCCESS') {
                          GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', '')
                        } else {
                          objresponse.status = "FAILURE"
                          objresponse.errdata = "Pacs008 api call not success"
                          sendResponse(null, objresponse)
                        }
                      } else {
                        let tranUpdateStatus = await GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', 'BCT')
                      }


                    } else {
                      ApiVal = 'Prepaid Card Posting'
                      Handleerror = await SendErrormsg(ElpasoApi, ApiVal)
                    }
                  } else if (CheckAlredyApiCalled.Callapi == 'Call T24 Posting') {
                    T24Api = await CallPrepaidT24Api(arrprocesslog, lclinstrm, extIdentValue, reversalNo, ChkPrecdtCard)
                    if (T24Api.status == 'SUCCESS' || T24Api.status == 'Success') {
                      // let transactionId = CheckAlredyApiCalled.request_data_json.response.header.id || CheckAlredyApiCalled.request_data_json.response.dataArea.offlineTransactionReferenceNumber || '';
                      let transactionId = ''


                      if (T24Api && T24Api.response) {
                        if (T24Api.response.header && T24Api.response.header.id) {
                          transactionId = T24Api.response.header.id;
                        } else if (T24Api.response.dataArea && T24Api.response.dataArea.offlineTransactionReferenceNumber) {
                          transactionId = T24Api.response.dataArea.offlineTransactionReferenceNumber;
                        } else {
                          transactionId = ''
                        }
                      }
                      if (params.eligible_status != 'OP_BCT_RET_RESERVED' && params.eligible_process_status != 'BCTOutwardReturnReserved') {
                        Pacs008Api = await fn_doPac008apicall(arrprocesslog, TakeActcountInformation, CheckorgPvt, Amount, transactionId)
                        if (Pacs008Api == 'SUCCESS') {
                          GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', '')
                        } else {
                          objresponse.status = "FAILURE"
                          objresponse.errdata = "Pacs008 api call not success"
                          sendResponse(null, objresponse)
                        }
                      } else {
                        let tranUpdateStatus = await GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', 'BCT')
                      }

                    } else {
                      ApiVal = 'Prepaid Card Pool Posting'
                      Handleerror = await SendErrormsg(T24Api, ApiVal)
                    }
                  } else {
                    //  let transactionId =  response_jsonCheckAlredyApiCalled.request_data_json.response.header.id || CheckAlredyApiCalled.request_data_json.response.dataArea.offlineTransactionReferenceNumber || '';
                    let transactionId = ''

                    if (CheckAlredyApiCalled.response_json.header && CheckAlredyApiCalled.response_json.header.id) {
                      transactionId = CheckAlredyApiCalled.response_json.header.id;
                    } else if (CheckAlredyApiCalled.response_json.dataArea && CheckAlredyApiCalled.response_json.dataArea.offlineTransactionReferenceNumber) {
                      transactionId = CheckAlredyApiCalled.response_json.dataArea.offlineTransactionReferenceNumber;
                    } else {
                      transactionId = ''
                    }
                    if (params.eligible_status != 'OP_BCT_RET_RESERVED' && params.eligible_process_status != 'BCTOutwardReturnReserved') {
                      Pacs008Api = await fn_doPac008apicall(arrprocesslog, TakeActcountInformation, CheckorgPvt, Amount, transactionId)
                      if (Pacs008Api == 'SUCCESS') {
                        GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', '')
                      } else {
                        objresponse.status = "FAILURE"
                        objresponse.errdata = "Pacs008 api call not success"
                        sendResponse(null, objresponse)
                      }
                    } else {
                      let tranUpdateStatus = await GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', 'BCT')
                    }

                  }
                } else {
                  if (CheckAlredyApiCalled.Callapi == 'Call ELPASO Posting') {
                    ElpasoApi = await CallCreditEplapsoApi(arrprocesslog, lclinstrm, extIdentValue, reversalNo)
                    if (ElpasoApi.status == 'SUCCESS' || ElpasoApi.status == 'Success') {
                      let updateoldIPUetr = await fnupdateoldIPUetr(reversalNo.retryCount, IpUETR)
                      //   let transactionId = ElpasoApi.response.header.id || ElpasoApi.response.dataArea.offlineTransactionReferenceNumber || '';
                      let transactionId = ''
                      if (ElpasoApi && ElpasoApi.response) {
                        if (ElpasoApi.response.header && ElpasoApi.response.header.id) {
                          transactionId = ElpasoApi.response.header.id;
                        } else if (ElpasoApi.response.dataArea && ElpasoApi.response.dataArea.offlineTransactionReferenceNumber) {
                          transactionId = ElpasoApi.response.dataArea.offlineTransactionReferenceNumber;
                        } else {
                          transactionId = ''
                        }
                      }
                      if (params.eligible_status != 'OP_BCT_RET_RESERVED' && params.eligible_process_status != 'BCTOutwardReturnReserved') {
                        Pacs008Api = await fn_doPac008apicall(arrprocesslog, TakeActcountInformation, CheckorgPvt, Amount, transactionId)
                        if (Pacs008Api == 'SUCCESS') {
                          GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', '')
                        } else {
                          objresponse.status = "FAILURE"
                          objresponse.errdata = "Pacs008 api call not success"
                          sendResponse(null, objresponse)
                        }
                      } else {
                        let tranUpdateStatus = await GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', 'BCT')
                      }

                    } else {
                      ApiVal = 'Credit Card Posting'
                      Handleerror = await SendErrormsg(ElpasoApi, ApiVal)
                    }
                  } else if (CheckAlredyApiCalled.Callapi == 'Call T24 Posting') {

                    T24Api = await CallCreditT24Api(arrprocesslog, lclinstrm, extIdentValue, reversalNo)
                    if (T24Api.status == 'SUCCESS' || T24Api.status == 'Success') {
                      //   let transactionId = CheckAlredyApiCalled.request_data_json.response.header.id || CheckAlredyApiCalled.request_data_json.response.dataArea.offlineTransactionReferenceNumber || '';
                      let transactionId = ''


                      if (T24Api && T24Api.response) {
                        if (T24Api.response.header && T24Api.response.header.id) {
                          transactionId = T24Api.response.header.id;
                        } else if (T24Api.response.dataArea && T24Api.response.dataArea.offlineTransactionReferenceNumber) {
                          transactionId = T24Api.response.dataArea.offlineTransactionReferenceNumber;
                        } else {
                          transactionId = ''
                        }
                      }
                      if (params.eligible_status != 'OP_BCT_RET_RESERVED' && params.eligible_process_status != 'BCTOutwardReturnReserved') {
                        Pacs008Api = await fn_doPac008apicall(arrprocesslog, TakeActcountInformation, CheckorgPvt, Amount, transactionId)
                        if (Pacs008Api == 'SUCCESS') {
                          GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', '')
                        } else {
                          objresponse.status = "FAILURE"
                          objresponse.errdata = "Pacs008 api call not success"
                          sendResponse(null, objresponse)
                        }
                      } else {
                        let tranUpdateStatus = await GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', 'BCT')
                      }

                    } else {
                      ApiVal = 'Credit Card Pool Posting'
                      Handleerror = await SendErrormsg(T24Api)
                    }
                  } else {
                    // let transactionId = response_jsonCheckAlredyApiCalled.request_data_json.response.header.id || CheckAlredyApiCalled.request_data_json.response.dataArea.offlineTransactionReferenceNumber || '';
                    let transactionId = ''

                    if (CheckAlredyApiCalled.response_json.header && CheckAlredyApiCalled.response_json.header.id) {
                      transactionId = CheckAlredyApiCalled.response_json.header.id;
                    } else if (CheckAlredyApiCalled.response_json.dataArea && CheckAlredyApiCalled.response_json.dataArea.offlineTransactionReferenceNumber) {
                      transactionId = CheckAlredyApiCalled.response_json.dataArea.offlineTransactionReferenceNumber;
                    } else {
                      transactionId = ''
                    }
                    if (params.eligible_status != 'OP_BCT_RET_RESERVED' && params.eligible_process_status != 'BCTOutwardReturnReserved') {
                      Pacs008Api = await fn_doPac008apicall(arrprocesslog, TakeActcountInformation, CheckorgPvt, Amount, transactionId)
                      if (Pacs008Api == 'SUCCESS') {
                        GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', '')
                      } else {
                        objresponse.status = "FAILURE"
                        objresponse.errdata = "Pacs008 api call not success"
                        sendResponse(null, objresponse)
                      }
                    } else {
                      let tranUpdateStatus = await GetTranUpdate(final_process_status, final_status, PRCT_ID, Amount, '', 'BCT')
                    }

                  }
                }
              }

            })
          }

          function SendErrormsg(errormsg, apiName) {
            return new Promise((resolve, reject) => {
              objresponse.status = "FAILURE"
              objresponse.errdata = apiName + 'Fail Error Code' + errormsg.error_code
              sendResponse(null, objresponse);
            })
          }
          
          function getppacno(arrprocesslog,IpUETR) {
            return new Promise((resolve, reject) => {
              let chkData = `select account_number from <tran_db>.npss_trn_process_log where uetr='${IpUETR}' and process_name='Prepaid Card Validation'`;
              let chkDataArc = `select account_number from <arc_tran_db>.npss_trn_process_log where uetr='${IpUETR}' and process_name='Prepaid Card Validation'`;

              ExecuteQuery1(chkData, async function (arrChkdata) {
                if (arrChkdata.length > 0) {
                  resolve(arrChkdata[0].account_number)
                } else {
                  ExecuteQuery1(chkDataArc, async function (arrChkarcdata) {
                    if (arrChkarcdata.length > 0) {
                      resolve(arrChkarcdata[0].account_number)
                    }
                  })
                }
              })
            })
          }

          function TakeIbanInfm(arrprocesslog) {
            return new Promise((resolve, reject) => {
              let parameter = {}
              var TakeAcctInf = `select customer_id,birthdate,cityofbirth,countryofbirth,emirates_code,account_name,Alternate_Account_Type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslog[0].dbtr_iban}'`
              ExecuteQuery1(TakeAcctInf, function (arrActInf) {
                if (arrActInf.length > 0) {
                  if (arrActInf[0].birthdate != "" && arrActInf[0].birthdate != undefined && arrActInf[0].birthdate != null) {
                    parameter.account_number = arrActInf[0].account_number || '',
                      parameter.company_code = arrActInf[0].company_code || '',
                      parameter.inactive_marker = arrActInf[0].inactive_marker || '',
                      parameter.currency = arrActInf[0].currency || '',
                      parameter.alternate_account_id = arrActInf[0].alternate_account_id || ''
                    parameter.account_name = arrActInf[0].account_name || '',
                      parameter.emirates_code = arrActInf[0].emirates_code || '',
                      parameter.countryofbirth = arrActInf[0].countryofbirth || 'XX',
                      parameter.cityofbirth = arrActInf[0].cityofbirth || 'XXXXX'
                    parameter.birthdate = arrActInf[0].birthdate || ''
                    parameter.customer_id = arrActInf[0].customer_id || '',
                      parameter.department_code = arrprocesslog[0].department_code || 'DEFAULT'
                    resolve(parameter)
                  } else {
                    objresponse.status = "FAILURE"
                    objresponse.errdata = "birthdate is missing"
                    sendResponse(null, objresponse)
                  }


                } else {

                  objresponse.status = "FAILURE"
                  objresponse.errdata = "No Data found in accounts table for pacs008"
                  sendResponse(null, objresponse)
                }

              })
            })
          }

          function PreCrediAcctInfm(arrprocesslog, ChkPrecdtCard, IpUETR) {
            return new Promise(async (resolve, reject) => {
              let AcctInformations = {}
              let chkData = `select * from <tran_db>.npss_trn_process_log where uetr = '${IpUETR}'`
              let chkDataArc = `select * from <arc_tran_db>.npss_trn_process_log where uetr = '${IpUETR}'`
              ExecuteQuery1(chkData, async function (arrChkdata) {
                if (arrChkdata.length > 0) {
                  if (ChkPrecdtCard.apitype == 1) {
                    let CrfprepaidCard = arrChkdata.filter((x) => {
                      return (x.status == 'IP_RCT_PC_T24_POSTING_SUCCESS' || x.status == 'IP_BCT_PC_T24_POSTING_SUCCESS')
                    })
                    if (CrfprepaidCard.length > 0) {
                      let chkPrepaidPassedTrn = arrChkdata.filter((x) => {
                        return ((x.status == 'IP_RCT_PC_PASSED' || x.status == 'IP_BCT_PC_PASSED') && x.process_name == 'Prepaid Card Validation')
                      })
                      if (chkPrepaidPassedTrn.length > 0) {
                        if (chkPrepaidPassedTrn[0].emiratesid == null || chkPrepaidPassedTrn[0].emiratesid == '') {
                          objresponse.status = 'FAILURE'
                          objresponse.errdata = 'Private Id is Missing for Prepaid Card'
                          sendResponse(null, objresponse)
                        } else if ((chkPrepaidPassedTrn[0].dateofbirth == null || chkPrepaidPassedTrn[0].dateofbirth == '')
                          || (chkPrepaidPassedTrn[0].customername == null || chkPrepaidPassedTrn[0].customername == '')
                        ) {
                          objresponse.status = 'FAILURE'
                          objresponse.errdata = 'dateofbirth/customername field is missing'
                          sendResponse(null, objresponse)
                        }
                        else {
                          AcctInformations.privatesId = chkPrepaidPassedTrn[0].emiratesid
                          AcctInformations.birthdate = chkPrepaidPassedTrn[0].dateofbirth
                          AcctInformations.cityofbirth = chkPrepaidPassedTrn[0].cityofbirth
                          AcctInformations.countryofbirth = chkPrepaidPassedTrn[0].countryofbirth
                          AcctInformations.account_name = chkPrepaidPassedTrn[0].customername
                          AcctInformations.extpersonidcode = 'NIDN'
                          resolve(AcctInformations)
                        }


                      } else {
                        objresponse.status = 'FAILURE'
                        objresponse.errdata = 'No data Found for status IP_RCT_PC_PASSED or IP_BCT_PC_PASSED'
                        sendResponse(null, objresponse)
                      }
                    } else {
                      objresponse.status = 'FAILURE'
                      objresponse.errdata = 'No data Found in Trn Process log Table for IP UETR'
                      sendResponse(null, objresponse)
                    }
                  } else {
                    let chkCreditTrn = arrChkdata.filter((x) => {
                      return (x.status == 'IP_RCT_CC_T24_POSTING_SUCCESS' || x.status == 'IP_BCT_CC_T24_POSTING_SUCCESS')
                    })
                    if (chkCreditTrn.length > 0) {
                      let chkCreditPassedTrn = arrChkdata.filter((x) => {
                        return ((x.status == 'IP_RCT_CC_POSTING_SUCCESS' || x.status == 'IP_BCT_CC_POSTING_SUCCESS') && (x.process_name == 'Credit Card Posting'))
                      })
                      if (chkCreditPassedTrn.length > 0) {
                        let TakAcctData = `select * from core_nc_cbs_accounts where customer_id = '${chkCreditPassedTrn[0].customerid}'`
                        ExecuteQuery1(TakAcctData, async function (arractResult) {
                          if (arractResult.length > 0) {
                            AcctInformations.birthdate = arractResult[0].birthdate
                            AcctInformations.cityofbirth = arractResult[0].cityofbirth
                            AcctInformations.countryofbirth = arractResult[0].cityofbirth
                            AcctInformations.account_name = arractResult[0].account_name
                            let PvtId = await PreparePVTcode(arractResult, arrprocesslog)
                            AcctInformations.privateId = PvtId.FormPvtid || ''
                            if (arractResult[0].resident_flag == 'Y') {
                              AcctInformations.extpersonidcode = 'NIDN'
                              AcctInformations.issrtype = 'AE'
                            } else {
                              AcctInformations.extpersonidcode = 'CCPT'
                              AcctInformations.issrtype = arractResult[0].nationality_country_code || ''
                            }
                            resolve(AcctInformations)
                          } else {
                            objresponse.status = 'FAILURE'
                            objresponse.errdata = 'No data Found in cbs accounts table for credit  Card   ' + chkCreditPassedTrn[0].customerid
                            sendResponse(null, objresponse)
                          }
                        })
                      } else {
                        objresponse.status = 'FAILURE'
                        objresponse.errdata = 'No data Found for status IP_RCT_CC_POSTING_SUCCESS or IP_BCT_CC_POSTING_SUCCESS'
                        sendResponse(null, objresponse)
                      }
                    } else {
                      objresponse.status = 'FAILURE'
                      objresponse.errdata = 'No data Found in Trn Process log Table for IP UETR'
                      sendResponse(null, objresponse)
                    }
                  }
                } else {
                  ExecuteQuery1(chkDataArc, async function (arrChkdata) {
                    if (arrChkdata.length > 0) {
                      if (ChkPrecdtCard.apitype == 1) {
                        let CrfprepaidCard = arrChkdata.filter((x) => {
                          return (x.status == 'IP_RCT_PC_T24_POSTING_SUCCESS' || x.status == 'IP_BCT_PC_T24_POSTING_SUCCESS')
                        })
                        if (CrfprepaidCard.length > 0) {
                          let chkPrepaidPassedTrn = arrChkdata.filter((x) => {
                            return ((x.status == 'IP_RCT_PC_PASSED' || x.status == 'IP_BCT_PC_PASSED') && x.process_name == 'Prepaid Card Validation')
                          })
                          if (chkPrepaidPassedTrn.length > 0) {
                            if (chkPrepaidPassedTrn[0].emiratesid == null || chkPrepaidPassedTrn[0].emiratesid == '') {
                              objresponse.status = 'FAILURE'
                              objresponse.errdata = 'Private Id is Missing for Prepaid Card'
                              sendResponse(null, objresponse)
                            } else if ((chkPrepaidPassedTrn[0].dateofbirth == null || chkPrepaidPassedTrn[0].dateofbirth == '')
                              || (chkPrepaidPassedTrn[0].customername == null || chkPrepaidPassedTrn[0].customername == '')
                            ) {
                              objresponse.status = 'FAILURE'
                              objresponse.errdata = 'dateofbirth/customername field is missing'
                              sendResponse(null, objresponse)
                            }
                            else {
                              AcctInformations.privatesId = chkPrepaidPassedTrn[0].emiratesid
                              AcctInformations.birthdate = chkPrepaidPassedTrn[0].dateofbirth
                              AcctInformations.cityofbirth = chkPrepaidPassedTrn[0].cityofbirth
                              AcctInformations.countryofbirth = chkPrepaidPassedTrn[0].countryofbirth
                              AcctInformations.account_name = chkPrepaidPassedTrn[0].customername
                              AcctInformations.extpersonidcode = 'NIDN'
                              resolve(AcctInformations)
                            }


                          } else {
                            objresponse.status = 'FAILURE'
                            objresponse.errdata = 'No data Found for status IP_RCT_PC_PASSED or IP_BCT_PC_PASSED'
                            sendResponse(null, objresponse)
                          }
                        } else {
                          objresponse.status = 'FAILURE'
                          objresponse.errdata = 'No data Found in Trn Process log Table for IP UETR'
                          sendResponse(null, objresponse)
                        }
                      } else {
                        let chkCreditTrn = arrChkdata.filter((x) => {
                          return (x.status == 'IP_RCT_CC_T24_POSTING_SUCCESS' || x.status == 'IP_BCT_CC_T24_POSTING_SUCCESS')
                        })
                        if (chkCreditTrn.length > 0) {
                          let chkCreditPassedTrn = arrChkdata.filter((x) => {
                            return ((x.status == 'IP_RCT_CC_POSTING_SUCCESS' || x.status == 'IP_BCT_CC_POSTING_SUCCESS') && (x.process_name == 'Credit Card Posting'))
                          })
                          if (chkCreditPassedTrn.length > 0) {
                            let TakAcctData = `select * from core_nc_cbs_accounts where customer_id = '${chkCreditPassedTrn[0].customerid}'`
                            ExecuteQuery1(TakAcctData, async function (arractResult) {
                              if (arractResult.length > 0) {
                                AcctInformations.birthdate = arractResult[0].birthdate
                                AcctInformations.cityofbirth = arractResult[0].cityofbirth
                                AcctInformations.countryofbirth = arractResult[0].cityofbirth
                                AcctInformations.account_name = arractResult[0].account_name
                                let PvtId = await PreparePVTcode(arractResult, arrprocesslog)
                                AcctInformations.privateId = PvtId.FormPvtid || ''
                                if (arractResult[0].resident_flag == 'Y') {
                                  AcctInformations.extpersonidcode = 'NIDN'
                                  AcctInformations.issrtype = 'AE'
                                } else {
                                  AcctInformations.extpersonidcode = 'CCPT'
                                  AcctInformations.issrtype = arractResult[0].nationality_country_code || ''
                                }
                                resolve(AcctInformations)
                              } else {
                                objresponse.status = 'FAILURE'
                                objresponse.errdata = 'No data Found in cbs accounts table for credit  Card   ' + chkCreditPassedTrn[0].customerid
                                sendResponse(null, objresponse)
                              }
                            })
                          } else {
                            objresponse.status = 'FAILURE'
                            objresponse.errdata = 'No data Found for status IP_RCT_CC_POSTING_SUCCESS or IP_BCT_CC_POSTING_SUCCESS'
                            sendResponse(null, objresponse)
                          }
                        } else {
                          objresponse.status = 'FAILURE'
                          objresponse.errdata = 'No data Found in Trn Process log Table for IP UETR'
                          sendResponse(null, objresponse)
                        }
                      }
                    } else {
                      objresponse.status = 'FAILURE'
                      objresponse.errdata = 'No data Found in Trn Process log Table for IP UETR'
                      sendResponse(null, objresponse)
                    }


                  })



                }

              })
            })
          }



          function findBCTRCT(IpUETR) {
            return new Promise((resolve, reject) => {
              let chkData = `select process_group from <tran_db>.npss_transactions where uetr = '${IpUETR}'`
              let chkDataArc = `select process_group from <arc_tran_db>.npss_transactions where uetr = '${IpUETR}'`
              ExecuteQuery1(chkData, async function (arrChkdata) {
                if (arrChkdata.length > 0) {
                  resolve(arrChkdata[0].process_group =='BCT')
                }
                else {
                  ExecuteQuery1(chkDataArc, async function (arrChkdata) {
                    if (arrChkdata.length > 0) {
                      resolve(arrChkdata[0].process_group =='BCT')
                    } else {
                      objresponse.status = 'FAILURE'
                      objresponse.errdata = 'No data Found in Trn Process log Table for IP UETR to find BCT or RCT'
                      sendResponse(null, objresponse)
                    }
                  })
                }
              })
            })
          }

          function TakeReversalId(IpUETR, ChkPrecdtCard, arrprocesslog) {
            return new Promise((resolve, reject) => {
              let elistatus
              let parameter = {}
              let call = async () => {
                isBCT = await findBCTRCT(IpUETR)
                if (ChkPrecdtCard.apitype == 1) {
                  if (isBCT)
                    elistatus = 'IP_BCT_PC_T24_POSTING_SUCCESS'
                  else
                    elistatus = 'IP_RCT_PC_T24_POSTING_SUCCESS'
                } else {
                  if (isBCT)
                    elistatus = 'IP_BCT_CC_T24_POSTING_SUCCESS'
                  else
                    elistatus = 'IP_RCT_CC_T24_POSTING_SUCCESS'
                }
                var TakeCount = `select CAST(ext_iden_retry_value AS INTEGER) from <tran_db>.npss_trn_process_log where   uetr ='${IpUETR}' and  status='${elistatus}'`
                var TakeCountArc = `select CAST(ext_iden_retry_value AS INTEGER) from <arc_tran_db>.npss_trn_process_log where   uetr ='${IpUETR}' and  status='${elistatus}'`
                //  var TakeCount = `select COUNT(npsstpl_id) as counts from npss_trn_process_log where status = '${elistatus}' and uetr = '${IpUETR}'`
                ExecuteQuery1(TakeCount, function (arrCount) {
                  if (arrprocesslog[0].clrsysref) {
                    if (arrCount.length > 0) {
                      if ((Number(arrCount[0].ext_iden_retry_value) < 10) || (arrCount[0].ext_iden_retry_value == null)) {
                        var count = Number(arrCount[0].ext_iden_retry_value)
                        count++
                        parameter.retryCount = count
                        parameter.reverseId = arrprocesslog[0].clrsysref + '.0' + count
                        resolve(parameter)
                      } else {
                        var count = Number(arrCount[0].ext_iden_retry_value)
                        count++
                        parameter.retryCount = count
                        parameter.reverseId = arrprocesslog[0].clrsysref + '.' + count
                        resolve(parameter)
                      }

                    } else {
                      ExecuteQuery1(TakeCountArc, function (arrCount) {
                        if (arrCount.length > 0) {
                          if ((Number(arrCount[0].ext_iden_retry_value) < 10) || (arrCount[0].ext_iden_retry_value == null)) {
                            var count = Number(arrCount[0].ext_iden_retry_value)
                            count++
                            parameter.retryCount = count
                            parameter.reverseId = arrprocesslog[0].clrsysref + '.0' + count
                            resolve(parameter)
                          } else {
                            var count = Number(arrCount[0].ext_iden_retry_value)
                            count++
                            parameter.retryCount = count
                            parameter.reverseId = arrprocesslog[0].clrsysref + '.' + count
                            resolve(parameter)
                          }
                        } else {
                          objresponse.status = "FAILURE"
                          objresponse.errdata = "ext_iden_retry_value  is Missing"
                          sendResponse(null, objresponse)
                        }

                      })

                    }
                  } else {
                    objresponse.status = "FAILURE"
                    objresponse.errdata = "Prepaid or Credit clrsysRef  is Missing"
                    sendResponse(null, objresponse)
                  }


                })

              }
              call()

            })
          }

          function CheckTranAlrdyPosted(uetr) {
            return new Promise((resolve, reject) => {
              var CheckTrnPosted = `select fn_pcidss_decrypt(response_data_json,$PCIDSS_KEY ) as res_data_json,* from npss_trn_process_log where process_name = 'Manual Fund AUTH Posting' and status = 'OP_RCT_MAN_AUTH_POSTING_SUCCESS' and uetr = '${uetr}'`
              ExecuteQuery1(CheckTrnPosted, function (arrTrndetails) {
                if (arrTrndetails.length > 0) {
                  let retriveDet = {}
                  retriveDet.request_data_json = JSON.parse(arrTrndetails[0].res_data_json)
                  retriveDet.status = 'CallPacs008'
                  resolve(retriveDet)
                } else {
                  resolve('CallAuthPosting')
                }
              })
            })
          }
          // Function to check Api Calls 
          function CheckAldprcsTran(arrprocesslog, ChkPrecdtCard) {
            return new Promise((resolve, reject) => {
              var CheckElpasoPosting
              var RetrnParam = {}
              if (ChkPrecdtCard.apitype == 1) {
                CheckElpasoPosting = `select * from npss_trn_process_log where status = 'IP_RCT_REV_PC_POSTING_SUCCESS' and uetr = '${arrprocesslog[0].uetr}'`
              } else {
                CheckElpasoPosting = `select * from npss_trn_process_log where status = 'IP_RCT_REV_CC_POSTING_SUCCESS' and uetr = '${arrprocesslog[0].uetr}'`
              }
              ExecuteQuery1(CheckElpasoPosting, function (arrelpaso) {
                if (arrelpaso.length > 0) {
                  var checkT24posting
                  if (ChkPrecdtCard.apitype == 1) {
                    checkT24posting = `select fn_pcidss_decrypt(response_data_json,$PCIDSS_KEY ) as response_json,* from npss_trn_process_log where status = 'IP_RCT_REV_PC_T24_POSTING_SUCCESS' and uetr = '${arrprocesslog[0].uetr}'`
                  } else {
                    checkT24posting = `select fn_pcidss_decrypt(response_data_json,$PCIDSS_KEY ) as response_json,* from npss_trn_process_log where status = 'IP_RCT_REV_CC_T24_POSTING_SUCCESS' and uetr = '${arrprocesslog[0].uetr}'`
                  }
                  ExecuteQuery1(checkT24posting, function (arrT24post) {
                    if (arrT24post.length > 0) {
                      RetrnParam.response_json = JSON.parse(checkT24posting[0].response_json)
                      RetrnParam.apicalls = ChkPrecdtCard.apitype
                      RetrnParam.Callapi = 'Call Pacs004 Api'
                      resolve(RetrnParam)
                    } else {
                      //RetrnParam.response_json = arrelpaso[0].response_data_json
                      RetrnParam.apicalls = ChkPrecdtCard.apitype
                      RetrnParam.Callapi = 'Call T24 Posting'
                      resolve(RetrnParam)
                    }
                  })

                } else {
                  RetrnParam.apicalls = ChkPrecdtCard.apitype
                  RetrnParam.Callapi = 'Call ELPASO Posting'
                  resolve(RetrnParam)
                }

              })

            })
          }

          function TakeOrgPvt(arrprocesslog) {
            return new Promise((resolve, reject) => {
              let PrepareParam
              let FianlData = {}
              let TakeCbsAcct = `select * from core_nc_cbs_accounts where alternate_account_id = '${arrprocesslog[0].dbtr_iban}'`
              ExecuteQuery1(TakeCbsAcct, function (arrcbsAct) {
                if (arrcbsAct.length > 0) {
                  let Chkorgorpvt = `select cb_cust_class from core_nc_cust_classif where target_id =  '${arrcbsAct[0].target_code}' and sector_id = '${arrcbsAct[0].sector_code}'`
                  ExecuteQuery1(Chkorgorpvt, async function (arcustif) {
                    if (arcustif.length > 0 && arcustif[0].cb_cust_class != null) {
                      if (arcustif[0].cb_cust_class == 'Organisation') {
                        PrepareParam = await PrepareOrgcode(arrcbsAct, arrprocesslog)

                        if (arrcbsAct[0].trade_license_number == null || arrcbsAct[0].trade_license_number == undefined || arrcbsAct[0].trade_license_number == '') {
                          objresponse.status = "FAILURE"
                          objresponse.errdata = "trade_license_number  value is not found"
                          sendResponse(null, objresponse)
                        } if (arrcbsAct[0].emirates_code == null || arrcbsAct[0].emirates_code == undefined || arrcbsAct[0].emirates_code == '') {
                          objresponse.status = "FAILURE"
                          objresponse.errdata = "Emirates Code  value is not found"
                          sendResponse(null, objresponse)
                        } else {
                          let emiratescode = arrcbsAct[0].emirates_code
                          let formation = emiratescode + '-' + PrepareParam.cbuae_issur_code + '-' + arrcbsAct[0].trade_license_number + '-' + PrepareParam.destination_economic_activity_code
                          FianlData.type = 'Organisation'
                          FianlData.code = formation
                          FianlData.cbuae_issur_code = PrepareParam.cbuae_issur_code
                          resolve(FianlData)
                        }
                      } else {
                        PrepareParam = await PreparePVTcode(arrcbsAct, arrprocesslog)
                        FianlData.type = 'Private'
                        FianlData.extpersonidcode = PrepareParam.extpersonidcode
                        FianlData.code = PrepareParam.FormPvtid
                        FianlData.issrtype = PrepareParam.issrtype || ''
                        resolve(FianlData)
                      }
                    } else {
                      objresponse.status = "FAILURE"
                      objresponse.errdata = "cb_cust_class value not found"
                      sendResponse(null, objresponse)
                    }
                  })

                } else {
                  objresponse.status = "FAILURE"
                  objresponse.errdata = "No data found in core_nc_cbs_accounts"
                  sendResponse(null, objresponse)
                }

              })
            })
          }

          function PrepareOrgcode(arrcbsAct, arrprocesslog) {
            return new Promise((resolve, reject) => {
              let OrganParam = {}
              let Takecbuisuercode = `select cbuae_issur_code from core_nc_issuer_cd_mapping where UPPER(t24_reg_body)= UPPER('${arrcbsAct[0].issuer_type_code}')`
              ExecuteQuery1(Takecbuisuercode, function (cbuissuercode) {
                if (cbuissuercode.length > 0 && (cbuissuercode[0].cbuae_issur_code != null && cbuissuercode[0].cbuae_issur_code != undefined && cbuissuercode[0].cbuae_issur_code != '')) {
                  let TakeEconCode = `select destination_economic_activity_code from core_nc_eco_actvty_mapping where source_economic_activity_code = '${arrcbsAct[0].industry}'`
                  ExecuteQuery1(TakeEconCode, function (economiccode) {
                    if (economiccode.length > 0 && (economiccode[0].destination_economic_activity_code != null && economiccode[0].destination_economic_activity_code != '' && economiccode[0].destination_economic_activity_code != undefined)) {
                      OrganParam.cbuae_issur_code = cbuissuercode[0].cbuae_issur_code
                      OrganParam.destination_economic_activity_code = economiccode[0].destination_economic_activity_code
                      resolve(OrganParam)
                    } else {
                      objresponse.status = "FAILURE"
                      objresponse.errdata = "destination_economic_activity_code not found"
                      sendResponse(null, objresponse)
                    }
                  })
                } else {
                  objresponse.status = "FAILURE"
                  objresponse.errdata = "cbuae_issur_code not found"
                  sendResponse(null, objresponse)
                }
              })
            })
          }

          function PreparePVTcode(arrcbsAct, arrprocesslog) {
            return new Promise((resolve, reject) => {
              let PvtParam = {}
              let TakeEconCode = `select destination_economic_activity_code from core_nc_eco_actvty_mapping where source_economic_activity_code = '${arrcbsAct[0].industry}'`
              ExecuteQuery1(TakeEconCode, function (economiccode) {
                if (economiccode.length > 0 && (economiccode[0].destination_economic_activity_code != null || economiccode[0].destination_economic_activity_code != undefined || economiccode[0].destination_economic_activity_code != '')) {
                  let destination_economic_activity_code = economiccode[0].destination_economic_activity_code
                  let IDcode
                  let extpersonidcode
                  let issrtype
                  //  if (arrcbsAct[0].resident_flag == 'Y') {
                  //if (arrcbsAct[0].national_id != '' && arrcbsAct[0].national_id != null) {
                  // IDcode = arrcbsAct[0].national_id
                  // extpersonidcode = 'NIDN'
                  //  issrtype = 'AE'
                  // } else {
                  //  IDcode = arrcbsAct[0].legal_id
                  // extpersonidcode = 'CCPT'
                  //  issrtype = arrcbsAct[0].nationality_country_code || ''
                  //  }
                  //  } else {
                  //  IDcode = arrcbsAct[0].legal_id
                  //  extpersonidcode = 'CCPT'
                  // issrtype = arrcbsAct[0].nationality_country_code || ''
                  //}


                  if (arrcbsAct[0].resident_flag == 'Y') {
                    if ((arrcbsAct[0].national_id != '' && arrcbsAct[0].national_id != null) || (arrcbsAct[0].legal_id != '' && arrcbsAct[0].legal_id != null)) {
                      if (arrcbsAct[0].national_id != '' && arrcbsAct[0].national_id != null) {
                        IDcode = arrcbsAct[0].national_id
                        extpersonidcode = 'NIDN'
                        issrtype = 'AE'
                      } else {
                        if (arrcbsAct[0].nationality_country_code != '' && arrcbsAct[0].nationality_country_code != null && arrcbsAct[0].nationality_country_code != undefined) {
                          IDcode = arrcbsAct[0].legal_id
                          extpersonidcode = 'CCPT'
                          issrtype = arrcbsAct[0].nationality_country_code || ''
                        } else {
                          objresponse.status = "FAILURE"
                          objresponse.errdata = "nationality_country_code is Missing"
                          sendResponse(null, objresponse)
                        }

                      }
                    } else {
                      objresponse.status = "FAILURE"
                      objresponse.errdata = "National ID or Legal ID is Missing"
                      sendResponse(null, objresponse)
                    }

                  } else {
                    if (arrcbsAct[0].legal_id != '' && arrcbsAct[0].legal_id != null) {
                      if (arrcbsAct[0].nationality_country_code != '' && arrcbsAct[0].nationality_country_code != null && arrcbsAct[0].nationality_country_code != undefined) {
                        IDcode = arrcbsAct[0].legal_id
                        extpersonidcode = 'CCPT'
                        issrtype = arrcbsAct[0].nationality_country_code || ''
                      } else {
                        objresponse.status = "FAILURE"
                        objresponse.errdata = "nationality_country_code is Missing"
                        sendResponse(null, objresponse)
                      }
                    } else {
                      objresponse.status = "FAILURE"
                      objresponse.errdata = "Legal ID is Missing"
                      sendResponse(null, objresponse)
                    }

                  }


                  let Params = {}
                  Params.FormPvtid = IDcode + '-' + destination_economic_activity_code
                  Params.extpersonidcode = extpersonidcode
                  Params.issrtype = issrtype || ''
                  resolve(Params)
                } else {
                  objresponse.status = "FAILURE"
                  objresponse.errdata = "destination_economic_activity_code not found"
                  sendResponse(null, objresponse)
                }
              })
            })
          }


          function CheckCreditPrepaid(arrIbanParamDetails, arrprocesslog) { //for checking prepid or credit card
            return new Promise((resolve, reject) => {
              let apitype = {}
              if (arrprocesslog[0].dbtr_iban) {
                Iban = arrprocesslog[0].dbtr_iban.slice(-16)
                FrmIban = Iban.substring(0, 3)
                if ((arrIbanParamDetails.filter((val) => {
                  return val.param_detail == (FrmIban)
                })).length > 0) {
                  apitype.apitype = 1
                  apitype.isiban = 'Y'
                  apitype.card_sub_type = 'RATIBI'
                  resolve(apitype)
                } else {
                  if (arrprocesslog[0].cr_acct_identification && arrprocesslog[0].cr_acct_id_code == 'AIIN') {
                    var TakeacctIden = arrprocesslog[0].cr_acct_identification.substring(0, 6)
                    var checkCard = `select * from CORE_NC_CARD_BIN_SETUP where bin_number = '${TakeacctIden}' and need_sync = 'Y'`
                    ExecuteQuery1(checkCard, function (arrCradType) {
                      if (arrCradType.length) {
                        if (arrCradType[0].card_type == 'PREPAID_CARD') {
                          apitype.apitype = 1
                          apitype.isiban = 'N'
                          apitype.card_sub_type = arrCradType[0].card_sub_type
                          resolve(apitype)
                        } else {
                          apitype.apitype = 2
                          apitype.isiban = 'N'
                          apitype.card_sub_type = arrCradType[0].card_sub_type
                          resolve(apitype)
                        }
                      } else {

                        objresponse.status = "No Data in CORE_NC_CARD_BIN_SETUP for this Bin Number" + TakeacctIden
                        sendResponse(null, objresponse)
                      }

                    })
                  } else {
                    apitype.apitype = 0
                    apitype.isiban = 'N'
                    apitype.card_sub_type = ''
                    resolve(apitype)
                  }

                }

              } else {
                if (arrprocesslog[0].cr_acct_identification && arrprocesslog[0].cr_acct_id_code == 'AIIN') {
                  var TakeacctIden1 = arrprocesslog[0].cr_acct_identification.substring(0, 6)
                  var checkCard1 = `select * from CORE_NC_CARD_BIN_SETUP where bin_number = '${TakeacctIden1}' and need_sync = 'Y'`
                  ExecuteQuery1(checkCard1, function (arrCradType) {
                    if (arrCradType.length) {
                      if (arrCradType[0].card_type == 'PREPAID_CARD') {
                        apitype.apitype = 1
                        apitype.isiban = 'N'
                        apitype.card_sub_type = arrCradType[0].card_sub_type
                        resolve(apitype)
                      } else {
                        apitype.apitype = 2
                        apitype.isiban = 'N'
                        apitype.card_sub_type = arrCradType[0].card_sub_type
                        resolve(apitype)
                      }

                    } else {

                      objresponse.status = "No Data in CORE_NC_CARD_BIN_SETUP for this Bin Number" + TakeacctIden
                      sendResponse(null, objresponse)
                    }

                  })

                } else {
                  apitype.apitype = 0
                  apitype.isiban = 'N'
                  apitype.card_sub_type = ''
                  resolve(apitype)
                }

              }


            })

          }


          // Call Prepaid Elpaso Api 
          function CallPrepaidEplapsoApi(arrprocesslog, lclinstrm, extIdentValue, reversalNo, apitype, ppActNo) {
            return new Promise(async (resolve, reject) => {
              try {
                let Apiurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_IP_REV_RET_PREPAID_CARD' and param_code='URL' AND need_sync = 'Y'`;
                ExecuteQuery1(Apiurl, function (arrurl) {
                  if (arrurl.length > 0) {
                    var apiName = 'NPSS IP REV Prepaid Card'
                    var request = require('request');
                    var apiURL =
                      apiURL = arrurl[0].param_detail // apiURL + apiName
                    var options = {
                      url: apiURL,
                      timeout: 18000000,
                      method: 'POST',
                      json: {
                        "payload": {
                          "ext_iden_retry_value": extIdentValue || '',
                          "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                          "hdr_created_date": arrprocesslog[0].hdr_created_date || '',
                          "hdr_total_records": arrprocesslog[0].hdr_total_records || '',
                          "hdr_total_amount": arrprocesslog[0].hdr_total_amount || '',
                          "hdr_settlement_date": arrprocesslog[0].hdr_settlement_date || '',
                          "hdr_settlement_method": arrprocesslog[0].hdr_settlement_method || '',
                          "hdr_clearing_system": arrprocesslog[0].hdr_clearing_system || '',
                          "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                          "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                          "category_purpose": arrprocesslog[0].category_purpose || '',
                          "category_purpose_prty": arrprocesslog[0].category_purpose_prty || '',
                          "ext_purpose_code": arrprocesslog[0].ext_purpose_code || '',
                          "lclinstrm": lclinstrm || '',
                          "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                          "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',

                          "cdtr_iban": arrprocesslog[0].cdtr_iban || '',
                          "dbtr_acct_name": arrprocesslog[0].dbtr_acct_name || '',
                          "cdtr_acct_name": arrprocesslog[0].cdtr_acct_name || '',
                          "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                          "charge_bearer": arrprocesslog[0].charge_bearer || '',
                          "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                          "uetr": arrprocesslog[0].uetr || '',

                          "cr_acct_id_code": arrprocesslog[0].cr_acct_id_code || '',
                          "message_data": arrprocesslog[0].message_data || '',
                          "accp_dt_tm": arrprocesslog[0].accp_dt_tm || '',
                          "process_type": arrprocesslog[0].process_type || '',
                          "status": params.eligible_status || '',
                          "process_status": params.eligible_process_status || '',
                          "clrsysref": arrprocesslog[0].clrsysref,
                          "card_type": "PREPAID_CARD",
                          "process": "",
                          "remittance_information": arrprocesslog[0].remittance_info || '',
                          "reversal_id": reversalNo.reverseId || '',
                          "card_sub_type": apitype.card_sub_type || '',
                          "elpaso_account_number": ppActNo
                        }
                      },
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    }
                    if (apitype.isiban == 'Y') {
                      options.json.payload.isiban = 'Y'
                      options.json.payload.cr_acct_identification = arrprocesslog[0].dbtr_iban || ''
                    } else {
                      options.json.payload.cr_acct_identification = arrprocesslog[0].cr_acct_identification || ''
                    }

                    var PrintInfo = {}
                    PrintInfo.url = arrurl[0].param_detail
                    PrintInfo.uetr = arrprocesslog[0].uetr || ''
                    PrintInfo.card_type = "Prepaid Card" || ''
                    PrintInfo.reversal_id = reversalNo.reverseId || ''
                    PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                    PrintInfo.clrsysref = arrprocesslog[0].clrsysref || ''
                    reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                    request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                      if (error) {
                        reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                        sendResponse(error, null);
                      } else {
                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                        responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                        var Responsedata = JSON.parse(responseBodyFromImagingService)
                        resolve(Responsedata)
                      }
                    });
                  } else {
                    objresponse.status = "FAILURE"
                    objresponse.errdata = "Prepaid Card Url Not Found"
                    sendResponse(null, objresponse)
                  }
                })

              } catch (error) {
                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                sendResponse(error, null);
              }
            })
          }

          function CallPrepaidT24Api(arrprocesslog, lclinstrm, extIdentValue, reversalNo, apitype) {
            return new Promise((resolve, reject) => {
              try {
                let Apiurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CALL_PC_T24_POSTING' and param_code='URL' and need_sync = 'Y'`;
                ExecuteQuery1(Apiurl, function (arrurl) {
                  if (arrurl.length > 0) {
                    var apiName = 'NPSS Prepaid Card Pool Posting'
                    var request = require('request');
                    var apiURL =
                      apiURL = arrurl[0].param_detail // apiURL + apiName
                    var options = {
                      url: apiURL,
                      timeout: 18000000,
                      method: 'POST',
                      json: {
                        "payload": {
                          "ext_iden_retry_value": extIdentValue || '',
                          "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                          "hdr_created_date": arrprocesslog[0].hdr_created_date || '',
                          "hdr_total_records": arrprocesslog[0].hdr_total_records || '',
                          "hdr_total_amount": arrprocesslog[0].hdr_total_amount || '',
                          "hdr_settlement_date": arrprocesslog[0].hdr_settlement_date || '',
                          "hdr_settlement_method": arrprocesslog[0].hdr_settlement_method || '',
                          "hdr_clearing_system": arrprocesslog[0].hdr_clearing_system || '',
                          "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                          "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                          "category_purpose": arrprocesslog[0].category_purpose || '',
                          "category_purpose_prty": arrprocesslog[0].category_purpose_prty || '',
                          "ext_purpose_code": arrprocesslog[0].ext_purpose_code || '',
                          "lclinstrm": lclinstrm || '',
                          "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                          "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',
                          "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                          "cdtr_iban": arrprocesslog[0].cdtr_iban || '',
                          "dbtr_acct_no": arrprocesslog[0].dbtr_account_no || '',
                          "dbtr_acct_name": arrprocesslog[0].dbtr_acct_name || '',
                          "cdtr_acct_name": arrprocesslog[0].cdtr_acct_name || '',
                          "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                          "charge_bearer": arrprocesslog[0].charge_bearer || '',
                          "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                          "uetr": arrprocesslog[0].uetr || '',
                          "cr_acct_identification": arrprocesslog[0].cr_acct_identification || '',
                          "cr_acct_id_code": arrprocesslog[0].cr_acct_id_code || '',
                          "message_data": arrprocesslog[0].message_data || '',
                          "accp_dt_tm": arrprocesslog[0].accp_dt_tm || '',
                          "process_type": arrprocesslog[0].process_type || '',
                          "status": params.eligible_status || '',
                          "process_status": params.eligible_process_status || '',
                          "clrsysref": arrprocesslog[0].clrsysref,
                          "card_type": "PREPAID_CARD",
                          "process": "",
                          "remittance_information": arrprocesslog[0].remittance_info || '',
                          "reversal_id": reversalNo.reverseId || '',
                          "card_sub_type": apitype.card_sub_type || ''
                        }
                      },
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    }
                    if (apitype.isiban == 'Y') {
                      options.json.payload.isiban = 'Y'
                    }

                    var PrintInfo = {}
                    PrintInfo.url = arrurl[0].param_detail
                    PrintInfo.uetr = arrprocesslog[0].uetr || ''
                    PrintInfo.card_type = "Prepaid Card Pool Posting" || ''
                    PrintInfo.reversal_id = reversalNo.reverseId || ''
                    PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                    PrintInfo.clrsysref = arrprocesslog[0].clrsysref || ''
                    reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                    request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                      if (error) {
                        reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                        sendResponse(error, null);
                      } else {
                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                        responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                        var Responsedata = JSON.parse(responseBodyFromImagingService)
                        resolve(Responsedata)
                      }
                    });
                  } else {
                    objresponse.status = "FAILURE"
                    objresponse.errdata = "T24 Prepaid Card Pool Posting Url Not Found"
                    sendResponse(null, objresponse)
                  }
                })

              } catch (error) {
                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                sendResponse(error, null);
              }
            })
          }

          // Call Credit Card  Elpaso Api 
          function CallCreditEplapsoApi(arrprocesslog, lclinstrm, extIdentValue, reversalNo) {
            return new Promise(async (resolve, reject) => {
              try {
                let Apiurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_IP_REV_RET_CREDIT_CARD' and param_code='URL' AND need_sync = 'Y'`;
                ExecuteQuery1(Apiurl, function (arrurl) {
                  if (arrurl.length > 0) {
                    var apiName = 'NPSS IP REV Credit Card'
                    var request = require('request');
                    var apiURL =
                      apiURL = arrurl[0].param_detail // apiURL + apiName
                    var options = {
                      url: apiURL,
                      timeout: 18000000,
                      method: 'POST',
                      json: {
                        "payload": {
                          "ext_iden_retry_value": extIdentValue || '',
                          "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                          "hdr_created_date": arrprocesslog[0].hdr_created_date || '',
                          "hdr_total_records": arrprocesslog[0].hdr_total_records || '',
                          "hdr_total_amount": arrprocesslog[0].hdr_total_amount || '',
                          "hdr_settlement_date": arrprocesslog[0].hdr_settlement_date || '',
                          "hdr_settlement_method": arrprocesslog[0].hdr_settlement_method || '',
                          "hdr_clearing_system": arrprocesslog[0].hdr_clearing_system || '',
                          "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                          "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                          "category_purpose": arrprocesslog[0].category_purpose || '',
                          "category_purpose_prty": arrprocesslog[0].category_purpose_prty || '',
                          "ext_purpose_code": arrprocesslog[0].ext_purpose_code || '',
                          "lclinstrm": lclinstrm || '',
                          "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                          "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',

                          "cdtr_iban": arrprocesslog[0].cdtr_iban || '',
                          "dbtr_acct_name": arrprocesslog[0].dbtr_acct_name || '',
                          "cdtr_acct_name": arrprocesslog[0].cdtr_acct_name || '',
                          "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                          "charge_bearer": arrprocesslog[0].charge_bearer || '',
                          "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                          "uetr": arrprocesslog[0].uetr || '',
                          "cr_acct_identification": arrprocesslog[0].cr_acct_identification || '',
                          "cr_acct_id_code": arrprocesslog[0].cr_acct_id_code || '',
                          "message_data": arrprocesslog[0].message_data || '',
                          "accp_dt_tm": arrprocesslog[0].accp_dt_tm || '',
                          "process_type": arrprocesslog[0].process_type || '',
                          "status": params.eligible_status || '',
                          "process_status": params.eligible_process_status || '',
                          "clrsysref": arrprocesslog[0].clrsysref,
                          "card_type": "CREDIT_CARD",
                          "process": "",
                          "remittance_information": arrprocesslog[0].remittance_info || '',
                          "reversal_id": reversalNo.reverseId || '',

                        }
                      },
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    }


                    var PrintInfo = {}
                    PrintInfo.url = arrurl[0].param_detail
                    PrintInfo.uetr = arrprocesslog[0].uetr || ''
                    PrintInfo.card_type = "CREDIT_CARD" || ''
                    PrintInfo.reversal_id = reversalNo.reverseId || ''
                    PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                    PrintInfo.clrsysref = arrprocesslog[0].clrsysref || ''
                    reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                    request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                      if (error) {
                        reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                        sendResponse(error, null);
                      } else {
                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                        responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                        var Responsedata = JSON.parse(responseBodyFromImagingService)
                        resolve(Responsedata)
                      }
                    });
                  } else {
                    objresponse.status = "FAILURE"
                    objresponse.errdata = "Credit Card Url Not Found"
                    sendResponse(null, objresponse)
                  }
                })

              } catch (error) {
                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                sendResponse(error, null);
              }
            })
          }

          // Call Credit Card T24  Api 
          function CallCreditT24Api(arrprocesslog, lclinstrm, extIdentValue, reversalNo) {
            return new Promise(async (resolve, reject) => {
              try {
                let Apiurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CALL_CC_T24_POSTING' and param_code='URL' AND need_sync = 'Y'`;
                ExecuteQuery1(Apiurl, function (arrurl) {
                  if (arrurl.length > 0) {
                    var apiName = 'CREDIT_CARD Pool Posting'
                    var request = require('request');
                    var apiURL =
                      apiURL = arrurl[0].param_detail // apiURL + apiName
                    var options = {
                      url: apiURL,
                      timeout: 18000000,
                      method: 'POST',
                      json: {
                        "payload": {
                          "ext_iden_retry_value": extIdentValue || '',
                          "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                          "hdr_created_date": arrprocesslog[0].hdr_created_date || '',
                          "hdr_total_records": arrprocesslog[0].hdr_total_records || '',
                          "hdr_total_amount": arrprocesslog[0].hdr_total_amount || '',
                          "hdr_settlement_date": arrprocesslog[0].hdr_settlement_date || '',
                          "hdr_settlement_method": arrprocesslog[0].hdr_settlement_method || '',
                          "hdr_clearing_system": arrprocesslog[0].hdr_clearing_system || '',
                          "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                          "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                          "category_purpose": arrprocesslog[0].category_purpose || '',
                          "category_purpose_prty": arrprocesslog[0].category_purpose_prty || '',
                          "ext_purpose_code": arrprocesslog[0].ext_purpose_code || '',
                          "lclinstrm": lclinstrm || '',
                          "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                          "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',
                          "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                          "dbtr_acct_no": arrprocesslog[0].dbtr_account_no || '',
                          "cdtr_iban": arrprocesslog[0].cdtr_iban || '',
                          "dbtr_acct_name": arrprocesslog[0].dbtr_acct_name || '',
                          "cdtr_acct_name": arrprocesslog[0].cdtr_acct_name || '',
                          "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                          "charge_bearer": arrprocesslog[0].charge_bearer || '',
                          "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                          "uetr": arrprocesslog[0].uetr || '',
                          "cr_acct_identification": arrprocesslog[0].cr_acct_identification || '',
                          "cr_acct_id_code": arrprocesslog[0].cr_acct_id_code || '',
                          "message_data": arrprocesslog[0].message_data || '',
                          "accp_dt_tm": arrprocesslog[0].accp_dt_tm || '',
                          "process_type": arrprocesslog[0].process_type || '',
                          "status": params.eligible_status || '',
                          "process_status": params.eligible_process_status || '',
                          "clrsysref": arrprocesslog[0].clrsysref,
                          "card_type": "CREDIT_CARD",
                          "process": "",
                          "remittance_information": arrprocesslog[0].remittance_info || '',
                          "reversal_id": reversalNo.reverseId || '',

                        }
                      },
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    }


                    var PrintInfo = {}
                    PrintInfo.url = arrurl[0].param_detail
                    PrintInfo.uetr = arrprocesslog[0].uetr || ''
                    PrintInfo.card_type = "CREDIT_CARD Pool Posting" || ''
                    PrintInfo.reversal_id = reversalNo.reverseId || ''
                    PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                    PrintInfo.clrsysref = arrprocesslog[0].clrsysref || ''
                    reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                    request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                      if (error) {
                        reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                        sendResponse(error, null);
                      } else {
                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                        responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                        var Responsedata = JSON.parse(responseBodyFromImagingService)
                        resolve(Responsedata)
                      }
                    });
                  } else {
                    objresponse.status = "FAILURE"
                    objresponse.errdata = "Credit Card Url Not Found"
                    sendResponse(null, objresponse)
                  }
                })

              } catch (error) {
                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                sendResponse(error, null);
              }
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
