var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {





    try {
        /*   Created By : Daseen
        Created Date :04-11-2022
        Modified By : Daseen
        Modified Date : 23/11/2022    
        Reason for : 
        */
        var serviceName = 'NPSS CS Enquiry';
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
        var reqAsync = require('async');
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
                objSessionLogInfo.HANDLER_CODE = 'NPSS Enquiry';
                objSessionLogInfo.ACTION = 'ACTION';
                objSessionLogInfo.PROCESS = 'NPSS Enquiry';
                var cus_iban;
                // Get DB Connection                                                                                                                                      
                reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                    mTranConn = pSession; //  assign connection     
                    reqAuditLog.GetProcessToken(pSession, objLogInfo, function prct(error, prct_id) {
                        try {
                            if (Array.isArray(params.tran_id)) {
                                arrTranID = params.tran_id.map(function (eachTran) { return eachTran.toString(); });
                            }
                            else {
                                arrTranID = [params.tran_id.toString()];
                            }
                            TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                            var take_api_url = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`;
                            var take_batch_name = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='BATCH_NAME'`;

                            var take_api_params = `select  ns.remittance_info, fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification ,ns.cr_acct_identification,ns.cr_acct_id_code,ns.hdr_msg_id,ns.hdr_created_date,ns.hdr_total_records,ns.hdr_total_amount,ns.hdr_settlement_date,ns.hdr_settlement_method,
                            ns.hdr_clearing_system,ns.dr_sort_code,ns.cr_sort_code,ns.category_purpose,ns.category_purpose_prty,ns.ext_purpose_code,ns.ext_purpose_prty,
                            ns.uetr,ns.intrbk_sttlm_cur,ns.dbtr_iban,ns.cdtr_iban,ns.dbtr_acct_name,ns.cdtr_acct_name,ns.payment_endtoend_id,ns.charge_bearer ,ns.message_data,
                            ns.process_type,ns.status,ns.process_status,ns.tran_ref_id txid,ns.tran_ref_id, value_date,ext_org_id_code,process_type,clrsysref,accp_date_time as accp_dt_tm
                            from npss_transactions ns  where npsst_id in ${TempTranID}`;
                            // var TakenpsstrRefno = `select npsstrrd_refno from npss_trn_process_log ns where ns.uetr = '${params.uetr}' and ns.status = '${params.STATUS}' and ns.process_status = '${params.ELIGIBLE_PROCESS_STATUS}' `
                            // var TakenpsstrRefno2 = `select npsstrrd_refno,npsstpl_id from npss_trn_process_log  where uetr= '${params.uetr}' order by npsstpl_id  desc`
                            ExecuteQuery1(take_api_url, function (arrurlResult) {
                                if (arrurlResult.length) {
                                    // var param_val = JSON.parse(arrurlResult[0].rule_param_value);
                                    var url = arrurlResult[0].param_detail;
                                    ExecuteQuery1(take_api_params, function (arrprocesslog) {

                                        if (arrprocesslog.length) {
                                            reqAsync.forEachOfSeries(arrprocesslog, function (arrprocesslogObj, i, nextobjctfunc) {
                                                var lclinstrm
                                                var parser = new xml2js.Parser({ strict: false, trim: true });
                                                parser.parseString(arrprocesslogObj.message_data, function (err, result) {

                                                    lclinstrm = result["DOCUMENT"]["FITOFICSTMRCDTTRF"][0]["CDTTRFTXINF"][0]["PMTTPINF"][0]["LCLINSTRM"][0]["PRTRY"][0]

                                                });

                                                ExecuteQuery1(take_batch_name, function (arrbatchname) {
                                                    if (arrbatchname.length) {
                                                        var TakeAcctInf = `select Alternate_Account_Type,currency,account_number,alternate_account_id,inactive_marker,company_code,curr_rate_segment,customer_id,account_officer from core_nc_cbs_accounts where alternate_account_id= '${arrprocesslogObj.cdtr_iban}'`
                                                        ExecuteQuery1(TakeAcctInf, function (arrActInf) {
                                                            if (arrActInf[0].alternate_account_type == '' || arrActInf[0].alternate_account_type != 'VA.BBAN' || arrActInf[0].alternate_account_type != 'VA.IBAN') {
                                                                cvAcNum = ''
                                                            } else {
                                                                cvAcNum = arrActInf[0].alternate_account_id.slice(-16)
                                                            }
                                                            if (arrActInf[0].currency == "AED") {
                                                                sell_margin = ""
                                                                sell_rate = ""
                                                                fn_doapicall(url, arrprocesslogObj, arrbatchname, arrActInf, lclinstrm, function (result) {
                                                                    if (result == 'SUCCESS') {
                                                                        nextobjctfunc()
                                                                    } else {
                                                                        objresponse.status = 'API Call Failure for TrnId' +    arrprocesslogObj.npsst_id
                                                                        sendResponse(null, result);
                                                                    }
                                                                })
                                                            }
                                                            else {
                                                                var seldetqry = `select sell_margin, sell_rate ,cif_number from  core_nc_cust_spl_rate where  cif_number='${arrActInf[0].customer_id}'`
                                                                ExecuteQuery1(seldetqry, function (arrselldet) {
                                                                    if (arrselldet.length > 0) {
                                                                        sell_margin = arrselldet[0].sell_margin
                                                                        sell_rate = arrselldet[0].sell_rate
                                                                        fn_doapicall(url, arrprocesslogObj, arrbatchname, arrActInf, lclinstrm, function (result) {
                                                                            if (result == 'SUCCESS') {
                                                                                nextobjctfunc()
                                                                            } else {
                                                                                objresponse.status = 'API Call Failure for TrnId' +    arrprocesslogObj.npsst_id
                                                                                sendResponse(null, result);
                                                                            }
                                                                        })
                                                                    }
                                                                    else {
                                                                        fn_doapicall(url, arrprocesslog, arrbatchname, arrActInf, lclinstrm, function (result) {
                                                                            if (result == 'SUCCESS') {
                                                                                nextobjctfunc()
                                                                            } else {
                                                                                objresponse.status = 'API Call Failure for TrnId' +    arrprocesslogObj.npsst_id
                                                                                sendResponse(null, result);
                                                                            }
                                                                        })
                                                                    }

                                                                })
                                                            }


                                                        })


                                                    }
                                                    else {
                                                        console.log("No Data found in System Setup table");
                                                       
                                                        objresponse.status = "No Data found in System Setup table" +   arrprocesslogObj.npsst_id
                                                        sendResponse(objresponse, null)
                                                    }

                                                })
                                            }, function () {
                                                objresponse.status = 'SUCCESS'
                                                sendResponse(null, objresponse)
                                            })
                                        }
                                        else {
                                            console.log("No Data found in Transaction table");
                                            objresponse.status = "No Data found in Transaction table"
                                            sendResponse(objresponse, null)
                                        }

                                    })



                                } else {
                                    console.log("No URL found in Rule code");
                                    objresponse.status = "No URL found in Rule code"
                                    sendResponse(objresponse, null)
                                }
                            })




                            // Do API Call for Service 
                            function fn_doapicall(url, arrprocesslog, arrbatchname, arrActInf, lclinstrm, callbackapi) {
                                try {
                                    var apiName = 'NPSS CC posting'
                                    var request = require('request');
                                    var apiURL =
                                        apiURL = url // apiURL + apiName
                                    var options = {
                                        url: apiURL,
                                        timeout: 18000000,
                                        method: 'POST',
                                        json: {

                                            "batch_name": arrbatchname[0].param_detail,
                                            "data": {
                                                "payload": {
                                                    "hdr_msg_id": arrprocesslog.hdr_msg_id || '',
                                                    "hdr_created_date": arrprocesslog.hdr_created_date || '',
                                                    "hdr_total_records": arrprocesslog.hdr_total_records || '',
                                                    "hdr_total_amount": arrprocesslog.hdr_total_amount || '',
                                                    "hdr_settlement_date": arrprocesslog.hdr_settlement_date || '',
                                                    "value_date": arrprocesslog.value_date || '',

                                                    "hdr_settlement_method": arrprocesslog.hdr_settlement_method || '',
                                                    "hdr_clearing_system": arrprocesslog.hdr_clearing_system || '',
                                                    "dr_sort_code": arrprocesslog.dr_sort_code || '',
                                                    "cr_sort_code": arrprocesslog.cr_sort_code || '',
                                                    "category_purpose": arrprocesslog.category_purpose || '',
                                                    "category_purpose_prty": arrprocesslog.category_purpose_prty || '',
                                                    "ext_purpose_code": arrprocesslog.ext_purpose_code || '',
                                                    "ext_purpose_prty": arrprocesslog.ext_purpose_prty || '',
                                                    "lclinstrm": lclinstrm || '',
                                                    "intrbk_sttlm_cur": arrprocesslog.intrbk_sttlm_cur || '',
                                                    "intrbk_sttlm_amnt": arrprocesslog.intrbk_sttlm_amnt || '',
                                                    "dbtr_iban": arrprocesslog.dbtr_iban || '',
                                                    "charge_code": "WAIVE",
                                                    "ext_org_id_code": arrprocesslog.ext_org_id_code || '',

                                                    "cdtr_iban": arrprocesslog.cdtr_iban || '',
                                                    "dbtr_name": arrprocesslog.dbtr_acct_name || '',
                                                    "cdtr_name": arrprocesslog.cdtr_acct_name || '',
                                                    "payment_endtoend_id": arrprocesslog.payment_endtoend_id || '',
                                                    "accp_dt_tm": arrprocesslog.accp_dt_tm || '',

                                                    "charge_bearer": arrprocesslog.charge_bearer || '',
                                                    "tran_ref_id": arrprocesslog.tran_ref_id || '',
                                                    "uetr": arrprocesslog.uetr || '',
                                                    "message_data": arrprocesslog.message_data || '',

                                                    "process_type": arrprocesslog.process_type || '',
                                                    "status": params.STATUS || '',
                                                    "process_status": params.ELIGIBLE_PROCESS_STATUS || '',
                                                    "process": "",
                                                    "clrsysref": arrprocesslog.clrsysref || '',
                                                    "extIdentifier": arrprocesslog.clrsysref ? arrprocesslog.clrsysref : arrprocesslog.payment_endtoend_id,

                                                    "remittance_information": arrprocesslog.remittance_info || '',
                                                    "cr_acct_identification": arrprocesslog.cr_acct_identification || '',
                                                    "cr_acct_id_code": arrprocesslog.cr_acct_id_code || '',
                                                    "process_name": "CC Posting",
                                                    "sell_margin": sell_margin || '',

                                                    "sell_rate": sell_rate || ''

                                                },
                                                "AccountInformation": {

                                                }
                                            }
                                        }, headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    }


                                    var PrintInfo = {}
                                    PrintInfo.url = url
                                    PrintInfo.uetr = arrprocesslog.uetr || ''

                                    PrintInfo.tran_ref_id = arrprocesslog.tran_ref_id || ''
                                    PrintInfo.clrsysref = arrprocesslog.clrsysref || ''

                                    reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
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
                        } catch (error) {
                            sendResponse(error, null);
                        }
                    })
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
