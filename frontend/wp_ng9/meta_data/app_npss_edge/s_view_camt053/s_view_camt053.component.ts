/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 36211 
Modified By     : Admin 
Modified Date   : 2024-Aug-06 4:49 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_camt053
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'
import {npss_deem_cs_liquidity_export_excel_fileService} from '../../../custom_widget/npss_deem_cs_liquidity_export_excel_file/npss_deem_cs_liquidity_export_excel_file.service'
import {npss_deem_cs_liquidity_export_pdfService} from '../../../custom_widget/npss_deem_cs_liquidity_export_pdf/npss_deem_cs_liquidity_export_pdf.service'
import {npss_deem_cs_liquidity_export_csvService} from '../../../custom_widget/npss_deem_cs_liquidity_export_csv/npss_deem_cs_liquidity_export_csv.service'

@Component({
	selector: 's_view_camt053',
	templateUrl: './s_view_camt053.component.html',
	styleUrls: ['./s_view_camt053.component.css'],
	providers:[torus_cs_show_hideService,npss_deem_cs_liquidity_export_excel_fileService,npss_deem_cs_liquidity_export_pdfService,npss_deem_cs_liquidity_export_csvService]
})
    
// Start of class 
export class s_view_camt053Component implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_view_camt053"
	wftpa_id : string = "WFT_NPSS_P_1304_1722399968564_0"
	cg_code : string = "CG_1304_1722333490724"
	key_column : any = {"dtt_1304_1672471459948":"NCAR_ID","dtt_1304_1672471952205":"NCACN_ID","dtt_1304_1721132786653":"NPSSCPL_ID","dtt_1304_1721709764304":"NCS_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "transaction_list"
	uicgc_2 : string = "navigation_ui"
	uicgc_3 : string = "message_data_ui"
	uicgc_4 : string = "search"
	uicgc_5 : string = "back_ui"
	uicgc_6 : string = "tran_details"
	uicgc_7 : string = "header_and_statement_details"
	key_events : any = {}
	btl_1304_1722334616978 : string = "p_view_tran_detail_layout"
	btl_1304_1672474581833 : string = "p_message_data_layout"
	btl_1304_1672474543218 : string = "p_main_layout"
	btl_1304_1672474452916 : string = "p_search_layout"
	forms : any = ["uicgc_3","uicgc_4","uicgc_5","uicgc_2"]
	p_search_layout__spap_for_nav_search_showpopup : boolean = false
	transaction_list : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_tran : any = {}
	navigation_ui_view_messagess : any = {}
	navigation_ui_export_as_excel : any = {}
	navigation_ui_export_as_pdf : any = {}
	navigation_ui_export_as_csv : any = {}
	message_data_ui : any = {}
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	back_ui : any = {}
	back_ui_back : any = {}
	tran_details : any = {}
	header_and_statement_details : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService,private npss_deem_cs_liquidity_export_excel_fileService:npss_deem_cs_liquidity_export_excel_fileService,private npss_deem_cs_liquidity_export_pdfService:npss_deem_cs_liquidity_export_pdfService,private npss_deem_cs_liquidity_export_csvService:npss_deem_cs_liquidity_export_csvService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Transaction List" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction List"
		this.transaction_list.uicgc_code = "uicgc_1"
		this.transaction_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.transaction_list.datasource = {"default":{"dt_1304_1672471156312":{"dtt_1304_1721709764304":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1721709764304","dtt_desc":"NPSS CAMT53 Statement","ds_eligible":"DS_1722400268124","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS View camt053 Tran List MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1722331735138","date_format":false},{"column_name":"HDR_MSG_RCPT_NAME","alias_name":"","mq_id":"MQ_1722331735642","date_format":false},{"column_name":"HDR_MSG_RCPT_ID","alias_name":"","mq_id":"MQ_1722331735842","date_format":false},{"column_name":"STMT_ID","alias_name":"","mq_id":"MQ_1722331736026","date_format":false},{"column_name":"STMT_FROMTODATE_TIME","alias_name":"","mq_id":"MQ_1722331736194","date_format":false},{"column_name":"STMT_TODATE_TIME","alias_name":"","mq_id":"MQ_1722331736378","date_format":false},{"column_name":"INSTN_ACCT_ID","alias_name":"","mq_id":"MQ_1722331779732","date_format":false},{"column_name":"PARENT_ACCT_ID","alias_name":"","mq_id":"MQ_1722331780124","date_format":false},{"column_name":"BALANCE_TYPE","alias_name":"","mq_id":"MQ_1722331780276","date_format":false},{"column_name":"BALANCE_AMOUNT","alias_name":"","mq_id":"MQ_1722331780620","date_format":false,"currency_format":true},{"column_name":"BALANCE_CRDB_IND","alias_name":"","mq_id":"MQ_1722331780836","date_format":false},{"column_name":"STMTBALDATE","alias_name":"","mq_id":"MQ_1722331817116","date_format":false},{"column_name":"ORIG_AMOUNT","alias_name":"","mq_id":"MQ_1722331817460","date_format":false,"currency_format":true},{"column_name":"INSTD_AMOUNT","alias_name":"","mq_id":"MQ_1722331817644","date_format":false,"currency_format":true},{"column_name":"TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722331817844","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1722331855422","date_format":false},{"column_name":"TXN_ID","alias_name":"","mq_id":"MQ_1722331855654","date_format":false},{"column_name":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","mq_id":"MQ_1722603094086","date_format":false},{"column_name":"PARENT_INST_ACCT_ID","alias_name":"","mq_id":"MQ_1722603096188","date_format":false},{"column_name":"BALANCE_TYPE_PROP","alias_name":"","mq_id":"MQ_1722603096372","date_format":false},{"column_name":"TXN_REF_MSGID","alias_name":"","mq_id":"MQ_1722603096652","date_format":false},{"column_name":"TXN_ACCSVC_REF","alias_name":"","mq_id":"MQ_1722603096908","date_format":false},{"column_name":"PAYMENT_INFO_ID","alias_name":"","mq_id":"MQ_1722603140787","date_format":false},{"column_name":"PAYMENT_INFO_INSTD_ID","alias_name":"","mq_id":"MQ_1722603141035","date_format":false},{"column_name":"PAYMENT_INFO_ETE_ID","alias_name":"","mq_id":"MQ_1722603203354","date_format":false},{"column_name":"CLR_SYSTEM_REF","alias_name":"","mq_id":"MQ_1722603203577","date_format":false},{"column_name":"HDR_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722864317765","date_format":false},{"column_name":"HDR_MSG_PGNB","alias_name":"","mq_id":"MQ_1722864318116","date_format":false},{"column_name":"HDR_MSG_LAST_PG_IND","alias_name":"","mq_id":"MQ_1722864318300","date_format":false},{"column_name":"STMT_SEQUENCE_NUMBER","alias_name":"","mq_id":"MQ_1722864318484","date_format":false},{"column_name":"STMT_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722864425323","date_format":false},{"column_name":"STMT_FROMTODATE_TIME","alias_name":"","mq_id":"MQ_1722864425547","date_format":false},{"column_name":"STMT_TODATE_TIME","alias_name":"","mq_id":"MQ_1722864425755","date_format":false},{"column_name":"ACCT_ID","alias_name":"","mq_id":"MQ_1722864561617","date_format":false},{"column_name":"BALANCE_CUR","alias_name":"","mq_id":"MQ_1722864561801","date_format":false},{"column_name":"STMTBALDATE","alias_name":"","mq_id":"MQ_1722864561969","date_format":false},{"column_name":"STMT_BALDATE_TIME","alias_name":"","mq_id":"MQ_1722864562121","date_format":false},{"column_name":"COUNT_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722864562305","date_format":false},{"column_name":"SUM_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722864702066","date_format":false},{"column_name":"SUM_NET_ENTRIES","alias_name":"","mq_id":"MQ_1722864702249","date_format":false},{"column_name":"NET_CRDB_IND","alias_name":"","mq_id":"MQ_1722864702601","date_format":false},{"column_name":"TOT_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722864702953","date_format":false},{"column_name":"SUM_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722864703129","date_format":false},{"column_name":"TOT_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722864703337","date_format":false},{"column_name":"SUM_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722864797954","date_format":false},{"column_name":"ENTRY_REF","alias_name":"","mq_id":"MQ_1722864798146","date_format":false},{"column_name":"ENTRY_REF_CUR","alias_name":"","mq_id":"MQ_1722864798626","date_format":false},{"column_name":"ENTRY_AMOUNT","alias_name":"","mq_id":"MQ_1722864798922","date_format":false,"currency_format":true},{"column_name":"ENTRY_CRDB_IND","alias_name":"","mq_id":"MQ_1722864887381","date_format":false},{"column_name":"ENTRY_STATUS","alias_name":"","mq_id":"MQ_1722864887557","date_format":false},{"column_name":"ENTRYBKDATE","alias_name":"","mq_id":"MQ_1722864887917","date_format":false},{"column_name":"ENTRY_BKDATETIME","alias_name":"","mq_id":"MQ_1722864888237","date_format":false},{"column_name":"VALUEDATE","alias_name":"","mq_id":"MQ_1722864888445","date_format":false},{"column_name":"VALUEDATETIME","alias_name":"","mq_id":"MQ_1722864951055","date_format":false},{"column_name":"ACCT_SERV_REF","alias_name":"","mq_id":"MQ_1722864951239","date_format":false},{"column_name":"BANK_CODE_PROP","alias_name":"","mq_id":"MQ_1722864951567","date_format":false},{"column_name":"INSTD_CUR","alias_name":"","mq_id":"MQ_1722864951783","date_format":false},{"column_name":"TXN_CUR","alias_name":"","mq_id":"MQ_1722864951991","date_format":false},{"column_name":"BATCH_MSG_ID","alias_name":"","mq_id":"MQ_1722865027891","date_format":false},{"column_name":"BATCH_TXN_COUNT","alias_name":"","mq_id":"MQ_1722865028099","date_format":false},{"column_name":"BATCH_TOT_AMOUNT","alias_name":"","mq_id":"MQ_1722865028251","date_format":false,"currency_format":true},{"column_name":"BATCH_CRDB_IND","alias_name":"","mq_id":"MQ_1722865028427","date_format":false},{"column_name":"CASH_TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722865028595","date_format":false,"currency_format":true},{"column_name":"TXN_CRDB_IND","alias_name":"","mq_id":"MQ_1722865212432","date_format":false},{"column_name":"INSTRUCTING_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722865212632","date_format":false},{"column_name":"INSTRUCTED_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722865212832","date_format":false},{"column_name":"DBTR_BIC","alias_name":"","mq_id":"MQ_1722865266430","date_format":false},{"column_name":"CDTR_BIC","alias_name":"","mq_id":"MQ_1722865266810","date_format":false}],"joins":[]},"eq_text":"select  NCS_ID,  HDR_MSG_ID,  HDR_MSG_RCPT_NAME,  HDR_CREATED_DATE_TIME,  HDR_CREATEDDATE_TIME,  HDR_MSG_RCPT_ID,  HDR_MSG_RCPT_ORG_BIC,  HDR_MSG_PGNB,  HDR_MSG_LAST_PG_IND,  PARENT_INST_ACCT_ID,  BALANCE_TYPE_PROP,  TXN_REF_MSGID,  TXN_ACCSVC_REF,  PAYMENT_INFO_ID,  PAYMENT_INFO_INSTD_ID,  PAYMENT_INFO_ETE_ID,  CLR_SYSTEM_REF,  STMT_ID,  STMT_SEQUENCE_NUMBER,  STMT_FROM_TO_DATE_TIME,  STMT_FROMTODATE_TIME,  STMT_TO_DATE_TIME,  STMT_TODATE_TIME,  STMT_CREATEDDATE_TIME,  ACCT_ID,  INSTN_ACCT_ID,  PARENT_ACCT_ID,  BALANCE_TYPE,  BALANCE_AMOUNT,  BALANCE_CUR,  BALANCE_CRDB_IND,  STMT_BAL_DATE_TIME,  STMT_BALDATE_TIME,  STMT_BAL_DATE,  STMTBALDATE,  COUNT_INDV_ENTRIES,  SUM_INDV_ENTRIES,  SUM_NET_ENTRIES,  NET_CRDB_IND,  TOT_CR_ENTRIES,  SUM_CR_ENTRIES,  TOT_DB_ENTRIES,  SUM_DB_ENTRIES,  ENTRY_REF,   ENTRY_REF_CUR,   ENTRY_AMOUNT,   ENTRY_CRDB_IND,   ENTRY_STATUS,   ENTRY_BK_DATE,   ENTRYBKDATE,   ENTRY_BK_DATE_TIME,   ENTRY_BKDATETIME,   VALUE_DATE,   VALUEDATE,   VALUE_DATE_TIME,   VALUEDATETIME,   ACCT_SERV_REF,      BANK_CODE_PROP,   INSTD_CUR,   TXN_CUR,   BATCH_MSG_ID,   BATCH_TXN_COUNT,   BATCH_TOT_AMOUNT,   BATCH_CRDB_IND,   CASH_TXN_AMOUNT,   TXN_CRDB_IND,   INSTRUCTING_FIN_INST_BIC,   INSTRUCTED_FIN_INST_BIC,   DBTR_BIC,   CDTR_BIC,  ORIG_AMOUNT,  INSTD_AMOUNT,  TXN_AMOUNT,  UETR,  TXN_ID,  MESSAGE_DATA,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  CREATEDDATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO from  (  select   NCS.NCS_ID,   NCS.HDR_MSG_ID,   NCS.HDR_MSG_RCPT_NAME,   NCS.HDR_CREATED_DATE_TIME,   to_char(NCS.HDR_CREATED_DATE_TIME, 'DD/MM/YYYY') as HDR_CREATEDDATE_TIME,   NCS.HDR_MSG_RCPT_ID,   NCS.HDR_MSG_RCPT_ORG_BIC,   NCS.HDR_MSG_PGNB,   NCS.HDR_MSG_LAST_PG_IND,   NCS.PARENT_INST_ACCT_ID,   NCS.BALANCE_TYPE_PROP,   NCS.TXN_REF_MSGID,   NCS.TXN_ACCSVC_REF,   NCS.PAYMENT_INFO_ID,   NCS.PAYMENT_INFO_INSTD_ID,   NCS.PAYMENT_INFO_ETE_ID,   NCS.CLR_SYSTEM_REF,   NCS.STMT_ID,   NCS.STMT_SEQUENCE_NUMBER,   NCS.STMT_FROM_TO_DATE_TIME,   to_char(NCS.STMT_FROM_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_FROMTODATE_TIME,   to_char(NCS.STMT_CREATED_DATE_TIME, 'DD/MM/YYYY') as STMT_CREATEDDATE_TIME,   NCS.STMT_TO_DATE_TIME,   to_char(NCS.STMT_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_TODATE_TIME,   NCS.INSTN_ACCT_ID,   NCS.PARENT_ACCT_ID,   NCS.ACCT_ID,   NCS.BALANCE_TYPE,   NCS.BALANCE_AMOUNT,   NCS.BALANCE_CRDB_IND,   NCS.STMT_BAL_DATE,   to_char(NCS.STMT_BAL_DATE, 'DD/MM/YYYY') as STMTBALDATE,   NCS.STMT_BAL_DATE_TIME,   to_char(NCS.STMT_BAL_DATE_TIME, 'DD/MM/YYYY') as STMT_BALDATE_TIME,   NCS.COUNT_INDV_ENTRIES,   NCS.SUM_INDV_ENTRIES,   NCS.SUM_NET_ENTRIES,   NCS.NET_CRDB_IND,   NCS.TOT_CR_ENTRIES,   NCS.SUM_CR_ENTRIES,   NCS.TOT_DB_ENTRIES,   NCS.SUM_DB_ENTRIES,   NCS.ENTRY_REF,   NCS.ENTRY_REF_CUR,   NCS.ENTRY_AMOUNT,   NCS.ENTRY_CRDB_IND,   NCS.ENTRY_STATUS,   NCS.ENTRY_BK_DATE,   to_char(NCS.ENTRY_BK_DATE, 'DD/MM/YYYY') as ENTRYBKDATE,   NCS.ENTRY_BK_DATE_TIME,   to_char(NCS.ENTRY_BK_DATE_TIME, 'DD/MM/YYYY') as ENTRY_BKDATETIME,   NCS.VALUE_DATE,   to_char(NCS.VALUE_DATE, 'DD/MM/YYYY') as VALUEDATE,   NCS.VALUE_DATE_TIME,   to_char(NCS.VALUE_DATE_TIME, 'DD/MM/YYYY') as VALUEDATETIME,   NCS.ACCT_SERV_REF,   NCS.BANK_CODE_PROP,   NCS.INSTD_CUR,   NCS.TXN_CUR,   NCS.BATCH_MSG_ID,   NCS.BATCH_TXN_COUNT,   NCS.BATCH_TOT_AMOUNT,   NCS.BATCH_CRDB_IND,   NCS.CASH_TXN_AMOUNT,   NCS.TXN_CRDB_IND,   NCS.INSTRUCTING_FIN_INST_BIC,   NCS.INSTRUCTED_FIN_INST_BIC,   NCS.DBTR_BIC,   NCS.CDTR_BIC,   NCS.ORIG_AMOUNT,   NCS.INSTD_AMOUNT,   NCS.TXN_AMOUNT,   NCS.BALANCE_CUR,   NCS.UETR,   NCS.TXN_ID,   NCS.MESSAGE_DATA,   NCS.CREATED_BY,   NCS.CREATED_BY_NAME,   NCS.CREATED_BY_STS_ID,   NCS.CREATED_DATE,   TO_CHAR (NCS.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS AM') as CREATEDDATE,   NCS.DT_CODE,   NCS.DT_DESCRIPTION,   NCS.DTT_CODE,   NCS.DTT_DESCRIPTION,   NCS.MODIFIED_BY,   NCS.MODIFIED_BY_NAME,   NCS.MODIFIED_BY_STS_ID,   NCS.MODIFIED_DATE,   NCS.PRCT_ID,   NCS.STATUS,   NCS.PROCESS_STATUS,   NCS.SYSTEM_ID,   NCS.SYSTEM_NAME,   NCS.TENANT_ID,   NCS.APP_ID,   NCS.VERSION_NO  from   NPSS_CAMT53_STMT NCS)V $WHERE order by  NCS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS View camt053 Tran List MQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"HdrMsgId","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrCreDtTm","target_column":"HDR_CREATEDDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrRcptNm","target_column":"HDR_MSG_RCPT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrRcptAnyBIC","target_column":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrPgNb","target_column":"HDR_MSG_PGNB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrLastPgInd","target_column":"HDR_MSG_LAST_PG_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtId","target_column":"STMT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtElcSeqNum","target_column":"STMT_SEQUENCE_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtCreDtTm","target_column":"STMT_CREATEDDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtFromDt","target_column":"STMT_FROMTODATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtToDt","target_column":"STMT_TODATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"AcctId","target_column":"ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RltdAcct","target_column":"PARENT_INST_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalPrtry","target_column":"BALANCE_TYPE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalAmt","target_column":"BALANCE_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"BalCcy","target_column":"BALANCE_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalCdtDbtInd","target_column":"BALANCE_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalDt","target_column":"STMTBALDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalDtTm","target_column":"STMT_BALDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NbOfNtriesTtl","target_column":"COUNT_INDV_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"SumTtl","target_column":"SUM_INDV_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlNetNtryAmt","target_column":"SUM_NET_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlNetNtryCdtDbtInd","target_column":"NET_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlCdtNtries","target_column":"TOT_CR_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlCdtNtriesSum","target_column":"SUM_CR_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlDbtNtries","target_column":"TOT_DB_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlDbtNtriesSum","target_column":"SUM_DB_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryRef","target_column":"ENTRY_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryRefCcy","target_column":"ENTRY_REF_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryRefAmt","target_column":"ENTRY_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"NtryCdtDbtInd","target_column":"ENTRY_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StsCd","target_column":"ENTRY_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BookgDt","target_column":"ENTRYBKDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BookgDtTm","target_column":"ENTRY_BKDATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"ValDt","target_column":"VALUEDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"ValDtTm","target_column":"VALUEDATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"AcctSRef","target_column":"ACCT_SERV_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BkTxCd","target_column":"BANK_CODE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"InstdAmt","target_column":"INSTD_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"InstdCcy","target_column":"INSTD_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxAmt","target_column":"TXN_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"TxCcy","target_column":"TXN_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryBtchMsgId","target_column":"BATCH_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryBtchNbOfTxs","target_column":"BATCH_TXN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryBtchTtlAmt","target_column":"BATCH_TOT_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"NtryBtchCdtDbtInd","target_column":"BATCH_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxAcctSRef","target_column":"TXN_ACCSVC_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxPmtInfId","target_column":"PAYMENT_INFO_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxEndToEndId","target_column":"PAYMENT_INFO_ETE_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxUETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxId","target_column":"TXN_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxClrSysRef","target_column":"CLR_SYSTEM_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxDtlsAmt","target_column":"CASH_TXN_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"TxDtlsCdtDbtInd","target_column":"TXN_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"InstgAgtBICFI","target_column":"INSTRUCTING_FIN_INST_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"InstdAgtBICFI","target_column":"INSTRUCTED_FIN_INST_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DbtrAgtBIC","target_column":"DBTR_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CdtrAgtBIC","target_column":"CDTR_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.transaction_list.context_menu = []
		this.transaction_list.views = {}
		this.transaction_list.onChangecomponent = new EventEmitter<any>()
		this.transaction_list.show = true
		this.transaction_list.dynamic_param = {}
	
		// Component level properties - "Navigation UI" 
		this.navigation_ui.uictrl_code = "dynamic_ui"
		this.navigation_ui.uicgc_desc = "Navigation UI"
		this.navigation_ui.uicgc_code = "uicgc_2"
		this.navigation_ui.params = {}
		this.navigation_ui.datasource = {}
		this.navigation_ui.context_menu = []
		this.navigation_ui.views = {}
		this.navigation_ui.onChangecomponent = new EventEmitter<any>()
		this.navigation_ui.show = true
		this.navigation_ui.dynamic_param = {}
		this.navigation_ui.f_navigation_ui = {"show":true}
		this.navigation_ui.current_view = "f_navigation_ui"
		
		// "Search" Button of "Navigation UI" component
		this.navigation_ui_search.label_name = "Search"
		this.navigation_ui_search.show = true
		this.navigation_ui_search.disabled = false
		this.navigation_ui_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.navigation_ui_search.dynamic_param = {}
		this.navigation_ui_search.role = []
		this.navigation_ui_search.action = ""
		
		// "View Tran" Button of "Navigation UI" component
		this.navigation_ui_view_tran.label_name = "View Tran"
		this.navigation_ui_view_tran.show = true
		this.navigation_ui_view_tran.disabled = false
		this.navigation_ui_view_tran.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_tran.dynamic_param = {}
		this.navigation_ui_view_tran.role = []
		this.navigation_ui_view_tran.action = ""
		
		// "View Messagess" Button of "Navigation UI" component
		this.navigation_ui_view_messagess.label_name = "View Messagess"
		this.navigation_ui_view_messagess.show = true
		this.navigation_ui_view_messagess.disabled = false
		this.navigation_ui_view_messagess.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_messagess.dynamic_param = {}
		this.navigation_ui_view_messagess.role = []
		this.navigation_ui_view_messagess.action = ""
		
		// "Export as Excel" Button of "Navigation UI" component
		this.navigation_ui_export_as_excel.label_name = "Export as Excel"
		this.navigation_ui_export_as_excel.show = true
		this.navigation_ui_export_as_excel.disabled = false
		this.navigation_ui_export_as_excel.params = {"icon_only":false,"uicgcc_style":"fa fa-file-excel-o"}
		this.navigation_ui_export_as_excel.dynamic_param = {}
		this.navigation_ui_export_as_excel.role = []
		this.navigation_ui_export_as_excel.action = ""
		
		// "Export as PDF" Button of "Navigation UI" component
		this.navigation_ui_export_as_pdf.label_name = "Export as PDF"
		this.navigation_ui_export_as_pdf.show = true
		this.navigation_ui_export_as_pdf.disabled = false
		this.navigation_ui_export_as_pdf.params = {"icon_only":false,"uicgcc_style":"fa fa-file-pdf-o"}
		this.navigation_ui_export_as_pdf.dynamic_param = {}
		this.navigation_ui_export_as_pdf.role = []
		this.navigation_ui_export_as_pdf.action = ""
		
		// "Export as CSV" Button of "Navigation UI" component
		this.navigation_ui_export_as_csv.label_name = "Export as CSV"
		this.navigation_ui_export_as_csv.show = true
		this.navigation_ui_export_as_csv.disabled = false
		this.navigation_ui_export_as_csv.params = {"icon_only":false,"uicgcc_style":"fa fa-file-pdf-o"}
		this.navigation_ui_export_as_csv.dynamic_param = {}
		this.navigation_ui_export_as_csv.role = []
		this.navigation_ui_export_as_csv.action = ""
	
		// Component level properties - "Message Data UI" 
		this.message_data_ui.uictrl_code = "dynamic_ui"
		this.message_data_ui.uicgc_desc = "Message Data UI"
		this.message_data_ui.uicgc_code = "uicgc_3"
		this.message_data_ui.params = {}
		this.message_data_ui.datasource = {}
		this.message_data_ui.context_menu = []
		this.message_data_ui.views = {"first":"DTT_1304_1721709764304","is_tab_mode":"N","dtt_1304_1721709764304":{"0":[{"dttv_id":"NPSS View camt053 Message data UI","tab_order":0,"tab_name":"","uicgc_description":"Message Data UI","role_description":"default","dtt_description":"NPSS CAMT53 Statement"}]}}
		this.message_data_ui.onChangecomponent = new EventEmitter<any>()
		this.message_data_ui.show = true
		this.message_data_ui.dynamic_param = {}
		this.message_data_ui.f_npss_view_camt053_message_data_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.message_data_ui.form_name = "f_npss_view_camt053_message_data_ui"
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1721709764304","is_tab_mode":"N","dtt_1304_1721709764304":{"0":[{"dttv_id":"NPSS View camt053 SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS CAMT53 Statement"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_view_camt053_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_view_camt053_srch"
		
		// "clear" Button of "Search" component
		this.search_clear.label_name = "clear"
		this.search_clear.show = true
		this.search_clear.disabled = false
		this.search_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.search_clear.dynamic_param = {}
		this.search_clear.role = []
		this.search_clear.action = ""
		
		// "Search" Button of "Search" component
		this.search_search.label_name = "Search"
		this.search_search.show = true
		this.search_search.disabled = false
		this.search_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.search_search.dynamic_param = {}
		this.search_search.role = []
		this.search_search.action = ""
	
		// Component level properties - "Back UI" 
		this.back_ui.uictrl_code = "dynamic_ui"
		this.back_ui.uicgc_desc = "Back UI"
		this.back_ui.uicgc_code = "uicgc_5"
		this.back_ui.params = {}
		this.back_ui.datasource = {}
		this.back_ui.context_menu = []
		this.back_ui.views = {}
		this.back_ui.onChangecomponent = new EventEmitter<any>()
		this.back_ui.show = true
		this.back_ui.dynamic_param = {}
		this.back_ui.f_back_ui = {"show":true}
		this.back_ui.current_view = "f_back_ui"
		
		// "Back" Button of "Back UI" component
		this.back_ui_back.label_name = "Back"
		this.back_ui_back.show = true
		this.back_ui_back.disabled = false
		this.back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.back_ui_back.dynamic_param = {}
		this.back_ui_back.role = []
		this.back_ui_back.action = ""
	
		// Component level properties - "Tran Details" 
		this.tran_details.uictrl_code = "datatable"
		this.tran_details.uicgc_desc = "Tran Details"
		this.tran_details.uicgc_code = "uicgc_6"
		this.tran_details.params = {"need_search":"N","need_vertical":"Y"}
		this.tran_details.datasource = {"default":{"dt_1304_1672471156312":{"dtt_1304_1721709764304":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1721709764304","dtt_desc":"NPSS CAMT53 Statement","ds_eligible":"DS_1722400292594","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS View camt053 View Tran Left MQ CCD","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NCS_ID","alias_name":"","mq_id":"MQ_1722341609376","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1722341609672","date_format":false},{"column_name":"HDR_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722341609872","date_format":false},{"column_name":"HDR_MSG_RCPT","alias_name":"","mq_id":"MQ_1722341610032","date_format":false},{"column_name":"HDR_MSG_RCPT_NAME","alias_name":"","mq_id":"MQ_1722341610200","date_format":false},{"column_name":"HDR_MSG_RCPT_ID","alias_name":"","mq_id":"MQ_1722341642288","date_format":false},{"column_name":"HDR_MSG_RCPT_ORGID","alias_name":"","mq_id":"MQ_1722341642484","date_format":false},{"column_name":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","mq_id":"MQ_1722341642647","date_format":false},{"column_name":"HDR_MSG_LAST_PG_IND","alias_name":"","mq_id":"MQ_1722341642944","date_format":false},{"column_name":"HDR_MSG_ADDTLINF","alias_name":"","mq_id":"MQ_1722341643104","date_format":false},{"column_name":"STMT_ID","alias_name":"","mq_id":"MQ_1722341643279","date_format":false},{"column_name":"STMT_SEQUENCE_NUMBER","alias_name":"","mq_id":"MQ_1722341704627","date_format":false},{"column_name":"STMT_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722341704819","date_format":false},{"column_name":"STMT_FROMTODATE_TIME","alias_name":"","mq_id":"MQ_1722341704995","date_format":false},{"column_name":"STMT_TODATE_TIME","alias_name":"","mq_id":"MQ_1722341705179","date_format":false},{"column_name":"STMT_COPY_DUP_IND","alias_name":"","mq_id":"MQ_1722341705459","date_format":false},{"column_name":"ACCT_ID","alias_name":"","mq_id":"MQ_1722341705771","date_format":false},{"column_name":"SVCR_ACCT_ID","alias_name":"","mq_id":"MQ_1722341705987","date_format":false},{"column_name":"INSTN_ACCT_ID","alias_name":"","mq_id":"MQ_1722341765552","date_format":false},{"column_name":"PARENT_ACCT_ID","alias_name":"","mq_id":"MQ_1722341765728","date_format":false},{"column_name":"PARENT_SVCR_ACCT_ID","alias_name":"","mq_id":"MQ_1722341765888","date_format":false},{"column_name":"PARENT_INST_ACCT_ID","alias_name":"","mq_id":"MQ_1722341766032","date_format":false},{"column_name":"BALANCE_TYPE","alias_name":"","mq_id":"MQ_1722341766208","date_format":false},{"column_name":"BALANCE_TYPE_CODE_PROP","alias_name":"","mq_id":"MQ_1722341808325","date_format":false},{"column_name":"BALANCE_TYPE_PROP","alias_name":"","mq_id":"MQ_1722341808492","date_format":false},{"column_name":"BALANCE_AMOUNT","alias_name":"","mq_id":"MQ_1722341808845","date_format":false,"currency_format":true},{"column_name":"BALANCE_CRDB_IND","alias_name":"","mq_id":"MQ_1722341809012","date_format":false},{"column_name":"STMTBALDATE","alias_name":"","mq_id":"MQ_1722341809165","date_format":false},{"column_name":"STMTBALDATETIME","alias_name":"","mq_id":"MQ_1722341809340","date_format":false},{"column_name":"COUNT_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722341868145","date_format":false},{"column_name":"SUM_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722341868305","date_format":false},{"column_name":"COUNT_NET_ENTRIES","alias_name":"","mq_id":"MQ_1722341868617","date_format":false},{"column_name":"SUM_NET_ENTRIES","alias_name":"","mq_id":"MQ_1722341868785","date_format":false},{"column_name":"NET_CRDB_IND","alias_name":"","mq_id":"MQ_1722341869001","date_format":false},{"column_name":"TOT_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722341869225","date_format":false},{"column_name":"SUM_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722341920302","date_format":false},{"column_name":"TOT_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722341920662","date_format":false},{"column_name":"SUM_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722341921006","date_format":false},{"column_name":"HDR_MSG_PGNB","alias_name":"","mq_id":"MQ_1722346291397","date_format":false},{"column_name":"ENTRY_REF","alias_name":"","mq_id":"MQ_1722410955421","date_format":false},{"column_name":"ENTRY_AMOUNT","alias_name":"","mq_id":"MQ_1722410955611","date_format":false,"currency_format":true},{"column_name":"ENTRY_CRDB_IND","alias_name":"","mq_id":"MQ_1722410955763","date_format":false},{"column_name":"ENTRY_STATUS","alias_name":"","mq_id":"MQ_1722410955915","date_format":false},{"column_name":"ENTRYBKDATE","alias_name":"","mq_id":"MQ_1722410956051","date_format":false},{"column_name":"ENTRYBKDATETIME","alias_name":"","mq_id":"MQ_1722410956211","date_format":false},{"column_name":"VALUEDATE","alias_name":"","mq_id":"MQ_1722410956387","date_format":false},{"column_name":"VALUEDATETIME","alias_name":"","mq_id":"MQ_1722411039722","date_format":false},{"column_name":"ACCT_SERV_REF","alias_name":"","mq_id":"MQ_1722411039890","date_format":false},{"column_name":"BANK_CODE_PROP","alias_name":"","mq_id":"MQ_1722411040042","date_format":false},{"column_name":"ORIG_AMOUNT","alias_name":"","mq_id":"MQ_1722411040314","date_format":false,"currency_format":true},{"column_name":"INSTD_AMOUNT","alias_name":"","mq_id":"MQ_1722411040474","date_format":false,"currency_format":true},{"column_name":"TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722411040618","date_format":false,"currency_format":true},{"column_name":"BATCH_MSG_ID","alias_name":"","mq_id":"MQ_1722411040786","date_format":false},{"column_name":"BATCH_TXN_COUNT","alias_name":"","mq_id":"MQ_1722411112313","date_format":false},{"column_name":"BATCH_TOT_AMOUNT","alias_name":"","mq_id":"MQ_1722411112545","date_format":false,"currency_format":true},{"column_name":"BATCH_CRDB_IND","alias_name":"","mq_id":"MQ_1722411112697","date_format":false},{"column_name":"TXN_REF_MSGID","alias_name":"","mq_id":"MQ_1722411112881","date_format":false},{"column_name":"TXN_ACCSVC_REF","alias_name":"","mq_id":"MQ_1722411113089","date_format":false},{"column_name":"PAYMENT_INFO_INSTD_ID","alias_name":"","mq_id":"MQ_1722411175001","date_format":false},{"column_name":"PAYMENT_INFO_ETE_ID","alias_name":"","mq_id":"MQ_1722411175361","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1722411175777","date_format":false},{"column_name":"TXN_ID","alias_name":"","mq_id":"MQ_1722411212832","date_format":false},{"column_name":"MANDATE_ID","alias_name":"","mq_id":"MQ_1722411213016","date_format":false},{"column_name":"CHEQUE_NUMBER","alias_name":"","mq_id":"MQ_1722411213328","date_format":false},{"column_name":"CLR_SYSTEM_REF","alias_name":"","mq_id":"MQ_1722411213552","date_format":false},{"column_name":"CASH_TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722411252776","date_format":false,"currency_format":true},{"column_name":"TXN_CRDB_IND","alias_name":"","mq_id":"MQ_1722411252968","date_format":false},{"column_name":"INSTRUCTING_AGENT_ID","alias_name":"","mq_id":"MQ_1722411253128","date_format":false},{"column_name":"INSTRUCTING_FIN_INST_ID","alias_name":"","mq_id":"MQ_1722411253280","date_format":false},{"column_name":"INSTRUCTING_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722411253456","date_format":false},{"column_name":"INSTRUCTED_AGENT_ID","alias_name":"","mq_id":"MQ_1722411292135","date_format":false},{"column_name":"INSTRUCTED_FIN_INST_ID","alias_name":"","mq_id":"MQ_1722411292295","date_format":false},{"column_name":"INSTRUCTED_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722411292615","date_format":false},{"column_name":"DBTR_ID","alias_name":"","mq_id":"MQ_1722411292743","date_format":false},{"column_name":"DBTR_BIC","alias_name":"","mq_id":"MQ_1722411293023","date_format":false},{"column_name":"CDTR_ID","alias_name":"","mq_id":"MQ_1722411293199","date_format":false},{"column_name":"CDTR_BIC","alias_name":"","mq_id":"MQ_1722411361606","date_format":false},{"column_name":"CREATEDDATE","alias_name":"","mq_id":"MQ_1722411361910","date_format":false}],"joins":[]},"eq_text":"select  NCS_ID,  HDR_MSG_ID,  HDR_CREATEDDATE_TIME,  HDR_MSG_RCPT,  HDR_MSG_RCPT_NAME,  HDR_MSG_RCPT_ID,  HDR_MSG_RCPT_ORGID,  HDR_MSG_RCPT_ORG_BIC,  HDR_MSG_PGNB,  HDR_MSG_LAST_PG_IND,  HDR_MSG_ADDTLINF,  STMT_ID,  STMT_SEQUENCE_NUMBER,  STMT_CREATEDDATE_TIME,  STMT_FROM_TO_DATE_TIME,  STMT_FROMTODATE_TIME,  STMT_TO_DATE_TIME,  STMT_TODATE_TIME,  STMT_COPY_DUP_IND,  ACCT_ID,  SVCR_ACCT_ID,  INSTN_ACCT_ID,  PARENT_ACCT_ID,  PARENT_SVCR_ACCT_ID,  PARENT_INST_ACCT_ID,  BALANCE_TYPE,  BALANCE_TYPE_CODE_PROP,  BALANCE_TYPE_PROP,  BALANCE_AMOUNT,  BALANCE_CRDB_IND,  STMTBALDATE,  STMTBALDATETIME,  COUNT_INDV_ENTRIES,  SUM_INDV_ENTRIES,  COUNT_NET_ENTRIES,  SUM_NET_ENTRIES,  NET_CRDB_IND,  TOT_CR_ENTRIES,  SUM_CR_ENTRIES,  TOT_DB_ENTRIES,  SUM_DB_ENTRIES,  ENTRY_REF,  ENTRY_AMOUNT,  ENTRY_CRDB_IND,  ENTRY_STATUS,  ENTRYBKDATE,  ENTRYBKDATETIME,  VALUEDATE,  VALUEDATETIME,  ACCT_SERV_REF,  BANK_CODE_PROP,  ORIG_AMOUNT,  INSTD_AMOUNT,  TXN_AMOUNT,  BATCH_MSG_ID,  BATCH_TXN_COUNT,  BATCH_TOT_AMOUNT,  BATCH_CRDB_IND,  TXN_REF_MSGID,  TXN_ACCSVC_REF,  PAYMENT_INFO_INSTD_ID,  PAYMENT_INFO_ETE_ID,  UETR,  TXN_ID,  MANDATE_ID,  CHEQUE_NUMBER,  CLR_SYSTEM_REF,  CASH_TXN_AMOUNT,  TXN_CRDB_IND,  INSTRUCTING_AGENT_ID,  INSTRUCTING_FIN_INST_ID,  INSTRUCTING_FIN_INST_BIC,  INSTRUCTED_AGENT_ID,  INSTRUCTED_FIN_INST_ID,  INSTRUCTED_FIN_INST_BIC,  DBTR_ID,  DBTR_BIC,  CDTR_ID,  CDTR_BIC,  CREATED_DATE,  CREATEDDATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO from  (  select   NCS.NCS_ID,   NCS.HDR_MSG_ID,   to_char(NCS.HDR_CREATED_DATE_TIME, 'DD/MM/YYYY') as HDR_CREATEDDATE_TIME,   NCS.HDR_MSG_RCPT,   NCS.HDR_MSG_RCPT_NAME,   NCS.HDR_MSG_RCPT_ID,   NCS.HDR_MSG_RCPT_ORGID,   NCS.HDR_MSG_RCPT_ORG_BIC,   NCS.HDR_MSG_PGNB,   NCS.HDR_MSG_LAST_PG_IND,   NCS.HDR_MSG_ADDTLINF,   NCS.STMT_ID,   NCS.STMT_SEQUENCE_NUMBER,   to_char(NCS.STMT_CREATED_DATE_TIME, 'DD/MM/YYYY') as STMT_CREATEDDATE_TIME,   NCS.STMT_FROM_TO_DATE_TIME,   to_char(NCS.STMT_FROM_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_FROMTODATE_TIME,   NCS.STMT_TO_DATE_TIME,   to_char(NCS.STMT_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_TODATE_TIME,   NCS.STMT_COPY_DUP_IND,   NCS.ACCT_ID,   NCS.SVCR_ACCT_ID,   NCS.INSTN_ACCT_ID,   NCS.PARENT_ACCT_ID,   NCS.PARENT_SVCR_ACCT_ID,   NCS.PARENT_INST_ACCT_ID,   NCS.BALANCE_TYPE,   NCS.BALANCE_TYPE_CODE_PROP,   NCS.BALANCE_TYPE_PROP,   NCS.BALANCE_AMOUNT,   NCS.BALANCE_CRDB_IND,   NCS.STMT_BAL_DATE,   to_char(NCS.STMT_BAL_DATE, 'DD/MM/YYYY') as STMTBALDATE,   NCS.STMT_BAL_DATE_TIME,   to_char(NCS.STMT_BAL_DATE_TIME, 'DD/MM/YYYY') as STMTBALDATETIME,   NCS.COUNT_INDV_ENTRIES,   NCS.SUM_INDV_ENTRIES,   NCS.COUNT_NET_ENTRIES,   NCS.SUM_NET_ENTRIES,   NCS.NET_CRDB_IND,   NCS.TOT_CR_ENTRIES,   NCS.SUM_CR_ENTRIES,   NCS.TOT_DB_ENTRIES,   NCS.SUM_DB_ENTRIES,   NCS.ENTRY_REF,   NCS.ENTRY_AMOUNT,   NCS.ENTRY_CRDB_IND,   NCS.ENTRY_STATUS,   NCS.ENTRY_BK_DATE,   to_char(NCS.ENTRY_BK_DATE, 'DD/MM/YYYY') as ENTRYBKDATE,   NCS.ENTRY_BK_DATE_TIME,   to_char(NCS.ENTRY_BK_DATE_TIME, 'DD/MM/YYYY') as ENTRYBKDATETIME,   NCS.VALUE_DATE,   to_char(NCS.VALUE_DATE, 'DD/MM/YYYY') as VALUEDATE,   NCS.VALUE_DATE_TIME,   to_char(NCS.VALUE_DATE_TIME, 'DD/MM/YYYY') as VALUEDATETIME,   NCS.ACCT_SERV_REF,   NCS.BANK_CODE_PROP,   NCS.ORIG_AMOUNT,   NCS.INSTD_AMOUNT,   NCS.TXN_AMOUNT,   NCS.BATCH_MSG_ID,   NCS.BATCH_TXN_COUNT,   NCS.BATCH_TOT_AMOUNT,   NCS.BATCH_CRDB_IND,   NCS.TXN_REF_MSGID,   NCS.TXN_ACCSVC_REF,   NCS.PAYMENT_INFO_INSTD_ID,   NCS.PAYMENT_INFO_ETE_ID,   NCS.UETR,   NCS.TXN_ID,   NCS.MANDATE_ID,   NCS.CHEQUE_NUMBER,   NCS.CLR_SYSTEM_REF,   NCS.CASH_TXN_AMOUNT,   NCS.TXN_CRDB_IND,   NCS.INSTRUCTING_AGENT_ID,   NCS.INSTRUCTING_FIN_INST_ID,   NCS.INSTRUCTING_FIN_INST_BIC,   NCS.INSTRUCTED_AGENT_ID,   NCS.INSTRUCTED_FIN_INST_ID,   NCS.INSTRUCTED_FIN_INST_BIC,   NCS.DBTR_ID,   NCS.DBTR_BIC,   NCS.CDTR_ID,   NCS.CDTR_BIC,   NCS.CREATED_DATE,   NCS.CREATED_BY,   NCS.CREATED_BY_NAME,   NCS.CREATED_BY_STS_ID,   TO_CHAR (NCS.CREATED_DATE,'YYYY-MM-DD HH:MI:SS AM') as CREATEDDATE,   NCS.DT_CODE,   NCS.DT_DESCRIPTION,   NCS.DTT_CODE,   NCS.DTT_DESCRIPTION,   NCS.MODIFIED_BY,   NCS.MODIFIED_BY_NAME,   NCS.MODIFIED_BY_STS_ID,   NCS.MODIFIED_DATE,   NCS.PRCT_ID,   NCS.STATUS,   NCS.PROCESS_STATUS,   NCS.SYSTEM_ID,   NCS.SYSTEM_NAME,   NCS.TENANT_ID,   NCS.APP_ID,   NCS.VERSION_NO  from   NPSS_CAMT53_STMT NCS)V $WHERE order by  NCS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS View camt053 View Tran Left MQ CCD","filter":[{"filter_name":"NCS_ID","binding_name":"NCS_ID","binding_value":"","source_name":"MI_LEVEL_NCS_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NCS_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"A/c Id between a/c owner and Servicer","target_column":"ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"A/c Id assigned by  Servicer","target_column":"SVCR_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"A/c Id assigned by  Institution","target_column":"INSTN_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Parent (Related) Account Id","target_column":"PARENT_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Parent (Related) A/c assigned by Servicer","target_column":"PARENT_SVCR_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Parent (Related) A/c assigned by Institution","target_column":"PARENT_INST_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Balance Type","target_column":"BALANCE_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Balance Type in Coded or Proprietary format","target_column":"BALANCE_TYPE_CODE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Balance Type in  Proprietary format","target_column":"BALANCE_TYPE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Balance Amount","target_column":"BALANCE_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Balance Credit Debit Indicator","target_column":"BALANCE_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Net CreditDebit Indicator","target_column":"NET_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Credit Entries","target_column":"TOT_CR_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sum of Credit Entries","target_column":"SUM_CR_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Debit Entries","target_column":"TOT_DB_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sum of  Debit Entries","target_column":"SUM_DB_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Amount","target_column":"ORIG_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Instructed Amount","target_column":"INSTD_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Transaction Amount","target_column":"TXN_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Message Id","target_column":"BATCH_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Transaction Count","target_column":"BATCH_TXN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Total Amount","target_column":"BATCH_TOT_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Cr/Db Indicator","target_column":"BATCH_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cheque Number","target_column":"CHEQUE_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Transaction Amount","target_column":"CASH_TXN_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Debtor Id","target_column":"DBTR_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor BIC","target_column":"DBTR_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor ID","target_column":"CDTR_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor BIC","target_column":"CDTR_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date","target_column":"CREATEDDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Entry Reference","target_column":"ENTRY_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Entry Amount","target_column":"ENTRY_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Entry Credit/Debit Indicator","target_column":"ENTRY_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Entry Status","target_column":"ENTRY_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Entry Booking Date","target_column":"ENTRYBKDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Entry Booking Date and Time","target_column":"ENTRYBKDATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.tran_details.context_menu = []
		this.tran_details.views = {}
		this.tran_details.onChangecomponent = new EventEmitter<any>()
		this.tran_details.show = true
		this.tran_details.dynamic_param = {}
	
		// Component level properties - "Header and Statement Details" 
		this.header_and_statement_details.uictrl_code = "datatable"
		this.header_and_statement_details.uicgc_desc = "Header and Statement Details"
		this.header_and_statement_details.uicgc_code = "uicgc_7"
		this.header_and_statement_details.params = {"need_search":"N","need_vertical":"Y"}
		this.header_and_statement_details.datasource = {"default":{"dt_1304_1672471156312":{"dtt_1304_1721709764304":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1721709764304","dtt_desc":"NPSS CAMT53 Statement","ds_eligible":"DS_1722422267368","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS View camt053 View Tran Left MQ CCD","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NCS_ID","alias_name":"","mq_id":"MQ_1722341609376","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1722341609672","date_format":false},{"column_name":"HDR_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722341609872","date_format":false},{"column_name":"HDR_MSG_RCPT","alias_name":"","mq_id":"MQ_1722341610032","date_format":false},{"column_name":"HDR_MSG_RCPT_NAME","alias_name":"","mq_id":"MQ_1722341610200","date_format":false},{"column_name":"HDR_MSG_RCPT_ID","alias_name":"","mq_id":"MQ_1722341642288","date_format":false},{"column_name":"HDR_MSG_RCPT_ORGID","alias_name":"","mq_id":"MQ_1722341642484","date_format":false},{"column_name":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","mq_id":"MQ_1722341642647","date_format":false},{"column_name":"HDR_MSG_LAST_PG_IND","alias_name":"","mq_id":"MQ_1722341642944","date_format":false},{"column_name":"HDR_MSG_ADDTLINF","alias_name":"","mq_id":"MQ_1722341643104","date_format":false},{"column_name":"STMT_ID","alias_name":"","mq_id":"MQ_1722341643279","date_format":false},{"column_name":"STMT_SEQUENCE_NUMBER","alias_name":"","mq_id":"MQ_1722341704627","date_format":false},{"column_name":"STMT_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722341704819","date_format":false},{"column_name":"STMT_FROMTODATE_TIME","alias_name":"","mq_id":"MQ_1722341704995","date_format":false},{"column_name":"STMT_TODATE_TIME","alias_name":"","mq_id":"MQ_1722341705179","date_format":false},{"column_name":"STMT_COPY_DUP_IND","alias_name":"","mq_id":"MQ_1722341705459","date_format":false},{"column_name":"ACCT_ID","alias_name":"","mq_id":"MQ_1722341705771","date_format":false},{"column_name":"SVCR_ACCT_ID","alias_name":"","mq_id":"MQ_1722341705987","date_format":false},{"column_name":"INSTN_ACCT_ID","alias_name":"","mq_id":"MQ_1722341765552","date_format":false},{"column_name":"PARENT_ACCT_ID","alias_name":"","mq_id":"MQ_1722341765728","date_format":false},{"column_name":"PARENT_SVCR_ACCT_ID","alias_name":"","mq_id":"MQ_1722341765888","date_format":false},{"column_name":"PARENT_INST_ACCT_ID","alias_name":"","mq_id":"MQ_1722341766032","date_format":false},{"column_name":"BALANCE_TYPE","alias_name":"","mq_id":"MQ_1722341766208","date_format":false},{"column_name":"BALANCE_TYPE_CODE_PROP","alias_name":"","mq_id":"MQ_1722341808325","date_format":false},{"column_name":"BALANCE_TYPE_PROP","alias_name":"","mq_id":"MQ_1722341808492","date_format":false},{"column_name":"BALANCE_AMOUNT","alias_name":"","mq_id":"MQ_1722341808845","date_format":false,"currency_format":true},{"column_name":"BALANCE_CRDB_IND","alias_name":"","mq_id":"MQ_1722341809012","date_format":false},{"column_name":"STMTBALDATE","alias_name":"","mq_id":"MQ_1722341809165","date_format":false},{"column_name":"STMTBALDATETIME","alias_name":"","mq_id":"MQ_1722341809340","date_format":false},{"column_name":"COUNT_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722341868145","date_format":false},{"column_name":"SUM_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722341868305","date_format":false},{"column_name":"COUNT_NET_ENTRIES","alias_name":"","mq_id":"MQ_1722341868617","date_format":false},{"column_name":"SUM_NET_ENTRIES","alias_name":"","mq_id":"MQ_1722341868785","date_format":false},{"column_name":"NET_CRDB_IND","alias_name":"","mq_id":"MQ_1722341869001","date_format":false},{"column_name":"TOT_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722341869225","date_format":false},{"column_name":"SUM_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722341920302","date_format":false},{"column_name":"TOT_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722341920662","date_format":false},{"column_name":"SUM_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722341921006","date_format":false},{"column_name":"HDR_MSG_PGNB","alias_name":"","mq_id":"MQ_1722346291397","date_format":false},{"column_name":"ENTRY_REF","alias_name":"","mq_id":"MQ_1722410955421","date_format":false},{"column_name":"ENTRY_AMOUNT","alias_name":"","mq_id":"MQ_1722410955611","date_format":false,"currency_format":true},{"column_name":"ENTRY_CRDB_IND","alias_name":"","mq_id":"MQ_1722410955763","date_format":false},{"column_name":"ENTRY_STATUS","alias_name":"","mq_id":"MQ_1722410955915","date_format":false},{"column_name":"ENTRYBKDATE","alias_name":"","mq_id":"MQ_1722410956051","date_format":false},{"column_name":"ENTRYBKDATETIME","alias_name":"","mq_id":"MQ_1722410956211","date_format":false},{"column_name":"VALUEDATE","alias_name":"","mq_id":"MQ_1722410956387","date_format":false},{"column_name":"VALUEDATETIME","alias_name":"","mq_id":"MQ_1722411039722","date_format":false},{"column_name":"ACCT_SERV_REF","alias_name":"","mq_id":"MQ_1722411039890","date_format":false},{"column_name":"BANK_CODE_PROP","alias_name":"","mq_id":"MQ_1722411040042","date_format":false},{"column_name":"ORIG_AMOUNT","alias_name":"","mq_id":"MQ_1722411040314","date_format":false,"currency_format":true},{"column_name":"INSTD_AMOUNT","alias_name":"","mq_id":"MQ_1722411040474","date_format":false,"currency_format":true},{"column_name":"TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722411040618","date_format":false,"currency_format":true},{"column_name":"BATCH_MSG_ID","alias_name":"","mq_id":"MQ_1722411040786","date_format":false},{"column_name":"BATCH_TXN_COUNT","alias_name":"","mq_id":"MQ_1722411112313","date_format":false},{"column_name":"BATCH_TOT_AMOUNT","alias_name":"","mq_id":"MQ_1722411112545","date_format":false,"currency_format":true},{"column_name":"BATCH_CRDB_IND","alias_name":"","mq_id":"MQ_1722411112697","date_format":false},{"column_name":"TXN_REF_MSGID","alias_name":"","mq_id":"MQ_1722411112881","date_format":false},{"column_name":"TXN_ACCSVC_REF","alias_name":"","mq_id":"MQ_1722411113089","date_format":false},{"column_name":"PAYMENT_INFO_INSTD_ID","alias_name":"","mq_id":"MQ_1722411175001","date_format":false},{"column_name":"PAYMENT_INFO_ETE_ID","alias_name":"","mq_id":"MQ_1722411175361","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1722411175777","date_format":false},{"column_name":"TXN_ID","alias_name":"","mq_id":"MQ_1722411212832","date_format":false},{"column_name":"MANDATE_ID","alias_name":"","mq_id":"MQ_1722411213016","date_format":false},{"column_name":"CHEQUE_NUMBER","alias_name":"","mq_id":"MQ_1722411213328","date_format":false},{"column_name":"CLR_SYSTEM_REF","alias_name":"","mq_id":"MQ_1722411213552","date_format":false},{"column_name":"CASH_TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722411252776","date_format":false,"currency_format":true},{"column_name":"TXN_CRDB_IND","alias_name":"","mq_id":"MQ_1722411252968","date_format":false},{"column_name":"INSTRUCTING_AGENT_ID","alias_name":"","mq_id":"MQ_1722411253128","date_format":false},{"column_name":"INSTRUCTING_FIN_INST_ID","alias_name":"","mq_id":"MQ_1722411253280","date_format":false},{"column_name":"INSTRUCTING_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722411253456","date_format":false},{"column_name":"INSTRUCTED_AGENT_ID","alias_name":"","mq_id":"MQ_1722411292135","date_format":false},{"column_name":"INSTRUCTED_FIN_INST_ID","alias_name":"","mq_id":"MQ_1722411292295","date_format":false},{"column_name":"INSTRUCTED_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722411292615","date_format":false},{"column_name":"DBTR_ID","alias_name":"","mq_id":"MQ_1722411292743","date_format":false},{"column_name":"DBTR_BIC","alias_name":"","mq_id":"MQ_1722411293023","date_format":false},{"column_name":"CDTR_ID","alias_name":"","mq_id":"MQ_1722411293199","date_format":false},{"column_name":"CDTR_BIC","alias_name":"","mq_id":"MQ_1722411361606","date_format":false},{"column_name":"CREATEDDATE","alias_name":"","mq_id":"MQ_1722411361910","date_format":false}],"joins":[]},"eq_text":"select  NCS_ID,  HDR_MSG_ID,  HDR_CREATEDDATE_TIME,  HDR_MSG_RCPT,  HDR_MSG_RCPT_NAME,  HDR_MSG_RCPT_ID,  HDR_MSG_RCPT_ORGID,  HDR_MSG_RCPT_ORG_BIC,  HDR_MSG_PGNB,  HDR_MSG_LAST_PG_IND,  HDR_MSG_ADDTLINF,  STMT_ID,  STMT_SEQUENCE_NUMBER,  STMT_CREATEDDATE_TIME,  STMT_FROM_TO_DATE_TIME,  STMT_FROMTODATE_TIME,  STMT_TO_DATE_TIME,  STMT_TODATE_TIME,  STMT_COPY_DUP_IND,  ACCT_ID,  SVCR_ACCT_ID,  INSTN_ACCT_ID,  PARENT_ACCT_ID,  PARENT_SVCR_ACCT_ID,  PARENT_INST_ACCT_ID,  BALANCE_TYPE,  BALANCE_TYPE_CODE_PROP,  BALANCE_TYPE_PROP,  BALANCE_AMOUNT,  BALANCE_CRDB_IND,  STMTBALDATE,  STMTBALDATETIME,  COUNT_INDV_ENTRIES,  SUM_INDV_ENTRIES,  COUNT_NET_ENTRIES,  SUM_NET_ENTRIES,  NET_CRDB_IND,  TOT_CR_ENTRIES,  SUM_CR_ENTRIES,  TOT_DB_ENTRIES,  SUM_DB_ENTRIES,  ENTRY_REF,  ENTRY_AMOUNT,  ENTRY_CRDB_IND,  ENTRY_STATUS,  ENTRYBKDATE,  ENTRYBKDATETIME,  VALUEDATE,  VALUEDATETIME,  ACCT_SERV_REF,  BANK_CODE_PROP,  ORIG_AMOUNT,  INSTD_AMOUNT,  TXN_AMOUNT,  BATCH_MSG_ID,  BATCH_TXN_COUNT,  BATCH_TOT_AMOUNT,  BATCH_CRDB_IND,  TXN_REF_MSGID,  TXN_ACCSVC_REF,  PAYMENT_INFO_INSTD_ID,  PAYMENT_INFO_ETE_ID,  UETR,  TXN_ID,  MANDATE_ID,  CHEQUE_NUMBER,  CLR_SYSTEM_REF,  CASH_TXN_AMOUNT,  TXN_CRDB_IND,  INSTRUCTING_AGENT_ID,  INSTRUCTING_FIN_INST_ID,  INSTRUCTING_FIN_INST_BIC,  INSTRUCTED_AGENT_ID,  INSTRUCTED_FIN_INST_ID,  INSTRUCTED_FIN_INST_BIC,  DBTR_ID,  DBTR_BIC,  CDTR_ID,  CDTR_BIC,  CREATED_DATE,  CREATEDDATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO from  (  select   NCS.NCS_ID,   NCS.HDR_MSG_ID,   to_char(NCS.HDR_CREATED_DATE_TIME, 'DD/MM/YYYY') as HDR_CREATEDDATE_TIME,   NCS.HDR_MSG_RCPT,   NCS.HDR_MSG_RCPT_NAME,   NCS.HDR_MSG_RCPT_ID,   NCS.HDR_MSG_RCPT_ORGID,   NCS.HDR_MSG_RCPT_ORG_BIC,   NCS.HDR_MSG_PGNB,   NCS.HDR_MSG_LAST_PG_IND,   NCS.HDR_MSG_ADDTLINF,   NCS.STMT_ID,   NCS.STMT_SEQUENCE_NUMBER,   to_char(NCS.STMT_CREATED_DATE_TIME, 'DD/MM/YYYY') as STMT_CREATEDDATE_TIME,   NCS.STMT_FROM_TO_DATE_TIME,   to_char(NCS.STMT_FROM_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_FROMTODATE_TIME,   NCS.STMT_TO_DATE_TIME,   to_char(NCS.STMT_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_TODATE_TIME,   NCS.STMT_COPY_DUP_IND,   NCS.ACCT_ID,   NCS.SVCR_ACCT_ID,   NCS.INSTN_ACCT_ID,   NCS.PARENT_ACCT_ID,   NCS.PARENT_SVCR_ACCT_ID,   NCS.PARENT_INST_ACCT_ID,   NCS.BALANCE_TYPE,   NCS.BALANCE_TYPE_CODE_PROP,   NCS.BALANCE_TYPE_PROP,   NCS.BALANCE_AMOUNT,   NCS.BALANCE_CRDB_IND,   NCS.STMT_BAL_DATE,   to_char(NCS.STMT_BAL_DATE, 'DD/MM/YYYY') as STMTBALDATE,   NCS.STMT_BAL_DATE_TIME,   to_char(NCS.STMT_BAL_DATE_TIME, 'DD/MM/YYYY') as STMTBALDATETIME,   NCS.COUNT_INDV_ENTRIES,   NCS.SUM_INDV_ENTRIES,   NCS.COUNT_NET_ENTRIES,   NCS.SUM_NET_ENTRIES,   NCS.NET_CRDB_IND,   NCS.TOT_CR_ENTRIES,   NCS.SUM_CR_ENTRIES,   NCS.TOT_DB_ENTRIES,   NCS.SUM_DB_ENTRIES,   NCS.ENTRY_REF,   NCS.ENTRY_AMOUNT,   NCS.ENTRY_CRDB_IND,   NCS.ENTRY_STATUS,   NCS.ENTRY_BK_DATE,   to_char(NCS.ENTRY_BK_DATE, 'DD/MM/YYYY') as ENTRYBKDATE,   NCS.ENTRY_BK_DATE_TIME,   to_char(NCS.ENTRY_BK_DATE_TIME, 'DD/MM/YYYY') as ENTRYBKDATETIME,   NCS.VALUE_DATE,   to_char(NCS.VALUE_DATE, 'DD/MM/YYYY') as VALUEDATE,   NCS.VALUE_DATE_TIME,   to_char(NCS.VALUE_DATE_TIME, 'DD/MM/YYYY') as VALUEDATETIME,   NCS.ACCT_SERV_REF,   NCS.BANK_CODE_PROP,   NCS.ORIG_AMOUNT,   NCS.INSTD_AMOUNT,   NCS.TXN_AMOUNT,   NCS.BATCH_MSG_ID,   NCS.BATCH_TXN_COUNT,   NCS.BATCH_TOT_AMOUNT,   NCS.BATCH_CRDB_IND,   NCS.TXN_REF_MSGID,   NCS.TXN_ACCSVC_REF,   NCS.PAYMENT_INFO_INSTD_ID,   NCS.PAYMENT_INFO_ETE_ID,   NCS.UETR,   NCS.TXN_ID,   NCS.MANDATE_ID,   NCS.CHEQUE_NUMBER,   NCS.CLR_SYSTEM_REF,   NCS.CASH_TXN_AMOUNT,   NCS.TXN_CRDB_IND,   NCS.INSTRUCTING_AGENT_ID,   NCS.INSTRUCTING_FIN_INST_ID,   NCS.INSTRUCTING_FIN_INST_BIC,   NCS.INSTRUCTED_AGENT_ID,   NCS.INSTRUCTED_FIN_INST_ID,   NCS.INSTRUCTED_FIN_INST_BIC,   NCS.DBTR_ID,   NCS.DBTR_BIC,   NCS.CDTR_ID,   NCS.CDTR_BIC,   NCS.CREATED_DATE,   NCS.CREATED_BY,   NCS.CREATED_BY_NAME,   NCS.CREATED_BY_STS_ID,   TO_CHAR (NCS.CREATED_DATE,'YYYY-MM-DD HH:MI:SS AM') as CREATEDDATE,   NCS.DT_CODE,   NCS.DT_DESCRIPTION,   NCS.DTT_CODE,   NCS.DTT_DESCRIPTION,   NCS.MODIFIED_BY,   NCS.MODIFIED_BY_NAME,   NCS.MODIFIED_BY_STS_ID,   NCS.MODIFIED_DATE,   NCS.PRCT_ID,   NCS.STATUS,   NCS.PROCESS_STATUS,   NCS.SYSTEM_ID,   NCS.SYSTEM_NAME,   NCS.TENANT_ID,   NCS.APP_ID,   NCS.VERSION_NO  from   NPSS_CAMT53_STMT NCS)V $WHERE order by  NCS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS View camt053 HD and Stle Details CCD","filter":[{"filter_name":"NCS_ID","binding_name":"NCS_ID","binding_value":"","source_name":"MI_LEVEL_NCS_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Header Message ID","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Created Date","target_column":"HDR_CREATEDDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Msg Recepient","target_column":"HDR_MSG_RCPT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Msg Recepient Name","target_column":"HDR_MSG_RCPT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Msg Recepient Id","target_column":"HDR_MSG_RCPT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Msg Recepient Origination Id","target_column":"HDR_MSG_RCPT_ORGID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Msg Recepient Origination BIC code","target_column":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Page Number","target_column":"HDR_MSG_PGNB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Last Page Indicator","target_column":"HDR_MSG_LAST_PG_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Msg AdditionalInfo","target_column":"HDR_MSG_ADDTLINF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Statement Identification","target_column":"STMT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Statement Electronic Sequence Number","target_column":"STMT_SEQUENCE_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Statement Created date and time","target_column":"STMT_CREATEDDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Statement from date and time","target_column":"STMT_FROMTODATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Statement to date and time","target_column":"STMT_TODATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Copy or a Duplicate indicator","target_column":"STMT_COPY_DUP_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Settlement Balance Date","target_column":"STMTBALDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Settlement Balance Date Time","target_column":"STMTBALDATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"No of Individual entries","target_column":"COUNT_INDV_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sum of Individual entries","target_column":"SUM_INDV_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count of Net entries","target_column":"COUNT_NET_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sum of net entries","target_column":"SUM_NET_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"A/c Servicer reference","target_column":"ACCT_SERV_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Code in Prop form","target_column":"BANK_CODE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Reference MsgId","target_column":"TXN_REF_MSGID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction AccountServicer Reference","target_column":"TXN_ACCSVC_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment info instruction id","target_column":"PAYMENT_INFO_INSTD_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment info end to end Id","target_column":"PAYMENT_INFO_ETE_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Reference","target_column":"CLR_SYSTEM_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mandate Id","target_column":"MANDATE_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Id","target_column":"TXN_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Credit Debit Indicator","target_column":"TXN_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instructing Agent Id","target_column":"INSTRUCTING_AGENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instructing Financial Institution Id","target_column":"INSTRUCTING_FIN_INST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instructing Financial Institution BIC","target_column":"INSTRUCTING_FIN_INST_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instructed Agent Id","target_column":"INSTRUCTED_AGENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instructed Financial istitution id","target_column":"INSTRUCTED_FIN_INST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instructed Financial Institution BIC","target_column":"INSTRUCTED_FIN_INST_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.header_and_statement_details.context_menu = []
		this.header_and_statement_details.views = {}
		this.header_and_statement_details.onChangecomponent = new EventEmitter<any>()
		this.header_and_statement_details.show = true
		this.header_and_statement_details.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_in_page_load()
		this.page_load__de_from_page_load()
		this.page_load__de_from_pg()
		this.page_load__de_for_excel()
		this.page_load__de_for_pdf()
		this.page_load__de_for_csv_btn()
	}

	//Handler for INTERNAL event of "cf in page load"
	cf_in_page_load__internal(){
		this.cf_in_page_load__cc_show_hide()
	}

	//Handler for INTERNAL event of "cc show hide"
	cc_show_hide__internal(parent_event_result){
		this.cc_show_hide__tbc_for_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_search()
		this.search_search__close_popup()
	}

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__internal(parent_event_result){
		this.ssp_for_search__brfq_for_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for list"
	brfq_for_list__internal(parent_event_result){
		this.brfq_for_list__sfr_for_list(parent_event_result)
		this.brfq_for_list__ee_for_excel(parent_event_result)
		this.brfq_for_list__ee_for_pdf(parent_event_result)
		this.brfq_for_list__ee_for_csv_btn(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_for_list()
		this.transaction_list__ssr_for_md_ui()
		this.transaction_list__ee_for_vmd()
		this.transaction_list__ee_from_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__action_button_click(){
		this.navigation_ui_view_tran__sp_for_vmd()
		this.navigation_ui_view_tran__brfq_from_view_tran_details()
		this.navigation_ui_view_tran__brfq_for_view_td()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__cui_for_nav_search()
		this.navigation_ui_search__spap_for_nav_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_for_search_clear()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view messagess"
	navigation_ui_view_messagess__action_button_click(){
		this.navigation_ui_view_messagess__bt_from_message_data()
		this.navigation_ui_view_messagess__sp_for_message_data()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui export as excel"
	navigation_ui_export_as_excel__action_button_click(){
		this.navigation_ui_export_as_excel__cc_for_e_excel()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui export as pdf"
	navigation_ui_export_as_pdf__action_button_click(){
		this.navigation_ui_export_as_pdf__cc_for_e_pdf()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui export as csv"
	navigation_ui_export_as_csv__action_button_click(){
		this.navigation_ui_export_as_csv__cc_for_csv_btn()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_in_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672474768662"
		let event_params={"caller_name":"page_load__cf_in_page_load","event_desc":"CF in Page Load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
		let handler_code="create_form"
		let internals="cf_in_page_load__cc_show_hide,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__de_from_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1722336599636"
		let event_params={"caller_name":"page_load__de_from_page_load","event_desc":"DE From Page load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="disable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.disable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__de_from_pg() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_messagess"
		let parent_source_id=""
		let event_code="e_1722401616761"
		let event_params={"caller_name":"page_load__de_from_pg","event_desc":"DE From pg","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="disable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.disable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__de_for_excel() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_export_as_excel"
		let parent_source_id=""
		let event_code="e_1722485722627"
		let event_params={"caller_name":"page_load__de_for_excel","event_desc":"DE For Excel","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="disable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.disable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__de_for_pdf() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_export_as_pdf"
		let parent_source_id=""
		let event_code="e_1722485770838"
		let event_params={"caller_name":"page_load__de_for_pdf","event_desc":"DE For PDF","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="disable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.disable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__de_for_csv_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_export_as_csv"
		let parent_source_id=""
		let event_code="e_1722917886649"
		let event_params={"caller_name":"page_load__de_for_csv_btn","event_desc":"DE For CSV btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="disable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.disable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cf in page load"
	cf_in_page_load__cc_show_hide() { 
		let Dest_Is_ctrl=true
		
		let source_id="cf_in_page_load"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1722402331296"
		let event_params={"caller_name":"cf_in_page_load__cc_show_hide","event_desc":"CC Show hide","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_show_hide__tbc_for_search,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc show hide"
	cc_show_hide__tbc_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_show_hide"
		let destn_id="search_search"
		let parent_source_id="cf_in_page_load"
		let event_code="e_1722402427791"
		let event_params={"caller_name":"cc_show_hide__tbc_for_search","event_desc":"TBC For Search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="trigger_button_click"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.trigger_button_click(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__ssp_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1672474819733"
		let event_params={"caller_name":"search_search__ssp_for_search","event_desc":"SSP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_search__brfq_for_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__close_popup() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672481992207"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__close_popup","event_desc":"Close Popup","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="close_popup"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.close_popup(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__brfq_for_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search"
		let destn_id="transaction_list"
		let parent_source_id="search_search"
		let event_code="e_1672474843740"
		let event_params={"caller_name":"ssp_for_search__brfq_for_list","event_desc":"BRFQ for List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_list__sfr_for_list,brfq_for_list__ee_for_excel,brfq_for_list__ee_for_pdf,brfq_for_list__ee_for_csv_btn,"
		let event_data={}
		let data_source={"default":{"dt_1304_1672471156312":{"dtt_1304_1721709764304":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1721709764304","dtt_desc":"NPSS CAMT53 Statement","ds_eligible":"DS_1722400268124","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS View camt053 Tran List MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1722331735138","date_format":false},{"column_name":"HDR_MSG_RCPT_NAME","alias_name":"","mq_id":"MQ_1722331735642","date_format":false},{"column_name":"HDR_MSG_RCPT_ID","alias_name":"","mq_id":"MQ_1722331735842","date_format":false},{"column_name":"STMT_ID","alias_name":"","mq_id":"MQ_1722331736026","date_format":false},{"column_name":"STMT_FROMTODATE_TIME","alias_name":"","mq_id":"MQ_1722331736194","date_format":false},{"column_name":"STMT_TODATE_TIME","alias_name":"","mq_id":"MQ_1722331736378","date_format":false},{"column_name":"INSTN_ACCT_ID","alias_name":"","mq_id":"MQ_1722331779732","date_format":false},{"column_name":"PARENT_ACCT_ID","alias_name":"","mq_id":"MQ_1722331780124","date_format":false},{"column_name":"BALANCE_TYPE","alias_name":"","mq_id":"MQ_1722331780276","date_format":false},{"column_name":"BALANCE_AMOUNT","alias_name":"","mq_id":"MQ_1722331780620","date_format":false,"currency_format":true},{"column_name":"BALANCE_CRDB_IND","alias_name":"","mq_id":"MQ_1722331780836","date_format":false},{"column_name":"STMTBALDATE","alias_name":"","mq_id":"MQ_1722331817116","date_format":false},{"column_name":"ORIG_AMOUNT","alias_name":"","mq_id":"MQ_1722331817460","date_format":false,"currency_format":true},{"column_name":"INSTD_AMOUNT","alias_name":"","mq_id":"MQ_1722331817644","date_format":false,"currency_format":true},{"column_name":"TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722331817844","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1722331855422","date_format":false},{"column_name":"TXN_ID","alias_name":"","mq_id":"MQ_1722331855654","date_format":false},{"column_name":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","mq_id":"MQ_1722603094086","date_format":false},{"column_name":"PARENT_INST_ACCT_ID","alias_name":"","mq_id":"MQ_1722603096188","date_format":false},{"column_name":"BALANCE_TYPE_PROP","alias_name":"","mq_id":"MQ_1722603096372","date_format":false},{"column_name":"TXN_REF_MSGID","alias_name":"","mq_id":"MQ_1722603096652","date_format":false},{"column_name":"TXN_ACCSVC_REF","alias_name":"","mq_id":"MQ_1722603096908","date_format":false},{"column_name":"PAYMENT_INFO_ID","alias_name":"","mq_id":"MQ_1722603140787","date_format":false},{"column_name":"PAYMENT_INFO_INSTD_ID","alias_name":"","mq_id":"MQ_1722603141035","date_format":false},{"column_name":"PAYMENT_INFO_ETE_ID","alias_name":"","mq_id":"MQ_1722603203354","date_format":false},{"column_name":"CLR_SYSTEM_REF","alias_name":"","mq_id":"MQ_1722603203577","date_format":false},{"column_name":"HDR_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722864317765","date_format":false},{"column_name":"HDR_MSG_PGNB","alias_name":"","mq_id":"MQ_1722864318116","date_format":false},{"column_name":"HDR_MSG_LAST_PG_IND","alias_name":"","mq_id":"MQ_1722864318300","date_format":false},{"column_name":"STMT_SEQUENCE_NUMBER","alias_name":"","mq_id":"MQ_1722864318484","date_format":false},{"column_name":"STMT_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722864425323","date_format":false},{"column_name":"STMT_FROMTODATE_TIME","alias_name":"","mq_id":"MQ_1722864425547","date_format":false},{"column_name":"STMT_TODATE_TIME","alias_name":"","mq_id":"MQ_1722864425755","date_format":false},{"column_name":"ACCT_ID","alias_name":"","mq_id":"MQ_1722864561617","date_format":false},{"column_name":"BALANCE_CUR","alias_name":"","mq_id":"MQ_1722864561801","date_format":false},{"column_name":"STMTBALDATE","alias_name":"","mq_id":"MQ_1722864561969","date_format":false},{"column_name":"STMT_BALDATE_TIME","alias_name":"","mq_id":"MQ_1722864562121","date_format":false},{"column_name":"COUNT_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722864562305","date_format":false},{"column_name":"SUM_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722864702066","date_format":false},{"column_name":"SUM_NET_ENTRIES","alias_name":"","mq_id":"MQ_1722864702249","date_format":false},{"column_name":"NET_CRDB_IND","alias_name":"","mq_id":"MQ_1722864702601","date_format":false},{"column_name":"TOT_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722864702953","date_format":false},{"column_name":"SUM_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722864703129","date_format":false},{"column_name":"TOT_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722864703337","date_format":false},{"column_name":"SUM_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722864797954","date_format":false},{"column_name":"ENTRY_REF","alias_name":"","mq_id":"MQ_1722864798146","date_format":false},{"column_name":"ENTRY_REF_CUR","alias_name":"","mq_id":"MQ_1722864798626","date_format":false},{"column_name":"ENTRY_AMOUNT","alias_name":"","mq_id":"MQ_1722864798922","date_format":false,"currency_format":true},{"column_name":"ENTRY_CRDB_IND","alias_name":"","mq_id":"MQ_1722864887381","date_format":false},{"column_name":"ENTRY_STATUS","alias_name":"","mq_id":"MQ_1722864887557","date_format":false},{"column_name":"ENTRYBKDATE","alias_name":"","mq_id":"MQ_1722864887917","date_format":false},{"column_name":"ENTRY_BKDATETIME","alias_name":"","mq_id":"MQ_1722864888237","date_format":false},{"column_name":"VALUEDATE","alias_name":"","mq_id":"MQ_1722864888445","date_format":false},{"column_name":"VALUEDATETIME","alias_name":"","mq_id":"MQ_1722864951055","date_format":false},{"column_name":"ACCT_SERV_REF","alias_name":"","mq_id":"MQ_1722864951239","date_format":false},{"column_name":"BANK_CODE_PROP","alias_name":"","mq_id":"MQ_1722864951567","date_format":false},{"column_name":"INSTD_CUR","alias_name":"","mq_id":"MQ_1722864951783","date_format":false},{"column_name":"TXN_CUR","alias_name":"","mq_id":"MQ_1722864951991","date_format":false},{"column_name":"BATCH_MSG_ID","alias_name":"","mq_id":"MQ_1722865027891","date_format":false},{"column_name":"BATCH_TXN_COUNT","alias_name":"","mq_id":"MQ_1722865028099","date_format":false},{"column_name":"BATCH_TOT_AMOUNT","alias_name":"","mq_id":"MQ_1722865028251","date_format":false,"currency_format":true},{"column_name":"BATCH_CRDB_IND","alias_name":"","mq_id":"MQ_1722865028427","date_format":false},{"column_name":"CASH_TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722865028595","date_format":false,"currency_format":true},{"column_name":"TXN_CRDB_IND","alias_name":"","mq_id":"MQ_1722865212432","date_format":false},{"column_name":"INSTRUCTING_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722865212632","date_format":false},{"column_name":"INSTRUCTED_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722865212832","date_format":false},{"column_name":"DBTR_BIC","alias_name":"","mq_id":"MQ_1722865266430","date_format":false},{"column_name":"CDTR_BIC","alias_name":"","mq_id":"MQ_1722865266810","date_format":false}],"joins":[]},"eq_text":"select  NCS_ID,  HDR_MSG_ID,  HDR_MSG_RCPT_NAME,  HDR_CREATED_DATE_TIME,  HDR_CREATEDDATE_TIME,  HDR_MSG_RCPT_ID,  HDR_MSG_RCPT_ORG_BIC,  HDR_MSG_PGNB,  HDR_MSG_LAST_PG_IND,  PARENT_INST_ACCT_ID,  BALANCE_TYPE_PROP,  TXN_REF_MSGID,  TXN_ACCSVC_REF,  PAYMENT_INFO_ID,  PAYMENT_INFO_INSTD_ID,  PAYMENT_INFO_ETE_ID,  CLR_SYSTEM_REF,  STMT_ID,  STMT_SEQUENCE_NUMBER,  STMT_FROM_TO_DATE_TIME,  STMT_FROMTODATE_TIME,  STMT_TO_DATE_TIME,  STMT_TODATE_TIME,  STMT_CREATEDDATE_TIME,  ACCT_ID,  INSTN_ACCT_ID,  PARENT_ACCT_ID,  BALANCE_TYPE,  BALANCE_AMOUNT,  BALANCE_CUR,  BALANCE_CRDB_IND,  STMT_BAL_DATE_TIME,  STMT_BALDATE_TIME,  STMT_BAL_DATE,  STMTBALDATE,  COUNT_INDV_ENTRIES,  SUM_INDV_ENTRIES,  SUM_NET_ENTRIES,  NET_CRDB_IND,  TOT_CR_ENTRIES,  SUM_CR_ENTRIES,  TOT_DB_ENTRIES,  SUM_DB_ENTRIES,  ENTRY_REF,   ENTRY_REF_CUR,   ENTRY_AMOUNT,   ENTRY_CRDB_IND,   ENTRY_STATUS,   ENTRY_BK_DATE,   ENTRYBKDATE,   ENTRY_BK_DATE_TIME,   ENTRY_BKDATETIME,   VALUE_DATE,   VALUEDATE,   VALUE_DATE_TIME,   VALUEDATETIME,   ACCT_SERV_REF,      BANK_CODE_PROP,   INSTD_CUR,   TXN_CUR,   BATCH_MSG_ID,   BATCH_TXN_COUNT,   BATCH_TOT_AMOUNT,   BATCH_CRDB_IND,   CASH_TXN_AMOUNT,   TXN_CRDB_IND,   INSTRUCTING_FIN_INST_BIC,   INSTRUCTED_FIN_INST_BIC,   DBTR_BIC,   CDTR_BIC,  ORIG_AMOUNT,  INSTD_AMOUNT,  TXN_AMOUNT,  UETR,  TXN_ID,  MESSAGE_DATA,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  CREATEDDATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO from  (  select   NCS.NCS_ID,   NCS.HDR_MSG_ID,   NCS.HDR_MSG_RCPT_NAME,   NCS.HDR_CREATED_DATE_TIME,   to_char(NCS.HDR_CREATED_DATE_TIME, 'DD/MM/YYYY') as HDR_CREATEDDATE_TIME,   NCS.HDR_MSG_RCPT_ID,   NCS.HDR_MSG_RCPT_ORG_BIC,   NCS.HDR_MSG_PGNB,   NCS.HDR_MSG_LAST_PG_IND,   NCS.PARENT_INST_ACCT_ID,   NCS.BALANCE_TYPE_PROP,   NCS.TXN_REF_MSGID,   NCS.TXN_ACCSVC_REF,   NCS.PAYMENT_INFO_ID,   NCS.PAYMENT_INFO_INSTD_ID,   NCS.PAYMENT_INFO_ETE_ID,   NCS.CLR_SYSTEM_REF,   NCS.STMT_ID,   NCS.STMT_SEQUENCE_NUMBER,   NCS.STMT_FROM_TO_DATE_TIME,   to_char(NCS.STMT_FROM_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_FROMTODATE_TIME,   to_char(NCS.STMT_CREATED_DATE_TIME, 'DD/MM/YYYY') as STMT_CREATEDDATE_TIME,   NCS.STMT_TO_DATE_TIME,   to_char(NCS.STMT_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_TODATE_TIME,   NCS.INSTN_ACCT_ID,   NCS.PARENT_ACCT_ID,   NCS.ACCT_ID,   NCS.BALANCE_TYPE,   NCS.BALANCE_AMOUNT,   NCS.BALANCE_CRDB_IND,   NCS.STMT_BAL_DATE,   to_char(NCS.STMT_BAL_DATE, 'DD/MM/YYYY') as STMTBALDATE,   NCS.STMT_BAL_DATE_TIME,   to_char(NCS.STMT_BAL_DATE_TIME, 'DD/MM/YYYY') as STMT_BALDATE_TIME,   NCS.COUNT_INDV_ENTRIES,   NCS.SUM_INDV_ENTRIES,   NCS.SUM_NET_ENTRIES,   NCS.NET_CRDB_IND,   NCS.TOT_CR_ENTRIES,   NCS.SUM_CR_ENTRIES,   NCS.TOT_DB_ENTRIES,   NCS.SUM_DB_ENTRIES,   NCS.ENTRY_REF,   NCS.ENTRY_REF_CUR,   NCS.ENTRY_AMOUNT,   NCS.ENTRY_CRDB_IND,   NCS.ENTRY_STATUS,   NCS.ENTRY_BK_DATE,   to_char(NCS.ENTRY_BK_DATE, 'DD/MM/YYYY') as ENTRYBKDATE,   NCS.ENTRY_BK_DATE_TIME,   to_char(NCS.ENTRY_BK_DATE_TIME, 'DD/MM/YYYY') as ENTRY_BKDATETIME,   NCS.VALUE_DATE,   to_char(NCS.VALUE_DATE, 'DD/MM/YYYY') as VALUEDATE,   NCS.VALUE_DATE_TIME,   to_char(NCS.VALUE_DATE_TIME, 'DD/MM/YYYY') as VALUEDATETIME,   NCS.ACCT_SERV_REF,   NCS.BANK_CODE_PROP,   NCS.INSTD_CUR,   NCS.TXN_CUR,   NCS.BATCH_MSG_ID,   NCS.BATCH_TXN_COUNT,   NCS.BATCH_TOT_AMOUNT,   NCS.BATCH_CRDB_IND,   NCS.CASH_TXN_AMOUNT,   NCS.TXN_CRDB_IND,   NCS.INSTRUCTING_FIN_INST_BIC,   NCS.INSTRUCTED_FIN_INST_BIC,   NCS.DBTR_BIC,   NCS.CDTR_BIC,   NCS.ORIG_AMOUNT,   NCS.INSTD_AMOUNT,   NCS.TXN_AMOUNT,   NCS.BALANCE_CUR,   NCS.UETR,   NCS.TXN_ID,   NCS.MESSAGE_DATA,   NCS.CREATED_BY,   NCS.CREATED_BY_NAME,   NCS.CREATED_BY_STS_ID,   NCS.CREATED_DATE,   TO_CHAR (NCS.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS AM') as CREATEDDATE,   NCS.DT_CODE,   NCS.DT_DESCRIPTION,   NCS.DTT_CODE,   NCS.DTT_DESCRIPTION,   NCS.MODIFIED_BY,   NCS.MODIFIED_BY_NAME,   NCS.MODIFIED_BY_STS_ID,   NCS.MODIFIED_DATE,   NCS.PRCT_ID,   NCS.STATUS,   NCS.PROCESS_STATUS,   NCS.SYSTEM_ID,   NCS.SYSTEM_NAME,   NCS.TENANT_ID,   NCS.APP_ID,   NCS.VERSION_NO  from   NPSS_CAMT53_STMT NCS)V $WHERE order by  NCS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS View camt053 Tran List MQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"HdrMsgId","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrCreDtTm","target_column":"HDR_CREATEDDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrRcptNm","target_column":"HDR_MSG_RCPT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrRcptAnyBIC","target_column":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrPgNb","target_column":"HDR_MSG_PGNB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrLastPgInd","target_column":"HDR_MSG_LAST_PG_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtId","target_column":"STMT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtElcSeqNum","target_column":"STMT_SEQUENCE_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtCreDtTm","target_column":"STMT_CREATEDDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtFromDt","target_column":"STMT_FROMTODATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtToDt","target_column":"STMT_TODATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"AcctId","target_column":"ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RltdAcct","target_column":"PARENT_INST_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalPrtry","target_column":"BALANCE_TYPE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalAmt","target_column":"BALANCE_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"BalCcy","target_column":"BALANCE_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalCdtDbtInd","target_column":"BALANCE_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalDt","target_column":"STMTBALDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalDtTm","target_column":"STMT_BALDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NbOfNtriesTtl","target_column":"COUNT_INDV_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"SumTtl","target_column":"SUM_INDV_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlNetNtryAmt","target_column":"SUM_NET_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlNetNtryCdtDbtInd","target_column":"NET_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlCdtNtries","target_column":"TOT_CR_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlCdtNtriesSum","target_column":"SUM_CR_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlDbtNtries","target_column":"TOT_DB_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlDbtNtriesSum","target_column":"SUM_DB_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryRef","target_column":"ENTRY_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryRefCcy","target_column":"ENTRY_REF_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryRefAmt","target_column":"ENTRY_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"NtryCdtDbtInd","target_column":"ENTRY_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StsCd","target_column":"ENTRY_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BookgDt","target_column":"ENTRYBKDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BookgDtTm","target_column":"ENTRY_BKDATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"ValDt","target_column":"VALUEDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"ValDtTm","target_column":"VALUEDATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"AcctSRef","target_column":"ACCT_SERV_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BkTxCd","target_column":"BANK_CODE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"InstdAmt","target_column":"INSTD_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"InstdCcy","target_column":"INSTD_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxAmt","target_column":"TXN_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"TxCcy","target_column":"TXN_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryBtchMsgId","target_column":"BATCH_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryBtchNbOfTxs","target_column":"BATCH_TXN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryBtchTtlAmt","target_column":"BATCH_TOT_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"NtryBtchCdtDbtInd","target_column":"BATCH_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxAcctSRef","target_column":"TXN_ACCSVC_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxPmtInfId","target_column":"PAYMENT_INFO_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxEndToEndId","target_column":"PAYMENT_INFO_ETE_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxUETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxId","target_column":"TXN_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxClrSysRef","target_column":"CLR_SYSTEM_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxDtlsAmt","target_column":"CASH_TXN_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"TxDtlsCdtDbtInd","target_column":"TXN_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"InstgAgtBICFI","target_column":"INSTRUCTING_FIN_INST_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"InstdAgtBICFI","target_column":"INSTRUCTED_FIN_INST_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DbtrAgtBIC","target_column":"DBTR_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CdtrAgtBIC","target_column":"CDTR_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for list"
	brfq_for_list__sfr_for_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_list"
		let destn_id="transaction_list"
		let parent_source_id="ssp_for_search"
		let event_code="e_1672474861580"
		let event_params={"caller_name":"brfq_for_list__sfr_for_list","event_desc":"SFR for List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1672471156312":{"dtt_1304_1721709764304":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1721709764304","dtt_desc":"NPSS CAMT53 Statement","ds_eligible":"DS_1722400268124","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS View camt053 Tran List MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1722331735138","date_format":false},{"column_name":"HDR_MSG_RCPT_NAME","alias_name":"","mq_id":"MQ_1722331735642","date_format":false},{"column_name":"HDR_MSG_RCPT_ID","alias_name":"","mq_id":"MQ_1722331735842","date_format":false},{"column_name":"STMT_ID","alias_name":"","mq_id":"MQ_1722331736026","date_format":false},{"column_name":"STMT_FROMTODATE_TIME","alias_name":"","mq_id":"MQ_1722331736194","date_format":false},{"column_name":"STMT_TODATE_TIME","alias_name":"","mq_id":"MQ_1722331736378","date_format":false},{"column_name":"INSTN_ACCT_ID","alias_name":"","mq_id":"MQ_1722331779732","date_format":false},{"column_name":"PARENT_ACCT_ID","alias_name":"","mq_id":"MQ_1722331780124","date_format":false},{"column_name":"BALANCE_TYPE","alias_name":"","mq_id":"MQ_1722331780276","date_format":false},{"column_name":"BALANCE_AMOUNT","alias_name":"","mq_id":"MQ_1722331780620","date_format":false,"currency_format":true},{"column_name":"BALANCE_CRDB_IND","alias_name":"","mq_id":"MQ_1722331780836","date_format":false},{"column_name":"STMTBALDATE","alias_name":"","mq_id":"MQ_1722331817116","date_format":false},{"column_name":"ORIG_AMOUNT","alias_name":"","mq_id":"MQ_1722331817460","date_format":false,"currency_format":true},{"column_name":"INSTD_AMOUNT","alias_name":"","mq_id":"MQ_1722331817644","date_format":false,"currency_format":true},{"column_name":"TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722331817844","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1722331855422","date_format":false},{"column_name":"TXN_ID","alias_name":"","mq_id":"MQ_1722331855654","date_format":false},{"column_name":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","mq_id":"MQ_1722603094086","date_format":false},{"column_name":"PARENT_INST_ACCT_ID","alias_name":"","mq_id":"MQ_1722603096188","date_format":false},{"column_name":"BALANCE_TYPE_PROP","alias_name":"","mq_id":"MQ_1722603096372","date_format":false},{"column_name":"TXN_REF_MSGID","alias_name":"","mq_id":"MQ_1722603096652","date_format":false},{"column_name":"TXN_ACCSVC_REF","alias_name":"","mq_id":"MQ_1722603096908","date_format":false},{"column_name":"PAYMENT_INFO_ID","alias_name":"","mq_id":"MQ_1722603140787","date_format":false},{"column_name":"PAYMENT_INFO_INSTD_ID","alias_name":"","mq_id":"MQ_1722603141035","date_format":false},{"column_name":"PAYMENT_INFO_ETE_ID","alias_name":"","mq_id":"MQ_1722603203354","date_format":false},{"column_name":"CLR_SYSTEM_REF","alias_name":"","mq_id":"MQ_1722603203577","date_format":false},{"column_name":"HDR_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722864317765","date_format":false},{"column_name":"HDR_MSG_PGNB","alias_name":"","mq_id":"MQ_1722864318116","date_format":false},{"column_name":"HDR_MSG_LAST_PG_IND","alias_name":"","mq_id":"MQ_1722864318300","date_format":false},{"column_name":"STMT_SEQUENCE_NUMBER","alias_name":"","mq_id":"MQ_1722864318484","date_format":false},{"column_name":"STMT_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722864425323","date_format":false},{"column_name":"STMT_FROMTODATE_TIME","alias_name":"","mq_id":"MQ_1722864425547","date_format":false},{"column_name":"STMT_TODATE_TIME","alias_name":"","mq_id":"MQ_1722864425755","date_format":false},{"column_name":"ACCT_ID","alias_name":"","mq_id":"MQ_1722864561617","date_format":false},{"column_name":"BALANCE_CUR","alias_name":"","mq_id":"MQ_1722864561801","date_format":false},{"column_name":"STMTBALDATE","alias_name":"","mq_id":"MQ_1722864561969","date_format":false},{"column_name":"STMT_BALDATE_TIME","alias_name":"","mq_id":"MQ_1722864562121","date_format":false},{"column_name":"COUNT_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722864562305","date_format":false},{"column_name":"SUM_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722864702066","date_format":false},{"column_name":"SUM_NET_ENTRIES","alias_name":"","mq_id":"MQ_1722864702249","date_format":false},{"column_name":"NET_CRDB_IND","alias_name":"","mq_id":"MQ_1722864702601","date_format":false},{"column_name":"TOT_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722864702953","date_format":false},{"column_name":"SUM_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722864703129","date_format":false},{"column_name":"TOT_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722864703337","date_format":false},{"column_name":"SUM_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722864797954","date_format":false},{"column_name":"ENTRY_REF","alias_name":"","mq_id":"MQ_1722864798146","date_format":false},{"column_name":"ENTRY_REF_CUR","alias_name":"","mq_id":"MQ_1722864798626","date_format":false},{"column_name":"ENTRY_AMOUNT","alias_name":"","mq_id":"MQ_1722864798922","date_format":false,"currency_format":true},{"column_name":"ENTRY_CRDB_IND","alias_name":"","mq_id":"MQ_1722864887381","date_format":false},{"column_name":"ENTRY_STATUS","alias_name":"","mq_id":"MQ_1722864887557","date_format":false},{"column_name":"ENTRYBKDATE","alias_name":"","mq_id":"MQ_1722864887917","date_format":false},{"column_name":"ENTRY_BKDATETIME","alias_name":"","mq_id":"MQ_1722864888237","date_format":false},{"column_name":"VALUEDATE","alias_name":"","mq_id":"MQ_1722864888445","date_format":false},{"column_name":"VALUEDATETIME","alias_name":"","mq_id":"MQ_1722864951055","date_format":false},{"column_name":"ACCT_SERV_REF","alias_name":"","mq_id":"MQ_1722864951239","date_format":false},{"column_name":"BANK_CODE_PROP","alias_name":"","mq_id":"MQ_1722864951567","date_format":false},{"column_name":"INSTD_CUR","alias_name":"","mq_id":"MQ_1722864951783","date_format":false},{"column_name":"TXN_CUR","alias_name":"","mq_id":"MQ_1722864951991","date_format":false},{"column_name":"BATCH_MSG_ID","alias_name":"","mq_id":"MQ_1722865027891","date_format":false},{"column_name":"BATCH_TXN_COUNT","alias_name":"","mq_id":"MQ_1722865028099","date_format":false},{"column_name":"BATCH_TOT_AMOUNT","alias_name":"","mq_id":"MQ_1722865028251","date_format":false,"currency_format":true},{"column_name":"BATCH_CRDB_IND","alias_name":"","mq_id":"MQ_1722865028427","date_format":false},{"column_name":"CASH_TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722865028595","date_format":false,"currency_format":true},{"column_name":"TXN_CRDB_IND","alias_name":"","mq_id":"MQ_1722865212432","date_format":false},{"column_name":"INSTRUCTING_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722865212632","date_format":false},{"column_name":"INSTRUCTED_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722865212832","date_format":false},{"column_name":"DBTR_BIC","alias_name":"","mq_id":"MQ_1722865266430","date_format":false},{"column_name":"CDTR_BIC","alias_name":"","mq_id":"MQ_1722865266810","date_format":false}],"joins":[]},"eq_text":"select  NCS_ID,  HDR_MSG_ID,  HDR_MSG_RCPT_NAME,  HDR_CREATED_DATE_TIME,  HDR_CREATEDDATE_TIME,  HDR_MSG_RCPT_ID,  HDR_MSG_RCPT_ORG_BIC,  HDR_MSG_PGNB,  HDR_MSG_LAST_PG_IND,  PARENT_INST_ACCT_ID,  BALANCE_TYPE_PROP,  TXN_REF_MSGID,  TXN_ACCSVC_REF,  PAYMENT_INFO_ID,  PAYMENT_INFO_INSTD_ID,  PAYMENT_INFO_ETE_ID,  CLR_SYSTEM_REF,  STMT_ID,  STMT_SEQUENCE_NUMBER,  STMT_FROM_TO_DATE_TIME,  STMT_FROMTODATE_TIME,  STMT_TO_DATE_TIME,  STMT_TODATE_TIME,  STMT_CREATEDDATE_TIME,  ACCT_ID,  INSTN_ACCT_ID,  PARENT_ACCT_ID,  BALANCE_TYPE,  BALANCE_AMOUNT,  BALANCE_CUR,  BALANCE_CRDB_IND,  STMT_BAL_DATE_TIME,  STMT_BALDATE_TIME,  STMT_BAL_DATE,  STMTBALDATE,  COUNT_INDV_ENTRIES,  SUM_INDV_ENTRIES,  SUM_NET_ENTRIES,  NET_CRDB_IND,  TOT_CR_ENTRIES,  SUM_CR_ENTRIES,  TOT_DB_ENTRIES,  SUM_DB_ENTRIES,  ENTRY_REF,   ENTRY_REF_CUR,   ENTRY_AMOUNT,   ENTRY_CRDB_IND,   ENTRY_STATUS,   ENTRY_BK_DATE,   ENTRYBKDATE,   ENTRY_BK_DATE_TIME,   ENTRY_BKDATETIME,   VALUE_DATE,   VALUEDATE,   VALUE_DATE_TIME,   VALUEDATETIME,   ACCT_SERV_REF,      BANK_CODE_PROP,   INSTD_CUR,   TXN_CUR,   BATCH_MSG_ID,   BATCH_TXN_COUNT,   BATCH_TOT_AMOUNT,   BATCH_CRDB_IND,   CASH_TXN_AMOUNT,   TXN_CRDB_IND,   INSTRUCTING_FIN_INST_BIC,   INSTRUCTED_FIN_INST_BIC,   DBTR_BIC,   CDTR_BIC,  ORIG_AMOUNT,  INSTD_AMOUNT,  TXN_AMOUNT,  UETR,  TXN_ID,  MESSAGE_DATA,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  CREATEDDATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO from  (  select   NCS.NCS_ID,   NCS.HDR_MSG_ID,   NCS.HDR_MSG_RCPT_NAME,   NCS.HDR_CREATED_DATE_TIME,   to_char(NCS.HDR_CREATED_DATE_TIME, 'DD/MM/YYYY') as HDR_CREATEDDATE_TIME,   NCS.HDR_MSG_RCPT_ID,   NCS.HDR_MSG_RCPT_ORG_BIC,   NCS.HDR_MSG_PGNB,   NCS.HDR_MSG_LAST_PG_IND,   NCS.PARENT_INST_ACCT_ID,   NCS.BALANCE_TYPE_PROP,   NCS.TXN_REF_MSGID,   NCS.TXN_ACCSVC_REF,   NCS.PAYMENT_INFO_ID,   NCS.PAYMENT_INFO_INSTD_ID,   NCS.PAYMENT_INFO_ETE_ID,   NCS.CLR_SYSTEM_REF,   NCS.STMT_ID,   NCS.STMT_SEQUENCE_NUMBER,   NCS.STMT_FROM_TO_DATE_TIME,   to_char(NCS.STMT_FROM_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_FROMTODATE_TIME,   to_char(NCS.STMT_CREATED_DATE_TIME, 'DD/MM/YYYY') as STMT_CREATEDDATE_TIME,   NCS.STMT_TO_DATE_TIME,   to_char(NCS.STMT_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_TODATE_TIME,   NCS.INSTN_ACCT_ID,   NCS.PARENT_ACCT_ID,   NCS.ACCT_ID,   NCS.BALANCE_TYPE,   NCS.BALANCE_AMOUNT,   NCS.BALANCE_CRDB_IND,   NCS.STMT_BAL_DATE,   to_char(NCS.STMT_BAL_DATE, 'DD/MM/YYYY') as STMTBALDATE,   NCS.STMT_BAL_DATE_TIME,   to_char(NCS.STMT_BAL_DATE_TIME, 'DD/MM/YYYY') as STMT_BALDATE_TIME,   NCS.COUNT_INDV_ENTRIES,   NCS.SUM_INDV_ENTRIES,   NCS.SUM_NET_ENTRIES,   NCS.NET_CRDB_IND,   NCS.TOT_CR_ENTRIES,   NCS.SUM_CR_ENTRIES,   NCS.TOT_DB_ENTRIES,   NCS.SUM_DB_ENTRIES,   NCS.ENTRY_REF,   NCS.ENTRY_REF_CUR,   NCS.ENTRY_AMOUNT,   NCS.ENTRY_CRDB_IND,   NCS.ENTRY_STATUS,   NCS.ENTRY_BK_DATE,   to_char(NCS.ENTRY_BK_DATE, 'DD/MM/YYYY') as ENTRYBKDATE,   NCS.ENTRY_BK_DATE_TIME,   to_char(NCS.ENTRY_BK_DATE_TIME, 'DD/MM/YYYY') as ENTRY_BKDATETIME,   NCS.VALUE_DATE,   to_char(NCS.VALUE_DATE, 'DD/MM/YYYY') as VALUEDATE,   NCS.VALUE_DATE_TIME,   to_char(NCS.VALUE_DATE_TIME, 'DD/MM/YYYY') as VALUEDATETIME,   NCS.ACCT_SERV_REF,   NCS.BANK_CODE_PROP,   NCS.INSTD_CUR,   NCS.TXN_CUR,   NCS.BATCH_MSG_ID,   NCS.BATCH_TXN_COUNT,   NCS.BATCH_TOT_AMOUNT,   NCS.BATCH_CRDB_IND,   NCS.CASH_TXN_AMOUNT,   NCS.TXN_CRDB_IND,   NCS.INSTRUCTING_FIN_INST_BIC,   NCS.INSTRUCTED_FIN_INST_BIC,   NCS.DBTR_BIC,   NCS.CDTR_BIC,   NCS.ORIG_AMOUNT,   NCS.INSTD_AMOUNT,   NCS.TXN_AMOUNT,   NCS.BALANCE_CUR,   NCS.UETR,   NCS.TXN_ID,   NCS.MESSAGE_DATA,   NCS.CREATED_BY,   NCS.CREATED_BY_NAME,   NCS.CREATED_BY_STS_ID,   NCS.CREATED_DATE,   TO_CHAR (NCS.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS AM') as CREATEDDATE,   NCS.DT_CODE,   NCS.DT_DESCRIPTION,   NCS.DTT_CODE,   NCS.DTT_DESCRIPTION,   NCS.MODIFIED_BY,   NCS.MODIFIED_BY_NAME,   NCS.MODIFIED_BY_STS_ID,   NCS.MODIFIED_DATE,   NCS.PRCT_ID,   NCS.STATUS,   NCS.PROCESS_STATUS,   NCS.SYSTEM_ID,   NCS.SYSTEM_NAME,   NCS.TENANT_ID,   NCS.APP_ID,   NCS.VERSION_NO  from   NPSS_CAMT53_STMT NCS)V $WHERE order by  NCS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS View camt053 Tran List MQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"HdrMsgId","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrCreDtTm","target_column":"HDR_CREATEDDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrRcptNm","target_column":"HDR_MSG_RCPT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrRcptAnyBIC","target_column":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrPgNb","target_column":"HDR_MSG_PGNB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrLastPgInd","target_column":"HDR_MSG_LAST_PG_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtId","target_column":"STMT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtElcSeqNum","target_column":"STMT_SEQUENCE_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtCreDtTm","target_column":"STMT_CREATEDDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtFromDt","target_column":"STMT_FROMTODATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtToDt","target_column":"STMT_TODATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"AcctId","target_column":"ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RltdAcct","target_column":"PARENT_INST_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalPrtry","target_column":"BALANCE_TYPE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalAmt","target_column":"BALANCE_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"BalCcy","target_column":"BALANCE_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalCdtDbtInd","target_column":"BALANCE_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalDt","target_column":"STMTBALDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalDtTm","target_column":"STMT_BALDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NbOfNtriesTtl","target_column":"COUNT_INDV_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"SumTtl","target_column":"SUM_INDV_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlNetNtryAmt","target_column":"SUM_NET_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlNetNtryCdtDbtInd","target_column":"NET_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlCdtNtries","target_column":"TOT_CR_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlCdtNtriesSum","target_column":"SUM_CR_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlDbtNtries","target_column":"TOT_DB_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlDbtNtriesSum","target_column":"SUM_DB_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryRef","target_column":"ENTRY_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryRefCcy","target_column":"ENTRY_REF_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryRefAmt","target_column":"ENTRY_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"NtryCdtDbtInd","target_column":"ENTRY_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StsCd","target_column":"ENTRY_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BookgDt","target_column":"ENTRYBKDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BookgDtTm","target_column":"ENTRY_BKDATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"ValDt","target_column":"VALUEDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"ValDtTm","target_column":"VALUEDATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"AcctSRef","target_column":"ACCT_SERV_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BkTxCd","target_column":"BANK_CODE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"InstdAmt","target_column":"INSTD_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"InstdCcy","target_column":"INSTD_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxAmt","target_column":"TXN_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"TxCcy","target_column":"TXN_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryBtchMsgId","target_column":"BATCH_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryBtchNbOfTxs","target_column":"BATCH_TXN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryBtchTtlAmt","target_column":"BATCH_TOT_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"NtryBtchCdtDbtInd","target_column":"BATCH_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxAcctSRef","target_column":"TXN_ACCSVC_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxPmtInfId","target_column":"PAYMENT_INFO_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxEndToEndId","target_column":"PAYMENT_INFO_ETE_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxUETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxId","target_column":"TXN_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxClrSysRef","target_column":"CLR_SYSTEM_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxDtlsAmt","target_column":"CASH_TXN_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"TxDtlsCdtDbtInd","target_column":"TXN_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"InstgAgtBICFI","target_column":"INSTRUCTING_FIN_INST_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"InstdAgtBICFI","target_column":"INSTRUCTED_FIN_INST_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DbtrAgtBIC","target_column":"DBTR_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CdtrAgtBIC","target_column":"CDTR_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for list"
	brfq_for_list__ee_for_excel(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_list"
		let destn_id="navigation_ui_export_as_excel"
		let parent_source_id="ssp_for_search"
		let event_code="e_1722486228045"
		let event_params={"caller_name":"brfq_for_list__ee_for_excel","event_desc":"EE For Excel","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"enable_disable_count":"Y","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""},"parent_event_result":"SUCCESS"}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for list"
	brfq_for_list__ee_for_pdf(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_list"
		let destn_id="navigation_ui_export_as_pdf"
		let parent_source_id="ssp_for_search"
		let event_code="e_1722486280265"
		let event_params={"caller_name":"brfq_for_list__ee_for_pdf","event_desc":"EE For PDF","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"enable_disable_count":"Y","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""},"parent_event_result":"SUCCESS"}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for list"
	brfq_for_list__ee_for_csv_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_list"
		let destn_id="navigation_ui_export_as_csv"
		let parent_source_id="ssp_for_search"
		let event_code="e_1722919659609"
		let event_params={"caller_name":"brfq_for_list__ee_for_csv_btn","event_desc":"EE For CSV btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""},"parent_event_result":"SUCCESS"}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__svm_for_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1672474885540"
		let event_params={"caller_name":"transaction_list__svm_for_list","event_desc":"SVM for List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"transaction_list":{"e_1672474885540":{"dts":{"dt_1304_1672471156312":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1672474885540","dt_code":"DT_1304_1672471156312","dtt_code":"","dt_desc":"NPSS Liquidity Management Group","dtt_desc":"NPSS CAMT53 Statement","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NCS_ID","level":"MI_LEVEL","name":"MI_LEVEL_NCS_ID","setd3name":"NCS_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1672471156312":{"dtt_1304_1721709764304":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1721709764304","dtt_desc":"NPSS CAMT53 Statement","ds_eligible":"DS_1722400268124","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS View camt053 Tran List MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1722331735138","date_format":false},{"column_name":"HDR_MSG_RCPT_NAME","alias_name":"","mq_id":"MQ_1722331735642","date_format":false},{"column_name":"HDR_MSG_RCPT_ID","alias_name":"","mq_id":"MQ_1722331735842","date_format":false},{"column_name":"STMT_ID","alias_name":"","mq_id":"MQ_1722331736026","date_format":false},{"column_name":"STMT_FROMTODATE_TIME","alias_name":"","mq_id":"MQ_1722331736194","date_format":false},{"column_name":"STMT_TODATE_TIME","alias_name":"","mq_id":"MQ_1722331736378","date_format":false},{"column_name":"INSTN_ACCT_ID","alias_name":"","mq_id":"MQ_1722331779732","date_format":false},{"column_name":"PARENT_ACCT_ID","alias_name":"","mq_id":"MQ_1722331780124","date_format":false},{"column_name":"BALANCE_TYPE","alias_name":"","mq_id":"MQ_1722331780276","date_format":false},{"column_name":"BALANCE_AMOUNT","alias_name":"","mq_id":"MQ_1722331780620","date_format":false,"currency_format":true},{"column_name":"BALANCE_CRDB_IND","alias_name":"","mq_id":"MQ_1722331780836","date_format":false},{"column_name":"STMTBALDATE","alias_name":"","mq_id":"MQ_1722331817116","date_format":false},{"column_name":"ORIG_AMOUNT","alias_name":"","mq_id":"MQ_1722331817460","date_format":false,"currency_format":true},{"column_name":"INSTD_AMOUNT","alias_name":"","mq_id":"MQ_1722331817644","date_format":false,"currency_format":true},{"column_name":"TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722331817844","date_format":false,"currency_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1722331855422","date_format":false},{"column_name":"TXN_ID","alias_name":"","mq_id":"MQ_1722331855654","date_format":false},{"column_name":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","mq_id":"MQ_1722603094086","date_format":false},{"column_name":"PARENT_INST_ACCT_ID","alias_name":"","mq_id":"MQ_1722603096188","date_format":false},{"column_name":"BALANCE_TYPE_PROP","alias_name":"","mq_id":"MQ_1722603096372","date_format":false},{"column_name":"TXN_REF_MSGID","alias_name":"","mq_id":"MQ_1722603096652","date_format":false},{"column_name":"TXN_ACCSVC_REF","alias_name":"","mq_id":"MQ_1722603096908","date_format":false},{"column_name":"PAYMENT_INFO_ID","alias_name":"","mq_id":"MQ_1722603140787","date_format":false},{"column_name":"PAYMENT_INFO_INSTD_ID","alias_name":"","mq_id":"MQ_1722603141035","date_format":false},{"column_name":"PAYMENT_INFO_ETE_ID","alias_name":"","mq_id":"MQ_1722603203354","date_format":false},{"column_name":"CLR_SYSTEM_REF","alias_name":"","mq_id":"MQ_1722603203577","date_format":false},{"column_name":"HDR_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722864317765","date_format":false},{"column_name":"HDR_MSG_PGNB","alias_name":"","mq_id":"MQ_1722864318116","date_format":false},{"column_name":"HDR_MSG_LAST_PG_IND","alias_name":"","mq_id":"MQ_1722864318300","date_format":false},{"column_name":"STMT_SEQUENCE_NUMBER","alias_name":"","mq_id":"MQ_1722864318484","date_format":false},{"column_name":"STMT_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722864425323","date_format":false},{"column_name":"STMT_FROMTODATE_TIME","alias_name":"","mq_id":"MQ_1722864425547","date_format":false},{"column_name":"STMT_TODATE_TIME","alias_name":"","mq_id":"MQ_1722864425755","date_format":false},{"column_name":"ACCT_ID","alias_name":"","mq_id":"MQ_1722864561617","date_format":false},{"column_name":"BALANCE_CUR","alias_name":"","mq_id":"MQ_1722864561801","date_format":false},{"column_name":"STMTBALDATE","alias_name":"","mq_id":"MQ_1722864561969","date_format":false},{"column_name":"STMT_BALDATE_TIME","alias_name":"","mq_id":"MQ_1722864562121","date_format":false},{"column_name":"COUNT_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722864562305","date_format":false},{"column_name":"SUM_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722864702066","date_format":false},{"column_name":"SUM_NET_ENTRIES","alias_name":"","mq_id":"MQ_1722864702249","date_format":false},{"column_name":"NET_CRDB_IND","alias_name":"","mq_id":"MQ_1722864702601","date_format":false},{"column_name":"TOT_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722864702953","date_format":false},{"column_name":"SUM_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722864703129","date_format":false},{"column_name":"TOT_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722864703337","date_format":false},{"column_name":"SUM_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722864797954","date_format":false},{"column_name":"ENTRY_REF","alias_name":"","mq_id":"MQ_1722864798146","date_format":false},{"column_name":"ENTRY_REF_CUR","alias_name":"","mq_id":"MQ_1722864798626","date_format":false},{"column_name":"ENTRY_AMOUNT","alias_name":"","mq_id":"MQ_1722864798922","date_format":false,"currency_format":true},{"column_name":"ENTRY_CRDB_IND","alias_name":"","mq_id":"MQ_1722864887381","date_format":false},{"column_name":"ENTRY_STATUS","alias_name":"","mq_id":"MQ_1722864887557","date_format":false},{"column_name":"ENTRYBKDATE","alias_name":"","mq_id":"MQ_1722864887917","date_format":false},{"column_name":"ENTRY_BKDATETIME","alias_name":"","mq_id":"MQ_1722864888237","date_format":false},{"column_name":"VALUEDATE","alias_name":"","mq_id":"MQ_1722864888445","date_format":false},{"column_name":"VALUEDATETIME","alias_name":"","mq_id":"MQ_1722864951055","date_format":false},{"column_name":"ACCT_SERV_REF","alias_name":"","mq_id":"MQ_1722864951239","date_format":false},{"column_name":"BANK_CODE_PROP","alias_name":"","mq_id":"MQ_1722864951567","date_format":false},{"column_name":"INSTD_CUR","alias_name":"","mq_id":"MQ_1722864951783","date_format":false},{"column_name":"TXN_CUR","alias_name":"","mq_id":"MQ_1722864951991","date_format":false},{"column_name":"BATCH_MSG_ID","alias_name":"","mq_id":"MQ_1722865027891","date_format":false},{"column_name":"BATCH_TXN_COUNT","alias_name":"","mq_id":"MQ_1722865028099","date_format":false},{"column_name":"BATCH_TOT_AMOUNT","alias_name":"","mq_id":"MQ_1722865028251","date_format":false,"currency_format":true},{"column_name":"BATCH_CRDB_IND","alias_name":"","mq_id":"MQ_1722865028427","date_format":false},{"column_name":"CASH_TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722865028595","date_format":false,"currency_format":true},{"column_name":"TXN_CRDB_IND","alias_name":"","mq_id":"MQ_1722865212432","date_format":false},{"column_name":"INSTRUCTING_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722865212632","date_format":false},{"column_name":"INSTRUCTED_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722865212832","date_format":false},{"column_name":"DBTR_BIC","alias_name":"","mq_id":"MQ_1722865266430","date_format":false},{"column_name":"CDTR_BIC","alias_name":"","mq_id":"MQ_1722865266810","date_format":false}],"joins":[]},"eq_text":"select  NCS_ID,  HDR_MSG_ID,  HDR_MSG_RCPT_NAME,  HDR_CREATED_DATE_TIME,  HDR_CREATEDDATE_TIME,  HDR_MSG_RCPT_ID,  HDR_MSG_RCPT_ORG_BIC,  HDR_MSG_PGNB,  HDR_MSG_LAST_PG_IND,  PARENT_INST_ACCT_ID,  BALANCE_TYPE_PROP,  TXN_REF_MSGID,  TXN_ACCSVC_REF,  PAYMENT_INFO_ID,  PAYMENT_INFO_INSTD_ID,  PAYMENT_INFO_ETE_ID,  CLR_SYSTEM_REF,  STMT_ID,  STMT_SEQUENCE_NUMBER,  STMT_FROM_TO_DATE_TIME,  STMT_FROMTODATE_TIME,  STMT_TO_DATE_TIME,  STMT_TODATE_TIME,  STMT_CREATEDDATE_TIME,  ACCT_ID,  INSTN_ACCT_ID,  PARENT_ACCT_ID,  BALANCE_TYPE,  BALANCE_AMOUNT,  BALANCE_CUR,  BALANCE_CRDB_IND,  STMT_BAL_DATE_TIME,  STMT_BALDATE_TIME,  STMT_BAL_DATE,  STMTBALDATE,  COUNT_INDV_ENTRIES,  SUM_INDV_ENTRIES,  SUM_NET_ENTRIES,  NET_CRDB_IND,  TOT_CR_ENTRIES,  SUM_CR_ENTRIES,  TOT_DB_ENTRIES,  SUM_DB_ENTRIES,  ENTRY_REF,   ENTRY_REF_CUR,   ENTRY_AMOUNT,   ENTRY_CRDB_IND,   ENTRY_STATUS,   ENTRY_BK_DATE,   ENTRYBKDATE,   ENTRY_BK_DATE_TIME,   ENTRY_BKDATETIME,   VALUE_DATE,   VALUEDATE,   VALUE_DATE_TIME,   VALUEDATETIME,   ACCT_SERV_REF,      BANK_CODE_PROP,   INSTD_CUR,   TXN_CUR,   BATCH_MSG_ID,   BATCH_TXN_COUNT,   BATCH_TOT_AMOUNT,   BATCH_CRDB_IND,   CASH_TXN_AMOUNT,   TXN_CRDB_IND,   INSTRUCTING_FIN_INST_BIC,   INSTRUCTED_FIN_INST_BIC,   DBTR_BIC,   CDTR_BIC,  ORIG_AMOUNT,  INSTD_AMOUNT,  TXN_AMOUNT,  UETR,  TXN_ID,  MESSAGE_DATA,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  CREATEDDATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO from  (  select   NCS.NCS_ID,   NCS.HDR_MSG_ID,   NCS.HDR_MSG_RCPT_NAME,   NCS.HDR_CREATED_DATE_TIME,   to_char(NCS.HDR_CREATED_DATE_TIME, 'DD/MM/YYYY') as HDR_CREATEDDATE_TIME,   NCS.HDR_MSG_RCPT_ID,   NCS.HDR_MSG_RCPT_ORG_BIC,   NCS.HDR_MSG_PGNB,   NCS.HDR_MSG_LAST_PG_IND,   NCS.PARENT_INST_ACCT_ID,   NCS.BALANCE_TYPE_PROP,   NCS.TXN_REF_MSGID,   NCS.TXN_ACCSVC_REF,   NCS.PAYMENT_INFO_ID,   NCS.PAYMENT_INFO_INSTD_ID,   NCS.PAYMENT_INFO_ETE_ID,   NCS.CLR_SYSTEM_REF,   NCS.STMT_ID,   NCS.STMT_SEQUENCE_NUMBER,   NCS.STMT_FROM_TO_DATE_TIME,   to_char(NCS.STMT_FROM_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_FROMTODATE_TIME,   to_char(NCS.STMT_CREATED_DATE_TIME, 'DD/MM/YYYY') as STMT_CREATEDDATE_TIME,   NCS.STMT_TO_DATE_TIME,   to_char(NCS.STMT_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_TODATE_TIME,   NCS.INSTN_ACCT_ID,   NCS.PARENT_ACCT_ID,   NCS.ACCT_ID,   NCS.BALANCE_TYPE,   NCS.BALANCE_AMOUNT,   NCS.BALANCE_CRDB_IND,   NCS.STMT_BAL_DATE,   to_char(NCS.STMT_BAL_DATE, 'DD/MM/YYYY') as STMTBALDATE,   NCS.STMT_BAL_DATE_TIME,   to_char(NCS.STMT_BAL_DATE_TIME, 'DD/MM/YYYY') as STMT_BALDATE_TIME,   NCS.COUNT_INDV_ENTRIES,   NCS.SUM_INDV_ENTRIES,   NCS.SUM_NET_ENTRIES,   NCS.NET_CRDB_IND,   NCS.TOT_CR_ENTRIES,   NCS.SUM_CR_ENTRIES,   NCS.TOT_DB_ENTRIES,   NCS.SUM_DB_ENTRIES,   NCS.ENTRY_REF,   NCS.ENTRY_REF_CUR,   NCS.ENTRY_AMOUNT,   NCS.ENTRY_CRDB_IND,   NCS.ENTRY_STATUS,   NCS.ENTRY_BK_DATE,   to_char(NCS.ENTRY_BK_DATE, 'DD/MM/YYYY') as ENTRYBKDATE,   NCS.ENTRY_BK_DATE_TIME,   to_char(NCS.ENTRY_BK_DATE_TIME, 'DD/MM/YYYY') as ENTRY_BKDATETIME,   NCS.VALUE_DATE,   to_char(NCS.VALUE_DATE, 'DD/MM/YYYY') as VALUEDATE,   NCS.VALUE_DATE_TIME,   to_char(NCS.VALUE_DATE_TIME, 'DD/MM/YYYY') as VALUEDATETIME,   NCS.ACCT_SERV_REF,   NCS.BANK_CODE_PROP,   NCS.INSTD_CUR,   NCS.TXN_CUR,   NCS.BATCH_MSG_ID,   NCS.BATCH_TXN_COUNT,   NCS.BATCH_TOT_AMOUNT,   NCS.BATCH_CRDB_IND,   NCS.CASH_TXN_AMOUNT,   NCS.TXN_CRDB_IND,   NCS.INSTRUCTING_FIN_INST_BIC,   NCS.INSTRUCTED_FIN_INST_BIC,   NCS.DBTR_BIC,   NCS.CDTR_BIC,   NCS.ORIG_AMOUNT,   NCS.INSTD_AMOUNT,   NCS.TXN_AMOUNT,   NCS.BALANCE_CUR,   NCS.UETR,   NCS.TXN_ID,   NCS.MESSAGE_DATA,   NCS.CREATED_BY,   NCS.CREATED_BY_NAME,   NCS.CREATED_BY_STS_ID,   NCS.CREATED_DATE,   TO_CHAR (NCS.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS AM') as CREATEDDATE,   NCS.DT_CODE,   NCS.DT_DESCRIPTION,   NCS.DTT_CODE,   NCS.DTT_DESCRIPTION,   NCS.MODIFIED_BY,   NCS.MODIFIED_BY_NAME,   NCS.MODIFIED_BY_STS_ID,   NCS.MODIFIED_DATE,   NCS.PRCT_ID,   NCS.STATUS,   NCS.PROCESS_STATUS,   NCS.SYSTEM_ID,   NCS.SYSTEM_NAME,   NCS.TENANT_ID,   NCS.APP_ID,   NCS.VERSION_NO  from   NPSS_CAMT53_STMT NCS)V $WHERE order by  NCS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS View camt053 Tran List MQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"HdrMsgId","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrCreDtTm","target_column":"HDR_CREATEDDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrRcptNm","target_column":"HDR_MSG_RCPT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrRcptAnyBIC","target_column":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrPgNb","target_column":"HDR_MSG_PGNB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"HdrLastPgInd","target_column":"HDR_MSG_LAST_PG_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtId","target_column":"STMT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtElcSeqNum","target_column":"STMT_SEQUENCE_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtCreDtTm","target_column":"STMT_CREATEDDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtFromDt","target_column":"STMT_FROMTODATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StmtToDt","target_column":"STMT_TODATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"AcctId","target_column":"ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RltdAcct","target_column":"PARENT_INST_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalPrtry","target_column":"BALANCE_TYPE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalAmt","target_column":"BALANCE_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"BalCcy","target_column":"BALANCE_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalCdtDbtInd","target_column":"BALANCE_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalDt","target_column":"STMTBALDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BalDtTm","target_column":"STMT_BALDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NbOfNtriesTtl","target_column":"COUNT_INDV_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"SumTtl","target_column":"SUM_INDV_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlNetNtryAmt","target_column":"SUM_NET_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlNetNtryCdtDbtInd","target_column":"NET_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlCdtNtries","target_column":"TOT_CR_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlCdtNtriesSum","target_column":"SUM_CR_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlDbtNtries","target_column":"TOT_DB_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TtlDbtNtriesSum","target_column":"SUM_DB_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryRef","target_column":"ENTRY_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryRefCcy","target_column":"ENTRY_REF_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryRefAmt","target_column":"ENTRY_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"NtryCdtDbtInd","target_column":"ENTRY_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"StsCd","target_column":"ENTRY_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BookgDt","target_column":"ENTRYBKDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BookgDtTm","target_column":"ENTRY_BKDATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"ValDt","target_column":"VALUEDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"ValDtTm","target_column":"VALUEDATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"AcctSRef","target_column":"ACCT_SERV_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"BkTxCd","target_column":"BANK_CODE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"InstdAmt","target_column":"INSTD_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"InstdCcy","target_column":"INSTD_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxAmt","target_column":"TXN_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"TxCcy","target_column":"TXN_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryBtchMsgId","target_column":"BATCH_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryBtchNbOfTxs","target_column":"BATCH_TXN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"NtryBtchTtlAmt","target_column":"BATCH_TOT_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"NtryBtchCdtDbtInd","target_column":"BATCH_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxAcctSRef","target_column":"TXN_ACCSVC_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxPmtInfId","target_column":"PAYMENT_INFO_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxEndToEndId","target_column":"PAYMENT_INFO_ETE_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxUETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxId","target_column":"TXN_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxClrSysRef","target_column":"CLR_SYSTEM_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"TxDtlsAmt","target_column":"CASH_TXN_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"TxDtlsCdtDbtInd","target_column":"TXN_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"InstgAgtBICFI","target_column":"INSTRUCTING_FIN_INST_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"InstdAgtBICFI","target_column":"INSTRUCTED_FIN_INST_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DbtrAgtBIC","target_column":"DBTR_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CdtrAgtBIC","target_column":"CDTR_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ssr_for_md_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="message_data_ui"
		let parent_source_id=""
		let event_code="e_1672474999489"
		let event_params={"caller_name":"transaction_list__ssr_for_md_ui","event_desc":"SSR for MD UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
		let handler_code="set_selected_row"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.set_selected_row(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_vmd() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1672481928058"
		let event_params={"caller_name":"transaction_list__ee_for_vmd","event_desc":"EE for VMD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_from_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_messagess"
		let parent_source_id=""
		let event_code="e_1722401668332"
		let event_params={"caller_name":"transaction_list__ee_from_list","event_desc":"EE From list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
		let handler_code="enable_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.enable_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__sp_for_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672474913770"
		let event_params={"caller_name":"back_ui_back__sp_for_back","event_desc":"SP for Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1672474543218"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__sp_for_vmd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672474945337"
		let event_params={"caller_name":"navigation_ui_view_tran__sp_for_vmd","event_desc":"SP for VMD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"profile_code":"BTL_1304_1722334616978"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__brfq_from_view_tran_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="tran_details"
		let parent_source_id=""
		let event_code="e_1722347914595"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_from_view_tran_details","event_desc":"BRFQ From view tran Details","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1672471156312":{"dtt_1304_1721709764304":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1721709764304","dtt_desc":"NPSS CAMT53 Statement","ds_eligible":"DS_1722400292594","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS View camt053 View Tran Left MQ CCD","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NCS_ID","alias_name":"","mq_id":"MQ_1722341609376","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1722341609672","date_format":false},{"column_name":"HDR_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722341609872","date_format":false},{"column_name":"HDR_MSG_RCPT","alias_name":"","mq_id":"MQ_1722341610032","date_format":false},{"column_name":"HDR_MSG_RCPT_NAME","alias_name":"","mq_id":"MQ_1722341610200","date_format":false},{"column_name":"HDR_MSG_RCPT_ID","alias_name":"","mq_id":"MQ_1722341642288","date_format":false},{"column_name":"HDR_MSG_RCPT_ORGID","alias_name":"","mq_id":"MQ_1722341642484","date_format":false},{"column_name":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","mq_id":"MQ_1722341642647","date_format":false},{"column_name":"HDR_MSG_LAST_PG_IND","alias_name":"","mq_id":"MQ_1722341642944","date_format":false},{"column_name":"HDR_MSG_ADDTLINF","alias_name":"","mq_id":"MQ_1722341643104","date_format":false},{"column_name":"STMT_ID","alias_name":"","mq_id":"MQ_1722341643279","date_format":false},{"column_name":"STMT_SEQUENCE_NUMBER","alias_name":"","mq_id":"MQ_1722341704627","date_format":false},{"column_name":"STMT_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722341704819","date_format":false},{"column_name":"STMT_FROMTODATE_TIME","alias_name":"","mq_id":"MQ_1722341704995","date_format":false},{"column_name":"STMT_TODATE_TIME","alias_name":"","mq_id":"MQ_1722341705179","date_format":false},{"column_name":"STMT_COPY_DUP_IND","alias_name":"","mq_id":"MQ_1722341705459","date_format":false},{"column_name":"ACCT_ID","alias_name":"","mq_id":"MQ_1722341705771","date_format":false},{"column_name":"SVCR_ACCT_ID","alias_name":"","mq_id":"MQ_1722341705987","date_format":false},{"column_name":"INSTN_ACCT_ID","alias_name":"","mq_id":"MQ_1722341765552","date_format":false},{"column_name":"PARENT_ACCT_ID","alias_name":"","mq_id":"MQ_1722341765728","date_format":false},{"column_name":"PARENT_SVCR_ACCT_ID","alias_name":"","mq_id":"MQ_1722341765888","date_format":false},{"column_name":"PARENT_INST_ACCT_ID","alias_name":"","mq_id":"MQ_1722341766032","date_format":false},{"column_name":"BALANCE_TYPE","alias_name":"","mq_id":"MQ_1722341766208","date_format":false},{"column_name":"BALANCE_TYPE_CODE_PROP","alias_name":"","mq_id":"MQ_1722341808325","date_format":false},{"column_name":"BALANCE_TYPE_PROP","alias_name":"","mq_id":"MQ_1722341808492","date_format":false},{"column_name":"BALANCE_AMOUNT","alias_name":"","mq_id":"MQ_1722341808845","date_format":false,"currency_format":true},{"column_name":"BALANCE_CRDB_IND","alias_name":"","mq_id":"MQ_1722341809012","date_format":false},{"column_name":"STMTBALDATE","alias_name":"","mq_id":"MQ_1722341809165","date_format":false},{"column_name":"STMTBALDATETIME","alias_name":"","mq_id":"MQ_1722341809340","date_format":false},{"column_name":"COUNT_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722341868145","date_format":false},{"column_name":"SUM_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722341868305","date_format":false},{"column_name":"COUNT_NET_ENTRIES","alias_name":"","mq_id":"MQ_1722341868617","date_format":false},{"column_name":"SUM_NET_ENTRIES","alias_name":"","mq_id":"MQ_1722341868785","date_format":false},{"column_name":"NET_CRDB_IND","alias_name":"","mq_id":"MQ_1722341869001","date_format":false},{"column_name":"TOT_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722341869225","date_format":false},{"column_name":"SUM_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722341920302","date_format":false},{"column_name":"TOT_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722341920662","date_format":false},{"column_name":"SUM_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722341921006","date_format":false},{"column_name":"HDR_MSG_PGNB","alias_name":"","mq_id":"MQ_1722346291397","date_format":false},{"column_name":"ENTRY_REF","alias_name":"","mq_id":"MQ_1722410955421","date_format":false},{"column_name":"ENTRY_AMOUNT","alias_name":"","mq_id":"MQ_1722410955611","date_format":false,"currency_format":true},{"column_name":"ENTRY_CRDB_IND","alias_name":"","mq_id":"MQ_1722410955763","date_format":false},{"column_name":"ENTRY_STATUS","alias_name":"","mq_id":"MQ_1722410955915","date_format":false},{"column_name":"ENTRYBKDATE","alias_name":"","mq_id":"MQ_1722410956051","date_format":false},{"column_name":"ENTRYBKDATETIME","alias_name":"","mq_id":"MQ_1722410956211","date_format":false},{"column_name":"VALUEDATE","alias_name":"","mq_id":"MQ_1722410956387","date_format":false},{"column_name":"VALUEDATETIME","alias_name":"","mq_id":"MQ_1722411039722","date_format":false},{"column_name":"ACCT_SERV_REF","alias_name":"","mq_id":"MQ_1722411039890","date_format":false},{"column_name":"BANK_CODE_PROP","alias_name":"","mq_id":"MQ_1722411040042","date_format":false},{"column_name":"ORIG_AMOUNT","alias_name":"","mq_id":"MQ_1722411040314","date_format":false,"currency_format":true},{"column_name":"INSTD_AMOUNT","alias_name":"","mq_id":"MQ_1722411040474","date_format":false,"currency_format":true},{"column_name":"TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722411040618","date_format":false,"currency_format":true},{"column_name":"BATCH_MSG_ID","alias_name":"","mq_id":"MQ_1722411040786","date_format":false},{"column_name":"BATCH_TXN_COUNT","alias_name":"","mq_id":"MQ_1722411112313","date_format":false},{"column_name":"BATCH_TOT_AMOUNT","alias_name":"","mq_id":"MQ_1722411112545","date_format":false,"currency_format":true},{"column_name":"BATCH_CRDB_IND","alias_name":"","mq_id":"MQ_1722411112697","date_format":false},{"column_name":"TXN_REF_MSGID","alias_name":"","mq_id":"MQ_1722411112881","date_format":false},{"column_name":"TXN_ACCSVC_REF","alias_name":"","mq_id":"MQ_1722411113089","date_format":false},{"column_name":"PAYMENT_INFO_INSTD_ID","alias_name":"","mq_id":"MQ_1722411175001","date_format":false},{"column_name":"PAYMENT_INFO_ETE_ID","alias_name":"","mq_id":"MQ_1722411175361","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1722411175777","date_format":false},{"column_name":"TXN_ID","alias_name":"","mq_id":"MQ_1722411212832","date_format":false},{"column_name":"MANDATE_ID","alias_name":"","mq_id":"MQ_1722411213016","date_format":false},{"column_name":"CHEQUE_NUMBER","alias_name":"","mq_id":"MQ_1722411213328","date_format":false},{"column_name":"CLR_SYSTEM_REF","alias_name":"","mq_id":"MQ_1722411213552","date_format":false},{"column_name":"CASH_TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722411252776","date_format":false,"currency_format":true},{"column_name":"TXN_CRDB_IND","alias_name":"","mq_id":"MQ_1722411252968","date_format":false},{"column_name":"INSTRUCTING_AGENT_ID","alias_name":"","mq_id":"MQ_1722411253128","date_format":false},{"column_name":"INSTRUCTING_FIN_INST_ID","alias_name":"","mq_id":"MQ_1722411253280","date_format":false},{"column_name":"INSTRUCTING_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722411253456","date_format":false},{"column_name":"INSTRUCTED_AGENT_ID","alias_name":"","mq_id":"MQ_1722411292135","date_format":false},{"column_name":"INSTRUCTED_FIN_INST_ID","alias_name":"","mq_id":"MQ_1722411292295","date_format":false},{"column_name":"INSTRUCTED_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722411292615","date_format":false},{"column_name":"DBTR_ID","alias_name":"","mq_id":"MQ_1722411292743","date_format":false},{"column_name":"DBTR_BIC","alias_name":"","mq_id":"MQ_1722411293023","date_format":false},{"column_name":"CDTR_ID","alias_name":"","mq_id":"MQ_1722411293199","date_format":false},{"column_name":"CDTR_BIC","alias_name":"","mq_id":"MQ_1722411361606","date_format":false},{"column_name":"CREATEDDATE","alias_name":"","mq_id":"MQ_1722411361910","date_format":false}],"joins":[]},"eq_text":"select  NCS_ID,  HDR_MSG_ID,  HDR_CREATEDDATE_TIME,  HDR_MSG_RCPT,  HDR_MSG_RCPT_NAME,  HDR_MSG_RCPT_ID,  HDR_MSG_RCPT_ORGID,  HDR_MSG_RCPT_ORG_BIC,  HDR_MSG_PGNB,  HDR_MSG_LAST_PG_IND,  HDR_MSG_ADDTLINF,  STMT_ID,  STMT_SEQUENCE_NUMBER,  STMT_CREATEDDATE_TIME,  STMT_FROM_TO_DATE_TIME,  STMT_FROMTODATE_TIME,  STMT_TO_DATE_TIME,  STMT_TODATE_TIME,  STMT_COPY_DUP_IND,  ACCT_ID,  SVCR_ACCT_ID,  INSTN_ACCT_ID,  PARENT_ACCT_ID,  PARENT_SVCR_ACCT_ID,  PARENT_INST_ACCT_ID,  BALANCE_TYPE,  BALANCE_TYPE_CODE_PROP,  BALANCE_TYPE_PROP,  BALANCE_AMOUNT,  BALANCE_CRDB_IND,  STMTBALDATE,  STMTBALDATETIME,  COUNT_INDV_ENTRIES,  SUM_INDV_ENTRIES,  COUNT_NET_ENTRIES,  SUM_NET_ENTRIES,  NET_CRDB_IND,  TOT_CR_ENTRIES,  SUM_CR_ENTRIES,  TOT_DB_ENTRIES,  SUM_DB_ENTRIES,  ENTRY_REF,  ENTRY_AMOUNT,  ENTRY_CRDB_IND,  ENTRY_STATUS,  ENTRYBKDATE,  ENTRYBKDATETIME,  VALUEDATE,  VALUEDATETIME,  ACCT_SERV_REF,  BANK_CODE_PROP,  ORIG_AMOUNT,  INSTD_AMOUNT,  TXN_AMOUNT,  BATCH_MSG_ID,  BATCH_TXN_COUNT,  BATCH_TOT_AMOUNT,  BATCH_CRDB_IND,  TXN_REF_MSGID,  TXN_ACCSVC_REF,  PAYMENT_INFO_INSTD_ID,  PAYMENT_INFO_ETE_ID,  UETR,  TXN_ID,  MANDATE_ID,  CHEQUE_NUMBER,  CLR_SYSTEM_REF,  CASH_TXN_AMOUNT,  TXN_CRDB_IND,  INSTRUCTING_AGENT_ID,  INSTRUCTING_FIN_INST_ID,  INSTRUCTING_FIN_INST_BIC,  INSTRUCTED_AGENT_ID,  INSTRUCTED_FIN_INST_ID,  INSTRUCTED_FIN_INST_BIC,  DBTR_ID,  DBTR_BIC,  CDTR_ID,  CDTR_BIC,  CREATED_DATE,  CREATEDDATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO from  (  select   NCS.NCS_ID,   NCS.HDR_MSG_ID,   to_char(NCS.HDR_CREATED_DATE_TIME, 'DD/MM/YYYY') as HDR_CREATEDDATE_TIME,   NCS.HDR_MSG_RCPT,   NCS.HDR_MSG_RCPT_NAME,   NCS.HDR_MSG_RCPT_ID,   NCS.HDR_MSG_RCPT_ORGID,   NCS.HDR_MSG_RCPT_ORG_BIC,   NCS.HDR_MSG_PGNB,   NCS.HDR_MSG_LAST_PG_IND,   NCS.HDR_MSG_ADDTLINF,   NCS.STMT_ID,   NCS.STMT_SEQUENCE_NUMBER,   to_char(NCS.STMT_CREATED_DATE_TIME, 'DD/MM/YYYY') as STMT_CREATEDDATE_TIME,   NCS.STMT_FROM_TO_DATE_TIME,   to_char(NCS.STMT_FROM_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_FROMTODATE_TIME,   NCS.STMT_TO_DATE_TIME,   to_char(NCS.STMT_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_TODATE_TIME,   NCS.STMT_COPY_DUP_IND,   NCS.ACCT_ID,   NCS.SVCR_ACCT_ID,   NCS.INSTN_ACCT_ID,   NCS.PARENT_ACCT_ID,   NCS.PARENT_SVCR_ACCT_ID,   NCS.PARENT_INST_ACCT_ID,   NCS.BALANCE_TYPE,   NCS.BALANCE_TYPE_CODE_PROP,   NCS.BALANCE_TYPE_PROP,   NCS.BALANCE_AMOUNT,   NCS.BALANCE_CRDB_IND,   NCS.STMT_BAL_DATE,   to_char(NCS.STMT_BAL_DATE, 'DD/MM/YYYY') as STMTBALDATE,   NCS.STMT_BAL_DATE_TIME,   to_char(NCS.STMT_BAL_DATE_TIME, 'DD/MM/YYYY') as STMTBALDATETIME,   NCS.COUNT_INDV_ENTRIES,   NCS.SUM_INDV_ENTRIES,   NCS.COUNT_NET_ENTRIES,   NCS.SUM_NET_ENTRIES,   NCS.NET_CRDB_IND,   NCS.TOT_CR_ENTRIES,   NCS.SUM_CR_ENTRIES,   NCS.TOT_DB_ENTRIES,   NCS.SUM_DB_ENTRIES,   NCS.ENTRY_REF,   NCS.ENTRY_AMOUNT,   NCS.ENTRY_CRDB_IND,   NCS.ENTRY_STATUS,   NCS.ENTRY_BK_DATE,   to_char(NCS.ENTRY_BK_DATE, 'DD/MM/YYYY') as ENTRYBKDATE,   NCS.ENTRY_BK_DATE_TIME,   to_char(NCS.ENTRY_BK_DATE_TIME, 'DD/MM/YYYY') as ENTRYBKDATETIME,   NCS.VALUE_DATE,   to_char(NCS.VALUE_DATE, 'DD/MM/YYYY') as VALUEDATE,   NCS.VALUE_DATE_TIME,   to_char(NCS.VALUE_DATE_TIME, 'DD/MM/YYYY') as VALUEDATETIME,   NCS.ACCT_SERV_REF,   NCS.BANK_CODE_PROP,   NCS.ORIG_AMOUNT,   NCS.INSTD_AMOUNT,   NCS.TXN_AMOUNT,   NCS.BATCH_MSG_ID,   NCS.BATCH_TXN_COUNT,   NCS.BATCH_TOT_AMOUNT,   NCS.BATCH_CRDB_IND,   NCS.TXN_REF_MSGID,   NCS.TXN_ACCSVC_REF,   NCS.PAYMENT_INFO_INSTD_ID,   NCS.PAYMENT_INFO_ETE_ID,   NCS.UETR,   NCS.TXN_ID,   NCS.MANDATE_ID,   NCS.CHEQUE_NUMBER,   NCS.CLR_SYSTEM_REF,   NCS.CASH_TXN_AMOUNT,   NCS.TXN_CRDB_IND,   NCS.INSTRUCTING_AGENT_ID,   NCS.INSTRUCTING_FIN_INST_ID,   NCS.INSTRUCTING_FIN_INST_BIC,   NCS.INSTRUCTED_AGENT_ID,   NCS.INSTRUCTED_FIN_INST_ID,   NCS.INSTRUCTED_FIN_INST_BIC,   NCS.DBTR_ID,   NCS.DBTR_BIC,   NCS.CDTR_ID,   NCS.CDTR_BIC,   NCS.CREATED_DATE,   NCS.CREATED_BY,   NCS.CREATED_BY_NAME,   NCS.CREATED_BY_STS_ID,   TO_CHAR (NCS.CREATED_DATE,'YYYY-MM-DD HH:MI:SS AM') as CREATEDDATE,   NCS.DT_CODE,   NCS.DT_DESCRIPTION,   NCS.DTT_CODE,   NCS.DTT_DESCRIPTION,   NCS.MODIFIED_BY,   NCS.MODIFIED_BY_NAME,   NCS.MODIFIED_BY_STS_ID,   NCS.MODIFIED_DATE,   NCS.PRCT_ID,   NCS.STATUS,   NCS.PROCESS_STATUS,   NCS.SYSTEM_ID,   NCS.SYSTEM_NAME,   NCS.TENANT_ID,   NCS.APP_ID,   NCS.VERSION_NO  from   NPSS_CAMT53_STMT NCS)V $WHERE order by  NCS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS View camt053 View Tran Left MQ CCD","filter":[{"filter_name":"NCS_ID","binding_name":"NCS_ID","binding_value":"","source_name":"MI_LEVEL_NCS_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NCS_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"A/c Id between a/c owner and Servicer","target_column":"ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"A/c Id assigned by  Servicer","target_column":"SVCR_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"A/c Id assigned by  Institution","target_column":"INSTN_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Parent (Related) Account Id","target_column":"PARENT_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Parent (Related) A/c assigned by Servicer","target_column":"PARENT_SVCR_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Parent (Related) A/c assigned by Institution","target_column":"PARENT_INST_ACCT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Balance Type","target_column":"BALANCE_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Balance Type in Coded or Proprietary format","target_column":"BALANCE_TYPE_CODE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Balance Type in  Proprietary format","target_column":"BALANCE_TYPE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Balance Amount","target_column":"BALANCE_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Balance Credit Debit Indicator","target_column":"BALANCE_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Net CreditDebit Indicator","target_column":"NET_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Credit Entries","target_column":"TOT_CR_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sum of Credit Entries","target_column":"SUM_CR_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total Debit Entries","target_column":"TOT_DB_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sum of  Debit Entries","target_column":"SUM_DB_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Amount","target_column":"ORIG_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Instructed Amount","target_column":"INSTD_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Transaction Amount","target_column":"TXN_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Message Id","target_column":"BATCH_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Transaction Count","target_column":"BATCH_TXN_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Total Amount","target_column":"BATCH_TOT_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Cr/Db Indicator","target_column":"BATCH_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cheque Number","target_column":"CHEQUE_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cash Transaction Amount","target_column":"CASH_TXN_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Debtor Id","target_column":"DBTR_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor BIC","target_column":"DBTR_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor ID","target_column":"CDTR_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor BIC","target_column":"CDTR_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date","target_column":"CREATEDDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Entry Reference","target_column":"ENTRY_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Entry Amount","target_column":"ENTRY_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Entry Credit/Debit Indicator","target_column":"ENTRY_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Entry Status","target_column":"ENTRY_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Entry Booking Date","target_column":"ENTRYBKDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Entry Booking Date and Time","target_column":"ENTRYBKDATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__brfq_for_view_td() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="header_and_statement_details"
		let parent_source_id=""
		let event_code="e_1722348010435"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_for_view_td","event_desc":"BRFQ For View TD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1672471156312":{"dtt_1304_1721709764304":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1721709764304","dtt_desc":"NPSS CAMT53 Statement","ds_eligible":"DS_1722422267368","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS View camt053 View Tran Left MQ CCD","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NCS_ID","alias_name":"","mq_id":"MQ_1722341609376","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1722341609672","date_format":false},{"column_name":"HDR_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722341609872","date_format":false},{"column_name":"HDR_MSG_RCPT","alias_name":"","mq_id":"MQ_1722341610032","date_format":false},{"column_name":"HDR_MSG_RCPT_NAME","alias_name":"","mq_id":"MQ_1722341610200","date_format":false},{"column_name":"HDR_MSG_RCPT_ID","alias_name":"","mq_id":"MQ_1722341642288","date_format":false},{"column_name":"HDR_MSG_RCPT_ORGID","alias_name":"","mq_id":"MQ_1722341642484","date_format":false},{"column_name":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","mq_id":"MQ_1722341642647","date_format":false},{"column_name":"HDR_MSG_LAST_PG_IND","alias_name":"","mq_id":"MQ_1722341642944","date_format":false},{"column_name":"HDR_MSG_ADDTLINF","alias_name":"","mq_id":"MQ_1722341643104","date_format":false},{"column_name":"STMT_ID","alias_name":"","mq_id":"MQ_1722341643279","date_format":false},{"column_name":"STMT_SEQUENCE_NUMBER","alias_name":"","mq_id":"MQ_1722341704627","date_format":false},{"column_name":"STMT_CREATEDDATE_TIME","alias_name":"","mq_id":"MQ_1722341704819","date_format":false},{"column_name":"STMT_FROMTODATE_TIME","alias_name":"","mq_id":"MQ_1722341704995","date_format":false},{"column_name":"STMT_TODATE_TIME","alias_name":"","mq_id":"MQ_1722341705179","date_format":false},{"column_name":"STMT_COPY_DUP_IND","alias_name":"","mq_id":"MQ_1722341705459","date_format":false},{"column_name":"ACCT_ID","alias_name":"","mq_id":"MQ_1722341705771","date_format":false},{"column_name":"SVCR_ACCT_ID","alias_name":"","mq_id":"MQ_1722341705987","date_format":false},{"column_name":"INSTN_ACCT_ID","alias_name":"","mq_id":"MQ_1722341765552","date_format":false},{"column_name":"PARENT_ACCT_ID","alias_name":"","mq_id":"MQ_1722341765728","date_format":false},{"column_name":"PARENT_SVCR_ACCT_ID","alias_name":"","mq_id":"MQ_1722341765888","date_format":false},{"column_name":"PARENT_INST_ACCT_ID","alias_name":"","mq_id":"MQ_1722341766032","date_format":false},{"column_name":"BALANCE_TYPE","alias_name":"","mq_id":"MQ_1722341766208","date_format":false},{"column_name":"BALANCE_TYPE_CODE_PROP","alias_name":"","mq_id":"MQ_1722341808325","date_format":false},{"column_name":"BALANCE_TYPE_PROP","alias_name":"","mq_id":"MQ_1722341808492","date_format":false},{"column_name":"BALANCE_AMOUNT","alias_name":"","mq_id":"MQ_1722341808845","date_format":false,"currency_format":true},{"column_name":"BALANCE_CRDB_IND","alias_name":"","mq_id":"MQ_1722341809012","date_format":false},{"column_name":"STMTBALDATE","alias_name":"","mq_id":"MQ_1722341809165","date_format":false},{"column_name":"STMTBALDATETIME","alias_name":"","mq_id":"MQ_1722341809340","date_format":false},{"column_name":"COUNT_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722341868145","date_format":false},{"column_name":"SUM_INDV_ENTRIES","alias_name":"","mq_id":"MQ_1722341868305","date_format":false},{"column_name":"COUNT_NET_ENTRIES","alias_name":"","mq_id":"MQ_1722341868617","date_format":false},{"column_name":"SUM_NET_ENTRIES","alias_name":"","mq_id":"MQ_1722341868785","date_format":false},{"column_name":"NET_CRDB_IND","alias_name":"","mq_id":"MQ_1722341869001","date_format":false},{"column_name":"TOT_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722341869225","date_format":false},{"column_name":"SUM_CR_ENTRIES","alias_name":"","mq_id":"MQ_1722341920302","date_format":false},{"column_name":"TOT_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722341920662","date_format":false},{"column_name":"SUM_DB_ENTRIES","alias_name":"","mq_id":"MQ_1722341921006","date_format":false},{"column_name":"HDR_MSG_PGNB","alias_name":"","mq_id":"MQ_1722346291397","date_format":false},{"column_name":"ENTRY_REF","alias_name":"","mq_id":"MQ_1722410955421","date_format":false},{"column_name":"ENTRY_AMOUNT","alias_name":"","mq_id":"MQ_1722410955611","date_format":false,"currency_format":true},{"column_name":"ENTRY_CRDB_IND","alias_name":"","mq_id":"MQ_1722410955763","date_format":false},{"column_name":"ENTRY_STATUS","alias_name":"","mq_id":"MQ_1722410955915","date_format":false},{"column_name":"ENTRYBKDATE","alias_name":"","mq_id":"MQ_1722410956051","date_format":false},{"column_name":"ENTRYBKDATETIME","alias_name":"","mq_id":"MQ_1722410956211","date_format":false},{"column_name":"VALUEDATE","alias_name":"","mq_id":"MQ_1722410956387","date_format":false},{"column_name":"VALUEDATETIME","alias_name":"","mq_id":"MQ_1722411039722","date_format":false},{"column_name":"ACCT_SERV_REF","alias_name":"","mq_id":"MQ_1722411039890","date_format":false},{"column_name":"BANK_CODE_PROP","alias_name":"","mq_id":"MQ_1722411040042","date_format":false},{"column_name":"ORIG_AMOUNT","alias_name":"","mq_id":"MQ_1722411040314","date_format":false,"currency_format":true},{"column_name":"INSTD_AMOUNT","alias_name":"","mq_id":"MQ_1722411040474","date_format":false,"currency_format":true},{"column_name":"TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722411040618","date_format":false,"currency_format":true},{"column_name":"BATCH_MSG_ID","alias_name":"","mq_id":"MQ_1722411040786","date_format":false},{"column_name":"BATCH_TXN_COUNT","alias_name":"","mq_id":"MQ_1722411112313","date_format":false},{"column_name":"BATCH_TOT_AMOUNT","alias_name":"","mq_id":"MQ_1722411112545","date_format":false,"currency_format":true},{"column_name":"BATCH_CRDB_IND","alias_name":"","mq_id":"MQ_1722411112697","date_format":false},{"column_name":"TXN_REF_MSGID","alias_name":"","mq_id":"MQ_1722411112881","date_format":false},{"column_name":"TXN_ACCSVC_REF","alias_name":"","mq_id":"MQ_1722411113089","date_format":false},{"column_name":"PAYMENT_INFO_INSTD_ID","alias_name":"","mq_id":"MQ_1722411175001","date_format":false},{"column_name":"PAYMENT_INFO_ETE_ID","alias_name":"","mq_id":"MQ_1722411175361","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1722411175777","date_format":false},{"column_name":"TXN_ID","alias_name":"","mq_id":"MQ_1722411212832","date_format":false},{"column_name":"MANDATE_ID","alias_name":"","mq_id":"MQ_1722411213016","date_format":false},{"column_name":"CHEQUE_NUMBER","alias_name":"","mq_id":"MQ_1722411213328","date_format":false},{"column_name":"CLR_SYSTEM_REF","alias_name":"","mq_id":"MQ_1722411213552","date_format":false},{"column_name":"CASH_TXN_AMOUNT","alias_name":"","mq_id":"MQ_1722411252776","date_format":false,"currency_format":true},{"column_name":"TXN_CRDB_IND","alias_name":"","mq_id":"MQ_1722411252968","date_format":false},{"column_name":"INSTRUCTING_AGENT_ID","alias_name":"","mq_id":"MQ_1722411253128","date_format":false},{"column_name":"INSTRUCTING_FIN_INST_ID","alias_name":"","mq_id":"MQ_1722411253280","date_format":false},{"column_name":"INSTRUCTING_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722411253456","date_format":false},{"column_name":"INSTRUCTED_AGENT_ID","alias_name":"","mq_id":"MQ_1722411292135","date_format":false},{"column_name":"INSTRUCTED_FIN_INST_ID","alias_name":"","mq_id":"MQ_1722411292295","date_format":false},{"column_name":"INSTRUCTED_FIN_INST_BIC","alias_name":"","mq_id":"MQ_1722411292615","date_format":false},{"column_name":"DBTR_ID","alias_name":"","mq_id":"MQ_1722411292743","date_format":false},{"column_name":"DBTR_BIC","alias_name":"","mq_id":"MQ_1722411293023","date_format":false},{"column_name":"CDTR_ID","alias_name":"","mq_id":"MQ_1722411293199","date_format":false},{"column_name":"CDTR_BIC","alias_name":"","mq_id":"MQ_1722411361606","date_format":false},{"column_name":"CREATEDDATE","alias_name":"","mq_id":"MQ_1722411361910","date_format":false}],"joins":[]},"eq_text":"select  NCS_ID,  HDR_MSG_ID,  HDR_CREATEDDATE_TIME,  HDR_MSG_RCPT,  HDR_MSG_RCPT_NAME,  HDR_MSG_RCPT_ID,  HDR_MSG_RCPT_ORGID,  HDR_MSG_RCPT_ORG_BIC,  HDR_MSG_PGNB,  HDR_MSG_LAST_PG_IND,  HDR_MSG_ADDTLINF,  STMT_ID,  STMT_SEQUENCE_NUMBER,  STMT_CREATEDDATE_TIME,  STMT_FROM_TO_DATE_TIME,  STMT_FROMTODATE_TIME,  STMT_TO_DATE_TIME,  STMT_TODATE_TIME,  STMT_COPY_DUP_IND,  ACCT_ID,  SVCR_ACCT_ID,  INSTN_ACCT_ID,  PARENT_ACCT_ID,  PARENT_SVCR_ACCT_ID,  PARENT_INST_ACCT_ID,  BALANCE_TYPE,  BALANCE_TYPE_CODE_PROP,  BALANCE_TYPE_PROP,  BALANCE_AMOUNT,  BALANCE_CRDB_IND,  STMTBALDATE,  STMTBALDATETIME,  COUNT_INDV_ENTRIES,  SUM_INDV_ENTRIES,  COUNT_NET_ENTRIES,  SUM_NET_ENTRIES,  NET_CRDB_IND,  TOT_CR_ENTRIES,  SUM_CR_ENTRIES,  TOT_DB_ENTRIES,  SUM_DB_ENTRIES,  ENTRY_REF,  ENTRY_AMOUNT,  ENTRY_CRDB_IND,  ENTRY_STATUS,  ENTRYBKDATE,  ENTRYBKDATETIME,  VALUEDATE,  VALUEDATETIME,  ACCT_SERV_REF,  BANK_CODE_PROP,  ORIG_AMOUNT,  INSTD_AMOUNT,  TXN_AMOUNT,  BATCH_MSG_ID,  BATCH_TXN_COUNT,  BATCH_TOT_AMOUNT,  BATCH_CRDB_IND,  TXN_REF_MSGID,  TXN_ACCSVC_REF,  PAYMENT_INFO_INSTD_ID,  PAYMENT_INFO_ETE_ID,  UETR,  TXN_ID,  MANDATE_ID,  CHEQUE_NUMBER,  CLR_SYSTEM_REF,  CASH_TXN_AMOUNT,  TXN_CRDB_IND,  INSTRUCTING_AGENT_ID,  INSTRUCTING_FIN_INST_ID,  INSTRUCTING_FIN_INST_BIC,  INSTRUCTED_AGENT_ID,  INSTRUCTED_FIN_INST_ID,  INSTRUCTED_FIN_INST_BIC,  DBTR_ID,  DBTR_BIC,  CDTR_ID,  CDTR_BIC,  CREATED_DATE,  CREATEDDATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO from  (  select   NCS.NCS_ID,   NCS.HDR_MSG_ID,   to_char(NCS.HDR_CREATED_DATE_TIME, 'DD/MM/YYYY') as HDR_CREATEDDATE_TIME,   NCS.HDR_MSG_RCPT,   NCS.HDR_MSG_RCPT_NAME,   NCS.HDR_MSG_RCPT_ID,   NCS.HDR_MSG_RCPT_ORGID,   NCS.HDR_MSG_RCPT_ORG_BIC,   NCS.HDR_MSG_PGNB,   NCS.HDR_MSG_LAST_PG_IND,   NCS.HDR_MSG_ADDTLINF,   NCS.STMT_ID,   NCS.STMT_SEQUENCE_NUMBER,   to_char(NCS.STMT_CREATED_DATE_TIME, 'DD/MM/YYYY') as STMT_CREATEDDATE_TIME,   NCS.STMT_FROM_TO_DATE_TIME,   to_char(NCS.STMT_FROM_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_FROMTODATE_TIME,   NCS.STMT_TO_DATE_TIME,   to_char(NCS.STMT_TO_DATE_TIME, 'DD/MM/YYYY') as STMT_TODATE_TIME,   NCS.STMT_COPY_DUP_IND,   NCS.ACCT_ID,   NCS.SVCR_ACCT_ID,   NCS.INSTN_ACCT_ID,   NCS.PARENT_ACCT_ID,   NCS.PARENT_SVCR_ACCT_ID,   NCS.PARENT_INST_ACCT_ID,   NCS.BALANCE_TYPE,   NCS.BALANCE_TYPE_CODE_PROP,   NCS.BALANCE_TYPE_PROP,   NCS.BALANCE_AMOUNT,   NCS.BALANCE_CRDB_IND,   NCS.STMT_BAL_DATE,   to_char(NCS.STMT_BAL_DATE, 'DD/MM/YYYY') as STMTBALDATE,   NCS.STMT_BAL_DATE_TIME,   to_char(NCS.STMT_BAL_DATE_TIME, 'DD/MM/YYYY') as STMTBALDATETIME,   NCS.COUNT_INDV_ENTRIES,   NCS.SUM_INDV_ENTRIES,   NCS.COUNT_NET_ENTRIES,   NCS.SUM_NET_ENTRIES,   NCS.NET_CRDB_IND,   NCS.TOT_CR_ENTRIES,   NCS.SUM_CR_ENTRIES,   NCS.TOT_DB_ENTRIES,   NCS.SUM_DB_ENTRIES,   NCS.ENTRY_REF,   NCS.ENTRY_AMOUNT,   NCS.ENTRY_CRDB_IND,   NCS.ENTRY_STATUS,   NCS.ENTRY_BK_DATE,   to_char(NCS.ENTRY_BK_DATE, 'DD/MM/YYYY') as ENTRYBKDATE,   NCS.ENTRY_BK_DATE_TIME,   to_char(NCS.ENTRY_BK_DATE_TIME, 'DD/MM/YYYY') as ENTRYBKDATETIME,   NCS.VALUE_DATE,   to_char(NCS.VALUE_DATE, 'DD/MM/YYYY') as VALUEDATE,   NCS.VALUE_DATE_TIME,   to_char(NCS.VALUE_DATE_TIME, 'DD/MM/YYYY') as VALUEDATETIME,   NCS.ACCT_SERV_REF,   NCS.BANK_CODE_PROP,   NCS.ORIG_AMOUNT,   NCS.INSTD_AMOUNT,   NCS.TXN_AMOUNT,   NCS.BATCH_MSG_ID,   NCS.BATCH_TXN_COUNT,   NCS.BATCH_TOT_AMOUNT,   NCS.BATCH_CRDB_IND,   NCS.TXN_REF_MSGID,   NCS.TXN_ACCSVC_REF,   NCS.PAYMENT_INFO_INSTD_ID,   NCS.PAYMENT_INFO_ETE_ID,   NCS.UETR,   NCS.TXN_ID,   NCS.MANDATE_ID,   NCS.CHEQUE_NUMBER,   NCS.CLR_SYSTEM_REF,   NCS.CASH_TXN_AMOUNT,   NCS.TXN_CRDB_IND,   NCS.INSTRUCTING_AGENT_ID,   NCS.INSTRUCTING_FIN_INST_ID,   NCS.INSTRUCTING_FIN_INST_BIC,   NCS.INSTRUCTED_AGENT_ID,   NCS.INSTRUCTED_FIN_INST_ID,   NCS.INSTRUCTED_FIN_INST_BIC,   NCS.DBTR_ID,   NCS.DBTR_BIC,   NCS.CDTR_ID,   NCS.CDTR_BIC,   NCS.CREATED_DATE,   NCS.CREATED_BY,   NCS.CREATED_BY_NAME,   NCS.CREATED_BY_STS_ID,   TO_CHAR (NCS.CREATED_DATE,'YYYY-MM-DD HH:MI:SS AM') as CREATEDDATE,   NCS.DT_CODE,   NCS.DT_DESCRIPTION,   NCS.DTT_CODE,   NCS.DTT_DESCRIPTION,   NCS.MODIFIED_BY,   NCS.MODIFIED_BY_NAME,   NCS.MODIFIED_BY_STS_ID,   NCS.MODIFIED_DATE,   NCS.PRCT_ID,   NCS.STATUS,   NCS.PROCESS_STATUS,   NCS.SYSTEM_ID,   NCS.SYSTEM_NAME,   NCS.TENANT_ID,   NCS.APP_ID,   NCS.VERSION_NO  from   NPSS_CAMT53_STMT NCS)V $WHERE order by  NCS_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS View camt053 HD and Stle Details CCD","filter":[{"filter_name":"NCS_ID","binding_name":"NCS_ID","binding_value":"","source_name":"MI_LEVEL_NCS_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Header Message ID","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Created Date","target_column":"HDR_CREATEDDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Msg Recepient","target_column":"HDR_MSG_RCPT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Msg Recepient Name","target_column":"HDR_MSG_RCPT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Msg Recepient Id","target_column":"HDR_MSG_RCPT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Msg Recepient Origination Id","target_column":"HDR_MSG_RCPT_ORGID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Msg Recepient Origination BIC code","target_column":"HDR_MSG_RCPT_ORG_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Page Number","target_column":"HDR_MSG_PGNB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Last Page Indicator","target_column":"HDR_MSG_LAST_PG_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Header Msg AdditionalInfo","target_column":"HDR_MSG_ADDTLINF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Statement Identification","target_column":"STMT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Statement Electronic Sequence Number","target_column":"STMT_SEQUENCE_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Statement Created date and time","target_column":"STMT_CREATEDDATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Statement from date and time","target_column":"STMT_FROMTODATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Statement to date and time","target_column":"STMT_TODATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Copy or a Duplicate indicator","target_column":"STMT_COPY_DUP_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Settlement Balance Date","target_column":"STMTBALDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Settlement Balance Date Time","target_column":"STMTBALDATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"No of Individual entries","target_column":"COUNT_INDV_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sum of Individual entries","target_column":"SUM_INDV_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count of Net entries","target_column":"COUNT_NET_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sum of net entries","target_column":"SUM_NET_ENTRIES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"A/c Servicer reference","target_column":"ACCT_SERV_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Bank Code in Prop form","target_column":"BANK_CODE_PROP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Reference MsgId","target_column":"TXN_REF_MSGID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction AccountServicer Reference","target_column":"TXN_ACCSVC_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment info instruction id","target_column":"PAYMENT_INFO_INSTD_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment info end to end Id","target_column":"PAYMENT_INFO_ETE_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Reference","target_column":"CLR_SYSTEM_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Mandate Id","target_column":"MANDATE_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Id","target_column":"TXN_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Credit Debit Indicator","target_column":"TXN_CRDB_IND","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instructing Agent Id","target_column":"INSTRUCTING_AGENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instructing Financial Institution Id","target_column":"INSTRUCTING_FIN_INST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instructing Financial Institution BIC","target_column":"INSTRUCTING_FIN_INST_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instructed Agent Id","target_column":"INSTRUCTED_AGENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instructed Financial istitution id","target_column":"INSTRUCTED_FIN_INST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Instructed Financial Institution BIC","target_column":"INSTRUCTED_FIN_INST_BIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__cui_for_nav_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1672475021976"
		let event_params={"caller_name":"navigation_ui_search__cui_for_nav_search","event_desc":"CUI for Nav search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__spap_for_nav_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672475044312"
		let event_params={"caller_name":"navigation_ui_search__spap_for_nav_search","event_desc":"SPAP for Nav Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_nav_search","selector":"p_search_layout","profile_code":"BTL_1304_1672474452916","window_title":"Search","window_height":450,"window_width":"900px","window_close_icon":"Y","eventdes":"spap_for_nav_search","eventcode":"E_1672475044312"}}
		let handler_code="show_profile_as_popup"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile_as_popup(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cui_for_search_clear() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1672475092777"
		let event_params={"caller_name":"search_clear__cui_for_search_clear","event_desc":"CUI for search Clear","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view messagess"
	navigation_ui_view_messagess__bt_from_message_data() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_messagess"
		let destn_id="message_data_ui"
		let parent_source_id=""
		let event_code="e_1722347725464"
		let event_params={"caller_name":"navigation_ui_view_messagess__bt_from_message_data","event_desc":"BT From Message data","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_messagess","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
		let handler_code="bind_tran"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view messagess"
	navigation_ui_view_messagess__sp_for_message_data() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_messagess"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1722347777727"
		let event_params={"caller_name":"navigation_ui_view_messagess__sp_for_message_data","event_desc":"SP For Message data","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_messagess","raiseparam":{"profile_code":"BTL_1304_1672474581833"}}
		let handler_code="show_profile"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui export as excel"
	navigation_ui_export_as_excel__cc_for_e_excel() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_export_as_excel"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1722485491046"
		let event_params={"caller_name":"navigation_ui_export_as_excel__cc_for_e_excel","event_desc":"CC For E Excel","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_export_as_excel","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_deem_cs_liquidity_export_excel_fileService.fn_npss_deem_cs_liquidity_export_excel_file(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui export as pdf"
	navigation_ui_export_as_pdf__cc_for_e_pdf() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_export_as_pdf"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1722485640476"
		let event_params={"caller_name":"navigation_ui_export_as_pdf__cc_for_e_pdf","event_desc":"CC For E PDF","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_export_as_pdf","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_deem_cs_liquidity_export_pdfService.fn_npss_deem_cs_liquidity_export_pdf(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui export as csv"
	navigation_ui_export_as_csv__cc_for_csv_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_export_as_csv"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1722918351068"
		let event_params={"caller_name":"navigation_ui_export_as_csv__cc_for_csv_btn","event_desc":"CC For Csv btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_export_as_csv","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_deem_cs_liquidity_export_csvService.fn_npss_deem_cs_liquidity_export_csv(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

 
	customProject_customValidation(projectName,validation,callback) {
		if(this[projectName+'Service']) {
			this[projectName+'Service'].fn_customValidation(projectName,this,validation,callback)
		}
	}
	closePopup(){
		setTimeout(()=>{
			this.handler.close_popup('','','','','',this,'','','','');
		},100)
	}
}

// End of class 
