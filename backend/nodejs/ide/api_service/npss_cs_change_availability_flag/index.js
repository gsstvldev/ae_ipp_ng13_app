var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    
/*  Created By :   Siva Harish
   Created Date :28/04/2023
  Reason for Adding Status Update 9/05/2023
    
   */
var serviceName = 'NPSS (CS) Change Availability Flag';
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
        objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Change Availability Flag';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSS (CS) Change Availability Flag';
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
                    var PrepareDate = splitTime[0] + ':' + splitTime[1]
                    var Updavlflag = `update core_nc_bank_part_avail set status = 'APPROVED' where cncbpa_id in (select cncbpa_id from core_nc_bank_part_avail where  from_date = '${currdate}' and cast (from_time as time) <= '${PrepareDate}' and status = 'NOTIFICATION_SENT' and need_sync = 'Y')`
                    ExecuteQuery(Updavlflag, function (arrresult) {
                        if (arrresult == 'SUCCESS') {
                            var Updavcorbank = `update core_nc_bank_part_avail set iv_availability_flag = 'N'  where cncbpa_id in (select cncbpa_id from core_nc_bank_part_avail where  from_date = '${currdate}' and cast (from_time as time) <= '${PrepareDate}' and status = 'APPROVED' and need_sync = 'Y')`
                            ExecuteQuery(Updavcorbank, function (arrresult) {
                                if (arrresult == 'SUCCESS') {
                                    objresponse.status = 'SUCCESS'
                                    objresponse.data = 'ALL data move successfully'
                                    sendResponse(null,objresponse)
                                }else{
                                    objresponse.status = 'SUCCESS'
                                    objresponse.data = 'Error in update core_nc_bank_part_avail table or update error'
                                    sendResponse(null,objresponse)
                                }
                            })
                           
                        } else {
                            objresponse.status = 'SUCCESS'
                            objresponse.data = 'No data found in core_nc_bank_part_avail table or update error'
                            sendResponse(null,objresponse)
                        }

                    })
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
