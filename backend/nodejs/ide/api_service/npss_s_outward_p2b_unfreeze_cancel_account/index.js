var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {




    /*  Created By :Daseen
    Created Date :20/02/2023
    Modified By : 
    Modified Date : 
   }
    */
    var serviceName = 'NPSS(S) P2B UNFREEZE the customer Account';

    var reqInstanceHelper = require($REFPATH + 'common/InstanceHelper'); ///  Response,error,info msg printing        
    var reqTranDBInstance = require($REFPATH + "instance/TranDBInstance.js"); /// postgres & oracle DB pointing        
    var reqLogInfo = require($REFPATH + 'log/trace/LogInfo'); /// Log information Detail 
    var reqXlsx = require('node-xlsx').default;
    var reqAuditLog = require($REFPATH + 'log/audit/AuditLog');
    var reqDateFormatter = require($REFPATH + 'common/dateconverter/DateFormatter');
    var params = appRequest.body.PARAMS; //  Client input fromm Server
    var headers = appRequest.headers; // header details 
    var objSessionLogInfo = null; // set value is null
    var success_process_status, success_status;
    var reqAsync = require('async');
    var moment = require('moment');
    var mTranConn = "";
    var producer
    var failedData = []
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS(S) P2B UNFREEZE the customer Account';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS(S) P2B UNFREEZE the customer Account';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    try {
                        var PRCT_ID = prct_id;
                        function arraytostr(arrstr) {
                            return new Promise((resolve, reject) => {
                                if (Array.isArray(arrstr)) {
                                    arrTranstr = arrstr.map(function (eachTran) { return eachTran.toString(); });
                                }
                                else {
                                    arrTranstr = [arrstr.toString()];
                                }
                                resolve(retstr = '(' + "'" + arrTranstr.toString().split(',').join("','") + "'" + ')');
                            })

                        }
                        var status1 = await arraytostr(params.status1);
                        var process_name1 = await arraytostr(params.process_name1);
                        var additional_info1 = await arraytostr(params.additional_info1);
                        var status2 = await arraytostr(params.status2);
                        var process_name2 = await arraytostr(params.process_name2);
                        // var additional_info2 = await arraytostr(params.additional_info2);



                        takehour = `select * from Core_nc_system_setup where param_category='${params.param_category}' and param_code='${params.param_code}' `
                        ExecuteQuery1(takehour, function (arrhour) {
                            if (arrhour.length > 0) {
                                takepayver = `select npsstpl_id,fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY) as request_data_json,* from npss_trn_process_log where  status in ${status1}  and process_name in ${process_name1} and additional_info not in ${additional_info1}`
                                ExecuteQuery1(takepayver, function (arrpayver) {
                                    if (arrpayver.length > 0) {
                                        reqAsync.forEachOfSeries(arrpayver, function (arrpayverobj, i, nextobjctfunc) {
                                            if (arrpayverobj.npsstrrd_refno) {

                                                var m = moment(arrpayverobj.created_date_utc)
                                                var add_hrs = m.add(arrhour[0].param_value, 'hours')

                                                var Formdate = moment(add_hrs).format('YYYY-MM-DD HH:mm:ss')
                                                takefundauth = `select npsstpl_id, * from npss_trn_process_log where status in ${status2} and process_name in ${process_name2} and npsstrrd_refno='${arrpayverobj.npsstrrd_refno}' and created_date_utc>='${Formdate}'`
                                                ExecuteQuery1(takefundauth, async function (arrfundauth) {
                                                    if (arrfundauth.length > 0) {
                                                        reqInstanceHelper.PrintInfo(serviceName, '-----------Not a eligible tran-------' + arrpayverobj.npsstpl_id, objSessionLogInfo);
                                                        var fail = {}
                                                        fail.failid = arrpayverobj.npsstpl_id
                                                        failedData.push(fail)
                                                        nextobjctfunc()
                                                    }
                                                    else {
                                                        console.log('Eligible for api call');
                                                        var InsertTable = await ProcessInstData(arrpayverobj, PRCT_ID)
                                                        if (InsertTable.length > 0) {
                                                            reqInstanceHelper.PrintInfo(serviceName, '----------Insert  success  npss_trn_process_log------' + InsertTable[0].npsstpl_id, objSessionLogInfo);
                                                            var Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL'`
                                                            ExecuteQuery1(Takekafkaurl, async function (arrurl) {
                                                                if (arrurl.length) {
                                                                    var url = arrurl[0].param_detail;
                                                                    var taketran = `select fn_pcidss_decrypt(cr_acct_identification,$PCIDSS_KEY) as cr_acct_identification,tran_ref_id,uetr,hdr_msg_id,hdr_total_records,dbtr_country,intrbk_sttlm_amnt,hdr_total_amount,intrbk_sttlm_cur,dbtr_iban,dbtr_acct_name,dr_sort_code,cdtr_iban,cdtr_acct_name,cr_sort_code,hdr_settlement_date,process_type,value_date,hdr_created_date,dbtr_prvt_id,ext_org_id_code,issuer_type_code,dbtr_document_id,dbtr_birth_date,dbtr_city_birth,ext_person_id_code,dbtr_other_issuer,department_code,process_status,status,channel_id,channel_refno,category_purpose,status,clrsysref as extIdentifier,remittance_info from npss_transactions where uetr='${arrpayverobj.uetr}'`
                                                                    ExecuteQuery1(taketran, async function (arrtran) {
                                                                        if (arrtran.length > 0) {
                                                                            var apicallresult = await kafkaapi(arrtran, arrpayverobj, arrurl, process_name1)
                                                                            if (apicallresult == 'SUCCESS') {
                                                                                reqInstanceHelper.PrintInfo(serviceName, '-----------Kafka Insert success-------' + arrpayverobj.npsstpl_id, objSessionLogInfo);
                                                                                nextobjctfunc()
                                                                            }
                                                                            else {
                                                                                reqInstanceHelper.PrintInfo(serviceName, '-----------Npss transaction not found for-------' + arrpayverobj.npsstpl_id, objSessionLogInfo);
                                                                                nextobjctfunc()
                                                                            }
                                                                        }
                                                                        else {
                                                                            reqInstanceHelper.PrintInfo(serviceName, '-----------Npss transaction not found for-------' + arrpayverobj.npsstpl_id, objSessionLogInfo);
                                                                            nextobjctfunc()
                                                                        }
                                                                    })


                                                                }
                                                                else {
                                                                    reqInstanceHelper.PrintInfo(serviceName, '----------core_nc_system_setup -URL not found------', objSessionLogInfo);
                                                                    objresponse.status = 'FAILURE';
                                                                    objresponse.msg = 'No record found in  core_nc_system_setup';
                                                                    sendResponse(null, objresponse)
                                                                }
                                                            })
                                                        }
                                                        else {
                                                            reqInstanceHelper.PrintInfo(serviceName, '----------Insert not success  npss_trn_process_log------', objSessionLogInfo);
                                                            objresponse.status = 'FAILURE';
                                                            objresponse.msg = 'No record found in  npss_trn_process_log';
                                                            sendResponse(null, objresponse)
                                                        }

                                                    }
                                                })

                                            }
                                            else {
                                                reqInstanceHelper.PrintInfo(serviceName, '-----------npsstrrd_refno not found for-------' + arrpayverobj.npsstpl_id, objSessionLogInfo);
                                                var fail = {}
                                                fail.failid = arrpayverobj.npsstpl_id
                                                failedData.push(fail)
                                                nextobjctfunc()
                                            }


                                        }, function () {
                                            objresponse.status = 'SUCCESS';
                                            objresponse.FailedData = failedData || '';
                                            sendResponse(null, objresponse)
                                        })
                                    }
                                    else {
                                        reqInstanceHelper.PrintInfo(serviceName, '----------No record found in  npss_trn_process_log------', objSessionLogInfo);
                                        objresponse.status = 'FAILURE';
                                        objresponse.msg = 'No record found in  npss_trn_process_log';
                                        sendResponse(null, objresponse)
                                    }

                                })
                            }
                            else {
                                reqInstanceHelper.PrintInfo(serviceName, '----------No record found in  Core_nc_system_setup------', objSessionLogInfo);
                                objresponse.status = 'FAILURE';
                                objresponse.msg = 'No record found in  Core_nc_system_setup';
                                sendResponse(null, objresponse)
                            }

                        })
                    } catch (error) {
                        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
                    }
                })
                //kafka api call
                function kafkaapi(arrTranparams, arrpayverobj, arrurl, process_name1) {
                    var postrefno;
                    return new Promise((resolve, reject) => {
                        var TakepostingRefno = `select process_ref_no from npss_trn_process_log where process_name='${params.postingrefnoprocess_name}' and uetr='${arrpayverobj.uetr}'`
                        ExecuteQuery1(TakepostingRefno, function (arrpostrefno) {
                            if (arrpostrefno.length > 0) {
                                postrefno = arrpostrefno[0].process_ref_no ? arrpostrefno[0].process_ref_no : ''
                                var takeacctinfo = `select account_number,customer_mobile_number, countryofbirth country_of_birth,	company_code,inactive_marker,currency,alternate_account_type,alternate_account_id, account_officer,curr_rate_segment,customer_id,national_id  from  core_nc_cbs_accounts where alternate_account_id ='${arrTranparams[0].cdtr_iban}'`
                                ExecuteQuery1(takeacctinfo, function (arrtakeacctinfo) {
                                    var seldetqry = `select sell_margin, sell_rate ,cif_number from  core_nc_cust_spl_rate where  cif_number='${arrtakeacctinfo[0].customer_id}'`
                                    ExecuteQuery1(seldetqry, function (arrselldet) {
                                        var takereqjson = `select npsstpl_id,fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY) as request_data_json,npsstrrd_refno,msg_id, additional_info as tran_type_code  from npss_trn_process_log where process_name in ${process_name1}  and uetr='${arrpayverobj.uetr}'`
                                        ExecuteQuery1(takereqjson, function (arrtakereqjson) {
                                            if (arrtakereqjson.length > 0) {
                                                var Bankcode
                                                if (arrtakereqjson[0].request_data_json != null) {
                                                    Bankcode = arrtakereqjson[0].request_data_json["merchant"]["bankCode"]
                                                } else {
                                                    Bankcode = ''
                                                }
                                                var takebiccode = `SELECT bic_code as recipient_bic_code FROM core_member_banks WHERE bank_code ='${Bankcode}'`
                                                ExecuteQuery1(takebiccode, function (arrtakebiccode) {
                                                    try {
                                                        var request = require('request');
                                                        var options = {
                                                            url: arrurl[0].param_detail,
                                                            timeout: 18000000,
                                                            method: 'POST',
                                                            json: {
                                                                batch_name: "DR-CBS-POSTING-Q",
                                                                data: {
                                                                    "payload": {
                                                                        "tran_ref_id": arrTranparams[0].tran_ref_id || '',
                                                                        "uetr": arrTranparams[0].uetr || '',
                                                                        "hdr_msg_id": arrTranparams[0].hdr_msg_id || '',
                                                                        "hdr_total_records": arrTranparams[0].hdr_total_records || '',
                                                                        "x_req_id": arrtakereqjson[0].msg_id || '',
                                                                        "dbtr_country": arrTranparams[0].dbtr_country || '',
                                                                        "process_ref_no": arrtakereqjson[0].npsstrrd_refno || '',
                                                                        "intrbk_sttlm_amnt": arrTranparams[0].intrbk_sttlm_amnt || '',
                                                                        "hdr_total_amount": arrTranparams[0].hdr_total_amount || '',
                                                                        "intrbk_sttlm_cur": arrTranparams[0].intrbk_sttlm_cur || '',
                                                                        "dbtr_iban": arrTranparams[0].dbtr_iban || '',
                                                                        "customer_mobile_number": arrtakeacctinfo[0].customer_mobile_number || '',
                                                                        "dbtr_acct_name": arrTranparams[0].dbtr_acct_name || '',
                                                                        "dr_sort_code": arrTranparams[0].dr_sort_code || '',
                                                                        "cdtr_iban": arrTranparams[0].cdtr_iban || '',
                                                                        "cdtr_acct_name": arrTranparams[0].cdtr_acct_name || '',
                                                                        "cr_sort_code": arrTranparams[0].cr_sort_code || '',
                                                                        "tran_type_code": arrtakereqjson[0].additional_info || '',
                                                                        "hdr_settlement_date": arrTranparams[0].hdr_settlement_date || '',
                                                                        "participant_clearing_system": 'CRTLBP.0.o',
                                                                        "process_type": "UNFREEZE",
                                                                        "payment_processing_method": "P2B_SCT_INITITATION",
                                                                        "extIdentifier": arrTranparams[0].extIdentifier || '',
                                                                        "process_type": "UNFREEZE",
                                                                        "value_date": moment(arrTranparams[0].value_date).format('YYYY-MM-DD') || '',
                                                                        "hdr_created_date": arrTranparams[0].hdr_created_date || '',
                                                                        "dbtr_prvt_id": arrTranparams[0].dbtr_prvt_id || '',
                                                                        "ext_org_id_code": arrTranparams[0].ext_org_id_code || '',
                                                                        "issuer_type_code": arrTranparams[0].issuer_type_code || '',
                                                                        "dbtr_document_id": arrTranparams[0].dbtr_document_id || '',
                                                                        "dbtr_birth_date": arrTranparams[0].dbtr_birth_date || '',
                                                                        "dbtr_city_birth": arrTranparams[0].dbtr_city_birth || '',
                                                                        "ext_person_id_code": arrTranparams[0].ext_person_id_code || '',
                                                                        "dbtr_other_issuer": arrTranparams[0].dbtr_other_issuer || '',
                                                                        "cr_acct_identification": arrTranparams[0].cr_acct_identification || '',
                                                                        "department_code": arrTranparams[0].department_code || '',
                                                                        "process": "Pacs.008 Real Time Credit Transfer P2B",
                                                                        "process_status": arrTranparams[0].process_status || '',
                                                                        "status": arrTranparams[0].status || '',
                                                                        "channel_id": arrTranparams[0].channel_id || '',
                                                                        "channel_refno": arrTranparams[0].channel_refno || '',
                                                                        "category_purpose": arrTranparams[0].category_purpose || '',
                                                                        "posting_ref_no": postrefno,
                                                                        "remittance_information": arrTranparams[0].remittance_info || '',
                                                                        "status": arrTranparams[0].status || '',
                                                                        "Account Information": {
                                                                            "account_number": arrtakeacctinfo[0].account_number || '',
                                                                            "company_code": arrtakeacctinfo[0].company_code || '',
                                                                            "inactive_marker": arrtakeacctinfo[0].inactive_marker || '',
                                                                            "currency": arrtakeacctinfo[0].currency || '',
                                                                            "alternate_account_type": arrtakeacctinfo[0].alternate_account_type || '',
                                                                            "alternate_account_id": arrtakeacctinfo[0].alternate_account_id || '',
                                                                            "account_officer": arrtakeacctinfo[0].account_officer || '',
                                                                            "curr_rate_segment": arrtakeacctinfo[0].curr_rate_segment || '',
                                                                            "customer_id": arrtakeacctinfo[0].customer_id || '',
                                                                            "department_code": arrTranparams[0].department_code || '',
                                                                            "tran_type_code": arrtakereqjson[0].tran_type_code || '',
                                                                            "recipient_bic_code": arrtakebiccode.biccode || '',
                                                                            "birth_date": arrTranparams[0].birth_date || '',
                                                                            "country_of_birth": arrtakeacctinfo[0].country_of_birth || '',
                                                                            "national_id": arrtakeacctinfo[0].account_number || '',
                                                                            "sell_margin": arrselldet[0].sell_margin || '',
                                                                            "sell_rate": arrselldet[0].sell_rate || '',
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            }

                                                        }

                                                        var PrintInfo = {}
                                                        PrintInfo.url = arrurl[0].param_detail
                                                        PrintInfo.uetr = arrTranparams[0].uetr || ''
                                                        PrintInfo.npsst_id = arrTranparams[0].npsst_id || ''
                                                        PrintInfo.hdr_msg_id = arrTranparams[0].hdr_msg_id || ''
                                                        PrintInfo.clrsysref = arrTranparams[0].clrsysref || ''

                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                                        request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                            if (error) {
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------' + apiName + ' API ERROR-------' + error, objSessionLogInfo);
                                                                sendResponse(error, null);

                                                            } else {
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + responseBodyFromImagingService, objSessionLogInfo);
                                                                if (responseBodyFromImagingService == 'SUCCESS') {
                                                                    resolve(responseBodyFromImagingService);

                                                                } else {
                                                                    resolve(responseBodyFromImagingService);
                                                                }
                                                            }
                                                        });

                                                    } catch (error) {
                                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                        sendResponse(error, null);
                                                    }
                                                })
                                            } else {
                                                reqInstanceHelper.PrintInfo(serviceName, '------------Request JSON not found for uetr-------' + arrpayverobj.uetr, objSessionLogInfo);
                                                resolve('FAILURE')
                                            }

                                        })

                                    })

                                })
                            } else {
                                reqInstanceHelper.PrintInfo(serviceName, '------------Posting Ref no not found for -------' + arrpayverobj.uetr, objSessionLogInfo);
                                resolve('FAILURE')
                            }

                        })

                    })
                }
                //Function for insert in TrnProcess Log Table
                function ProcessInstData(arrfundauth, PRCT_ID) {
                    return new Promise((resolve, reject) => {
                        var arrCusTranInst = [];
                        var objCusTranInst = {};
                        objCusTranInst.MSG_ID = arrfundauth.msg_id;
                        objCusTranInst.PRCT_ID = PRCT_ID;
                        objCusTranInst.PROCESS_TIME = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                        objCusTranInst.UETR = arrfundauth.uetr;
                        objCusTranInst.NPSSTRRD_REFNO = arrfundauth.npsstrrd_refno;
                        objCusTranInst.PROCESS_NAME = 'Fund UNFREEZE Posting'
                        objCusTranInst.PROCESSING_SYSTEM = 'T24';
                        objCusTranInst.PROCESS_TYPE = arrfundauth.process_type;
                        objCusTranInst.PROCESS_STATUS = 'RCTCancelled';
                        objCusTranInst.STATUS = 'OP_P2B_FUND_UNFREEZED';
                        objCusTranInst.TENANT_ID = params.TENANT_ID;
                        objCusTranInst.APP_ID = '215'
                        objCusTranInst.DT_CODE = 'DT_1304_1665901130705'
                        objCusTranInst.DTT_CODE = 'DTT_1304_1665901217208'
                        objCusTranInst.DT_DESCRIPTION = 'transaction_group'
                        objCusTranInst.DTT_DESCRIPTION = 'Transaction'
                        objCusTranInst.CREATED_BY = params.CREATED_BY;
                        objCusTranInst.CREATED_BY_NAME = params.CREATED_BY_NAME;
                        objCusTranInst.T24_RETURN_CODE = null;
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

                        _BulkInsertProcessItem(arrCusTranInst, 'NPSS_TRN_PROCESS_LOG', function callbackInsert(logInsertRes) {
                            resolve(logInsertRes)

                        })
                    })

                }
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
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }

    })




















});

module.exports = app;
