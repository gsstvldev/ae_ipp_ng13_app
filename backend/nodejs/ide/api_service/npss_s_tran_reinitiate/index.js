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
        var serviceName = 'NPSS (S) Tran Reinitiate';
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
                objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Tran Reinitiate';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS (S) Tran Reinitiate';
                var cus_iban;
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection     
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                        try {
                            var TakeeligTran = `select npsstpl_id,uetr from npss_trn_process_log  where status='${params.eligible_status}' and process_status='${params.eligible_process_status}' and process_name='${params.eligible_process_name}'`
                            ExecuteQuery1(TakeeligTran, async function (arrTran) {
                                if (arrTran.length > 0) {
                                    var intiateUpdtRes = await doInitiate(params.eligible_status, params.eligible_process_status,params.eligible_process_name)
                                    if (intiateUpdtRes == 'Success') {
                                        reqAsync.forEachOfSeries(arrTran, function (arrTranparamsObj, i, nextobjctfunc) {
                                            var Takeorrtran = `select uetr from npss_trn_process_log  where uetr ='${arrTranparamsObj.uetr}' and status='${params.orr_status}' and process_status='${params.orr_process_status}' and process_name='${params.orr_process_name}'`
                                            ExecuteQuery1(Takeorrtran, async function (arrorrTran) {
                                                if (arrorrTran.length > 0) {
                                                    var Takeaddinfotran = `select  npsstpl_id,additional_info   from npss_trn_process_log  where uetr ='${arrTranparamsObj.uetr}' and  status='${params.addinfo_status}' and process_status='${params.addinfo_process_status}' and process_name='${params.addinfo_process_name}'`
                                                    ExecuteQuery1(Takeaddinfotran, async function (arraddinfoTran) {
                                                        if (arraddinfoTran.length > 0) {
                                                            let updtQry = `update npss_transactions set status='IP_RCT_POSTING_SUCCESS',process_status='RCTCompleted' where uetr ='${arraddinfoTran[0].additional_info}' and  Process_type ='IP'`
                                                            ExecuteQuery(updtQry, async function (updtRes) {
                                                                if(updtRes=='SUCCESS'){
                                                                    reqInstanceHelper.PrintInfo(serviceName, '-----------Transaction Status  updated for uetr------' + arraddinfoTran[0].uetr, objSessionLogInfo); 
                                                                    nextobjctfunc()
                                                                }else{
                                                                    reqInstanceHelper.PrintInfo(serviceName, '-----------Transaction Status not updated for uetr------' + arraddinfoTran[0].uetr, objSessionLogInfo); 
                                                                    nextobjctfunc()
                                                                }
                                                            })
                                                        } else {
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------No additional info record  found in npss_trn_process_log for uetr------' + arrTranparamsObj.uetr, objSessionLogInfo);
                                                            nextobjctfunc()
                                                        }

                                                    })

                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------No record  found in npss_trn_process_log for uetr------' + arrTranparamsObj.uetr, objSessionLogInfo);
                                                    nextobjctfunc()
                                                }

                                            })
                                        }, function () {
                                            reqInstanceHelper.PrintInfo(serviceName, '------------All status has been updated ------', objSessionLogInfo);
                                            objresponse.status = 'SUCCESS';
                                            objresponse.data = "All status has been updated "
                                            sendResponse(null, objresponse)
                                        })
                                    }
                                }
                                else {
                                    reqInstanceHelper.PrintInfo(serviceName, '------------No record  found in npss_trn_process_log------', objSessionLogInfo);
                                    objresponse.status = 'FAILURE';
                                    objresponse.data = "No record  found in npss_trn_process_log"
                                    sendResponse(null, objresponse)
                                }
                            })
                        }
                        catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    })


                    function doInitiate(eligible_status, eligible_process_status, eligible_process_name) {
                        return new Promise(async (resolve, reject) => {
                            final_status = eligible_status + '_TAKEN'

                            let updtqry;

                            updtqry = `update npss_trn_process_log set  status='${final_status}',process_status='${eligible_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where status='${eligible_status}' and process_status = '${params.eligible_process_status}'  and process_name='${eligible_process_name}' `


                            ExecuteQuery(updtqry, function (uptranresult) {
                                if (uptranresult == 'SUCCESS') {
                                    reqInstanceHelper.PrintInfo(serviceName, '----------Success NPSS Transaction log Table Update for the status -----' + eligible_status, objSessionLogInfo);
                                    resolve('Success')

                                } else {
                                    reqInstanceHelper.PrintInfo(serviceName, '----------Error NPSS Transaction Table Update for the status -----' + eligible_status, objSessionLogInfo);
                                    resolve('Error')
                                }
                            })
                        })
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
