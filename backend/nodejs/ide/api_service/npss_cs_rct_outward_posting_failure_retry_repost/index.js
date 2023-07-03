var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

  try {
    /*   Created By : Siva Harish
    Created Date :25-01-2023
    modified by: Siva Harish
    modify date : 5/4/2023
  Reason for : Changing Return code query 13/04/2023
     modify date : 3/7/2023
   
    */
    var serviceName = 'NPSS (CS) RCT Outward Posting Failure Retry Repost';
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
    var failcountobj = {}
    var failcount = []
    var TempTranID
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) RCT Outward Posting Failure Retry Repost';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) RCT Outward Posting Failure Retry Repost';
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
                        var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_OP_POSTING_FAIL_REPOST'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                        var take_api_params = `select ns.department_code,ns.channel_refno,ns.channel_id,ns.middleware_ref_no,ns.cbs_ref_no,ns.reversal_amount,ns.npsst_id,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY ) as dbtr_acct_no,ns.dbtr_cust_type,ns.ext_acct_id_code,ns.intrbk_sttlm_amnt,ns.instrument_type,ns.instruction_id,ns.hdr_msg_id,ns.hdr_clearing_system,ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,ns.accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id in ${TempTranID}`;
                        var Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
                        ExecuteQuery1(TakeStsPsts, async function (arrurlResult) {
                            if (arrurlResult.length) {
                                final_process_status = arrurlResult[0].success_process_status
                                final_status = arrurlResult[0].success_status
                                ExecuteQuery1(Takekafkaurl, function (arrurl) {
                                    if (arrurl.length > 0) {
                                        if (params.Roleid == '705' || params.Roleid == 705) {
                                            // var UpdateTrnTbl = `update npss_transactions set  status='${final_status}',process_status='${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id in ${TempTranID} `
                                            // ExecuteQuery(UpdateTrnTbl, function (uptranresult) {
                                            //     if (uptranresult == 'SUCCESS') {
                                            //         objresponse.status = 'SUCCESS';
                                            //         sendResponse(null, objresponse)
                                            //     } else {
                                            //         objresponse.status = 'FAILURE';
                                            //         objresponse.errdata = "Error in npss transaction table update"
                                            //         sendResponse(null, objresponse)

                                            //     }
                                            // })
                                            ExecuteQuery1(take_api_params, function (arrTranparams) {
                                                if (arrTranparams.length > 0) {
                                                    InsertProcess(arrTranparams, final_process_status, final_status, PRCT_ID)
                                                } else {
                                                    objresponse.status = 'FAILURE'
                                                    objresponse.errdata = 'No date in Tran Table'
                                                    sendResponse(null, objresponse)
                                                }
                                            })


                                        } else { //checker for repost
                                            ExecuteQuery1(take_api_params, async function (arrTranparams) {
                                                if (arrTranparams.length > 0) {
                                                    var Apicalls
                                                    if (params.eligible_status == 'OP_AC_REV_POSTING_RETRY' || params.eligible_status == 'OP_P2P_REV_POSTING_RETRY' || params.eligible_status == 'OP_P2B_REV_POSTING_RETRY') { //ORR
                                                        Apicalls = await CallORRAPI(arrTranparams, failcountobj, failcount, arrurl)
                                                    } else if (params.eligible_status == 'OP_AC_RET_POSTING_RETRY' || params.eligible_status == 'OR_P2P_POSTING_RETRY' || params.eligible_status == 'OR_P2B_POSTING_RETRY') { //OR
                                                        Apicalls = await CallORAPI(arrTranparams, failcountobj, failcount, arrurl)
                                                    } else if (params.eligible_status == 'OP_P2B_FUND_UNFR_RETRY') { //Unfreeze
                                                        Apicalls = await CallP2B(arrTranparams, failcountobj, failcount, arrurl)
                                                    } else {
                                                        objresponse.status = "FAILURE"
                                                        objresponse.errdata = "No Eligible status for checker role"
                                                        sendResponse(null, objresponse)
                                                    }
                                                    if (Apicalls == 'SUCCESS') {
                                                        InsertProcess(arrTranparams, final_process_status, final_status, PRCT_ID)
                                                    } else {
                                                        objresponse.status = "API call FAILURE"
                                                        objresponse.errdata = Apicalls
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
                                objresponse.errdata = "No Data found in Workflow  Table"
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
                    var processName
                    if (params.Roleid == '705' || params.Roleid == 705) {
                        processName = 'Retry - Maker'
                    } else {
                        processName = 'Repost - Checker'
                    }
                    var arrCusTranInst = [];
                    for (let i = 0; i < arrTranparams.length; i++) {
                        var objCusTranInst = {}
                        objCusTranInst.MSG_ID = arrTranparams[i].hdr_msg_id;
                        objCusTranInst.PRCT_ID = PRCT_ID;
                        objCusTranInst.UETR = arrTranparams[i].uetr;
                        objCusTranInst.NPSSTRRD_REFNO = arrTranparams[i].tran_ref_id;
                        objCusTranInst.PROCESS_TYPE = 'OP'
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

                    }

                    _BulkInsertProcessItem(arrCusTranInst, 'npss_trn_process_log', function callbackInsert(CusTranInsertRes) {
                        if (CusTranInsertRes.length > 0) {
                         var UpdateTrnTbl
                        if (params.Roleid == 705 || params.Roleid == '705' || params.Roleid == 737 || params.Roleid == '737') {
                           UpdateTrnTbl = `update npss_transactions set  maker = '${params.CREATED_BY_NAME}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id in ${TempTranID} `
                         }else{
                           UpdateTrnTbl = `update npss_transactions set  checker = '${params.CREATED_BY_NAME}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id in ${TempTranID} `
                          }
                            
                            ExecuteQuery(UpdateTrnTbl, function (uptranresult) {
                                if (uptranresult == 'SUCCESS') {
                                    objresponse.status = 'Success';
                                    sendResponse(null, objresponse)
                                } else {
                                    objresponse.status = 'Error in NPSS_TRN_PROCESS_LOG Table Update';
                                    sendResponse(null, objresponse)

                                }
                            })
                        }
                    })
                }



                function CallORRAPI(arrTranparams, failcountobj, failcount, arrurl) {
                    return new Promise((resolve, reject) => {
                        var reason_code
                        var npsst_refno
                        reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {

                            var runfunction = async () => {
                                var TakeacctInfrm = await AccountInformation(arrTranparamsObj)
                                if (TakeacctInfrm.status == 'SUCCESS') {
                                    var TakeRtncode = await Returncode(arrTranparamsObj)
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
                                                    "payment_processing_method": 'AC_AC_IBAN' || '',
                                                    "department_code": arrTranparamsObj.department_code || '',
                                                    "company_code": TakeacctInfrm.AccountInformations.company_code || '',
                                                    "error_code": ""

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


                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                    request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                        if (error) {
                                            reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                            sendResponse(error, null);

                                        } else {
                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                            nextobjctfunc()
                                        }
                                    });




                                } else {
                                    resolve(TakeacctInfrm.status)
                                }
                            }

                            runfunction()




                        }, function () {
                            resolve('SUCCESS')
                        })
                    })



                }



                // function CallORAPI(arrTranparams, failcountobj, failcount, arrurl) {
                //     return new Promise((resolve, reject) => {
                //         reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                //             var runapifun = async () => {
                //                 var TakeacctInfrm = await AccountInformation(arrTranparamsObj)
                //                 if (TakeacctInfrm.status == 'SUCCESS') {
                //                     var Takereturncode = `select cbuae_return_code,npsstrrd_refno from npss_trn_process_log where process_name='Receive Pacs004' and uetr = '${arrTranparamsObj.uetr}'`
                //                     ExecuteQuery1(Takereturncode, function (returncode) {
                //                         var reason_code
                //                         var npsst_refno
                //                         if (returncode.length > 0) {
                //                             reason_code = returncode[0].cbuae_return_code;
                //                             npsst_refno = returncode[0].npsstrrd_refno
                //                         } else {
                //                             reason_code = ''
                //                             npsst_refno = ''
                //                         }


                //                         var request = require('request');
                //                         var options = {
                //                             url: arrurl[0].param_detail,
                //                             timeout: 18000000,
                //                             method: 'POST',
                //                             json: {
                //                                 batch_name: "DR-CBS-POSTING-Q",
                //                                 data: {
                //                                     "payload": {
                //                                         "dr_sort_code": arrTranparamsObj.dr_sort_code || '',
                //                                         "payment_endtoend_id": arrTranparamsObj.payment_endtoend_id || '',
                //                                         "tran_ref_id": arrTranparamsObj.tran_ref_id || '',
                //                                         "uetr": arrTranparamsObj.uetr || '',
                //                                         "clrsysref": arrTranparamsObj.clrsysref || '',
                //                                         "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt || '',
                //                                         "reversal_amount": arrTranparamsObj.reversal_amount || '',
                //                                         "reversal_code": "",
                //                                         "hdr_msg_id": arrTranparamsObj.hdr_msg_id || '',
                //                                         "intrbk_sttlm_dt": arrTranparamsObj.intrbk_sttlm_dt || '',
                //                                         "AccountInformation": TakeacctInfrm.AccountInformations || '',
                //                                         "cdtr_iban": arrTranparamsObj.cdtr_iban || '',
                //                                         "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                //                                         "cr_acct_identification": arrTranparamsObj.cr_acct_identification || '',
                //                                         "post_reason_code": reason_code,
                //                                         "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                //                                         "hdr_settlement_date": arrTranparamsObj.hdr_created_date || '',
                //                                         "hdr_settlement_method": "CLRG",
                //                                         "cr_sort_code": arrTranparamsObj.cr_sort_code || '',
                //                                         "return_id": "",
                //                                         "hdr_new_settlement_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                //                                         "participant_clearing_system": "CRTLBP.0.0",
                //                                         "process_type": "OR",
                //                                         "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.004.001.11",
                //                                         "originalTrasactionId": "",
                //                                         "cbuae_return_code": reason_code,
                //                                         "remittance_information": arrTranparamsObj.remittance_info || '',
                //                                         "extIdentifier": arrTranparamsObj.clrsysref || '',
                //                                         "category_purpose": arrTranparamsObj.category_purpose || '',
                //                                         "category_purpose_prty": arrTranparamsObj.category_purpose_prty || '',
                //                                         "charge_bearer": arrTranparamsObj.charge_bearer || '',
                //                                         "company_code": TakeacctInfrm.AccountInformations.company_code || '',
                //                                         "alternate_account_type": TakeacctInfrm.AccountInformations.alternate_account_type || '',
                //                                         "currency": TakeacctInfrm.AccountInformations.currency || '',
                //                                         "charge_bearer": arrTranparamsObj.charge_bearer || '',
                //                                         "account_number": TakeacctInfrm.AccountInformations.account_number || '',
                //                                         "cdtr_acct_name": arrTranparamsObj.cdtr_acct_name || '',
                //                                         "npsstrrd_refno": npsst_refno || '',


                //                                     }
                //                                 }
                //                             },
                //                             headers: {
                //                                 'Content-Type': 'application/json'
                //                             }

                //                         }

                //                         var PrintInfo = {}
                //                         PrintInfo.url = arrurl[0].param_detail
                //                         PrintInfo.uetr = arrTranparamsObj.uetr || ''
                //                         PrintInfo.npsst_id = arrTranparamsObj.npsst_id || ''


                //                         reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                //                         request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                //                             if (error) {
                //                                 reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                //                                 sendResponse(error, null);

                //                             } else {
                //                                 reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                //                                 nextobjctfunc()
                //                             }
                //                         });


                //                     })

                //                 } else {
                //                     resolve(TakeacctInfrm.status)
                //                 }
                //             }

                //             runapifun()

                //         }, function () {
                //             resolve('SUCCESS')
                //         })
                //     })



                // }
                function CallORAPI(arrTranparams, failcountobj, failcount, arrurl) {
                    return new Promise((resolve, reject) => {
                        reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                            var runapifun = async () => {
                                var TakeacctInfrm = await AccountInformation(arrTranparamsObj)
                                if (TakeacctInfrm.status == 'SUCCESS') {
                                    var Takereturncode = `select cbuae_return_code,npsstrrd_refno from npss_trn_process_log where process_name='Receive Pacs004' and uetr = '${arrTranparamsObj.uetr}'`
                                    ExecuteQuery1(Takereturncode, function (returncode) {
                                    var TakeRtrdIntrBkSttlmAmt  = `select additional_info from npss_trn_process_log where process_name='Place Pacs004' and uetr = '${arrTranparamsObj.uetr}'`
                                    ExecuteQuery1(TakeRtrdIntrBkSttlmAmt, function (arrAmount) {
                                        var reason_code
                                        var npsst_refno
                                        if (returncode.length > 0) {
                                            reason_code = returncode[0].cbuae_return_code;
                                            npsst_refno = returncode[0].npsstrrd_refno
                                        } else {
                                            reason_code = ''
                                            npsst_refno = ''
                                        }
                
                
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
                                                       "RtrdIntrBkSttlmAmt" : arrAmount ? arrAmount[0].additional_info : '' || ''
                
                
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
                
                
                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                            if (error) {
                                                reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                sendResponse(error, null);
                
                                            } else {
                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                nextobjctfunc()
                                            }
                                        });
                
                                    })
                                        
                
                                    })
                
                                } else {
                                    resolve(TakeacctInfrm.status)
                                }
                            }
                
                            runapifun()
                
                        }, function () {
                            resolve('SUCCESS')
                        })
                    })
                
                
                
                }

                function CallP2B(arrTranparams, failcountobj, failcount, arrurl) {

                    return new Promise((resolve, reject) => {
                        var runquery = async () => {
                            var postrefno;
                            reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                                var TakepostingRefno = `select process_ref_no from npss_trn_process_log where process_name = 'Fund Reserve INAU Posting' and uetr='${arrTranparamsObj.uetr}'`
                                ExecuteQuery1(TakepostingRefno, function (arrpostrefno) {
                                    if (arrpostrefno.length > 0) {
                                        postrefno = arrpostrefno[0].process_ref_no ? arrpostrefno[0].process_ref_no : ''
                                        var takereqjson = `select npsstpl_id,npsstrrd_refno,msg_id, additional_info as tran_type_code  from npss_trn_process_log where process_name = 'Verify Buyer IBAN'  and uetr='${arrTranparamsObj.uetr}'`
                                        ExecuteQuery1(takereqjson, function (arrtakereqjson) {
                                            if (arrtakereqjson.length > 0) {
                                                var takeacctinfo = `select account_number,customer_mobile_number, countryofbirth country_of_birth,	company_code,inactive_marker,currency,alternate_account_type,alternate_account_id, account_officer,curr_rate_segment,customer_id,national_id  from  core_nc_cbs_accounts where alternate_account_id ='${arrTranparamsObj.cdtr_iban}'`
                                                ExecuteQuery1(takeacctinfo, function (arrtakeacctinfo) {
                                                    if (arrtakeacctinfo.length > 0) {
                                                        var seldetqry = `select sell_margin, sell_rate ,cif_number from  core_nc_cust_spl_rate where  cif_number='${arrtakeacctinfo[0].customer_id}'`
                                                        ExecuteQuery1(seldetqry, function (arrselldet) {
                                                            var sell_margin
                                                            var sell_rate
                                                            if (arrselldet.length == 0) {
                                                                sell_margin = ''
                                                                sell_rate = ''
                                                            } else {
                                                                sell_margin = arrselldet[0].sell_margin
                                                                sell_rate = arrselldet[0].sell_rate
                                                            }


                                                            try {
                                                                var request = require('request');
                                                                var options = {
                                                                    url: arrurl[0].param_detail,
                                                                    timeout: 18000000,
                                                                    method: 'POST',
                                                                    json: {
                                                                        batch_name: 'DR-CBS-POSTING-Q',
                                                                        data: {
                                                                            "payload": {
                                                                                "tran_ref_id": arrTranparamsObj.tran_ref_id || '',
                                                                                "uetr": arrTranparamsObj.uetr || '',
                                                                                "hdr_msg_id": arrTranparamsObj.hdr_msg_id || '',
                                                                                "hdr_total_records": '1' || '',
                                                                                "x_req_id": arrtakereqjson[0].msg_id || '',
                                                                                "dbtr_country": arrTranparamsObj.dbtr_country || '',
                                                                                "process_ref_no": arrtakereqjson[0].npsstrrd_refno || '',
                                                                                "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt || '',
                                                                                "hdr_total_amount": arrTranparamsObj.hdr_total_amount || '',
                                                                                "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                                                                                "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                                                                                "customer_mobile_number": arrtakeacctinfo[0].customer_mobile_number || '',
                                                                                "dbtr_acct_name": arrTranparamsObj.dbtr_acct_name || '',
                                                                                "dr_sort_code": arrTranparamsObj.dr_sort_code || '',
                                                                                "cdtr_iban": arrTranparamsObj.cdtr_iban || '',
                                                                                "cdtr_acct_name": arrTranparamsObj.cdtr_acct_name || '',
                                                                                "cr_sort_code": arrTranparamsObj.cr_sort_code || '',
                                                                                "tran_type_code": arrTranparamsObj.tran_type_code || '',
                                                                                "hdr_settlement_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                                                                "participant_clearing_system": 'CRTLBP.0.o',
                                                                                "process_type": "UNFREEZE",
                                                                                "payment_processing_method": "P2B_SCT_INITITATION",
                                                                                "extIdentifier": arrTranparamsObj.tran_ref_id || '',
                                                                                "process_type": "UNFREEZE",
                                                                                "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                                                                "hdr_created_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                                                                "dbtr_prvt_id": arrTranparamsObj.dbtr_prvt_id || '',
                                                                                "ext_org_id_code": arrTranparamsObj.ext_org_id_code || '',
                                                                                "issuer_type_code": arrTranparamsObj.issuer_type_code || '',
                                                                                "dbtr_document_id": arrTranparamsObj.dbtr_document_id || '',
                                                                                "dbtr_birth_date": arrTranparamsObj.dbtr_birth_date || '',
                                                                                "dbtr_city_birth": arrTranparamsObj.dbtr_city_birth || '',
                                                                                "ext_person_id_code": arrTranparamsObj.ext_person_id_code || '',
                                                                                "dbtr_other_issuer": arrTranparamsObj.dbtr_other_issuer || '',
                                                                                "cr_acct_identification": arrTranparamsObj.cr_acct_identification || '',
                                                                                "department_code": arrTranparamsObj.department_code || '',
                                                                                "process": "Pacs.008 Real Time Credit Transfer P2B",
                                                                                "process_status": params.eligible_process_status,
                                                                                "status": params.eligible_status,
                                                                                "channel_id": 'IPP',
                                                                                "channel_refno": arrTranparamsObj.channel_refno || '',
                                                                                "category_purpose": arrTranparamsObj.category_purpose || '',
                                                                                "posting_ref_no": postrefno,
                                                                                "remittance_information": arrTranparamsObj.remittance_info || '',
                                                                                "npsstrrd_refno": arrtakereqjson[0].npsstrrd_refno || '',
                                                                                "AccountInformation": {
                                                                                    "account_number": arrtakeacctinfo[0].account_number || '',
                                                                                    "company_code": arrtakeacctinfo[0].company_code || '',
                                                                                    "inactive_marker": arrtakeacctinfo[0].inactive_marker || '',
                                                                                    "currency": arrtakeacctinfo[0].currency || '',
                                                                                    "alternate_account_type": arrtakeacctinfo[0].alternate_account_type || '',
                                                                                    "alternate_account_id": arrtakeacctinfo[0].alternate_account_id || '',
                                                                                    "account_officer": arrtakeacctinfo[0].account_officer || '',
                                                                                    "curr_rate_segment": arrtakeacctinfo[0].curr_rate_segment || '',
                                                                                    "customer_id": arrtakeacctinfo[0].customer_id || '',
                                                                                    "department_code": arrTranparamsObj.department_code,
                                                                                    "tran_type_code": arrtakereqjson[0].tran_type_code || '',
                                                                                    "recipient_bic_code": '',
                                                                                    "birth_date": '',
                                                                                    "country_of_birth": arrtakeacctinfo[0].country_of_birth || '',
                                                                                    "national_id": arrtakeacctinfo[0].account_number || '',
                                                                                    "sell_margin": sell_margin || '',
                                                                                    "sell_rate": sell_rate || '',
                                                                                }
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


                                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                                                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                                    if (error) {
                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                                        sendResponse(error, null);

                                                                    } else {
                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                                        nextobjctfunc()
                                                                    }
                                                                });

                                                            } catch (error) {
                                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                sendResponse(error, null);
                                                            }






                                                        })
                                                    } else {
                                                        reqInstanceHelper.PrintInfo(serviceName, '------------Account Information Not Found-------' + arrpayverobj.uetr, objSessionLogInfo);
                                                        resolve('Account Info not found for p2b process')
                                                    }


                                                })



                                            } else {
                                                reqInstanceHelper.PrintInfo(serviceName, '------------Request Data not found for uetr-------' + arrpayverobj.uetr, objSessionLogInfo);
                                                resolve('Account Information not found for p2b process')
                                            }
                                        })

                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------Posting Ref no not found for -------' + arrpayverobj.uetr, objSessionLogInfo);
                                        resolve('PostRefno not found for p2b process')
                                    }

                                })
                            }, function () {
                                resolve('SUCCESS')
                            })
                        }

                        runquery()

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
                               // var Takereturncode = `select cbuae_return_code,npsstrrd_refno from npss_trn_process_log where process_name='Receive Pacs002' and uetr = '${arrTranparamsObj.uetr}'`
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























                function AccountInformation(data) {
                    return new Promise((resolve, reject) => {
                        var cbsdata = {}
                        var cbsaccount = `select inactive_marker,curr_rate_segment,alternate_account_id,currency,account_number,account_officer,company_code,customer_id,alternate_account_type from core_nc_cbs_accounts where alternate_account_id ='${data.dbtr_iban}'`
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
