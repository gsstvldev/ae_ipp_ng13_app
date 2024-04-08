var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    




    /*  Created By : Subramanian
    Created Date : 8/4/2024
    For: Credit Debit jasper report replacement
    
     
    */
    var serviceName = ' npss_cs_credit_debit_report';
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
            objSessionLogInfo.HANDLER_CODE = ' npss_cs_credit_debit_report';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = ' npss_cs_credit_debit_report';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {
                        
                        try {

                            /* if (Array.isArray(params.Tran_Id)) {
                                arrTranID = params.Tran_Id.map(function (eachTran) {
                                    return eachTran.toString();
                                });
                            } else {
                                arrTranID = [params.Tran_Id.toString()];
                            }
                            tranid = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')'; */
                          
                            var Taketran = `select
                            distinct uetr,
                            Debtor_Name,
                            Debtor_Account,
                            Creditor_Name,
                            Creditor_Account,
                            dr_sort_code,
                            TRANSACTION_AMOUNT_RANGE,
                            categorypurpose,
                            created_date,
                            CREATEDDATE,
                            payment_endtoend_id,
                            SOURCE_CHANNEL,
                            tran_ref_id,
                            STATUS,
                            otherreference,
                            clrsysref,
                            BENEFICIARY_BANK,
                            End_to_End_ID,
                            T24_FT_REFERENCE_NUMBER,
                            process_type,
                            API_Success_Failure,
                            Purpose_codes,
                            channel_refno,
                            account_number,
                            coalesce(Split_part(report_icon_data,
                            'base64',
                            2),
                            '') report_icon_data
                        from
                            (
                            select
                                NT.dbtr_acct_name as Debtor_Name,
                                nt.dbtr_iban as Debtor_Account,
                                nt.cdtr_acct_name,
                                NT.cdtr_iban as Creditor_Account,
                                nt.dr_sort_code,
                                nt.intrbk_sttlm_amnt as TRANSACTION_AMOUNT_RANGE,
                                case
                                    when nt.process_group = 'MANUAL' then nt.instruction_id
                                    when nt.process_group = 'P2P' then nt.remittance_info
                                    when nt.process_group = 'P2B' then nt.remittance_info
                                    when nt.process_group = 'IBAN' then nt.remittance_info
                                    when nt.process_group = 'BCT' then nt.remittance_info
                                    when nt.process_group = 'RCT' then nt.remittance_info
                                end as otherreference,
                                case
                                    when nt.process_group = 'MANUAL' then nt.category_purpose_prty
                                    when nt.process_group = 'IBAN' then nt.category_purpose
                                    when nt.process_group = 'P2P' then nt.category_purpose
                                    when nt.process_group = 'P2B' then nt.category_purpose
                                    when nt.process_group = 'BCT' then nt.category_purpose
                                    when nt.process_group = 'RCT' then nt.category_purpose
                                end as categorypurpose,
                                NT.cdtr_acct_name as Creditor_Name,
                                NT.channel_refno,
                                NT.channel_id as SOURCE_CHANNEL,
                                hdr_created_date as CREATEDDATE,
                                nt.CREATED_DATE,
                                nt.payment_endtoend_id,
                                nt.uetr,
                                nt.tran_ref_id,
                                nt.clrsysref,
                                nt.TENANT_ID,
                                cmb.bank_name as BENEFICIARY_BANK,
                                nt.process_type,
                                nt.PAYMENT_ENDTOEND_ID as End_to_End_ID,
                                L.report_icon_data,
                                nt.STATUS,
                                nt.process_status as API_Success_Failure,
                                nt.department_code as DEPARTMENT_NAME,
                                nt.VALUE_DATE,
                                NT.ext_purpose_code as Purpose_codes,
                                case
                                    when ntpl.process_name = 'OP Debit Posting'
                                    and nt.process_group = 'P2P' then ntpl.process_ref_no
                                    when ntpl.process_name = 'Fund AUTH Posting'
                                    and nt.process_group = 'P2B' then ntpl.process_ref_no
                                    when ntpl.process_name = 'Manual Fund AUTH Posting'
                                    and nt.process_group = 'MANUAL' then ntpl.process_ref_no
                                    when nt.process_group = 'IBAN' then nt.tran_ref_id
                                    when nt.process_group = 'BCT' then nt.tran_ref_id
                                    when nt.process_group = 'RCT' then nt.tran_ref_id
                                end as T24_FT_REFERENCE_NUMBER,
                                ntpl.PROCESS_NAME,
                                cnca.account_number
                            from
                                npss_transactions nt
                            inner join npss_trn_process_log ntpl on
                                nt.UETR = ntpl.UETR
                            left join core_nc_cbs_accounts cnca on
                                nt.dbtr_iban = cnca.alternate_account_id
                            left join CORE_RPT_LOGO_SETUP L on
                                L.tenant_id = NT.TENANT_ID
                            left join core_member_banks cmb on
                                cmb.bic_code = nt.cr_sort_code
                                and cmb.NEED_SYNC = 'Y' )v
                        where
                            process_type = 'OP'  limit 1`
                           
                            ExecuteQuery1(Taketran, function (arrdata) {
                                if (arrdata.length) {
                                    
                                    objresponse.status = 'SUCCESS'
                                    objresponse.screenName = params.screenName+'_'+ moment().format('DDMMYYYY')+'_'+moment().format('HHMMSS')
                                    objresponse.data = arrdata
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
