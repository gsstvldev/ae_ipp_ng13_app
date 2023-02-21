var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    



    /*  Created By :SIVA hARISH
    Created Date :21/02/2023
    Modified By : 
    Modified Date : 
    }
    */
    var serviceName = 'NPSS (S) P2B Refund Unfreeze Customer Account';

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
    var moment = require('moment');
    var reqAsync = require('async');
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS (S) P2B Refund Unfreeze Customer Account';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS (S) P2B Refund Unfreeze Customer Account';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    try {
                        var PRCT_ID = prct_id
                        var QueryStatus = await Prepareparam(params.GetTranstatus)
                        var QueryProcessName = await Prepareparam(params.GetprocessName)
                        var Firstaddinfo = await Prepareparam(params.Getaddinfo)
                        var Secondstatus = await Prepareparam(params.CheckTranstatus)
                        var SecondprocessName = await Prepareparam(params.CheckprocessName)
                        var Secondaddinfo = await Prepareparam(params.checkaddinfo)

                        var Takehours = `select param_detail from core_nc_system_setup where param_category = '${params.param_category}' and param_code = '${params.param_code}'`
                        ExecuteQuery1(Takehours, function (arrTakehrs) {
                            if (arrTakehrs.length > 0) {
                                var Takedata = `select * from npss_trn_process_log where status in ${QueryStatus} and process_name in ${QueryProcessName} and additional_info in ${Firstaddinfo}`
                                ExecuteQuery1(Takedata, function (arrData) {
                                    if (arrData.length > 0) {
                                        reqAsync.forEachOfSeries(arrData, function (arrDataobj, i, nextobjctfunc) {
                                            var dateTime = moment(arrDataobj.created_date)
                                            var Formdate = dateTime.add(arrTakehrs[0].param_detail, 'hours')
                                            Formdate = moment(Formdate).format('YYYY-MM-DD HH:mm:ss')
                                            var Checkcond = `select npsstpl_id, * from npss_trn_process_log where status in ${Secondstatus} and process_name in ${SecondprocessName} and npsstrrd_refno='${arrDataobj.npsstrrd_refno}' and additional_info in ${Secondaddinfo} and created_date_utc >='${Formdate}'`
                                            ExecuteQuery1(Checkcond, async function (chkcond) {
                                                if (chkcond.length == 0) {
                                                    var InsertTable = await ProcessInstData(arrDataobj, PRCT_ID)
                                                    if (InsertTable.length > 0) {
                                                        var Takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL'`
                                                        ExecuteQuery1(Takeurl, function (arrurl) {
                                                            if(arrurl.length > 0){
                                                                var taketran = `select fn_pcidss_decrypt(cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,department_code,tran_ref_id,uetr,hdr_msg_id,hdr_total_records,dbtr_country,intrbk_sttlm_amnt,hdr_total_amount,intrbk_sttlm_cur,dbtr_iban,dbtr_acct_name,dr_sort_code,cdtr_iban,cdtr_acct_name,cr_sort_code,hdr_settlement_date,process_type,value_date,hdr_created_date,dbtr_prvt_id,ext_org_id_code,issuer_type_code,dbtr_document_id,dbtr_birth_date,dbtr_city_birth,ext_person_id_code,dbtr_other_issuer,cr_acct_identification,department_code,process_status,status,channel_id,channel_refno,category_purpose,status,clrsysref as extIdentifier,remittance_info from npss_transactions where uetr='${arrDataobj.uetr}'`
                                                                ExecuteQuery1(taketran, async function (arrTran) {
                                                                    if(arrTran.length > 0){
                                                                     var apicallresult = await kafkaapi(arrtran, arrDataobj, arrurl)
                                                                     if(apicallresult == 'SUCCESS'){
                                                                        reqInstanceHelper.PrintInfo(serviceName, '----------API Success for uetr------'+arrDataobj.uetr, objSessionLogInfo); 
                                                                        nextobjctfunc() 
                                                                     }else{
                                                                        reqInstanceHelper.PrintInfo(serviceName, '----------API Failure for uetr------'+arrDataobj.uetr, objSessionLogInfo); 
                                                                        nextobjctfunc() 
                                                                     }

                                                                    }else{
                                                                        reqInstanceHelper.PrintInfo(serviceName, '----------Tran data found in table for uetr------'+arrDataobj.uetr, objSessionLogInfo);
                                                                        nextobjctfunc()    
                                                                    }

                                                                })
                                                            }else{
                                                                reqInstanceHelper.PrintInfo(serviceName, '----------API Url not found------', objSessionLogInfo);
                                                                nextobjctfunc()  
                                                            }

                                                        })
                                                    } else {
                                                        reqInstanceHelper.PrintInfo(serviceName, '----------Insert not success  npss_trn_process_log for  uetr------' + arrDataobj.uetr, objSessionLogInfo);
                                                        nextobjctfunc()
                                                    }
                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------Not eligible uetr-------' + arrDataobj.uetr, objSessionLogInfo);
                                                    nextobjctfunc()
                                                }

                                            })

                                        },function(){
                                            objresponse.status = 'SUCCESS';
                                          
                                            sendResponse(null, objresponse)
                                        })


                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------No Data in Tran Porcess log Table-------', objSessionLogInfo);
                                        objresponse.status = 'FAILURE';
                                        objresponse.msg = 'No Time details found in core_nc_system_setup Table';
                                        sendResponse(null, objresponse)
                                    }

                                })


                            }
                            else {
                                reqInstanceHelper.PrintInfo(serviceName, '------------No Time details found in core_nc_system_setup Table-------', objSessionLogInfo);
                                objresponse.status = 'FAILURE';
                                objresponse.msg = 'No Time details found in core_nc_system_setup Table';
                                sendResponse(null, objresponse)
                            }



                        })


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



                        function Prepareparam(parameter) {
                            return new Promise((resolve, reject) => {
                                var arrdata
                                if (Array.isArray(parameter)) {
                                    arrdata = parameter.map(function (eachTran) {
                                        return eachTran.toString();
                                    });
                                } else {
                                    arrdata = [parameter.toString()];
                                }
                                var Tempdata = '(' + "'" + arrdata.toString().split(',').join("','") + "'" + ')';

                                resolve(Tempdata)

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

                    } catch (error) {
                        reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
                    }
                })



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
