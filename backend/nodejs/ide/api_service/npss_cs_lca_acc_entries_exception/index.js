var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


    try {

        var serviceName = 'NPSS (CS) LCA Acc Entries Exception';
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
        var failcountobj = {}
        var failcount = []
        var TempTranID
        var reqAsync = require('async');
        var moment = require('moment');
        var arrTranID
        var objresponse = {
            'status': 'FAILURE',
            'data': '',
            'errdata': '',
            'msg': ''
        }; // Response to Client
        // Assign function for loginformation and session info

        reqLogInfo.AssignLogInfoDetail(appRequest, function (objLogInfo, objSessionInformation) {
            try {
                objSessionLogInfo = objLogInfo; // Assing log information
                // Log Viewer Setup
                objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) LCA Acc Entries Exception';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS (CS) LCA Acc Entries Exception';
                var cus_iban;
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection     
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                        try {
                            if (Array.isArray(params.Tran_Id)) {
                                arrTranID = params.Tran_Id.map(function (eachTran) {
                                    return eachTran.toString();
                                });
                            } else {
                                arrTranID = [params.Tran_Id.toString()];
                            }
                            TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                            var PRCT_ID = prct_id
                            var final_status
                            var final_process_status
                            var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_IP_POSTING_FAIL_REPOST'  and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                            var take_api_params = `select ns.account_currency,ns.reversal_amount,ns.npsst_id,fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,fn_pcidss_decrypt(ns.dbtr_acct_no,$PCIDSS_KEY ) as dbtr_acct_no,ns.dbtr_prvt_id,ns.department_code,ns.dbtr_cust_type,ns.ext_acct_id_code,ns.intrbk_sttlm_amnt,ns.instrument_type,ns.instruction_id,ns.hdr_msg_id,ns.hdr_clearing_system,ns.dbtr_other_issuer,ns.ext_person_id_code,ns.dbtr_country,ns.dbtr_city_birth,ns.dbtr_birth_date,ns.dbtr_document_id,ns.issuer_type_code,ns.dbtr_prvt_id,ns.remittance_info,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method, ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty, ns.clrsysref, ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt, ns.process_type,ns.status,ns.process_status,ns.tran_ref_id, ns.value_date,ns.ext_org_id_code,ns.accp_date_time as accp_dt_tm from npss_transactions ns where npsst_id in ${TempTranID}`;
                            var Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
                            ExecuteQuery1(TakeStsPsts, async function (arrurlResult) {
                                if (arrurlResult.length) {
                                    final_process_status = arrurlResult[0].success_process_status
                                    final_status = arrurlResult[0].success_status
                                    ExecuteQuery1(Takekafkaurl, async function (arrurl) {
                                        if (arrurl.length > 0) {
                                            ExecuteQuery1(take_api_params, async function (arrTranparams) {
                                                if (arrTranparams.length > 0) {
                                                    reqAsync.forEachOfSeries(arrTranparams, function (arrTranparamsObj, i, nextobjctfunc) {
                                                      let  getdata = async () => {
                                                            if (arrTranparamsObj.dbtr_iban != '' && arrTranparamsObj.dbtr_iban != null) {
                                                                let GetacctInf = await AccountInformation(arrTranparamsObj.dbtr_iban)
                                                               
                                                                var request = require('request');
                                                                var options = {
                                                                    url: arrurl[0].param_detail,
                                                                    timeout: 18000000,
                                                                    method: 'POST',
                                                                    json: {
                                                                        batch_name: "LAC-POSTING-Q",
                                                                        data: {
                                                                            "payload": {
                                                                             "hdr_msg_id": arrTranparamsObj.hdr_msg_id,
                                                                             "hdr_created_date": arrTranparamsObj.hdr_created_date,
                                                                             "hdr_total_records": arrTranparamsObj.hdr_total_records,
                                                                             "hdr_total_amount": arrTranparamsObj.hdr_total_amount || '',
                                                                             "hdr_settlement_date": arrTranparamsObj.hdr_settlement_date || '',
                                                                             "hdr_settlement_method": arrTranparamsObj.hdr_settlement_method || '',
                                                                             "hdr_clearing_system": arrTranparamsObj.hdr_clearing_system || '',
                                                                             "dr_sort_code": arrTranparamsObj.dr_sort_code || '',
                                                                             "cr_sort_code": arrTranparamsObj.cr_sort_code || '',
                                                                             "category_purpose": arrTranparamsObj.category_purpose || '',
                                                                             "category_purpose_prty": arrTranparamsObj.category_purpose_prty || '',
                                                                             "ext_purpose_code": arrTranparamsObj.ext_purpose_code || '',
                                                                             "lclinstrm": "",
                                                                             "intrbk_sttlm_cur": arrTranparamsObj.intrbk_sttlm_cur || '',
                                                                             "intrbk_sttlm_amnt": arrTranparamsObj.intrbk_sttlm_amnt || '',
                                                                             "dbtr_iban": arrTranparamsObj.dbtr_iban || '',
                                                                             "cdtr_iban": arrTranparamsObj.cdtr_iban || '',
                                                                             "dbtr_acct_name": arrTranparamsObj.dbtr_acct_name || '',
                                                                             "cdtr_acct_name": arrTranparamsObj.cdtr_acct_name || '',
                                                                             "payment_endtoend_id": arrTranparamsObj.payment_endtoend_id || '',
                                                                             "charge_bearer": "",
                                                                             "txid": "",
                                                                             "uetr": arrTranparamsObj.uetr || '',
                                                                            "cr_acct_identification": "",
                                                                            "cr_acct_id_code": "",
                                                                             "message_data": "",
                                                                             "process_type": arrTranparamsObj.process_type || '', 
                                                                            "status": arrTranparamsObj.status || '',        
                                                                             "process_status": arrTranparamsObj.process_status || '',
                                                                             "process": "",     
                                                                            "remittance_information": "",
                                                                            "extIdentifier":"",
                                                                            "clrsysref":"",
                                                                            "department_code":"",
                                                                            "sell_margin":"",
                                                                            "sell_rate":"",
                                                                            "charge_code":"",
                                                                            "npsst_id":"",
                                                                            "cdtr_acct_no": arrTranparamsObj.cdtr_acct_no || '',
                                                                            "dbtr_acct_no": arrTranparamsObj.dbtr_acct_no || '',
                                                                            "cr_dr_indicator":""
                                                                         },
                                                                         "AccountInformation": {
                                                                                "account_number":GetacctInf.account_number || '',
                                                                                "company_code": GetacctInf.company_code || '',
                                                                                "inactive_marker": GetacctInf.inactive_marker || '',
                                                                                "currency": GetacctInf.currency || '',
                                                                                "alternate_account_type": GetacctInf.alternate_account_type || '',
                                                                                "alternate_account_id": GetacctInf.alternate_account_id || '',
                                                                                "account_officer": GetacctInf.account_officer || '',
                                                                                "curr_rate_segment": GetacctInf.curr_rate_segment || '',
                                                                                "customer_id": GetacctInf.customer_id || '',
                                                                                "CR.VA.NUMBER":""
                                                                            }
                                                                        }
                                                                    },
                                                                    headers: {
                                                                        'Content-Type': 'application/json'
                                                                    }
                                                        
                                                                }
                                                           
                                                        
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                                request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                                    if (error) {
                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                                        sendResponse(error, null);
                                                        
                                                                    } else {
                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService+'for TranId.......'+arrTranparamsObj.npsst_id, objSessionLogInfo);
                                                                        if (responseBodyFromImagingService == 'SUCCESS') {
                                                                            nextobjctfunc()
                                                                        } else {
                                                                            objresponse.status = 'Error in Kafka api response for Tran id  '+ arrTranparamsObj.npsst_id
                                                                            sendResponse(null, objresponse)
                                                                        }
                                                                    }
                                                                });
                                                            
                                                        

                                                            } else {
                                                                objresponse.status = "DBTR IBAN not found for tranid  " + arrTranparamsObj.npsst_id
                                                                objresponse.errdata = "DBTR IBAN not found for tranid  " + arrTranparamsObj.npsst_id
                                                                sendResponse(null, objresponse)
                                                            }

                                                        }
                                                        getdata()
                                                    },function(){
                                                        objresponse.status = 'SUCCESS'
                                                        sendResponse(null,objresponse)
                                                    })
                                                } else {
                                                    objresponse.status = "No Data found in Workflow table"
                                                    objresponse.errdata = "No Data found in Workflow table"
                                                    sendResponse(null, objresponse)
                                                }
                                            })


                                        } else {
                                            objresponse.status = "kafka Api url not found"
                                            objresponse.errdata = "kafka Api url not found"
                                            sendResponse(null, objresponse)
                                        }
                                    })


                                } else {
                                    objresponse.status = "No Data found in Tran Table"
                                    objresponse.errdata = "No Data found in Tran Table"
                                    sendResponse(null, objresponse)
                                }



                            })



                        }
                        catch (error) {
                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                            sendResponse(error, null);
                        }
                    })



                    //Take Acct Information
                    function AccountInformation(dbtr_iban) {
                        return new Promise((resolve, reject) => {
                            var cbsaccount = `select curr_rate_segment,account_officer,alternate_account_id,currency,inactive_marker,account_number,company_code,customer_id,alternate_account_type from core_nc_cbs_accounts where alternate_account_id ='${dbtr_iban}'`
                            ExecuteQuery1(cbsaccount, function (arrcbsdata) {
                                if (arrcbsdata.length > 0) {
                                    resolve(arrcbsdata[0])
                                } else {
                                    objresponse.status = 'No data found in cbs accounts table for DBTR IBAN  '+dbtr_iban
                                    sendResponse(null, objresponse)
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
