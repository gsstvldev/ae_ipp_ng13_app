var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    


/*  Created By :   Siva Harish
Created Date : 12/05/2023
Modified By : Siva Harish
Modified Date : 21/06/2023
Reason for : 
* 
*/
var serviceName = 'NPSS (CS) Call P2B Unfreeze Api'; //service name 
var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
var reqAuditLog = require($REFPATH + 'log/audit/AuditLog'); //audit log information
var reqFXDBInstance = require($REFPATH + 'instance/DBInstance'); // casandra db pointing
var reqInsHelper = require($REFPATH + 'common/InstanceHelper'); //  Response,error,info msg printing        
var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter'); //date formatter
var params = appRequest.body.PARAMS; //  Client input fromm Server
console.log("app headers=====================>", appRequest.headers);
var headers = appRequest.headers; // header details 
// headers["session-id"] = "STATIC-SESSION-KEEQB-4";
console.log("headers after adding session id ========>", headers);
var reqAsync = require('async');
var objSessionLogInfo = null; // set value is null
var mTranConn = "";
var request = require('request');
var moment = require('moment');
var success_status, success_process_status;
var elgobj = {};
var arrTranId
//console.log('**************************' + headers['session-id'])
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
        objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Call P2B Unfreeze Api';
        objSessionLogInfo.ACTION = 'ACTION';
        objSessionLogInfo.PROCESS = 'NPSS (CS) Call P2B Unfreeze Api';
        // Get DB Connection 
        reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
            mTranConn = pSession; //  assign connection 
            reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                var PRCT_ID = prct_id
                //get prct id                              
                try {
                    var take_status = `Select success_process_status,success_status from core_nc_workflow_setup where rule_code='${params.RULE_CODE}' and eligible_status='${params.eligible_status}' and  eligible_process_status='${params.eligible_process_status}'`;
                    if (Array.isArray(params.npsstpl_id)) {
                        arrTranID = params.npsstpl_id.map(function (eachTran) { return eachTran.toString(); });
                    }
                    else {
                        arrTranID = [params.npsstpl_id.toString()];
                    }
                    TempTranID = '(' + "'" + arrTranID.toString().split(',').join("','") + "'" + ')';
                    ExecuteQuery1(take_status, function (arrSts) {
                        if (arrSts.length) {
                            success_status = arrSts[0].success_status;
                            success_process_status = arrSts[0].success_process_status;
                            let Takedata = `select * from npss_trn_process_log where npsstpl_id in ${TempTranID}`
                            ExecuteQuery1(Takedata, function (arrprocesslog) {
                                if (arrprocesslog.length > 0) {
                           // let Takerefno = `select process_ref_no from npss_trn_process_log where status='OP_P2B_FUND_UNFR_FAILURE' and process_name='Fund UNFREEZE Posting' and uetr = '${arrprocesslog[0].uetr}'`
                            let Takerefno = `select process_ref_no from npss_trn_process_log where status='OP_P2B_FUND_RESERVED' and process_name='Fund Reserve INAU Posting' and uetr = '${arrprocesslog[0].uetr}'`
                            ExecuteQuery1(Takerefno, function (arrRefno) {
                                var arrCusTranInst = []
                                for (let i = 0; i < arrprocesslog.length; i++) {
                                    var objCusTranInst = {};
                                    objCusTranInst.MSG_ID = arrprocesslog[i].msg_id || null
                                    objCusTranInst.PRCT_ID = PRCT_ID;
                                    objCusTranInst.REVERSAL_CODE = arrprocesslog[i].revrsal_code || null
                                    objCusTranInst.UETR = arrprocesslog[i].uetr;
                                    objCusTranInst.NPSSTRRD_REFNO = arrprocesslog[i].tran_ref_id || null
                                    objCusTranInst.PROCESS_NAME = 'Call Unfreeze API'
                                    objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
                                    objCusTranInst.PROCESS_STATUS = success_process_status;
                                    objCusTranInst.STATUS = success_status;
                                    objCusTranInst.TENANT_ID = arrprocesslog[i].tenant_id;
                                    objCusTranInst.PROCESS_TYPE = arrprocesslog[i].process_type || null
                                    objCusTranInst.APP_ID = '215'
                                    objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                                    objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                                    objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                                    objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                                    objCusTranInst.CREATED_BY = params.CREATED_BY;
                                    objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                                    objCusTranInst.T24_RETURN_CODE = arrprocesslog[i].t24_return_code || null
                                    objCusTranInst.CBUAE_RETURN_CODE = arrprocesslog[i].cbuae_return_code || null
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
                                    objCusTranInst.RESPONSE_CODE = arrprocesslog[i].response_code || null
                                    objCusTranInst.PROCESS_REF_NO = arrRefno[0].process_ref_no || null
                                    objCusTranInst.RESPONSE_DATA = arrprocesslog[i].response_data || null
                                    objCusTranInst.REQUEST_DATA_JSON =  null
                                    objCusTranInst.RESPONSE_DATA_JSON =  null
                                    objCusTranInst.EMIRATESID = arrprocesslog[i].emiratesid || null
                                    objCusTranInst.CUSTOMERNAME = arrprocesslog[i].customername || null
                                    objCusTranInst.CUSTOMERID = arrprocesslog[i].customerid || null
                                    objCusTranInst.COUNTRYOFBIRTH = arrprocesslog[i].countryofbirth || null
                                    objCusTranInst.CITYOFBIRTH = arrprocesslog[i].cityofbirth || null
                                    objCusTranInst.DATEOFBIRTH = arrprocesslog[i].dateofbirth || null
                                    objCusTranInst.AMOUNT = arrprocesslog[i].amount || null
                                    objCusTranInst.DBTR_IBAN = arrprocesslog[i].dbtr_iban || null
                                    objCusTranInst.TRAN_REF_ID = arrprocesslog[i].tran_ref_id || null
                                    objCusTranInst.ORG_STATUS = arrprocesslog[i].org_status || null
                                    objCusTranInst.EXT_IDEN_RETRY_VALUE = arrprocesslog[i].ext_iden_retry_value || null
                                    objCusTranInst.SYNC_VERSION = arrprocesslog[i].sync_version || null
                                    objCusTranInst.GM_MARGIN = arrprocesslog[i].gm_margin || null
                                    objCusTranInst.STATUS_RESP_AMOUNT = arrprocesslog[i].status_resp_amount || null
                                    objCusTranInst.STATUS_INTRBKSTTLMDT = arrprocesslog[i].status_intrbksttlmdt || null
                                    objCusTranInst.STATUS_ACCP_DATE = arrprocesslog[i].status_accp_date || null
                                    objCusTranInst.PROCESS_TIME = arrprocesslog[i].process_time || null
                                    objCusTranInst.ADDITIONAL_INFO = arrprocesslog[i].additional_info || null
                                    objCusTranInst.AMOUNT_CREDITED = arrprocesslog[i].amount_credited || null
                                    objCusTranInst.AMT_CR_LOC_CUR = arrprocesslog[i].amt_cr_loc_cur || null
                                    objCusTranInst.CHARGE_AMOUNT = arrprocesslog[i].charge_amount || null
                                    objCusTranInst.BUY_CURRENCY = arrprocesslog[i].buy_currency || null
                                    objCusTranInst.SELL_CURRENCY = arrprocesslog[i].sell_currency || null
                                    objCusTranInst.DEALT_AMOUNT = arrprocesslog[i].dealt_amount || null
                                    objCusTranInst.EXCHANGE_RATE = arrprocesslog[i].exchange_rate || null
                                    objCusTranInst.CONTRA_AMOUNT = arrprocesslog[i].contra_amount || null
                                    arrCusTranInst.push(objCusTranInst)

                                }
                                _BulkInsertProcessItem(arrCusTranInst, 'npss_trn_process_log', async function callbackInsert(CusTranInsertRes) {
                                    try {
                                        if (CusTranInsertRes.length > 0) {
                                            let CallUnfreezeApi = await doUnfreezeapiCall(arrprocesslog,arrRefno)
                                        } else {
                                            objresponse.status = 'FAILURE'
                                            objresponse.data = "Error in Table Insert"
                                            sendResponse(null, objresponse)
                                        }
                                    } catch (error) {
                                        objresponse.status = 'FAILURE'
                                        objresponse.data = error
                                        sendResponse(null, objresponse)
                                    }

                                })
                            })
                                  
                                } else {
                                    objresponse.status = 'FAILURE'
                                    objresponse.data = "No data found in npss trn process log table"
                                    sendResponse(null, objresponse)
                                }

                            })

                        } else {
                            objresponse.status = 'FAILURE'
                            objresponse.data = "No Rule found in Workflow Table"
                            sendResponse(null, objresponse)
                        }
                    }

                    )


                    function doUnfreezeapiCall(arrprocesslog,arrRefno) {
                        var Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL'  and need_sync = 'Y'`
                        ExecuteQuery1(Takekafkaurl, async function (arrurl) {
                            if (arrurl.length) {
                                var url = arrurl[0].param_detail;
                                reqAsync.forEachOfSeries(arrprocesslog, function (arrprocesslogobj, i, nextobjctfunc) {
                                    var takeacctinfo = `select account_name,account_number,customer_mobile_number, countryofbirth country_of_birth,	company_code,inactive_marker,currency,alternate_account_type,alternate_account_id, account_officer,curr_rate_segment,customer_id,national_id  from  core_nc_cbs_accounts where alternate_account_id ='${arrprocesslogobj.dbtr_iban}'`
                                    ExecuteQuery1(takeacctinfo, function (arrtakeacctinfo) {
                                        if (arrtakeacctinfo.length > 0) {
                                            var seldetqry = `select sell_margin, sell_rate ,cif_number from  core_nc_cust_spl_rate where  cif_number='${arrtakeacctinfo[0].customer_id}'`
                                            ExecuteQuery1(seldetqry, function (arrselldet) {
                                                var sell_margin
                                                var sell_rate
                                                if (arrselldet.length == 0) {
                                                    sell_margin = ''
                                                    sell_rate = ''
                                                } else {
                                                    sell_margin = arrselldet[0].sell_margin
                                                    sell_rate = arrselldet[0].sell_rate
                                                }
                                                try {
                                                    var request = require('request');
                                                    var options = {
                                                        url: arrurl[0].param_detail,
                                                        timeout: 18000000,
                                                        method: 'POST',
                                                        json: {
                                                            batch_name: 'DR-CBS-POSTING-Q',
                                                            data: {
                                                                "payload": {
                                                                    "posted":arrprocesslogobj.processing_system||'',
                                                                    "tran_ref_id": arrprocesslogobj.tran_ref_id || '',
                                                                    "uetr": arrprocesslogobj.uetr || '',
                                                                    "hdr_msg_id":  '',
                                                                    "hdr_total_records": '1' || '',
                                                                    "x_req_id": arrprocesslogobj.msg_id || '',
                                                                    "dbtr_country":  '',
                                                                    "process_ref_no": arrRefno[0].process_ref_no || '',
                                                                    "intrbk_sttlm_amnt": arrprocesslogobj.amount || '',
                                                                    "hdr_total_amount": arrprocesslogobj.amount || '',
                                                                    "intrbk_sttlm_cur": arrtakeacctinfo[0].currency || '',
                                                                    "dbtr_iban": arrprocesslogobj.dbtr_iban || '',
                                                                    "customer_mobile_number": arrtakeacctinfo[0].customer_mobile_number || '',
                                                                    "dbtr_acct_name": arrtakeacctinfo[0].account_name || '',
                                                                    "dr_sort_code":  '',
                                                                    "cdtr_iban":  '',
                                                                    "cdtr_acct_name":  '',
                                                                    "cr_sort_code": '',
                                                                    "tran_type_code":  '',
                                                                    "hdr_settlement_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                                                    "participant_clearing_system": 'CRTLBP.0.o',
                                                                    "process_type": "UNFREEZE",
                                                                    "payment_processing_method": "P2B_SCT_INITITATION",
                                                                    "extIdentifier": arrprocesslogobj.ran_ref_id || '',
                                                                    "process_type": "UNFREEZE",
                                                                    "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                                                    "hdr_created_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                                                    "dbtr_prvt_id":  '',
                                                                    "ext_org_id_code":  '',
                                                                    "issuer_type_code": '',
                                                                    "dbtr_document_id":  '',
                                                                    "dbtr_birth_date":  '',
                                                                    "dbtr_city_birth":  '',
                                                                    "ext_person_id_code": 'NIDN',
                                                                    "dbtr_other_issuer": 'AE',
                                                                    "cr_acct_identification": '',
                                                                    "department_code":  '',
                                                                    "process": "Pacs.008 Real Time Credit Transfer P2B",
                                                                    "process_status":  '',
                                                                    "status":  '',
                                                                    "channel_id": 'IPP' ,
                                                                    "channel_refno":  arrprocesslogobj.tran_ref_id || '',
                                                                    "category_purpose":  "IPP",
                                                                    "posting_ref_no": arrRefno[0].process_ref_no ,
                                                                    "remittance_information":  '',
                                                                    "status":  '',
                                                                    "npsstrrd_refno": arrprocesslogobj.npsstrrd_refno || '',
                                                                    "AccountInformation": {
                                                                        "account_number": arrtakeacctinfo[0].account_number || '',
                                                                        "company_code": arrtakeacctinfo[0].company_code || '',
                                                                        "inactive_marker": arrtakeacctinfo[0].inactive_marker || '',
                                                                        "currency": arrtakeacctinfo[0].currency || '',
                                                                        "alternate_account_type": arrtakeacctinfo[0].alternate_account_type || '',
                                                                        "alternate_account_id": arrtakeacctinfo[0].alternate_account_id || '',
                                                                        "account_officer": arrtakeacctinfo[0].account_officer || '',
                                                                        "curr_rate_segment": arrtakeacctinfo[0].curr_rate_segment || '',
                                                                        "customer_id": arrtakeacctinfo[0].customer_id || '',
                                                                        "department_code":  '',
                                                                        "tran_type_code":  '',
                                                                        "recipient_bic_code":  '',
                                                                        "birth_date": '',
                                                                        "country_of_birth": arrtakeacctinfo[0].country_of_birth || '',
                                                                        "national_id": arrtakeacctinfo[0].national_id || '',
                                                                        "sell_margin": sell_margin || '',
                                                                        "sell_rate": sell_rate || '',
                                                                    }
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
                                                            reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService,+'.......UETR....'+arrprocesslogobj.uetr, objSessionLogInfo);
                                                            if (responseBodyFromImagingService == 'SUCCESS') {
                                                                nextobjctfunc()
                                        
                                                            } else {
                                                                objresponse.status = 'FAILURE'
                                                                objresponse.data = "Error from Kafka Api"
                                                                sendResponse(null, objresponse)
                                                            }
                                                        }
                                                    });
                                        
                                                } catch (error) {
                                                    reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                    sendResponse(error, null);
                                                }
                                            })
                                        } else {
                                            objresponse.status = 'FAILURE'
                                            objresponse.data = "No data found in cbs accounts table"
                                            sendResponse(null, objresponse)
                                        }
                                    })
                                },function(){
                                    objresponse.status = 'SUCCESS'
                                    objresponse.data = "data move to kafka successfully"
                                    sendResponse(null, objresponse)
                                })
                            } else {
                                objresponse.status = 'FAILURE'
                                objresponse.data = "Kafka Url Not Found"
                                sendResponse(null, objresponse)
                            }
                        })
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
                    //fucntion to execute select query
                    function ExecuteQuery1(query, callback) {
                        reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                            try {
                                if (error) {
                                    //reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, "IDE_SERVICE_10005", "ERROR IN EXECUTE QUERY EXECUTION FUNCTION", error);
                                    sendResponse(error);
                                } else {
                                    if (result.rows.length > 0) {
                                        callback(result.rows);
                                    } else {
                                        callback([]);
                                    }
                                }
                            } catch (error) {
                                //reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, "IDE_SERVICE_10004", "ERROR IN EXECUTE QUERY FUNCTION", error);
                                sendResponse(error);
                            }
                        });
                    }


                } catch (error) {
                    reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10003', 'ERROR IN DB CONNECTION FUNCTION', error);
                }
            })
            //send response fucntion
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

        });
    } catch (error) {
        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
    }

})








});

module.exports = app;
