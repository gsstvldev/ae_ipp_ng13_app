var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


    try {
        /*   Created By : Siva Harish
        Created Date :19-05-2023
        modified by: 
        modify date : 
    
         
       
        */
        var serviceName = 'NPSS (CS) CBUAE Exception Call Reversal ORR ';
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
                objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) CBUAE Exception Call Reversal ORR ';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS (CS) CBUAE Exception Call Reversal ORR ';
                var cus_iban;
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection     
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                        try {

                            var arrNpsstplId
                            var TempNpssTplID
                            if (Array.isArray(params.npsstpl_id)) {
                                arrNpsstplId = params.npsstpl_id.map(function (eachTran) {
                                    return eachTran.toString();
                                });
                            } else {
                                arrNpsstplId = [params.npsstpl_id.toString()];
                            }
                            TempNpssTplID = '(' + "'" + arrNpsstplId.toString().split(',').join("','") + "'" + ')';
                            var PRCT_ID = prct_id
                            var final_status
                            var final_process_status
                            var TakePrslogDetl = `select * from npss_trn_process_log where npsstpl_id in ${TempNpssTplID}`
                            var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = '${params.Rule_Code}'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`

                            var Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
                            ExecuteQuery1(TakeStsPsts, async function (arrurlResult) {
                                if (arrurlResult.length) {
                                    final_process_status = arrurlResult[0].success_process_status
                                    final_status = arrurlResult[0].success_status
                                    ExecuteQuery1(TakePrslogDetl, function (arrprslog) {
                                        if (arrprslog.length > 0) {
                                            ExecuteQuery1(Takekafkaurl, async function (arrurl) {
                                                if (arrurl.length > 0) {
                                                    var Apicalls
                                                    Apicalls = await CallORRAPI(arrprslog, arrurl,PRCT_ID,final_process_status, final_status)
                                                   
      
                                                } else {
                                                    objresponse.status = 'FAILURE';
                                                    objresponse.errdata = "kafka Api url not found"
                                                    sendResponse(null, objresponse)
                                                }
                                            })
                                        } else {
                                            objresponse.status = "FAILURE"
                                            objresponse.errdata = "No Data found in Tran Process log Table"
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
                        return new Promise((resolve,reject)=>{
                            var arrTrnPrslog = [];
                            var objcusTranprslog = {};
                            objcusTranprslog.MSG_ID = arrTranparams.msg_id || null;
                            objcusTranprslog.PRCT_ID = PRCT_ID;
                            objcusTranprslog.UETR = arrTranparams.uetr || null;
                            objcusTranprslog.NPSSTRRD_REFNO = arrTranparams.npsstrrd_refno || null;
                            objcusTranprslog.PROCESS_NAME = arrTranparams.process_name || null;
                            objcusTranprslog.PROCESSING_SYSTEM = 'NPSS';
                            objcusTranprslog.PROCESS_STATUS = success_process_status;
                            objcusTranprslog.STATUS = success_status;
                            objcusTranprslog.TENANT_ID = arrTranparams.tenant_id || null;
                            objcusTranprslog.RESPONSE_CODE = arrTranparams.tenant_id || null;
                            objcusTranprslog.PROCESS_REF_NO = arrTranparams.process_ref_no || null;
                            objcusTranprslog.RESPONSE_DATA = arrTranparams.response_data || null;
                            objcusTranprslog.T24_RETURN_CODE = arrTranparams.t24_return_code || null;
                            objcusTranprslog.CBUAE_RETURN_CODE = arrTranparams.cbuae_return_code || null;
                            objcusTranprslog.REVERSAL_CODE = arrTranparams.reversal_code || null;
                            objcusTranprslog.AMOUNT_CREDITED = arrTranparams.amount_credited || null;
                            objcusTranprslog.AMT_CR_LOC_CUR = arrTranparams.amt_cr_loc_cur || null;
                            objcusTranprslog.CHARGE_AMOUNT = arrTranparams.charge_amount || null;
                            objcusTranprslog.BUY_CURRENCY = arrTranparams.buy_currency || null;
                            objcusTranprslog.SELL_CURRENCY = arrTranparams.sell_currency || null;
                            objcusTranprslog.EXCHANGE_RATE = arrTranparams.exchange_rate || null;
                            objcusTranprslog.CONTRA_AMOUNT = arrTranparams.contra_amount || null;
                            objcusTranprslog.PROCESS_TYPE = arrTranparams.process_type || null;
                            objcusTranprslog.PROCESS_TIME = arrTranparams.process_time || null;
                            objcusTranprslog.STATUS_ACCP_DATE = arrTranparams.status_accp_date || null;
                            objcusTranprslog.STATUS_INTRBKSTTLMDT = arrTranparams.status_intrbksttlmdt || null;
                            objcusTranprslog.STATUS_RESP_AMOUNT = arrTranparams.status_resp_amount || null;
                            objcusTranprslog.GM_MARGIN = arrTranparams.gm_margin || null;
                            objcusTranprslog.EXT_IDEN_RETRY_VALUE = arrTranparams.ext_iden_retry_value || null;
                            objcusTranprslog.ORG_STATUS = arrTranparams.org_status || null;
                            objcusTranprslog.DBTR_IBAN = arrTranparams.dbtr_iban || null;
                            objcusTranprslog.AMOUNT = arrTranparams.amount || null;
                            objcusTranprslog.DATEOFBIRTH = arrTranparams.dateofbirth || null;
                            objcusTranprslog.CITYOFBIRTH = arrTranparams.cityofbirth || null;
                            objcusTranprslog.COUNTRYOFBIRTH = arrTranparams.countryofbirth || null;
                            objcusTranprslog.CUSTOMERID = arrTranparams.customerid || null;
                            objcusTranprslog.CUSTOMERNAME = arrTranparams.customername || null;
                            objcusTranprslog.EMIRATESID = arrTranparams.emiratesid || null;
                            objcusTranprslog.APP_ID = '215'
                            objcusTranprslog.DT_CODE = 'DT_1304_1665901130705'
                            objcusTranprslog.DTT_CODE = 'DTT_1304_1665901217208'
                            objcusTranprslog.DT_DESCRIPTION = 'transaction_group'
                            objcusTranprslog.DTT_DESCRIPTION = 'Transaction'
                            objcusTranprslog.CREATED_BY = params.CREATED_BY;
                            objcusTranprslog.CREATED_BY_NAME = params.CREATED_BY_NAME;
                            objcusTranprslog.CREATED_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                            objcusTranprslog.MODIFIED_BY = "";
                            objcusTranprslog.MODIFIED_BY_NAME = "";
                            objcusTranprslog.MODIFIED_DATE = null;
                            objcusTranprslog.SYSTEM_ID = params.SYSTEM_ID || null;
                            objcusTranprslog.SYSTEM_NAME = params.SYSTEM_NAME || null;
                            objcusTranprslog.CREATED_BY_STS_ID = "";
                            objcusTranprslog.MODIFIED_BY_STS_ID = "";
                            objcusTranprslog.ADDITIONAL_INFO = "Manual Reversal Posting"
                            objcusTranprslog.created_clientip = objSessionLogInfo.CLIENTIP;
                            objcusTranprslog.created_tz = objSessionLogInfo.CLIENTTZ;
                            objcusTranprslog.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                            objcusTranprslog.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                            objcusTranprslog.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                            objcusTranprslog.routingkey = headers.routingkey;
                            arrTrnPrslog.push(objcusTranprslog)
                            _BulkInsertProcessItem(arrTrnPrslog, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTrnPrslog) {
                                if (CusTrnPrslog.length > 0) {
                                   resolve('SUCCESS')
                                } else {
                                    objresponse.status = 'Data not insert in trn process log';
                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                    sendResponse(null, objresponse)
                                }
                            })
                        })
                     
                    }



                    function CallORRAPI(arrprslog, arrurl,PRCT_ID,final_process_status, final_status) {
                        return new Promise((resolve, reject) => {
                            var reason_code
                            var npsst_refno
                            reqAsync.forEachOfSeries(arrprslog, function (arrprslogObj, i, nextobjctfunc) {
                                var runfunction = async () => {
                                let InsPrslog = await InsertProcess(arrprslogObj, final_process_status, final_status, PRCT_ID)
                                    let Ptype
                                    if (arrprslogObj.org_status != null) {
                                        try {
                                            let Stype = arrprslogObj.org_status.split('_')
                                            if (Stype[1] == 'AC') {
                                                Ptype = 'ORR'
                                            } else if (Stype[1] == 'P2P') {
                                                Ptype = 'P2PORR'
                                            } else {
                                                Ptype = 'P2BORR'
                                            }
                                        } catch (error) {
                                            Ptype = ''
                                        }

                                    } else {
                                        Ptype = ''
                                    }
                                    var take_api_params = `select ns.department_code,ns.channel_refno,ns.channel_id,ns.middleware_ref_no,ns.cbs_ref_no,ns.reversal_amount,ns.npsst_id,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY ) as dbtr_acct_no,ns.dbtr_cust_type,ns.ext_acct_id_code,ns.intrbk_sttlm_amnt,ns.instrument_type,ns.instruction_id,ns.hdr_msg_id,ns.hdr_clearing_system,ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,ns.accp_date_time as accp_dt_tm from npss_transactions ns where uetr = '${arrprslogObj.uetr}'`;
                                    ExecuteQuery1(take_api_params, async function (arrTranparams) {
                                        if (arrTranparams.length > 0) {
                                            var TakeacctInfrm = await AccountInformation(arrTranparams)
                                            if (TakeacctInfrm.status == 'SUCCESS') {
                                                var TakeRtncode = await Returncode(arrprslogObj)
                                                var lclinstrm
                                                if (arrTranparams[0].message_data !== null) {
                                                    var parser = new xml2js.Parser({ strict: false, trim: true });
                                                    parser.parseString(arrTranparams[0].message_data, function (err, result) {
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
                                                                "hdr_msg_id": arrTranparams[0].hdr_msg_id || '',
                                                                "hdr_created_date": arrTranparams[0].hdr_created_date || '',
                                                                "hdr_total_records": arrTranparams[0].hdr_total_records || '1',
                                                                "hdr_total_amount": arrTranparams[0].hdr_total_amount || '',
                                                                "hdr_settlement_date": arrTranparams[0].hdr_settlement_date || '',
                                                                "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                                                "hdr_settlement_method": "CLRG",
                                                                "hdr_clearing_system": arrTranparams[0].hdr_clearing_system || '',
                                                                "instruction_id": arrTranparams[0].instruction_id || '',
                                                                "channel_id": arrTranparams[0].channel_id || '',
                                                                "channel_refno": arrTranparams[0].channel_refno || '',
                                                                "dr_sort_code": arrTranparams[0].dr_sort_code || '',
                                                                "cr_sort_code": arrTranparams[0].cr_sort_code || '',
                                                                "cdtr_acct_name": arrTranparams[0].cdtr_acct_name || '',
                                                                "category_purpose": arrTranparams[0].category_purpose || '',
                                                                "category_purpose_prty": arrTranparams[0].category_purpose_prty || '',
                                                                "ext_purpose_code": arrTranparams[0].ext_purpose_code || '',
                                                                "ext_purpose_prty": arrTranparams[0].ext_purpose_prty || '',
                                                                "lclinstrm": lclinstrm,
                                                                "instrument_type": arrTranparams[0].instrument_type || '',
                                                                "intrbk_sttlm_cur": arrTranparams[0].intrbk_sttlm_cur || '',
                                                                "intrbk_sttlm_amnt": arrTranparams[0].intrbk_sttlm_amnt || '',
                                                                "dbtr_iban": arrTranparams[0].dbtr_iban || '',
                                                                "dbtr_acct_no": arrTranparams[0].dbtr_acct_no || '',
                                                                "ext_acct_id_code": arrTranparams[0].ext_acct_id_code || '',
                                                                "charge_code": '',
                                                                "dbtr_cust_type": arrTranparams[0].dbtr_cust_type || '',
                                                                "ext_org_id_code": arrTranparams[0].ext_org_id_code || '',
                                                                "issuer_type_code": arrTranparams[0].issuer_type_code || '',
                                                                "dbtr_birth_date": arrTranparams[0].dbtr_birth_date || '',
                                                                "dbtr_city_birth": arrTranparams[0].dbtr_city_birth || '',
                                                                "dbtr_country": arrTranparams[0].dbtr_country || '',
                                                                "dbtr_document_id": arrTranparams[0].dbtr_document_id || '',
                                                                "ext_person_id_code": arrTranparams[0].ext_person_id_code || '',
                                                                "dbtr_other_issuer": arrTranparams[0].dbtr_other_issuer || '',
                                                                "dbtr_acct_name": arrTranparams[0].dbtr_acct_name || '',
                                                                "cdtr_iban": arrTranparams[0].cdtr_iban || '',
                                                                "dbtr_prvt_id": arrTranparams[0].dbtr_prvt_id || '',
                                                                "bankuserid": '',
                                                                "rsn_code": TakeRtncode.reason_code,
                                                                "npsstrrd_refno": TakeRtncode.npsst_refno,
                                                                "AccountInformation": TakeacctInfrm.AccountInformations,
                                                                "payment_endtoend_id": arrTranparams[0].payment_endtoend_id || '',
                                                                "accp_dt_tm": arrTranparams[0].accp_dt_tm || '',
                                                                "charge_bearer": arrTranparams[0].charge_bearer || '',
                                                                "tran_ref_id": arrTranparams[0].tran_ref_id || '',
                                                                "uetr": arrTranparams[0].uetr || '',
                                                                "cbs_ref_no": arrTranparams[0].cbs_ref_no || '',
                                                                "middleware_ref_no": arrTranparams[0].middleware_ref_no || '',
                                                                "cr_acct_identification": arrTranparams[0].cr_acct_identification || '',
                                                                "cr_acct_id_code": arrTranparams[0].cr_acct_id_code || '',
                                                                "message_data": arrTranparams[0].message_data || '',
                                                                "process_type": Ptype,
                                                                "status": arrTranparams[0].status || '',
                                                                "process_status": arrTranparams[0].process_status || '',
                                                                "remittance_information": arrTranparams[0].remittance_info || '',
                                                                "clrsysref": arrTranparams[0].clrsysref || '',
                                                                "extIdentifier": arrTranparams[0].clrsysref || '',
                                                                "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.0",
                                                                "payment_processing_method": 'AC_AC_IBAN' || '',
                                                                "department_code": arrTranparams[0].department_code || '',
                                                                "company_code": TakeacctInfrm.AccountInformations.company_code || '',
                                                                "error_code": ""

                                                            }
                                                        }
                                                    },
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    }

                                                }

                                              reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(options), objSessionLogInfo);
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
                                                objresponse.status = "FAILURE"
                                                objresponse.errdata = "No Data found in cbs accounts table"
                                                sendResponse(null, objresponse)
                                            }
                                        } else {
                                            objresponse.status = "FAILURE"
                                            objresponse.errdata = "No Data found in Workflow table"
                                            sendResponse(null, objresponse)
                                        }
                                    })

                                }

                                runfunction()




                            }, function () {
                                objresponse.status = "SUCCESS"
                                objresponse.errdata = ""
                                sendResponse(null, objresponse)
                            })
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
                            var cbsaccount = `select inactive_marker,curr_rate_segment,alternate_account_id,currency,account_number,account_officer,company_code,customer_id,alternate_account_type from core_nc_cbs_accounts where alternate_account_id ='${data[0].dbtr_iban}'`
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
