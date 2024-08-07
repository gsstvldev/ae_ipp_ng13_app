var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    
    try {
        /*   Created By :Siva Harish
        Created Date :22-02-2023
       
        */
        var serviceName = 'NPSS (CS) Investigation Close';
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
                objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Investigation Close';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS (CS) Investigation Close';
                var cus_iban;
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection     
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                        try {
                            var PRCT_ID = prct_id
                            var take_status = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = '${params.Rule_Code}' and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                            ExecuteQuery1(take_status, function (arrStatus) {
                                if (arrStatus.length > 0) {
                                    success_process_status = arrStatus[0].success_process_status;
                                    success_status = arrStatus[0].success_status;
                                    if (Array.isArray(params.Tran_Id)) {
                                        arrTranID = params.Tran_Id.map(function (eachTran) {
                                            return eachTran.toString();
                                        });
                                    } else {
                                        arrTranID = [params.Tran_Id.toString()];
                                    }
                                    TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                                    
                                    var UpdateTrnTbl = `update npss_transactions set  remarks='${params.remark}', status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id in ${TempTranID} `
                                    ExecuteQuery(UpdateTrnTbl, function (uptranresult) {
                                        if (uptranresult == 'SUCCESS') {
                                            objresponse.status = 'SUCCESS';   
                                            sendResponse(null, objresponse)
                                        }else{
                                            objresponse.status = 'Error in NPSS Tran Table Update';
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
