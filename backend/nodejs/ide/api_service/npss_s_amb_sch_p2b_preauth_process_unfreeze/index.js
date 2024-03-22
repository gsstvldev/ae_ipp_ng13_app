var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function (appRequest, appResponse, next) {
    /* 
    work item :3280
    Created By :Suresh
  Created Date :22/12/2023
  Modified By : suresh
  created Date : 19-03-2024
  reason : changing Some payload

sample
  {
    "PARAMS": {
        "GetTranstatus": [
            "P2B_PAYMENT_VERIFIED"
        ],
        "GetprocessName": [
            "Verify Buyer IBAN",
            "Verify Merchant IBAN"
        ],
        "topicName": "",
        "postingrefnoprocess_name": "Create Cash Block",
        "Getaddinfo": [
            "BCT"
        ],
        "TCS_ELIGIBLE_STATUS": [
            "OP_P2B_FUND_AUTHORIZED",
            "OP_P2B_DELCASHBLOCK_SUCCESS"
        ],
        "TCS_PROCESS_NAME": [
            "Create Booking with Cash Block",
            "Delete Cash Block"
        ],
        "MWALLET_ELIGIBLE_STATUS": [
            "OP_P2B_PAYMENT_INITIATED"
        ],
        "MWALLET_PROCESS_NAME": [
            "sctInitiation"
        ],
        "MWALLET_ADDITIONAL_INFO": [
            "P616"
        ],
        "MWALLET_OTPROCESS_NAME": [
            "Outward Credit Posting"
        ],
        "url_param_category": "",
        "param_category": "",
        "param_code": "URL",
        "TENANT_ID": "AEFAB",
        "CREATED_BY": "2109",
        "CREATED_BY_NAME": "AEXYZMMA",
        "SYSTEM_ID": "452",
        "SYSTEM_NAME": "Global Bank"
    },
    "PROCESS_INFO": {
        "MODULE": "Registration",
        "MENU_GROUP": "Corporate",
        "MENU_ITEM": "Verify Registration",
        "PROCESS_NAME": "Return"
    }
}
  }
  */
    var serviceName = 'npss P2B Pre-Authorization';
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
            objSessionLogInfo.HANDLER_CODE = 'npss P2B Pre-Authorization';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'npss inP2B Pre-Authorization';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, async function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                    try {
                        var PRCT_ID = prct_id
                        var QueryStatus = await Prepareparam(params.GetTranstatus)
                        var QueryProcessName = await Prepareparam(params.GetprocessName)
                        var Firstaddinfo = await Prepareparam(params.Getaddinfo)
                        /* var Secondstatus = await Prepareparam(params.CheckTranstatus)
                        var SecondprocessName = await Prepareparam(params.CheckprocessName)
                        var Secondaddinfo = await Prepareparam(params.checkaddinfo) */
                        var Takedays = `select param_detail from core_nc_system_setup where param_category = '${params.param_category}' and param_code = '${params.param_code}' and need_sync = 'Y'`
                        ExecuteQuery1(Takedays, function (arrTakedays) {
                            if (arrTakedays.length > 0) {
                                var utcMoment = moment.utc();
                                console.log(utcMoment)
                                var Formdate = utcMoment.subtract(arrTakedays[0].param_detail, 'days');
                                Formdate = moment(Formdate).format('YYYY-MM-DD HH:mm:ss');
                                console.log(Formdate)
                                var TakeTrnid = `select distinct npsstrrd_refno  from npss_trn_process_log where status in ${QueryStatus} and process_name in ${QueryProcessName} and additional_info in ${Firstaddinfo} and created_date_utc < '${Formdate}' and (org_status <> ('UNFREEZE_TAKEN') or org_status isnull)`
                                var Takedata = `select * from npss_trn_process_log where status in ${QueryStatus} and process_name in ${QueryProcessName} and additional_info in ${Firstaddinfo} and created_date_utc < '${Formdate}' and (org_status <> ('UNFREEZE_TAKEN') or org_status isnull) `
                                ExecuteQuery1(Takedata, async function (arrData) {
                                    if (arrData.length > 0) {
                                        var updatetrn = await UpdateTran(TakeTrnid, PRCT_ID)
                                        if (updatetrn == 'SUCCESS') {
                                            reqAsync.forEachOfSeries(arrData, function (arrDataobj, i, nextobjctfunc) {
                                                var TakedataForiban = `select npsstrrd_refno,fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY) as req,* from npss_trn_process_log where status in ${QueryStatus} and  process_name in ${QueryProcessName} order by created_date desc limit 1`
                                                ExecuteQuery1(TakedataForiban, async function (ArrNpssdata) {
                                                    if (ArrNpssdata.length > 0) {
                                                        iban_json = JSON.parse(ArrNpssdata[0].req)
                                                        iban = iban_json["buyer"]["iban"]
                                                        arrprcssystem = await SplitIbanGtData(iban)
                                                        var elQuery = ``, virtual_iban
                                                        if (arrprcssystem == undefined || arrprcssystem.processing_system.toLowerCase().startsWith('tcs')) {
                                                            TCS_ELIGIBLE_STATUS = await Prepareparam(params.TCS_ELIGIBLE_STATUS)
                                                            TCS_PROCESS_NAME = await Prepareparam(params.TCS_PROCESS_NAME)
                                                            elQuery = `select * from npss_trn_process_log where status in ${TCS_ELIGIBLE_STATUS} and process_name in ${TCS_PROCESS_NAME} and npsstrrd_refno='${arrDataobj.npsstrrd_refno}'`
                                                            // param_category = 'TCS_MWALLET'
                                                            processing_system = 'TCS'
                                                            Insrt_process_system = 'Bancs'
                                                            virtual_iban = ''
                                                        }
                                                        else if (arrprcssystem.processing_system.toLowerCase().startsWith('mwallet')) {
                                                            MWALLET_ELIGIBLE_STATUS = await Prepareparam(params.MWALLET_ELIGIBLE_STATUS)
                                                            MWALLET_PROCESS_NAME = await Prepareparam(params.MWALLET_PROCESS_NAME)
                                                            MWALLET_ADDITIONAL_INFO = await Prepareparam(params.MWALLET_ADDITIONAL_INFO)
                                                            MWALLET_OTPROCESS_NAME = await Prepareparam(params.MWALLET_OTPROCESS_NAME)
                                                            // param_category = 'TCS_MWALLET'
                                                            processing_system = 'WALLET'
                                                            Insrt_process_system = 'Mwallet'
                                                            //elQuery = `select * from npss_trn_process_log where status in ${params.MWALLET_ELIGIBLE_STATUS.toString()} and process_name in ${params.MWALLET_PROCESS_NAME} and additional_info in ${MWALLET_ADDITIONAL_INFO} or process_name in ${MWALLET_OTPROCESS_NAME} and npsstrrd_refno='${arrDataobj.npsstrrd_refno}'`
                                                            elQuery = `select * from npss_trn_process_log where ( (status in ${MWALLET_ELIGIBLE_STATUS}) and (process_name in ${MWALLET_PROCESS_NAME}) and (additional_info in ${MWALLET_ADDITIONAL_INFO})) or ( process_name in ${MWALLET_OTPROCESS_NAME}) and npsstrrd_refno='${arrDataobj.npsstrrd_refno}'`
                                                            virtual_iban = await getVirtualIban(arrDataobj.uetr) || ''
                                                        }
                                                        ExecuteQuery1(elQuery, (arrtcsormwallet) => {
                                                            if (arrtcsormwallet.length == 0) {
                                                                //  var Takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='${param_category}' and param_code='URL' and need_sync = 'Y'`
                                                                var Takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='${params.url_param_category}' and param_code='URL' and need_sync = 'Y'`
                                                                ExecuteQuery1(Takeurl, async function (arrurl) {
                                                                    if (arrurl.length > 0) {
                                                                        var apicallresult = await kafkaapi(arrDataobj, processing_system, arrurl, virtual_iban)
                                                                        if (apicallresult == 'SUCCESS') {
                                                                            var insertlog = await ProcessInstData(arrDataobj, PRCT_ID, Insrt_process_system)
                                                                            if (insertlog.length > 0) {
                                                                                reqInstanceHelper.PrintInfo(serviceName, '----------API Success for uetr------' + arrDataobj.uetr, objSessionLogInfo);
                                                                                nextobjctfunc()
                                                                            } else {
                                                                                reqInstanceHelper.PrintInfo(serviceName, '----------API Success for uetr-Insert fail in logtable------' + arrDataobj.uetr, objSessionLogInfo);
                                                                                nextobjctfunc()
                                                                            }
                                                                        } else {
                                                                            reqInstanceHelper.PrintInfo(serviceName, '----------API Failure for uetr------' + arrDataobj.uetr, objSessionLogInfo);
                                                                            nextobjctfunc()
                                                                        }
                                                                    } else {
                                                                        reqInstanceHelper.PrintInfo(serviceName, '----------API Url not found------', objSessionLogInfo);
                                                                        nextobjctfunc()
                                                                    }
                                                                })
                                                            }
                                                            else {
                                                                reqInstanceHelper.PrintInfo(serviceName, '------------Not eligible uetr-------' + arrDataobj.uetr, objSessionLogInfo);
                                                                nextobjctfunc()
                                                            }
                                                        })
                                                    }
                                                    else {
                                                        reqInstanceHelper.PrintInfo(serviceName, '----------No eligible for given npss tran prcs log------' + arrDataobj.uetr, objSessionLogInfo);
                                                        nextobjctfunc()
                                                    }
                                                })
                                            }, function () {
                                                objresponse.status = 'SUCCESS';
                                                sendResponse(null, objresponse)
                                            })

                                            //})
                                        }
                                        else {
                                            reqInstanceHelper.PrintInfo(serviceName, '------------Update failed in Tran Process log Table-------', objSessionLogInfo);
                                            objresponse.status = 'FAILURE';
                                            objresponse.msg = 'Intial updation failed in NPSS_TRN_PROCESS_LOG Table';
                                            sendResponse(null, objresponse)
                                        }
                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '------------No Data in Tran Porcess log Table-------', objSessionLogInfo);
                                        objresponse.status = 'FAILURE';
                                        objresponse.msg = 'No Time details found in core_nc_system_setup Table';
                                        sendResponse(null, objresponse)
                                    }
                                })
                            }
                            else {
                                reqInstanceHelper.PrintInfo(serviceName, '------------No date found in core_nc_system_setup Table-------', objSessionLogInfo);
                                objresponse.status = 'FAILURE';
                                objresponse.msg = 'No date found in core_nc_system_setup Table';
                                sendResponse(null, objresponse)
                            }
                        })
                        function SplitIbanGtData(iban) {
                            return new Promise((resolve, reject) => {
                                iban_range = iban.substring(7, 16)
                                var TakeIban = `select * from CORE_NC_IBAN_RANGE_SETUP where iban_range='${iban_range}'`
                                ExecuteQuery1(TakeIban, (arrIbanData) => {
                                    resolve(arrIbanData[0])
                                })
                            })
                        }
                        //Function for insert in TrnProcess Log Table
                        function ProcessInstData(arrfundauth, PRCT_ID, Insrt_process_system) {
                            return new Promise((resolve, reject) => {
                                var arrCusTranInst = [];
                                var objCusTranInst = {};
                                objCusTranInst.MSG_ID = arrfundauth.msg_id;
                                objCusTranInst.PRCT_ID = PRCT_ID;
                                objCusTranInst.PROCESS_TIME = reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo);
                                objCusTranInst.UETR = arrfundauth.uetr;
                                objCusTranInst.NPSSTRRD_REFNO = arrfundauth.npsstrrd_refno;
                                objCusTranInst.PROCESS_NAME = 'Fund UNFREEZE Posting'
                                objCusTranInst.PROCESSING_SYSTEM = Insrt_process_system;
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
                                let UpdTrntbl = `update npss_trn_process_log set org_status = 'UNFREEZE_TAKEN', MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${prct_id}' where npsstrrd_refno in (${arrTran})`
                                ExecuteQuery(UpdTrntbl, function (arrUpdTranTbl) {
                                    if (arrUpdTranTbl == 'SUCCESS') {
                                        resolve('SUCCESS')
                                    } else {
                                        resolve('Failure')
                                    }
                                })
                            })
                        } function getVirtualIban(uetr) {
                            return new Promise((resolve, reject) => {
                                let logQry = `select virtual_iban from npss_trn_process_log where process_name = 'Inward Account Validation' and processing_system='MWallet' and uetr='${uetr}'`
                                ExecuteQuery1(logQry, async function (arrlog) {
                                    if (arrlog.length > 0) {
                                        resolve(arrlog[0].virtual_iban)
                                    } else {
                                        resolve('ERROR')
                                    }
                                })

                            })
                        }

                        function kafkaapi(arrpayverobj, processing_system, arrurl, virtual_iban) {
                            var postrefno;
                            return new Promise((resolve, reject) => {
                                var TakepostingRefno = `select process_ref_no from npss_trn_process_log where process_name='${params.postingrefnoprocess_name}' and uetr='${arrpayverobj.uetr}'`
                                ExecuteQuery1(TakepostingRefno, function (arrpostrefno) {
                                    if (arrpostrefno.length > 0) {
                                        postrefno = arrpostrefno[0].process_ref_no ? arrpostrefno[0].process_ref_no : ''
                                        var takereqjson = `select npsstpl_id,fn_pcidss_decrypt(request_data_json,$PCIDSS_KEY) as request_data_json,npsstrrd_refno,msg_id, additional_info as tran_type_code  from npss_trn_process_log where process_name in ${QueryProcessName} and uetr='${arrpayverobj.uetr}'`
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
                                                    cdtr_iban = JsonData['merchant']['iban'] || ''
                                                    tran_ref_id = JsonData['transactionId'] || ''
                                                    amount = JsonData['amount']["requested"] || ''
                                                    currency = JsonData['amount']['currency'] || ''
                                                    dbtr_iban = JsonData['buyer']['iban'] || ''
                                                    dbtr_acct_name = JsonData['buyer']['name'] || ''
                                                    cdtr_acct_name = JsonData['merchant']['merchantName'] || ''
                                                    TranTypecode = JsonData['transactionType'] || ''
                                                    npssrefno = JsonData['refTransactionId'] || ''
                                                    reson = JsonData['reason']
                                                   // var takeacctinfo = `select account_number,customer_mobile_number, countryofbirth country_of_birth,	company_code,inactive_marker,currency,alternate_account_type,alternate_account_id, account_officer,curr_rate_segment,customer_id,national_id  from  core_nc_cbs_accounts where alternate_account_id ='${cdtr_iban}'`
                                                  //  ExecuteQuery1(takeacctinfo, function (arrtakeacctinfo) {
                                                       // if (arrtakeacctinfo.length > 0) {
                                                         //   var seldetqry = `select sell_margin, sell_rate ,cif_number from  core_nc_cust_spl_rate where  cif_number='${arrtakeacctinfo[0].customer_id}'`
                                                          //  ExecuteQuery1(seldetqry, function (arrselldet) {
                                                                // var sell_margin
                                                                // var sell_rate
                                                                // if (arrselldet.length == 0) {
                                                                //     sell_margin = ''
                                                                //     sell_rate = ''
                                                                // } else {
                                                                //     sell_margin = arrselldet[0].sell_margin
                                                                //     sell_rate = arrselldet[0].sell_rate
                                                                // }
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
                                                                                            "cashBlockId": arrtakereqjson[0].npsstrrd_refno || '',
                                                                                            "processing_system": processing_system,
                                                                                            "tran_ref_id": tran_ref_id || '',
                                                                                            "uetr": arrpayverobj.uetr || '',
                                                                                            "hdr_msg_id": '',
                                                                                            "hdr_total_records": '1' || '',
                                                                                            "x_req_id": arrtakereqjson[0].msg_id || '',
                                                                                            "dbtr_country": '',
                                                                                            "iban": virtual_iban,
                                                                                            "process_ref_no": arrtakereqjson[0].npsstrrd_refno || '',
                                                                                            "intrbk_sttlm_amnt": amount || '',
                                                                                            "hdr_total_amount": amount || '',
                                                                                            "intrbk_sttlm_cur": currency || '',
                                                                                            "dbtr_iban": dbtr_iban || '',
                                                                                           // "customer_mobile_number": arrtakeacctinfo[0].customer_mobile_number || '',
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
                                                                                            "source": "IBAN",
                                                                                            "sourceRef": dbtr_iban || '',
                                                                                            "sourceNote": reson || '',
                                                                                            "npsstrrd_refno": npssrefno || '',
                                                                                            "AccountInformation": {
                                                                                                "account_number":'',
                                                                                                "company_code":  '',
                                                                                                "inactive_marker":  '',
                                                                                                "currency":  '',
                                                                                                "alternate_account_type": '',
                                                                                                "alternate_account_id":  '',
                                                                                                "account_officer":  '',
                                                                                                "curr_rate_segment": '',
                                                                                                "customer_id":  '',
                                                                                                "department_code": '',
                                                                                                "tran_type_code": arrtakereqjson[0].tran_type_code || '',
                                                                                                "recipient_bic_code": arrtakebiccode.biccode || '',
                                                                                                "birth_date": '',
                                                                                                "country_of_birth":  '',
                                                                                                "national_id": '',
                                                                                                // "sell_margin": sell_margin || '',
                                                                                                // "sell_rate": sell_rate || '',
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
                                                           // })
                                                        // } else {
                                                        //     reqInstanceHelper.PrintInfo(serviceName, '------------Account Information Not Found-------' + arrpayverobj.uetr, objSessionLogInfo);
                                                        //     resolve('FAILURE')
                                                        // }
                                                   // })

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
