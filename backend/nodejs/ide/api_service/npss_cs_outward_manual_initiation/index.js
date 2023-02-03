var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


    /*  Created By :sIVA hARISH
    Created Date : 31-12-2022
    Modified By : Siva Harish
    Modified Date : 24/01/2023
    Modified By : Siva Harish
    Modified Date : 25/01/2023
     Modified By : Siva Harish
    Modified Date : 26/01/2023
    Reason for : 
     
    */
    var serviceName = ' NPSS (CS) Outward Manual Initiation ';
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

    var uetr
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
            objSessionLogInfo.HANDLER_CODE = ' NPSS (CS) Outward Manual Initiation ';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = ' NPSS (CS) Outward Manual Initiation ';
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
                                        var TakedatafrmTrn = `select fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY) as dbtr_account_no,* from npss_transactions ns where npsst_id = '${params.Tran_Id}'`
                                        ExecuteQuery1(TakedatafrmTrn, async function (arrdata) {
                                        var takeUetr = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_GET_UETR' and param_code='URL'`
                                            ExecuteQuery1(takeUetr, async function (arruetr) {
                                                if(arruetr.length > 0){
                                                    uetr = await GetUetr(arruetr)
                                                    if (arrdata.length > 0) {
                                                        var arrCusTranInst = [];
                                                        var objCusTranInst = {};
        
                                                        objCusTranInst.CR_SORT_CODE = arrdata[0].dr_sort_code;
                                                        objCusTranInst.PRCT_ID = PRCT_ID;
                                                        objCusTranInst.DR_SORT_CODE = arrdata[0].cr_sort_code;
                                                        objCusTranInst.HDR_MSG_ID = arrdata[0].hdr_msg_id;
                                                        objCusTranInst.UETR = uetr;
                                                        objCusTranInst.PROCESS_TYPE = 'OP';
                                                        objCusTranInst.DBTR_IBAN = arrdata[0].cdtr_iban;
                                                        objCusTranInst.CDTR_IBAN = arrdata[0].dbtr_iban
                                                        objCusTranInst.DBTR_ACCT_NAME = arrdata[0].cdtr_acct_name
                                                        objCusTranInst.CDTR_ACCT_NAME = arrdata[0].dbtr_acct_name
                                                        objCusTranInst.DBTR_PHONE_NO = arrdata[0].cdtr_phone_no
                                                        objCusTranInst.CDTR_PHONE_NO = arrdata[0].dbtr_phone_no
                                                        objCusTranInst.DBTR_EMAIL_ID = arrdata[0].cdtr_email_id
                                                        objCusTranInst.CDTR_EMAIL_ID = arrdata[0].dbtr_email_id
                                                        objCusTranInst.DBTR_DOCUMENT_ID = arrdata[0].cdtr_document_id
                                                        objCusTranInst.CDTR_DOCUMENT_ID = arrdata[0].dbtr_document_id
                                                        objCusTranInst.TRAN_INFO = params.Tran_Id
                                                        objCusTranInst.PROCESS_STATUS = success_process_status;
                                                        objCusTranInst.STATUS = success_status;
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
                                                        objCusTranInst.SYSTEM_ID = params.SYSTEM_ID || null;
                                                        objCusTranInst.SYSTEM_NAME = params.SYSTEM_NAME || null;
                                                        objCusTranInst.CREATED_BY_STS_ID = "";
                                                        objCusTranInst.MODIFIED_BY_STS_ID = "";
                                                        objCusTranInst.created_clientip = objSessionLogInfo.CLIENTIP;
                                                        objCusTranInst.created_tz = objSessionLogInfo.CLIENTTZ;
                                                        objCusTranInst.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                                        objCusTranInst.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                                        objCusTranInst.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                                        objCusTranInst.routingkey = headers.routingkey;
                                                        objCusTranInst.INTRBK_STTLM_AMNT = params.INTRBK_STTLM_AMNT || null
                                                        objCusTranInst.INTRBK_STTLM_CUR = params.INTRBK_STTLM_CUR || null
                                                        objCusTranInst.VALUE_DATE = reqDateFormatter.GetDateAt12AM(headers, objSessionLogInfo, params.VALUE_DATE)
                                                        objCusTranInst.DBTR_ACCT_NO = arrdata[0].cdtr_acct_no
                                                        objCusTranInst.BASE_AMOUNT = arrdata[0].base_amount
                                                        objCusTranInst.BASE_CURRENCY = params.BASE_CURRENCY || null
                                                        objCusTranInst.HDR_CREATED_DATE = arrdata[0].hdr_created_date
                                                        objCusTranInst.HDR_TOTAL_RECORDS = arrdata[0].hdr_total_records
                                                        objCusTranInst.RATE_CODE = arrdata[0].rate_code
                                                        objCusTranInst.EXCHANGE_RATE = arrdata[0].exchange_rate
                                                        objCusTranInst.HDR_TOTAL_AMOUNT = arrdata[0].hdr_total_amount
                                                        objCusTranInst.CATEGORY_PURPOSE = arrdata[0].category_purpose
                                                        objCusTranInst.HDR_SETTLEMENT_DATE = arrdata[0].hdr_settlement_date
                                                        objCusTranInst.HDR_CLEARING_SYSTEM = arrdata[0].hdr_clearing_system
                                                        objCusTranInst.PAYMENT_ENDTOEND_ID = arrdata[0].payment_endtoend_id
                                                        objCusTranInst.INSTRUMENT_TYPE = arrdata[0].instrument_type
                                                        objCusTranInst.CHARGE_BEARER = arrdata[0].charge_bearer
                                                        objCusTranInst.EXHF_ID = arrdata[0].exhf_id
                                                        objCusTranInst.DBTR_CUST_TYPE = arrdata[0].dbtr_cust_type
                                                        objCusTranInst.CHANNEL_ID = arrdata[0].channel_id
                                                        objCusTranInst.CHANNEL_REFNO = arrdata[0].channel_refno
                                                        objCusTranInst.CHANNEL_USERID = arrdata[0].channel_userid
                                                        objCusTranInst.CHANNEL_PRODUCT = arrdata[0].channel_product
                                                        objCusTranInst.CHANNEL_SUB_PRODUCT = arrdata[0].channel_sub_product
                                                        objCusTranInst.CHANNEL_TRAN_CODE = arrdata[0].channel_tran_code
                                                        objCusTranInst.TRAN_REF_ID = arrdata[0].tran_ref_id
                                                        objCusTranInst.CATEGORY_PURPOSE_PRTY = arrdata[0].category_purpose_prty
                                                        objCusTranInst.EXT_ORG_ID_CODE = arrdata[0].ext_org_id_code
                                                        objCusTranInst.ISSUER_TYPE_CODE = arrdata[0].issuer_type_code
                                                        objCusTranInst.DBTR_BIRTH_DATE = arrdata[0].dbtr_birth_date
                                                        objCusTranInst.DBTR_CITY_BIRTH = arrdata[0].dbtr_city_birth
                                                        objCusTranInst.DBTR_COUNTRY = arrdata[0].dbtr_country
                                                        objCusTranInst.EXT_PERSON_ID_CODE = arrdata[0].ext_person_id_code
                                                        objCusTranInst.CR_ACCT_IDENTIFICATION = arrdata[0].dbtr_account_no
                                                        objCusTranInst.CR_ACCT_ID_CODE = arrdata[0].cr_acct_id_code
                                                        objCusTranInst.EXT_PURPOSE_PRTY = arrdata[0].ext_purpose_prty
                                                        objCusTranInst.EXT_PURPOSE_CODE = arrdata[0].ext_purpose_code
                                                        objCusTranInst.REMITTANCE_INFO = arrdata[0].remittance_info
                                                        objCusTranInst.INWARD_FILE_NAME = arrdata[0].inward_file_name
                                                        objCusTranInst.CLRSYSREF = arrdata[0].clrsysref
                                                        objCusTranInst.ACCP_DATE_TIME = arrdata[0].accp_date_time
                                                        objCusTranInst.DEPARTMENT_CODE = arrdata[0].department_code
                                                        objCusTranInst.CBS_REF_NO = arrdata[0].cbs_ref_no
                                                        objCusTranInst.DBTR_PRVT_ID = arrdata[0].dbtr_prvt_id
                                                        objCusTranInst.DBTR_OTHER_ISSUER = arrdata[0].dbtr_other_issuer
                                                        objCusTranInst.MIDDLEWARE_REF_NO = arrdata[0].middleware_ref_no
                                                        objCusTranInst.CBS_POSTING_FLAG = arrdata[0].cbs_posting_flag
                                                        objCusTranInst.ACCOUNT_CURRENCY = arrdata[0].account_currency
                                                        objCusTranInst.CPR_STATUS = arrdata[0].cpr_status
                                                        objCusTranInst.PROCESSING_SYSTEM = arrdata[0].processing_system
                                                        objCusTranInst.CPR_CR_FLAG = arrdata[0].cpr_cr_flag
                                                        objCusTranInst.CPR_DW_FLAG = arrdata[0].cpr_dw_flag
                                                        objCusTranInst.CPR_CR_FILE_NAME = arrdata[0].cpr_cr_file_name
                                                        objCusTranInst.CPR_DW_FILE_NAME = arrdata[0].cpr_dw_file_name
                                                        objCusTranInst.CPR_REJECT_REASON = arrdata[0].cpr_reject_reason
                                                        objCusTranInst.REMARKS = arrdata[0].remarks
                                                        objCusTranInst.DISPUTE_REF_NO = params.DISPUTE_REF_NO || null
                                                        objCusTranInst.REVERSAL_AMOUNT = arrdata[0].reversal_amount
                                                        objCusTranInst.CHARGE_AMOUNT = params.CHARGE_AMOUNT || null
                                                        arrCusTranInst.push(objCusTranInst)
                                                        _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRANSACTIONS', function callbackInsert(CusTranInsertRes) {
                                                            if (CusTranInsertRes.length > 0) {
                                                                var arrTrnPrslog = [];
                                                                var objcusTranprslog = {};
                                                                objcusTranprslog.MSG_ID = arrdata[0].hdr_msg_id;
                                                                objcusTranprslog.PRCT_ID = PRCT_ID;
                                                                objcusTranprslog.UETR = uetr;
                                                                objcusTranprslog.NPSSTRRD_REFNO = arrdata[0].tran_ref_id;
                                                                objcusTranprslog.PROCESS_NAME = 'Initiate Dispute Tran'
                                                                objcusTranprslog.PROCESSING_SYSTEM = 'NPSS';
                                                                objcusTranprslog.PROCESS_STATUS = success_process_status;
                                                                objcusTranprslog.STATUS = success_status;
                                                                objcusTranprslog.TENANT_ID = params.TENANT_ID;
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
                                                                objcusTranprslog.created_clientip = objSessionLogInfo.CLIENTIP;
                                                                objcusTranprslog.created_tz = objSessionLogInfo.CLIENTTZ;
                                                                objcusTranprslog.created_tz_offset = objSessionLogInfo.CLIENTTZ_OFFSET;
                                                                objcusTranprslog.created_date_utc = reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo);
                                                                objcusTranprslog.created_by_sessionid = objSessionLogInfo.SESSION_ID;
                                                                objcusTranprslog.routingkey = headers.routingkey;
                                                                arrTrnPrslog.push(objcusTranprslog)
                                                                _BulkInsertProcessItem(arrTrnPrslog, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTrnPrslog) {
                                                                    if (CusTrnPrslog.length > 0) {
                                                                        var UpdateTrnProcessLog = `update npss_trn_process_log set  additional_info = 'Maker_Initiated',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsstpl_id ='${params.NPSSTPL_Id}'`
                                                                        ExecuteQuery(UpdateTrnProcessLog, function (arrUpdPrsLog) {
                                                                            if (arrUpdPrsLog == 'SUCCESS') {
                                                                                objresponse.status = 'SUCCESS';
                                                                                sendResponse(null, objresponse);
                                                                            } else {
                                                                                objresponse.status = 'No Data Updated in TranProcessLog Table';
                                                                                sendResponse(null, objresponse);
                                                                            }
                                                                        })
                                                                    } else {
                                                                        objresponse.status = 'Data not insert in trn process log';
                                                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                                        sendResponse(null, objresponse)
                                                                    }
                                                                })
                                                            } else {
                                                                objresponse.status = 'Failure in Tran Table Insert';
                                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                                sendResponse(null, objresponse)
                                                            }
        
                                                        })
        
                                                    } else {
                                                        objresponse.status = 'No data found in npss tran table'
                                                        sendResponse(null, objresponse)
                                                    }
                                                }else{
                                                    objresponse.status = 'Get Uetr Api Url Not Found'
                                                    sendResponse(null, objresponse) 
                                                }
                                                
                                            })
                                           

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
