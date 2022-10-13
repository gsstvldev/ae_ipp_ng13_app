/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26431 
Modified By     : Admin 
Modified Date   : 2022-Oct-13 9:46 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rule_template_setup
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'

@Component({
	selector: 's_rule_template_setup',
	templateUrl: './s_rule_template_setup.component.html',
	styleUrls: ['./s_rule_template_setup.component.css'],
	providers:[]
})
    
// Start of class 
export class s_rule_template_setupComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_rule_template_setup"
	wftpa_id : string = "WFT_NPSS_P_1304_1665653147871_0"
	cg_code : string = "CG_1304_1665653015009"
	key_column : any = {"dtt_1304_1665647734603":"NPSSRS_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_list_layout"
	uicgc_1 : string = "list"
	uicgc_2 : string = "data_entry"
	uicgc_3 : string = "navigation"
	uicgc_4 : string = "search"
	key_events : any = {}
	btl_1304_1659444748103 : string = "p_search_layout"
	btl_1304_1659444672840 : string = "p_data_entry_layout"
	btl_1304_1659439061594 : string = "p_list_layout"
	forms : any = ["uicgc_4","uicgc_2","uicgc_3"]
	p_search_layout__spap_by_click_on_list_search_showpopup : boolean = false
	list : any = {}
	data_entry : any = {}
	data_entry_back : any = {}
	data_entry_clear : any = {}
	data_entry_save : any = {}
	data_entry_edit : any = {}
	data_entry_delete : any = {}
	navigation : any = {}
	navigation_clear : any = {}
	navigation_view : any = {}
	navigation_add : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ) {
    
	}
    
	ngOnInit() {

		// Component level properties - "List" 
		this.list.uictrl_code = "datatable"
		this.list.uicgc_desc = "List"
		this.list.uicgc_code = "uicgc_1"
		this.list.params = {"need_pag_datatable":"Y","view_all":"Y","need_search":"N","advance_dynamic_search":"Y"}
		this.list.datasource = {"default":{"dt_1304_1665647665115":{"dtt_1304_1665647734603":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665647665115","dt_desc":"Master Data Template Group","dtt_code":"DTT_1304_1665647734603","dtt_desc":"NPSS Rule Setup","ds_eligible":"DS_1665653329787","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Rule Setup MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"RULE_CODE","alias_name":"","mq_id":"MQ_1665648613055","date_format":false},{"column_name":"RULE_NAME","alias_name":"","mq_id":"MQ_1665648613326","date_format":false}],"joins":[]},"eq_text":"SELECT   npssrs_id,          rule_code,          rule_name,          created_by_name,          created_date,          dt_code,          dtt_code,          tenant_id,          process_status,          status,          system_id,          system_name FROM     (                 SELECT a.npssrs_id,                        a.rule_code,                        a.rule_name,                        a.created_by_name,                        a.created_date,                        a.tenant_id,                        a.dt_code,                        a.dtt_code,                        a.status,                        a.process_status,                        a.param_setup,                        a.system_id,                        a.system_name                 FROM   npss_rule_setup a) V ORDER BY npssrs_id $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Rule Setup MQ CCD","filter":[],"databinding":[{"header":"Rule Code","target_column":"RULE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Rule Name","target_column":"RULE_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.list.context_menu = []
		this.list.views = {}
		this.list.onChangecomponent = new EventEmitter<any>()
		this.list.show = true
		this.list.dynamic_param = {}
	
		// Component level properties - "Data Entry" 
		this.data_entry.uictrl_code = "dynamic_ui"
		this.data_entry.uicgc_desc = "Data Entry"
		this.data_entry.uicgc_code = "uicgc_2"
		this.data_entry.params = {}
		this.data_entry.datasource = {}
		this.data_entry.context_menu = []
		this.data_entry.views = {"first":"DTT_1304_1665647734603","is_tab_mode":"N","dtt_1304_1665647734603":{"0":[{"dttv_id":"Rule Setup UI","tab_order":0,"tab_name":"","uicgc_description":"Data Entry","role_description":"default","dtt_description":"NPSS Rule Setup"}]}}
		this.data_entry.onChangecomponent = new EventEmitter<any>()
		this.data_entry.show = true
		this.data_entry.dynamic_param = {}
		this.data_entry.f_rule_setup_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.data_entry.form_name = "f_rule_setup_ui"
		
		// "Back" Button of "Data Entry" component
		this.data_entry_back.label_name = "Back"
		this.data_entry_back.show = true
		this.data_entry_back.disabled = false
		this.data_entry_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.data_entry_back.dynamic_param = {}
		this.data_entry_back.role = []
		this.data_entry_back.action = ""
		
		// "Clear" Button of "Data Entry" component
		this.data_entry_clear.label_name = "Clear"
		this.data_entry_clear.show = true
		this.data_entry_clear.disabled = false
		this.data_entry_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.data_entry_clear.dynamic_param = {}
		this.data_entry_clear.role = []
		this.data_entry_clear.action = ""
		
		// "Save" Button of "Data Entry" component
		this.data_entry_save.label_name = "Save"
		this.data_entry_save.show = true
		this.data_entry_save.disabled = false
		this.data_entry_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.data_entry_save.dynamic_param = {}
		this.data_entry_save.role = []
		this.data_entry_save.action = ""
		
		// "Edit" Button of "Data Entry" component
		this.data_entry_edit.label_name = "Edit"
		this.data_entry_edit.show = true
		this.data_entry_edit.disabled = false
		this.data_entry_edit.params = {"icon_only":false,"uicgcc_style":"fa fa-pencil-square-o"}
		this.data_entry_edit.dynamic_param = {}
		this.data_entry_edit.role = []
		this.data_entry_edit.action = ""
		
		// "Delete" Button of "Data Entry" component
		this.data_entry_delete.label_name = "Delete"
		this.data_entry_delete.show = true
		this.data_entry_delete.disabled = false
		this.data_entry_delete.params = {"icon_only":false,"uicgcc_style":"fa fa-trash"}
		this.data_entry_delete.dynamic_param = {}
		this.data_entry_delete.role = []
		this.data_entry_delete.action = ""
	
		// Component level properties - "Navigation" 
		this.navigation.uictrl_code = "dynamic_ui"
		this.navigation.uicgc_desc = "Navigation"
		this.navigation.uicgc_code = "uicgc_3"
		this.navigation.params = {}
		this.navigation.datasource = {}
		this.navigation.context_menu = []
		this.navigation.views = {}
		this.navigation.onChangecomponent = new EventEmitter<any>()
		this.navigation.show = true
		this.navigation.dynamic_param = {}
		this.navigation.f_navigation = {"show":true}
		this.navigation.current_view = "f_navigation"
		
		// "Clear" Button of "Navigation" component
		this.navigation_clear.label_name = "Clear"
		this.navigation_clear.show = true
		this.navigation_clear.disabled = false
		this.navigation_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.navigation_clear.dynamic_param = {}
		this.navigation_clear.role = []
		this.navigation_clear.action = ""
		
		// "View" Button of "Navigation" component
		this.navigation_view.label_name = "View"
		this.navigation_view.show = true
		this.navigation_view.disabled = true
		this.navigation_view.params = {"icon_only":false,"uicgcc_style":"fa fa-eye-slash"}
		this.navigation_view.dynamic_param = {}
		this.navigation_view.role = []
		this.navigation_view.action = ""
		
		// "Add" Button of "Navigation" component
		this.navigation_add.label_name = "Add"
		this.navigation_add.show = true
		this.navigation_add.disabled = false
		this.navigation_add.params = {"icon_only":false,"uicgcc_style":"fa fa-plus"}
		this.navigation_add.dynamic_param = {}
		this.navigation_add.role = []
		this.navigation_add.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665647734603","is_tab_mode":"N","dtt_1304_1665647734603":{"0":[{"dttv_id":"Rule Setup SCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Rule Setup"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_rule_setup_sch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_rule_setup_sch"
		
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
		let peventcontext:any=undefined;
 			if(!peventcontext) { 
 			peventcontext = this.page_load__sec_by_click_on_pl()
		 }
		this.page_load__cf_by_click_on_page_load()
		this.page_load__brfq_on_page_loads()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation add"
	navigation_add__action_button_click(){
		this.navigation_add__sp_by_click_on_add_action()
		this.navigation_add__he_by_click_on_nvg_edit_action()
		this.navigation_add__se_by_click_on_nvg_add_to_save_action()
		this.navigation_add__ee_by_click_on_nvg_add_to_data_entry()
		this.navigation_add__he_by_click_on_add_actions_to_delete_actions()
		this.navigation_add__ee_by_click_on_add_actions()
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry back"
	data_entry_back__action_button_click(){
		this.data_entry_back__rs_by_click_on_back_actions()
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry delete"
	data_entry_delete__action_button_click(){
		this.data_entry_delete__confo_msg_for_delete()
	}

	//Handler for INTERNAL event of "confo msg for delete"
	confo_msg_for_delete__internal(parent_event_result){
		this.confo_msg_for_delete__dt_by_click_on_confs_msg(parent_event_result)
	}

	//Handler for INTERNAL event of "dt by click on confs msg"
	dt_by_click_on_confs_msg__internal(parent_event_result){
		this.dt_by_click_on_confs_msg__info_msg_for_dt(parent_event_result)
	}

	//Handler for INTERNAL event of "info msg for dt"
	info_msg_for_dt__internal(parent_event_result){
		this.info_msg_for_dt__ref_scrn(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__action_button_click(){
		this.data_entry_edit__he_by_click_on_edit_action()
		this.data_entry_edit__he_for_de_edit_to_de_clr()
		this.data_entry_edit__ee_by_click_on_edit_action()
		this.data_entry_edit__se_by_click_on_edit_to_save__action()
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry save"
	data_entry_save__action_button_click(){
		this.data_entry_save__ve_by_click_on_save_button()
	}

	//Handler for INTERNAL event of "ve by click on save button"
	ve_by_click_on_save_button__internal(parent_event_result){
		this.ve_by_click_on_save_button__st_by_click_on_save_action(parent_event_result)
	}

	//Handler for INTERNAL event of "st by click on save action"
	st_by_click_on_save_action__internal(parent_event_result){
		this.st_by_click_on_save_action__im_by_click_on_save_action(parent_event_result)
	}

	//Handler for INTERNAL event of "im by click on save action"
	im_by_click_on_save_action__internal(parent_event_result){
		this.im_by_click_on_save_action__rs_after_save_success(parent_event_result)
	}

	//Handler for FILTER_CLICK event of "list"
	list__filter_click(){
		this.list__spap_by_click_on_list_search()
	}

	//Handler for SELECTION_CHANGED event of "list"
	list__selection_changed(){
		this.list__ee_by_click_on_list_to_view_action()
		this.list__de_by_click_on_list_to_add_action()
		this.list__ssr_for_the_list_to_data_entry()
		this.list__bt_to_view_record()
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry clear"
	data_entry_clear__action_button_click(){
		this.data_entry_clear__clear_in_data_entry()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__action_button_click(){
		this.navigation_view__sp_by_click_on_nvg_view_action()
		this.navigation_view__de_by_click_on_nvg_view_to_data_entry()
		this.navigation_view__he_by_click_on_nvg_view_to_de_save()
		this.navigation_view__se_by_click_on_nvg_view_to_edit_action()
		this.navigation_view__vw_to_delete_show()
		this.navigation_view__he_for_navi_vw_to_dataentry_clr()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__action_button_click(){
		this.navigation_clear__rc_after_clear_on_page_load()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_search_to_list()
		this.search_search__cpp_search_button()
	}

	//Handler for INTERNAL event of "ssp search to list"
	ssp_search_to_list__internal(){
		this.ssp_search_to_list__brfq_for_ssp_to_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__c_ui_for_dyn_form_search()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__sec_by_click_on_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1659439773437"
		let event_params={"caller_name":"page_load__sec_by_click_on_pl","event_desc":"SEC by click on PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="set_event_context"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			return this.handler.set_event_context(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__cf_by_click_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1659439325864"
		let event_params={"caller_name":"page_load__cf_by_click_on_page_load","event_desc":"CF by click on Page Load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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
	page_load__brfq_on_page_loads() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="list"
		let parent_source_id=""
		let event_code="e_1659439371263"
		let event_params={"caller_name":"page_load__brfq_on_page_loads","event_desc":"BRFQ on Page Loads","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665647665115":{"dtt_1304_1665647734603":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665647665115","dt_desc":"Master Data Template Group","dtt_code":"DTT_1304_1665647734603","dtt_desc":"NPSS Rule Setup","ds_eligible":"DS_1665653329787","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Rule Setup MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"RULE_CODE","alias_name":"","mq_id":"MQ_1665648613055","date_format":false},{"column_name":"RULE_NAME","alias_name":"","mq_id":"MQ_1665648613326","date_format":false}],"joins":[]},"eq_text":"SELECT   npssrs_id,          rule_code,          rule_name,          created_by_name,          created_date,          dt_code,          dtt_code,          tenant_id,          process_status,          status,          system_id,          system_name FROM     (                 SELECT a.npssrs_id,                        a.rule_code,                        a.rule_name,                        a.created_by_name,                        a.created_date,                        a.tenant_id,                        a.dt_code,                        a.dtt_code,                        a.status,                        a.process_status,                        a.param_setup,                        a.system_id,                        a.system_name                 FROM   npss_rule_setup a) V ORDER BY npssrs_id $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Rule Setup MQ CCD","filter":[],"databinding":[{"header":"Rule Code","target_column":"RULE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Rule Name","target_column":"RULE_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation add"
	navigation_add__sp_by_click_on_add_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1659440245714"
		let event_params={"caller_name":"navigation_add__sp_by_click_on_add_action","event_desc":"SP by click on add Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add","raiseparam":{"profile_code":"BTL_1304_1659444672840"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add"
	navigation_add__he_by_click_on_nvg_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add"
		let destn_id="data_entry_edit"
		let parent_source_id=""
		let event_code="e_1659440300763"
		let event_params={"caller_name":"navigation_add__he_by_click_on_nvg_edit_action","event_desc":"HE by click on NVG Edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add"
	navigation_add__se_by_click_on_nvg_add_to_save_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add"
		let destn_id="data_entry_save"
		let parent_source_id=""
		let event_code="e_1659440374320"
		let event_params={"caller_name":"navigation_add__se_by_click_on_nvg_add_to_save_action","event_desc":"SE by click on NVG Add to Save Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add"
	navigation_add__ee_by_click_on_nvg_add_to_data_entry() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1659440405192"
		let event_params={"caller_name":"navigation_add__ee_by_click_on_nvg_add_to_data_entry","event_desc":"EE by click on NVG Add to Data Entry","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add"
	navigation_add__he_by_click_on_add_actions_to_delete_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add"
		let destn_id="data_entry_delete"
		let parent_source_id=""
		let event_code="e_1659440432136"
		let event_params={"caller_name":"navigation_add__he_by_click_on_add_actions_to_delete_actions","event_desc":"HE by click on Add Actions to Delete actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add"
	navigation_add__ee_by_click_on_add_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add"
		let destn_id="data_entry_clear"
		let parent_source_id=""
		let event_code="e_1659440471031"
		let event_params={"caller_name":"navigation_add__ee_by_click_on_add_actions","event_desc":"EE by click on Add actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry back"
	data_entry_back__rs_by_click_on_back_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1659441104338"
		let event_params={"caller_name":"data_entry_back__rs_by_click_on_back_actions","event_desc":"RS by click on Back actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry delete"
	data_entry_delete__confo_msg_for_delete() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_delete"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1659441527199"
		let event_params={"caller_name":"data_entry_delete__confo_msg_for_delete","event_desc":"Confo_Msg for Delete","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Are you sure that you want to permanently delete the selected record?","root_source_id":"data_entry_delete","raiseparam":{"conf_msg":""}}
		let handler_code="conf_msg"
		let internals="confo_msg_for_delete__dt_by_click_on_confs_msg,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "confo msg for delete"
	confo_msg_for_delete__dt_by_click_on_confs_msg(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="confo_msg_for_delete"
		let destn_id="list"
		let parent_source_id="data_entry_delete"
		let event_code="e_1659441563487"
		let event_params={"caller_name":"confo_msg_for_delete__dt_by_click_on_confs_msg","event_desc":"DT by click on confs msg","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_delete","raiseparam":{"conf_msg":"","info_msg":"Selected record has been deleted."},"parent_event_result":"YES"}
		let handler_code="delete_tran"
		let internals="dt_by_click_on_confs_msg__info_msg_for_dt,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665647665115":{"dtt_1304_1665647734603":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665647665115","dt_desc":"Master Data Template Group","dtt_code":"DTT_1304_1665647734603","dtt_desc":"NPSS Rule Setup","ds_eligible":"DS_1665653329787","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Rule Setup MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"RULE_CODE","alias_name":"","mq_id":"MQ_1665648613055","date_format":false},{"column_name":"RULE_NAME","alias_name":"","mq_id":"MQ_1665648613326","date_format":false}],"joins":[]},"eq_text":"SELECT   npssrs_id,          rule_code,          rule_name,          created_by_name,          created_date,          dt_code,          dtt_code,          tenant_id,          process_status,          status,          system_id,          system_name FROM     (                 SELECT a.npssrs_id,                        a.rule_code,                        a.rule_name,                        a.created_by_name,                        a.created_date,                        a.tenant_id,                        a.dt_code,                        a.dtt_code,                        a.status,                        a.process_status,                        a.param_setup,                        a.system_id,                        a.system_name                 FROM   npss_rule_setup a) V ORDER BY npssrs_id $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Rule Setup MQ CCD","filter":[],"databinding":[{"header":"Rule Code","target_column":"RULE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Rule Name","target_column":"RULE_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.delete_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "dt by click on confs msg"
	dt_by_click_on_confs_msg__info_msg_for_dt(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="dt_by_click_on_confs_msg"
		let destn_id=""
		let parent_source_id="confo_msg_for_delete"
		let event_code="e_1661491416385"
		let event_params={"caller_name":"dt_by_click_on_confs_msg__info_msg_for_dt","event_desc":"Info msg for DT","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"The record has been deleted successfully","root_source_id":"data_entry_delete","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_msg_for_dt__ref_scrn,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info msg for dt"
	info_msg_for_dt__ref_scrn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_msg_for_dt"
		let destn_id=""
		let parent_source_id="dt_by_click_on_confs_msg"
		let event_code="e_1661494581720"
		let event_params={"caller_name":"info_msg_for_dt__ref_scrn","event_desc":"Ref scrn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_delete","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__he_by_click_on_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_edit"
		let destn_id="data_entry_edit"
		let parent_source_id=""
		let event_code="e_1659441746638"
		let event_params={"caller_name":"data_entry_edit__he_by_click_on_edit_action","event_desc":"HE by click on Edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_edit","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__he_for_de_edit_to_de_clr() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_edit"
		let destn_id="data_entry_clear"
		let parent_source_id=""
		let event_code="e_1659441787254"
		let event_params={"caller_name":"data_entry_edit__he_for_de_edit_to_de_clr","event_desc":"HE for DE_Edit to DE_Clr","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__ee_by_click_on_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_edit"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1659441810006"
		let event_params={"caller_name":"data_entry_edit__ee_by_click_on_edit_action","event_desc":"EE by click on edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_edit","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__se_by_click_on_edit_to_save__action() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_edit"
		let destn_id="data_entry_save"
		let parent_source_id=""
		let event_code="e_1659441864133"
		let event_params={"caller_name":"data_entry_edit__se_by_click_on_edit_to_save__action","event_desc":"SE by click on edit to save  Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry save"
	data_entry_save__ve_by_click_on_save_button() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_save"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1659442174699"
		let event_params={"caller_name":"data_entry_save__ve_by_click_on_save_button","event_desc":"VE by click on save button","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_by_click_on_save_button__st_by_click_on_save_action,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve by click on save button"
	ve_by_click_on_save_button__st_by_click_on_save_action(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_by_click_on_save_button"
		let destn_id="data_entry"
		let parent_source_id="data_entry_save"
		let event_code="e_1659442200674"
		let event_params={"caller_name":"ve_by_click_on_save_button__st_by_click_on_save_action","event_desc":"ST by click on save Action","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"Y"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_by_click_on_save_action__im_by_click_on_save_action,"
		let event_data={}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "st by click on save action"
	st_by_click_on_save_action__im_by_click_on_save_action(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="st_by_click_on_save_action"
		let destn_id=""
		let parent_source_id="ve_by_click_on_save_button"
		let event_code="e_1659442307424"
		let event_params={"caller_name":"st_by_click_on_save_action__im_by_click_on_save_action","event_desc":"IM by click on save Action","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Data has been saved successfully!","root_source_id":"data_entry_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_by_click_on_save_action__rs_after_save_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im by click on save action"
	im_by_click_on_save_action__rs_after_save_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_by_click_on_save_action"
		let destn_id=""
		let parent_source_id="st_by_click_on_save_action"
		let event_code="e_1660906072426"
		let event_params={"caller_name":"im_by_click_on_save_action__rs_after_save_success","event_desc":"RS after Save Success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for FILTER_CLICK event of "list"
	list__spap_by_click_on_list_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1659442704263"
		let event_params={"caller_name":"list__spap_by_click_on_list_search","event_desc":"SPAP by click on List search","event_type":"FILTER_CLICK","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_by_click_on_list_search","selector":"p_search_layout","profile_code":"BTL_1304_1659444748103","window_title":"Search","window_height":400,"window_width":"650px","window_close_icon":"Y","eventdes":"spap_by_click_on_list_search","eventcode":"E_1659442704263"}}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__ee_by_click_on_list_to_view_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="navigation_view"
		let parent_source_id=""
		let event_code="e_1659442866926"
		let event_params={"caller_name":"list__ee_by_click_on_list_to_view_action","event_desc":"EE by click on list to view Action","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	list__de_by_click_on_list_to_add_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="navigation_add"
		let parent_source_id=""
		let event_code="e_1659443209051"
		let event_params={"caller_name":"list__de_by_click_on_list_to_add_action","event_desc":"DE by click on list to add Action","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__ssr_for_the_list_to_data_entry() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1659443328714"
		let event_params={"caller_name":"list__ssr_for_the_list_to_data_entry","event_desc":"SSR for the List to Data Entry","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{}}
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
	list__bt_to_view_record() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1659517793483"
		let event_params={"caller_name":"list__bt_to_view_record","event_desc":"BT to view record","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry clear"
	data_entry_clear__clear_in_data_entry() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_clear"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1659443570992"
		let event_params={"caller_name":"data_entry_clear__clear_in_data_entry","event_desc":"clear in data entry","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__sp_by_click_on_nvg_view_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1659443690487"
		let event_params={"caller_name":"navigation_view__sp_by_click_on_nvg_view_action","event_desc":"SP by click on NVG view Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"profile_code":"BTL_1304_1659444672840"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__de_by_click_on_nvg_view_to_data_entry() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1659443883054"
		let event_params={"caller_name":"navigation_view__de_by_click_on_nvg_view_to_data_entry","event_desc":"DE by click on NVG view to Data Entry","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__he_by_click_on_nvg_view_to_de_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry_save"
		let parent_source_id=""
		let event_code="e_1659443910381"
		let event_params={"caller_name":"navigation_view__he_by_click_on_nvg_view_to_de_save","event_desc":"HE by click on NVG view to DE Save","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__se_by_click_on_nvg_view_to_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry_edit"
		let parent_source_id=""
		let event_code="e_1659443930261"
		let event_params={"caller_name":"navigation_view__se_by_click_on_nvg_view_to_edit_action","event_desc":"SE by click on NVG view to Edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__vw_to_delete_show() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry_delete"
		let parent_source_id=""
		let event_code="e_1659444001934"
		let event_params={"caller_name":"navigation_view__vw_to_delete_show","event_desc":"VW To delete show","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__he_for_navi_vw_to_dataentry_clr() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry_clear"
		let parent_source_id=""
		let event_code="e_1659444032588"
		let event_params={"caller_name":"navigation_view__he_for_navi_vw_to_dataentry_clr","event_desc":"HE for Navi_Vw to Dataentry_Clr","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__rc_after_clear_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1660906920751"
		let event_params={"caller_name":"navigation_clear__rc_after_clear_on_page_load","event_desc":"RC after clear on page load","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__ssp_search_to_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1659444563008"
		let event_params={"caller_name":"search_search__ssp_search_to_list","event_desc":"SSP Search to List","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_search_to_list__brfq_for_ssp_to_list,"
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
	search_search__cpp_search_button() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1659444603281"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__cpp_search_button","event_desc":"CPP Search button","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for INTERNAL event of "ssp search to list"
	ssp_search_to_list__brfq_for_ssp_to_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="ssp_search_to_list"
		let destn_id="list"
		let parent_source_id="search_search"
		let event_code="e_1659444580776"
		let event_params={"caller_name":"ssp_search_to_list__brfq_for_ssp_to_list","event_desc":"BRFQ for SSP to List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665647665115":{"dtt_1304_1665647734603":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665647665115","dt_desc":"Master Data Template Group","dtt_code":"DTT_1304_1665647734603","dtt_desc":"NPSS Rule Setup","ds_eligible":"DS_1665653329787","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Rule Setup MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"RULE_CODE","alias_name":"","mq_id":"MQ_1665648613055","date_format":false},{"column_name":"RULE_NAME","alias_name":"","mq_id":"MQ_1665648613326","date_format":false}],"joins":[]},"eq_text":"SELECT   npssrs_id,          rule_code,          rule_name,          created_by_name,          created_date,          dt_code,          dtt_code,          tenant_id,          process_status,          status,          system_id,          system_name FROM     (                 SELECT a.npssrs_id,                        a.rule_code,                        a.rule_name,                        a.created_by_name,                        a.created_date,                        a.tenant_id,                        a.dt_code,                        a.dtt_code,                        a.status,                        a.process_status,                        a.param_setup,                        a.system_id,                        a.system_name                 FROM   npss_rule_setup a) V ORDER BY npssrs_id $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Rule Setup MQ CCD","filter":[],"databinding":[{"header":"Rule Code","target_column":"RULE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Rule Name","target_column":"RULE_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__c_ui_for_dyn_form_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1659444664592"
		let event_params={"caller_name":"search_clear__c_ui_for_dyn_form_search","event_desc":"C_UI for Dyn_Form_Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{}}
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
