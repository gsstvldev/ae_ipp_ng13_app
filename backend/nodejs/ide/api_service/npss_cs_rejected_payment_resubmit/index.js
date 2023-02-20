var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    

try {
    /*   Created By :Siva Harish
    Created Date :20-02-2023
    
   
    */
    var serviceName = 'NPSS (CS) Rejected Payment Resubmit';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Rejected Payment Resubmit';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) Rejected Payment Resubmit';
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
                        if (Array.isArray(params.Tran_Id)) {
                            arrTranID = params.Tran_Id.map(function (eachTran) {
                                return eachTran.toString();
                            });
                        } else {
                            arrTranID = [params.Tran_Id.toString()];
                        }
                        TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                        var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = '${params.RULE_CODE}'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                        var take_api_params = `select npsst_id,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY) as dbtr_account_no, ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id in ${TempTranID}`;
                     
                            ExecuteQuery1(TakeStsPsts, function (arrurlResult) {
                                if (arrurlResult.length) {
                                    final_process_status = arrurlResult[0].success_process_status
                                    final_status = arrurlResult[0].success_status
                                    ExecuteQuery1(take_api_params, function (arrprocesslog) {
                                        if (arrprocesslog.length) {
                                            var Takepac008url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_MANUAL_INT_PAC008' and param_code='URL'`;
                                            ExecuteQuery1(Takepac008url, function (pac008url) {
                                                if (pac008url.length > 0) {
                                                    var pacurl = pac008url[0].param_detail
                                                    reqAsync.forEachOfSeries(arrprocesslog, function (arrprocesslogObj, i, nextobjctfunc) {
                                                        fn_doPac008apicall(pacurl, arrprocesslogObj, function (pac008api) {
                                                            if (pac008api == 'SUCCESS') {
                                                                var UpdateTrnTble = `Update npss_transactions set status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${arrprocesslogObj.npsst_id}'`
                                                                ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                                    if (arrUpdTranTbl == 'SUCCESS') {
                                                                        nextobjctfunc()
                                                                    }else {
                                                                        objresponse.status = "FAILURE"
                                                                        objresponse.errdata = "No Data Updated in Transaction Table for Tran_Id  "+arrprocesslogObj.npsst_id
                                                                        sendResponse(null, objresponse)
            
                                                                    }
            
                                                                })
                                                            } else {
                                                                objresponse.status = "FAILURE"
                                                                objresponse.errdata = "Failure in Pac008 Api for Tran_Id   "+arrprocesslogObj.npsst_id
                                                                sendResponse(null, objresponse)
                                                            }
            
                                                        })
                                                    },function(){
                                                        objresponse.status = 'SUCCESS'
                                                        sendResponse(null, objresponse)
                                                    })
                                                } else {
                                                    objresponse.status = "FAILURE"
                                                    objresponse.errdata = "Pac008 Url Not Found"
                                                    sendResponse(null, objresponse)
                                                }
                                            })


                                        } else {
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
                    catch (error) {
                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                        sendResponse(error, null);
                    }
                })









                function fn_doPac008apicall(url, arrprocesslog, callbackapi) {
                    try {
                        var apiName = 'NPSS Pac008 Api'
                        var request = require('request');
                        var apiURL =
                            apiURL = url // apiURL + apiName
                        var options = {
                            url: apiURL,
                            timeout: 18000000,
                            method: 'POST',
                            json: {
                                "hdr_msg_id": arrprocesslog.hdr_msg_id || '',
                                "hdr_total_amount": arrprocesslog.hdr_total_amount || '',
                                "value_date": arrprocesslog.value_date || '',
                                "dr_sort_code": arrprocesslog.dr_sort_code || '',
                                "payment_endtoend_id": arrprocesslog.payment_endtoend_id || '',
                                "tran_ref_id": arrprocesslog.tran_ref_id || '',
                                "uetr": arrprocesslog.uetr || '',
                                "intrbk_sttlm_amnt": arrprocesslog.intrbk_sttlm_amnt || '',
                                "dbtr_acct_name": arrprocesslog.dbtr_acct_name || '',
                                "dbtr_prvt_id": arrprocesslog.dbtr_prvt_id || '',
                                "ext_org_id_code": arrprocesslog.ext_org_id_code || '',
                                "issuer_type_code": arrprocesslog.issuer_type_code || '',
                                "dbtr_document_id": arrprocesslog.dbtr_document_id || '',
                                "dbtr_birth_date": arrprocesslog.dbtr_birth_date || '',
                                "dbtr_city_birth": arrprocesslog.dbtr_city_birth || '',
                                "dbtr_country": arrprocesslog.dbtr_country || '',
                                "ext_person_id_code": arrprocesslog.ext_person_id_code || '',
                                "dbtr_other_issuer": arrprocesslog.dbtr_other_issuer || '',
                                "dbtr_iban": arrprocesslog.dbtr_iban || '',
                                "cr_sort_code": arrprocesslog.cr_sort_code || '',
                                "cdtr_acct_name": arrprocesslog.cdtr_acct_name || '',
                                "cdtr_iban": arrprocesslog.cdtr_iban || '',
                                "cr_acct_identification": arrprocesslog.cr_acct_identification || '',
                                "remittance_information": arrprocesslog.remittance_info || '',
                                "category_purpose": arrprocesslog.category_purpose || '',
                                "dbtr_acct_no": arrprocesslog.dbtr_account_no || '',
                                "category_purpose_prty": arrprocesslog.category_purpose_prty || '',

                            },
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                        var PrintInfo = {}
                        PrintInfo.url = url || ''
                        PrintInfo.uetr = arrprocesslog.uetr || ''
                        PrintInfo.txid = arrprocesslog.tran_ref_id || ''
                        PrintInfo.payment_endtoend_id = arrprocesslog.payment_endtoend_id || ''
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
