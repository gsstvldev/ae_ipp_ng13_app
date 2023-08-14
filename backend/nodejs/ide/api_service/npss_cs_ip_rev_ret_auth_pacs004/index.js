var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
    
    
    
try {
    /*   Created By : Daseen
    Created Date :04-08-2023
 
    */
    var serviceName = 'NPSS IP REV Ret Auth PACS004';
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
    var PRCT_ID = ""
    var failcountobj = {}
    var failcount = []
    var final_status = ''
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS IP REV Ret Auth PACS004';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS IP REV Ret Auth PACS004';
            var cus_iban;
            // Get DB Connection                                                                                                                                      
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    try {
                        var take_api_params = `select * from npss_transactions where npsst_id='${params.Tran_Id}'`
                        var take_finastra_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_FINASTRA' and param_code='URL' and need_sync = 'Y and product_code='${params.PROD_CODE}'`
                        var take_pacs004_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_RETURN_PACK004' and param_code='URL' and need_sync = 'Y' and product_code='${params.PROD_CODE}'`
                        ExecuteQuery1(take_api_params, function (arrapiParams) {
                            if (arrapiParams.length > 0) {
                                ExecuteQuery1(take_finastra_url, async function (arrfinUrl) {
                                    if (arrfinUrl.length > 0) {
                                        var takereturncode = `select cbuae_return_code  from npss_trn_process_log  where  status = 'IP_RCT_RR_RETURN_READY' and uetr = '${arrapiParams[0].uetr}'`;
                                        ExecuteQuery1(takereturncode, async function (arrreturncode) {
                                            if (arrreturncode.length > 0) {
                                                let finastraRes = await callingFinastraapi(arrapiParams, arrfinUrl)
                                                if (finastraRes == 'SUCCESS' || finastraRes == 'Success' || finastraRes == 'success') {
                                                    ExecuteQuery1(take_pacs004_url, async function (arrp004url) {
                                                        if (arrp004url.length > 0) {

                                                            let pac004Res = await callingpacs004(arrp004url, arrapiParams, arrreturncode)
                                                            if (pac004Res == 'SUCCESS' || pac004Res == 'Success' || pac004Res == 'success') {
                                                                objresponse.status = "SUCCESS"
                                                                objresponse.data = "SUCCESS"
                                                                sendResponse(null, objresponse)
                                                            } else {
                                                                objresponse.status = "FAILURE"
                                                                objresponse.errdata =  "Pacs 004 api  Not success"
                                                                sendResponse(null, objresponse)
                                                            }
                                                        } else {
                                                            objresponse.status = "FAILURE"
                                                            objresponse.errdata = "Pacs 004 url Not Found"
                                                            sendResponse(null, objresponse)
                                                        }
                                                    })
                                                } else {
                                                    objresponse.status = "FAILURE"
                                                    objresponse.errdata = "Finastra api not success"
                                                    sendResponse(null, objresponse)
                                                }

                                            } else {
                                                objresponse.status = "FAILURE"
                                                objresponse.errdata = "CBUAE Return Code Not Found"
                                                sendResponse(null, objresponse)
                                            }
                                        })
                                    } else {
                                        objresponse.status = "FAILURE"
                                        objresponse.errdata = "No Finastra url found in System table"
                                        sendResponse(null, objresponse)
                                    }
                                })

                            } else {
                                objresponse.status = "FAILURE"
                                objresponse.errdata = "No Data found in Tran table"
                                sendResponse(null, objresponse)
                            }
                        })
                    }
                    catch (error) {
                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                        sendResponse(error, null);
                    }
                })


                function callingFinastraapi(arrTranparams, arrurl) {

                    return new Promise((resolve, reject) => {
                        try {
                            var apiName = 'NPSS IP REV RET FINASTRA'
                            var request = require('request');
                            var apiURL =
                                apiURL = arrurl[0].param_detail // apiURL + apiName
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                    "payload": {
                                        "process_type": arrTranparams[0].process_type,
                                        "cdtr_iban": arrTranparams[0].cdtr_iban,
                                        "intrbk_sttlm_amnt": arrTranparams[0].intrbk_sttlm_amnt,
                                        "account_currency": arrTranparams[0].account_currency,
                                        "uetr": arrTranparams[0].uetr
                                    }
                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }

                            var PrintInfo = {}
                            PrintInfo.url = apiURL || ''
                            PrintInfo.npsst_id = arrTranparams[0].npsst_id || ''
                            reqInstanceHelper.PrintInfo(serviceName, '------------FINASTRA API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);

                                } else {
                                    responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                    try {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------FINASTRA API Response JSON-------' + JSON.stringify(responseBodyFromImagingService), objSessionLogInfo);
                                    } catch (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------FINASTRA API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    }

                                //    var Responsedata = JSON.parse(responseBodyFromImagingService)
                                    resolve(responseBodyFromImagingService)
                                }
                            });

                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    })
                }
                function callingpacs004(arrurl, arrprocesslog, arrreturncode) {
                    return new Promise((resolve, reject) => {
                    try {
                        var apiName = 'NPSS IP RETURN PACS004'
                        var request = require('request');
                        var apiURL =
                            apiURL = arrurl[0]. param_detail// apiURL + apiName
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
                                "org_intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || ''


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
                    }})
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
