/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26351 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 14:3 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_customer_verify
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_customer_verify',
	templateUrl: './s_customer_verify.component.html',
	styleUrls: ['./s_customer_verify.component.css'],
	providers:[torus_cs_show_hideService]
})
    
// Start of class 
export class s_customer_verifyComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_customer_verify"
	wftpa_id : string = "WFT_NPSS_P_1304_1665401531808_0"
	cg_code : string = "CG_1408_1652246424499"
	key_column : any = {"dtt_1304_1665384533560":"NPSSCPA_ID","dtt_1304_1665385314469":"NPSSCPB_ID","dtt_1304_1665385772257":"NPSSCT_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "queue"
	uicgc_2 : string = "transaction_list"
	uicgc_4 : string = "navigation"
	uicgc_5 : string = "dynamic_form_search"
	key_events : any = {}
	btl_1408_1652109460832 : string = "p_search_layout"
	btl_1408_1652109351120 : string = "p_main_layout"
	forms : any = ["uicgc_5","uicgc_4"]
	p_search_layout__spap_for_main_search_showpopup : boolean = false
	queue : any = {}
	transaction_list : any = {}
	navigation : any = {}
	navigation_search : any = {}
	navigation_approve : any = {}
	dynamic_form_search : any = {}
	dynamic_form_search_clear : any = {}
	dynamic_form_search_search : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_1"
		this.queue.params = {"need_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665404174842","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1665397370777","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1665397371001","date_format":false},{"column_name":"count","alias_name":"","mq_id":"MQ_1665397371201","date_format":false}],"joins":[]},"eq_text":"SELECT process_status,        status,        count(status) count,        concat(concat(status, ' ('), concat(count(status), ')')) as Status_count,        dt_code,        dtt_code,        queue_desc,        q_sort_order,        qs_sort_order   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.PROCESS_STATUS,                NPSS.SYSTEM_ID,                qr.role_id,                qr.vph_app_id as qr_app_id,                qr.vph_app_code,                qr.queue_code,                qr.screen_name,                pq.queue_desc,                pq.queue_code,                qr.sort_order as qs_sort_order,                pq.sort_order as q_sort_order,                pq.vph_app_id as q_app_id,                qr.screen_module as qr_module,                qr.screen_menu_group as qr_menu_group           from NPSS_CUST_PROXY_ADDRESS NPSS          inner join CORE_Q_STATUS_ROLES qr on NPSS.status =                                               qr.process_queue_status                                           AND NPSS.PROCESS_STATUS =                                               QR.QUEUE_CODE          inner join CORE_APP_Q_SETUP pq on NPSS.process_status =                                            pq.queue_code) vw $WHERE  group by q_sort_order,           process_status,           qs_sort_order,           status,           dt_code,           dtt_code,           queue_desc  order by q_sort_order, qs_sort_order"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Queue","target_column":"process_status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.queue.context_menu = []
		this.queue.views = {}
		this.queue.onChangecomponent = new EventEmitter<any>()
		this.queue.show = true
		this.queue.dynamic_param = {}
	
		// Component level properties - "Transaction List" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction List"
		this.transaction_list.uicgc_code = "uicgc_2"
		this.transaction_list.params = {"need_search":"N"}
		this.transaction_list.datasource = {"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665404486101","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CUSTOMER","alias_name":"","mq_id":"MQ_1665395323191","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665395323493","date_format":false},{"column_name":"EMIRATES_ID","alias_name":"","mq_id":"MQ_1665395323662","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665395323981","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665395324141","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665395324293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395324485","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395324637","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPA_ID,        CUSTOMER,        PHONE_NO,        EMIRATES_ID,        EMAIL_ID,        IBAN,        PARTICIPANT_CODE,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.CUSTOMER,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.SYSTEM_ID,                NPSS.PROCESS_STATUS           FROM NPSS_CUST_PROXY_ADDRESS NPSS) V $WHERE  ORDER BY NPSSCPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cust Address CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Customer Name","target_column":"CUSTOMER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Emirates ID","target_column":"EMIRATES_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.transaction_list.context_menu = []
		this.transaction_list.views = {}
		this.transaction_list.onChangecomponent = new EventEmitter<any>()
		this.transaction_list.show = true
		this.transaction_list.dynamic_param = {}
	
		// Component level properties - "Navigation" 
		this.navigation.uictrl_code = "dynamic_ui"
		this.navigation.uicgc_desc = "Navigation"
		this.navigation.uicgc_code = "uicgc_4"
		this.navigation.params = {}
		this.navigation.datasource = {}
		this.navigation.context_menu = []
		this.navigation.views = {}
		this.navigation.onChangecomponent = new EventEmitter<any>()
		this.navigation.show = true
		this.navigation.dynamic_param = {}
		this.navigation.f_navigation = {"show":true}
		this.navigation.current_view = "f_navigation"
		
		// "Search" Button of "Navigation" component
		this.navigation_search.label_name = "Search"
		this.navigation_search.show = true
		this.navigation_search.disabled = false
		this.navigation_search.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_search.dynamic_param = {}
		this.navigation_search.role = []
		this.navigation_search.action = ""
		
		// "Approve" Button of "Navigation" component
		this.navigation_approve.label_name = "Approve"
		this.navigation_approve.show = true
		this.navigation_approve.disabled = false
		this.navigation_approve.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_approve.dynamic_param = {}
		this.navigation_approve.role = []
		this.navigation_approve.action = ""
	
		// Component level properties - "Dynamic Form Search" 
		this.dynamic_form_search.uictrl_code = "dynamic_form_search"
		this.dynamic_form_search.uicgc_desc = "Dynamic Form Search"
		this.dynamic_form_search.uicgc_code = "uicgc_5"
		this.dynamic_form_search.params = {}
		this.dynamic_form_search.datasource = {}
		this.dynamic_form_search.context_menu = []
		this.dynamic_form_search.views = {"first":"DTT_1304_1665384533560","is_tab_mode":"N","dtt_1304_1665384533560":{"0":[{"dttv_id":"NPSS Customer SRCH","tab_order":0,"tab_name":"","uicgc_description":"Dynamic Form Search","role_description":"default","dtt_description":"NPSS Cust Proxy Address"}]}}
		this.dynamic_form_search.onChangecomponent = new EventEmitter<any>()
		this.dynamic_form_search.show = true
		this.dynamic_form_search.dynamic_param = {}
		this.dynamic_form_search.f_npss_customer_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.dynamic_form_search.form_name = "f_npss_customer_srch"
		
		// "Clear" Button of "Dynamic Form Search" component
		this.dynamic_form_search_clear.label_name = "Clear"
		this.dynamic_form_search_clear.show = true
		this.dynamic_form_search_clear.disabled = false
		this.dynamic_form_search_clear.params = {"icon_only":false,"uicgcc_style":""}
		this.dynamic_form_search_clear.dynamic_param = {}
		this.dynamic_form_search_clear.role = []
		this.dynamic_form_search_clear.action = ""
		
		// "Search" Button of "Dynamic Form Search" component
		this.dynamic_form_search_search.label_name = "Search"
		this.dynamic_form_search_search.show = true
		this.dynamic_form_search_search.disabled = false
		this.dynamic_form_search_search.params = {"icon_only":false,"uicgcc_style":""}
		this.dynamic_form_search_search.dynamic_param = {}
		this.dynamic_form_search_search.role = []
		this.dynamic_form_search_search.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__he_for_approve_on_page_load()
		this.page_load__create_form_on_page_load()
	}

	//Handler for INTERNAL event of "create form on page load"
	create_form_on_page_load__internal(){
		this.create_form_on_page_load__tbc_for_main_search_btn_on_pl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__action_button_click(){
		this.navigation_search__search_btn_clk_clear_ui()
		this.navigation_search__spap_for_main_search()
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_from_queue_list()
		this.queue__se_for_approve_list()
	}

	//Handler for INTERNAL event of "svm from queue list"
	svm_from_queue_list__internal(parent_event_result){
		this.svm_from_queue_list__ssp_from_queue_list_selection(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp from queue list selection"
	ssp_from_queue_list_selection__internal(parent_event_result){
		this.ssp_from_queue_list_selection__brfq_for_transaction_list(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_from_transaction_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "dynamic form search clear"
	dynamic_form_search_clear__action_button_click(){
		this.dynamic_form_search_clear__clear_ui_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "dynamic form search search"
	dynamic_form_search_search__action_button_click(){
		this.dynamic_form_search_search__ssp_for_queue_search()
	}

	//Handler for INTERNAL event of "ssp for queue search"
	ssp_for_queue_search__internal(parent_event_result){
		this.ssp_for_queue_search__brfq_for_queue_after_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation approve"
	navigation_approve__action_button_click(){
		this.navigation_approve__ips_cs_bulk_approve_ide_link_for_merc_approve_process()
	}

	//Handler for INTERNAL event of "ips cs bulk approve ide link for merc approve process"
	ips_cs_bulk_approve_ide_link_for_merc_approve_process__internal(parent_event_result){
		this.ips_cs_bulk_approve_ide_link_for_merc_approve_process__info_msg_from_approve_process(parent_event_result)
	}

	//Handler for INTERNAL event of "info msg from approve process"
	info_msg_from_approve_process__internal(parent_event_result){
		this.info_msg_from_approve_process__rs_from_approve_process(parent_event_result)
	}

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_approve_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_approve"
		let parent_source_id=""
		let event_code="e_1652108777258"
		let event_params={"caller_name":"page_load__he_for_approve_on_page_load","event_desc":"HE for Approve on page load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__create_form_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1652159435399"
		let event_params={"caller_name":"page_load__create_form_on_page_load","event_desc":"Create Form on page load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
		let handler_code="create_form"
		let internals="create_form_on_page_load__tbc_for_main_search_btn_on_pl,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "create form on page load"
	create_form_on_page_load__tbc_for_main_search_btn_on_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="create_form_on_page_load"
		let destn_id="dynamic_form_search_search"
		let parent_source_id="page_load"
		let event_code="e_1652159463293"
		let event_params={"caller_name":"create_form_on_page_load__tbc_for_main_search_btn_on_pl","event_desc":"TBC for main search btn on PL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__search_btn_clk_clear_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="dynamic_form_search"
		let parent_source_id=""
		let event_code="e_1652108748083"
		let event_params={"caller_name":"navigation_search__search_btn_clk_clear_ui","event_desc":"Search btn clk clear ui","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__spap_for_main_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1652112632943"
		let event_params={"caller_name":"navigation_search__spap_for_main_search","event_desc":"SPAP for main search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_main_search","selector":"p_search_layout","profile_code":"BTL_1408_1652109460832","window_title":"Search","window_height":300,"window_width":"800px","window_close_icon":"Y","eventdes":"spap_for_main_search","eventcode":"E_1652112632943"}}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__svm_from_queue_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1652109091425"
		let event_params={"caller_name":"queue__svm_from_queue_list","event_desc":"SVM from Queue list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_from_queue_list__ssp_from_queue_list_selection,"
		let event_data={"queue":{"e_1652109091425":{"dts":{"dt_1304_1665384453253":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1652109091425","dt_code":"DT_1304_1665384453253","dtt_code":"","dt_desc":"Customer DTG","dtt_desc":"NPSS Cust Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665404174842","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1665397370777","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1665397371001","date_format":false},{"column_name":"count","alias_name":"","mq_id":"MQ_1665397371201","date_format":false}],"joins":[]},"eq_text":"SELECT process_status,        status,        count(status) count,        concat(concat(status, ' ('), concat(count(status), ')')) as Status_count,        dt_code,        dtt_code,        queue_desc,        q_sort_order,        qs_sort_order   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.PROCESS_STATUS,                NPSS.SYSTEM_ID,                qr.role_id,                qr.vph_app_id as qr_app_id,                qr.vph_app_code,                qr.queue_code,                qr.screen_name,                pq.queue_desc,                pq.queue_code,                qr.sort_order as qs_sort_order,                pq.sort_order as q_sort_order,                pq.vph_app_id as q_app_id,                qr.screen_module as qr_module,                qr.screen_menu_group as qr_menu_group           from NPSS_CUST_PROXY_ADDRESS NPSS          inner join CORE_Q_STATUS_ROLES qr on NPSS.status =                                               qr.process_queue_status                                           AND NPSS.PROCESS_STATUS =                                               QR.QUEUE_CODE          inner join CORE_APP_Q_SETUP pq on NPSS.process_status =                                            pq.queue_code) vw $WHERE  group by q_sort_order,           process_status,           qs_sort_order,           status,           dt_code,           dtt_code,           queue_desc  order by q_sort_order, qs_sort_order"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Queue","target_column":"process_status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue"
	queue__se_for_approve_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_approve"
		let parent_source_id=""
		let event_code="e_1652109224496"
		let event_params={"caller_name":"queue__se_for_approve_list","event_desc":"SE for Approve list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for INTERNAL event of "svm from queue list"
	svm_from_queue_list__ssp_from_queue_list_selection(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_from_queue_list"
		let destn_id="dynamic_form_search"
		let parent_source_id="queue"
		let event_code="e_1652109120536"
		let event_params={"caller_name":"svm_from_queue_list__ssp_from_queue_list_selection","event_desc":"SSP from Queue list selection","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_from_queue_list_selection__brfq_for_transaction_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp from queue list selection"
	ssp_from_queue_list_selection__brfq_for_transaction_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_queue_list_selection"
		let destn_id="transaction_list"
		let parent_source_id="svm_from_queue_list"
		let event_code="e_1652109142809"
		let event_params={"caller_name":"ssp_from_queue_list_selection__brfq_for_transaction_list","event_desc":"BRFQ for Transaction list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665404486101","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CUSTOMER","alias_name":"","mq_id":"MQ_1665395323191","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665395323493","date_format":false},{"column_name":"EMIRATES_ID","alias_name":"","mq_id":"MQ_1665395323662","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665395323981","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665395324141","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665395324293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395324485","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395324637","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPA_ID,        CUSTOMER,        PHONE_NO,        EMIRATES_ID,        EMAIL_ID,        IBAN,        PARTICIPANT_CODE,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.CUSTOMER,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.SYSTEM_ID,                NPSS.PROCESS_STATUS           FROM NPSS_CUST_PROXY_ADDRESS NPSS) V $WHERE  ORDER BY NPSSCPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cust Address CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Customer Name","target_column":"CUSTOMER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Emirates ID","target_column":"EMIRATES_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__svm_from_transaction_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1652109325200"
		let event_params={"caller_name":"transaction_list__svm_from_transaction_list","event_desc":"SVM from transaction list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"transaction_list":{"e_1652109325200":{"dts":{"dt_1304_1665384453253":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1652109325200","dt_code":"DT_1304_1665384453253","dtt_code":"","dt_desc":"Customer DTG","dtt_desc":"NPSS Cust Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665404486101","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Customer MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CUSTOMER","alias_name":"","mq_id":"MQ_1665395323191","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665395323493","date_format":false},{"column_name":"EMIRATES_ID","alias_name":"","mq_id":"MQ_1665395323662","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665395323981","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665395324141","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665395324293","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665395324485","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665395324637","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSCPA_ID,        CUSTOMER,        PHONE_NO,        EMIRATES_ID,        EMAIL_ID,        IBAN,        PARTICIPANT_CODE,        STATUS,        PROCESS_STATUS,        DT_CODE,        DTT_CODE   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.CUSTOMER,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.SYSTEM_ID,                NPSS.PROCESS_STATUS           FROM NPSS_CUST_PROXY_ADDRESS NPSS) V $WHERE  ORDER BY NPSSCPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Cust Address CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Customer Name","target_column":"CUSTOMER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Emirates ID","target_column":"EMIRATES_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "dynamic form search clear"
	dynamic_form_search_clear__clear_ui_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="dynamic_form_search_clear"
		let destn_id="dynamic_form_search"
		let parent_source_id=""
		let event_code="e_1652109934534"
		let event_params={"caller_name":"dynamic_form_search_clear__clear_ui_search","event_desc":"Clear ui search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"dynamic_form_search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "dynamic form search search"
	dynamic_form_search_search__ssp_for_queue_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="dynamic_form_search_search"
		let destn_id="dynamic_form_search"
		let parent_source_id=""
		let event_code="e_1652109990126"
		let event_params={"caller_name":"dynamic_form_search_search__ssp_for_queue_search","event_desc":"SSP for Queue Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"dynamic_form_search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_queue_search__brfq_for_queue_after_search,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for queue search"
	ssp_for_queue_search__brfq_for_queue_after_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_queue_search"
		let destn_id="queue"
		let parent_source_id="dynamic_form_search_search"
		let event_code="e_1652108983976"
		let event_params={"caller_name":"ssp_for_queue_search__brfq_for_queue_after_search","event_desc":"BRFQ for Queue after search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dynamic_form_search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665404174842","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1665397370777","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1665397371001","date_format":false},{"column_name":"count","alias_name":"","mq_id":"MQ_1665397371201","date_format":false}],"joins":[]},"eq_text":"SELECT process_status,        status,        count(status) count,        concat(concat(status, ' ('), concat(count(status), ')')) as Status_count,        dt_code,        dtt_code,        queue_desc,        q_sort_order,        qs_sort_order   FROM (SELECT NPSS.NPSSCPA_ID,                NPSS.PHONE_NO,                NPSS.EMIRATES_ID,                NPSS.EMAIL_ID,                NPSS.IBAN,                NPSS.PARTICIPANT_CODE,                NPSS.DT_CODE,                NPSS.DTT_CODE,                NPSS.STATUS,                NPSS.PROCESS_STATUS,                NPSS.SYSTEM_ID,                qr.role_id,                qr.vph_app_id as qr_app_id,                qr.vph_app_code,                qr.queue_code,                qr.screen_name,                pq.queue_desc,                pq.queue_code,                qr.sort_order as qs_sort_order,                pq.sort_order as q_sort_order,                pq.vph_app_id as q_app_id,                qr.screen_module as qr_module,                qr.screen_menu_group as qr_menu_group           from NPSS_CUST_PROXY_ADDRESS NPSS          inner join CORE_Q_STATUS_ROLES qr on NPSS.status =                                               qr.process_queue_status                                           AND NPSS.PROCESS_STATUS =                                               QR.QUEUE_CODE          inner join CORE_APP_Q_SETUP pq on NPSS.process_status =                                            pq.queue_code) vw $WHERE  group by q_sort_order,           process_status,           qs_sort_order,           status,           dt_code,           dtt_code,           queue_desc  order by q_sort_order, qs_sort_order"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Queue CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Queue","target_column":"process_status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation approve"
	navigation_approve__ips_cs_bulk_approve_ide_link_for_merc_approve_process() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_approve"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1652676582415"
		let event_params={"caller_name":"navigation_approve__ips_cs_bulk_approve_ide_link_for_merc_approve_process","event_desc":"IPS (CS) Bulk Approve IDE Link for Merc Approve process","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_approve","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="ips_cs_bulk_approve_ide_link_for_merc_approve_process__info_msg_from_approve_process,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ips cs bulk approve ide link for merc approve process"
	ips_cs_bulk_approve_ide_link_for_merc_approve_process__info_msg_from_approve_process(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ips_cs_bulk_approve_ide_link_for_merc_approve_process"
		let destn_id=""
		let parent_source_id="navigation_approve"
		let event_code="e_1652676615287"
		let event_params={"caller_name":"ips_cs_bulk_approve_ide_link_for_merc_approve_process__info_msg_from_approve_process","event_desc":"Info Msg from Approve process","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Transaction(s) has been approved successfully.","root_source_id":"navigation_approve","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_msg_from_approve_process__rs_from_approve_process,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info msg from approve process"
	info_msg_from_approve_process__rs_from_approve_process(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_msg_from_approve_process"
		let destn_id=""
		let parent_source_id="ips_cs_bulk_approve_ide_link_for_merc_approve_process"
		let event_code="e_1652676667690"
		let event_params={"caller_name":"info_msg_from_approve_process__rs_from_approve_process","event_desc":"RS from approve process","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_approve","raiseparam":{},"parent_event_result":"SUCCESS"}
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
