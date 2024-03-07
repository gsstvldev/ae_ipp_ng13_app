var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function (appRequest, appResponse, next) {
    
    var serviceName = 'NPSS IP REV Ret Auth PACS004';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqXlsx = require('node-xlsx').default;
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    let xml2js = require('xml2js');
    var moment = require('moment');
    var reqAsync = require('async');
    var mTranConn = "";
    var PRCT_ID = "";
    var failedData = []
    var objresponse = {
        'status': 'FAILURE',
        'data': '',
        'errdata': '',
        'msg': ''
    }; // Response to Client
    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
        try {
            objSessionLogInfo = objLogInfo; // Assing log information
            objSessionLogInfo.HANDLER_CODE = 'NPSS IP REV Ret Auth PACS004';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS IP REV Ret Auth PACS004';
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection
                try {
                    // var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_IP_REV_RETURN_PACS004'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}' and product_code='${params.PROD_CODE}'`
                    var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}' `
                    var Taketrandata = `select * from npss_transactions  where npsst_id = '${params.Tran_Id}'`;
                    var take_pacs004_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_RETURN_PACK004' and param_code='URL' and need_sync = 'Y' and product_code='${params.PROD_CODE}'`
                    var indexcbsapiurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_INDEX_CBS' and param_code='URL' and need_sync = 'Y' and product_code='${params.PROD_CODE}'`
                    ExecuteQuery1(indexcbsapiurl, async function (cbsapiurl) {
                        if (cbsapiurl.length > 0) {
                            var indexapiurl
                            indexapiurl = cbsapiurl[0].param_detail;
                            ExecuteQuery1(take_pacs004_url, async function (pac004url) {
                                if (pac004url.length > 0) {
                                    var pacs004apiURL
                                    pacs004apiURL = pac004url[0].param_detail;
                                    ExecuteQuery1(TakeStsPsts, async function (arrPsts) {
                                        if (arrPsts.length > 0) {
                                            //TAKE SUCCESS STATUS SUCCESS PROCESS STATUS
                                            final_process_status = arrPsts[0].success_process_status
                                            final_status = arrPsts[0].success_status
                                            ExecuteQuery1(Taketrandata, async function (trandata) {
                                                if (trandata.length > 0) {
                                                    let cbsapi = await indexcbsapi(trandata, indexapiurl)
                                                    if (cbsapi == 'SUCCESS') {
                                                        //IF INDEX CBS API SUCCESS AFTER STATUS AND PROCESS STAUS CHANGED
                                                        let pac004Res = await callingpacs004(trandata, pacs004apiURL)
                                                        if (pac004Res == 'SUCCESS') {
                                                            //IF PAC004 API SUCCESS AFTER STATUS AND PROCESS STAUS CHANGED
                                                            ExecuteQuery1(take_pacs004_url, async function () {
                                                                FinalStschange = `Update npss_transactions set maker = '${params.CREATED_BY_NAME}',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}' `
                                                                ExecuteQuery(FinalStschange, async function (FinalUptstatus) {
                                                                    if (FinalUptstatus == 'SUCCESS') {
                                                                        objresponse.status = "SUCCESS"
                                                                        objresponse.data = "SUCCESS"
                                                                    }
                                                                    else {
                                                                        objresponse.errdata = "STATUS PROCESS STATUS UPDATE FAILURE"
                                                                        sendResponse(null, objresponse)
                                                                    }
                                                                })
                                                            })
                                                        }
                                                        else {
                                                            objresponse.errdata = " Pac004 API FAILURE"
                                                            sendResponse(null, objresponse)
                                                        }
                                                    }
                                                    else {
                                                        objresponse.errdata = "INDEX_CBS_Inward_Reversal_posting API call Failure"
                                                        sendResponse(null, objresponse)
                                                    }
                                                }
                                                else {
                                                    objresponse.errdata = " No TranData Value In table"
                                                    sendResponse(null, objresponse)
                                                }
                                            })
                                        }
                                        else {

                                            objresponse.errdata = "eligible Status & p.status not available  "
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                }
                                else {
                                    objresponse.errdata = "pac004 api url not found"
                                    sendResponse(null, objresponse)
                                }
                            })
                        }
                        else {
                            objresponse.errdata = "NOT FOUND INDEXCBSAPI FAILURE"
                            sendResponse(null, objresponse)
                        }
                    })

                }
                catch (error) {
                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                    sendResponse(error, null);
                }
                //CALLING INDEX_CBS_Inward_Reversal_posting  API
                function indexcbsapi(arrprocesslog, indexapiurl) {
                    return new Promise((resolve, reject) => {
                        try {

                            var apiName = 'INDEX_CBS_Inward_Reversal_posting_API';
                            var request = require('request');
                            var apiURL = indexapiurl;
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                    "payload":{
                                    "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                                    "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                                    "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                                    "uetr": arrprocesslog[0].uetr || '',
                                    "clrsysref": arrprocesslog[0].clrsysref||'',
                                    "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',
                                    "reversal_amount": arrprocesslog[0].reversal_amount || '',
                                    "reversal_code": params.REVERSAL_CODE || '',
                                    "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                                    "intrbk_sttlm_dt": arrprocesslog[0].hdr_settlement_date || '',
                                    "cdtr_iban": arrprocesslog[0].cdtr_iban || '',
                                    "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                                    "cr_acct_identification": arrprocesslog[0].cr_acct_identification || '',
                                    "dr_department_code": arrprocesslog[0].department_code || 'DEFAULT',
                                    "org_created_date": arrprocesslog[0].hdr_created_date || ''
                                }
                            },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }
                            var PrintInfo = {}
                            PrintInfo.url = apiURL || ''
                            PrintInfo.npsst_id = arrprocesslog[0].npsst_id || ''
                           // reqInstanceHelper.PrintInfo(serviceName, + '------------ API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                            reqInstanceHelper.PrintInfo(serviceName, + '------------ API Request JSON-------' + JSON.stringify(options), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);
                                }
                                else {
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    
                                    try {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------ API Response JSON-------' + JSON.stringify(responseBodyFromImagingService), objSessionLogInfo);
                                    }
                                    catch (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------ API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    }
                                    resolve(responseBodyFromImagingService)
                                }
                            });
                        }
                        catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    })
                }
                //CALLING PAC004 API 
                function callingpacs004(arrprocesslog, pacs004apiURL) {
                    return new Promise((resolve, reject) => {
                        try {
                            var apiURL = pacs004apiURL;
                            // var postreasoncode = arrreturncode;
                            var apiName = 'NPSS IP RETURN PACS004'
                            var request = require('request');
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                    "payload":{
                                    "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                                    "hdr_settlement_date": arrprocesslog[0].hdr_settlement_date || '',
                                    "hdr_created_date": arrprocesslog[0].hdr_created_date || '',
                                    "hdr_settlement_method": arrprocesslog[0].hdr_settlement_method || '',
                                    "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                                    "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                                    "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                                    "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                                    "uetr": arrprocesslog[0].uetr||'',
                                    "hdr_clearing_system": arrprocesslog[0].hdr_clearing_system || '',
                                    "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                                    "post_reason_code":'MD06',
                                    "clrsysref": arrprocesslog[0].clrsysref||'',
                                    "org_intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',
                                    "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || ''
                                }
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
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    try {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------ API Response JSON-------' + JSON.stringify(responseBodyFromImagingService), objSessionLogInfo);
                                    }
                                    catch (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------ API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    }
                                    resolve(responseBodyFromImagingService)
                                }
                            });
                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    })
                }

                //Execute Query 1 for common
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
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }
    })


});

module.exports = app;
