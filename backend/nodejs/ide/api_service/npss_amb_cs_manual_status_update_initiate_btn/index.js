var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');
var app = express.Router();
app.post('/', function (appRequest, appResponse, next) {
    /*  Created By :Suresh
    Created Date :01-07-2024
    */
    var serviceName = 'NPSS (CS) Manual Status Update Initiation';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var reqAsync = require('async');
    var mTranConn = "";
    var objresponse = {
        'status': 'FAILURE',
        'data': {},
        'msg': ''
    }; // Response to Client
    // Assign function for loginformation and session info
    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
        try {
            objSessionLogInfo = objLogInfo; // Assing log information
            // Log Viewer Setup
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Manual Status Update Initiation';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) Manual Status Update Initiation';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {
                        var PRCT_ID = prct_id
                        try {
                            var takedatafrmuetr = `select *  from NPSS_TRANSACTIONS where uetr='${params.UETR}'and status = '${params.eligible_status}' and process_status = '${params.eligible_process_status}' `
                            ExecuteQuery1(takedatafrmuetr, async function (arrdata) {
                                if (arrdata.length > 0) {
                                    var takerescode = `select response_code from npss_trn_process_log ntpl where process_name = 'Receive Pacs002' and process_type = 'OP' and uetr = '${params.UETR}' order by npsstpl_id desc limit 1;`
                                    ExecuteQuery1(takerescode, async function (arrrescode) {
                                        if (arrrescode.length > 0) {
                                            var responsecode = arrrescode[0].response_code
                                            //   fn_doapicall(arrdata, responsecode, function (result) {
                                            // if (result == 'SUCCESS') {
                                            var Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
                                            ExecuteQuery1(Takekafkaurl, async function (arrurl) {
                                                if (arrurl.length > 0) {
                                                    queueres = await sendqueue(arrdata, arrurl, responsecode)
                                                    if (queueres == 'SUCCESS') {
                                                        var arrCusTranInst = [];
                                                        var objCusTranInst = {};
                                                        objCusTranInst.MSG_ID = arrdata[0].hdr_msg_id;
                                                        objCusTranInst.PRCT_ID = PRCT_ID;
                                                        objCusTranInst.UETR = arrdata[0].uetr;
                                                        objCusTranInst.NPSSTRRD_REFNO = arrdata[0].tran_ref_id;
                                                        objCusTranInst.PROCESS_NAME = 'Manual Statue Update API Call'
                                                        objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
                                                        objCusTranInst.PROCESS_TYPE = 'OP';
                                                        objCusTranInst.PROCESS_STATUS = 'RCTNotification';
                                                        objCusTranInst.STATUS = 'OP_NOTIFIED';
                                                        objCusTranInst.TENANT_ID = params.TENANT_ID;
                                                        objCusTranInst.APP_ID = '215'
                                                        objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                                                        objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
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
                                                        _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTranInsertRes) {
                                                            if (CusTranInsertRes.length > 0) {
                                                                objresponse.status = 'SUCCESS';
                                                                objresponse.data.msg = 'SUCCESS'
                                                                sendResponse(null, objresponse)
                                                            }
                                                            else {
                                                                objresponse.status = 'Table insert error NPSS_TRN_PROCESS_LOG';
                                                                objresponse.data.msg = 'Table insert error NPSS_TRN_PROCESS_LOG'
                                                                sendResponse(null, objresponse)
                                                            }
                                                        })
                                                    }
                                                    else {
                                                        objresponse.status = 'FAILED send data to notification Queue';
                                                        objresponse.errdata = "FAILED send data to notification Queue'"
                                                        sendResponse(null, objresponse)
                                                    }
                                                } else {
                                                    objresponse.status = 'FAILURE';
                                                    objresponse.errdata = "kafka Api url not found"
                                                    sendResponse(null, objresponse)
                                                }
                                            })
                                            // }
                                            // else {
                                            //     objresponse.status = 'Api call faiure';
                                            //     objresponse.data.msg = 'Api call faiure'
                                            //     sendResponse(null, objresponse)
                                            // }
                                            // })
                                        }
                                        else {
                                            objresponse.status = 'No data found in npss_trn_process_log';
                                            objresponse.data.msg = 'No data found in npss_trn_process_log'
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                }
                                else {
                                    objresponse.status = 'No data found in NPSS_TRANSACTIONS';
                                    objresponse.data.msg = 'No data found in NPSS_TRANSACTIONS'
                                    sendResponse(null, objresponse)
                                }
                            })
                        } catch (error) {
                            sendResponse(error)
                        }
                    }

                    function sendqueue(arrdata, arrurl, responsecode) {
                        return new Promise((resolve, reject) => {
                            var reason_code
                            var npsst_refno
                            if (responsecode == 'ACCP') {
                                statusCode = 'MD06',
                                    statusDesc = 'failure'
                            }
                            else if (responsecode == 'RJCT') {
                                statusCode = 'AC06',
                                    statusDesc = 'Blocked Account'
                            }
                            else {
                                statusCode = '',
                                    statusDesc = ''
                            }
                            var request = require('request');
                            var options = {
                                url: arrurl[0].param_detail,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                    batch_name: "NOTIFICATION-Q",
                                    data: {
                                        "payload": {
                                            "OrigChannelID": arrdata[0].channel_id,
                                            "TransactionDateTime": arrdata[0].created_date,
                                            "channelReferenceNo": arrdata[0].payment_endtoend_id,
                                            "ChannelAdditionalReferenceNumber": "",
                                            "cbsRefNumber": "",
                                            "orderingCustomerAccount": arrdata[0].dbtr_iban,
                                            "orderingCustomerName": arrdata[0].dbtr_acct_name,
                                            "instructedAmount": arrdata[0].intrbk_sttlm_amnt,
                                            "beneficiaryAccount": arrdata[0].cdtr_iban,
                                            "beneficiaryAccountName": arrdata[0].cdtr_acct_name,
                                            "statusCode": statusCode,
                                            "statusDesc": statusDesc,
                                            "process_name": 'PAYMENT_STATUS_REPORT',
                                            "uetr": arrdata[0].uetr,
                                            "reqRefNo": arrdata[0].channel_id,
                                            "benRefNo": arrdata[0].channel_id,
                                            "wsiRefNo": arrdata[0].tran_ref_id
                                        }
                                    }
                                },
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }
                            if (arrurl.account_currency == 'AED' || arrurl.account_currency == '' || arrurl.account_currency == undefined || arrurl.account_currency == null) {
                                options.json.data.payload.intrbk_sttlm_amnt = arrurl.intrbk_sttlm_amnt || '';
                            } else {
                                options.json.data.payload.cdtr_amount = arrurl.intrbk_sttlm_amnt || '';
                                options.json.data.payload.dbtr_amount = ''
                            }
                            var PrintInfo = {}
                            PrintInfo.url = arrurl[0].param_detail
                            reqInstanceHelper.PrintInfo(serviceName, '------------ORR API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                            request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                if (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------ ORR API ERROR-------' + error, objSessionLogInfo);
                                    sendResponse(error, null);
                                } else {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------ORR API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                    resolve('SUCCESS')
                                }
                            });
                        },
                        )
                    }
                    // Do API Call for Service 
                    function fn_doapicall(arrdata, responsecode, callbackapi) {
                        try {
                            if (responsecode == 'ACCP') {
                                statusCode = 'MD06',
                                    statusDesc = 'failure'
                            }
                            else if (responsecode == 'RJCT') {
                                statusCode = 'AC06',
                                    statusDesc = 'Blocked Account'
                            }
                            else {
                                statusCode = '',
                                    statusDesc = ''
                            }
                            var apiName = 'INVOKE STATUS UPDATE API'
                            var request = require('request');
                            var apiURL =
                                apiURL = url // apiURL + apiName
                            var options = {
                                url: apiURL,
                                timeout: 18000000,
                                method: 'POST',
                                json: {
                                    "OrigChannelID": arrdata[0].channel_id,
                                    "TransactionDateTime": arrdata[0].created_date,
                                    "channelReferenceNo": arrdata[0].payment_endtoend_id,
                                    "ChannelAdditionalReferenceNumber": "",
                                    "cbsRefNumber": "",
                                    "orderingCustomerAccount": arrdata[0].dbtr_iban,
                                    "orderingCustomerName": arrdata[0].dbtr_acct_name,
                                    "instructedAmount": arrdata[0].intrbk_sttlm_amnt,
                                    "beneficiaryAccount": arrdata[0].cdtr_iban,
                                    "beneficiaryAccountName": arrdata[0].cdtr_acct_name,
                                    "statusCode": statusCode,
                                    "statusDesc": statusDesc,
                                    "process_name": 'PAYMENT_STATUS_REPORT',
                                    "uetr": arrdata[0].uetr,
                                    "reqRefNo": arrdata[0].channel_id,
                                    "benRefNo": arrdata[0].channel_id,
                                    "wsiRefNo": arrdata[0].tran_ref_id

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
                                    callbackapi(responseBodyFromImagingService)
                                }
                            });

                        } catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
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
            })
        } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }
    })
});

module.exports = app;
