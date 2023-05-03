var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


    try {
        /*   Created By :Siva Harish
        Created Date :02-01-2023
        Modified_by:Siva Harish
          Modified Date :03-01-2023
          Reason for adding fn_pcidss_decrypt for taking cr act identification code
           Reason for Removing Console log
           Reason for Adding Update query
            Reason for adding two api param for pac008 25/01/2023
           Reason for removing updt query 17/02/2023
           Reason for : Changing pacs008 payload
        Reason for : Changing pacs004 payload 17/03/2023
        Reason for : Changing pacs008 payload 22/03/2023
         Reason for : Adding ext_ident_retry_count 29/03/2023
          Reason for : changing dbtr_iban query changes 31/03/2023
           Reason for : changing done in FH 03/03/2023
            Reason for : Adding dealRefno for fab & unique id generation for pacs008 04.04.2023
             Reason for : handling hdr msg id 6/4/2023
             Reason for : Adding new payload in pacs008 11/4/2023
               Reason for : checking auth posting done or not 12/04/2023
                Reason for : Handling Spl Rate 28/04/2023
                Reason for remove sel rate and margin And add Buy rate and margin 2/05/2023
                 Reason for fixing gmrate and margin 3/05/2023
       
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
                            var take_api_params = `select fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY) as dbtr_account_no,ns.amount_credited_loc_cur,ns.buy_margin,ns.buy_rate,ns.department_code,ns.fx_resv_text2,ns.account_currency,ns.org_pay_endtoend_id, ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id = '${params.Tran_Id}'`;
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
                                                let checkAlreadyPosted = await CheckpostingTran(arrprocesslog, final_process_status, final_status)
                                                if (checkAlreadyPosted == 'CallAuthPosting') {
                                                    var PreparedData = async () => {

                                                        extend_retry_value = await GetRetrycount(arrprocesslog[0].uetr)
                                                        // Logic For Taking Reversal Id and Taking PostingRefno and account Information only for auth004 api call
                                                        reverandRefno = await TakeReversalIdandPostRefno(arrprocesslog)



                                                        if (reverandRefno.currency != 'AED') {
                                                            Ipuetr = await TakeIpUetr(arrprocesslog)
                                                            GetsellRate = await GetsplRate(arrprocesslog, reverandRefno)
                                                            if (GetsellRate == 'Take GMrate') {
                                                                Getdata = await GetgmMargin(arrprocesslog, reverandRefno, Ipuetr)
                                                            }
                                                            takedealRefno = await GetRefno(arrprocesslog, reverandRefno, Ipuetr)
                                                        }
                                                        
                                                        take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_IP_REV_RET_AUTH_PACS004' and param_code='URL' and need_sync = 'Y'`;
                                                        var amount

                                                        amount = arrprocesslog[0].intrbk_sttlm_amnt


                                                        ExecuteQuery1(take_api_url, function (arrurl) {
                                                            if (arrurl.length) {
                                                                var url = arrurl[0].param_detail;
                                                                fn_doapicall(url, arrprocesslog, lclinstrm, amount, reverandRefno, Objfiledata, Getdata, extend_retry_value, takedealRefno, GetsellRate, function (firstapiresult) {
                                                                    if (firstapiresult.status === "SUCCESS" || firstapiresult.status === "Success" || firstapiresult.status === "success") {

                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------fIRST API CALL SUCCESS-------', objSessionLogInfo);
                                                                        //Call Pac008 Api
                                                                        var Takepac008url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_MANUAL_INT_PAC008' and param_code='URL' and need_sync = 'Y'`;
                                                                        ExecuteQuery1(Takepac008url, function (pac008url) {
                                                                            if (pac008url.length > 0) {
                                                                                var pacurl = pac008url[0].param_detail
                                                                                fn_doPac008apicall(pacurl, arrprocesslog, reverandRefno, function (pac008api) {
                                                                                    if (pac008api == 'SUCCESS') {

                                                                                        var UpdateTrnTble
                                                                                        if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') {
                                                                                            UpdateTrnTble = `Update npss_transactions set maker = '${params.CREATED_BY_NAME}',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
                                                                                        } else {
                                                                                            UpdateTrnTble = `Update npss_transactions set checker = '${params.CREATED_BY_NAME}',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
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
                                                                                    } else {
                                                                                        objresponse.status = "FAILURE"
                                                                                        objresponse.errdata = "Failure in Pac008 Api"
                                                                                        sendResponse(null, objresponse)
                                                                                    }

                                                                                })
                                                                            } else {
                                                                                objresponse.status = "FAILURE"
                                                                                objresponse.errdata = "Pac008 Url Not Found"
                                                                                sendResponse(null, objresponse)
                                                                            }

                                                                        })

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


                                                var Takepac008url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_MANUAL_INT_PAC008' and param_code='URL' and need_sync = 'Y'`;
                                                ExecuteQuery1(Takepac008url, function (arrreturnurl) {
                                                    if (arrreturnurl.length) {
                                                        var pacurl = arrreturnurl[0].param_detail;
                                                        fn_doPac008apicall(pacurl, arrprocesslog, function (pac008api) {
                                                            if (pac008api === "SUCCESS" || pac008api === "Success" || pac008api === "success") {
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------Second API CALL SUCCESS-------', objSessionLogInfo);
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
                                                                objresponse.errdata = "Pacs008 api call not success"
                                                                sendResponse(null, objresponse)

                                                            }
                                                        })

                                                    } else {

                                                        objresponse.status = "FAILURE"
                                                        objresponse.errdata = "Pacs008 URL not found workflow table"
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
                                        "ext_iden_retry_value": extend_retry_value || '',
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

                            if (reverandRefno.currency != 'AED') {
                                if (GetsellRate != 'Take GMrate') {
                                    if (arrprocesslog[0].buy_margin != 0) {
                                        options.json.payload.buy_margin = arrprocesslog[0].buy_margin || ''
                                    }
                                    if (arrprocesslog[0].buy_rate != 0) {
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

                            reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);


                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);

                                } else {
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




                    function fn_doPac008apicall(url, arrprocesslog, reverandRefno, callbackapi) {
                        try {
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
                                apiURL = url // apiURL + apiName
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                    "hdr_msg_id": hdrmsgid,
                                    "hdr_total_amount": arrprocesslog[0].hdr_total_amount || '',
                                    "value_date": moment().format('YYYY-MM-DD'),
                                    "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                                    "instr_id": arrprocesslog[0].org_pay_endtoend_id || '',
                                    "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                                    "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                                    "uetr": arrprocesslog[0].uetr || '',
                                    "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',
                                    "dbtr_acct_name": reverandRefno.account_name || '',
                                    "dbtr_prvt_id": arrprocesslog[0].dbtr_prvt_id || '',
                                    "ext_org_id_code": arrprocesslog[0].ext_org_id_code || '',
                                    "issuer_type_code": arrprocesslog[0].issuer_type_code || '',
                                    "dbtr_document_id": arrprocesslog[0].dbtr_document_id || '',
                                    // "dbtr_birth_date": arrprocesslog[0].dbtr_birth_date ? moment(arrprocesslog[0].dbtr_birth_date).format('YYYY-MM-DD') : '',
                                    "dbtr_birth_date": reverandRefno.birthdate ? moment(reverandRefno.birthdate).format('YYYY-MM-DD') : '',
                                    "dbtr_city_birth": reverandRefno.cityofbirth || '',
                                    "dbtr_country": reverandRefno.countryofbirth || '',
                                    "ext_person_id_code": arrprocesslog[0].ext_person_id_code || '',
                                    "dbtr_other_issuer": arrprocesslog[0].dbtr_other_issuer || '',
                                    "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                                    "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                                    "cdtr_acct_name": arrprocesslog[0].cdtr_acct_name || '',
                                    "cdtr_iban": arrprocesslog[0].cdtr_iban || '',
                                    "cr_acct_identification": arrprocesslog[0].cr_acct_identification || '',
                                    "remittance_information": arrprocesslog[0].remittance_info || '',
                                    "category_purpose": arrprocesslog[0].category_purpose || '',
                                    "dbtr_acct_no": arrprocesslog[0].dbtr_account_no || '',
                                    "category_purpose_prty": category_prty || '',

                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }
                            var PrintInfo = {}
                            PrintInfo.url = url || ''
                            PrintInfo.uetr = arrprocesslog[0].uetr || ''
                            PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                            PrintInfo.payment_endtoend_id = arrprocesslog[0].payment_endtoend_id || ''

                            reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);

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





                    //function to check logic for reversal Id and Taking PostingRefno only for auth004

                    function TakeReversalIdandPostRefno(arrprocesslog) {
                        return new Promise((resolve, reject) => {
                            var TakeAcctInf = `select birthdate,cityofbirth,countryofbirth,emirates_code,account_name,Alternate_Account_Type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslog[0].dbtr_iban}'`
                            var TakeprssRefno = `select process_ref_no  from npss_trn_process_log  where uetr = '${arrprocesslog[0].uetr}' and status = 'OP_RCT_MAN_INAU_POSTING_SUCCESS'`;
                            var TakeCount = `select COUNT(npsstpl_id) as counts from npss_trn_process_log where status in ('OP_RCT_MAN_INAU_POSTING_SUCCESS','OP_RCT_MAN_INAU_POSTING_FAILURE') and uetr = '${arrprocesslog[0].uetr}'`

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

                                                parameter.account_name = arrActInf[0].account_name || '',
                                                    parameter.emirates_code = arrActInf[0].emirates_code || '',
                                                    parameter.countryofbirth = arrActInf[0].countryofbirth || '',
                                                    parameter.cityofbirth = arrActInf[0].cityofbirth || ''
                                                parameter.birthdate = arrActInf[0].birthdate || ''
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
                                                        objresponse.status = "FAILURE"
                                                        objresponse.errdata = "clrsysRef  is Missing"
                                                        sendResponse(null, objresponse)
                                                    }


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



                    function GetgmMargin(arrprocesslog, reverandRefno, Ipuetr) {
                        return new Promise((resolve, reject) => {
                            if (reverandRefno.currency == '' || reverandRefno.currency == null) {
                                resolve('')
                            } else {
                                if (reverandRefno.currency != 'AED') {
                                    var Takedata = `select exchange_rate,gm_margin from npss_trn_process_log where process_name = 'Get Deal' and uetr = '${Ipuetr}' order by npsstpl_id desc`
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

                    function GetRefno(arrprocesslog, reverseAcinfparam, Ipuetr) {
                        return new Promise((resolve, reject) => {
                            if (reverseAcinfparam.currency == '' || reverseAcinfparam.currency == null) {
                                resolve('')
                            } else {
                                if (reverseAcinfparam.currency != 'AED') {
                                    var Takedelrefno = `select process_ref_no from npss_trn_process_log where status = 'IP_RCT_REV_DEAL_RECEIVED' and process_name = 'Get Deal' and uetr = '${Ipuetr}'`
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
                    function CheckpostingTran(arrprocesslog, final_process_status, final_status) {
                        return new Promise((resolve, reject) => {
                            var CheckTrnPosted = `select * from npss_trn_process_log where process_name = 'Manual Fund AUTH Posting' and status = 'OP_RCT_MAN_AUTH_POSTING_SUCCESS' and uetr = '${arrprocesslog[0].uetr}'`
                            ExecuteQuery1(CheckTrnPosted, function (arrTrndetails) {
                                if (arrTrndetails.length > 0) {
                                    var Takepac008url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_MANUAL_INT_PAC008' and param_code='URL' and need_sync = 'Y'`;
                                    ExecuteQuery1(Takepac008url, function (pac008url) {
                                        if (pac008url.length > 0) {
                                            var pacurl = pac008url[0].param_detail
                                            fn_doPac008apicall(pacurl, arrprocesslog, reverandRefno, function (pac008api) {
                                                if (pac008api == 'SUCCESS') {
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

                                                    })
                                                } else {
                                                    objresponse.status = "FAILURE"
                                                    objresponse.errdata = "Pacs008 Api Failure"
                                                    sendResponse(null, objresponse)
                                                }
                                            })
                                        } else {
                                            objresponse.status = "FAILURE"
                                            objresponse.errdata = "Pacs008 URL not found workflow table"
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                } else {
                                    resolve('CallAuthPosting')
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
