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
    var serviceName = 'NPSS (S) Send Kafka Purpose Code Notification';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Send Kafka Purpose Code Notification';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (S) Send Kafka Purpose Code Notification';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection     
                try {
                    var taketrnlist = `select cncpc_id,purpose_code,purpose_description,enable_flag from core_nc_purpose_codes `
                    ExecuteQuery1(taketrnlist, async function (arrresult) {
                        if (arrresult.length > 0) {
                            const kafka = new Kafka({
                                 clientId: params.clientId,
                                brokers: [params.kafkaipPort],
                                retry: {
                                    initialRetryTime: 100,
                                    retries: 5
                                  }
                            })
                          try{
                            producer = kafka.producer()
                            await producer.connect()
                            reqAsync.forEachOfSeries(arrresult, function (arrresultObj, i, nextobjctfunc) {
                                try {
                                    
                                    var dataobj = {
                                        code:arrresultObj.purpose_code,
                                        description:arrresultObj.purpose_description,
                                        enabled:arrresultObj.enable_flag,
                                        Action: 'M',
                                    }
                                    var sendtoKafka = async () => {                                       
                                        try{
                                            var datatype = await producer.send({
                                                topic: params.topic,
    
                                                messages: [
                                                    {
                                                        value: JSON.stringify(dataobj)
                                                    }
                                                ],
                                            })
                                            if (datatype.length) {
                                                reqInstanceHelper.PrintInfo(serviceName, "........................Data move successfully..............."+arrresultObj.cncpc_id, objSessionLogInfo);
                                                console.log("........................ Data move successfully..............."+arrresultObj.cncpc_id)
                                                nextobjctfunc()
                                            } else {
                                                reqInstanceHelper.PrintInfo(serviceName, "........................Data not move to kafka..............."+arrresultObj.cncpc_id, objSessionLogInfo);
                                                console.log("........................ Data not move to kafka..............."+arrresultObj.cncpc_id)
                                                nextobjctfunc()
                                            }
                                        }catch(error){
                                            reqInstanceHelper.PrintInfo(serviceName, "........................Error in Kafka msg producing..............."+error, objSessionLogInfo);
                                            console.log("........................ Error in Kafka msg producing..............."+error)
                                            objresponse.status = 'Failure';
                                            objresponse.msg = error;
                                            sendResponse(null, objresponse)
                                        }
                                       
                                    }

                                    sendtoKafka()

                                } catch (error) {
                                    reqInstanceHelper.PrintInfo(serviceName, "........................Error in async func..............."+error, objSessionLogInfo);
                                    console.log("........................ Error in async func..............."+error)
                                    objresponse.status = 'Failure';
                                    objresponse.msg = error;
                                    sendResponse(null, objresponse)

                                }
                            }, function () {
                                reqInstanceHelper.PrintInfo(serviceName, "........................All data move successfully...............", objSessionLogInfo);
                                console.log("........................ All data move successfully...............")
                                producer.disconnect()
                                objresponse.status = 'SUCCESS';
                                objresponse.msg = 'All data move successfully';
                                sendResponse(null, objresponse)
                            })

                          }catch(error){
                            reqInstanceHelper.PrintInfo(serviceName, "........................Error in Kafka Connection..............."+error, objSessionLogInfo);
                            console.log("........................ Error in Kafka Connection..............."+error)
                            objresponse.status = 'Failure';
                            objresponse.msg = 'Error in Kafka Connection';
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
