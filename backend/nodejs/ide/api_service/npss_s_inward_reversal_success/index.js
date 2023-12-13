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
                 as tran_status,nt.issuer_type_code as tran_issuer_type_code,nt.* ,ac.created_Date as acct_created_date,ac.modified_date as acct_modified_date,nt.status
                 as acct_status,ac.issuer_type_code as acct_issuer_type_code,ac.* from npss_trn_process_log l left join npss_transactions nt on l.uetr=nt.uetr left join core_nc_cbs_accounts ac on ac.alternate_account_id in(nt.cdtr_iban,cr_acct_identification) where l.status ='${params.status}'and nt.process_type = 'IP' and coalesce(l.additional_info,'') <>'Mail_Triggered'`
                   var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL' and need_sync='Y'`

                   ExecuteQuery1(takeurl, function (arrUrl) {
                       //   for(var i=0;i<=arrCount.length;arrCount++){
                       if (arrUrl.length == 0) {

                           objresponse.status = 'FAILURE';
                           objresponse.msg = 'No URL found';
                           sendResponse(null, objresponse)
                       } else {
                           //ExecuteQuery1(takeAllData, function (arrAllData) {
                               //   for(var i=0;i<=arrCount.length;arrCount++){
                              /* if (arrAllData.length == 0) {
                                   objresponse.status = 'FAILURE';
                                   objresponse.msg = 'No Data found';
                                   sendResponse(null, objresponse)
                               }*/
                              // else {

                                   var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN' and need_sync='Y'`
                                   ExecuteQuery1(Takeorg, function (arrorg) {
                                       var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_GROUP' and need_sync='Y'`
                                       ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                           var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COMM_CC' and need_sync='Y'`
                                           ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                               var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'COM_CATEGORY' and need_sync='Y'`
                                               ExecuteQuery1(TakecomCat, function (arrCatgory) {
                                                   ExecuteQuery1(takeAllData, function (arrAllData) {
                                                       if (arrAllData.length > 0) {
                                                           reqAsync.forEachOfSeries(arrAllData, function (arrTrnobj, i, nextobjctfunc) {

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
                                                                           TRAN_NPSSTID: arrAllData[i].npsst_id?arrAllData[i].npsst_id:"",
                                                                           TRAN_PRODUCTCODE: arrAllData[i].product_code?arrAllData[i].product_code:"",
                                                                           TRAN_VALUEDATE: arrAllData[i].value_date?arrAllData[i].value_date:""
                                                                           ,
                                                                           TRAN_DBTRACCTNO: arrAllData[i].dbtr_acct_no?arrAllData[i].dbtr_acct_no:""
                                                                           ,
                                                                           TRAN_DBTRACCTNAME: arrAllData[i].dbtr_acct_name?arrAllData[i].dbtr_acct_name:""
                                                                           ,
                                                                           TRAN_DBTRPHONENO: arrAllData[i].dbtr_phone_no?arrAllData[i].dbtr_phone_no:""
                                                                           ,
                                                                           TRAN_DBTREMAILID: arrAllData[i].dbtr_email_id?arrAllData[i].dbtr_email_id:""
                                                                           ,
                                                                           TRAN_DBTRDOCUMENTID: arrAllData[i].dbtr_document_id?arrAllData[i].dbtr_document_id:"",

                                                                           TRAN_DBTRIBAN: arrAllData[i].dbtr_iban?arrAllData[i].dbtr_iban:""
                                                                           ,
                                                                           TRAN_BASECURRENCY: arrAllData[i].base_currency?arrAllData[i].base_currency:""
                                                                           ,
                                                                           TRAN_BASEAMOUNT: arrAllData[i].base_amount?arrAllData[i].base_amount:""
                                                                           ,
                                                                           TRAN_CDTRACCTNO: arrAllData[i].cdtr_acct_no?arrAllData[i].cdtr_acct_no:""
                                                                           ,
                                                                           TRAN_CDTRACCTNAME: arrAllData[i].cdtr_acct_name?arrAllData[i].cdtr_acct_name:""
                                                                           ,
                                                                           TRAN_CDTRPHONENO: arrAllData[i].cdtr_phone_no?arrAllData[i].cdtr_phone_no:""
                                                                           ,
                                                                           TRAN_CDTREMAILID: arrAllData[i].cdtr_email_id?arrAllData[i].cdtr_email_id:""
                                                                           ,
                                                                           TRAN_CDTRDOCUMENTID: arrAllData[i].cdtr_document_id?arrAllData[i].cdtr_document_id:""
                                                                           ,
                                                                           TRAN_CDTRIBAN: arrAllData[i].cdtr_iban?arrAllData[i].cdtr_iban:""
                                                                           ,
                                                                           TRAN_DRSORTCODE: arrAllData[i].dr_sort_code?arrAllData[i].dr_sort_code:""
                                                                           ,
                                                                           TRAN_CRSORTCODE: arrAllData[i].cr_sort_code?arrAllData[i].cr_sort_code:""
                                                                           ,
                                                                           TRAN_INTRBKSTTLMCUR: arrAllData[i].intrbk_sttlm_cur?arrAllData[i].intrbk_sttlm_cur:""
                                                                           ,
                                                                           TRAN_INTRBKSTTLMAMNT: arrAllData[i].intrbk_sttlm_amnt?arrAllData[i].intrbk_sttlm_amnt:""
                                                                           ,
                                                                           TRAN_RATECODE: arrAllData[i].rate_code?arrAllData[i].rate_code:""
                                                                           ,
                                                                           TRAN_EXCHANGERATE: arrAllData[i].exchange_rate?arrAllData[i].exchange_rate:""
                                                                           ,
                                                                           TRAN_CATEGORYPURPOSE: arrAllData[i].category_purpose?arrAllData[i].category_purpose:""
                                                                           ,
                                                                           TRAN_HDRMSGID: arrAllData[i].hdr_msg_id?arrAllData[i].hdr_msg_id:""
                                                                           ,
                                                                           TRAN_HDRCREATEDDATE: arrAllData[i].hdr_created_date?arrAllData[i].hdr_created_date:""
                                                                           ,
                                                                           TRAN_HDRTOTALRECORDS: arrAllData[i].hdr_total_records?arrAllData[i].hdr_total_records:""
                                                                           ,
                                                                           TRAN_HDRTOTALAMOUNT: arrAllData[i].hdr_total_amount?arrAllData[i].hdr_total_amount:""
                                                                           ,
                                                                           TRAN_HDRSETTLEMENTDATE: arrAllData[i].hdr_settlement_date?arrAllData[i].hdr_settlement_date:""
                                                                           ,
                                                                           TRAN_HDRSETTLEMENTMETHOD: arrAllData[i].hdr_settlement_method?arrAllData[i].hdr_settlement_method:""
                                                                           ,
                                                                           TRAN_HDRCLEARINGSYSTEM: arrAllData[i].hdr_clearing_system?arrAllData[i].hdr_clearing_system:""
                                                                           ,
                                                                           TRAN_PAYMENTENDTOENDID: arrAllData[i].payment_endtoend_id?arrAllData[i].payment_endtoend_id:""
                                                                           ,
                                                                           TRAN_INSTRUMENTTYPE: arrAllData[i].instrument_type?arrAllData[i].instrument_type:""
                                                                           ,
                                                                           TRAN_CHARGEBEARER: arrAllData[i].charge_bearer?arrAllData[i].charge_bearer:""
                                                                           ,
                                                                           TRAN_UETR: arrAllData[i].uetr?arrAllData[i].uetr:""
                                                                           ,
                                                                           TRAN_MESSAGEDATA: arrAllData[i].message_data?arrAllData[i].message_data:""
                                                                           ,
                                                                           TRAN_EXHFID: arrAllData[i].exhf_id?arrAllData[i].exhf_id:""
                                                                           ,
                                                                           TRAN_PROCESSTYPE: arrAllData[i].process_type?arrAllData[i].process_type:""
                                                                           ,
                                                                           TRAN_DBTRCUSTTYPE: arrAllData[i].dbtr_cust_type?arrAllData[i].dbtr_cust_type:""
                                                                           ,
                                                                           TRAN_CHANNELID: arrAllData[i].channel_id?arrAllData[i].channel_id:""
                                                                           ,
                                                                           TRAN_CHANNELREFNO: arrAllData[i].channel_refno?arrAllData[i].channel_refno:""
                                                                           ,
                                                                           TRAN_CHANNELUSERID: arrAllData[i].channel_userid?arrAllData[i].channel_userid:""
                                                                           ,
                                                                           TRAN_CHANNELPRODUCT: arrAllData[i].channel_product?arrAllData[i].channel_product:""
                                                                           ,
                                                                           TRAN_CHANNELSUBPRODUCT: arrAllData[i].channel_sub_product?arrAllData[i].channel_sub_product:""
                                                                           ,
                                                                           TRAN_CHANNELTRANCODE: arrAllData[i].channel_tran_code?arrAllData[i].channel_tran_code:""
                                                                           ,
                                                                           /* TRAN_CREATEDBY:arrAllData[0]
                                                                           TRAN_CREATEDBYNAME:arrAllData[0] */
                                                                           TRAN_CREATEDDATE: arrAllData[i].tran_created_date?arrAllData[i].tran_created_date:"",
                                                                           /* TRAN_MODIFIEDBY:arrAllData[i]
                                                                           TRAN_MODIFIEDBYNAME:arrAllData[0] 
                                                                           TRAN_MODIFIEDDATE: arrAllData[0].tran_modified_date,
                                                                           TRAN_SYSTEMID: arrAllData[0].system_id
                                                                           ,
                                                                           TRAN_SYSTEMNAME: arrAllData[0].system_name
                                                                           ,

                                                                           /* TRAN_CREATEDBYSTSID:arrAllData[0]
                                                                           TRAN_MODIFIEDBYSTSID:arrAllData[0] */
                                                                           TRAN_STATUS: arrAllData[i].tran_status?arrAllData[i].tran_status:"",
                                                                           TRAN_PROCESSSTATUS: arrAllData[i].process_status?arrAllData[i].process_status:""
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
                                                                           TRAN_TRANREFID: arrAllData[i].tran_ref_id?arrAllData[i].tran_ref_id:""
                                                                           ,
                                                                           TRAN_INSTRUCTIONID: arrAllData[i].instruction_id?arrAllData[i].instruction_id:""
                                                                           ,
                                                                           TRAN_CATEGORYPURPOSEPRTY: arrAllData[i].category_purpose_prty?arrAllData[i].category_purpose_prty:""
                                                                           ,
                                                                           TRAN_EXTORGIDCODE: arrAllData[i].ext_org_id_code?arrAllData[i].ext_org_id_code:""
                                                                           ,
                                                                           TRAN_ISSUERTYPECODE: arrAllData[i].tran_issuer_type_code?arrAllData[i].tran_issuer_type_code:"",
                                                                           TRAN_DBTRBIRTHDATE: arrAllData[i].dbtr_birth_date?arrAllData[i].dbtr_birth_date:""
                                                                           ,
                                                                           TRAN_DBTRCITYBIRTH: arrAllData[i].dbtr_city_birth?arrAllData[i].dbtr_city_birth:""
                                                                           ,
                                                                           TRAN_DBTRCOUNTRY: arrAllData[i].dbtr_country?arrAllData[i].dbtr_country:""
                                                                           ,
                                                                           TRAN_CRACCTIDENTIFICATION: arrAllData[i].cr_acct_identification?arrAllData[i].cr_acct_identification:""
                                                                           ,
                                                                           TRAN_CRACCTIDCODE: arrAllData[i].cr_acct_id_code?arrAllData[i].cr_acct_id_code:""
                                                                           ,
                                                                           TRAN_REMITTANCEINFO: arrAllData[i].remittance_info?arrAllData[i].remittance_info:""
                                                                           ,
                                                                           TRAN_INWARDFILENAME: arrAllData[i].inward_file_name?arrAllData[i].inward_file_name:""
                                                                           ,
                                                                           TRAN_CLRSYSREF: arrAllData[i].clrsysref?arrAllData[i].clrsysref:""
                                                                           ,
                                                                           TRAN_DEPARTMENTCODE: arrAllData[i].department_code?arrAllData[i].department_code:""
                                                                           ,
                                                                           TRAN_CBSREFNO: arrAllData[i].cbs_ref_no?arrAllData[i].cbs_ref_no:""
                                                                           ,
                                                                           TRAN_DBTROTHERISSUER: arrAllData[i].dbtr_other_issuer?arrAllData[i].dbtr_other_issuer:""
                                                                           ,
                                                                           TRAN_ACCOUNTCURRENCY: arrAllData[i].account_currency?arrAllData[i].account_currency:""
                                                                           ,
                                                                           TRAN_CBSPOSTINGFLAG: arrAllData[i].cbs_posting_flag?arrAllData[i].cbs_posting_flag:""
                                                                           ,
                                                                           TRAN_PROCESSINGSYSTEM: arrAllData[i].processing_system?arrAllData[i].processing_system:""
                                                                           ,
                                                                           TRAN_REVERSALAMOUNT: arrAllData[i].reversal_amount?arrAllData[i].reversal_amount:""
                                                                           ,
                                                                           TRAN_CHARGEAMOUNT: arrAllData[i].charge_amount?arrAllData[i].charge_amount:""
                                                                           ,
                                                                           TRAN_PROCESSGROUP: arrAllData[i].process_group?arrAllData[i].process_group:"",

                                                                           TRAN_CUSTSPLRATEFLAG: arrAllData[i].cust_splrate_flag?arrAllData[i].cust_splrate_flag:""
                                                                           ,
                                                                           TRAN_CHECKER: arrAllData[i].checker?arrAllData[i].checker:""
                                                                           ,
                                                                           TRAN_MAKER: arrAllData[i].maker?arrAllData[i].maker:""
                                                                           ,
                                                                           TRAN_SELLRATE: arrAllData[i].sell_rate?arrAllData[i].sell_rate:""
                                                                           ,
                                                                           TRAN_SELLMARGIN: arrAllData[i].sell_margin?arrAllData[i].sell_margin:""
                                                                           ,
                                                                           TRAN_ORGPAYENDTOENDID: arrAllData[i].org_pay_endtoend_id?arrAllData[i].org_pay_endtoend_id:""
                                                                           ,
                                                                           TRAN_BUYRATE: arrAllData[i].buy_rate?arrAllData[i].buy_rate:""
                                                                           ,
                                                                           TRAN_AMOUNTCREDITEDLOCCUR: arrAllData[i].amount_credited_loc_cur?arrAllData[i].amount_credited_loc_cur:""
                                                                           ,
                                                                           TRAN_BUYMARGIN: arrAllData[i].buy_margin?arrAllData[i].buy_margin:""
                                                                           ,
                                                                           TRAN_TRANCHARGE: arrAllData[i].tran_charge?arrAllData[i].tran_charge:""
                                                                           ,
                                                                           TRAN_PROCESSGROUP: arrAllData[i].process_group?arrAllData[i].process_group:""
                                                                           ,
                                                                           TRAN_CHARGEAMOUNT: arrAllData[i].charge_amount?arrAllData[i].charge_amount:"",
                                                                           ACCT_ACCOUNTNUMBER: arrAllData[i].account_number?arrAllData[i].account_number:""
                                                                           ,
                                                                           ACCT_ALTERNATEACCOUNTID: arrAllData[i].alternate_account_id?arrAllData[i].alternate_account_id:""
                                                                           ,
                                                                           ACCT_ACCOUNTNAME: arrAllData[i].account_name?arrAllData[i].account_name:""
                                                                           ,
                                                                           ACCT_POSTINGRESTRICTIONCODE: arrAllData[i].posting_restriction_code?arrAllData[i].posting_restriction_code:""
                                                                           ,
                                                                           ACCT_INACTIVEMARKER: arrAllData[i].inactive_marker?arrAllData[i].inactive_marker:""
                                                                           ,
                                                                           ACCT_CATEGORYCODE: arrAllData[i].category_code?arrAllData[i].category_code:""
                                                                           ,
                                                                           ACCT_CATEGORYDESCRIPTION: arrAllData[i].category_description?arrAllData[i].category_description:""
                                                                           ,
                                                                           ACCT_CURRENCY: arrAllData[i].currency?arrAllData[i].currency:""
                                                                           ,
                                                                           ACCT_CUSTOMERID: arrAllData[i].customer_id?arrAllData[i].customer_id:"",
                                                                           ACCT_ACCOUNTTITLE2: arrAllData[i].account_title_2?arrAllData[i].account_title_2:""
                                                                           ,
                                                                           ACCT_COMPANYCODE: arrAllData[i].company_code?arrAllData[i].company_code:""
                                                                           ,
                                                                           ACCT_EMIRATESCODE: arrAllData[i].emirates_code?arrAllData[i].emirates_code:""
                                                                           ,
                                                                           ACCT_COUNTRYOFBIRTH: arrAllData[i].countryofbirth?arrAllData[i].countryofbirth:"",
                                                                           ACCT_LETTEROFUNDERTAKING: arrAllData[i].letter_of_undertaking?arrAllData[i].letter_of_undertaking:""
                                                                           ,
                                                                           ACCT_CUSTOMERPOSTINGRESTRICTIONCODE: arrAllData[i].customer_posting_restriction_code?arrAllData[i].customer_posting_restriction_code:""
                                                                           ,
                                                                           ACCT_TARGETCODE: arrAllData[i].target_code?arrAllData[i].target_code:"",
                                                                           ACCT_SECTORCODE: arrAllData[i].sector_code?arrAllData[i].sector_code:""
                                                                           ,
                                                                           ACCT_RESIDENTFLAG: arrAllData[i].resident_flag?arrAllData[i].resident_flag:""
                                                                           ,
                                                                           ACCT_NATIONALITYCOUNTRYCODE: arrAllData[i].nationality_country_code?arrAllData[i].nationality_country_code:""
                                                                           ,
                                                                           ACCT_LEGALID: arrAllData[i].legal_id?arrAllData[i].legal_id:""
                                                                           ,
                                                                           ACCT_NATIONALID: arrAllData[i].national_id?arrAllData[i].national_id:""
                                                                           ,
                                                                           ACCT_INDUSTRY: arrAllData[i].industry?arrAllData[i].industry:""
                                                                           ,
                                                                           ACCT_COMMUNICATIONTYPE: arrAllData[i].communication_type?arrAllData[i].communication_type:""
                                                                           ,
                                                                           ACCT_CUSTOMERMOBILENUMBER: arrAllData[i].customer_mobile_number?arrAllData[i].customer_mobile_number:""
                                                                           ,
                                                                           ACCT_ACCOUNTOFFICER: arrAllData[i].account_officer?arrAllData[i].account_officer:""
                                                                           ,
                                                                           ACCT_CURRRATESEGMENT: arrAllData[i].curr_rate_segment?arrAllData[i].curr_rate_segment:""
                                                                           ,
                                                                           ACCT_CUSTOMEREMAILID: arrAllData[i].customer_email_id?arrAllData[i].customer_email_id:""
                                                                           ,
                                                                           ACCT_TRADELICENSEFLAG: arrAllData[i].trade_license_flag?arrAllData[i].trade_license_flag:""
                                                                           ,
                                                                           ACCT_TRADELICENSENUMBER: arrAllData[i].trade_license_number?arrAllData[i].trade_license_number:""
                                                                           ,
                                                                           ACCT_COMMERCIALREGISTRATIONFLAG: arrAllData[i].commercial_registration_flag?arrAllData[i].commercial_registration_flag:""
                                                                           ,
                                                                           ACCT_CHAMBERCERTIFICATENUMBER: arrAllData[i].chamber_certificate_number?arrAllData[i].chamber_certificate_number:""
                                                                           ,
                                                                           ACCT_AMIRIDECREEFLAG: arrAllData[i].amiri_decree_flag?arrAllData[i].amiri_decree_flag:""
                                                                           ,
                                                                           ACCT_ALTERNATEACCOUNTTYPE: arrAllData[i].alternate_account_type?arrAllData[i].alternate_account_type:""
                                                                           ,
                                                                           ACCT_ACCOUNTPOSTRINGTYPEDESCRIPTION: arrAllData[i].account_postring_type_description?arrAllData[i].account_postring_type_description:""
                                                                           ,
                                                                           ACCT_ACCOUNTPOSTINGRESTRICTTYPE: arrAllData[i].account_posting_restrict_type?arrAllData[i].account_posting_restrict_type:""
                                                                           ,
                                                                           ACCT_CUSTOMERPOSTINGRESTRICTIONDESCRIPTION: arrAllData[i].customer_posting_restriction_description?arrAllData[i].customer_posting_restriction_description:""
                                                                           ,
                                                                           ACCT_CUSTOMERPOSTINGRESTRICTTYPE: arrAllData[i].customer_posting_restrict_type?arrAllData[i].customer_posting_restrict_type:""
                                                                           ,
                                                                           ACCT_VIRTUALACCOUNTNAME: arrAllData[i].virtual_account_name?arrAllData[i].virtual_account_name:""
                                                                           ,
                                                                           ACCT_VACURRENCY: arrAllData[i].va_currency?arrAllData[i].va_currency:""
                                                                           ,
                                                                           ACCT_VATYPE: arrAllData[i].va_type?arrAllData[i].va_type:""
                                                                           ,
                                                                           ACCT_VASTATUS: arrAllData[i].va_status?arrAllData[i].va_status:""
                                                                           ,
                                                                           ACCT_BIRTHDATE: arrAllData[i].birthdate?arrAllData[i].birthdate:""
                                                                           ,
                                                                           ACCT_PRODUCTIDENTIFIER: arrAllData[i].productidentifier?arrAllData[i].productidentifier:""
                                                                           ,
                                                                           ACCT_ISSUERTYPECODE: arrAllData[i].acct_issuer_type_code?arrAllData[i].acct_issuer_type_code:"",
                                                                           ACCT_ECONOMICACTIVITYCODE: arrAllData[i].economic_activity_code?arrAllData[i].economic_activity_code:""
                                                                           ,
                                                                           ACCT_CITYOFBIRTH: arrAllData[i].cityofbirth?arrAllData[i].cityofbirth:""
                                                                           ,
                                                                           ACCT_ACCOUNTCLOSED: arrAllData[i].account_closed?arrAllData[i].account_closed:""
                                                                           ,
                                                                           ACCT_CNCCAID: arrAllData[i].cncca_id?arrAllData[i].cncca_id:""
                                                                           ,
                                                                           ACCT_CREATEDDATE: arrAllData[i].acct_created_date?arrAllData[i].acct_created_date:"",
                                                                           ACCT_MODIFIEDDATE: arrAllData[i].acct_modified_date?arrAllData[i].acct_modified_date:"",
                                                                           ACCT_VAFLAG: arrAllData[i].va_flag?arrAllData[i].va_flag:""
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

                              // }



                           //})




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
