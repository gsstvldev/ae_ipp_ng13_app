/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26755 
Modified By     : Admin 
Modified Date   : 2022-Nov-02 5:17 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_transactions
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_view_all_transactions',
	templateUrl: './s_view_all_transactions.component.html',
	styleUrls: ['./s_view_all_transactions.component.css'],
	providers:[torus_cs_show_hideService]
})
    
// Start of class 
export class s_view_all_transactionsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_view_all_transactions"
	wftpa_id : string = "WFT_NPSS_P_1304_1666163472815_0"
	cg_code : string = "CG_1304_1666160797964"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "transaction_list"
	uicgc_2 : string = "view_transaction_details"
	uicgc_3 : string = "navigation_ui"
	uicgc_4 : string = "search"
	uicgc_5 : string = "back_ui"
	uicgc_6 : string = "queue"
	uicgc_7 : string = "process_log_list"
	uicgc_8 : string = "disable_refund_ui"
	uicgc_9 : string = "enable_refund_ui"
	uicgc_10 : string = "submit_ui"
	uicgc_11 : string = "group_by_status"
	uicgc_12 : string = "history_detail"
	uicgc_14 : string = "request_ui"
	uicgc_15 : string = "response_ui"
	uicgc_16 : string = "hidden_list"
	uicgc_17 : string = "group_by_processing_system"
	key_events : any = {}
	btl_1304_1666182418244 : string = "p_view_request_layout"
	btl_1304_1666182379741 : string = "p_view_response_layout"
	btl_1304_1666182299071 : string = "p_view_history_layout"
	btl_1304_1666068179786 : string = "p_refund_layout"
	btl_1304_1666010003163 : string = "p_search_layout"
	btl_1304_1666009903061 : string = "p_vertical_layout"
	btl_1304_1666009819055 : string = "p_main_layout"
	forms : any = ["uicgc_8","uicgc_14","uicgc_15","uicgc_4","uicgc_5","uicgc_9","uicgc_10","uicgc_3"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	transaction_list : any = {}
	view_transaction_details : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_detail : any = {}
	navigation_ui_refund : any = {}
	navigation_ui_retry : any = {}
	navigation_ui_already_posted : any = {}
	navigation_ui_view_response : any = {}
	navigation_ui_view_request : any = {}
	navigation_ui_reset : any = {}
	navigation_ui_view_log_history : any = {}
	navigation_ui_trgr_disable_btn : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	back_ui : any = {}
	back_ui_back : any = {}
	queue : any = {}
	process_log_list : any = {}
	disable_refund_ui : any = {}
	enable_refund_ui : any = {}
	submit_ui : any = {}
	submit_ui_back : any = {}
	submit_ui_reject : any = {}
	submit_ui_accept : any = {}
	group_by_status : any = {}
	history_detail : any = {}
	request_ui : any = {}
	request_ui_back : any = {}
	response_ui : any = {}
	response_ui_back : any = {}
	hidden_list : any = {}
	group_by_processing_system : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Transaction List" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction List"
		this.transaction_list.uicgc_code = "uicgc_1"
		this.transaction_list.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164575667","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID, MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,     MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,   A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.PAYMENT_ENDTOEND_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS HST View Transaction CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.transaction_list.context_menu = []
		this.transaction_list.views = {}
		this.transaction_list.onChangecomponent = new EventEmitter<any>()
		this.transaction_list.show = true
		this.transaction_list.dynamic_param = {}
	
		// Component level properties - "View Transaction Details" 
		this.view_transaction_details.uictrl_code = "datatable"
		this.view_transaction_details.uicgc_desc = "View Transaction Details"
		this.view_transaction_details.uicgc_code = "uicgc_2"
		this.view_transaction_details.params = {"need_search":"N","need_vertical":"Y","advance_dynamic_search":"N"}
		this.view_transaction_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164605867","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID, MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,     MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,   A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.PAYMENT_ENDTOEND_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Ver HST View Transaction CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Cr Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account No","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account No","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing sys ref number","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer  Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true}]}}}}}}
		this.view_transaction_details.context_menu = []
		this.view_transaction_details.views = {}
		this.view_transaction_details.onChangecomponent = new EventEmitter<any>()
		this.view_transaction_details.show = true
		this.view_transaction_details.dynamic_param = {}
	
		// Component level properties - "Navigation UI" 
		this.navigation_ui.uictrl_code = "dynamic_ui"
		this.navigation_ui.uicgc_desc = "Navigation UI"
		this.navigation_ui.uicgc_code = "uicgc_3"
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
		
		// "View Detail" Button of "Navigation UI" component
		this.navigation_ui_view_detail.label_name = "View Detail"
		this.navigation_ui_view_detail.show = true
		this.navigation_ui_view_detail.disabled = true
		this.navigation_ui_view_detail.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_detail.dynamic_param = {}
		this.navigation_ui_view_detail.role = []
		this.navigation_ui_view_detail.action = ""
		
		// "Refund" Button of "Navigation UI" component
		this.navigation_ui_refund.label_name = "Refund"
		this.navigation_ui_refund.show = true
		this.navigation_ui_refund.disabled = false
		this.navigation_ui_refund.params = {"icon_only":false,"uicgcc_style":"fa fa-location-arrow"}
		this.navigation_ui_refund.dynamic_param = {}
		this.navigation_ui_refund.role = []
		this.navigation_ui_refund.action = ""
		
		// "Retry" Button of "Navigation UI" component
		this.navigation_ui_retry.label_name = "Retry"
		this.navigation_ui_retry.show = true
		this.navigation_ui_retry.disabled = false
		this.navigation_ui_retry.params = {"icon_only":false,"uicgcc_style":"fa fa-exchange"}
		this.navigation_ui_retry.dynamic_param = {}
		this.navigation_ui_retry.role = []
		this.navigation_ui_retry.action = ""
		
		// "Already Posted" Button of "Navigation UI" component
		this.navigation_ui_already_posted.label_name = "Already Posted"
		this.navigation_ui_already_posted.show = true
		this.navigation_ui_already_posted.disabled = false
		this.navigation_ui_already_posted.params = {"icon_only":false,"uicgcc_style":"fa fa-bullhorn"}
		this.navigation_ui_already_posted.dynamic_param = {}
		this.navigation_ui_already_posted.role = []
		this.navigation_ui_already_posted.action = ""
		
		// "View Response" Button of "Navigation UI" component
		this.navigation_ui_view_response.label_name = "View Response"
		this.navigation_ui_view_response.show = true
		this.navigation_ui_view_response.disabled = false
		this.navigation_ui_view_response.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_response.dynamic_param = {}
		this.navigation_ui_view_response.role = []
		this.navigation_ui_view_response.action = ""
		
		// "View Request" Button of "Navigation UI" component
		this.navigation_ui_view_request.label_name = "View Request"
		this.navigation_ui_view_request.show = true
		this.navigation_ui_view_request.disabled = false
		this.navigation_ui_view_request.params = {"icon_only":false,"uicgcc_style":"fa fa-wrench"}
		this.navigation_ui_view_request.dynamic_param = {}
		this.navigation_ui_view_request.role = []
		this.navigation_ui_view_request.action = ""
		
		// "Reset" Button of "Navigation UI" component
		this.navigation_ui_reset.label_name = "Reset"
		this.navigation_ui_reset.show = true
		this.navigation_ui_reset.disabled = false
		this.navigation_ui_reset.params = {"icon_only":false,"uicgcc_style":"fa fa-recycle"}
		this.navigation_ui_reset.dynamic_param = {}
		this.navigation_ui_reset.role = []
		this.navigation_ui_reset.action = ""
		
		// "View Log History" Button of "Navigation UI" component
		this.navigation_ui_view_log_history.label_name = "View Log History"
		this.navigation_ui_view_log_history.show = true
		this.navigation_ui_view_log_history.disabled = false
		this.navigation_ui_view_log_history.params = {"icon_only":false,"uicgcc_style":"fa fa-building"}
		this.navigation_ui_view_log_history.dynamic_param = {}
		this.navigation_ui_view_log_history.role = []
		this.navigation_ui_view_log_history.action = ""
		
		// "Trgr Disable Btn" Button of "Navigation UI" component
		this.navigation_ui_trgr_disable_btn.label_name = "Trgr Disable Btn"
		this.navigation_ui_trgr_disable_btn.show = true
		this.navigation_ui_trgr_disable_btn.disabled = false
		this.navigation_ui_trgr_disable_btn.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_ui_trgr_disable_btn.dynamic_param = {}
		this.navigation_ui_trgr_disable_btn.role = []
		this.navigation_ui_trgr_disable_btn.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Process log SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_process_log_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_process_log_srch"
		
		// "Search" Button of "Search" component
		this.search_search.label_name = "Search"
		this.search_search.show = true
		this.search_search.disabled = false
		this.search_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.search_search.dynamic_param = {}
		this.search_search.role = []
		this.search_search.action = ""
		
		// "Clear" Button of "Search" component
		this.search_clear.label_name = "Clear"
		this.search_clear.show = true
		this.search_clear.disabled = false
		this.search_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.search_clear.dynamic_param = {}
		this.search_clear.role = []
		this.search_clear.action = ""
	
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
	
		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_6"
		this.queue.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.queue.datasource = {}
		this.queue.context_menu = []
		this.queue.views = {}
		this.queue.onChangecomponent = new EventEmitter<any>()
		this.queue.show = true
		this.queue.dynamic_param = {}
	
		// Component level properties - "Process Log List" 
		this.process_log_list.uictrl_code = "datatable"
		this.process_log_list.uicgc_desc = "Process Log List"
		this.process_log_list.uicgc_code = "uicgc_7"
		this.process_log_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.process_log_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164510110","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666051334258","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666051334497","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666051334710","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666051335092","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666051335252","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666051335440","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666051335592","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666051336664","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666051402210","date_format":true},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666103605986","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666345406429","date_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781829963","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830490","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830955","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277636823","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637284","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637580","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        T24_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE FROM   (                  SELECT    A.NPSSTPL_ID,                            A.MSG_ID,                            A.UETR,                            A.NPSSTRRD_REFNO,                            A.PROCESS_NAME,                            A.PROCESSING_SYSTEM,                            A.RESPONSE_CODE,                            A.PROCESS_REF_NO,                            A.RESPONSE_DATA,                            TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                            A.CREATED_DATE,                            A.PROCESS_STATUS,                            A.STATUS,                            A.REQUEST_DATA_JSON,                            A.RESPONSE_DATA_JSON,                            A.T24_RETURN_CODE,    A.ADDITIONAL_INFO,                            T24RC.RETURN_DESCRIPTION                                           AS T24_RETURN_DESC,                                      CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS REVERSAL_DESCRIPTION,                            A.CBUAE_RETURN_CODE,                            CBUAERC.RETURN_DESCRIPTION                                             AS CBUAE_RETURN_DESC,                                      CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                            A.REVERSAL_CODE,                            CCD.CD_DESCRIPTION                                         AS REVERSAL_DESC,                                      CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION                  FROM      NPSS_TRN_PROCESS_LOG A                  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD                  ON        CCD.CD_CODE = A.REVERSAL_CODE                  AND       CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'                  LEFT JOIN CORE_NC_RETURN_CODES T24RC                  ON        T24RC.RETURN_CODE = A.T24_RETURN_CODE                  AND       T24RC.PROCESSING_SYSTEM = 'T24'                  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC                  ON        CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE                  AND       CBUAERC.PROCESSING_SYSTEM = 'CBUAE'                  ORDER BY  A.NPSSTPL_ID DESC) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.process_log_list.context_menu = []
		this.process_log_list.views = {}
		this.process_log_list.onChangecomponent = new EventEmitter<any>()
		this.process_log_list.show = true
		this.process_log_list.dynamic_param = {}
	
		// Component level properties - "Disable Refund UI" 
		this.disable_refund_ui.uictrl_code = "dynamic_ui"
		this.disable_refund_ui.uicgc_desc = "Disable Refund UI"
		this.disable_refund_ui.uicgc_code = "uicgc_8"
		this.disable_refund_ui.params = {}
		this.disable_refund_ui.datasource = {}
		this.disable_refund_ui.context_menu = []
		this.disable_refund_ui.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"Refund UI","tab_order":0,"tab_name":"","uicgc_description":"Disable Refund UI","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.disable_refund_ui.onChangecomponent = new EventEmitter<any>()
		this.disable_refund_ui.show = true
		this.disable_refund_ui.dynamic_param = {}
		this.disable_refund_ui.f_refund_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.disable_refund_ui.form_name = "f_refund_ui"
	
		// Component level properties - "Enable Refund UI" 
		this.enable_refund_ui.uictrl_code = "dynamic_ui"
		this.enable_refund_ui.uicgc_desc = "Enable Refund UI"
		this.enable_refund_ui.uicgc_code = "uicgc_9"
		this.enable_refund_ui.params = {}
		this.enable_refund_ui.datasource = {}
		this.enable_refund_ui.context_menu = []
		this.enable_refund_ui.views = {}
		this.enable_refund_ui.onChangecomponent = new EventEmitter<any>()
		this.enable_refund_ui.show = true
		this.enable_refund_ui.dynamic_param = {}
		this.enable_refund_ui.f_enable_refund_ui = {"show":true}
		this.enable_refund_ui.current_view = "f_enable_refund_ui"
	
		// Component level properties - "Submit UI" 
		this.submit_ui.uictrl_code = "dynamic_ui"
		this.submit_ui.uicgc_desc = "Submit UI"
		this.submit_ui.uicgc_code = "uicgc_10"
		this.submit_ui.params = {}
		this.submit_ui.datasource = {}
		this.submit_ui.context_menu = []
		this.submit_ui.views = {}
		this.submit_ui.onChangecomponent = new EventEmitter<any>()
		this.submit_ui.show = true
		this.submit_ui.dynamic_param = {}
		this.submit_ui.f_submit_ui = {"show":true}
		this.submit_ui.current_view = "f_submit_ui"
		
		// "Back" Button of "Submit UI" component
		this.submit_ui_back.label_name = "Back"
		this.submit_ui_back.show = true
		this.submit_ui_back.disabled = false
		this.submit_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.submit_ui_back.dynamic_param = {}
		this.submit_ui_back.role = []
		this.submit_ui_back.action = ""
		
		// "Reject" Button of "Submit UI" component
		this.submit_ui_reject.label_name = "Reject"
		this.submit_ui_reject.show = true
		this.submit_ui_reject.disabled = false
		this.submit_ui_reject.params = {"icon_only":false,"uicgcc_style":"fa fa-thumbs-down"}
		this.submit_ui_reject.dynamic_param = {}
		this.submit_ui_reject.role = []
		this.submit_ui_reject.action = ""
		
		// "Accept" Button of "Submit UI" component
		this.submit_ui_accept.label_name = "Accept"
		this.submit_ui_accept.show = true
		this.submit_ui_accept.disabled = false
		this.submit_ui_accept.params = {"icon_only":false,"uicgcc_style":"fa fa-thumbs-up"}
		this.submit_ui_accept.dynamic_param = {}
		this.submit_ui_accept.role = []
		this.submit_ui_accept.action = ""
	
		// Component level properties - "Group by Status" 
		this.group_by_status.uictrl_code = "chart"
		this.group_by_status.uicgc_desc = "Group by Status"
		this.group_by_status.uicgc_code = "uicgc_11"
		this.group_by_status.params = {}
		this.group_by_status.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666173412932","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS TPL Chart Status MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1667217406844","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1667217407003","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667217407178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667217420369","date_format":false}],"joins":[]},"eq_text":"SELECT   KEY_COLUMN,          COUNT(STATUS) AS KEY_VALUE,          PROCESS_STATUS,          STATUS FROM     (                 SELECT T.CREATED_DATE,                        T.STATUS AS KEY_COLUMN,                        T.STATUS,                        T.PROCESS_STATUS,                        T.UETR,                        T.PROCESS_NAME,                        T.PROCESSING_SYSTEM,    T.ADDITIONAL_INFO                 FROM   NPSS_TRN_PROCESS_LOG T) VW $WHERE GROUP BY STATUS,          KEY_COLUMN,          PROCESS_STATUS,          STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS  TPL Chart Status CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.group_by_status.context_menu = []
		this.group_by_status.views = {}
		this.group_by_status.onChangecomponent = new EventEmitter<any>()
		this.group_by_status.show = true
		this.group_by_status.dynamic_param = {}
	
		// Component level properties - "History Detail" 
		this.history_detail.uictrl_code = "datatable"
		this.history_detail.uicgc_desc = "History Detail"
		this.history_detail.uicgc_code = "uicgc_12"
		this.history_detail.params = {"need_search":"N"}
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666186303516","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        DT_CODE,        DTT_CODE FROM   (                  SELECT    A.NPSSTPL_ID,                            A.MSG_ID,                            A.UETR,                            A.NPSSTRRD_REFNO,                            A.PROCESS_NAME,                            A.PROCESSING_SYSTEM,                            A.RESPONSE_CODE,                            A.PROCESS_REF_NO,                            A.RESPONSE_DATA,                            TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                            A.CREATED_DATE,                            A.PROCESS_STATUS,                            A.STATUS,                            A.DT_CODE,                            A.DTT_CODE,                            A.REQUEST_DATA_JSON,                            A.RESPONSE_DATA_JSON,                            A.T24_RETURN_CODE,    A.ADDITIONAL_INFO,                            T24RC.RETURN_DESCRIPTION                                          AS T24_RETURN_DESC,                                      CONCAT(A.T24_RETURN_CODE,'-', T24RC.RETURN_DESCRIPTION) AS REVERSAL_DESCRIPTION,                            A.CBUAE_RETURN_CODE,                            CBUAERC.RETURN_DESCRIPTION                                            AS CBUAE_RETURN_DESC,                                      CONCAT(A.CBUAE_RETURN_CODE,'-', CBUAERC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                            A.REVERSAL_CODE,                            CCD.CD_DESCRIPTION                                        AS REVERSAL_DESC,                                      CONCAT(A.REVERSAL_CODE,'-', CCD.CD_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION                  FROM      NPSS_TRN_PROCESS_LOG A                  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD                  ON        CCD.CD_CODE = A.REVERSAL_CODE                  AND       CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'                  LEFT JOIN CORE_NC_RETURN_CODES T24RC                  ON        T24RC.RETURN_CODE = A.T24_RETURN_CODE                  AND       T24RC.PROCESSING_SYSTEM = 'T24'                  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC                  ON        CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE                  AND       CBUAERC.PROCESSING_SYSTEM = 'CBUAE'                  ORDER BY  A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_14"
		this.request_ui.params = {}
		this.request_ui.datasource = {}
		this.request_ui.context_menu = []
		this.request_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"Chart request UI","tab_order":0,"tab_name":"","uicgc_description":"Request UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.request_ui.onChangecomponent = new EventEmitter<any>()
		this.request_ui.show = true
		this.request_ui.dynamic_param = {}
		this.request_ui.f_chart_request_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.request_ui.form_name = "f_chart_request_ui"
		
		// "Back" Button of "Request UI" component
		this.request_ui_back.label_name = "Back"
		this.request_ui_back.show = true
		this.request_ui_back.disabled = false
		this.request_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.request_ui_back.dynamic_param = {}
		this.request_ui_back.role = []
		this.request_ui_back.action = ""
	
		// Component level properties - "Response UI" 
		this.response_ui.uictrl_code = "dynamic_ui"
		this.response_ui.uicgc_desc = "Response UI"
		this.response_ui.uicgc_code = "uicgc_15"
		this.response_ui.params = {}
		this.response_ui.datasource = {}
		this.response_ui.context_menu = []
		this.response_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"Chart Response UI","tab_order":0,"tab_name":"","uicgc_description":"Response UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.response_ui.onChangecomponent = new EventEmitter<any>()
		this.response_ui.show = true
		this.response_ui.dynamic_param = {}
		this.response_ui.f_chart_response_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.response_ui.form_name = "f_chart_response_ui"
		
		// "Back" Button of "Response UI" component
		this.response_ui_back.label_name = "Back"
		this.response_ui_back.show = true
		this.response_ui_back.disabled = false
		this.response_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.response_ui_back.dynamic_param = {}
		this.response_ui_back.role = []
		this.response_ui_back.action = ""
	
		// Component level properties - "Hidden list" 
		this.hidden_list.uictrl_code = "datatable"
		this.hidden_list.uicgc_desc = "Hidden list"
		this.hidden_list.uicgc_code = "uicgc_16"
		this.hidden_list.params = {}
		this.hidden_list.datasource = {}
		this.hidden_list.context_menu = []
		this.hidden_list.views = {}
		this.hidden_list.onChangecomponent = new EventEmitter<any>()
		this.hidden_list.show = true
		this.hidden_list.dynamic_param = {}
	
		// Component level properties - "Group by Processing System" 
		this.group_by_processing_system.uictrl_code = "chart"
		this.group_by_processing_system.uicgc_desc = "Group by Processing System"
		this.group_by_processing_system.uicgc_code = "uicgc_17"
		this.group_by_processing_system.params = {}
		this.group_by_processing_system.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_17","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1667219954524","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"​NPSS TPL Chart Process Sys MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1667217730682","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1667217731104","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1667217731296","date_format":false}],"joins":[]},"eq_text":"SELECT   KEY_COLUMN,          COUNT(PROCESSING_SYSTEM) AS KEY_VALUE,          PROCESSING_SYSTEM FROM     (                 SELECT T.CREATED_DATE,                        T.STATUS,                        T.PROCESS_STATUS,                        T.UETR,                        T.PROCESS_NAME,                        T.PROCESSING_SYSTEM,                        T.PROCESSING_SYSTEM AS KEY_COLUMN,    T.ADDITIONAL_INFO                 FROM   NPSS_TRN_PROCESS_LOG T) VW $WHERE GROUP BY KEY_COLUMN,          PROCESSING_SYSTEM"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS TPL Chart Process Sys CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.group_by_processing_system.context_menu = []
		this.group_by_processing_system.views = {}
		this.group_by_processing_system.onChangecomponent = new EventEmitter<any>()
		this.group_by_processing_system.show = true
		this.group_by_processing_system.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_for_pl()
		this.page_load__cc_for_show_hide_queue()
		this.page_load__de_for_view_log_history()
		this.page_load__de_for_req_btn()
		this.page_load__de_for_res_btn()
		this.page_load__hide_trigger_btn()
	}

	//Handler for INTERNAL event of "cc for show hide queue"
	cc_for_show_hide_queue__internal(parent_event_result){
		this.cc_for_show_hide_queue__trigger_click_from_pl_to_srch(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_search()
		this.search_search__cp_for_search()
		this.search_search__cui_by_navigation_search_to_pl()
		this.search_search__cui_for_search_to_tl()
	}

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__internal(parent_event_result){
		this.ssp_for_search__brfq_for_chart(parent_event_result)
		this.ssp_for_search__brfq_for_bar_chart(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_for_search()
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_for_tl()
		this.transaction_list__ssr_for_eer()
		this.transaction_list__ssr_for_de()
		this.transaction_list__ee_for_tl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__spap_for_search()
		this.navigation_ui_search__cui_for_navigation_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view detail"
	navigation_ui_view_detail__action_button_click(){
		this.navigation_ui_view_detail__sp_for_vl()
		this.navigation_ui_view_detail__brfq_for_view_transaction_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui refund"
	navigation_ui_refund__action_button_click(){
		this.navigation_ui_refund__ee_bind_tran()
		this.navigation_ui_refund__disable_element()
		this.navigation_ui_refund__sp_for_reversals()
		this.navigation_ui_refund__bt_for_der()
	}

	//Handler for ACTION_BUTTON_CLICK event of "submit ui back"
	submit_ui_back__action_button_click(){
		this.submit_ui_back__rs_for_back()
	}

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__selection_changed(){
		this.process_log_list__svm_for_progres_log_list()
		this.process_log_list__ee_for_req_btn()
		this.process_log_list__ee_for_view_log_history()
		this.process_log_list__ee_for_view_response_btn()
		this.process_log_list__svm_for_pll__request_ui()
		this.process_log_list__svm_for_response_json__response_ui()
	}

	//Handler for INTERNAL event of "svm for progres log list"
	svm_for_progres_log_list__internal(parent_event_result){
		this.svm_for_progres_log_list__cc_for_show_hide_for_process_log_list(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for show hide for process log list"
	cc_for_show_hide_for_process_log_list__internal(parent_event_result){
		this.cc_for_show_hide_for_process_log_list__brfq_for_transaction_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for transaction list"
	brfq_for_transaction_list__internal(parent_event_result){
		this.brfq_for_transaction_list__ssr_for_transaction_list(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "group by status"
	group_by_status__selection_changed(){
		this.group_by_status__svm_for_chart_list()
		this.group_by_status__clcr_from_status_to_process_system()
	}

	//Handler for INTERNAL event of "svm for chart list"
	svm_for_chart_list__internal(parent_event_result){
		this.svm_for_chart_list__ssp_for_chart_to_srch(parent_event_result)
		this.svm_for_chart_list__tbc_for_tbc(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for chart to srch"
	ssp_for_chart_to_srch__internal(parent_event_result){
		this.ssp_for_chart_to_srch__brfq_pvll(parent_event_result)
		this.ssp_for_chart_to_srch__brfq_for_bar_chart(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view request"
	navigation_ui_view_request__action_button_click(){
		this.navigation_ui_view_request__sp_for_request()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view log history"
	navigation_ui_view_log_history__action_button_click(){
		this.navigation_ui_view_log_history__sp_for_view_log_history()
		this.navigation_ui_view_log_history__brfq_for_hst_process_log_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view response"
	navigation_ui_view_response__action_button_click(){
		this.navigation_ui_view_response__sp_for_response_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "request ui back"
	request_ui_back__action_button_click(){
		this.request_ui_back__sp_for_req_back_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "response ui back"
	response_ui_back__action_button_click(){
		this.response_ui_back__sp_for_res_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trgr disable btn"
	navigation_ui_trgr_disable_btn__action_button_click(){
		this.navigation_ui_trgr_disable_btn__trgr_click_for_vlh()
		this.navigation_ui_trgr_disable_btn__trgr_click_for_vr()
		this.navigation_ui_trgr_disable_btn__trgr_click_for_vres()
		this.navigation_ui_trgr_disable_btn__trgr_click_for_vd()
		this.navigation_ui_trgr_disable_btn__trgr_click_for_tl()
	}

	//Handler for SELECTION_CHANGED event of "group by processing system"
	group_by_processing_system__selection_changed(){
		this.group_by_processing_system__svm_for_bar_chart()
		this.group_by_processing_system__clcr_from_process_system_to_status()
	}

	//Handler for INTERNAL event of "svm for bar chart"
	svm_for_bar_chart__internal(parent_event_result){
		this.svm_for_bar_chart__ssp_for_bar_chart(parent_event_result)
		this.svm_for_bar_chart__tbc_for_bar_chart(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for bar chart"
	ssp_for_bar_chart__internal(parent_event_result){
		this.ssp_for_bar_chart__brfq_for_bar_chart_from_pll(parent_event_result)
		this.ssp_for_bar_chart__brfq_for_chart_form_bar_chart(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui reset"
	navigation_ui_reset__action_button_click(){
		this.navigation_ui_reset__rs()
	}

	//Handler for INTERNAL event of "svm for pll"
	svm_for_pll__internal(){
		this.svm_for_pll__bvm_for_rjson__request_ui()
	}

	//Handler for INTERNAL event of "svm for response json"
	svm_for_response_json__internal(){
		this.svm_for_response_json__bvm_for_response_json__response_ui()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666010053082"
		let event_params={"caller_name":"page_load__cf_for_pl","event_desc":"CF for PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
		let handler_code="create_form"
		let internals=""
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
	page_load__cc_for_show_hide_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666097800159"
		let event_params={"caller_name":"page_load__cc_for_show_hide_queue","event_desc":"CC for show hide Queue","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_show_hide_queue__trigger_click_from_pl_to_srch,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__de_for_view_log_history() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_log_history"
		let parent_source_id=""
		let event_code="e_1666182520352"
		let event_params={"caller_name":"page_load__de_for_view_log_history","event_desc":"DE for view log history","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_req_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_request"
		let parent_source_id=""
		let event_code="e_1666182675827"
		let event_params={"caller_name":"page_load__de_for_req_btn","event_desc":"DE for req btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_res_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_response"
		let parent_source_id=""
		let event_code="e_1666182715893"
		let event_params={"caller_name":"page_load__de_for_res_btn","event_desc":"DE for res btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__hide_trigger_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_trgr_disable_btn"
		let parent_source_id=""
		let event_code="e_1666246019332"
		let event_params={"caller_name":"page_load__hide_trigger_btn","event_desc":"Hide Trigger btn","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for show hide queue"
	cc_for_show_hide_queue__trigger_click_from_pl_to_srch(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_show_hide_queue"
		let destn_id="search_search"
		let parent_source_id="page_load"
		let event_code="e_1666199140768"
		let event_params={"caller_name":"cc_for_show_hide_queue__trigger_click_from_pl_to_srch","event_desc":"Trigger click from pl to srch","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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
		let event_code="e_1666010099913"
		let event_params={"caller_name":"search_search__ssp_for_search","event_desc":"SSP for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_search__brfq_for_chart,ssp_for_search__brfq_for_bar_chart,"
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
	search_search__cp_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666010170239"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__cp_for_search","event_desc":"CP for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__cui_by_navigation_search_to_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666075935764"
		let event_params={"caller_name":"search_search__cui_by_navigation_search_to_pl","event_desc":"CUI by Navigation Search to PL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164510110","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666051334258","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666051334497","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666051334710","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666051335092","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666051335252","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666051335440","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666051335592","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666051336664","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666051402210","date_format":true},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666103605986","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666345406429","date_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781829963","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830490","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830955","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277636823","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637284","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637580","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        T24_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE FROM   (                  SELECT    A.NPSSTPL_ID,                            A.MSG_ID,                            A.UETR,                            A.NPSSTRRD_REFNO,                            A.PROCESS_NAME,                            A.PROCESSING_SYSTEM,                            A.RESPONSE_CODE,                            A.PROCESS_REF_NO,                            A.RESPONSE_DATA,                            TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                            A.CREATED_DATE,                            A.PROCESS_STATUS,                            A.STATUS,                            A.REQUEST_DATA_JSON,                            A.RESPONSE_DATA_JSON,                            A.T24_RETURN_CODE,    A.ADDITIONAL_INFO,                            T24RC.RETURN_DESCRIPTION                                           AS T24_RETURN_DESC,                                      CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS REVERSAL_DESCRIPTION,                            A.CBUAE_RETURN_CODE,                            CBUAERC.RETURN_DESCRIPTION                                             AS CBUAE_RETURN_DESC,                                      CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                            A.REVERSAL_CODE,                            CCD.CD_DESCRIPTION                                         AS REVERSAL_DESC,                                      CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION                  FROM      NPSS_TRN_PROCESS_LOG A                  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD                  ON        CCD.CD_CODE = A.REVERSAL_CODE                  AND       CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'                  LEFT JOIN CORE_NC_RETURN_CODES T24RC                  ON        T24RC.RETURN_CODE = A.T24_RETURN_CODE                  AND       T24RC.PROCESSING_SYSTEM = 'T24'                  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC                  ON        CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE                  AND       CBUAERC.PROCESSING_SYSTEM = 'CBUAE'                  ORDER BY  A.NPSSTPL_ID DESC) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__cui_for_search_to_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1666244008256"
		let event_params={"caller_name":"search_search__cui_for_search_to_tl","event_desc":"CUI for search to TL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164575667","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID, MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,     MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,   A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.PAYMENT_ENDTOEND_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS HST View Transaction CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__brfq_for_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search"
		let destn_id="group_by_status"
		let parent_source_id="search_search"
		let event_code="e_1666161018358"
		let event_params={"caller_name":"ssp_for_search__brfq_for_chart","event_desc":"BRFQ for chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"PIE","chart_label":"KEY_COLUMN","chart_series":"","chart_data":"KEY_VALUE","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666173412932","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS TPL Chart Status MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1667217406844","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1667217407003","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667217407178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667217420369","date_format":false}],"joins":[]},"eq_text":"SELECT   KEY_COLUMN,          COUNT(STATUS) AS KEY_VALUE,          PROCESS_STATUS,          STATUS FROM     (                 SELECT T.CREATED_DATE,                        T.STATUS AS KEY_COLUMN,                        T.STATUS,                        T.PROCESS_STATUS,                        T.UETR,                        T.PROCESS_NAME,                        T.PROCESSING_SYSTEM,    T.ADDITIONAL_INFO                 FROM   NPSS_TRN_PROCESS_LOG T) VW $WHERE GROUP BY STATUS,          KEY_COLUMN,          PROCESS_STATUS,          STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS  TPL Chart Status CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__brfq_for_bar_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search"
		let destn_id="group_by_processing_system"
		let parent_source_id="search_search"
		let event_code="e_1667218085614"
		let event_params={"caller_name":"ssp_for_search__brfq_for_bar_chart","event_desc":"BRFQ for Bar chart.","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"BAR","chart_label":"KEY_COLUMN","chart_series":"","chart_data":"KEY_VALUE","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_17","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1667219954524","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"​NPSS TPL Chart Process Sys MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1667217730682","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1667217731104","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1667217731296","date_format":false}],"joins":[]},"eq_text":"SELECT   KEY_COLUMN,          COUNT(PROCESSING_SYSTEM) AS KEY_VALUE,          PROCESSING_SYSTEM FROM     (                 SELECT T.CREATED_DATE,                        T.STATUS,                        T.PROCESS_STATUS,                        T.UETR,                        T.PROCESS_NAME,                        T.PROCESSING_SYSTEM,                        T.PROCESSING_SYSTEM AS KEY_COLUMN,    T.ADDITIONAL_INFO                 FROM   NPSS_TRN_PROCESS_LOG T) VW $WHERE GROUP BY KEY_COLUMN,          PROCESSING_SYSTEM"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS TPL Chart Process Sys CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cui_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1666010147600"
		let event_params={"caller_name":"search_clear__cui_for_search","event_desc":"CUI for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__svm_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1666010193687"
		let event_params={"caller_name":"transaction_list__svm_for_tl","event_desc":"SVM for TL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"transaction_list":{"e_1666010193687":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1666010193687","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164575667","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID, MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,     MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,   A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.PAYMENT_ENDTOEND_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS HST View Transaction CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ssr_for_eer() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="enable_refund_ui"
		let parent_source_id=""
		let event_code="e_1666073974266"
		let event_params={"caller_name":"transaction_list__ssr_for_eer","event_desc":"SSR FOR EER","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
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
	transaction_list__ssr_for_de() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="disable_refund_ui"
		let parent_source_id=""
		let event_code="e_1666073981493"
		let event_params={"caller_name":"transaction_list__ssr_for_de","event_desc":"SSR for DE","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
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
	transaction_list__ee_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_detail"
		let parent_source_id=""
		let event_code="e_1666105066141"
		let event_params={"caller_name":"transaction_list__ee_for_tl","event_desc":"EE for TL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__spap_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666010219246"
		let event_params={"caller_name":"navigation_ui_search__spap_for_search","event_desc":"SPAP for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1666010003163","window_title":"Search","window_height":400,"window_width":"600px","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1666010219246"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__cui_for_navigation_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1666010245150"
		let event_params={"caller_name":"navigation_ui_search__cui_for_navigation_search","event_desc":"CUI for Navigation search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view detail"
	navigation_ui_view_detail__sp_for_vl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_detail"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666010903736"
		let event_params={"caller_name":"navigation_ui_view_detail__sp_for_vl","event_desc":"SP for VL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_detail","raiseparam":{"profile_code":"BTL_1304_1666009903061"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view detail"
	navigation_ui_view_detail__brfq_for_view_transaction_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_detail"
		let destn_id="view_transaction_details"
		let parent_source_id=""
		let event_code="e_1666100915090"
		let event_params={"caller_name":"navigation_ui_view_detail__brfq_for_view_transaction_list","event_desc":"BRFQ for view transaction list","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_detail","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164605867","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID, MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,     MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,   A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.PAYMENT_ENDTOEND_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Ver HST View Transaction CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Cr Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account No","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account No","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing sys ref number","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer  Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1666010865737"
		let event_params={"caller_name":"back_ui_back__sp_for_back","event_desc":"SP for Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1666009819055"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui refund"
	navigation_ui_refund__ee_bind_tran() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_refund"
		let destn_id="enable_refund_ui"
		let parent_source_id=""
		let event_code="e_1666068338623"
		let event_params={"caller_name":"navigation_ui_refund__ee_bind_tran","event_desc":"EE Bind Tran","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_refund","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui refund"
	navigation_ui_refund__disable_element() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_refund"
		let destn_id="disable_refund_ui"
		let parent_source_id=""
		let event_code="e_1666068386486"
		let event_params={"caller_name":"navigation_ui_refund__disable_element","event_desc":"Disable Element","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_refund","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui refund"
	navigation_ui_refund__sp_for_reversals() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_refund"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666070453302"
		let event_params={"caller_name":"navigation_ui_refund__sp_for_reversals","event_desc":"SP for Reversals","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_refund","raiseparam":{"profile_code":"BTL_1304_1666068179786"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui refund"
	navigation_ui_refund__bt_for_der() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_refund"
		let destn_id="disable_refund_ui"
		let parent_source_id=""
		let event_code="e_1666073959732"
		let event_params={"caller_name":"navigation_ui_refund__bt_for_der","event_desc":"BT for DER","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_refund","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "submit ui back"
	submit_ui_back__rs_for_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="submit_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666069333455"
		let event_params={"caller_name":"submit_ui_back__rs_for_back","event_desc":"RS for Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"submit_ui_back","raiseparam":{}}
		let handler_code="refresh_screen"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.refresh_screen(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__svm_for_progres_log_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666098890884"
		let event_params={"caller_name":"process_log_list__svm_for_progres_log_list","event_desc":"SVM for progres log list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_progres_log_list__cc_for_show_hide_for_process_log_list,"
		let event_data={"process_log_list":{"e_1666098890884":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_7","event_code":"E_1666098890884","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"},{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164510110","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666051334258","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666051334497","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666051334710","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666051335092","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666051335252","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666051335440","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666051335592","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666051336664","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666051402210","date_format":true},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666103605986","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666345406429","date_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781829963","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830490","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830955","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277636823","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637284","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637580","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        T24_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE FROM   (                  SELECT    A.NPSSTPL_ID,                            A.MSG_ID,                            A.UETR,                            A.NPSSTRRD_REFNO,                            A.PROCESS_NAME,                            A.PROCESSING_SYSTEM,                            A.RESPONSE_CODE,                            A.PROCESS_REF_NO,                            A.RESPONSE_DATA,                            TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                            A.CREATED_DATE,                            A.PROCESS_STATUS,                            A.STATUS,                            A.REQUEST_DATA_JSON,                            A.RESPONSE_DATA_JSON,                            A.T24_RETURN_CODE,    A.ADDITIONAL_INFO,                            T24RC.RETURN_DESCRIPTION                                           AS T24_RETURN_DESC,                                      CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS REVERSAL_DESCRIPTION,                            A.CBUAE_RETURN_CODE,                            CBUAERC.RETURN_DESCRIPTION                                             AS CBUAE_RETURN_DESC,                                      CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                            A.REVERSAL_CODE,                            CCD.CD_DESCRIPTION                                         AS REVERSAL_DESC,                                      CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION                  FROM      NPSS_TRN_PROCESS_LOG A                  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD                  ON        CCD.CD_CODE = A.REVERSAL_CODE                  AND       CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'                  LEFT JOIN CORE_NC_RETURN_CODES T24RC                  ON        T24RC.RETURN_CODE = A.T24_RETURN_CODE                  AND       T24RC.PROCESSING_SYSTEM = 'T24'                  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC                  ON        CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE                  AND       CBUAERC.PROCESSING_SYSTEM = 'CBUAE'                  ORDER BY  A.NPSSTPL_ID DESC) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ee_for_req_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_ui_view_request"
		let parent_source_id=""
		let event_code="e_1666182784870"
		let event_params={"caller_name":"process_log_list__ee_for_req_btn","event_desc":"EE for req btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ee_for_view_log_history() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_ui_view_log_history"
		let parent_source_id=""
		let event_code="e_1666182833773"
		let event_params={"caller_name":"process_log_list__ee_for_view_log_history","event_desc":"EE for view log history","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__ee_for_view_response_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_ui_view_response"
		let parent_source_id=""
		let event_code="e_1666184860757"
		let event_params={"caller_name":"process_log_list__ee_for_view_response_btn","event_desc":"EE for view response btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__svm_for_pll__request_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666186714213"
		let event_params={"caller_name":"process_log_list__svm_for_pll__request_ui","event_desc":"SVM for PLL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_pll__bvm_for_rjson__request_ui,"
		let event_data={"control":{"e_1666186714213":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665905039255":{"uicgc_code":"CONTROL","event_code":"E_1666186714213","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"REQUEST_DATA_JSON","level":"MI_LEVEL","name":"MI_LEVEL_REQUEST_DATA_JSON","setd3name":""}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164510110","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666051334258","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666051334497","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666051334710","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666051335092","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666051335252","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666051335440","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666051335592","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666051336664","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666051402210","date_format":true},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666103605986","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666345406429","date_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781829963","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830490","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830955","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277636823","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637284","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637580","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        T24_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE FROM   (                  SELECT    A.NPSSTPL_ID,                            A.MSG_ID,                            A.UETR,                            A.NPSSTRRD_REFNO,                            A.PROCESS_NAME,                            A.PROCESSING_SYSTEM,                            A.RESPONSE_CODE,                            A.PROCESS_REF_NO,                            A.RESPONSE_DATA,                            TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                            A.CREATED_DATE,                            A.PROCESS_STATUS,                            A.STATUS,                            A.REQUEST_DATA_JSON,                            A.RESPONSE_DATA_JSON,                            A.T24_RETURN_CODE,    A.ADDITIONAL_INFO,                            T24RC.RETURN_DESCRIPTION                                           AS T24_RETURN_DESC,                                      CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS REVERSAL_DESCRIPTION,                            A.CBUAE_RETURN_CODE,                            CBUAERC.RETURN_DESCRIPTION                                             AS CBUAE_RETURN_DESC,                                      CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                            A.REVERSAL_CODE,                            CCD.CD_DESCRIPTION                                         AS REVERSAL_DESC,                                      CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION                  FROM      NPSS_TRN_PROCESS_LOG A                  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD                  ON        CCD.CD_CODE = A.REVERSAL_CODE                  AND       CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'                  LEFT JOIN CORE_NC_RETURN_CODES T24RC                  ON        T24RC.RETURN_CODE = A.T24_RETURN_CODE                  AND       T24RC.PROCESSING_SYSTEM = 'T24'                  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC                  ON        CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE                  AND       CBUAERC.PROCESSING_SYSTEM = 'CBUAE'                  ORDER BY  A.NPSSTPL_ID DESC) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__svm_for_response_json__response_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666186950875"
		let event_params={"caller_name":"process_log_list__svm_for_response_json__response_ui","event_desc":"SVM For Response JSON","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_response_json__bvm_for_response_json__response_ui,"
		let event_data={"control":{"e_1666186950875":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665905039255":{"uicgc_code":"CONTROL","event_code":"E_1666186950875","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"RESPONSE_DATA_JSON","level":"MI_LEVEL","name":"MI_LEVEL_RESPONSE_DATA_JSON","setd3name":""}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164510110","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666051334258","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666051334497","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666051334710","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666051335092","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666051335252","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666051335440","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666051335592","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666051336664","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666051402210","date_format":true},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666103605986","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666345406429","date_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781829963","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830490","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830955","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277636823","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637284","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637580","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        T24_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE FROM   (                  SELECT    A.NPSSTPL_ID,                            A.MSG_ID,                            A.UETR,                            A.NPSSTRRD_REFNO,                            A.PROCESS_NAME,                            A.PROCESSING_SYSTEM,                            A.RESPONSE_CODE,                            A.PROCESS_REF_NO,                            A.RESPONSE_DATA,                            TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                            A.CREATED_DATE,                            A.PROCESS_STATUS,                            A.STATUS,                            A.REQUEST_DATA_JSON,                            A.RESPONSE_DATA_JSON,                            A.T24_RETURN_CODE,    A.ADDITIONAL_INFO,                            T24RC.RETURN_DESCRIPTION                                           AS T24_RETURN_DESC,                                      CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS REVERSAL_DESCRIPTION,                            A.CBUAE_RETURN_CODE,                            CBUAERC.RETURN_DESCRIPTION                                             AS CBUAE_RETURN_DESC,                                      CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                            A.REVERSAL_CODE,                            CCD.CD_DESCRIPTION                                         AS REVERSAL_DESC,                                      CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION                  FROM      NPSS_TRN_PROCESS_LOG A                  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD                  ON        CCD.CD_CODE = A.REVERSAL_CODE                  AND       CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'                  LEFT JOIN CORE_NC_RETURN_CODES T24RC                  ON        T24RC.RETURN_CODE = A.T24_RETURN_CODE                  AND       T24RC.PROCESSING_SYSTEM = 'T24'                  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC                  ON        CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE                  AND       CBUAERC.PROCESSING_SYSTEM = 'CBUAE'                  ORDER BY  A.NPSSTPL_ID DESC) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for progres log list"
	svm_for_progres_log_list__cc_for_show_hide_for_process_log_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_progres_log_list"
		let destn_id=""
		let parent_source_id="process_log_list"
		let event_code="e_1666099009714"
		let event_params={"caller_name":"svm_for_progres_log_list__cc_for_show_hide_for_process_log_list","event_desc":"CC for show hide for process log list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_show_hide_for_process_log_list__brfq_for_transaction_list,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for show hide for process log list"
	cc_for_show_hide_for_process_log_list__brfq_for_transaction_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_show_hide_for_process_log_list"
		let destn_id="transaction_list"
		let parent_source_id="svm_for_progres_log_list"
		let event_code="e_1666105140236"
		let event_params={"caller_name":"cc_for_show_hide_for_process_log_list__brfq_for_transaction_list","event_desc":"BRFQ for transaction list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_transaction_list__ssr_for_transaction_list,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164575667","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID, MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,     MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,   A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.PAYMENT_ENDTOEND_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS HST View Transaction CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for transaction list"
	brfq_for_transaction_list__ssr_for_transaction_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_transaction_list"
		let destn_id="transaction_list"
		let parent_source_id="cc_for_show_hide_for_process_log_list"
		let event_code="e_1666105159955"
		let event_params={"caller_name":"brfq_for_transaction_list__ssr_for_transaction_list","event_desc":"SSR for Transaction list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164575667","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID, MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,     MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,   A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.PAYMENT_ENDTOEND_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS HST View Transaction CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "group by status"
	group_by_status__svm_for_chart_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="group_by_status"
		let destn_id="group_by_status"
		let parent_source_id=""
		let event_code="e_1666162470437"
		let event_params={"caller_name":"group_by_status__svm_for_chart_list","event_desc":"SVM for Chart List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"group_by_status","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_chart_list__ssp_for_chart_to_srch,svm_for_chart_list__tbc_for_tbc,"
		let event_data={"group_by_status":{"e_1666162470437":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_11","event_code":"E_1666162470437","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"BULK","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_PROCESSING_SYSTEM","setd3name":"PROCESSING_SYSTEM"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666173412932","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS TPL Chart Status MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1667217406844","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1667217407003","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667217407178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667217420369","date_format":false}],"joins":[]},"eq_text":"SELECT   KEY_COLUMN,          COUNT(STATUS) AS KEY_VALUE,          PROCESS_STATUS,          STATUS FROM     (                 SELECT T.CREATED_DATE,                        T.STATUS AS KEY_COLUMN,                        T.STATUS,                        T.PROCESS_STATUS,                        T.UETR,                        T.PROCESS_NAME,                        T.PROCESSING_SYSTEM,    T.ADDITIONAL_INFO                 FROM   NPSS_TRN_PROCESS_LOG T) VW $WHERE GROUP BY STATUS,          KEY_COLUMN,          PROCESS_STATUS,          STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS  TPL Chart Status CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "group by status"
	group_by_status__clcr_from_status_to_process_system() { 
		let Dest_Is_ctrl=true
		
		let source_id="group_by_status"
		let destn_id="group_by_processing_system"
		let parent_source_id=""
		let event_code="e_1667365005630"
		let event_params={"caller_name":"group_by_status__clcr_from_status_to_process_system","event_desc":"CLCR from status to Process System","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"group_by_status","raiseparam":{}}
		let handler_code="clear"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_17","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1667219954524","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"​NPSS TPL Chart Process Sys MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1667217730682","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1667217731104","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1667217731296","date_format":false}],"joins":[]},"eq_text":"SELECT   KEY_COLUMN,          COUNT(PROCESSING_SYSTEM) AS KEY_VALUE,          PROCESSING_SYSTEM FROM     (                 SELECT T.CREATED_DATE,                        T.STATUS,                        T.PROCESS_STATUS,                        T.UETR,                        T.PROCESS_NAME,                        T.PROCESSING_SYSTEM,                        T.PROCESSING_SYSTEM AS KEY_COLUMN,    T.ADDITIONAL_INFO                 FROM   NPSS_TRN_PROCESS_LOG T) VW $WHERE GROUP BY KEY_COLUMN,          PROCESSING_SYSTEM"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS TPL Chart Process Sys CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for chart list"
	svm_for_chart_list__ssp_for_chart_to_srch(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_chart_list"
		let destn_id="search"
		let parent_source_id="group_by_status"
		let event_code="e_1666162600062"
		let event_params={"caller_name":"svm_for_chart_list__ssp_for_chart_to_srch","event_desc":"SSP for chart to srch","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"group_by_status","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_chart_to_srch__brfq_pvll,ssp_for_chart_to_srch__brfq_for_bar_chart,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for chart list"
	svm_for_chart_list__tbc_for_tbc(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_chart_list"
		let destn_id="navigation_ui_trgr_disable_btn"
		let parent_source_id="group_by_status"
		let event_code="e_1666252411148"
		let event_params={"caller_name":"svm_for_chart_list__tbc_for_tbc","event_desc":"TBC for TBC","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"group_by_status","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "ssp for chart to srch"
	ssp_for_chart_to_srch__brfq_pvll(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_chart_to_srch"
		let destn_id="process_log_list"
		let parent_source_id="svm_for_chart_list"
		let event_code="e_1666162663866"
		let event_params={"caller_name":"ssp_for_chart_to_srch__brfq_pvll","event_desc":"BRFQ PVLL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"group_by_status","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164510110","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666051334258","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666051334497","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666051334710","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666051335092","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666051335252","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666051335440","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666051335592","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666051336664","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666051402210","date_format":true},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666103605986","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666345406429","date_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781829963","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830490","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830955","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277636823","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637284","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637580","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        T24_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE FROM   (                  SELECT    A.NPSSTPL_ID,                            A.MSG_ID,                            A.UETR,                            A.NPSSTRRD_REFNO,                            A.PROCESS_NAME,                            A.PROCESSING_SYSTEM,                            A.RESPONSE_CODE,                            A.PROCESS_REF_NO,                            A.RESPONSE_DATA,                            TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                            A.CREATED_DATE,                            A.PROCESS_STATUS,                            A.STATUS,                            A.REQUEST_DATA_JSON,                            A.RESPONSE_DATA_JSON,                            A.T24_RETURN_CODE,    A.ADDITIONAL_INFO,                            T24RC.RETURN_DESCRIPTION                                           AS T24_RETURN_DESC,                                      CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS REVERSAL_DESCRIPTION,                            A.CBUAE_RETURN_CODE,                            CBUAERC.RETURN_DESCRIPTION                                             AS CBUAE_RETURN_DESC,                                      CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                            A.REVERSAL_CODE,                            CCD.CD_DESCRIPTION                                         AS REVERSAL_DESC,                                      CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION                  FROM      NPSS_TRN_PROCESS_LOG A                  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD                  ON        CCD.CD_CODE = A.REVERSAL_CODE                  AND       CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'                  LEFT JOIN CORE_NC_RETURN_CODES T24RC                  ON        T24RC.RETURN_CODE = A.T24_RETURN_CODE                  AND       T24RC.PROCESSING_SYSTEM = 'T24'                  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC                  ON        CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE                  AND       CBUAERC.PROCESSING_SYSTEM = 'CBUAE'                  ORDER BY  A.NPSSTPL_ID DESC) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for chart to srch"
	ssp_for_chart_to_srch__brfq_for_bar_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_chart_to_srch"
		let destn_id="group_by_processing_system"
		let parent_source_id="svm_for_chart_list"
		let event_code="e_1667218605217"
		let event_params={"caller_name":"ssp_for_chart_to_srch__brfq_for_bar_chart","event_desc":"BRFQ for Bar chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"group_by_status","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_17","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1667219954524","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"​NPSS TPL Chart Process Sys MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1667217730682","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1667217731104","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1667217731296","date_format":false}],"joins":[]},"eq_text":"SELECT   KEY_COLUMN,          COUNT(PROCESSING_SYSTEM) AS KEY_VALUE,          PROCESSING_SYSTEM FROM     (                 SELECT T.CREATED_DATE,                        T.STATUS,                        T.PROCESS_STATUS,                        T.UETR,                        T.PROCESS_NAME,                        T.PROCESSING_SYSTEM,                        T.PROCESSING_SYSTEM AS KEY_COLUMN,    T.ADDITIONAL_INFO                 FROM   NPSS_TRN_PROCESS_LOG T) VW $WHERE GROUP BY KEY_COLUMN,          PROCESSING_SYSTEM"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS TPL Chart Process Sys CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view request"
	navigation_ui_view_request__sp_for_request() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_request"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666184977577"
		let event_params={"caller_name":"navigation_ui_view_request__sp_for_request","event_desc":"SP for request","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_request","raiseparam":{"profile_code":"BTL_1304_1666182418244"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view log history"
	navigation_ui_view_log_history__sp_for_view_log_history() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_log_history"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666184938434"
		let event_params={"caller_name":"navigation_ui_view_log_history__sp_for_view_log_history","event_desc":"SP for view log history","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_log_history","raiseparam":{"profile_code":"BTL_1304_1666182299071"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view log history"
	navigation_ui_view_log_history__brfq_for_hst_process_log_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_log_history"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1666186232925"
		let event_params={"caller_name":"navigation_ui_view_log_history__brfq_for_hst_process_log_list","event_desc":"BRFQ for HST process log list","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_log_history","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_12","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666186303516","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        DT_CODE,        DTT_CODE FROM   (                  SELECT    A.NPSSTPL_ID,                            A.MSG_ID,                            A.UETR,                            A.NPSSTRRD_REFNO,                            A.PROCESS_NAME,                            A.PROCESSING_SYSTEM,                            A.RESPONSE_CODE,                            A.PROCESS_REF_NO,                            A.RESPONSE_DATA,                            TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                            A.CREATED_DATE,                            A.PROCESS_STATUS,                            A.STATUS,                            A.DT_CODE,                            A.DTT_CODE,                            A.REQUEST_DATA_JSON,                            A.RESPONSE_DATA_JSON,                            A.T24_RETURN_CODE,    A.ADDITIONAL_INFO,                            T24RC.RETURN_DESCRIPTION                                          AS T24_RETURN_DESC,                                      CONCAT(A.T24_RETURN_CODE,'-', T24RC.RETURN_DESCRIPTION) AS REVERSAL_DESCRIPTION,                            A.CBUAE_RETURN_CODE,                            CBUAERC.RETURN_DESCRIPTION                                            AS CBUAE_RETURN_DESC,                                      CONCAT(A.CBUAE_RETURN_CODE,'-', CBUAERC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                            A.REVERSAL_CODE,                            CCD.CD_DESCRIPTION                                        AS REVERSAL_DESC,                                      CONCAT(A.REVERSAL_CODE,'-', CCD.CD_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION                  FROM      NPSS_TRN_PROCESS_LOG A                  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD                  ON        CCD.CD_CODE = A.REVERSAL_CODE                  AND       CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'                  LEFT JOIN CORE_NC_RETURN_CODES T24RC                  ON        T24RC.RETURN_CODE = A.T24_RETURN_CODE                  AND       T24RC.PROCESSING_SYSTEM = 'T24'                  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC                  ON        CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE                  AND       CBUAERC.PROCESSING_SYSTEM = 'CBUAE'                  ORDER BY  A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view response"
	navigation_ui_view_response__sp_for_response_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_response"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666185020313"
		let event_params={"caller_name":"navigation_ui_view_response__sp_for_response_btn","event_desc":"SP for response btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_response","raiseparam":{"profile_code":"BTL_1304_1666182379741"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "request ui back"
	request_ui_back__sp_for_req_back_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="request_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666185153781"
		let event_params={"caller_name":"request_ui_back__sp_for_req_back_btn","event_desc":"SP for req back btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"request_ui_back","raiseparam":{"profile_code":"BTL_1304_1666009819055"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "response ui back"
	response_ui_back__sp_for_res_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="response_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666185241057"
		let event_params={"caller_name":"response_ui_back__sp_for_res_back","event_desc":"SP for res back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"response_ui_back","raiseparam":{"profile_code":"BTL_1304_1666009819055"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trgr disable btn"
	navigation_ui_trgr_disable_btn__trgr_click_for_vlh() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trgr_disable_btn"
		let destn_id="navigation_ui_view_log_history"
		let parent_source_id=""
		let event_code="e_1666246045027"
		let event_params={"caller_name":"navigation_ui_trgr_disable_btn__trgr_click_for_vlh","event_desc":"TRGR click for VLH","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trgr_disable_btn","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trgr disable btn"
	navigation_ui_trgr_disable_btn__trgr_click_for_vr() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trgr_disable_btn"
		let destn_id="navigation_ui_view_request"
		let parent_source_id=""
		let event_code="e_1666246050515"
		let event_params={"caller_name":"navigation_ui_trgr_disable_btn__trgr_click_for_vr","event_desc":"TRGR click for VR","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trgr_disable_btn","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trgr disable btn"
	navigation_ui_trgr_disable_btn__trgr_click_for_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trgr_disable_btn"
		let destn_id="navigation_ui_view_response"
		let parent_source_id=""
		let event_code="e_1666246060419"
		let event_params={"caller_name":"navigation_ui_trgr_disable_btn__trgr_click_for_vres","event_desc":"TRGR click for VRes","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trgr_disable_btn","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trgr disable btn"
	navigation_ui_trgr_disable_btn__trgr_click_for_vd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trgr_disable_btn"
		let destn_id="navigation_ui_view_detail"
		let parent_source_id=""
		let event_code="e_1666246095086"
		let event_params={"caller_name":"navigation_ui_trgr_disable_btn__trgr_click_for_vd","event_desc":"TRGR click for VD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trgr_disable_btn","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui trgr disable btn"
	navigation_ui_trgr_disable_btn__trgr_click_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_trgr_disable_btn"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1666246190777"
		let event_params={"caller_name":"navigation_ui_trgr_disable_btn__trgr_click_for_tl","event_desc":"TRGR click for TL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_trgr_disable_btn","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164575667","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID, MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CREATED_DATE,     MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,        CDTR_IBAN,        PAYMENT_ENDTOEND_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        DT_CODE,        DTT_CODE,        TS_ID,        LOCKED_BY,        LOCKED_BY_NAME,        VERSION_NO   FROM (SELECT A.NPSST_ID,                A.VALUE_DATE,   A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,                A.CDTR_IBAN,                A.PAYMENT_ENDTOEND_ID,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME           FROM NPSS_TRANSACTIONS A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS HST View Transaction CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref No","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "group by processing system"
	group_by_processing_system__svm_for_bar_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="group_by_processing_system"
		let destn_id="group_by_processing_system"
		let parent_source_id=""
		let event_code="e_1667218557882"
		let event_params={"caller_name":"group_by_processing_system__svm_for_bar_chart","event_desc":"SVM for Bar chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"group_by_processing_system","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_bar_chart__ssp_for_bar_chart,svm_for_bar_chart__tbc_for_bar_chart,"
		let event_data={"group_by_processing_system":{"e_1667218557882":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_17","event_code":"E_1667218557882","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"BULK","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"PROCESSING_SYSTEM","level":"MI_LEVEL","name":"MI_LEVEL_PROCESSING_SYSTEM","setd3name":"PROCESSING_SYSTEM"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_17","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1667219954524","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"​NPSS TPL Chart Process Sys MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1667217730682","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1667217731104","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1667217731296","date_format":false}],"joins":[]},"eq_text":"SELECT   KEY_COLUMN,          COUNT(PROCESSING_SYSTEM) AS KEY_VALUE,          PROCESSING_SYSTEM FROM     (                 SELECT T.CREATED_DATE,                        T.STATUS,                        T.PROCESS_STATUS,                        T.UETR,                        T.PROCESS_NAME,                        T.PROCESSING_SYSTEM,                        T.PROCESSING_SYSTEM AS KEY_COLUMN,    T.ADDITIONAL_INFO                 FROM   NPSS_TRN_PROCESS_LOG T) VW $WHERE GROUP BY KEY_COLUMN,          PROCESSING_SYSTEM"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS TPL Chart Process Sys CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "group by processing system"
	group_by_processing_system__clcr_from_process_system_to_status() { 
		let Dest_Is_ctrl=true
		
		let source_id="group_by_processing_system"
		let destn_id="group_by_status"
		let parent_source_id=""
		let event_code="e_1667365046885"
		let event_params={"caller_name":"group_by_processing_system__clcr_from_process_system_to_status","event_desc":"CLCR from Process System to Status","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"group_by_processing_system","raiseparam":{}}
		let handler_code="clear"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666173412932","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS TPL Chart Status MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1667217406844","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1667217407003","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667217407178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667217420369","date_format":false}],"joins":[]},"eq_text":"SELECT   KEY_COLUMN,          COUNT(STATUS) AS KEY_VALUE,          PROCESS_STATUS,          STATUS FROM     (                 SELECT T.CREATED_DATE,                        T.STATUS AS KEY_COLUMN,                        T.STATUS,                        T.PROCESS_STATUS,                        T.UETR,                        T.PROCESS_NAME,                        T.PROCESSING_SYSTEM,    T.ADDITIONAL_INFO                 FROM   NPSS_TRN_PROCESS_LOG T) VW $WHERE GROUP BY STATUS,          KEY_COLUMN,          PROCESS_STATUS,          STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS  TPL Chart Status CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for bar chart"
	svm_for_bar_chart__ssp_for_bar_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_bar_chart"
		let destn_id="search"
		let parent_source_id="group_by_processing_system"
		let event_code="e_1667218770541"
		let event_params={"caller_name":"svm_for_bar_chart__ssp_for_bar_chart","event_desc":"SSP for Bar chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"group_by_processing_system","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_bar_chart__brfq_for_bar_chart_from_pll,ssp_for_bar_chart__brfq_for_chart_form_bar_chart,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for bar chart"
	svm_for_bar_chart__tbc_for_bar_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_bar_chart"
		let destn_id="navigation_ui_trgr_disable_btn"
		let parent_source_id="group_by_processing_system"
		let event_code="e_1667281560432"
		let event_params={"caller_name":"svm_for_bar_chart__tbc_for_bar_chart","event_desc":"TBC for Bar Chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"group_by_processing_system","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "ssp for bar chart"
	ssp_for_bar_chart__brfq_for_bar_chart_from_pll(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_bar_chart"
		let destn_id="process_log_list"
		let parent_source_id="svm_for_bar_chart"
		let event_code="e_1667218829316"
		let event_params={"caller_name":"ssp_for_bar_chart__brfq_for_bar_chart_from_pll","event_desc":"BRFQ for Bar chart from PLL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"group_by_processing_system","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666164510110","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666051334258","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666051334497","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666051334710","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666051335092","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666051335252","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666051335440","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666051335592","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666051336664","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666051402210","date_format":true},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666103605986","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666345406429","date_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781829963","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830490","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781830955","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277636823","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637284","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1667277637580","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        T24_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE FROM   (                  SELECT    A.NPSSTPL_ID,                            A.MSG_ID,                            A.UETR,                            A.NPSSTRRD_REFNO,                            A.PROCESS_NAME,                            A.PROCESSING_SYSTEM,                            A.RESPONSE_CODE,                            A.PROCESS_REF_NO,                            A.RESPONSE_DATA,                            TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS') AS CREATEDDATEMILISEC,                            A.CREATED_DATE,                            A.PROCESS_STATUS,                            A.STATUS,                            A.REQUEST_DATA_JSON,                            A.RESPONSE_DATA_JSON,                            A.T24_RETURN_CODE,    A.ADDITIONAL_INFO,                            T24RC.RETURN_DESCRIPTION                                           AS T24_RETURN_DESC,                                      CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS REVERSAL_DESCRIPTION,                            A.CBUAE_RETURN_CODE,                            CBUAERC.RETURN_DESCRIPTION                                             AS CBUAE_RETURN_DESC,                                      CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                            A.REVERSAL_CODE,                            CCD.CD_DESCRIPTION                                         AS REVERSAL_DESC,                                      CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION                  FROM      NPSS_TRN_PROCESS_LOG A                  LEFT JOIN CORE_NC_CODE_DESCRIPTIONS CCD                  ON        CCD.CD_CODE = A.REVERSAL_CODE                  AND       CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'                  LEFT JOIN CORE_NC_RETURN_CODES T24RC                  ON        T24RC.RETURN_CODE = A.T24_RETURN_CODE                  AND       T24RC.PROCESSING_SYSTEM = 'T24'                  LEFT JOIN CORE_NC_RETURN_CODES CBUAERC                  ON        CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE                  AND       CBUAERC.PROCESSING_SYSTEM = 'CBUAE'                  ORDER BY  A.NPSSTPL_ID DESC) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for bar chart"
	ssp_for_bar_chart__brfq_for_chart_form_bar_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_bar_chart"
		let destn_id="group_by_status"
		let parent_source_id="svm_for_bar_chart"
		let event_code="e_1667220634849"
		let event_params={"caller_name":"ssp_for_bar_chart__brfq_for_chart_form_bar_chart","event_desc":"BRFQ for Chart form bar chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"group_by_processing_system","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1666173412932","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS TPL Chart Status MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"KEY_COLUMN","alias_name":"","mq_id":"MQ_1667217406844","date_format":false},{"column_name":"KEY_VALUE","alias_name":"","mq_id":"MQ_1667217407003","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1667217407178","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1667217420369","date_format":false}],"joins":[]},"eq_text":"SELECT   KEY_COLUMN,          COUNT(STATUS) AS KEY_VALUE,          PROCESS_STATUS,          STATUS FROM     (                 SELECT T.CREATED_DATE,                        T.STATUS AS KEY_COLUMN,                        T.STATUS,                        T.PROCESS_STATUS,                        T.UETR,                        T.PROCESS_NAME,                        T.PROCESSING_SYSTEM,    T.ADDITIONAL_INFO                 FROM   NPSS_TRN_PROCESS_LOG T) VW $WHERE GROUP BY STATUS,          KEY_COLUMN,          PROCESS_STATUS,          STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS  TPL Chart Status CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"KEY_COLUMN","target_column":"KEY_COLUMN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"KEY_VALUE","target_column":"KEY_VALUE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui reset"
	navigation_ui_reset__rs() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_reset"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1667220449168"
		let event_params={"caller_name":"navigation_ui_reset__rs","event_desc":"RS","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_reset","raiseparam":{}}
		let handler_code="refresh_screen"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.refresh_screen(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for pll"
	svm_for_pll__bvm_for_rjson__request_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="svm_for_pll"
		let destn_id="chart_request_ui_memory10"
		let parent_source_id=""
		let event_code="e_1666186790887"
		let event_params={"destn_comp_id":"request_ui","destn_ctrl_id":"memory10","caller_name":"svm_for_pll__bvm_for_rjson__request_ui","event_desc":"BVM For RJSON","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
		let handler_code="bind_value_from_memory"
		let internals=""
		let event_data={"control":{"e_1666186790887":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665905039255":{"uicgc_code":"CONTROL","event_code":"E_1666186790887","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_REQUEST_DATA_JSON","tb_data":"Y","column":"REQUEST_DATA_JSON","d3name":""}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.bind_value_from_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for response json"
	svm_for_response_json__bvm_for_response_json__response_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="svm_for_response_json"
		let destn_id="chart_response_ui_memory11"
		let parent_source_id=""
		let event_code="e_1666187013930"
		let event_params={"destn_comp_id":"response_ui","destn_ctrl_id":"memory11","caller_name":"svm_for_response_json__bvm_for_response_json__response_ui","event_desc":"BVM for Response JSON","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
		let handler_code="bind_value_from_memory"
		let internals=""
		let event_data={"control":{"e_1666187013930":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665905039255":{"uicgc_code":"CONTROL","event_code":"E_1666187013930","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[{"level":"LOCAL","value":"MI_LEVEL_RESPONSE_DATA_JSON","tb_data":"Y","column":"RESPONSE_DATA_JSON","d3name":""}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.bind_value_from_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
