var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    


/*  Created By :sIVA hARISH
Created Date : 31-12-2022
Modified By : Siva Harish
Modified Date : 24/01/2023
Reason for : 
 
*/
var serviceName = ' NPSS (CS) Outward Manual Initiation ';
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
var dob = params.DBTR_BIRTH_DATE;
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
        objSessionLogInfo.HANDLER_CODE = ' NPSS (CS) Outward Manual Initiation ';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = ' NPSS (CS) Outward Manual Initiation ';
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
                    try {
                        var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                         ExecuteQuery1(ruleqry, function (arrrule) {
                            try {
                                if (arrrule.length > 0) {
                                    success_process_status = arrrule[0].success_process_status;
                                    success_status = arrrule[0].success_status;
                                    var TakedatafrmTrn = `select * from npss_transactions where npsst_id = '${params.Tran_Id}'`
                                    ExecuteQuery1(TakedatafrmTrn, function (arrdata) {
                                        if (arrdata.length > 0) {
                                            var arrCusTranInst = [];
                                            var objCusTranInst = {};
  
                                            objCusTranInst.CR_SORT_CODE = arrdata[0].dr_sort_code;
                                            objCusTranInst.PRCT_ID = PRCT_ID;
                                            objCusTranInst.DR_SORT_CODE = params.cr_sort_code;
                                             objCusTranInst.HDR_MSG_ID = arrdata[0].hdr_msg_id;
                                            objCusTranInst.UETR = arrdata[0].uetr;
                                            objCusTranInst.PROCESS_TYPE = 'OP';
                                            objCusTranInst.DBTR_IBAN = arrdata[0].cdtr_iban;
                                            objCusTranInst.CDTR_IBAN = arrdata[0].dbtr_iban
                                            objCusTranInst.DBTR_ACCT_NAME = arrdata[0].cdtr_acct_name
                                            objCusTranInst.CDTR_ACCT_NAME = arrdata[0].dbtr_acct_name
                                            objCusTranInst.DBTR_PHONE_NO = arrdata[0].cdtr_phone_no
                                            objCusTranInst.CDTR_PHONE_NO = arrdata[0].dbtr_phone_no
                                            objCusTranInst.DBTR_EMAIL_ID = arrdata[0].cdtr_email_id
                                            objCusTranInst.CDTR_EMAIL_ID = arrdata[0].dbtr_email_id
                                            objCusTranInst.DBTR_DOCUMENT_ID = arrdata[0].cdtr_document_id
                                            objCusTranInst.CDTR_DOCUMENT_ID = arrdata[0].dbtr_document_id
                                            objCusTranInst.TRAN_INFO = params.Tran_Id
                                            objCusTranInst.PROCESS_STATUS = success_process_status;
                                            objCusTranInst.STATUS = success_status;
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
                                            _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRANSACTIONS', function callbackInsert(CusTranInsertRes) {
                                                if (CusTranInsertRes.length > 0) {
                                                    var arrTrnPrslog = [];
                                                    var objcusTranprslog = {};
                                                    objcusTranprslog.MSG_ID = arrdata[0].hdr_msg_id;
                                                    objcusTranprslog.PRCT_ID = PRCT_ID;
                                                    objcusTranprslog.UETR = arrdata[0].uetr;
                                                    objcusTranprslog.NPSSTRRD_REFNO = arrdata[0].tran_ref_id;
                                                    objcusTranprslog.PROCESS_NAME = 'Initiate Dispute Tran'
                                                    objcusTranprslog.PROCESSING_SYSTEM = 'NPSS';
                                                    objcusTranprslog.PROCESS_STATUS = success_process_status;
                                                    objcusTranprslog.STATUS = success_status;
                                                    objcusTranprslog.TENANT_ID = params.TENANT_ID;
                                                    objcusTranprslog.APP_ID = '215'
                                                    objcusTranprslog.DT_CODE = 'DT_1304_1665901130705'
                                                    objcusTranprslog.DTT_CODE = 'DTT_1304_1665901217208'
                                                    objcusTranprslog.DT_DESCRIPTION = 'transaction_group'
                                                    objcusTranprslog.DTT_DESCRIPTION = 'Transaction'
                                                    objcusTranprslog.CREATED_BY = params.CREATED_BY;
                                                    objcusTranprslog.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                                    objcusTranprslog.CREATED_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                                    objcusTranprslog.MODIFIED_BY = "";
                                                    objcusTranprslog.MODIFIED_BY_NAME = "";
                                                    objcusTranprslog.MODIFIED_DATE = null;
                                                    objcusTranprslog.SYSTEM_ID = params.SYSTEM_ID;
                                                    objcusTranprslog.SYSTEM_NAME = params.SYSTEM_NAME;
                                                    objcusTranprslog.CREATED_BY_STS_ID = "";
                                                    objcusTranprslog.MODIFIED_BY_STS_ID = "";
                                                    objcusTranprslog.created_clientip = objSessionLogInfo.CLIENTIP;
                                                    objcusTranprslog.created_tz = objSessionLogInfo.CLIENTTZ;
                                                    objcusTranprslog.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                                    objcusTranprslog.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                                    objcusTranprslog.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                                    objcusTranprslog.routingkey = headers.routingkey;
                                                    arrTrnPrslog.push(objcusTranprslog)
                                                    _BulkInsertProcessItem(arrTrnPrslog, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTrnPrslog) {
                                                        if (CusTrnPrslog.length > 0) {
                                                            var UpdateTrnProcessLog = `update npss_trn_process_log set  additional_info = 'Maker_Initiated',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsstpl_id ='${params.NPSSTPL_Id}'`
                                                            ExecuteQuery(UpdateTrnProcessLog, function (arrUpdPrsLog) {
                                                                if (arrUpdPrsLog == 'SUCCESS') {
                                                                    objresponse.status = 'SUCCESS';
                                                                    sendResponse(null, objresponse);
                                                                } else {
                                                                    objresponse.status = 'No Data Updated in TranProcessLog Table';
                                                                    sendResponse(null, objresponse);
                                                                }
                                                            })
                                                        } else {
                                                            objresponse.status = 'Data not insert in trn process log';
                                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                            sendResponse(null, objresponse)
                                                        }
                                                    })
                                                } else {
                                                    objresponse.status = 'Failure in Tran Table Insert';
                                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                    sendResponse(null, objresponse)
                                                }

                                            })

                                        } else {
                                            objresponse.status = 'No data found in npss tran table'
                                            sendResponse(null, objresponse)
                                        }

                                    })


                                } else {

                                    objresponse.data.status = 'No data found in core_nc_workflow_setup'
                                    sendResponse(null, objresponse)
                                }

                            } catch (error) {
                                sendResponse(error)
                            }
                        });

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





                //Send Response Function Definition
                function sendResponse(error, response) {
                    try {
                        if (error) {
                            reqTranDBInstance.Commit(mTranConn, false, function callbackres(res) {
                                reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10005', '', error);
                            });
                        } else {
                            reqTranDBInstance.Commit(mTranConn, true, function callbackres(res) {
                                reqInstanceHelper.SendResponse(serviceName, appResponse, response, objSessionLogInfo)
                            });
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
