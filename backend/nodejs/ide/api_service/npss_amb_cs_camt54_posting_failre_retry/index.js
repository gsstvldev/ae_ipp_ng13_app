var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    


    try {
        /*   Created By :Daseen
        Created Date :05-08-2024 
        WI:3954 */
        var serviceName = 'NPSS AMB (CS) CAMT54 Posting failure Retry';
        var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
        var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
        var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail
        var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
        var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
        var params = appRequest.body.PARAMS; //  Client input fromm Server
        var headers = appRequest.headers; // header details
        var objSessionLogInfo = null; // set value is null
        var mTranConn = "";
        var success_process_status
        var success_status
        var processName
        var arrTranID
        var TempTranID
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
                objSessionLogInfo.HANDLER_CODE = 'NPSS AMB (CS) CAMT54 Posting failure Retry';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS AMB (CS) CAMT54 Posting failure Retry';
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection    
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                        try {
                            var PRCT_ID = prct_id
                            var take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='POSTING_FAILURE_RETRY' and param_code='URL' and need_sync = 'Y'`;
                            var take_status = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = '${params.RULE_CODE}' and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                            ExecuteQuery1(take_status, function (arrrule) {
                                if (arrrule.length > 0) {
                                    success_process_status = arrrule[0].success_process_status;
                                    success_status = arrrule[0].success_status;
                                    if (Array.isArray(params.Tran_Id)) {
                                        arrTranID = params.Tran_Id.map(function (eachTran) {
                                            return eachTran.toString();
                                        });
                                    } else {
                                        arrTranID = [params.Tran_Id.toString()];
                                    }
                                    TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';

                                    var TakeTrnData = `select nt.npsst_id,nt.HDR_MSG_ID ,nt.uetr,nt.hdr_settlement_date,nt.intrbk_sttlm_cur,nt.intrbk_sttlm_amnt,nt.dbtr_iban,nt.cdtr_iban,nt.uetr ,clog.REQUEST_DATA_JSON,clog.msg_id, nt.PROCESS_TYPE,clog.process_name,nt.processing_system,nt.process_status,nt.status from NPSS_TRANSACTIONS nt inner join NPSS_CAMT_PROCESS_LOG clog on clog.process_NAME = 'Camt54posting' and  clog.uetr= nt.uetr    where nt. npsst_id in  ${TempTranID}`
                                    ExecuteQuery1(TakeTrnData, function (arrprocesslog) {
                                        if (arrprocesslog.length > 0) {
                                            var arrCusTranInst = [];
                                            for (let i = 0; i < arrprocesslog.length; i++) {
                                                var objCusTranInst = {};
                                                objCusTranInst.MSG_ID = arrprocesslog[i].hdr_msg_id;
                                                objCusTranInst.PRCT_ID = PRCT_ID;

                                                objCusTranInst.UETR = arrprocesslog[i].uetr;
                                                objCusTranInst.PROCESS_TYPE = arrprocesslog[i].process_type;
                                                objCusTranInst.PROCESS_TIME = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                                objCusTranInst.PROCESS_NAME = arrprocesslog[i].process_name;
                                                objCusTranInst.PROCESSING_SYSTEM = arrprocesslog[i].processing_system;
                                                objCusTranInst.PROCESS_STATUS = arrprocesslog[i].process_status;
                                                objCusTranInst.STATUS = arrprocesslog[i].status;
                                                objCusTranInst.TENANT_ID = params.TENANT_ID;
                                                objCusTranInst.APP_ID = '215'
                                                objCusTranInst.DT_CODE = 'DT_1304_1672471156312'
                                                objCusTranInst.DTT_CODE = 'DTT_1304_1721132786653'
                                                objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                                                objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                                                objCusTranInst.CREATED_BY = params.CREATED_BY;
                                                objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                                objCusTranInst.CREATED_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                                objCusTranInst.MODIFIED_BY = "";
                                                objCusTranInst.MODIFIED_BY_NAME = "";
                                                objCusTranInst.MODIFIED_DATE = null;
                                                objCusTranInst.SYSTEM_ID = params.SYSTEM_ID;
                                                objCusTranInst.SYSTEM_NAME = params.SYSTEM_NAME;
                                                objCusTranInst.CREATED_BY_STS_ID = "";
                                                objCusTranInst.MODIFIED_BY_STS_ID = "";
                                                objCusTranInst.created_clientip = objSessionLogInfo.CLIENTIP;
                                                objCusTranInst.created_tz = objSessionLogInfo.CLIENTTZ;
                                                objCusTranInst.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                                objCusTranInst.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                                objCusTranInst.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                                objCusTranInst.routingkey = headers.routingkey;
                                                arrCusTranInst.push(objCusTranInst)
                                            }
                                            _BulkInsertProcessItem(arrCusTranInst, 'NPSS_CAMT_PROCESS_LOG',  function callbackInsert(CusTranInsertRes) {
                                                if (CusTranInsertRes.length > 0) {
                                                    ExecuteQuery1(take_api_url, async function (arrUrl) {
                                                        if (arrUrl.length > 0) {
                                                            let apiRes = await fnDoapicall(arrprocesslog, arrUrl)
                                                            if (apiRes == 'SUCCESS') {
                                                                objresponse.status = 'SUCCESS';

                                                                sendResponse(null, objresponse)
                                                            } else if(apiRes == 'SUSPECIOUS'){
                                                                objresponse.status = 'Suspicious in API CALL';
                                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "api call not success", apiRes);
                                                                sendResponse(null, objresponse)
                                                            }else{
                                                                objresponse.status = 'Failure in API CALL';
                                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "api call not succes", apiRes);
                                                                sendResponse(null, objresponse)
                                                            }
                                                        } else {
                                                            objresponse.status = 'No API URL Found';
                                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "URL not found", result);
                                                            sendResponse(null, objresponse)
                                                        }
                                                    })

                                                } else {
                                                    objresponse.status = 'Error in NPSS_CAMT_PROCESS_LOG Insert';
                                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", apiRes);
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
                                else {
                                    objresponse.status = "No Data found in core nc workflow table"
                                    sendResponse(null, objresponse)
                                }
                            })
                        }
                        catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    })

                    function fnDoapicall(trndata,url) {
                        return new Promise((resolve, reject)=>{

                            try {

                                var request = require('request');
                                var apiURL =
                                    apiURL = url[0].param_detail // apiURL + apiName
                                var options = {
                                    url: apiURL,
                                    timeout: 18000000,
                                    method: 'POST',
                                    json: {


                                        "payload": {
                                         
                                            "hdr_settlement_date": trndata[0].hdr_settlement_date,
                                            "intrbk_sttlm_cur": trndata[0].intrbk_sttlm_cur,
                                            "intrbk_sttlm_amnt": trndata[0].intrbk_sttlm_amnt,
                                            "dbtr_iban": trndata[0].dbtr_iban,
                                            "cdtr_iban": trndata[0].cdtr_iban,
                                            "uetr": trndata[0].uetr,
                                           
                                        }
                                    },
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                }

                                var PrintInfo = {}
                                PrintInfo.url = url[0].param_detail
                                PrintInfo.hdr_settlement_date = trndata[0].hdr_settlement_date || ''
                                PrintInfo.currency = trndata[0].intrbk_sttlm_cur || ''

                                reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(options), objSessionLogInfo);

                                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                    if (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                        sendResponse(error, null);

                                    } else {
                                        try {
                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' +  JSON.stringify(responseBodyFromImagingService), objSessionLogInfo);
                                        
                                            var responseBody = JSON.parse(responseBodyFromImagingService)
                                            resolve(responseBody)
                                        } catch (error) {
                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' +  JSON.stringify(responseBodyFromImagingService), objSessionLogInfo);
                                          
                                            var responseBody = responseBodyFromImagingService
                                            resolve(responseBody)
                                        }
                                    }
                                });
                            } catch (error) {
                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                sendResponse(error, null);
                            }
                        })
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
