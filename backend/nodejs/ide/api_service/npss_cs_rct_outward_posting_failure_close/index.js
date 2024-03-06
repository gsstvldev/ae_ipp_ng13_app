var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    try {
        /*   Created By :Siva Harish
        Created Date :24-02-2023
       changing update query 25/04/2023
        */
        var serviceName = 'NPSS (CS) RCT Outward Posting Failure Close';
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
        var mTranConn = "";
        var addquery = "";
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
                objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) RCT Outward Posting Failure Close';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS (CS) RCT Outward Posting Failure Close';
                var cus_iban;
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection     
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                        try {
                            var PRCT_ID = prct_id
                            var take_status = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = '${params.Rule_Code}' and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
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
                                    if (params.Roleid == '705' || params.Roleid == 705) {
                                        processName = 'Manual Close - Maker'
                                    } else {
                                        processName = 'Manual Close - Checker'
                                    }
                                    var TakeTrnData = `select * from npss_transactions where npsst_id in ${TempTranID}`
                                    ExecuteQuery1(TakeTrnData, function (arrprocesslog) {
                                        if (arrprocesslog.length > 0) {
                                            var arrCusTranInst = [];
                                            for (let i = 0; i < arrprocesslog.length; i++) {
                                              
                                                var objCusTranInst = {};

                                                objCusTranInst.MSG_ID = arrprocesslog[i].hdr_msg_id||'0';
                                                objCusTranInst.PRCT_ID = PRCT_ID;
                                                objCusTranInst.UETR = arrprocesslog[i].uetr;
                                                objCusTranInst.NPSSTRRD_REFNO = arrprocesslog[i].tran_ref_id;
                                                objCusTranInst.PROCESS_TYPE = 'IP'
                                                objCusTranInst.PROCESS_TIME = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                                objCusTranInst.PROCESS_NAME = processName
                                                objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
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

                                            }


                                            _BulkInsertProcessItem(arrCusTranInst, 'npss_trn_process_log', function callbackInsert(CusTranInsertRes) {
                                                if (CusTranInsertRes.length > 0) {
                                                     var UpdateTrnTbl
                                                    if (params.Roleid == 705 || params.Roleid == '705' || params.Roleid == 737 || params.Roleid == '737') {
                                                        UpdateTrnTbl = `update npss_transactions set maker = '${params.CREATED_BY_NAME}', status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id in ${TempTranID} `
                                                    }else{
                                                        UpdateTrnTbl = `update npss_transactions set checker = '${params.CREATED_BY_NAME}', status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id in ${TempTranID} `
                                                    }
                                                    ExecuteQuery(UpdateTrnTbl, function (uptranresult) {
                                                        if (uptranresult == 'SUCCESS') {
                                                            objresponse.status = 'SUCCESS';   
                                                            sendResponse(null, objresponse)
                                                        }else{
                                                            objresponse.status = 'Error in NPSS_TRN_PROCESS_LOG Table Update';
                                                            sendResponse(null, objresponse)
                                                          
                                                        }
                                                    })

                                                } else {
                                                    objresponse.status = 'Error in NPSS_TRN_PROCESS_LOG Insert';
                                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
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
