var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
    
    
    

    try {

        var serviceName = 'NPSS IP REV RET AUTH PACS004';
        var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
        var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
        var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
        var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
        var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
        var params = appRequest.body.PARAMS; //  Client input fromm Server
        var headers = appRequest.headers; // header details 
        var objSessionLogInfo = null; // set value is null
        var xml2js = require('xml2js');
        var PRCT_ID = ""
        var mTranConn = "";
        var objresponse = {
            'status': 'FAILURE',
            'data': '',
            'errdata': '',
            'msg': ''
        };
        reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
            try {
                objSessionLogInfo = objLogInfo; // Assing log information
                // Log Viewer Setup
                objSessionLogInfo.HANDLER_CODE = 'NPSS IP REV RET AUTH PACS004';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS IP REV RET AUTH PACS004';
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection     
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, PRCT_ID) {
                        try {
                            var take_return_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_LARI_CBS_Inward_Rev_posting' and param_code='URL' and need_sync = 'Y' and product_code='${params.PROD_CODE}'`;
                            var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_IP_REV_RETURN_PACS004'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}' and product_code='${params.PROD_CODE}'`
                            var take_api_params = `select * from npss_transactions where npsst_id ='${params.Tran_Id}'`;
                            var take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_RETURN_PACK004' and param_code='URL' and need_sync = 'Y' and product_code='${params.PROD_CODE}'`;
                            let arrPsts = await ExecuteQuery1(TakeStsPsts)
                            if (arrPsts.length > 0) {
                                final_process_status = arrPsts[0].success_process_status
                                final_status = arrPsts[0].success_status
                                let arrprocesslog = await ExecuteQuery1(take_api_params)
                                if (arrprocesslog.length > 0) {
                                    let api_call1 = await fn_doapicall1(take_return_url, arrprocesslog)
                                    if (api_call1.status == 'SUCCESS' || api_call1.status == 'Success' || api_call1.status == 'success') {
                                        let apicall2 = await fn_doapicall2(take_api_url, arrprocesslog)
                                        if (apicall2.status == 'SUCCESS' || apicall2 == 'SUCCESS' || apicall2.status == 'success') {
                                            let updte = await update(final_process_status, final_status,PRCT_ID)
                                            if (updte == 'SUCCESS' || updte == 'Success' || updte == 'success') {
                                                objresponse.status = "SUCCESS"
                                                objresponse.data = "SUCCESS"
                                                sendResponse(null, objresponse)
                                            } else {
                                                objresponse.status = "FAILURE"
                                                objresponse.errdata = "No Data Update in transaction table"
                                                sendResponse(null, objresponse)
                                            }
                                        } else {
                                            objresponse.status = "FAILURE"
                                            objresponse.errdata = "After CBS reversal posting,Pac004 api call not success"
                                            sendResponse(null, objresponse)
                                        }
                                    } else {
                                        objresponse.status = "FAILURE"
                                        objresponse.errdata = "CBS inward reversal posting api call not success"
                                        sendResponse(null, objresponse)
                                    }
                                } else {
                                    objresponse.status = "FAILURE"
                                    objresponse.errdata = "No data available in transaction table"
                                    sendResponse(null, objresponse)
                                }
                            } else {
                                objresponse.status = "FAILURE"
                                objresponse.errdata = "eligible Status & p.status not available for rule_code RCT_IP_REV_RETURN_PACS004 "
                                sendResponse(null, objresponse)
                            }
                        } catch (error) {
                            SendResponse(error, null)
                        }
                    })
                })



                //Execute  CBS Inward Reversal posting api call
                function fn_doapicall1(take_return_url, arrprocesslog) {
                    return new Promise(async (resolve, reject) => {
                        try {
                            let arrapires1 = await ExecuteQuery1(take_return_url)
                            var take_ref_no = `select process_ref_no from npss_trn_process_log where process_name='Inward Credit Posting' and uetr='${arrprocesslog[0].uetr}'`
                            let arrrefno = await ExecuteQuery1(take_ref_no)
                            var apiName = 'NPSS IP REV RET AUTH PACS004'

                            var request = require('request');
                            var apiURL = arrapires1[0].param_detail
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                    "payload": {

                                        "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt||'',

                                        "cdtr_iban": arrprocesslog[0].cdtr_iban||'',

                                        "uetr": arrprocesslog[0].uetr||'',

                                        "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur||'',

                                        "account_currency": arrprocesslog[0].account_currency||'',

                                        "process_ref_no": arrrefno[0].process_ref_no||''
                                    }
                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }
                            var PrintInfo = {}
                            PrintInfo.url = apiURL || ''
                            PrintInfo.npsst_id = arrprocesslog[0].npsst_id || ''
                            reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);

                                } else {
                                   // responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    try {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + JSON.stringify(responseBodyFromImagingService), objSessionLogInfo);
                                       //resolve('SUCCESS')
                                        resolve( JSON.parse(responseBodyFromImagingService))
                                    } catch (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                        resolve( responseBodyFromImagingService)

                                    }

                                 
                                }
                            });

                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    })
                }


                //Execute pacs004 api call
                function fn_doapicall2(take_api_url, arrprocesslog) {
                    return new Promise(async (resolve, reject) => {
                        try {
                            let arrapires = await ExecuteQuery1(take_api_url)
                            var takeretn_code=`select cbuae_return_code  from npss_trn_process_log  where  status = 'IP_RCT_RR_RETURN_READY' and uetr ='${arrprocesslog[0].uetr}'`
                            let arrreturncode= await ExecuteQuery1(takeretn_code)
                            var apiName = 'NPSS IP RETURN PACS004'
                            var request = require('request');
                            var apiURL =
                                apiURL = arrapires[0].param_detail // apiURL + apiName
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                    "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                                    "hdr_settlement_date": arrprocesslog[0].hdr_settlement_date || '',
                                    "hdr_created_date": arrprocesslog[0].hdr_created_date || '',
                                    "hdr_settlement_method": arrprocesslog[0].hdr_settlement_method || '',
                                    "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                                    "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                                    "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                                    "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                                    "uetr": arrprocesslog[0].uetr,
                                    "hdr_clearing_system": arrprocesslog[0].hdr_clearing_system || '',
                                    "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                                    "post_reason_code": arrreturncode[0].cbuae_return_code || '',
                                    "clrsysref": arrprocesslog[0].clrsysref,
                                    "org_intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',
                                    "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || ''
                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }
                            reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);
                                } else {
                                    try {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + JSON.stringify(responseBodyFromImagingService), objSessionLogInfo);
                                      // resolve('SUCCESS')
                                        resolve( JSON.parse(responseBodyFromImagingService))
                                    } catch (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                        resolve( responseBodyFromImagingService)

                                    }
                                }
                            });

                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }

                    })
                }


                //update transaction table
                function update(final_process_status, final_status,PRCT_ID) {
                    return new Promise(async (resolve, reject) => {
                        var UpdateTrnTble
                        if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') {
                            UpdateTrnTble = `Update npss_transactions set maker = '${params.CREATED_BY_NAME}',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}' `
                        } else {
                            UpdateTrnTble = `Update npss_transactions set checker = '${params.CREATED_BY_NAME}',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}' `
                        }
                        let resupdte = await ExecuteQuery(UpdateTrnTble)
                        resolve(resupdte)
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
                //Execute Query for common
                function ExecuteQuery(query) {
                    return new Promise((resolve, reject) => {
                        reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                            try {
                                if (error) {
                                    sendResponse(error)
                                } else {
                                    resolve("SUCCESS");

                                }
                            } catch (error) {
                                sendResponse(error)
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


            } catch (error) {
                SendResponse(error, null)
            }
        })
    } catch (error) {
        SendResponse(error, null)
    }




});

module.exports = app;
