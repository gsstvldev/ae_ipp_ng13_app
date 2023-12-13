var $MODULEPATH = '../../node_modules/';
var express = require('express');
var Path = require('path');
var $REFPATH = Path.join(__dirname, '../../torus-references/');

var app = express.Router();

app.post('/', function(appRequest, appResponse, next) {


    /*  Created By : Daseen
    Created Date :23/02/2023
    Modified By : Siva Harish
    Modified Date : 19/05/2023
    Modified Date : 29/06/2023
   
    */
   var serviceName = 'NPSS (S) Outward Return Reversal Posting Failures Mail';
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
   var moment = require('moment');
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
           objSessionLogInfo.HANDLER_CODE = 'NPSS (S) Outward Return Reversal Posting Failures Mail';
           objSessionLogInfo.ACTION = 'ACTION';
           objSessionLogInfo.PROCESS = 'NPSS (S) Outward Return Reversal Posting Failures Mail';
           // Get DB Connection 
           reqTranDBInstance.GetTranDBConn(headers, false, function (pSession) {
               mTranConn = pSession; //  assign connection     
               reqAuditLog.GetProcessToken(pSession, objLogInfo, async function prct(error, prct_id) {
                   try {
                       var PRCT_ID = prct_id

                       var takeurl = `Select param_category,param_code,param_detail from core_nc_system_setup where param_category='NPSS_COMMUNICATION_API' and param_code='URL'`
                       ExecuteQuery1(takeurl, async function (arrUrl) {
                           if (arrUrl.length == 0) {

                               objresponse.status = 'FAILURE';
                               objresponse.msg = 'No URL found';
                               sendResponse(null, objresponse)
                           }
                           else {
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
                               var status = await arraytostr(params.status);
                               var process_status = await arraytostr(params.process_status);

                               var Takedata = `select ac.*,nt.dbtr_iban,nt.status,nt.*,nt.created_Date as tran_created_date,nt.modified_date as tran_modified_date,nt.status
                               as tran_status,nt.issuer_type_code as tran_issuer_type_code ,ac.created_Date as acct_created_date,ac.modified_date as acct_modified_date,nt.status
                               as acct_status,ac.issuer_type_code as acct_issuer_type_code  from npss_transactions nt left join core_nc_cbs_accounts ac on(ac.alternate_account_id=nt.dbtr_iban) where nt.status in ${status} and nt.process_status in ${process_status} and nt.process_type='OP' and (nt.fx_resv_text5 <> ('ORR_MAIL_TRIGGERED') or nt.fx_resv_text5 isnull)`
                            
                               var TakeTrnid = `select npsst_id from npss_transactions where status in ${status} and process_status in ${process_status} and process_type='OP' and (fx_resv_text5 <> ('ORR_MAIL_TRIGGERED') or fx_resv_text5 isnull)`
                               var Takeorg = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and param_name = 'ORIGIN' and need_sync='Y'`
                               ExecuteQuery1(Takeorg, function (arrorg) {
                                   ExecuteQuery1(Takedata, async function (arrAllData) {
                                       if (arrAllData.length > 0) {
                                           let Updatetran = await TakeeliTran(TakeTrnid)
                                           if(Updatetran == 'SUCCESS'){
                                            //ExecuteQuery1(TakeAllData, async function (arrAllData) {
                                             /* if (arrAllData.length == 0) {
                                                    reqInstanceHelper.PrintInfo(serviceName, '----------Failure in Getting Tran Data------', objSessionLogInfo);
                                               objresponse.status = 'Failure in Getting core nc cbs accounts table data';
                                               sendResponse(null, objresponse)
                                                } */
                                                //else{

                                              
                                               reqAsync.forEachOfSeries(arrAllData, function (arrDataobj, i, nextobjctfunc) {
                                                   var takelog = `select * from npss_trn_process_log where uetr='${arrDataobj.uetr}' and status='${arrDataobj.status}'`
                                                   var TakeCometo = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and destination_system ='${arrDataobj.department_code}' and param_name='COMM_TO' and need_sync='Y'`
                                                   ExecuteQuery1(TakeCometo, function (arrCometo) {
                                                       var Takecmcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and destination_system ='${arrDataobj.department_code}' and param_name = 'COMM_CC' and need_sync='Y'`
                                                       ExecuteQuery1(Takecmcc, function (arrcomcc) {
                                                           var Takebcc = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and destination_system ='${arrDataobj.department_code}' and param_name = 'COMM_BCC' and need_sync='Y'`
                                                           ExecuteQuery1(Takebcc, function (arrbcc) {
                                                               var tkcomgp = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and destination_system ='${arrDataobj.department_code}' and param_name = 'COMM_GROUP' and need_sync='Y'`
                                                               ExecuteQuery1(tkcomgp, function (arrcomgp) {
                                                                   var TakecomCat = `select param_value from CORE_NS_PARAMS  where process_name = '${params.process_name}' and destination_system ='${arrDataobj.department_code}' and param_name = 'COM_CATEGORY' and need_sync='Y'`
                                                                   ExecuteQuery1(TakecomCat, function (arrCatgory) {
                                                                       ExecuteQuery1(takelog, function (arrlog) {
                                                                           if (arrlog.length > 0) {
                                                                               var Takeerr = `select error_code,error_description,cncec_id from core_nc_error_codes where error_code='${arrlog[0].t24_return_code}' and need_sync='Y'`
                                                                               ExecuteQuery1(Takeerr, function (arrerr) {
                                                                                 
                                                                                       var takeacccur = `select currency from core_nc_cbs_accounts  where alternate_account_id='${arrDataobj.dbtr_iban}'`
                                                                                       ExecuteQuery1(takeacccur, function (arracccur) {
                                                                                           if (arracccur.length > 0) {
                                                                                               try {
                                                                                                   var frtodata = [{
                                                                                                       TO: arrCometo.length > 0 ? arrCometo[0].param_value : '',
                                                                                                       CC: arrcomcc.length > 0 ? arrcomcc[0].param_value : '',
                                                                                                       BCC: arrbcc.length > 0 ? arrbcc[0].param_value : '',
                                                                                                       ORIGIN: arrorg.length > 0 ? arrorg[0].param_value : '',
                                                                                                       COMM_GROUP: arrcomgp.length > 0 ? arrcomgp[0].param_value : '',
                                                                                                       POSTINGAPPLICATION: arrlog.length > 0 ? arrlog[0].processing_system : '',
                                                                                                       MESSAGETYPE: arrlog.length > 0 ? arrlog[0].process_name : '',
                                                                                                       TXNVALUEDATE: arrDataobj.value_date ? moment(arrDataobj.value_date).format('YYYY-MM-DD') : '',
                                                                                                       CRACCOUNTNUMBER: arrDataobj.cdtr_iban ? arrDataobj.cdtr_iban : '',
                                                                                                       CRACCOUNTNAME: arrDataobj.cdtr_acct_name ? arrDataobj.cdtr_acct_name : '',
                                                                                                       CRACCOUNTCURRENCY: arrDataobj.intrbk_sttlm_cur ? arrDataobj.intrbk_sttlm_cur : '',
                                                                                                       CRBANKNAME: arrDataobj.cr_sort_code ? arrDataobj.cr_sort_code : '',
                                                                                                       TRANSACTIONAMOUNT: arrDataobj.intrbk_sttlm_amnt ? arrDataobj.intrbk_sttlm_amnt : '',
                                                                                                       DRACCOUNTNUMBER: arrDataobj.dbtr_iban ? arrDataobj.dbtr_iban : '',
                                                                                                       DRACCOUNTNAME: arrDataobj.dbtr_acct_name ? arrDataobj.dbtr_acct_name : '',
                                                                                                       DRBANKNAME: arrDataobj.dr_sort_code ? arrDataobj.dr_sort_code : '',
                                                                                                       DRACCOUNTCURRENCY: arracccur.length > 0 ? arracccur[0].currency : '',
                                                                                                       CLEARINGSYSREFNUMBER: arrDataobj.clrsysref ? arrDataobj.clrsysref : '',
                                                                                                       E2EREFERENCEID: arrDataobj.payment_endtoend_id ? arrDataobj.payment_endtoend_id : '',
                                                                                                       FAILUREERRORCODE: arrlog.length > 0 ? arrlog[0].t24_return_code : '',
                                                                                                       ERRORDESCRIPTION: arrerr.length > 0 ? arrerr[0].error_description : '' || '',
                                                                                                       TRAN_NPSSTID: arrDataobj.npsst_id?arrDataobj.npsst_id:"",
                                                                            TRAN_PRODUCTCODE: arrDataobj.product_code?arrDataobj.product_code:'',
                                                                            TRAN_VALUEDATE: arrDataobj.value_date?arrDataobj.value_date:""
                                                                            ,
                                                                            TRAN_DBTRACCTNO: arrDataobj.dbtr_acct_no?arrDataobj.dbtr_acct_no:""
                                                                            ,
                                                                            TRAN_DBTRACCTNAME: arrDataobj.dbtr_acct_name?arrDataobj.dbtr_acct_name:""
                                                                            ,
                                                                            TRAN_DBTRPHONENO: arrDataobj.dbtr_phone_no?arrDataobj.dbtr_phone_no:""
                                                                            ,
                                                                            TRAN_DBTREMAILID: arrDataobj.dbtr_email_id?arrDataobj.dbtr_email_id:""
                                                                            ,
                                                                            TRAN_DBTRDOCUMENTID: arrDataobj.dbtr_document_id?arrDataobj.dbtr_document_id:"",

                                                                            TRAN_DBTRIBAN: arrDataobj.dbtr_iban?arrDataobj.dbtr_iban:""
                                                                            ,
                                                                            TRAN_BASECURRENCY: arrDataobj.base_currency?arrDataobj.base_currency:""
                                                                            ,
                                                                            TRAN_BASEAMOUNT: arrDataobj.base_amount?arrDataobj.base_amount:""
                                                                            ,
                                                                            TRAN_CDTRACCTNO: arrDataobj.cdtr_acct_no?arrDataobj.cdtr_acct_no:""
                                                                            ,
                                                                            TRAN_CDTRACCTNAME: arrDataobj.cdtr_acct_name?arrDataobj.cdtr_acct_name:""
                                                                            ,
                                                                            TRAN_CDTRPHONENO: arrDataobj.cdtr_phone_no?arrDataobj.cdtr_phone_no:""
                                                                            ,
                                                                            TRAN_CDTREMAILID: arrDataobj.cdtr_email_id?arrDataobj.cdtr_email_id:""
                                                                            ,
                                                                            TRAN_CDTRDOCUMENTID: arrDataobj.cdtr_document_id?arrDataobj.cdtr_document_id:""
                                                                            ,
                                                                            TRAN_CDTRIBAN: arrDataobj.cdtr_iban?arrDataobj.cdtr_iban:""
                                                                            ,
                                                                            TRAN_DRSORTCODE: arrDataobj.dr_sort_code?arrDataobj.dr_sort_code:""
                                                                            ,
                                                                            TRAN_CRSORTCODE: arrDataobj.cr_sort_code?arrDataobj.cr_sort_code:""
                                                                            ,
                                                                            TRAN_INTRBKSTTLMCUR: arrDataobj.intrbk_sttlm_cur?arrDataobj.intrbk_sttlm_cur:""
                                                                            ,
                                                                            TRAN_INTRBKSTTLMAMNT: arrDataobj.intrbk_sttlm_amnt?arrDataobj.intrbk_sttlm_amnt:""
                                                                            ,
                                                                            TRAN_RATECODE: arrDataobj.rate_code?arrDataobj.rate_code:""
                                                                            ,
                                                                            TRAN_EXCHANGERATE: arrDataobj.exchange_rate?arrDataobj.exchange_rate:""
                                                                            ,
                                                                            TRAN_CATEGORYPURPOSE: arrDataobj.category_purpose?arrDataobj.category_purpose:""
                                                                            ,
                                                                            TRAN_HDRMSGID: arrDataobj.hdr_msg_id?arrDataobj.hdr_msg_id:""
                                                                            ,
                                                                            TRAN_HDRCREATEDDATE: arrDataobj.hdr_created_date?arrDataobj.hdr_created_date:""
                                                                            ,
                                                                            TRAN_HDRTOTALRECORDS: arrDataobj.hdr_total_records?arrDataobj.hdr_total_records:""
                                                                            ,
                                                                            TRAN_HDRTOTALAMOUNT: arrDataobj.hdr_total_amount?arrDataobj.hdr_total_amount:""
                                                                            ,
                                                                            TRAN_HDRSETTLEMENTDATE: arrDataobj.hdr_settlement_date?arrDataobj.hdr_settlement_date:""
                                                                            ,
                                                                            TRAN_HDRSETTLEMENTMETHOD: arrDataobj.hdr_settlement_method?arrDataobj.hdr_settlement_method:""
                                                                            ,
                                                                            TRAN_HDRCLEARINGSYSTEM: arrDataobj.hdr_clearing_system?arrDataobj.hdr_clearing_system:""
                                                                            ,
                                                                            TRAN_PAYMENTENDTOENDID: arrDataobj.payment_endtoend_id?arrDataobj.payment_endtoend_id:""
                                                                            ,
                                                                            TRAN_INSTRUMENTTYPE: arrDataobj.instrument_type?arrDataobj.instrument_type:""
                                                                            ,
                                                                            TRAN_CHARGEBEARER: arrDataobj.charge_bearer?arrDataobj.charge_bearer:""
                                                                            ,
                                                                            TRAN_UETR: arrDataobj.uetr?arrDataobj.uetr:""
                                                                            ,
                                                                            TRAN_MESSAGEDATA: arrDataobj.message_data?arrDataobj.message_data:""
                                                                            ,
                                                                            TRAN_EXHFID: arrDataobj.exhf_id?arrDataobj.exhf_id:""
                                                                            ,
                                                                            TRAN_PROCESSTYPE: arrDataobj.process_type?arrDataobj.process_type:""
                                                                            ,
                                                                            TRAN_DBTRCUSTTYPE: arrDataobj.dbtr_cust_type?arrDataobj.dbtr_cust_type:""
                                                                            ,
                                                                            TRAN_CHANNELID: arrDataobj.channel_id?arrDataobj.channel_id:""
                                                                            ,
                                                                            TRAN_CHANNELREFNO: arrDataobj.channel_refno?arrDataobj.channel_refno:""
                                                                            ,
                                                                            TRAN_CHANNELUSERID: arrDataobj.channel_userid?arrDataobj.channel_userid:""
                                                                            ,
                                                                            TRAN_CHANNELPRODUCT: arrDataobj.channel_product?arrDataobj.channel_product:""
                                                                            ,
                                                                            TRAN_CHANNELSUBPRODUCT: arrDataobj.channel_sub_product?arrDataobj.channel_sub_product:""
                                                                            ,
                                                                            TRAN_CHANNELTRANCODE: arrDataobj.channel_tran_code?arrDataobj.channel_tran_code:""
                                                                            ,
                                                                            /* TRAN_CREATEDBY:arrDataobj
                                                                            TRAN_CREATEDBYNAME:arrDataobj */
                                                                            TRAN_CREATEDDATE: arrDataobj.tran_created_date?arrDataobj.tran_created_date:"",
                                                                            /* TRAN_MODIFIEDBY:arrDataobj
                                                                            TRAN_MODIFIEDBYNAME:arrDataobj 
                                                                            TRAN_MODIFIEDDATE: arrDataobj.tran_modified_date,
                                                                            TRAN_SYSTEMID: arrDataobj.system_id
                                                                            ,
                                                                            TRAN_SYSTEMNAME: arrDataobj.system_name
                                                                            ,

                                                                            /* TRAN_CREATEDBYSTSID:arrDataobj
                                                                            TRAN_MODIFIEDBYSTSID:arrDataobj */
                                                                            TRAN_STATUS: arrDataobj.tran_status?arrDataobj.tran_status:"",
                                                                            TRAN_PROCESSSTATUS: arrDataobj.process_status?arrDataobj.process_status:""
                                                                            ,/* 
                                                                    TRAN_DTCODE:arrDataobj
                                                                    TRAN_DTDESCRIPTION:arrDataobj
                                                                    TRAN_DTTCODE:arrDataobj
                                                                    TRAN_DTTDESCRIPTION:arrDataobj
                                                                    TRAN_CREATEDCLIENTIP:arrDataobj
                                                                    TRAN_CREATEDTZ:arrDataobj
                                                                    TRAN_CREATEDTZOFFSET:arrDataobj
                                                                    TRAN_CREATEDBYSESSIONID:arrDataobj
                                                                    TRAN_MODIFIEDCLIENTIP:arrDataobj
                                                                    TRAN_MODIFIEDTZ:arrDataobj
                                                                    TRAN_MODIFIEDTZOFFSET:arrDataobj
                                                                    TRAN_MODIFIEDBYSESSIONID:arrDataobj
                                                                    TRAN_CREATEDDATEUTC:arrDataobj
                                                                    TRAN_MODIFIEDDATEUTC:arrDataobj */
                                                                            TRAN_TRANREFID: arrDataobj.tran_ref_id?arrDataobj.tran_ref_id:""
                                                                            ,
                                                                            TRAN_INSTRUCTIONID: arrDataobj.instruction_id?arrDataobj.instruction_id:""
                                                                            ,
                                                                            TRAN_CATEGORYPURPOSEPRTY: arrDataobj.category_purpose_prty?arrDataobj.category_purpose_prty:""
                                                                            ,
                                                                            TRAN_EXTORGIDCODE: arrDataobj.ext_org_id_code?arrDataobj.ext_org_id_code:""
                                                                            ,
                                                                            TRAN_ISSUERTYPECODE: arrDataobj.tran_issuer_type_code?arrDataobj.tran_issuer_type_code:"",
                                                                            TRAN_DBTRBIRTHDATE: arrDataobj.dbtr_birth_date?arrDataobj.dbtr_birth_date:""
                                                                            ,
                                                                            TRAN_DBTRCITYBIRTH: arrDataobj.dbtr_city_birth?arrDataobj.dbtr_city_birth:""
                                                                            ,
                                                                            TRAN_DBTRCOUNTRY: arrDataobj.dbtr_country?arrDataobj.dbtr_country:""
                                                                            ,
                                                                            TRAN_CRACCTIDENTIFICATION: arrDataobj.cr_acct_identification?arrDataobj.cr_acct_identification:""
                                                                            ,
                                                                            TRAN_CRACCTIDCODE: arrDataobj.cr_acct_id_code?arrDataobj.cr_acct_id_code:""
                                                                            ,
                                                                            TRAN_REMITTANCEINFO: arrDataobj.remittance_info?arrDataobj.remittance_info:""
                                                                            ,
                                                                            TRAN_INWARDFILENAME: arrDataobj.inward_file_name?arrDataobj.inward_file_name:""
                                                                            ,
                                                                            TRAN_CLRSYSREF: arrDataobj.clrsysref?arrDataobj.clrsysref:""
                                                                            ,
                                                                            TRAN_DEPARTMENTCODE: arrDataobj.department_code?arrDataobj.department_code:""
                                                                            ,
                                                                            TRAN_CBSREFNO: arrDataobj.cbs_ref_no?arrDataobj.cbs_ref_no:""
                                                                            ,
                                                                            TRAN_DBTROTHERISSUER: arrDataobj.dbtr_other_issuer?arrDataobj.dbtr_other_issuer:""
                                                                            ,
                                                                            TRAN_ACCOUNTCURRENCY: arrDataobj.account_currency?arrDataobj.account_currency:""
                                                                            ,
                                                                            TRAN_CBSPOSTINGFLAG: arrDataobj.cbs_posting_flag?arrDataobj.cbs_posting_flag:""
                                                                            ,
                                                                            TRAN_PROCESSINGSYSTEM: arrDataobj.processing_system?arrDataobj.processing_system:""
                                                                            ,
                                                                            TRAN_REVERSALAMOUNT: arrDataobj.reversal_amount?arrDataobj.reversal_amount:""
                                                                            ,
                                                                            TRAN_CHARGEAMOUNT: arrDataobj.charge_amount?arrDataobj.charge_amount:""
                                                                            ,
                                                                            TRAN_PROCESSGROUP: arrDataobj.process_group?arrDataobj.process_group:"",

                                                                            TRAN_CUSTSPLRATEFLAG: arrDataobj.cust_splrate_flag?arrDataobj.cust_splrate_flag:""
                                                                            ,
                                                                            TRAN_CHECKER: arrDataobj.checker?arrDataobj.checker:""
                                                                            ,
                                                                            TRAN_MAKER: arrDataobj.maker?arrDataobj.maker:""
                                                                            ,
                                                                            TRAN_SELLRATE: arrDataobj.sell_rate?arrDataobj.sell_rate:""
                                                                            ,
                                                                            TRAN_SELLMARGIN: arrDataobj.sell_margin?arrDataobj.sell_margin:""
                                                                            ,
                                                                            TRAN_ORGPAYENDTOENDID: arrDataobj.org_pay_endtoend_id?arrDataobj.org_pay_endtoend_id:""
                                                                            ,
                                                                            TRAN_BUYRATE: arrDataobj.buy_rate?arrDataobj.buy_rate:""
                                                                            ,
                                                                            TRAN_AMOUNTCREDITEDLOCCUR: arrDataobj.amount_credited_loc_cur?arrDataobj.amount_credited_loc_cur:""
                                                                            ,
                                                                            TRAN_BUYMARGIN: arrDataobj.buy_margin?arrDataobj.buy_margin:""
                                                                            ,
                                                                            TRAN_TRANCHARGE: arrDataobj.tran_charge?arrDataobj.tran_charge:""
                                                                            ,
                                                                            TRAN_PROCESSGROUP: arrDataobj.process_group?arrDataobj.process_group:""
                                                                            ,
                                                                            TRAN_CHARGEAMOUNT: arrDataobj.charge_amount?arrDataobj.charge_amount:"",
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
   
                                                                                                               "TEMPLATECODE":arrCatgory.length > 0 ? arrCatgory[0].param_value : '',
   
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
                                                                                                           reqInstanceHelper.PrintInfo(serviceName, '------------Mail API ERROR-------' + error, objSessionLogInfo);
                                                                                                           sendResponse(error, null);
                                                                                                       } else {
                                                                                                           reqInstanceHelper.PrintInfo(serviceName, '------------API Response JSON-------' + JSON.stringify(responseBody), objSessionLogInfo);
                                                                                                           reqInstanceHelper.PrintInfo(serviceName, '------------Mail has been sent for -------' + arrDataobj.npsst_id, objSessionLogInfo);
                                                                                                           nextobjctfunc();
                                                                                                       }
                                                                                                   });
   
                                                                                               } catch (error) {
                                                                                                   reqInstanceHelper.PrintError(serviceName, objSessionLogInfo, "IDE_SERVICE_004", "ERROR IN API CALL FUNCTION", error);
                                                                                                   sendResponse(error, null);
                                                                                               }
                                                                                           }
                                                                                           else {
                                                                                               reqInstanceHelper.PrintInfo(serviceName, '-----------Account table entry  not found for npsstl_id------' + arrDataobj.npsstl_id, objSessionLogInfo);
                                                                                               nextobjctfunc();
                                                                                           }
                                                                                       })
   
                                                                                   
                                                                               })
                                                                           } else {
                                                                               reqInstanceHelper.PrintInfo(serviceName, '-----------Log table entry  not found for npsst_id------' + arrDataobj.npsst_id, objSessionLogInfo);
                                                                               nextobjctfunc();
                                                                           }
                                                                       })
                                                                   })
                                                               })
                                                           })
   
                                                       })
   
   
                                                   })
                                               }, function () {
                                                   objresponse.status = 'SUCCESS';
                                                   sendResponse(null, objresponse)
                                               })
                                            //}
                                        //})
                                           }else{
                                               reqInstanceHelper.PrintInfo(serviceName, '----------Failure in Tran Update------', objSessionLogInfo);
                                               objresponse.status = 'Failure in Tran Update';
                                               sendResponse(null, objresponse)
                                           }
                                          
                                       }
                                       else {
                                           reqInstanceHelper.PrintInfo(serviceName, '-----------No data Found in Tran Table------', objSessionLogInfo);
                                           objresponse.status = 'Failure';
                                           sendResponse(null, objresponse)
                                       }

                                   })













                               })

                           }



                       })


                       function TakeeliTran(TakeTrnid) {
                           return new Promise((resolve, reject) => {
                               let Updtbl = `update npss_transactions set fx_resv_text5 = 'ORR_MAIL_TRIGGERED' where npsst_id in (${TakeTrnid})`
                               ExecuteQuery(Updtbl,function(result){
                                   if(result == 'SUCCESS'){
                                       resolve('SUCCESS')
                                   }else{
                                       resolve('FAILURE') 
                                   }
                               })
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
