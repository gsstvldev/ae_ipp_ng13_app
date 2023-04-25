var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    
    


/*  Created By :sIVA hARISH
Created Date : 16-12-2022
Modified By : sIVA hARISH
Modified Date : 17/12/2022
Modified By : sIVA hARISH
Modified Date : 19/12/2022
Modified By : sIVA hARISH
Modified Date : 24/12/2022
      Reason for : Changes For Finance House & query changes for taking status and remove api name
       Reason for : Handling Failure for unfreeze posting
         Reason for : changing error handling 12/01/2023
          Reason for : Remove Console log 17/01/2023
          Reason for :Changing Insert After api call success 24/01/2023
           Reason for :Changing INSERT payload and query 8/2/2023
            Reason for : Removing pacs002 api call for bot fh and fab 16/03/2023
             Reason for : adding retry value 29/03/2023
             Reason for : Handling prepaid and credit 21/04/2023
              Reason for : changing update query 25/04/2023
 
*/
var serviceName = 'NPSS Reversal Cancel';
var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
var params = appRequest.body.PARAMS; //  Client input fromm Server
var headers = appRequest.headers; // header details 
var objSessionLogInfo = null; // set value is null
var reqAsync = require('async');
var mTranConn = "";
var objresponse = {
'status': 'FAILURE',
'data': {},
'msg': ''
}; // Response to Client
// Assign function for loginformation and session info
reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
try {
    objSessionLogInfo = objLogInfo; // Assing log information
    // Log Viewer Setup
    objSessionLogInfo.HANDLER_CODE = 'NPSS Reversal Cancel';
    objSessionLogInfo.ACTION = 'ACTION';
    objSessionLogInfo.PROCESS = 'NPSS Reversal Cancel';
    // Get DB Connection 
    reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
        mTranConn = pSession; //  assign connection     
        reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
            if (error) {
                sendResponse(error);
            } else {
                var PRCT_ID = prct_id
                var success_process_status
                var success_status
                var extend_retry_value
                try {
                    var ruleqry = `select success_process_status,success_status,processing_system,process_type  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}'and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}' `
                    var take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_REVERSAL_CANCEL' and param_code='URL'  and need_sync = 'Y'`;

                    // Take Value from API Manager Table
                    if (params.PROD_CODE == 'NPSS_AEFAB') {
                        ExecuteQuery1(ruleqry, function (arrrule) {
                            try {
                                if (arrrule.length > 0) {
                                    success_process_status = arrrule[0].success_process_status;
                                    success_status = arrrule[0].success_status;
                                    var TakedatafrmTrn = `select fn_pcidss_decrypt(cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identi,* from npss_transactions where npsst_id = '${params.Id}'`

                                    ExecuteQuery1(TakedatafrmTrn, async function (arrdata) {
                                        if (arrdata.length > 0) {
                                            let CheckCreditPredpaid = await CheckTrn(success_process_status, success_status, arrdata,PRCT_ID)
                                            if(CheckCreditPredpaid == 0 || CheckCreditPredpaid == '0'){
                                                extend_retry_value = await GetRetrycount(arrdata[0].uetr)
                                                ExecuteQuery1(take_api_url, function (arrUrl) {
                                                    if (arrUrl.length > 0) {
                                                        var TakeAcctInf = `select Alternate_Account_Type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrdata[0].cdtr_iban}'`
                                                        ExecuteQuery1(TakeAcctInf, function (arrcbsact) {
                                                            var Takepostrefno = `select * from npss_trn_process_log where status = 'IP_RCT_REV_INAU_POSTING_SUCCESS' and uetr = '${arrdata[0].uetr}'`
                                                            ExecuteQuery1(Takepostrefno, function (arrpostno) {
                                                                if (arrpostno.length > 0) {
                                                                    fn_DoAPI(arrdata, arrUrl, arrcbsact, arrpostno, extend_retry_value, function (apiresult) {
                                                                        if (apiresult.status === "SUCCESS") {
                                                                            //   var Takeurl = `Select param_detail from core_nc_system_setup where param_category = 'NPSS_REJECT_PACK002' and param_code = 'URL' and need_sync = 'Y'`
                                                                            //   ExecuteQuery1(Takeurl, function (arrgeturl) {
                                                                            //       if (arrgeturl.length > 0) {
                                                                            //           var hdrqry = `select process_name,status,uetr,msg_id,fx_resv_text1 from npss_trn_process_log where process_name='Receive Pacs.007' and  status = 'IP_RCT_REVERSAL_REQ_RECEIVED' and uetr =  '${arrdata[0].uetr}'`
                                                                            // ExecuteQuery1(hdrqry, function (hdrresult) {
                                                                            //  if (hdrresult.length > 0) {
                                                                            //  fn_DoAPIServiceCall(arrdata, arrgeturl, hdrresult, function (getresult) { pac002
                                                                            //  if (getresult == 'SUCCESS') {
                                                                            var arrCusTranInst = [];
                                                                            var objCusTranInst = {};

                                                                            objCusTranInst.MSG_ID = arrdata[0].hdr_msg_id;
                                                                            objCusTranInst.PRCT_ID = PRCT_ID;
                                                                            objCusTranInst.REVERSAL_CODE = params.reversalcode
                                                                            objCusTranInst.UETR = arrdata[0].uetr;
                                                                            objCusTranInst.NPSSTRRD_REFNO = arrdata[0].tran_ref_id;
                                                                            objCusTranInst.PROCESS_NAME = 'Cancel Reversal'
                                                                            objCusTranInst.PROCESSING_SYSTEM = arrrule[0].processing_system;
                                                                            objCusTranInst.PROCESS_TYPE = arrrule[0].process_type;
                                                                            objCusTranInst.PROCESS_STATUS = success_process_status;
                                                                            objCusTranInst.STATUS = success_status;
                                                                            // objCusTranInst.CBUAE_RETURN_CODE = params.CBUAE_RETURN_CODE;
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
                                                                            _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTranInsertRes) {
                                                                                if (CusTranInsertRes.length > 0) {
                                                                                    var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='RCT_REV_CANCEL_REQ' and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}' `
                                                                                    ExecuteQuery1(ruleqry, function (arrsts) {
                                                                                        var updtranqry
                                                                                        if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') { 
                                                                                            updtranqry = `update npss_transactions set  maker = '${params.CREATED_BY_NAME}',status='${arrsts[0].success_status}',process_status='${arrsts[0].success_process_status}',remarks = '${params.remarks}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                                                                        }else{
                                                                                            updtranqry = `update npss_transactions set checker = '${params.CREATED_BY_NAME}', status='${arrsts[0].success_status}',process_status='${arrsts[0].success_process_status}',remarks = '${params.remarks}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                                                                        }
                                                                                        
                                                                                        ExecuteQuery(updtranqry, function (uptranresult) {
                                                                                            if (uptranresult == 'SUCCESS') {
                                                                                                objresponse.status = 'SUCCESS';
                                                                                                sendResponse(null, objresponse)
                                                                                            } else {
                                                                                                objresponse.status = 'Failure in Tran Status Update';
                                                                                                sendResponse(null, objresponse)
                                                                                            }
                                                                                        })
                                                                                    })



                                                                                } else {
                                                                                    objresponse.status = 'Error in TrnProcessLog Table Insert';
                                                                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                                                    sendResponse(null, objresponse)
                                                                                }

                                                                            })



                                                                            //   } else {
                                                                            //       objresponse.status = 'Fail From Pac002';
                                                                            //       reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                                            //       sendResponse(null, objresponse)
                                                                            //   }

                                                                            //  })
                                                                            //  } else {
                                                                            //  objresponse.status = 'No Data Found Against Pac007 in Trn Process Log Table';
                                                                            // sendResponse(null, objresponse)
                                                                            //  }
                                                                            //  })

                                                                            //   } else {
                                                                            //       objresponse.status = 'Url Not Found';

                                                                            //       sendResponse(null, objresponse)
                                                                            //   }

                                                                            // })
                                                                        } else {


                                                                            objresponse.status = 'Fail From T24 Unfreeze  Error Code -' + apiresult.error_code
                                                                            sendResponse(null, objresponse);

                                                                        }
                                                                    })
                                                                } else {
                                                                    objresponse.status = 'No Posting Ref No Found';
                                                                    sendResponse(null, objresponse)
                                                                }

                                                            })

                                                        })


                                                    } else {
                                                        objresponse.status = 'No Url Found'
                                                        objresponse.data.msg = 'No Url Found'
                                                        sendResponse(null, objresponse)
                                                    }
                                                })
                                            }
                                           


                                        } else {
                                            objresponse.status = 'No data found in npss tran table'
                                            sendResponse(null, objresponse)
                                        }

                                    })


                                } else {
                                    objresponse.status = 'No data found in core_nc_workflow_setup';
                                    objresponse.data.msg = 'No data found in core_nc_workflow_setup'
                                    sendResponse(null, objresponse)
                                }

                            } catch (error) {
                                sendResponse(error)
                            }
                        });
                    } else { //for finance house
                        var TakedatafrmTrn = `select * from npss_transactions where npsst_id = '${params.Id}'`
                        ExecuteQuery1(TakedatafrmTrn, function (arrdata) {
                            if (arrdata.length > 0) {

                                var ruleqry = `select success_process_status,success_status,processing_system,process_type  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}'and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                                ExecuteQuery1(ruleqry, function (arrsts) {
                                    if (arrsts.length > 0) {
                                        var arrCusTranInst = [];
                                        var objCusTranInst = {};

                                        objCusTranInst.MSG_ID = arrdata[0].hdr_msg_id;
                                        objCusTranInst.PRCT_ID = PRCT_ID;
                                        objCusTranInst.REVERSAL_CODE = params.reversalcode
                                        objCusTranInst.UETR = arrdata[0].uetr;
                                        objCusTranInst.NPSSTRRD_REFNO = arrdata[0].tran_ref_id;
                                        objCusTranInst.PROCESS_NAME = 'Cancel Reversal'
                                        objCusTranInst.PROCESSING_SYSTEM = arrsts[0].processing_system;
                                        objCusTranInst.PROCESS_TYPE = arrsts[0].process_type;
                                        objCusTranInst.PROCESS_STATUS = success_process_status;
                                        objCusTranInst.STATUS = success_status;
                                        // objCusTranInst.CBUAE_RETURN_CODE = params.CBUAE_RETURN_CODE;
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
                                        _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTranInsertRes) {
                                            if (CusTranInsertRes.length > 0) {
                                                var updtranqry
                                                if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') { 
                                                    updtranqry = `update npss_transactions set maker = '${params.CREATED_BY_NAME}', status='${arrsts[0].success_status}',process_status='${arrsts[0].success_process_status}',remarks = '${params.remarks}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                                }else{
                                                    updtranqry = `update npss_transactions set checker = '${params.CREATED_BY_NAME}',status='${arrsts[0].success_status}',process_status='${arrsts[0].success_process_status}',remarks = '${params.remarks}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `   
                                                } 
                                                
                                                ExecuteQuery(updtranqry, function (uptranresult) {
                                                    if (uptranresult == 'SUCCESS') {
                                                        objresponse.status = 'SUCCESS';
                                                        sendResponse(null, objresponse)
                                                    } else {
                                                        objresponse.status = 'Failure in Tran Status Update';
                                                        sendResponse(null, objresponse)
                                                    }
                                                })
                                            } else {
                                                objresponse.status = 'Error in Table Insert'
                                                objresponse.data.msg = 'Error in Table Insert'
                                                sendResponse(null, objresponse)
                                            }
                                        })
                                    } else {
                                        objresponse.status = 'No data found in core_nc_workflow_setup';
                                        objresponse.data.msg = 'No data found in core_nc_workflow_setup'
                                        sendResponse(null, objresponse)
                                    }

                                })








                            } else {
                                objresponse.status = 'FAILURE';
                                objresponse.data.msg = 'No data for this Tran Id'
                                sendResponse(null, objresponse)
                            }
                        })
                    }


                    // Do API Call for Service 
                    function fn_DoAPI(trndata, url, arrActInf, arrpostno, extend_retry_value, callbackapi) {
                        try {

                            var request = require('request');
                            var apiURL =
                                apiURL = url[0].param_detail // apiURL + apiName
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {


                                    "payload": {
                                        "ext_iden_retry_value": extend_retry_value || '',
                                        "hdr_settlement_date": trndata[0].hdr_settlement_date,
                                        "intrbk_sttlm_cur": trndata[0].intrbk_sttlm_cur,
                                        "intrbk_sttlm_amnt": trndata[0].intrbk_sttlm_amnt,
                                        "dbtr_iban": trndata[0].dbtr_iban,
                                        "cdtr_iban": trndata[0].cdtr_iban,

                                        "uetr": trndata[0].uetr,

                                        "posting_ref_no": arrpostno[0].process_ref_no,
                                        "dbtr_acct_name": trndata[0].dbtr_acct_name,
                                        "cdtr_acct_name": trndata[0].cdtr_acct_name,
                                        "process_type": "IP",



                                    },
                                    "AccountInformation": {
                                        "account_number": arrActInf[0].account_number || '',
                                        "company_code": arrActInf[0].company_code || '',

                                        "currency": arrActInf[0].currency || ''


                                    }
                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }



                            var PrintInfo = {}
                            PrintInfo.url = url[0].param_detail || ''
                            PrintInfo.hdr_settlement_date = trndata[0].hdr_settlement_date || ''
                            PrintInfo.uetr = trndata[0].uetr || ''
                            PrintInfo.posting_ref_no = arrpostno[0].process_ref_no || ''
                            reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);

                                } else {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    var responseData = JSON.parse(responseBodyFromImagingService)
                                    callbackapi(responseData)
                                }
                            });
                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    }

                    function GetRetrycount(uetr) {
                        return new Promise((resolve, reject) => {
                            var TakeretryValue = `select ext_iden_retry_value from npss_trn_process_log where ext_iden_retry_value IS NOT NULL and uetr = '${uetr}' order by npsstpl_id desc`
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
                                    resolve(1)
                                }

                            })
                        })
                    }


                    //check perpaid or credit or iban
                    function CheckTrn(success_process_status,success_status,arrprocesslog,PRCT_ID){
                        return new Promise((resolve,reject)=>{
                            if (arrprocesslog[0].cdtr_iban) {
                               Iban = arrprocesslog[0].cdtr_iban.slice(-16)
                               FrmIban = Iban.substring(0, 3)
                               if (FrmIban == '564' || FrmIban == 564) {
                                  UpdateTranDB(success_process_status,success_status,arrprocesslog,PRCT_ID)
                               } else {
                                  if (arrprocesslog[0].cr_acct_identi && arrprocesslog[0].cr_acct_id_code == 'AIIN') {
                                     var TakeacctIden = arrprocesslog[0].cr_acct_identi.substring(0, 6)
                                     var checkCard = `select * from CORE_NC_CARD_BIN_SETUP where bin_number = '${TakeacctIden}' and need_sync = 'Y'`
                                     ExecuteQuery1(checkCard, function (arrCradType) {
                                        if (arrCradType.length) {
                                            UpdateTranDB(success_process_status,success_status,arrprocesslog,PRCT_ID)
                                        } else {
                                           objresponse.status = "No Data in CORE_NC_CARD_BIN_SETUP for this Bin Number" + TakeacctIden
                                           objresponse.errdata = "No Data in CORE_NC_CARD_BIN_SETUP for this Bin Number" + TakeacctIden
                                           sendResponse(null, objresponse)
                                        }
          
                                     })
                                  } else {
                                     resolve(0)
                                  }
          
                               }
          
                            } else {
                               if (arrprocesslog[0].cr_acct_identi && arrprocesslog[0].cr_acct_id_code == 'AIIN') {
                                  var TakeacctIden1 = arrprocesslog[0].cr_acct_identi.substring(0, 6)
                                  var checkCard1 = `select * from CORE_NC_CARD_BIN_SETUP where bin_number = '${TakeacctIden1}' and need_sync = 'Y'`
                                  ExecuteQuery1(checkCard1, function (arrCradType) {
                                     if (arrCradType.length) {
                                        UpdateTranDB(success_process_status,success_status,arrprocesslog,PRCT_ID)
          
                                     } else {
                                        objresponse.status = "No Data in CORE_NC_CARD_BIN_SETUP for this Bin Number" + TakeacctIden1
                                        objresponse.errdata = "No Data in CORE_NC_CARD_BIN_SETUP for this Bin Number" + TakeacctIden1
                                        sendResponse(null, objresponse)
                                     }
          
                                  })
          
                               } else {
                                  resolve(0)
                               }
          
                            }
                        })
                    }

                  function UpdateTranDB(success_process_status,success_status,arrdata,PRCT_ID){
                    var updtranqry
                    if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') { 
                        updtranqry = `update npss_transactions set maker = '${params.CREATED_BY_NAME}', status='${success_status}',process_status='${success_process_status}',remarks = '${params.remarks}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                    }else{
                        updtranqry = `update npss_transactions set checker = '${params.CREATED_BY_NAME}', status='${success_status}',process_status='${success_process_status}',remarks = '${params.remarks}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                    }
                    
                    ExecuteQuery(updtranqry, function (uptranresult) {
                        if (uptranresult == 'SUCCESS') {
                            objresponse.status = 'SUCCESS';
                            sendResponse(null, objresponse)
                        } else {
                            objresponse.status = 'Failure in Tran Status Update';
                            sendResponse(null, objresponse)
                        }
                    })
                    }

                    // Do API Call for Service 
                    function fn_DoAPIServiceCall(tranresult, url, hdrresult, callbackapi) {
                        try {
                            var request = require('request');
                            var apiURL =
                                apiURL = url[0].param_detail // apiURL + apiName
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                    "cr_sort_code": tranresult[0].cr_sort_code,
                                    "dr_sort_code": tranresult[0].dr_sort_code,
                                    "hdr_msg_id": hdrresult[0].msg_id,
                                    "hdr_created_date": hdrresult[0].fx_resv_text1,
                                    "hdr_total_amount": tranresult[0].hdr_total_amount,
                                    "payment_endtoend_id": tranresult[0].payment_endtoend_id,
                                    "uetr": tranresult[0].uetr,
                                    "tran_ref_id": tranresult[0].tran_ref_id,
                                    "active_status": 'RJCT',
                                    "clrsysref": tranresult[0].clrsysref,
                                    "rsn_code": params.CBUAE_RETURN_CODE


                                },
                                headers: {
                                    'content-type': 'application/json'
                                }
                            };


                            reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);

                                } else {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    callbackapi(responseBodyFromImagingService)
                                }
                            });
                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error);
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

                } catch (error) {
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
    })
} catch (error) {
    reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
}
})














});

module.exports = app;
