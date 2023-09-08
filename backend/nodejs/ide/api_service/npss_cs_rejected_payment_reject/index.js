var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    

try {
    /*   Created By :Siva Harish
    Created Date :25-02-2023

    */
    var serviceName = 'NPSS (CS) Rejected Payment Reject';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var moment = require('moment');
    var xml2js = require('xml2js');
    var mTranConn = "";
    var addquery = "";
    var reqAsync = require('async');

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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Rejected Payment Reject';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) Rejected Payment Reject';
            var cus_iban;
            // Get DB Connection                                                                                                                                      
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    try {
                        var PRCT_ID = prct_id
                        var arrTranID
                        if (Array.isArray(params.Tran_Id)) {
                            arrTranID = params.Tran_Id.map(function (eachTran) {
                                return eachTran.toString();
                            });
                        } else {
                            arrTranID = [params.Tran_Id.toString()];
                        }
                        TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                        var take_return_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_REJECT_PAYMENT' and param_code='URL' and need_sync = 'Y'`;
                        var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'OP_RCT_REJ_PAY_REVPOST'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                        var take_api_params = `select ns.cbs_ref_no,ns.channel_refno,ns.channel_id,ns.reversal_amount,ns.npsst_id,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY ) as dbtr_acct_no,ns.dbtr_prvt_id,ns.dbtr_cust_type,ns.ext_acct_id_code,ns.intrbk_sttlm_amnt,ns.instrument_type,ns.instruction_id,ns.hdr_msg_id,ns.hdr_clearing_system,ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,fn_pcidss_decrypt(ns.message_data,$PCIDSS_KEY ) as message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,ns.accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id in ${TempTranID}`;
                        ExecuteQuery1(take_return_url, function (arrUrl) {
                            if (arrUrl.length > 0) {
                                ExecuteQuery1(TakeStsPsts, function (arrurlResult) {
                                    if (arrurlResult.length) {
                                        final_process_status = arrurlResult[0].success_process_status
                                        final_status = arrurlResult[0].success_status
                                        ExecuteQuery1(take_api_params, function (arrprocesslog) {
                                            if (arrprocesslog.length) {
                                                reqAsync.forEachOfSeries(arrprocesslog, function (arrprocesslogObj, i, nextobjctfunc) {
                                                    var lclinstrm
                                                    if (arrprocesslogObj.message_data !== null) {

                                                        var parser = new xml2js.Parser({ strict: false, trim: true });
                                                        parser.parseString(arrprocesslogObj.message_data, function (err, result) {

                                                            lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]

                                                        });

                                                    }
                                                    else {
                                                        lclinstrm = ""
                                                    }
                                                    var TakeacctInformation = `select * from core_nc_cbs_accounts where alternate_account_id = '${arrprocesslogObj.cdtr_iban}'`
                                                    ExecuteQuery1(TakeacctInformation, function (arracctInfrm) {
                                                        if (arracctInfrm.length > 0) {
                                                            var Takeprsdata = `select msg_id,npsstrrd_refno,cbuae_return_code from npss_trn_process_log where process_name='Receive Pacs002' and uetr = '${arrprocesslogObj.uetr}'`
                                                            ExecuteQuery1(Takeprsdata, function (prsdata) {
                                                                fn_doapicall(arrUrl, arrprocesslogObj, lclinstrm, arracctInfrm, prsdata, function (result) {
                                                                    if (result == 'SUCCESS') {
                                                                        var UpdateTrnTbl = `update npss_transactions set  status='${final_status}',process_status='${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id = '${arrprocesslogObj.npsst_id}'`
                                                                        ExecuteQuery(UpdateTrnTbl, function (uptranresult) {
                                                                            if (uptranresult == 'SUCCESS') {
                                                                               nextobjctfunc()
                                                                            } else {
                                                                                objresponse.status = "FAILURE"
                                                                                objresponse.errdata = 'Error in NPSS_TRN_PROCESS_LOG Table Update';
                                                                                sendResponse(null, objresponse)
                                            
                                                                            }
                                                                        })
                                                                       
                                                                    } else {
                                                                        objresponse.status = 'FAILURE'
                                                                        objresponse.errdata = 'Api Call Failed for TranId'+arrprocesslogObj.npsst_id
                                                                        sendResponse(null, objresponse)
                                                                    }

                                                                })



                                                            })


                                                        } else {
                                                            objresponse.status = "FAILURE"
                                                            objresponse.errdata = "No Data found in Core nc cbs accounts table"
                                                            sendResponse(null, objresponse)
                                                        }

                                                    })

                                                }, function () {
                                                    objresponse.status = 'SUCCESS'
                                                    sendResponse(null, objresponse)
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
                            } else {
                                objresponse.status = "FAILURE"
                                objresponse.errdata = "No Data found in Core_nc_workflow table"
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
                function fn_doapicall(arrUrl, arrprocesslog, lclinstrm, arracctInfrm, prsdata, callbackapi) {
                    try {
                        var msgId
                        var rsn_code
                        var npsstrrd_refno
                        var cbuae_return_code
                        if (prsdata.length == 0) {
                            var msgId = ''
                            var rsn_code = ''
                            var npsstrrd_refno = ''
                            var cbuae_return_code = ''
                        } else {
                            var msgId = prsdata[0].msg_id || ''
                            var rsn_code = prsdata[0].cbuae_return_code || ''
                            var npsstrrd_refno = prsdata[0].npsstrrd_refno || ''
                            var cbuae_return_code = prsdata[0].cbuae_return_code || ''
                        }

                        var Virtual_account
                        if (arracctInfrm[0].alternate_account_type == 'VA.IBAN' || arracctInfrm[0].alternate_account_type == 'VA.BBAN') {
                            Virtual_account = 'Y'
                        } else {
                            Virtual_account = 'N'
                        }




                        var apiName = 'NPSS (CS) Rejected Payment Reject'
                        var request = require('request');
                        var apiURL =
                            apiURL = arrUrl[0].param_detail // apiURL + apiName
                        var options = {
                            url: apiURL,
                            timeout: 18000000,
                            method: 'POST',
                            json: {
                                "batch_name": "DR-CBS-POSTING-Q",
                                "data": {
                                    "payload": {
                                        "hdr_msg_id": arrprocesslog.hdr_msg_id || '',
                                        "hdr_created_date": arrprocesslog.hdr_created_date || '',
                                        "hdr_total_records": arrprocesslog.hdr_total_records || '',
                                        "hdr_total_amount": arrprocesslog.hdr_total_amount || '',
                                        "hdr_settlement_date": arrprocesslog.hdr_settlement_date || '',
                                        "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                        "hdr_settlement_method": "CLRG",
                                        "hdr_clearing_system": arrprocesslog.hdr_clearing_system || '',
                                        "instruction_id": arrprocesslog.instruction_id || '',
                                        "dr_sort_code": arrprocesslog.dr_sort_code || '',
                                        "cr_sort_code": arrprocesslog.cr_sort_code || '',
                                        "cdtr_acct_name": arrprocesslog.cdtr_acct_name || '',
                                        "category_purpose": arrprocesslog.category_purpose || '',
                                        "category_purpose_prty": arrprocesslog.category_purpose_prty || '',
                                        "ext_purpose_code": arrprocesslog.ext_purpose_code || '',
                                        "ext_purpose_prty": arrprocesslog.ext_purpose_prty || '',
                                        "lclinstrm": lclinstrm || '',
                                        "instrument_type": arrprocesslog.instrument_type || '',
                                        "intrbk_sttlm_cur": arrprocesslog.intrbk_sttlm_cur || '',
                                        "intrbk_sttlm_amnt": arrprocesslog.intrbk_sttlm_amnt || '',
                                        "dbtr_iban": arrprocesslog.dbtr_iban || '',
                                        "dbtr_acct_no": arrprocesslog.dbtr_acct_no || '',
                                        "ext_acct_id_code": arrprocesslog.ext_acct_id_code || '',
                                        "charge_code": "",
                                        "dbtr_cust_type": arrprocesslog.dbtr_cust_type || '',
                                        "ext_org_id_code": arrprocesslog.ext_org_id_code || '',
                                        "issuer_type_code": arrprocesslog.issuer_type_code || '',
                                        "dbtr_birth_date": arrprocesslog.dbtr_birth_date || '',
                                        "dbtr_city_birth": arrprocesslog.dbtr_city_birth || '',
                                        "dbtr_country": arrprocesslog.dbtr_country || '',
                                        "dbtr_document_id": arrprocesslog.dbtr_document_id || '',
                                        "ext_person_id_code": arrprocesslog.ext_person_id_code || '',
                                        "dbtr_other_issuer": arrprocesslog.dbtr_other_issuer || '',
                                        "dbtr_acct_name": arrprocesslog.dbtr_acct_name || '',
                                        "cdtr_iban": arrprocesslog.cdtr_iban || '',
                                        "dbtr_prvt_id": arrprocesslog.dbtr_prvt_id || '',
                                        "payment_endtoend_id": arrprocesslog.payment_endtoend_id || '',
                                        "accp_dt_tm": arrprocesslog.accp_dt_tm || '',
                                        "charge_bearer": arrprocesslog.charge_bearer || '',
                                        "tran_ref_id": arrprocesslog.tran_ref_id || '',
                                        "uetr": arrprocesslog.uetr || '',
                                        "cr_acct_identification": arrprocesslog.cr_acct_identification || '',
                                        "cr_acct_id_code": arrprocesslog.cr_acct_id_code || '',
                                        "message_data": arrprocesslog.message_data || '',
                                        "process_type": "ORR",
                                        "status": arrprocesslog.status || '',
                                        "process_status": arrprocesslog.process_status || '',
                                        "process": "Pacs.002 Payment Status Report",
                                        "remittance_information": arrprocesslog.remittance_info || '',
                                        "clrsysref": arrprocesslog.clrsysref || '',
                                        "extIdentifier": arrprocesslog.clrsysref || '',
                                        "message_format": "urn:iso:std:iso:20022:tech:xsd:pacs.008.001.09",
                                        "payment_processing_method": "AC_AC_IBAN",
                                        "channel_id": arrprocesslog.channel_id || '',
                                        "channel_refno": arrprocesslog.channel_refno || '',
                                        "cbs_ref_no": arrprocesslog.cbs_ref_no || '',
                                        "AccountInformation": {
                                            "account_number": arracctInfrm[0].account_number || '',
                                            "company_code": arracctInfrm[0].company_code || '',
                                            "inactive_marker": arracctInfrm[0].inactive_marker || '',
                                            "currency": arracctInfrm[0].currency || '',
                                            "alternate_account_type": arracctInfrm[0].alternate_account_type || '',
                                            "alternate_account_id": arracctInfrm[0].alternate_account_id || '',
                                            "account_officer": arracctInfrm[0].account_officer || '',
                                            "curr_rate_segment": arracctInfrm[0].curr_rate_segment || '',
                                            "customer_id": arracctInfrm[0].customer_id || '',
                                            "department_code": arracctInfrm[0].department_code || ''
                                        },
                                        "company_code": arracctInfrm[0].company_code || '',
                                        "internal_acc_no": "",
                                        "is_virtual_acc": Virtual_account || '',
                                        "cr_acc_ccy": arracctInfrm[0].currency || '',
                                        "account_officer": arracctInfrm[0].account_officer || '',
                                        "customer_id": arracctInfrm[0].customer_id || '',
                                        "department_code": arracctInfrm[0].department_code || '',
                                        "active_status": "RJCT",
                                        "cbuae_return_code": cbuae_return_code || '',
                                        "process_ref_no": arrprocesslog.clrsysref || '',
                                        "msgId": msgId || '',
                                        "rsn_code": rsn_code || '',
                                        "npsstrrd_refno": npsstrrd_refno || '',
                                        "process_name": "Pacs.002 Payment Status Report",
                                        "request_data_json": null
                                    }
                                }

                            },
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }



                        var PrintInfo = {}
                        PrintInfo.url = arrUrl[0].param_detail
                        PrintInfo.uetr = arrprocesslog.uetr || ''
                        PrintInfo.txid = arrprocesslog.tran_ref_id || ''
                        PrintInfo.clrsysref = arrprocesslog.clrsysref || ''
                        reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                            if (error) {
                                reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                sendResponse(error, null);

                            } else {
                                responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
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
