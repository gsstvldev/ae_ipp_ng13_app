var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    
    
    
  try {
    /*   Created By :Daseen
    Created Date :16-12-2022
    Modified By : Siva Harish
    Modified Date :08-01-2023 
    Reason for : Calling fn_pcidss_decrypt for taking masking cr acct ident code 8/01/2023
    Reason for Remove Console log 18/01/2023
    */
    var serviceName = 'NPSS Get Usable Amount';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS Get Usable Amount';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS Get Usable Amount';
            var cus_iban;
            // Get DB Connection                                                                                                                                      
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    try {
                        var PRCT_ID = prct_id
                        var ApitrnId
                        var app_id
                        var final_status
                        var final_process_status
                        var take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_REVERSE_USABLE_BALANCE' and param_code='URL'`;
                     
                       // var take_api_params = `select  ns.remittance_info,ns.cr_acct_identification,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method,
                      //  ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty,ns.intrbk_sttlm_amnt,
                       // ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,
                       // ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm
                       // from npss_transactions ns  where npsst_id = '${params.Tran_Id}'`;
                      var take_api_params = `select fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty,ns.intrbk_sttlm_amnt, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id = '${params.Tran_Id}'`;
                        
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
                                        var TakeAcctInf = `select Alternate_Account_Type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslog[0].cdtr_iban}'`
                                        ExecuteQuery1(TakeAcctInf, function (arrActInf) {
                                            if (arrActInf.length) {
                                                ExecuteQuery1(take_api_url, function (arrurl) {
                                                    if (arrurl.length) {
                                                        var url = arrurl[0].param_detail;
                                                        fn_doapicall(url, arrprocesslog, arrActInf, lclinstrm, function (result) {
                                                            if (result ) {
                                                                objresponse.status = 'SUCCESS';
                                                            
                                                                objresponse.data=result;
                                                                sendResponse(null, objresponse);}
                                                               
                                                                
                                                             else {
                                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Data not received from service", result);
                                                                   objresponse.status = 'FAILURE';
                                                                 objresponse.data=result;
                                                                sendResponse(null, objresponse);
                                                            }
                                                        })
                                                  
                                                    }
                                                    else {
                                                       
                                                        objresponse.status = "No Data found in workflow table"
                                                        sendResponse(null,objresponse)
                                                    }
                                                })
                                            }
                                            else {
                                               
                                                objresponse.status = "No Data found in accounts table"
                                                sendResponse(null,objresponse)
                                            }
                                        })




                                    }
                                    else {
                                     
                                        objresponse.status = "No Data found in Transaction table"
                                        sendResponse(null,objresponse)
                                    }

                                })
                           



                    }
                    catch (error) {
                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                        sendResponse(error, null);
                    }
                })




                // Do API Call for Service 
                function fn_doapicall(url, arrprocesslog, arrActInf, lclinstrm, callbackapi) {
                    try {
                        var apiName = 'NPSS Get Usable Amount'
                        var request = require('request');
                        var apiURL =
                            apiURL = url // apiURL + apiName
                        var options = {
                            url: apiURL,
                            timeout: 18000000,
                            method: 'POST',
                            json: {


                                "payload": {
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
                                    //"value_date": arrprocesslog[0].value_date || '',
                                    //"ext_purpose_prty": arrprocesslog[0].ext_purpose_prty || '',
                                    "lclinstrm": lclinstrm || '',
                                    "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                                    "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',
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
                                    "status": params.eligible_status || '',
                                    "process_status": params.eligible_process_status || '',
                                    "clrsysref": arrprocesslog[0].clrsysref,

                                    "process": "",
                                    "remittance_information": arrprocesslog[0].remittance_info || ''

                                  

                                },
                                "AccountInformation": {
                                    "account_number": arrActInf[0].account_number || '',
                                    "company_code": arrActInf[0].company_code || '',
                                    "inactive_marker": arrActInf[0].inactive_marker || '',
                                    "currency": arrActInf[0].currency || '',
                                    "alternate_account_type": "OLD.IBAN",
                                    "alternate_account_id": arrActInf[0].alternate_account_id || ''
                                   
                                }
                            },
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }



                        var PrintInfo = {}
                        PrintInfo.url = url || ''
                        PrintInfo.uetr = arrprocesslog[0].uetr || ''
                       
                       
                        PrintInfo.txid = arrprocesslog[0].tran_ref_id || ''
                        PrintInfo.clrsysref = arrprocesslog[0].clrsysref || ''
                       
                        reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                        if (error) {
                                reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
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
