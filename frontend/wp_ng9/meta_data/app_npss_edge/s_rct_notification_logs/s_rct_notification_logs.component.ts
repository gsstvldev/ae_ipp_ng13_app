/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27728 
Modified By     : Admin 
Modified Date   : 2023-Jan-06 13:51 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_notification_logs
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {npss_cs_communication_send_outward_ipp_payment_ntfService} from '../../../custom_widget/npss_cs_communication_send_outward_ipp_payment_ntf/npss_cs_communication_send_outward_ipp_payment_ntf.service'

@Component({
	selector: 's_rct_notification_logs',
	templateUrl: './s_rct_notification_logs.component.html',
	styleUrls: ['./s_rct_notification_logs.component.css'],
	providers:[npss_cs_communication_send_outward_ipp_payment_ntfService]
})
    
// Start of class 
export class s_rct_notification_logsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_rct_notification_logs"
	wftpa_id : string = "WFT_NPSS_P_1304_1672931052867_0"
	cg_code : string = "CG_1304_1672930172847"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "process_log_list"
	uicgc_3 : string = "navigation_ui"
	uicgc_4 : string = "search"
	uicgc_13 : string = "back_ui"
	uicgc_14 : string = "message_detail_ui"
	key_events : any = {}
	btl_1304_1669459551241 : string = "p_view_message_layout"
	btl_1304_1666856790983 : string = "p_search_layout"
	btl_1304_1666856599156 : string = "p_main_layout"
	forms : any = ["uicgc_4","uicgc_14","uicgc_13","uicgc_3"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	process_log_list : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_message : any = {}
	navigation_ui_retry : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	back_ui : any = {}
	back_ui_back : any = {}
	message_detail_ui : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private npss_cs_communication_send_outward_ipp_payment_ntfService:npss_cs_communication_send_outward_ipp_payment_ntfService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Process Log List" 
		this.process_log_list.uictrl_code = "datatable"
		this.process_log_list.uicgc_desc = "Process Log List"
		this.process_log_list.uicgc_code = "uicgc_1"
		this.process_log_list.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.process_log_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1672928670076":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1672928670076","dtt_desc":"NPSS Notification Logs","ds_eligible":"DS_1672931701910","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Notification Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1672930756680","date_format":false},{"column_name":"CHANNEL_REF_NO","alias_name":"","mq_id":"MQ_1672930756904","date_format":false},{"column_name":"ORDER_CUST_ACC_NO","alias_name":"","mq_id":"MQ_1672930772672","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1672930786551","date_format":false,"currency_format":true},{"column_name":"STATUS_CODE","alias_name":"","mq_id":"MQ_1672930787119","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1672930847406","date_format":true}],"joins":[]},"eq_text":"select  NPSSNL_ID , CHANNEL_ID,  CHANNEL_REF_NO,  ORDER_CUST_ACC_NO ,  AMOUNT,  STATUS_CODE ,  CREATED_DATE ,  DTT_CODE ,  DT_CODE ,  TENANT_ID from  (  select   NPSSNL.NPSSNL_ID,   NPSSNL.CHANNEL_ID,   NPSSNL.CHANNEL_REF_NO,   NPSSNL.STATUS_CODE,   NPSSNL.ORDER_CUST_ACC_NO,   NPSSNL.AMOUNT,   NPSSNL.STATUS_DESCRIPTION,   NPSSNL.KAFKA_MESSAGE,   NPSSNL.COMMPD_ID,   NPSSNL.COMMPM_ID,   NPSSNL.COMMPML_ID,   NPSSNL.CREATED_DATE,   NPSSNL.DTT_CODE,   NPSSNL.DTT_DESCRIPTION,   NPSSNL.STATUS,   NPSSNL.DT_CODE,   NPSSNL.PROCESS_STATUS,   NPSSNL.TENANT_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   QR.SORT_ORDER as QS_SORT_ORDER  from   NPSS_NOTIFICATION_LOGS NPSSNL  inner join <TRAN_DB>.   CORE_Q_STATUS_ROLES QR on   NPSSNL.STATUS = QR.PROCESS_QUEUE_STATUS   and NPSSNL.PROCESS_STATUS = QR.QUEUE_CODE)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Notification Log MQ ccd","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Ref No","target_column":"CHANNEL_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ordering Cust Acc No","target_column":"ORDER_CUST_ACC_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Status Code","target_column":"STATUS_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true}]}}}}}}
		this.process_log_list.context_menu = []
		this.process_log_list.views = {}
		this.process_log_list.onChangecomponent = new EventEmitter<any>()
		this.process_log_list.show = true
		this.process_log_list.dynamic_param = {}
	
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
		
		// "View Message" Button of "Navigation UI" component
		this.navigation_ui_view_message.label_name = "View Message"
		this.navigation_ui_view_message.show = true
		this.navigation_ui_view_message.disabled = true
		this.navigation_ui_view_message.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_message.dynamic_param = {}
		this.navigation_ui_view_message.role = []
		this.navigation_ui_view_message.action = ""
		
		// "Retry" Button of "Navigation UI" component
		this.navigation_ui_retry.label_name = "Retry"
		this.navigation_ui_retry.show = true
		this.navigation_ui_retry.disabled = false
		this.navigation_ui_retry.params = {"icon_only":false,"uicgcc_style":"fa fa-refresh"}
		this.navigation_ui_retry.dynamic_param = {}
		this.navigation_ui_retry.role = []
		this.navigation_ui_retry.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1672928670076","is_tab_mode":"N","dtt_1304_1672928670076":{"0":[{"dttv_id":"NPSS Notification Log SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Notification Logs"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_notification_log_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_notification_log_srch"
		
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
		this.back_ui.uicgc_code = "uicgc_13"
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
	
		// Component level properties - "Message Detail UI" 
		this.message_detail_ui.uictrl_code = "dynamic_ui"
		this.message_detail_ui.uicgc_desc = "Message Detail UI"
		this.message_detail_ui.uicgc_code = "uicgc_14"
		this.message_detail_ui.params = {}
		this.message_detail_ui.datasource = {}
		this.message_detail_ui.context_menu = []
		this.message_detail_ui.views = {"first":"DTT_1304_1672928670076","is_tab_mode":"N","dtt_1304_1672928670076":{"0":[{"dttv_id":"NPSS Kafka Message UI","tab_order":0,"tab_name":"","uicgc_description":"Message Detail UI","role_description":"default","dtt_description":"NPSS Notification Logs"}]}}
		this.message_detail_ui.onChangecomponent = new EventEmitter<any>()
		this.message_detail_ui.show = true
		this.message_detail_ui.dynamic_param = {}
		this.message_detail_ui.f_npss_kafka_message_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.message_detail_ui.form_name = "f_npss_kafka_message_ui"
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__e_1672933246037()
		this.page_load__e_1672933445399()
	}

	//Handler for INTERNAL event of "e 1672933246037"
	e_1672933246037__internal(){
		this.e_1672933246037__e_1672933252147()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_pl_queue()
		this.search_search__cp_after_search()
		this.search_search__de_from_search_to_view_message_details()
	}

	//Handler for INTERNAL event of "ssp for pl queue"
	ssp_for_pl_queue__internal(parent_event_result){
		this.ssp_for_pl_queue__brfq_for_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for queue"
	brfq_for_queue__internal(parent_event_result){
		this.brfq_for_queue__e_1672932318440(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__selection_changed(){
		this.process_log_list__svm_for_queue()
		this.process_log_list__e_1672933153708()
		this.process_log_list__e_1672933505907()
		this.process_log_list__e_1672933512799()
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui retry"
	navigation_ui_retry__action_button_click(){
		this.navigation_ui_retry__cc_for_retry()
	}

	//Handler for INTERNAL event of "cc for retry"
	cc_for_retry__internal(parent_event_result){
		this.cc_for_retry__info_for_retry(parent_event_result)
	}

	//Handler for INTERNAL event of "info for retry"
	info_for_retry__internal(parent_event_result){
		this.info_for_retry__rs_for_retry(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_mda_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message"
	navigation_ui_view_message__action_button_click(){
		this.navigation_ui_view_message__sp_for_vmd()
		this.navigation_ui_view_message__e_1672933165428()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__e_1672933246037() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672933246037"
		let event_params={"caller_name":"page_load__e_1672933246037","event_desc":"E_1672933246037","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
		let handler_code="create_form"
		let internals="e_1672933246037__e_1672933252147,"
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
	page_load__e_1672933445399() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_retry"
		let parent_source_id=""
		let event_code="e_1672933445399"
		let event_params={"caller_name":"page_load__e_1672933445399","event_desc":"E_1672933445399","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for INTERNAL event of "e 1672933246037"
	e_1672933246037__e_1672933252147() { 
		let Dest_Is_ctrl=true
		
		let source_id="e_1672933246037"
		let destn_id="search_search"
		let parent_source_id="page_load"
		let event_code="e_1672933252147"
		let event_params={"caller_name":"e_1672933246037__e_1672933252147","event_desc":"E_1672933252147","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	search_search__ssp_for_pl_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1666857137821"
		let event_params={"caller_name":"search_search__ssp_for_pl_queue","event_desc":"SSP for PL Queue","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_pl_queue__brfq_for_queue,"
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
	search_search__de_from_search_to_view_message_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_ui_view_message"
		let parent_source_id=""
		let event_code="e_1669460479988"
		let event_params={"caller_name":"search_search__de_from_search_to_view_message_details","event_desc":"DE from search to View Message Details","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for INTERNAL event of "ssp for pl queue"
	ssp_for_pl_queue__brfq_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_pl_queue"
		let destn_id="process_log_list"
		let parent_source_id="search_search"
		let event_code="e_1666857183261"
		let event_params={"caller_name":"ssp_for_pl_queue__brfq_for_queue","event_desc":"BRFQ for Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_queue__e_1672932318440,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1672928670076":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1672928670076","dtt_desc":"NPSS Notification Logs","ds_eligible":"DS_1672931701910","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Notification Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1672930756680","date_format":false},{"column_name":"CHANNEL_REF_NO","alias_name":"","mq_id":"MQ_1672930756904","date_format":false},{"column_name":"ORDER_CUST_ACC_NO","alias_name":"","mq_id":"MQ_1672930772672","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1672930786551","date_format":false,"currency_format":true},{"column_name":"STATUS_CODE","alias_name":"","mq_id":"MQ_1672930787119","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1672930847406","date_format":true}],"joins":[]},"eq_text":"select  NPSSNL_ID , CHANNEL_ID,  CHANNEL_REF_NO,  ORDER_CUST_ACC_NO ,  AMOUNT,  STATUS_CODE ,  CREATED_DATE ,  DTT_CODE ,  DT_CODE ,  TENANT_ID from  (  select   NPSSNL.NPSSNL_ID,   NPSSNL.CHANNEL_ID,   NPSSNL.CHANNEL_REF_NO,   NPSSNL.STATUS_CODE,   NPSSNL.ORDER_CUST_ACC_NO,   NPSSNL.AMOUNT,   NPSSNL.STATUS_DESCRIPTION,   NPSSNL.KAFKA_MESSAGE,   NPSSNL.COMMPD_ID,   NPSSNL.COMMPM_ID,   NPSSNL.COMMPML_ID,   NPSSNL.CREATED_DATE,   NPSSNL.DTT_CODE,   NPSSNL.DTT_DESCRIPTION,   NPSSNL.STATUS,   NPSSNL.DT_CODE,   NPSSNL.PROCESS_STATUS,   NPSSNL.TENANT_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   QR.SORT_ORDER as QS_SORT_ORDER  from   NPSS_NOTIFICATION_LOGS NPSSNL  inner join <TRAN_DB>.   CORE_Q_STATUS_ROLES QR on   NPSSNL.STATUS = QR.PROCESS_QUEUE_STATUS   and NPSSNL.PROCESS_STATUS = QR.QUEUE_CODE)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Notification Log MQ ccd","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Ref No","target_column":"CHANNEL_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ordering Cust Acc No","target_column":"ORDER_CUST_ACC_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Status Code","target_column":"STATUS_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for queue"
	brfq_for_queue__e_1672932318440(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_queue"
		let destn_id="process_log_list"
		let parent_source_id="ssp_for_pl_queue"
		let event_code="e_1672932318440"
		let event_params={"caller_name":"brfq_for_queue__e_1672932318440","event_desc":"E_1672932318440","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1672928670076":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1672928670076","dtt_desc":"NPSS Notification Logs","ds_eligible":"DS_1672931701910","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Notification Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1672930756680","date_format":false},{"column_name":"CHANNEL_REF_NO","alias_name":"","mq_id":"MQ_1672930756904","date_format":false},{"column_name":"ORDER_CUST_ACC_NO","alias_name":"","mq_id":"MQ_1672930772672","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1672930786551","date_format":false,"currency_format":true},{"column_name":"STATUS_CODE","alias_name":"","mq_id":"MQ_1672930787119","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1672930847406","date_format":true}],"joins":[]},"eq_text":"select  NPSSNL_ID , CHANNEL_ID,  CHANNEL_REF_NO,  ORDER_CUST_ACC_NO ,  AMOUNT,  STATUS_CODE ,  CREATED_DATE ,  DTT_CODE ,  DT_CODE ,  TENANT_ID from  (  select   NPSSNL.NPSSNL_ID,   NPSSNL.CHANNEL_ID,   NPSSNL.CHANNEL_REF_NO,   NPSSNL.STATUS_CODE,   NPSSNL.ORDER_CUST_ACC_NO,   NPSSNL.AMOUNT,   NPSSNL.STATUS_DESCRIPTION,   NPSSNL.KAFKA_MESSAGE,   NPSSNL.COMMPD_ID,   NPSSNL.COMMPM_ID,   NPSSNL.COMMPML_ID,   NPSSNL.CREATED_DATE,   NPSSNL.DTT_CODE,   NPSSNL.DTT_DESCRIPTION,   NPSSNL.STATUS,   NPSSNL.DT_CODE,   NPSSNL.PROCESS_STATUS,   NPSSNL.TENANT_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   QR.SORT_ORDER as QS_SORT_ORDER  from   NPSS_NOTIFICATION_LOGS NPSSNL  inner join <TRAN_DB>.   CORE_Q_STATUS_ROLES QR on   NPSSNL.STATUS = QR.PROCESS_QUEUE_STATUS   and NPSSNL.PROCESS_STATUS = QR.QUEUE_CODE)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Notification Log MQ ccd","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Ref No","target_column":"CHANNEL_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ordering Cust Acc No","target_column":"ORDER_CUST_ACC_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Status Code","target_column":"STATUS_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__svm_for_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666857327033"
		let event_params={"caller_name":"process_log_list__svm_for_queue","event_desc":"SVM for Queue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1672928670076":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1672928670076","dtt_desc":"NPSS Notification Logs","ds_eligible":"DS_1672931701910","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Notification Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1672930756680","date_format":false},{"column_name":"CHANNEL_REF_NO","alias_name":"","mq_id":"MQ_1672930756904","date_format":false},{"column_name":"ORDER_CUST_ACC_NO","alias_name":"","mq_id":"MQ_1672930772672","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1672930786551","date_format":false,"currency_format":true},{"column_name":"STATUS_CODE","alias_name":"","mq_id":"MQ_1672930787119","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1672930847406","date_format":true}],"joins":[]},"eq_text":"select  NPSSNL_ID , CHANNEL_ID,  CHANNEL_REF_NO,  ORDER_CUST_ACC_NO ,  AMOUNT,  STATUS_CODE ,  CREATED_DATE ,  DTT_CODE ,  DT_CODE ,  TENANT_ID from  (  select   NPSSNL.NPSSNL_ID,   NPSSNL.CHANNEL_ID,   NPSSNL.CHANNEL_REF_NO,   NPSSNL.STATUS_CODE,   NPSSNL.ORDER_CUST_ACC_NO,   NPSSNL.AMOUNT,   NPSSNL.STATUS_DESCRIPTION,   NPSSNL.KAFKA_MESSAGE,   NPSSNL.COMMPD_ID,   NPSSNL.COMMPM_ID,   NPSSNL.COMMPML_ID,   NPSSNL.CREATED_DATE,   NPSSNL.DTT_CODE,   NPSSNL.DTT_DESCRIPTION,   NPSSNL.STATUS,   NPSSNL.DT_CODE,   NPSSNL.PROCESS_STATUS,   NPSSNL.TENANT_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   QR.SORT_ORDER as QS_SORT_ORDER  from   NPSS_NOTIFICATION_LOGS NPSSNL  inner join <TRAN_DB>.   CORE_Q_STATUS_ROLES QR on   NPSSNL.STATUS = QR.PROCESS_QUEUE_STATUS   and NPSSNL.PROCESS_STATUS = QR.QUEUE_CODE)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Notification Log MQ ccd","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Channel","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Ref No","target_column":"CHANNEL_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ordering Cust Acc No","target_column":"ORDER_CUST_ACC_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Status Code","target_column":"STATUS_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__e_1672933153708() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1672933153708"
		let event_params={"caller_name":"process_log_list__e_1672933153708","event_desc":"E_1672933153708","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__e_1672933505907() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_ui_view_message"
		let parent_source_id=""
		let event_code="e_1672933505907"
		let event_params={"caller_name":"process_log_list__e_1672933505907","event_desc":"E_1672933505907","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	process_log_list__e_1672933512799() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="navigation_ui_retry"
		let parent_source_id=""
		let event_code="e_1672933512799"
		let event_params={"caller_name":"process_log_list__e_1672933512799","event_desc":"E_1672933512799","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
		let event_code="e_1666857782776"
		let event_params={"caller_name":"navigation_ui_search__spap_for_search","event_desc":"SPAP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1666856790983","window_title":"Search","window_height":400,"window_width":"800px","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1666857782776"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui retry"
	navigation_ui_retry__cc_for_retry() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_retry"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668850748103"
		let event_params={"caller_name":"navigation_ui_retry__cc_for_retry","event_desc":"CC for Retry","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_retry","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_retry__info_for_retry,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_communication_send_outward_ipp_payment_ntfService.fn_npss_cs_communication_send_outward_ipp_payment_ntf(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for retry"
	cc_for_retry__info_for_retry(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_retry"
		let destn_id=""
		let parent_source_id="navigation_ui_retry"
		let event_code="e_1668850767975"
		let event_params={"caller_name":"cc_for_retry__info_for_retry","event_desc":"INFO for Retry","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"All the notifications have been sent successfully","root_source_id":"navigation_ui_retry","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_for_retry__rs_for_retry,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for retry"
	info_for_retry__rs_for_retry(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_for_retry"
		let destn_id=""
		let parent_source_id="cc_for_retry"
		let event_code="e_1668850784688"
		let event_params={"caller_name":"info_for_retry__rs_for_retry","event_desc":"RS for Retry","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_retry","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__sp_for_mda_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669459834127"
		let event_params={"caller_name":"back_ui_back__sp_for_mda_back","event_desc":"SP for MDA Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1666856599156"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message"
	navigation_ui_view_message__sp_for_vmd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460683952"
		let event_params={"caller_name":"navigation_ui_view_message__sp_for_vmd","event_desc":"SP for VMD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message","raiseparam":{"profile_code":"BTL_1304_1669459551241"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message"
	navigation_ui_view_message__e_1672933165428() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1672933165428"
		let event_params={"caller_name":"navigation_ui_view_message__e_1672933165428","event_desc":"E_1672933165428","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
