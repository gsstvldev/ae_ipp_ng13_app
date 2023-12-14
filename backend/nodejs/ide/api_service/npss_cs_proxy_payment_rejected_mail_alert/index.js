var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {

    /*  Created By :sIVA hARISH
    Created Date :22/02/2023
    Modified By : Siva Harish
    Modified Date : 17/05/2023
    Modified By : Subramanian
    Modified Date : 14/12/2023
    Reason:For Adding all the columns from npss_tran and core_nc_cbs_accts table to mail by using left join
   }
    */
   var serviceName = 'NPSS (CS) Proxy Payment Rejected Mail Alert';

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
           objSessionLogInfo.HANDLER_CODE = 'NPSS (CS) Proxy Payment Rejected Mail Alert';
           objSessionLogInfo.ACTION = 'ACTION';
           objSessionLogInfo.PROCESS = 'NPSS (CS) Proxy Payment Rejected Mail Alert';
           // Get DB Connection 
           reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
               mTranConn = pSession; //  assign connection     
               reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                   try {
                       var PRCT_ID = prct_id

                       var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and  need_sync = 'Y'`
                       ExecuteQuery1(takeurl, function (arrUrl) {
                           if (arrUrl.length == 0) {

                               objresponse.status = 'FAILURE';
                               objresponse.msg = 'No URL found';
                               sendResponse(null, objresponse)
                           }
                           else {
                               var status = params.STATUS
                               var arrstatus
                               if (Array.isArray(status)) {
                                   arrstatus = status.map(function (eachTran) {
                                       return eachTran.toString();
                                   });
                               } else {
                                   arrstatus = [status.toString()];
                               }
                               var Tempdata = '(' + "'" + arrstatus.toString().split(',').join("','") + "'" + ')';

                               var Takedata = `select * from npss_trn_process_log where TO_DATE(TO_CHAR(CREATED_DATE, 'DD-MON-YY'),'DD-MON-YY') = CURRENT_DATE  and status in ${Tempdata}`
                               var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN' and  need_sync = 'Y' `
                               ExecuteQuery1(Takeorg, function (arrorg) {
                                   var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_GROUP' and  need_sync = 'Y'`
                                   ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                       var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_CC' and  need_sync = 'Y'`
                                       ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                           var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_CATEGORY'  and  need_sync = 'Y'`
                                           ExecuteQuery1(TakecomCat, function (arrCatgory) {
                                               ExecuteQuery1(Takedata, function (arrData) {
                                                   if (arrData.length > 0) {
                                                       var TakeCometo = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name='COMM_TO'  and  need_sync = 'Y'`
                                                       ExecuteQuery1(TakeCometo, function (arrCometo) {
                                                          
                                                               reqAsync.forEachOfSeries(arrData, function (arrDataobj, i, nextobjctfunc) {    
                                                                   var TakenpsstrRefno = `select npsstrrd_refno from npss_trn_process_log where process_name = 'SctInitiation' and uetr = '${arrDataobj.uetr}' and coalesce(additional_info,'') <>'Mail_Sent'`
                                                                   ExecuteQuery1(TakenpsstrRefno, function (arrnpstrefno) {
                                                                       if (arrnpstrefno.length > 0) {
//                                                                           var TaketranInf = `select * from npss_transactions where uetr = '${arrDataobj.uetr}'`
var TaketranInf = `select nt.*,fn_pcidss_decrypt(nt.cr_acct_identification,$PCIDSS_KEY) as tran_cr_acct_identification,
                                                                           nt.created_Date as tran_created_date,nt.modified_date as tran_modified_date,nt.status as tran_status,
                                                                           nt.issuer_type_code as tran_issuer_type_code,cnca.created_Date as acct_created_date,cnca.modified_date
                                                                           as acct_modified_date,cnca.issuer_type_code as acct_issuer_type_code,cnca.* from
                                                                           npss_transactions nt left join core_nc_cbs_accounts cnca
                                                                           on cnca.alternate_account_id =nt.dbtr_iban where nt.uetr='${arrDataobj.uetr}'`
                                                                           ExecuteQuery1(TaketranInf, function (arrAllData) {
                                                                               if (arrAllData.length > 0) {
                                                                                   try {
                                                                                       var frtodata = [{
                                                                                           TO: arrCometo.length > 0 ? arrCometo[0].param_value : '',
                                                                                           CC: arrcomcc.length > 0 ? arrcomcc[0].param_value : '',
                                                                                           BCC: '',
                                                                                           ORIGIN: arrorg.length > 0? arrorg[0].param_value : '',
                                                                                           COMM_GROUP: arrcomgp.length > 0 ? arrcomgp[0].param_value : '',
                                                                                           TRANSACTIONID: arrnpstrefno[0].npsstrrd_refno || '',
                                                                                           ENDTOENDID: arrAllData[0].payment_endtoend_id || '',
                                                                                           PAYERACCOUNTNUMBER: arrAllData[0].dbtr_iban || '',
                                                                                           AMOUNT: arrAllData[0].intrbk_sttlm_amnt || '',
                                                                                           DATE: arrAllData[0].value_date || '',
                                                                                           BENEACCOUNTNUMBER: arrAllData[0].cdtr_iban || '',
                                                                                           BENENAME: arrAllData[0].cdtr_acct_name || '',
                                                                                           BENEBANKNAME: arrAllData[0].cr_sort_code || '',
                                                                                           TRAN_NPSSTID: arrAllData[0].npsst_id?arrAllData[0].npsst_id:"",
                                                                           TRAN_PRODUCTCODE: arrAllData[0].product_code?arrAllData[0].product_code:"",
                                                                           TRAN_VALUEDATE: arrAllData[0].value_date?arrAllData[0].value_date:""
                                                                           ,
                                                                           TRAN_DBTRACCTNO: arrAllData[0].dbtr_acct_no?arrAllData[0].dbtr_acct_no:""
                                                                           ,
                                                                           TRAN_DBTRACCTNAME: arrAllData[0].dbtr_acct_name?arrAllData[0].dbtr_acct_name:""
                                                                           ,
                                                                           TRAN_DBTRPHONENO: arrAllData[0].dbtr_phone_no?arrAllData[0].dbtr_phone_no:""
                                                                           ,
                                                                           TRAN_DBTREMAILID: arrAllData[0].dbtr_email_id?arrAllData[0].dbtr_email_id:""
                                                                           ,
                                                                           TRAN_DBTRDOCUMENTID: arrAllData[0].dbtr_document_id?arrAllData[0].dbtr_document_id:"",

                                                                           TRAN_DBTRIBAN: arrAllData[0].dbtr_iban?arrAllData[0].dbtr_iban:""
                                                                           ,
                                                                           TRAN_BASECURRENCY: arrAllData[0].base_currency?arrAllData[0].base_currency:""
                                                                           ,
                                                                           TRAN_BASEAMOUNT: arrAllData[0].base_amount?arrAllData[0].base_amount:""
                                                                           ,
                                                                           TRAN_CDTRACCTNO: arrAllData[0].cdtr_acct_no?arrAllData[0].cdtr_acct_no:""
                                                                           ,
                                                                           TRAN_CDTRACCTNAME: arrAllData[0].cdtr_acct_name?arrAllData[0].cdtr_acct_name:""
                                                                           ,
                                                                           TRAN_CDTRPHONENO: arrAllData[0].cdtr_phone_no?arrAllData[0].cdtr_phone_no:""
                                                                           ,
                                                                           TRAN_CDTREMAILID: arrAllData[0].cdtr_email_id?arrAllData[0].cdtr_email_id:""
                                                                           ,
                                                                           TRAN_CDTRDOCUMENTID: arrAllData[0].cdtr_document_id?arrAllData[0].cdtr_document_id:""
                                                                           ,
                                                                           TRAN_CDTRIBAN: arrAllData[0].cdtr_iban?arrAllData[0].cdtr_iban:""
                                                                           ,
                                                                           TRAN_DRSORTCODE: arrAllData[0].dr_sort_code?arrAllData[0].dr_sort_code:""
                                                                           ,
                                                                           TRAN_CRSORTCODE: arrAllData[0].cr_sort_code?arrAllData[0].cr_sort_code:""
                                                                           ,
                                                                           TRAN_INTRBKSTTLMCUR: arrAllData[0].intrbk_sttlm_cur?arrAllData[0].intrbk_sttlm_cur:""
                                                                           ,
                                                                           TRAN_INTRBKSTTLMAMNT: arrAllData[0].intrbk_sttlm_amnt?arrAllData[0].intrbk_sttlm_amnt:""
                                                                           ,
                                                                           TRAN_RATECODE: arrAllData[0].rate_code?arrAllData[0].rate_code:""
                                                                           ,
                                                                           TRAN_EXCHANGERATE: arrAllData[0].exchange_rate?arrAllData[0].exchange_rate:""
                                                                           ,
                                                                           TRAN_CATEGORYPURPOSE: arrAllData[0].category_purpose?arrAllData[0].category_purpose:""
                                                                           ,
                                                                           TRAN_HDRMSGID: arrAllData[0].hdr_msg_id?arrAllData[0].hdr_msg_id:""
                                                                           ,
                                                                           TRAN_HDRCREATEDDATE: arrAllData[0].hdr_created_date?arrAllData[0].hdr_created_date:""
                                                                           ,
                                                                           TRAN_HDRTOTALRECORDS: arrAllData[0].hdr_total_records?arrAllData[0].hdr_total_records:""
                                                                           ,
                                                                           TRAN_HDRTOTALAMOUNT: arrAllData[0].hdr_total_amount?arrAllData[0].hdr_total_amount:""
                                                                           ,
                                                                           TRAN_HDRSETTLEMENTDATE: arrAllData[0].hdr_settlement_date?arrAllData[0].hdr_settlement_date:""
                                                                           ,
                                                                           TRAN_HDRSETTLEMENTMETHOD: arrAllData[0].hdr_settlement_method?arrAllData[0].hdr_settlement_method:""
                                                                           ,
                                                                           TRAN_HDRCLEARINGSYSTEM: arrAllData[0].hdr_clearing_system?arrAllData[0].hdr_clearing_system:""
                                                                           ,
                                                                           TRAN_PAYMENTENDTOENDID: arrAllData[0].payment_endtoend_id?arrAllData[0].payment_endtoend_id:""
                                                                           ,
                                                                           TRAN_INSTRUMENTTYPE: arrAllData[0].instrument_type?arrAllData[0].instrument_type:""
                                                                           ,
                                                                           TRAN_CHARGEBEARER: arrAllData[0].charge_bearer?arrAllData[0].charge_bearer:""
                                                                           ,
                                                                           TRAN_UETR: arrAllData[0].uetr?arrAllData[0].uetr:""
                                                                           ,
                                                                           TRAN_MESSAGEDATA: arrAllData[0].message_data?arrAllData[0].message_data:""
                                                                           ,
                                                                           TRAN_EXHFID: arrAllData[0].exhf_id?arrAllData[0].exhf_id:""
                                                                           ,
                                                                           TRAN_PROCESSTYPE: arrAllData[0].process_type?arrAllData[0].process_type:""
                                                                           ,
                                                                           TRAN_DBTRCUSTTYPE: arrAllData[0].dbtr_cust_type?arrAllData[0].dbtr_cust_type:""
                                                                           ,
                                                                           TRAN_CHANNELID: arrAllData[0].channel_id?arrAllData[0].channel_id:""
                                                                           ,
                                                                           TRAN_CHANNELREFNO: arrAllData[0].channel_refno?arrAllData[0].channel_refno:""
                                                                           ,
                                                                           TRAN_CHANNELUSERID: arrAllData[0].channel_userid?arrAllData[0].channel_userid:""
                                                                           ,
                                                                           TRAN_CHANNELPRODUCT: arrAllData[0].channel_product?arrAllData[0].channel_product:""
                                                                           ,
                                                                           TRAN_CHANNELSUBPRODUCT: arrAllData[0].channel_sub_product?arrAllData[0].channel_sub_product:""
                                                                           ,
                                                                           TRAN_CHANNELTRANCODE: arrAllData[0].channel_tran_code?arrAllData[0].channel_tran_code:""
                                                                           ,
                                                                           /* TRAN_CREATEDBY:arrAllData[0]
                                                                           TRAN_CREATEDBYNAME:arrAllData[0] */
                                                                           TRAN_CREATEDDATE: arrAllData[0].tran_created_date?arrAllData[0].tran_created_date:"",
                                                                           /* TRAN_MODIFIEDBY:arrAllData[0]
                                                                           TRAN_MODIFIEDBYNAME:arrAllData[0] 
                                                                           TRAN_MODIFIEDDATE: arrAllData[0].tran_modified_date,
                                                                           TRAN_SYSTEMID: arrAllData[0].system_id
                                                                           ,
                                                                           TRAN_SYSTEMNAME: arrAllData[0].system_name
                                                                           ,

                                                                           /* TRAN_CREATEDBYSTSID:arrAllData[0]
                                                                           TRAN_MODIFIEDBYSTSID:arrAllData[0] */
                                                                           TRAN_STATUS: arrAllData[0].tran_status?arrAllData[0].tran_status:"",
                                                                           TRAN_PROCESSSTATUS: arrAllData[0].process_status?arrAllData[0].process_status:""
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
                                                                           TRAN_TRANREFID: arrAllData[0].tran_ref_id?arrAllData[0].tran_ref_id:""
                                                                           ,
                                                                           TRAN_INSTRUCTIONID: arrAllData[0].instruction_id?arrAllData[0].instruction_id:""
                                                                           ,
                                                                           TRAN_CATEGORYPURPOSEPRTY: arrAllData[0].category_purpose_prty?arrAllData[0].category_purpose_prty:""
                                                                           ,
                                                                           TRAN_EXTORGIDCODE: arrAllData[0].ext_org_id_code?arrAllData[0].ext_org_id_code:""
                                                                           ,
                                                                           TRAN_ISSUERTYPECODE: arrAllData[0].tran_issuer_type_code?arrAllData[0].tran_issuer_type_code:"",
                                                                           TRAN_DBTRBIRTHDATE: arrAllData[0].dbtr_birth_date?arrAllData[0].dbtr_birth_date:""
                                                                           ,
                                                                           TRAN_DBTRCITYBIRTH: arrAllData[0].dbtr_city_birth?arrAllData[0].dbtr_city_birth:""
                                                                           ,
                                                                           TRAN_DBTRCOUNTRY: arrAllData[0].dbtr_country?arrAllData[0].dbtr_country:""
                                                                           ,
                                                                           TRAN_CRACCTIDENTIFICATION: arrAllData[0].cr_acct_identification?arrAllData[0].cr_acct_identification:""
                                                                           ,
                                                                           TRAN_CRACCTIDCODE: arrAllData[0].cr_acct_id_code?arrAllData[0].cr_acct_id_code:""
                                                                           ,
                                                                           TRAN_REMITTANCEINFO: arrAllData[0].remittance_info?arrAllData[0].remittance_info:""
                                                                           ,
                                                                           TRAN_INWARDFILENAME: arrAllData[0].inward_file_name?arrAllData[0].inward_file_name:""
                                                                           ,
                                                                           TRAN_CLRSYSREF: arrAllData[0].clrsysref?arrAllData[0].clrsysref:""
                                                                           ,
                                                                           TRAN_DEPARTMENTCODE: arrAllData[0].department_code?arrAllData[0].department_code:""
                                                                           ,
                                                                           TRAN_CBSREFNO: arrAllData[0].cbs_ref_no?arrAllData[0].cbs_ref_no:""
                                                                           ,
                                                                           TRAN_DBTROTHERISSUER: arrAllData[0].dbtr_other_issuer?arrAllData[0].dbtr_other_issuer:""
                                                                           ,
                                                                           TRAN_ACCOUNTCURRENCY: arrAllData[0].account_currency?arrAllData[0].account_currency:""
                                                                           ,
                                                                           TRAN_CBSPOSTINGFLAG: arrAllData[0].cbs_posting_flag?arrAllData[0].cbs_posting_flag:""
                                                                           ,
                                                                           TRAN_PROCESSINGSYSTEM: arrAllData[0].processing_system?arrAllData[0].processing_system:""
                                                                           ,
                                                                           TRAN_REVERSALAMOUNT: arrAllData[0].reversal_amount?arrAllData[0].reversal_amount:""
                                                                           ,
                                                                           TRAN_CHARGEAMOUNT: arrAllData[0].charge_amount?arrAllData[0].charge_amount:""
                                                                           ,
                                                                           TRAN_PROCESSGROUP: arrAllData[0].process_group?arrAllData[0].process_group:"",

                                                                           TRAN_CUSTSPLRATEFLAG: arrAllData[0].cust_splrate_flag?arrAllData[0].cust_splrate_flag:""
                                                                           ,
                                                                           TRAN_CHECKER: arrAllData[0].checker?arrAllData[0].checker:""
                                                                           ,
                                                                           TRAN_MAKER: arrAllData[0].maker?arrAllData[0].maker:""
                                                                           ,
                                                                           TRAN_SELLRATE: arrAllData[0].sell_rate?arrAllData[0].sell_rate:""
                                                                           ,
                                                                           TRAN_SELLMARGIN: arrAllData[0].sell_margin?arrAllData[0].sell_margin:""
                                                                           ,
                                                                           TRAN_ORGPAYENDTOENDID: arrAllData[0].org_pay_endtoend_id?arrAllData[0].org_pay_endtoend_id:""
                                                                           ,
                                                                           TRAN_BUYRATE: arrAllData[0].buy_rate?arrAllData[0].buy_rate:""
                                                                           ,
                                                                           TRAN_AMOUNTCREDITEDLOCCUR: arrAllData[0].amount_credited_loc_cur?arrAllData[0].amount_credited_loc_cur:""
                                                                           ,
                                                                           TRAN_BUYMARGIN: arrAllData[0].buy_margin?arrAllData[0].buy_margin:""
                                                                           ,
                                                                           TRAN_TRANCHARGE: arrAllData[0].tran_charge?arrAllData[0].tran_charge:""
                                                                           ,
                                                                           TRAN_PROCESSGROUP: arrAllData[0].process_group?arrAllData[0].process_group:""
                                                                           ,
                                                                           TRAN_CHARGEAMOUNT: arrAllData[0].charge_amount?arrAllData[0].charge_amount:"",
                                                                           ACCT_ACCOUNTNUMBER: arrAllData[0].account_number?arrAllData[0].account_number:""
                                                                           ,
                                                                           ACCT_ALTERNATEACCOUNTID: arrAllData[0].alternate_account_id?arrAllData[0].alternate_account_id:""
                                                                           ,
                                                                           ACCT_ACCOUNTNAME: arrAllData[0].account_name?arrAllData[0].account_name:""
                                                                           ,
                                                                           ACCT_POSTINGRESTRICTIONCODE: arrAllData[0].posting_restriction_code?arrAllData[0].posting_restriction_code:""
                                                                           ,
                                                                           ACCT_INACTIVEMARKER: arrAllData[0].inactive_marker?arrAllData[0].inactive_marker:""
                                                                           ,
                                                                           ACCT_CATEGORYCODE: arrAllData[0].category_code?arrAllData[0].category_code:""
                                                                           ,
                                                                           ACCT_CATEGORYDESCRIPTION: arrAllData[0].category_description?arrAllData[0].category_description:""
                                                                           ,
                                                                           ACCT_CURRENCY: arrAllData[0].currency?arrAllData[0].currency:""
                                                                           ,
                                                                           ACCT_CUSTOMERID: arrAllData[0].customer_id?arrAllData[0].customer_id:"",
                                                                           ACCT_ACCOUNTTITLE2: arrAllData[0].account_title_2?arrAllData[0].account_title_2:""
                                                                           ,
                                                                           ACCT_COMPANYCODE: arrAllData[0].company_code?arrAllData[0].company_code:""
                                                                           ,
                                                                           ACCT_EMIRATESCODE: arrAllData[0].emirates_code?arrAllData[0].emirates_code:""
                                                                           ,
                                                                           ACCT_COUNTRYOFBIRTH: arrAllData[0].countryofbirth?arrAllData[0].countryofbirth:"",
                                                                           ACCT_LETTEROFUNDERTAKING: arrAllData[0].letter_of_undertaking?arrAllData[0].letter_of_undertaking:""
                                                                           ,
                                                                           ACCT_CUSTOMERPOSTINGRESTRICTIONCODE: arrAllData[0].customer_posting_restriction_code?arrAllData[0].customer_posting_restriction_code:""
                                                                           ,
                                                                           ACCT_TARGETCODE: arrAllData[0].target_code?arrAllData[0].target_code:"",
                                                                           ACCT_SECTORCODE: arrAllData[0].sector_code?arrAllData[0].sector_code:""
                                                                           ,
                                                                           ACCT_RESIDENTFLAG: arrAllData[0].resident_flag?arrAllData[0].resident_flag:""
                                                                           ,
                                                                           ACCT_NATIONALITYCOUNTRYCODE: arrAllData[0].nationality_country_code?arrAllData[0].nationality_country_code:""
                                                                           ,
                                                                           ACCT_LEGALID: arrAllData[0].legal_id?arrAllData[0].legal_id:""
                                                                           ,
                                                                           ACCT_NATIONALID: arrAllData[0].national_id?arrAllData[0].national_id:""
                                                                           ,
                                                                           ACCT_INDUSTRY: arrAllData[0].industry?arrAllData[0].industry:""
                                                                           ,
                                                                           ACCT_COMMUNICATIONTYPE: arrAllData[0].communication_type?arrAllData[0].communication_type:""
                                                                           ,
                                                                           ACCT_CUSTOMERMOBILENUMBER: arrAllData[0].customer_mobile_number?arrAllData[0].customer_mobile_number:""
                                                                           ,
                                                                           ACCT_ACCOUNTOFFICER: arrAllData[0].account_officer?arrAllData[0].account_officer:""
                                                                           ,
                                                                           ACCT_CURRRATESEGMENT: arrAllData[0].curr_rate_segment?arrAllData[0].curr_rate_segment:""
                                                                           ,
                                                                           ACCT_CUSTOMEREMAILID: arrAllData[0].customer_email_id?arrAllData[0].customer_email_id:""
                                                                           ,
                                                                           ACCT_TRADELICENSEFLAG: arrAllData[0].trade_license_flag?arrAllData[0].trade_license_flag:""
                                                                           ,
                                                                           ACCT_TRADELICENSENUMBER: arrAllData[0].trade_license_number?arrAllData[0].trade_license_number:""
                                                                           ,
                                                                           ACCT_COMMERCIALREGISTRATIONFLAG: arrAllData[0].commercial_registration_flag?arrAllData[0].commercial_registration_flag:""
                                                                           ,
                                                                           ACCT_CHAMBERCERTIFICATENUMBER: arrAllData[0].chamber_certificate_number?arrAllData[0].chamber_certificate_number:""
                                                                           ,
                                                                           ACCT_AMIRIDECREEFLAG: arrAllData[0].amiri_decree_flag?arrAllData[0].amiri_decree_flag:""
                                                                           ,
                                                                           ACCT_ALTERNATEACCOUNTTYPE: arrAllData[0].alternate_account_type?arrAllData[0].alternate_account_type:""
                                                                           ,
                                                                           ACCT_ACCOUNTPOSTRINGTYPEDESCRIPTION: arrAllData[0].account_postring_type_description?arrAllData[0].account_postring_type_description:""
                                                                           ,
                                                                           ACCT_ACCOUNTPOSTINGRESTRICTTYPE: arrAllData[0].account_posting_restrict_type?arrAllData[0].account_posting_restrict_type:""
                                                                           ,
                                                                           ACCT_CUSTOMERPOSTINGRESTRICTIONDESCRIPTION: arrAllData[0].customer_posting_restriction_description?arrAllData[0].customer_posting_restriction_description:""
                                                                           ,
                                                                           ACCT_CUSTOMERPOSTINGRESTRICTTYPE: arrAllData[0].customer_posting_restrict_type?arrAllData[0].customer_posting_restrict_type:""
                                                                           ,
                                                                           ACCT_VIRTUALACCOUNTNAME: arrAllData[0].virtual_account_name?arrAllData[0].virtual_account_name:""
                                                                           ,
                                                                           ACCT_VACURRENCY: arrAllData[0].va_currency?arrAllData[0].va_currency:""
                                                                           ,
                                                                           ACCT_VATYPE: arrAllData[0].va_type?arrAllData[0].va_type:""
                                                                           ,
                                                                           ACCT_VASTATUS: arrAllData[0].va_status?arrAllData[0].va_status:""
                                                                           ,
                                                                           ACCT_BIRTHDATE: arrAllData[0].birthdate?arrAllData[0].birthdate:""
                                                                           ,
                                                                           ACCT_PRODUCTIDENTIFIER: arrAllData[0].productidentifier?arrAllData[0].productidentifier:""
                                                                           ,
                                                                           ACCT_ISSUERTYPECODE: arrAllData[0].acct_issuer_type_code?arrAllData[0].acct_issuer_type_code:"",
                                                                           ACCT_ECONOMICACTIVITYCODE: arrAllData[0].economic_activity_code?arrAllData[0].economic_activity_code:""
                                                                           ,
                                                                           ACCT_CITYOFBIRTH: arrAllData[0].cityofbirth?arrAllData[0].cityofbirth:""
                                                                           ,
                                                                           ACCT_ACCOUNTCLOSED: arrAllData[0].account_closed?arrAllData[0].account_closed:""
                                                                           ,
                                                                           ACCT_CNCCAID: arrAllData[0].cncca_id?arrAllData[0].cncca_id:""
                                                                           ,
                                                                           ACCT_CREATEDDATE: arrAllData[0].acct_created_date?arrAllData[0].acct_created_date:"",
                                                                           ACCT_MODIFIEDDATE: arrAllData[0].acct_modified_date?arrAllData[0].acct_modified_date:"",
                                                                           ACCT_VAFLAG: arrAllData[0].va_flag?arrAllData[0].va_flag:""
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
                                                                                               reqInstanceHelper.PrintInfo(serviceName, '------------Mail has been sent for -------' + arrDataobj.uetr, objSessionLogInfo);
                                                                                               if (responseBody.service_status== 'SUCCESS') {
                                                                                                   var UpdateTrnTble = `Update npss_trn_process_log set additional_info = 'Mail_Sent' ,MODIFIED_BY = '${params.CREATED_BY}',MODIFIED_DATE = '${reqDateFormatter.GetTenantCurrentDateTime(headers, objSessionLogInfo)}',MODIFIED_BY_NAME ='${params.CREATED_BY_NAME}',PRCT_ID ='${PRCT_ID}', MODIFIED_CLIENTIP = '${objSessionLogInfo.CLIENTIP}', MODIFIED_TZ = '${objSessionLogInfo.CLIENTTZ}', MODIFIED_TZ_OFFSET = '${objSessionLogInfo.CLIENTTZ_OFFSET}', MODIFIED_BY_SESSIONID = '${objSessionLogInfo.SESSION_ID}', MODIFIED_DATE_UTC = '${reqDateFormatter.GetCurrentDateInUTC(headers, objSessionLogInfo)}' where npsstpl_id = '${arrDataobj.npsstpl_id}'`
                                                                                                   ExecuteQuery(UpdateTrnTble, function (arrUpdTranTbl) {
                                                                                                       if (arrUpdTranTbl == 'SUCCESS') {
                                                                                                           nextobjctfunc()
                                                                                                       }
                                                                                                       else {
                                                                                                           nextobjctfunc()
                                                                                                       }
                                                                                                   })
                                                                                               } else {
                                                                                                   nextobjctfunc()
                                                                                               }



                                                                                           }
                                                                                       });

                                                                                   } catch (error) {
                                                                                       reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                                       sendResponse(error, null);
                                                                                   }

                                                                               } else {
                                                                                   reqInstanceHelper.PrintInfo(serviceName, '------------Tran Table details not found for uetr-------' + arrDataobj.uetr, objSessionLogInfo);
                                                                                   nextobjctfunc()
                                                                               }

                                                                           })




                                                                       } else {
                                                                           reqInstanceHelper.PrintInfo(serviceName, '------------nO DATE FOUND IN TRAN TABLE-------', objSessionLogInfo);
                                                                           nextobjctfunc()
                                                                       }

                                                                   })


                                                               }, function () {
                                                                   objresponse.status = 'SUCCESS';
                                                                   sendResponse(null, objresponse)
                                                               })

                                                          
                                                       })

                                                   } else {
                                                       reqInstanceHelper.PrintInfo(serviceName, '-----------No data Found in Tran Table------', objSessionLogInfo);
                                                   }

                                               })



                                           })






                                       })

                                   })
                               })

                           }



                       })




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
