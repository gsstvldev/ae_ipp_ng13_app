/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26712 
Modified By     : Admin 
Modified Date   : 2022-Oct-31 4:47 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_salary_verification
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_salary_verification',
	templateUrl: './s_salary_verification.component.html',
	styleUrls: ['./s_salary_verification.component.css'],
	providers:[torus_cs_show_hideService]
})
    
// Start of class 
export class s_salary_verificationComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_salary_verification"
	wftpa_id : string = "WFT_NPSS_P_1304_1665404146996_0"
	cg_code : string = "CG_1408_1652682087711"
	key_column : any = {}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_search_layout"
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
		this.queue.datasource = {}
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
		this.transaction_list.datasource = {}
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
		this.dynamic_form_search.views = {}
		this.dynamic_form_search.onChangecomponent = new EventEmitter<any>()
		this.dynamic_form_search.show = true
		this.dynamic_form_search.dynamic_param = {}
		this.dynamic_form_search.f_dynamic_form_search = {"show":true}
		this.dynamic_form_search.current_view = "f_dynamic_form_search"
		
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
		this.dynamic_form_search_search__cp_from_search()
	}

	//Handler for INTERNAL event of "ssp for queue search"
	ssp_for_queue_search__internal(parent_event_result){
		this.ssp_for_queue_search__brfq_for_queue_after_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation approve"
	navigation_approve__action_button_click(){
		this.navigation_approve__ips_cs_bulk_approve_ide_link()
	}

	//Handler for INTERNAL event of "ips cs bulk approve ide link"
	ips_cs_bulk_approve_ide_link__internal(parent_event_result){
		this.ips_cs_bulk_approve_ide_link__info_msg(parent_event_result)
	}

	//Handler for INTERNAL event of "info msg"
	info_msg__internal(parent_event_result){
		this.info_msg__rs_from_approve_btn(parent_event_result)
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
		let data_source={}
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
		let event_data={}
		let data_source={}
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

	//Handler for ACTION_BUTTON_CLICK event of "dynamic form search search"
	dynamic_form_search_search__cp_from_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="dynamic_form_search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1652417736034"
		let event_params={"popup_info":{"context":""},"caller_name":"dynamic_form_search_search__cp_from_search","event_desc":"CP from search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"dynamic_form_search_search","raiseparam":{}}
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
		let data_source={}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation approve"
	navigation_approve__ips_cs_bulk_approve_ide_link() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_approve"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1652680398056"
		let event_params={"caller_name":"navigation_approve__ips_cs_bulk_approve_ide_link","event_desc":"IPS (CS) Bulk Approve IDE link","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_approve","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="ips_cs_bulk_approve_ide_link__info_msg,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ips cs bulk approve ide link"
	ips_cs_bulk_approve_ide_link__info_msg(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ips_cs_bulk_approve_ide_link"
		let destn_id=""
		let parent_source_id="navigation_approve"
		let event_code="e_1652680435609"
		let event_params={"caller_name":"ips_cs_bulk_approve_ide_link__info_msg","event_desc":"Info msg","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Transaction(s) has been approved successfully.","root_source_id":"navigation_approve","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_msg__rs_from_approve_btn,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info msg"
	info_msg__rs_from_approve_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_msg"
		let destn_id=""
		let parent_source_id="ips_cs_bulk_approve_ide_link"
		let event_code="e_1652680515528"
		let event_params={"caller_name":"info_msg__rs_from_approve_btn","event_desc":"RS from approve btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_approve","raiseparam":{},"parent_event_result":"SUCCESS"}
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
