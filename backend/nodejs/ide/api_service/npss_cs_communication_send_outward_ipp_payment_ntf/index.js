var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {



    /*  Created By :   Siva Harish
    Created Date :6/1/2022
    Modified By : Siva Harish
    Modified Date : 09/1/2023
    Reason for : 
     
    */
    var serviceName = 'NPSS (CS) Communication Send Outward IPP Payment Notifications';
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
    var moment = require('moment')
    var reqAsync = require('async');
    var mTranConn = "";
    var producer
    var failedData = []
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Communication Send Outward IPP Payment Notifications';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) Communication Send Outward IPP Payment Notifications';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection     
                try {
                    var Takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL'`
                    var TakeStatus = `select process_queue_status  from core_q_status_roles where screen_name = '${params.screenName}' and role_id = '${params.roleId}'`
                    var TakeTempCode = `select param_value from core_ns_params cnp where process_name = 'Outward IPP Payment'`
                    ExecuteQuery1(Takeurl, function (arrUrl) {
                        if (arrUrl.length > 0) {
                         
                            ExecuteQuery1(TakeStatus, function (arrStatus) {
                                if (arrStatus.length > 0) {
                                    var TakedatafrmntfTbl = `select npssnl_id,kafka_message,channel_id from npss_notification_logs  where status = '${arrStatus[0].process_queue_status}' `
                                    ExecuteQuery1(TakedatafrmntfTbl, function (arrTran) {
                                        if (arrTran.length > 0) {
                                            reqAsync.forEachOfSeries(arrTran, function (arrTranobj, i, nextobjctfunc) {
                                                var TakeTopicName = `select param_value,process_name from core_ns_params where destination_system = '${arrTranobj.channel_id}' and param_name = 'KAFKA_TOPIC'`
                                                ExecuteQuery1(TakeTopicName, function (TopicName) {
                                                    if (TopicName.length > 0) {
                                                        var TakeCmCategory = `select param_value  from core_ns_params where destination_system = '${arrTranobj.channel_id}' and param_name = 'COMM_GROUP'`
                                                        ExecuteQuery1(TakeCmCategory, function (arrComCategory) {
                                                            if (arrComCategory.length > 0) {
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
                                                                                "TEMPLATECODE": arrComCategory[0].param_value,
                                                                                "DT_CODE": "",
                                                                                "DTT_CODE": "",
                                                                                "TOPIC_NAME": TopicName[0].param_value || '',
                                                                                "STATIC_DATA": arrTranobj.kafka_message || '',
                                                                                "SKIP_COMM_FLOW": true
                                                                            },
                                                                            "PROCESS_INFO": {
                                                                                "MODULE": "NPSS",
                                                                                "MENU_GROUP": "NPSS",
                                                                                "MENU_ITEM": "NPSS",
                                                                                "PROCESS_NAME": TopicName[0].process_name
                                                                            }
                                                                        },
                                                                        headers: {
                                                                            "session-id": "STATIC-SESSION-NPSS",
                                                                            "routingKey": "CLT-0~APP-0~TNT-0~ENV-0",
                                                                            'Content-Type': 'application/json'


                                                                        }
                                                                    }



                                                                    console.log('------------API JSON-------' + JSON.stringify(options));
                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                                    request(options, function (error, responseFromImagingService, responseBody) {

                                                                        if (error) {
                                                                            reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                                            sendResponse(error, null);
                                                                        } else {

                                                                            console.log("------API CALL SUCCESS----", JSON.stringify(responseBody));

                                                                            if (responseBody.data == 'SUCCESS') {
                                                                                var UpdtTrnTbl = `update npss_notification_logs set status = 'Success', process_status = 'Success' where npssnl_id = '${arrTranobj.npssnl_id}'`
                                                                                ExecuteQuery(UpdtTrnTbl, function (arrUpdTranTbl) {
                                                                                    if (arrUpdTranTbl == 'SUCCESS') {
                                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------Updated Trn-------' + arrTranobj.npssnl_id, objSessionLogInfo);
                                                                                        nextobjctfunc()
                                                                                    } else {
                                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------Updated Failure Trn-------' + arrTranobj.npssnl_id, objSessionLogInfo);
                                                                                        var fail = {}
                                                                                        fail.updateFailTran = arrTranobj.npssnl_id
                                                                                        failedData.push(fail)
                                                                                        nextobjctfunc()
                                                                                    }
                                                                                })
                                                                            } else {
                                                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Call Failed Tran-------' + arrTranobj.npssnl_id, objSessionLogInfo);
                                                                                var failObj = {}
                                                                                failObj.apifailedTran = arrTranobj.npssnl_id
                                                                                failedData.push(failObj)
                                                                                nextobjctfunc()
                                                                            }
                                                                        }
                                                                    });

                                                                } catch (error) {
                                                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                    sendResponse(error, null);
                                                                }
                                                            } else {
                                                                var CatTobj = {}
                                                                CatTobj.Comm_Catgeory_Not_FoundTran = arrTranobj.npssnl_id
                                                                failedData.push(Tobj)
                                                                nextobjctfunc()
                                                            }
                                                        })

                                                    } else {
                                                        var Tobj = {}
                                                        Tobj.TopicName_Not_Found_Tran = arrTranobj.npssnl_id
                                                        failedData.push(Tobj)
                                                        nextobjctfunc()
                                                    }


                                                })




                                            }, function () {
                                                objresponse.status = 'SUCCESS';
                                                objresponse.FailedData = failedData || '';
                                                sendResponse(null, objresponse)
                                            })
                                        } else {
                                            objresponse.status = 'FAILURE';
                                            objresponse.msg = 'Tran Data not found for this status' + arrStatus[0].process_queue_status;
                                            sendResponse(null, objresponse)
                                        }

                                    })
                                } else {
                                    objresponse.status = 'FAILURE';
                                    objresponse.msg = 'Status Entry Not Found in core_q_status_roles tbl';
                                    sendResponse(null, objresponse)
                                }

                            })
                          

                        } else {
                            objresponse.status = 'FAILURE';
                            objresponse.msg = 'Communication API Url Not Found';
                            sendResponse(null, objresponse)
                        }

                    })

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
