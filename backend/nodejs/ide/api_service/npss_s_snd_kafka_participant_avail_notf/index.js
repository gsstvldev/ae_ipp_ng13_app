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
       Reason for : Removing Console log
       Reason for : Handling Enabled Y Siva Harish
       Reason for : Changing  part x availability Query 20/03/2023
          Reason for : Changing  part x availability select Query  08/04/2023
            Reason for : Changing  api payload nullify totime,fromtime,fromdate,todate 8/5/2023
            Reason for: Delete redis key on 09-11-2023 by daseen
        
       */
            var serviceName = 'NPSS (S) Send Kafka Participant X Availability Notification';
            var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
            var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
            var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
            var reqXlsx = require('node-xlsx').default;
            var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
            var reqRedisInstance = require($REFPATH + "instance/RedisInstance.js");
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
                    objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Send Kafka Participant X Availability Notification';
                    objSessionLogInfo.ACTION = 'ACTION';
                    objSessionLogInfo.PROCESS = 'NPSS (S) Send Kafka Participant X Availability Notification';
                    // Get DB Connection 
                    reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                        mTranConn = pSession; //  assign connection     
                        reqRedisInstance.GetRedisConnection(function (redisErr, redisSession) {
                            if (redisErr) {
                                reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10004', 'Error in Getting Redis Connection', redisErr);
                            } else {
                                try {
                                   
                                    var TakeUrl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync = 'Y'`
                                    ExecuteQuery1(TakeUrl,async function (arrUrl) {
                                    //    let delRediskeyRes = await todelRediskey()
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
                                                                        //var TakeOffset = `SELECT setup_json FROM clt_tran.TENANT_SETUP WHERE TENANT_ID ='aefab' AND CATEGORY='TIMEZONE'`
                                                                        var TakeOffset = `SELECT setup_json FROM clt_tran.TENANT_SETUP WHERE TENANT_ID ='${params.tenant_id}' AND CATEGORY='TIMEZONE'`
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
                                                                            // AEFrmtime = await tConvert(splitTime[0] + ':' + splitTime[1])
        
                                                                            // var takeparticipantList = `Select * from core_nc_bank_part_avail where rct_subscription_flag = 'Subscribed' and need_sync = 'Y' and (('${currdate}' not BETWEEN from_date AND to_date) and ('${PrepareDate}' not between cast (from_time as time) and cast (to_time as time) )and( from_date is not null and to_date is not null and from_time is not null and to_time is not null )) or (from_date is null and to_date is null and to_time is null and from_time is null)`
                                                                            var takeparticipantList = `select * from core_nc_bank_part_avail where  to_date <= '${currdate}' and cast (to_time as time) < '${PrepareDate}' and need_sync = 'Y' and availability_flag = 'N'`
                                                                            ExecuteQuery1(takeparticipantList, async function (arrresult) {
                                                                                if (arrresult.length > 0) {
                                                                                  
                                                                                    reqAsync.forEachOfSeries(arrresult, function (arrresultObj, i, nextobjctfunc) {
                                                                                        try {
                                                                                            var TakeBnkName = `select bank_name from core_nc_bank_part_avail where bank_bic = '${arrresultObj.bank_bic}' and need_sync = 'Y'`
                                                                                            ExecuteQuery1(TakeBnkName, async function (arrBankNm) {
                                                                                                if (arrBankNm.length > 0) {
                                                                                                    var UpdateActFlag = `Update core_nc_bank_part_avail set iv_availability_flag = 'Y',iv_from_date =null,iv_to_date =null,iv_from_time =null,iv_to_time =null where cncbpa_id = '${arrresultObj.cncbpa_id}'`
                                                                                                    ExecuteQuery(UpdateActFlag, async function (arrUpdt) {
                                                                                                        let delRediskeyRes = await todelRediskey()
                                                                                                        reqInstanceHelper.PrintInfo(serviceName, "........................ALL Redis key Deleted SUCCESSFULLY...............", objSessionLogInfo);
                                                                                                        if (arrUpdt == 'SUCCESS' && delRediskeyRes== 'SUCCESS') {
                                                                                                          
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
        
                                                                                                                name: arrBankNm[0].bank_name,
                                                                                                                enabled: 'Y',
                                                                                                                //   enabled: arrresultObj.availability_flag,
        
                                                                                                                mode: transferMode,
        
                                                                                                            }
        
                                                                                                            //   if(dataobj.enabled == 'Y'){
                                                                                                            dataobj.fromDate = ""
        
                                                                                                            dataobj.fromTime = ""
        
                                                                                                            dataobj.toDate = ""
        
                                                                                                            dataobj.toTime = ""
                                                                                                            //   }else{
                                                                                                            //       if (arrresultObj.from_date) {
                                                                                                            //           dataobj.fromDate = moment(arrresultObj.from_date).format('DDMMYYYY')
                                                                                                            //       } else {
                                                                                                            //           dataobj.fromDate = ''
                                                                                                            //       }
        
                                                                                                            //       if (arrresultObj.from_time) {
                                                                                                            //         var FormatFromTime =  moment(arrresultObj.from_time, ["h:mm A"]).format("HH:mm");
                                                                                                            //           var Time = FormatFromTime.split(':')
                                                                                                            //           var remAMPM = Time[1].split(' ')
                                                                                                            //           dataobj.fromTime = Time[0] + remAMPM[0] + '00'
                                                                                                            //       } else {
                                                                                                            //           dataobj.fromTime = ''
                                                                                                            //       }
        
        
                                                                                                            //       if (arrresultObj.to_date) {
                                                                                                            //           dataobj.toDate = moment(arrresultObj.to_date).format('DDMMYYYY')
        
        
        
                                                                                                            //       } else {
                                                                                                            //           dataobj.toDate = ''
                                                                                                            //       }
        
                                                                                                            //       if (arrresultObj.to_time) {
                                                                                                            //         var FormatTotime = moment(arrresultObj.to_time, ["h:mm A"]).format("HH:mm");
                                                                                                            //           var Time = FormatTotime.split(':')
                                                                                                            //           var remAMPM = Time[1].split(' ')
                                                                                                            //           dataobj.toTime = Time[0] + remAMPM[0] + '00'
                                                                                                            //       } else {
                                                                                                            //           dataobj.toTime = ''
                                                                                                            //       }
        
        
        
        
                                                                                                            //   }
        
        
                                                                                                            dataobj.Action = 'M'
        
        
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
                                                                                                                    if (error) {
                                                                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                                                                                        sendResponse(error, null);
                                                                                                                    } else {
                                                                                                                        reqInstanceHelper.PrintInfo(serviceName, "........................-API CALL STATUS FOR ..............." + arrresultObj.cncpc_id + JSON.stringify(responseBody), objSessionLogInfo);
        
                                                                                                                        nextobjctfunc()
                                                                                                                    }
                                                                                                                });
        
                                                                                                            } catch (error) {
                                                                                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                                                                sendResponse(error, null);
                                                                                                            }
        
                                                                                                        } else {
                                                                                                            reqInstanceHelper.PrintInfo(serviceName, "........................Failure in Updation..............." + arrresultObj.cncbpa_id, objSessionLogInfo);
        
                                                                                                            nextobjctfunc()
                                                                                                        }
        
                                                                                                    })
        
                                                                                                } else {
                                                                                                    reqInstanceHelper.PrintInfo(serviceName, "........................bankName not found..............." + arrresultObj.cncbpa_id, objSessionLogInfo);
        
                                                                                                    nextobjctfunc()
                                                                                                }
        
        
                                                                                            })
        
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
        
        
        
                                    function todelRediskey() {
                                        return new Promise((resolve, reject) => {
                                        
                                            redisSession.del('NPSS_DOWN_TIME');
                                            redisSession.del('NDT_FROM_DATE');
                                            redisSession.del('NDT_TO_DATE');
                                            redisSession.del('NDT_FROM_TIME');
                                            redisSession.del('NDT_TO_TIME');
                                            
        
                                            resolve('SUCCESS');
        
                                        })
                                    }
        
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
