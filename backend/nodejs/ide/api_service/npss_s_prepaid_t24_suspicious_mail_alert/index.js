var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {



    /*  Created By : Siva Harish
      Created Date : 14-02-2022
    Modified By : 
    Modified Date :
      
    */
    var serviceName = 'NPSS (S) Prepaid Card T24 Posting Suspicious Mail Alert';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var reqAsync = require('async');
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Prepaid Card T24 Posting Suspicious Mail Alert';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (S) Prepaid Card T24 Posting Suspicious Mail Alert';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection        

                try {
                    var TakeTrnId = `select npsst_id from npss_transactions  order by npsst_id desc`
                    ExecuteQuery1(TakeTrnId, function (arrTranid) {
                        try {
                            if (arrTranid.length > 0) {
                                reqInstanceHelper.PrintInfo(serviceName, 'Last Tran_Id in npssTran Table' + arrTranid[0].npsst_id, objSessionLogInfo);
                                var FindLastentry = `select status from npss_transactions where npsst_id = '${arrTranid[0].npsst_id}'`
                                ExecuteQuery1(FindLastentry, function (lastentryid) {
                                    if (lastentryid.length > 0) {
                                        if (lastentryid[0].status == params.status) {
                                            var TakecountTrnTbl = `select COUNT(*) as count from npss_transactions where status = '${params.status}'`
                                            ExecuteQuery1(TakecountTrnTbl, function (arrcount) {
                                                CallApi(arrcount)

                                            })
                                        } else {
                                            reqInstanceHelper.PrintInfo(serviceName, 'No Tran status match in Tran Table.Now Going to check Tranprocess log', objSessionLogInfo);
                                            var CheckTrnprsTbl = `select npsstpl_id from npss_trn_process_log order by npsstpl_id desc`
                                            ExecuteQuery1(CheckTrnprsTbl, function (Trnprslog) {
                                                if (Trnprslog.length) {
                                                    var checkStatus = `select status from npss_trn_process_log where npsstpl_id = '${Trnprslog[0].npsstpl_id}'`
                                                    ExecuteQuery1(checkStatus, function (Trnstatus) {
                                                        if (Trnstatus[0].status == params.status) {
                                                            var TakeprslogCount = `select COUNT(*) as count from npss_trn_process_log where status = '${params.status}'`
                                                            ExecuteQuery1(TakeprslogCount, function (arrTrnprscount) {

                                                                CallApi(arrTrnprscount)
                                                            })

                                                        } else {
                                                            reqInstanceHelper.PrintInfo(serviceName, 'Status Not Match in npssTranProcessLog Table', objSessionLogInfo);
                                                            objresponse.status = 'SUCCESS';
                                                            objresponse.msg = 'Status Not Match in npssTranProcessLog Table'
                                                            sendResponse(null, objresponse)
                                                        }

                                                    })

                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, 'No data found in npssTranProcessLog Table', objSessionLogInfo);
                                                    objresponse.status = 'SUCCESS';
                                                    objresponse.msg = 'No data found in npssTranProcessLog Table'
                                                    sendResponse(null, objresponse)
                                                }
                                            })
                                        }

                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, 'Status Not Match in npssTran Table', objSessionLogInfo);
                                        objresponse.status = 'SUCCESS';
                                        objresponse.msg = 'Status Not Match in npssTran Table'
                                        sendResponse(null, objresponse)
                                    }
                                })

                            } else {
                                reqInstanceHelper.PrintInfo(serviceName, 'No data found in npss Tran Table', objSessionLogInfo);
                                objresponse.status = 'FAILURE';
                                objresponse.data.msg = 'No data found in npss Tran Table'
                                sendResponse(null, objresponse)
                            }

                        } catch (error) {
                            sendResponse(error)
                        }
                    });

                    function CallApi(StatusCount) {
                        var TakeCometo = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_TO'`
                        ExecuteQuery1(TakeCometo, function (arrcomto) {
                            var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN'`
                            ExecuteQuery1(Takeorg, function (arrorgin) {
                                var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_GROUP'`
                                ExecuteQuery1(tkcomgp, function (arrcomgroup) {
                                    var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_CC'`
                                    ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                        var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_CATEGORY'`
                                        ExecuteQuery1(TakecomCat, function (arrcomcatgory) {
                                            var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL'`
                                            ExecuteQuery1(takeurl, function (arrUrl) {
                                                if(arrUrl.length){
                                                    var frtodata = [{
                                                        TO: arrcomto[0].param_value ? arrcomto[0].param_value : '',
                                                        CC: arrcomcc[0].param_value ? arrcomcc[0].param_value : '',
                                                        BCC: '',
                                                        ORIGIN: arrorgin[0].param_value ? arrorgin[0].param_value : '',
                                                        COMM_GROUP: arrcomgroup[0].param_value ? arrcomgroup[0].param_value : '',
                                                        COUNT : StatusCount[0].count
                                                    }]
                                                    var trndetail = JSON.stringify(frtodata)
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
        
                                                                "TRN_DETAILS": trndetail,
        
                                                                "TEMPLATECODE": arrcomcatgory[0].param_value,
        
                                                                "DT_CODE": "",
        
                                                                "DTT_CODE": "",
        
                                                                "COMM_INFO": "",
        
                                                                "SKIP_COMM_FLOW": true
        
                                                            },
        
                                                            "PROCESS_INFO": {
        
                                                                "MODULE": "MODULE",
        
                                                                "MENU_GROUP": "MENU_GROUP",
        
                                                                "MENU_ITEM": "MENU_ITEM",
        
                                                                "PROCESS_NAME": "PROCESS_NAME"
        
                                                            }
                                                        },
                                                        headers: {
                                                            "session-id": params.session_id,
                                                            "routingKey": params.routingKey,
                                                            'Content-Type': 'application/json'
        
                                                        }
                                                    }
        
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                    request(options, function (error, responseFromImagingService, responseBody) {
        
                                                        if (error) {
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                            sendResponse(error, null);
                                                        } else {
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBody, objSessionLogInfo);
        
                                                            objresponse.status = 'SUCCESS';
        
                                                            sendResponse(null, objresponse)
                                                        }
                                                    });
                                                }else{
                                                    reqInstanceHelper.PrintInfo(serviceName, '-----Api Url Not Found----', objSessionLogInfo);
                                                    objresponse.status = 'SUCCESS';
                                                    objresponse.msg = 'Api Url Not Found';
                                                    sendResponse(null, objresponse)
                                                }

                                            })
                                          
                                        })
                                    })
                                })
                            })
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


                } catch (error) {
                    sendResponse(error)
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
