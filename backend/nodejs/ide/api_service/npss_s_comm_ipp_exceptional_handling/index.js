var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {







    /*  Created By :   Daseen
  Created Date : 06/01/2023
  Modified By : Siva Harish
  Modified Date : 09/01/2023
  Reason for : Handling JSON parse 27/4/2023
    Modified By :Daseen 03/07/2023 comm_prcs_mesaage
      Modified By :Daseen 11/07/2023 npss_tran_process_log insert
        Modified By :Daseen 08/08/2023 duplicate removed in  npss_tran_process_log insert
        Modified By :Daseen 22/03/2024 duplicate removed in mail sent based on channel WI 3646
          Modified By :Daseen 29/03/2024 Error Decription not updated for WI 3646
            Modified By :Daseen 08/05/2024 PRCT_ID generation if eligible record exist
   
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
    var moment = require('moment');
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
                /*  reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                     if (error) {
                         sendResponse(error);
                     } else {
                         var PRCT_ID = prct_id
                         var ApitrnId
                         var app_id */
                try {

                    var TakeData = `SELECT m.commpm_id,m.message,m.comments FROM ad_gss_tran.comm_process_message m  WHERE m.STATUS in ('RETRY_COUNT_EXCEEDED','SAME_BUSINESS_DAY_EXCEEDED') AND m.type='KAFKA' and m.message  like '%OrigChannelID%' order by commpm_id desc`
                    ExecuteQuery1(TakeData, async function (insarr) {
                        if (insarr.length > 0) {
                            reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                                if (error) {
                                    sendResponse(error);
                                } else {
                                    var PRCT_ID = prct_id
                                    var ApitrnId
                                    var app_id
                                    let updtRes = await doCommprsMsgupdate(TakeData, 'RETRY_COUNT_EXCEEDED',PRCT_ID)
                                    if (updtRes != "SUCCESS") {
                                        reqInstanceHelper.PrintInfo(serviceName, "........................ Update Failed FOR RETRY COUNT EXCEEDED...............", objSessionLogInfo);
                                        objresponse.status = 'FAILURE'
                                        sendResponse(null, objresponse)

                                    }

                                    var arrNoinsert = [];
                                    var arrloginsert = [];


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
                                        objNoinsert.UETR = MsgValue['uetr'] || '0';
                                        objNoinsert.ORDER_CUST_ACC_NO = MsgValue['orderingCustomerAccount'] || '';
                                        objNoinsert.STATUS_DESCRIPTION = MsgValue['statusDesc'] || '';
                                        objNoinsert.KAFKA_MESSAGE = JSON.parse(insarr[i].message) || '';
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
                                        objNoinsert.comments = insarr[i].comments || '';

                                        arrNoinsert.push(objNoinsert);
                                    }
                                    //  }


                                    const removeDupCha = arrNoinsert.filter((value, index, self) =>
                                        index === self.findIndex((t) => (
                                            t.CHANNEL_ID === value.CHANNEL_ID
                                        ))
                                    )
                                    let statusforMail = await sendMail(removeDupCha)
                                    const removeDup = arrNoinsert.filter((value, index, self) =>
                                        index === self.findIndex((t) => (
                                            t.CHANNEL_REF_NO === value.CHANNEL_REF_NO && t.STATUS_CODE === value.STATUS_CODE
                                        ))
                                    )
                                    removeDup.forEach((x) => {
                                        delete x.comments;
                                    })
                                    for (var j = 0; j < removeDup.length; j++) {
                                        var Valuelog = removeDup[j].KAFKA_MESSAGE
                                        var datalog = Valuelog['message']
                                        // var MsgValue =await stringtoobject(data)
                                        var DataMsgValuelog = JSON.parse(datalog)
                                        //  var MsgValue = JSON.parse(DataMsgValue)
                                        var MsgValuelog
                                        try {
                                            MsgValuelog = JSON.parse(DataMsgValuelog)
                                        } catch (error) {
                                            MsgValuelog = DataMsgValuelog
                                        }
                                        var objlogins = {}
                                        objlogins.PROCESS_NAME = 'Channel Notification Failure'
                                        objlogins.UETR = MsgValuelog['uetr'] || '0';
                                        objlogins.TENANT_ID = params.TENANT_ID || '';
                                        objlogins.MSG_ID = await getMsgId(MsgValuelog['uetr'])
                                        objlogins.APP_ID = params.appId || '';
                                        objlogins.REQUEST_DATA_JSON = removeDup[j].KAFKA_MESSAGE || '';
                                        objlogins.STATUS = 'OP_RETRY_COUNT_EXCEEDED'
                                        objlogins.PROCESS_STATUS = 'RCTNotification'
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

                                    }
                                    //let statusforMail = await sendMail(removeDup)
                                    //Mail send based channel 

                                    if (statusforMail == 'SUCCESS') {

                                        _BulkInsertProcessItem(removeDup, 'npss_notification_logs', async function callbackInsert(CusTranInsertRes) {
                                            if (CusTranInsertRes.length > 0) {
                                                var chkalreayexistData = `select uetr,npsstpl_id  from npss_trn_process_log where status='OP_RETRY_COUNT_EXCEEDED' and process_status='RCTNotification' `
                                                let removeIfExist = []
                                                ExecuteQuery1(chkalreayexistData, async function (arrexistdata) {
                                                    if (arrexistdata.length > 0) {
                                                        removeIfExist = arrloginsert.filter(function (obj) {
                                                            return !arrexistdata.some(function (obj2) {
                                                                return obj.UETR == obj2.uetr;
                                                            });
                                                        })
                                                    } else {
                                                        removeIfExist = arrloginsert
                                                    }
                                                    console.log(removeIfExist.length)
                                                    if (removeIfExist.length > 0) {
                                                        _BulkInsertProcessItem(removeIfExist, 'npss_trn_process_log', async function callbackInsert(CusTranlogInsertRes) {
                                                            if (CusTranlogInsertRes.length > 0) {
                                                                reqInstanceHelper.PrintInfo(serviceName, "........................ All Data Inserted successfully in npss_trn_process_log...............", objSessionLogInfo);
                                                            } else {
                                                                reqInstanceHelper.PrintInfo(serviceName, "........................ after filter No Data Inserted  in npss_trn_process_log...............", objSessionLogInfo);
                                                            }
                                                            let updtRes = await doCommprsMsgupdate(insarr, '',PRCT_ID)
                                                            if (updtRes == 'SUCCESS') {
                                                                reqInstanceHelper.PrintInfo(serviceName, "........................ All Data Inserted successfully...............", objSessionLogInfo);
                                                                objresponse.status = 'SUCCESS'
                                                                sendResponse(null, objresponse)
                                                            } else {
                                                                reqInstanceHelper.PrintInfo(serviceName, "........................ Update Failed...............", objSessionLogInfo);
                                                                objresponse.status = 'FAILURE'
                                                                sendResponse(null, objresponse)
                                                            }
                                                        })
                                                    } else {
                                                        reqInstanceHelper.PrintInfo(serviceName, "........................ No record found to insert  in npss_trn_process_log...............", objSessionLogInfo);
                                                        let updtRes = await doCommprsMsgupdate(insarr, '',PRCT_ID)
                                                        if (updtRes == 'SUCCESS') {

                                                            objresponse.status = 'SUCCESS'
                                                            sendResponse(null, objresponse)
                                                        } else {
                                                            reqInstanceHelper.PrintInfo(serviceName, "........................ Update Failed...............", objSessionLogInfo);
                                                            objresponse.status = 'FAILURE'
                                                            sendResponse(null, objresponse)
                                                        }
                                                    }


                                                })
                                            } else {

                                                reqInstanceHelper.PrintInfo(serviceName, "........................ Error  in  npss_notification_logs insert ..............", objSessionLogInfo);
                                                objresponse.status = 'FAILURE'
                                                sendResponse(null, objresponse)
                                            }

                                        })
                                    }
                                    else {
                                        reqInstanceHelper.PrintInfo(serviceName, "........................ NO Data FOUND in communication table...............", objSessionLogInfo);
                                        console.log("........................ NO Data FOUND in communication table...............")
                                        objresponse.status = 'FAILURE'
                                        sendResponse(null, objresponse)
                                    }

                                }
                            })
                        } else {

                            reqInstanceHelper.PrintInfo(serviceName, "........................ NO Data FOUND in communication table...............", objSessionLogInfo);
                            console.log("........................ NO Data FOUND in communication table...............")
                            objresponse.status = 'FAILURE'
                            sendResponse(null, objresponse)
                        }
                    })

                    function getMsgId(uetr) {
                        return new Promise((resolve, reject) => {
                            var TakeMsgid = `select msg_id from npss_trn_process_log where uetr='${uetr}' and process_name='Place Pacs008' and status='OP_AC_FILE_PLACED'`
                            ExecuteQuery1(TakeMsgid, async function (arrmsgID) {
                                if (arrmsgID.length > 0) {
                                    resolve(arrmsgID[0].msg_id)
                                } else {
                                    reqInstanceHelper.PrintInfo(serviceName, "........................ NO msg id FOUND in log table for uetr..............." + uetr, objSessionLogInfo);
                                    console.log("........................ NO msg id FOUND in log table...............")
                                    resolve('0')
                                }
                            })

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
                    function sendMail(removeDupCha) {
                        return new Promise((resolve, reject) => {
                            prcs_name = `${params.mail_process_name}`
                            var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync = 'Y'`
                            var TakeCometo = `select param_value from CORE_NS_PARAMS  where process_name = '${prcs_name}' and param_name = 'COMM_TO' and need_sync = 'Y'`
                            ExecuteQuery1(takeurl, function (arrUrl) {
                                if (arrUrl.length > 0) {
                                    ExecuteQuery1(TakeCometo, function (arrcomto) {
                                        var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${prcs_name}' and param_name = 'ORIGIN' and need_sync = 'Y'`
                                        ExecuteQuery1(Takeorg, function (arrorg) {
                                            var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${prcs_name}' and param_name = 'COMM_GROUP' and need_sync = 'Y'`
                                            ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                                var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${prcs_name}' and param_name = 'COMM_CC' and need_sync = 'Y'`
                                                ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                                    var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${prcs_name}' and param_name = 'COM_CATEGORY' and need_sync = 'Y'`
                                                    ExecuteQuery1(TakecomCat, function (arrCatgory) {

                                                        reqAsync.forEachOfSeries(removeDupCha, function (maildataObj, i, nextobjctfunc) {

                                                            try {
                                                                var frtodata = [{
                                                                    TO: arrcomto.length > 0 ? arrcomto[0].param_value : '',
                                                                    CC: arrcomcc.length > 0 ? arrcomcc[0].param_value : '',
                                                                    BCC: '',
                                                                    ORIGIN: arrorg.length > 0 ? arrorg[0].param_value : '',
                                                                    COMM_GROUP: arrcomgp.length > 0 ? arrcomgp[0].param_value : '',
                                                                    CHANNELNAME: maildataObj.CHANNEL_ID,
                                                                    CHANNELREFNO: maildataObj.CHANNEL_REF_NO,
                                                                    ORDERCUSTNO: maildataObj.ORDER_CUST_ACC_NO,
                                                                    AMOUNT: maildataObj.AMOUNT,
                                                                    CODE: maildataObj.STATUS_CODE,
                                                                    STATUSDESCRIPTION: maildataObj.STATUS_DESCRIPTION,
                                                                    DATE: moment(maildataObj.CREATED_DATE).format('DD/MM/YYYY'),
                                                                    UETR: maildataObj.UETR,
                                                                    ERRORDESCRIPTION: maildataObj.comments



                                                                }]
                                                                let statusValue = "FAILURE"
                                                                var trndetail = JSON.stringify(frtodata)
                                                                var request = require('request');

                                                                var options = {
                                                                    url: arrUrl[0].param_detail,
                                                                    // url: 'http://vnpss.tvlgss.com/Communication/SendMessage',
                                                                    timeout: 18000000,
                                                                    method: 'POST',
                                                                    json: {
                                                                        "PARAMS": {

                                                                            "WFTPA_ID": "DEFAULT",

                                                                            "PRCT_ID": "",

                                                                            "EVENT_CODE": "DEFAULT",



                                                                            "TRN_DETAILS": trndetail,

                                                                            "TEMPLATECODE": arrCatgory[0].param_value,


                                                                            "DTT_CODE": "",

                                                                            "DTT_CODE": "",

                                                                            "COMM_INFO": "",

                                                                            "SKIP_COMM_FLOW": true

                                                                        },

                                                                        "PROCESS_INFO": {

                                                                            "MODULE": "MODULE",

                                                                            "MENU_GROUP": "MENU_GROUP",

                                                                            "MENU_ITEM": "MENU_ITEM",

                                                                            "PROCESS_NAME": "PROCESS_NAME"

                                                                        }
                                                                    },
                                                                    headers: {
                                                                        "session-id": headers["session-id"],
                                                                        "routingKey": headers.routingKey,
                                                                        'Content-Type': 'application/json'

                                                                    }
                                                                }

                                                                reqInstanceHelper.PrintInfo(serviceName, '------------EMail API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                                request(options, function (error, responseFromImagingService, responseBody) {

                                                                    if (error) {
                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------Email send API ERROR-------' + error, objSessionLogInfo);
                                                                        nextobjctfunc()

                                                                    } else {
                                                                        reqInstanceHelper.PrintInfo(serviceName, '----------- Email send-API Response JSON-------' + JSON.stringify(responseBody), objSessionLogInfo);
                                                                        if (responseBody.data == 'SUCCESS') {  // resolve('SUCCESS')
                                                                            statusValue = "SUCCESS"
                                                                            nextobjctfunc()
                                                                        }
                                                                        else {
                                                                            reqInstanceHelper.PrintInfo(serviceName, '------------Email send not success -------' + error, objSessionLogInfo);
                                                                            nextobjctfunc()
                                                                        }
                                                                    }
                                                                });

                                                            } catch (error) {
                                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                resolve('ERROR')
                                                            }

                                                        }, function () {
                                                            //let documentapiRes = await preparedocapibody(imgdataarr, arrapiparams, arrurl, res, GetFinalStatus, to_be_upld_count)
                                                            //  if (statusValue == 'SUCCESS') {
                                                            reqInstanceHelper.PrintInfo(serviceName, '------ MAIL SENT SUCCESSFULLY AFTER KAFKA API CALL----', objSessionLogInfo);
                                                            resolve('SUCCESS')
                                                            //    } else {
                                                            //     reqInstanceHelper.PrintInfo(serviceName, '------  FAILURE IN SENDING MAIL  AFTER KAFKA  CALL CHECK YOUR CONFIG----', objSessionLogInfo);
                                                            //   resolve('ERROR')
                                                            //   }
                                                        }
                                                        )


                                                        // })

                                                    })
                                                })

                                            })
                                        })
                                    })
                                } else {

                                    reqInstanceHelper.PrintInfo(serviceName, '------------.Send message Url Not Found.-------' + error, objSessionLogInfo);
                                    resolve('ERROR')
                                }
                            })
                            //  resolve()
                        })
                    }
                    function doCommprsMsgupdate(arr, type,PRCT_ID) {
                        return new Promise(async (resolve, reject) => {
                            var updtQry;
                            if (type == 'RETRY_COUNT_EXCEEDED') {
                                updtQry = `update ad_gss_tran.comm_process_message set status='${type}_INPROGRESS' , modified_by = '${params.CREATED_BY}',modified_date = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',modified_by_name ='${params.CREATED_BY_NAME}',prct_id ='${PRCT_ID}', modified_clientip = '${objSessionLogInfo.CLIENTIP}', modified_tz = '${objSessionLogInfo.CLIENTTZ}', modified_tz_offset = '${objSessionLogInfo.CLIENTTZ_OFFSET}', modified_by_sessionid = '${objSessionLogInfo.SESSION_ID}', modified_date_utc = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where STATUS in ('RETRY_COUNT_EXCEEDED','SAME_BUSINESS_DAY_EXCEEDED') AND type='KAFKA' and message  like '%OrigChannelID%' `

                            } else {
                                var comsg_id = await arraytostr(arr);
                                updtQry = `update ad_gss_tran.comm_process_message set status='ALREADY_TAKEN' , modified_by = '${params.CREATED_BY}',modified_date = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',modified_by_name ='${params.CREATED_BY_NAME}',prct_id ='${PRCT_ID}', modified_clientip = '${objSessionLogInfo.CLIENTIP}', modified_tz = '${objSessionLogInfo.CLIENTTZ}', modified_tz_offset = '${objSessionLogInfo.CLIENTTZ_OFFSET}', modified_by_sessionid = '${objSessionLogInfo.SESSION_ID}', modified_date_utc = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where  commpm_id in ${comsg_id} `
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
        } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }
    })












});

module.exports = app;
