var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    /*  Created By :  Daseen
    Created Date : 28/10/2022
       
    */
    var serviceName = 'NPSS';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqXlsx = require('node-xlsx').default;
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var fs = require("fs");
    var reqAsync = require('async');
    var success_process_status, success_status;
    var Id = params.Id;
    var rule_code = params.RULE_CODE;
    var api_url;
    var mTranConn = "";
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {
                        var PRCT_ID = prct_id
                        var ApitrnId
                        var app_id
                        try {
                            var strSelectQuery = `select fx_resv_text1 from npss_merchant_proxy where npssmp_id='${params.npssmp_id}'`
                            ExecuteQuery1(strSelectQuery,function(arrresult)
                            {
                             if(arrresult[0].fx_resv_text1)
                             {
                                 var modified_by=params.CREATED_BY
                                 var modified_date=reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)
                                 var modified_name=params.CREATED_BY_NAME
                                 // var updtranqry = `update npss_transactions set  status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                 var strMerTagUpdtQry = `UPDATE npss_merchant_proxy  SET merchant_tag='${arrresult[0].fx_resv_text1}', PRCT_ID ='${PRCT_ID}', MODIFIED_BY = '${modified_by}',MODIFIED_DATE ='${modified_date }',MODIFIED_BY_NAME ='${ modified_name}', MODIFIED_CLIENTIP =' ${ objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET ='${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID ='${ objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC ='${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' WHERE npssmp_id='${params.npssmp_id}'and APP_ID ='${params.AppId}';`
                                 ExecuteQuery(strMerTagUpdtQry,function(status)
                                 {
                                     if(status=="SUCCESS")
                                     {
                                        objresponse.status="SUCCESS"
     
                                         sendResponse(null,objresponse)
                                     }
                                     else {
                                        objresponse.status = 'FAILURE';
                                         sendResponse(null, objresponse)
                                     }
                                 })
                            }
                         })
    
                            /*
                            //var urlqry = `Select param_detail from core_nc_system_setup where param_category = 'NPSS_REJECT_PACK002' and param_code = 'URL' and need_sync = 'Y'`
                            var seltranqry = `select distrinct(uetr) from npss_trn_process_log where status='${params.status}' and process_status='${params.process_status}' and  process_name in('Place Pacs002','Place Pacs008','Place Pacs007','Place Pacs004')`
                            // var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}' and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                            // var selplqry=`select tpl.cbuae_return_code,crn.return_description,tpl.npsstrrd_refno from npss_trn_process_log tpl inner join core_nc_return_codes crn on  tpl.cbuae_return_code=crn.return_code where npsstpl_id='${params.tpl_id}'`
 
                            ExecuteQuery1(seltranqry, function (arrlogresult) {
                                if (arrlogresult.length > 0) {
                                    reqAsync.forEachOfSeries(arrlogresult, async function (arrlogresultobj, i, nextobjctfunc) {
                                        let selsingletran = `select org_status,process_name,additional_info,uetr from npss_trn_process_log where uetr='${arrlogresultobj.uetr} order by npsstpl_id desc'`
                                        ExecuteQuery1(selsingletran, async function (arrsingletran) {
                                            if (arrsingletran.length > 0) {
                                                let processName = await findprocessName(arrsingletran);
                                                let prssStatus = await findProcessstatus(arrsingletran, processName)
                                                let commonObj = await prepareCommonpayload(arrsingletran, processName, prssStatus)
                                                let urlqry = `Select param_detail from core_nc_system_setup where param_category = 'NPSS_REJECT_PACK002' and param_code = 'URL' and need_sync = 'Y'`
                                                ExecuteQuery1(urlqry, async function (arrurl) {
                                                    if (arrurl.length > 0) {
                                                        let apicallstatus = await fn_DoAPIServiceCall(commonObj)
                                                        if (apicallstatus) {
                                                            let updlogtbl = `update npss_trn_process_log set additional_info='Y',,MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsstpl_id ='${arrsingletran[0].NPSSTPL_Id}'`
                                                            ExecuteQuery(updlogtbl, async function (arrupdlogtbl) {
                                                                if (arrupdlogtbl.length == 'SUCCEESS') {
                                                                    nextobjctfunc();
                                                                }
                                                                else {
                                                                    reqInstanceHelper.PrintInfo(serviceName, ".....................Additional info update not success................" + arrsingletran[0].NPSSTPL_Id, objSessionLogInfo);
                                                                    nextobjctfunc()
                                                                }
                                                            })
                                                        }
                                                    }
                                                    else {
                                                        reqInstanceHelper.PrintInfo(serviceName, ".....................NO URL FOUND ................." + arrsingletran[0].NPSSTPL_Id, objSessionLogInfo);
                                                        nextobjctfunc();
                                                    }
                                                })
                                            }
                                        })
                                    }, function () {
                                        objresponse.status = 'SUCCESS';
                                        sendResponse(null, objresponse)
                                    })
                                }
                                else {
                                    reqInstanceHelper.PrintInfo(serviceName, ".....................NO Tran FOUND in log table.................", objSessionLogInfo);
                                    objresponse.status = 'FAILURE';
                                    objresponse.msg = 'NO Tran FOUND in log table';
                                    sendResponse(null, objresponse)
                                }
                            })
 
                            function findprocessName(arrsingletran) {
                                return new Promise((resolve, reject) => {
                                    if (arrsingletran[0].process_name == 'Place Pacs002') {
                                        if (arrsingletran[0].org_status == 'IP_RCT_CC_POSTING_READY' || arrsingletran[0].org_status == 'IP_RCT_CC_STATUS_REPLIED' || arrsingletran[0].org_status == 'IP_RCT_PC_POSTING_READY' || arrsingletran[0].org_status == 'IP_RCT_PC_STATUS_REPLIED' || arrsingletran[0].org_status == 'IP_RCT_POSTING_READY' || arrsingletran[0].org_status == 'IP_RCT_STATUS_REPLIED') {
                                            resolve('Place Pacs002_1')
                                        } else if (arrsingletran[0].org_status == 'IP_RCT_REVREQ_REJ_REPLIED') {
                                            resolve('Place Pacs002_2')
                                        }
                                        else {
                                            resolve('Error')
                                        }
                                    }
                                })
                            }
                            function findProcessstatus(arrsingletran, processName) {
                                return new Promise((resolve, reject) => {
                                    if (arrsingletran[0].org_status == 'IP_RCT_CC_POSTING_READY' || arrsingletran[0].org_status == 'IP_RCT_PC_POSTING_READY' || arrsingletran[0].org_status == 'IP_RCT_POSTING_READY') {
                                        resolve('RCTInProcess')
                                    }
                                    else if (arrsingletran[0].org_status == 'IP_RCT_CC_STATUS_REPLIED' || arrsingletran[0].org_status == 'IP_RCT_STATUS_REPLIED') {
                                        resolve('RCTCompleted')
                                    }
                                    else if(arrsingletran[0].org_status == 'IP_RCT_PC_STATUS_REPLIED'){
                                        resolve('IAVFailure')
                                    }
                                })
                            }
                            function prepareCommonpayload(arrsingletran, processName, prssStatus) {
                                let commonObj;
                                return new Promise((resolve, reject) => {
                                    let selpayload = `select org_status,process_name,additional_info,uetr,CBUAE_RETURN_CODE from npss_trn_process_log where uetr='${arrsingletran[0].uetr}' and additional_info ISNULL`
                                    ExecuteQuery1(seltranqry, function (arrlpayload) {
                                        if (arrlpayload.length > 0) {
                                            let selreqresparams = `select fn_pcidss_decrypt(msg_id,$PCIDSS_KEY ) as msg_id,npsstrrd_refno,parent_npsstrrd_refno,process_ref_no from npss_trn_req_resp_dtls where status='${arrlpayload[0].org_status}' and uetr='${arrlpayload[0].uetr}' and process_status='${arrsingletran[0].prssStatus}'`
                                            ExecuteQuery1(selreqresparams, function (arrreqresparams) {
                                                if (arrreqresparams.length > 0) {
 
                                                    commonObj.pacs = arrsingletran[0].msg_data,
                                                        commonObj.pacsprocess_name = arrsingletran[0].process_name,
                                                        commonObj.status = arrsingletran[0].org_status,
                                                        commonObj.process_status = prssStatus,
                                                        commonObj.uetr = arrsingletran[0].uetr,
                                                        commonObj.process_type = arrsingletran[0].process_type,
                                                        commonObj.processing_system = arrsingletran[0].processing_system,
                                                        commonObj.msg_id = arrreqresparams[0].msg_id
                                                    if (processName != 'Place Pacs008_1' || processName != 'Place Pacs008_2' || processName != 'Place Pacs008_2') {
                                                        commonObj.npsstrrd_refno = arrreqresparams[0].npsstrrd_refno
                                                    }
 
                                                    resolve(commonObj);
                                                }
                                                else {
                                                    resolve('No Data Found log');
                                                }
                                            })
                                        }
                                        else {
                                            resolve('No Data Found req res');
                                        }
                                    })
                                })
                            }*/
 
                            function ExecuteQuery1(query, callback) {
                                reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                                    try {
                                        if (error) {
                                            sendResponse(error)
                                        } else {
                                            if (result.rows.length > 0) {
                                                callback(result.rows);
                                            } else {
                                                callback([]);
                                            }
                                        }
                                    } catch (error) {
                                        sendResponse(error)
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
 
                        } catch (error) {
                            sendResponse(error)
                        }
                    }
 
 
                    // Do API Call for Service 
                 /*   function fn_DoAPIServiceCall(tranresult, tplresult, url, rule_code, hdrresult, callbackapi) {
                        try {
                            var request = require('request');
                            var apiURL =
                                apiURL = url // apiURL + apiName
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                    "cr_sort_code": tranresult[0].cr_sort_code,
                                    "dr_sort_code": tranresult[0].dr_sort_code,
                                    //"hdr_msg_id": tranresult[0].hdr_msg_id,
                                    //"hdr_created_date": tranresult[0].hdr_created_date,
                                    "hdr_msg_id": hdrresult[0].msg_id,
                                    "hdr_created_date": hdrresult[0].fx_resv_text1,
 
                                    "hdr_total_amount": tranresult[0].hdr_total_amount,
                                    "payment_endtoend_id": tranresult[0].payment_endtoend_id,
                                    "uetr": tranresult[0].uetr,
                                    "tran_ref_id": tranresult[0].tran_ref_id,
                                    "active_status": 'RJCT',
                                    "clrsysref": tranresult[0].clrsysref,
                                    "rsn_code": tplresult[0].cbuae_return_code,
 
                                    "parent_npsstrrd_refno": tplresult[0].npsstrrd_refno
 
                                },
                                headers: {
                                    'content-type': 'application/json'
                                }
                            };
 
 
                            reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error);
                                } else {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    callbackapi(responseBodyFromImagingService)
                                }
                            });
                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error);
                        }
                    }*/
 
 
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
            })
        } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }
    })
 
 
 
 
 
 
 
 

});

module.exports = app;
