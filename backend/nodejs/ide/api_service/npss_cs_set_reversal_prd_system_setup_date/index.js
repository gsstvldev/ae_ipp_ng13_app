var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
 
    try {
        /*  Created By :Siva Harish M
        Created Date :20-12-2022
        Modified By :
        Modified Date :
     
        Reason for : 
        */
        var serviceName = 'NPSS Set Date In MI Level';
          var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
        var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
        var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
        var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
        var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
        var params = appRequest.body.PARAMS; //  Client input fromm Server
        var headers = appRequest.headers; // header details 
        var objSessionLogInfo = null; // set value is null
    
        var mTranConn = "";
    
    
    
        var objresponse = {
            'status': 'FAILURE',
            'data': {},
            'msg': ''
        }; // Response to Client
        // Assign function for loginformation and session info
    
        reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
            try {
                objSessionLogInfo = objLogInfo; // Assing log information
                // Log Viewer Setup
                objSessionLogInfo.HANDLER_CODE = 'NPSS Set Date In MI Level';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS Set Date In MI Level';
    
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, true, async function (pSession) {
                    mTranConn = pSession; //  assign connection     
    
                    try {
                          var getdays = `SELECT param_detail  FROM core_nc_system_setup WHERE param_category = 'RCT_OP_REV_PERIOD' and param_code ='NO_OF_DAYS' and status = 'APPROVED' and product_code = '${params.PRODUCT_CODE}'`
                        
                        
                        var getfullparam                   
                        ExecuteQuery1(getdays, function (arrResult) {
                            try {
                                if (arrResult.length) {
                             
                                    var current_date = new Date();
                                  current_date.setDate(current_date.getDate() - Number(arrResult[0].param_detail))
                                  var date = current_date.toLocaleString()
                                                             
                                    var setdate = date.split(',')[0].split('/')
                                    if(setdate[0].length == 1){
                                        setdate[0] = '0'+setdate[0]
                                    }else{
                                        setdate[0] = setdate[0]
                                    }
                                    var formatdate = setdate[2]+'-'+setdate[0]+'-'+setdate[1]


                                    objresponse.status = 'SUCCESS'
                                    objresponse.data = formatdate
                                    sendResponse(null, objresponse)

                                } else {
                                    objresponse.status = 'FAILURE'
                                    objresponse.data = 'Reversal Period System setup not available'
                                    sendResponse(null, objresponse)
                                }
                            } catch (error) {
                                reqInstanceHelper.PrintInfo(serviceName, 'Exception occured ' + error, objLogInfo);
                                reqInstanceHelper.SendResponse(serviceName, appResponse, '', objLogInfo, 'ERR-002', 'Exception occured  ', error, 'FAILURE');
                            }
    
                        })
    
    
    
    
    
    
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
                    } catch (error) {
                        sendResponse(error, null);
                    }
    
                })
            } catch (error) {
                sendResponse(error, null);
            }
        })
    
    
    
    
    
    }
    catch (error) {
        sendResponse(error, null);
    }
    
    

});

module.exports = app;
