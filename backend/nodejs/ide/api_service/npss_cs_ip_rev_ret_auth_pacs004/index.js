var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
  try {
        /*   Created By :Daseen
        Created Date :04-11-2022
        Modified By : Siva Harish
        Modified Date : 17/12/2022    
        Reason for : 
        */
           var serviceName = 'NPSS IP REV Ret Auth PACS004';
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


        var objresponse = {
            'status': 'FAILURE',
            'data': '',
            'errdata':'',
            'msg': ''
        }; // Response to Client
        // Assign function for loginformation and session info

        reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
            try {
                objSessionLogInfo = objLogInfo; // Assing log information
                // Log Viewer Setup
                objSessionLogInfo.HANDLER_CODE = 'NPSS IP REV Ret Auth PACS004';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS IP REV Ret Auth PACS004';
                var cus_iban;
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, true, function (pSession) {
                    mTranConn = pSession; //  assign connection     
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                        try {
                            var PRCT_ID = prct_id
                            var ApitrnId
                            var app_id
                            var final_status
                            var final_process_status
                            var take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_IP_REV_RET_AUTH_PACS004' and param_code='URL'`;
                            var take_return_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_RETURN_PACK004' and param_code='URL'`;
                          //  var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_IP_REV_RETURN_PACS004' and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                          var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_IP_REV_RETURN_PACS004'`
                            //  var take_status = `Select success_process_status,success_status from core_nc_workflow_setup where rule_code='RCT_IP_REV_REQ_ACCEPT'`;
                            //var take_batch_name = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='BATCH_NAME'`;
                            // var take_api_params = `select  ns.remittance_info,ns.cr_acct_identification,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method,
                            // ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty,
                            // ns.uetr,ns.intrbk_sttlm_cur,ns.clrsysref,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt,ns.clrsysref,
                            // ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,accp_date_time as accp_dt_tm
                            // from npss_transactions ns  where npsst_id = '${params.Tran_Id}'`;
                            var take_api_params = `select  ns.remittance_info,ns.cr_acct_identification,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method,
                            ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty,
                           ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt,
                            ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm
                            from npss_transactions ns  where npsst_id = '${params.Tran_Id}'`;
                           // var TakeprssRefno = `select process_ref_no ,cbuae_return_code  from npss_trn_process_log  where uetr = '${params.uetr}' and status = 'IP_RCT_REV_INAU_POSTING_SUCCESS' and process_status = 'RCTRevINAUPostingSuccess'`;
                            // var TakenpsstrRefno2 = `select npsstrrd_refno,npsstpl_id from npss_trn_process_log  where uetr= '${params.uetr}' order by npsstpl_id  desc`
                            ExecuteQuery1(TakeStsPsts, function (arrurlResult) {
                                if (arrurlResult.length) {
                                    // var param_val = JSON.parse(arrurlResult[0].rule_param_value);
                                    // var url = arrurlResult[0].param_detail;
                                    final_process_status = arrurlResult[0].success_process_status
                                    final_status = arrurlResult[0].success_status
                                    ExecuteQuery1(take_api_params, function (arrprocesslog) {
                                        if (arrprocesslog.length) {
                                            console.log('................', arrprocesslog[0])
                                            var lclinstrm
                                            if (arrprocesslog[0].message_data !== null) {

                                                var parser = new xml2js.Parser({ strict: false, trim: true });
                                                parser.parseString(arrprocesslog[0].message_data, function (err, result) {

                                                    lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]

                                                });
                                                console.log('................', lclinstrm)
                                            }
                                            else {
                                                lclinstrm = ""
                                            }
                                            var takereturncode =  `select cbuae_return_code  from npss_trn_process_log  where  status = 'IP_RCT_RR_RETURN_READY'`;
                                            var TakeprssRefno = `select process_ref_no  from npss_trn_process_log  where uetr = '${params.uetr}' and status = 'IP_RCT_REV_INAU_POSTING_SUCCESS' and process_status = 'RCTRevINAUPostingSuccess'`;
                                            var TakeAcctInf = `select Alternate_Account_Type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslog[0].cdtr_iban}'`
                                            ExecuteQuery1(TakeprssRefno,function(arrprssRefno){
                                                ExecuteQuery1(takereturncode,function(arrreturncode){
                                                    ExecuteQuery1(TakeAcctInf, function (arrActInf) {
                                                        if (arrActInf.length) {
                                                            var amount
                                                            if (params.screenName == 's_rct_reversal_non_aed') {
                                                                var Takecontraamount = `select contra_amount from npss_trn_process_log where npsstpl_id = '${params.NPSSTPL_Id}'`
                                                                ExecuteQuery1(Takecontraamount, function (arramount) {
                                                                    var contra_amount = arramount[0].contra_amount || ''
                                                                    var reversal_amount = arrprocesslog[0].reversal_amount || ''
                                                                  
                                                                    if (contra_amount && reversal_amount) {
                                                                        if (Number(contra_amount) > Number(reversal_amount)) {
                                                                            amount = reversal_amount
                                                                        } else {
                                                                            amount = contra_amount
                                                                        }
                                                                        ExecuteQuery1(take_api_url, function (arrurl) {
                                                                            if (arrurl.length) {
                                                                                var url = arrurl[0].param_detail;
            
            
                                                                                fn_doapicall(url, arrprocesslog, arrActInf, lclinstrm, arrprssRefno,amount, function (firstapiresult) {
                                                                                    if (firstapiresult === "SUCCESS" || firstapiresult === "Success" || firstapiresult === "success") {
                                                                                        console.log('First API Call Success')
                                                                                        ExecuteQuery1(take_return_url, function (arrreturnurl) {
                                                                                            if (arrreturnurl.length) {
                                                                                                var returnurl = arrreturnurl[0].param_detail;
            
                                                                                                fn_doapicall2(returnurl, arrprocesslog, arrprssRefno,arrreturncode, function (secondapiresult) {
                                                                                                    if (secondapiresult === "SUCCESS" || secondapiresult === "Success" || secondapiresult === "success") {
            
                                                                                                        console.log('Second  API Call Success')
            
                                                                                                        var UpdateTrnTble = `Update npss_transactions set status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
                                                                                                        //var UpdateProcessLogTbl = `Update npss_trn_process_log set t24_return_code = '${params.T24_Return_Code}',cbuae_return_code = '${params.CBUAE_Return_Code}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsstpl_id = '${params.NPSSTPL_Id}'`
                                                                                                        ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                                                                            if (arrUpdTranTbl == 'SUCCESS') {
                                                                                                                objresponse.status = 'SUCCESS';
                                                                                                                sendResponse(null, objresponse);
                                                                                                            }
                                                                                                            else {
                                                                                                                // objresponse.status = 'No Data Updated in Transaction Table';
                                                                                                                // sendResponse(null, objresponse);
                                                                                                                console.log("No Data Updated in Transaction Table");
                                                                                                                objresponse.status = "FAILURE"
                                                                                                                objresponse.errdata = "No Data Updated in Transaction Table"
                                                                                                               sendResponse(null, objresponse)
            
                                                                                                            }
            
                                                                                                        }
                                                                                                        )
                                                                                                    } else {
                                                                                                        console.log("Second api calll not success");
                                                                                                        objresponse.status = "FAILURE"
                                                                                                        objresponse.errdata = "Second api call not success"
                                                                                                       sendResponse(null, objresponse)
            
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                            else {
                                                                                                console.log("Return URL not found workflow table");
                                                                                                objresponse.status = "FAILURE"
                                                                                                objresponse.errdata = "Return URL not found workflow table"
                                                                                               sendResponse(null, objresponse)
                                                                                            }
            
                                                                                        })
                                                                                    } else {
                                                                                        console.log("First api calll not success");
                                                                                        objresponse.status = "FAILURE"
                                                                                        objresponse.errdata = "First api call not success"
                                                                                       sendResponse(null, objresponse)
                                                                                    }
                                                                                })
                                                                            }
                                                                            else {
                                                                                console.log("Posting URL not found workflow table");
                                                                                objresponse.status = "FAILURE"
                                                                                objresponse.errdata = "Posting URL not found workflow table"
                                                                               sendResponse(null, objresponse)
                                                                            }
                                                                        })
                                                                    } else {
                                                                       objresponse.status = 'FAILURE'
                                                                       objresponse.data = 'Contra or Reversal Amount is Missing'
                                                                       sendResponse(null,objresponse)
                                                                    }
                                                                })
                                                            } else {
                                                                var intblkamt = arrprocesslog[0].intrbk_sttlm_amnt
                                                                var reversalAmt = arrprocesslog[0].reversal_amount
                                                                if(intblkamt&&reversalAmt){
                                                                    if (Number(reversalAmt) > Number(intblkamt)) {
                                                                        objresponse.status = 'FAILURE'
                                                                        objresponse.data = 'Reversal Amount is greater than Inter Bulk Settlement Amount'
                                                                        sendResponse(null,objresponse)
                                                                    } else {
                                                                        amount = reversalAmt
                                                                        ExecuteQuery1(take_api_url, function (arrurl) {
                                                                            if (arrurl.length) {
                                                                                var url = arrurl[0].param_detail;
            
            
                                                                                fn_doapicall(url, arrprocesslog, arrActInf, lclinstrm, arrprssRefno,amount, function (firstapiresult) {
                                                                                    if (firstapiresult === "SUCCESS" || firstapiresult === "Success" || firstapiresult === "success") {
                                                                                        console.log('First API Call Success')
                                                                                        ExecuteQuery1(take_return_url, function (arrreturnurl) {
                                                                                            if (arrreturnurl.length) {
                                                                                                var returnurl = arrreturnurl[0].param_detail;
            
                                                                                                fn_doapicall2(returnurl, arrprocesslog, arrprssRefno,arrreturncode, function (secondapiresult) {
                                                                                                    if (secondapiresult === "SUCCESS" || secondapiresult === "Success" || secondapiresult === "success") {
            
                                                                                                        console.log('Second  API Call Success')
            
                                                                                                        var UpdateTrnTble = `Update npss_transactions set status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
                                                                                                        //var UpdateProcessLogTbl = `Update npss_trn_process_log set t24_return_code = '${params.T24_Return_Code}',cbuae_return_code = '${params.CBUAE_Return_Code}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsstpl_id = '${params.NPSSTPL_Id}'`
                                                                                                        ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                                                                            if (arrUpdTranTbl == 'SUCCESS') {
                                                                                                                objresponse.status = 'SUCCESS';
                                                                                                                sendResponse(null, objresponse);
                                                                                                            }
                                                                                                            else {
                                                                                                                // objresponse.status = 'No Data Updated in Transaction Table';
                                                                                                                // sendResponse(null, objresponse);
                                                                                                                console.log("No Data Updated in Transaction Table");
                                                                                                                objresponse.status = "FAILURE"
                                                                                                                objresponse.errdata = "No Data Updated in Transaction Table"
                                                                                                               sendResponse(null, objresponse)
            
                                                                                                            }
            
                                                                                                        }
                                                                                                        )
                                                                                                    } else {
                                                                                                        console.log("Second api calll not success");
                                                                                                        objresponse.status = "FAILURE"
                                                                                                        objresponse.errdata = "Second api call not success"
                                                                                                       sendResponse(null, objresponse)
            
                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                            else {
                                                                                                console.log("Return URL not found workflow table");
                                                                                                objresponse.status = "FAILURE"
                                                                                                objresponse.errdata = "Return URL not found workflow table"
                                                                                               sendResponse(null, objresponse)
                                                                                            }
            
                                                                                        })
                                                                                    } else {
                                                                                        console.log("First api calll not success");
                                                                                        objresponse.status = "FAILURE"
                                                                                        objresponse.errdata = "First api call not success"
                                                                                       sendResponse(null, objresponse)
                                                                                    }
                                                                                })
                                                                            }
                                                                            else {
                                                                                console.log("Posting URL not found workflow table");
                                                                                objresponse.status = "FAILURE"
                                                                                objresponse.errdata = "Posting URL not found workflow table"
                                                                               sendResponse(null, objresponse)
                                                                            }
                                                                        })
                                                                    }
                                                                }else{
                                                                    objresponse.status = 'FAILURE'
                                                                    objresponse.data = 'IntBlkAmt or Reversal Amount is Missing'
                                                                    sendResponse(null,objresponse)
                                                                }
                                                               
        
        
                                                            }
        
        
                                                          //  ExecuteQuery1(TakeprssRefno, function (arrprssRefno) {
        
                                                                // if (arrprssRefno.length) {
                                                                //     var contra_amount = arrprssRefno[0].contra_amount || ''
                                                                //         var reversal_amount = arrprocesslog[0].reversal_amount || ''
                                                                //         var amount
                                                                //         if (contra_amount && reversal_amount) {
                                                                //             if (Number(contra_amount) > Number(reversal_amount)) {
                                                                //                 amount = reversal_amount
                                                                //             } else {
                                                                //                 amount = contra_amount
                                                                //             }
                                                                //         } else {
                                                                //             amount = ''
                                                                //         }
                                                                    // ExecuteQuery1(take_api_url, function (arrurl) {
                                                                    //     if (arrurl.length) {
                                                                    //         var url = arrurl[0].param_detail;
        
        
                                                                    //         fn_doapicall(url, arrprocesslog, arrActInf, lclinstrm, arrprssRefno,amount, function (firstapiresult) {
                                                                    //             if (firstapiresult === "SUCCESS" || firstapiresult === "Success" || firstapiresult === "success") {
                                                                    //                 console.log('First API Call Success')
                                                                    //                 ExecuteQuery1(take_return_url, function (arrreturnurl) {
                                                                    //                     if (arrreturnurl.length) {
                                                                    //                         var returnurl = arrreturnurl[0].param_detail;
        
                                                                    //                         fn_doapicall2(returnurl, arrprocesslog, arrprssRefno, function (secondapiresult) {
                                                                    //                             if (secondapiresult === "SUCCESS" || secondapiresult === "Success" || secondapiresult === "success") {
        
                                                                    //                                 console.log('Second  API Call Success')
        
                                                                    //                                 var UpdateTrnTble = `Update npss_transactions set status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
                                                                    //                                 //var UpdateProcessLogTbl = `Update npss_trn_process_log set t24_return_code = '${params.T24_Return_Code}',cbuae_return_code = '${params.CBUAE_Return_Code}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsstpl_id = '${params.NPSSTPL_Id}'`
                                                                    //                                 ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                                    //                                     if (arrUpdTranTbl == 'SUCCESS') {
                                                                    //                                         objresponse.status = 'SUCCESS';
                                                                    //                                         sendResponse(null, objresponse);
                                                                    //                                     }
                                                                    //                                     else {
                                                                    //                                         // objresponse.status = 'No Data Updated in Transaction Table';
                                                                    //                                         // sendResponse(null, objresponse);
                                                                    //                                         console.log("No Data Updated in Transaction Table");
                                                                    //                                         objresponse.status = "FAILURE"
                                                                    //                                         objresponse.errdata = "No Data Updated in Transaction Table"
                                                                    //                                        sendResponse(null, objresponse)
        
                                                                    //                                     }
        
                                                                    //                                 }
                                                                    //                                 )
                                                                    //                             } else {
                                                                    //                                 console.log("Second api calll not success");
                                                                    //                                 objresponse.status = "FAILURE"
                                                                    //                                 objresponse.errdata = "Second api call not success"
                                                                    //                                sendResponse(null, objresponse)
        
                                                                    //                             }
                                                                    //                         })
                                                                    //                     }
                                                                    //                     else {
                                                                    //                         console.log("Return URL not found workflow table");
                                                                    //                         objresponse.status = "FAILURE"
                                                                    //                         objresponse.errdata = "Return URL not found workflow table"
                                                                    //                        sendResponse(null, objresponse)
                                                                    //                     }
        
                                                                    //                 })
                                                                    //             } else {
                                                                    //                 console.log("First api calll not success");
                                                                    //                 objresponse.status = "FAILURE"
                                                                    //                 objresponse.errdata = "First api call not success"
                                                                    //                sendResponse(null, objresponse)
                                                                    //             }
                                                                    //         })
                                                                    //     }
                                                                    //     else {
                                                                    //         console.log("Posting URL not found workflow table");
                                                                    //         objresponse.status = "FAILURE"
                                                                    //         objresponse.errdata = "Posting URL not found workflow table"
                                                                    //        sendResponse(null, objresponse)
                                                                    //     }
                                                                    // })
                                                               
                                                           // })
                                                        }
                                                        else {
                                                            console.log("No Data found in accounts table");
                                                            objresponse.status = "FAILURE"
                                                            objresponse.errdata = "No Data found in accounts table"
                                                           sendResponse(null, objresponse)
                                                        }
                                                    })
                                                })
                                            })
                                          




                                        }
                                        else {
                                            console.log("No Data found in Transaction table");
                                            objresponse.status = "FAILURE"
                                            objresponse.errdata = "No Data found in Transaction table"
                                           sendResponse(null, objresponse)
                                        }

                                    })
                                }
                                else {

                                    console.log("No Data found in Workflow table");
                                    objresponse.status = "FAILURE"
                                    objresponse.errdata = "No Data found in Workflow table"
                                   sendResponse(null, objresponse)
                                }

                            })



                        }
                        catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    })




                    // Do API Call for Service 
                    function fn_doapicall(url, arrprocesslog, arrActInf, lclinstrm, arrprssRefno,amount, callbackapi) {
                        try {
                            var apiName = 'NPSS IP REV Accept INAU Reserve Fund'
                            var request = require('request');
                            var apiURL =
                                apiURL = url // apiURL + apiName
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {


                                    "payload": {
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
                                        //"value_date": arrprocesslog[0].value_date || '',
                                        //"ext_purpose_prty": arrprocesslog[0].ext_purpose_prty || '',
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
                                        "posting_ref_no": arrprssRefno[0].process_ref_no || ''


                                    },
                                    "AccountInformation": {
                                        "account_number": arrActInf[0].account_number || '',
                                        "company_code": arrActInf[0].company_code || '',
                                        "inactive_marker": arrActInf[0].inactive_marker || '',
                                        "currency": arrActInf[0].currency || '',
                                        "alternate_account_type": "OLD.IBAN",
                                        "alternate_account_id": arrActInf[0].alternate_account_id || ''
                                        /*  "CR.VA.NUMBER": cvAcNum || '',
                                         "curr_rate_segment": arrActInf[0].curr_rate_segment || '',
                                         "customer_id": arrActInf[0].customer_id || '',
                                         "account_officer": arrActInf[0].account_officer || ' '*/
                                    }
                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }



                            console.log('------------API JSON-------' + JSON.stringify(options));
                            reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);
                                } else {
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    console.log("------API CALL SUCCESS----");
                                    callbackapi(responseBodyFromImagingService)
                                }
                            });

                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    }

                    function fn_doapicall2(url, arrprocesslog, arrprssRefno,arrreturncode, callbackapi) {
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
                                   
                                     "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                              "hdr_created_date": arrprocesslog[0].hdr_created_date || '',
                   "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
               "intrbk_sttlm_amnt":arrprocesslog[0].intrbk_sttlm_amnt || '',
                 "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
            "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
         "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
        "uetr": arrprocesslog[0].uetr,
        "hdr_clearing_system": arrprocesslog[0].hdr_clearing_system || '',
       "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
       "post_reason_code": arrreturncode[0].cbuae_return_code || '',
           "clrsysref":arrprocesslog[0].clrsysref 

                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }



                            console.log('------------API JSON-------' + JSON.stringify(options));
                            reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);
                                } else {
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    console.log("------API CALL 2 SUCCESS----");
                                    callbackapi(responseBodyFromImagingService)
                                }
                            });

                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
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
                                reqTranDBInstance.Commit(mTranConn, false, function callbackres(res) {
                                    reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10005', '', error);
                                });
                            } else {
                                reqTranDBInstance.Commit(mTranConn, true, function callbackres(res) {
                                    reqInstanceHelper.SendResponse(serviceName, appResponse, response, objSessionLogInfo)
                                });
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
