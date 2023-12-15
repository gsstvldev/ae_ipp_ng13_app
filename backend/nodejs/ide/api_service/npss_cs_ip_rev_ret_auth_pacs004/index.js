var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function (appRequest, appResponse, next) {



    /*  Created By :Suresh
 Created Date :08-11-2023
 Modified :for api payload change on 24-11-2023
 Modified :for pac004 url declared on  08-12-2023
  Modified :for  update execute on  14-12-2023 
  
 */
    var serviceName = 'NPSS AMB Return Pack 004';
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
    var objresponse = {
        'status': 'FAILURE',
        'data': '',
        'errdata': '',
        'msg': ''
    }; // Response to Client
    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
        try {
            objSessionLogInfo = objLogInfo; // Assing log information
            objSessionLogInfo.HANDLER_CODE = 'NPSS AMB Return Pack 004';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS AMB Return Pack 004';
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection
                try {
                    var take_pacs004_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_RETURN_PACK004' and param_code='URL' and need_sync = 'Y' and product_code='${params.PROD_CODE}'`
                    var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}' `
                    var take_cdtr_iban = `select * from npss_transactions  where npsst_id = '${params.Tran_Id}'`;
                    //TAKE cdtr_iban
                    ExecuteQuery1(TakeStsPsts, async function (arrPsts) {
                        if (arrPsts.length > 0) {
                            //TAKE SUCCESS STATUS SUCCESS PROCESS STATUS

                            final_process_status = arrPsts[0].success_process_status
                            final_status = arrPsts[0].success_status
                            //TAKE PAC004 API URL
                            ExecuteQuery1(take_pacs004_url, async function (pacsapi) {
                                if (pacsapi.length > 0) {

                                    pacs004apiURL = pacsapi[0].param_detail;
                                    ExecuteQuery1(take_cdtr_iban, async function (arriban) {
                                        if (arriban.length > 0) {
                                            iban = arriban[0].cdtr_iban
                                            final_cdtr_iban = iban.substring(7, 16)
                                            var takereturncode = `select cbuae_return_code  from npss_trn_process_log  where  status = 'IP_RCT_RR_RETURN_READY' and uetr = '${arriban[0].uetr}'`;
                                            ExecuteQuery1(takereturncode, async function (arrreturncode) {
                                                if (arrreturncode.length > 0) {
                                                    postreasoncode = arrreturncode[0].cbuae_return_code
                                                    //TAKE PROCESS SYSTEM  
                                                    var takeprcssystem = `SELECT processing_system FROM core_nc_iban_range_setup WHERE iban_range = '${final_cdtr_iban}'`;
                                                    ExecuteQuery1(takeprcssystem, async function (prcssysytem) {
                                                        //IF PROCESS SYSTEM 0 < CALLING TCS CORE API
                                                        if (prcssysytem.length > 0) {
                                                            var take_tcscoreapi_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_TCS_MWALLET' and param_code='URL' and need_sync = 'Y' and product_code='${params.PROD_CODE}'`
                                                            ExecuteQuery1(take_tcscoreapi_url, async function (tcscoreapi) {
                                                                if (tcscoreapi.length > 0) {
                                                                    let processname = 'WALLET'
                                                                    apiURL = tcscoreapi[0].param_detail;
                                                                    let virtualIbanRes = await getVirtualIban(arriban[0].uetr);
                                                                    let Tcscoreres = await callingapi(arriban, processname, apiURL, virtualIbanRes)
                                                                    if (Tcscoreres == 'SUCCESS') {
                                                                        //TCS CORE API SUCCESS AFTER CALL PAC004 API
                                                                        let pac004Res = await callingpacs004(arriban, pacs004apiURL, postreasoncode)
                                                                        if (pac004Res == 'SUCCESS') {
                                                                            FinalStschange = `Update npss_transactions set maker = '${params.CREATED_BY_NAME}',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}' `
                                                                            ExecuteQuery(FinalStschange, async function (FinalUptstatus) {
                                                                                if (FinalUptstatus == 'SUCCESS') {
                                                                                    objresponse.status = "SUCCESS"
                                                                                    objresponse.data = "SUCCESS"
                                                                                }
                                                                                else {
                                                                                    objresponse.status = "STATUS PROCESS STATUS UPDATE FAILURE"
                                                                                    objresponse.errdata = "Update Failure in Transaction"
                                                                                    sendResponse(null, objresponse)
                                                                                }
                                                                            })
                                                                        }
                                                                        else {
                                                                            objresponse.status = " Pac004 API FAILURE"
                                                                            objresponse.errdata = "Pac004 API FAILURE"
                                                                            sendResponse(null, objresponse)
                                                                        }
                                                                    }
                                                                    else {
                                                                        objresponse.status = "MWALLET API CALL FAILURE"
                                                                        objresponse.errdata = "MWALLET  API CALL FAILURE"
                                                                        sendResponse(null, objresponse)
                                                                    }

                                                                }
                                                                else {
                                                                    objresponse.status = "TAKE TCSCOREAPI URL NOT FOUND"
                                                                    objresponse.errdata = "TAKE TCSCOREAPI URL NOT FOUND"
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            })

                                                        }
                                                        //IF PROCESS SYSTEM 0 CALLING MWALLET CORE API
                                                        else if (prcssysytem.length == 0) {
                                                            // PROCESSING SYSYTEM = WALLET AND  CALL MWALLET API 
                                                            var take_mwalletapi_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_TCS_MWALLET' and param_code='URL' and need_sync = 'Y' and product_code='${params.PROD_CODE}'`
                                                            ExecuteQuery1(take_mwalletapi_url, async function (mwalletcoreapi) {
                                                                if (mwalletcoreapi.length > 0) {
                                                                    let processname = 'TCS'
                                                                    apiURL = mwalletcoreapi[0].param_detail;
                                                                    let MwalletCoreres = await callingapi(arriban, processname, apiURL, '')
                                                                    if (MwalletCoreres == 'SUCCESS') {
                                                                        //MWALLET CORE API SUCCESS AFTER CALL PAC004 API                       
                                                                        let pac004Res = await callingpacs004(arriban, pacs004apiURL, postreasoncode)
                                                                        if (pac004Res == 'SUCCESS') {
                                                                            //IF PAC004 API SUCCESS AFTER STATUS AND PROCESS STAUS CHANGED 
                                                                            FinalStschange = `Update npss_transactions set maker = '${params.CREATED_BY_NAME}',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}' `
                                                                            ExecuteQuery(FinalStschange, async function (FinalUptstatus) {
                                                                                if (FinalUptstatus == 'SUCCESS') {
                                                                                    objresponse.status = "SUCCESS"
                                                                                    objresponse.data = "SUCCESS"
                                                                                }
                                                                                else {
                                                                                    objresponse.status = "STATUS PROCESS STATUS UPDATE FAILURE"
                                                                                    objresponse.errdata = "STATUS PROCESS STATUS UPDATE FAILURE"
                                                                                    sendResponse(null, objresponse)
                                                                                }
                                                                            })
                                                                        }
                                                                        else {
                                                                            objresponse.status = " Pac004 API FAILURE"
                                                                            objresponse.errdata = " Pac004 API FAILURE"
                                                                            sendResponse(null, objresponse)
                                                                        }
                                                                    }
                                                                }
                                                                else {
                                                                    objresponse.status = "TCS CORE API CALL FAILURE"
                                                                    objresponse.errdata = "TCS CORE API CALL FAILURE"
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            })

                                                        }
                                                        else {
                                                            objresponse.status = " Process System Not Find In table"
                                                            objresponse.errdata = " Process System Not Find In table"
                                                            sendResponse(null, objresponse)
                                                        }
                                                    })
                                                }
                                                else {
                                                    objresponse.status = "NO cbuae_return_code  FOUND"
                                                    objresponse.errdata = "NO cbuae_return_code  FOUND"
                                                    sendResponse(null, objresponse)
                                                }
                                            })
                                        }
                                        else {
                                            objresponse.status = " No cdtr_iban In table"
                                            objresponse.errdata = " No cdtr_iban In table"
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                }
                                else {
                                    objresponse.status = "NO URL FOUND IN PAC004"
                                    objresponse.errdata = "NO URL FOUND IN PAC004"
                                    sendResponse(null, objresponse)
                                }

                            })
                        }
                        else {
                            objresponse.status = "eligible Status & p.status not available  "
                            objresponse.errdata = "eligible Status & p.status not available  "
                            sendResponse(null, objresponse)
                        }
                    })

                }
                catch (error) {
                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                    sendResponse(error, null);
                }

                function getVirtualIban(uetr) {
                    return new Promise((resolve, reject) => {
                        let logQry = `select virtual_iban from npss_trn_process_log where process_name = 'Inward Account Validation' and processing_system='MWallet' and uetr='${uetr}'`
                        ExecuteQuery1(logQry, async function (arrlog) {
                            if (arrlog.length > 0) {
                                resolve(arrlog[0].virtual_iban)
                            } else {
                                resolve('ERROR')
                            }
                        })

                    })
                }

                //CALLING TCS API AND MWALLET CORE API 
                function callingapi(arrTranparams, processname, apiURL, virtualIban) {
                    return new Promise((resolve, reject) => {
                        try {
                            var apiName = 'NPSS_TCS_MWALLET';
                            var request = require('request');
                            var processing_system = processname
                            var URL = apiURL
                            var options = {
                                url: URL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                    "payload": {
                                        "process_type": "RR",
                                        "cdtr_iban": arrTranparams[0].cdtr_iban || '',
                                        "intrbk_sttlm_amnt": arrTranparams[0].intrbk_sttlm_amnt || '',
                                        "account_currency": arrTranparams[0].account_currency || '',
                                        "uetr": arrTranparams[0].uetr || '',
                                        "processing_system": processing_system || '',
                                        "payment_endtoend_id": arrTranparams[0].payment_endtoend_id || '',
                                        "remittance_information": arrTranparams[0].remittance_info || '',
                                        "virtual_iban": virtualIban || ''

                                    }
                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }

                            var PrintInfo = {}
                            PrintInfo.url = apiURL || ''
                            PrintInfo.npsst_id = arrTranparams[0].npsst_id || ''
                            reqInstanceHelper.PrintInfo(serviceName, + '------------NPSS_TCS_MWALLET API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);

                                } else {
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    try {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------NPSS_TCS_MWALLET API Response JSON-------' + JSON.stringify(responseBodyFromImagingService), objSessionLogInfo);
                                        Responsedata = JSON.parse(responseBodyFromImagingService)
                                    } catch (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------NPSS_TCS_MWALLET API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                        Responsedata = responseBodyFromImagingService
                                    }

                                    resolve(Responsedata)
                                }
                            });
                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    })
                }
                //CALLING PAC004 API 
                function callingpacs004(arrprocesslog, pacs004apiURL, arrreturncode) {
                    return new Promise((resolve, reject) => {
                        try {
                            var apiURL = pacs004apiURL;
                            var postreasoncode = arrreturncode;
                            var apiName = 'NPSS IP RETURN PACS004'
                            var request = require('request');
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
                                    "post_reason_code": postreasoncode || '',
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
                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode

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
