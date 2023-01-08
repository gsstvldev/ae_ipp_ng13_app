var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {



    /*  Created By :   Daseen
    Created Date : 06/01/2023
    Modified By : 
    Modified Date : 
    Reason for : 
     
    */
    var serviceName = 'NPSS (S) IPP Exceptional Handling';
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
        'data': '',
        'msg': ''
    }; // Response to Client
    // Assign function for loginformation and session info
    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
        try {
            objSessionLogInfo = objLogInfo; // Assing log information
            // Log Viewer Setup
            objSessionLogInfo.HANDLER_CODE = 'NPSS (S) IPP Exceptional Handling';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (S) IPP Exceptional Handling';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {
                        var PRCT_ID = prct_id
                        var ApitrnId
                        var app_id
                        try {
                            var takecomg = `select * from core_ns_params where param_name = 'COMM_GROUP' AND process_name = '${params.PROCESS_NAME}'`
                          
                            // var selrec = `select i.commmt_code,i.commmg_code,d.commpd_id,i.template_info, m.commpm_id ,l.attempt_count,l.commpml_id,m.message from dep_tran.comm_info i inner join comm_process_data d    on i.commmg_code=d.commmg_code and d.is_processed='N'    and i.app_id='${params.appId}' and i.comm_type='kafka' inner join  comm_process_message m on i.commmt_code=m.commmt_code  and m.type='KAFKA'   inner join comm_process_message_log l on l.comm_msg_id=m.comm_msg_id and l.comments <>'SUCCESS' and m.message like'_______________OrigChannelID%'`
                            ExecuteQuery1(takecomg, function (commmg) {
                                if (commmg.length) {
                                    var commmg_code = commmg[0].param_value
                                    //var selrec = `select i.commmt_code,i.commmg_code,d.commpd_id,i.template_info, m.commpm_id ,l.attempt_count,l.commpml_id,m.message from dep_tran.comm_info i inner join comm_process_data d    on i.commmg_code=d.commmg_code and d.is_processed='N'  and i.commmg_code='${commmg_code}'    and i.app_id='${params.appId}' and i.comm_type='kafka' inner join  comm_process_message m on i.commmt_code=m.commmt_code  and m.type='KAFKA'   inner join comm_process_message_log l on l.comm_msg_id=m.comm_msg_id and l.comments <>'SUCCESS' and m.message like '%OrigChannelID%'`
          
          var selrec = `select i.commmt_code,i.commmg_code,d.commpd_id,i.template_info, m.commpm_id ,l.attempt_count,l.commpml_id,m.message from dep_tran.comm_info i inner join comm_process_data d    on i.commmg_code=d.commmg_code and d.is_processed='N'  and i.commmg_code='COMM_CATEGORY1673169458273'    and i.app_id='${params.appId}' and i.comm_type='kafka' inner join  comm_process_message m on i.commmt_code=m.commmt_code  and m.type='KAFKA'   inner join comm_process_message_log l on l.comm_msg_id=m.comm_msg_id and l.comments <>'SUCCESS' and m.message like '%OrigChannelID%' order by commpml_id desc`
                                    ExecuteQuery1(selrec, function (insarr) {
                                        if (insarr.length) {
                                            var JsonValue = JSON.parse(insarr[0].template_info)
                                            var temp_info = JsonValue["TEMP_INFO"]
                                            var partemp = JSON.parse(temp_info)
                                            var retry_count = partemp["RETRY_COUNT"]
                                            var arrNoinsert = [];
                                          
                                                if (retry_count <= insarr[0].attempt_count) {

                                                    var objNoinsert = {};
                                                    var Value = JSON.parse(insarr[i].message)
                                                    var data = Value['message']
                                                    var DataMsgValue = JSON.parse(data)
                                                    var MsgValue = JSON.parse(DataMsgValue)

                                                    objNoinsert.CHANNEL_ID = MsgValue['OrigChannelID'] || '';


                                                    objNoinsert.CHANNEL_REF_NO = MsgValue['channelReferenceNo'] || '';
                                                    objNoinsert.STATUS_CODE = MsgValue['statusCode'] || '';
                                                    objNoinsert.STATUS_DESCRIPTION = MsgValue['statusDesc'] || '';
                                                    objNoinsert.KAFKA_MESSAGE = insarr[0].message||'';
                                                    objNoinsert.COMMPD_ID = insarr[0].commpd_id||'';
                                                    objNoinsert.COMMPM_ID = insarr[0].commpm_id||'';
                                                    objNoinsert.COMMPML_ID = insarr[0].commpml_id||'';
                                                    objNoinsert.TENANT_ID = params.TENANT_ID||'';
                                                    objNoinsert.APP_ID = params.appId||'';
                                                    objNoinsert.STATUS = 'Created'
                                                    objNoinsert.PROCESS_STATUS = 'Created'
                                                    objNoinsert.DT_CODE = 'DT_1304_1665901130705'
                                                    objNoinsert.DTT_CODE = 'DTT_1304_1672928670076'
                                                    objNoinsert.DT_DESCRIPTION = 'transaction_group'
                                                    objNoinsert.DTT_DESCRIPTION = 'Transaction'
                                                    objNoinsert.CREATED_BY = params.CREATED_BY;
                                                    objNoinsert.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                                    objNoinsert.CREATED_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                                    objNoinsert.MODIFIED_BY = "";
                                                    objNoinsert.MODIFIED_BY_NAME = "";
                                                    objNoinsert.MODIFIED_DATE = null;
                                                    objNoinsert.SYSTEM_ID = params.SYSTEM_ID;
                                                    objNoinsert.SYSTEM_NAME = params.SYSTEM_NAME;
                                                    objNoinsert.CREATED_BY_STS_ID = "";
                                                    objNoinsert.MODIFIED_BY_STS_ID = "";
                                                    objNoinsert.PRCT_ID = PRCT_ID;
                                                    objNoinsert.created_clientip = objSessionLogInfo.CLIENTIP;
                                                    objNoinsert.created_tz = objSessionLogInfo.CLIENTTZ;
                                                    objNoinsert.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                                    objNoinsert.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                                    objNoinsert.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                                    objNoinsert.routingkey = headers.routingkey;
                                                    arrNoinsert.push(objNoinsert);

                                                }

                                            
                                            if (arrNoinsert.length) {
                                                _BulkInsertProcessItem(arrNoinsert, 'npss_notification_logs', function callbackInsert(CusTranInsertRes) {
                                                    if (CusTranInsertRes.length > 0) {
                                                        reqInstanceHelper.PrintInfo(serviceName, "........................All Data inserted Successfully...............", objSessionLogInfo);
                                                        console.log("........................ All Data inserted Successfully...............")
                                                        objresponse.status = 'SUCCESS';
                                                        sendResponse(null, objresponse)
                                                    } else {
                                                        reqInstanceHelper.PrintInfo(serviceName, "........................Error in insert...............", objSessionLogInfo);
                                                        console.log("........................ Error in insert...............")
                                                        objresponse.status = 'FAILURE';
                                                        sendResponse(null, objresponse)
                                                    }

                                                })
                                            }
                                            else {

                                                reqInstanceHelper.PrintInfo(serviceName, "........................ NO Data FOUND to insert...............", objSessionLogInfo);
                                                console.log("........................ NO Data FOUND to insert...............")
                                                objresponse.status = 'SUCCESS';
                                                objresponse.msg = 'No data Found to insert';
                                                sendResponse(null, objresponse)

                                            }

                                        } else {

                                            reqInstanceHelper.PrintInfo(serviceName, "........................ NO Data FOUND in communication table...............", objSessionLogInfo);
                                            console.log("........................ NO Data FOUND in communication table...............")
                                            objresponse.status = 'SUCCESS';
                                            objresponse.msg = 'No data Found in communication table';
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                }
                                else {
                                    reqInstanceHelper.PrintInfo(serviceName, "........................ NO Data FOUND in Params table...............", objSessionLogInfo);
                                    console.log("........................ NO Data FOUND in Params table...............")
                                    objresponse.status = 'SUCCESS';
                                    objresponse.msg = 'No data Found in Params table';
                                    sendResponse(null, objresponse)
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
