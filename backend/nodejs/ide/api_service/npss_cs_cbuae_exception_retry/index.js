var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {



    try {
        /*   Created By :Siva Harish
        Created Date :24-03-2023
       
      
         
       
        */
        var serviceName = 'NPSS (CS) CBUAE Exception Retry';
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
        var failcountobj = {}
        var failcount = []
        var TempTranID
        var reqAsync = require('async');
        var moment = require('moment');
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
                objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) CBUAE Exception Retry';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS (CS) CBUAE Exception Retry';
                var cus_iban;
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection     
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                        try {
                            if (Array.isArray(params.Tran_Id)) {
                                arrTranID = params.Tran_Id.map(function (eachTran) {
                                    return eachTran.toString();
                                });
                            } else {
                                arrTranID = [params.Tran_Id.toString()];
                            }
                            TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                            var PRCT_ID = prct_id
                            var final_status
                            var final_process_status


                            let TakeTrndata = `select * from npss_transactions where npsst_id in ${TempTranID}`
                            ExecuteQuery1(TakeTrndata, function (arruetr) {
                                if (arruetr.length > 0) {
                                    reqAsync.forEachOfSeries(arruetr, function (arruetrObj, i, nextobjctfunc) {
                                        var TakeprocessName = `select process_name,cbuae_return_code from npss_trn_process_log where status = 'CBUAE_NOT_AVAIL' and process_status = 'RCTException' and uetr = '${arruetrObj.uetr}'`
                                        ExecuteQuery1(TakeprocessName, function (arrPrsName) {
                                            var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_CB_EXCEP_RETRY'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}' and process_name = '${arrPrsName[0].process_name}'`
                                            ExecuteQuery1(TakeStsPsts, function (arrurlResult) {
                                                if (arrurlResult.length) {
                                                    final_process_status = arrurlResult[0].success_process_status
                                                    final_status = arrurlResult[0].success_status
                                                    var CheckApi = async () => {
                                                        var apistatus
                                                        if (arrPrsName[0].process_name == 'Place Pacs002') {
                                                            apistatus = await Call002(arruetrObj, arrPrsName)
                                                        } else if (arrPrsName[0].process_name == 'Place Pacs008') {
                                                            apistatus = await Call008(arruetrObj)
                                                        } else if (arrPrsName[0].process_name == 'Place Pacs007') {
                                                            apistatus = await Call007(arruetrObj)
                                                        } else if (arrPrsName[0].process_name == 'Place Pacs004') {
                                                            apistatus = await Call004(arruetrObj)
                                                        }
        
                                                        if (apistatus.status == 'SUCCESS') {
                                                            var UpdateTrnTble = `Update npss_transactions set status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${apistatus.Tran_id}'`
                                                            ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                                if (arrUpdTranTbl == 'SUCCESS') {
                                                                    nextobjctfunc()
                                                                }
                                                                else {
                                                                    objresponse.status = arrPrsName[0].process_name + " No Data Updated in Transaction Table " + apistatus.Tran_id
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            })
                                                        } else {
                                                            objresponse.status = arrPrsName[0].process_name + "  Api Call Failure for TRran_id  " + apistatus.Tran_id
                                                            sendResponse(null, objresponse)
                                                        }
                                                    }
                                                    CheckApi()
                                                } else {
                                                    objresponse.status = "No Data found in core nc workflow Table"
                                                    sendResponse(null, objresponse)
                                                }
                                            })
                                           
                                        })

                                    }, function () {
                                        objresponse.status = 'SUCCESS'
                                        sendResponse(null, objresponse)
                                    })
                                } else {
                                    objresponse.errdata = "Uetr not found"
                                    sendResponse(null, objresponse)
                                }
                            })




                        }
                        catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    })








                    function Call008(TranId) {
                        return new Promise((resolve, reject) => {
                            var Takepac008url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_MANUAL_INT_PAC008' and param_code='URL' and need_sync = 'Y'`;
                            ExecuteQuery1(Takepac008url, function (pac008url) {
                                if (pac008url.length > 0) {
                                    var pacurl = pac008url[0].param_detail
                                    var take_api_params = `select fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY) as dbtr_account_no,ns.fx_resv_text2,ns.account_currency, ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id = '${TranId.npsst_id}'`;
                                    ExecuteQuery1(take_api_params, function (arrprocesslog) {
                                        if (arrprocesslog.length > 0) {
                                            try {
                                                var category_prty
                                                if (arrprocesslog[0].category_purpose_prty == null || arrprocesslog[0].category_purpose_prty == '') {
                                                    category_prty = 'MIS'
                                                } else {
                                                    category_prty = arrprocesslog[0].category_purpose_prty
                                                }
                                                var apiName = 'NPSS Pac008 Api'
                                                var request = require('request');
                                                var apiURL =
                                                    apiURL = pacurl // apiURL + apiName
                                                var options = {
                                                    url: apiURL,
                                                    timeout: 18000000,
                                                    method: 'POST',
                                                    json: {
                                                        "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                                                        "hdr_total_amount": arrprocesslog[0].hdr_total_amount || '',
                                                        "value_date": moment().format('YYYY-MM-DD'),
                                                        "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                                                        "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                                                        "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                                                        "uetr": arrprocesslog[0].uetr || '',
                                                        "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',
                                                        "dbtr_acct_name": arrprocesslog[0].dbtr_acct_name || '',
                                                        "dbtr_prvt_id": arrprocesslog[0].dbtr_prvt_id || '',
                                                        "ext_org_id_code": arrprocesslog[0].ext_org_id_code || '',
                                                        "issuer_type_code": arrprocesslog[0].issuer_type_code || '',
                                                        "dbtr_document_id": arrprocesslog[0].dbtr_document_id || '',
                                                        "dbtr_birth_date": arrprocesslog[0].dbtr_birth_date ? moment(arrprocesslog[0].dbtr_birth_date).format('YYYY-MM-DD') : '',
                                                        "dbtr_city_birth": arrprocesslog[0].dbtr_city_birth || '',
                                                        "dbtr_country": arrprocesslog[0].dbtr_country || '',
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
                                                PrintInfo.url = pacurl || ''
                                                PrintInfo.uetr = arrprocesslog[0].uetr || ''
                                                PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                                                PrintInfo.payment_endtoend_id = arrprocesslog[0].payment_endtoend_id || ''

                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);

                                                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                    try {
                                                        if (error) {
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                                            objresponse.status = error
                                                            sendResponse(null, objresponse);

                                                        } else {
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                            var apidata = {}
                                                            if (responseBodyFromImagingService.status == 'SUCCESS') {
                                                                apidata.status = 'SUCCESS'
                                                                apidata.Tran_id = TranId.npsst_id
                                                                resolve(apidata)
                                                            } else {
                                                                apidata.status = 'FAILURE'
                                                                apidata.Tran_id = TranId.npsst_id
                                                                resolve(apidata)
                                                            }

                                                        }
                                                    } catch (error) {
                                                        objresponse.status = error
                                                        sendResponse(null, objresponse);
                                                    }

                                                });

                                            } catch (error) {
                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                sendResponse(error, null);
                                            }
                                        } else {
                                            objresponse.status = 'PACS 008 - No data found in Transaction Table  ' + TranId.npsst_id
                                            sendResponse(null, objresponse)
                                        }

                                    })
                                } else {
                                    objresponse.status = 'Pacs008 api url Not found'
                                    sendResponse(null, objresponse)
                                }
                            })
                        })



                    }


                    function Call007(TranId) {
                        return new Promise((resolve, reject) => {
                            var take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='RCT_OP_REV_APPROVE' and param_code='URL' and need_sync = 'Y'`;
                            ExecuteQuery1(take_api_url, function (pac007url) {
                                if (pac007url.length > 0) {
                                    var pacurl = pac007url[0].param_detail
                                    var take_api_params = `select ns.intrbk_sttlm_amnt,ns.department_code,ns.remittance_info,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id = '${TranId.npsst_id}'`;
                                    ExecuteQuery1(take_api_params, async function (arrprocesslog) {
                                        if (arrprocesslog.length > 0) {
                                            try {
                                                let TakeAccountInformation = await GetaccountInfo(arrprocesslog)
                                                let TakeSellRatemargin = await GetsellMarRate(TakeAccountInformation)
                                                try {
                                                    var apiName = 'RCT_OP_REV_APPROVE'
                                                    var request = require('request');
                                                    var apiURL =
                                                        apiURL = pacurl // apiURL + apiName
                                                    var options = {
                                                        url: apiURL,
                                                        timeout: 18000000,
                                                        method: 'POST',
                                                        json: {

                                                            "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                                                            "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                                                            "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                                                            "uetr": arrprocesslog[0].uetr || '',
                                                            "clrsysref": arrpostrefno[0].process_ref_no,
                                                            "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',
                                                            "reversal_amount": arrprocesslog[0].reversal_amount || '',
                                                            "reversal_code": params.REVERSAL_CODE || '',
                                                            "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                                                            "intrbk_sttlm_dt": arrprocesslog[0].hdr_settlement_date || '',
                                                            "AccountInformation": TakeAccountInformation,
                                                            "cdtr_iban": arrprocesslog[0].cdtr_iban || '',
                                                            "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                                                            "cr_acct_identification": arrprocesslog[0].cr_acct_identification || '',
                                                            "dr_department_code": arrprocesslog[0].department_code || 'DEFAULT'

                                                        },
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        }

                                                    }
                                                    if (params.PROD_CODE == 'NPSS_AEFAB') {
                                                        if (TakeAccountInformation.currency == 'AED') {
                                                            console.log('AED Tran')
                                                        } else {
                                                            if (TakeSellRatemargin.sell_margin && TakeSellRatemargin.sell_rate) {
                                                                options.json.dr_sell_margin = TakeSellRatemargin.sell_margin
                                                                options.json.dr_sell_rate = TakeSellRatemargin.sell_rate
                                                            } else if (TakeSellRatemargin.sell_margin != '' && TakeSellRatemargin.sell_rate == '') {
                                                                options.json.dr_sell_margin = TakeSellRatemargin.sell_margin || ''
                                                                options.json.dr_sell_rate = ''
                                                            } else if (TakeSellRatemargin.sell_rate != '' && TakeSellRatemargin.sell_margin == '') {
                                                                options.json.dr_sell_rate = TakeSellRatemargin.sell_rate || ''
                                                                options.json.dr_sell_margin = ''
                                                            }


                                                        }
                                                    }


                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                    request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                        if (error) {
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                                            sendResponse(error, null);
                                                        } else {
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                            var apidata = {}
                                                            if (responseBodyFromImagingService.status == 'SUCCESS') {
                                                                apidata.status = 'SUCCESS'
                                                                apidata.Tran_id = TranId.npsst_id
                                                                resolve(apidata)
                                                            } else {
                                                                apidata.status = 'FAILURE'
                                                                apidata.Tran_id = TranId.npsst_id
                                                                resolve(apidata)
                                                            }
                                                        }
                                                    });

                                                } catch (error) {
                                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                    sendResponse(error, null);
                                                }
                                            } catch (error) {
                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                sendResponse(error, null);
                                            }
                                        } else {
                                            objresponse.status = 'PACS 007 - No data found in Transaction Table  ' + TranId.npsst_id
                                            sendResponse(null, objresponse)
                                        }

                                    })
                                } else {
                                    objresponse.status = 'Pacs007 api url Not found'
                                    sendResponse(null, objresponse)
                                }
                            })
                        })



                    }


                    function Call004(TranId) {
                        return new Promise((resolve, reject) => {
                            var take_return_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_RETURN_PACK004' and param_code='URL' and need_sync = 'Y'`;
                            ExecuteQuery1(take_return_url, function (pac004url) {
                                if (pac004url.length > 0) {
                                    var pacurl = pac004url[0].param_detail
                                    var take_api_params = `select fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,ns.department_code, ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id = '${TranId.npsst_id}'`;
                                    ExecuteQuery1(take_api_params, function (arrprocesslog) {
                                        if (arrprocesslog.length > 0) {
                                            try {
                                                var takereturncode = `select cbuae_return_code  from npss_trn_process_log  where  status = 'IP_RCT_RR_RETURN_READY' and uetr = '${arrprocesslog[0].uetr}'`;
                                                ExecuteQuery1(takereturncode, function (arrreturncode) {
                                                    if (arrreturncode.length > 0) {
                                                        try {
                                                            var apiName = 'NPSS IP RETURN PACS004'
                                                            var request = require('request');
                                                            var apiURL =
                                                                apiURL = pacurl // apiURL + apiName
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
                                                            } else {
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
                                                    } else {
                                                        objresponse.status = 'Pacs004 CBUAE Return Code Not Found'
                                                        sendResponse(null, objresponse)
                                                    }

                                                })

                                            } catch (error) {
                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                sendResponse(error, null);
                                            }
                                        } else {
                                            objresponse.status = 'PACS 004 - No data found in Transaction Table  ' + TranId.npsst_id
                                            sendResponse(null, objresponse)
                                        }

                                    })
                                } else {
                                    objresponse.status = 'Pacs004 api url Not found'
                                    sendResponse(null, objresponse)
                                }
                            })
                        })



                    }


                    function Call002(TranId, arrPrsName) {
                        return new Promise((resolve, reject) => {
                            var Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
                            ExecuteQuery1(Takekafkaurl, function (kafka) {
                                if (kafka.length > 0) {
                                    var pacurl = kafka[0].param_detail
                                    var take_api_params = `select fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY) as dbtr_account_no,ns.process_group,ns.ext_acct_id_code,ns.dbtr_cust_type,ns.instruction_id,ns.instrument_type,ns.fx_resv_text2,ns.account_currency, ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id = '${TranId.npsst_id}'`;
                                    ExecuteQuery1(take_api_params, function (arrprocesslog) {
                                        if (arrprocesslog.length > 0) {
                                            var Takeerrordes = `select destination_error_desc from core_nc_error_mapping where destination_error_code = '${arrPrsName[0].cbuae_return_code}'`
                                            ExecuteQuery1(Takeerrordes, function (arrreturncodedesc) {
                                                if (arrreturncodedesc.length) {

                                                    try {

                                                        let lclinstrm
                                                        try {
                                                            let parser = new xml2js.Parser({ strict: false, trim: true });
                                                            parser.parseString(arrprocesslog[0].message_data, function (err, result) {
                                                                lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                                            });
                                                        } catch (error) {
                                                            lclinstrm = ''
                                                        }

                                                        var apiName = 'NPSS Pac002 Api'
                                                        var request = require('request');
                                                        var apiURL =
                                                            apiURL = pacurl // apiURL + apiName
                                                        var options = {
                                                            url: apiURL,
                                                            timeout: 18000000,
                                                            method: 'POST',
                                                            json: {
                                                                "batch_name": 'PACS-Q',
                                                                "data": {
                                                                    "payload": {
                                                                        "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                                                                        "hdr_created_date": arrprocesslog[0].hdr_created_date || '',
                                                                        "hdr_total_records": arrprocesslog[0].hdr_total_records || '',
                                                                        "hdr_total_amount": arrprocesslog[0].hdr_total_amount || '',
                                                                        "hdr_settlement_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                                                        "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                                                        "hdr_settlement_method": arrprocesslog[0].hdr_settlement_method || '',
                                                                        "hdr_clearing_system": arrprocesslog[0].hdr_clearing_system || '',
                                                                        "instruction_id": arrprocesslog[0].instruction_id || '',
                                                                        "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                                                                        "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                                                                        "cdtr_acct_name": arrprocesslog[0].cdtr_acct_name || '',
                                                                        "category_purpose": arrprocesslog[0].category_purpose || '',
                                                                        "category_purpose_prty": arrprocesslog[0].category_purpose_prty || '',
                                                                        "ext_purpose_code": arrprocesslog[0].ext_purpose_code || '',
                                                                        "ext_purpose_prty": arrprocesslog[0].ext_purpose_prty || '',
                                                                        "lclinstrm": lclinstrm,
                                                                        "instrument_type": arrprocesslog[0].instrument_type || '',
                                                                        "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                                                                        "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt,
                                                                        "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                                                                        "dbtr_acct_no": arrprocesslog[0].dbtr_account_no || '',
                                                                        "ext_acct_id_code": arrprocesslog[0].ext_acct_id_code || '',
                                                                        "charge_code": arrprocesslog[0].dbtr_cust_type || '',
                                                                        "dbtr_cust_type": arrprocesslog[0].dbtr_cust_type || '',
                                                                        "ext_org_id_code": arrprocesslog[0].ext_org_id_code || '',
                                                                        "issuer_type_code": arrprocesslog[0].issuer_type_code || '',
                                                                        "dbtr_birth_date": arrprocesslog[0].dbtr_birth_date ? moment(arrprocesslog[0].dbtr_birth_date).format('YYYY-MM-DD') : '',
                                                                        "dbtr_city_birth": arrprocesslog[0].dbtr_city_birth || '',
                                                                        "dbtr_country": arrprocesslog[0].dbtr_country || '',
                                                                        "dbtr_document_id": arrprocesslog[0].dbtr_document_id || '',
                                                                        "ext_person_id_code": arrprocesslog[0].ext_person_id_code || '',
                                                                        "dbtr_other_issuer": arrprocesslog[0].dbtr_other_issuer || '',
                                                                        "dbtr_acct_name": arrprocesslog[0].dbtr_acct_name || '',
                                                                        "cdtr_iban": arrprocesslog[0].cdtr_iban,
                                                                        "dbtr_prvt_id": arrprocesslog[0].dbtr_prvt_id || '',
                                                                        "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                                                                        "accp_dt_tm": arrprocesslog[0].accp_dt_tm || '',
                                                                        "charge_bearer": arrprocesslog[0].charge_bearer || '',
                                                                        "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                                                                        "uetr": arrprocesslog[0].uetr || '',
                                                                        "cr_acct_identification": arrprocesslog[0].cr_acct_identification || '',
                                                                        "cr_acct_id_code": arrprocesslog[0].cr_acct_id_code || '',
                                                                        "message_data": arrprocesslog[0].message_data || '',
                                                                        "process_type": arrprocesslog[0].process_type || '',
                                                                        "status": arrprocesslog[0].status || '',
                                                                        "process_status": arrprocesslog[0].process_status || '',
                                                                        "process": "Pacs.008 Account Validation",
                                                                        "remittance_information": arrprocesslog[0].remittance_info || '',
                                                                        "clrsysref": arrprocesslog[0].clrsysref || '',
                                                                        "extIdentifier": arrprocesslog[0].clrsysref || '',
                                                                        "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.09",
                                                                        "process_group": arrprocesslog[0].process_group || '',
                                                                        "processing_system": "NPSS",
                                                                        "active_status": arrPrsName[0].cbuae_return_code ? "RJCT" : "ACCP",
                                                                        "rsn_additional_info": arrreturncodedesc[0].destination_error_desc || '',
                                                                        "rsn_code": arrPrsName[0].cbuae_return_code || ''
                                                                    }
                                                                }


                                                            },
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            }
                                                        }
                                                        var PrintInfo = {}
                                                        PrintInfo.url = pacurl || ''
                                                        PrintInfo.uetr = arrprocesslog[0].uetr || ''
                                                        PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                                                        PrintInfo.payment_endtoend_id = arrprocesslog[0].payment_endtoend_id || ''

                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);

                                                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                            try {
                                                                if (error) {
                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                                                    objresponse.status = error
                                                                    sendResponse(null, objresponse);

                                                                } else {
                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                                    var apidata = {}
                                                                    if (responseBodyFromImagingService == 'SUCCESS') {
                                                                        apidata.status = 'SUCCESS'
                                                                        apidata.Tran_id = TranId.npsst_id
                                                                        resolve(apidata)
                                                                    } else {
                                                                        apidata.status = 'FAILURE'
                                                                        apidata.Tran_id = TranId.npsst_id
                                                                        resolve(apidata)
                                                                    }

                                                                }
                                                            } catch (error) {
                                                                objresponse.status = error
                                                                sendResponse(null, objresponse);
                                                            }

                                                        });

                                                    } catch (error) {
                                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                        sendResponse(error, null);
                                                    }
                                                } else {
                                                    objresponse.status = 'PACS 008 - CBUAE Return Code not Found ' + TranId.npsst_id
                                                    sendResponse(null, objresponse)
                                                }
                                            })

                                        } else {
                                            objresponse.status = 'PACS 008 - No data found in Transaction Table  ' + TranId.npsst_id
                                            sendResponse(null, objresponse)
                                        }

                                    })
                                } else {
                                    objresponse.status = 'Pacs008 api url Not found'
                                    sendResponse(null, objresponse)
                                }
                            })
                        })



                    }



                    //checkprepaid or not
                    function GetaccountInfo(arrprocesslog) {
                        return new Promise((resolve, reject) => {
                            var parameter = {}
                            if (arrprocesslog[0].cdtr_iban) {
                                Iban = arrprocesslog[0].cdtr_iban.slice(-16)
                                FrmIban = Iban.substring(0, 3)
                                if (FrmIban == '564' || FrmIban == 564) {
                                    parameter.account_number = '',
                                        parameter.company_code = '',
                                        parameter.inactive_marker = '',
                                        parameter.currency = '',
                                        parameter.alternate_account_type = '',
                                        parameter.alternate_account_id = '',
                                        parameter.account_officer = '',
                                        parameter.curr_rate_segment = '',
                                        parameter.customer_id = '',
                                        parameter.department_code = 'DEFAULT'
                                    resolve(parameter)
                                } else {
                                    if (arrprocesslog[0].cr_acct_identification && arrprocesslog[0].cr_acct_id_code == 'AIIN') {
                                        var TakeacctIden = arrprocesslog[0].cr_acct_identification.substring(0, 6)
                                        var checkCard = `select * from CORE_NC_CARD_BIN_SETUP where bin_number = '${TakeacctIden}'`
                                        ExecuteQuery1(checkCard, function (arrCradType) {
                                            if (arrCradType.length) {
                                                parameter.account_number = '',
                                                    parameter.company_code = '',
                                                    parameter.inactive_marker = '',
                                                    parameter.currency = '',
                                                    parameter.alternate_account_type = '',
                                                    parameter.alternate_account_id = '',
                                                    parameter.account_officer = '',
                                                    parameter.curr_rate_segment = '',
                                                    parameter.customer_id = '',
                                                    parameter.department_code = 'DEFAULT'
                                                resolve(parameter)
                                            } else {

                                                objresponse.status = "No Data in CORE_NC_CARD_BIN_SETUP for this Bin Number" + TakeacctIden
                                                sendResponse(null, objresponse)
                                            }

                                        })
                                    } else {
                                        var TakeAcctInf = `select Alternate_Account_Type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslog[0].dbtr_iban}'`
                                        ExecuteQuery1(TakeAcctInf, function (arrActInf) {
                                            if (arrActInf.length > 0) {
                                                parameter.account_number = arrActInf[0].account_number || '',
                                                    parameter.company_code = arrActInf[0].company_code || '',
                                                    parameter.inactive_marker = arrActInf[0].inactive_marker || '',
                                                    parameter.currency = arrActInf[0].currency || '',
                                                    parameter.alternate_account_type = arrActInf[0].alternate_account_type || '',
                                                    parameter.alternate_account_id = arrActInf[0].alternate_account_id || '',
                                                    parameter.account_officer = arrActInf[0].account_officer || '',
                                                    parameter.curr_rate_segment = arrActInf[0].curr_rate_segment || '',
                                                    parameter.customer_id = arrActInf[0].customer_id || '',
                                                    parameter.department_code = arrprocesslog[0].department_code || 'DEFAULT'
                                                resolve(parameter)
                                            } else {
                                                objresponse.status = 'No data Found in core nc cbs account table'
                                                sendResponse(null, objresponse)
                                            }
                                        })
                                    }

                                }

                            } else {
                                if (arrprocesslog[0].cr_acct_identification && arrprocesslog[0].cr_acct_id_code == 'AIIN') {

                                    var TakeacctIden1 = arrprocesslog[0].cr_acct_identification.substring(0, 6)
                                    var checkCard1 = `select * from CORE_NC_CARD_BIN_SETUP where bin_number = '${TakeacctIden1}'`
                                    ExecuteQuery1(checkCard1, function (arrCradType) {
                                        if (arrCradType.length) {
                                            parameter.account_number = '',
                                                parameter.company_code = '',
                                                parameter.inactive_marker = '',
                                                parameter.currency = '',
                                                parameter.alternate_account_type = '',
                                                parameter.alternate_account_id = '',
                                                parameter.account_officer = '',
                                                parameter.curr_rate_segment = '',
                                                parameter.customer_id = '',
                                                parameter.department_code = 'DEFAULT'
                                            resolve(parameter)

                                        } else {

                                            objresponse.status = "No Data in CORE_NC_CARD_BIN_SETUP for this Bin Number" + TakeacctIden
                                            sendResponse(null, objresponse)
                                        }

                                    })

                                } else {
                                    var TakeAcctInf = `select Alternate_Account_Type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslog[0].dbtr_iban}'`
                                    ExecuteQuery1(TakeAcctInf, function (arrActInf) {
                                        if (arrActInf.length > 0) {
                                            parameter.account_number = arrActInf[0].account_number || '',
                                                parameter.company_code = arrActInf[0].company_code || '',
                                                parameter.inactive_marker = arrActInf[0].inactive_marker || '',
                                                parameter.currency = arrActInf[0].currency || '',
                                                parameter.alternate_account_type = arrActInf[0].alternate_account_type || '',
                                                parameter.alternate_account_id = arrActInf[0].alternate_account_id || '',
                                                parameter.account_officer = arrActInf[0].account_officer || '',
                                                parameter.curr_rate_segment = arrActInf[0].curr_rate_segment || '',
                                                parameter.customer_id = arrActInf[0].customer_id || '',
                                                parameter.department_code = arrprocesslog[0].department_code || 'DEFAULT'
                                            resolve(parameter)
                                        } else {
                                            objresponse.status = 'No data Found in core nc cbs account table'
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                }

                            }
                        })



                    }

                    //Get sell Rate and Margin
                    function GetsellMarRate(acctInfm) {
                        return new Promise((resolve, reject) => {
                            var Getselldetails = {}
                            if (acctInfm.currency == 'AED') {
                                Getselldetails.sell_margin = ''
                                Getselldetails.sell_rate = ''
                                resolve(Getselldetails)
                            } else {
                                var Takesellrate = `select sell_margin, sell_rate ,cif_number from  core_nc_cust_spl_rate where  cif_number='${acctInfm.customer_id}'`
                                ExecuteQuery1(Takesellrate, function (arrselldet) {
                                    if (arrselldet.length == 0) {
                                        Getselldetails.sell_margin = ''
                                        Getselldetails.sell_rate = ''
                                    } else {
                                        Getselldetails.sell_margin = arrselldet[0].sell_margin != null ? arrselldet[0].sell_margin : ''
                                        Getselldetails.sell_rate = arrselldet[0].sell_rate != null ? arrselldet[0].sell_rate : ''
                                    }
                                    resolve(Getselldetails)

                                })
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
