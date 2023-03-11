var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    



    try {
        /*   Created By : Daseen
        Created Date :16-12-2022
        Modified By : Siva Harish
        Modified Date :26-12-2022  
        Reason for :Handling Error While Failure 
         Modified By : Siva Harish
        Modified Date :17-01-2023  
        Reason for :Remove Console log
        Reason for changing payload
        */
        var serviceName = ' NPSS_IP_REV_GET_DEAL';
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
                objSessionLogInfo.HANDLER_CODE = ' NPSS_IP_REV_GET_DEAL';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = ' NPSS_IP_REV_GET_DEAL';
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
                            var take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_IP_REV_GET_DEAL' and param_code='URL' and need_sync = 'Y'`;

                            var take_api_params = `select  ns.intrbk_sttlm_amnt,ns.remittance_info,ns.cr_acct_identification,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method,
                            ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty,
                            ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,
                            ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm
                            from npss_transactions ns  where npsst_id = '${params.Tran_Id}'`;


                            ExecuteQuery1(take_api_params, function (arrprocesslog) {
                                if (arrprocesslog.length) {
                                   

                                    var TakeAcctInf = `select Alternate_Account_Type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslog[0].cdtr_iban}'`
                                    ExecuteQuery1(TakeAcctInf, function (arrActInf) {
                                        if (arrActInf.length) {
                                            ExecuteQuery1(take_api_url, function (arrurl) {
                                                if (arrurl.length) {
                                                    var url = arrurl[0].param_detail;
                                                    var senddata = {}
                                                    var Takeloccur = `SELECT amount_credited_loc_cur from npss_transactions where uetr = '${arrprocesslog[0].uetr}'`
                                                    ExecuteQuery1(Takeloccur, function (localcur) {
                                                        if(localcur.length == 0){
                                                            senddata.amount_credited_loc_cur = ''
                                                            fn_doapicall(url, arrprocesslog, arrActInf,senddata, function (result) {
                                                                reqInstanceHelper.PrintInfo(serviceName, "..API Response... ----->" + result, objSessionLogInfo);
        
                                                                if (result == 'FAILURE') {
                                                                    var Takeuetr = `select uetr from npss_transactions where npsst_id = '${params.Tran_Id}'`
                                                                    ExecuteQuery1(Takeuetr, function (arruetr) {
                                                                        var TakeFailureresult = `select cbuae_return_code from npss_trn_process_log where uetr = '${arruetr[0].uetr}' and status = 'IP_RCT_REV_DEAL_FAILURE'`
                                                                        ExecuteQuery1(TakeFailureresult, function (arrFail) {
                                                                            if (arrFail.length) {
                                                                                objresponse.status = 'Failure Error Code - ' + arrFail[0].cbuae_return_code
                                                                                sendResponse(null, objresponse);
                                                                            } else {
                                                                                objresponse.status = 'Api Call Failure No Error Code Found'
                                                                                sendResponse(null, objresponse);
                                                                            }
                                                                        })
                                                                    })
                                                                }
                                                                else {
                                                                    objresponse.status = 'SUCCESS';
                                                                    objresponse.data = result;
                                                                    sendResponse(null, objresponse);
                                                                }
                                                            })
                                                        }else{
                                                            senddata.amount_credited_loc_cur = localcur[0].amount_credited_loc_cur || ''
                                                            fn_doapicall(url, arrprocesslog, arrActInf,senddata, function (result) {
                                                                reqInstanceHelper.PrintInfo(serviceName, "..API Response... ----->" + result, objSessionLogInfo);
        
                                                                if (result == 'FAILURE') {
                                                                    var Takeuetr = `select uetr from npss_transactions where npsst_id = '${params.Tran_Id}'`
                                                                    ExecuteQuery1(Takeuetr, function (arruetr) {
                                                                        var TakeFailureresult = `select cbuae_return_code from npss_trn_process_log where uetr = '${arruetr[0].uetr}' and status = 'IP_RCT_REV_DEAL_FAILURE'`
                                                                        ExecuteQuery1(TakeFailureresult, function (arrFail) {
                                                                            if (arrFail.length) {
                                                                                objresponse.status = 'Failure Error Code - ' + arrFail[0].cbuae_return_code
                                                                                sendResponse(null, objresponse);
                                                                            } else {
                                                                                objresponse.status = 'Api Call Failure No Error Code Found'
                                                                                sendResponse(null, objresponse);
                                                                            }
                                                                        })
                                                                    })
                                                                }
                                                                else {
                                                                    objresponse.status = 'SUCCESS';
                                                                    objresponse.data = result;
                                                                    sendResponse(null, objresponse);
                                                                }
                                                            })
                                                        }
                                                    })
                                                   
                                                }
                                                else {
                                                  
                                                    objresponse.status = "No Data found in workflow table"
                                                    sendResponse(null, objresponse)
                                                }
                                            })
                                        }
                                        else {
                                            
                                            objresponse.status = "No Data found in accounts table"
                                            sendResponse(null, objresponse)
                                        }
                                    })




                                }
                                else {
                                  
                                    objresponse.status = "No Data found in Transaction table"
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
                    function fn_doapicall(url, arrprocesslog, arrActInf,senddata, callbackapi) {
                        try {
                            var apiName = 'NPSS IP REV Get Deal'
                            var request = require('request');
                            var apiURL =
                                apiURL = url // apiURL + apiName
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {


                                    "payload": {
                                        "hdr_settlement_date": arrprocesslog[0].hdr_settlement_date || '',
                                        "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                                        "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',
                                        "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                                        "cdtr_iban": arrprocesslog[0].cdtr_iban || '',
                                        "process_type": "IP",
                                        "process": "",
                                        "uetr": arrprocesslog[0].uetr || '',
                                        "deal_process": "GetDeal",
                                        "amount_credited_loc_cur":senddata.amount_credited_loc_cur


                                    },
                                    "AccountInformation": {
                                        "account_number": arrActInf[0].account_number || '',
                                        "company_code": arrActInf[0].company_code || '',
                                        "inactive_marker": arrActInf[0].inactive_marker || '',
                                        "currency": arrActInf[0].currency || '',
                                        "alternate_account_type": arrActInf[0].alternate_account_type || '',
                                        "alternate_account_id": arrActInf[0].alternate_account_id || '',
                                        "account_officer": arrActInf[0].account_officer || '',
                                        "curr_rate_segment": arrActInf[0].curr_rate_segment || '',
                                        "customer_id": arrActInf[0].customer_id || ''
                                    }
                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }



                            var PrintInfo = {}
                            PrintInfo.url = url || ''
                            PrintInfo.uetr =  params.UETR || ''
                            PrintInfo.hdr_settlement_date = arrprocesslog[0].hdr_settlement_date || ''
                            PrintInfo.deal_process = "GetDeal" || ''
                            PrintInfo.company_code = arrActInf[0].company_code || ''

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
