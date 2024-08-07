var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

  
    











    try {
      /*   Created By :     Siva Harish
      Created Date :02-01-2023
        Reason for force to post flag 30/05/2023
         Reason for splrate logic changes 2/6/2023
          Reason for Handling buy rate and buy cur here 3/7/2023
          Reason for Handling spl rate 14/7/2023
          Reason for Handling  rateMode,contra_amount for non aed iban flow 07/11/2023 by daseen
          Reason for:Adding dbtr_acct_no in api payload on 16/11/2023
          Reason for:Adding try catch for issues by subramani 01/4/2024
            Reason for:Duplicate posting in retry count  by daseen 01/04/2024  WI 3472
            reason for: ipuetr dta not available in live then qry from archival date 10-4-2024 - renga
            reason for: Mandatory field validation done for prepaid posting api calls 15-5-2024 wi:3811 - subramani
            reason for : check prepaid card logic change for iban -- renga WI : 3771 15-04-2024
                 reason for : check prepaid card validation check  -- renga WI : 3811 16-05-2024
                 reason for : Merged elp code with master  -- subramanian WI : 3926 11-07-2024
      */
      var serviceName = 'NPSS (CS) Send To Checker';
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
      var moment = require('moment');
      var addquery = "";
      var Objfiledata
      var checkForceTopost
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
              objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Send To Checker';
              objSessionLogInfo.ACTION = 'ACTION';
              objSessionLogInfo.PROCESS = 'NPSS (CS) Send To Checker';
              var cus_iban;
              // Get DB Connection                                                                                                                                      
              reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                  mTranConn = pSession; //  assign connection     
                  reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                      try {
  
                          var PRCT_ID = prct_id
                          var ApitrnId
                          var app_id
                          var apicalls
                          var apiName
                          var TakegmMargin
                          let Ipuetr
                          var ChecksplRate = ''
                          var GetadditionData
                          var reverseAcinfparam
                          var final_status
                          var final_process_status
                          var extend_retry_value
                          var takedealRefno
                          var TakeStsPsts = `select success_process_status,success_status,processing_system,process_type from core_nc_workflow_setup where rule_code = 'RCT_OP_MAN_SENDTOCHECKER' and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                          var take_api_params = `select ns.dbtr_acct_no,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,ns.process_group,ns.buy_rate,ns.buy_margin,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY) as dbtr_account_no,ns.force_post_flag,ns.channel_id,ns.channel_refno,ns.amount_credited_loc_cur,ns.account_currency,ns.department_code,ns.remittance_info,ns.fx_resv_text2,ns.cr_acct_id_code,ns.fx_resv_text3,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method,ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,fn_pcidss_decrypt(ns.message_data,$PCIDSS_KEY ) as message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt,ns.clrsysref,ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.value_date,ns.ext_org_id_code,ns.org_pay_endtoend_id,ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.tran_ref_id,ns.accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id = '${params.Tran_Id}'`;
                          var Takeretcode = `select param_code,param_detail from core_nc_system_setup where param_category='REVERSAL RETURN CODE' and product_code = '${params.PROD_CODE}' and status = 'APPROVED'  and need_sync = 'Y'`
                          if (params.PROD_CODE == 'NPSS_AEFAB') {
                              ExecuteQuery1(TakeStsPsts, function (arrurlResult) {
                                  if (arrurlResult.length) {
                                      final_process_status = arrurlResult[0].success_process_status
                                      final_status = arrurlResult[0].success_status
                                      ExecuteQuery1(Takeretcode, function (arrcode) {
                                          if (arrcode.length > 0) {
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
                                                      if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') {
                                                          apicalls = await checkprepaidorcredit(arrprocesslog)
                                                          if (apicalls != 0) {
                                                              if (apicalls == 1) {
                                                                 // var take_api_params = `select  ns.dbtr_acct_no,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,ns.process_group,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY) as dbtr_account_no,ns.force_post_flag,ns.channel_id,ns.channel_refno,ns.fx_resv_text3,ns.amount_credited_loc_cur,ns.buy_margin,ns.buy_rate,ns.department_code,ns.fx_resv_text2,ns.account_currency,ns.org_pay_endtoend_id, ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,fn_pcidss_decrypt(ns.message_data,$PCIDSS_KEY ) as message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,process_type,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id = '${params.Tran_Id}'`
                                                                  // let checkValueFn = async () => {
                                                                 // let arrprocesslog = await selectQry(take_api_params)
                                                                  null_value_status = await checkAllValues(arrprocesslog, arrprocesslog[0].intrbk_sttlm_amnt, extend_retry_value, take_api_params)
                                                                  if (null_value_status == 'SUCCESS') {
                                                                      var InsertTable = await ProcessInstData(arrprocesslog, final_status, final_process_status, PRCT_ID, arrcode, arrurlResult)
                                                                      var UpdateTrnTble = `Update npss_transactions set maker = '${params.CREATED_BY_NAME}',force_post_flag = 'N',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
                                                                      ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                                          if (arrUpdTranTbl == 'SUCCESS') {
                                                                              objresponse.status = 'SUCCESS';
                                                                              sendResponse(null, objresponse);
  
                                                                          } else {
                                                                              objresponse.status = 'No Data Updated in Transaction Table';
                                                                              sendResponse(null, objresponse);
  
                                                                          }
                                                                      })
  
                                                                  }
  
                                                                  // }
                                                                  //checkValueFn()
                                                              } else {
                                                                  var InsertTable = await ProcessInstData(arrprocesslog, final_status, final_process_status, PRCT_ID, arrcode, arrurlResult)
                                                                  var UpdateTrnTble = `Update npss_transactions set maker = '${params.CREATED_BY_NAME}',force_post_flag = 'N',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
                                                                  ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                                      if (arrUpdTranTbl == 'SUCCESS') {
                                                                          objresponse.status = 'SUCCESS';
                                                                          sendResponse(null, objresponse);
  
                                                                      } else {
                                                                          objresponse.status = 'No Data Updated in Transaction Table';
                                                                          sendResponse(null, objresponse);
  
                                                                      }
                                                                  })
                                                              }
  
  
                                                          } else {
                                                              var InsertTable = await ProcessInstData(arrprocesslog, final_status, final_process_status, PRCT_ID, arrcode, arrurlResult)
                                                              if (InsertTable.length > 0) {
                                                                  Ipuetr = await TakeIpUetr(arrprocesslog)
                                                                  if (Ipuetr != null) {
                                                                      var takedata = async () => {
                                                                          try {
  
  
                                                                              // checkForceTopost = await ForcetoPost(arrprocesslog)
                                                                              // if (checkForceTopost == 'Call_Reserve_Fund_Api') {
  
                                                                              extend_retry_value = await GetRetrycount(Ipuetr)
                                                                              if (apicalls == 0) {// Resurve Fund api call
                                                                                  reverseAcinfparam = await TakereversalIdandActInfm(arrprocesslog)
                                                                              } else { // for both prepaid card and credit card api calls 
                                                                                  reverseAcinfparam = await ReverseIdFrcdtpdt(arrprocesslog, apicalls, Ipuetr)
                                                                              }
  
                                                                              if (apicalls == 0 || apicalls == '0') { // Reserve api call
                                                                                  take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_INAU_RESERVE_ACCEPT' and param_code='URL' AND need_sync = 'Y'`;
                                                                              } else if (apicalls == 1 || apicalls == '1') { //Prepaid  api Call
                                                                                  take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_IP_REV_RET_PREPAID_CARD' and param_code='URL' AND need_sync = 'Y'`;
                                                                              } else if (apicalls == 2 || apicalls == '2') { // Credit  api call
                                                                                  take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_IP_REV_RET_CREDIT_CARD' and param_code='URL' AND need_sync = 'Y'`;
                                                                              }
  
                                                                              ExecuteQuery1(take_api_url, async function (arrurl) {
                                                                                  try {
  
  
                                                                                      if (arrurl.length) {
                                                                                          var url = arrurl[0].param_detail;
                                                                                          var amount
  
                                                                                          amount = arrprocesslog[0].intrbk_sttlm_amnt
  
  
                                                                                          if (apicalls == 0) {
                                                                                              if (reverseAcinfparam.currency != 'AED') {
                                                                                                  ChecksplRate = await CheckspecialRate(arrprocesslog)
                                                                                                  GetadditionData = await GetaddInfo(arrprocesslog)
                                                                                                  if (ChecksplRate == 'Take GMrate') {
                                                                                                      TakegmMargin = await GetgmMargin(arrprocesslog, reverseAcinfparam)
                                                                                                  } else {
                                                                                                      TakegmMargin = ''
                                                                                                  }
                                                                                              }
  
  
                                                                                              takedealRefno = await GetRefno(arrprocesslog, reverseAcinfparam)
  
                                                                                          } else {
                                                                                              TakegmMargin = {}
                                                                                          }
  
  
                                                                                          var callapi = async () => {
                                                                                              try {
  
  
  
                                                                                                  var apistatus = await checkapiCalls(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam, Objfiledata, TakegmMargin, apicalls, extend_retry_value, takedealRefno, ChecksplRate, GetadditionData)
                                                                                                  let buyRate = params.BUY_RATE != '' ? params.BUY_RATE : 0 || 0
                                                                                                  let buyMargin = params.BUY_MARGIN != '' ? params.BUY_MARGIN : 0 || 0
                                                                                                  if (apistatus.status == 'SUCCESS' || apistatus.status == 'Success') {
                                                                                                      var updateOlduetr = await fnupdateOlduetr(Ipuetr, extend_retry_value)
                                                                                                      var UpdateTrnTble
                                                                                                      var updSplRate = ChecksplRate == 'Take Sellrate' ? 'Y' : 'N'
                                                                                                      if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') {
                                                                                                          UpdateTrnTble = `Update npss_transactions set buy_rate = '${buyRate}',buy_margin = '${buyMargin}',maker = '${params.CREATED_BY_NAME}',force_post_flag = 'N',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}',CUST_SPLRATE_FLAG = '${updSplRate}' where npsst_id = '${params.Tran_Id}'`
                                                                                                      } else {
                                                                                                          UpdateTrnTble = `Update npss_transactions set buy_rate = '${buyRate}',buy_margin = '${buyMargin}',checker = '${params.CREATED_BY_NAME}',force_post_flag = 'N',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}',CUST_SPLRATE_FLAG = '${updSplRate}' where npsst_id = '${params.Tran_Id}'`
                                                                                                      }
                                                                                                      ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                                                                          try {
                                                                                                              if (arrUpdTranTbl == 'SUCCESS') {
                                                                                                                  objresponse.status = 'SUCCESS';
                                                                                                                  sendResponse(null, objresponse);
  
                                                                                                              } else {
                                                                                                                  objresponse.status = 'No Data Updated in Transaction Table';
                                                                                                                  sendResponse(null, objresponse);
  
                                                                                                              }
                                                                                                          }
                                                                                                          catch (error) {
                                                                                                              reqInstanceHelper.PrintInfo(serviceName, error, objSessionLogInfo, 'IDE-SERVICE-ERROR')
                                                                                                              SendResponse(null, { status: "Failure" })
                                                                                                              //SendResponse(error)
                                                                                                          }
                                                                                                      })
  
  
  
  
  
                                                                                                  } else if (apistatus.status == 'TIMEOUT') {
  
                                                                                                      objresponse.status = 'Time Out' + apiName + ' Api Failure'
                                                                                                      sendResponse(null, objresponse);
                                                                                                  } else {
                                                                                                      if (apicalls == 0) {
                                                                                                          objresponse.status = apistatus['response']['error']['errorDetails'][0]['message']
                                                                                                          sendResponse(null, objresponse);
                                                                                                      } else if (apicalls == 1) {
                                                                                                          objresponse.status = apiName + 'Fail Error Code' + apistatus.error_code
  
                                                                                                          sendResponse(null, objresponse);
  
                                                                                                      } else if (apicalls == 2) {
                                                                                                          objresponse.status = apiName + 'Fail Error Code' + apistatus.error_code
  
                                                                                                          sendResponse(null, objresponse);
  
                                                                                                      }
  
                                                                                                  }
                                                                                              }
                                                                                              catch (error) {
                                                                                                  reqInstanceHelper.PrintInfo(serviceName, error, objSessionLogInfo, 'IDE-SERVICE-ERROR')
                                                                                                  SendResponse(null, { status: "Failure" })
                                                                                              }
                                                                                          }
  
                                                                                          callapi()
  
                                                                                      }
                                                                                      else {
  
                                                                                          objresponse.status = "No Data found in workflow table"
                                                                                          sendResponse(null, objresponse)
                                                                                      }
                                                                                  }
  
                                                                                  catch (error) {
                                                                                      reqInstanceHelper.PrintInfo(serviceName, error, objSessionLogInfo, 'IDE-SERVICE-ERROR')
                                                                                      SendResponse(null, { status: "Failure" })
                                                                                      //SendResponse(error)
                                                                                  }
                                                                              })
                                                                              // } else {
                                                                              //     objresponse.status = checkForceTopost
                                                                              //     sendResponse(null, objresponse)
                                                                              // }
                                                                          }
  
                                                                          catch (error) {
                                                                              reqInstanceHelper.PrintInfo(serviceName, error, objSessionLogInfo, 'IDE-SERVICE-ERROR')
                                                                              SendResponse(null, { status: "Failure" })
                                                                              //SendResponse(error)
                                                                          }
  
                                                                      }
  
                                                                      takedata()
                                                                  } else {
                                                                      objresponse.status = "UETR is not found"
                                                                      sendResponse(null, objresponse)
                                                                  }
  
                                                              } else {
  
  
                                                                  objresponse.status = "Error in table insert"
                                                                  sendResponse(null, objresponse)
                                                              }
                                                          }
                                                      } else {
                                                          apicalls = 0
  
                                                          var InsertTable = await ProcessInstData(arrprocesslog, final_status, final_process_status, PRCT_ID, arrcode, arrurlResult)
                                                          if (InsertTable.length > 0) {
                                                              Ipuetr = await TakeIpUetr(arrprocesslog)
                                                              if (Ipuetr != null) {
                                                                  var takedata = async () => {
                                                                      try {
  
  
                                                                          // checkForceTopost = await ForcetoPost(arrprocesslog)
                                                                          // if (checkForceTopost == 'Call_Reserve_Fund_Api') {
  
                                                                          extend_retry_value = await GetRetrycount(Ipuetr)
                                                                          if (apicalls == 0) {// Resurve Fund api call
                                                                              reverseAcinfparam = await TakereversalIdandActInfm(arrprocesslog)
                                                                          } else { // for both prepaid card and credit card api calls 
                                                                              reverseAcinfparam = await ReverseIdFrcdtpdt(arrprocesslog, apicalls, Ipuetr)
                                                                          }
  
                                                                          if (apicalls == 0 || apicalls == '0') { // Reserve api call
                                                                              take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_INAU_RESERVE_ACCEPT' and param_code='URL' AND need_sync = 'Y'`;
                                                                          } else if (apicalls == 1 || apicalls == '1') { //Prepaid  api Call
                                                                              take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_IP_REV_RET_PREPAID_CARD' and param_code='URL' AND need_sync = 'Y'`;
                                                                          } else if (apicalls == 2 || apicalls == '2') { // Credit  api call
                                                                              take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_IP_REV_RET_CREDIT_CARD' and param_code='URL' AND need_sync = 'Y'`;
                                                                          }
  
                                                                          ExecuteQuery1(take_api_url, async function (arrurl) {
                                                                              try {
  
  
                                                                                  if (arrurl.length) {
                                                                                      var url = arrurl[0].param_detail;
                                                                                      var amount
  
                                                                                      amount = arrprocesslog[0].intrbk_sttlm_amnt
  
  
                                                                                      if (apicalls == 0) {
                                                                                          if (reverseAcinfparam.currency != 'AED') {
                                                                                              ChecksplRate = await CheckspecialRate(arrprocesslog)
                                                                                              GetadditionData = await GetaddInfo(arrprocesslog)
                                                                                              if (ChecksplRate == 'Take GMrate') {
                                                                                                  TakegmMargin = await GetgmMargin(arrprocesslog, reverseAcinfparam)
                                                                                              } else {
                                                                                                  TakegmMargin = ''
                                                                                              }
                                                                                          }
  
  
                                                                                          takedealRefno = await GetRefno(arrprocesslog, reverseAcinfparam)
  
                                                                                      } else {
                                                                                          TakegmMargin = {}
                                                                                      }
  
  
                                                                                      var callapi = async () => {
                                                                                          try {
  
  
  
                                                                                              var apistatus = await checkapiCalls(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam, Objfiledata, TakegmMargin, apicalls, extend_retry_value, takedealRefno, ChecksplRate, GetadditionData)
                                                                                              let buyRate = params.BUY_RATE != '' ? params.BUY_RATE : 0 || 0
                                                                                              let buyMargin = params.BUY_MARGIN != '' ? params.BUY_MARGIN : 0 || 0
                                                                                              if (apistatus.status == 'SUCCESS' || apistatus.status == 'Success') {
                                                                                                  var updateOlduetr = await fnupdateOlduetr(Ipuetr, extend_retry_value)
                                                                                                  var UpdateTrnTble
                                                                                                  var updSplRate = ChecksplRate == 'Take Sellrate' ? 'Y' : 'N'
                                                                                                  if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') {
                                                                                                      UpdateTrnTble = `Update npss_transactions set buy_rate = '${buyRate}',buy_margin = '${buyMargin}',maker = '${params.CREATED_BY_NAME}',force_post_flag = 'N',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}',CUST_SPLRATE_FLAG = '${updSplRate}' where npsst_id = '${params.Tran_Id}'`
                                                                                                  } else {
                                                                                                      UpdateTrnTble = `Update npss_transactions set buy_rate = '${buyRate}',buy_margin = '${buyMargin}',checker = '${params.CREATED_BY_NAME}',force_post_flag = 'N',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}',CUST_SPLRATE_FLAG = '${updSplRate}' where npsst_id = '${params.Tran_Id}'`
                                                                                                  }
                                                                                                  ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                                                                      try {
                                                                                                          if (arrUpdTranTbl == 'SUCCESS') {
                                                                                                              objresponse.status = 'SUCCESS';
                                                                                                              sendResponse(null, objresponse);
  
                                                                                                          } else {
                                                                                                              objresponse.status = 'No Data Updated in Transaction Table';
                                                                                                              sendResponse(null, objresponse);
  
                                                                                                          }
                                                                                                      }
                                                                                                      catch (error) {
                                                                                                          reqInstanceHelper.PrintInfo(serviceName, error, objSessionLogInfo, 'IDE-SERVICE-ERROR')
                                                                                                          SendResponse(null, { status: "Failure" })
                                                                                                          //SendResponse(error)
                                                                                                      }
                                                                                                  })
  
  
  
  
  
                                                                                              } else if (apistatus.status == 'TIMEOUT') {
  
                                                                                                  objresponse.status = 'Time Out' + apiName + ' Api Failure'
                                                                                                  sendResponse(null, objresponse);
                                                                                              } else {
                                                                                                  if (apicalls == 0) {
                                                                                                      objresponse.status = apistatus['response']['error']['errorDetails'][0]['message']
                                                                                                      sendResponse(null, objresponse);
                                                                                                  } else if (apicalls == 1) {
                                                                                                      objresponse.status = apiName + 'Fail Error Code' + apistatus.error_code
  
                                                                                                      sendResponse(null, objresponse);
  
                                                                                                  } else if (apicalls == 2) {
                                                                                                      objresponse.status = apiName + 'Fail Error Code' + apistatus.error_code
  
                                                                                                      sendResponse(null, objresponse);
  
                                                                                                  }
  
                                                                                              }
                                                                                          }
                                                                                          catch (error) {
                                                                                              reqInstanceHelper.PrintInfo(serviceName, error, objSessionLogInfo, 'IDE-SERVICE-ERROR')
                                                                                              SendResponse(null, { status: "Failure" })
                                                                                          }
                                                                                      }
  
                                                                                      callapi()
  
                                                                                  }
                                                                                  else {
  
                                                                                      objresponse.status = "No Data found in workflow table"
                                                                                      sendResponse(null, objresponse)
                                                                                  }
                                                                              }
  
                                                                              catch (error) {
                                                                                  reqInstanceHelper.PrintInfo(serviceName, error, objSessionLogInfo, 'IDE-SERVICE-ERROR')
                                                                                  SendResponse(null, { status: "Failure" })
                                                                                  //SendResponse(error)
                                                                              }
                                                                          })
                                                                          // } else {
                                                                          //     objresponse.status = checkForceTopost
                                                                          //     sendResponse(null, objresponse)
                                                                          // }
                                                                      }
  
                                                                      catch (error) {
                                                                          reqInstanceHelper.PrintInfo(serviceName, error, objSessionLogInfo, 'IDE-SERVICE-ERROR')
                                                                          SendResponse(null, { status: "Failure" })
                                                                          //SendResponse(error)
                                                                      }
  
                                                                  }
  
                                                                  takedata()
                                                              } else {
                                                                  objresponse.status = "UETR is not found"
                                                                  sendResponse(null, objresponse)
                                                              }
  
                                                          } else {
  
  
                                                              objresponse.status = "Error in table insert"
                                                              sendResponse(null, objresponse)
                                                          }
                                                      }
  
  
                                                  }
                                                  else {
  
                                                      objresponse.status = "No Data found in Transaction table"
  
                                                      objresponse.status = "No Data found in Transaction table"
                                                      sendResponse(null, objresponse)
                                                  }
  
                                              })
                                          } else {
                                              objresponse.status = "CBUAE Return Code not found"
                                              sendResponse(null, objresponse)
                                          }
                                      })
  
                                  }
                                  else {
  
                                      objresponse.status = "No Data found in System Setup  table"
                                      sendResponse(null, objresponse)
                                  }
  
                              })
                          } else { // for finance house
                              var TakeStsPsts1 = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_OP_MAN_SENDTOCHECKER' and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                              ExecuteQuery1(TakeStsPsts1, function (arrurlResult) {
                                  if (arrurlResult.length) {
                                      ExecuteQuery1(Takeretcode, function (arrcode) {
                                          if (arrcode.length > 0) {
                                              ExecuteQuery1(take_api_params, function (arrprocesslog) {
                                                  if (arrprocesslog.length) {
                                                      var arrCusTranInst = [];
                                                      var objCusTranInst = {};
                                                      objCusTranInst.MSG_ID = arrprocesslog[0].hdr_msg_id;
                                                      objCusTranInst.PRCT_ID = PRCT_ID;
                                                      objCusTranInst.REVERSAL_CODE = arrprocesslog[0].revrsal_code
                                                      objCusTranInst.UETR = arrprocesslog[0].uetr;
                                                      objCusTranInst.NPSSTRRD_REFNO = arrprocesslog[0].tran_ref_id;
                                                      objCusTranInst.PROCESS_NAME = 'Accept  Reversal'
                                                      objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
                                                      objCusTranInst.PROCESS_STATUS = arrurlResult[0].success_process_status;
                                                      objCusTranInst.STATUS = arrurlResult[0].success_status;
                                                      objCusTranInst.TENANT_ID = params.TENANT_ID;
                                                      objCusTranInst.APP_ID = '215'
                                                      objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                                                      objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                                                      objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                                                      objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                                                      objCusTranInst.CREATED_BY = params.CREATED_BY;
                                                      objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                                      objCusTranInst.T24_RETURN_CODE = null;
                                                      objCusTranInst.CBUAE_RETURN_CODE = arrcode[0].param_code;
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
  
                                                      _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTranInsertRes) {
                                                          var UpdateTrnTble = `Update npss_transactions set status ='${arrurlResult[0].success_status}',process_status = '${arrurlResult[0].success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
                                                          ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                              if (arrUpdTranTbl == 'SUCCESS') {
                                                                  objresponse.status = 'SUCCESS';
                                                                  sendResponse(null, objresponse);
                                                              } else {
                                                                  objresponse.status = 'No Data Updated in Transaction Table';
                                                                  sendResponse(null, objresponse);
  
                                                              }
                                                          })
  
  
  
                                                      })
  
                                                  } else {
                                                      objresponse.status = "No Data For This Tran Id"
                                                      sendResponse(null, objresponse)
                                                  }
                                              })
                                          } else {
                                              objresponse.status = "CBUAE Return Code is not found in table"
                                              sendResponse(null, objresponse)
                                          }
                                      })
                                  } else {
                                      objresponse.status = "No Data Found in core nc workflow table"
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
                  // Do API Call for Service 
                  function fn_doapicall(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam, Objfiledata, TakegmMargin, extend_retry_value, takedealRefno, ChecksplRate, GetadditionData, callbackapi) {
                      try {
                          var apiName = 'Manual Initiation INAU Reserve Fund'
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
                                      "ext_iden_retry_value": extend_retry_value || '',
                                      "org_field_data": arrprocesslog[0].fx_resv_text2 || '',
                                      "force_post_flag": "N",
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
                                      "intrbk_sttlm_amnt": amount || '',
                                      "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                                      "dbtr_acct_no": arrprocesslog[0].dbtr_acct_no || '',
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
                                      "status": params.eligible_status || '',
                                      "process_status": params.eligible_process_status || '',
                                      "clrsysref": arrprocesslog[0].clrsysref,
                                      "need_manual_init_confirm_deal": ChecksplRate == 'Take Sellrate' ? 'N' : 'Y',
                                      "process": "",
                                      "remittance_information": arrprocesslog[0].remittance_info || '',
                                      "reversal_id": reverseAcinfparam.reverseId
                                  },
                                  "AccountInformation": {
                                      "account_number": reverseAcinfparam.account_number || '',
                                      "company_code": reverseAcinfparam.company_code || '',
                                      "inactive_marker": reverseAcinfparam.inactive_marker || '',
                                      "currency": reverseAcinfparam.currency || '',
                                      "alternate_account_type": reverseAcinfparam.alternate_account_type || '',
                                      "alternate_account_id": reverseAcinfparam.alternate_account_id || '',
                                      "curr_rate_segment": reverseAcinfparam.curr_rate_segment || '',
                                      "account_officer": reverseAcinfparam.account_officer || '',
                                      "customer_id": reverseAcinfparam.customer_id || ''
  
                                  }
                              },
                              headers: {
                                  'Content-Type': 'application/json'
                              }
                          }
                          if (reverseAcinfparam.currency != 'AED') {
                              if (ChecksplRate != 'Take GMrate') {
                                  if (reverseAcinfparam.currency != 'AED') {
                                      if (params.BUY_MARGIN != 0 && params.BUY_MARGIN != '') {
                                          options.json.payload.buy_margin = params.BUY_MARGIN || ''
                                      }
                                      if (params.BUY_RATE != 0 && params.BUY_RATE != '') {
                                          options.json.payload.buy_rate = params.BUY_RATE || ''
                                      }
  
                                      options.json.payload.amount_credited_loc_cur = arrprocesslog[0].amount_credited_loc_cur || ''
                                      options.json.payload.deal_ref_no = takedealRefno || ''
                                  }
                              } else {
                                  if (TakegmMargin != '') {
  
                                      options.json.payload.GMMargin = TakegmMargin.GMMargin || '',
                                          options.json.payload.GMRate = TakegmMargin.GMRate || '',
                                          options.json.payload.amount_credited_loc_cur = TakegmMargin.amount_credited_loc_cur || ''
                                      options.json.payload.deal_ref_no = takedealRefno || ''
  
                                  }
                              }
  
                              if (GetadditionData.length > 0) {
                                  options.json.payload.gidId = GetadditionData[0].additional_info || '',
                                      options.json.payload.Rate = GetadditionData[0].fx_resv_text1 || '',
                                      options.json.payload.rateMode = JSON.parse(GetadditionData[0].response_json).common.rateMode || '',
                                      options.json.payload.contra_amt = JSON.parse(GetadditionData[0].response_json).dealResponse[0].contraAmount || ''
  
                              }
                              options.json.payload.contraAmount = params.CONTRA_AMOUNT || ''
                              options.json.payload.buyCurrency = params.BUY_CURRENCY || ''
                              options.json.payload.sellCurrency = params.SELL_CURRENCY || ''
                              options.json.payload.dealtAmount = params.DEALT_AMOUNT || ''
                          }
  
  
  
                          var PrintInfo = {}
                          PrintInfo.url = url || ''
                          PrintInfo.uetr = arrprocesslog[0].uetr || ''
  
                          PrintInfo.reversal_id = reverseAcinfparam.reverseId || ''
                          PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                          PrintInfo.clrsysref = arrprocesslog[0].clrsysref || ''
  
                          reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(options), objSessionLogInfo);
                          request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                              if (error) {
                                  reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                  objresponse.status = error
                                  sendResponse(null, objresponse)
  
  
                              } else {
                                  try {
                                      responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                      reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                      var responseData = JSON.parse(responseBodyFromImagingService)
                                      callbackapi(responseData)
                                  } catch (error) {
                                      objresponse.status = error
                                      sendResponse(null, objresponse)
                                  }
  
                              }
                          });
  
                      } catch (error) {
                          reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                          sendResponse(error, null);
                      }
                  }
  
                  function find_restrictionId(arr) {
                      return new Promise(async (resolve, reject) => {
                          let pos_res_qry = `select cncpr_id, restriction_type,applicable_dr_ac,restriction_id from core_nc_post_restrictions where restriction_type <> 'CREDIT' and restriction_id in `
                          let split_id = arr.split('@@')
                          let remove_empty = split_id.filter((x) => x != '')
                          let str = remove_empty.map((x) => `'` + x + `'`)
                          let res_id = '(' + str + ')'
                          pos_res_qry = pos_res_qry + res_id
                          let res_count = 0
                          ExecuteQuery1(pos_res_qry, function (arrpostres) {
                              if (arrpostres.length) {
                                  arrpostres.forEach((x) => {
                                      if (x.applicable_dr_ac == 'Restrict') {
                                          res_count++;
                                      }
                                  })
                              } else
                                  resolve('SUCCESS')
                              if (res_count > 0) {
                                  resolve('Restrict')
                              } else
                                  resolve('SUCCESS')
                          })
  
  
                      })
                  }
  
  
                  function check_posting_restriction_table(arrActInf) {
                      return new Promise(async (resolve, reject) => {
  
                          if (arrActInf[0].posting_restriction_code == null || arrActInf[0].posting_restriction_code == undefined || arrActInf[0].posting_restriction_code == '') {
                              if (arrActInf[0].customer_posting_restriction_code == null || arrActInf[0].customer_posting_restriction_code == undefined || arrActInf[0].customer_posting_restriction_code == '') {
                                  resolve('SUCCESS')
                              } else {
                                  resolve(await find_restrictionId(arrActInf[0].customer_posting_restriction_code))
                              }
                          } else {
                              resolve(await find_restrictionId(arrActInf[0].posting_restriction_code))
                          }
  
                      })
                  }
  
  
                  //function to check logic for reversal Id and Taking acctinfm only for reserver fund
  
                  function TakereversalIdandActInfm(arrprocesslog) {
                      return new Promise((resolve, reject) => {
                          var TakeAcctInf = `select posting_restriction_code ,customer_posting_restriction_code ,alternate_account_type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslog[0].dbtr_iban}'`
  
                          var TakeCount = `select COUNT(npsstpl_id) as counts from npss_trn_process_log where status = 'IP_RCT_REV_INAU_POSTING_FAILURE' and uetr = '${arrprocesslog[0].uetr}'`
  
  
                          var parameter = {}
                          ExecuteQuery1(TakeAcctInf, async function (arrActInf) {
                              if (arrActInf.length) {
                                  let posting_restriction = await check_posting_restriction_table(arrActInf);
  
                                  if (posting_restriction != 'Restrict') {
                                      parameter.account_number = arrActInf[0].account_number || '',
                                          parameter.company_code = arrActInf[0].company_code || '',
                                          parameter.inactive_marker = arrActInf[0].inactive_marker || '',
                                          parameter.currency = arrActInf[0].currency || '',
                                          parameter.alternate_account_id = arrActInf[0].alternate_account_id || ''
                                      parameter.curr_rate_segment = arrActInf[0].curr_rate_segment || '',
                                          parameter.account_officer = arrActInf[0].account_officer || '',
                                          parameter.customer_id = arrActInf[0].customer_id || ''
                                      parameter.alternate_account_type = arrActInf[0].alternate_account_type || ''
  
                                      ExecuteQuery1(TakeCount, function (arrCount) {
                                          if (arrprocesslog[0].clrsysref) {
                                              if (arrCount[0].counts.length == 1) {
                                                  var count = Number(arrCount[0].counts)
                                                  count++
                                                  parameter.reverseId = arrprocesslog[0].clrsysref + '.0' + count
                                                  resolve(parameter)
                                              } else {
                                                  var count = Number(arrCount[0].counts)
                                                  count++
                                                  parameter.reverseId = arrprocesslog[0].clrsysref + '.' + count
                                                  resolve(parameter)
                                              }
                                          } else {
  
                                              objresponse.status = "Clrsysref is not found in tran"
                                              sendResponse(null, objresponse)
                                          }
  
  
  
                                      })
                                  } else {
                                      objresponse.status = "Posting restrictions found on the DR IBAN"
                                      sendResponse(null, objresponse)
                                  }
  
  
                              } else {
  
  
                                  objresponse.status = "No Data found in accounts table"
                                  sendResponse(null, objresponse)
                              }
  
                          })
  
  
  
  
                      })
  
                  }
                  //function to check prepaid or credit
                  function checkprepaidorcredit(arrprocesslog) { //for checking prepid or credit card
                      return new Promise(async (resolve, reject) => {
                          if (arrprocesslog[0].dbtr_iban) {
                              Iban = arrprocesslog[0].dbtr_iban.slice(-16)
                              FrmIban = Iban.substring(0, 3)
                              let ibanDetails = await getIbanParams(`select * from core_nc_system_setup where param_category='ELPASO_PREPAID_CARD' and param_code='BRANCH_CODES'`)
                              // if (FrmIban == '564' || FrmIban == 564) { //check for prepaid card new logic WI 3771
                              if (ibanDetails.filter((val) => val.param_detail == FrmIban).length > 0) {
                                  resolve(1)
                              } else {
                                  if (arrprocesslog[0].cr_acct_identification && arrprocesslog[0].cr_acct_id_code == 'AIIN') {
                                      var TakeacctIden = arrprocesslog[0].cr_acct_identification.substring(0, 6)
                                      var checkCard = `select * from CORE_NC_CARD_BIN_SETUP where bin_number = '${TakeacctIden}' and need_sync = 'Y'`
                                      ExecuteQuery1(checkCard, function (arrCradType) {
                                          if (arrCradType.length) {
                                              if (arrCradType[0].card_type == 'PREPAID_CARD') {
                                                  resolve(1)
                                              } else {
                                                  resolve(2)
                                              }
                                          } else {
  
                                              objresponse.status = "No Data in CORE_NC_CARD_BIN_SETUP for this Bin Number" + TakeacctIden
                                              sendResponse(null, objresponse)
                                          }
  
                                      })
                                  } else {
                                      resolve(0)
                                  }
  
                              }
  
                          } else {
                              if (arrprocesslog[0].cr_acct_identification && arrprocesslog[0].cr_acct_id_code == 'AIIN') {
                                  var TakeacctIden1 = arrprocesslog[0].cr_acct_identification.substring(0, 6)
                                  var checkCard1 = `select * from CORE_NC_CARD_BIN_SETUP where bin_number = '${TakeacctIden1}' and need_sync = 'Y'`
                                  ExecuteQuery1(checkCard1, function (arrCradType) {
                                      if (arrCradType.length) {
                                          if (arrCradType[0].card_type == 'PREPAID_CARD') {
                                              resolve(1)
                                          } else {
                                              resolve(2)
                                          }
  
                                      } else {
  
                                          objresponse.status = "No Data in CORE_NC_CARD_BIN_SETUP for this Bin Number" + TakeacctIden
                                          sendResponse(null, objresponse)
                                      }
  
                                  })
  
                              } else {
                                  resolve(0)
                              }
  
                          }
  
  
                      })
  
                  }
  
                  //function for check prepaid or credit qry execute
                  function getIbanParams(qry) {
                      return new Promise((resolve, reject) => {
                          ExecuteQuery1(qry, function (arrres) {
                              resolve(arrres)
                          })
                      })
                  }
  
  
  
                  function GetRetrycount(ipuetr) {
                      return new Promise((resolve, reject) => {
  
                          var TakeretryValue = `select ext_iden_retry_value from <tran_db>.npss_trn_process_log where uetr ='${ipuetr}' and  status in  ('IP_RCT_PC_T24_POSTING_SUCCESS','IP_BCT_PC_T24_POSTING_SUCCESS','IP_RCT_CC_T24_POSTING_SUCCESS','IP_BCT_CC_T24_POSTING_SUCCESS','IP_RCT_POSTING_SUCCESS','IP_BCT_POSTING_SUCCESS')`
  
                          var TakeretryValueArc = `select ext_iden_retry_value from <arc_tran_db>.npss_trn_process_log where uetr ='${ipuetr}' and  status in  ('IP_RCT_PC_T24_POSTING_SUCCESS','IP_BCT_PC_T24_POSTING_SUCCESS','IP_RCT_CC_T24_POSTING_SUCCESS','IP_BCT_CC_T24_POSTING_SUCCESS','IP_RCT_POSTING_SUCCESS','IP_BCT_POSTING_SUCCESS')`
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
                                          objresponse.status = "No Data in ext_iden_retry_value"
                                          sendResponse(null, objresponse)
                                      }
                                  })
                              }
  
                          })
                      })
                  }
                  //function find reversal Id for credit and debit card api calls
                  function ReverseIdFrcdtpdt(arrprocesslog, apicalls, ipUetr) {
                      return new Promise((resolve, reject) => {
                          parameter = {}
                          var TakeReversePrsno = `select process_ref_no from npss_trn_process_log where status = 'IP_RCT_REVERSAL_REQ_RECEIVED' and uetr = '${arrprocesslog[0].uetr}'`
                          ExecuteQuery1(TakeReversePrsno, function (arrRevno) {
                              if (arrRevno[0].process_ref_no != null) {
  
                                  var Takecount
                                  if (apicalls == 1) { //prepaid
                                      //  Takecount = `select COUNT(npsstpl_id) as counts from npss_trn_process_log where status in ('IP_RCT_PC_POSTING_SUCCESS','IP_RCT_PC_POSTING_FAILURE') and uetr = '${arrprocesslog[0].uetr}'`
                                      Takecount = `select ext_iden_retry_value  from npss_trn_process_log where status in ('IP_RCT_PC_T24_POSTING_SUCCESS','IP_BCT_PC_T24_POSTING_SUCCESS') and uetr = '${ipUetr}'`
                                  } else if (apicalls == 2) { //credit
                                      // Takecount = `select COUNT(npsstpl_id) as counts from npss_trn_process_log where status in ('IP_RCT_CC_POSTING_SUCCESS','IP_RCT_CC_POSTING_FAILURE','IP_BCT_CC_T24_POSTING_SUCCESS') and uetr = '${ipUetr}'`
                                      Takecount = `select ext_iden_retry_value  from npss_trn_process_log where status in ('IP_RCT_CC_T24_POSTING_SUCCESS','IP_BCT_CC_T24_POSTING_SUCCESS') and uetr = '${ipUetr}'`
                                  }
                                  ExecuteQuery1(Takecount, function (arrCount) {
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
  
                              } else {
  
                                  objresponse.status = "Process Refno for reversal Id is missing"
                                  sendResponse(null, objresponse)
                              }
  
                          })
  
                      })
  
                  }
  
  
  
                  // function GetgmMargin(arrprocesslog, reverseAcinfparam, Ipuetr) {
                  //     return new Promise(async (resolve, reject) => {
                  //         if (reverseAcinfparam.currency == '' || reverseAcinfparam.currency == null) {
                  //             resolve('')
                  //         } else {
                  //             if (reverseAcinfparam.currency != 'AED') {
  
                  //                 var Takedata = `select exchange_rate,gm_margin from npss_trn_process_log where process_name = 'Get Deal' and uetr = '${Ipuetr}' order by npsstpl_id desc`
                  //                 ExecuteQuery1(Takedata, function (arrresponse) {
  
                  //                     var senddata = {}
                  //                     var Takeloccur = `SELECT amount_credited_loc_cur from npss_transactions where npsst_id = '${params.Tran_Id}'`
                  //                     ExecuteQuery1(Takeloccur, function (localcur) {
                  //                         if (localcur.length == 0) {
                  //                             senddata.amount_credited_loc_cur = ''
  
                  //                             if (arrresponse.length == 0) {
                  //                                 senddata.GMRate = '',
                  //                                     senddata.GMMargin = ''
                  //                                 resolve(senddata)
                  //                             } else {
                  //                                 senddata.GMRate = arrresponse[0].exchange_rate,
                  //                                     senddata.GMMargin = arrresponse[0].gm_margin
                  //                                 resolve(senddata)
                  //                             }
                  //                         } else {
  
                  //                             senddata.amount_credited_loc_cur = localcur[0].amount_credited_loc_cur
                  //                             if (arrresponse.length == 0) {
                  //                                 senddata.GMRate = '',
                  //                                     senddata.GMMargin = ''
                  //                                 resolve(senddata)
                  //                             } else {
                  //                                 senddata.GMRate = arrresponse[0].exchange_rate,
                  //                                     senddata.GMMargin = arrresponse[0].gm_margin
                  //                                 resolve(senddata)
                  //                             }
                  //                         }
  
  
                  //                     })
  
  
  
  
                  //                 })
  
  
                  //             } else {
                  //                 resolve('')
                  //             }
                  //         }
  
  
                  //     })
                  // }
  
  
                  function GetgmMargin(arrprocesslog, reverseAcinfparam) {
                      return new Promise(async (resolve, reject) => {
                          if (reverseAcinfparam.currency == '' || reverseAcinfparam.currency == null) {
                              resolve('')
                          } else {
                              if (reverseAcinfparam.currency != 'AED') {
  
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
  
  
  
                  function GetRefno(arrprocesslog, reverseAcinfparam) {
                      return new Promise(async (resolve, reject) => {
                          if (reverseAcinfparam.currency == '' || reverseAcinfparam.currency == null) {
                              resolve('')
                          } else {
                              if (reverseAcinfparam.currency != 'AED') {
  
                                  var Takedelrefno = `select process_ref_no from npss_trn_process_log where status = 'OP_RCT_REV_DEAL_RECEIVED' and uetr = '${arrprocesslog[0].uetr}'`
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
  
                  function CheckspecialRate(arrprocesslog) {
                      return new Promise((resolve, reject) => {
                          var CheckRate = `select * from npss_trn_process_log where process_name = 'Customer Spl Rate' and status = 'OP_RCT_MAN_SPL_RATE_MARKED' and uetr = '${arrprocesslog[0].uetr}'`
                          ExecuteQuery1(CheckRate, function (arrRate) {
                              if (arrRate.length > 0) {
                                  resolve('Take Sellrate')
                              } else {
                                  resolve('Take GMrate')
                              }
  
                          })
                      })
                  }
  
                  function GetaddInfo(arrprocesslog) {
                      return new Promise(async (resolve, reject) => {
                          var tkaddinfo = `select  fn_pcidss_decrypt(response_data_json,$PCIDSS_KEY ) as response_json,additional_info,fx_resv_text1,fx_resv_text2 from npss_trn_process_log where status = 'OP_RCT_REV_DEAL_RECEIVED' and uetr = '${arrprocesslog[0].uetr}'`
                          ExecuteQuery1(tkaddinfo, function (arrdata) {
  
                              resolve(arrdata)
  
                          })
  
                      })
                  }
  
                  function fnupdateOlduetr(ipuetr, extend_retry_value) {
                      return new Promise((resolve, reject) => {
                          let updtQry = `update npss_trn_process_log set ext_iden_retry_value = ${extend_retry_value} where uetr ='${ipuetr}' and  status in  ('IP_RCT_PC_T24_POSTING_SUCCESS','IP_BCT_PC_T24_POSTING_SUCCESS','IP_RCT_CC_T24_POSTING_SUCCESS','IP_BCT_CC_T24_POSTING_SUCCESS','IP_RCT_POSTING_SUCCESS','IP_BCT_POSTING_SUCCESS')`
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
  
                  function validateApi(arrprocesslog) {
                      return new Promise((resolve, reject) => {
                          let take_valapi_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_VALIDATE_API' and param_code='URL' AND need_sync = 'Y'`;
                          ExecuteQuery1(take_valapi_url, async function (arrurl) {
                              if (arrurl.length) {
                                  var TakecatPurpose = `select param_detail from core_nc_system_setup where param_category ='MANUAL_INITATION' and param_code='MANUAL_INITATION_PURPOSE_CODE'`;
                                  ExecuteQuery1(TakecatPurpose, async function (arrcatPurpose) {
                                      var url = arrurl[0].param_detail;
                                      try {
                                          var apiName = 'Validate Api'
                                          var request = require('request');
                                          var apiURL =
                                              apiURL = url // apiURL + apiName
                                          var options = {
                                              url: apiURL,
                                              timeout: 18000000,
                                              method: 'POST',
                                              json: {
                                                  "payload": {
                                                      "process_type": arrprocesslog[0].process_type || '',
                                                      "uetr": arrprocesslog[0].uetr || '',
                                                      "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                                                      "cbs_ref_no": arrprocesslog[0].cbs_ref_no || '',
                                                      "instrument_type": arrprocesslog[0].instrument_type ? arrprocesslog[0].instrument_type : 'INST',
                                                      "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                                                      "dbtr_acct_no": arrprocesslog[0].dbtr_acct_no || '',
                                                      "cdtr_iban": arrprocesslog[0].cdtr_iban || '',
                                                      "cdtr_acct_no": arrprocesslog[0].cdtr_acct_no ? arrprocesslog[0].cdtr_acct_no : arrprocesslog[0].cr_acct_identification,
                                                      "dbtr_acct_name": arrprocesslog[0].dbtr_acct_name || '',
                                                      "cdtr_acct_name": arrprocesslog[0].cdtr_acct_name || '',
                                                      "dbtr_birth_date": moment(arrprocesslog[0].dbtr_birth_date).format('YYYY-MM-DD 00:00:00.000'),
                                                      "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                                                      "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                                                      "category_purpose": arrcatPurpose[0].param_detail ? arrcatPurpose[0].param_detail : 'IPP'
                                                  }
                                              },
                                              headers: {
                                                  'Content-Type': 'application/json'
                                              }
                                          }
  
                                          var PrintInfo = {}
                                          PrintInfo.url = url || ''
                                          PrintInfo.uetr = arrprocesslog[0].uetr || ''
  
                                          PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                                          PrintInfo.clrsysref = arrprocesslog[0].clrsysref || ''
  
                                          reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                          request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                              if (error) {
                                                  reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                                  objresponse.status = error
                                                  sendResponse(null, objresponse)
                                              } else {
                                                  try {
  
                                                      reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + JSON.stringify(responseBodyFromImagingService), objSessionLogInfo);
                                                      reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                      // var stringifyData = JSON.stringify(responseBodyFromImagingService)
                                                      // var replceData = stringifyData.replace(/(\n)/g,"")
                                                      reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON in try-------' + JSON.parse(responseBodyFromImagingService), objSessionLogInfo);
  
                                                      var responseData = JSON.parse(responseBodyFromImagingService)
                                                      if (responseData.status == 'SUCCESS') {
                                                          resolve('SUCCESS')
                                                      } else
                                                          resolve('FAILURE')
                                                  } catch (error) {
  
                                                      reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON in catch-------' + responseBodyFromImagingService, objSessionLogInfo);
  
                                                      var dat1 = JSON.parse(responseBodyFromImagingService)
  
                                                      if (dat1.status == 'SUCCESS') {
                                                          resolve('SUCCESS')
                                                      } else
                                                          resolve('FAILURE')
                                                  }
                                              }
                                          });
  
                                      } catch (error) {
                                          reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                          sendResponse(error, null);
                                      }
                                  })
  
  
                              } else {
                                  objresponse.status = "No Data found in validate apiurl"
                                  sendResponse(null, objresponse)
                              }
                          })
                      })
                  }
                  //function to call all api calls(reservefund,prepaid,credit)
                  function checkapiCalls(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam, Objfiledata, TakegmMargin, apicalls, extend_retry_value, takedealRefno, ChecksplRate, GetadditionData) {
                      return new Promise((resolve, reject) => {
                          let callValidate = async () => {
                              var validateapiRes = await validateApi(arrprocesslog)
  
                              if (validateapiRes == "SUCCESS") {
                                  // reserve fund
                                  if (apicalls == 0) {
                                      fn_doapicall(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam, Objfiledata, TakegmMargin, extend_retry_value, takedealRefno, ChecksplRate, GetadditionData, function (result) {
                                          if (result === "SUCCESS" || result === "Success" || result === "success") {
  
                                              resolve(result)
                                          } else {
                                              resolve(result)
  
                                          }
                                      })
                                  } else if (apicalls == 1 || apicalls == 1) { // prepaid api call
                                      fn_doPrepaidapicall(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam, extend_retry_value, function (result) {
  
                                          resolve(result)
  
  
                                      })
  
                                  } else if (apicalls == 2 || apicalls == 2) { // credit api call
                                      fn_doCreditapicall(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam, extend_retry_value, function (result) {
  
                                          resolve(result)
  
  
                                      })
  
                                  }
                              } else {
                                  objresponse.status = 'Mandatory fields are missing for Pacs008 message, hence we cannot proceed further.'
                                  sendResponse(null, objresponse)
                              }
                          }
                          callValidate()
                          // reserve fund
  
  
  
                      })
                  }
  
  
  
                  function PreCrediAcctInfm(arrprocesslog, ChkPrecdtCard, IpUETR) {
                      return new Promise((resolve, reject) => {
                          let chkData = `select * from <tran_db>.npss_trn_process_log where uetr = '${IpUETR}'`
                          let chkDataArc = `select * from <arc_tran_db>.npss_trn_process_log where uetr = '${IpUETR}'`
                          var AcctInformations = {}
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
                                                  objresponse.status = 'Private Id is Missing for Prepaid Card'
                                                  objresponse.errdata = 'Private Id is Missing for Prepaid Card'
                                                  sendResponse(null, objresponse)
                                              } else if ((chkPrepaidPassedTrn[0].dateofbirth == null || chkPrepaidPassedTrn[0].dateofbirth == '')
                                                  || (chkPrepaidPassedTrn[0].customername == null || chkPrepaidPassedTrn[0].customername == '')
                                              ) {
                                                  objresponse.status = 'dateofbirth/customername field is missing'
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
                                  }
                              }
                              else {
                                  ExecuteQuery1(chkDataArc, async function (arrChkdata) {
                                      if (arrChkdata.length > 0) {
  
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
  
                                      }
                                      else {
                                          objresponse.status = 'FAILURE'
                                          objresponse.errdata = 'No data Found in Trn Process log Table for IP UETR'
                                          sendResponse(null, objresponse)
                                      }
                                  })
                              }
                          })
  
                      })
                  }
  
                  function checkAllValues(arrprocesslog, amount, extend_retry_value) {
                      return new Promise(async (resolve, reject) => {
                          try {
                              let ChkPrecdtCard = { apitype: 1 }
  
                              let IpUETR = await TakeIpUetr(arrprocesslog)
                              let TakeActcountInformation = await PreCrediAcctInfm(arrprocesslog, ChkPrecdtCard, IpUETR)
                              //let err_msg = ''
                              /* if (extend_retry_value == undefined || extend_retry_value == null) {
                                throw new Error('Extend Retry Value is Missing')
                              } */
                              if (amount == undefined || amount == null) {
                                  throw new Error('amount  Value is Missing')
                              }
  
                              if (TakeActcountInformation.cityofbirth == undefined || TakeActcountInformation.cityofbirth == null) {
                                  throw new Error('city of birth Value is Missing')
                              }
                              if (TakeActcountInformation.countryofbirth == undefined || TakeActcountInformation.countryofbirth == null) {
                                  throw new Error('country of birth Value is Missing')
                              }
                              if (TakeActcountInformation.account_name == undefined || TakeActcountInformation.account_name == null) {
                                  throw new Error('customer name Value is Missing')
                              }
                              if (TakeActcountInformation.privatesId == undefined || TakeActcountInformation.privatesId == null) {
                                  throw new Error('emirates id Value is Missing')
                              }
                              if (TakeActcountInformation.birthdate == undefined || TakeActcountInformation.birthdate == null) {
                                  throw new Error('birthdate Value is Missing')
                              }
  
                              /* if (arrprocesslog[0].hdr_settlement_date == undefined || arrprocesslog[0].hdr_settlement_date == null || arrprocesslog[0].hdr_settlement_date == '') {
                                throw new Error('Extend Retry Value is Missing')
                              }
                              if (arrprocesslog[0].hdr_settlement_method == undefined || arrprocesslog[0].hdr_settlement_method == null || arrprocesslog[0].hdr_settlement_method == '') {
                                throw new Error('Extend Retry Value is Missing')
                              } */
                              if (arrprocesslog[0].dr_sort_code == undefined || arrprocesslog[0].dr_sort_code == null) {
                                  throw new Error('Dr Sort Code Value is Missing')
                              }
                              if (arrprocesslog[0].cr_sort_code == undefined || arrprocesslog[0].cr_sort_code == null) {
                                  throw new Error('Cr Sort Code Value is Missing')
                              }
  
                              /* if (amount == undefined || amount == null || amount == '') {
                                throw new Error('Amount Value is Missing')
                              } */
                              if ((arrprocesslog[0].dbtr_iban == undefined || arrprocesslog[0].dbtr_iban == null) && (arrprocesslog[0].cr_acct_identification == undefined || arrprocesslog[0].cr_acct_identification == null)) {
                                  throw new Error('dbtr iban Value/cr acct identification value is Missing')
                              }
                              if (arrprocesslog[0].intrbk_sttlm_cur == undefined || arrprocesslog[0].intrbk_sttlm_cur == null) {
                                  throw new Error('intrbk sttlm cur Value is Missing')
                              }
  
                              /* if (arrprocesslog[0].dbtr_acct_no == undefined || arrprocesslog[0].dbtr_acct_no == null) {
                                throw new Error('dbtr acct no Value is Missing')
                              } */
                              if (arrprocesslog[0].cdtr_iban == undefined || arrprocesslog[0].cdtr_iban == null) {
                                  throw new Error('cdtr iban Value is Missing')
                              }
                              if (arrprocesslog[0].tran_ref_id == undefined || arrprocesslog[0].tran_ref_id == null) {
                                  throw new Error('Tran Ref id Value is Missing')
                              }
                              /* if (arrprocesslog[0].dbtr_acct_name == undefined || arrprocesslog[0].dbtr_acct_name == null) {
                                throw new Error('dbtr acct name Value is Missing')
                              }
                              if (arrprocesslog[0].cdtr_acct_name == undefined || arrprocesslog[0].cdtr_acct_name == null) {
                                throw new Error('cdtr acct name Value is Missing')
                              } */
                              if (arrprocesslog[0].clrsysref == undefined || arrprocesslog[0].clrsysref == null || arrprocesslog[0].clrsysref == '') {
                                  throw new Error('Clrsysref Value is Missing')
                              }
  
                              else {
                                  resolve('SUCCESS')
                              }
                          }
                          catch (error) {
                              reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "Mandatory field missing for prepaid API CALL FUNCTION", error)
                              objresponse.status = error.message
                              sendResponse(null, objresponse)
                          }
                      })
                  }
  
  
                  function selectQry(query) {
                      return new Promise((resolve, reject) => {
                          reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                              try {
                                  if (error) {
                                      sendResponse(error, null);
                                  } else {
                                      if (result.rows.length > 0) {
                                          resolve(result.rows);
                                      } else {
                                          resolve([]);
                                      }
                                  }
                              } catch (error) {
                                  sendResponse(error, null);
                              }
                          });
                      })
                  }
                  // Do Prepaid API Call for Service 
                  function fn_doPrepaidapicall(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam, extend_retry_value, callbackapi) {
                      try {
                          var apiName = 'NPSS IP REV Prepaid Card'
                          var request = require('request'), null_value_status = ''
  
  
                          var apiURL =
                              apiURL = url // apiURL + apiName
                          var options = {
                              url: apiURL,
                              timeout: 18000000,
                              method: 'POST',
                              json: {
  
  
                                  "payload": {
                                      "ext_iden_retry_value": extend_retry_value || '',
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
                                      "intrbk_sttlm_amnt": amount || '',
                                      "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                                      "dbtr_acct_no": arrprocesslog[0].dbtr_acct_no || '',
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
                                      "accp_dt_tm": arrprocesslog[0].accp_date_time || '',
                                      "process_type": arrprocesslog[0].process_type || '',
                                      "status": params.eligible_status || '',
                                      "process_status": params.eligible_process_status || '',
                                      "clrsysref": arrprocesslog[0].clrsysref,
                                      "card_type": "PREPAID_CARD",
                                      "process": "",
                                      "remittance_information": arrprocesslog[0].remittance_info || '',
                                      "reversal_id": reverseAcinfparam.reverseId
                                  }
                              },
                              headers: {
                                  'Content-Type': 'application/json'
                              }
                          }
  
  
                          var PrintInfo = {}
                          PrintInfo.url = url
                          PrintInfo.uetr = arrprocesslog[0].uetr || ''
                          PrintInfo.card_type = "Prepaid Card" || ''
                          PrintInfo.reversal_id = reverseAcinfparam.reverseId || ''
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
                                  callbackapi(Responsedata)
                              }
                          });
  
                      } catch (error) {
                          reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                          sendResponse(error, null);
                      }
                  }
  
  
                  // Do API Call for Service 
                  function fn_doCreditapicall(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam, extend_retry_value, callbackapi) {
                      try {
                          var apiName = 'NPSS IP REV Credit Card'
                          var request = require('request');
                          var apiURL =
                              apiURL = url // apiURL + apiName
                          var options = {
                              url: apiURL,
                              timeout: 18000000,
                              method: 'POST',
                              json: {
  
  
                                  "payload": {
                                      "ext_iden_retry_value": extend_retry_value || '',
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
                                      "intrbk_sttlm_amnt": amount || '',
                                      "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                                      "dbtr_acct_no": arrprocesslog[0].dbtr_acct_no || '',
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
                                      "status": params.eligible_status || '',
                                      "process_status": params.eligible_process_status || '',
                                      "clrsysref": arrprocesslog[0].clrsysref,
                                      "card_type": "CREDIT_CARD",
                                      "process": "",
                                      "remittance_information": arrprocesslog[0].remittance_info || '',
                                      "reversal_id": reverseAcinfparam.reverseId
                                  }
                              },
                              headers: {
                                  'Content-Type': 'application/json'
                              }
                          }
  
  
  
                          var PrintInfo = {}
                          PrintInfo.url = url
                          PrintInfo.uetr = arrprocesslog[0].uetr || ''
                          PrintInfo.card_type = "Credit Card" || ''
                          PrintInfo.reversal_id = reverseAcinfparam.reverseId || ''
                          PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                          PrintInfo.clrsysref = arrprocesslog[0].clrsysref || ''
  
                          reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                          request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                              if (error) {
                                  reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                  sendResponse(error, null);
  
  
                              } else {
                                  reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                  responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                  var Responsedata = JSON.parse(responseBodyFromImagingService)
                                  callbackapi(Responsedata)
                              }
                          });
  
                      } catch (error) {
                          reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                          sendResponse(error, null);
                      }
                  }
  
  
  
  
  
  
  
  
  
                  //Function for insert in TrnProcess Log Table
                  function ProcessInstData(arrprocesslog, final_status, final_process_status, PRCT_ID, arrcode, arrurlResult) {
                      return new Promise((resolve, reject) => {
                          var arrCusTranInst = [];
                          var objCusTranInst = {};
                          objCusTranInst.MSG_ID = arrprocesslog[0].hdr_msg_id;
                          objCusTranInst.PRCT_ID = PRCT_ID;
                          objCusTranInst.REVERSAL_CODE = arrprocesslog[0].revrsal_code
                          objCusTranInst.UETR = arrprocesslog[0].uetr;
                          objCusTranInst.NPSSTRRD_REFNO = arrprocesslog[0].tran_ref_id;
                          objCusTranInst.PROCESS_NAME = 'Accept Reversal'
                          objCusTranInst.PROCESSING_SYSTEM = arrurlResult[0].processing_system;
                          objCusTranInst.PROCESS_TYPE = arrurlResult[0].process_type;
                          objCusTranInst.PROCESS_STATUS = final_process_status;
                          objCusTranInst.STATUS = final_status;
                          objCusTranInst.TENANT_ID = params.TENANT_ID;
                          objCusTranInst.APP_ID = '215'
                          objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                          objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                          objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                          objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                          objCusTranInst.CREATED_BY = params.CREATED_BY;
                          objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                          objCusTranInst.T24_RETURN_CODE = null;
                          objCusTranInst.CBUAE_RETURN_CODE = arrcode[0].param_code;
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
  
                          _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTranInsertRes) {
                              resolve(CusTranInsertRes)
  
                          })
                      })
  
                  }
  
  
                  //function to check forceTopost
                  function ForcetoPost(arrprocesslog) {
                      return new Promise((resolve, reject) => {
                          var Takepostcode = `select POSTING_RESTRICTION_CODE ,CUSTOMER_POSTING_RESTRICTION_CODE from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslog[0].dbtr_iban}'`
                          ExecuteQuery1(Takepostcode, function (arrCode) {
                              if (arrCode.length > 0) {
                                  if (arrCode[0].posting_restriction_code || arrCode[0].customer_posting_restriction_code) {
                                      var checkingRestrictId
                                      if (arrCode[0].posting_restriction_code) {
                                          checkingRestrictId = arrCode[0].posting_restriction_code || ''
                                      } else {
                                          checkingRestrictId = arrCode[0].customer_posting_restriction_code || ''
                                      }
  
                                      var TakingResid = `select applicable_dr_ac from CORE_NC_POST_RESTRICTIONS where restriction_id = '${checkingRestrictId}' and need_sync = 'Y'`
                                      ExecuteQuery1(TakingResid, function (arrRestid) {
                                          if (arrRestid.length) {
  
                                              if (arrRestid[0].applicable_dr_ac) {
                                                  var appdract = arrRestid[0].applicable_dr_ac.toUpperCase()
                                                  if (appdract == 'RESTRICT') {
                                                      resolve('Please use the Force Post option')
                                                  } else {
                                                      resolve('Call_Reserve_Fund_Api')
                                                  }
  
                                              } else {
                                                  resolve('Call_Reserve_Fund_Api')
                                              }
  
                                          } else {
                                              resolve('No data found in CORE_NC_POST_RESTRICTIONS table')
                                          }
  
                                      })
  
                                  } else {
                                      resolve('Call_Reserve_Fund_Api')
                                  }
  
  
                              } else {
                                  resolve('No data found in core_nc_cbs_account table for selected Tran DBTR_IBAN')
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
                  } function _BulkInsertProcessItem(insertarr, strTrnTableName, callbackInsert) {
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
