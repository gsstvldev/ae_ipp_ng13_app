/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26351 
Modified By     : Admin 
Modified Date   : 2022-Oct-10 14:3 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_salary_file_creation
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'

@Component({
	selector: 's_salary_file_creation',
	templateUrl: './s_salary_file_creation.component.html',
	styleUrls: ['./s_salary_file_creation.component.css'],
	providers:[]
})
    
// Start of class 
export class s_salary_file_creationComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_salary_file_creation"
	wftpa_id : string = "WFT_NPSS_P_1304_1665404251490_0"
	cg_code : string = "CG_1408_1652164804884"
	key_column : any = {}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_npss_layout"
	uicgc_1 : string = "navigation"
	uicgc_3 : string = "transactions_list"
	uicgc_9 : string = "search"
	uicgc_20 : string = "queue"
	uicgc_23 : string = "queue_search"
	key_events : any = {}
	btl_1408_1585747175326 : string = "p_npss_layout"
	btl_1408_1585633277240 : string = "p_search_layout"
	forms : any = ["uicgc_1","uicgc_9"]
	p_search_layout__spap_for_nav_search_showpopup : boolean = false
	navigation : any = {}
	navigation_search : any = {}
	navigation_create_pacs_008 : any = {}
	transactions_list : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	queue : any = {}
	queue_search : any = {}
	queue_search_search : any = {}
	queue_search_clear : any = {}
	exg_export_dynamic_show : boolean = false


	// Constructor 
	constructor(private handler:AppHandlerService ) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Navigation" 
		this.navigation.uictrl_code = "dynamic_ui"
		this.navigation.uicgc_desc = "Navigation"
		this.navigation.uicgc_code = "uicgc_1"
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
		this.navigation_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.navigation_search.dynamic_param = {}
		this.navigation_search.role = []
		this.navigation_search.action = ""
		
		// "Create pacs 008" Button of "Navigation" component
		this.navigation_create_pacs_008.label_name = "Create pacs 008"
		this.navigation_create_pacs_008.show = true
		this.navigation_create_pacs_008.disabled = false
		this.navigation_create_pacs_008.params = {"icon_only":false,"uicgcc_style":"fa fa-creative-commons"}
		this.navigation_create_pacs_008.dynamic_param = {}
		this.navigation_create_pacs_008.role = []
		this.navigation_create_pacs_008.action = ""
	
		// Component level properties - "Transactions List" 
		this.transactions_list.uictrl_code = "datatable"
		this.transactions_list.uicgc_desc = "Transactions List"
		this.transactions_list.uicgc_code = "uicgc_3"
		this.transactions_list.params = {"need_search":"N","view_all":"Y","advance_dynamic_search":"N","need_pag_datatable":"Y"}
		this.transactions_list.datasource = {}
		this.transactions_list.context_menu = []
		this.transactions_list.views = {}
		this.transactions_list.onChangecomponent = new EventEmitter<any>()
		this.transactions_list.show = true
		this.transactions_list.dynamic_param = {}
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_9"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_search = {"show":true}
		this.search.current_view = "f_search"
		
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
	
		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_20"
		this.queue.params = {"need_search":"N"}
		this.queue.datasource = {}
		this.queue.context_menu = []
		this.queue.views = {}
		this.queue.onChangecomponent = new EventEmitter<any>()
		this.queue.show = true
		this.queue.dynamic_param = {}
	
		// Component level properties - "Queue Search" 
		this.queue_search.uictrl_code = "dynamic_form_search"
		this.queue_search.uicgc_desc = "Queue Search"
		this.queue_search.uicgc_code = "uicgc_23"
		this.queue_search.params = {}
		this.queue_search.datasource = {}
		this.queue_search.context_menu = []
		this.queue_search.views = {}
		this.queue_search.onChangecomponent = new EventEmitter<any>()
		this.queue_search.show = true
		this.queue_search.dynamic_param = {}
		
		// "Search" Button of "Queue Search" component
		this.queue_search_search.label_name = "Search"
		this.queue_search_search.show = true
		this.queue_search_search.disabled = false
		this.queue_search_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.queue_search_search.dynamic_param = {}
		this.queue_search_search.role = []
		this.queue_search_search.action = ""
		
		// "Clear" Button of "Queue Search" component
		this.queue_search_clear.label_name = "Clear"
		this.queue_search_clear.show = true
		this.queue_search_clear.disabled = false
		this.queue_search_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.queue_search_clear.dynamic_param = {}
		this.queue_search_clear.role = []
		this.queue_search_clear.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_on_page_load()
		this.page_load__se_for_pl()
		this.page_load__tbc_for_pl()
	}

	//Handler for SELECTION_CHANGED event of "transactions list"
	transactions_list__selection_changed(){
		this.transactions_list__svm_by_click_on_bl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "uicgcc 18"
	uicgcc_18__action_button_click(){
		this.uicgcc_18__rs()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__action_button_click(){
		this.navigation_search__cui_by_click_on_nav_search()
		this.navigation_search__rs_for_nav_search()
		this.navigation_search__cui_for_nav_search()
		this.navigation_search__spap_for_nav_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_by_click_on_f_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__cp_by_click_on()
		this.search_search__ssp_for_search()
	}

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__internal(parent_event_result){
		this.ssp_for_search__brfq_for_queue_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for queue list"
	brfq_for_queue_list__internal(parent_event_result){
		this.brfq_for_queue_list__cui_for_search(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_process_group_list()
		this.queue__se_for_queue()
	}

	//Handler for INTERNAL event of "svm process group list"
	svm_process_group_list__internal(parent_event_result){
		this.svm_process_group_list__ssp_for_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for queue"
	ssp_for_queue__internal(parent_event_result){
		this.ssp_for_queue__brfq_for_queue(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "queue search search"
	queue_search_search__action_button_click(){
		this.queue_search_search__ssp_for_q_search()
		this.queue_search_search__cp_for_q_search()
		this.queue_search_search__cui_for_q_search()
	}

	//Handler for INTERNAL event of "ssp for q search"
	ssp_for_q_search__internal(parent_event_result){
		this.ssp_for_q_search__brfq_by_click_on_queue_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "queue search clear"
	queue_search_clear__action_button_click(){
		this.queue_search_clear__cui_for_q_clear()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation create pacs 008"
	navigation_create_pacs_008__action_button_click(){
		this.navigation_create_pacs_008__efc_for_nav_create_pacs()
	}

	//Handler for INTERNAL event of "efc for nav create pacs"
	efc_for_nav_create_pacs__internal(parent_event_result){
		this.efc_for_nav_create_pacs__rs_for_nav_create_pacs(parent_event_result)
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1585633462566"
		let event_params={"caller_name":"page_load__cf_on_page_load","event_desc":"CF on Page Load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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
	page_load__se_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_create_pacs_008"
		let parent_source_id=""
		let event_code="e_1591627139925"
		let event_params={"caller_name":"page_load__se_for_pl","event_desc":"SE for PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for DPSINIT event of "page_load"
	page_load__tbc_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="search_search"
		let parent_source_id=""
		let event_code="e_1592396236214"
		let event_params={"caller_name":"page_load__tbc_for_pl","event_desc":"TBC for PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "transactions list"
	transactions_list__svm_by_click_on_bl() { 
		let Dest_Is_ctrl=true
		
		let source_id="transactions_list"
		let destn_id="transactions_list"
		let parent_source_id=""
		let event_code="e_1587386903647"
		let event_params={"caller_name":"transactions_list__svm_by_click_on_bl","event_desc":"SVM by click on BL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transactions_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "uicgcc 18"
	uicgcc_18__rs() { 
		let Dest_Is_ctrl=true
		
		let source_id="uicgcc_18"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587714421091"
		let event_params={"caller_name":"uicgcc_18__rs","event_desc":"RS","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"uicgcc_18","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__cui_by_click_on_nav_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1588918123155"
		let event_params={"caller_name":"navigation_search__cui_by_click_on_nav_search","event_desc":"CUI by click on nav search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"need_reset_key_column":"N"}}
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
	navigation_search__rs_for_nav_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="transactions_list"
		let parent_source_id=""
		let event_code="e_1589554390004"
		let event_params={"caller_name":"navigation_search__rs_for_nav_search","event_desc":"RS for Nav Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{}}
		let handler_code="reset_selection"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.reset_selection(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__cui_for_nav_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="queue_search"
		let parent_source_id=""
		let event_code="e_1590075921343"
		let event_params={"caller_name":"navigation_search__cui_for_nav_search","event_desc":"CUI for Nav Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"need_reset_key_column":"N"}}
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
	navigation_search__spap_for_nav_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1605876075838"
		let event_params={"caller_name":"navigation_search__spap_for_nav_search","event_desc":"SPAP for Nav Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_nav_search","selector":"p_search_layout","profile_code":"BTL_1408_1585633277240","window_title":"Search","window_height":700,"window_width":"500px","window_close_icon":"Y","eventdes":"spap_for_nav_search","eventcode":"E_1605876075838"}}
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
	search_clear__cui_by_click_on_f_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1585745595296"
		let event_params={"caller_name":"search_clear__cui_by_click_on_f_search","event_desc":"CUI by click on F Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{}}
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
	search_search__cp_by_click_on() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587636373028"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__cp_by_click_on","event_desc":"CP by click on","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__ssp_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1592396247995"
		let event_params={"caller_name":"search_search__ssp_for_search","event_desc":"SSP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_search__brfq_for_queue_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__brfq_for_queue_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search"
		let destn_id="queue"
		let parent_source_id="search_search"
		let event_code="e_1592396262894"
		let event_params={"caller_name":"ssp_for_search__brfq_for_queue_list","event_desc":"BRFQ For queue list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_queue_list__cui_for_search,"
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for queue list"
	brfq_for_queue_list__cui_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_queue_list"
		let destn_id="transactions_list"
		let parent_source_id="ssp_for_search"
		let event_code="e_1592457846713"
		let event_params={"caller_name":"brfq_for_queue_list__cui_for_search","event_desc":"CUI for Search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"},"parent_event_result":"SUCCESS"}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__svm_process_group_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1589891308856"
		let event_params={"caller_name":"queue__svm_process_group_list","event_desc":"SVM Process Group List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_process_group_list__ssp_for_queue,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue"
	queue__se_for_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_create_pacs_008"
		let parent_source_id=""
		let event_code="e_1591625650903"
		let event_params={"caller_name":"queue__se_for_queue","event_desc":"SE for Queue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":""}}
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

	//Handler for INTERNAL event of "svm process group list"
	svm_process_group_list__ssp_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_process_group_list"
		let destn_id="search"
		let parent_source_id="queue"
		let event_code="e_1590559620229"
		let event_params={"caller_name":"svm_process_group_list__ssp_for_queue","event_desc":"SSP for Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_queue__brfq_for_queue,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for queue"
	ssp_for_queue__brfq_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_queue"
		let destn_id="transactions_list"
		let parent_source_id="svm_process_group_list"
		let event_code="e_1592409695907"
		let event_params={"caller_name":"ssp_for_queue__brfq_for_queue","event_desc":"BRFQ for Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "queue search search"
	queue_search_search__ssp_for_q_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_search_search"
		let destn_id="queue_search"
		let parent_source_id=""
		let event_code="e_1590067097727"
		let event_params={"caller_name":"queue_search_search__ssp_for_q_search","event_desc":"SSP for Q Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"queue_search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_q_search__brfq_by_click_on_queue_search,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "queue search search"
	queue_search_search__cp_for_q_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1590075010503"
		let event_params={"popup_info":{"context":""},"caller_name":"queue_search_search__cp_for_q_search","event_desc":"CP for Q Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"queue_search_search","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "queue search search"
	queue_search_search__cui_for_q_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_search_search"
		let destn_id="transactions_list"
		let parent_source_id=""
		let event_code="e_1590075087993"
		let event_params={"caller_name":"queue_search_search__cui_for_q_search","event_desc":"CUI for Q Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"queue_search_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for INTERNAL event of "ssp for q search"
	ssp_for_q_search__brfq_by_click_on_queue_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_q_search"
		let destn_id="queue"
		let parent_source_id="queue_search_search"
		let event_code="e_1590067114320"
		let event_params={"caller_name":"ssp_for_q_search__brfq_by_click_on_queue_search","event_desc":"BRFQ by click on Queue Search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue_search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "queue search clear"
	queue_search_clear__cui_for_q_clear() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_search_clear"
		let destn_id="queue_search"
		let parent_source_id=""
		let event_code="e_1590069515788"
		let event_params={"caller_name":"queue_search_clear__cui_for_q_clear","event_desc":"CUI for Q Clear","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"queue_search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation create pacs 008"
	navigation_create_pacs_008__efc_for_nav_create_pacs() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_create_pacs_008"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1652249236367"
		let event_params={"caller_name":"navigation_create_pacs_008__efc_for_nav_create_pacs","event_desc":"EFC for Nav Create pacs","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_create_pacs_008","raiseparam":{"file_group_code":"","hl_chaincode":"","hl_chaincode_function":"","hl_setup":""}}
		let handler_code="exg_file_creation"
		let internals="efc_for_nav_create_pacs__rs_for_nav_create_pacs,"
		let event_data={}
		let data_source={}
		try {
			this.handler.exg_file_creation(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "efc for nav create pacs"
	efc_for_nav_create_pacs__rs_for_nav_create_pacs(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="efc_for_nav_create_pacs"
		let destn_id=""
		let parent_source_id="navigation_create_pacs_008"
		let event_code="e_1652249290020"
		let event_params={"caller_name":"efc_for_nav_create_pacs__rs_for_nav_create_pacs","event_desc":"RS for Nav Create pacs","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_create_pacs_008","raiseparam":{},"parent_event_result":"SUCCESS"}
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
