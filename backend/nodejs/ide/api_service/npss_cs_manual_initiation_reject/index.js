var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {



    /*  Created By :sIVA hARISH
    Created Date : 02-01-2022
    Modifyed by : Siva Harish
    Modified Date : 17/01/2023
    Reason for Remove console log
    Reason for Adding Update Query
    Reason for removing update query
    Reason for Adding ext_ident_retry_value 29/03/2023
    Reason for Changes for finance house
    Changes for mail 12/07/2023
     Reason for: Adding all coums in log,acct table while mail sending on 30-01-2024 by daseen
Reason for: Prepaid or credit tran Update  status & insert in log table  -- renga 13-06-2024
Reason for: Last posting refno  -- Daseen 11-07-2024
Reason for: Master elp merged  -- Daseen 31-07-2024

    */
    var serviceName = 'NPSS (CS) Manual Initiation Reject';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Manual Initiation Reject';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) Manual Initiation Reject';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {

                        var PRCT_ID = prct_id
                        var success_process_status
                        var success_status
                        var extend_retry_value
                        try {

                            var ruleqry = `select success_process_status,success_status,processing_system,process_type  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}'and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}' `
                            var take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_REVERSAL_CANCEL' and param_code='URL' and need_sync = 'Y'`;

                            // Take Value from API Manager Table
                            if (params.PROD_CODE == 'NPSS_AEFAB') {
                                ExecuteQuery1(ruleqry, function (arrrule) {
                                    try {

                                        if (arrrule.length > 0) {

                                            success_process_status = arrrule[0].success_process_status;
                                            success_status = arrrule[0].success_status;
                                            var TakedatafrmTrn = `select * from npss_transactions where npsst_id = '${params.Id}'`

                                            ExecuteQuery1(TakedatafrmTrn, async function (arrdata) {
                                                if (arrdata.length > 0) {
                                                    if ((arrdata[0].department_code == 'CREDITCARD') || (arrdata[0].department_code == 'PREPAIDCARD')) {

                                                        let UpdateInsertData = await Update_LogInsert(arrdata, success_status, success_process_status, arrrule)
                                                        if (UpdateInsertData == 'SUCCESS') {
                                                            objresponse.status = 'SUCCESS';
                                                            sendResponse(null, objresponse);
                                                        } else {
                                                            objresponse.status = 'Update transaction Status & log tble insert Failure for Prepaid or credit';
                                                            sendResponse(null, objresponse);
                                                        }
                                                    } else {
                                                        extend_retry_value = await GetRetrycount(arrdata[0].uetr)
                                                        ExecuteQuery1(take_api_url, function (arrUrl) {
                                                            if (arrUrl.length > 0) {
                                                                //var TakeAcctInf = `select alternate_account_type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrdata[0].dbtr_iban}'`
                                                                var TakeAcctInf = `select alternate_account_type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer,ac.created_Date as acct_created_date,ac.modified_date as acct_modified_date,ac.issuer_type_code as acct_issuer_type_code,ac.* from core_nc_cbs_accounts ac where alternate_account_id= '${arrdata[0].dbtr_iban}'`
                                                                ExecuteQuery1(TakeAcctInf, function (arrcbsact) {
                                                                    if (arrcbsact.length > 0) {
                                                                        var Takepostrefno = `select * from npss_trn_process_log where status = 'OP_RCT_MAN_INAU_POSTING_SUCCESS' and uetr = '${arrdata[0].uetr}'   order by npsstpl_id desc`
                                                                        ExecuteQuery1(Takepostrefno, function (arrpostno) {
                                                                            if (arrpostno.length > 0) {
                                                                                fn_DoAPI(arrdata, arrUrl, arrcbsact, arrpostno, extend_retry_value, function (apiresult) {
                                                                                    if (apiresult.status === "SUCCESS") {
                                                                                        var arrCusTranInst = [];
                                                                                        var objCusTranInst = {};

                                                                                        objCusTranInst.MSG_ID = arrdata[0].hdr_msg_id;
                                                                                        objCusTranInst.PRCT_ID = PRCT_ID;
                                                                                        objCusTranInst.REVERSAL_CODE = params.reversalcode
                                                                                        objCusTranInst.UETR = arrdata[0].uetr;
                                                                                        objCusTranInst.NPSSTRRD_REFNO = arrdata[0].tran_ref_id;
                                                                                        objCusTranInst.PROCESS_NAME = 'Cancel Reversal'
                                                                                        objCusTranInst.PROCESSING_SYSTEM = arrrule[0].processing_system;
                                                                                        objCusTranInst.PROCESS_TYPE = arrrule[0].process_type;
                                                                                        objCusTranInst.PROCESS_STATUS = success_process_status;
                                                                                        objCusTranInst.STATUS = success_status;
                                                                                        objCusTranInst.T24_RETURN_CODE = null;
                                                                                        objCusTranInst.CBUAE_RETURN_CODE = null;
                                                                                        objCusTranInst.TENANT_ID = params.TENANT_ID;
                                                                                        objCusTranInst.APP_ID = '215'
                                                                                        objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                                                                                        objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                                                                                        objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                                                                                        objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                                                                                        objCusTranInst.CREATED_BY = params.CREATED_BY;
                                                                                        objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
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
                                                                                        _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTranInsertRes) {
                                                                                            if (CusTranInsertRes.length > 0) {
                                                                                                var updtranqry
                                                                                                if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') {
                                                                                                    updtranqry = `update npss_transactions set  maker = '${params.CREATED_BY_NAME}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                                                                                } else {
                                                                                                    updtranqry = `update npss_transactions set  checker = '${params.CREATED_BY_NAME}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                                                                                }
                                                                                                ExecuteQuery(updtranqry, async function (uptranresult) {
                                                                                                    if (uptranresult == 'SUCCESS') {
                                                                                                        if (arrcbsact[0].currency == 'AED') {
                                                                                                            objresponse.status = 'SUCCESS';
                                                                                                            sendResponse(null, objresponse);
                                                                                                        } else {
                                                                                                            let doMail = await SendMail(arrdata[0].uetr, arrcbsact)
                                                                                                        }
                                                                                                    } else {
                                                                                                        objresponse.status = 'Failure in Tran Status Update';
                                                                                                        sendResponse(null, objresponse)
                                                                                                    }
                                                                                                })
                                                                                            } else {
                                                                                                objresponse.status = 'FAILURE';
                                                                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                                                                sendResponse(null, objresponse)
                                                                                            }
                                                                                        })
                                                                                    } else {
                                                                                        objresponse.status = 'Fail From T24 Unfreeze  Error Code -' + apiresult.error_code
                                                                                        sendResponse(null, objresponse);
                                                                                    }
                                                                                })
                                                                            } else {
                                                                                objresponse.status = 'No Posting Ref No Found';
                                                                                sendResponse(null, objresponse)
                                                                            }
                                                                        })
                                                                    } else {
                                                                        objresponse.status = 'No Account Information found in cbs accounts table'
                                                                        sendResponse(null, objresponse)
                                                                    }
                                                                })
                                                            } else {
                                                                objresponse.status = 'No Url Found'
                                                                sendResponse(null, objresponse)
                                                            }
                                                        })
                                                    }
                                                } else {
                                                    objresponse.status = 'No data found in npss tran table'
                                                    sendResponse(null, objresponse)
                                                }
                                            })
                                        } else {
                                            objresponse.status = 'No data found in core_nc_workflow_setup';
                                            sendResponse(null, objresponse)
                                        }
                                    } catch (error) {
                                        sendResponse(error)
                                    }
                                });
                            } else {//for finance house
                                var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='RCT_REV_CANCEL_REQ' and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}' `
                                ExecuteQuery1(ruleqry, function (arrsts) {
                                    if (arrsts.length > 0) {
                                        var updtranqry = `update npss_transactions set  status='${arrsts[0].success_status}',process_status='${arrsts[0].success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                        ExecuteQuery(updtranqry, function (uptranresult) {
                                            if (uptranresult == 'SUCCESS') {
                                                objresponse.status = 'SUCCESS';
                                                sendResponse(null, objresponse)
                                            } else {
                                                objresponse.status = 'Failure in Tran Status Update';
                                                sendResponse(null, objresponse)
                                            }
                                        })
                                    } else {
                                        objresponse.status = 'No data found in core_nc_workflow_setup table';
                                        sendResponse(null, objresponse)
                                    }
                                })
                            }


                            // Do unfreeze API Call for Service 
                            function fn_DoAPI(trndata, url, arrActInf, arrpostno, extend_retry_value, callbackapi) {
                                try {
                                    var request = require('request');
                                    var apiURL =
                                        apiURL = url[0].param_detail // apiURL + apiName
                                    var options = {
                                        url: apiURL,
                                        timeout: 18000000,
                                        method: 'POST',
                                        json: {

                                            "payload": {
                                                "ext_iden_retry_value": extend_retry_value || '',
                                                "hdr_settlement_date": trndata[0].hdr_settlement_date,
                                                "intrbk_sttlm_cur": trndata[0].intrbk_sttlm_cur,
                                                "intrbk_sttlm_amnt": trndata[0].intrbk_sttlm_amnt,
                                                "dbtr_iban": trndata[0].dbtr_iban,
                                                "cdtr_iban": trndata[0].cdtr_iban,

                                                "uetr": trndata[0].uetr,
                                                "remittance_information": trndata[0].remittance_info || '',
                                                "posting_ref_no": arrpostno[0].process_ref_no,
                                                "dbtr_acct_name": trndata[0].dbtr_acct_name,
                                                "cdtr_acct_name": trndata[0].cdtr_acct_name,
                                                "process_type": trndata[0].process_type
                                            },
                                            "AccountInformation": {
                                                "account_number": arrActInf[0].account_number || '',
                                                "company_code": arrActInf[0].company_code || '',
                                                "alternate_account_type": arrActInf[0].alternate_account_type || '',
                                                "currency": arrActInf[0].currency || ''
                                            }
                                        },
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    }

                                    var PrintInfo = {}
                                    PrintInfo.url = url[0].param_detail
                                    PrintInfo.hdr_settlement_date = trndata[0].hdr_settlement_date || ''
                                    PrintInfo.posting_ref_no = arrpostno[0].process_ref_no || ''
                                    PrintInfo.currency = trndata[0].intrbk_sttlm_cur || ''

                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);

                                    request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                        if (error) {
                                            reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                            sendResponse(error, null);

                                        } else {
                                            try {
                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                                var responseBody = JSON.parse(responseBodyFromImagingService)
                                                callbackapi(responseBody)
                                            } catch (error) {
                                                objresponse.status = error;
                                                sendResponse(null, objresponse)
                                            }

                                        }
                                    });
                                } catch (error) {
                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                    sendResponse(error, null);
                                }
                            }

                            function GetRetrycount(uetr) {
                                return new Promise((resolve, reject) => {
                                    var TakeretryValue = `select ext_iden_retry_value from npss_trn_process_log where ext_iden_retry_value IS NOT NULL and uetr = '${uetr}' order by npsstpl_id desc`
                                    ExecuteQuery1(TakeretryValue, function (extIdentValue) {
                                        if (extIdentValue.length > 0) {
                                            if (extIdentValue[0].ext_iden_retry_value != null) {
                                                var count = Number(extIdentValue[0].ext_iden_retry_value)
                                                count++
                                                resolve(count)
                                            } else {
                                                resolve(1)
                                            }


                                        } else {
                                            resolve(1)
                                        }

                                    })
                                })
                            }


                            //function update transaction and log table insert for prepaid & creditcard trn
                            function Update_LogInsert(arrdata, success_status, success_process_status, arrrule) {
                                return new Promise((resolve, reject) => {
                                    var updtranqry
                                    if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') {
                                        updtranqry = `update npss_transactions set  maker = '${params.CREATED_BY_NAME}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                    } else {
                                        updtranqry = `update npss_transactions set  checker = '${params.CREATED_BY_NAME}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Id}' `
                                    }
                                    ExecuteQuery(updtranqry, async function (uptranresult) {
                                        if (uptranresult == 'SUCCESS') {

                                            var arrCusTranInst = [];
                                            var objCusTranInst = {};

                                            objCusTranInst.MSG_ID = arrdata[0].hdr_msg_id;
                                            objCusTranInst.PRCT_ID = PRCT_ID;
                                            objCusTranInst.REVERSAL_CODE = params.reversalcode
                                            objCusTranInst.UETR = arrdata[0].uetr;
                                            objCusTranInst.NPSSTRRD_REFNO = arrdata[0].tran_ref_id;
                                            objCusTranInst.PROCESS_NAME = 'Reject Reversal'
                                            objCusTranInst.PROCESSING_SYSTEM = arrrule[0].processing_system;
                                            objCusTranInst.PROCESS_TYPE = arrrule[0].process_type;
                                            objCusTranInst.PROCESS_STATUS = success_process_status;
                                            objCusTranInst.STATUS = success_status;
                                            objCusTranInst.T24_RETURN_CODE = null;
                                            objCusTranInst.CBUAE_RETURN_CODE = null;
                                            objCusTranInst.TENANT_ID = params.TENANT_ID;
                                            objCusTranInst.APP_ID = '215'
                                            objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                                            objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                                            objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                                            objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                                            objCusTranInst.CREATED_BY = params.CREATED_BY;
                                            objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
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
                                            _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTranInsertRes) {
                                                if (CusTranInsertRes.length > 0) {
                                                    resolve('SUCCESS')
                                                } else {
                                                    resolve('FAILURE')
                                                }
                                            })
                                        } else {
                                            resolve('FAILURE')
                                        }
                                    })
                                })
                            }

                            // Send Mail
                            function SendMail(uetr, arrcbsact) {
                                var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL'`
                                ExecuteQuery1(takeurl, function (arrUrl) {
                                    if (arrUrl.length > 0) {
                                        var TakeCometo = `select param_value from CORE_NS_PARAMS  where process_name = 'MANUAL_INITIATION_UNFREEZE_REJECT'  and param_name='COMM_TO'  and need_sync='Y'`
                                        ExecuteQuery1(TakeCometo, function (arrCometo) {
                                            var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = 'MANUAL_INITIATION_UNFREEZE_REJECT'  and param_name = 'COMM_CC'  and need_sync='Y'`
                                            ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                                var Takebcc = `select param_value from CORE_NS_PARAMS  where process_name = 'MANUAL_INITIATION_UNFREEZE_REJECT'  and param_name = 'COMM_BCC'  and need_sync='Y'`
                                                ExecuteQuery1(Takebcc, function (arbcc) {
                                                    var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = 'MANUAL_INITIATION_UNFREEZE_REJECT' and param_name = 'COM_CATEGORY'  and need_sync='Y'`
                                                    ExecuteQuery1(TakecomCat, function (arrCatgory) {
                                                        var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = 'MANUAL_INITIATION_UNFREEZE_REJECT'  and param_name = 'COMM_GROUP'  and need_sync='Y'`
                                                        ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                                            var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = 'MANUAL_INITIATION_UNFREEZE_REJECT' and param_name = 'ORIGIN' and need_sync='Y'`
                                                            ExecuteQuery1(Takeorg, async function (arrorg) {
                                                                let Getdealvalues = await TakeDealParam(uetr)
                                                                let GetdealParams = JSON.parse(Getdealvalues[0]['response_data_json'])

                                                                try {
                                                                    var frtodata = [{
                                                                        TO: arrCometo.length > 0 ? arrCometo[0].param_value : '',
                                                                        CC: arrcomcc.length > 0 ? arrcomcc[0].param_value : '',
                                                                        BCC: arbcc.length > 0 ? arbcc[0].param_value : '',
                                                                        ORIGIN: arrorg.length > 0 ? arrorg[0].param_value : '',
                                                                        COMM_GROUP: arrcomgp.length > 0 ? arrcomgp[0].param_value : '',
                                                                        USERID: params.CREATED_BY_NAME.bold(),
                                                                        SENDERID: GetdealParams != '' ? GetdealParams["applicationArea"]["senderId"] : '',
                                                                        CUSTOMERSEGMENT: GetdealParams != '' ? GetdealParams["dealResponse"][0]["customerSegment"] : '',
                                                                        GIDID: GetdealParams != '' ? GetdealParams["dealResponse"][0]["gidId"] : '',
                                                                        DEALREFERENCENUMBER: GetdealParams != '' ? GetdealParams["common"]["dealReferenceNumber"] : '',
                                                                        CCYPAIR: GetdealParams != '' ? GetdealParams["dealResponse"][0]["ccyPair"] : '',
                                                                        BUYSELL: 'SELL',
                                                                        DEALTCURRENCY: GetdealParams != '' ? GetdealParams["dealResponse"][0]["dealtCurrency"] : '',
                                                                        DEALTAMOUNT: GetdealParams != '' ? GetdealParams["dealResponse"][0]["dealtAmount"] : '',
                                                                        GMRATE: GetdealParams != '' ? GetdealParams["dealResponse"][0]["GMRate"] : '',
                                                                        VALUEDATE: GetdealParams != '' ? GetdealParams["dealResponse"][0]["valueDateTime"] : '',
                                                                        VALUEDATE: GetdealParams != '' ? GetdealParams["dealResponse"][0]["valueDateTime"] : '',
                                                                        CUSTOMERID: arrcbsact[0].customer_id,
                                                                        ACCT_ACCOUNTNUMBER: arrcbsact[0].account_number ? arrcbsact[0].account_number : "",
                                                                        ACCT_ALTERNATEACCOUNTID: arrcbsact[0].alternate_account_id ? arrcbsact[0].alternate_account_id : "",
                                                                        ACCT_ACCOUNTNAME: arrcbsact[0].account_name ? arrcbsact[0].account_name : "",
                                                                        ACCT_POSTINGRESTRICTIONCODE: arrcbsact[0].posting_restriction_code ? arrcbsact[0].posting_restriction_code : "",
                                                                        ACCT_INACTIVEMARKER: arrcbsact[0].inactive_marker ? arrcbsact[0].inactive_marker : "",
                                                                        ACCT_CATEGORYCODE: arrcbsact[0].category_code ? arrcbsact[0].category_code : "",
                                                                        ACCT_CATEGORYDESCRIPTION: arrcbsact[0].category_description ? arrcbsact[0].category_description : "",
                                                                        ACCT_CURRENCY: arrcbsact[0].currency ? arrcbsact[0].currency : "",
                                                                        ACCT_CUSTOMERID: arrcbsact[0].customer_id ? arrcbsact[0].customer_id : "",
                                                                        ACCT_ACCOUNTTITLE2: arrcbsact[0].account_title_2 ? arrcbsact[0].account_title_2 : "",
                                                                        ACCT_COMPANYCODE: arrcbsact[0].company_code ? arrcbsact[0].company_code : "",
                                                                        ACCT_EMIRATESCODE: arrcbsact[0].emirates_code ? arrcbsact[0].emirates_code : "",
                                                                        ACCT_COUNTRYOFBIRTH: arrcbsact[0].countryofbirth ? arrcbsact[0].countryofbirth : "",
                                                                        ACCT_LETTEROFUNDERTAKING: arrcbsact[0].letter_of_undertaking ? arrcbsact[0].letter_of_undertaking : "",
                                                                        ACCT_CUSTOMERPOSTINGRESTRICTIONCODE: arrcbsact[0].customer_posting_restriction_code ? arrcbsact[0].customer_posting_restriction_code : "",
                                                                        ACCT_TARGETCODE: arrcbsact[0].target_code ? arrcbsact[0].target_code : "",
                                                                        ACCT_SECTORCODE: arrcbsact[0].sector_code ? arrcbsact[0].sector_code : "",
                                                                        ACCT_RESIDENTFLAG: arrcbsact[0].resident_flag ? arrcbsact[0].resident_flag : "",
                                                                        ACCT_NATIONALITYCOUNTRYCODE: arrcbsact[0].nationality_country_code ? arrcbsact[0].nationality_country_code : "",
                                                                        ACCT_LEGALID: arrcbsact[0].legal_id ? arrcbsact[0].legal_id : "",
                                                                        ACCT_NATIONALID: arrcbsact[0].national_id ? arrcbsact[0].national_id : "",
                                                                        ACCT_INDUSTRY: arrcbsact[0].industry ? arrcbsact[0].industry : "",
                                                                        ACCT_COMMUNICATIONTYPE: arrcbsact[0].communication_type ? arrcbsact[0].communication_type : "",
                                                                        ACCT_CUSTOMERMOBILENUMBER: arrcbsact[0].customer_mobile_number ? arrcbsact[0].customer_mobile_number : "",
                                                                        ACCT_ACCOUNTOFFICER: arrcbsact[0].account_officer ? arrcbsact[0].account_officer : "",
                                                                        ACCT_CURRRATESEGMENT: arrcbsact[0].curr_rate_segment ? arrcbsact[0].curr_rate_segment : "",
                                                                        ACCT_CUSTOMEREMAILID: arrcbsact[0].customer_email_id ? arrcbsact[0].customer_email_id : "",
                                                                        ACCT_TRADELICENSEFLAG: arrcbsact[0].trade_license_flag ? arrcbsact[0].trade_license_flag : "",
                                                                        ACCT_TRADELICENSENUMBER: arrcbsact[0].trade_license_number ? arrcbsact[0].trade_license_number : "",
                                                                        ACCT_COMMERCIALREGISTRATIONFLAG: arrcbsact[0].commercial_registration_flag ? arrcbsact[0].commercial_registration_flag : "",
                                                                        ACCT_CHAMBERCERTIFICATENUMBER: arrcbsact[0].chamber_certificate_number ? arrcbsact[0].chamber_certificate_number : "",
                                                                        ACCT_AMIRIDECREEFLAG: arrcbsact[0].amiri_decree_flag ? arrcbsact[0].amiri_decree_flag : "",
                                                                        ACCT_ALTERNATEACCOUNTTYPE: arrcbsact[0].alternate_account_type ? arrcbsact[0].alternate_account_type : "",
                                                                        ACCT_ACCOUNTPOSTRINGTYPEDESCRIPTION: arrcbsact[0].account_postring_type_description ? arrcbsact[0].account_postring_type_description : "",
                                                                        ACCT_ACCOUNTPOSTINGRESTRICTTYPE: arrcbsact[0].account_posting_restrict_type ? arrcbsact[0].account_posting_restrict_type : "",
                                                                        ACCT_CUSTOMERPOSTINGRESTRICTIONDESCRIPTION: arrcbsact[0].customer_posting_restriction_description ? arrcbsact[0].customer_posting_restriction_description : "",
                                                                        ACCT_CUSTOMERPOSTINGRESTRICTTYPE: arrcbsact[0].customer_posting_restrict_type ? arrcbsact[0].customer_posting_restrict_type : "",
                                                                        ACCT_VIRTUALACCOUNTNAME: arrcbsact[0].virtual_account_name ? arrcbsact[0].virtual_account_name : "",
                                                                        ACCT_VACURRENCY: arrcbsact[0].va_currency ? arrcbsact[0].va_currency : "",
                                                                        ACCT_VATYPE: arrcbsact[0].va_type ? arrcbsact[0].va_type : "",
                                                                        ACCT_VASTATUS: arrcbsact[0].va_status ? arrcbsact[0].va_status : "",
                                                                        ACCT_BIRTHDATE: arrcbsact[0].birthdate ? arrcbsact[0].birthdate : "",
                                                                        ACCT_PRODUCTIDENTIFIER: arrcbsact[0].productidentifier ? arrcbsact[0].productidentifier : "",
                                                                        ACCT_ISSUERTYPECODE: arrcbsact[0].acct_issuer_type_code ? arrcbsact[0].acct_issuer_type_code : "",
                                                                        ACCT_ECONOMICACTIVITYCODE: arrcbsact[0].economic_activity_code ? arrcbsact[0].economic_activity_code : "",
                                                                        ACCT_CITYOFBIRTH: arrcbsact[0].cityofbirth ? arrcbsact[0].cityofbirth : "",
                                                                        ACCT_ACCOUNTCLOSED: arrcbsact[0].account_closed ? arrcbsact[0].account_closed : "",
                                                                        ACCT_CNCCAID: arrcbsact[0].cncca_id ? arrcbsact[0].cncca_id : "",
                                                                        ACCT_CREATEDDATE: arrcbsact[0].acct_created_date ? arrcbsact[0].acct_created_date : "",
                                                                        ACCT_MODIFIEDDATE: arrcbsact[0].acct_modified_date ? arrcbsact[0].acct_modified_date : "",
                                                                        ACCT_VAFLAG: arrcbsact[0].va_flag ? arrcbsact[0].va_flag : "",
                                                                        LOG_PROCESS_NAME: Getdealvalues[0].process_name ? Getdealvalues[0].process_name : '',
                                                                        LOG_PROCESSING_SYSTEM: Getdealvalues[0].processing_system ? Getdealvalues[0].processing_system : '',
                                                                        LOG_MSG_ID: Getdealvalues[0].msg_id ? Getdealvalues[0].msg_id : '',
                                                                        LOG_NPSSTRRD_REFNO: Getdealvalues[0].npsstrrd_refno ? Getdealvalues[0].npsstrrd_refno : '',
                                                                        LOG_RESPONSE_CODE: Getdealvalues[0].response_code ? Getdealvalues[0].response_code : '',
                                                                        LOG_PROCESS_REF_NO: Getdealvalues[0].process_ref_no ? Getdealvalues[0].process_ref_no : '',
                                                                        LOG_REQUEST_DATA_JSON: Getdealvalues[0].request_data_json ? JSON.parse(Getdealvalues[0].request_data_json) : '',
                                                                        LOG_STATUS: Getdealvalues[0].status ? Getdealvalues[0].status : '',
                                                                        LOG_PROCESS_STATUS: Getdealvalues[0].process_status ? Getdealvalues[0].process_status : '',
                                                                        LOG_AI_ID: Getdealvalues[0].ai_id ? Getdealvalues[0].ai_id : '',
                                                                        LOG_T24_RETURN_CODE: Getdealvalues[0].t24_return_code ? Getdealvalues[0].t24_return_code : '',
                                                                        LOG_CBUAE_RETURN_CODE: Getdealvalues[0].cbuae_return_code ? Getdealvalues[0].cbuae_return_code : '',
                                                                        LOG_REVERSAL_CODE: Getdealvalues[0].reversal_code ? Getdealvalues[0].reversal_code : '',
                                                                        LOG_ADDITIONAL_INFO: Getdealvalues[0].additional_info ? Getdealvalues[0].additional_info : '',
                                                                        LOG_V_CODE: Getdealvalues[0].v_code ? Getdealvalues[0].v_code : '',
                                                                        LOG_AMOUNT_CREDITED: Getdealvalues[0].amount_credited ? Getdealvalues[0].amount_credited : '',
                                                                        LOG_AMT_CR_LOC_CUR: Getdealvalues[0].amt_cr_loc_cur ? Getdealvalues[0].amt_cr_loc_cur : '',
                                                                        LOG_CHARGE_AMOUNT: Getdealvalues[0].charge_amount ? Getdealvalues[0].charge_amount : '',
                                                                        LOG_BUY_CURRENCY: Getdealvalues[0].buy_currency ? Getdealvalues[0].buy_currency : '',
                                                                        LOG_SELL_CURRENCY: Getdealvalues[0].sell_currency ? Getdealvalues[0].sell_currency : '',
                                                                        LOG_DEALT_AMOUNT: Getdealvalues[0].dealt_amount ? Getdealvalues[0].dealt_amount : '',
                                                                        LOG_EXCHANGE_RATE: Getdealvalues[0].exchange_rate ? Getdealvalues[0].exchange_rate : '',
                                                                        LOG_CONTRA_AMOUNT: Getdealvalues[0].contra_amount ? Getdealvalues[0].contra_amount : '',
                                                                        LOG_SORT_ORDER: Getdealvalues[0].sort_order ? Getdealvalues[0].sort_order : '',
                                                                        LOG_PROCESS_TYPE: Getdealvalues[0].process_type ? Getdealvalues[0].process_type : '',
                                                                        LOG_PROCESS_TIME: Getdealvalues[0].process_time ? Getdealvalues[0].process_time : '',
                                                                        LOG_STATUS_ACCP_DATE: Getdealvalues[0].status_accp_date ? Getdealvalues[0].status_accp_date : '',
                                                                        LOG_STATUS_INTRBKSTTLMDT: Getdealvalues[0].status_intrbksttlmdt ? Getdealvalues[0].status_intrbksttlmdt : '',
                                                                        LOG_STATUS_RESP_AMOUNT: Getdealvalues[0].status_resp_amount ? Getdealvalues[0].status_resp_amount : '',
                                                                        LOG_GM_MARGIN: Getdealvalues[0].gm_margin ? Getdealvalues[0].gm_margin : '',
                                                                        LOG_EXT_IDEN_RETRY_VALUE: Getdealvalues[0].ext_iden_retry_value ? Getdealvalues[0].ext_iden_retry_value : '',
                                                                        LOG_ORG_STATUS: Getdealvalues[0].org_status ? Getdealvalues[0].org_status : '',
                                                                        LOG_TRAN_REF_ID: Getdealvalues[0].tran_ref_id ? Getdealvalues[0].tran_ref_id : '',
                                                                        LOG_DBTR_IBAN: Getdealvalues[0].dbtr_iban ? Getdealvalues[0].dbtr_iban : '',
                                                                        LOG_AMOUNT: Getdealvalues[0].amount ? Getdealvalues[0].amount : '',
                                                                        LOG_DATEOFBIRTH: Getdealvalues[0].dateofbirth ? Getdealvalues[0].dateofbirth : '',
                                                                        LOG_CITYOFBIRTH: Getdealvalues[0].cityofbirth ? Getdealvalues[0].cityofbirth : '',
                                                                        LOG_COUNTRYOFBIRTH: Getdealvalues[0].countryofbirth ? Getdealvalues[0].countryofbirth : '',
                                                                        LOG_CUSTOMERID: Getdealvalues[0].customerid ? Getdealvalues[0].customerid : '',
                                                                        LOG_CUSTOMERNAME: Getdealvalues[0].customername ? Getdealvalues[0].customername : '',
                                                                        LOG_EMIRATESID: Getdealvalues[0].emiratesid ? Getdealvalues[0].emiratesid : '',
                                                                        LOG_IDNUMBERCODE: Getdealvalues[0].idnumbercode ? Getdealvalues[0].idnumbercode : '',
                                                                        LOG_PAYMENTID: Getdealvalues[0].paymentid ? Getdealvalues[0].paymentid : '',
                                                                        LOG_ACCOUNT_STATUS: Getdealvalues[0].account_status ? Getdealvalues[0].account_status : '',
                                                                        LOG_IS_BLOCKED: Getdealvalues[0].is_blocked ? Getdealvalues[0].is_blocked : '',
                                                                        LOG_IS_DORMANT: Getdealvalues[0].is_dormant ? Getdealvalues[0].is_dormant : '',
                                                                        LOG_IS_CLOSED: Getdealvalues[0].is_closed ? Getdealvalues[0].is_closed : '',
                                                                        LOG_IS_INACTIVE: Getdealvalues[0].is_inactive ? Getdealvalues[0].is_inactive : '',
                                                                        LOG_CARD_STATUS: Getdealvalues[0].card_status ? Getdealvalues[0].card_status : '',
                                                                        LOG_CARD_EXPIRY_DATE: Getdealvalues[0].card_expiry_date ? Getdealvalues[0].card_expiry_date : '',
                                                                        LOG_CHANNEL_ID: Getdealvalues[0].channel_id ? Getdealvalues[0].channel_id : '',
                                                                        LOG_AVAILABLE_BALANCE: Getdealvalues[0].available_balance ? Getdealvalues[0].available_balance : '',
                                                                        LOG_DBTR_LEGAL_ID: Getdealvalues[0].dbtr_legal_id ? Getdealvalues[0].dbtr_legal_id : '',
                                                                        LOG_DBTR_NATIONAL_ID: Getdealvalues[0].dbtr_national_id ? Getdealvalues[0].dbtr_national_id : '',
                                                                        LOG_ECO_ACTVTY_CODE: Getdealvalues[0].eco_actvty_code ? Getdealvalues[0].eco_actvty_code : '',
                                                                        LOG_ISSUER_TYPE_CODE: Getdealvalues[0].issuer_type_code ? Getdealvalues[0].issuer_type_code : '',
                                                                        LOG_TRADE_LICENCE_NO: Getdealvalues[0].trade_licence_no ? Getdealvalues[0].trade_licence_no : '',
                                                                        LOG_POSTING_DATE_TIME: Getdealvalues[0].posting_date_time ? Getdealvalues[0].posting_date_time : '',
                                                                        LOG_ACCOUNT_NUMBER: Getdealvalues[0].account_number ? Getdealvalues[0].account_number : '',
                                                                        LOG_ACCOUNT_IBAN: Getdealvalues[0].account_iban ? Getdealvalues[0].account_iban : '',
                                                                        LOG_PHONE_NO: Getdealvalues[0].phone_no ? Getdealvalues[0].phone_no : '',
                                                                        LOG_VIRTUAL_IBAN: Getdealvalues[0].virtual_iban ? Getdealvalues[0].virtual_iban : '',
                                                                        LOG_WALLET_IBAN: Getdealvalues[0].wallet_iban ? Getdealvalues[0].wallet_iban : '',
                                                                        LOG_SENDER_MOBILE: Getdealvalues[0].process_name ? Getdealvalues[0].process_name : '',
                                                                        LOG_RECIPIENT_MOBILE: Getdealvalues[0].recipient_mobile ? Getdealvalues[0].process_name : '',
                                                                        LOG_REQUESTTOPAY: Getdealvalues[0].requesttopay ? Getdealvalues[0].requesttopay : '',
                                                                        LOG_BANKUSERID: Getdealvalues[0].bankuserid ? Getdealvalues[0].bankuserid : '',
                                                                        LOG_RETURN_IDENTIFICATION: Getdealvalues[0].return_identification ? Getdealvalues[0].return_identification : '',
                                                                        LOG_REMARKS: Getdealvalues[0].remarks ? Getdealvalues[0].remarks : '',

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

                                                                                "TEMPLATECODE": arrCatgory.length > 0 ? arrCatgory[0].param_value : '',

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
                                                                            "session-id": 'STATIC-SESSION-NPSS',
                                                                            "routingKey": 'CLT-0~APP-0~TNT-0~ENV-0',
                                                                            'Content-Type': 'application/json'

                                                                        }
                                                                    }

                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                                    request(options, function (error, responseFromImagingService, responseBody) {
                                                                        if (error) {
                                                                            reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                                            sendResponse(error, null);
                                                                        } else {
                                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Res JSON-------' + JSON.stringify(responseBody), objSessionLogInfo);
                                                                            objresponse.status = 'SUCCESS';
                                                                            sendResponse(null, objresponse);

                                                                        }
                                                                    });

                                                                } catch (error) {
                                                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                    sendResponse(error, null);
                                                                }
                                                            })

                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    } else {
                                        objresponse.status = 'Communication URL not found';
                                        sendResponse(null, objresponse)
                                    }

                                })
                            }

                            function TakeDealParam(uetr) {
                                return new Promise((resolve, reject) => {
                                    let Takedata = `select  fn_pcidss_decrypt(response_data_json,$PCIDSS_KEY ) as response_data_json,fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY ) as request_data_json,* from npss_trn_process_log where process_name = 'Get Deal' and uetr = '${uetr}'`
                                    ExecuteQuery1(Takedata, function (arrdata) {
                                        if (arrdata.length > 0) {
                                            resolve(arrdata)
                                        } else {
                                            resolve('')
                                        }

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
