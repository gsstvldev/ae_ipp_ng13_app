var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    


    /*  Created By :Siva Harish
    Created Date : 22-12-2022
    Modified By : 
    Modified Date : 
    Reason for : 
     
    */
    var serviceName = 'NPSS (CS) RCT Reversal Request Reject Pac002';
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
    var dob = params.DBTR_BIRTH_DATE;
    var objresponse = {
        'status': 'FAILURE',
        'data': {},
        'msg': ''
    }; // Response to Client
    // Assign function for loginformation and session info
    console.log('.................................Entering in NPSS (CS) RCT Reversal Request Reject Pac002 IDE')
    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
        try {
            objSessionLogInfo = objLogInfo; // Assing log information
            // Log Viewer Setup
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) RCT Reversal Request Reject Pac002';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) RCT Reversal Request Reject Pac002';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {
                        var PRCT_ID = prct_id
                        console.log('.................................Entering DB Connect in NPSS (CS) RCT Reversal Request Reject Pac002 IDE')
                      
                        try {
                            var urlqry = `Select param_detail from core_nc_system_setup where param_category = 'NPSS_REJECT_PACK002' and param_code = 'URL'`
                            var Takehours = `select tat_frequency,tat_expected from core_nc_rule_book_setup where rule_code = 'RCT_IP_REVERSAL_SLA'`
                            ExecuteQuery1(urlqry, function (arrurl) {
                                if(arrurl.length){
                                    ExecuteQuery1(Takehours, function (arrhrs) {
                                        try {
                                            if (arrhrs.length > 0) {                                  
                                                var TakedatafrmTrn = `select * from npss_transactions where status in ('IP_RCT_REVERSAL_REQ_RECEIVED', 'IP_RCT_RR_RETURN_READY', 'IP_RCT_REV_REQ_REJECTED')`
                                                ExecuteQuery1(TakedatafrmTrn, function (arrdata) {
                                                   if(arrdata.length){
                                                    reqAsync.forEachOfSeries(arrdata, function (arrTrndataobj, i, nextobjctfunc) { 
                                                  var Takedataaft45hrs = `select * from npss_trn_process_log where uetr = '${arrTrndataobj.uetr}' and status = 'IP_RCT_REVERSAL_REQ_RECEIVED' and process_name = 'Receive pacs.007' and created_date_utc <= CURRENT_TIMESTAMP - INTERVAL '${arrhrs[0].tat_expected}''${arrhrs[0].tat_frequency}'`
                                                  ExecuteQuery1(Takedataaft45hrs, function (arrTnprlogdata) {
                                                    if(arrTnprlogdata.length){
                                                        try {
                                                            var request = require('request');
                                                            var apiURL =
                                                                apiURL = arrurl[0].param_detail 
                                                            var options = {
                                                                url: apiURL,
                                                                timeout: 18000000,
                                                                method: 'POST',
                                                                json: {
                                                                    "cr_sort_code": arrTrndataobj.cr_sort_code,
                                                                    "dr_sort_code": arrTrndataobj.dr_sort_code,
                                                                    "hdr_msg_id": arrTrndataobj.hdr_msg_id,
                                                                    "hdr_created_date": arrTrndataobj.hdr_created_date,
                                                                    "hdr_total_amount": arrTrndataobj.hdr_total_amount,
                                                                    "payment_endtoend_id": arrTrndataobj.payment_endtoend_id,
                                                                    "uetr": arrTrndataobj.uetr,
                                                                     "tran_ref_id": arrTrndataobj.tran_ref_id,
                                                                    "active_status": 'RJCT',
                                                                    "clrsysref":arrTrndataobj.clrsysref,
                                                                     "rsn_code":'DS28', 
                                                                    
                                                                    "parent_npsstrrd_refno":arrTnprlogdata[0].npsstrrd_refno
                                 
                                                                },
                                                                headers: {
                                                                    'content-type': 'application/json'
                                                                }
                                                            };
                                 
                                                            console.log('------------API JSON-------' + JSON.stringify(options));
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                            request(options, function (error, responseFromImagingService, responseBody) {
                                                                if (error) {
                                                                    console.log('........NPSS (CS) RCT Reversal Request Reject Pac002........Error....................................'+error)
                                                                     reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                                                     sendResponse(error);
                                                                   
                                                                } else {
                                                                   if(responseBody == 'SUCCESS'){
                                                                   var updateTran = `update npss_transactions set  status = 'IP_RCT_REVREQ_REJ_REPLIED',process_status='RCTCompleted',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${arrTrndataobj.npsst_id}' `
                                                                   ExecuteQuery(updateTran, function (uptranresult) {
                                                                        try{
                                                                            nextobjctfunc()
                                                                        }catch(error){
                                                                            nextobjctfunc()
                                                                        }
                                                                        
                                                                    })
                                                                   }else{
                                                                    nextobjctfunc()
                                                                   }
                                                                   
                                                                }
                                                            });
                                                        } catch (error) {
                                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                            sendResponse(error);
                                                        }

        
        
                                                    }else{
                                                        
                                                        nextobjctfunc()
                                                    }
        
                                                  })
                                                    },
                                                    function () {
                                                        objresponse.status = 'SUCCESS';
                                                        sendResponse(null, objresponse)
                                                    })
        
                                                   }else{
                                                    console.log('..........NPSS (CS) RCT Reversal Request Reject Pac002 IDE No data found in Tran Table.....')
                                                    objresponse.status = 'FAILURE';
                                                    sendResponse(null, objresponse)
                                                   }
        
                                                })
        
        
                                            } else {
                                                console.log('..........NPSS (CS) RCT Reversal Request Reject Pac002 IDE No data found in core_nc_rule_book_setup.....')
                                                objresponse.status = 'FAILURE';
                                                sendResponse(null, objresponse)
                                            }
        
                                        } catch (error) {
                                            sendResponse(error)
                                        }
                                    });

                                }else{
                                    console.log('..........NPSS (CS) RCT Reversal Request Reject Pac002 IDE API Url Not Found.....')
                                    objresponse.status = 'FAILURE';
                                    sendResponse(null, objresponse)
                                }
                           
                        });

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
                            sendResponse(error)
                        }
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
            })
        } catch (error) {
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }
    })









});

module.exports = app;
