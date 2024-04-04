var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {







    /*  Created By :   Siva  Harish
    Created Date :6/1/2022
    Modified By : Siva Harish
    Modified Date : 09/1/2023
     Modified By :Daseen 04-07-2023 Kafka Message parsing
     Modified By :Daseen 03-04-2024 insert in trn process log WI 3693
     
    */
    var serviceName = 'NPSS (CS) Communication Send Outward IPP Payment Notifications';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqXlsx = require('node-xlsx').default;
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var fs = require("fs");
    var reqAsync = require('async');
    var success_process_status, success_status;
    var Id = params.Id;
    var dt_code, dtt_code;
    var moment = require('moment')
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Communication Send Outward IPP Payment Notifications';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) Communication Send Outward IPP Payment Notifications';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection   
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {
                        try {
                            var PRCT_ID = prct_id
                            var Takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync = 'Y'`
                            var TakeStatus = `select process_queue_status  from core_q_status_roles where screen_name = '${params.screenName}' and role_id = '${params.roleId}'`
                            var TakeTempCode = `select param_value from core_ns_params  where process_name = 'Outward IPP Payment' and need_sync = 'Y'`
                            ExecuteQuery1(Takeurl, function (arrUrl) {
                                if (arrUrl.length > 0) {

                                    ExecuteQuery1(TakeStatus, async function (arrStatus) {
                                        if (arrStatus.length > 0) {
                                            var TakedatafrmntfTbl;
                                            if (params.TrnId == '') {
                                                objresponse.status = 'FAILURE';
                                                objresponse.msg = 'No transaction is selected'
                                                sendResponse(null, objresponse)
                                            }

                                            else {
                                                var trnid = await arraytostr(params.TrnId);
                                                TakedatafrmntfTbl = `select npssnl_id,kafka_message,channel_id from npss_notification_logs  where npssnl_id in ${trnid} `
                                            }
                                            ExecuteQuery1(TakedatafrmntfTbl, function (arrTran) {
                                                if (arrTran.length > 0) {
                                                    reqAsync.forEachOfSeries(arrTran, function (arrTranobj, i, nextobjctfunc) {
                                                        var TakeTopicName = `select param_value,process_name from core_ns_params where destination_system = '${arrTranobj.channel_id}' and param_name = 'KAFKA_TOPIC' and need_sync = 'Y'`
                                                        ExecuteQuery1(TakeTopicName, function (TopicName) {
                                                            if (TopicName.length > 0) {
                                                                var TakeCmCategory = `select param_value  from core_ns_params where destination_system = '${arrTranobj.channel_id}' and param_name = 'COMM_GROUP' and need_sync = 'Y'`
                                                                ExecuteQuery1(TakeCmCategory, function (arrComCategory) {
                                                                    if (arrComCategory.length > 0) {
                                                                        try {
                                                                            var par_message = JSON.parse(arrTranobj.kafka_message)
                                                                            var request = require('request');

                                                                            var options = {
                                                                                url: arrUrl[0].param_detail,
                                                                                timeout: 18000000,
                                                                                method: 'POST',
                                                                                json: {
                                                                                    "PARAMS": {
                                                                                        "WFTPA_ID": "DEFAULT",
                                                                                        "PRCT_ID": "",
                                                                                        "EVENT_CODE": "DEFAULT",
                                                                                        "USER_EMAIL": "",
                                                                                        "USER_MOBILE": "",
                                                                                        "TEMPLATECODE": arrComCategory[0].param_value,
                                                                                        "DT_CODE": "",
                                                                                        "DTT_CODE": "",
                                                                                        "TOPIC_NAME": TopicName[0].param_value || '',
                                                                                        "STATIC_DATA": JSON.parse(par_message.message) || '',
                                                                                        "SKIP_COMM_FLOW": true
                                                                                    },
                                                                                    "PROCESS_INFO": {
                                                                                        "MODULE": "NPSS",
                                                                                        "MENU_GROUP": "NPSS",
                                                                                        "MENU_ITEM": "NPSS",
                                                                                        "PROCESS_NAME": TopicName[0].process_name
                                                                                    }
                                                                                },
                                                                                headers: {
                                                                                    "session-id": "STATIC-SESSION-NPSS",
                                                                                    "routingKey": "CLT-0~APP-0~TNT-0~ENV-0",
                                                                                    'Content-Type': 'application/json'


                                                                                }
                                                                            }




                                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                                            request(options, async function (error, responseFromImagingService, responseBody) {

                                                                                if (error) {
                                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                                                    sendResponse(error, null);
                                                                                } else {

                                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBody, objSessionLogInfo);

                                                                                    if (responseBody.data == 'SUCCESS') {
                                                                                        let logInsert = await fnlogInsert(options)
                                                                                        var UpdtTrnTbl = `update npss_notification_logs set status = 'Success', process_status = 'Success' where npssnl_id = '${arrTranobj.npssnl_id}'`
                                                                                        ExecuteQuery(UpdtTrnTbl, function (arrUpdTranTbl) {
                                                                                            if (arrUpdTranTbl == 'SUCCESS') {
                                                                                                reqInstanceHelper.PrintInfo(serviceName, '------------Updated Trn-------' + arrTranobj.npssnl_id, objSessionLogInfo);
                                                                                                nextobjctfunc()
                                                                                            } else {
                                                                                                reqInstanceHelper.PrintInfo(serviceName, '------------Updated Failure Trn-------' + arrTranobj.npssnl_id, objSessionLogInfo);
                                                                                                var fail = {}
                                                                                                fail.updateFailTran = arrTranobj.npssnl_id
                                                                                                failedData.push(fail)
                                                                                                nextobjctfunc()
                                                                                            }
                                                                                        })
                                                                                    } else {
                                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Call Failed Tran-------' + arrTranobj.npssnl_id, objSessionLogInfo);
                                                                                        var failObj = {}
                                                                                        failObj.apifailedTran = arrTranobj.npssnl_id
                                                                                        failedData.push(failObj)
                                                                                        nextobjctfunc()
                                                                                    }
                                                                                }
                                                                            });

                                                                        } catch (error) {
                                                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                            sendResponse(error, null);
                                                                        }
                                                                    } else {
                                                                        var CatTobj = {}
                                                                        CatTobj.Comm_Catgeory_Not_FoundTran = arrTranobj.npssnl_id
                                                                        failedData.push(Tobj)
                                                                        nextobjctfunc()
                                                                    }
                                                                })

                                                            } else {
                                                                var Tobj = {}
                                                                Tobj.TopicName_Not_Found_Tran = arrTranobj.npssnl_id
                                                                failedData.push(Tobj)
                                                                nextobjctfunc()
                                                            }


                                                        })




                                                    },  function () {

                                                        objresponse.status = 'SUCCESS';
                                                        objresponse.FailedData = failedData || '';
                                                        sendResponse(null, objresponse)
                                                    })
                                                } else {
                                                    objresponse.status = 'FAILURE';
                                                    objresponse.msg = 'Tran Data not found for this status' + arrStatus[0].process_queue_status;
                                                    sendResponse(null, objresponse)
                                                }

                                            })
                                        } else {
                                            objresponse.status = 'FAILURE';
                                            objresponse.msg = 'Status Entry Not Found in core_q_status_roles tbl';
                                            sendResponse(null, objresponse)
                                        }

                                    })


                                } else {
                                    objresponse.status = 'FAILURE';
                                    objresponse.msg = 'Communication API Url Not Found';
                                    sendResponse(null, objresponse)
                                }

                            })
                            function fnlogInsert(options) {
                                return new Promise((resolve, reject) => {
                                    var arrloginsert = []
                                    var objlogins = {}
                                    objlogins.PROCESS_NAME = 'Channel Notification Retry'
                                    objlogins.UETR = '0';
                                    objlogins.TENANT_ID = params.TENANT_ID || '';
                                    objlogins.MSG_ID = '0'
                                    objlogins.APP_ID = params.AppId || '';
                                    objlogins.REQUEST_DATA_JSON = options || '';
                                    objlogins.STATUS = 'OP_CHN_NOTIFIED'
                                    objlogins.PROCESS_STATUS = 'CHNNotification'
                                    objlogins.DT_CODE = 'DT_1304_1665901130705'
                                    objlogins.DTT_CODE = 'DTT_1304_1665901217208'
                                    objlogins.DT_DESCRIPTION = 'transaction_group'
                                    objlogins.DTT_DESCRIPTION = 'Transaction'
                                    objlogins.CREATED_BY = params.CREATED_BY;
                                    objlogins.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                    objlogins.CREATED_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                    objlogins.MODIFIED_BY = "";
                                    objlogins.MODIFIED_BY_NAME = "";
                                    objlogins.MODIFIED_DATE = null;
                                    objlogins.SYSTEM_ID = params.SYSTEM_ID;
                                    objlogins.SYSTEM_NAME = params.SYSTEM_NAME;
                                    objlogins.CREATED_BY_STS_ID = "";
                                    objlogins.MODIFIED_BY_STS_ID = "";
                                    objlogins.PRCT_ID = PRCT_ID;
                                    objlogins.created_clientip = objSessionLogInfo.CLIENTIP;
                                    objlogins.created_tz = objSessionLogInfo.CLIENTTZ;
                                    objlogins.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                    objlogins.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                    objlogins.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                    objlogins.routingkey = headers.routingkey;
                                    arrloginsert.push(objlogins);
                                    _BulkInsertProcessItem(arrloginsert, 'npss_trn_process_log', async function callbackInsert(CusTranInsertRes) {
                                        if (CusTranInsertRes.length > 0) {
                                            resolve('SUCCESS');
                                        }
                                    })
                                })
                            }
                            function arraytostr(arrstr) {
                                return new Promise((resolve, reject) => {
                                    if (Array.isArray(arrstr)) {
                                        arrTranstr = arrstr.map(function (eachTran) { return eachTran.toString(); });
                                    }
                                    else {
                                        arrTranstr = [arrstr.toString()];
                                    }
                                    resolve(retstr = '(' + "'" + arrTranstr.toString().split(',').join("','") + "'" + ')');
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
