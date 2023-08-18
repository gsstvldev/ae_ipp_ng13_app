var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


    /*  Created By :Daseen
    Created Date :18/18/2023
  
    */
    var serviceName = 'NPSS (S) P2B Refund Unfreeze Customer Account';

    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqXlsx = require('node-xlsx').default;
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var success_process_status, success_status;
    var moment = require('moment');
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (S) P2B Refund Unfreeze Customer Account';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (S) P2B Refund Unfreeze Customer Account';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    try {
                        var PRCT_ID = prct_id
                        var QueryStatus = await Prepareparam(params.GetTranstatus)
                        var QueryProcessName = await Prepareparam(params.GetprocessName)
                        var Firstaddinfo = await Prepareparam(params.Getaddinfo)
                        var Secondstatus = await Prepareparam(params.CheckTranstatus)
                        var SecondprocessName = await Prepareparam(params.CheckprocessName)
                        var Secondaddinfo = await Prepareparam(params.checkaddinfo)
                        var TakerequestData = await Prepareparam(params.RequestprocessName)

                        var Takehours = `select param_detail from core_nc_system_setup where param_category = '${params.param_category}' and param_code = '${params.param_code}' and need_sync = 'Y'`
                        ExecuteQuery1(Takehours, function (arrTakehrs) {
                            if (arrTakehrs.length > 0) {
                                var utcMoment = moment.utc();
                                console.log(utcMoment)
                                var Formdate = utcMoment.subtract(arrTakehrs[0].param_detail, 'hours')
                                Formdate = moment(Formdate).format('YYYY-MM-DD HH:mm:ss')
                                var TakeTrnid = `select npsstpl_id from npss_trn_process_log where status in ${QueryStatus} and process_name in ${QueryProcessName} and additional_info in ${Firstaddinfo} and created_date_utc < '${Formdate}' and (org_status <> ('UNFREEZE_TAKEN') or org_status isnull)`
                                //  var Takedata = `select * from npss_trn_process_log where status in ${QueryStatus} and process_name in ${QueryProcessName} and additional_info in ${Firstaddinfo} and created_date_utc < '${Formdate}' and org_status <> 'UNFREEZE_TAKEN'`
                                var Takedata = `select * from npss_trn_process_log where status in ${QueryStatus} and process_name in ${QueryProcessName} and additional_info in ${Firstaddinfo} and created_date_utc < '${Formdate}' and (org_status <> ('UNFREEZE_TAKEN') or org_status isnull)`
                                ExecuteQuery1(Takedata, async function (arrData) {
                                    if (arrData.length > 0) {
                                        var updateTable = await UpdateTran(TakeTrnid, PRCT_ID)
                                        if (updateTable == 'SUCCESS') {
                                            reqAsync.forEachOfSeries(arrData, function (arrDataobj, i, nextobjctfunc) {
                                                var Checkcond = `select npsstpl_id, * from npss_trn_process_log where status in ${Secondstatus} and process_name in ${SecondprocessName} and npsstrrd_refno='${arrDataobj.npsstrrd_refno}' and additional_info in ${Secondaddinfo}`
                                                ExecuteQuery1(Checkcond, async function (chkcond) {
                                                    if (chkcond.length == 0) {
                                                        var CheckalreadyTryTran = `select * from npss_trn_process_log where status = 'OP_P2B_FUND_UNFREEZED' and npsstrrd_refno='${arrDataobj.npsstrrd_refno}'`
                                                        ExecuteQuery1(CheckalreadyTryTran, async function (altryTran) {
                                                            if (altryTran.length == 0) {
                                                                var Takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
                                                                ExecuteQuery1(Takeurl, async function (arrurl) {
                                                                    if (arrurl.length > 0) {
                                                                        var apicallresult = await kafkaapi(arrDataobj, arrurl, TakerequestData)
                                                                        if (apicallresult == 'SUCCESS') {
                                                                            var InsertTable = await ProcessInstData(arrDataobj, PRCT_ID)
                                                                            if (InsertTable.length > 0) {
                                                                                reqInstanceHelper.PrintInfo(serviceName, '----------API Success for uetr------' + arrDataobj.uetr, objSessionLogInfo);
                                                                                nextobjctfunc()

                                                                            } else {
                                                                                reqInstanceHelper.PrintInfo(serviceName, '----------API Success for uetr------' + arrDataobj.uetr, objSessionLogInfo);
                                                                                nextobjctfunc()
                                                                            }

                                                                        } else {
                                                                            reqInstanceHelper.PrintInfo(serviceName, '----------API Failure for uetr------' + arrDataobj.uetr, objSessionLogInfo);
                                                                            nextobjctfunc()
                                                                        }




                                                                    } else {
                                                                        reqInstanceHelper.PrintInfo(serviceName, '----------API Url not found------', objSessionLogInfo);
                                                                        nextobjctfunc()
                                                                    }

                                                                })
                                                            } else {
                                                                reqInstanceHelper.PrintInfo(serviceName, '----------Tran is not eligible for  uetr------' + arrDataobj.uetr, objSessionLogInfo);
                                                                nextobjctfunc()
                                                            }

                                                        })



                                                    } else {
                                                        reqInstanceHelper.PrintInfo(serviceName, '------------Not eligible uetr-------' + arrDataobj.uetr, objSessionLogInfo);
                                                        nextobjctfunc()
                                                    }

                                                })

                                            }, function () {
                                                objresponse.status = 'SUCCESS';

                                                sendResponse(null, objresponse)
                                            })
                                        } else {
                                            reqInstanceHelper.PrintInfo(serviceName, '------------Failure in Tran Update-------', objSessionLogInfo);
                                            objresponse.status = 'FAILURE';
                                            objresponse.msg = 'Failure in Tran Update';
                                            sendResponse(null, objresponse)
                                        }



                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------No Data in Tran Porcess log Table-------', objSessionLogInfo);
                                        objresponse.status = 'FAILURE';
                                        objresponse.msg = 'No Time details found in core_nc_system_setup Table';
                                        sendResponse(null, objresponse)
                                    }

                                })
                            }
                            else {
                                reqInstanceHelper.PrintInfo(serviceName, '------------No Time details found in core_nc_system_setup Table-------', objSessionLogInfo);
                                objresponse.status = 'FAILURE';
                                objresponse.msg = 'No Time details found in core_nc_system_setup Table';
                                sendResponse(null, objresponse)
                            }
                        })


                        //Function for insert in TrnProcess Log Table
                        function ProcessInstData(arrfundauth, PRCT_ID) {
                            return new Promise((resolve, reject) => {
                                var arrCusTranInst = [];
                                var objCusTranInst = {};
                                objCusTranInst.MSG_ID = arrfundauth.msg_id;
                                objCusTranInst.PRCT_ID = PRCT_ID;
                                objCusTranInst.PROCESS_TIME = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                objCusTranInst.UETR = arrfundauth.uetr;
                                objCusTranInst.NPSSTRRD_REFNO = arrfundauth.npsstrrd_refno;
                                objCusTranInst.PROCESS_NAME = 'Fund Release - U31U'
                                objCusTranInst.PROCESSING_SYSTEM = 'FINASTRA';
                                objCusTranInst.PROCESS_TYPE = arrfundauth.process_type;
                                objCusTranInst.PROCESS_STATUS = 'RCTCancelled';
                                objCusTranInst.STATUS = 'OP_P2B_FUND_RELEASED';
                                objCusTranInst.TENANT_ID = params.TENANT_ID;
                                objCusTranInst.APP_ID = '215'
                                objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                                objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                                objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                                objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                                objCusTranInst.CREATED_BY = params.CREATED_BY;
                                objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                objCusTranInst.T24_RETURN_CODE = null;
                                objCusTranInst.CREATED_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                objCusTranInst.MODIFIED_BY = "";
                                objCusTranInst.MODIFIED_BY_NAME = "";
                                objCusTranInst.MODIFIED_DATE = null;
                                objCusTranInst.SYSTEM_ID = params.SYSTEM_ID;
                                objCusTranInst.SYSTEM_NAME = params.SYSTEM_NAME;
                                objCusTranInst.CREATED_BY_STS_ID = "";
                                objCusTranInst.MODIFIED_BY_STS_ID = "";
                                objCusTranInst.created_clientip = objSessionLogInfo.CLIENTIP;
                                objCusTranInst.created_tz = objSessionLogInfo.CLIENTTZ;
                                objCusTranInst.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                objCusTranInst.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                objCusTranInst.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                objCusTranInst.routingkey = headers.routingkey;
                                arrCusTranInst.push(objCusTranInst)

                                _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(logInsertRes) {
                                    resolve(logInsertRes)

                                })
                            })

                        }
                        function UpdateTran(arrTran, prct_id) {
                            return new Promise((resolve, reject) => {
                                let UpdTrntbl = `update npss_trn_process_log set org_status = 'UNFREEZE_TAKEN', MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${prct_id}' where npsstpl_id in (${arrTran})`
                                ExecuteQuery(UpdTrntbl, function (arrUpdTranTbl) {
                                    if (arrUpdTranTbl == 'SUCCESS') {
                                        resolve('SUCCESS')
                                    } else {
                                        resolve('Failure')
                                    }


                                })
                            })

                        }

                        function kafkaapi(arrpayverobj, arrurl, process_name1) {
                            var postrefno;
                            return new Promise((resolve, reject) => {
                                var TakepostingRefno = `select process_ref_no from npss_trn_process_log where process_name='${params.postingrefnoprocess_name}' and uetr='${arrpayverobj.uetr}'`
                                ExecuteQuery1(TakepostingRefno, function (arrpostrefno) {
                                    if (arrpostrefno.length > 0) {
                                        postrefno = arrpostrefno[0].process_ref_no ? arrpostrefno[0].process_ref_no : ''
                                        var takereqjson = `select npsstpl_id,fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY) as request_data_json,npsstrrd_refno,msg_id, additional_info as tran_type_code  from npss_trn_process_log where process_name in ${process_name1}  and uetr='${arrpayverobj.uetr}'`
                                        ExecuteQuery1(takereqjson, function (arrtakereqjson) {
                                            if (arrtakereqjson.length > 0) {
                                                var JsonData

                                                var amount
                                                var currency
                                                var dbtr_iban, npssrefno;

                                                if (arrtakereqjson[0].request_data_json != null) {
                                                    JsonData = JSON.parse(arrtakereqjson[0].request_data_json)

                                                    amount = JsonData['amount']["requested"] || ''
                                                    currency = JsonData['amount']['currency'] || ''
                                                    dbtr_iban = JsonData['buyer']['IBAN'] ? JsonData['buyer']['IBAN'] : JsonData['buyer']['iban']
                                                    npssrefno = JsonData['refTransactionId'] || ''

                                                    try {
                                                        var request = require('request');
                                                        var options = {
                                                            url: arrurl[0].param_detail,
                                                            timeout: 18000000,
                                                            method: 'POST',
                                                            json: {
                                                                batch_name: params.batch_name,
                                                                data: {
                                                                    "payload": {
                                                                        "uetr": arrpayverobj.uetr || '',
                                                                        "intrbk_sttlm_cur": currency || '',
                                                                        "dbtr_iban": dbtr_iban || '',
                                                                        "hold_no": postrefno,
                                                                        "process_type": "RELEASED",
                                                                        "channel_id": 'IPP',
                                                                        "npsstrrd_refno": npssrefno || '',
                                                                    }
                                                                }
                                                            },
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            }
                                                        }
                                                        var PrintInfo = {}
                                                        PrintInfo.url = arrurl[0].param_detail
                                                        PrintInfo.uetr = arrpayverobj.uetr || ''


                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                            if (error) {
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                                sendResponse(error, null);

                                                            } else {
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                                if (responseBodyFromImagingService == 'SUCCESS') {
                                                                    resolve(responseBodyFromImagingService);

                                                                } else {
                                                                    resolve(responseBodyFromImagingService);
                                                                }
                                                            }
                                                        });

                                                    } catch (error) {
                                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                        sendResponse(error, null);
                                                    }
                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------Request JSON not found for uetr-------' + arrpayverobj.uetr, objSessionLogInfo);
                                                    resolve('FAILURE')
                                                }
                                            } else {
                                                reqInstanceHelper.PrintInfo(serviceName, '------------Request Data not found for uetr-------' + arrpayverobj.uetr, objSessionLogInfo);
                                                resolve('FAILURE')
                                            }
                                        })

                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------Posting Ref no not found for -------' + arrpayverobj.uetr, objSessionLogInfo);
                                        resolve('FAILURE')
                                    }

                                })

                            })
                        }



                        function Prepareparam(parameter) {
                            return new Promise((resolve, reject) => {
                                var arrdata
                                if (Array.isArray(parameter)) {
                                    arrdata = parameter.map(function (eachTran) {
                                        return eachTran.toString();
                                    });
                                } else {
                                    arrdata = [parameter.toString()];
                                }
                                var Tempdata = '(' + "'" + arrdata.toString().split(',').join("','") + "'" + ')';

                                resolve(Tempdata)

                            })
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
                })



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
