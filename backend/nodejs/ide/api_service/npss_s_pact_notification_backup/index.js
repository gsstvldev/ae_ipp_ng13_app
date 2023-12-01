var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {



    /*  Created By : renga
    Created Date :30/11/2023
   
   }
    */
    var serviceName = 'NPSS PACT NOTIFICATION BACKUP';

    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqXlsx = require('node-xlsx').default;
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var moment = require('moment-timezone');
    var reqAsync = require('async');
    var mTranConn = "";
    var producer
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS PACT NOTIFICATION BACKUP';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS PACT NOTIFICATION BACKUP';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection   
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {

                    try {

                        var takedays = `select param_detail from core_nc_system_setup where param_category = '${params.param_category}' and param_code = '${params.param_code}' and need_sync = 'Y'`

                        ExecuteQuery1(takedays, function (arrdata) {

                            if (arrdata.length == 0) {
                                objresponse.status = 'FAILURE';
                                objresponse.msg = 'No days found for backup insertion';
                                sendResponse(null, objresponse)
                            } else {
                                var utcMoment = moment.utc();
                                console.log(utcMoment)
                                var Formdate = utcMoment.subtract(arrdata[0].param_detail, 'days')
                                Formdate = moment(Formdate).format('YYYY-MM-DD HH:mm:ss')

                                var taketrndata = `select * from NPSS_PACT_NOTIFICATIONS where created_date_utc<'${Formdate}'` 
                                ExecuteQuery1(taketrndata, async function (arrtrndata) {
                                    if (arrtrndata.length) {
                                        var insertbkptable = await bkpInstData(arrtrndata, prct_id)
                                        if (insertbkptable.length > 0) {
                                            reqInstanceHelper.PrintInfo(serviceName, '-------backup table insertion complete------' + objSessionLogInfo);
                                            var delqry = `delete from NPSS_PACT_NOTIFICATIONS where created_date_utc<'${Formdate}'`;
                                            ExecuteQuery(delqry, function (arrdel) {
                                                if (arrdel == 'SUCCESS') {
                                                    reqInstanceHelper.PrintInfo(serviceName, '-------MAIN table DELETE complete------' + objSessionLogInfo);
                                                    objresponse.status = 'SUCCESS';
                                                    objresponse.msg = 'SUCCESS';
                                                    sendResponse(null, objresponse)
                                                } else {
                                                    objresponse.status = 'FAILURE';
                                                    objresponse.msg = 'no delete for main table';
                                                    sendResponse(null, objresponse)
                                                }
                                            })
                                        } else {
                                            objresponse.status = 'FAILURE';
                                            objresponse.msg = 'ERROR IN BACKUP table INSERTION ';
                                            sendResponse(null, objresponse)
                                        }
                                    } else {
                                        objresponse.status = 'FAILURE';
                                        objresponse.msg = 'NO DATA AVAILABLE IN MAIN TABLE';
                                        sendResponse(null, objresponse)
                                    }
                                })
                            }
                        })

                        //Function for insert in TrnProcess Log Table
                        function bkpInstData(arrtrndata, PRCT_ID) {
                            return new Promise((resolve, reject) => {
                                for (i = 0; i < arrtrndata.length; i++) {
                                    var arrCusTranInst = [];
                                    var objCusTranInst = {};
                                    objCusTranInst.npsspn_id = arrtrndata[i].npsspn_id;
                                    objCusTranInst.npsst_id = arrtrndata[i].npsst_id;
                                    objCusTranInst.prct_id = PRCT_ID;
                                    objCusTranInst.uetr = arrtrndata[i].uetr;
                                    objCusTranInst.process_name = arrtrndata[i].process_name;
                                    objCusTranInst.process_group = arrtrndata[i].process_group;
                                    objCusTranInst.log_created_date = arrtrndata[i].log_created_date;
                                    objCusTranInst.notification_status = arrtrndata[i].notification_status;
                                    objCusTranInst.notification_data = arrtrndata[i].notification_data;
                                    objCusTranInst.sort_order = arrtrndata[i].sort_order;
                                    objCusTranInst.status_code = arrtrndata[i].status_code;
                                    objCusTranInst.status_description = arrtrndata[i].status_description;
                                    objCusTranInst.process_status = arrtrndata[i].process_status;
                                    objCusTranInst.status = arrtrndata[i].status;
                                    objCusTranInst.tenant_id = arrtrndata[i].tenant_id;
                                    objCusTranInst.app_id = arrtrndata[i].app_id;
                                    objCusTranInst.dt_code = 'DT_1304_1665901130705';
                                    objCusTranInst.dtt_code ='DTT_1304_1701251364899';
                                    objCusTranInst.dt_description = 'NPSS EDGE Transactions Group';
                                    objCusTranInst.dtt_description ='Npss Pact Notification Bkp' ;
                                    objCusTranInst.created_by = arrtrndata[i].created_by;
                                    objCusTranInst.created_by_name = arrtrndata[i].created_by_name;
                                    objCusTranInst.created_date = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                    objCusTranInst.MODIFIED_BY = "";
                                    objCusTranInst.MODIFIED_BY_NAME = "";
                                    objCusTranInst.MODIFIED_DATE = null;
                                    objCusTranInst.system_id = arrtrndata[i].system_id;
                                    objCusTranInst.system_name = arrtrndata[i].system_name;
                                    objCusTranInst.created_by_sts_id = "";
                                    objCusTranInst.modified_by_sts_id = "";
                                    objCusTranInst.created_clientip = objSessionLogInfo.CLIENTIP;
                                    objCusTranInst.created_tz = objSessionLogInfo.CLIENTTZ;
                                    objCusTranInst.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                    objCusTranInst.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                    objCusTranInst.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                    objCusTranInst.routingkey = headers.routingkey;
                                    arrCusTranInst.push(objCusTranInst)
                                }

                                _BulkInsertProcessItem(arrCusTranInst, 'NPSS_PACT_NOTIFICATION_BKP', function callbackInsert(logInsertRes) {
                                    resolve(logInsertRes)

                                })
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
