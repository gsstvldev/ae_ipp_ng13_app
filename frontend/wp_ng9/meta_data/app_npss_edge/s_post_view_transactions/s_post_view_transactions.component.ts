/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26496 
Modified By     : Admin 
Modified Date   : 2022-Oct-17 15:4 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_post_view_transactions
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'

@Component({
	selector: 's_post_view_transactions',
	templateUrl: './s_post_view_transactions.component.html',
	styleUrls: ['./s_post_view_transactions.component.css'],
	providers:[]
})
    
// Start of class 
export class s_post_view_transactionsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_post_view_transactions"
	wftpa_id : string = "WFT_NPSS_P_1304_1666010606895_0"
	cg_code : string = "CG_1304_1666009546462"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "transaction_list"
	uicgc_2 : string = "vertical_list"
	uicgc_3 : string = "navigation_ui"
	uicgc_4 : string = "search"
	uicgc_5 : string = "back_ui"
	key_events : any = {}
	btl_1304_1666010003163 : string = "p_search_layout"
	btl_1304_1666009903061 : string = "p_vertical_layout"
	btl_1304_1666009819055 : string = "p_main_layout"
	forms : any = ["uicgc_4","uicgc_5","uicgc_3"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	transaction_list : any = {}
	vertical_list : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_detail : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	back_ui : any = {}
	back_ui_back : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Transaction List" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction List"
		this.transaction_list.uicgc_code = "uicgc_1"
		this.transaction_list.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1666018861821","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS POSTView Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010754812","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666013621224","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666013621374","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666013621718","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666013621902","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666013622086","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666013622214","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666013758193","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666013758369","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666013758553","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666013758705","date_format":false},{"column_name":"PRODUCT_CODE","alias_name":"","mq_id":"MQ_1666013905077","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666013905261","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666013905453","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666013905597","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666013985811","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666013985995","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666013986171","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666013986338","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014032969","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014033153","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014033313","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014033609","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014033801","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014074688","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014074880","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1666014088952","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014089201","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666014152718","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1666014152902","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015759732","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015760156","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666017082958","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID ,     VALUE_DATE ,     CDTR_ACCT_NO ,     CDTR_ACCT_NAME,     INTRBK_STTLM_AMNT,     INTRBK_STTLM_CUR,     DBTR_ACCT_NO,     DBTR_ACCT_NAME,     DR_SORT_CODE,     CR_SORT_CODE ,     UETR,     HDR_MSG_ID,     PRODUCT_CODE,     CHANNEL_ID,     CHANNEL_REFNO,     CHANNEL_PRODUCT,     CHANNEL_SUB_PRODUCT,     CHANNEL_TRAN_CODE,     PROCESS_TYPE , PROCESS_DETAIL,     DBTR_PHONE_NO ,     DBTR_EMAIL_ID ,     DBTR_DOCUMENT_ID ,     DBTR_IBAN ,     CDTR_PHONE_NO ,     CDTR_EMAIL_ID ,     CDTR_DOCUMENT_ID ,     CDTR_IBAN ,     PAYMENT_ENDTOEND_ID ,     EXHF_ID,     PROCESS_STATUS ,     STATUS ,     NPSSTRRD_ID ,     NPSSTRRD_REFNO,     PROCESS_CODE ,     NPSSTPL_ID ,     PROCESS_NAME ,     PROCESSING_SYSTEM ,     RESPONSE_CODE ,     PROCESS_REF_NO ,     RESPONSE_DATA FROM ( SELECT     A.NPSST_ID ,     A.VALUE_DATE ,     A.CDTR_ACCT_NO ,     A.CDTR_ACCT_NAME,     A.INTRBK_STTLM_AMNT,     A.INTRBK_STTLM_CUR,     A.DBTR_ACCT_NO,     A.DBTR_ACCT_NAME,     A.DR_SORT_CODE,     A.CR_SORT_CODE ,     A.UETR,     A.HDR_MSG_ID,     A.PRODUCT_CODE,     A.CHANNEL_ID,     A.CHANNEL_REFNO,     A.CHANNEL_PRODUCT,     A.CHANNEL_SUB_PRODUCT,     A.CHANNEL_TRAN_CODE,     A.PROCESS_TYPE ,     A.DBTR_PHONE_NO ,     A.DBTR_EMAIL_ID ,     A.DBTR_DOCUMENT_ID ,     A.DBTR_IBAN ,     A.CDTR_PHONE_NO ,     A.CDTR_EMAIL_ID ,     A.CDTR_DOCUMENT_ID ,     A.CDTR_IBAN ,     A.PAYMENT_ENDTOEND_ID ,     A.EXHF_ID,     A.PROCESS_STATUS ,     A.STATUS ,     B.NPSSTRRD_ID ,     B.NPSSTRRD_REFNO,     B.PROCESS_CODE , B.PROCESS_DETAIL,     C.NPSSTPL_ID ,     C.PROCESS_NAME ,     C.PROCESSING_SYSTEM ,     C.RESPONSE_CODE ,     C.PROCESS_REF_NO ,     C.RESPONSE_DATA FROM     NPSS_TRANSACTIONS A LEFT JOIN NPSS_TRN_REQ_RESP_DTLS B ON     B.UETR = A.UETR INNER JOIN NPSS_TRN_PROCESS_LOG C ON     C.UETR = A.UETR ) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS POST View Transaction CCD","filter":[],"databinding":[{"header":"Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Dr Customer Account","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Customer Account","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.transaction_list.context_menu = []
		this.transaction_list.views = {}
		this.transaction_list.onChangecomponent = new EventEmitter<any>()
		this.transaction_list.show = true
		this.transaction_list.dynamic_param = {}
	
		// Component level properties - "Vertical List" 
		this.vertical_list.uictrl_code = "datatable"
		this.vertical_list.uicgc_desc = "Vertical List"
		this.vertical_list.uicgc_code = "uicgc_2"
		this.vertical_list.params = {"need_search":"N","need_vertical":"Y","advance_dynamic_search":"N"}
		this.vertical_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1666018873646","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS POSTView Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010754812","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666013621224","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666013621374","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666013621718","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666013621902","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666013622086","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666013622214","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666013758193","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666013758369","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666013758553","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666013758705","date_format":false},{"column_name":"PRODUCT_CODE","alias_name":"","mq_id":"MQ_1666013905077","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666013905261","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666013905453","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666013905597","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666013985811","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666013985995","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666013986171","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666013986338","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014032969","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014033153","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014033313","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014033609","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014033801","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014074688","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014074880","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1666014088952","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014089201","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666014152718","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1666014152902","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015759732","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015760156","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666017082958","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID ,     VALUE_DATE ,     CDTR_ACCT_NO ,     CDTR_ACCT_NAME,     INTRBK_STTLM_AMNT,     INTRBK_STTLM_CUR,     DBTR_ACCT_NO,     DBTR_ACCT_NAME,     DR_SORT_CODE,     CR_SORT_CODE ,     UETR,     HDR_MSG_ID,     PRODUCT_CODE,     CHANNEL_ID,     CHANNEL_REFNO,     CHANNEL_PRODUCT,     CHANNEL_SUB_PRODUCT,     CHANNEL_TRAN_CODE,     PROCESS_TYPE , PROCESS_DETAIL,     DBTR_PHONE_NO ,     DBTR_EMAIL_ID ,     DBTR_DOCUMENT_ID ,     DBTR_IBAN ,     CDTR_PHONE_NO ,     CDTR_EMAIL_ID ,     CDTR_DOCUMENT_ID ,     CDTR_IBAN ,     PAYMENT_ENDTOEND_ID ,     EXHF_ID,     PROCESS_STATUS ,     STATUS ,     NPSSTRRD_ID ,     NPSSTRRD_REFNO,     PROCESS_CODE ,     NPSSTPL_ID ,     PROCESS_NAME ,     PROCESSING_SYSTEM ,     RESPONSE_CODE ,     PROCESS_REF_NO ,     RESPONSE_DATA FROM ( SELECT     A.NPSST_ID ,     A.VALUE_DATE ,     A.CDTR_ACCT_NO ,     A.CDTR_ACCT_NAME,     A.INTRBK_STTLM_AMNT,     A.INTRBK_STTLM_CUR,     A.DBTR_ACCT_NO,     A.DBTR_ACCT_NAME,     A.DR_SORT_CODE,     A.CR_SORT_CODE ,     A.UETR,     A.HDR_MSG_ID,     A.PRODUCT_CODE,     A.CHANNEL_ID,     A.CHANNEL_REFNO,     A.CHANNEL_PRODUCT,     A.CHANNEL_SUB_PRODUCT,     A.CHANNEL_TRAN_CODE,     A.PROCESS_TYPE ,     A.DBTR_PHONE_NO ,     A.DBTR_EMAIL_ID ,     A.DBTR_DOCUMENT_ID ,     A.DBTR_IBAN ,     A.CDTR_PHONE_NO ,     A.CDTR_EMAIL_ID ,     A.CDTR_DOCUMENT_ID ,     A.CDTR_IBAN ,     A.PAYMENT_ENDTOEND_ID ,     A.EXHF_ID,     A.PROCESS_STATUS ,     A.STATUS ,     B.NPSSTRRD_ID ,     B.NPSSTRRD_REFNO,     B.PROCESS_CODE , B.PROCESS_DETAIL,     C.NPSSTPL_ID ,     C.PROCESS_NAME ,     C.PROCESSING_SYSTEM ,     C.RESPONSE_CODE ,     C.PROCESS_REF_NO ,     C.RESPONSE_DATA FROM     NPSS_TRANSACTIONS A LEFT JOIN NPSS_TRN_REQ_RESP_DTLS B ON     B.UETR = A.UETR INNER JOIN NPSS_TRN_PROCESS_LOG C ON     C.UETR = A.UETR ) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Ver POST View Transaction CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Customer Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing sys ref number","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Failure Error Code","target_column":"RESPONSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Code","target_column":"PROCESS_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Npsstrrd Refno","target_column":"NPSSTRRD_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer  Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Product Code","target_column":"PRODUCT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"EXHF ID","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.vertical_list.context_menu = []
		this.vertical_list.views = {}
		this.vertical_list.onChangecomponent = new EventEmitter<any>()
		this.vertical_list.show = true
		this.vertical_list.dynamic_param = {}
	
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
		this.navigation_ui_view_detail.disabled = false
		this.navigation_ui_view_detail.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_detail.dynamic_param = {}
		this.navigation_ui_view_detail.role = []
		this.navigation_ui_view_detail.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS POST Dashboard SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_post_dashboard_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_post_dashboard_srch"
		
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
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_for_pl()
		this.page_load__de_for_pl()
	}

	//Handler for INTERNAL event of "cf for pl"
	cf_for_pl__internal(parent_event_result){
		this.cf_for_pl__brfq_for_pl(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_search()
		this.search_search__cp_for_search()
	}

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__internal(parent_event_result){
		this.ssp_for_search__brfq_for_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_for_search()
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_for_tl()
		this.transaction_list__ee_for_tl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__spap_for_search()
		this.navigation_ui_search__cui_for_navigation_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view detail"
	navigation_ui_view_detail__action_button_click(){
		this.navigation_ui_view_detail__brfq_for_vl()
		this.navigation_ui_view_detail__show_profile_vl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__back_process()
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
		let internals="cf_for_pl__brfq_for_pl,"
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
	page_load__de_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_detail"
		let parent_source_id=""
		let event_code="e_1666010372555"
		let event_params={"caller_name":"page_load__de_for_pl","event_desc":"DE for PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for INTERNAL event of "cf for pl"
	cf_for_pl__brfq_for_pl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_for_pl"
		let destn_id="transaction_list"
		let parent_source_id="page_load"
		let event_code="e_1666010072089"
		let event_params={"caller_name":"cf_for_pl__brfq_for_pl","event_desc":"BRFQ for PL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1666018861821","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS POSTView Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010754812","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666013621224","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666013621374","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666013621718","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666013621902","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666013622086","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666013622214","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666013758193","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666013758369","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666013758553","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666013758705","date_format":false},{"column_name":"PRODUCT_CODE","alias_name":"","mq_id":"MQ_1666013905077","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666013905261","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666013905453","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666013905597","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666013985811","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666013985995","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666013986171","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666013986338","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014032969","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014033153","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014033313","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014033609","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014033801","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014074688","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014074880","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1666014088952","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014089201","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666014152718","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1666014152902","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015759732","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015760156","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666017082958","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID ,     VALUE_DATE ,     CDTR_ACCT_NO ,     CDTR_ACCT_NAME,     INTRBK_STTLM_AMNT,     INTRBK_STTLM_CUR,     DBTR_ACCT_NO,     DBTR_ACCT_NAME,     DR_SORT_CODE,     CR_SORT_CODE ,     UETR,     HDR_MSG_ID,     PRODUCT_CODE,     CHANNEL_ID,     CHANNEL_REFNO,     CHANNEL_PRODUCT,     CHANNEL_SUB_PRODUCT,     CHANNEL_TRAN_CODE,     PROCESS_TYPE , PROCESS_DETAIL,     DBTR_PHONE_NO ,     DBTR_EMAIL_ID ,     DBTR_DOCUMENT_ID ,     DBTR_IBAN ,     CDTR_PHONE_NO ,     CDTR_EMAIL_ID ,     CDTR_DOCUMENT_ID ,     CDTR_IBAN ,     PAYMENT_ENDTOEND_ID ,     EXHF_ID,     PROCESS_STATUS ,     STATUS ,     NPSSTRRD_ID ,     NPSSTRRD_REFNO,     PROCESS_CODE ,     NPSSTPL_ID ,     PROCESS_NAME ,     PROCESSING_SYSTEM ,     RESPONSE_CODE ,     PROCESS_REF_NO ,     RESPONSE_DATA FROM ( SELECT     A.NPSST_ID ,     A.VALUE_DATE ,     A.CDTR_ACCT_NO ,     A.CDTR_ACCT_NAME,     A.INTRBK_STTLM_AMNT,     A.INTRBK_STTLM_CUR,     A.DBTR_ACCT_NO,     A.DBTR_ACCT_NAME,     A.DR_SORT_CODE,     A.CR_SORT_CODE ,     A.UETR,     A.HDR_MSG_ID,     A.PRODUCT_CODE,     A.CHANNEL_ID,     A.CHANNEL_REFNO,     A.CHANNEL_PRODUCT,     A.CHANNEL_SUB_PRODUCT,     A.CHANNEL_TRAN_CODE,     A.PROCESS_TYPE ,     A.DBTR_PHONE_NO ,     A.DBTR_EMAIL_ID ,     A.DBTR_DOCUMENT_ID ,     A.DBTR_IBAN ,     A.CDTR_PHONE_NO ,     A.CDTR_EMAIL_ID ,     A.CDTR_DOCUMENT_ID ,     A.CDTR_IBAN ,     A.PAYMENT_ENDTOEND_ID ,     A.EXHF_ID,     A.PROCESS_STATUS ,     A.STATUS ,     B.NPSSTRRD_ID ,     B.NPSSTRRD_REFNO,     B.PROCESS_CODE , B.PROCESS_DETAIL,     C.NPSSTPL_ID ,     C.PROCESS_NAME ,     C.PROCESSING_SYSTEM ,     C.RESPONSE_CODE ,     C.PROCESS_REF_NO ,     C.RESPONSE_DATA FROM     NPSS_TRANSACTIONS A LEFT JOIN NPSS_TRN_REQ_RESP_DTLS B ON     B.UETR = A.UETR INNER JOIN NPSS_TRN_PROCESS_LOG C ON     C.UETR = A.UETR ) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS POST View Transaction CCD","filter":[],"databinding":[{"header":"Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Dr Customer Account","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Customer Account","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let internals="ssp_for_search__brfq_for_search,"
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

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__brfq_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search"
		let destn_id="transaction_list"
		let parent_source_id="search_search"
		let event_code="e_1666010118169"
		let event_params={"caller_name":"ssp_for_search__brfq_for_search","event_desc":"BRFQ For Search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1666018861821","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS POSTView Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010754812","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666013621224","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666013621374","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666013621718","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666013621902","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666013622086","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666013622214","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666013758193","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666013758369","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666013758553","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666013758705","date_format":false},{"column_name":"PRODUCT_CODE","alias_name":"","mq_id":"MQ_1666013905077","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666013905261","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666013905453","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666013905597","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666013985811","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666013985995","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666013986171","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666013986338","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014032969","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014033153","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014033313","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014033609","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014033801","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014074688","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014074880","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1666014088952","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014089201","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666014152718","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1666014152902","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015759732","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015760156","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666017082958","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID ,     VALUE_DATE ,     CDTR_ACCT_NO ,     CDTR_ACCT_NAME,     INTRBK_STTLM_AMNT,     INTRBK_STTLM_CUR,     DBTR_ACCT_NO,     DBTR_ACCT_NAME,     DR_SORT_CODE,     CR_SORT_CODE ,     UETR,     HDR_MSG_ID,     PRODUCT_CODE,     CHANNEL_ID,     CHANNEL_REFNO,     CHANNEL_PRODUCT,     CHANNEL_SUB_PRODUCT,     CHANNEL_TRAN_CODE,     PROCESS_TYPE , PROCESS_DETAIL,     DBTR_PHONE_NO ,     DBTR_EMAIL_ID ,     DBTR_DOCUMENT_ID ,     DBTR_IBAN ,     CDTR_PHONE_NO ,     CDTR_EMAIL_ID ,     CDTR_DOCUMENT_ID ,     CDTR_IBAN ,     PAYMENT_ENDTOEND_ID ,     EXHF_ID,     PROCESS_STATUS ,     STATUS ,     NPSSTRRD_ID ,     NPSSTRRD_REFNO,     PROCESS_CODE ,     NPSSTPL_ID ,     PROCESS_NAME ,     PROCESSING_SYSTEM ,     RESPONSE_CODE ,     PROCESS_REF_NO ,     RESPONSE_DATA FROM ( SELECT     A.NPSST_ID ,     A.VALUE_DATE ,     A.CDTR_ACCT_NO ,     A.CDTR_ACCT_NAME,     A.INTRBK_STTLM_AMNT,     A.INTRBK_STTLM_CUR,     A.DBTR_ACCT_NO,     A.DBTR_ACCT_NAME,     A.DR_SORT_CODE,     A.CR_SORT_CODE ,     A.UETR,     A.HDR_MSG_ID,     A.PRODUCT_CODE,     A.CHANNEL_ID,     A.CHANNEL_REFNO,     A.CHANNEL_PRODUCT,     A.CHANNEL_SUB_PRODUCT,     A.CHANNEL_TRAN_CODE,     A.PROCESS_TYPE ,     A.DBTR_PHONE_NO ,     A.DBTR_EMAIL_ID ,     A.DBTR_DOCUMENT_ID ,     A.DBTR_IBAN ,     A.CDTR_PHONE_NO ,     A.CDTR_EMAIL_ID ,     A.CDTR_DOCUMENT_ID ,     A.CDTR_IBAN ,     A.PAYMENT_ENDTOEND_ID ,     A.EXHF_ID,     A.PROCESS_STATUS ,     A.STATUS ,     B.NPSSTRRD_ID ,     B.NPSSTRRD_REFNO,     B.PROCESS_CODE , B.PROCESS_DETAIL,     C.NPSSTPL_ID ,     C.PROCESS_NAME ,     C.PROCESSING_SYSTEM ,     C.RESPONSE_CODE ,     C.PROCESS_REF_NO ,     C.RESPONSE_DATA FROM     NPSS_TRANSACTIONS A LEFT JOIN NPSS_TRN_REQ_RESP_DTLS B ON     B.UETR = A.UETR INNER JOIN NPSS_TRN_PROCESS_LOG C ON     C.UETR = A.UETR ) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS POST View Transaction CCD","filter":[],"databinding":[{"header":"Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Dr Customer Account","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Customer Account","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_data={"transaction_list":{"e_1666010193687":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1666010193687","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1666018861821","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS POSTView Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010754812","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666013621224","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666013621374","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666013621718","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666013621902","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666013622086","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666013622214","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666013758193","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666013758369","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666013758553","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666013758705","date_format":false},{"column_name":"PRODUCT_CODE","alias_name":"","mq_id":"MQ_1666013905077","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666013905261","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666013905453","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666013905597","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666013985811","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666013985995","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666013986171","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666013986338","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014032969","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014033153","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014033313","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014033609","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014033801","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014074688","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014074880","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1666014088952","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014089201","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666014152718","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1666014152902","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015759732","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015760156","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666017082958","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID ,     VALUE_DATE ,     CDTR_ACCT_NO ,     CDTR_ACCT_NAME,     INTRBK_STTLM_AMNT,     INTRBK_STTLM_CUR,     DBTR_ACCT_NO,     DBTR_ACCT_NAME,     DR_SORT_CODE,     CR_SORT_CODE ,     UETR,     HDR_MSG_ID,     PRODUCT_CODE,     CHANNEL_ID,     CHANNEL_REFNO,     CHANNEL_PRODUCT,     CHANNEL_SUB_PRODUCT,     CHANNEL_TRAN_CODE,     PROCESS_TYPE , PROCESS_DETAIL,     DBTR_PHONE_NO ,     DBTR_EMAIL_ID ,     DBTR_DOCUMENT_ID ,     DBTR_IBAN ,     CDTR_PHONE_NO ,     CDTR_EMAIL_ID ,     CDTR_DOCUMENT_ID ,     CDTR_IBAN ,     PAYMENT_ENDTOEND_ID ,     EXHF_ID,     PROCESS_STATUS ,     STATUS ,     NPSSTRRD_ID ,     NPSSTRRD_REFNO,     PROCESS_CODE ,     NPSSTPL_ID ,     PROCESS_NAME ,     PROCESSING_SYSTEM ,     RESPONSE_CODE ,     PROCESS_REF_NO ,     RESPONSE_DATA FROM ( SELECT     A.NPSST_ID ,     A.VALUE_DATE ,     A.CDTR_ACCT_NO ,     A.CDTR_ACCT_NAME,     A.INTRBK_STTLM_AMNT,     A.INTRBK_STTLM_CUR,     A.DBTR_ACCT_NO,     A.DBTR_ACCT_NAME,     A.DR_SORT_CODE,     A.CR_SORT_CODE ,     A.UETR,     A.HDR_MSG_ID,     A.PRODUCT_CODE,     A.CHANNEL_ID,     A.CHANNEL_REFNO,     A.CHANNEL_PRODUCT,     A.CHANNEL_SUB_PRODUCT,     A.CHANNEL_TRAN_CODE,     A.PROCESS_TYPE ,     A.DBTR_PHONE_NO ,     A.DBTR_EMAIL_ID ,     A.DBTR_DOCUMENT_ID ,     A.DBTR_IBAN ,     A.CDTR_PHONE_NO ,     A.CDTR_EMAIL_ID ,     A.CDTR_DOCUMENT_ID ,     A.CDTR_IBAN ,     A.PAYMENT_ENDTOEND_ID ,     A.EXHF_ID,     A.PROCESS_STATUS ,     A.STATUS ,     B.NPSSTRRD_ID ,     B.NPSSTRRD_REFNO,     B.PROCESS_CODE , B.PROCESS_DETAIL,     C.NPSSTPL_ID ,     C.PROCESS_NAME ,     C.PROCESSING_SYSTEM ,     C.RESPONSE_CODE ,     C.PROCESS_REF_NO ,     C.RESPONSE_DATA FROM     NPSS_TRANSACTIONS A LEFT JOIN NPSS_TRN_REQ_RESP_DTLS B ON     B.UETR = A.UETR INNER JOIN NPSS_TRN_PROCESS_LOG C ON     C.UETR = A.UETR ) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS POST View Transaction CCD","filter":[],"databinding":[{"header":"Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Channel ID","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Dr Customer Account","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Customer Account","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1666010399555"
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
		let event_params={"caller_name":"navigation_ui_search__spap_for_search","event_desc":"SPAP for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1666010003163","window_title":"Search","window_height":800,"window_width":"1200px","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1666010219246"}}
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
	navigation_ui_view_detail__brfq_for_vl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_detail"
		let destn_id="vertical_list"
		let parent_source_id=""
		let event_code="e_1666010347451"
		let event_params={"caller_name":"navigation_ui_view_detail__brfq_for_vl","event_desc":"BRFQ For VL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_detail","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1666018873646","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS POSTView Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010754812","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666013621224","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666013621374","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666013621718","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666013621902","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666013622086","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666013622214","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666013758193","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666013758369","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666013758553","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666013758705","date_format":false},{"column_name":"PRODUCT_CODE","alias_name":"","mq_id":"MQ_1666013905077","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666013905261","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666013905453","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666013905597","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666013985811","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666013985995","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666013986171","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666013986338","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014032969","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014033153","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014033313","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014033609","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014033801","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014074688","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014074880","date_format":false},{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1666014088952","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014089201","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666014152718","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1666014152902","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015759732","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015760156","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666017082958","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID ,     VALUE_DATE ,     CDTR_ACCT_NO ,     CDTR_ACCT_NAME,     INTRBK_STTLM_AMNT,     INTRBK_STTLM_CUR,     DBTR_ACCT_NO,     DBTR_ACCT_NAME,     DR_SORT_CODE,     CR_SORT_CODE ,     UETR,     HDR_MSG_ID,     PRODUCT_CODE,     CHANNEL_ID,     CHANNEL_REFNO,     CHANNEL_PRODUCT,     CHANNEL_SUB_PRODUCT,     CHANNEL_TRAN_CODE,     PROCESS_TYPE , PROCESS_DETAIL,     DBTR_PHONE_NO ,     DBTR_EMAIL_ID ,     DBTR_DOCUMENT_ID ,     DBTR_IBAN ,     CDTR_PHONE_NO ,     CDTR_EMAIL_ID ,     CDTR_DOCUMENT_ID ,     CDTR_IBAN ,     PAYMENT_ENDTOEND_ID ,     EXHF_ID,     PROCESS_STATUS ,     STATUS ,     NPSSTRRD_ID ,     NPSSTRRD_REFNO,     PROCESS_CODE ,     NPSSTPL_ID ,     PROCESS_NAME ,     PROCESSING_SYSTEM ,     RESPONSE_CODE ,     PROCESS_REF_NO ,     RESPONSE_DATA FROM ( SELECT     A.NPSST_ID ,     A.VALUE_DATE ,     A.CDTR_ACCT_NO ,     A.CDTR_ACCT_NAME,     A.INTRBK_STTLM_AMNT,     A.INTRBK_STTLM_CUR,     A.DBTR_ACCT_NO,     A.DBTR_ACCT_NAME,     A.DR_SORT_CODE,     A.CR_SORT_CODE ,     A.UETR,     A.HDR_MSG_ID,     A.PRODUCT_CODE,     A.CHANNEL_ID,     A.CHANNEL_REFNO,     A.CHANNEL_PRODUCT,     A.CHANNEL_SUB_PRODUCT,     A.CHANNEL_TRAN_CODE,     A.PROCESS_TYPE ,     A.DBTR_PHONE_NO ,     A.DBTR_EMAIL_ID ,     A.DBTR_DOCUMENT_ID ,     A.DBTR_IBAN ,     A.CDTR_PHONE_NO ,     A.CDTR_EMAIL_ID ,     A.CDTR_DOCUMENT_ID ,     A.CDTR_IBAN ,     A.PAYMENT_ENDTOEND_ID ,     A.EXHF_ID,     A.PROCESS_STATUS ,     A.STATUS ,     B.NPSSTRRD_ID ,     B.NPSSTRRD_REFNO,     B.PROCESS_CODE , B.PROCESS_DETAIL,     C.NPSSTPL_ID ,     C.PROCESS_NAME ,     C.PROCESSING_SYSTEM ,     C.RESPONSE_CODE ,     C.PROCESS_REF_NO ,     C.RESPONSE_DATA FROM     NPSS_TRANSACTIONS A LEFT JOIN NPSS_TRN_REQ_RESP_DTLS B ON     B.UETR = A.UETR INNER JOIN NPSS_TRN_PROCESS_LOG C ON     C.UETR = A.UETR ) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Ver POST View Transaction CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Customer Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing sys ref number","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Failure Error Code","target_column":"RESPONSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Code","target_column":"PROCESS_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"PROCESS_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message ID","target_column":"HDR_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Npsstrrd Refno","target_column":"NPSSTRRD_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer  Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Customer IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Product Code","target_column":"PRODUCT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"EXHF ID","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view detail"
	navigation_ui_view_detail__show_profile_vl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_detail"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666010903736"
		let event_params={"caller_name":"navigation_ui_view_detail__show_profile_vl","event_desc":"Show Profile VL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_detail","raiseparam":{"profile_code":"BTL_1304_1666009903061"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__back_process() { 
		let Dest_Is_ctrl=true
		
		let source_id="back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666010865737"
		let event_params={"caller_name":"back_ui_back__back_process","event_desc":"Back Process","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1666009819055"}}
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
