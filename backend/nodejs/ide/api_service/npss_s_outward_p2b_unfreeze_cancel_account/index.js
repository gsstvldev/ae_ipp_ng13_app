var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    
    

    






    /*  Created By : Daseen
    Created Date :23/02/2023
    Modified By : 
    Modified Date : 06/06/2023
    Modified Date : 20/06/2023
    Modified Date : 22/06/2023
    Modified Date : 27/06/2023
     Modified Date : 3/07/2023
     Modified Date : 4/07/2023 Handled zero hours  by daseen
          Modified Date :16/09/2023 Cbs acct value taken from dbtr_iban   by daseen
            Modified Date :3/10/2023 include status following status in sct initiation 'P2B_SCT_INITIATION_FAILED','OP_P2B_FUND_AUTH_FAILURE' ,'OP_P2B_FUND_AUTH_SUSPICIOUS')   by daseen
    }
    */
    var serviceName = 'NPSS(S) P2B UNFREEZE the Cancel Account';

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
            objSessionLogInfo.HANDLER_CODE = 'NPSS(S) P2B UNFREEZE the Cancel Account';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS(S) P2B UNFREEZE the Cancel Account';
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
                        var process_name3 = await arraytostr(params.process_name3);
                        // var additional_info2 = await arraytostr(params.additional_info2);



                        takehour = `select * from Core_nc_system_setup where param_category='${params.param_category}' and param_code='${params.param_code}' and need_sync = 'Y'`
                        ExecuteQuery1(takehour, function (arrhour) {
                            if (arrhour.length > 0) {
                                if (arrhour[0].param_detail == '000' || arrhour[0].param_detail == '00' || arrhour[0].param_detail == '0' || arrhour[0].param_detail == 0) {
                                    reqInstanceHelper.PrintInfo(serviceName, '---------- Core_nc_system_setup Param Detail value is zero ,so unfreeze api called------', objSessionLogInfo);
                                    objresponse.status = 'FAILURE';
                                    objresponse.msg = 'Core_nc_system_setup - Param Detail value is Zero';
                                    sendResponse(null, objresponse)
                                } else {
                                    var utcMoment = moment.utc();
                                    var Formdate = utcMoment.subtract(arrhour[0].param_detail, 'hours')
                                    Formdate = moment(Formdate).format('YYYY-MM-DD HH:mm:ss')
                                    // takepayver = `select npsstpl_id,fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY) as request_data_json,* from npss_trn_process_log where  status in ${status1}  and process_name in ${process_name1} and  additional_info not in  ${additional_info1} and created_date_utc < '${Formdate}' and org_status <> 'UNFREEZE_TAKEN'`
                                  //  var taketrnId = `select npsstpl_id from npss_trn_process_log where  status in ${status1}  and process_name in ${process_name1} and  (additional_info not in  ${additional_info1} or additional_info isnull) and created_date_utc < '${Formdate}' and (org_status <> ('UNFREEZE_TAKEN') or org_status isnull)  `
                                   // var takepayver = `select npsstpl_id,fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY) as request_data_json,* from npss_trn_process_log where  status in ${status1}  and process_name in ${process_name1} and  (additional_info not in  ${additional_info1} or additional_info isnull) and created_date_utc < '${Formdate}' and (org_status <> ('UNFREEZE_TAKEN') or org_status isnull)`
                                   var taketrnId =`select l.npsstpl_id from npss_trn_process_log l  left join npss_trn_process_log ls on ls.uetr=l.uetr and ls.process_name='SctInitiation'  where  l.status in ${status1}  and l. process_name in ${process_name1} and  (l.additional_info not in  ${additional_info1} or  l.additional_info isnull) and l.created_date_utc < '${Formdate}' and (l.org_status not in  ('UNFREEZE_TAKEN','REQUEST_RECEIVED') or l.org_status isnull) and ls.uetr isnull`
                                   var takepayver=`select l.npsstpl_id,fn_pcidss_decrypt(l.request_data_json,$PCIDSS_KEY) as request_data_json,l.* from npss_trn_process_log l  left join npss_trn_process_log ls on ls.uetr=l.uetr and ls.process_name='SctInitiation'  where  l.status in ${status1}  and l. process_name in ${process_name1} and  (l.additional_info not in  ${additional_info1}  or  l.additional_info isnull) and l.created_date_utc < '${Formdate}'      and (l.org_status not in  ('UNFREEZE_TAKEN','REQUEST_RECEIVED') or l.org_status isnull) and ls.uetr isnull`
                                   ExecuteQuery1(takepayver, async function (arrpayver) {
                                        if (arrpayver.length > 0) {
                                            var updateTable = await UpdateTran(taketrnId, PRCT_ID)
                                            if (updateTable == 'SUCCESS') {
                                                reqAsync.forEachOfSeries(arrpayver, function (arrpayverobj, i, nextobjctfunc) {
                                                    if (arrpayverobj.npsstrrd_refno != '' || arrpayverobj.tran_ref_id != '' || arrpayverobj.fx_resv_text1 != '') {
                                                      //  let chkprcname = `select * from npss_trn_process_log where uetr = '${arrpayverobj.uetr}' and process_name = 'SctInitiation'`
                                                     //   ExecuteQuery1(chkprcname, function (arrvalue) {

                                                          //  if (arrvalue.length == 0) {

                                                                let column = ''
                                                                if ((arrpayverobj.npsstrrd_refno == '' || arrpayverobj.npsstrrd_refno == 'undefined' || arrpayverobj.npsstrrd_refno == null) && arrpayverobj.processing_system == 'T24') {
                                                                    column = 'tran_ref_id'
                                                                }
                                                                else if ((arrpayverobj.npsstrrd_refno == '' || arrpayverobj.npsstrrd_refno == 'undefined' || arrpayverobj.npsstrrd_refno == null) && arrpayverobj.processing_system == 'CISAF') {
                                                                    column = 'fx_resv_text1'
                                                                } else if (arrpayverobj.npsstrrd_refno != '' || arrpayverobj.npsstrrd_refno != 'undefined' || arrpayverobj.npsstrrd_refno != null) {
                                                                    column = 'npsstrrd_refno'
                                                                } else {
                                                                    column = ''
                                                                }
                                                                if (column != '') {

                                                                    takefundauth = `select npsstpl_id, * from npss_trn_process_log where status in ${status2} and process_name in ${process_name2} and ${column}='${arrpayverobj[`${column}`]}'`
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
                                                                            var check = `select * from npss_trn_process_log where status = 'OP_P2B_FUND_UNFREEZED' and ${column}='${arrpayverobj[`${column}`]}'`
                                                                            ExecuteQuery1(check, async function (checkdata) {
                                                                                if (checkdata.length == 0) {
                                                                                    var Takekafkaurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_CC_POSTING' and param_code='URL' and need_sync = 'Y'`
                                                                                    ExecuteQuery1(Takekafkaurl, async function (arrurl) {
                                                                                        if (arrurl.length) {



                                                                                            var apicallresult = await kafkaapi(arrpayverobj, arrurl, process_name1, process_name3)
                                                                                            if (apicallresult == 'SUCCESS') {
                                                                                                var InsertTable = await ProcessInstData(arrpayverobj, PRCT_ID)
                                                                                                if (InsertTable.length > 0) {


                                                                                                    reqInstanceHelper.PrintInfo(serviceName, '-----------Kafaka Insert Success-------' + arrpayverobj.npsstpl_id, objSessionLogInfo);
                                                                                                    nextobjctfunc()


                                                                                                }
                                                                                                else {
                                                                                                    nextobjctfunc()
                                                                                                }

                                                                                            }
                                                                                            else {
                                                                                                reqInstanceHelper.PrintInfo(serviceName, '-----------Npss transaction not found for-------' + arrpayverobj.npsstpl_id, objSessionLogInfo);
                                                                                                nextobjctfunc()
                                                                                            }




                                                                                        }
                                                                                        else {
                                                                                            reqInstanceHelper.PrintInfo(serviceName, '----------core_nc_system_setup -URL not found------', objSessionLogInfo);
                                                                                            objresponse.status = 'FAILURE';
                                                                                            objresponse.msg = 'No record found in  core_nc_system_setup';
                                                                                            sendResponse(null, objresponse)
                                                                                        }
                                                                                    })

                                                                                } else {
                                                                                    reqInstanceHelper.PrintInfo(serviceName, '-----------No Eligible Tran-------' + arrpayverobj.npsstpl_id, objSessionLogInfo);
                                                                                    nextobjctfunc()
                                                                                }
                                                                            })





                                                                        }
                                                                    })
                                                                } else {
                                                                    reqInstanceHelper.PrintInfo(serviceName, '-----------Cannot find colum (npsstrrd_refno,tran_ref_id,fx_test_resv1)------' + arrpayverobj.npsstpl_id, objSessionLogInfo);
                                                                    nextobjctfunc()
                                                                }


                                                         //   } else {

                                                             //   reqInstanceHelper.PrintInfo(serviceName, '-----------Not a eligible tran-------' + arrpayverobj.npsstpl_id, objSessionLogInfo);

                                                             //   nextobjctfunc()
                                                          //  }
                                                      //  })


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
                                                    sendResponse(null, objresponse)
                                                })
                                            } else {
                                                reqInstanceHelper.PrintInfo(serviceName, '----------Failure in Tran Update------', objSessionLogInfo);
                                                objresponse.status = 'FAILURE';
                                                objresponse.msg = 'Failure in Tran Update';
                                                sendResponse(null, objresponse)
                                            }

                                        }
                                        else {
                                            reqInstanceHelper.PrintInfo(serviceName, '----------No record found in  npss_trn_process_log------', objSessionLogInfo);
                                            objresponse.status = 'FAILURE';
                                            objresponse.msg = 'No record found in  npss_trn_process_log';
                                            sendResponse(null, objresponse)
                                        }

                                    })
                                }
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
                function kafkaapi(arrpayverobj, arrurl, process_name1, process_name3) {
                    var postrefno;
                    return new Promise((resolve, reject) => {
                        var TakepostingRefno = `select process_ref_no from npss_trn_process_log where process_name='${params.postingrefnoprocess_name}' and uetr='${arrpayverobj.uetr}'`
                        ExecuteQuery1(TakepostingRefno, function (arrpostrefno) {
                            if (arrpostrefno.length > 0) {
                                postrefno = arrpostrefno[0].process_ref_no ? arrpostrefno[0].process_ref_no : ''
                                var takereqjson = `select npsstpl_id,fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY) as request_data_json,npsstrrd_refno,msg_id, additional_info as tran_type_code  from npss_trn_process_log where process_name in ${process_name3}  and uetr='${arrpayverobj.uetr}'`
                                ExecuteQuery1(takereqjson, function (arrtakereqjson) {
                                    if (arrtakereqjson.length > 0) {
                                        var JsonData
                                        var Bankcode
                                        var cdtr_iban
                                        var tran_ref_id
                                        var amount
                                        var currency
                                        var dbtr_iban
                                        var dbtr_acct_name
                                        var cdtr_acct_name
                                        var TranTypecode
                                        var npssrefno
                                        var reson
                                        if (arrtakereqjson[0].request_data_json != null) {
                                            JsonData = JSON.parse(arrtakereqjson[0].request_data_json)
                                            Bankcode = JsonData['merchant']['bankCode'] || ''
                                            cdtr_iban = JsonData['merchant']['iban'] ? JsonData['merchant']['iban'] : JsonData['merchant']['IBAN'] || ''
                                            tran_ref_id = JsonData['transactionId'] || ''
                                            amount = JsonData['amount']["requested"] || ''
                                            currency = JsonData['amount']['currency'] || ''
                                            dbtr_iban = JsonData['buyer']['iban'] ? JsonData['buyer']['iban'] : JsonData['buyer']['IBAN'] || ''
                                            dbtr_acct_name = JsonData['buyer']['name'] || ''
                                            cdtr_acct_name = JsonData['merchant']['merchantName'] || ''
                                            TranTypecode = JsonData['transactionType'] || ''
                                            npssrefno = JsonData['refTransactionId'] || ''
                                            reson = JsonData['reason']
                                            var takeacctinfo = `select account_number,customer_mobile_number, countryofbirth country_of_birth,	company_code,inactive_marker,currency,alternate_account_type,alternate_account_id, account_officer,curr_rate_segment,customer_id,national_id  from  core_nc_cbs_accounts where alternate_account_id ='${dbtr_iban}'`
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
                                                        var takebiccode = `SELECT bic_code as recipient_bic_code FROM core_member_banks WHERE bank_code ='${Bankcode}'`
                                                        ExecuteQuery1(takebiccode, function (arrtakebiccode) {
                                                            if (arrtakebiccode.length > 0) {
                                                                try {
                                                                    var request = require('request');
                                                                    var options = {
                                                                        url: arrurl[0].param_detail,
                                                                        timeout: 18000000,
                                                                        method: 'POST',
                                                                        json: {
                                                                            batch_name: params.topicName,
                                                                            data: {
                                                                                "payload": {
                                                                                    "tran_ref_id": tran_ref_id || '',
                                                                                    "uetr": arrpayverobj.uetr || '',
                                                                                    "hdr_msg_id": '',
                                                                                    "hdr_total_records": '1' || '',
                                                                                    "x_req_id": arrtakereqjson[0].msg_id || '',
                                                                                    "dbtr_country": '',
                                                                                    "process_ref_no": arrtakereqjson[0].npsstrrd_refno || '',
                                                                                    "intrbk_sttlm_amnt": amount || '',
                                                                                    "hdr_total_amount": amount || '',
                                                                                    "intrbk_sttlm_cur": currency || '',
                                                                                    "dbtr_iban": dbtr_iban || '',
                                                                                    "customer_mobile_number": arrtakeacctinfo[0].customer_mobile_number || '',
                                                                                    "dbtr_acct_name": dbtr_acct_name || '',
                                                                                    "dr_sort_code": '',
                                                                                    "cdtr_iban": cdtr_iban || '',
                                                                                    "cdtr_acct_name": cdtr_acct_name || '',
                                                                                    "cr_sort_code": Bankcode || '',
                                                                                    "tran_type_code": TranTypecode || '',
                                                                                    "hdr_settlement_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                                                                    "participant_clearing_system": 'CRTLBP.0.o',
                                                                                    "process_type": "UNFREEZE",
                                                                                    "payment_processing_method": "P2B_SCT_INITITATION",
                                                                                    "extIdentifier": tran_ref_id || '',
                                                                                    "process_type": "UNFREEZE",
                                                                                    "value_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                                                                    "hdr_created_date": moment(new Date(), "DDMMYYYY").format("YYYY-MM-DD"),
                                                                                    "dbtr_prvt_id": '',
                                                                                    "ext_org_id_code": '',
                                                                                    "issuer_type_code": '',
                                                                                    "dbtr_document_id": '',
                                                                                    "dbtr_birth_date": '',
                                                                                    "dbtr_city_birth": '',
                                                                                    "ext_person_id_code": 'NIDN',
                                                                                    "dbtr_other_issuer": 'AE',
                                                                                    "cr_acct_identification": '',
                                                                                    "department_code": '',
                                                                                    "process": "Pacs.008 Real Time Credit Transfer P2B",
                                                                                    "process_status": '',
                                                                                    "status": '',
                                                                                    "channel_id": 'IPP',
                                                                                    "channel_refno": tran_ref_id || '',
                                                                                    "category_purpose": "IPP",
                                                                                    "posting_ref_no": postrefno,
                                                                                    "remittance_information": reson || '',
                                                                                    "status": '',
                                                                                    "npsstrrd_refno": npssrefno || '',
                                                                                    "posted": arrpayverobj.processing_system || '',
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
                                                                                        "department_code": '',
                                                                                        "tran_type_code": arrtakereqjson[0].tran_type_code || '',
                                                                                        "recipient_bic_code": arrtakebiccode.biccode || '',
                                                                                        "birth_date": '',
                                                                                        "country_of_birth": arrtakeacctinfo[0].country_of_birth || '',
                                                                                        "national_id": arrtakeacctinfo[0].account_number || '',
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

                                                                    var PrintInfo = {}
                                                                    PrintInfo.url = arrurl[0].param_detail
                                                                    PrintInfo.uetr = arrpayverobj.uetr || ''


                                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Request JSON-------' + JSON.stringify(PrintInfo), objSessionLogInfo);
                                                                    request(options, function (error, responseFromImagingService, responseBodyFromImagingService) {
                                                                        if (error) {
                                                                            reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
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
                                                            } else {
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------Bankcode not found for uetr-------' + arrpayverobj.uetr, objSessionLogInfo);
                                                                resolve('FAILURE')
                                                            }

                                                        })



                                                    })
                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------Account Information Not Found-------' + arrpayverobj.uetr, objSessionLogInfo);
                                                    resolve('FAILURE')
                                                }


                                            })


                                        } else {
                                            reqInstanceHelper.PrintInfo(serviceName, '------------Request JSON not found for uetr-------' + arrpayverobj.uetr, objSessionLogInfo);
                                            resolve('FAILURE')
                                        }
                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------Request Data not found for uetr-------' + arrpayverobj.uetr, objSessionLogInfo);
                                        resolve('FAILURE')
                                    }
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
                        objCusTranInst.PROCESS_NAME = 'Cancel Reserve'
                        objCusTranInst.PROCESSING_SYSTEM = 'NPSS';
                        objCusTranInst.PROCESS_TYPE = arrfundauth.process_type;
                        objCusTranInst.PROCESS_STATUS = 'RCTCancelled';
                        objCusTranInst.STATUS = 'P2B_FUND_RES_CANCELLED';
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


                function UpdateTran(arrTran, prct_id) {
                    return new Promise((resolve, reject) => {
                        let UpdTrntbl = `update npss_trn_process_log set org_status = 'UNFREEZE_TAKEN', MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${prct_id}' where npsstpl_id in (${arrTran})`
                        ExecuteQuery(UpdTrntbl, function (arrUpdTranTbl) {
                            if (arrUpdTranTbl == 'SUCCESS') {
                                resolve('SUCCESS')
                            } else {
                                resolve('Failure')
                            }


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
            reqInstanceHelper.SendResponse(serviceName, appResponse, null, objSessionLogInfo, 'IDE_SERVICE_10002', 'ERROR IN ASSIGN LOG INFO FUNCTION', error);
        }

    })
















});

module.exports = app;
