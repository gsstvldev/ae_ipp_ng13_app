var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    



    /*  Created By :Siva Harish
    Created Date :25/02/2023
    Modified By : 
    Modified Date : 
    }
    */
    var serviceName = 'NPSS (CS) Liquidity Cycle';

    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqXlsx = require('node-xlsx').default;
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var success_process_status, success_status;

    var reqAsync = require('async');
 
    var mTranConn = "";
    var producer
    var task
    var failedData = []
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Liquidity Cycle';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) Liquidity Cycle';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false,  function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    try {
                        var PRCT_ID = prct_id
                        var TakeFinalStatus = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'CORE_API_LIQUIDITY_CYCLE' and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                        if (Array.isArray(params.Tran_Id)) {
                            arrTranID = params.Tran_Id.map(function (eachTran) {
                                return eachTran.toString();
                            });
                        } else {
                            arrTranID = [params.Tran_Id.toString()];
                        }
                        TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                        var Taketran = `select * from npss_core_api_process_log where npsscapl_id in ${TempTranID}`
                        var Takeapiurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_LIQUIDITY' and param_code='URL'`
                        ExecuteQuery1(TakeFinalStatus, function (arrStatus) {
                            if (arrStatus.length > 0) {

                                success_status = arrStatus[0].success_status
                                success_process_status = arrStatus[0].success_process_status
                                ExecuteQuery1(Taketran, function (arrTran) {
                                    if (arrTran.length > 0) {
                                        ExecuteQuery1(Takeapiurl, function (arrUrl) {
                                            if (arrUrl.length > 0) {
                                                var UpdateTrnTbl = `update npss_core_api_process_log set   status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsscapl_id in ${TempTranID}`
                                                ExecuteQuery(UpdateTrnTbl, function (uptranresult) {
                                                    if (uptranresult == 'SUCCESS') {
                                                        reqAsync.forEachOfSeries(arrTran,  function (arrTranobj, i, nextobjctfunc) {
                                                            var runfunction = async()=>{
                                                                var doapicall = await apiCall(arrTranobj, arrUrl);
                                                                if (doapicall == 'SUCCESS') {
                                                                    reqInstanceHelper.PrintInfo(serviceName, '-----------Liquidity Position  api call success for-------' + arrTranobj, objSessionLogInfo);
                                                                    nextobjctfunc();
                                                                }
                                                                else {
                                                                    objresponse.status = doapicall
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            }
                                                            runfunction()
                                                            
                                                        }, function () {
                                                            objresponse.status = 'SUCCESS';
                                                            sendResponse(null, objresponse)
                                                        })
                                                    } else {
                                                        reqInstanceHelper.PrintInfo(serviceName, '-----------Update not success------', objSessionLogInfo);
                                                        objresponse.status = 'Failure in Table Updation';
                                                        sendResponse(null, objresponse)
                                                    }
                                                })
                                            } else {
                                                reqInstanceHelper.PrintInfo(serviceName, '------------No URL found------', objSessionLogInfo);
                                                objresponse.status = 'No data found in core system setup table';
                                                sendResponse(null, objresponse)
                                            }
                                        })
                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------No Tran found-------', objSessionLogInfo);
                                        objresponse.status = 'No data found in Tran Table';
                                        sendResponse(null, objresponse);
                                    }


                                })
                            } else {
                                reqInstanceHelper.PrintInfo(serviceName, '------------No Status  found-------', objSessionLogInfo);
                                objresponse.status = 'No Data found in workflow Table';
                                sendResponse(null, objresponse);
                            }

                        })


                        function apiCall(arrTranobj, arrUrl) {
                            return new Promise((resolve, reject) => {

                                
                                        try {
                                        
                                            var request = require('request');
                                            var apiURL =
                                           
                                            apiURL = arrUrl[0].param_detail+ '/liquidityCycle?currency='+arrTranobj.currency +'&accountHolderBic='+arrTranobj.accountholderbic+'&accountNumber='+arrTranobj.accountnumber+'cycleNumber='+arrTranobj.cycleNumber
                                            var options = {
                                                url: apiURL,
                                                timeout: 99999999,
                                                method: 'GET',
                                                json: {
                                                   
                                                },
                                                headers: {
                                                    'content-type': 'application/json'
                                                }
                                            };
                                            reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                            request(options, function (error, responseFromImagingService, responseBody) {
                                                try {
                                                    if (error) {
                                                        reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                       resolve(error);
                                                    } else {
                                                        try{
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + JSON.parse(responseBody) + '---for npsscapl_id....' + arrTranobj.npsscapl_id, objSessionLogInfo);
                                                            resolve('SUCCESS');

                                                        }catch(error){
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBody + '---for npsscapl_id....' + arrTranobj.npsscapl_id, objSessionLogInfo);
                                                            resolve('SUCCESS');
                                                        }
                                                      

                                                    }
                                                } catch (error) {
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + error + '---for npsscapl_id....' + arrTranobj.npsscapl_id, objSessionLogInfo);
                                                    resolve('FAILURE')
                                                }

                                            });
                                        } catch (error) {
                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                            sendResponse(error, null);
                                        }
                                   

                            })
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

                    } catch (error) {
                        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
                    }
                })



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
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }
    })





























});

module.exports = app;
