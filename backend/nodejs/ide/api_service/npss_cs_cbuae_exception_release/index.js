var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {



    /*  Created By :sIVA hARISH
    Created Date : 18/05/2022
    Modified By : 
    Modified Date : 
    
     
    */
    var serviceName = ' NPSS (CS) CBUAE Exception Release ';
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
    var Payment_Id
    var uetr
    var moment = require('moment')
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
            objSessionLogInfo.HANDLER_CODE = ' NPSS (CS) CBUAE Exception Release ';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = ' NPSS (CS) CBUAE Exception Release ';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {
                        var PRCT_ID = prct_id
                        var success_process_status
                        var success_status
                        try {
                            var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                            ExecuteQuery1(ruleqry, function (arrrule) {
                                try {
                                    if (arrrule.length > 0) {
                                        success_process_status = arrrule[0].success_process_status;
                                        success_status = arrrule[0].success_status;
                                        var TakedatafrmTrn = `select * from npss_trn_process_log where npsstpl_id = '${params.npsstpl_id}'`
                                        ExecuteQuery1(TakedatafrmTrn, async function (arrdata) {
                                            if (arrdata.length > 0) {
                                                var arrTrnPrslog = [];
                                                var objcusTranprslog = {};
                                                objcusTranprslog.MSG_ID = arrdata[0].msg_id || null;
                                                objcusTranprslog.PRCT_ID = PRCT_ID;
                                                objcusTranprslog.UETR = arrdata[0].uetr || null;
                                                objcusTranprslog.NPSSTRRD_REFNO = arrdata[0].npsstrrd_refno || null;
                                                objcusTranprslog.PROCESS_NAME = arrdata[0].process_name || null;
                                                objcusTranprslog.PROCESSING_SYSTEM = 'NPSS';
                                                objcusTranprslog.PROCESS_STATUS = success_process_status;
                                                objcusTranprslog.STATUS = success_status;
                                                objcusTranprslog.TENANT_ID = arrdata[0].tenant_id || null;
                                                objcusTranprslog.RESPONSE_CODE = arrdata[0].tenant_id || null;
                                                objcusTranprslog.PROCESS_REF_NO = arrdata[0].process_ref_no || null;
                                                objcusTranprslog.RESPONSE_DATA = arrdata[0].response_data || null;
                                                objcusTranprslog.T24_RETURN_CODE = arrdata[0].t24_return_code || null;
                                                objcusTranprslog.CBUAE_RETURN_CODE = arrdata[0].cbuae_return_code || null;
                                                objcusTranprslog.REVERSAL_CODE = arrdata[0].reversal_code || null;
                                                objcusTranprslog.AMOUNT_CREDITED = arrdata[0].amount_credited || null;
                                                objcusTranprslog.AMT_CR_LOC_CUR = arrdata[0].amt_cr_loc_cur || null;
                                                objcusTranprslog.CHARGE_AMOUNT = arrdata[0].charge_amount || null;
                                                objcusTranprslog.BUY_CURRENCY = arrdata[0].buy_currency || null;
                                                objcusTranprslog.SELL_CURRENCY = arrdata[0].sell_currency || null;
                                                objcusTranprslog.EXCHANGE_RATE = arrdata[0].exchange_rate || null;
                                                objcusTranprslog.CONTRA_AMOUNT = arrdata[0].contra_amount || null;
                                                objcusTranprslog.PROCESS_TYPE = arrdata[0].process_type || null;
                                                objcusTranprslog.PROCESS_TIME = arrdata[0].process_time || null;
                                                objcusTranprslog.STATUS_ACCP_DATE = arrdata[0].status_accp_date || null;
                                                objcusTranprslog.STATUS_INTRBKSTTLMDT = arrdata[0].status_intrbksttlmdt || null;
                                                objcusTranprslog.STATUS_RESP_AMOUNT = arrdata[0].status_resp_amount || null;
                                                objcusTranprslog.GM_MARGIN = arrdata[0].gm_margin || null;
                                                objcusTranprslog.EXT_IDEN_RETRY_VALUE = arrdata[0].ext_iden_retry_value || null;
                                                objcusTranprslog.ORG_STATUS = arrdata[0].org_status || null;
                                                objcusTranprslog.DBTR_IBAN = arrdata[0].dbtr_iban || null;
                                                objcusTranprslog.AMOUNT = arrdata[0].amount || null;
                                                objcusTranprslog.DATEOFBIRTH = arrdata[0].dateofbirth || null;
                                                objcusTranprslog.CITYOFBIRTH = arrdata[0].cityofbirth || null;
                                                objcusTranprslog.COUNTRYOFBIRTH = arrdata[0].countryofbirth || null;
                                                objcusTranprslog.CUSTOMERID = arrdata[0].customerid || null;
                                                objcusTranprslog.CUSTOMERNAME = arrdata[0].customername || null;
                                                objcusTranprslog.EMIRATESID = arrdata[0].emiratesid || null;
                                                objcusTranprslog.APP_ID = '215'
                                                objcusTranprslog.DT_CODE = 'DT_1304_1665901130705'
                                                objcusTranprslog.DTT_CODE = 'DTT_1304_1665901217208'
                                                objcusTranprslog.DT_DESCRIPTION = 'transaction_group'
                                                objcusTranprslog.DTT_DESCRIPTION = 'Transaction'
                                                objcusTranprslog.CREATED_BY = params.CREATED_BY;
                                                objcusTranprslog.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                                objcusTranprslog.CREATED_DATE = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                                objcusTranprslog.MODIFIED_BY = "";
                                                objcusTranprslog.MODIFIED_BY_NAME = "";
                                                objcusTranprslog.MODIFIED_DATE = null;
                                                objcusTranprslog.SYSTEM_ID = params.SYSTEM_ID || null;
                                                objcusTranprslog.SYSTEM_NAME = params.SYSTEM_NAME || null;
                                                objcusTranprslog.CREATED_BY_STS_ID = "";
                                                objcusTranprslog.MODIFIED_BY_STS_ID = "";
                                                objcusTranprslog.ADDITIONAL_INFO = "Manual Release"
                                                objcusTranprslog.created_clientip = objSessionLogInfo.CLIENTIP;
                                                objcusTranprslog.created_tz = objSessionLogInfo.CLIENTTZ;
                                                objcusTranprslog.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                                objcusTranprslog.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                                objcusTranprslog.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                                objcusTranprslog.routingkey = headers.routingkey;
                                                arrTrnPrslog.push(objcusTranprslog)
                                                _BulkInsertProcessItem(arrTrnPrslog, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTrnPrslog) {
                                                    if (CusTrnPrslog.length > 0) {
                                                        objresponse.status = 'SUCCESS';
                                                        sendResponse(null, objresponse);
                                                    } else {
                                                        objresponse.status = 'Data not insert in trn process log';
                                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                        sendResponse(null, objresponse)
                                                    }
                                                })

                                            } else {
                                                objresponse.status = 'No data found in npss tran process log table'
                                                sendResponse(null, objresponse)
                                            }





                                        })


                                    } else {

                                        objresponse.data.status = 'No data found in core_nc_workflow_setup'
                                        sendResponse(null, objresponse)
                                    }

                                } catch (error) {
                                    sendResponse(error)
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


                    function GetUetr(arruetr) {
                        return new Promise((resolve, reject) => {
                            try {
                                var apiName = 'Get Uetr'
                                var request = require('request');
                                var apiURL =
                                    apiURL = arruetr[0].param_detail // apiURL + apiName
                                var options = {
                                    url: apiURL,
                                    timeout: 18000000,
                                    method: 'GET',
                                    json: {},
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                }

                                reqInstanceHelper.PrintInfo(serviceName, '------------Calling Get Uetr Api-------', objSessionLogInfo);
                                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                    if (error) {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                        sendResponse(error, null);

                                    } else {

                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);

                                        resolve(responseBodyFromImagingService)
                                    }
                                });

                            } catch (error) {
                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                sendResponse(error, null);
                            }

                        })
                    }
                    function BirthDate(cdtr_iban) {
                        return new Promise((resolve, reject) => {
                            var Tkbddate = `select birthdate from core_nc_cbs_accounts where alternate_account_id ='${cdtr_iban}'`
                            ExecuteQuery1(Tkbddate, async function (arrbdate) {
                                if (arrbdate.length > 0) {
                                    let date = arrbdate[0].birthdate ? moment(arrbdate[0].birthdate, "YYYYMMDD").format("YYYY-MM-DD") : null
                                    resolve(date)
                                } else {
                                    resolve(null)
                                }
                            })
                        })
                    }

                    function Getuuid() {
                        return new Promise((resolve, reject) => {
                            try {
                                var Takeuuid = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_GET_UUID' and param_code='URL' and NEED_SYNC = 'Y'`
                                ExecuteQuery1(Takeuuid, async function (arruuid) {
                                    if (arruuid.length > 0) {
                                        var apiName = 'Get UUID'
                                        var request = require('request');
                                        var apiURL =
                                            apiURL = arruuid[0].param_detail // apiURL + apiName
                                        var options = {
                                            url: apiURL,
                                            timeout: 18000000,
                                            method: 'GET',
                                            json: {},
                                            headers: {
                                                'Content-Type': 'application/json'
                                            }
                                        }
                                        reqInstanceHelper.PrintInfo(serviceName, '------------Calling Get UUID Api-------', objSessionLogInfo);
                                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                            if (error) {
                                                reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                                sendResponse(error, null);

                                            } else {
                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                resolve(responseBodyFromImagingService)
                                            }
                                        });
                                    } else {
                                        objresponse.status = 'UUID Api Url not found'
                                        sendResponse(null, objresponse)
                                    }

                                })


                            } catch (error) {
                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                sendResponse(error, null);
                            }

                        })
                    }



                    function Getorgdata(arrprocesslog) {
                        return new Promise((resolve, reject) => {
                            var orgflddata = `select process_ref_no from npss_trn_process_log where process_name = 'Inward Credit Posting' and uetr = '${arrprocesslog[0].uetr}' and status = 'IP_RCT_POSTING_SUCCESS'`
                            ExecuteQuery1(orgflddata, function (arrflddata) {
                                if (arrflddata.length > 0) {
                                    resolve(arrflddata[0].process_ref_no)
                                } else {
                                    objresponse.status = "ORG Field Data is Not Found"
                                    sendResponse(null, objresponse)
                                }

                            })
                        })
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
