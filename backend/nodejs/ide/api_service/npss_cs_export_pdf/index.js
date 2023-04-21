var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    




    /*  Created By : Siva Harish
    Created Date : 21/4/2023
    
     
    */
    var serviceName = 'NPSS (CS) Export PDF';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Export PDF';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) Export PDF';
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
                        var arrTranID
                        try {

                            if (Array.isArray(params.Tran_Id)) {
                                arrTranID = params.Tran_Id.map(function (eachTran) {
                                    return eachTran.toString();
                                });
                            } else {
                                arrTranID = [params.Tran_Id.toString()];
                            }
                            tranid = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                          
                            var Taketran = `select * from npss_core_api_process_log where npsscapl_id in ${tranid} and status = 'API_SUCCESS'`
                           
                            ExecuteQuery1(Taketran, function (arrdata) {
                                if (arrdata.length) {
                                    let Jsonbody = []
                                    let body = JSON.parse(arrdata[0].response_data_json)
                                    if (Array.isArray(body)) {
                                        Jsonbody = body
                                    } else {
                                        Jsonbody.push(body)
                                    }
                                    let bodyContent = []
                                    let Header = Object.keys(Jsonbody[0])
                                    let Headersvalue = []
                                    for (let k = 0; k < Header.length; k++) {
                                        let headerCol = {}
                                        headerCol.text = Header[k].toUpperCase()
                                        headerCol.style = 'tableheader'
                                        Headersvalue.push(headerCol)
                                    }
                                    bodyContent.push(Headersvalue)

                                    for (let i = 0; i < Jsonbody.length; i++) {
                                        let ColValue = []
                                        let Values = Object.values(Jsonbody[i])
                                        for (let j = 0; j < Values.length; j++) {
                                            let Colobj = {}
                                            Colobj.text = Values[j]
                                            Colobj.style = 'tablcolmn'
                                            ColValue.push(Colobj)
                                        }
                                        bodyContent.push(ColValue)
                                    }

                                    var dd = {
                                        pageSize: {
                                            width: 2000,
                                            height: 'auto'
                                        },
                                        content: [
                                            {
                                                table: {
                                                    body: bodyContent
                                                }
                                            },
                                        ],
                                        pageStyle: {
                                            width: 1200,
                                            height: 1000
                                        },
                                        styles: {
                                            tableheader: {
                                                fontSize: 15,
                                                align: 'center',
                                                bold: true,
                                                margin: [0, 0, 0, 10],
                                                fillColor: 'gray'
                                            }, tablcolmn: {
                                                bold: true,
                                                fontSize: 15,
                                            }
                                        }

                                    }
                                    objresponse.status = 'SUCCESS'
                                    objresponse.screenName = params.screenName+'_'+ moment().format('DDMMYYYY')+'_'+moment().format('HHMMSS')
                                    objresponse.data = dd
                                    sendResponse(null, objresponse)
                                }
                                else {
                                    objresponse.status = 'No Eligible Data';
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



                        } catch (error) {
                            sendResponse(error)
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
