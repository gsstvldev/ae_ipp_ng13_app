var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
  try {
        /*   Created By : Daseen
        Created Date : 11-11-2022
        Modified By : Siva Harish
        Modified Date : 24-03-2023  
        Reason for : 
        */
        let serviceName = 'NPSS T24 Posting';
        let reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
        let reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
        let reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
        let reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
        let reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
        let params = appRequest.body.PARAMS; //  Client input fromm Server
        let headers = appRequest.headers; // header details 
        let objSessionLogInfo = null; // set value is null
        let cvAcNum, sell_margin, sell_rate;
        let xml2js = require('xml2js');
        let mTranConn = "";
        let addquery = "";
        let reqAsync = require('async');
        let dopostingapiCall
        let moment = require('moment');
        let objresponse = {
            'status': 'FAILURE',
            'data': '',
            'msg': ''
        }; // Response to Client
        // Assign function for loginformation and session info

        reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
            try {
                objSessionLogInfo = objLogInfo; // Assing log information
                // Log Viewer Setup
                objSessionLogInfo.HANDLER_CODE = 'NPSS Real time Posting';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS Real time Posting';
                let cus_iban;
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection     
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                        try {
                            if (Array.isArray(params.tran_id)) {
                                arrTranID = params.tran_id.map(function (eachTran) { return eachTran.toString(); });
                            }
                            else {
                                arrTranID = [params.tran_id.toString()];
                            }
                            TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                            let QueName
                            let Apiformat
                            let take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL'`;
                            if (params.STATUS.startsWith('IP_BCT')) {
                                QueName = 'NPSS_BCT_POSTING_QUEUE'
                                Apiformat = 'BCT'
                            } else {
                                QueName = 'NPSS_RCT_POSTING_QUEUE'
                                Apiformat = 'RCT'
                            }
                            let take_api_params = `select fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,ns.issuer_type_code,ns.dbtr_birth_date,ns.dbtr_city_birth,ns.dbtr_country,ns.dbtr_document_id,ns.ext_person_id_code,ns.dbtr_other_issuer,ns.dbtr_prvt_id,ns.dbtr_cust_type,ns.ext_acct_id_code,ns.instruction_id,ns.instrument_type,ns.npsst_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ns.ext_org_id_code,ns.clrsysref,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id in ${TempTranID}`;
                            let take_batch_name = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='${QueName}' and param_code='BATCH_NAME'`;
                            let Apiurl = await ExecuteQuery1(take_api_url)
                            if (Apiurl.length) {
                                let url = Apiurl[0].param_detail;
                                let TakeTranParams = await ExecuteQuery1(take_api_params)
                                let TakeBatchName = await ExecuteQuery1(take_batch_name)
                                if (TakeBatchName.length > 0) {
                                    if (TakeTranParams.length) {
                                        reqAsync.forEachOfSeries(TakeTranParams, function (TakeTranParamsgObj, i, nextobjctfunc) {
                                            let Startfunc = async () => {
                                                let Apistatus
                                                let ApiName
                                                if (Apiformat == 'BCT') {
                                                    if (params.STATUS == 'IP_BCT_CC_POSTING_SUCCESS') {
                                                        ApiName = 'BCT CC Posting Api'
                                                        Apistatus = await CallBctCCPosting(TakeTranParamsgObj, params, TakeBatchName, url)
                                                    } else {
                                                        ApiName = 'BCT PC Posting Api'
                                                        Apistatus = await CallBctPCPosting(TakeTranParamsgObj, params, TakeBatchName, url)
                                                    }

                                                } else {
                                                    if (params.STATUS == 'IP_RCT_CC_POSTING_SUCCESS') {
                                                        ApiName = 'RCT CC Posting Api'
                                                        Apistatus = await CallRCTCCPosting(TakeTranParamsgObj, params, TakeBatchName, url)
                                                    } else {
                                                        ApiName = 'RCT PC Posting Api'
                                                        Apistatus = await CallRCTPCPosting(TakeTranParamsgObj, params, TakeBatchName, url)
                                                    }

                                                }

                                                if (Apistatus == 'SUCCESS') {
                                                    nextobjctfunc()
                                                } else {
                                                    objresponse.status = ApiName + '  Call Failure'
                                                    sendResponse(null, objresponse)
                                                }

                                            }
                                            Startfunc()
                                        }, function () {
                                            objresponse.status = 'SUCCESS'
                                            sendResponse(null, objresponse)
                                        })


                                    }
                                    else {

                                        objresponse.status = "No Data found in Transaction table"
                                        sendResponse(null, objresponse)
                                    }
                                } else {
                                    objresponse.status = "Batch Name is not found"
                                    sendResponse(null, objresponse)
                                }




                            } else {
                                objresponse.status = "Kafka API Url Not Found"
                                sendResponse(null, objresponse)
                            }


                            function CallBctCCPosting(arrprocesslog, params, TakeBatchName, url) {
                                return new Promise((resolve, reject) => {
                                    try {
                                        let lclinstrm
                                        try {
                                            let parser = new xml2js.Parser({ strict: false, trim: true });
                                            parser.parseString(arrprocesslog.message_data, function (err, result) {
                                                lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                            });
                                        } catch (error) {
                                            lclinstrm = ''
                                        }
                                        var apiName = 'NPSS BCT CC posting'
                                        var request = require('request');
                                        var apiURL =
                                            apiURL = url // apiURL + apiName
                                        var options = {
                                            url: apiURL,
                                            timeout: 18000000,
                                            method: 'POST',
                                            json: {

                                                "batch_name": TakeBatchName[0].param_detail,
                                                "data": {
                                                    "payload": {
                                                        "hdr_msg_id": arrprocesslog.hdr_msg_id || '',
                                                        "hdr_created_date": arrprocesslog.hdr_created_date || '',
                                                        "hdr_total_records": arrprocesslog.hdr_total_records || '',
                                                        "hdr_total_amount": arrprocesslog.hdr_total_amount || '',
                                                        "hdr_settlement_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD") || '',
                                                        "hdr_settlement_method": arrprocesslog.hdr_settlement_method || '',
                                                        "hdr_clearing_system": arrprocesslog.hdr_clearing_system || '',
                                                        "dr_sort_code": arrprocesslog.dr_sort_code || '',
                                                        "cr_sort_code": arrprocesslog.cr_sort_code || '',
                                                        "category_purpose": arrprocesslog.category_purpose || '',
                                                        "category_purpose_prty": arrprocesslog.category_purpose_prty || '',
                                                        "ext_purpose_code": arrprocesslog.ext_purpose_code || '',
                                                        "lclinstrm": lclinstrm || '',
                                                        "intrbk_sttlm_cur": arrprocesslog.intrbk_sttlm_cur || '',
                                                        "intrbk_sttlm_amnt": arrprocesslog.intrbk_sttlm_amnt || '',
                                                        "dbtr_iban": arrprocesslog.dbtr_iban || '',
                                                        "cdtr_iban": arrprocesslog.cdtr_iban || '',
                                                        "dbtr_acct_name": arrprocesslog.dbtr_acct_name || '',
                                                        "cdtr_acct_name": arrprocesslog.cdtr_acct_name || '',
                                                        "payment_endtoend_id": arrprocesslog.payment_endtoend_id || '',
                                                        "charge_bearer": arrprocesslog.charge_bearer || '',
                                                        "txid": arrprocesslog.tran_ref_id || '',
                                                        "uetr": arrprocesslog.uetr || '',
                                                        "cr_acct_identification": arrprocesslog.cr_acct_identification || '',
                                                        "cr_acct_id_code": arrprocesslog.cr_acct_id_code || '',
                                                        "message_data": arrprocesslog.message_data || '',
                                                        "process_type": arrprocesslog.process_type || '',
                                                        "status": params.STATUS || '',
                                                        "process_status": params.ELIGIBLE_PROCESS_STATUS || '',
                                                        "process": "Pacs.008 INWARD POSTING",
                                                        "remittance_information": arrprocesslog.remittance_info,
                                                        "extIdentifier": arrTranparamsObj.clrsysref || '',
                                                        "clrsysref": arrprocesslog.clrsysref || '',
                                                        "department_code": arrprocesslog.department_code || '',
                                                        "charge_code": "WAIVE",
                                                        "npsst_id": arrprocesslog.npsst_id || '',
                                                        "NOSTRO_POOL_ACC": "Y",
                                                        "retry_count": "0"
                                                    },
                                                    "AccountInformation": {
                                                        "account_number": "",
                                                        "company_code": "",
                                                        "inactive_marker": "",
                                                        "currency": "",
                                                        "alternate_account_type": "",
                                                        "alternate_account_id": "",
                                                        "account_officer": "",
                                                        "curr_rate_segment": "",
                                                        "customer_id": "",
                                                        "CR.VA.NUMBER": "",
                                                    }

                                                }
                                            }, headers: {
                                                'Content-Type': 'application/json'
                                            }
                                        }

                                        var PrintInfo = {}
                                        PrintInfo.Apiformat = 'BCT CC Posting'
                                        PrintInfo.url = url
                                        PrintInfo.uetr = arrprocesslog.uetr || ''
                                        PrintInfo.tran_ref_id = arrprocesslog.tran_ref_id || ''
                                        PrintInfo.clrsysref = arrprocesslog.clrsysref || ''
                                        reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                            if (error) {
                                                reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                                sendResponse(null, error);
                                            } else {
                                                try {
                                                    reqInstanceHelper.PrintInfo(serviceName, '......................' + apiName + '------------API Response-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                    resolve(responseBodyFromImagingService)
                                                } catch (error) {
                                                    objresponse.status = error
                                                    sendResponse(null, objresponse)
                                                }

                                            }
                                        });

                                    } catch (error) {
                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                        sendResponse(null, error);
                                    }
                                })
                            }


                            function CallBctPCPosting(arrprocesslog, params, TakeBatchName, url) {
                                return new Promise((resolve, reject) => {
                                    try {
                                        let lclinstrm
                                        try {
                                            let parser = new xml2js.Parser({ strict: false, trim: true });
                                            parser.parseString(arrprocesslog.message_data, function (err, result) {
                                                lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                            });
                                        } catch (error) {
                                            lclinstrm = ''
                                        }
                                        var apiName = 'NPSS BCT PC posting'
                                        var request = require('request');
                                        var apiURL =
                                            apiURL = url // apiURL + apiName
                                        var options = {
                                            url: apiURL,
                                            timeout: 18000000,
                                            method: 'POST',
                                            json: {

                                                "batch_name": TakeBatchName[0].param_detail,
                                                "data": {
                                                    "payload": {
                                                        "hdr_msg_id": arrprocesslog.hdr_msg_id || '',
                                                        "hdr_created_date": arrprocesslog.hdr_created_date || '',
                                                        "hdr_total_records": arrprocesslog.hdr_total_records || '',
                                                        "hdr_total_amount": arrprocesslog.hdr_total_amount || '',
                                                        "hdr_settlement_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD") || '',
                                                        "hdr_settlement_method": arrprocesslog.hdr_settlement_method || '',
                                                        "hdr_clearing_system": arrprocesslog.hdr_clearing_system || '',
                                                        "dr_sort_code": arrprocesslog.dr_sort_code || '',
                                                        "cr_sort_code": arrprocesslog.cr_sort_code || '',
                                                        "category_purpose": arrprocesslog.category_purpose || '',
                                                        "category_purpose_prty": arrprocesslog.category_purpose_prty || '',
                                                        "ext_purpose_code": arrprocesslog.ext_purpose_code || '',
                                                        "lclinstrm": lclinstrm || '',
                                                        "intrbk_sttlm_cur": arrprocesslog.intrbk_sttlm_cur || '',
                                                        "intrbk_sttlm_amnt": arrprocesslog.intrbk_sttlm_amnt || '',
                                                        "dbtr_iban": arrprocesslog.dbtr_iban || '',
                                                        "cdtr_iban": arrprocesslog.cdtr_iban || '',
                                                        "dbtr_acct_name": arrprocesslog.dbtr_acct_name || '',
                                                        "cdtr_acct_name": arrprocesslog.cdtr_acct_name || '',
                                                        "payment_endtoend_id": arrprocesslog.payment_endtoend_id || '',
                                                        "charge_bearer": arrprocesslog.charge_bearer || '',
                                                        "txid": arrprocesslog.tran_ref_id || '',
                                                        "uetr": arrprocesslog.uetr || '',
                                                        "cr_acct_identification": arrprocesslog.cr_acct_identification || '',
                                                        "cr_acct_id_code": arrprocesslog.cr_acct_id_code || '',
                                                        "message_data": arrprocesslog.message_data || '',
                                                        "process_type": arrprocesslog.process_type || '',
                                                        "status": params.STATUS || '',
                                                        "process_status": params.ELIGIBLE_PROCESS_STATUS || '',
                                                        "process": "Pacs.008 INWARD POSTING",
                                                        "remittance_information": arrprocesslog.remittance_info,
                                                        "extIdentifier": arrTranparamsObj.clrsysref || '',
                                                        "clrsysref": arrprocesslog.clrsysref || '',
                                                        "department_code": arrprocesslog.department_code || '',
                                                        "charge_code": "WAIVE",
                                                        "npsst_id": arrprocesslog.npsst_id || '',
                                                        "PC_NOSTRO_POOL_ACC": "Y",
                                                        "retry_count": "0"
                                                    },
                                                    "AccountInformation": {
                                                        "account_number": "",
                                                        "company_code": "",
                                                        "inactive_marker": "",
                                                        "currency": "",
                                                        "alternate_account_type": "",
                                                        "alternate_account_id": "",
                                                        "account_officer": "",
                                                        "curr_rate_segment": "",
                                                        "customer_id": "",
                                                        "CR.VA.NUMBER": "",
                                                    }

                                                }
                                            }, headers: {
                                                'Content-Type': 'application/json'
                                            }
                                        }

                                        var PrintInfo = {}
                                        PrintInfo.Apiformat = 'BCT PC Posting'
                                        PrintInfo.url = url
                                        PrintInfo.uetr = arrprocesslog.uetr || ''
                                        PrintInfo.tran_ref_id = arrprocesslog.tran_ref_id || ''
                                        PrintInfo.clrsysref = arrprocesslog.clrsysref || ''
                                        reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                            if (error) {
                                                reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                                sendResponse(null, error);
                                            } else {
                                                try {
                                                    reqInstanceHelper.PrintInfo(serviceName, '......................' + apiName + '------------API Response-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                    resolve(responseBodyFromImagingService)
                                                } catch (error) {
                                                    objresponse.status = error
                                                    sendResponse(null, objresponse)
                                                }

                                            }
                                        });

                                    } catch (error) {
                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                        sendResponse(null, error);
                                    }
                                })
                            }

                            function CallRCTCCPosting(arrTranparamsObj, params, TakeBatchName, url) {
                                return new Promise( async (resolve, reject) => {
                                    let lclinstrm
                                    try {
                                        let parser = new xml2js.Parser({ strict: false, trim: true });
                                        parser.parseString(arrTranparamsObj.message_data, function (err, result) {
                                            lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                        });
                                    } catch (error) {
                                        lclinstrm = ''
                                    }
                                    let TakepostingRefno = `select  process_ref_no,status_accp_date,status_intrbksttlmdt,status_resp_amount from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name = 'Receive Pacs002'`
                                    let arrrefno = await ExecuteQuery1(TakepostingRefno)
                                    if (arrrefno.length > 0) {
                                        if (arrrefno[0].process_ref_no != null) {
                                            let TakenpsstrdRefno = `select npsstrrd_refno from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name = 'Receive Pacs008'`
                                            let arrnpssRefno = await ExecuteQuery1(TakenpsstrdRefno)
                                            if(arrnpssRefno.length > 0){
                                                var request = require('request');
                                                var options = {
                                                    url: url,
                                                    timeout: 18000000,
                                                    method: 'POST',
                                                    json: {
                                                        batch_name: TakeBatchName[0].param_detail,
                                                        data: {
                                                            "payload": {
                                                                "hdr_msg_id": arrTranparamsObj.hdr_msg_id || '',
                                                                "hdr_created_date": arrTranparamsObj.hdr_created_date || '',
                                                                "hdr_total_records": arrTranparamsObj.hdr_total_records || '',
                                                                "hdr_total_amount": arrTranparamsObj.hdr_total_amount || '',
                                                                "hdr_settlement_date": arrTranparamsObj.hdr_settlement_date || '',
                                                                "value_date": arrTranparamsObj.value_date || '',
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
                                                                "charge_code":  "WAIVE",
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
                                                                "retry_count":"0"
                                                            }
                                                        }
                                                    },
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    }

                                                }

                                                var PrintInfo = {}
                                                PrintInfo.url = url
                                                PrintInfo.card = 'RCT Credit CARD  POSTING'
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
                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                       
                                                           resolve(responseBodyFromImagingService)
                                                      
                                                    }
                                                });
                                            }else{
                                                objresponse.status = 'NPSSTRRD_REFNO is not found'
                                                sendResponse(null,objresponse)
                                            }
                                        }else{
                                            objresponse.status = 'Posting Ref not  is Missing'
                                            sendResponse(null,objresponse)
                                        }
                                    }else{
                                        objresponse.status = 'Posting Ref not found'
                                        sendResponse(null,objresponse)
                                    }
                                })
                            }

                            function CallRCTPCPosting(arrTranparamsObj, params, TakeBatchName, url) {
                                return new Promise( async (resolve, reject) => {
                                    let lclinstrm
                                    try {
                                        let parser = new xml2js.Parser({ strict: false, trim: true });
                                        parser.parseString(arrTranparamsObj.message_data, function (err, result) {
                                            lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                        });
                                    } catch (error) {
                                        lclinstrm = ''
                                    }
                                    let TakepostingRefno = `select  process_ref_no,status_accp_date,status_intrbksttlmdt,status_resp_amount from npss_trn_process_log where uetr = '${TakeTranParamsgObj.uetr}' and process_name = 'Receive Pacs002'`
                                    let arrrefno = await ExecuteQuery1(TakepostingRefno)
                                    if (arrrefno.length > 0) {
                                        if (arrrefno[0].process_ref_no != null) {
                                            let TakenpsstrdRefno = `select npsstrrd_refno from npss_trn_process_log where uetr = '${TakeTranParamsgObj.uetr}' and process_name = 'Receive Pacs008'`
                                            let arrnpssRefno = await ExecuteQuery1(TakenpsstrdRefno)
                                            if(arrnpssRefno.length > 0){
                                                var request = require('request');
                                                var options = {
                                                    url: url,
                                                    timeout: 18000000,
                                                    method: 'POST',
                                                    json: {
                                                        batch_name: TakeBatchName[0].param_detail,
                                                        data: {
                                                            "payload": {
                                                                "hdr_msg_id": arrTranparamsObj.hdr_msg_id || '',
                                                                "hdr_created_date": arrTranparamsObj.hdr_created_date || '',
                                                                "hdr_total_records": arrTranparamsObj.hdr_total_records || '',
                                                                "hdr_total_amount": arrTranparamsObj.hdr_total_amount || '',
                                                                "hdr_settlement_date": arrTranparamsObj.hdr_settlement_date || '',
                                                                "value_date": arrTranparamsObj.value_date || '',
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
                                                                "charge_code":  "WAIVE",
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
                                                                "retry_count":"0"
                                                            }
                                                        }
                                                    },
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    }

                                                }

                                                var PrintInfo = {}
                                                PrintInfo.url = arrurl[0].param_detail
                                                PrintInfo.card = 'RCT Prepaid CARD  POSTING'
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
                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                       
                                                           resolve(responseBodyFromImagingService)
                                                      
                                                    }
                                                });
                                            }else{
                                                objresponse.status = 'NPSSTRRD_REFNO is not found'
                                                sendResponse(null,objresponse)
                                            }
                                        }else{
                                            objresponse.status = 'Posting Ref not  is Missing'
                                            sendResponse(null,objresponse)
                                        }
                                    }else{
                                        objresponse.status = 'Posting Ref not found'
                                        sendResponse(null,objresponse)
                                    }
                                })
                            }


                            //Execute Query Function
                            function ExecuteQuery1(query) {
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
                            sendResponse(error, null);
                        }
                    })
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
