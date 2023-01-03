var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    
try {
    /*   Created By :Siva Harish
    Created Date :02-01-2023
    Modified By : Siva Harish
    Modified Date : 03-01-2023   
    
    */
    var serviceName = 'NPSS (CS) Send To Checker';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Send To Checker';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (CS) Send To Checker';
            var cus_iban;
            // Get DB Connection                                                                                                                                      
            reqTranDBInstance.GetTranDBConn(headers, true, function (pSession) {
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

                         var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_OP_MAN_SENDTOCHECKER' and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`

                        var take_api_params = `select  ns.remittance_info,ns.cr_acct_identification,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method,
                               ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty,
                               ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,ns.intrbk_sttlm_amnt,
                               ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm
                               from npss_transactions ns  where npsst_id = '${params.Tran_Id}'`;
                        var Takeretcode = `select param_code,param_detail from core_nc_system_setup where param_category='REVERSAL RETURN CODE' and product_code = '${params.PROD_CODE}' and status = 'APPROVED'`
                        if (params.PROD_CODE == 'NPSS_AEFAB') {
                            ExecuteQuery1(TakeStsPsts, function (arrurlResult) {
                                if (arrurlResult.length) {

                                    final_process_status = arrurlResult[0].success_process_status
                                    final_status = arrurlResult[0].success_status
                                    ExecuteQuery1(Takeretcode, function (arrcode) {
                                        if (arrcode.length > 0) {
                                            ExecuteQuery1(take_api_params, function (arrprocesslog) {
                                                if (arrprocesslog.length) {
                                                    var arrCusTranInst = [];
                                                    var objCusTranInst = {};

                                                    objCusTranInst.MSG_ID = arrprocesslog[0].hdr_msg_id;
                                                    objCusTranInst.PRCT_ID = PRCT_ID;
                                                    objCusTranInst.REVERSAL_CODE = arrprocesslog[0].revrsal_code
                                                    objCusTranInst.UETR = arrprocesslog[0].uetr;
                                                    objCusTranInst.NPSSTRRD_REFNO = arrprocesslog[0].tran_ref_id;
                                                    objCusTranInst.PROCESS_NAME = 'Accept Reversal'
                                                    objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
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
                                                    console.log('................', arrprocesslog[0])
                                                    _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTranInsertRes) {
                                                        var lclinstrm
                                                        if (arrprocesslog[0].message_data !== null) {

                                                            var parser = new xml2js.Parser({ strict: false, trim: true });
                                                            parser.parseString(arrprocesslog[0].message_data, function (err, result) {

                                                                lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]

                                                            });
                                                            console.log('................', lclinstrm)
                                                        }
                                                        else {
                                                            lclinstrm = ""
                                                        }
                                                        var takedata = async () => {
                                                            reverseAcinfparam = await TakereversalIdandActInfm(arrprocesslog)
                                                            take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_INAU_RESERVE_ACCEPT' and param_code='URL'`;
                                                            ExecuteQuery1(take_api_url, function (arrurl) {
                                                                if (arrurl.length) {
                                                                    var url = arrurl[0].param_detail;
                                                                    var amount

                                                                     amount =  arrprocesslog[0].intrbk_sttlm_amnt
                                                                   
                                                                   
                                                                            apiName = 'Manual Initiation Reserve Fund Api'
                                                                          
                                                                          var callapi = async () =>{
                                                                            var apistatus = await checkapiCalls(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam)

                                                                            if (apistatus == 'SUCCESS' || apistatus == 'Success') {
                                                                                var UpdateTrnTble = `Update npss_transactions set status ='${final_status}',process_status = '${final_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`

                                                                                ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                                                    if (arrUpdTranTbl == 'SUCCESS') {
                                                                                        objresponse.status = 'SUCCESS';
                                                                                        sendResponse(null, objresponse);

                                                                                    } else {
                                                                                        objresponse.status = 'No Data Updated in Transaction Table';
                                                                                        sendResponse(null, objresponse);

                                                                                    }
                                                                                })

                                                                            } else if (apistatus == 'TIMEOUT') {

                                                                                objresponse.status = 'Time Out' + apiName + ' Api Failure'
                                                                                sendResponse(null, objresponse);
                                                                            } else {
                                                                                var Takeuetr = `select uetr from npss_transactions where npsst_id = '${params.Tran_Id}'`
                                                                                ExecuteQuery1(Takeuetr, function (arruetr) {
                                                                                    var status
                                                                                    
                                                                                    status = 'IP_RCT_REV_INAU_POSTING_FAILURE'
                                                                                    
                                                                                    var TakeFailureresult = `select cbuae_return_code from npss_trn_process_log where uetr = '${arruetr[0].uetr}' and status = '${status}'`
                                                                                    ExecuteQuery1(TakeFailureresult, function (arrFail) {
                                                                                        if (arrFail.length) {
                                                                                            objresponse.status = apiName + 'Failure Error Code - ' + arrFail[0].cbuae_return_code
                                                                                            sendResponse(null, objresponse);
                                                                                        } else {
                                                                                            objresponse.status = apiName + 'Api Call Failure No Error Code Found'
                                                                                            sendResponse(null, objresponse);
                                                                                        }
                                                                                    })
                                                                                })
                                                                            }
                                                                          }
                                                                          
                                                                          callapi()
                                                                                

                                                                            
                                                                        
                                                                    







                                                                }
                                                                else {
                                                                    console.log("No Data found in workflow table");
                                                                    objresponse.status = "No Data found in workflow table"
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            })
                                                        }

                                                        takedata()

                                                    })

                                                }
                                                else {
                                                    console.log("No Data found in Transaction table");
                                                    objresponse.status = "No Data found in Transaction table"

                                                    objresponse.status = "No Data found in Transaction table"
                                                    sendResponse(null, objresponse)
                                                }

                                            })
                                        } else {
                                            objresponse.status = "CBUAE Return Code not found"
                                            sendResponse(null, objresponse)
                                        }
                                    })

                                }
                                else {
                                    console.log("No Data found in System Setup table");
                                    objresponse.status = "No Data found in System Setup  table"
                                    sendResponse(null, objresponse)
                                }

                            })
                        } else { // for finance house
                            var TakeStsPsts1 = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_IP_REV_REQ_ACCEPT' and eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                            ExecuteQuery1(TakeStsPsts1, function (arrurlResult) {
                                if (arrurlResult.length) {
                                    ExecuteQuery1(Takeretcode, function (arrcode) {
                                        if (arrcode.length > 0) {
                                            ExecuteQuery1(take_api_params, function (arrprocesslog) {
                                                if (arrprocesslog.length) {
                                                    var arrCusTranInst = [];
                                                    var objCusTranInst = {};

                                                    objCusTranInst.MSG_ID = arrprocesslog[0].hdr_msg_id;
                                                    objCusTranInst.PRCT_ID = PRCT_ID;
                                                    objCusTranInst.REVERSAL_CODE = arrprocesslog[0].revrsal_code
                                                    objCusTranInst.UETR = arrprocesslog[0].uetr;
                                                    objCusTranInst.NPSSTRRD_REFNO = arrprocesslog[0].tran_ref_id;
                                                    objCusTranInst.PROCESS_NAME = 'Accept  Reversal'
                                                    objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
                                                    objCusTranInst.PROCESS_STATUS = arrurlResult[0].success_process_status;
                                                    objCusTranInst.STATUS = arrurlResult[0].success_status;
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
                                                    console.log('................', arrprocesslog[0])
                                                    _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTranInsertRes) {
                                                        var UpdateTrnTble = `Update npss_transactions set status ='${arrurlResult[0].success_status}',process_status = '${arrurlResult[0].success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id = '${params.Tran_Id}'`
                                                        var UpdateProcessLogTbl = `Update npss_trn_process_log set t24_return_code = '${params.T24_Return_Code}',cbuae_return_code = '${params.CBUAE_Return_Code}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsstpl_id = '${params.NPSSTPL_Id}'`
                                                        ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                            if (arrUpdTranTbl == 'SUCCESS') {

                                                                ExecuteQuery(UpdateProcessLogTbl, function (arrUpdPrcsTbl) {
                                                                    if (arrUpdPrcsTbl == 'SUCCESS') {
                                                                        objresponse.status = 'SUCCESS';
                                                                        sendResponse(null, objresponse);
                                                                    } else {
                                                                        objresponse.status = 'No Data Updated in Processlog Table';
                                                                        sendResponse(null, objresponse);

                                                                    }
                                                                })
                                                            } else {
                                                                objresponse.status = 'No Data Updated in Transaction Table';
                                                                sendResponse(null, objresponse);

                                                            }
                                                        })



                                                    })

                                                } else {
                                                    objresponse.status = "No Data For This Tran Id"
                                                    sendResponse(null, objresponse)
                                                }
                                            })
                                        } else {
                                            objresponse.status = "CBUAE Return Code is not found in table"
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                } else {
                                    objresponse.status = "No Data Found in core nc workflow table"
                                    sendResponse(null, objresponse)
                                }
                            })



                        }




                    }
                    catch (error) {
                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                        sendResponse(error, null);
                    }
                })
                // Do API Call for Service 
                function fn_doapicall(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam, callbackapi) {
                    try {
                        var apiName = 'NPSS IP REV Accept INAU Reserve Fund'
                        var request = require('request');
                        var apiURL =
                            apiURL = url // apiURL + apiName
                        var options = {
                            url: apiURL,
                            timeout: 18000000,
                            method: 'POST',
                            json: {


                                "payload": {
                                    "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                                    "hdr_created_date": arrprocesslog[0].hdr_created_date || '',
                                    "hdr_total_records": arrprocesslog[0].hdr_total_records || '',
                                    "hdr_total_amount": arrprocesslog[0].hdr_total_amount || '',
                                    "hdr_settlement_date": arrprocesslog[0].hdr_settlement_date || '',
                                    "hdr_settlement_method": arrprocesslog[0].hdr_settlement_method || '',
                                    "hdr_clearing_system": arrprocesslog[0].hdr_clearing_system || '',
                                    "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                                    "cr_sort_code": arrprocesslog[0].cr_sort_code || '',
                                    "category_purpose": arrprocesslog[0].category_purpose || '',
                                    "category_purpose_prty": arrprocesslog[0].category_purpose_prty || '',
                                    "ext_purpose_code": arrprocesslog[0].ext_purpose_code || '',
                                    "lclinstrm": lclinstrm || '',
                                    "intrbk_sttlm_cur": arrprocesslog[0].intrbk_sttlm_cur || '',
                                    "intrbk_sttlm_amnt": amount || '',
                                    "dbtr_iban": arrprocesslog[0].dbtr_iban || '',
                                    "cdtr_iban": arrprocesslog[0].cdtr_iban || '',
                                    "dbtr_acct_name": arrprocesslog[0].dbtr_acct_name || '',
                                    "cdtr_acct_name": arrprocesslog[0].cdtr_acct_name || '',
                                    "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                                    "charge_bearer": arrprocesslog[0].charge_bearer || '',
                                    "txid": arrprocesslog[0].tran_ref_id || '',
                                    "uetr": arrprocesslog[0].uetr || '',
                                    "cr_acct_identification": arrprocesslog[0].cr_acct_identification || '',
                                    "cr_acct_id_code": arrprocesslog[0].cr_acct_id_code || '',
                                    "message_data": arrprocesslog[0].message_data || '',

                                    "process_type": arrprocesslog[0].process_type || '',
                                    "status": params.eligible_status || '',
                                    "process_status": params.eligible_process_status || '',
                                    "clrsysref": arrprocesslog[0].clrsysref,

                                    "process": "",
                                    "remittance_information": arrprocesslog[0].remittance_info || '',
                                    "reversal_id": reverseAcinfparam.reverseId
                                },
                                "AccountInformation": {
                                    "account_number": reverseAcinfparam.account_number || '',
                                    "company_code": reverseAcinfparam.company_code || '',
                                    "inactive_marker": reverseAcinfparam.inactive_marker || '',
                                    "currency": reverseAcinfparam.currency || '',
                                    "alternate_account_type": "OLD.IBAN",
                                    "alternate_account_id": reverseAcinfparam.alternate_account_id || ''

                                }
                            },
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }


                        console.log('------------API JSON-------' + JSON.stringify(options));
                        reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                            if (error) {
                                reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                sendResponse(error, null);


                            } else {
                                responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                                console.log("------API CALL SUCCESS----");
                                callbackapi(responseBodyFromImagingService)
                            }
                        });

                    } catch (error) {
                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                        sendResponse(error, null);
                    }
                }


              

               


                //function to check logic for reversal Id and Taking acctinfm only for reserver fund

                function TakereversalIdandActInfm(arrprocesslog) {
                    return new Promise((resolve, reject) => {
                        var TakeAcctInf = `select Alternate_Account_Type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslog[0].cdtr_iban}'`

                        var TakeCount = `select COUNT(npsstpl_id) as counts from npss_trn_process_log where status = 'IP_RCT_REV_INAU_POSTING_FAILURE' and uetr = '${arrprocesslog[0].uetr}'`
                       

                        var parameter = {}
                        ExecuteQuery1(TakeAcctInf, function (arrActInf) {
                            if (arrActInf.length) {
                                parameter.account_number = arrActInf[0].account_number || '',
                                    parameter.company_code = arrActInf[0].company_code || '',
                                    parameter.inactive_marker = arrActInf[0].inactive_marker || '',
                                    parameter.currency = arrActInf[0].currency || '',
                                    parameter.alternate_account_id = arrActInf[0].alternate_account_id || ''
                                ExecuteQuery1(TakeCount, function (arrCount) {                                        
                                            if (arrprocesslog[0].clrsysref) {
                                                if (arrCount[0].counts.length == 1) {
                                                    var count = Number(arrCount[0].counts)
                                                    count++
                                                    parameter.reverseId = arrprocesslog[0].clrsysref + '.0' + count
                                                    resolve(parameter)
                                                } else {
                                                    var count = Number(arrCount[0].counts)
                                                    count++
                                                    parameter.reverseId = arrprocesslog[0].clrsysref + '.' + count
                                                    resolve(parameter)
                                                }
                                            } else {

                                                objresponse.status = "Clrsysref is not found in tran"
                                                sendResponse(null, objresponse)
                                            }
                                        

                                   
                                })
                            } else {
                                console.log("No Data found in accounts table");

                                objresponse.status = "No Data found in accounts table"
                                sendResponse(null, objresponse)
                            }

                        })




                    })

                }


                //function to call all api calls(reservefund,prepaid,credit)
                function checkapiCalls(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam) {
                    return new Promise((resolve, reject) => {
                       // reserve fund
                            fn_doapicall(url, arrprocesslog, lclinstrm, amount, reverseAcinfparam, function (result) {
                                if (result === "SUCCESS" || result === "Success" || result === "success") {

                                    resolve(result)
                                } else {
                                    resolve(result)

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
