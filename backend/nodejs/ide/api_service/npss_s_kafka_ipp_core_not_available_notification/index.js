var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    
    

/*  Created By :  Daseen

Created Date :29/12/2022

Modified By :

Modified Date :

Reason for :

 

*/

var serviceName = 'NPSS (S) Kafaka IPP Core not available';

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

        objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Kafaka IPP Core not available';

        objSessionLogInfo.ACTION = 'ACTION';

        objSessionLogInfo.PROCESS = 'NPSS (S) Kafaka IPP Core not available';

        // Get DB Connection

        reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {

            mTranConn = pSession; //  assign connection    

            try {
                const kafka = new Kafka({

                    clientId: params.clientId,

                    brokers: [params.brokers]

                })

                let producer;

                async function mykafka() {
                    try{
                    producer = kafka.producer()
                    await producer.connect()
                    
                    
                    var kafobj = {

                        "bic": params.bic,

                        "shortCode": params.shortCode,

                        "name": params.name,

                        "enabled": params.enabled,

                        "mode": params.mode,

                        "fromDate": params.fromDate,

                        "fromTime": params.fromTime,

                        "toDate": params.toDate,

                        "toTime": params.toTime,

                        "Action": params.Action

                    }
                    try {

                        var senddata = await producer.send({

                            topic: params.topic,

                            messages: [

                                { value: JSON.stringify(kafobj) },

                            ],

                        })

                        if (senddata.length) {
                           producer.disconnect()
                            objresponse.status = 'SUCCESS';
                            objresponse.msg = 'Kafka Insert Success';
                            reqInstanceHelper.PrintInfo(serviceName, ".......................Data  moved to kafka Sussfully..............."+JSON.stringify(params), objSessionLogInfo);
                            sendResponse(null, objresponse)
                        } else {
                            producer.disconnect()
                            objresponse.status = 'Failure';

                            objresponse.msg = 'Kafka  Insert not success';
                            reqInstanceHelper.PrintInfo(serviceName, ".......................Data not moved to kafka ..............."+JSON.stringify(params), objSessionLogInfo);
                            sendResponse(null, objresponse)
                        }


                    } catch (error) {

                      
                        reqInstanceHelper.PrintInfo(serviceName, ".......................Error in kafka connection..............."+ error, objSessionLogInfo);
                        console.log(error)
                        producer.disconnect()


                    }

                }
                catch (error) {
                    reqInstanceHelper.PrintInfo(serviceName, "........................Error in producing kafka msg..............." + error, objSessionLogInfo);
                    objresponse.status = 'Failure';
                    objresponse.msg = error;
                    sendResponse(null, objresponse)
                }
                }

                mykafka();




            } catch (error) {
                reqInstanceHelper.PrintInfo(serviceName, ".......................Error in DB Connection..............."+ error, objSessionLogInfo);
                reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);

            }


            //Execute Query Function
            function ExecuteQuery1(query, callback) {
                reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                    try {
                        if (error) {
                            sendResponse(error, null);
                        } else {
                            if (result.rows.length > 0) {
                                callback(result.rows);
                            } else {
                                callback([]);
                            }
                        }
                    } catch (error) {
                        sendResponse(error, null);
                    }
                });
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
