var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
    






    /*  Created By :Daseen
    Created Date : 08-08-2023
    
     
    */
    var serviceName = 'NPSS Reversal Cancel';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS Reversal Cancel';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS Reversal Cancel';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {
                        var PRCT_ID = prct_id
                        var success_process_status
                        var success_status
                        var extend_retry_value
                        try {
                            var ruleqry = `select success_process_status,success_status,processing_system,process_type  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}'and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}' and product_code='${params.PROD_CODE}' `
                            ExecuteQuery1(ruleqry, async function (arrrule) {
                                if (arrrule.length > 0) {
                                    success_process_status = arrrule[0].success_process_status;
                                    success_status = arrrule[0].success_status;
                                    var TakedatafrmTrn = `select fn_pcidss_decrypt(cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identi,* from npss_transactions where npsst_id = '${params.Id}'`

                                    ExecuteQuery1(TakedatafrmTrn, async function (arrdata) {
                                        if (arrdata.length > 0) { 
                                            var arrCusTranInst = [];
                                            var objCusTranInst = {};

                                            objCusTranInst.MSG_ID = arrdata[0].hdr_msg_id;
                                            objCusTranInst.PRCT_ID = PRCT_ID;
                                            objCusTranInst.REVERSAL_CODE = params.reversalcode
                                            objCusTranInst.UETR = arrdata[0].uetr;
                                            objCusTranInst.NPSSTRRD_REFNO = arrdata[0].tran_ref_id;
                                            objCusTranInst.PROCESS_NAME = 'Cancel Reversal'
                                            objCusTranInst.PROCESSING_SYSTEM = arrrule[0].processing_system;
                                            objCusTranInst.PROCESS_TYPE = arrrule[0].process_type;
                                            objCusTranInst.PROCESS_STATUS = success_process_status;
                                            objCusTranInst.STATUS = success_status;
                                            // objCusTranInst.CBUAE_RETURN_CODE = params.CBUAE_RETURN_CODE;
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
                                                    var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='RCT_REV_CANCEL_REQ' and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}' and  product_code='${params.PROD_CODE}' `
                                                    ExecuteQuery1(ruleqry, function (arrsts) {
                                                        var updtranqry
                                                        if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') { 
                                                            updtranqry = `update npss_transactions set  maker = '${params.CREATED_BY_NAME}',status='${arrsts[0].success_status}',process_status='${arrsts[0].success_process_status}',remarks = '${params.remarks}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                                        }else{
                                                            updtranqry = `update npss_transactions set checker = '${params.CREATED_BY_NAME}', status='${arrsts[0].success_status}',process_status='${arrsts[0].success_process_status}',remarks = '${params.remarks}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                                        }
                                                        
                                                        ExecuteQuery(updtranqry, function (uptranresult) {
                                                            if (uptranresult == 'SUCCESS') {
                                                                objresponse.status = 'SUCCESS';
                                                                sendResponse(null, objresponse)
                                                            } else {
                                                                objresponse.status = 'Failure in Tran Status Update';
                                                                sendResponse(null, objresponse)
                                                            }
                                                        })
                                                    })



                                                } else {
                                                    objresponse.status = 'Error in TrnProcessLog Table Insert';
                                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                    sendResponse(null, objresponse)
                                                }

                                            })
                                        }
                                    })
                                } else {
                                    objresponse.status = 'No data found in core_nc_workflow_setup';
                                    objresponse.data.msg = 'No data found in core_nc_workflow_setup'
                                    sendResponse(null, objresponse)
                                }
                                })

                        } catch (error) {
                            sendResponse(error)
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
