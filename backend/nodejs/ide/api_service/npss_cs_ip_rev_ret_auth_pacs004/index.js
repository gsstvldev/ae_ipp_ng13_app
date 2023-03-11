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
        Modified Date : 18/12/2022    
         Modified By : Siva Harish
        Modified Date : 19/12/2022
         Modified By : Siva Harish
        Modified Date : 20/12/2022  
        Modified By : Siva Harish
        Modified Date : 22/12/2022  
         Modified By : Siva Harish
        Modified Date : 26/12/2022  
         Modified By : Siva Harish
        Modified Date : 27/12/2022
         Modified By : Siva Harish
        Modified Date : 08/01/2023  
        Reason for : For Finance House 
        Reason for : Handling Failure response for auth 004
         Reason for : Taking Contra amount using accept success status for non aed 20/12/2022 10:40am
              Reason for : Adding Reversal Id for fab
           Reason for : Adding Prepaid and credit api Call api function for fab 27/12/2022
            Reason for : Handling Error msg for process ref no for fab 28/12/2022
              Reason for : calling fn_pcidss_decrypt function for taking and converting masking cr_identification_code 08/01/2023
               Reason for : changing response diagloue 12/01/2023
                Reason for : Remove Console log 17/01/2023
                  Reason for : Remove Credit and Prepaid Card api calls 06/02/2023
                  Reason for : changes in contra amount query 15/02/2023
                   Reason for : changes contra amount logic 18/02/2023
                    Reason for : changes Authpac004 07/03/2023
                    Reason for : changes Authpac004 11/03/2023
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
            'errdata': '',
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
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection     
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                        try {
                            var PRCT_ID = prct_id
                            var ApitrnId
                            var app_id

                            var apicalls
                            var reverandRefno

                            var final_status
                            var final_process_status
                            var take_api_url
                            var take_return_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_RETURN_PACK004' and param_code='URL' and need_sync = 'Y'`;

                            var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_IP_REV_RETURN_PACS004'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`


                            var take_api_params = `select fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,ns.department_code, ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id = '${params.Tran_Id}'`;
                            if (params.PROD_CODE == 'NPSS_AEFAB') {
                                ExecuteQuery1(TakeStsPsts, function (arrurlResult) {
                                    if (arrurlResult.length) {

                                        final_process_status = arrurlResult[0].success_process_status
                                        final_status = arrurlResult[0].success_status
                                        ExecuteQuery1(take_api_params, function (arrprocesslog) {
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
                                                var takereturncode = `select cbuae_return_code  from npss_trn_process_log  where  status = 'IP_RCT_RR_RETURN_READY' and uetr = '${arrprocesslog[0].uetr}'`;

                                                ExecuteQuery1(takereturncode, async function (arrreturncode) {
                                                    if (arrreturncode.length > 0) {

                                                        // apicalls = 0 --> auth 004 api call
                                                        // apicalls = 1 --> prepaid card api call
                                                        // apicalls = 2 --> credit card api call


                                                        if (params.roleId == '708' || params.roleId == 708 || params.roleId == '738' || params.roleId == 738) { //for checking prepaid or credit only for checker
                                                            apicalls = await checkprepaidorcredit(arrprocesslog)
                                                        } else {
                                                            apicalls = 0
                                                        }

                                                        if (apicalls == 0) { // Logic For Taking Reversal Id and Taking PostingRefno and account Information only for auth004 api call
                                                            reverandRefno = await TakeReversalIdandPostRefno(arrprocesslog)
                                                        }
                                                        //else { // Taking Reversal ID for Prepaid and Credit Card
                                                        //     reverandRefno = await ReverseIdFrcdtpdt(arrprocesslog, apicalls)
                                                        // }

                                                        if (apicalls == 0 || apicalls == '0') { // Auth004 and Pac004 api call
                                                            take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_IP_REV_RET_AUTH_PACS004' and param_code='URL' and need_sync = 'Y'`;
                                                        } else if (apicalls == 1 || apicalls == '1' || apicalls == 2 || apicalls == '2') { //Prepaid and Pac004 api Call
                                                            take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_RETURN_PACK004' and param_code='URL' and need_sync = 'Y'`;
                                                        }

                                                        var amount
                                                        var Getdata
                                                        if (apicalls == 0 && params.screenName == 's_rct_reversal_non_aed') {
                                                            Getdata = await GetgmMargin(arrprocesslog)
                                                        } else {
                                                            Getdata = {}
                                                        }
                                                        if (params.screenName == 's_rct_reversal_non_aed') {

                                                            var ContraAmount = await getconamount(arrprocesslog, apicalls)
                                                            amount = ContraAmount

                                                            ExecuteQuery1(take_api_url, function (arrurl) {
                                                                if (arrurl.length) {
                                                                    var url = arrurl[0].param_detail;
                                                                    if (apicalls == 0 || apicalls == '0') {
                                                                        fn_doapicall(url, arrprocesslog, lclinstrm, amount, reverandRefno, Getdata, params.screenName, function (firstapiresult) {
                                                                            if (firstapiresult.status === "SUCCESS" || firstapiresult.status === "Success" || firstapiresult.status === "success") {

                                                                                ExecuteQuery1(take_return_url, function (arrreturnurl) {
                                                                                    if (arrreturnurl.length) {
                                                                                        var returnurl = arrreturnurl[0].param_detail;
                                                                                        var Amount

                                                                                        if (firstapiresult.LocAmtDebited) {
                                                                                            try {
                                                                                                if (firstapiresult.LocAmtDebited && arrprocesslog[0].intrbk_sttlm_amnt) {
                                                                                                    if (Number(firstapiresult.LocAmtDebited) > Number(arrprocesslog[0].intrbk_sttlm_amnt)) {
                                                                                                        Amount = arrprocesslog[0].intrbk_sttlm_amnt || ''
                                                                                                    } else {
                                                                                                        Amount = firstapiresult.LocAmtDebited
                                                                                                    }
                                                                                                } else {
                                                                                                    Amount = arrprocesslog[0].intrbk_sttlm_amnt || ''
                                                                                                }
                                                                                            } catch (error) {
                                                                                                Amount = arrprocesslog[0].intrbk_sttlm_amnt || ''
                                                                                            }


                                                                                        } else {
                                                                                            Amount = arrprocesslog[0].intrbk_sttlm_amnt || ''
                                                                                        }
                                                                                        fn_doapicall2(returnurl, arrprocesslog, arrreturncode, Amount, params.screenName, function (secondapiresult) {
                                                                                            if (secondapiresult === "SUCCESS" || secondapiresult === "Success" || secondapiresult === "success") {

                                                                                                var UpdateTrnTble = `Update npss_transactions set status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
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

                                                                                                }
                                                                                                )
                                                                                            } else {

                                                                                                objresponse.status = "FAILURE"
                                                                                                objresponse.errdata = "Second api call not success"
                                                                                                sendResponse(null, objresponse)

                                                                                            }
                                                                                        })
                                                                                    }
                                                                                    else {

                                                                                        objresponse.status = "FAILURE"
                                                                                        objresponse.errdata = "Return URL not found workflow table"
                                                                                        sendResponse(null, objresponse)
                                                                                    }

                                                                                })
                                                                            } else {
                                                                                objresponse.status = "FAILURE"
                                                                                objresponse.errdata = 'Auth Pac004 Api Call Failure Error Code Found - ' + firstapiresult.error_code
                                                                                sendResponse(null, objresponse);

                                                                            }
                                                                        })
                                                                    } else if (apicalls == 1 || apicalls == '1' || apicalls == 2 || apicalls == '2') {

                                                                        ExecuteQuery1(take_api_url, function (arrreturnurl) {
                                                                            if (arrreturnurl.length) {
                                                                                var Amount
                                                                                var returnurl = arrreturnurl[0].param_detail;
                                                                                fn_doapicall2(returnurl, arrprocesslog, arrreturncode, Amount, function (secondapiresult) {
                                                                                    if (secondapiresult === "SUCCESS" || secondapiresult === "Success" || secondapiresult === "success") {

                                                                                        var UpdateTrnTble = `Update npss_transactions set status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
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

                                                                                        }
                                                                                        )
                                                                                    } else {

                                                                                        objresponse.status = "FAILURE"
                                                                                        objresponse.errdata = "Pac004  api call not success"
                                                                                        sendResponse(null, objresponse)

                                                                                    }
                                                                                })
                                                                            }
                                                                            else {

                                                                                objresponse.status = "FAILURE"
                                                                                objresponse.errdata = "Return URL not found workflow table"
                                                                                sendResponse(null, objresponse)
                                                                            }

                                                                        })


                                                                    }


                                                                }
                                                                else {

                                                                    objresponse.status = "FAILURE"
                                                                    objresponse.errdata = "Posting URL not found workflow table"
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            })


                                                        } else {
                                                            var intblkamt = arrprocesslog[0].intrbk_sttlm_amnt
                                                            var reversalAmt = arrprocesslog[0].reversal_amount
                                                            if (intblkamt && reversalAmt) {
                                                                if (Number(reversalAmt) > Number(intblkamt)) {
                                                                    objresponse.status = 'FAILURE'
                                                                    objresponse.errdata = 'Reversal Amount is greater than Inter Bulk Settlement Amount'
                                                                    sendResponse(null, objresponse)
                                                                } else {
                                                                    amount = reversalAmt
                                                                    ExecuteQuery1(take_api_url, function (arrurl) {
                                                                        if (arrurl.length) {
                                                                            var url = arrurl[0].param_detail;
                                                                            if (apicalls == 0 || apicalls == '0') {
                                                                                var Amount
                                                                                fn_doapicall(url, arrprocesslog, lclinstrm, amount, reverandRefno, Getdata, params.screenName, function (firstapiresult) {
                                                                                    if (firstapiresult.status === "SUCCESS" || firstapiresult.status === "Success" || firstapiresult.status === "success") {

                                                                                        ExecuteQuery1(take_return_url, function (arrreturnurl) {
                                                                                            if (arrreturnurl.length) {
                                                                                                var returnurl = arrreturnurl[0].param_detail;

                                                                                                fn_doapicall2(returnurl, arrprocesslog, arrreturncode, Amount, params.screenName, function (secondapiresult) {
                                                                                                    if (secondapiresult === "SUCCESS" || secondapiresult === "Success" || secondapiresult === "success") {



                                                                                                        var UpdateTrnTble = `Update npss_transactions set status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`

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

                                                                                                        }
                                                                                                        )
                                                                                                    } else {

                                                                                                        objresponse.status = "FAILURE"
                                                                                                        objresponse.errdata = "After Auth004, Pac004 api call not success"
                                                                                                        sendResponse(null, objresponse)

                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                            else {

                                                                                                objresponse.status = "FAILURE"
                                                                                                objresponse.errdata = "Return URL not found workflow table"
                                                                                                sendResponse(null, objresponse)
                                                                                            }

                                                                                        })
                                                                                    } else {

                                                                                        objresponse.status = "FAILURE"
                                                                                        objresponse.errdata = 'Auth Pac004 Api Call Failure Error Code Found - ' + firstapiresult.error_code
                                                                                        sendResponse(null, objresponse);
                                                                                    }
                                                                                })
                                                                            } else if (apicalls == 1 || apicalls == '1' || apicalls == 2 || apicalls == '2') {

                                                                                ExecuteQuery1(take_api_url, function (arrreturnurl) {
                                                                                    if (arrreturnurl.length) {
                                                                                        var Amount
                                                                                        var returnurl = arrreturnurl[0].param_detail;
                                                                                        fn_doapicall2(returnurl, arrprocesslog, arrreturncode, Amount, params.screenName, function (secondapiresult) {
                                                                                            if (secondapiresult === "SUCCESS" || secondapiresult === "Success" || secondapiresult === "success") {

                                                                                                var UpdateTrnTble = `Update npss_transactions set status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
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

                                                                                                }
                                                                                                )
                                                                                            } else {

                                                                                                objresponse.status = "FAILURE"
                                                                                                objresponse.errdata = " Pac004  api call not success"
                                                                                                sendResponse(null, objresponse)

                                                                                            }
                                                                                        })
                                                                                    }
                                                                                    else {

                                                                                        objresponse.status = "FAILURE"
                                                                                        objresponse.errdata = "Return URL not found workflow table"
                                                                                        sendResponse(null, objresponse)
                                                                                    }

                                                                                })


                                                                            }

                                                                        }
                                                                        else {

                                                                            objresponse.status = "FAILURE"
                                                                            objresponse.errdata = "Posting URL not found workflow table"
                                                                            sendResponse(null, objresponse)
                                                                        }
                                                                    })
                                                                }
                                                            } else {
                                                                objresponse.status = 'FAILURE'
                                                                objresponse.errdata = 'IntBlkAmt or Reversal Amount is Missing'
                                                                sendResponse(null, objresponse)
                                                            }



                                                        }











                                                        // }
                                                        // else {
                                                        //     console.log("No Data found in accounts table");
                                                        //     objresponse.status = "FAILURE"
                                                        //     objresponse.errdata = "No Data found in accounts table"
                                                        //     sendResponse(null, objresponse)
                                                        // }
                                                        // })
                                                    } else {
                                                        objresponse.status = "FAILURE"
                                                        objresponse.errdata = "CBUAE Return Code Not Found"
                                                        sendResponse(null, objresponse)
                                                    }
                                                })
                                                // } else {
                                                //     objresponse.status = "FAILURE"
                                                //     objresponse.errdata = "Process Refno is missing"
                                                //     sendResponse(null, objresponse)
                                                // }
                                                //  })





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
                                        ExecuteQuery1(take_api_params, function (arrprocesslog) {
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
                                                var takereturncode = `select cbuae_return_code  from npss_trn_process_log  where  status = 'IP_RCT_RR_RETURN_READY' and uetr = '${arrprocesslog[0].uetr}'`;
                                                var Amount
                                                ExecuteQuery1(takereturncode, function (arrreturncode) {
                                                    if (arrreturncode.length > 0) {
                                                        ExecuteQuery1(take_return_url, function (arrreturnurl) {
                                                            if (arrreturnurl.length) {
                                                                var returnurl = arrreturnurl[0].param_detail;
                                                                fn_doapicall2(returnurl, arrprocesslog, arrreturncode, Amount, params.screenName, function (secondapiresult) {
                                                                    if (secondapiresult === "SUCCESS" || secondapiresult === "Success" || secondapiresult === "success") {



                                                                        var UpdateTrnTble = `Update npss_transactions set status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`

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

                                                                        }
                                                                        )
                                                                    } else {

                                                                        objresponse.status = "FAILURE"
                                                                        objresponse.errdata = "Pac004 api call not success"
                                                                        sendResponse(null, objresponse)

                                                                    }
                                                                })
                                                            } else {

                                                                objresponse.status = "FAILURE"
                                                                objresponse.errdata = "Pac004 URL not found workflow table"
                                                                sendResponse(null, objresponse)
                                                            }

                                                        })
                                                    } else {
                                                        objresponse.status = "FAILURE"
                                                        objresponse.errdata = "CBUAE Return Code is missing"
                                                        sendResponse(null, objresponse)
                                                    }


                                                })

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




                    // Do API Call for Service 
                    function fn_doapicall(url, arrprocesslog, lclinstrm, amount, reverandRefno, Getdata, screenName, callbackapi) {
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
                                        "alternate_account_type": "OLD.IBAN",
                                        "alternate_account_id": reverandRefno.alternate_account_id || ''

                                    }
                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }

                            if (screenName == 's_rct_reversal_non_aed') {
                                options.json.payload.GMMargin = Getdata.GMMargin || '',
                                    options.json.payload.GMRate = Getdata.GMRate || '',
                                    options.json.payload.amount_credited_loc_cur = Getdata.amount_credited_loc_cur || ''
                            }

                            var PrintInfo = {}
                            PrintInfo.url = url || ''
                            PrintInfo.uetr = arrprocesslog[0].uetr || ''
                            PrintInfo.reversal_id = reverandRefno.reverseId || ''
                            PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                            PrintInfo.clrsysref = arrprocesslog[0].clrsysref || ''

                            reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);

                                } else {
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    var Responsedata = JSON.parse(responseBodyFromImagingService)
                                    callbackapi(Responsedata)
                                }
                            });

                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    }

                    function fn_doapicall2(url, arrprocesslog, arrreturncode, amount, screenName, callbackapi) {
                        try {
                            var apiName = 'NPSS IP RETURN PACS004'
                            var request = require('request');
                            var apiURL =
                                apiURL = url // apiURL + apiName
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {

                                    "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                                    "hdr_settlement_date": arrprocesslog[0].hdr_settlement_date || '',
                                    "hdr_created_date": arrprocesslog[0].hdr_created_date || '',
                                    "hdr_settlement_method": arrprocesslog[0].hdr_settlement_method || '',
                                    "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',

                                    "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                                    "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                                    "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                                    "uetr": arrprocesslog[0].uetr,
                                    "hdr_clearing_system": arrprocesslog[0].hdr_clearing_system || '',
                                    "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                                    "post_reason_code": arrreturncode[0].cbuae_return_code || '',
                                    "clrsysref": arrprocesslog[0].clrsysref


                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }


                            if (screenName == 's_rct_reversal_non_aed') {
                                options.json.intrbk_sttlm_amnt = amount
                            }else{
                                options.json.intrbk_sttlm_amnt = arrprocesslog[0].intrbk_sttlm_amnt || ''
                            }

                            reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);


                                } else {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode

                                    callbackapi(responseBodyFromImagingService)
                                }
                            });

                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    }


                    //Prepaid Card Api Call only for checker
                    function fn_doPrepaidapicall(url, arrprocesslog, lclinstrm, amount, reverandRefno, callbackapi) {
                        try {
                            var apiName = 'NPSS IP REV RET PREPAID API CALL'
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

                                        "lclinstrm": lclinstrm || '',
                                        "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                                        "intrbk_sttlm_amnt": amount || '',
                                        "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
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

                                        "process_type": arrprocesslog[0].process_type || '',
                                        "status": params.STATUS || '',
                                        "process_status": params.ELIGIBLE_PROCESS_STATUS || '',
                                        "clrsysref": arrprocesslog[0].clrsysref,
                                        "card_type": "PREPAID_CARD",
                                        "process": "",
                                        "remittance_information": arrprocesslog[0].remittance_info || '',
                                        "reversal_id": reverandRefno.reverseId || ''



                                    }
                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }



                            var PrintInfo = {}
                            PrintInfo.url = url || ''
                            PrintInfo.uetr = arrprocesslog[0].uetr || ''
                            PrintInfo.card_type = "Prepaid Card" || ''
                            PrintInfo.reversal_id = reverandRefno.reverseId || ''
                            PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                            PrintInfo.clrsysref = arrprocesslog[0].clrsysref || ''

                            reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);


                                } else {
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    var Responsedata = JSON.parse(responseBodyFromImagingService)
                                    callbackapi(Responsedata)
                                }
                            });

                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    }


                    function GetgmMargin(arrprocesslog) {
                        return new Promise((resolve, reject) => {
                            var Takedata = `select exchange_rate,gm_margin from npss_trn_process_log where process_name = 'Get Deal' and uetr = '${arrprocesslog[0].uetr}' order by npsstpl_id desc`
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
                        })
                    }




                    //Function to call Credit Card api

                    function fn_doCreditapicall(url, arrprocesslog, lclinstrm, amount, reverandRefno, callbackapi) {
                        try {
                            var apiName = 'NPSS IP REV RET CREDIT API CALL'
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

                                        "lclinstrm": lclinstrm || '',
                                        "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                                        "intrbk_sttlm_amnt": amount || '',
                                        "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
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

                                        "process_type": arrprocesslog[0].process_type || '',
                                        "status": params.STATUS || '',
                                        "process_status": params.ELIGIBLE_PROCESS_STATUS || '',
                                        "clrsysref": arrprocesslog[0].clrsysref,
                                        "card_type": "CREDIT_CARD",
                                        "process": "",
                                        "remittance_information": arrprocesslog[0].remittance_info || '',
                                        "reversal_id": reverandRefno.reverseId || ''



                                    }
                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }



                            var PrintInfo = {}
                            PrintInfo.url = url || ''
                            PrintInfo.uetr = arrprocesslog[0].uetr || ''
                            PrintInfo.card_type = "Credit Card" || ''
                            PrintInfo.reversal_id = reverandRefno.reverseId || ''
                            PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                            PrintInfo.clrsysref = arrprocesslog[0].clrsysref || ''

                            reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);


                                } else {
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    var Responsedata = JSON.parse(responseBodyFromImagingService)
                                    callbackapi(Responsedata)
                                }
                            });

                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    }






                    function getconamount(arrprocesslog, apicalls) {
                        return new Promise((resolve, reject) => {
                            var Takecontraamount = `select contra_amount from npss_trn_process_log where process_name = 'Get Deal' and uetr = '${arrprocesslog[0].uetr}' order by npsstpl_id desc`
                            ExecuteQuery1(Takecontraamount, function (arramount) {
                                if (arramount.length > 0) {
                                    if (arramount[0].contra_amount != null) {
                                        if (apicalls == '0' || apicalls == 0) {
                                            var Takecreditamount = `select amount_credited  from npss_trn_process_log WHERE process_name = 'Inward Credit Posting' and status = 'IP_RCT_POSTING_SUCCESS' and uetr = '${arrprocesslog[0].uetr}'`
                                            ExecuteQuery1(Takecreditamount, function (arrcctamount) {
                                                if (arrcctamount.length > 0) {
                                                    if (arrcctamount[0].amount_credited != null) {
                                                        var creditAmount = arrcctamount[0].amount_credited.slice(3)
                                                        if (arramount[0].contra_amount && creditAmount) {
                                                            if (Number(arramount[0].contra_amount) > Number(creditAmount)) {
                                                                resolve(creditAmount)

                                                            } else {
                                                                resolve(arramount[0].contra_amount)

                                                            }
                                                        } else {
                                                            objresponse.status = 'FAILURE'
                                                            objresponse.errdata = 'Inward Credit  Amount or contra amount is Missing'
                                                            sendResponse(null, objresponse)
                                                        }

                                                    } else {
                                                        objresponse.status = 'FAILURE'
                                                        objresponse.errdata = 'Inward Credit  Amount  is Missing'
                                                        sendResponse(null, objresponse)
                                                    }

                                                } else {
                                                    objresponse.status = 'FAILURE'
                                                    objresponse.errdata = 'Inward Credit  Amount is not found'
                                                    sendResponse(null, objresponse)
                                                }

                                            })
                                        } else {
                                            resolve(arramount[0].contra_amount)
                                        }

                                    } else {
                                        objresponse.status = 'FAILURE'
                                        objresponse.errdata = 'Contra or Reversal Amount is Missing'
                                        sendResponse(null, objresponse)
                                    }

                                } else {
                                    objresponse.status = 'FAILURE'
                                    objresponse.errdata = 'Contra Amount is not found'
                                    sendResponse(null, objresponse)
                                }
                            })
                        })
                    }









                    //function to check prepaid or credit
                    function checkprepaidorcredit(arrprocesslog) { //for checking prepid or credit card
                        return new Promise((resolve, reject) => {

                            if (arrprocesslog[0].cdtr_iban) {
                                Iban = arrprocesslog[0].cdtr_iban.slice(-16)
                                FrmIban = Iban.substring(0, 3)
                                if (FrmIban == '564' || FrmIban == 564) {
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
                                                objresponse.status = "FAILURE"
                                                objresponse.errdata = "No Data in CORE_NC_CARD_BIN_SETUP for this Bin Number" + TakeacctIden
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
                                            objresponse.status = "FAILURE"
                                            objresponse.errdata = "No Data in CORE_NC_CARD_BIN_SETUP for this Bin Number" + TakeacctIden
                                            sendResponse(null, objresponse)
                                        }

                                    })

                                } else {
                                    resolve(0)
                                }

                            }


                        })

                    }





                    //function to check logic for reversal Id and Taking PostingRefno only for auth004

                    function TakeReversalIdandPostRefno(arrprocesslog) {
                        return new Promise((resolve, reject) => {
                            var TakeAcctInf = `select Alternate_Account_Type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslog[0].cdtr_iban}'`
                            var TakeprssRefno = `select process_ref_no  from npss_trn_process_log  where uetr = '${arrprocesslog[0].uetr}' and status = 'IP_RCT_REV_INAU_POSTING_SUCCESS'`;
                            var TakeCount = `select COUNT(npsstpl_id) as counts from npss_trn_process_log where status in ('IP_RCT_REV_INAU_POSTING_SUCCESS','IP_RCT_REV_INAU_POSTING_FAILURE') and uetr = '${arrprocesslog[0].uetr}'`
                            var TakerevId = `select process_ref_no from npss_trn_process_log where status = 'IP_RCT_REVERSAL_REQ_RECEIVED' and uetr = '${arrprocesslog[0].uetr}'`
                            ExecuteQuery1(TakeprssRefno, function (arrprssRefno) {
                                if (arrprssRefno.length > 0) {
                                    var parameter = {}
                                    if (arrprssRefno[0].process_ref_no != null) {
                                        parameter.processRefno = arrprssRefno[0].process_ref_no
                                        ExecuteQuery1(TakeAcctInf, function (arrActInf) {
                                            if (arrActInf.length) {
                                                parameter.account_number = arrActInf[0].account_number || '',
                                                    parameter.company_code = arrActInf[0].company_code || '',
                                                    parameter.inactive_marker = arrActInf[0].inactive_marker || '',
                                                    parameter.currency = arrActInf[0].currency || '',
                                                    parameter.alternate_account_id = arrActInf[0].alternate_account_id || ''
                                                ExecuteQuery1(TakeCount, function (arrCount) {
                                                    ExecuteQuery1(TakerevId, function (arrRevId) {
                                                        if (arrRevId.length > 0) {
                                                            if (arrRevId[0].process_ref_no != null) {
                                                                if (arrCount[0].counts.length == 1) {
                                                                    var count = Number(arrCount[0].counts)
                                                                    count++
                                                                    parameter.reverseId = arrRevId[0].process_ref_no + '.0' + count
                                                                    resolve(parameter)
                                                                } else {
                                                                    var count = Number(arrCount[0].counts)
                                                                    count++
                                                                    parameter.reverseId = arrRevId[0].process_ref_no + '.' + count
                                                                    resolve(parameter)
                                                                }
                                                            } else {
                                                                objresponse.status = "FAILURE"
                                                                objresponse.errdata = "Reversal Process Ref no is Missing"
                                                                sendResponse(null, objresponse)
                                                            }
                                                        } else {
                                                            objresponse.status = "FAILURE"
                                                            objresponse.errdata = "Reversal Process Ref not found in table"
                                                            sendResponse(null, objresponse)
                                                        }
                                                    })
                                                })
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




                    //function find reversal Id for credit and debit card api calls
                    function ReverseIdFrcdtpdt(arrprocesslog, apicalls) {
                        return new Promise((resolve, reject) => {
                            parameter = {}
                            var TakeReversePrsno = `select process_ref_no from npss_trn_process_log where status = 'IP_RCT_REVERSAL_REQ_RECEIVED' and uetr = '${arrprocesslog[0].uetr}'`
                            ExecuteQuery1(TakeReversePrsno, function (arrRevno) {
                                if (arrRevno.length > 0) {
                                    if (arrRevno[0].process_ref_no != null) {

                                        var Takecount
                                        if (apicalls == 1) { //prepaid
                                            Takecount = `select COUNT(npsstpl_id) as counts from npss_trn_process_log where status in ('IP_RCT_PC_POSTING_SUCCESS','IP_RCT_PC_POSTING_FAILURE') and uetr = '${arrprocesslog[0].uetr}'`
                                        } else if (apicalls == 2) { //credit
                                            Takecount = `select COUNT(npsstpl_id) as counts from npss_trn_process_log where status in ('IP_RCT_CC_POSTING_SUCCESS','IP_RCT_CC_POSTING_FAILURE') and uetr = '${arrprocesslog[0].uetr}'`
                                        }
                                        ExecuteQuery1(Takecount, function (arrCount) {
                                            if (arrCount[0].counts.length == 1) {
                                                var count = Number(arrCount[0].counts)
                                                count++
                                                parameter.reverseId = arrRevno[0].process_ref_no + '.0' + count
                                                resolve(parameter)
                                            } else {
                                                var count = Number(arrCount[0].counts)
                                                count++
                                                parameter.reverseId = arrRevno[0].process_ref_no + '.' + count
                                                resolve(parameter)
                                            }
                                        })

                                    } else {
                                        objresponse.status = "FAILURE"
                                        objresponse.errdata = "Process Refno for reversal Id is missing"
                                        sendResponse(null, objresponse)
                                    }
                                } else {
                                    objresponse.status = "FAILURE"
                                    objresponse.errdata = "Process Refno for reversal Id is not in the table"
                                    sendResponse(null, objresponse)
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
