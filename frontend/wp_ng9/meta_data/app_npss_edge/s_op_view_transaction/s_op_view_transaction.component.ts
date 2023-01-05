/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27713 
Modified By     : Admin 
Modified Date   : 2023-Jan-05 15:49 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_view_transaction
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_op_view_transaction',
	templateUrl: './s_op_view_transaction.component.html',
	styleUrls: ['./s_op_view_transaction.component.css'],
	providers:[torus_cs_show_hideService]
})
    
// Start of class 
export class s_op_view_transactionComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_op_view_transaction"
	wftpa_id : string = "WFT_NPSS_P_1304_1672827991199_0"
	cg_code : string = "CG_1304_1672826611094"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "channel_group"
	uicgc_2 : string = "payment_type_group"
	uicgc_3 : string = "navigation_ui"
	uicgc_4 : string = "search"
	uicgc_5 : string = "process_log_list"
	uicgc_6 : string = "cbs_ref_ui"
	uicgc_7 : string = "view_dr_cr_details"
	uicgc_8 : string = "back_ui"
	uicgc_9 : string = "view_payment_details"
	uicgc_10 : string = "message_detail"
	uicgc_11 : string = "history_detail"
	uicgc_12 : string = "message_back_ui"
	uicgc_13 : string = "message_detail_action"
	uicgc_14 : string = "message_detail_ui"
	uicgc_15 : string = "process_log_ui"
	uicgc_16 : string = "request_ui"
	uicgc_17 : string = "single_back_ui"
	uicgc_18 : string = "response_ui"
	uicgc_19 : string = "queue_group"
	uicgc_20 : string = "message_type_group"
	uicgc_21 : string = "status_group"
	uicgc_22 : string = "transaction_list"
	uicgc_23 : string = "process_type_list"
	key_events : any = {}
	btl_1304_1670245368385 : string = "p_view_req_and_res"
	btl_1304_1669459620728 : string = "p_view_message_ui_layout"
	btl_1304_1669459551241 : string = "p_view_message_list_layout"
	btl_1304_1669459508394 : string = "p_view_request_layout"
	btl_1304_1669459458643 : string = "p_view_response_layout"
	btl_1304_1669459405629 : string = "p_view_history_layout"
	btl_1304_1669202528774 : string = "p_vertical_tran_detail_profile"
	btl_1304_1668850424944 : string = "p_cbs_layout"
	btl_1304_1666856790983 : string = "p_search_layout"
	btl_1304_1666856599156 : string = "p_main_layout"
	forms : any = ["uicgc_14","uicgc_18","uicgc_16","uicgc_4","uicgc_17","uicgc_12","uicgc_13","uicgc_15","uicgc_8","uicgc_6","uicgc_3"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	channel_group : any = {}
	payment_type_group : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_tran : any = {}
	navigation_ui_view_process_log : any = {}
	navigation_ui_view_message_log : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	process_log_list : any = {}
	cbs_ref_ui : any = {}
	cbs_ref_ui_save : any = {}
	view_dr_cr_details : any = {}
	back_ui : any = {}
	back_ui_back : any = {}
	view_payment_details : any = {}
	message_detail : any = {}
	history_detail : any = {}
	message_back_ui : any = {}
	message_back_ui_back : any = {}
	message_detail_action : any = {}
	message_detail_action_back : any = {}
	message_detail_action_view_message : any = {}
	message_detail_ui : any = {}
	process_log_ui : any = {}
	process_log_ui_back : any = {}
	process_log_ui_view_req_and_res : any = {}
	request_ui : any = {}
	single_back_ui : any = {}
	single_back_ui_back : any = {}
	response_ui : any = {}
	queue_group : any = {}
	message_type_group : any = {}
	status_group : any = {}
	transaction_list : any = {}
	process_type_list : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Channel Group" 
		this.channel_group.uictrl_code = "datatable"
		this.channel_group.uicgc_desc = "Channel Group"
		this.channel_group.uicgc_code = "uicgc_1"
		this.channel_group.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.channel_group.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828121470","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Channel Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CHANNEL_COUNT","alias_name":"","mq_id":"MQ_1672829934302","date_format":false},{"column_name":"channel_id","alias_name":"","mq_id":"MQ_1672829934741","date_format":false}],"joins":[]},"eq_text":"select  COUNT(channel_id) as CHANNEL_COUNT,  channel_id from  (  select   T.created_date,   T.channel_id ,   T.process_type ,   T.tenant_id,   T.DEPARTMENT_CODE  from   npss_transactions T) V $WHERE group by  channel_id"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Channel Dashboard CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"channel_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"CHANNEL_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.channel_group.context_menu = []
		this.channel_group.views = {}
		this.channel_group.onChangecomponent = new EventEmitter<any>()
		this.channel_group.show = true
		this.channel_group.dynamic_param = {}
	
		// Component level properties - "Payment Type Group" 
		this.payment_type_group.uictrl_code = "datatable"
		this.payment_type_group.uicgc_desc = "Payment Type Group"
		this.payment_type_group.uicgc_code = "uicgc_2"
		this.payment_type_group.params = {"need_pag_datatable":"Y","advance_dynamic_search":"N","need_search":"N"}
		this.payment_type_group.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828181899","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Payment Type MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PAYMENT_TYPE_COUNT","alias_name":"","mq_id":"MQ_1672833338397","date_format":false},{"column_name":"PAYMENT_TYPE","alias_name":"","mq_id":"MQ_1672833338547","date_format":false}],"joins":[]},"eq_text":"select   COUNT(PAYMENT_TYPE) as PAYMENT_TYPE_COUNT,   PAYMENT_TYPE from   (  select    T.created_date,    T.channel_id ,    T.process_type ,    T.tenant_id,    case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE  from npss_transactions T ) V $WHERE group by  PAYMENT_TYPE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Type Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Payment Type","target_column":"PAYMENT_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PAYMENT_TYPE_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.payment_type_group.context_menu = []
		this.payment_type_group.views = {}
		this.payment_type_group.onChangecomponent = new EventEmitter<any>()
		this.payment_type_group.show = true
		this.payment_type_group.dynamic_param = {}
	
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
		
		// "View Tran" Button of "Navigation UI" component
		this.navigation_ui_view_tran.label_name = "View Tran"
		this.navigation_ui_view_tran.show = true
		this.navigation_ui_view_tran.disabled = false
		this.navigation_ui_view_tran.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_tran.dynamic_param = {}
		this.navigation_ui_view_tran.role = []
		this.navigation_ui_view_tran.action = ""
		
		// "View Process Log" Button of "Navigation UI" component
		this.navigation_ui_view_process_log.label_name = "View Process Log"
		this.navigation_ui_view_process_log.show = true
		this.navigation_ui_view_process_log.disabled = false
		this.navigation_ui_view_process_log.params = {"icon_only":false,"uicgcc_style":"fa fa-building"}
		this.navigation_ui_view_process_log.dynamic_param = {}
		this.navigation_ui_view_process_log.role = []
		this.navigation_ui_view_process_log.action = ""
		
		// "View Message Log" Button of "Navigation UI" component
		this.navigation_ui_view_message_log.label_name = "View Message Log"
		this.navigation_ui_view_message_log.show = true
		this.navigation_ui_view_message_log.disabled = false
		this.navigation_ui_view_message_log.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_message_log.dynamic_param = {}
		this.navigation_ui_view_message_log.role = []
		this.navigation_ui_view_message_log.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Channel Dashboard SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_channel_dashboard_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_channel_dashboard_srch"
		
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
	
		// Component level properties - "Process Log List" 
		this.process_log_list.uictrl_code = "datatable"
		this.process_log_list.uicgc_desc = "Process Log List"
		this.process_log_list.uicgc_code = "uicgc_5"
		this.process_log_list.params = {"need_pag_datatable":"Y","advance_dynamic_search":"N","need_search":"N"}
		this.process_log_list.datasource = {}
		this.process_log_list.context_menu = []
		this.process_log_list.views = {}
		this.process_log_list.onChangecomponent = new EventEmitter<any>()
		this.process_log_list.show = true
		this.process_log_list.dynamic_param = {}
	
		// Component level properties - "CBS REF UI" 
		this.cbs_ref_ui.uictrl_code = "dynamic_ui"
		this.cbs_ref_ui.uicgc_desc = "CBS REF UI"
		this.cbs_ref_ui.uicgc_code = "uicgc_6"
		this.cbs_ref_ui.params = {}
		this.cbs_ref_ui.datasource = {}
		this.cbs_ref_ui.context_menu = []
		this.cbs_ref_ui.views = {}
		this.cbs_ref_ui.onChangecomponent = new EventEmitter<any>()
		this.cbs_ref_ui.show = true
		this.cbs_ref_ui.dynamic_param = {}
		this.cbs_ref_ui.f_cbs_ref_ui = {"show":true}
		this.cbs_ref_ui.current_view = "f_cbs_ref_ui"
		
		// "Save" Button of "CBS REF UI" component
		this.cbs_ref_ui_save.label_name = "Save"
		this.cbs_ref_ui_save.show = true
		this.cbs_ref_ui_save.disabled = false
		this.cbs_ref_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-save"}
		this.cbs_ref_ui_save.dynamic_param = {}
		this.cbs_ref_ui_save.role = []
		this.cbs_ref_ui_save.action = ""
	
		// Component level properties - "View Dr Cr Details" 
		this.view_dr_cr_details.uictrl_code = "datatable"
		this.view_dr_cr_details.uicgc_desc = "View Dr Cr Details"
		this.view_dr_cr_details.uicgc_code = "uicgc_7"
		this.view_dr_cr_details.params = {"need_search":"N","need_vertical":"Y"}
		this.view_dr_cr_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828292746","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1669198452328","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670656485225","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Number","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Number","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_dr_cr_details.context_menu = []
		this.view_dr_cr_details.views = {}
		this.view_dr_cr_details.onChangecomponent = new EventEmitter<any>()
		this.view_dr_cr_details.show = true
		this.view_dr_cr_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Back UI" 
		this.back_ui.uictrl_code = "dynamic_ui"
		this.back_ui.uicgc_desc = "Back UI"
		this.back_ui.uicgc_code = "uicgc_8"
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
		this.back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.back_ui_back.dynamic_param = {}
		this.back_ui_back.role = []
		this.back_ui_back.action = ""
	
		// Component level properties - "View Payment Details" 
		this.view_payment_details.uictrl_code = "datatable"
		this.view_payment_details.uicgc_desc = "View Payment Details"
		this.view_payment_details.uicgc_code = "uicgc_9"
		this.view_payment_details.params = {"need_search":"N","need_vertical":"Y"}
		this.view_payment_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828302961","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1669198452328","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670656485225","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_payment_details.context_menu = []
		this.view_payment_details.views = {}
		this.view_payment_details.onChangecomponent = new EventEmitter<any>()
		this.view_payment_details.show = true
		this.view_payment_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Message Detail" 
		this.message_detail.uictrl_code = "datatable"
		this.message_detail.uicgc_desc = "Message Detail"
		this.message_detail.uicgc_code = "uicgc_10"
		this.message_detail.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.message_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828413149","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSTRRD_ID,        MSG_ID,        UETR,        PARENT_NPSSTRRD_REFNO,        NPSSTRRD_REFNO,        PROCESS_CODE,        PROCESS_DETAIL,        EXHF_ID,        PROCESS_NAME,        MESSAGE_DESC,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        STATUS,        PROCESS_STATUS,        MESSAGE_DATA,        CREATEDDATEMILISEC,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSTRRD.NPSSTRRD_ID,                NPSSTRRD.MSG_ID,                NPSSTRRD.UETR,                NPSSTRRD.PARENT_NPSSTRRD_REFNO,                NPSSTRRD.NPSSTRRD_REFNO,                NPSSTRRD.MESSAGE_DATA,                NPSSTRRD.PROCESS_CODE,                NPSSTRRD.PROCESS_DETAIL,                NPSSTRRD.EXHF_ID,                NPSSTRRD.PROCESS_NAME,                NPSSTRRD.MESSAGE_DESC,                NPSSTRRD.CHANNEL_ID,                NPSSTRRD.CHANNEL_REFNO,                NPSSTRRD.CHANNEL_USERID,                NPSSTRRD.CHANNEL_PRODUCT,                NPSSTRRD.CHANNEL_SUB_PRODUCT,                NPSSTRRD.CHANNEL_TRAN_CODE,                NPSSTRRD.CREATED_BY,                NPSSTRRD.CREATED_BY_NAME,                NPSSTRRD.CREATED_DATE,                NPSSTRRD.DT_CODE,                NPSSTRRD.DT_DESCRIPTION,                NPSSTRRD.DTT_CODE,                NPSSTRRD.DTT_DESCRIPTION,                NPSSTRRD.MODIFIED_BY,                NPSSTRRD.MODIFIED_BY_NAME,                NPSSTRRD.MODIFIED_DATE,                NPSSTRRD.STATUS,                NPSSTRRD.PROCESS_STATUS,                NPSSTRRD.SYSTEM_ID,                NPSSTRRD.SYSTEM_NAME,                NPSSTRRD.TENANT_ID,                NPSSTRRD.APP_ID,                NPSSTRRD.VERSION_NO,                TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC           FROM NPSS_TRN_REQ_RESP_DTLS NPSSTRRD) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.message_detail.context_menu = []
		this.message_detail.views = {}
		this.message_detail.onChangecomponent = new EventEmitter<any>()
		this.message_detail.show = true
		this.message_detail.dynamic_param = {}
	
		// Component level properties - "History Detail" 
		this.history_detail.uictrl_code = "datatable"
		this.history_detail.uicgc_desc = "History Detail"
		this.history_detail.uicgc_code = "uicgc_11"
		this.history_detail.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672895298011","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DEPARTMENT_CODE,        DT_CODE,        DTT_CODE,AMOUNT_CREDITED,AMT_CR_LOC_CUR,CHARGE_AMOUNT,BUY_CURRENCY,SELL_CURRENCY,DEALT_AMOUNT,EXCHANGE_RATE,CONTRA_AMOUNT   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                NT.DEPARTMENT_CODE,                A.ADDITIONAL_INFO,A.AMOUNT_CREDITED,A.AMT_CR_LOC_CUR,A.CHARGE_AMOUNT,A.BUY_CURRENCY,A.SELL_CURRENCY,A.DEALT_AMOUNT,A.EXCHANGE_RATE,A.CONTRA_AMOUNT,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                                   A.REVERSAL_CODE                                                               AND CCD.CD_CATEGORY =                                                                   'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                                A.T24_RETURN_CODE                                                            AND T24RC.PROCESSING_SYSTEM =                                                                'T24' AND T24RC.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                                  A.CBUAE_RETURN_CODE                                                              AND CBUAERC.PROCESSING_SYSTEM =                                                                  'CBUAE' AND CBUAERC.STATUS = 'APPROVED'          INNER JOIN NPSS_TRANSACTIONS NT ON NT.UETR = A.UETR          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
		// Component level properties - "Message Back UI" 
		this.message_back_ui.uictrl_code = "dynamic_ui"
		this.message_back_ui.uicgc_desc = "Message Back UI"
		this.message_back_ui.uicgc_code = "uicgc_12"
		this.message_back_ui.params = {}
		this.message_back_ui.datasource = {}
		this.message_back_ui.context_menu = []
		this.message_back_ui.views = {}
		this.message_back_ui.onChangecomponent = new EventEmitter<any>()
		this.message_back_ui.show = true
		this.message_back_ui.dynamic_param = {}
		this.message_back_ui.f_message_back_ui = {"show":true}
		this.message_back_ui.current_view = "f_message_back_ui"
		
		// "Back" Button of "Message Back UI" component
		this.message_back_ui_back.label_name = "Back"
		this.message_back_ui_back.show = true
		this.message_back_ui_back.disabled = false
		this.message_back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.message_back_ui_back.dynamic_param = {}
		this.message_back_ui_back.role = []
		this.message_back_ui_back.action = ""
	
		// Component level properties - "Message Detail Action" 
		this.message_detail_action.uictrl_code = "dynamic_ui"
		this.message_detail_action.uicgc_desc = "Message Detail Action"
		this.message_detail_action.uicgc_code = "uicgc_13"
		this.message_detail_action.params = {}
		this.message_detail_action.datasource = {}
		this.message_detail_action.context_menu = []
		this.message_detail_action.views = {}
		this.message_detail_action.onChangecomponent = new EventEmitter<any>()
		this.message_detail_action.show = true
		this.message_detail_action.dynamic_param = {}
		this.message_detail_action.f_message_detail_action = {"show":true}
		this.message_detail_action.current_view = "f_message_detail_action"
		
		// "Back" Button of "Message Detail Action" component
		this.message_detail_action_back.label_name = "Back"
		this.message_detail_action_back.show = true
		this.message_detail_action_back.disabled = false
		this.message_detail_action_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.message_detail_action_back.dynamic_param = {}
		this.message_detail_action_back.role = []
		this.message_detail_action_back.action = ""
		
		// "View Message" Button of "Message Detail Action" component
		this.message_detail_action_view_message.label_name = "View Message"
		this.message_detail_action_view_message.show = true
		this.message_detail_action_view_message.disabled = true
		this.message_detail_action_view_message.params = {"icon_only":false,"uicgcc_style":"fa fa-css3"}
		this.message_detail_action_view_message.dynamic_param = {}
		this.message_detail_action_view_message.role = []
		this.message_detail_action_view_message.action = ""
	
		// Component level properties - "Message Detail UI" 
		this.message_detail_ui.uictrl_code = "dynamic_ui"
		this.message_detail_ui.uicgc_desc = "Message Detail UI"
		this.message_detail_ui.uicgc_code = "uicgc_14"
		this.message_detail_ui.params = {}
		this.message_detail_ui.datasource = {}
		this.message_detail_ui.context_menu = []
		this.message_detail_ui.views = {"first":"DTT_1304_1665903906193","is_tab_mode":"N","dtt_1304_1665903906193":{"0":[{"dttv_id":"NPSS Message Data UI","tab_order":0,"tab_name":"","uicgc_description":"Message Detail UI","role_description":"default","dtt_description":"NPSS TRN REQ RESP DTLS"}]}}
		this.message_detail_ui.onChangecomponent = new EventEmitter<any>()
		this.message_detail_ui.show = true
		this.message_detail_ui.dynamic_param = {}
		this.message_detail_ui.f_npss_message_data_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.message_detail_ui.form_name = "f_npss_message_data_ui"
	
		// Component level properties - "Process Log UI" 
		this.process_log_ui.uictrl_code = "dynamic_ui"
		this.process_log_ui.uicgc_desc = "Process Log UI"
		this.process_log_ui.uicgc_code = "uicgc_15"
		this.process_log_ui.params = {}
		this.process_log_ui.datasource = {}
		this.process_log_ui.context_menu = []
		this.process_log_ui.views = {}
		this.process_log_ui.onChangecomponent = new EventEmitter<any>()
		this.process_log_ui.show = true
		this.process_log_ui.dynamic_param = {}
		this.process_log_ui.f_process_log_ui = {"show":true}
		this.process_log_ui.current_view = "f_process_log_ui"
		
		// "Back" Button of "Process Log UI" component
		this.process_log_ui_back.label_name = "Back"
		this.process_log_ui_back.show = true
		this.process_log_ui_back.disabled = false
		this.process_log_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.process_log_ui_back.dynamic_param = {}
		this.process_log_ui_back.role = []
		this.process_log_ui_back.action = ""
		
		// "View Req and Res" Button of "Process Log UI" component
		this.process_log_ui_view_req_and_res.label_name = "View Req and Res"
		this.process_log_ui_view_req_and_res.show = true
		this.process_log_ui_view_req_and_res.disabled = true
		this.process_log_ui_view_req_and_res.params = {"icon_only":false,"uicgcc_style":"fa fa-expand"}
		this.process_log_ui_view_req_and_res.dynamic_param = {}
		this.process_log_ui_view_req_and_res.role = []
		this.process_log_ui_view_req_and_res.action = ""
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_16"
		this.request_ui.params = {}
		this.request_ui.datasource = {}
		this.request_ui.context_menu = []
		this.request_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Request UI","tab_order":0,"tab_name":"","uicgc_description":"Request UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.request_ui.onChangecomponent = new EventEmitter<any>()
		this.request_ui.show = true
		this.request_ui.dynamic_param = {}
		this.request_ui.f_npss_target_request_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.request_ui.form_name = "f_npss_target_request_ui"
	
		// Component level properties - "Single Back UI" 
		this.single_back_ui.uictrl_code = "dynamic_ui"
		this.single_back_ui.uicgc_desc = "Single Back UI"
		this.single_back_ui.uicgc_code = "uicgc_17"
		this.single_back_ui.params = {}
		this.single_back_ui.datasource = {}
		this.single_back_ui.context_menu = []
		this.single_back_ui.views = {}
		this.single_back_ui.onChangecomponent = new EventEmitter<any>()
		this.single_back_ui.show = true
		this.single_back_ui.dynamic_param = {}
		this.single_back_ui.f_single_back_ui = {"show":true}
		this.single_back_ui.current_view = "f_single_back_ui"
		
		// "Back" Button of "Single Back UI" component
		this.single_back_ui_back.label_name = "Back"
		this.single_back_ui_back.show = true
		this.single_back_ui_back.disabled = false
		this.single_back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.single_back_ui_back.dynamic_param = {}
		this.single_back_ui_back.role = []
		this.single_back_ui_back.action = ""
	
		// Component level properties - "Response UI" 
		this.response_ui.uictrl_code = "dynamic_ui"
		this.response_ui.uicgc_desc = "Response UI"
		this.response_ui.uicgc_code = "uicgc_18"
		this.response_ui.params = {}
		this.response_ui.datasource = {}
		this.response_ui.context_menu = []
		this.response_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Response UI","tab_order":0,"tab_name":"","uicgc_description":"Response UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.response_ui.onChangecomponent = new EventEmitter<any>()
		this.response_ui.show = true
		this.response_ui.dynamic_param = {}
		this.response_ui.f_npss_target_response_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.response_ui.form_name = "f_npss_target_response_ui"
	
		// Component level properties - "Queue Group" 
		this.queue_group.uictrl_code = "datatable"
		this.queue_group.uicgc_desc = "Queue Group"
		this.queue_group.uicgc_code = "uicgc_19"
		this.queue_group.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.queue_group.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828247713","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A )PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.queue_group.context_menu = []
		this.queue_group.views = {}
		this.queue_group.onChangecomponent = new EventEmitter<any>()
		this.queue_group.show = true
		this.queue_group.dynamic_param = {}
	
		// Component level properties - "Message Type Group" 
		this.message_type_group.uictrl_code = "datatable"
		this.message_type_group.uicgc_desc = "Message Type Group"
		this.message_type_group.uicgc_code = "uicgc_20"
		this.message_type_group.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.message_type_group.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828449252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Name Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME_COUNT","alias_name":"","mq_id":"MQ_1672835105850","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672835108736","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_NAME) as PROCESS_NAME_COUNT,  PROCESS_NAME from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_NAME"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Name Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_NAME_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.message_type_group.context_menu = []
		this.message_type_group.views = {}
		this.message_type_group.onChangecomponent = new EventEmitter<any>()
		this.message_type_group.show = true
		this.message_type_group.dynamic_param = {}
	
		// Component level properties - "Status Group" 
		this.status_group.uictrl_code = "chart"
		this.status_group.uicgc_desc = "Status Group"
		this.status_group.uicgc_code = "uicgc_21"
		this.status_group.params = {}
		this.status_group.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_21","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672838507154","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Status Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS_COUNT","alias_name":"","mq_id":"MQ_1672836121070","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1672836121212","date_format":false}],"joins":[]},"eq_text":"select  COUNT(STATUS) as STATUS_COUNT,  STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Status Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"<>","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.status_group.context_menu = []
		this.status_group.views = {}
		this.status_group.onChangecomponent = new EventEmitter<any>()
		this.status_group.show = true
		this.status_group.dynamic_param = {}
	
		// Component level properties - "Transaction List" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction List"
		this.transaction_list.uicgc_code = "uicgc_22"
		this.transaction_list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672830939547","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1672841093950","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1672841094096","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1672841094239","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1672841094392","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1672841095319","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1672841095338","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1672841149917","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1672841152766","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672841152917","date_format":false},{"column_name":"CREATIONTIME","alias_name":"","mq_id":"MQ_1672926646263","date_format":false},{"column_name":"COMPLETIONTIME","alias_name":"","mq_id":"MQ_1672926655615","date_format":false}],"joins":[]},"eq_text":"select CREATIONTIME,  COMPLETIONTIME,  CHANNEL_ID ,  PROCESS_TYPE ,  TENANT_ID,  UETR,  npsst_id ,  VALUE_DATE,  CDTR_IBAN,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  PAYMENT_ENDTOEND_ID,  TRAN_REF_ID,  DEPARTMENT_CODE ,  PROCESSING_SYSTEM,  PAYMENT_TYPE,  PROCESS_STATUS,  STATUS,  PROCESS_NAME,  CLRSYSREF,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  request_data_json,  response_data_json from  (  select   TO_CHAR(PL.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as COMPLETIONTIME,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATIONTIME,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.UETR,   T.npsst_id ,   T.VALUE_DATE ,   T.CDTR_IBAN ,   T.INTRBK_STTLM_AMNT ,   T.INTRBK_STTLM_CUR ,   T.PAYMENT_ENDTOEND_ID ,   T.TRAN_REF_ID ,   T.DEPARTMENT_CODE ,   T.PROCESSING_SYSTEM,   T.CLRSYSREF,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME,   PL.DT_CODE,   PL.DTT_CODE,   PL.NPSSTPL_ID,   PL.request_data_json,   PL.response_data_json,   T.created_date   from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.CREATED_DATE,    PLR.DT_CODE,    PLR.DTT_CODE,    PLR.request_data_json,    PLR.response_data_json,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     A.request_data_json,     A.response_data_json,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Time","target_column":"CREATIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Time","target_column":"COMPLETIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.transaction_list.context_menu = []
		this.transaction_list.views = {}
		this.transaction_list.onChangecomponent = new EventEmitter<any>()
		this.transaction_list.show = true
		this.transaction_list.dynamic_param = {}
	
		// Component level properties - "Process Type List" 
		this.process_type_list.uictrl_code = "datatable"
		this.process_type_list.uicgc_desc = "Process Type List"
		this.process_type_list.uicgc_code = "uicgc_23"
		this.process_type_list.params = {"need_search":"N","need_pag_datatable":"N"}
		this.process_type_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_23","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672904704815","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processtype Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_type_count","alias_name":"","mq_id":"MQ_1672903315183","date_format":false},{"column_name":"processtype","alias_name":"","mq_id":"MQ_1672903315670","date_format":false},{"column_name":"process_type","alias_name":"","mq_id":"MQ_1672903316398","date_format":false},{"column_name":"datemi","alias_name":"","mq_id":"MQ_1672903337102","date_format":false}],"joins":[]},"eq_text":"select  count(process_type) as process_type_count,  processtype,  process_type,  datemi from  (  select   t.created_date,   to_char(t.created_date, 'YYYY-MM-DD') as datemi,   t.process_type ,   t.department_code,   case    when process_type = 'OP' then 'Total Outward Payments'    when process_type = 'IP' then 'Total Inward Payments'   end as processtype,   t.tenant_id  from   npss_transactions t) v $WHERE group by  processtype,  process_type,  datemi"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Processtype Dashboard MQ CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date","target_column":"datemi","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"processtype","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"process_type_count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.process_type_list.context_menu = []
		this.process_type_list.views = {}
		this.process_type_list.onChangecomponent = new EventEmitter<any>()
		this.process_type_list.show = true
		this.process_type_list.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__he_from_pg_to_view_details()
		this.page_load__he_for_pl_to_vm()
		this.page_load__cf_for_pageload()
		this.page_load__e_1672829387301()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_pl_channel_group()
		this.search_search__cu_for_pl()
		this.search_search__cp_after_search()
		this.search_search__cu_for_tl()
		this.search_search__e_1672893601442()
		this.search_search__e_1672893629195()
		this.search_search__e_1672893653084()
		this.search_search__e_1672904150619()
	}

	//Handler for INTERNAL event of "ssp for pl channel group"
	ssp_for_pl_channel_group__internal(parent_event_result){
		this.ssp_for_pl_channel_group__e_1672903537866(parent_event_result)
		this.ssp_for_pl_channel_group__e_1672926617362(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "channel group"
	channel_group__selection_changed(){
		this.channel_group__svm_for_channel()
		this.channel_group__e_1672836450843()
		this.channel_group__e_1672836469722()
		this.channel_group__e_1672894134602()
		this.channel_group__e_1672894145660()
		this.channel_group__e_1672894157320()
	}

	//Handler for INTERNAL event of "svm for channel"
	svm_for_channel__internal(parent_event_result){
		this.svm_for_channel__ssp_for_payment_type_list(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for payment type list"
	ssp_for_payment_type_list__internal(parent_event_result){
		this.ssp_for_payment_type_list__sfr_for_payment_type_list_from__queue(parent_event_result)
		this.ssp_for_payment_type_list__brfq_for_payment_type_to_chart(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "payment type group"
	payment_type_group__selection_changed(){
		this.payment_type_group__svm_for_tl()
		this.payment_type_group__e_1672836508016()
		this.payment_type_group__e_1672893306092()
	}

	//Handler for INTERNAL event of "svm for tl"
	svm_for_tl__internal(parent_event_result){
		this.svm_for_tl__ssp_for_ptg_to_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for ptg to queue"
	ssp_for_ptg_to_queue__internal(parent_event_result){
		this.ssp_for_ptg_to_queue__brfq_for_queues()
		this.ssp_for_ptg_to_queue__brfq_for_queue_to_chart(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__spap_for_search()
		this.navigation_ui_search__cu_for_seach()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cu_for_search()
	}

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__selection_changed(){
		this.process_log_list__svm_for_pl()
	}

	//Handler for INTERNAL event of "svm for pl"
	svm_for_pl__internal(parent_event_result){
		this.svm_for_pl__cc_for_tl(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for tl"
	cc_for_tl__internal(parent_event_result){
		this.cc_for_tl__brfq_for_tl(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for tl"
	brfq_for_tl__internal(parent_event_result){
		this.brfq_for_tl__sfr_for_tl(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__action_button_click(){
		this.navigation_ui_view_tran__brfq_for_vertical_tran_detail()
		this.navigation_ui_view_tran__sp_for_view_detail()
		this.navigation_ui_view_tran__brfq_for_vptdl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_back_from_main()
	}

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__action_button_click(){
		this.single_back_ui_back__sp_for_sb_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__action_button_click(){
		this.message_back_ui_back__sp_for_mb_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__action_button_click(){
		this.message_detail_action_back__sp_for_mda_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__action_button_click(){
		this.process_log_ui_back__sp_for_pl_back()
	}

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__selection_changed(){
		this.history_detail__ssr_for_req()
		this.history_detail__ssr_for_res()
		this.history_detail__ee_for_vreq_and_vres()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view process log"
	navigation_ui_view_process_log__action_button_click(){
		this.navigation_ui_view_process_log__brfq_for_hd()
		this.navigation_ui_view_process_log__sp_for_vlh()
	}

	//Handler for INTERNAL event of "brfq for hd"
	brfq_for_hd__internal(parent_event_result){
		this.brfq_for_hd__sfr_for_hd(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message log"
	navigation_ui_view_message_log__action_button_click(){
		this.navigation_ui_view_message_log__sp_for_vmd()
		this.navigation_ui_view_message_log__brfq_for_vm()
	}

	//Handler for INTERNAL event of "brfq for vm"
	brfq_for_vm__internal(){
		this.brfq_for_vm__sfr_for_vm()
	}

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__selection_changed(){
		this.message_detail__ssr_for_md_ui()
		this.message_detail__ee_for_sm()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__action_button_click(){
		this.message_detail_action_view_message__bt_for_md_ui()
		this.message_detail_action_view_message__sp_for_view_message_data()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__action_button_click(){
		this.process_log_ui_view_req_and_res__sp_for_vreq_and_vres()
		this.process_log_ui_view_req_and_res__bt_req()
		this.process_log_ui_view_req_and_res__bt_for_res()
	}

	//Handler for SELECTION_CHANGED event of "queue group"
	queue_group__selection_changed(){
		this.queue_group__svm_for_queue()
	}

	//Handler for INTERNAL event of "svm for queue"
	svm_for_queue__internal(parent_event_result){
		this.svm_for_queue__ssp_for_queue_group(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for queue group"
	ssp_for_queue_group__internal(parent_event_result){
		this.ssp_for_queue_group__brfq_for_message_type_group(parent_event_result)
		this.ssp_for_queue_group__brfq_for__message_type_to_chart(parent_event_result)
		this.ssp_for_queue_group__brfq_process_log_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq process log list"
	brfq_process_log_list__internal(parent_event_result){
		this.brfq_process_log_list__e_1672894433891(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "message type group"
	message_type_group__selection_changed(){
		this.message_type_group__svm_for_message_type_group()
	}

	//Handler for INTERNAL event of "svm for message type group"
	svm_for_message_type_group__internal(parent_event_result){
		this.svm_for_message_type_group__e_1672838251051(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1672838251051"
	e_1672838251051__internal(parent_event_result){
		this.e_1672838251051__e_1672838317277(parent_event_result)
		this.e_1672838251051__e_1672838354172(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1672838317277"
	e_1672838317277__internal(parent_event_result){
		this.e_1672838317277__e_1672894393640(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "status group"
	status_group__selection_changed(){
		this.status_group__svm_for_chart()
	}

	//Handler for INTERNAL event of "svm for chart"
	svm_for_chart__internal(parent_event_result){
		this.svm_for_chart__e_1672830905015(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1672830905015"
	e_1672830905015__internal(){
		this.e_1672830905015__e_1672830918342()
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_for_process_log()
		this.transaction_list__e_1672894086303()
		this.transaction_list__e_1672894097480()
		this.transaction_list__e_1672894112623()
	}

	//Handler for SELECTION_CHANGED event of "process type list"
	process_type_list__selection_changed(){
		this.process_type_list__svm_for_process_type()
		this.process_type_list__e_1672931158278()
		this.process_type_list__e_1672931454946()
		this.process_type_list__e_1672931485188()
	}

	//Handler for INTERNAL event of "svm for process type"
	svm_for_process_type__internal(parent_event_result){
		this.svm_for_process_type__e_1672903593112(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1672903593112"
	e_1672903593112__internal(parent_event_result){
		this.e_1672903593112__e_1672903828395()
		this.e_1672903593112__e_1672931056200(parent_event_result)
	}

	//Handler for DPSINIT event of "page_load"
	page_load__he_from_pg_to_view_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1669202881766"
		let event_params={"caller_name":"page_load__he_from_pg_to_view_details","event_desc":"HE from PG to View Details","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_pl_to_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_message_log"
		let parent_source_id=""
		let event_code="e_1669460758377"
		let event_params={"caller_name":"page_load__he_for_pl_to_vm","event_desc":"HE for PL to VM","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for DPSINIT event of "page_load"
	page_load__cf_for_pageload() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672827135806"
		let event_params={"caller_name":"page_load__cf_for_pageload","event_desc":"CF for Pageload","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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
	page_load__e_1672829387301() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1672829387301"
		let event_params={"caller_name":"page_load__e_1672829387301","event_desc":"E_1672829387301","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__ssp_for_pl_channel_group() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1666857137821"
		let event_params={"caller_name":"search_search__ssp_for_pl_channel_group","event_desc":"SSP for PL Channel Group","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_pl_channel_group__e_1672903537866,ssp_for_pl_channel_group__e_1672926617362,"
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
	search_search__cu_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666858218728"
		let event_params={"caller_name":"search_search__cu_for_pl","event_desc":"CU for PL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__cp_after_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666872358013"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__cp_after_search","event_desc":"CP after search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__cu_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="payment_type_group"
		let parent_source_id=""
		let event_code="e_1666879035223"
		let event_params={"caller_name":"search_search__cu_for_tl","event_desc":"CU for TL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828181899","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Payment Type MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PAYMENT_TYPE_COUNT","alias_name":"","mq_id":"MQ_1672833338397","date_format":false},{"column_name":"PAYMENT_TYPE","alias_name":"","mq_id":"MQ_1672833338547","date_format":false}],"joins":[]},"eq_text":"select   COUNT(PAYMENT_TYPE) as PAYMENT_TYPE_COUNT,   PAYMENT_TYPE from   (  select    T.created_date,    T.channel_id ,    T.process_type ,    T.tenant_id,    case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE  from npss_transactions T ) V $WHERE group by  PAYMENT_TYPE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Type Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Payment Type","target_column":"PAYMENT_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PAYMENT_TYPE_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__e_1672893601442() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="queue_group"
		let parent_source_id=""
		let event_code="e_1672893601442"
		let event_params={"caller_name":"search_search__e_1672893601442","event_desc":"E_1672893601442","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828247713","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A )PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__e_1672893629195() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="message_type_group"
		let parent_source_id=""
		let event_code="e_1672893629195"
		let event_params={"caller_name":"search_search__e_1672893629195","event_desc":"E_1672893629195","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828449252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Name Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME_COUNT","alias_name":"","mq_id":"MQ_1672835105850","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672835108736","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_NAME) as PROCESS_NAME_COUNT,  PROCESS_NAME from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_NAME"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Name Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_NAME_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__e_1672893653084() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1672893653084"
		let event_params={"caller_name":"search_search__e_1672893653084","event_desc":"E_1672893653084","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672830939547","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1672841093950","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1672841094096","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1672841094239","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1672841094392","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1672841095319","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1672841095338","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1672841149917","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1672841152766","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672841152917","date_format":false},{"column_name":"CREATIONTIME","alias_name":"","mq_id":"MQ_1672926646263","date_format":false},{"column_name":"COMPLETIONTIME","alias_name":"","mq_id":"MQ_1672926655615","date_format":false}],"joins":[]},"eq_text":"select CREATIONTIME,  COMPLETIONTIME,  CHANNEL_ID ,  PROCESS_TYPE ,  TENANT_ID,  UETR,  npsst_id ,  VALUE_DATE,  CDTR_IBAN,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  PAYMENT_ENDTOEND_ID,  TRAN_REF_ID,  DEPARTMENT_CODE ,  PROCESSING_SYSTEM,  PAYMENT_TYPE,  PROCESS_STATUS,  STATUS,  PROCESS_NAME,  CLRSYSREF,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  request_data_json,  response_data_json from  (  select   TO_CHAR(PL.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as COMPLETIONTIME,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATIONTIME,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.UETR,   T.npsst_id ,   T.VALUE_DATE ,   T.CDTR_IBAN ,   T.INTRBK_STTLM_AMNT ,   T.INTRBK_STTLM_CUR ,   T.PAYMENT_ENDTOEND_ID ,   T.TRAN_REF_ID ,   T.DEPARTMENT_CODE ,   T.PROCESSING_SYSTEM,   T.CLRSYSREF,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME,   PL.DT_CODE,   PL.DTT_CODE,   PL.NPSSTPL_ID,   PL.request_data_json,   PL.response_data_json,   T.created_date   from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.CREATED_DATE,    PLR.DT_CODE,    PLR.DTT_CODE,    PLR.request_data_json,    PLR.response_data_json,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     A.request_data_json,     A.response_data_json,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Time","target_column":"CREATIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Time","target_column":"COMPLETIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__e_1672904150619() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="channel_group"
		let parent_source_id=""
		let event_code="e_1672904150619"
		let event_params={"caller_name":"search_search__e_1672904150619","event_desc":"E_1672904150619","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828121470","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Channel Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CHANNEL_COUNT","alias_name":"","mq_id":"MQ_1672829934302","date_format":false},{"column_name":"channel_id","alias_name":"","mq_id":"MQ_1672829934741","date_format":false}],"joins":[]},"eq_text":"select  COUNT(channel_id) as CHANNEL_COUNT,  channel_id from  (  select   T.created_date,   T.channel_id ,   T.process_type ,   T.tenant_id,   T.DEPARTMENT_CODE  from   npss_transactions T) V $WHERE group by  channel_id"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Channel Dashboard CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"channel_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"CHANNEL_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for pl channel group"
	ssp_for_pl_channel_group__e_1672903537866(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_pl_channel_group"
		let destn_id="process_type_list"
		let parent_source_id="search_search"
		let event_code="e_1672903537866"
		let event_params={"caller_name":"ssp_for_pl_channel_group__e_1672903537866","event_desc":"E_1672903537866","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_23","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672904704815","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processtype Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_type_count","alias_name":"","mq_id":"MQ_1672903315183","date_format":false},{"column_name":"processtype","alias_name":"","mq_id":"MQ_1672903315670","date_format":false},{"column_name":"process_type","alias_name":"","mq_id":"MQ_1672903316398","date_format":false},{"column_name":"datemi","alias_name":"","mq_id":"MQ_1672903337102","date_format":false}],"joins":[]},"eq_text":"select  count(process_type) as process_type_count,  processtype,  process_type,  datemi from  (  select   t.created_date,   to_char(t.created_date, 'YYYY-MM-DD') as datemi,   t.process_type ,   t.department_code,   case    when process_type = 'OP' then 'Total Outward Payments'    when process_type = 'IP' then 'Total Inward Payments'   end as processtype,   t.tenant_id  from   npss_transactions t) v $WHERE group by  processtype,  process_type,  datemi"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Processtype Dashboard MQ CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date","target_column":"datemi","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"processtype","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"process_type_count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for pl channel group"
	ssp_for_pl_channel_group__e_1672926617362(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_pl_channel_group"
		let destn_id="status_group"
		let parent_source_id="search_search"
		let event_code="e_1672926617362"
		let event_params={"caller_name":"ssp_for_pl_channel_group__e_1672926617362","event_desc":"E_1672926617362","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"PIE","chart_label":"STATUS","chart_series":"","chart_data":"STATUS_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_21","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672838507154","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Status Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS_COUNT","alias_name":"","mq_id":"MQ_1672836121070","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1672836121212","date_format":false}],"joins":[]},"eq_text":"select  COUNT(STATUS) as STATUS_COUNT,  STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Status Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"<>","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "channel group"
	channel_group__svm_for_channel() { 
		let Dest_Is_ctrl=true
		
		let source_id="channel_group"
		let destn_id="channel_group"
		let parent_source_id=""
		let event_code="e_1666857327033"
		let event_params={"caller_name":"channel_group__svm_for_channel","event_desc":"SVM for Channel","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"channel_group","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_channel__ssp_for_payment_type_list,"
		let event_data={"channel_group":{"e_1666857327033":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1666857327033","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"CHANNEL_ID","level":"MI_LEVEL","name":"MI_LEVEL_CHANNEL_ID","setd3name":"CHANNEL_ID"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_PAYMENT_TYPE","setd3name":"PAYMENT_TYPE"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_NAME","setd3name":"PROCESS_NAME"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828121470","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Channel Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CHANNEL_COUNT","alias_name":"","mq_id":"MQ_1672829934302","date_format":false},{"column_name":"channel_id","alias_name":"","mq_id":"MQ_1672829934741","date_format":false}],"joins":[]},"eq_text":"select  COUNT(channel_id) as CHANNEL_COUNT,  channel_id from  (  select   T.created_date,   T.channel_id ,   T.process_type ,   T.tenant_id,   T.DEPARTMENT_CODE  from   npss_transactions T) V $WHERE group by  channel_id"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Channel Dashboard CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"channel_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"CHANNEL_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "channel group"
	channel_group__e_1672836450843() { 
		let Dest_Is_ctrl=true
		
		let source_id="channel_group"
		let destn_id="queue_group"
		let parent_source_id=""
		let event_code="e_1672836450843"
		let event_params={"caller_name":"channel_group__e_1672836450843","event_desc":"E_1672836450843","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"channel_group","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828247713","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A )PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "channel group"
	channel_group__e_1672836469722() { 
		let Dest_Is_ctrl=true
		
		let source_id="channel_group"
		let destn_id="message_type_group"
		let parent_source_id=""
		let event_code="e_1672836469722"
		let event_params={"caller_name":"channel_group__e_1672836469722","event_desc":"E_1672836469722","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"channel_group","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828449252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Name Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME_COUNT","alias_name":"","mq_id":"MQ_1672835105850","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672835108736","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_NAME) as PROCESS_NAME_COUNT,  PROCESS_NAME from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_NAME"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Name Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_NAME_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "channel group"
	channel_group__e_1672894134602() { 
		let Dest_Is_ctrl=true
		
		let source_id="channel_group"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1672894134602"
		let event_params={"caller_name":"channel_group__e_1672894134602","event_desc":"E_1672894134602","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"channel_group","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "channel group"
	channel_group__e_1672894145660() { 
		let Dest_Is_ctrl=true
		
		let source_id="channel_group"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1672894145660"
		let event_params={"caller_name":"channel_group__e_1672894145660","event_desc":"E_1672894145660","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"channel_group","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "channel group"
	channel_group__e_1672894157320() { 
		let Dest_Is_ctrl=true
		
		let source_id="channel_group"
		let destn_id="navigation_ui_view_message_log"
		let parent_source_id=""
		let event_code="e_1672894157320"
		let event_params={"caller_name":"channel_group__e_1672894157320","event_desc":"E_1672894157320","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"channel_group","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "svm for channel"
	svm_for_channel__ssp_for_payment_type_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_channel"
		let destn_id="search"
		let parent_source_id="channel_group"
		let event_code="e_1672827071848"
		let event_params={"caller_name":"svm_for_channel__ssp_for_payment_type_list","event_desc":"SSP for Payment type list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"channel_group","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_payment_type_list__sfr_for_payment_type_list_from__queue,ssp_for_payment_type_list__brfq_for_payment_type_to_chart,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for payment type list"
	ssp_for_payment_type_list__sfr_for_payment_type_list_from__queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_payment_type_list"
		let destn_id="payment_type_group"
		let parent_source_id="svm_for_channel"
		let event_code="e_1672827077732"
		let event_params={"caller_name":"ssp_for_payment_type_list__sfr_for_payment_type_list_from__queue","event_desc":"SFR For payment type List from  Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"channel_group","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828181899","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Payment Type MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PAYMENT_TYPE_COUNT","alias_name":"","mq_id":"MQ_1672833338397","date_format":false},{"column_name":"PAYMENT_TYPE","alias_name":"","mq_id":"MQ_1672833338547","date_format":false}],"joins":[]},"eq_text":"select   COUNT(PAYMENT_TYPE) as PAYMENT_TYPE_COUNT,   PAYMENT_TYPE from   (  select    T.created_date,    T.channel_id ,    T.process_type ,    T.tenant_id,    case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE  from npss_transactions T ) V $WHERE group by  PAYMENT_TYPE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Type Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Payment Type","target_column":"PAYMENT_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PAYMENT_TYPE_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for payment type list"
	ssp_for_payment_type_list__brfq_for_payment_type_to_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_payment_type_list"
		let destn_id="status_group"
		let parent_source_id="svm_for_channel"
		let event_code="e_1672827442157"
		let event_params={"caller_name":"ssp_for_payment_type_list__brfq_for_payment_type_to_chart","event_desc":"BRFQ For Payment type to chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"channel_group","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"PIE","chart_label":"STATUS","chart_series":"","chart_data":"STATUS_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_21","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672838507154","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Status Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS_COUNT","alias_name":"","mq_id":"MQ_1672836121070","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1672836121212","date_format":false}],"joins":[]},"eq_text":"select  COUNT(STATUS) as STATUS_COUNT,  STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Status Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"<>","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "payment type group"
	payment_type_group__svm_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_type_group"
		let destn_id="payment_type_group"
		let parent_source_id=""
		let event_code="e_1666857595507"
		let event_params={"caller_name":"payment_type_group__svm_for_tl","event_desc":"SVM for TL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"payment_type_group","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_tl__ssp_for_ptg_to_queue,"
		let event_data={"payment_type_group":{"e_1666857595507":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1666857595507","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PAYMENT_TYPE","level":"MI_LEVEL","name":"MI_LEVEL_PAYMENT_TYPE","setd3name":"PAYMENT_TYPE"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_NAME","setd3name":"PROCESS_NAME"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828181899","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Payment Type MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PAYMENT_TYPE_COUNT","alias_name":"","mq_id":"MQ_1672833338397","date_format":false},{"column_name":"PAYMENT_TYPE","alias_name":"","mq_id":"MQ_1672833338547","date_format":false}],"joins":[]},"eq_text":"select   COUNT(PAYMENT_TYPE) as PAYMENT_TYPE_COUNT,   PAYMENT_TYPE from   (  select    T.created_date,    T.channel_id ,    T.process_type ,    T.tenant_id,    case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE  from npss_transactions T ) V $WHERE group by  PAYMENT_TYPE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Type Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Payment Type","target_column":"PAYMENT_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PAYMENT_TYPE_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "payment type group"
	payment_type_group__e_1672836508016() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_type_group"
		let destn_id="message_type_group"
		let parent_source_id=""
		let event_code="e_1672836508016"
		let event_params={"caller_name":"payment_type_group__e_1672836508016","event_desc":"E_1672836508016","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"payment_type_group","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828449252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Name Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME_COUNT","alias_name":"","mq_id":"MQ_1672835105850","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672835108736","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_NAME) as PROCESS_NAME_COUNT,  PROCESS_NAME from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_NAME"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Name Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_NAME_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "payment type group"
	payment_type_group__e_1672893306092() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_type_group"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1672893306092"
		let event_params={"caller_name":"payment_type_group__e_1672893306092","event_desc":"E_1672893306092","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"payment_type_group","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672830939547","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1672841093950","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1672841094096","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1672841094239","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1672841094392","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1672841095319","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1672841095338","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1672841149917","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1672841152766","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672841152917","date_format":false},{"column_name":"CREATIONTIME","alias_name":"","mq_id":"MQ_1672926646263","date_format":false},{"column_name":"COMPLETIONTIME","alias_name":"","mq_id":"MQ_1672926655615","date_format":false}],"joins":[]},"eq_text":"select CREATIONTIME,  COMPLETIONTIME,  CHANNEL_ID ,  PROCESS_TYPE ,  TENANT_ID,  UETR,  npsst_id ,  VALUE_DATE,  CDTR_IBAN,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  PAYMENT_ENDTOEND_ID,  TRAN_REF_ID,  DEPARTMENT_CODE ,  PROCESSING_SYSTEM,  PAYMENT_TYPE,  PROCESS_STATUS,  STATUS,  PROCESS_NAME,  CLRSYSREF,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  request_data_json,  response_data_json from  (  select   TO_CHAR(PL.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as COMPLETIONTIME,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATIONTIME,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.UETR,   T.npsst_id ,   T.VALUE_DATE ,   T.CDTR_IBAN ,   T.INTRBK_STTLM_AMNT ,   T.INTRBK_STTLM_CUR ,   T.PAYMENT_ENDTOEND_ID ,   T.TRAN_REF_ID ,   T.DEPARTMENT_CODE ,   T.PROCESSING_SYSTEM,   T.CLRSYSREF,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME,   PL.DT_CODE,   PL.DTT_CODE,   PL.NPSSTPL_ID,   PL.request_data_json,   PL.response_data_json,   T.created_date   from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.CREATED_DATE,    PLR.DT_CODE,    PLR.DTT_CODE,    PLR.request_data_json,    PLR.response_data_json,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     A.request_data_json,     A.response_data_json,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Time","target_column":"CREATIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Time","target_column":"COMPLETIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for tl"
	svm_for_tl__ssp_for_ptg_to_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_tl"
		let destn_id="search"
		let parent_source_id="payment_type_group"
		let event_code="e_1672827192394"
		let event_params={"caller_name":"svm_for_tl__ssp_for_ptg_to_queue","event_desc":"ssp for ptg to queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_type_group","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_ptg_to_queue__brfq_for_queues,ssp_for_ptg_to_queue__brfq_for_queue_to_chart,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for ptg to queue"
	ssp_for_ptg_to_queue__brfq_for_queues() { 
		let Dest_Is_ctrl=true
		
		let source_id="ssp_for_ptg_to_queue"
		let destn_id="queue_group"
		let parent_source_id="svm_for_tl"
		let event_code="e_1672827278385"
		let event_params={"caller_name":"ssp_for_ptg_to_queue__brfq_for_queues","event_desc":"BRFQ for queues","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_type_group","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828247713","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A )PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for ptg to queue"
	ssp_for_ptg_to_queue__brfq_for_queue_to_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_ptg_to_queue"
		let destn_id="status_group"
		let parent_source_id="svm_for_tl"
		let event_code="e_1672827601812"
		let event_params={"caller_name":"ssp_for_ptg_to_queue__brfq_for_queue_to_chart","event_desc":"BRFQ For Queue to chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_type_group","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"DOUGHNUT","chart_label":"STATUS","chart_series":"","chart_data":"STATUS_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_21","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672838507154","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Status Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS_COUNT","alias_name":"","mq_id":"MQ_1672836121070","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1672836121212","date_format":false}],"joins":[]},"eq_text":"select  COUNT(STATUS) as STATUS_COUNT,  STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Status Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"<>","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1666857782776"
		let event_params={"caller_name":"navigation_ui_search__spap_for_search","event_desc":"SPAP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1666856790983","window_title":"Search","window_height":250,"window_width":"800px","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1666857782776"}}
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
	navigation_ui_search__cu_for_seach() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1667298696365"
		let event_params={"caller_name":"navigation_ui_search__cu_for_seach","event_desc":"CU for seach","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cu_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1666858398186"
		let event_params={"caller_name":"search_clear__cu_for_search","event_desc":"CU for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__svm_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666862672351"
		let event_params={"caller_name":"process_log_list__svm_for_pl","event_desc":"SVM for PL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_pl__cc_for_tl,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for pl"
	svm_for_pl__cc_for_tl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_pl"
		let destn_id=""
		let parent_source_id="process_log_list"
		let event_code="e_1668851034462"
		let event_params={"caller_name":"svm_for_pl__cc_for_tl","event_desc":"CC for TL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_tl__brfq_for_tl,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for tl"
	cc_for_tl__brfq_for_tl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_tl"
		let destn_id="payment_type_group"
		let parent_source_id="svm_for_pl"
		let event_code="e_1668851123025"
		let event_params={"caller_name":"cc_for_tl__brfq_for_tl","event_desc":"BRFQ for TL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_tl__sfr_for_tl,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828181899","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Payment Type MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PAYMENT_TYPE_COUNT","alias_name":"","mq_id":"MQ_1672833338397","date_format":false},{"column_name":"PAYMENT_TYPE","alias_name":"","mq_id":"MQ_1672833338547","date_format":false}],"joins":[]},"eq_text":"select   COUNT(PAYMENT_TYPE) as PAYMENT_TYPE_COUNT,   PAYMENT_TYPE from   (  select    T.created_date,    T.channel_id ,    T.process_type ,    T.tenant_id,    case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE  from npss_transactions T ) V $WHERE group by  PAYMENT_TYPE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Type Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Payment Type","target_column":"PAYMENT_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PAYMENT_TYPE_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for tl"
	brfq_for_tl__sfr_for_tl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_tl"
		let destn_id="payment_type_group"
		let parent_source_id="cc_for_tl"
		let event_code="e_1668851206501"
		let event_params={"caller_name":"brfq_for_tl__sfr_for_tl","event_desc":"SFR for TL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828181899","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Payment Type MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PAYMENT_TYPE_COUNT","alias_name":"","mq_id":"MQ_1672833338397","date_format":false},{"column_name":"PAYMENT_TYPE","alias_name":"","mq_id":"MQ_1672833338547","date_format":false}],"joins":[]},"eq_text":"select   COUNT(PAYMENT_TYPE) as PAYMENT_TYPE_COUNT,   PAYMENT_TYPE from   (  select    T.created_date,    T.channel_id ,    T.process_type ,    T.tenant_id,    case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE  from npss_transactions T ) V $WHERE group by  PAYMENT_TYPE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Type Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Payment Type","target_column":"PAYMENT_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PAYMENT_TYPE_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__brfq_for_vertical_tran_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="view_dr_cr_details"
		let parent_source_id=""
		let event_code="e_1669202037388"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_for_vertical_tran_detail","event_desc":"BRFQ for Vertical Tran Detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828292746","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1669198452328","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670656485225","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Number","target_column":"CDTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Number","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__sp_for_view_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669202996861"
		let event_params={"caller_name":"navigation_ui_view_tran__sp_for_view_detail","event_desc":"SP for View Detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"profile_code":"BTL_1304_1669202528774"}}
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
	navigation_ui_view_tran__brfq_for_vptdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="view_payment_details"
		let parent_source_id=""
		let event_code="e_1669206394952"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_for_vptdl","event_desc":"BRFQ for VPTDL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828302961","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1666010726425","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014509621","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014509797","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1666014509965","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1666014510149","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1666014510333","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1666014510501","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666014510685","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1666014510861","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1666014600809","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1666014600993","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1666014601345","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1666014601513","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1666014601689","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014601849","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014602009","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014726127","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1666014726294","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1666014726470","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1666014726822","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1666014758342","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1666014758510","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1666014789772","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666015556177","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666015557969","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1666056821141","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666178749368","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1666345094974","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1667296994858","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544456673","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1668166921283","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1668691797994","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1668772110535","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1669198452328","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1669209185067","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1669209185410","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1669209185641","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1669209840985","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1669209847802","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1669209934807","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670656485225","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__sp_for_back_from_main() { 
		let Dest_Is_ctrl=true
		
		let source_id="back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669203064139"
		let event_params={"caller_name":"back_ui_back__sp_for_back_from_main","event_desc":"SP for back from Main","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1666856599156"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__sp_for_sb_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="single_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669459802364"
		let event_params={"caller_name":"single_back_ui_back__sp_for_sb_back","event_desc":"SP for SB Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"single_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1669459405629"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__sp_for_mb_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669459823284"
		let event_params={"caller_name":"message_back_ui_back__sp_for_mb_back","event_desc":"SP for MB Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1669459551241"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__sp_for_mda_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669459834127"
		let event_params={"caller_name":"message_detail_action_back__sp_for_mda_back","event_desc":"SP for MDA Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_back","raiseparam":{"profile_code":"BTL_1304_1666856599156"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__sp_for_pl_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669459845231"
		let event_params={"caller_name":"process_log_ui_back__sp_for_pl_back","event_desc":"SP for PL Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_back","raiseparam":{"profile_code":"BTL_1304_1666856599156"}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ssr_for_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1669460041103"
		let event_params={"caller_name":"history_detail__ssr_for_req","event_desc":"SSR for Req","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ssr_for_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1669460098261"
		let event_params={"caller_name":"history_detail__ssr_for_res","event_desc":"SSR for Res","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ee_for_vreq_and_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1670245533168"
		let event_params={"caller_name":"history_detail__ee_for_vreq_and_vres","event_desc":"EE for VREQ and VRES","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view process log"
	navigation_ui_view_process_log__brfq_for_hd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_process_log"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1669460276825"
		let event_params={"caller_name":"navigation_ui_view_process_log__brfq_for_hd","event_desc":"BRFQ for HD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_hd__sfr_for_hd,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672895298011","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DEPARTMENT_CODE,        DT_CODE,        DTT_CODE,AMOUNT_CREDITED,AMT_CR_LOC_CUR,CHARGE_AMOUNT,BUY_CURRENCY,SELL_CURRENCY,DEALT_AMOUNT,EXCHANGE_RATE,CONTRA_AMOUNT   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                NT.DEPARTMENT_CODE,                A.ADDITIONAL_INFO,A.AMOUNT_CREDITED,A.AMT_CR_LOC_CUR,A.CHARGE_AMOUNT,A.BUY_CURRENCY,A.SELL_CURRENCY,A.DEALT_AMOUNT,A.EXCHANGE_RATE,A.CONTRA_AMOUNT,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                                   A.REVERSAL_CODE                                                               AND CCD.CD_CATEGORY =                                                                   'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                                A.T24_RETURN_CODE                                                            AND T24RC.PROCESSING_SYSTEM =                                                                'T24' AND T24RC.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                                  A.CBUAE_RETURN_CODE                                                              AND CBUAERC.PROCESSING_SYSTEM =                                                                  'CBUAE' AND CBUAERC.STATUS = 'APPROVED'          INNER JOIN NPSS_TRANSACTIONS NT ON NT.UETR = A.UETR          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view process log"
	navigation_ui_view_process_log__sp_for_vlh() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_process_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460333496"
		let event_params={"caller_name":"navigation_ui_view_process_log__sp_for_vlh","event_desc":"SP for VLH","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{"profile_code":"BTL_1304_1669459405629"}}
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

	//Handler for INTERNAL event of "brfq for hd"
	brfq_for_hd__sfr_for_hd(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_hd"
		let destn_id="history_detail"
		let parent_source_id="navigation_ui_view_process_log"
		let event_code="e_1669460298876"
		let event_params={"caller_name":"brfq_for_hd__sfr_for_hd","event_desc":"SFR for HD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672895298011","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"SELECT REVERSAL_DESCRIPTION,        T24_RETURN_DESCRIPTION,        CBUAE_RETURN_DESCRIPTION,        NPSSTPL_ID,        MSG_ID,        UETR,        NPSSTRRD_REFNO,        PROCESS_NAME,        PROCESSING_SYSTEM,        RESPONSE_CODE,        PROCESS_REF_NO,        RESPONSE_DATA,        CREATED_DATE,        CREATEDDATEMILISEC,        PROCESS_STATUS,        STATUS,        REQUEST_DATA_JSON,        RESPONSE_DATA_JSON,        T24_RETURN_CODE,        CBUAE_RETURN_CODE,        REVERSAL_CODE,        REVERSAL_DESC,        T24_RETURN_DESC,        CBUAE_RETURN_DESC,        TENANT_ID,        DEPARTMENT_CODE,        DT_CODE,        DTT_CODE,AMOUNT_CREDITED,AMT_CR_LOC_CUR,CHARGE_AMOUNT,BUY_CURRENCY,SELL_CURRENCY,DEALT_AMOUNT,EXCHANGE_RATE,CONTRA_AMOUNT   FROM (SELECT A.NPSSTPL_ID,                A.MSG_ID,                A.UETR,                A.NPSSTRRD_REFNO,                A.PROCESS_NAME,                A.PROCESSING_SYSTEM,                A.RESPONSE_CODE,                A.PROCESS_REF_NO,                A.RESPONSE_DATA,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS CREATEDDATEMILISEC,                A.CREATED_DATE,                A.PROCESS_STATUS,                A.STATUS,                A.DT_CODE,                A.DTT_CODE,                A.TENANT_ID,                A.REQUEST_DATA_JSON,                A.RESPONSE_DATA_JSON,                A.T24_RETURN_CODE,                NT.DEPARTMENT_CODE,                A.ADDITIONAL_INFO,A.AMOUNT_CREDITED,A.AMT_CR_LOC_CUR,A.CHARGE_AMOUNT,A.BUY_CURRENCY,A.SELL_CURRENCY,A.DEALT_AMOUNT,A.EXCHANGE_RATE,A.CONTRA_AMOUNT,                T24RC.RETURN_DESCRIPTION AS T24_RETURN_DESC,                CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) AS T24_RETURN_DESCRIPTION,                A.CBUAE_RETURN_CODE,                CBUAERC.RETURN_DESCRIPTION AS CBUAE_RETURN_DESC,                CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) AS CBUAE_RETURN_DESCRIPTION,                A.REVERSAL_CODE,                CCD.CD_DESCRIPTION AS REVERSAL_DESC,                CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) AS REVERSAL_DESCRIPTION           FROM NPSS_TRN_PROCESS_LOG A           LEFT JOIN <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD ON CCD.CD_CODE =                                                                   A.REVERSAL_CODE                                                               AND CCD.CD_CATEGORY =                                                                   'REVERSAL_REASON_IDENTIFIER_CODE' AND CCD.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES T24RC ON T24RC.RETURN_CODE =                                                                A.T24_RETURN_CODE                                                            AND T24RC.PROCESSING_SYSTEM =                                                                'T24' AND T24RC.STATUS = 'APPROVED'           LEFT JOIN <tran_db>.CORE_NC_RETURN_CODES CBUAERC ON CBUAERC.RETURN_CODE =                                                                  A.CBUAE_RETURN_CODE                                                              AND CBUAERC.PROCESSING_SYSTEM =                                                                  'CBUAE' AND CBUAERC.STATUS = 'APPROVED'          INNER JOIN NPSS_TRANSACTIONS NT ON NT.UETR = A.UETR          ORDER BY A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"T24 Return Description","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message log"
	navigation_ui_view_message_log__sp_for_vmd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460683952"
		let event_params={"caller_name":"navigation_ui_view_message_log__sp_for_vmd","event_desc":"SP for VMD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{"profile_code":"BTL_1304_1669459551241"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message log"
	navigation_ui_view_message_log__brfq_for_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_log"
		let destn_id="message_detail"
		let parent_source_id=""
		let event_code="e_1669460815182"
		let event_params={"caller_name":"navigation_ui_view_message_log__brfq_for_vm","event_desc":"BRFQ for VM","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_vm__sfr_for_vm,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828413149","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSTRRD_ID,        MSG_ID,        UETR,        PARENT_NPSSTRRD_REFNO,        NPSSTRRD_REFNO,        PROCESS_CODE,        PROCESS_DETAIL,        EXHF_ID,        PROCESS_NAME,        MESSAGE_DESC,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        STATUS,        PROCESS_STATUS,        MESSAGE_DATA,        CREATEDDATEMILISEC,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSTRRD.NPSSTRRD_ID,                NPSSTRRD.MSG_ID,                NPSSTRRD.UETR,                NPSSTRRD.PARENT_NPSSTRRD_REFNO,                NPSSTRRD.NPSSTRRD_REFNO,                NPSSTRRD.MESSAGE_DATA,                NPSSTRRD.PROCESS_CODE,                NPSSTRRD.PROCESS_DETAIL,                NPSSTRRD.EXHF_ID,                NPSSTRRD.PROCESS_NAME,                NPSSTRRD.MESSAGE_DESC,                NPSSTRRD.CHANNEL_ID,                NPSSTRRD.CHANNEL_REFNO,                NPSSTRRD.CHANNEL_USERID,                NPSSTRRD.CHANNEL_PRODUCT,                NPSSTRRD.CHANNEL_SUB_PRODUCT,                NPSSTRRD.CHANNEL_TRAN_CODE,                NPSSTRRD.CREATED_BY,                NPSSTRRD.CREATED_BY_NAME,                NPSSTRRD.CREATED_DATE,                NPSSTRRD.DT_CODE,                NPSSTRRD.DT_DESCRIPTION,                NPSSTRRD.DTT_CODE,                NPSSTRRD.DTT_DESCRIPTION,                NPSSTRRD.MODIFIED_BY,                NPSSTRRD.MODIFIED_BY_NAME,                NPSSTRRD.MODIFIED_DATE,                NPSSTRRD.STATUS,                NPSSTRRD.PROCESS_STATUS,                NPSSTRRD.SYSTEM_ID,                NPSSTRRD.SYSTEM_NAME,                NPSSTRRD.TENANT_ID,                NPSSTRRD.APP_ID,                NPSSTRRD.VERSION_NO,                TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC           FROM NPSS_TRN_REQ_RESP_DTLS NPSSTRRD) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for vm"
	brfq_for_vm__sfr_for_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="brfq_for_vm"
		let destn_id="message_detail"
		let parent_source_id="navigation_ui_view_message_log"
		let event_code="e_1669460832873"
		let event_params={"caller_name":"brfq_for_vm__sfr_for_vm","event_desc":"SFR for VM","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{}}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828413149","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSTRRD_ID,        MSG_ID,        UETR,        PARENT_NPSSTRRD_REFNO,        NPSSTRRD_REFNO,        PROCESS_CODE,        PROCESS_DETAIL,        EXHF_ID,        PROCESS_NAME,        MESSAGE_DESC,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_USERID,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        STATUS,        PROCESS_STATUS,        MESSAGE_DATA,        CREATEDDATEMILISEC,        DT_CODE,        DTT_CODE   FROM (SELECT NPSSTRRD.NPSSTRRD_ID,                NPSSTRRD.MSG_ID,                NPSSTRRD.UETR,                NPSSTRRD.PARENT_NPSSTRRD_REFNO,                NPSSTRRD.NPSSTRRD_REFNO,                NPSSTRRD.MESSAGE_DATA,                NPSSTRRD.PROCESS_CODE,                NPSSTRRD.PROCESS_DETAIL,                NPSSTRRD.EXHF_ID,                NPSSTRRD.PROCESS_NAME,                NPSSTRRD.MESSAGE_DESC,                NPSSTRRD.CHANNEL_ID,                NPSSTRRD.CHANNEL_REFNO,                NPSSTRRD.CHANNEL_USERID,                NPSSTRRD.CHANNEL_PRODUCT,                NPSSTRRD.CHANNEL_SUB_PRODUCT,                NPSSTRRD.CHANNEL_TRAN_CODE,                NPSSTRRD.CREATED_BY,                NPSSTRRD.CREATED_BY_NAME,                NPSSTRRD.CREATED_DATE,                NPSSTRRD.DT_CODE,                NPSSTRRD.DT_DESCRIPTION,                NPSSTRRD.DTT_CODE,                NPSSTRRD.DTT_DESCRIPTION,                NPSSTRRD.MODIFIED_BY,                NPSSTRRD.MODIFIED_BY_NAME,                NPSSTRRD.MODIFIED_DATE,                NPSSTRRD.STATUS,                NPSSTRRD.PROCESS_STATUS,                NPSSTRRD.SYSTEM_ID,                NPSSTRRD.SYSTEM_NAME,                NPSSTRRD.TENANT_ID,                NPSSTRRD.APP_ID,                NPSSTRRD.VERSION_NO,                TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC           FROM NPSS_TRN_REQ_RESP_DTLS NPSSTRRD) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__ssr_for_md_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1669460869757"
		let event_params={"caller_name":"message_detail__ssr_for_md_ui","event_desc":"SSR for MD ui","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"message_detail","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__ee_for_sm() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail_action_view_message"
		let parent_source_id=""
		let event_code="e_1669460900211"
		let event_params={"caller_name":"message_detail__ee_for_sm","event_desc":"EE for SM","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"message_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__bt_for_md_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1669460923322"
		let event_params={"caller_name":"message_detail_action_view_message__bt_for_md_ui","event_desc":"BT for MD UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__sp_for_view_message_data() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460968210"
		let event_params={"caller_name":"message_detail_action_view_message__sp_for_view_message_data","event_desc":"SP for view message DATA","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"profile_code":"BTL_1304_1669459620728"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__sp_for_vreq_and_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670245429553"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__sp_for_vreq_and_vres","event_desc":"SP for VREQ and VRES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1670245368385"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__bt_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1670245582446"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_req","event_desc":"BT REQ","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__bt_for_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1670245617283"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_for_res","event_desc":"BT for RES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for SELECTION_CHANGED event of "queue group"
	queue_group__svm_for_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_group"
		let destn_id="queue_group"
		let parent_source_id=""
		let event_code="e_1672827296617"
		let event_params={"caller_name":"queue_group__svm_for_queue","event_desc":"SVM for Queue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue_group","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_queue__ssp_for_queue_group,"
		let event_data={"queue_group":{"e_1672827296617":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_19","event_code":"E_1672827296617","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_NAME","setd3name":"PROCESS_NAME"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828247713","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A )PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for queue"
	svm_for_queue__ssp_for_queue_group(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_queue"
		let destn_id="search"
		let parent_source_id="queue_group"
		let event_code="e_1672827320208"
		let event_params={"caller_name":"svm_for_queue__ssp_for_queue_group","event_desc":"ssp for Queue Group","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue_group","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_queue_group__brfq_for_message_type_group,ssp_for_queue_group__brfq_for__message_type_to_chart,ssp_for_queue_group__brfq_process_log_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for queue group"
	ssp_for_queue_group__brfq_for_message_type_group(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_queue_group"
		let destn_id="message_type_group"
		let parent_source_id="svm_for_queue"
		let event_code="e_1672827368416"
		let event_params={"caller_name":"ssp_for_queue_group__brfq_for_message_type_group","event_desc":"BRFQ for Message type group","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue_group","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828449252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Name Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME_COUNT","alias_name":"","mq_id":"MQ_1672835105850","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672835108736","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_NAME) as PROCESS_NAME_COUNT,  PROCESS_NAME from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_NAME"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Name Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_NAME_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for queue group"
	ssp_for_queue_group__brfq_for__message_type_to_chart(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_queue_group"
		let destn_id="status_group"
		let parent_source_id="svm_for_queue"
		let event_code="e_1672827541423"
		let event_params={"caller_name":"ssp_for_queue_group__brfq_for__message_type_to_chart","event_desc":"BRFQ For  Message type to chart","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue_group","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"PIE","chart_label":"STATUS","chart_series":"","chart_data":"STATUS_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_21","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672838507154","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Status Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS_COUNT","alias_name":"","mq_id":"MQ_1672836121070","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1672836121212","date_format":false}],"joins":[]},"eq_text":"select  COUNT(STATUS) as STATUS_COUNT,  STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Status Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"<>","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for queue group"
	ssp_for_queue_group__brfq_process_log_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_queue_group"
		let destn_id="transaction_list"
		let parent_source_id="svm_for_queue"
		let event_code="e_1672830826884"
		let event_params={"caller_name":"ssp_for_queue_group__brfq_process_log_list","event_desc":"BRFQ Process Log List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue_group","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_process_log_list__e_1672894433891,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672830939547","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1672841093950","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1672841094096","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1672841094239","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1672841094392","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1672841095319","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1672841095338","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1672841149917","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1672841152766","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672841152917","date_format":false},{"column_name":"CREATIONTIME","alias_name":"","mq_id":"MQ_1672926646263","date_format":false},{"column_name":"COMPLETIONTIME","alias_name":"","mq_id":"MQ_1672926655615","date_format":false}],"joins":[]},"eq_text":"select CREATIONTIME,  COMPLETIONTIME,  CHANNEL_ID ,  PROCESS_TYPE ,  TENANT_ID,  UETR,  npsst_id ,  VALUE_DATE,  CDTR_IBAN,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  PAYMENT_ENDTOEND_ID,  TRAN_REF_ID,  DEPARTMENT_CODE ,  PROCESSING_SYSTEM,  PAYMENT_TYPE,  PROCESS_STATUS,  STATUS,  PROCESS_NAME,  CLRSYSREF,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  request_data_json,  response_data_json from  (  select   TO_CHAR(PL.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as COMPLETIONTIME,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATIONTIME,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.UETR,   T.npsst_id ,   T.VALUE_DATE ,   T.CDTR_IBAN ,   T.INTRBK_STTLM_AMNT ,   T.INTRBK_STTLM_CUR ,   T.PAYMENT_ENDTOEND_ID ,   T.TRAN_REF_ID ,   T.DEPARTMENT_CODE ,   T.PROCESSING_SYSTEM,   T.CLRSYSREF,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME,   PL.DT_CODE,   PL.DTT_CODE,   PL.NPSSTPL_ID,   PL.request_data_json,   PL.response_data_json,   T.created_date   from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.CREATED_DATE,    PLR.DT_CODE,    PLR.DTT_CODE,    PLR.request_data_json,    PLR.response_data_json,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     A.request_data_json,     A.response_data_json,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Time","target_column":"CREATIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Time","target_column":"COMPLETIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq process log list"
	brfq_process_log_list__e_1672894433891(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_process_log_list"
		let destn_id="transaction_list"
		let parent_source_id="ssp_for_queue_group"
		let event_code="e_1672894433891"
		let event_params={"caller_name":"brfq_process_log_list__e_1672894433891","event_desc":"E_1672894433891","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue_group","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672830939547","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1672841093950","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1672841094096","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1672841094239","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1672841094392","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1672841095319","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1672841095338","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1672841149917","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1672841152766","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672841152917","date_format":false},{"column_name":"CREATIONTIME","alias_name":"","mq_id":"MQ_1672926646263","date_format":false},{"column_name":"COMPLETIONTIME","alias_name":"","mq_id":"MQ_1672926655615","date_format":false}],"joins":[]},"eq_text":"select CREATIONTIME,  COMPLETIONTIME,  CHANNEL_ID ,  PROCESS_TYPE ,  TENANT_ID,  UETR,  npsst_id ,  VALUE_DATE,  CDTR_IBAN,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  PAYMENT_ENDTOEND_ID,  TRAN_REF_ID,  DEPARTMENT_CODE ,  PROCESSING_SYSTEM,  PAYMENT_TYPE,  PROCESS_STATUS,  STATUS,  PROCESS_NAME,  CLRSYSREF,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  request_data_json,  response_data_json from  (  select   TO_CHAR(PL.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as COMPLETIONTIME,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATIONTIME,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.UETR,   T.npsst_id ,   T.VALUE_DATE ,   T.CDTR_IBAN ,   T.INTRBK_STTLM_AMNT ,   T.INTRBK_STTLM_CUR ,   T.PAYMENT_ENDTOEND_ID ,   T.TRAN_REF_ID ,   T.DEPARTMENT_CODE ,   T.PROCESSING_SYSTEM,   T.CLRSYSREF,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME,   PL.DT_CODE,   PL.DTT_CODE,   PL.NPSSTPL_ID,   PL.request_data_json,   PL.response_data_json,   T.created_date   from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.CREATED_DATE,    PLR.DT_CODE,    PLR.DTT_CODE,    PLR.request_data_json,    PLR.response_data_json,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     A.request_data_json,     A.response_data_json,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Time","target_column":"CREATIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Time","target_column":"COMPLETIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "message type group"
	message_type_group__svm_for_message_type_group() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_type_group"
		let destn_id="message_type_group"
		let parent_source_id=""
		let event_code="e_1672827391959"
		let event_params={"caller_name":"message_type_group__svm_for_message_type_group","event_desc":"SVM for Message Type Group","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"message_type_group","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_message_type_group__e_1672838251051,"
		let event_data={"message_type_group":{"e_1672827391959":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_20","event_code":"E_1672827391959","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PROCESS_NAME","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_NAME","setd3name":"PROCESS_NAME"},{"type":"HARDCODED","column_name":"","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828449252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Name Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME_COUNT","alias_name":"","mq_id":"MQ_1672835105850","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672835108736","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_NAME) as PROCESS_NAME_COUNT,  PROCESS_NAME from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_NAME"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Name Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_NAME_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for message type group"
	svm_for_message_type_group__e_1672838251051(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_message_type_group"
		let destn_id="search"
		let parent_source_id="message_type_group"
		let event_code="e_1672838251051"
		let event_params={"caller_name":"svm_for_message_type_group__e_1672838251051","event_desc":"E_1672838251051","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"message_type_group","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="e_1672838251051__e_1672838317277,e_1672838251051__e_1672838354172,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1672838251051"
	e_1672838251051__e_1672838317277(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1672838251051"
		let destn_id="transaction_list"
		let parent_source_id="svm_for_message_type_group"
		let event_code="e_1672838317277"
		let event_params={"caller_name":"e_1672838251051__e_1672838317277","event_desc":"E_1672838317277","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"message_type_group","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="e_1672838317277__e_1672894393640,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672830939547","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1672841093950","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1672841094096","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1672841094239","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1672841094392","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1672841095319","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1672841095338","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1672841149917","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1672841152766","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672841152917","date_format":false},{"column_name":"CREATIONTIME","alias_name":"","mq_id":"MQ_1672926646263","date_format":false},{"column_name":"COMPLETIONTIME","alias_name":"","mq_id":"MQ_1672926655615","date_format":false}],"joins":[]},"eq_text":"select CREATIONTIME,  COMPLETIONTIME,  CHANNEL_ID ,  PROCESS_TYPE ,  TENANT_ID,  UETR,  npsst_id ,  VALUE_DATE,  CDTR_IBAN,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  PAYMENT_ENDTOEND_ID,  TRAN_REF_ID,  DEPARTMENT_CODE ,  PROCESSING_SYSTEM,  PAYMENT_TYPE,  PROCESS_STATUS,  STATUS,  PROCESS_NAME,  CLRSYSREF,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  request_data_json,  response_data_json from  (  select   TO_CHAR(PL.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as COMPLETIONTIME,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATIONTIME,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.UETR,   T.npsst_id ,   T.VALUE_DATE ,   T.CDTR_IBAN ,   T.INTRBK_STTLM_AMNT ,   T.INTRBK_STTLM_CUR ,   T.PAYMENT_ENDTOEND_ID ,   T.TRAN_REF_ID ,   T.DEPARTMENT_CODE ,   T.PROCESSING_SYSTEM,   T.CLRSYSREF,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME,   PL.DT_CODE,   PL.DTT_CODE,   PL.NPSSTPL_ID,   PL.request_data_json,   PL.response_data_json,   T.created_date   from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.CREATED_DATE,    PLR.DT_CODE,    PLR.DTT_CODE,    PLR.request_data_json,    PLR.response_data_json,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     A.request_data_json,     A.response_data_json,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Time","target_column":"CREATIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Time","target_column":"COMPLETIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1672838251051"
	e_1672838251051__e_1672838354172(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1672838251051"
		let destn_id="status_group"
		let parent_source_id="svm_for_message_type_group"
		let event_code="e_1672838354172"
		let event_params={"caller_name":"e_1672838251051__e_1672838354172","event_desc":"E_1672838354172","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"message_type_group","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"BAR","chart_label":"STATUS","chart_series":"","chart_data":"STATUS_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_21","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672838507154","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Status Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS_COUNT","alias_name":"","mq_id":"MQ_1672836121070","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1672836121212","date_format":false}],"joins":[]},"eq_text":"select  COUNT(STATUS) as STATUS_COUNT,  STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Status Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"<>","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1672838317277"
	e_1672838317277__e_1672894393640(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1672838317277"
		let destn_id="transaction_list"
		let parent_source_id="e_1672838251051"
		let event_code="e_1672894393640"
		let event_params={"caller_name":"e_1672838317277__e_1672894393640","event_desc":"E_1672894393640","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"message_type_group","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672830939547","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1672841093950","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1672841094096","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1672841094239","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1672841094392","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1672841095319","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1672841095338","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1672841149917","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1672841152766","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672841152917","date_format":false},{"column_name":"CREATIONTIME","alias_name":"","mq_id":"MQ_1672926646263","date_format":false},{"column_name":"COMPLETIONTIME","alias_name":"","mq_id":"MQ_1672926655615","date_format":false}],"joins":[]},"eq_text":"select CREATIONTIME,  COMPLETIONTIME,  CHANNEL_ID ,  PROCESS_TYPE ,  TENANT_ID,  UETR,  npsst_id ,  VALUE_DATE,  CDTR_IBAN,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  PAYMENT_ENDTOEND_ID,  TRAN_REF_ID,  DEPARTMENT_CODE ,  PROCESSING_SYSTEM,  PAYMENT_TYPE,  PROCESS_STATUS,  STATUS,  PROCESS_NAME,  CLRSYSREF,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  request_data_json,  response_data_json from  (  select   TO_CHAR(PL.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as COMPLETIONTIME,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATIONTIME,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.UETR,   T.npsst_id ,   T.VALUE_DATE ,   T.CDTR_IBAN ,   T.INTRBK_STTLM_AMNT ,   T.INTRBK_STTLM_CUR ,   T.PAYMENT_ENDTOEND_ID ,   T.TRAN_REF_ID ,   T.DEPARTMENT_CODE ,   T.PROCESSING_SYSTEM,   T.CLRSYSREF,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME,   PL.DT_CODE,   PL.DTT_CODE,   PL.NPSSTPL_ID,   PL.request_data_json,   PL.response_data_json,   T.created_date   from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.CREATED_DATE,    PLR.DT_CODE,    PLR.DTT_CODE,    PLR.request_data_json,    PLR.response_data_json,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     A.request_data_json,     A.response_data_json,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Time","target_column":"CREATIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Time","target_column":"COMPLETIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "status group"
	status_group__svm_for_chart() { 
		let Dest_Is_ctrl=true
		
		let source_id="status_group"
		let destn_id="status_group"
		let parent_source_id=""
		let event_code="e_1672827642219"
		let event_params={"caller_name":"status_group__svm_for_chart","event_desc":"SVM for chart","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"status_group","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_chart__e_1672830905015,"
		let event_data={"status_group":{"e_1672827642219":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_21","event_code":"E_1672827642219","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_21","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672838507154","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Status Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS_COUNT","alias_name":"","mq_id":"MQ_1672836121070","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1672836121212","date_format":false}],"joins":[]},"eq_text":"select  COUNT(STATUS) as STATUS_COUNT,  STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Status Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"<>","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for chart"
	svm_for_chart__e_1672830905015(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_chart"
		let destn_id="search"
		let parent_source_id="status_group"
		let event_code="e_1672830905015"
		let event_params={"caller_name":"svm_for_chart__e_1672830905015","event_desc":"E_1672830905015","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"status_group","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="e_1672830905015__e_1672830918342,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1672830905015"
	e_1672830905015__e_1672830918342() { 
		let Dest_Is_ctrl=true
		
		let source_id="e_1672830905015"
		let destn_id="transaction_list"
		let parent_source_id="svm_for_chart"
		let event_code="e_1672830918342"
		let event_params={"caller_name":"e_1672830905015__e_1672830918342","event_desc":"E_1672830918342","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"status_group","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672830939547","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1672841093950","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1672841094096","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1672841094239","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1672841094392","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1672841095319","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1672841095338","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1672841149917","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1672841152766","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672841152917","date_format":false},{"column_name":"CREATIONTIME","alias_name":"","mq_id":"MQ_1672926646263","date_format":false},{"column_name":"COMPLETIONTIME","alias_name":"","mq_id":"MQ_1672926655615","date_format":false}],"joins":[]},"eq_text":"select CREATIONTIME,  COMPLETIONTIME,  CHANNEL_ID ,  PROCESS_TYPE ,  TENANT_ID,  UETR,  npsst_id ,  VALUE_DATE,  CDTR_IBAN,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  PAYMENT_ENDTOEND_ID,  TRAN_REF_ID,  DEPARTMENT_CODE ,  PROCESSING_SYSTEM,  PAYMENT_TYPE,  PROCESS_STATUS,  STATUS,  PROCESS_NAME,  CLRSYSREF,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  request_data_json,  response_data_json from  (  select   TO_CHAR(PL.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as COMPLETIONTIME,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATIONTIME,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.UETR,   T.npsst_id ,   T.VALUE_DATE ,   T.CDTR_IBAN ,   T.INTRBK_STTLM_AMNT ,   T.INTRBK_STTLM_CUR ,   T.PAYMENT_ENDTOEND_ID ,   T.TRAN_REF_ID ,   T.DEPARTMENT_CODE ,   T.PROCESSING_SYSTEM,   T.CLRSYSREF,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME,   PL.DT_CODE,   PL.DTT_CODE,   PL.NPSSTPL_ID,   PL.request_data_json,   PL.response_data_json,   T.created_date   from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.CREATED_DATE,    PLR.DT_CODE,    PLR.DTT_CODE,    PLR.request_data_json,    PLR.response_data_json,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     A.request_data_json,     A.response_data_json,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Time","target_column":"CREATIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Time","target_column":"COMPLETIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__svm_for_process_log() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1672840939155"
		let event_params={"caller_name":"transaction_list__svm_for_process_log","event_desc":"SVM for Process Log","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"transaction_list":{"e_1672840939155":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_22","event_code":"E_1672840939155","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"},{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672830939547","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Log Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1672841093950","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1672841094096","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1672841094239","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1672841094392","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1672841095319","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1672841095338","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1672841149917","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1672841152766","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672841152917","date_format":false},{"column_name":"CREATIONTIME","alias_name":"","mq_id":"MQ_1672926646263","date_format":false},{"column_name":"COMPLETIONTIME","alias_name":"","mq_id":"MQ_1672926655615","date_format":false}],"joins":[]},"eq_text":"select CREATIONTIME,  COMPLETIONTIME,  CHANNEL_ID ,  PROCESS_TYPE ,  TENANT_ID,  UETR,  npsst_id ,  VALUE_DATE,  CDTR_IBAN,  INTRBK_STTLM_AMNT,  INTRBK_STTLM_CUR,  PAYMENT_ENDTOEND_ID,  TRAN_REF_ID,  DEPARTMENT_CODE ,  PROCESSING_SYSTEM,  PAYMENT_TYPE,  PROCESS_STATUS,  STATUS,  PROCESS_NAME,  CLRSYSREF,  NPSSTPL_ID,  DT_CODE,  DTT_CODE,  request_data_json,  response_data_json from  (  select   TO_CHAR(PL.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as COMPLETIONTIME,   TO_CHAR(T.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATIONTIME,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.UETR,   T.npsst_id ,   T.VALUE_DATE ,   T.CDTR_IBAN ,   T.INTRBK_STTLM_AMNT ,   T.INTRBK_STTLM_CUR ,   T.PAYMENT_ENDTOEND_ID ,   T.TRAN_REF_ID ,   T.DEPARTMENT_CODE ,   T.PROCESSING_SYSTEM,   T.CLRSYSREF,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME,   PL.DT_CODE,   PL.DTT_CODE,   PL.NPSSTPL_ID,   PL.request_data_json,   PL.response_data_json,   T.created_date   from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.CREATED_DATE,    PLR.DT_CODE,    PLR.DTT_CODE,    PLR.request_data_json,    PLR.response_data_json,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     A.request_data_json,     A.response_data_json,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Log Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Creation Time","target_column":"CREATIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Completion Time","target_column":"COMPLETIONTIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__e_1672894086303() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1672894086303"
		let event_params={"caller_name":"transaction_list__e_1672894086303","event_desc":"E_1672894086303","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__e_1672894097480() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1672894097480"
		let event_params={"caller_name":"transaction_list__e_1672894097480","event_desc":"E_1672894097480","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__e_1672894112623() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_message_log"
		let parent_source_id=""
		let event_code="e_1672894112623"
		let event_params={"caller_name":"transaction_list__e_1672894112623","event_desc":"E_1672894112623","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process type list"
	process_type_list__svm_for_process_type() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_type_list"
		let destn_id="process_type_list"
		let parent_source_id=""
		let event_code="e_1672903554786"
		let event_params={"caller_name":"process_type_list__svm_for_process_type","event_desc":"SVM For Process Type","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_type_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_process_type__e_1672903593112,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_23","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672904704815","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Processtype Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_type_count","alias_name":"","mq_id":"MQ_1672903315183","date_format":false},{"column_name":"processtype","alias_name":"","mq_id":"MQ_1672903315670","date_format":false},{"column_name":"process_type","alias_name":"","mq_id":"MQ_1672903316398","date_format":false},{"column_name":"datemi","alias_name":"","mq_id":"MQ_1672903337102","date_format":false}],"joins":[]},"eq_text":"select  count(process_type) as process_type_count,  processtype,  process_type,  datemi from  (  select   t.created_date,   to_char(t.created_date, 'YYYY-MM-DD') as datemi,   t.process_type ,   t.department_code,   case    when process_type = 'OP' then 'Total Outward Payments'    when process_type = 'IP' then 'Total Inward Payments'   end as processtype,   t.tenant_id  from   npss_transactions t) v $WHERE group by  processtype,  process_type,  datemi"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Processtype Dashboard MQ CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date","target_column":"datemi","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Type","target_column":"processtype","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"process_type_count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process type list"
	process_type_list__e_1672931158278() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_type_list"
		let destn_id="payment_type_group"
		let parent_source_id=""
		let event_code="e_1672931158278"
		let event_params={"caller_name":"process_type_list__e_1672931158278","event_desc":"E_1672931158278","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_type_list","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828181899","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Payment Type MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PAYMENT_TYPE_COUNT","alias_name":"","mq_id":"MQ_1672833338397","date_format":false},{"column_name":"PAYMENT_TYPE","alias_name":"","mq_id":"MQ_1672833338547","date_format":false}],"joins":[]},"eq_text":"select   COUNT(PAYMENT_TYPE) as PAYMENT_TYPE_COUNT,   PAYMENT_TYPE from   (  select    T.created_date,    T.channel_id ,    T.process_type ,    T.tenant_id,    case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE  from npss_transactions T ) V $WHERE group by  PAYMENT_TYPE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Type Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Payment Type","target_column":"PAYMENT_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PAYMENT_TYPE_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process type list"
	process_type_list__e_1672931454946() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_type_list"
		let destn_id="queue_group"
		let parent_source_id=""
		let event_code="e_1672931454946"
		let event_params={"caller_name":"process_type_list__e_1672931454946","event_desc":"E_1672931454946","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_type_list","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828247713","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS_COUNT","alias_name":"","mq_id":"MQ_1672833641472","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1672833641606","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_STATUS) as PROCESS_STATUS_COUNT,  PROCESS_STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A )PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process type list"
	process_type_list__e_1672931485188() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_type_list"
		let destn_id="message_type_group"
		let parent_source_id=""
		let event_code="e_1672931485188"
		let event_params={"caller_name":"process_type_list__e_1672931485188","event_desc":"E_1672931485188","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_type_list","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828449252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Process Name Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME_COUNT","alias_name":"","mq_id":"MQ_1672835105850","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1672835108736","date_format":false}],"joins":[]},"eq_text":"select  COUNT(PROCESS_NAME) as PROCESS_NAME_COUNT,  PROCESS_NAME from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     A.CREATED_DATE,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  PROCESS_NAME"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Process Name Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"PROCESS_NAME_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for process type"
	svm_for_process_type__e_1672903593112(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_process_type"
		let destn_id="search"
		let parent_source_id="process_type_list"
		let event_code="e_1672903593112"
		let event_params={"caller_name":"svm_for_process_type__e_1672903593112","event_desc":"E_1672903593112","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_type_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="e_1672903593112__e_1672903828395,e_1672903593112__e_1672931056200,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1672903593112"
	e_1672903593112__e_1672903828395() { 
		let Dest_Is_ctrl=true
		
		let source_id="e_1672903593112"
		let destn_id="channel_group"
		let parent_source_id="svm_for_process_type"
		let event_code="e_1672903828395"
		let event_params={"caller_name":"e_1672903593112__e_1672903828395","event_desc":"E_1672903828395","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_type_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672828121470","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Channel Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CHANNEL_COUNT","alias_name":"","mq_id":"MQ_1672829934302","date_format":false},{"column_name":"channel_id","alias_name":"","mq_id":"MQ_1672829934741","date_format":false}],"joins":[]},"eq_text":"select  COUNT(channel_id) as CHANNEL_COUNT,  channel_id from  (  select   T.created_date,   T.channel_id ,   T.process_type ,   T.tenant_id,   T.DEPARTMENT_CODE  from   npss_transactions T) V $WHERE group by  channel_id"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Channel Dashboard CCD","filter":[{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel ID","target_column":"channel_id","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"CHANNEL_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1672903593112"
	e_1672903593112__e_1672931056200(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1672903593112"
		let destn_id="status_group"
		let parent_source_id="svm_for_process_type"
		let event_code="e_1672931056200"
		let event_params={"caller_name":"e_1672903593112__e_1672931056200","event_desc":"E_1672931056200","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_type_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"PIE","chart_label":"STATUS","chart_series":"","chart_data":"STATUS_COUNT","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_21","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1672838507154","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Status Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS_COUNT","alias_name":"","mq_id":"MQ_1672836121070","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1672836121212","date_format":false}],"joins":[]},"eq_text":"select  COUNT(STATUS) as STATUS_COUNT,  STATUS from  (  select   T.CREATED_DATE,   T.CHANNEL_ID ,   T.PROCESS_TYPE ,   T.TENANT_ID,   T.DEPARTMENT_CODE,   case    when T.EXHF_ID is null then 'RCT'    else 'BCT'   end as PAYMENT_TYPE,   PL.PROCESS_STATUS,   PL.STATUS,   PL.PROCESS_NAME  from   NPSS_TRANSACTIONS T  inner join (   select    PLR.NPSSTPL_ID,    PLR.UETR,    PLR.STATUS,    PLR.PROCESS_STATUS,    PLR.PROCESS_NAME,    PLR.ROW_NUM   from    (    select     A.NPSSTPL_ID,     A.DT_CODE,     A.DTT_CODE,     A.UETR,     A.STATUS,     A.PROCESS_NAME,     A.PROCESS_STATUS,     row_number() over( partition by A.UETR    order by     A.NPSSTPL_ID desc) as ROW_NUM    from     NPSS_TRN_PROCESS_LOG A ) PLR   where    PLR.ROW_NUM = 1) PL on   PL.UETR = T.UETR) V $WHERE group by  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Status Dashboard CCD","filter":[{"filter_name":"CHANNEL_ID","binding_name":"CHANNEL_ID","binding_value":"","source_name":"MI_LEVEL_CHANNEL_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"Department_code","binding_name":"Department_code","binding_value":"","source_name":"Department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"<>","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PAYMENT_TYPE","binding_name":"PAYMENT_TYPE","binding_value":"","source_name":"MI_LEVEL_PAYMENT_TYPE","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"MI_LEVEL_PROCESS_NAME","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"STATUS_COUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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