var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    
try {
    /*   Created By :Daseen
    Created Date :16-12-2022
    Modified By : 
    Modified Date : 20/12/2022
    Reason for : Changing Update Query Position for FAB
   Adding Query Position for FAB
    Reason for :Adding Update query for Tran Process Log Table 12/01/2023
    */
    var serviceName = 'NPSS RCT Outward Reversal Approve';
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS RCT Outward Reversal Approve';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS RCT Outward Reversal Approve';
            var cus_iban;
            // Get DB Connection                                                                                                                                      
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                    try {
                        var PRCT_ID = prct_id
                        var ApitrnId
                        var app_id
                        var success_process_status
                        var success_status
                        var take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='RCT_OP_REV_APPROVE' and param_code='URL'`;
                        //  var TakeStsPsts = `select success_process_status,success_status from core_nc_workflow_setup where rule_code = 'RCT_IP_REV_REQ_ACCEPT' and  eligible_status = '${params.eligible_status}' and eligible_process_status = '${params.eligible_process_status}'`
                        var take_status = `Select success_process_status,success_status from core_nc_workflow_setup where rule_code='RCT_OP_REV_APPROVE'`;
                        //var take_batch_name = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='BATCH_NAME'`;
                        var take_api_params = `select  ns.intrbk_sttlm_amnt,ns.remittance_info,ns.cr_acct_identification,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method,
                            ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty,
                            ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,ns.reversal_amount,
                            ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm
                            from npss_transactions ns  where npsst_id = '${params.Tran_Id}'`;
                       
                        ExecuteQuery1(take_status, function (arrrule) {

                            if (arrrule.length > 0) {
                                success_process_status = arrrule[0].success_process_status;
                                success_status = arrrule[0].success_status;

                                ExecuteQuery1(take_api_params, function (arrprocesslog) {
                                    if (arrprocesslog.length) {
                                        console.log('................', arrprocesslog[0])
                                        var arrCusTranInst = [];
                                        var objCusTranInst = {};

                                        objCusTranInst.MSG_ID = arrprocesslog[0].hdr_msg_id;
                                        objCusTranInst.PRCT_ID = PRCT_ID;
                                        objCusTranInst.REVERSAL_CODE = params.REVERSAL_CODE
                                        objCusTranInst.UETR = arrprocesslog[0].uetr;
                                        objCusTranInst.NPSSTRRD_REFNO = arrprocesslog[0].tran_ref_id;
                                        objCusTranInst.PROCESS_NAME = 'Approve Reversal'
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
                                        _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(CusTranInsertRes) {
                                            if (CusTranInsertRes.length > 0) {
                                                
                                                   //ExecuteQuery(UpdateTrnTbl, function (uptranresult) {
                                                   //if (uptranresult == 'SUCCESS') {
                                                    var TakepostRefno = `select process_ref_no from npss_trn_process_log where uetr = '${arrprocesslog[0].uetr}' and process_name = 'Receive pacs002' and status in ('OP_AC_STATUS_ACCEPTED','OP_P2P_STATUS_ACCEPTED', 'OP_P2B_STATUS_ACCEPTED')`
                                                    ExecuteQuery1(TakepostRefno, function (arrpostrefno) {
                                                        if(arrpostrefno.length > 0){
                                                            ExecuteQuery1(take_api_url, function (arrurl) {
                                                                if (arrurl.length) {
                                                                    var url = arrurl[0].param_detail;
                                                                    fn_doapicall(url, arrprocesslog,arrpostrefno, function (result) {
                                                                        if (result == 'SUCCESS') {
                                                                            var UpdateTrnTbl = `update npss_transactions set  status='${success_status}',process_status='${success_process_status}',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsst_id='${params.Tran_Id}'`
                                                                            ExecuteQuery(UpdateTrnTbl, function (uptranresult) {
                                                                                if (uptranresult == 'SUCCESS') {
                                                                                    var UpdateTrnPrslogTbl = `update npss_trn_process_log set  additional_info = 'Checker_Approved',MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}'  where npsstpl_id ='${params.NPSSTPL_Id}'`
                                                                                    ExecuteQuery(UpdateTrnPrslogTbl, function (updTrnprslog) {
                                                                                        if(updTrnprslog == 'SUCCESS'){
                                                                                            objresponse.status = 'SUCCESS';
                                                                                            objresponse.data = result;
                                                                                            sendResponse(null, objresponse);
                                                                                        }else{
                                                                                            objresponse.status = 'Update Fail in Trn Process Log Table';
                                                                                            sendResponse(null, objresponse);
                                                                                        }
                                                                                    
                                                                                    })
    
                                                                                }else{
                                                                                    objresponse.status = 'Update Fail in npss tran';
                                                                                    objresponse.data = result;
                                                                                    sendResponse(null, objresponse);
                                                                                }
                                                                           
                                                                            })
                                                                        }
    
    
                                                                        else {
                                                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Data not received from service", result);
    
                                                                            sendResponse(result, null);
                                                                        }
                                                                    })
                                                                }
                                                                else {
                                                                    console.log("No Data found in workflow table");
                                                                    objresponse.status = "No Data found in workflow table"
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            })

                                                        }else{
                                                            objresponse.status = "No Post Ref no is found"
                                                            sendResponse(null, objresponse)
                                                        }
                                                   
                                                    })
                                                        
                                                   // }
                                               // })

                                            } else {
                                                objresponse.status = 'FAILURE';
                                                reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_CORE_001", "Insert not succes", result);
                                                sendResponse(null, objresponse)
                                            }

                                        })

                                    }
                                    else {
                                        console.log("No Data found in Transaction table");
                                        objresponse.status = "No Data found in Transaction table"
                                        sendResponse(null, objresponse)
                                    }

                                })
                            }
                            else {
                                console.log("No Data found in Rule table");
                                objresponse.status = "No Data found in Rule table"
                                sendResponse(null, objresponse)
                            }
                        })


                    }
                    catch (error) {
                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                        sendResponse(error, null);
                    }

                })
                // Do API Call for Service 
                function fn_doapicall(url, arrprocesslog,arrpostrefno, callbackapi) {
                    try {
                        var apiName = 'RCT_OP_REV_APPROVE'
                        var request = require('request');
                        var apiURL =
                            apiURL = url // apiURL + apiName
                        var options = {
                            url: apiURL,
                            timeout: 18000000,
                            method: 'POST',
                            json: {



                                "dr_sort_code": arrprocesslog[0].dr_sort_code || '',
                                "payment_endtoend_id": arrprocesslog[0].payment_endtoend_id || '',
                                "tran_ref_id": arrprocesslog[0].tran_ref_id || '',
                                "uetr": arrprocesslog[0].uetr || '',
                                "clrsysref": arrpostrefno[0].process_ref_no,
                                "intrbk_sttlm_amnt": arrprocesslog[0].intrbk_sttlm_amnt || '',
                                "reversal_amount": arrprocesslog[0].reversal_amount || '',
                                "reversal_code": params.REVERSAL_CODE || '',
                                  "hdr_msg_id": arrprocesslog[0].hdr_msg_id || '',
                                  "intrbk_sttlm_dt": arrprocesslog[0].hdr_settlement_date || ''




                            },
                            headers: {
                                'Content-Type': 'application/json'
                            }

                        }
                       
                         reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                            if (error) {
                                reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                sendResponse(error, null);
                            } else {
                             reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                responseBodyFromImagingService.statuscode = responseFromImagingService.statusCode
                              
                                callbackapi(responseBodyFromImagingService)
                            }
                        });

                    } catch (error) {
                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                        sendResponse(error, null);
                    }
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
