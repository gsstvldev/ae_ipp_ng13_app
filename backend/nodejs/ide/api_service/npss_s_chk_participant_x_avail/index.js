var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    /*  Created By :   Siva Harish
       Created Date :13/1/2023
       Modified By : Siva Harish
       Modified Date : 17/01/2023
       
        
       */
    var serviceName = 'NPSS (S) Check Participant X Availability';
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
    var moment = require('moment')
    var reqAsync = require('async');
    var success_process_status, success_status;
    var Id = params.Id;
    var dt_code, dtt_code;
    var { Kafka } = require('kafkajs')
    var reqAsync = require('async');
    var mTranConn = "";
    var producer
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Check Participant X Availability';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (S) Check Participant X Availability';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    let PRCT_ID = prct_id
                    try {
                        var TakeUrl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync = 'Y'`
                        ExecuteQuery1(TakeUrl, function (arrUrl) {
                            if (arrUrl.length) {
                                var Takechnl = `select process_name,destination_system from core_ns_params where  need_sync = 'Y' and process_name = '${params.processName}' group by process_name,destination_system`
                                ExecuteQuery1(Takechnl, function (arrChnl) {
                                    if (arrChnl.length > 0) {
                                        reqAsync.forEachOfSeries(arrChnl, function (arrrearrChnlsultObj, i, channelnextobjctfunc) {
                                            var TakeKafkaTp = `select param_value from core_ns_params where process_name = '${params.processName}' and destination_system ='${arrrearrChnlsultObj.destination_system}' and param_name = 'KAFKA_TOPIC' and need_sync = 'Y'`
                                            ExecuteQuery1(TakeKafkaTp, function (arrTopic) {
                                                if (arrTopic.length > 0) {
                                                    var TakeComCat = `select param_value from core_ns_params where process_name = '${params.processName}' and destination_system ='${arrrearrChnlsultObj.destination_system}' and param_name = 'COMM_GROUP' and need_sync = 'Y'`
                                                    ExecuteQuery1(TakeComCat, function (arrComCat) {
                                                        if (arrComCat.length > 0) {
                                                            var TakeOffset = `SELECT setup_json FROM clt_tran.TENANT_SETUP WHERE TENANT_ID ='aefab' AND CATEGORY='TIMEZONE'`
                                                            ExecuteQuery1(TakeOffset, async function (arroffset) {
                                                                var Taketime = JSON.parse(arroffset[0]['setup_json'])
                                                                var offset = Number(Taketime['timezone_offset']) / Number(60)
                                                                var Utcdate = new Date().toISOString()
                                                                var getAEdateTime = new Date(Utcdate)
                                                                getAEdateTime.setHours(getAEdateTime.getHours() + offset)
                                                                var AEtime = getAEdateTime.toISOString()
                                                                var SplitDtndTim = AEtime.split('T')
                                                                var currdate = SplitDtndTim[0] + ' 00:00:00'
                                                                var splitTime = SplitDtndTim[1].split(':')
                                                                var PrepareDate = splitTime[0] + ':' + splitTime[1]
                                                                var takeparticipantList = `select * from core_nc_bank_part_avail where  from_date = '${currdate}' and cast (from_time as time) - INTERVAL '1 minutes' = '${PrepareDate}' and need_sync = 'Y'`
                                                                ExecuteQuery1(takeparticipantList, async function (arrresult) {
                                                                    if (arrresult.length > 0) {
                                                                        reqAsync.forEachOfSeries(arrresult, function (arrresultObj, i, nextobjctfunc) {
                                                                            try {

                                                                                var transferMode
                                                                                if (arrresultObj.rct_subscription_flag == 'Subscribed' && arrresultObj.bct_subscription_flag == 'Subscribed') {
                                                                                    transferMode = 'BOTH'
                                                                                } else if (arrresultObj.rct_subscription_flag == 'Subscribed') {
                                                                                    transferMode = 'INST'
                                                                                } else {
                                                                                    transferMode = 'BATCH'
                                                                                }
                                                                                var dataobj = {
                                                                                    bic: arrresultObj.bank_bic,
                                                                                    shortCode: arrresultObj.bank_short_code,
                                                                                    name: arrresultObj.bank_name,
                                                                                    enabled: 'N',
                                                                                    mode: transferMode,

                                                                                }


                                                                                dataobj.fromDate = moment(arrresultObj.from_date).format('DDMMYYYY')
                                                                                dataobj.fromTime = moment(arrresultObj.from_time, "h:mm:ss A").format("HHmmss")
                                                                                dataobj.toDate = moment(arrresultObj.to_date).format('DDMMYYYY')
                                                                                dataobj.toTime = moment(arrresultObj.to_time, "h:mm:ss A").format("HHmmss")
                                                                                dataobj.Action = arrresultObj.action


                                                                                var paramData = dataobj
                                                                                try {

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
                                                                                                "TEMPLATECODE": arrComCat[0].param_value,
                                                                                                "DT_CODE": "",
                                                                                                "DTT_CODE": "",
                                                                                                "TOPIC_NAME": arrTopic[0].param_value || '',
                                                                                                "STATIC_DATA": paramData || '',
                                                                                                "SKIP_COMM_FLOW": true
                                                                                            },
                                                                                            "PROCESS_INFO": {
                                                                                                "MODULE": "NPSS",
                                                                                                "MENU_GROUP": "NPSS",
                                                                                                "MENU_ITEM": "NPSS",
                                                                                                "PROCESS_NAME": params.processName
                                                                                            }
                                                                                        },
                                                                                        headers: {
                                                                                            "session-id": "STATIC-SESSION-NPSS",
                                                                                            "routingKey": "CLT-0~APP-0~TNT-0~ENV-0",
                                                                                            'Content-Type': 'application/json'


                                                                                        }
                                                                                    }


                                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                                                    request(options, function (error, responseFromImagingService, responseBody) {
                                                                                        try {
                                                                                            if (error) {
                                                                                                reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                                                                sendResponse(error, null);
                                                                                            } else {
                                                                                                reqInstanceHelper.PrintInfo(serviceName, "........................-API CALL STATUS FOR ..............." + arrresultObj.cncbpa_id + JSON.stringify(responseBody), objSessionLogInfo);
                                                                                                if (responseBody.data == 'SUCCESS') {
                                                                                                    var Updateprscode = `Update core_nc_bank_part_avail set status = 'NOTIFICATION_SENT' ,MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where cncbpa_id = '${arrresultObj.cncbpa_id}'`
                                                                                                    ExecuteQuery(Updateprscode, async function (arrUpdt) {
                                                                                                        if (arrUpdt == 'SUCCESS') {
                                                                                                            reqInstanceHelper.PrintInfo(serviceName, "........................Update Success  FOR ..............." + arrresultObj.cncbpa_id, objSessionLogInfo);
                                                                                                            nextobjctfunc()
                                                                                                        } else {
                                                                                                            reqInstanceHelper.PrintInfo(serviceName, "........................Update  Failure FOR ..............." + arrresultObj.cncbpa_id, objSessionLogInfo);
                                                                                                            nextobjctfunc()
                                                                                                        }

                                                                                                    })
                                                                                                } else {
                                                                                                    reqInstanceHelper.PrintInfo(serviceName, "........................-API CALL Failure FOR ..............." + arrresultObj.cncbpa_id, objSessionLogInfo);
                                                                                                    nextobjctfunc()
                                                                                                }




                                                                                            }
                                                                                        } catch (error) {
                                                                                            reqInstanceHelper.PrintInfo(serviceName, '------------ API Catch ERROR-------' + error, objSessionLogInfo);
                                                                                            sendResponse(error, null);
                                                                                        }

                                                                                    });

                                                                                } catch (error) {
                                                                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                                    sendResponse(error, null);
                                                                                }









                                                                            } catch (error) {
                                                                                nextobjctfunc()

                                                                            }
                                                                        }, function () {
                                                                            channelnextobjctfunc()

                                                                        })






                                                                    } else {
                                                                        reqInstanceHelper.PrintInfo(serviceName, "........................ NO Data FOUND in core_nc_bank_part_avail table...............", objSessionLogInfo);

                                                                        channelnextobjctfunc()
                                                                    }

                                                                })
                                                            })
                                                        } else {
                                                            reqInstanceHelper.PrintInfo(serviceName, "........................No COMM_GROUP Found..............." + arrrearrChnlsultObj.destination_system, objSessionLogInfo);
                                                            channelnextobjctfunc()
                                                        }
                                                    })
                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, "........................No Topic found ..............." + arrrearrChnlsultObj.destination_system, objSessionLogInfo);
                                                    channelnextobjctfunc()
                                                }
                                            })
                                        }, function () {
                                            reqInstanceHelper.PrintInfo(serviceName, "........................ALL DATA MOVED SUCCESSFULLY TO ALL CHANNEL...............", objSessionLogInfo);
                                            objresponse.status = 'SUCCESS';
                                            objresponse.msg = 'ALL DATA MOVED SUCCESSFULLY TO ALL CHANNEL';
                                            sendResponse(null, objresponse)
                                        })
                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, "........................No Data Found in corensparam table...............", objSessionLogInfo);
                                        objresponse.status = 'SUCCESS';
                                        objresponse.msg = 'No Data Found in corensparam table';
                                        sendResponse(null, objresponse)
                                    }
                                })

                            } else {
                                reqInstanceHelper.PrintInfo(serviceName, "........................API Url Not Found...............", objSessionLogInfo);

                                objresponse.status = 'FAILURE';
                                objresponse.msg = 'API Url Not Found';
                                sendResponse(null, objresponse)
                            }
                        })






                        function tConvert(gettime) {
                            return new Promise((resolve, reject) => {
                                var time = gettime.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
                                if (time.length > 1) { // If time format correct
                                    time = time.slice(1);  // Remove full string match value
                                    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
                                    time[0] = +time[0] % 12 || 12; // Adjust hours
                                }
                                resolve(time.join('')) // return adjusted time or original string

                            })
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
