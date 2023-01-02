var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    /*  Created By :   Siva Harish
    Created Date :2/1/2023
    Modified By : 
    Modified Date : 
    Reason for : 
     
    */
    var serviceName = 'NPSS (S) Send Kafka Participant X Availability Notification';
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
                try {
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
                       
                      var AEFrmtime = await tConvert(splitTime[0]+':'+splitTime[1])
                      console.log(AEFrmtime)
                       
                        var takeparticipantList = `select * from core_nc_bank_part_avail where  from_date = '${currdate}' and to_time  <= '${AEFrmtime}'`
                        ExecuteQuery1(takeparticipantList, async function (arrresult) {
                            if (arrresult.length > 0) {


                                const kafka = new Kafka({
                                    clientId: params.clientId,
                                    brokers: [params.kafkaipPort],
                                    retry: {
                                        initialRetryTime: 100,
                                        retries: 5
                                    }
                                })
                                try {
                                    producer = kafka.producer()
                                    await producer.connect()
                                    reqAsync.forEachOfSeries(arrresult, function (arrresultObj, i, nextobjctfunc) {
                                        try {
                                            var TakeBnkName = `select bank_name from core_nc_bank_participation where bank_bic = '${arrresultObj.bank_bic}'`
                                            ExecuteQuery1(TakeBnkName, async function (arrBankNm) {
                                                if (arrBankNm.length > 0) {
                                            var UpdateActFlag = `Update core_nc_bank_part_avail set availability_flag = 'Y' where cncbpa_id = '${arrresultObj.cncbpa_id}'`
                                            ExecuteQuery(UpdateActFlag, async function (arrUpdt) {
                                                if(arrUpdt == 'SUCCESS'){
                                                    var dataobj = {
                                                        bic: arrresultObj.bank_bic,
    
                                                        shortCode: arrresultObj.bank_short_code,
    
                                                        name: arrBankNm[0].bank_name,
    
                                                        enabled: 'Y',
    
                                                        mode: "INST",
                                                        fromDate: "",
    
                                                        fromTime: "",
    
                                                        toDate: "",
    
                                                        toTime: "",
    
                                                        Action: "M"
                                                    }
    
    
                                                    var sendtoKafka = async () => {
    
                                                        try {
                                                            var datatype = await producer.send({
                                                                topic: params.topic,
    
                                                                messages: [
                                                                    {
                                                                        value: JSON.stringify(dataobj)
                                                                    }
                                                                ],
                                                            })
                                                            if (datatype.length) {
                                                                reqInstanceHelper.PrintInfo(serviceName, ".......................Data Move to kafka Successfully..............." + arrresultObj.cncbpa_id, objSessionLogInfo);
                                                                console.log("........................ Data Move to kafka Successfully..............." + arrresultObj.cncbpa_id)
                                                                nextobjctfunc()
                                                            } else {
                                                                reqInstanceHelper.PrintInfo(serviceName, ".......................Data Not Move to kafka Successfully..............." + arrresultObj.cncbpa_id, objSessionLogInfo);
                                                                console.log("........................ Data Not Move to kafka Successfully..............." + arrresultObj.cncbpa_id)
                                                                nextobjctfunc()
                                                            }
                                                        } catch (error) {
                                                            reqInstanceHelper.PrintInfo(serviceName, "........................Error in producing kafka msg..............." + error, objSessionLogInfo);
                                                            console.log("........................ Error in producing kafka msg..............." + error)
                                                            objresponse.status = 'Failure';
                                                            objresponse.msg = error;
                                                            sendResponse(null, objresponse)
                                                        }
    
                                                    }
    
                                                    sendtoKafka()  
                                                }else{
                                                    reqInstanceHelper.PrintInfo(serviceName, "........................Failure in Updation..............." + arrresultObj.cncbpa_id, objSessionLogInfo);
                                                    console.log("........................ Failure in Updation..............." + arrresultObj.cncbpa_id)
                                                    nextobjctfunc()
                                                }
                                              
                                            })
                                                    
                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, "........................bankName not found..............." + arrresultObj.cncbpa_id, objSessionLogInfo);
                                                    console.log("........................ bankName not found..............." + arrresultObj)
                                                    nextobjctfunc()
                                                }


                                            })

                                        } catch (error) {
                                            reqInstanceHelper.PrintInfo(serviceName, "........................Error in kafka connection..............." + error, objSessionLogInfo);
                                            console.log("........................ Error in kafka connection..............." + error)
                                            objresponse.status = 'Failure';
                                            objresponse.msg = error;
                                            sendResponse(null, objresponse)

                                        }
                                    }, function () {
                                        reqInstanceHelper.PrintInfo(serviceName, "........................All Data Move Successfully...............", objSessionLogInfo);
                                        console.log("........................ All Data Move Successfully...............")
                                        producer.disconnect()
                                        objresponse.status = 'SUCCESS';
                                        objresponse.msg = 'All data success';
                                        sendResponse(null, objresponse)
                                    })
                                } catch (error) {
                                    console.log("........................ Error..............." + error)
                                    objresponse.status = 'Failure';
                                    objresponse.msg = error;
                                    sendResponse(null, objresponse)
                                }





                            } else {
                                reqInstanceHelper.PrintInfo(serviceName, "........................ NO Data FOUND in table...............", objSessionLogInfo);
                                console.log("........................ NO Data FOUND in table...............")
                                objresponse.status = 'SUCCESS';
                                objresponse.msg = 'No data Found in core nc bank participation';
                                sendResponse(null, objresponse)
                            }

                        })
                    })



                    function tConvert (gettime) {  
                        return new Promise((resolve, reject) => {
                            var time = gettime.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];                    
                            if (time.length > 1) { // If time format correct
                              time = time.slice (1);  // Remove full string match value
                              time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
                              time[0] = +time[0] % 12 || 12; // Adjust hours
                            }
                            resolve(time.join ('')) // return adjusted time or original string
                          
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
