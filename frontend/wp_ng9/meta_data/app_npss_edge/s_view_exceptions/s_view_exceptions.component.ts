/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28958 
Modified By     : Admin 
Modified Date   : 2023-Mar-29 13:6 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_exceptions
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_view_exceptions',
	templateUrl: './s_view_exceptions.component.html',
	styleUrls: ['./s_view_exceptions.component.css'],
	providers:[torus_cs_show_hideService]
})
    
// Start of class 
export class s_view_exceptionsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_view_exceptions"
	wftpa_id : string = "WFT_NPSS_P_1304_1674130037363_0"
	cg_code : string = "CG_1304_1674123633168"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "list"
	uicgc_2 : string = "request_ui"
	uicgc_3 : string = "single_back_ui"
	uicgc_4 : string = "response_ui"
	uicgc_5 : string = "navigation_ui"
	uicgc_6 : string = "message_log"
	uicgc_7 : string = "error_log"
	uicgc_8 : string = "search"
	key_events : any = {}
	btl_1304_1674124589304 : string = "p_view_error_log_layout"
	btl_1304_1674124530048 : string = "p_view_message_log_layout"
	btl_1304_1674124490640 : string = "p_search_layout"
	btl_1304_1674124421354 : string = "p_view_main_req_and_res_layout"
	btl_1304_1674124392602 : string = "p_main_layout"
	forms : any = ["uicgc_6","uicgc_4","uicgc_8","uicgc_2","uicgc_7","uicgc_3","uicgc_5"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	list : any = {}
	request_ui : any = {}
	single_back_ui : any = {}
	single_back_ui_back : any = {}
	response_ui : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_req_and_res : any = {}
	navigation_ui_view_message_log : any = {}
	navigation_ui_view_error_log : any = {}
	message_log : any = {}
	error_log : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "List" 
		this.list.uictrl_code = "datatable"
		this.list.uicgc_desc = "List"
		this.list.uicgc_code = "uicgc_1"
		this.list.params = {"need_pag_datatable":"Y","advance_dynamic_search":"N","need_search":"N"}
		this.list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1674198360280":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1674198360280","dtt_desc":"NPSS Exceptions","ds_eligible":"DS_1674200356401","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Exception MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"UETR","alias_name":"","mq_id":"MQ_1674199515546","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1674199515808","date_format":false},{"column_name":"PROCESS_SYSTEM","alias_name":"","mq_id":"MQ_1674199516032","date_format":false},{"column_name":"CORE","alias_name":"","mq_id":"MQ_1674199516280","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1674199516504","date_format":true}],"joins":[]},"eq_text":"select NPSSE_ID,        UETR,        MESSAGE_DATA,        REQ_DATA,        RES_DATA,        ERR_DATACORE,        PROCESS_NAME,        PROCESS_SYSTEM,        TENANT_ID,        DT_CODE,        DTT_CODE,        CORE,        CREATED_DATE   from (select E.NPSSE_ID,                E.UETR,                E.MESSAGE_DATA,                E.REQ_DATA,                E.RES_DATA,                E.ERR_DATACORE,                E.PROCESS_NAME,                E.PROCESS_SYSTEM,                E.TENANT_ID,                E.DT_CODE,                E.DTT_CODE,                E.CREATED_DATE,                E.CORE           from NPSS_EXCEPTIONS E) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Exception CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESS_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Service Name","target_column":"CORE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.list.context_menu = []
		this.list.views = {}
		this.list.onChangecomponent = new EventEmitter<any>()
		this.list.show = true
		this.list.dynamic_param = {}
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_2"
		this.request_ui.params = {}
		this.request_ui.datasource = {}
		this.request_ui.context_menu = []
		this.request_ui.views = {"first":"DTT_1304_1674198360280","is_tab_mode":"N","dtt_1304_1674198360280":{"0":[{"dttv_id":"NPSS Excep Request UI","tab_order":0,"tab_name":"","uicgc_description":"Request UI","role_description":"default","dtt_description":"NPSS Exceptions"}]}}
		this.request_ui.onChangecomponent = new EventEmitter<any>()
		this.request_ui.show = true
		this.request_ui.dynamic_param = {}
		this.request_ui.f_npss_excep_request_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.request_ui.form_name = "f_npss_excep_request_ui"
	
		// Component level properties - "Single Back UI" 
		this.single_back_ui.uictrl_code = "dynamic_ui"
		this.single_back_ui.uicgc_desc = "Single Back UI"
		this.single_back_ui.uicgc_code = "uicgc_3"
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
		this.response_ui.uicgc_code = "uicgc_4"
		this.response_ui.params = {}
		this.response_ui.datasource = {}
		this.response_ui.context_menu = []
		this.response_ui.views = {"first":"DTT_1304_1674198360280","is_tab_mode":"N","dtt_1304_1674198360280":{"0":[{"dttv_id":"NPSS Excep Response UI","tab_order":0,"tab_name":"","uicgc_description":"Response UI","role_description":"default","dtt_description":"NPSS Exceptions"}]}}
		this.response_ui.onChangecomponent = new EventEmitter<any>()
		this.response_ui.show = true
		this.response_ui.dynamic_param = {}
		this.response_ui.f_npss_excep_response_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.response_ui.form_name = "f_npss_excep_response_ui"
	
		// Component level properties - "Navigation UI" 
		this.navigation_ui.uictrl_code = "dynamic_ui"
		this.navigation_ui.uicgc_desc = "Navigation UI"
		this.navigation_ui.uicgc_code = "uicgc_5"
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
		this.navigation_ui_search.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_ui_search.dynamic_param = {}
		this.navigation_ui_search.role = []
		this.navigation_ui_search.action = ""
		
		// "View Req and Res" Button of "Navigation UI" component
		this.navigation_ui_view_req_and_res.label_name = "View Req and Res"
		this.navigation_ui_view_req_and_res.show = true
		this.navigation_ui_view_req_and_res.disabled = true
		this.navigation_ui_view_req_and_res.params = {"icon_only":false,"uicgcc_style":"fa fa-expand"}
		this.navigation_ui_view_req_and_res.dynamic_param = {}
		this.navigation_ui_view_req_and_res.role = []
		this.navigation_ui_view_req_and_res.action = ""
		
		// "View Message Log" Button of "Navigation UI" component
		this.navigation_ui_view_message_log.label_name = "View Message Log"
		this.navigation_ui_view_message_log.show = true
		this.navigation_ui_view_message_log.disabled = true
		this.navigation_ui_view_message_log.params = {"icon_only":false,"uicgcc_style":"fa fa-expand"}
		this.navigation_ui_view_message_log.dynamic_param = {}
		this.navigation_ui_view_message_log.role = []
		this.navigation_ui_view_message_log.action = ""
		
		// "View Error Log" Button of "Navigation UI" component
		this.navigation_ui_view_error_log.label_name = "View Error Log"
		this.navigation_ui_view_error_log.show = true
		this.navigation_ui_view_error_log.disabled = true
		this.navigation_ui_view_error_log.params = {"icon_only":false,"uicgcc_style":"fa fa-expand"}
		this.navigation_ui_view_error_log.dynamic_param = {}
		this.navigation_ui_view_error_log.role = []
		this.navigation_ui_view_error_log.action = ""
	
		// Component level properties - "Message Log" 
		this.message_log.uictrl_code = "dynamic_ui"
		this.message_log.uicgc_desc = "Message Log"
		this.message_log.uicgc_code = "uicgc_6"
		this.message_log.params = {}
		this.message_log.datasource = {}
		this.message_log.context_menu = []
		this.message_log.views = {"first":"DTT_1304_1674198360280","is_tab_mode":"N","dtt_1304_1674198360280":{"0":[{"dttv_id":"NPSS Excep Message data UI","tab_order":0,"tab_name":"","uicgc_description":"Message Log","role_description":"default","dtt_description":"NPSS Exceptions"}]}}
		this.message_log.onChangecomponent = new EventEmitter<any>()
		this.message_log.show = true
		this.message_log.dynamic_param = {}
		this.message_log.f_npss_excep_message_data_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.message_log.form_name = "f_npss_excep_message_data_ui"
	
		// Component level properties - "Error Log" 
		this.error_log.uictrl_code = "dynamic_ui"
		this.error_log.uicgc_desc = "Error Log"
		this.error_log.uicgc_code = "uicgc_7"
		this.error_log.params = {}
		this.error_log.datasource = {}
		this.error_log.context_menu = []
		this.error_log.views = {"first":"DTT_1304_1674198360280","is_tab_mode":"N","dtt_1304_1674198360280":{"0":[{"dttv_id":"NPSS Excep Error UI","tab_order":0,"tab_name":"","uicgc_description":"Error Log","role_description":"default","dtt_description":"NPSS Exceptions"}]}}
		this.error_log.onChangecomponent = new EventEmitter<any>()
		this.error_log.show = true
		this.error_log.dynamic_param = {}
		this.error_log.f_npss_excep_error_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.error_log.form_name = "f_npss_excep_error_ui"
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_8"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1674198360280","is_tab_mode":"N","dtt_1304_1674198360280":{"0":[{"dttv_id":"NPSS Exceptions SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Exceptions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_exceptions_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_exceptions_srch"
		
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
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cc_for_sh_ide()
		this.page_load__de_for_vml()
		this.page_load__de_for_vel()
		this.page_load__de_for_view_req_and_res()
	}

	//Handler for INTERNAL event of "cc for sh ide"
	cc_for_sh_ide__internal(parent_event_result){
		this.cc_for_sh_ide__cf_for_cc(parent_event_result)
	}

	//Handler for INTERNAL event of "cf for cc"
	cf_for_cc__internal(parent_event_result){
		this.cf_for_cc__tbc_for_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__spap_for_search()
		this.navigation_ui_search__cu_for_seach()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view req and res"
	navigation_ui_view_req_and_res__action_button_click(){
		this.navigation_ui_view_req_and_res__bt_from_view_req_and_res_to_res()
		this.navigation_ui_view_req_and_res__bt_from_view_req_and_res_to_req()
		this.navigation_ui_view_req_and_res__sp_for_view_main_req_and_res_layout()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message log"
	navigation_ui_view_message_log__action_button_click(){
		this.navigation_ui_view_message_log__bt_main_tran_for_msg_log()
		this.navigation_ui_view_message_log__sp_for_msg_log()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view error log"
	navigation_ui_view_error_log__action_button_click(){
		this.navigation_ui_view_error_log__bt_for_error_log()
		this.navigation_ui_view_error_log__sp_for_view_err_log()
	}

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__action_button_click(){
		this.single_back_ui_back__sp_for_single_back_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cu_for_searchs()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_pl_queue()
		this.search_search__cp_aftersrch()
	}

	//Handler for INTERNAL event of "ssp for pl queue"
	ssp_for_pl_queue__internal(parent_event_result){
		this.ssp_for_pl_queue__brfq_for_list(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "list"
	list__selection_changed(){
		this.list__ee_for_vml()
		this.list__ee_for_view_req_and_res()
		this.list__ee_for_vel()
		this.list__e_1674131159713()
		this.list__e_1674131179736()
		this.list__e_1674131188393()
		this.list__e_1674131204264()
		this.list__svm_for_pll()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cc_for_sh_ide() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1674124687897"
		let event_params={"caller_name":"page_load__cc_for_sh_ide","event_desc":"CC for SH ide","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_sh_ide__cf_for_cc,"
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
	page_load__de_for_vml() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_message_log"
		let parent_source_id=""
		let event_code="e_1674125780996"
		let event_params={"caller_name":"page_load__de_for_vml","event_desc":"DE FOR VML","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_vel() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_error_log"
		let parent_source_id=""
		let event_code="e_1674125818353"
		let event_params={"caller_name":"page_load__de_for_vel","event_desc":"DE FOR VEL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_view_req_and_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1674125845825"
		let event_params={"caller_name":"page_load__de_for_view_req_and_res","event_desc":"DE FOR VIEW REQ AND RES","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for INTERNAL event of "cc for sh ide"
	cc_for_sh_ide__cf_for_cc(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_sh_ide"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1674124731169"
		let event_params={"caller_name":"cc_for_sh_ide__cf_for_cc","event_desc":"CF for CC","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""},"parent_event_result":"SUCCESS"}
		let handler_code="create_form"
		let internals="cf_for_cc__tbc_for_search,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cf for cc"
	cf_for_cc__tbc_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_for_cc"
		let destn_id="search_search"
		let parent_source_id="cc_for_sh_ide"
		let event_code="e_1674124786073"
		let event_params={"caller_name":"cf_for_cc__tbc_for_search","event_desc":"TBC for Search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__spap_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1674124866203"
		let event_params={"caller_name":"navigation_ui_search__spap_for_search","event_desc":"SPAP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1674124490640","window_title":"Search","window_height":500,"window_width":"800px","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1674124866203"}}
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
		let event_code="e_1674124899662"
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view req and res"
	navigation_ui_view_req_and_res__bt_from_view_req_and_res_to_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_req_and_res"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1674125020546"
		let event_params={"caller_name":"navigation_ui_view_req_and_res__bt_from_view_req_and_res_to_res","event_desc":"BT from View Req and Res to Res","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view req and res"
	navigation_ui_view_req_and_res__bt_from_view_req_and_res_to_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_req_and_res"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1674125045426"
		let event_params={"caller_name":"navigation_ui_view_req_and_res__bt_from_view_req_and_res_to_req","event_desc":"BT from View Req and Res to Req","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view req and res"
	navigation_ui_view_req_and_res__sp_for_view_main_req_and_res_layout() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1674125091302"
		let event_params={"caller_name":"navigation_ui_view_req_and_res__sp_for_view_main_req_and_res_layout","event_desc":"SP for view main req and res layout","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1674124421354"}}
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
	navigation_ui_view_message_log__bt_main_tran_for_msg_log() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_log"
		let destn_id="message_log"
		let parent_source_id=""
		let event_code="e_1674125183853"
		let event_params={"caller_name":"navigation_ui_view_message_log__bt_main_tran_for_msg_log","event_desc":"BT Main Tran for msg log","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message log"
	navigation_ui_view_message_log__sp_for_msg_log() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1674125229541"
		let event_params={"caller_name":"navigation_ui_view_message_log__sp_for_msg_log","event_desc":"SP for msg log","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{"profile_code":"BTL_1304_1674124530048"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view error log"
	navigation_ui_view_error_log__bt_for_error_log() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_error_log"
		let destn_id="error_log"
		let parent_source_id=""
		let event_code="e_1674125268681"
		let event_params={"caller_name":"navigation_ui_view_error_log__bt_for_error_log","event_desc":"BT for error log","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_error_log","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view error log"
	navigation_ui_view_error_log__sp_for_view_err_log() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_error_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1674125301312"
		let event_params={"caller_name":"navigation_ui_view_error_log__sp_for_view_err_log","event_desc":"SP FOR VIEW ERR LOG","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_error_log","raiseparam":{"profile_code":"BTL_1304_1674124589304"}}
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
	single_back_ui_back__sp_for_single_back_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="single_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1674125376512"
		let event_params={"caller_name":"single_back_ui_back__sp_for_single_back_ui","event_desc":"SP FOR SINGLE BACK UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"single_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1674124392602"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cu_for_searchs() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1674125455964"
		let event_params={"caller_name":"search_clear__cu_for_searchs","event_desc":"CU for searchs","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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
	search_search__ssp_for_pl_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1674125610778"
		let event_params={"caller_name":"search_search__ssp_for_pl_queue","event_desc":"SSP for PL Queue","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_pl_queue__brfq_for_list,"
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
	search_search__cp_aftersrch() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1674130854521"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__cp_aftersrch","event_desc":"cp aftersrch","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for INTERNAL event of "ssp for pl queue"
	ssp_for_pl_queue__brfq_for_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_pl_queue"
		let destn_id="list"
		let parent_source_id="search_search"
		let event_code="e_1674125640097"
		let event_params={"caller_name":"ssp_for_pl_queue__brfq_for_list","event_desc":"BRFQ for list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1674198360280":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1674198360280","dtt_desc":"NPSS Exceptions","ds_eligible":"DS_1674200356401","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Exception MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"UETR","alias_name":"","mq_id":"MQ_1674199515546","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1674199515808","date_format":false},{"column_name":"PROCESS_SYSTEM","alias_name":"","mq_id":"MQ_1674199516032","date_format":false},{"column_name":"CORE","alias_name":"","mq_id":"MQ_1674199516280","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1674199516504","date_format":true}],"joins":[]},"eq_text":"select NPSSE_ID,        UETR,        MESSAGE_DATA,        REQ_DATA,        RES_DATA,        ERR_DATACORE,        PROCESS_NAME,        PROCESS_SYSTEM,        TENANT_ID,        DT_CODE,        DTT_CODE,        CORE,        CREATED_DATE   from (select E.NPSSE_ID,                E.UETR,                E.MESSAGE_DATA,                E.REQ_DATA,                E.RES_DATA,                E.ERR_DATACORE,                E.PROCESS_NAME,                E.PROCESS_SYSTEM,                E.TENANT_ID,                E.DT_CODE,                E.DTT_CODE,                E.CREATED_DATE,                E.CORE           from NPSS_EXCEPTIONS E) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Exception CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESS_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Service Name","target_column":"CORE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "list"
	list__ee_for_vml() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="navigation_ui_view_message_log"
		let parent_source_id=""
		let event_code="e_1674125889126"
		let event_params={"caller_name":"list__ee_for_vml","event_desc":"EE FOR VML","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__ee_for_view_req_and_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="navigation_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1674125915100"
		let event_params={"caller_name":"list__ee_for_view_req_and_res","event_desc":"EE FOR VIEW REQ AND RES","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__ee_for_vel() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="navigation_ui_view_error_log"
		let parent_source_id=""
		let event_code="e_1674125958884"
		let event_params={"caller_name":"list__ee_for_vel","event_desc":"EE FOR VEL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__e_1674131159713() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1674131159713"
		let event_params={"caller_name":"list__e_1674131159713","event_desc":"E_1674131159713","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__e_1674131179736() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="error_log"
		let parent_source_id=""
		let event_code="e_1674131179736"
		let event_params={"caller_name":"list__e_1674131179736","event_desc":"E_1674131179736","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__e_1674131188393() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1674131188393"
		let event_params={"caller_name":"list__e_1674131188393","event_desc":"E_1674131188393","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__e_1674131204264() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="message_log"
		let parent_source_id=""
		let event_code="e_1674131204264"
		let event_params={"caller_name":"list__e_1674131204264","event_desc":"E_1674131204264","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__svm_for_pll() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="list"
		let parent_source_id=""
		let event_code="e_1674189293669"
		let event_params={"caller_name":"list__svm_for_pll","event_desc":"SVM for PLL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"list":{"e_1674189293669":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1674189293669","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Exceptions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PROCESS_NAME","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_NAME","setd3name":"PROCESS_NAME"},{"type":"LOCAL","column_name":"PROCESS_SYSTEM","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_SYSTEM","setd3name":"PROCESS_SYSTEM"},{"type":"LOCAL","column_name":"NPSSE_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSE_ID","setd3name":"NPSSE_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1674198360280":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1674198360280","dtt_desc":"NPSS Exceptions","ds_eligible":"DS_1674200356401","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Exception MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"UETR","alias_name":"","mq_id":"MQ_1674199515546","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1674199515808","date_format":false},{"column_name":"PROCESS_SYSTEM","alias_name":"","mq_id":"MQ_1674199516032","date_format":false},{"column_name":"CORE","alias_name":"","mq_id":"MQ_1674199516280","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1674199516504","date_format":true}],"joins":[]},"eq_text":"select NPSSE_ID,        UETR,        MESSAGE_DATA,        REQ_DATA,        RES_DATA,        ERR_DATACORE,        PROCESS_NAME,        PROCESS_SYSTEM,        TENANT_ID,        DT_CODE,        DTT_CODE,        CORE,        CREATED_DATE   from (select E.NPSSE_ID,                E.UETR,                E.MESSAGE_DATA,                E.REQ_DATA,                E.RES_DATA,                E.ERR_DATACORE,                E.PROCESS_NAME,                E.PROCESS_SYSTEM,                E.TENANT_ID,                E.DT_CODE,                E.DTT_CODE,                E.CREATED_DATE,                E.CORE           from NPSS_EXCEPTIONS E) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Exception CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESS_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Service Name","target_column":"CORE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
