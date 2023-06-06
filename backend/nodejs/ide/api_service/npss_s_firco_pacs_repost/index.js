var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    


    try {
        /*   Created By : Siva Harish
        Created Date :1-06-2022
       
        */
        let serviceName = 'NPSS (S) Firco Repost';
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
                objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Firco Repost';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS (S) Firco Repost';
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection     

                    try {
                        let Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
                        let Taketran = `select fn_pcidss_decrypt(tqrs.message_data,$PCIDSS_KEY ) as message_data,tqrs.firco_repush_flag,tqrs.npsstrrd_id,tqrs.uetr,tqrs.npsstrrd_refno,tqrs.uetr,t.hdr_msg_id,tqrs.status,tqrs.process_status,tqrs.process_name,t.account_currency,t.base_amount,t.cr_sort_code,t.dr_sort_code,t.process_type,t.payment_endtoend_id,t.npsst_id,t.clrsysref,t.account_currency from npss_trn_req_resp_dtls tqrs inner join npss_transactions t on tqrs.uetr = t.uetr where UPPER(tqrs.firco_repush_flag) = 'YES'`
                        ExecuteQuery1(Takekafkaurl, function (arrurl) {
                            if (arrurl.length > 0) {
                                ExecuteQuery1(Taketran, function (arrdata) {
                                    try {
                                        if (arrdata.length > 0) {
                                            let UpdInterstatus = `update npss_trn_req_resp_dtls tqrs set firco_repush_flag = 'Sent' from npss_transactions t   where tqrs.uetr = t.uetr and UPPER(tqrs.firco_repush_flag) = 'YES'`
                                            ExecuteQuery(UpdInterstatus, function (AftupdIntstatus) {
                                                if (AftupdIntstatus == 'SUCCESS') {
                                                    reqAsync.forEachOfSeries(arrdata, function (arrdataObj, i, nextuetrobjfun) {
                                                        let Callapis = async () => {

                                                            let Parameter = await PrepareParameter(arrdataObj)
                                                            if (Parameter != 'FAILURE') {
                                                                try {
                                                                    let apiName = arrdataObj.process_name

                                                                    let request = require('request');
                                                                    let options = {
                                                                        url: arrurl[0].param_detail,
                                                                        timeout: 18000000,
                                                                        method: 'POST',
                                                                        json: {
                                                                            "batch_name": 'FIRCO-REPUSH-Q',
                                                                            "data": {
                                                                                "payload": Parameter
                                                                            }
                                                                        },
                                                                        headers: {
                                                                            'Content-Type': 'application/json'
                                                                        }
                                                                    }

                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                                    request(options, async function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                                        if (error) {
                                                                            reqInstanceHelper.PrintInfo(serviceName, '-------Apiname-----' + apiName + '...status..' + arrdataObj.status + '....uetr.......' + arrdataObj.uetr + ' API ERROR-------' + error, objSessionLogInfo);
                                                                            nextuetrobjfun()
                                                                        } else {
                                                                            try {
                                                                                if (responseBodyFromImagingService == 'SUCCESS') {
                                                                                    reqInstanceHelper.PrintInfo(serviceName, 'Api CaLL Success-------Apiname-----' + apiName + '...status..' + arrdataObj.status + '....uetr.......' + arrdataObj.uetr + ' API Response-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                                                    nextuetrobjfun()
                                                                                 

                                                                                } else {

                                                                                    reqInstanceHelper.PrintInfo(serviceName, 'Api CaLL failure-------Apiname-----' + apiName + '...status..' + arrdataObj.status + '....uetr.......' + arrdataObj.uetr + ' API Response-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                                                    nextuetrobjfun()
                                                                                }

                                                                            } catch (error) {
                                                                                reqInstanceHelper.PrintInfo(serviceName, '-------Apiname-----' + apiName + '...status..' + arrdataObj.status + '....uetr.......' + arrdataObj.uetr + ' API Catch error-------' + error, objSessionLogInfo);
                                                                                nextuetrobjfun()
                                                                            }

                                                                        }
                                                                    });
                                                                } catch (error) {
                                                                    sendResponse(null, error);
                                                                }
                                                            } else {
                                                                nextuetrobjfun()
                                                            }





                                                        }
                                                        Callapis()

                                                    }, function () {
                                                        reqInstanceHelper.PrintInfo(serviceName, ".......................All data move successfully...............", objSessionLogInfo);
                                                        objresponse.status = 'SUCCESS'
                                                        objresponse.data = 'All data move successfully'
                                                        sendResponse(null, objresponse)
                                                    })
                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, ".......................Error in intermediate status update...............", objSessionLogInfo);
                                                    objresponse.status = 'Error in intermediate status update'
                                                    sendResponse(null, objresponse)
                                                }
                                            })

                                        }
                                        else {
                                            reqInstanceHelper.PrintInfo(serviceName, ".......................No eligible data found...............", objSessionLogInfo);
                                            objresponse.status = 'No eligible data found'
                                            sendResponse(null, objresponse)
                                        }
                                    } catch (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, ".......................CatchError1..............." + error, objSessionLogInfo);
                                    }


                                })
                            } else {
                                reqInstanceHelper.PrintInfo(serviceName, ".......................Kafka Url Not found...............", objSessionLogInfo);
                                objresponse.status = "Kafka Url Not found"
                                sendResponse(null, objresponse)
                            }
                        })



                    }
                    catch (error) {
                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                        sendResponse(error, null);
                    }


                    function PrepareParameter(requesdata) {
                        return new Promise((resolve, reject) => {
                            try {
                                let chkNull = false
                                let Parameter = {}
                                if (requesdata.process_name != '' && requesdata.process_name != null) {
                                    reqInstanceHelper.PrintInfo(serviceName, ".........Process Name .............." + requesdata.process_name, objSessionLogInfo);
                                    let PacsName = requesdata.process_name.split(' ')[1].toUpperCase() || ''
                                    reqInstanceHelper.PrintInfo(serviceName, ".........Pacs Name .............." + PacsName, objSessionLogInfo);
                                    if(PacsName.includes('.')){
                                        Parameter.message_type = PacsName
                                    }else{
                                        Parameter.message_type = PacsName.replace(PacsName.substring(0,4),'PACS.')
                                    }
                                    if ((PacsName == 'PACS.007' || PacsName == 'PACS007') && requesdata.process_type == 'OP') {
                                        Parameter.sender_reference = requesdata.payment_endtoend_id
                                    } else if ((PacsName == 'PACS.007' || PacsName == 'PACS007') && requesdata.process_type == 'IP') {
                                        Parameter.sender_reference = requesdata.clrsysref
                                    } else if ((PacsName == 'PACS008' || PacsName == 'PACS.008' || PacsName == 'PACS.004' || PacsName == 'PACS004') && requesdata.process_type == 'OP') {
                                        Parameter.sender_reference = requesdata.npsst_id
                                    } else if ((PacsName == 'PACS008' || PacsName == 'PACS.008' || PacsName == 'PACS.004' || PacsName == 'PACS004') && requesdata.process_type == 'IP') {
                                        Parameter.sender_reference = requesdata.clrsysref
                                    } else if ((PacsName == 'PACS002' || PacsName == 'PACS.002') && requesdata.process_type == 'OP') {
                                        Parameter.sender_reference = requesdata.payment_endtoend_id
                                    } else if ((PacsName == 'PACS002' || PacsName == 'PACS.002') && requesdata.process_type == 'IP') {
                                        Parameter.sender_reference = requesdata.clrsysref
                                    }

                                } else {
                                    reqInstanceHelper.PrintInfo(serviceName, ".........Process Name Not Found.............." + requesdata.process_name, objSessionLogInfo);
                                    Parameter.message_type = ''
                                    Parameter.sender_reference = ''
                                }

                                Parameter.uetr = requesdata.uetr || ''
                                Parameter.npsstrrd_refno = requesdata.npsstrrd_refno || ''
                                Parameter.msg_id = requesdata.hdr_msg_id || ''
                                Parameter.message_data = requesdata.message_data || ''
                                Parameter.process_name = requesdata.process_name || ''
                                Parameter.currency = requesdata.process_type ? requesdata.process_type == 'IP' ? requesdata.account_currency : 'AED' : ''
                                Parameter.amount = requesdata.base_amount || ''
                                Parameter.sort_code = requesdata.process_type ? requesdata.process_type == 'IP' ? requesdata.cr_sort_code : requesdata.dr_sort_code : ''
                                Parameter.process_type = requesdata.process_type ? requesdata.process_type == 'IP' ? 'I' : 'O' : ''
                                Parameter.message_id = requesdata.hdr_msg_id || ''
                                Parameter.status = requesdata.status || ''
                                Parameter.process_status = requesdata.process_status || ''
                                Parameter.respush = 'Y'
                                resolve(Parameter)
                               

                            } catch (error) {
                                reqInstanceHelper.PrintInfo(serviceName, ".......................May be Parsing Error CatchError..............." + error + "......Process Name......." + requesdata.process_name, objSessionLogInfo);
                                resolve('FAILURE')
                            }
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
