var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    

    /*  Created By :   Siva Harish
    Created Date :31/12/2022
    Modified By : 
    Modified Date : 
    Reason for : 
     
    */
    var serviceName = 'NPSS (S) Send Kafka Participant Notification';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Send Kafka Participant Notification';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (S) Send Kafka Participant Notification';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection     
                try {
                    var takeparticipantList = `select cbp.cncbp_id,cbp.bank_bic,cbp.bank_short_code,cbp.bank_name,cbp.participation_flag,cbp.participation_flag,cbp.rct_subscription_flag,cbp.bct_subscription_flag,cpa.from_date,cpa.from_time,cpa.to_date,cpa.to_time,cpa.action from core_nc_bank_participation cbp inner join core_nc_bank_part_avail cpa on cbp.bank_bic = cpa.bank_bic`
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

                                            enabled: arrresultObj.participation_flag,

                                            transferMode: transferMode,
                                        }

                                        if (arrresultObj.participation_flag == 'Y') {
                                            if(arrresultObj.from_date){
                                                dataobj.fromDate = moment(arrresultObj.from_date).format('DDMMYYYY')
                                           
                                               

                                            }else{
                                                dataobj.fromDate = ''
                                            }
                                        
                                            if(arrresultObj.from_time){
                                               var Time = arrresultObj.from_time.split(':')
                                               var remAMPM = Time[1].split(' ')
                                               dataobj.fromTime = Time[0]+remAMPM[0]
                                            }else{
                                                dataobj.fromTime = ''
                                            }
                                               

                                            if(arrresultObj.to_date){
                                                 dataobj.toDate = moment(arrresultObj.to_date).format('DDMMYYYY')
                                               
                                                 
 
                                             }else{
                                                 dataobj.toDate = ''
                                             }

                                             if(arrresultObj.to_time){
                                                var Time = arrresultObj.to_time.split(':')
                                                var remAMPM = Time[1].split(' ')
                                                dataobj.toTime = Time[0]+remAMPM[0]
                                             }else{
                                                dataobj.toTime = ''
                                             }

                                                // dataobj.toTime = arrresultObj.to_time,

                                                dataobj.Action = arrresultObj.action
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
                                                    reqInstanceHelper.PrintInfo(serviceName, ".......................Data Move to kafka Successfully..............."+arrresultObj.cncbp_id, objSessionLogInfo);
                                                     console.log("........................ Data Move to kafka Successfully..............."+ arrresultObj.cncbp_id)
                                                    nextobjctfunc()
                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, ".......................Data Not Move to kafka Successfully..............."+arrresultObj.cncbp_id, objSessionLogInfo);
                                                     console.log("........................ Data Not Move to kafka Successfully..............."+ arrresultObj.cncbp_id)
                                                    nextobjctfunc()
                                                }
                                            } catch (error) {
                                                reqInstanceHelper.PrintInfo(serviceName, "........................Error in producing kafka msg..............." + error, objSessionLogInfo);
                                                
                                                 console.log("........................ Error in producing kafka msg..............."+ error)
                                                objresponse.status = 'Failure';
                                                objresponse.msg = error;
                                                sendResponse(null, objresponse)
                                            }

                                        }

                                        sendtoKafka()



                                    } catch (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, "........................Error in kafka connection..............." + error, objSessionLogInfo);
                                        console.log("........................ Error in kafka connection..............."+ error)
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
                              console.log("........................ Error..............."+ error)
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
