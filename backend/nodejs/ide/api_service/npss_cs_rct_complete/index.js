var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {



    /*  Created By : Siva Harish
    Created Date :09/03/2023
    Modified By : 
      Modified Date : 
    Reason for : 
    * 
    */
    var serviceName = ' NPSS (CS) RCT Complete'; //service name 
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog'); //audit log information
    var reqFXDBInstance = require($REFPATH + 'instance/DBInstance'); // casandra db pointing
    var reqInsHelper = require($REFPATH + 'common/InstanceHelper'); //  Response,error,info msg printing        
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter'); //date formatter
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    console.log("app headers=====================>", appRequest.headers);
    var headers = appRequest.headers; // header details 
    // headers["session-id"] = "STATIC-SESSION-KEEQB-4";
    console.log("headers after adding session id ========>", headers);
    var reqAsync = require('async');
    var objSessionLogInfo = null; // set value is null
    var mTranConn = "";
    var request = require('request');
    var moment = require('moment');
    var momentTimezone = require("moment-timezone");
    var success_status, success_process_status;
    var elgobj = {};
    var xml2js = require('xml2js');
    var arrTranId
    //console.log('**************************' + headers['session-id'])
    var objresponse = {
        'status': 'FAILURE',
        'data': '',
        'msg': ''
    }; // Response to Client
    // Assign function for loginformation and session info
    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
        try {
            objSessionLogInfo = objLogInfo; // Assing log information
            // Log Viewer Setup
            objSessionLogInfo.HANDLER_CODE = ' NPSS (CS) RCT Complete';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = ' NPSS (CS) RCT Complete';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection 
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    var PRCT_ID = prct_id
                    //get prct id                              
                    try {
                        var take_status = `Select success_process_status,success_status from core_nc_workflow_setup where rule_code='${params.rule_code}' and eligible_status='${params.eligible_status}' and  eligible_process_status='${params.eligible_process_status}'`;

                        if (Array.isArray(params.Tran_id)) {
                            arrTranID = params.Tran_id.map(function (eachTran) { return eachTran.toString(); });
                        }
                        else {
                            arrTranID = [params.Tran_id.toString()];
                        }
                        TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';

                        ExecuteQuery1(take_status, function (arrSts) {
                            if (arrSts.length) {
                                success_status = arrSts[0].success_status;
                                success_process_status = arrSts[0].success_process_status;
                                if (params.eligible_status != 'IP_RCT_PC_T24_POSTING_READY') {
                                    var uptTrnqry = `update npss_transactions set status='${success_status}',process_status='${success_process_status}' ,MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id in` + TempTranID;
                                    ExecuteQuery(uptTrnqry, function (trnRes) {
                                        if (trnRes == "SUCCESS") {
                                            objresponse.status = 'SUCCESS';
                                            sendResponse(null, objresponse);
                                        } else {
                                            objresponse.status = 'Failure';
                                            objresponse.data = 'Tran table update is not success';
                                            sendResponse(null, objresponse);
                                        }

                                    })
                                } else if (params.eligible_status == 'IP_RCT_PC_T24_POSTING_READY') {
                                    var take_api_params = `select ns.reversal_amount,ns.npsst_id,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY ) as dbtr_acct_no,ns.dbtr_prvt_id,ns.dbtr_cust_type,ns.ext_acct_id_code,ns.intrbk_sttlm_amnt,ns.instrument_type,ns.instruction_id,ns.hdr_msg_id,ns.hdr_clearing_system,ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,ns.accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id in ${TempTranID}`;
                                    var Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
                                    ExecuteQuery1(Takekafkaurl, function (arrurl) {
                                        if (arrurl.length > 0) {
                                            ExecuteQuery1(take_api_params, async function (arrTranparams) {
                                                if (arrTranparams.length > 0) {
                                                    Apicalls = await Callprepaidapi(arrTranparams, arrurl,success_status,success_process_status)
                                                    if (Apicalls == 'SUCCESS') {
                                                        objresponse.status = 'SUCCESS';
                                                        sendResponse(null, objresponse);

                                                    } else {
                                                        objresponse.status = "FAILURE"
                                                        objresponse.data = "API Call Failed"
                                                        sendResponse(null, objresponse)
                                                    }

                                                } else {
                                                    objresponse.status = "FAILURE"
                                                    objresponse.data = "No Data found in Tran table"
                                                    sendResponse(null, objresponse)
                                                }
                                            })

                                        } else {
                                            objresponse.status = 'FAILURE';
                                            objresponse.data = "kafka Api url not found"
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                    //   objresponse.status = 'Error in Transaction  Table update';
                                    //  objresponse.data = 'Error in Transaction  Table update';
                                    //    sendResponse(null, objresponse)
                                } else {
                                    objresponse.status = 'No status found';
                                    sendResponse(null, objresponse)
                                }


                            } else {
                                objresponse.status = 'No Rule found in Workflow Table'
                                objresponse.data = "No Rule found in Workflow Table"
                                sendResponse(null, objresponse)
                            }
                        })
                        function Callprepaidapi(arrTranparams, arrurl,success_status,success_process_status) {
                            return new Promise((resolve, reject) => {
                                reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                                    var TakepostingRefno = `select  process_ref_no,status_accp_date,status_resp_amount,status_intrbksttlmdt from npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name='Receive Pacs002'`
                                    ExecuteQuery1(TakepostingRefno, function (arrrefno) {
                                        if (arrrefno.length > 0) {
                                            var TakeNpssRefNo = `select  npsstrrd_refno from  npss_trn_process_log where uetr = '${arrTranparamsObj.uetr}' and process_name='Receive Pacs008'`
                                            ExecuteQuery1(TakeNpssRefNo, function (arrnpssrefno) {
                                                if (arrnpssrefno.length > 0) {
                                                    if (arrrefno[0].process_ref_no != null) {
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
                                                                        "process_ref_no": arrrefno[0].process_ref_no || '',
                                                                        "originalTrasactionId": arrTranparamsObj.hdr_msg_id || '',
                                                                        "status_accp_date": arrrefno[0].status_accp_date || '',
                                                                        "status_resp_amount": arrrefno[0].status_resp_amount || '',
                                                                        "status_intrbksttlmdt": arrrefno[0].status_intrbksttlmdt || '',
                                                                        "cbuae_return_code": "",
                                                                        "npsstrrd_refno": arrnpssrefno[0].npsstrrd_refno || '',
                                                                        "process_name": "Pacs.002 Payment Status Report",
                                                                        "request_data_json": "",
                                                                        "PC_NOSTRO_POOL_ACC": "Y"
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
                                                        PrintInfo.msg_id = arrTranparamsObj.hdr_msg_id || ''
                                                        PrintInfo.clrsysref = arrTranparamsObj.clrsysref || ''

                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                            if (error) {
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                                                sendResponse(error, null);

                                                            } else {
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                                if (responseBodyFromImagingService == 'SUCCESS') {
                                                                    var uptTrnqry = `update npss_transactions set status='${success_status}',process_status='${success_process_status}' ,MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id ='${arrTranparamsObj.npsst_id}'`;

                                                                    ExecuteQuery(uptTrnqry, function (trnRes) {
                                                                        if (trnRes == "SUCCESS") {
                                                                            nextobjctfunc()
                                                                        } else {
                                                                            objresponse.status = 'FAILURE'
                                                                            objresponse.data = "Prepaid - Update not success" + arrTranparamsObj.npsst_id
                                                                            sendResponse(null, objresponse)
                                                                        }
                                                                    })

                                                                } else {
                                                                    objresponse.status = 'FAILURE'
                                                                    objresponse.data = "Prepaid - Api call Failure for" + arrTranparamsObj.npsst_id
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            }
                                                        });

                                                    } else {
                                                        objresponse.status = 'FAILURE'
                                                        objresponse.data = "Prepaid - Process Ref no is Missing" + arrTranparamsObj.npsst_id
                                                        sendResponse(null, objresponse)
                                                    }
                                                } else {
                                                    objresponse.status = 'FAILURE'
                                                    objresponse.data = "Prepaid - NPSS Process Ref no not found for Tran_id" + arrTranparamsObj.npsst_id
                                                    sendResponse(null, objresponse)
                                                }
                                            })
                                        } else {

                                            objresponse.status = 'FAILURE'
                                            objresponse.data = "Prepaid - Process Ref no not found for Tran_id" + arrTranparamsObj.npsst_id
                                            sendResponse(null, objresponse)
                                        }
                                    })

                                }, function () {
                                    resolve('SUCCESS')
                                })
                            })



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

                        //fucntion to execute select query
                        function ExecuteQuery1(query, callback) {
                            reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                                try {
                                    if (error) {
                                        //reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, "IDE_SERVICE_10005", "ERROR IN EXECUTE QUERY EXECUTION FUNCTION", error);
                                        sendResponse(error);
                                    } else {
                                        if (result.rows.length > 0) {
                                            callback(result.rows);
                                        } else {
                                            callback([]);
                                        }
                                    }
                                } catch (error) {
                                    //reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, "IDE_SERVICE_10004", "ERROR IN EXECUTE QUERY FUNCTION", error);
                                    sendResponse(error);
                                }
                            });
                        }


                    } catch (error) {
                        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10003', 'ERROR IN DB CONNECTION FUNCTION', error);
                    }
                })
                //send response fucntion
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

            });
        } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }

    })





});

module.exports = app;
