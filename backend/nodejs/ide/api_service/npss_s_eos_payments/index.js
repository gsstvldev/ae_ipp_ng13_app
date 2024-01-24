var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    



    /*  Created By :  Daseen
    Created Date :12/12/2023
    Modified By : Subramanian
    Modified Date : 15/12/12023
    Reason for: instead of fx_resv_text2 wil use eos_mail_status on 23/01/2024 by daseen
    Modified By : Subramanian
    Modified Date : 24/1/12024
    Reason:Sending all the column values if exist to the communication api
    }
    */
    var serviceName = 'NPSS EOS Inward Credit Posting Payment Success';

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
            objSessionLogInfo.HANDLER_CODE = 'NPSS EOS Inward Credit Posting Payment Success';
            objSessionLogInfo.ACTION = 'ACTION';
            objSessionLogInfo.PROCESS = 'NPSS EOS Inward Credit Posting Payment Success';
            // Get DB Connection 
            reqTranDBInstance.GetTranDBConn(headers, false,  function (pSession) {
                mTranConn = pSession; //  assign connection     
                reqAuditLog.GetProcessToken(pSession, objLogInfo,async function prct(error, prct_id) {
                  var  PRCT_ID = prct_id

                    try {

                        var takeTrn = `select npsst_id,fn_pcidss_decrypt(cr_acct_identification,$PCIDSS_KEY) as cr_acct_identification,cdtr_acct_name,cdtr_iban,value_date,intrbk_sttlm_amnt,dr_sort_code,department_code,nt.eos_mail_status from npss_transactions nt  inner join  npss_trn_process_log l on l.uetr =nt.uetr and  ((l.process_name= 'Inward Credit Posting' and l.status= 'IP_RCT_POSTING_SUCCESS')  or (l.process_name= 'Prepaid Card Posting' and l.status = 'IP_RCT_PC_POSTING_SUCCESS')    or (l.process_name ='Credit Card Posting' and l.status ='IP_RCT_CC_POSTING_SUCCESS')) where nt.category_purpose_prty='EOS' and (nt.eos_mail_status <>'PSMailInitiated'  or nt.eos_mail_status isnull)`
                        var takeAllData = `select fn_pcidss_decrypt(cr_acct_identification,$PCIDSS_KEY) as cr_acct_identification, nt.created_Date as tran_created_date,nt.modified_date as tran_modified_date,nt.status
                        as tran_status,nt.issuer_type_code as tran_issuer_type_code,nt.* ,ac.created_Date as acct_created_date,ac.modified_date as acct_modified_date,nt.status
                        as acct_status,ac.issuer_type_code as acct_issuer_type_code,ac.* from npss_trn_process_log l left join npss_transactions nt on l.uetr=nt.uetr left join core_nc_cbs_accounts ac on ac.alternate_account_id in(nt.cdtr_iban,cr_acct_identification) and  ((l.process_name= 'Inward Credit Posting' and l.status= 'IP_RCT_POSTING_SUCCESS')  or (l.process_name= 'Prepaid Card Posting' and l.status = 'IP_RCT_PC_POSTING_SUCCESS')    or (l.process_name ='Credit Card Posting' and l.status ='IP_RCT_CC_POSTING_SUCCESS')) where nt.category_purpose_prty='EOS' and (nt.eos_mail_status <>'PSMailInitiated'  or nt.eos_mail_status isnull)`
                        var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync='Y'`

                        var arrTran = await ExecuteQuery1(takeAllData)
                        if (arrTran.length > 0) {
                            let trnId = arrTran.map((x) => x.npsst_id)
                            var updateRes = await updateEligibleTran('(' + trnId.join(',') + ')')
                            if (updateRes == 'SUCCESS') {
                                var arrUrl = await ExecuteQuery1(takeurl)
                                if (arrUrl.length > 0) {
                                    var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN' and need_sync='Y'`
                                    var arrorg = await ExecuteQuery1(Takeorg)
                                    var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_GROUP' and need_sync='Y'`
                                    var arrcomgp = await ExecuteQuery1(tkcomgp)
                                    var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_CC' and need_sync='Y'`
                                    var arrcomcc = await ExecuteQuery1(Takecmcc)
                                    var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_CATEGORY' and need_sync='Y'`
                                    var arrCatgory = await ExecuteQuery1(TakecomCat)
                                    var TakecomTo = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_TO' and need_sync='Y'`
                                    var arrComto = await ExecuteQuery1(TakecomTo)
                                    reqAsync.forEachOfSeries(arrTran, function (arrTrnobj, i, nextobjctfunc) {
                                        try {
                                            var frtodata = [{

                                                TO: arrComto.length>0?arrComto[0].param_value : '',
                                                CC: arrcomcc.length > 0 ? arrcomcc[0].param_value : '',
                                                BCC: '',
                                                ORIGIN: arrorg.length > 0 ? arrorg[0].param_value : '',
                                                COMM_GROUP: arrcomgp.length > 0 ? arrcomgp[0].param_value : '',
                                               // BENEFICIARYACCOUNT: (arrTrnobj.cdtr_iban)?(arrTrnobj.cdtr_iban).replace(arrTrnobj.cdtr_iban.substring(5,11),'******') : arrTrnobj.cr_acct_identification.replace(arrTrnobj.cr_acct_identification.substring(5,11),'******'),
                                               BENEFICIARYACCOUNT: (arrTrnobj.cdtr_iban)?(arrTrnobj.cdtr_iban): arrTrnobj.cr_acct_identification,
                                                AMOUNT: arrTrnobj.intrbk_sttlm_amnt || '',
                                                BENEFICIARYACCOUNTNAME: arrTrnobj.cdtr_acct_name || '',
                                                VALUEDATE: moment( arrTrnobj.value_date).format('DD/MM/YYYY')||'',
                                                ORDERINGINSTITUTION: arrTrnobj.dr_sort_code || '',
                                                DEPARTMENT: arrTrnobj.department_code || '',
                                                TRAN_NPSSTID: arrTrnobj.npsst_id?arrTrnobj.npsst_id:"",
                                                                           TRAN_PRODUCTCODE: arrTrnobj.product_code?arrTrnobj.product_code:"",
                                                                           TRAN_VALUEDATE: arrTrnobj.value_date?arrTrnobj.value_date:""
                                                                           ,
                                                                           TRAN_DBTRACCTNO: arrTrnobj.dbtr_acct_no?arrTrnobj.dbtr_acct_no:""
                                                                           ,
                                                                           TRAN_DBTRACCTNAME: arrTrnobj.dbtr_acct_name?arrTrnobj.dbtr_acct_name:""
                                                                           ,
                                                                           TRAN_DBTRPHONENO: arrTrnobj.dbtr_phone_no?arrTrnobj.dbtr_phone_no:""
                                                                           ,
                                                                           TRAN_DBTREMAILID: arrTrnobj.dbtr_email_id?arrTrnobj.dbtr_email_id:""
                                                                           ,
                                                                           TRAN_DBTRDOCUMENTID: arrTrnobj.dbtr_document_id?arrTrnobj.dbtr_document_id:"",

                                                                           TRAN_DBTRIBAN: arrTrnobj.dbtr_iban?arrTrnobj.dbtr_iban:""
                                                                           ,
                                                                           TRAN_BASECURRENCY: arrTrnobj.base_currency?arrTrnobj.base_currency:""
                                                                           ,
                                                                           TRAN_BASEAMOUNT: arrTrnobj.base_amount?arrTrnobj.base_amount:""
                                                                           ,
                                                                           TRAN_CDTRACCTNO: arrTrnobj.cdtr_acct_no?arrTrnobj.cdtr_acct_no:""
                                                                           ,
                                                                           TRAN_CDTRACCTNAME: arrTrnobj.cdtr_acct_name?arrTrnobj.cdtr_acct_name:""
                                                                           ,
                                                                           TRAN_CDTRPHONENO: arrTrnobj.cdtr_phone_no?arrTrnobj.cdtr_phone_no:""
                                                                           ,
                                                                           TRAN_CDTREMAILID: arrTrnobj.cdtr_email_id?arrTrnobj.cdtr_email_id:""
                                                                           ,
                                                                           TRAN_CDTRDOCUMENTID: arrTrnobj.cdtr_document_id?arrTrnobj.cdtr_document_id:""
                                                                           ,
                                                                           TRAN_CDTRIBAN: arrTrnobj.cdtr_iban?arrTrnobj.cdtr_iban:""
                                                                           ,
                                                                           TRAN_DRSORTCODE: arrTrnobj.dr_sort_code?arrTrnobj.dr_sort_code:""
                                                                           ,
                                                                           TRAN_CRSORTCODE: arrTrnobj.cr_sort_code?arrTrnobj.cr_sort_code:""
                                                                           ,
                                                                           TRAN_INTRBKSTTLMCUR: arrTrnobj.intrbk_sttlm_cur?arrTrnobj.intrbk_sttlm_cur:""
                                                                           ,
                                                                           TRAN_INTRBKSTTLMAMNT: arrTrnobj.intrbk_sttlm_amnt?arrTrnobj.intrbk_sttlm_amnt:""
                                                                           ,
                                                                           TRAN_RATECODE: arrTrnobj.rate_code?arrTrnobj.rate_code:""
                                                                           ,
                                                                           TRAN_EXCHANGERATE: arrTrnobj.exchange_rate?arrTrnobj.exchange_rate:""
                                                                           ,
                                                                           TRAN_CATEGORYPURPOSE: arrTrnobj.category_purpose?arrTrnobj.category_purpose:""
                                                                           ,
                                                                           TRAN_HDRMSGID: arrTrnobj.hdr_msg_id?arrTrnobj.hdr_msg_id:""
                                                                           ,
                                                                           TRAN_HDRCREATEDDATE: arrTrnobj.hdr_created_date?arrTrnobj.hdr_created_date:""
                                                                           ,
                                                                           TRAN_HDRTOTALRECORDS: arrTrnobj.hdr_total_records?arrTrnobj.hdr_total_records:""
                                                                           ,
                                                                           TRAN_HDRTOTALAMOUNT: arrTrnobj.hdr_total_amount?arrTrnobj.hdr_total_amount:""
                                                                           ,
                                                                           TRAN_HDRSETTLEMENTDATE: arrTrnobj.hdr_settlement_date?arrTrnobj.hdr_settlement_date:""
                                                                           ,
                                                                           TRAN_HDRSETTLEMENTMETHOD: arrTrnobj.hdr_settlement_method?arrTrnobj.hdr_settlement_method:""
                                                                           ,
                                                                           TRAN_HDRCLEARINGSYSTEM: arrTrnobj.hdr_clearing_system?arrTrnobj.hdr_clearing_system:""
                                                                           ,
                                                                           TRAN_PAYMENTENDTOENDID: arrTrnobj.payment_endtoend_id?arrTrnobj.payment_endtoend_id:""
                                                                           ,
                                                                           TRAN_INSTRUMENTTYPE: arrTrnobj.instrument_type?arrTrnobj.instrument_type:""
                                                                           ,
                                                                           TRAN_CHARGEBEARER: arrTrnobj.charge_bearer?arrTrnobj.charge_bearer:""
                                                                           ,
                                                                           TRAN_UETR: arrTrnobj.uetr?arrTrnobj.uetr:""
                                                                           ,
                                                                           TRAN_MESSAGEDATA: arrTrnobj.message_data?arrTrnobj.message_data:""
                                                                           ,
                                                                           TRAN_EXHFID: arrTrnobj.exhf_id?arrTrnobj.exhf_id:""
                                                                           ,
                                                                           TRAN_PROCESSTYPE: arrTrnobj.process_type?arrTrnobj.process_type:""
                                                                           ,
                                                                           TRAN_DBTRCUSTTYPE: arrTrnobj.dbtr_cust_type?arrTrnobj.dbtr_cust_type:""
                                                                           ,
                                                                           TRAN_CHANNELID: arrTrnobj.channel_id?arrTrnobj.channel_id:""
                                                                           ,
                                                                           TRAN_CHANNELREFNO: arrTrnobj.channel_refno?arrTrnobj.channel_refno:""
                                                                           ,
                                                                           TRAN_CHANNELUSERID: arrTrnobj.channel_userid?arrTrnobj.channel_userid:""
                                                                           ,
                                                                           TRAN_CHANNELPRODUCT: arrTrnobj.channel_product?arrTrnobj.channel_product:""
                                                                           ,
                                                                           TRAN_CHANNELSUBPRODUCT: arrTrnobj.channel_sub_product?arrTrnobj.channel_sub_product:""
                                                                           ,
                                                                           TRAN_CHANNELTRANCODE: arrTrnobj.channel_tran_code?arrTrnobj.channel_tran_code:""
                                                                           ,
                                                                           /* TRAN_CREATEDBY:arrAllData[0]
                                                                           TRAN_CREATEDBYNAME:arrAllData[0] */
                                                                           TRAN_CREATEDDATE: arrTrnobj.tran_created_date?arrTrnobj.tran_created_date:"",
                                                                           /* TRAN_MODIFIEDBY:arrTrnobj
                                                                           TRAN_MODIFIEDBYNAME:arrAllData[0] 
                                                                           TRAN_MODIFIEDDATE: arrAllData[0].tran_modified_date,
                                                                           TRAN_SYSTEMID: arrAllData[0].system_id
                                                                           ,
                                                                           TRAN_SYSTEMNAME: arrAllData[0].system_name
                                                                           ,

                                                                           /* TRAN_CREATEDBYSTSID:arrAllData[0]
                                                                           TRAN_MODIFIEDBYSTSID:arrAllData[0] */
                                                                           TRAN_STATUS: arrTrnobj.tran_status?arrTrnobj.tran_status:"",
                                                                           TRAN_PROCESSSTATUS: arrTrnobj.process_status?arrTrnobj.process_status:""
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
                                                                           TRAN_TRANREFID: arrTrnobj.tran_ref_id?arrTrnobj.tran_ref_id:""
                                                                           ,
                                                                           TRAN_INSTRUCTIONID: arrTrnobj.instruction_id?arrTrnobj.instruction_id:""
                                                                           ,
                                                                           TRAN_CATEGORYPURPOSEPRTY: arrTrnobj.category_purpose_prty?arrTrnobj.category_purpose_prty:""
                                                                           ,
                                                                           TRAN_EXTORGIDCODE: arrTrnobj.ext_org_id_code?arrTrnobj.ext_org_id_code:""
                                                                           ,
                                                                           TRAN_ISSUERTYPECODE: arrTrnobj.tran_issuer_type_code?arrTrnobj.tran_issuer_type_code:"",
                                                                           TRAN_DBTRBIRTHDATE: arrTrnobj.dbtr_birth_date?arrTrnobj.dbtr_birth_date:""
                                                                           ,
                                                                           TRAN_DBTRCITYBIRTH: arrTrnobj.dbtr_city_birth?arrTrnobj.dbtr_city_birth:""
                                                                           ,
                                                                           TRAN_DBTRCOUNTRY: arrTrnobj.dbtr_country?arrTrnobj.dbtr_country:""
                                                                           ,
                                                                           TRAN_CRACCTIDENTIFICATION: arrTrnobj.cr_acct_identification?arrTrnobj.cr_acct_identification:""
                                                                           ,
                                                                           TRAN_CRACCTIDCODE: arrTrnobj.cr_acct_id_code?arrTrnobj.cr_acct_id_code:""
                                                                           ,
                                                                           TRAN_REMITTANCEINFO: arrTrnobj.remittance_info?arrTrnobj.remittance_info:""
                                                                           ,
                                                                           TRAN_INWARDFILENAME: arrTrnobj.inward_file_name?arrTrnobj.inward_file_name:""
                                                                           ,
                                                                           TRAN_CLRSYSREF: arrTrnobj.clrsysref?arrTrnobj.clrsysref:""
                                                                           ,
                                                                           TRAN_DEPARTMENTCODE: arrTrnobj.department_code?arrTrnobj.department_code:""
                                                                           ,
                                                                           TRAN_CBSREFNO: arrTrnobj.cbs_ref_no?arrTrnobj.cbs_ref_no:""
                                                                           ,
                                                                           TRAN_DBTROTHERISSUER: arrTrnobj.dbtr_other_issuer?arrTrnobj.dbtr_other_issuer:""
                                                                           ,
                                                                           TRAN_ACCOUNTCURRENCY: arrTrnobj.account_currency?arrTrnobj.account_currency:""
                                                                           ,
                                                                           TRAN_CBSPOSTINGFLAG: arrTrnobj.cbs_posting_flag?arrTrnobj.cbs_posting_flag:""
                                                                           ,
                                                                           TRAN_PROCESSINGSYSTEM: arrTrnobj.processing_system?arrTrnobj.processing_system:""
                                                                           ,
                                                                           TRAN_REVERSALAMOUNT: arrTrnobj.reversal_amount?arrTrnobj.reversal_amount:""
                                                                           ,
                                                                           TRAN_CHARGEAMOUNT: arrTrnobj.charge_amount?arrTrnobj.charge_amount:""
                                                                           ,
                                                                           TRAN_PROCESSGROUP: arrTrnobj.process_group?arrTrnobj.process_group:"",

                                                                           TRAN_CUSTSPLRATEFLAG: arrTrnobj.cust_splrate_flag?arrTrnobj.cust_splrate_flag:""
                                                                           ,
                                                                           TRAN_CHECKER: arrTrnobj.checker?arrTrnobj.checker:""
                                                                           ,
                                                                           TRAN_MAKER: arrTrnobj.maker?arrTrnobj.maker:""
                                                                           ,
                                                                           TRAN_SELLRATE: arrTrnobj.sell_rate?arrTrnobj.sell_rate:""
                                                                           ,
                                                                           TRAN_SELLMARGIN: arrTrnobj.sell_margin?arrTrnobj.sell_margin:""
                                                                           ,
                                                                           TRAN_ORGPAYENDTOENDID: arrTrnobj.org_pay_endtoend_id?arrTrnobj.org_pay_endtoend_id:""
                                                                           ,
                                                                           TRAN_BUYRATE: arrTrnobj.buy_rate?arrTrnobj.buy_rate:""
                                                                           ,
                                                                           TRAN_AMOUNTCREDITEDLOCCUR: arrTrnobj.amount_credited_loc_cur?arrTrnobj.amount_credited_loc_cur:""
                                                                           ,
                                                                           TRAN_BUYMARGIN: arrTrnobj.buy_margin?arrTrnobj.buy_margin:""
                                                                           ,
                                                                           TRAN_TRANCHARGE: arrTrnobj.tran_charge?arrTrnobj.tran_charge:""
                                                                           ,
                                                                           TRAN_PROCESSGROUP: arrTrnobj.process_group?arrTrnobj.process_group:""
                                                                           ,
                                                                           TRAN_CHARGEAMOUNT: arrTrnobj.charge_amount?arrTrnobj.charge_amount:"",
                                                                           ACCT_ACCOUNTNUMBER: arrTrnobj.account_number?arrTrnobj.account_number:""
                                                                           ,
                                                                           ACCT_ALTERNATEACCOUNTID: arrTrnobj.alternate_account_id?arrTrnobj.alternate_account_id:""
                                                                           ,
                                                                           ACCT_ACCOUNTNAME: arrTrnobj.account_name?arrTrnobj.account_name:""
                                                                           ,
                                                                           ACCT_POSTINGRESTRICTIONCODE: arrTrnobj.posting_restriction_code?arrTrnobj.posting_restriction_code:""
                                                                           ,
                                                                           ACCT_INACTIVEMARKER: arrTrnobj.inactive_marker?arrTrnobj.inactive_marker:""
                                                                           ,
                                                                           ACCT_CATEGORYCODE: arrTrnobj.category_code?arrTrnobj.category_code:""
                                                                           ,
                                                                           ACCT_CATEGORYDESCRIPTION: arrTrnobj.category_description?arrTrnobj.category_description:""
                                                                           ,
                                                                           ACCT_CURRENCY: arrTrnobj.currency?arrTrnobj.currency:""
                                                                           ,
                                                                           ACCT_CUSTOMERID: arrTrnobj.customer_id?arrTrnobj.customer_id:"",
                                                                           ACCT_ACCOUNTTITLE2: arrTrnobj.account_title_2?arrTrnobj.account_title_2:""
                                                                           ,
                                                                           ACCT_COMPANYCODE: arrTrnobj.company_code?arrTrnobj.company_code:""
                                                                           ,
                                                                           ACCT_EMIRATESCODE: arrTrnobj.emirates_code?arrTrnobj.emirates_code:""
                                                                           ,
                                                                           ACCT_COUNTRYOFBIRTH: arrTrnobj.countryofbirth?arrTrnobj.countryofbirth:"",
                                                                           ACCT_LETTEROFUNDERTAKING: arrTrnobj.letter_of_undertaking?arrTrnobj.letter_of_undertaking:""
                                                                           ,
                                                                           ACCT_CUSTOMERPOSTINGRESTRICTIONCODE: arrTrnobj.customer_posting_restriction_code?arrTrnobj.customer_posting_restriction_code:""
                                                                           ,
                                                                           ACCT_TARGETCODE: arrTrnobj.target_code?arrTrnobj.target_code:"",
                                                                           ACCT_SECTORCODE: arrTrnobj.sector_code?arrTrnobj.sector_code:""
                                                                           ,
                                                                           ACCT_RESIDENTFLAG: arrTrnobj.resident_flag?arrTrnobj.resident_flag:""
                                                                           ,
                                                                           ACCT_NATIONALITYCOUNTRYCODE: arrTrnobj.nationality_country_code?arrTrnobj.nationality_country_code:""
                                                                           ,
                                                                           ACCT_LEGALID: arrTrnobj.legal_id?arrTrnobj.legal_id:""
                                                                           ,
                                                                           ACCT_NATIONALID: arrTrnobj.national_id?arrTrnobj.national_id:""
                                                                           ,
                                                                           ACCT_INDUSTRY: arrTrnobj.industry?arrTrnobj.industry:""
                                                                           ,
                                                                           ACCT_COMMUNICATIONTYPE: arrTrnobj.communication_type?arrTrnobj.communication_type:""
                                                                           ,
                                                                           ACCT_CUSTOMERMOBILENUMBER: arrTrnobj.customer_mobile_number?arrTrnobj.customer_mobile_number:""
                                                                           ,
                                                                           ACCT_ACCOUNTOFFICER: arrTrnobj.account_officer?arrTrnobj.account_officer:""
                                                                           ,
                                                                           ACCT_CURRRATESEGMENT: arrTrnobj.curr_rate_segment?arrTrnobj.curr_rate_segment:""
                                                                           ,
                                                                           ACCT_CUSTOMEREMAILID: arrTrnobj.customer_email_id?arrTrnobj.customer_email_id:""
                                                                           ,
                                                                           ACCT_TRADELICENSEFLAG: arrTrnobj.trade_license_flag?arrTrnobj.trade_license_flag:""
                                                                           ,
                                                                           ACCT_TRADELICENSENUMBER: arrTrnobj.trade_license_number?arrTrnobj.trade_license_number:""
                                                                           ,
                                                                           ACCT_COMMERCIALREGISTRATIONFLAG: arrTrnobj.commercial_registration_flag?arrTrnobj.commercial_registration_flag:""
                                                                           ,
                                                                           ACCT_CHAMBERCERTIFICATENUMBER: arrTrnobj.chamber_certificate_number?arrTrnobj.chamber_certificate_number:""
                                                                           ,
                                                                           ACCT_AMIRIDECREEFLAG: arrTrnobj.amiri_decree_flag?arrTrnobj.amiri_decree_flag:""
                                                                           ,
                                                                           ACCT_ALTERNATEACCOUNTTYPE: arrTrnobj.alternate_account_type?arrTrnobj.alternate_account_type:""
                                                                           ,
                                                                           ACCT_ACCOUNTPOSTRINGTYPEDESCRIPTION: arrTrnobj.account_postring_type_description?arrTrnobj.account_postring_type_description:""
                                                                           ,
                                                                           ACCT_ACCOUNTPOSTINGRESTRICTTYPE: arrTrnobj.account_posting_restrict_type?arrTrnobj.account_posting_restrict_type:""
                                                                           ,
                                                                           ACCT_CUSTOMERPOSTINGRESTRICTIONDESCRIPTION: arrTrnobj.customer_posting_restriction_description?arrTrnobj.customer_posting_restriction_description:""
                                                                           ,
                                                                           ACCT_CUSTOMERPOSTINGRESTRICTTYPE: arrTrnobj.customer_posting_restrict_type?arrTrnobj.customer_posting_restrict_type:""
                                                                           ,
                                                                           ACCT_VIRTUALACCOUNTNAME: arrTrnobj.virtual_account_name?arrTrnobj.virtual_account_name:""
                                                                           ,
                                                                           ACCT_VACURRENCY: arrTrnobj.va_currency?arrTrnobj.va_currency:""
                                                                           ,
                                                                           ACCT_VATYPE: arrTrnobj.va_type?arrTrnobj.va_type:""
                                                                           ,
                                                                           ACCT_VASTATUS: arrTrnobj.va_status?arrTrnobj.va_status:""
                                                                           ,
                                                                           ACCT_BIRTHDATE: arrTrnobj.birthdate?arrTrnobj.birthdate:""
                                                                           ,
                                                                           ACCT_PRODUCTIDENTIFIER: arrTrnobj.productidentifier?arrTrnobj.productidentifier:""
                                                                           ,
                                                                           ACCT_ISSUERTYPECODE: arrTrnobj.acct_issuer_type_code?arrTrnobj.acct_issuer_type_code:"",
                                                                           ACCT_ECONOMICACTIVITYCODE: arrTrnobj.economic_activity_code?arrTrnobj.economic_activity_code:""
                                                                           ,
                                                                           ACCT_CITYOFBIRTH: arrTrnobj.cityofbirth?arrTrnobj.cityofbirth:""
                                                                           ,
                                                                           ACCT_ACCOUNTCLOSED: arrTrnobj.account_closed?arrTrnobj.account_closed:""
                                                                           ,
                                                                           ACCT_CNCCAID: arrTrnobj.cncca_id?arrTrnobj.cncca_id:""
                                                                           ,
                                                                           ACCT_CREATEDDATE: arrTrnobj.acct_created_date?arrTrnobj.acct_created_date:"",
                                                                           ACCT_MODIFIEDDATE: arrTrnobj.acct_modified_date?arrTrnobj.acct_modified_date:"",
                                                                           ACCT_VAFLAG: arrTrnobj.va_flag?arrTrnobj.va_flag:""
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
                                                    "session-id": headers["session-id"],
                                                    "routingKey": headers.routingKey,
                                                    'Content-Type': 'application/json'

                                                }
                                            }

                                            reqInstanceHelper.PrintInfo(serviceName, '------------API JSON-------' + JSON.stringify(options), objSessionLogInfo);
                                            request(options, function (error, responseFromImagingService, responseBody) {

                                                if (error) {
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------ SEND MAIL API ERROR-------' + error, objSessionLogInfo);
                                                    sendResponse(error, null);
                                                } else {
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + JSON.stringify(responseBody), objSessionLogInfo);
                                                    reqInstanceHelper.PrintInfo(serviceName, '------------Mail has been sent for -------' + arrTrnobj.npsst_id, objSessionLogInfo);
                                                    nextobjctfunc();
                                                }
                                            });

                                        } catch (error) {
                                            reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                            sendResponse(error, null);
                                        }
                                    }, function () {
                                        reqInstanceHelper.PrintInfo(serviceName, '----------Mail has been sent -------', objSessionLogInfo);
                                        objresponse.status = 'SUCCESS';
                                        sendResponse(null, objresponse)
                                    })

                                } else {
                                    reqInstanceHelper.PrintInfo(serviceName, '----------No URL found-------', objSessionLogInfo);
                                    objresponse.status = 'FAILURE';
                                    sendResponse(null, objresponse)
                                }

                            }


                        } else {
                            reqInstanceHelper.PrintInfo(serviceName, '----------No tran found-------', objSessionLogInfo);
                            objresponse.status = 'FAILURE';
                            sendResponse(null, objresponse)
                        }



                        //Execute Query for common
                        function ExecuteQuery(query, callback) {
                            return new Promise((resolve, reject) => {
                                reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                                    try {
                                        if (error) {
                                            sendResponse(error)
                                        } else {
                                            resolve("SUCCESS");

                                        }
                                    } catch (error) {
                                        sendResponse(error)
                                    }
                                });
                            })

                        }


                        function updateEligibleTran(contn) {
                            return new Promise((resolve, reject) => {
                                let updtQry = `update npss_transactions set  eos_mail_status = 'PSMailInitiated' ,MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsst_id in ${contn}`
                                let callUpdate = async () => {
                                    let res = await ExecuteQuery(updtQry)

                                    if (res == 'SUCCESS') {
                                        reqInstanceHelper.PrintInfo(serviceName, '----------PSMailInitiated tran update success-------', objSessionLogInfo);
                                        resolve('SUCCESS')
                                    } else {
                                        reqInstanceHelper.PrintInfo(serviceName, '----------PSMailInitiated tran update Failure-------', objSessionLogInfo);
                                        objresponse.status = 'FAILURE';
                                        sendResponse(null, objresponse)
                                    }
                                }
                                callUpdate();

                            })
                        }

                        function ExecuteQuery1(query, callback) {
                            return new Promise((resolve, reject) => {
                                reqTranDBInstance.ExecuteSQLQuery(mTranConn, query, objSessionLogInfo, function (result, error) {
                                    try {
                                        if (error) {
                                            sendResponse(error)
                                        } else {
                                            if (result.rows.length > 0) {
                                                resolve(result.rows);
                                            } else {
                                                resolve([]);
                                            }
                                        }
                                    } catch (error) {
                                        sendResponse(error)
                                    }
                                });
                            })

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
