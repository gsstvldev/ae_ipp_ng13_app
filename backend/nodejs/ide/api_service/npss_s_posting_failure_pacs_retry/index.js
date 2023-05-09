var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
try {
    /*   Created By : Siva Harish
    Created Date :09-05-2022
    Modified By : 
    Modified Date :    
   
    */
    let serviceName = 'NPSS (S) Posting Failure Pacs Retry';
    let reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    let reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    let reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    let reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    let reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    let params = appRequest.body.PARAMS; //  Client input fromm Server
    let headers = appRequest.headers; // header details 
    let objSessionLogInfo = null; // set value is null
    let cvAcNum, sell_margin, sell_rate;
    let xml2js = require('xml2js');
    let mTranConn = "";
    let addquery = "";
    let reqAsync = require('async');

    let objresponse = {
        'status': 'FAILURE',
        'data': '',
        'msg': ''
    }; // Response to Client
    // Assign function for loginformation and session info

    reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
        try {
            objSessionLogInfo = objLogInfo; // Assing log information
            // Log Viewer Setup
            objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Posting Failure Pacs Retry';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (S) Posting Failure Pacs Retry';

            // Get DB Connection                                                                                                                                      
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
               
                    try {
                        let org_status
                       
                        let Taketran = `select distinct uetr from npss_trn_process_log where status = '${params.eligible_status}' and process_status = '${params.eligible_process_status}'`
                        ExecuteQuery1(Taketran, function (arrdistuetr) {
                            try {
                                if (arrdistuetr.length > 0) {
                                    reqAsync.forEachOfSeries(arrdistuetr, function (arrdistuetrObj, i, nextuetrobjfun) {
                                        let Takestatus = `select status,org_status,process_name from npss_trn_process_log where uetr = '${arrdistuetrObj.uetr}' order by npsstpl_id desc`
                                        ExecuteQuery1(Takestatus, function (arrdata) {
                                            if (arrdata.length > 0) {
                                                let Callapis = async () => {
                                                    org_status = arrdata[0].org_status
                                                    if(arrdata[0].status == params.eligible_status){
                                                        let ProcessStatus = await GetProcessStatus(org_status)
                                                        if(ProcessStatus != ''){
                                                            let takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
                                                            let Apibody
                                                            let CommonData = await PrepareData(arrdistuetrObj, org_status, ProcessStatus, arrdata[0].process_name)
                                                            if (CommonData != 'FAILURE') {
                                                                Apibody = await PrepareApidata(arrdistuetrObj, org_status, arrdata[0].process_name, ProcessStatus, CommonData)
                                                                if (Apibody) {
                                                                    ExecuteQuery1(takeurl, function (arrurl) {
                                                                        if(arrurl.length > 0){
                                                                            try {
                                                                                let apiName = arrdata[0].process_name
                                                                                let apiStatus = org_status
                                                                                let request = require('request');
                                                                                let options = {
                                                                                    url: arrurl[0].param_detail,
                                                                                    timeout: 18000000,
                                                                                    method: 'POST',
                                                                                    json: Apibody,
                                                                                    headers: {
                                                                                        'Content-Type': 'application/json'
                                                                                    }
                                                                                }
            
                                                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                                                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                                                    if (error) {
                                                                                        reqInstanceHelper.PrintInfo(serviceName, '-------Apiname-----' + apiName + '...status..' + apiStatus + '....uetr.......' + arrdistuetrObj.uetr + ' API ERROR-------' + error, objSessionLogInfo);
                                                                                        nextuetrobjfun()
                                                                                    } else {
                                                                                        try {
                                                                                            if(responseBodyFromImagingService == 'SUCCESS'){
                                                                                                reqInstanceHelper.PrintInfo(serviceName, 'Api CaLL Success-------Apiname-----' + apiName + '...status..' + apiStatus + '....uetr.......' + arrdistuetrObj.uetr + ' API Response-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                                                                nextuetrobjfun()
                                                                                            }else{
                                                                                                reqInstanceHelper.PrintInfo(serviceName, 'Api CaLL failure-------Apiname-----' + apiName + '...status..' + apiStatus + '....uetr.......' + arrdistuetrObj.uetr + ' API Response-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                                                                nextuetrobjfun()
                                                                                            }
                                                                                           
                                                                                        } catch (error) {
                                                                                            reqInstanceHelper.PrintInfo(serviceName, '-------Apiname-----' + apiName + '...status..' + apiStatus + '....uetr.......' + arrdistuetrObj.uetr + ' API Catch error-------' + error, objSessionLogInfo);
                                                                                            nextuetrobjfun()
                                                                                        }
            
                                                                                    }
                                                                                });
                                                                            } catch (error) {
                                                                                sendResponse(null, error);
                                                                            }
                                                                        }else{
                                                                            reqInstanceHelper.PrintInfo(serviceName, ".......................API URL NOT FOUND IN CORE NC WORKFLOW SETUP TABLE...............", objSessionLogInfo);
                                                                            nextuetrobjfun()
                                                                        }
                                                                    })
                                                                  
                                                                } else {
                                                                    reqInstanceHelper.PrintInfo(serviceName, ".......................Error in Api body formation...............",+arrdistuetrObj.uetr,+'........status...........'+org_status, objSessionLogInfo);
                                                                    nextuetrobjfun()
                                                                }
        
                                                            } else {
                                                                reqInstanceHelper.PrintInfo(serviceName, ".......................No xml data not found for...............",+arrdistuetrObj.uetr,+'........status...........'+org_status, objSessionLogInfo);
                                                                nextuetrobjfun()
                                                            }
                                                        }else{
                                                            nextuetrobjfun()
                                                        }
                                                       
                                                    }else{
                                                        nextuetrobjfun() 
                                                    }
                                                   


                                                }
                                                Callapis()
                                            } else {
                                                reqInstanceHelper.PrintInfo(serviceName, ".......................No Tran found in npss_trn_process_log table for NPSSTPL_ID ..............." + arrdistuetrObj[0].uetr, objSessionLogInfo);
                                                nextuetrobjfun()
                                            }
                                        })

                                    },function(){
                                        reqInstanceHelper.PrintInfo(serviceName, ".......................All data move successfully...............", objSessionLogInfo);
                                        objresponse.status = 'SUCCESS'
                                        objresponse.data = 'All data move successfully'
                                        sendResponse(null, objresponse)
                                    })
                                }
                                else {
                                    reqInstanceHelper.PrintInfo(serviceName, ".......................No data found for this eligible status and process status...............", objSessionLogInfo);
                                    objresponse.status = 'No data found for this eligible status and process status'
                                    sendResponse(null, objresponse)
                                }
                            } catch (error) {
                                reqInstanceHelper.PrintInfo(serviceName, ".......................CatchError1..............." + error, objSessionLogInfo);
                            }


                        })


                    }
                    catch (error) {
                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                        sendResponse(error, null);
                    }
                


                function GetProcessStatus(org_status) {
                    return new Promise((resolve, reject) => {
                        if (org_status == 'IP_RCT_CC_POSTING_READY' || org_status == 'IP_RCT_PC_POSTING_READY' || org_status == 'IP_RCT_POSTING_READY' || org_status == 'OP_P2P_FILE_PLACED' || org_status == 'OP_P2B_FILE_PLACED' || org_status == 'OP_MAN_FILE_PLACED') {
                            resolve('RCTInProcess')
                        } else if (org_status == 'IP_RCT_STATUS_REPLIED' || org_status == 'IP_RCT_CC_STATUS_REPLIED' || org_status == 'IP_RCT_REVREQ_REJ_REPLIED') {
                            resolve('RCTCompleted')
                        } else if (org_status == 'IP_RCT_PC_STATUS_REPLIED') {
                            resolve('IAVFailure')
                        }else if(org_status == 'IP_RCT_RR_RETURNED' || org_status == 'IP_RCT_RETURNED'){ //place pacs 004
                            resolve('IAVFailure')
                        }else if(org_status == 'OP_RCT_REVERSAL_PLACED' || org_status == 'IP_RCT_RETURNED'){ //place pacs 007
                            resolve('RCTReversal')
                        }else{
                            resolve('')
                        }
                    })
                }

                function PrepareData(arrdistuetrObj, org_status, process_status, process_name) {
                    return new Promise((resolve, reject) => {
                        let TakereqresData = `select fn_pcidss_decrypt(message_data,$PCIDSS_KEY ) as message_data from npss_trn_req_resp_dtls where uetr = '${arrdistuetrObj.uetr}' and status = '${org_status}' and process_status = '${process_status}'`
                        ExecuteQuery1(TakereqresData, function (arrreqres) {
                            if (arrreqres.length > 0) {
                                resolve(arrreqres)
                            } else {
                                reqInstanceHelper.PrintInfo(serviceName, ".......................No data found in npss_trn_req_resp_dtls table for UETR..." + arrdistuetrObj.uetr + "....IN Process" + process_name + "....for status..." + org_status + "....", objSessionLogInfo);
                                resolve('FAILURE')
                            }

                        })
                    })
                }

                function PrepareApidata(arrdistuetrObj, org_status, process_name, ProcessStatus, CommonData) {
                    return new Promise(async (resolve, reject) => {
                        let newMsgId
                        var parser = new xml2js.Parser({ strict: false})
                        parser.parseString(CommonData[0].message_data, function (err, result) {
                            try{
                                if(process_name == 'Place Pacs008'){
                                    newMsgId = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]['GRPHDR'][0]['MSGID'][0]
                                }else if(process_name == 'Place Pacs004'){
                                    newMsgId = result["DOCUMENT"]["PMTRTR"][0]['GRPHDR'][0]['MSGID'][0]
                                }else if(process_name == 'Place Pacs007'){
                                    newMsgId = result["DOCUMENT"]["FITOFIPMTRVSL"][0]['GRPHDR'][0]['MSGID'][0]
                                }else if(process_name == 'Place Pacs002'){
                                    newMsgId = result["DOCUMENT"]["FITOFIPMTRVSL"][0]['GRPHDR'][0]['MSGID'][0]
                                }
                            }catch(error){
                                newMsgId = ''
                            }
                            
                            
                        });
                        let body
                        body = {
                            "batch_name": 'RETRY-Q',
                            "data": {
                            "payload": {
                                "process": "pacs Retry",
                                "message_data": CommonData[0].message_data || '',
                                "process_name": process_name || '',
                                "status": org_status || '',
                                "process_status": ProcessStatus || '',
                                "uetr": arrdistuetrObj.uetr || '',
                                "hdr_new_msg_id": newMsgId || '',
                                "retry_count": 1                        
                            }
                        }
                        }
                        resolve(body)
                    })
                }

                function GetTrnprslogTbldata(arrdistuetrObj, org_status, process_name) {
                    return new Promise((resolve, reject) => {
                        let status
                        if (org_status == 'IP_RCT_REVREQ_REJ_REPLIED') {
                            status = 'IP_RCT_REV_REQ_REJECTED'
                        }
                        let Taketrnprslogdata = `select * from npss_trn_process_log where status = '${status}' and uetr = '${arrdistuetrObj.uetr}'`
                        ExecuteQuery1(Taketrnprslogdata, function (arrdata) {
                            if (arrdata.length > 0) {
                                resolve(arrdata)
                            } else {
                                reqInstanceHelper.PrintInfo(serviceName, ".......................CBUAE_RETURN_CODE or Process_ref_no not found in npss_trn_process_log table for UETR..." + arrdistuetrObj.uetr + ".......for ProcessName........" + process_name + "......orgStatus....." + org_status, objSessionLogInfo);
                                resolve('FAILURE')
                            }

                        })
                    })

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
                } function _BulkInsertProcessItem(insertarr, strTrnTableName, callbackInsert) {
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
            sendResponse(error, null);
        }
    })
}
catch (error) {
    sendResponse(error, null);
}






















});

module.exports = app;
