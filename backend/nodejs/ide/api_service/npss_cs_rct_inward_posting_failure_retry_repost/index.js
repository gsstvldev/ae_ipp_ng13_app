var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
try {
    /*   Created By :Siva Harish
    Created Date :10-03-2023
    Modified By : Daseen 21-03-2023 for adding retry_count param in T24 inward return api 
    Modified By : Siva Harish-- Changing code for bct 23/03/2023
     Modified By : Siva Harish-- Changing PAYLOAD for T24posting 24/03/2023
      Modified By : Siva Harish-- Changing PAYLOAD for all apis 25/03/2023
        Modified By : Siva Harish-- Adding ext_iden_rtry_value and department_code in payload for all apis 28/03/2023
        Siva Harish-- Removing ext_iden_rtry_value and department_code in payload for all apis 28/04/2023
  Siva Harish-- Adding returnid 24/06/2023 in T24 inward return Nostro api 
     
   
    */
    var serviceName = 'NPSS (CS) RCT Inward Posting Failure Retry Repost';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) RCT Inward Posting Failure Retry Repost';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) RCT Inward Posting Failure Retry Repost';
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

                        var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_IP_POSTING_FAIL_REPOST'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                        var take_api_params = `select ns.account_currency,ns.reversal_amount,ns.npsst_id,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY ) as dbtr_acct_no,ns.dbtr_prvt_id,ns.department_code,ns.dbtr_cust_type,ns.ext_acct_id_code,ns.intrbk_sttlm_amnt,ns.instrument_type,ns.instruction_id,ns.hdr_msg_id,ns.hdr_clearing_system,ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,fn_pcidss_decrypt(ns.message_data,$PCIDSS_KEY ) as message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,ns.accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id in ${TempTranID}`;
                        var Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
                        ExecuteQuery1(TakeStsPsts, async function (arrurlResult) {
                            if (arrurlResult.length) {
                                final_process_status = arrurlResult[0].success_process_status
                                final_status = arrurlResult[0].success_status
                                ExecuteQuery1(Takekafkaurl, async function (arrurl) {
                                    if (arrurl.length > 0) {
                                        if (params.Roleid == '705' || params.Roleid == 705 || params.eligible_status.startsWith('IP_BCT')) {
                                            var UpdateTrnTbl = `update npss_transactions set  status='${final_status}',process_status='${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id in ${TempTranID} `
                                            ExecuteQuery(UpdateTrnTbl, function (uptranresult) {
                                                if (uptranresult == 'SUCCESS') {
                                                    objresponse.status = 'SUCCESS';
                                                    sendResponse(null, objresponse)
                                                } else {
                                                    objresponse.status = 'FAILURE';
                                                    objresponse.errdata = "Error in npss transaction table update"
                                                    sendResponse(null, objresponse)

                                                }
                                            })

                                        } else { //checker for repost
                                            ExecuteQuery1(take_api_params, async function (arrTranparams) {
                                                if (arrTranparams.length > 0) {
                                                    var Apicalls

                                                    let ext_ident_value = ''
                                                    //ext_ident_value = await GetRetrycount(arrTranparams[0].uetr)
                                                    if (params.eligible_status == 'IP_RCT_PC_T24_POSTING_RETRY') { //prepaid                            
                                                        Apicalls = await Callprepaidapi(arrTranparams, final_process_status, final_status, PRCT_ID, arrurl, ext_ident_value)
                                                    } else if (params.eligible_status == 'IP_RCT_CC_T24_POSTING_RETRY' ||params.eligible_status == 'IP_RCT_CC_POSTING_RETRY' ) { //credit                                     
                                                        Apicalls = await Callcreditapi(arrTranparams, final_process_status, final_status, PRCT_ID, arrurl, ext_ident_value)
                                                    } else if (params.eligible_status == 'IP_RCT_RETURN_POSTING_RETRY') { //inward return Nostro Posting API                                                                                   
                                                        Apicalls = await CallNostroapi(arrTranparams, final_process_status, final_status, PRCT_ID, arrurl, ext_ident_value)
                                                    } else if (params.eligible_status == 'IP_RCT_RR_POSTING_RETRY') { //T24 inward return Posting API (Auto Return Case)                                                                                     
                                                        Apicalls = await CallautoReturn(arrTranparams, final_process_status, final_status, PRCT_ID, arrurl, ext_ident_value)
                                                    } else if (params.eligible_status == 'IP_RCT_PC_POSTING_RETRY') { //ELPASO Posting
                                                        Apicalls = await CallELPASOapi(arrTranparams, final_process_status, final_status, PRCT_ID, arrurl, ext_ident_value)
                                                    } else if (params.eligible_status == 'IP_RCT_POSTING_RETRY') {//T24 INward 
                                                        Apicalls = await CallT24Posting(arrTranparams, final_process_status, final_status, PRCT_ID, arrurl, ext_ident_value)
                                                    } else {
                                                        objresponse.status = "FAILURE"
                                                        objresponse.errdata = "No Eligible status for checker role"
                                                        sendResponse(null, objresponse)
                                                    }

                                                    if (Apicalls == 'SUCCESS') {
                                                        objresponse.status = "SUCCESS"
                                                        objresponse.errdata = ""
                                                        sendResponse(null, objresponse)
                                                    } else {
                                                        objresponse.status = "API call FAILURE"
                                                        objresponse.errdata = ""
                                                        sendResponse(null, objresponse)
                                                    }
                                                } else {
                                                    objresponse.status = "FAILURE"
                                                    objresponse.errdata = "No Data found in Workflow table"
                                                    sendResponse(null, objresponse)
                                                }
                                            })

                                        }
                                    } else {
                                        objresponse.status = 'FAILURE';
                                        objresponse.errdata = "kafka Api url not found"
                                        sendResponse(null, objresponse)
                                    }
                                })


                            } else {
                                objresponse.status = "FAILURE"
                                objresponse.errdata = "No Data found in Tran Table"
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

                function InsertProcess(arrTranparams, success_process_status, success_status, PRCT_ID) {
                    return new Promise((resolve, reject) => {
                        var processName
                        if (params.Roleid == '705' || params.Roleid == 705) {
                            processName = 'Retry - Maker'
                        } else {
                            processName = 'Repost - Checker'
                        }
                        var arrCusTranInst = [];

                        var objCusTranInst = {}
                        objCusTranInst.MSG_ID = arrTranparams.hdr_msg_id;
                        objCusTranInst.PRCT_ID = PRCT_ID;
                        objCusTranInst.UETR = arrTranparams.uetr;
                        objCusTranInst.NPSSTRRD_REFNO = arrTranparams.tran_ref_id;
                        objCusTranInst.PROCESS_TYPE = 'IP'
                        objCusTranInst.PROCESS_TIME = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                        objCusTranInst.PROCESS_NAME = processName
                        objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
                        objCusTranInst.PROCESS_STATUS = success_process_status;
                        objCusTranInst.STATUS = success_status;
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
                                var UpdateTrnTbl
                                if (params.Roleid == 705 || params.Roleid == '705' || params.Roleid == 737 || params.Roleid == '737') {
                                    UpdateTrnTbl = `update npss_transactions set  maker = '${params.CREATED_BY_NAME}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id = '${arrTranparams.npsst_id}'`
                                } else {
                                    UpdateTrnTbl = `update npss_transactions set  checker = '${params.CREATED_BY_NAME}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id = '${arrTranparams.npsst_id}'`
                                }
                                ExecuteQuery(UpdateTrnTbl, function (uptranresult) {
                                    if (uptranresult == 'SUCCESS') {
                                        resolve('SUCCESS')
                                    } else {
                                        resolve('FAILURE')

                                    }
                                })
                            } else {
                                objresponse.status = 'FAILURE'
                                objresponse.errdata = 'Failure in Insert Process for TranId' + arrTranparamsObj.npsst_id
                                sendResponse(null, objresponse)
                            }
                        })
                    })

                }



                function Callprepaidapi(arrTranparams, final_process_status, final_status, PRCT_ID, arrurl, ext_ident_value) {
                    return new Promise((resolve, reject) => {
                        reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                            var TakepostingRefno = `select  process_ref_no,status_accp_date,status_intrbksttlmdt,status_resp_amount from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name = 'Receive Pacs002'`
                            ExecuteQuery1(TakepostingRefno, function (arrrefno) {
                                if (arrrefno.length > 0) {
                                    if (arrrefno[0].process_ref_no != null) {
                                        var TakenpsstrdRefno = `select npsstrrd_refno from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name = 'Receive Pacs008'`
                                        ExecuteQuery1(TakenpsstrdRefno, function (arrnpssRefno) {
                                            if (arrnpssRefno.length > 0) {
                                                var lclinstrm
                                                if (arrTranparamsObj.message_data !== null) {
                                                    var parser = new xml2js.Parser({ strict: false, trim: true });
                                                    parser.parseString(arrTranparamsObj.message_data, function (err, result) {
                                                        lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                                    });
                                                }
                                                else {
                                                    lclinstrm = ""
                                                }
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
                                                                //"ext_iden_retry_value": ext_ident_value || '',
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

                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                    if (error) {
                                                        reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                        sendResponse(error, null);

                                                    } else {
                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                        if (responseBodyFromImagingService == 'SUCCESS') {
                                                            var InsPrcs = async () => {
                                                                var InsertTran = await InsertProcess(arrTranparamsObj, final_process_status, final_status, PRCT_ID)
                                                                if (InsertTran == 'SUCCESS') {
                                                                    nextobjctfunc()
                                                                } else {
                                                                    objresponse.status = 'FAILURE'
                                                                    objresponse.errdata = "Prepaid Pool Posting API - Update  Process Failure For TranId" + arrTranparamsObj.npsst_id
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            }
                                                            InsPrcs()
                                                        } else {
                                                            objresponse.status = 'FAILURE'
                                                            objresponse.errdata = "Prepaid Pool Posting - Api call Failure for" + arrTranparamsObj.npsst_id
                                                            sendResponse(null, objresponse)
                                                        }
                                                    }
                                                });

                                            } else {
                                                objresponse.status = 'FAILURE'
                                                objresponse.errdata = "Prepaid - npsstrrd_refno not found for" + arrTranparamsObj.npsst_id
                                                sendResponse(null, objresponse)
                                            }

                                        })

                                    } else {
                                        objresponse.status = 'FAILURE'
                                        objresponse.errdata = "Prepaid - Process Ref no is Missing" + arrTranparamsObj.npsst_id
                                        sendResponse(null, objresponse)
                                    }
                                } else {

                                    objresponse.status = 'FAILURE'
                                    objresponse.errdata = "Prepaid - Process Ref no not found for Tran_id" + arrTranparamsObj.npsst_id
                                    sendResponse(null, objresponse)
                                }
                            })

                        }, function () {
                            resolve('SUCCESS')
                        })
                    })



                }


                function Callcreditapi(arrTranparams, final_process_status, final_status, PRCT_ID, arrurl, ext_ident_value) {

                    return new Promise((resolve, reject) => {
                        reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                            var TakepostingRefno = `select  process_ref_no,status_accp_date,status_intrbksttlmdt,status_resp_amount from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name = 'Receive Pacs002'`
                            ExecuteQuery1(TakepostingRefno, function (arrrefno) {
                                if (arrrefno.length > 0) {
                                    if (arrrefno[0].process_ref_no != null) {
                                        var TakenpsstrdRefno = `select npsstrrd_refno from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name = 'Receive Pacs008'`
                                        ExecuteQuery1(TakenpsstrdRefno, function (arrnpssRefno) {
                                            if (arrnpssRefno.length > 0) {
                                                var lclinstrm
                                                if (arrTranparamsObj.message_data !== null) {
                                                    var parser = new xml2js.Parser({ strict: false, trim: true });
                                                    parser.parseString(arrTranparamsObj.message_data, function (err, result) {
                                                        lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                                    });
                                                }
                                                else {
                                                    lclinstrm = ""
                                                }
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
                                                                // "ext_iden_retry_value": ext_ident_value || '',
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
                                                               // "NOSTRO_POOL_ACC": "Y",
                                                                "retry_count": "0",
                                                            }
                                                        }
                                                    },
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    }

                                                }
                                                if(params.eligible_status=='IP_RCT_CC_T24_POSTING_RETRY'){
                                                    options.json.data.payload.NOSTRO_POOL_ACC='Y'
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
                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                        if (responseBodyFromImagingService == 'SUCCESS') {
                                                            var InsPrcs = async () => {
                                                                var InsertTran = await InsertProcess(arrTranparamsObj, final_process_status, final_status, PRCT_ID)
                                                                if (InsertTran == 'SUCCESS') {
                                                                    nextobjctfunc()
                                                                } else {
                                                                    objresponse.status = 'FAILURE'
                                                                    objresponse.errdata = "Credit Pool Posting API - Update  Process Failure For TranId" + arrTranparamsObj.npsst_id
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            }
                                                            InsPrcs()
                                                        } else {
                                                            objresponse.status = 'FAILURE'
                                                            objresponse.errdata = "Credit card - Api call Failure for" + arrTranparamsObj.npsst_id
                                                            sendResponse(null, objresponse)
                                                        }
                                                    }
                                                });
                                            } else {
                                                objresponse.status = 'FAILURE'
                                                objresponse.errdata = "Credit - npsstrrd_refno not found for" + arrTranparamsObj.npsst_id
                                                sendResponse(null, objresponse)
                                            }

                                        })


                                    } else {
                                        objresponse.status = 'FAILURE'
                                        objresponse.errdata = "Credit card - Process Ref no is Missing for" + arrTranparamsObj.npsst_id
                                        sendResponse(null, objresponse)
                                    }
                                } else {

                                    objresponse.status = 'FAILURE'
                                    objresponse.errdata = "Credit card - Process Ref no not found for Tran_id for" + arrTranparamsObj.npsst_id
                                    sendResponse(null, objresponse)
                                }
                            })

                        }, function () {
                            resolve('SUCCESS')
                        })
                    })




                }


                function CallNostroapi(arrTranparams, final_process_status, final_status, PRCT_ID, arrurl, ext_ident_value) {


                    return new Promise((resolve, reject) => {
                        reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                            var TakepostingRefno = `select  process_ref_no,status_accp_date,status_intrbksttlmdt,status_resp_amount from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name = 'Receive Pacs002'`
                            ExecuteQuery1(TakepostingRefno, function (arrrefno) {
                                if (arrrefno.length > 0) {
                                    var cbsaccount = `select company_code,customer_id,alternate_account_type from core_nc_cbs_accounts where alternate_account_id ='${arrTranparamsObj.cdtr_iban}'`
                                    ExecuteQuery1(cbsaccount, function (arrcbsdata) {
                                        if (arrcbsdata.length > 0) {
                                            var TakenpsstrdRefno = `select npsstrrd_refno,msg_id from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name = 'Receive Pacs008'`
                                            ExecuteQuery1(TakenpsstrdRefno, function (arrnpssRefno) {
                                                if (arrnpssRefno.length > 0) {
                                                    var TakereturnId = `select npsstrrd_refno from npss_trn_process_log where process_name =  'Place Pacs004' and status = 'IP_RCT_RETURNED' and uetr = '${arrTranparamsObj.uetr}'`
                                                    ExecuteQuery1(TakereturnId, function (arrRetid) {
                                                        if (arrRetid.length > 0) {
                                                            var Virtual_account
                                                            if (arrcbsdata[0].alternate_account_type == 'VA.IBAN' || arrcbsdata[0].alternate_account_type == 'VA.BBAN') {
                                                                Virtual_account = 'Y'
                                                            } else {
                                                                Virtual_account = 'N'
                                                            }

                                                            var lclinstrm
                                                            if (arrTranparamsObj.message_data !== null) {
                                                                var parser = new xml2js.Parser({ strict: false, trim: true });
                                                                parser.parseString(arrTranparamsObj.message_data, function (err, result) {
                                                                    lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                                                });
                                                            }
                                                            else {
                                                                lclinstrm = ""
                                                            }
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
                                                                            // "ext_iden_retry_value": ext_ident_value || '',
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
                                                                            "return_id": arrRetid[0].npsstrrd_refno || ''

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

                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                                if (error) {
                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                                    sendResponse(error, null);

                                                                } else {
                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                                    if (responseBodyFromImagingService == 'SUCCESS') {
                                                                        var InsPrcs = async () => {
                                                                            var InsertTran = await InsertProcess(arrTranparamsObj, final_process_status, final_status, PRCT_ID)
                                                                            if (InsertTran == 'SUCCESS') {
                                                                                nextobjctfunc()
                                                                            } else {
                                                                                objresponse.status = 'FAILURE'
                                                                                objresponse.errdata = "Nostro Posting API - Update  Process Failure For TranId" + arrTranparamsObj.npsst_id
                                                                                sendResponse(null, objresponse)
                                                                            }
                                                                        }
                                                                        InsPrcs()
                                                                    } else {
                                                                        objresponse.status = 'FAILURE'
                                                                        objresponse.errdata = "Nostro - Api call Failure for" + arrTranparamsObj.npsst_id
                                                                        sendResponse(null, objresponse)
                                                                    }
                                                                }
                                                            });
                                                        } else {
                                                            objresponse.status = 'FAILURE'
                                                            objresponse.errdata = "Nostro - ReturnId not found for Tran" + arrTranparamsObj.npsst_id
                                                            sendResponse(null, objresponse)
                                                        }
                                                    })

                                                } else {
                                                    objresponse.status = 'FAILURE'
                                                    objresponse.errdata = "Nostro - npsstrrd_refno not found for Tran" + arrTranparamsObj.npsst_id
                                                    sendResponse(null, objresponse)
                                                }
                                            })



                                        } else {
                                            objresponse.status = 'FAILURE'
                                            objresponse.errdata = "NOSTRO API - No data found in cbs account for tran_id" + arrTranparamsObj.npsst_id
                                            sendResponse(null, objresponse)
                                        }
                                    })

                                } else {

                                    objresponse.status = 'FAILURE'
                                    objresponse.errdata = "Nostro  - Process Ref no not found for Tran_id for" + arrTranparamsObj.npsst_id
                                    sendResponse(null, objresponse)
                                }
                            })

                        }, function () {
                            resolve('SUCCESS')
                        })
                    })





                }

                function CallautoReturn(arrTranparams, final_process_status, final_status, PRCT_ID, arrurl, ext_ident_value) {
                    return new Promise((resolve, reject) => {
                        reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {

                            var cbsaccount = `select curr_rate_segment,alternate_account_id,currency,account_number,account_officer,company_code,customer_id,alternate_account_type from core_nc_cbs_accounts where alternate_account_id ='${arrTranparamsObj.cdtr_iban}'`
                            ExecuteQuery1(cbsaccount, function (arrcbsdata) {
                                if (arrcbsdata.length > 0) {
                                    var CallApi = async () => {
                                        var TakesellRate = await GetsellRate(arrcbsdata)
                                        var TakenpsstrdRefno = `select npsstrrd_refno,msg_id from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name = 'Receive Pacs008'`
                                        ExecuteQuery1(TakenpsstrdRefno, function (arrnpssRefno) {
                                            if (arrnpssRefno.length > 0) {
                                                var Virtual_account
                                                if (arrcbsdata[0].alternate_account_type == 'VA.IBAN' || arrcbsdata[0].alternate_account_type == 'VA.BBAN') {
                                                    Virtual_account = 'Y'
                                                } else {
                                                    Virtual_account = 'N'
                                                }

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
                                                                //"ext_iden_retry_value": ext_ident_value || '',
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

                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                    if (error) {
                                                        reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                        sendResponse(error, null);

                                                    } else {
                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                        if (responseBodyFromImagingService == 'SUCCESS') {
                                                            var InsPrcs = async () => {
                                                                var InsertTran = await InsertProcess(arrTranparamsObj, final_process_status, final_status, PRCT_ID)
                                                                if (InsertTran == 'SUCCESS') {
                                                                    nextobjctfunc()
                                                                } else {
                                                                    objresponse.status = 'FAILURE'
                                                                    objresponse.errdata = "Credit Pool Posting API - Update  Process Failure For TranId" + arrTranparamsObj.npsst_id
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            }
                                                            InsPrcs()
                                                        } else {
                                                            objresponse.status = 'FAILURE'
                                                            objresponse.errdata = "AutoReasoncode - Api call Failure for" + arrTranparamsObj.npsst_id
                                                            sendResponse(null, objresponse)
                                                        }
                                                    }
                                                });
                                            } else {
                                                objresponse.status = 'FAILURE'
                                                objresponse.errdata = "T24 Return Posting - npsstrrd_refno Not Found for tran_id" + arrTranparamsObj.npsst_id
                                                sendResponse(null, objresponse)
                                            }
                                        })
                                    }

                                    CallApi()


                                } else {
                                    objresponse.status = 'FAILURE'
                                    objresponse.errdata = "No data found in cbs account for tran_id" + arrTranparamsObj.npsst_id
                                    sendResponse(null, objresponse)
                                }
                            })




                        }, function () {
                            resolve('SUCCESS')
                        })
                    })






                }



                function CallELPASOapi(arrTranparams, final_process_status, final_status, PRCT_ID, arrurl, ext_ident_value) {
                    return new Promise((resolve, reject) => {
                        reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                            var TakeProcessRefno = `select process_ref_no from npss_trn_process_log where process_name = 'Receive Pacs002' and uetr = '${arrTranparamsObj.uetr}'`
                            ExecuteQuery1(TakeProcessRefno, function (arrprsrefno) {
                                if (arrprsrefno.length > 0) {
                                    var TakenpsstrdRefno = `select npsstrrd_refno from npss_trn_process_log where process_name = 'Receive Pacs008' and uetr = '${arrTranparamsObj.uetr}'`
                                    ExecuteQuery1(TakenpsstrdRefno, function (arrnpsstrdrefno) {
                                        if (arrnpsstrdrefno.length > 0) {
                                            var Takestatusdata = `select status_accp_date,status_intrbksttlmdt,status_resp_amount from npss_trn_process_log where process_name = 'Receive Pacs002' and uetr = '${arrTranparamsObj.uetr}'`
                                            ExecuteQuery1(Takestatusdata, function (arrstatus) {
                                                if (arrstatus.length > 0) {
                                                    var lclinstrm
                                                    if (arrTranparamsObj.message_data !== null) {
                                                        var parser = new xml2js.Parser({ strict: false, trim: true });
                                                        parser.parseString(arrTranparamsObj.message_data, function (err, result) {
                                                            lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                                        });
                                                    }
                                                    else {
                                                        lclinstrm = ""
                                                    }
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
                                                                    //"ext_iden_retry_value": ext_ident_value || '',
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
                                                                    "process_ref_no": arrprsrefno[0].process_ref_no || '',
                                                                    "originalTrasactionId": "",
                                                                    "status_accp_date": arrstatus[0].status_accp_date || '',
                                                                    "status_resp_amount": arrstatus[0].status_resp_amount || '',
                                                                    "status_intrbksttlmdt": arrstatus[0].status_intrbksttlmdt || '',
                                                                    "cbuae_return_code": "",
                                                                    "npsstrrd_refno": arrnpsstrdrefno[0].npsstrrd_refno || '',
                                                                    "process_name": "Pacs.002 Payment Status Report",
                                                                    "request_data_json": '',
                                                                    "retry_count": "0"
                                                                }
                                                            }
                                                        },
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        }
                                                    }

                                                    var PrintInfo = {}
                                                    PrintInfo.ApiName = 'ELPASO API CALL'
                                                    PrintInfo.url = arrurl[0].param_detail
                                                    PrintInfo.uetr = arrTranparamsObj.uetr || ''
                                                    PrintInfo.npsst_id = arrTranparamsObj.npsst_id || ''
                                                    PrintInfo.msg_id = arrTranparamsObj.hdr_msg_id || ''
                                                    PrintInfo.clrsysref = arrTranparamsObj.clrsysref || ''

                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                                    request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                        if (error) {
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                            sendResponse(error, null);

                                                        } else {
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                            if (responseBodyFromImagingService == 'SUCCESS') {
                                                                var InsPrcs = async () => {
                                                                    var InsertTran = await InsertProcess(arrTranparamsObj, final_process_status, final_status, PRCT_ID)
                                                                    if (InsertTran == 'SUCCESS') {
                                                                        nextobjctfunc()
                                                                    } else {
                                                                        objresponse.status = 'FAILURE'
                                                                        objresponse.errdata = "ELPASO - Failure in Insert Process For TranId" + arrTranparamsObj.npsst_id
                                                                        sendResponse(null, objresponse)
                                                                    }
                                                                }
                                                                InsPrcs()
                                                            } else {
                                                                objresponse.status = 'FAILURE'
                                                                objresponse.errdata = "ELPASO Posting - Api call Failure for" + arrTranparamsObj.npsst_id
                                                                sendResponse(null, objresponse)
                                                            }
                                                        }
                                                    });
                                                } else {
                                                    objresponse.status = 'FAILURE'
                                                    objresponse.errdata = 'status_accp_date,status_intrbksttlmdt Not found for TranId' + arrTranparamsObj.npsst_id + 'for ELPASO Api Call'
                                                    sendResponse(null, objresponse)
                                                }

                                            })
                                        } else {
                                            objresponse.status = 'FAILURE'
                                            objresponse.errdata = 'Npsstrrd_refno Not found for TranId' + arrTranparamsObj.npsst_id + 'for ELPASO Api Call'
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                } else {
                                    objresponse.status = 'FAILURE'
                                    objresponse.errdata = 'Process Refno Not found for TranId' + arrTranparamsObj.npsst_id + 'for ELPASO Api Call'
                                    sendResponse(null, objresponse)
                                }

                            })
                        }, function () {
                            resolve('SUCCESS')
                        })
                    })
                }



                function CallT24Posting(arrTranparams, final_process_status, final_status, PRCT_ID, arrurl, ext_ident_value) {
                    return new Promise((resolve, reject) => {
                        reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                            var TakepostingRefno = `select  process_ref_no,status_accp_date,status_intrbksttlmdt,status_resp_amount from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name = 'Receive Pacs002'`
                            ExecuteQuery1(TakepostingRefno, function (arrrefno) {
                                if (arrrefno.length > 0) {
                                    var cbsaccount = `select account_officer,currency,account_number,company_code,customer_id,alternate_account_type from core_nc_cbs_accounts where alternate_account_id ='${arrTranparamsObj.cdtr_iban}'`
                                    ExecuteQuery1(cbsaccount, function (arrcbsdata) {
                                        if (arrcbsdata.length > 0) {
                                            var Checkdata = async () => {
                                                var TakesellRate = await GetsellRate(arrcbsdata)
                                                var TakenpsstrdRefno = `select npsstrrd_refno from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name = 'Receive Pacs008'`
                                                ExecuteQuery1(TakenpsstrdRefno, function (arrnpssRefno) {
                                                    if (arrnpssRefno.length > 0) {
                                                        var Virtual_account
                                                        if (arrcbsdata[0].alternate_account_type == 'VA.IBAN' || arrcbsdata[0].alternate_account_type == 'VA.BBAN') {
                                                            Virtual_account = 'Y'
                                                        } else {
                                                            Virtual_account = 'N'
                                                        }

                                                        var lclinstrm
                                                        if (arrTranparamsObj.message_data !== null) {
                                                            var parser = new xml2js.Parser({ strict: false, trim: true });
                                                            parser.parseString(arrTranparamsObj.message_data, function (err, result) {
                                                                lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                                            });
                                                        }
                                                        else {
                                                            lclinstrm = ""
                                                        }
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
                                                                        //"ext_iden_retry_value": ext_ident_value || '',
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

                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                            if (error) {
                                                                reqInstanceHelper.PrintInfo(serviceName, '----------- API ERROR-------' + error, objSessionLogInfo);
                                                                sendResponse(error, null);

                                                            } else {
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                                if (responseBodyFromImagingService == 'SUCCESS') {
                                                                    var InsPrcs = async () => {
                                                                        var InsertTran = await InsertProcess(arrTranparamsObj, final_process_status, final_status, PRCT_ID)
                                                                        if (InsertTran == 'SUCCESS') {
                                                                            nextobjctfunc()
                                                                        } else {
                                                                            objresponse.status = 'FAILURE'
                                                                            objresponse.errdata = "T24 Inward Posting API - Update  Process Failure For TranId" + arrTranparamsObj.npsst_id
                                                                            sendResponse(null, objresponse)
                                                                        }
                                                                    }
                                                                    InsPrcs()
                                                                } else {
                                                                    objresponse.status = 'FAILURE'
                                                                    objresponse.errdata = "T24 Inward - Api call Failure for" + arrTranparamsObj.npsst_id
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            }
                                                        });
                                                    } else {
                                                        objresponse.status = 'FAILURE'
                                                        objresponse.errdata = "T24 Inward - npsstrrd_refno not found for Tran" + arrTranparamsObj.npsst_id
                                                        sendResponse(null, objresponse)
                                                    }
                                                })
                                            }

                                            Checkdata()


                                        } else {
                                            objresponse.status = 'FAILURE'
                                            objresponse.errdata = "T24 Inward - No data found in cbs account for tran_id" + arrTranparamsObj.npsst_id
                                            sendResponse(null, objresponse)
                                        }
                                    })

                                } else {

                                    objresponse.status = 'FAILURE'
                                    objresponse.errdata = "T24 Inward  - Process Ref no not found for Tran_id for" + arrTranparamsObj.npsst_id
                                    sendResponse(null, objresponse)
                                }
                            })

                        }, function () {
                            resolve('SUCCESS')
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

                function GetRetrycount(uetr) {
                    return new Promise((resolve, reject) => {
                        var TakeretryValue = `select ext_iden_retry_value from npss_trn_process_log where ext_iden_retry_value IS NOT NULL and uetr = '${uetr}' order by npsstpl_id desc`
                        ExecuteQuery1(TakeretryValue, function (extIdentValue) {
                            if (extIdentValue.length > 0) {
                                var count = Number(extIdentValue[0].ext_iden_retry_value)
                                count++
                                resolve(count)

                            } else {
                                resolve(1)
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
