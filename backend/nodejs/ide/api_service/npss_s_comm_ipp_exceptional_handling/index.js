var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

      /*  Created By : Daseen
    Created Date : 06/01/2023
    Modified By : Siva Harish
    Modified Date : 09/01/2023
    Reason for : Handling JSON parse 27/4/2023
      Modified By :Daseen 03/07/2023 comm_prcs_mesaage
     
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
                            /*  var takecomg = `select * from core_ns_params where param_name = 'COMM_GROUP' AND process_name = '${params.PROCESS_NAME}' and need_sync = 'Y'`
                             ExecuteQuery1(takecomg, function (comCatcode) {
                                 if (comCatcode.length) {
                                     reqAsync.forEachOfSeries(comCatcode, function (comCatcodeObj, i, nextobjctfunc) {
                                         var CatgoryCode = comCatcodeObj.param_value */
                            var TakeData = `SELECT m.commpm_id,m.message FROM ad_gss_tran.comm_process_message m  WHERE m.STATUS in ('RETRY_COUNT_EXCEEDED','SAME_BUSINESS_DAY_EXCEEDED') AND m.type='KAFKA' and m.message  like '%OrigChannelID%' order by commpm_id desc`
                            ExecuteQuery1(TakeData,async function (insarr) {
                                if (insarr.length) {
                                    let updtRes = await doCommprsMsgupdate(TakeData,'RETRY_COUNT_EXCEEDED')
                                    /* var JsonValue = JSON.parse(insarr[0].template_info)
                                    var temp_info = JsonValue["TEMP_INFO"]
                                    var partemp = JSON.parse(temp_info)
                                    var retry_count = partemp["RETRY_COUNT"]*/
                                    var arrNoinsert = [];


                                    for (let i = 0; i < insarr.length; i++) {
                                        var objNoinsert = {};

                                      
                                        var Value = JSON.parse(insarr[i].message)
                                        var data = Value['message']
                                       // var MsgValue =await stringtoobject(data)
                                        var DataMsgValue = JSON.parse(data)
                                      //  var MsgValue = JSON.parse(DataMsgValue)
                                        var MsgValue
                                        try {
                                            MsgValue = JSON.parse(DataMsgValue)
                                        } catch (error) {
                                            MsgValue = DataMsgValue
                                        } 

                                        objNoinsert.CHANNEL_ID = MsgValue['OrigChannelID'] || '';
                                        objNoinsert.AMOUNT = MsgValue['instructedAmount'] || '';
                                        objNoinsert.CHANNEL_REF_NO = MsgValue['channelReferenceNo'] || '';
                                        objNoinsert.STATUS_CODE = MsgValue['statusCode'] || '';
                                        objNoinsert.ORDER_CUST_ACC_NO = MsgValue['orderingCustomerAccount'] || '';
                                        objNoinsert.STATUS_DESCRIPTION = MsgValue['statusDesc'] || '';
                                        objNoinsert.KAFKA_MESSAGE = JSON.parse(insarr[i].message )|| '';
                                        //objNoinsert.COMMPD_ID = insarr[i].commpd_id || '';
                                        objNoinsert.COMMPM_ID = insarr[i].commpm_id || '';
                                        objNoinsert.TENANT_ID = params.TENANT_ID || '';
                                        objNoinsert.APP_ID = params.appId || '';
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






                                    _BulkInsertProcessItem(arrNoinsert, 'npss_notification_logs', async function callbackInsert(CusTranInsertRes) {
                                        if (CusTranInsertRes.length > 0) {
                                            let updtRes = await doCommprsMsgupdate(CusTranInsertRes,'')
                                            if (updtRes == 'SUCCESS') {
                                                reqInstanceHelper.PrintInfo(serviceName, "........................ All Data Inserted successfully...............", objSessionLogInfo);
                                                objresponse.status = 'SUCCESS'
                                                sendResponse(null, objresponse)
                                            }else{
                                                reqInstanceHelper.PrintInfo(serviceName, "........................ Update Failed...............", objSessionLogInfo);
                                                objresponse.status = 'FAILURE'
                                                sendResponse(null, objresponse)
                                            }


                                        } else {

                                            reqInstanceHelper.PrintInfo(serviceName, "........................ Error  in insert ..............", objSessionLogInfo);
                                            objresponse.status = 'FAILURE'
                                            sendResponse(null, objresponse)
                                        }

                                    })


                                } else {

                                    reqInstanceHelper.PrintInfo(serviceName, "........................ NO Data FOUND in communication table...............", objSessionLogInfo);
                                    console.log("........................ NO Data FOUND in communication table...............")
                                    objresponse.status = 'FAILURE'
                                    sendResponse(null, objresponse)
                                }
                            })

                            function stringtoobject(arr)
                            {
                                return new Promise((resolve, reject) => {
                                   
                                    if(typeof (arr)=='string'){
                                         arr=JSON.parse(arr)
                                        stringtoobject(arr.message)
                                    }else{
                                       resolve(arr)
                                    }
                                })

                            }
                            function arraytostr(arrstr) {
                                return new Promise((resolve, reject) => {
                                    if (Array.isArray(arrstr)) {
                                        arrTranstr = arrstr.map(function (eachTran) { return eachTran.commpm_id.toString(); });
                                    }
                                    else {
                                        arrTranstr = [arrstr.toString()];
                                    }
                                    resolve(retstr = '(' + "'" + arrTranstr.toString().split(',').join("','") + "'" + ')');
                                })

                            }
                            function doCommprsMsgupdate(arr, type) {
                                return new Promise(async(resolve, reject) => {
                                    var updtQry;
                                    if (type == 'RETRY_COUNT_EXCEEDED') {
                                        updtQry = `update ad_gss_tran.comm_process_message set status='${type}_INPROGRESS' , modified_by = '${params.CREATED_BY}',modified_date = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',modified_by_name ='${params.CREATED_BY_NAME}',prct_id ='${PRCT_ID}', modified_clientip = '${objSessionLogInfo.CLIENTIP}', modified_tz = '${objSessionLogInfo.CLIENTTZ}', modified_tz_offset = '${objSessionLogInfo.CLIENTTZ_OFFSET}', modified_by_sessionid = '${objSessionLogInfo.SESSION_ID}', modified_date_utc = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where status='${type}' `

                                    } else {
                                        var comsg_id = await arraytostr(arr);
                                        updtQry = `update ad_gss_tran.comm_process_message set status='ALREADY_TAKEN' , modified_by = '${params.CREATED_BY}',modified_date = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',modified_by_name ='${params.CREATED_BY_NAME}',prct_id ='${PRCT_ID}', modified_clientip = '${objSessionLogInfo.CLIENTIP}', modified_tz = '${objSessionLogInfo.CLIENTTZ}', modified_tz_offset = '${objSessionLogInfo.CLIENTTZ_OFFSET}', modified_by_sessionid = '${objSessionLogInfo.SESSION_ID}', modified_date_utc = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where commpm_id in ${comsg_id} `
                                    }
                                    ExecuteQuery(updtQry, function (result) {
                                        if (result == 'SUCCESS') {
                                            reqInstanceHelper.PrintInfo(serviceName, '--------Success in  Transaction update for tran-----' + params.vpht_id, objSessionLogInfo);
                                            resolve('SUCCESS')
                                        }
                                        else {
                                            reqInstanceHelper.PrintInfo(serviceName, '--------Failure in  Transaction update for tran-----' + params.vpht_id, objSessionLogInfo);
                                            resolve('FAILURE')
                                        }

                                    })
                                })

                            }
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
