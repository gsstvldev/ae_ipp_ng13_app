var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {
    


    try {
        /*   Created By :Daseen
        Created Date :08-11-2023
       
    
        */
        var serviceName = 'NPSS IP REV Accept INAU Reserve Fund';
        var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
        var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
        var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
        var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
        var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
        var params = appRequest.body.PARAMS; //  Client input fromm Server
        var headers = appRequest.headers; // header details 
        var objSessionLogInfo = null; // set value is null
        var cvAcNum, sell_margin, sell_rate;
        var xml2js = require('xml2js');
        var mTranConn = "";
        var addquery = "";


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
                objSessionLogInfo.HANDLER_CODE = 'NPSS IP REV Accept INAU Reserve Fund';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS IP REV Accept INAU Reserve Fund';
                var cus_iban;
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection     
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                        try {

                            var PRCT_ID = prct_id
                            var ApitrnId
                            var app_id
                            var apicalls
                            var apiName
                            var reverseAcinfparam
                            var final_status
                            var final_process_status
                            var extend_retry_value
                            var ChecksplRate
                            var checkRole
                            var dealRefno = ''
                            var TakeStsPsts = `select success_process_status,success_status,processing_system,process_type from core_nc_workflow_setup where rule_code = 'RCT_IP_REV_REQ_ACCEPT' and  product_code = '${params.PROD_CODE}'and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                          //  var take_api_params = `select fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,ns.amount_credited_loc_cur,ns.department_code,ns.accp_date_time,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id = '${params.Tran_Id}'`
                            var Takeretcode = `select param_code,param_detail from core_nc_system_setup where param_category='REVERSAL RETURN CODE' and product_code = '${params.PROD_CODE}' AND need_sync = 'Y' and status = 'APPROVED'`
                            var take_api_params = `select fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,ns.amount_credited_loc_cur,ns.department_code,ns.accp_date_time,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,fn_pcidss_decrypt(ns.message_data,$PCIDSS_KEY ) as message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id = '${params.Tran_Id}'`
                                ExecuteQuery1(TakeStsPsts, function (arrsts) {
                                    if (arrsts.length) {
                                        final_process_status = arrsts[0].success_process_status
                                        final_status = arrsts[0].success_status
                                        ExecuteQuery1(Takeretcode, function (arrcode) {
                                            if (arrcode.length > 0) {
                                                ExecuteQuery1(take_api_params, async function (arrprocesslog) {
                                                    if (arrprocesslog.length) {
                                                        var lclinstrm
                                                        if (arrprocesslog[0].message_data !== null) {
                                                            var parser = new xml2js.Parser({ strict: false, trim: true });
                                                            parser.parseString(arrprocesslog[0].message_data, function (err, result) {
                                                                lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]
                                                            });
                                                        }
                                                        else {
                                                            lclinstrm = ""
                                                        }
                                                        if (params.roleId == 705 || params.roleId == '705' || params.roleId == 737 || params.roleId == '737') { //for checking prepaid or credit only for maker
                                                            checkRole = 'Maker'
                                                            //  apicalls = await checkprepaidorcredit(arrprocesslog)
                                                        } else {
                                                            objresponse.status = "Checker Role"
                                                                sendResponse(null, objresponse)
                                                        }
                                                        var InsertTable = await ProcessInstData(arrprocesslog, final_status, final_process_status, PRCT_ID, arrcode, arrsts)
                                                        if (InsertTable.length > 0) {
                                                            let Statechange = await Updcrdprd(arrprocesslog, final_process_status, final_status, PRCT_ID, checkRole)
                                                            
                                                        } else {
                                                            objresponse.status = "Error in Table Insert"
                                                            sendResponse(null, objresponse)
                                                        }
                                                    } else {

                                                        objresponse.status = "No Data found in Transaction  table"
                                                        sendResponse(null, objresponse)
                                                    }
                                                })
                                            } else {

                                                objresponse.status = "No Data found in System Setup  table"
                                                sendResponse(null, objresponse)
                                            }
                                        })
                                    } else {

                                        objresponse.status = "No Data found in Workflow Setup  table"
                                        sendResponse(null, objresponse)
                                    }
                                })
                            
                        }
                        catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    })
                    function ProcessInstData(arrprocesslog, final_status, final_process_status, PRCT_ID, arrcode, arrurlResult) {
                        return new Promise((resolve, reject) => {
                            var arrCusTranInst = [];
                            var objCusTranInst = {};

                            objCusTranInst.MSG_ID = arrprocesslog[0].hdr_msg_id;
                            objCusTranInst.PRCT_ID = PRCT_ID;
                            objCusTranInst.REVERSAL_CODE = arrprocesslog[0].revrsal_code
                            objCusTranInst.UETR = arrprocesslog[0].uetr;
                            objCusTranInst.NPSSTRRD_REFNO = arrprocesslog[0].tran_ref_id;
                            objCusTranInst.PROCESS_NAME = 'Accept Reversal'
                            objCusTranInst.PROCESSING_SYSTEM = arrurlResult[0].processing_system;
                            objCusTranInst.PROCESS_TYPE = arrurlResult[0].process_type;
                            objCusTranInst.PROCESS_STATUS = final_process_status;
                            objCusTranInst.STATUS = final_status;
                            objCusTranInst.TENANT_ID = params.TENANT_ID;
                            objCusTranInst.APP_ID = '215'
                            objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                            objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                            objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                            objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                            objCusTranInst.CREATED_BY = params.CREATED_BY;
                            objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                            objCusTranInst.T24_RETURN_CODE = null;
                            objCusTranInst.CBUAE_RETURN_CODE = arrcode[0].param_code;
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
                                resolve(CusTranInsertRes)

                            })
                        })

                    }



                    function Updcrdprd(arrprocesslog, final_process_status, final_status, PRCT_ID, checkRole) {
                        return new Promise((resolve, reject) => {
                            var UpdateTrnTble
                            if (checkRole == 'Maker') {
                                UpdateTrnTble = `Update npss_transactions set maker = '${params.loginName}',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
                            } else {
                                UpdateTrnTble = `Update npss_transactions set  checker = '${params.loginName}',status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
                            }

                            ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                if (arrUpdTranTbl == 'SUCCESS') {
                                    objresponse.status = 'SUCCESS';
                                    sendResponse(null, objresponse);
                                } else {
                                    objresponse.status = 'No Data Updated in Transaction Table';
                                    sendResponse(null, objresponse);

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
