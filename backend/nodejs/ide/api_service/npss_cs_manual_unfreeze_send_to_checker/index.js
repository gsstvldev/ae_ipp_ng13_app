var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    

/*  Created By :   Siva Harish
Created Date : 25/04/2023
Modified By : 
Modified Date : 
Reason for : 
* 
*/
var serviceName = 'NPSS (CS) Manual Unfreeze Send to Checker'; //service name 
var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
var reqAuditLog = require($REFPATH + 'log/audit/AuditLog'); //audit log information
var reqFXDBInstance = require($REFPATH + 'instance/DBInstance'); // casandra db pointing
var reqInsHelper = require($REFPATH + 'common/InstanceHelper'); //  Response,error,info msg printing        
var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter'); //date formatter
var params = appRequest.body.PARAMS; //  Client input fromm Server
console.log("app headers=====================>", appRequest.headers);
var headers = appRequest.headers; // header details 
// headers["session-id"] = "STATIC-SESSION-KEEQB-4";
console.log("headers after adding session id ========>", headers);

var objSessionLogInfo = null; // set value is null
var mTranConn = "";
var request = require('request');
var momentTimezone = require("moment-timezone");
var success_status, success_process_status;
var elgobj = {};
var arrTranId
//console.log('**************************' + headers['session-id'])
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
        objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Manual Unfreeze Send to Checker';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSS (CS) Manual Unfreeze Send to Checker';
        // Get DB Connection 
        reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
            mTranConn = pSession; //  assign connection 
            reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                var PRCT_ID = prct_id
                //get prct id                              
                try {
                    var take_status = `Select success_process_status,success_status from core_nc_workflow_setup where rule_code='${params.RULE_CODE}' and eligible_status='${params.eligible_status}' and  eligible_process_status='${params.eligible_process_status}'`;
                    if (Array.isArray(params.npsstpl_id)) {
                        arrTranID = params.npsstpl_id.map(function (eachTran) { return eachTran.toString(); });
                    }
                    else {
                        arrTranID = [params.npsstpl_id.toString()];
                    }
                    TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                    ExecuteQuery1(take_status, function (arrSts) {
                        if (arrSts.length) {
                            success_status = arrSts[0].success_status;
                            success_process_status = arrSts[0].success_process_status;
                            let Takedata = `select * from npss_trn_process_log where npsstpl_id in ${TempTranID}`
                            ExecuteQuery1(Takedata, function (arrprocesslog) {
                                if (arrprocesslog.length > 0) {
                                    var arrCusTranInst = []
                                    for (let i = 0; i < arrprocesslog.length; i++) {
                                        var objCusTranInst = {};
                                        objCusTranInst.MSG_ID = arrprocesslog[i].msg_id || null
                                        objCusTranInst.PRCT_ID = PRCT_ID;
                                        objCusTranInst.REVERSAL_CODE = arrprocesslog[i].revrsal_code || null
                                        objCusTranInst.UETR = arrprocesslog[i].uetr;
                                        objCusTranInst.NPSSTRRD_REFNO = arrprocesslog[i].tran_ref_id || null
                                        objCusTranInst.PROCESS_NAME = 'Send to Checker'
                                        objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
                                        objCusTranInst.PROCESS_STATUS = success_process_status;
                                        objCusTranInst.STATUS = success_status;
                                        objCusTranInst.TENANT_ID = arrprocesslog[i].tenant_id;
                                        objCusTranInst.PROCESS_TYPE = arrprocesslog[i].process_type || null
                                        objCusTranInst.APP_ID = '215'
                                        objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                                        objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                                        objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                                        objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                                        objCusTranInst.CREATED_BY = params.CREATED_BY;
                                        objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                        objCusTranInst.T24_RETURN_CODE = arrprocesslog[i].t24_return_code || null
                                        objCusTranInst.CBUAE_RETURN_CODE = arrprocesslog[i].cbuae_return_code || null
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
                                        objCusTranInst.RESPONSE_CODE = arrprocesslog[i].response_code || null
                                        objCusTranInst.PROCESS_REF_NO = arrprocesslog[i].process_ref_no || null
                                        objCusTranInst.RESPONSE_DATA = arrprocesslog[i].response_data || null
                                        objCusTranInst.REQUEST_DATA_JSON = arrprocesslog[i].request_data_json || null
                                        objCusTranInst.RESPONSE_DATA_JSON = arrprocesslog[i].response_data_json || null
                                        objCusTranInst.EMIRATESID = arrprocesslog[i].emiratesid || null
                                        objCusTranInst.CUSTOMERNAME = arrprocesslog[i].customername || null
                                        objCusTranInst.CUSTOMERID = arrprocesslog[i].customerid || null
                                        objCusTranInst.COUNTRYOFBIRTH = arrprocesslog[i].countryofbirth || null
                                        objCusTranInst.CITYOFBIRTH = arrprocesslog[i].cityofbirth || null
                                        objCusTranInst.DATEOFBIRTH = arrprocesslog[i].dateofbirth || null
                                        objCusTranInst.AMOUNT = arrprocesslog[i].amount || null
                                        objCusTranInst.DBTR_IBAN = arrprocesslog[i].dbtr_iban || null
                                        objCusTranInst.TRAN_REF_ID = arrprocesslog[i].tran_ref_id || null
                                        objCusTranInst.ORG_STATUS = arrprocesslog[i].org_status || null
                                        objCusTranInst.EXT_IDEN_RETRY_VALUE = arrprocesslog[i].ext_iden_retry_value || null
                                        objCusTranInst.SYNC_VERSION = arrprocesslog[i].sync_version || null
                                        objCusTranInst.GM_MARGIN = arrprocesslog[i].gm_margin || null
                                        objCusTranInst.STATUS_RESP_AMOUNT = arrprocesslog[i].status_resp_amount || null
                                        objCusTranInst.STATUS_INTRBKSTTLMDT = arrprocesslog[i].status_intrbksttlmdt || null
                                        objCusTranInst.STATUS_ACCP_DATE = arrprocesslog[i].status_accp_date || null
                                        objCusTranInst.PROCESS_TIME = arrprocesslog[i].process_time || null
                                        objCusTranInst.ADDITIONAL_INFO = arrprocesslog[i].additional_info || null
                                        objCusTranInst.AMOUNT_CREDITED = arrprocesslog[i].amount_credited || null
                                        objCusTranInst.AMT_CR_LOC_CUR = arrprocesslog[i].amt_cr_loc_cur || null
                                        objCusTranInst.CHARGE_AMOUNT = arrprocesslog[i].charge_amount || null
                                        objCusTranInst.BUY_CURRENCY = arrprocesslog[i].buy_currency || null
                                        objCusTranInst.SELL_CURRENCY = arrprocesslog[i].sell_currency || null
                                        objCusTranInst.DEALT_AMOUNT = arrprocesslog[i].dealt_amount || null
                                        objCusTranInst.EXCHANGE_RATE = arrprocesslog[i].exchange_rate || null
                                        objCusTranInst.CONTRA_AMOUNT = arrprocesslog[i].contra_amount || null
                                        arrCusTranInst.push(objCusTranInst)

                                    }
                                    _BulkInsertProcessItem(arrCusTranInst, 'npss_trn_process_log', function callbackInsert(CusTranInsertRes) {
                                        try {
                                            if (CusTranInsertRes.length > 0) {
                                                objresponse.status = 'SUCCESS'
                                                objresponse.data = ""
                                                sendResponse(null, objresponse)
                                            } else {
                                                objresponse.status = 'FAILURE'
                                                objresponse.data = "Error in Table Insert"
                                                sendResponse(null, objresponse)
                                            }
                                        } catch (error) {
                                            objresponse.status = 'FAILURE'
                                            objresponse.data = error
                                            sendResponse(null, objresponse)
                                        }

                                    })
                                } else {
                                    objresponse.status = 'FAILURE'
                                    objresponse.data = "No data found in npss trn process log table"
                                    sendResponse(null, objresponse)
                                }

                            })

                        } else {
                            objresponse.status = 'FAILURE'
                            objresponse.data = "No Rule found in Workflow Table"
                            sendResponse(null, objresponse)
                        }
                    }

                    )

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
                    //fucntion to execute select query
                    function ExecuteQuery1(query, callback) {
                        reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                            try {
                                if (error) {
                                    //reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, "IDE_SERVICE_10005", "ERROR IN EXECUTE QUERY EXECUTION FUNCTION", error);
                                    sendResponse(error);
                                } else {
                                    if (result.rows.length > 0) {
                                        callback(result.rows);
                                    } else {
                                        callback([]);
                                    }
                                }
                            } catch (error) {
                                //reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, "IDE_SERVICE_10004", "ERROR IN EXECUTE QUERY FUNCTION", error);
                                sendResponse(error);
                            }
                        });
                    }


                } catch (error) {
                    reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10003', 'ERROR IN DB CONNECTION FUNCTION', error);
                }
            })
            //send response fucntion
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

        });
    } catch (error) {
        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
    }

})







});

module.exports = app;
