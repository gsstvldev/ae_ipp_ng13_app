var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    

    /*  Created By : Siva   Harish
    Created Date :19/11/2022
    Modified By : 
    Modified Date : 
    Reason for : 
    renga -- update status also log table insert -11-06-2024
     
    */
    var serviceName = 'NPSS RCT Already Posting';
    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var success_process_status, success_status;
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS RCT Already Posting';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS RCT Already Posting';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    if (error) {
                        sendResponse(error);
                    } else {
                        var PRCT_ID = prct_id
                        try {
                            if (Array.isArray(params.Id)) {
                                arrTranID = params.Id.map(function (eachTran) { return eachTran.toString(); });
                            }
                            else {
                                arrTranID = [params.Id.toString()];
                            }
                            TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                            //  var ruleqry = `select success_process_status,success_status  from core_nc_workflow_setup where rule_code='${params.RULE_CODE}'`
                            var ruleqry = `select success_process_status,success_status from core_nc_workflow_setup where rule_code='${params.RULE_CODE}' and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                            var take_api_params = `select ns.account_currency,ns.reversal_amount,ns.npsst_id,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY ) as dbtr_acct_no,ns.dbtr_prvt_id,ns.department_code,ns.dbtr_cust_type,ns.ext_acct_id_code,ns.intrbk_sttlm_amnt,ns.instrument_type,ns.instruction_id,ns.hdr_msg_id,ns.hdr_clearing_system,ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,fn_pcidss_decrypt(ns.message_data,$PCIDSS_KEY ) as message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,ns.accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id in ${TempTranID}`;
                            ExecuteQuery1(ruleqry, function (result) {
                                if (result.length) {
                                    success_process_status = result[0].success_process_status;
                                    success_status = result[0].success_status;
                                    // var updtranqry
                                    // if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') {
                                    //     updtranqry = `update npss_transactions set maker = '${params.CREATED_BY_NAME}', cbs_ref_no = '${params.Refno}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id in${TempTranID} `
                                    // }else{
                                    //     updtranqry = `update npss_transactions set  checker = '${params.CREATED_BY_NAME}',cbs_ref_no = '${params.Refno}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id in${TempTranID} `
                                    // }

                                    ExecuteQuery1(take_api_params, async function (arrtranres) {
                                        if (arrtranres.length>0) {
                                            let InsertUpdateProcess = await InsertProcess(arrtranres[0], success_process_status, success_status, PRCT_ID)
                                            if(InsertUpdateProcess=='SUCCESS'){
                                                objresponse.status = 'SUCCESS';
                                                sendResponse(null, objresponse)
                                            }else{
                                                console.log("Error in Update status & insert the log table ");
                                                objresponse.status = 'FAILURE';
                                                sendResponse(null, objresponse)
                                            }
                                        }
                                        else {
                                            console.log("Tran data not found");
                                            objresponse.status = 'FAILURE';
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                }
                                else {
                                    console.log("No data Found In Rule Code");
                                    objresponse.status = 'FAILURE';
                                    sendResponse(null, objresponse)
                                }

                            })



                            function InsertProcess(arrTranparams, success_process_status, success_status, PRCT_ID) {
                                return new Promise((resolve, reject) => {
                                    var processName
                                    if (params.Roleid == '705' || params.Roleid == 705) {
                                        processName = 'Already posting - Maker'
                                    } else {
                                        processName = 'Already posting - Checker'
                                    }
                                    var arrCusTranInst = [];
        
                                    var objCusTranInst = {}
                                    objCusTranInst.MSG_ID = arrTranparams.hdr_msg_id;
                                    objCusTranInst.PRCT_ID = PRCT_ID;
                                    objCusTranInst.UETR = arrTranparams.uetr;
                                    objCusTranInst.NPSSTRRD_REFNO = arrTranparams.tran_ref_id;
                                    objCusTranInst.PROCESS_TYPE = 'IP'
                                    objCusTranInst.PROCESS_TIME = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                    objCusTranInst.PROCESS_NAME = processName
                                    objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
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
                                    _BulkInsertProcessItem(arrCusTranInst, 'npss_trn_process_log', function callbackInsert(CusTranInsertRes) {
                                        if (CusTranInsertRes.length > 0) {
                                            var UpdateTrnTbl
                                            if (params.Roleid == 705 || params.Roleid == '705' || params.Roleid == 737 || params.Roleid == '737') {
                                                UpdateTrnTbl = `update npss_transactions set  maker = '${params.CREATED_BY_NAME}',cbs_ref_no = '${params.Refno}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id = '${arrTranparams.npsst_id}'`
                                                
                                            } else {
                                                UpdateTrnTbl = `update npss_transactions set  checker = '${params.CREATED_BY_NAME}',cbs_ref_no = '${params.Refno}',status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id = '${arrTranparams.npsst_id}'`
                                            }
                                            ExecuteQuery(UpdateTrnTbl, function (uptranresult) {
                                                if (uptranresult == 'SUCCESS') {
                                                    resolve('SUCCESS')
                                                } else {
                                                    resolve('FAILURE')
        
                                                }
                                            })
                                        } else {
                                            objresponse.status = 'FAILURE'
                                            objresponse.errdata = 'Failure in Insert Process for TranId' + arrTranparams.npsst_id
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                })
        
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
