var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {



    /*  Created By : Daseen
    Created Date :15/02/2023
    Modified By : Siva Harish
    Modified Date : 17/05/2023
    Modified By : Subramanian
    Modified Date : 13/12/2023
    Reason:for Adding all the columns of tables npss_tran and core_nc_cbs_accounts values to be send as request to mail
   }
    */
    var serviceName = 'NPSS Inward Reversal Success';

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
    var moment = require('moment-timezone');
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
            objSessionLogInfo.HANDLER_CODE = 'NPSS Inward Reversal Success ';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS Inward Reversal Success ';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
                mTranConn = pSession; //  assign connection     

                try {
                    //  var takeTrn = `select l.npsstpl_id,l.additional_info,l.status,l.uetr,nt.cdtr_iban, fn_pcidss_decrypt(ns.cr_acct_identification,$PCIDSS_KEY ) as cr_acct_identification,nt.base_amount,nt.dbtr_iban ,ac.customer_email_id  from npss_trn_process_log l left join  npss_transactions nt on l.uetr=nt.uetr    left join core_nc_cbs_accounts ac on nt.cdtr_iban = ac.alternate_account_id    where l.status ='${params.status}' and( l.additional_info <>('Mail_Triggered') OR  l.additional_info ISNULL)`
                    // var takeTrn = `select l.npsstpl_id,l.additional_info,l.status,l.uetr,nt.cdtr_iban,fn_pcidss_decrypt(cr_acct_identification,$PCIDSS_KEY) as cr_acct_identification,nt.intrbk_sttlm_amnt,nt.dbtr_iban ,ac.customer_email_id from npss_trn_process_log l left join npss_transactions nt on l.uetr=nt.uetr left join core_nc_cbs_accounts ac on ac.alternate_account_id in(nt.cdtr_iban,cr_acct_identification)where l.status ='${params.status}'and coalesce(l.additional_info,'') <>'Mail_Triggered'`
                    var takeTrn = `select l.npsstpl_id,l.additional_info,l.status,l.uetr,nt.cdtr_iban,fn_pcidss_decrypt(cr_acct_identification,$PCIDSS_KEY) as cr_acct_identification,nt.intrbk_sttlm_amnt,nt.dbtr_iban ,ac.customer_email_id from npss_trn_process_log l left join npss_transactions nt on l.uetr=nt.uetr left join core_nc_cbs_accounts ac on ac.alternate_account_id in(nt.cdtr_iban,cr_acct_identification)where l.status ='${params.status}'and nt.process_type = 'IP' and coalesce(l.additional_info,'') <>'Mail_Triggered'`
                    var takeAllData = `select fn_pcidss_decrypt(cr_acct_identification,$PCIDSS_KEY) as cr_acct_identification, nt.created_Date as tran_created_date,nt.modified_date as tran_modified_date,nt.status
                  as tran_status,nt.issuer_type_code as tran_issuer_type_code,nt.* ,nt.created_Date as acct_created_date,nt.modified_date as acct_modified_date,nt.status
                  as acct_status,ac.issuer_type_code as acct_issuer_type_code,ac.* from npss_trn_process_log l left join npss_transactions nt on l.uetr=nt.uetr left join core_nc_cbs_accounts ac on ac.alternate_account_id in(nt.cdtr_iban,cr_acct_identification) where l.status ='${params.status}'and nt.process_type = 'IP' and coalesce(l.additional_info,'') <>'Mail_Triggered'`
                    var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync='Y'`

                    ExecuteQuery1(takeurl, function (arrUrl) {
                        //   for(var i=0;i<=arrCount.length;arrCount++){
                        if (arrUrl.length == 0) {

                            objresponse.status = 'FAILURE';
                            objresponse.msg = 'No URL found';
                            sendResponse(null, objresponse)
                        } else {
                            ExecuteQuery1(takeAllData, function (arrAllData) {
                                //   for(var i=0;i<=arrCount.length;arrCount++){
                                if (arrAllData.length == 0) {
                                    objresponse.status = 'FAILURE';
                                    objresponse.msg = 'No Data found';
                                    sendResponse(null, objresponse)
                                }
                                else {

                                    var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN' and need_sync='Y'`
                                    ExecuteQuery1(Takeorg, function (arrorg) {
                                        var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_GROUP' and need_sync='Y'`
                                        ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                            var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_CC' and need_sync='Y'`
                                            ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                                var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_CATEGORY' and need_sync='Y'`
                                                ExecuteQuery1(TakecomCat, function (arrCatgory) {
                                                    ExecuteQuery1(takeTrn, function (arrTrn) {
                                                        if (arrTrn.length > 0) {
                                                            reqAsync.forEachOfSeries(arrTrn, function (arrTrnobj, i, nextobjctfunc) {

                                                                if (arrTrnobj.cdtr_iban.substring(0, 3) != 'AED') {
                                                                    try {
                                                                        var frtodata = [{
                                                                            TO: arrTrnobj.customer_email_id || '',
                                                                            CC: arrcomcc.length > 0 ? arrcomcc[0].param_value : '',
                                                                            BCC: '',
                                                                            ORIGIN: arrorg.length > 0 ? arrorg[0].param_value : '',
                                                                            COMM_GROUP: arrcomgp.length > 0 ? arrcomgp[0].param_value : '',
                                                                            CDTRIBAN: 'XXXX' + (arrTrnobj.cdtr_iban).substring(arrTrnobj.cdtr_iban.length - 4),
                                                                            DBTRIBAN: 'XXXX' + (arrTrnobj.dbtr_iban).substring(arrTrnobj.dbtr_iban.length - 4),
                                                                            AMOUNT: arrTrnobj.intrbk_sttlm_amnt,
                                                                            CURRENTDATETIME: moment().tz("Asia/Dubai").format('DD/MM/YYYY HH:MM'),
                                                                            TRAN_NPSSTID: arrAllData[0].npsst_id,
                                                                            TRAN_PRODUCTCODE: arrAllData[0].product_code,
                                                                            TRAN_VALUEDATE: arrAllData[0].value_date
                                                                            ,
                                                                            TRAN_DBTRACCTNO: arrAllData[0].dbtr_acct_no
                                                                            ,
                                                                            TRAN_DBTRACCTNAME: arrAllData[0].dbtr_acct_name
                                                                            ,
                                                                            TRAN_DBTRPHONENO: arrAllData[0].dbtr_phone_no
                                                                            ,
                                                                            TRAN_DBTREMAILID: arrAllData[0].dbtr_email_id
                                                                            ,
                                                                            TRAN_DBTRDOCUMENTID: arrAllData[0].dbtr_document_id,

                                                                            TRAN_DBTRIBAN: arrAllData[0].dbtr_iban
                                                                            ,
                                                                            TRAN_BASECURRENCY: arrAllData[0].base_currency
                                                                            ,
                                                                            TRAN_BASEAMOUNT: arrAllData[0].base_amount
                                                                            ,
                                                                            TRAN_CDTRACCTNO: arrAllData[0].cdtr_acct_no
                                                                            ,
                                                                            TRAN_CDTRACCTNAME: arrAllData[0].cdtr_acct_name
                                                                            ,
                                                                            TRAN_CDTRPHONENO: arrAllData[0].cdtr_phone_no
                                                                            ,
                                                                            TRAN_CDTREMAILID: arrAllData[0].cdtr_email_id
                                                                            ,
                                                                            TRAN_CDTRDOCUMENTID: arrAllData[0].cdtr_document_id
                                                                            ,
                                                                            TRAN_CDTRIBAN: arrAllData[0].cdtr_iban
                                                                            ,
                                                                            TRAN_DRSORTCODE: arrAllData[0].dr_sort_code
                                                                            ,
                                                                            TRAN_CRSORTCODE: arrAllData[0].cr_sort_code
                                                                            ,
                                                                            TRAN_INTRBKSTTLMCUR: arrAllData[0].intrbk_sttlm_cur
                                                                            ,
                                                                            TRAN_INTRBKSTTLMAMNT: arrAllData[0].intrbk_sttlm_amnt
                                                                            ,
                                                                            TRAN_RATECODE: arrAllData[0].rate_code
                                                                            ,
                                                                            TRAN_EXCHANGERATE: arrAllData[0].exchange_rate
                                                                            ,
                                                                            TRAN_CATEGORYPURPOSE: arrAllData[0].category_purpose
                                                                            ,
                                                                            TRAN_HDRMSGID: arrAllData[0].hdr_msg_id
                                                                            ,
                                                                            TRAN_HDRCREATEDDATE: arrAllData[0].hdr_created_date
                                                                            ,
                                                                            TRAN_HDRTOTALRECORDS: arrAllData[0].hdr_total_records
                                                                            ,
                                                                            TRAN_HDRTOTALAMOUNT: arrAllData[0].hdr_total_amount
                                                                            ,
                                                                            TRAN_HDRSETTLEMENTDATE: arrAllData[0].hdr_settlement_date
                                                                            ,
                                                                            TRAN_HDRSETTLEMENTMETHOD: arrAllData[0].hdr_settlement_method
                                                                            ,
                                                                            TRAN_HDRCLEARINGSYSTEM: arrAllData[0].hdr_clearing_system
                                                                            ,
                                                                            TRAN_PAYMENTENDTOENDID: arrAllData[0].payment_endtoend_id
                                                                            ,
                                                                            TRAN_INSTRUMENTTYPE: arrAllData[0].instrument_type
                                                                            ,
                                                                            TRAN_CHARGEBEARER: arrAllData[0].charge_bearer
                                                                            ,
                                                                            TRAN_UETR: arrAllData[0].uetr
                                                                            ,
                                                                            TRAN_MESSAGEDATA: arrAllData[0].message_data
                                                                            ,
                                                                            TRAN_EXHFID: arrAllData[0].exhf_id
                                                                            ,
                                                                            TRAN_PROCESSTYPE: arrAllData[0].process_type
                                                                            ,
                                                                            TRAN_DBTRCUSTTYPE: arrAllData[0].dbtr_cust_type
                                                                            ,
                                                                            TRAN_CHANNELID: arrAllData[0].channel_id
                                                                            ,
                                                                            TRAN_CHANNELREFNO: arrAllData[0].channel_refno
                                                                            ,
                                                                            TRAN_CHANNELUSERID: arrAllData[0].channel_userid
                                                                            ,
                                                                            TRAN_CHANNELPRODUCT: arrAllData[0].channel_product
                                                                            ,
                                                                            TRAN_CHANNELSUBPRODUCT: arrAllData[0].channel_sub_product
                                                                            ,
                                                                            TRAN_CHANNELTRANCODE: arrAllData[0].channel_tran_code
                                                                            ,
                                                                            /* TRAN_CREATEDBY:arrAllData[0]
                                                                            TRAN_CREATEDBYNAME:arrAllData[0] */
                                                                            TRAN_CREATEDDATE: arrAllData[0].tran_created_date,
                                                                            /* TRAN_MODIFIEDBY:arrAllData[0]
                                                                            TRAN_MODIFIEDBYNAME:arrAllData[0] 
                                                                            TRAN_MODIFIEDDATE: arrAllData[0].tran_modified_date,
                                                                            TRAN_SYSTEMID: arrAllData[0].system_id
                                                                            ,
                                                                            TRAN_SYSTEMNAME: arrAllData[0].system_name
                                                                            ,

                                                                            /* TRAN_CREATEDBYSTSID:arrAllData[0]
                                                                            TRAN_MODIFIEDBYSTSID:arrAllData[0] */
                                                                            TRAN_STATUS: arrAllData[0].tran_status,
                                                                            TRAN_PROCESSSTATUS: arrAllData[0].process_status
                                                                            ,/* 
                                                                    TRAN_DTCODE:arrAllData[0]
                                                                    TRAN_DTDESCRIPTION:arrAllData[0]
                                                                    TRAN_DTTCODE:arrAllData[0]
                                                                    TRAN_DTTDESCRIPTION:arrAllData[0]
                                                                    TRAN_CREATEDCLIENTIP:arrAllData[0]
                                                                    TRAN_CREATEDTZ:arrAllData[0]
                                                                    TRAN_CREATEDTZOFFSET:arrAllData[0]
                                                                    TRAN_CREATEDBYSESSIONID:arrAllData[0]
                                                                    TRAN_MODIFIEDCLIENTIP:arrAllData[0]
                                                                    TRAN_MODIFIEDTZ:arrAllData[0]
                                                                    TRAN_MODIFIEDTZOFFSET:arrAllData[0]
                                                                    TRAN_MODIFIEDBYSESSIONID:arrAllData[0]
                                                                    TRAN_CREATEDDATEUTC:arrAllData[0]
                                                                    TRAN_MODIFIEDDATEUTC:arrAllData[0] */
                                                                            TRAN_TRANREFID: arrAllData[0].tran_ref_id
                                                                            ,
                                                                            TRAN_INSTRUCTIONID: arrAllData[0].instruction_id
                                                                            ,
                                                                            TRAN_CATEGORYPURPOSEPRTY: arrAllData[0].category_purpose_prty
                                                                            ,
                                                                            TRAN_EXTORGIDCODE: arrAllData[0].ext_org_id_code
                                                                            ,
                                                                            TRAN_ISSUERTYPECODE: arrAllData[0].tran_issuer_type_code,
                                                                            TRAN_DBTRBIRTHDATE: arrAllData[0].dbtr_birth_date
                                                                            ,
                                                                            TRAN_DBTRCITYBIRTH: arrAllData[0].dbtr_city_birth
                                                                            ,
                                                                            TRAN_DBTRCOUNTRY: arrAllData[0].dbtr_country
                                                                            ,
                                                                            TRAN_CRACCTIDENTIFICATION: arrAllData[0].cr_acct_identification
                                                                            ,
                                                                            TRAN_CRACCTIDCODE: arrAllData[0].cr_acct_id_code
                                                                            ,
                                                                            TRAN_REMITTANCEINFO: arrAllData[0].remittance_info
                                                                            ,
                                                                            TRAN_INWARDFILENAME: arrAllData[0].inward_file_name
                                                                            ,
                                                                            TRAN_CLRSYSREF: arrAllData[0].clrsysref
                                                                            ,
                                                                            TRAN_DEPARTMENTCODE: arrAllData[0].department_code
                                                                            ,
                                                                            TRAN_CBSREFNO: arrAllData[0].cbs_ref_no
                                                                            ,
                                                                            TRAN_DBTROTHERISSUER: arrAllData[0].dbtr_other_issuer
                                                                            ,
                                                                            TRAN_ACCOUNTCURRENCY: arrAllData[0].account_currency
                                                                            ,
                                                                            TRAN_CBSPOSTINGFLAG: arrAllData[0].cbs_posting_flag
                                                                            ,
                                                                            TRAN_PROCESSINGSYSTEM: arrAllData[0].processing_system
                                                                            ,
                                                                            TRAN_REVERSALAMOUNT: arrAllData[0].reversal_amount
                                                                            ,
                                                                            TRAN_CHARGEAMOUNT: arrAllData[0].charge_amount
                                                                            ,
                                                                            TRAN_PROCESSGROUP: arrAllData[0].process_group,

                                                                            TRAN_CUSTSPLRATEFLAG: arrAllData[0].cust_splrate_flag
                                                                            ,
                                                                            TRAN_CHECKER: arrAllData[0].checker
                                                                            ,
                                                                            TRAN_MAKER: arrAllData[0].maker
                                                                            ,
                                                                            TRAN_SELLRATE: arrAllData[0].sell_rate
                                                                            ,
                                                                            TRAN_SELLMARGIN: arrAllData[0].sell_margin
                                                                            ,
                                                                            TRAN_ORGPAYENDTOENDID: arrAllData[0].org_pay_endtoend_id
                                                                            ,
                                                                            TRAN_BUYRATE: arrAllData[0].buy_rate
                                                                            ,
                                                                            TRAN_AMOUNTCREDITEDLOCCUR: arrAllData[0].amount_credited_loc_cur
                                                                            ,
                                                                            TRAN_BUYMARGIN: arrAllData[0].buy_margin
                                                                            ,
                                                                            TRAN_TRANCHARGE: arrAllData[0].tran_charge
                                                                            ,
                                                                            TRAN_PROCESSGROUP: arrAllData[0].process_group
                                                                            ,
                                                                            TRAN_CHARGEAMOUNT: arrAllData[0].charge_amount,
                                                                            ACCT_ACCOUNTNUMBER: arrAllData[0].account_number
                                                                            ,
                                                                            ACCT_ALTERNATEACCOUNTID: arrAllData[0].alternate_account_id
                                                                            ,
                                                                            ACCT_ACCOUNTNAME: arrAllData[0].account_name
                                                                            ,
                                                                            ACCT_POSTINGRESTRICTIONCODE: arrAllData[0].posting_restriction_code
                                                                            ,
                                                                            ACCT_INACTIVEMARKER: arrAllData[0].inactive_marker
                                                                            ,
                                                                            ACCT_CATEGORYCODE: arrAllData[0].category_code
                                                                            ,
                                                                            ACCT_CATEGORYDESCRIPTION: arrAllData[0].category_description
                                                                            ,
                                                                            ACCT_CURRENCY: arrAllData[0].currency
                                                                            ,
                                                                            ACCT_CUSTOMERID: arrAllData[0].customer_id,
                                                                            ACCT_ACCOUNTTITLE2: arrAllData[0].account_title_2
                                                                            ,
                                                                            ACCT_COMPANYCODE: arrAllData[0].company_code
                                                                            ,
                                                                            ACCT_EMIRATESCODE: arrAllData[0].emirates_code
                                                                            ,
                                                                            ACCT_COUNTRYOFBIRTH: arrAllData[0].countryofbirth,
                                                                            ACCT_LETTEROFUNDERTAKING: arrAllData[0].letter_of_undertaking
                                                                            ,
                                                                            ACCT_CUSTOMERPOSTINGRESTRICTIONCODE: arrAllData[0].customer_posting_restriction_code
                                                                            ,
                                                                            ACCT_TARGETCODE: arrAllData[0].target_code,
                                                                            ACCT_SECTORCODE: arrAllData[0].sector_code
                                                                            ,
                                                                            ACCT_RESIDENTFLAG: arrAllData[0].resident_flag
                                                                            ,
                                                                            ACCT_NATIONALITYCOUNTRYCODE: arrAllData[0].nationality_country_code
                                                                            ,
                                                                            ACCT_LEGALID: arrAllData[0].legal_id
                                                                            ,
                                                                            ACCT_NATIONALID: arrAllData[0].national_id
                                                                            ,
                                                                            ACCT_INDUSTRY: arrAllData[0].industry
                                                                            ,
                                                                            ACCT_COMMUNICATIONTYPE: arrAllData[0].communication_type
                                                                            ,
                                                                            ACCT_CUSTOMERMOBILENUMBER: arrAllData[0].customer_mobile_number
                                                                            ,
                                                                            ACCT_ACCOUNTOFFICER: arrAllData[0].account_officer
                                                                            ,
                                                                            ACCT_CURRRATESEGMENT: arrAllData[0].curr_rate_segment
                                                                            ,
                                                                            ACCT_CUSTOMEREMAILID: arrAllData[0].customer_email_id
                                                                            ,
                                                                            ACCT_TRADELICENSEFLAG: arrAllData[0].trade_license_flag
                                                                            ,
                                                                            ACCT_TRADELICENSENUMBER: arrAllData[0].trade_license_number
                                                                            ,
                                                                            ACCT_COMMERCIALREGISTRATIONFLAG: arrAllData[0].commercial_registration_flag
                                                                            ,
                                                                            ACCT_CHAMBERCERTIFICATENUMBER: arrAllData[0].chamber_certificate_number
                                                                            ,
                                                                            ACCT_AMIRIDECREEFLAG: arrAllData[0].amiri_decree_flag
                                                                            ,
                                                                            ACCT_ALTERNATEACCOUNTTYPE: arrAllData[0].alternate_account_type
                                                                            ,
                                                                            ACCT_ACCOUNTPOSTRINGTYPEDESCRIPTION: arrAllData[0].account_postring_type_description
                                                                            ,
                                                                            ACCT_ACCOUNTPOSTINGRESTRICTTYPE: arrAllData[0].account_posting_restrict_type
                                                                            ,
                                                                            ACCT_CUSTOMERPOSTINGRESTRICTIONDESCRIPTION: arrAllData[0].customer_posting_restriction_description
                                                                            ,
                                                                            ACCT_CUSTOMERPOSTINGRESTRICTTYPE: arrAllData[0].customer_posting_restrict_type
                                                                            ,
                                                                            ACCT_VIRTUALACCOUNTNAME: arrAllData[0].virtual_account_name
                                                                            ,
                                                                            ACCT_VACURRENCY: arrAllData[0].va_currency
                                                                            ,
                                                                            ACCT_VATYPE: arrAllData[0].va_type
                                                                            ,
                                                                            ACCT_VASTATUS: arrAllData[0].va_status
                                                                            ,
                                                                            ACCT_BIRTHDATE: arrAllData[0].birthdate
                                                                            ,
                                                                            ACCT_PRODUCTIDENTIFIER: arrAllData[0].productidentifier
                                                                            ,
                                                                            ACCT_ISSUERTYPECODE: arrAllData[0].acct_issuer_type_code,
                                                                            ACCT_ECONOMICACTIVITYCODE: arrAllData[0].economic_activity_code
                                                                            ,
                                                                            ACCT_CITYOFBIRTH: arrAllData[0].cityofbirth
                                                                            ,
                                                                            ACCT_ACCOUNTCLOSED: arrAllData[0].account_closed
                                                                            ,
                                                                            ACCT_CNCCAID: arrAllData[0].cncca_id
                                                                            ,
                                                                            ACCT_CREATEDDATE: arrAllData[0].acct_created_date,
                                                                            ACCT_MODIFIEDDATE: arrAllData[0].acct_modified_date,
                                                                            ACCT_VAFLAG: arrAllData[0].va_flag
                                                                            ,


                                                                        }]
                                                                        var trndetail = JSON.stringify(frtodata)
                                                                        var request = require('request');

                                                                        var options = {
                                                                            url: arrUrl[0].param_detail,
                                                                            timeout: 18000000,
                                                                            method: 'POST',
                                                                            json: {
                                                                                "PARAMS": {

                                                                                    "WFTPA_ID": "DEFAULT",

                                                                                    "PRCT_ID": "",

                                                                                    "EVENT_CODE": "DEFAULT",

                                                                                    "USER_EMAIL": "",

                                                                                    "USER_MOBILE": "",

                                                                                    "TRN_DETAILS": trndetail,

                                                                                    "TEMPLATECODE": arrCatgory[0].param_value,

                                                                                    "DT_CODE": "",

                                                                                    "DTT_CODE": "",

                                                                                    "COMM_INFO": "",

                                                                                    "SKIP_COMM_FLOW": true

                                                                                },

                                                                                "PROCESS_INFO": {

                                                                                    "MODULE": "MODULE",

                                                                                    "MENU_GROUP": "MENU_GROUP",

                                                                                    "MENU_ITEM": "MENU_ITEM",

                                                                                    "PROCESS_NAME": "PROCESS_NAME"

                                                                                }
                                                                            },
                                                                            headers: {
                                                                                "session-id": params.session_id,
                                                                                "routingKey": params.routingKey,
                                                                                'Content-Type': 'application/json'

                                                                            }
                                                                        }

                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                                                        request(options, function (error, responseFromImagingService, responseBody) {

                                                                            if (error) {
                                                                                reqInstanceHelper.PrintInfo(serviceName, '------------ API ERROR-------' + error, objSessionLogInfo);
                                                                                sendResponse(error, null);
                                                                            } else {
                                                                                reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + JSON.stringify(responseBody), objSessionLogInfo);
                                                                                reqInstanceHelper.PrintInfo(serviceName, '------------Mail has been sent for -------' + arrTrnobj.npsstpl_id, objSessionLogInfo);
                                                                                var uptLog = `update npss_trn_process_log set additional_info='Mail_Triggered' where npsstpl_id='${arrTrnobj.npsstpl_id}'`
                                                                                ExecuteQuery(uptLog, function (arrCatgory) {
                                                                                    if (arrCatgory == 'SUCCESS') {
                                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------Log table update success for  -------' + arrTrnobj.npsstpl_id, objSessionLogInfo);
                                                                                        nextobjctfunc();
                                                                                    } else {
                                                                                        reqInstanceHelper.PrintInfo(serviceName, '------------Log table update not success for-------' + arrTrnobj.npsstpl_id, objSessionLogInfo);
                                                                                        var fail = {}
                                                                                        fail.updateFaildept = arrTrnobj.npsstpl_id
                                                                                        failedData.push(fail)
                                                                                        nextobjctfunc()
                                                                                    }
                                                                                })


                                                                            }
                                                                        });

                                                                    } catch (error) {
                                                                        reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                        sendResponse(error, null);
                                                                    }
                                                                } else {
                                                                    reqInstanceHelper.PrintInfo(serviceName, '-----------Mail Failure cdtr_iban for-------' + arrTrnobj.cdtr_iban, objSessionLogInfo);
                                                                    var fail = {}
                                                                    fail.updateFaildept = arrTrnobj.cdtr_iban
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
                                                            reqInstanceHelper.PrintInfo(serviceName, '----------No tran found-------', objSessionLogInfo);
                                                            objresponse.status = 'FAILURE';

                                                            sendResponse(null, objresponse)
                                                        }
                                                    })



                                                })






                                            })

                                        })
                                    })

                                }



                            })




                            //Execute Query for common
                            

                        }
                    })
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
