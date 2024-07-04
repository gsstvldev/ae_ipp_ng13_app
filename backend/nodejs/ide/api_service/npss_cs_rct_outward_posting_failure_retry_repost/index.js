var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');
var app = express.Router();
app.post('/', function (appRequest, appResponse, next) {
    try {
        /*   Created By : Daseen
            Created Date : 11-08-2023
            modified for : Suresh 
            modified reason : payload changes for return/reversal btn
            wi -3902
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
                            //  TempTranID = '242033'
                            var PRCT_ID = prct_id
                            var final_status
                            var final_process_status
                            var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_OP_POSTING_FAIL_REPOST'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}' and product_code='${params.PROD_CODE}'`
                            var take_api_params = `select ns.account_currency,ns.department_code,ns.channel_refno,ns.channel_id,ns.middleware_ref_no,ns.cbs_ref_no,ns.reversal_amount,ns.npsst_id,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY ) as dbtr_acct_no,ns.dbtr_cust_type,ns.ext_acct_id_code,ns.intrbk_sttlm_amnt,ns.instrument_type,ns.instruction_id,ns.hdr_msg_id,ns.hdr_clearing_system,ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,ns.accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id in ${TempTranID}`;
                            //var take_api_params = `select * from npss_transactions where npsst_id in (${TempTranID})`;
                            var Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
                            ExecuteQuery1(TakeStsPsts, async function (arrurlResult) {
                                if (arrurlResult.length) {
                                    final_process_status = arrurlResult[0].success_process_status
                                    final_status = arrurlResult[0].success_status
                                    ExecuteQuery1(Takekafkaurl, function (arrurl) {
                                        if (arrurl.length > 0) {
                                            if (params.Roleid == '705' || params.Roleid == 705) {
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
                                                        if (params.eligible_status == 'OP_AC_REV_POSTING_RETRY' || params.eligible_status == 'OP_P2P_REV_POSTING_RETRY') { //ORR
                                                            let uetr = arrTranparams[0].uetr
                                                            reqInstanceHelper.PrintInfo.uetr = arrTranparams[0].uetr
                                                            console.log(uetr)
                                                            var takecbreturncode = `Select * from Npss_trn_process_log where  uetr ='${uetr}'`
                                                            let arrreturncode = await select(takecbreturncode)
                                                            if (arrreturncode.length > 0) {
                                                                let c_return_code = arrreturncode[0].cbuae_return_code
                                                                Apicalls = await CallORRAPI(arrTranparams, failcountobj, failcount, arrurl, c_return_code)
                                                            }
                                                            else {
                                                                objresponse.status = "FAILURE"
                                                                objresponse.errdata = "No cbuae_return_code found in log table"
                                                                sendResponse(null, objresponse)
                                                            }
                                                            // Apicalls = await CallORRAPI(arrTranparams, failcountobj, failcount, arrurl)
                                                        } else if (params.eligible_status == 'OP_AC_RET_POSTING_RETRY' || params.eligible_status == 'OR_P2P_POSTING_RETRY') { //OR
                                                            Apicalls = await CallORAPI(arrTranparams, failcountobj, failcount, arrurl)
                                                        } else if (params.eligible_status == 'OP_P2P_DBT_POSTING_RETRY' || params.eligible_status == 'OP_AC_DBT_POSTING_RETRY') { //Unfreeze
                                                            Apicalls = await CallP2P(arrTranparams, failcountobj, failcount, arrurl)
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
                                                        objresponse.errdata = "No Data found in Transaction table"
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
                                } else {
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
                    function CallORRAPI(arrTranparams, failcountobj, failcount, arrurl, c_return_code) {
                        return new Promise((resolve, reject) => {
                            var reason_code
                            var npsst_refno
                            reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                                var runfunction = async () => {
                                    var request = require('request');
                                    var options = {
                                        url: arrurl[0].param_detail,
                                        timeout: 18000000,
                                        method: 'POST',
                                        json: {
                                            batch_name: "DR-CBS-POSTING-Q",
                                            data: {
                                                //ORR- REVERSAL BTN
                                                "payload": {
                                                    // "uetr": arrTranparamsObj.uetr || '',
                                                    // "channel_id": arrTranparamsObj.channel_id || '',
                                                    // "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                                                    // "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                                                    // "process_type": 'ORR',
                                                    // "channel_refno": arrTranparamsObj.channel_refno || ''
                                                    "channel_id": arrTranparamsObj.channel_id || '',
                                                    "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                                                    "process_type": 'ORR',
                                                    "cbuae_return_code": c_return_code,
                                                    "account_currency": arrTranparamsObj.account_currency || '',
                                                    "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt || '',
                                                    "cdtr_acct_name": arrTranparamsObj.cdtr_acct_name || '',
                                                    "cdtr_iban": arrTranparamsObj.dbtr_acct_name || '',//"AE210230000001002364XXX",
                                                    "payment_endtoend_id": arrTranparamsObj.payment_endtoend_id || '',
                                                    "channel_refno": arrTranparamsObj.channel_refno || '',
                                                    "cr_sort_code": arrTranparamsObj.cr_sort_code || '',
                                                    "uetr": arrTranparamsObj.uetr || '',
                                                    "amount_credited_loc_cur": arrTranparamsObj.amount_credited_loc_cur || '',
                                                    "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || ''
                                                }
                                            }
                                        },
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }

                                    }
                                    if (arrTranparamsObj.account_currency == 'AED' || arrTranparamsObj.account_currency == '' || arrTranparamsObj.account_currency == undefined || arrTranparamsObj.account_currency == null) {
                                        options.json.data.payload.intrbk_sttlm_amnt = arrTranparamsObj.intrbk_sttlm_amnt || '';
                                    } else {
                                        options.json.data.payload.cdtr_amount = arrTranparamsObj.intrbk_sttlm_amnt || '';
                                        options.json.data.payload.dbtr_amount = ''
                                    }

                                    var PrintInfo = {}
                                    PrintInfo.url = arrurl[0].param_detail
                                    PrintInfo.uetr = arrTranparamsObj.uetr || ''
                                    PrintInfo.npsst_id = arrTranparamsObj.npsst_id || ''


                                    reqInstanceHelper.PrintInfo(serviceName, '------------ORR API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                    request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                        if (error) {
                                            reqInstanceHelper.PrintInfo(serviceName, '------------ ORR API ERROR-------' + JSON.stringify(error), objSessionLogInfo);
                                            sendResponse(error, null);
                                        } else {
                                            reqInstanceHelper.PrintInfo(serviceName, '------------ORR API Response JSON-------' + JSON.stringify(responseBodyFromImagingService), objSessionLogInfo);
                                            nextobjctfunc()
                                        }
                                    });
                                }
                                runfunction()
                            }, function () {
                                resolve('SUCCESS')
                            })
                        })
                    }
                    function CallORAPI(arrTranparams, failcountobj, failcount, arrurl) {
                        return new Promise((resolve, reject) => {
                            reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                                var runapifun = async () => {



                                    var request = require('request');
                                    var options = {
                                        url: arrurl[0].param_detail,
                                        timeout: 18000000,
                                        method: 'POST',
                                        json: {
                                            batch_name: "DR-CBS-POSTING-Q",
                                            data: {
                                                "payload": {
                                                    //OR- RETURN BTN
                                                    // "uetr": arrTranparamsObj.uetr || '',
                                                    // "channel_id": arrTranparamsObj.channel_id || '',
                                                    // "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                                                    // "process_type": "OR",
                                                    // "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt,
                                                    // "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                                                    // "channel_refno": arrTranparamsObj.channel_refno || ''
                                                    "process_type": 'OR' || '',
                                                    "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                                                    "uetr": arrTranparamsObj.uetr || '',
                                                    "channel_id": arrTranparamsObj.channel_id || '',
                                                    "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                                                    "account_currency": arrTranparamsObj.account_currency || '',
                                                    "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt || '',
                                                    "hdr_settlement_date": arrTranparamsObj.hdr_settlement_date || '',
                                                    "amount_credited_loc_cur": arrTranparamsObj.amount_credited_loc_cur || '',
                                                    "dbtr_acct_name": arrTranparamsObj.dbtr_acct_name || '',//vinoh XXXX
                                                    "dr_sort_code": arrTranparamsObj.dr_sort_code || '',
                                                    "channel_refno": arrTranparamsObj.channel_refno || '',
                                                }
                                            }
                                        },
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    }
                                    if (arrTranparamsObj.account_currency != 'AED') {
                                        options.json.data.payload.RtrdIntrBkSttlmAmt = arrTranparamsObj.intrbk_sttlm_amnt || '';
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

                                }

                                runapifun()

                            }, function () {
                                resolve('SUCCESS')
                            })
                        })



                    }

                    function CallP2P(arrTranparams, failcountobj, failcount, arrurl) {

                        return new Promise((resolve, reject) => {
                            var runquery = async () => {
                                var postrefno;
                                reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
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
                                                        "channel_id": arrTranparamsObj.channel_id || '',
                                                        "uetr": arrTranparamsObj.uetr || '',

                                                        "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                                                        "process_type": "OP",
                                                        "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                                                        "channel_refno": arrTranparamsObj.channel_refno || ''

                                                    }
                                                }
                                            },
                                            headers: {
                                                'Content-Type': 'application/json'
                                            }

                                        }
                                        if (arrTranparamsObj.account_currency == 'AED' || arrTranparamsObj.account_currency == '' || arrTranparamsObj.account_currency == undefined || arrTranparamsObj.account_currency == null) {
                                            options.json.data.payload.intrbk_sttlm_amnt = arrTranparamsObj.intrbk_sttlm_amnt || '';
                                        } else {
                                            options.json.data.payload.dbtr_amount = arrTranparamsObj.intrbk_sttlm_amnt || '';
                                            options.json.data.payload.cdtr_amount = ''
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

                                }, function () {
                                    resolve('SUCCESS')
                                })
                            }

                            runquery()

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
                    function select(query) {
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
