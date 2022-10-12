/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26401 
Modified By     : Admin 
Modified Date   : 2022-Oct-12 5:35 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_power_bi_dashboard
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_power_bi_dashboard',
	templateUrl: './s_power_bi_dashboard.component.html',
	styleUrls: ['./s_power_bi_dashboard.component.css'],
	providers:[torus_cs_show_hideService]
})
    
// Start of class 
export class s_power_bi_dashboardComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_power_bi_dashboard"
	wftpa_id : string = "WFT_NPSS_P_1304_1665552217338_0"
	cg_code : string = "CG_1408_1652704777549"
	key_column : any = {"dtt_1304_1665384533560":"NPSSCPA_ID","dtt_1304_1665385314469":"NPSSCPB_ID","dtt_1304_1665385772257":"NPSSCT_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_power_dashboard_layout"
	uicgc_1 : string = "list"
	uicgc_2 : string = "navigation"
	uicgc_3 : string = "data_entry"
	uicgc_4 : string = "search"
	uicgc_5 : string = "power_reports_dashboard"
	key_events : any = {}
	btl_1408_1652705097520 : string = "p_power_dashboard_layout"
	btl_1408_1584360407011 : string = "p_search_layout"
	btl_1408_1584360351180 : string = "p_data_entry_layout"
	btl_1408_1584359909096 : string = "p_list_layout"
	forms : any = ["uicgc_4","uicgc_3","uicgc_2"]
	p_search_layout__spap_by_click_on_list_search_showpopup : boolean = false
	list : any = {}
	navigation : any = {}
	navigation_clear : any = {}
	navigation_add : any = {}
	navigation_view : any = {}
	data_entry : any = {}
	data_entry_back : any = {}
	data_entry_clear : any = {}
	data_entry_save : any = {}
	data_entry_edit : any = {}
	data_entry_delete : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	power_reports_dashboard : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "List" 
		this.list.uictrl_code = "datatable"
		this.list.uicgc_desc = "List"
		this.list.uicgc_code = "uicgc_1"
		this.list.params = {"need_pag_datatable":"N","view_all":"Y","need_search":"N","advance_dynamic_search":"Y"}
		this.list.datasource = {"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665552451156","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Dashboard Report MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CPBR_ID","alias_name":"","mq_id":"MQ_1665551734982","date_format":false},{"column_name":"REPORTS_CODE","alias_name":"","mq_id":"MQ_1665551735180","date_format":false},{"column_name":"REPORTS_DESC","alias_name":"","mq_id":"MQ_1665551735396","date_format":false},{"column_name":"REPORTS_URL","alias_name":"","mq_id":"MQ_1665551735724","date_format":false}],"joins":[]},"eq_text":"select CPBR_ID,        REPORTS_CODE,        REPORTS_DESC,        REPORTS_URL,        VPH_APP_ID,        VPH_APP_CODE,        VPH_APP_NAME,        DT_CODE,        DTT_CODE,        STATUS,        PROCESS_STATUS,        VERSION_NO,        SYSTEM_ID,        SYSTEM_NAME,        CREATED_DATE,        CREATED_BY,        CREATED_BY_NAME   FROM CORE_POWER_BI_REPORTS $WHERE  order by CPBR_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Dashboard Report CCD","filter":[{"filter_name":"App id","binding_name":"VPH_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Report Description","target_column":"REPORTS_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.list.context_menu = []
		this.list.views = {}
		this.list.onChangecomponent = new EventEmitter<any>()
		this.list.show = true
		this.list.dynamic_param = {}
	
		// Component level properties - "Navigation" 
		this.navigation.uictrl_code = "dynamic_ui"
		this.navigation.uicgc_desc = "Navigation"
		this.navigation.uicgc_code = "uicgc_2"
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
		
		// "Add" Button of "Navigation" component
		this.navigation_add.label_name = "Add"
		this.navigation_add.show = true
		this.navigation_add.disabled = false
		this.navigation_add.params = {"icon_only":false,"uicgcc_style":"fa fa-plus"}
		this.navigation_add.dynamic_param = {}
		this.navigation_add.role = []
		this.navigation_add.action = ""
		
		// "View" Button of "Navigation" component
		this.navigation_view.label_name = "View"
		this.navigation_view.show = true
		this.navigation_view.disabled = true
		this.navigation_view.params = {"icon_only":false,"uicgcc_style":"fa fa-eye-slash"}
		this.navigation_view.dynamic_param = {}
		this.navigation_view.role = []
		this.navigation_view.action = ""
	
		// Component level properties - "Data Entry" 
		this.data_entry.uictrl_code = "dynamic_ui"
		this.data_entry.uicgc_desc = "Data Entry"
		this.data_entry.uicgc_code = "uicgc_3"
		this.data_entry.params = {}
		this.data_entry.datasource = {}
		this.data_entry.context_menu = []
		this.data_entry.views = {}
		this.data_entry.onChangecomponent = new EventEmitter<any>()
		this.data_entry.show = true
		this.data_entry.dynamic_param = {}
		this.data_entry.f_data_entry = {"show":true}
		this.data_entry.current_view = "f_data_entry"
		
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
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665384533560","is_tab_mode":"N","dtt_1304_1665384533560":{"0":[{"dttv_id":"NPSS Power Reports SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Cust Proxy Address"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_power_reports_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_power_reports_srch"
		
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
	
		// Component level properties - "Power_reports_dashboard" 
		this.power_reports_dashboard.uictrl_code = "custom_widget"
		this.power_reports_dashboard.uicgc_desc = "Power_reports_dashboard"
		this.power_reports_dashboard.uicgc_code = "uicgc_5"
		this.power_reports_dashboard.params = {}
		this.power_reports_dashboard.datasource = {}
		this.power_reports_dashboard.context_menu = []
		this.power_reports_dashboard.views = {}
		this.power_reports_dashboard.onChangecomponent = new EventEmitter<any>()
		this.power_reports_dashboard.show = true
		this.power_reports_dashboard.dynamic_param = {}
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
		this.page_load__brfq_on_page_loads()
		this.page_load__cf_by_click_on_page_load()
		this.page_load__he_by_click_on_pl(peventcontext)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation add"
	navigation_add__action_button_click(){
		this.navigation_add__sp_by_click_on_add_action()
		this.navigation_add__he_by_click_on_nvg_edit_action()
		this.navigation_add__cui_by_click_on_navigation_add()
		this.navigation_add__se_by_click_on_nvg_add_to_save_action()
		this.navigation_add__ee_by_click_on_nvg_add_to_data_entry()
		this.navigation_add__he_by_click_on_add_actions_to_delete_actions()
		this.navigation_add__ee_by_click_on_add_actions()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__action_button_click(){
		this.navigation_view__sp_by_click_on_nvg_view_action()
		this.navigation_view__de_by_click_on_nvg_view_to_data_entry()
		this.navigation_view__he_by_click_on_nvg_view_to_de_save()
		this.navigation_view__se_by_click_on_nvg_view_to_edit_action()
		this.navigation_view__bt_for_the_view_action()
		this.navigation_view__vw_to_delete_show()
		this.navigation_view__e_1602484782088()
	}

	//Handler for SELECTION_CHANGED event of "list"
	list__selection_changed(){
		this.list__ee_by_click_on_list_to_view_action()
		this.list__de_by_click_on_list_to_add_action()
		this.list__ssr_for_the_list_to_data_entry()
		this.list__svm_select_on_list()
	}

	//Handler for FILTER_CLICK event of "list"
	list__filter_click(){
		this.list__spap_by_click_on_list_search()
	}

	//Handler for INTERNAL event of "svm select on list"
	svm_select_on_list__internal(parent_event_result){
		this.svm_select_on_list__ide_link_for_power_bi_report(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry back"
	data_entry_back__action_button_click(){
		this.data_entry_back__ee_by_click_data_entry_back()
		this.data_entry_back__de_by_click_on_data_entry_back()
		this.data_entry_back__tbc_by_click_on_back_to_nvg_clear()
		this.data_entry_back__rs_by_click_on_back_actions()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_on_search()
		this.search_search__e_1587636808228()
	}

	//Handler for INTERNAL event of "ssp on search"
	ssp_on_search__internal(){
		this.ssp_on_search__brfq_on_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_the_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__action_button_click(){
		this.data_entry_edit__ee_by_click_on_edit_action()
		this.data_entry_edit__he_by_click_on_edit_action()
		this.data_entry_edit__se_by_click_on_edit_to_save__action()
		this.data_entry_edit__e_1587461249949()
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
		this.st_by_click_on_save_action__re_by_click_on_save_to_list()
		this.st_by_click_on_save_action__im_by_click_on_save_action(parent_event_result)
	}

	//Handler for INTERNAL event of "im by click on save action"
	im_by_click_on_save_action__internal(parent_event_result){
		this.im_by_click_on_save_action__sp_by_click_on_save_action(parent_event_result)
	}

	//Handler for INTERNAL event of "sp by click on save action"
	sp_by_click_on_save_action__internal(){
		this.sp_by_click_on_save_action__ee_by_click_on_save_to_add_action()
		this.sp_by_click_on_save_action__de_by_click_on_save_to_view_action()
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry delete"
	data_entry_delete__action_button_click(){
		this.data_entry_delete__e_1587814926985()
	}

	//Handler for INTERNAL event of "e 1587814926985"
	e_1587814926985__internal(parent_event_result){
		this.e_1587814926985__dt_by_click_on_confs_msg(parent_event_result)
	}

	//Handler for INTERNAL event of "dt by click on confs msg"
	dt_by_click_on_confs_msg__internal(parent_event_result){
		this.dt_by_click_on_confs_msg__re_by_click_on_deletes(parent_event_result)
	}

	//Handler for INTERNAL event of "re by click on deletes"
	re_by_click_on_deletes__internal(parent_event_result){
		this.re_by_click_on_deletes__sp_by_click_on_res(parent_event_result)
		this.re_by_click_on_deletes__e_1601982963472(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__action_button_click(){
		this.navigation_clear__re_by_click_on_click_to_list_action()
		this.navigation_clear__ee_for_the_clear_after_the__add()
		this.navigation_clear__de_for_the_after_the_clear_button()
	}

	//Handler for ACTION_BUTTON_CLICK event of "data entry clear"
	data_entry_clear__action_button_click(){
		this.data_entry_clear__cui_by_click_on_clear_action()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__sec_by_click_on_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587620779717"
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
	page_load__brfq_on_page_loads() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="list"
		let parent_source_id=""
		let event_code="e_1584360437446"
		let event_params={"caller_name":"page_load__brfq_on_page_loads","event_desc":"BRFQ on Page Loads","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665552451156","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Dashboard Report MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CPBR_ID","alias_name":"","mq_id":"MQ_1665551734982","date_format":false},{"column_name":"REPORTS_CODE","alias_name":"","mq_id":"MQ_1665551735180","date_format":false},{"column_name":"REPORTS_DESC","alias_name":"","mq_id":"MQ_1665551735396","date_format":false},{"column_name":"REPORTS_URL","alias_name":"","mq_id":"MQ_1665551735724","date_format":false}],"joins":[]},"eq_text":"select CPBR_ID,        REPORTS_CODE,        REPORTS_DESC,        REPORTS_URL,        VPH_APP_ID,        VPH_APP_CODE,        VPH_APP_NAME,        DT_CODE,        DTT_CODE,        STATUS,        PROCESS_STATUS,        VERSION_NO,        SYSTEM_ID,        SYSTEM_NAME,        CREATED_DATE,        CREATED_BY,        CREATED_BY_NAME   FROM CORE_POWER_BI_REPORTS $WHERE  order by CPBR_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Dashboard Report CCD","filter":[{"filter_name":"App id","binding_name":"VPH_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Report Description","target_column":"REPORTS_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1584545012059"
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
	page_load__he_by_click_on_pl(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["Products","Systems","Users","Holidays"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="page_load"
		let destn_id="navigation_add"
		let parent_source_id=""
		let event_code="e_1587729245620"
		let event_params={"caller_name":"page_load__he_by_click_on_pl","event_desc":"hE by click on pl","event_type":"DPSINIT","caller_event_context":"Products","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""},"eventcontext":["Products","Systems","Users","Holidays"]}
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
	navigation_add__sp_by_click_on_add_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1584360512002"
		let event_params={"caller_name":"navigation_add__sp_by_click_on_add_action","event_desc":"SP by click on add Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add","raiseparam":{"profile_code":"BTL_1408_1584360351180"}}
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
		let event_code="e_1584360711848"
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
	navigation_add__cui_by_click_on_navigation_add() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584595505412"
		let event_params={"caller_name":"navigation_add__cui_by_click_on_navigation_add","event_desc":"CUI by Click on Navigation Add","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation add"
	navigation_add__se_by_click_on_nvg_add_to_save_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_add"
		let destn_id="data_entry_save"
		let parent_source_id=""
		let event_code="e_1584606156418"
		let event_params={"caller_name":"navigation_add__se_by_click_on_nvg_add_to_save_action","event_desc":"SE by click on NVG Add to Save Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":""}}
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
		let event_code="e_1584682366105"
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
		let event_code="e_1587451196032"
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
		let event_code="e_1587451618190"
		let event_params={"caller_name":"navigation_add__ee_by_click_on_add_actions","event_desc":"EE by click on Add actions","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_add","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__sp_by_click_on_nvg_view_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1584360802392"
		let event_params={"caller_name":"navigation_view__sp_by_click_on_nvg_view_action","event_desc":"SP by click on NVG view Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"profile_code":"BTL_1408_1584360351180"}}
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
		let event_code="e_1584360997119"
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
		let event_code="e_1584361034102"
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
		let event_code="e_1584361150512"
		let event_params={"caller_name":"navigation_view__se_by_click_on_nvg_view_to_edit_action","event_desc":"SE by click on NVG view to Edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":""}}
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
	navigation_view__bt_for_the_view_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584534940035"
		let event_params={"caller_name":"navigation_view__bt_for_the_view_action","event_desc":"BT for the view Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation view"
	navigation_view__vw_to_delete_show() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry_delete"
		let parent_source_id=""
		let event_code="e_1600694185463"
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
	navigation_view__e_1602484782088() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_view"
		let destn_id="data_entry_clear"
		let parent_source_id=""
		let event_code="e_1602484782088"
		let event_params={"caller_name":"navigation_view__e_1602484782088","event_desc":"E_1602484782088","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_view","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__ee_by_click_on_list_to_view_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="navigation_view"
		let parent_source_id=""
		let event_code="e_1584362206920"
		let event_params={"caller_name":"list__ee_by_click_on_list_to_view_action","event_desc":"EE by click on list to view Action","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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
		let event_code="e_1584421994802"
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
		let event_code="e_1584538432432"
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
	list__svm_select_on_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="list"
		let parent_source_id=""
		let event_code="e_1652707487821"
		let event_params={"caller_name":"list__svm_select_on_list","event_desc":"SVM select on List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_select_on_list__ide_link_for_power_bi_report,"
		let event_data={"list":{"e_1652707487821":{"dts":{"dt_1304_1665384453253":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1652707487821","dt_code":"DT_1304_1665384453253","dtt_code":"","dt_desc":"Customer DTG","dtt_desc":"NPSS Cust Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"REPORTS_CODE","level":"MI_LEVEL","name":"MI_LEVEL_REPORTS_CODE","setd3name":"REPORTS_CODE"},{"type":"LOCAL","column_name":"REPORTS_DESC","level":"MI_LEVEL","name":"MI_LEVEL_REPORTS_DESC","setd3name":"REPORTS_DESC"},{"type":"LOCAL","column_name":"REPORTS_URL","level":"MI_LEVEL","name":"MI_LEVEL_REPORTS_URL","setd3name":"REPORTS_URL"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665552451156","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Dashboard Report MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CPBR_ID","alias_name":"","mq_id":"MQ_1665551734982","date_format":false},{"column_name":"REPORTS_CODE","alias_name":"","mq_id":"MQ_1665551735180","date_format":false},{"column_name":"REPORTS_DESC","alias_name":"","mq_id":"MQ_1665551735396","date_format":false},{"column_name":"REPORTS_URL","alias_name":"","mq_id":"MQ_1665551735724","date_format":false}],"joins":[]},"eq_text":"select CPBR_ID,        REPORTS_CODE,        REPORTS_DESC,        REPORTS_URL,        VPH_APP_ID,        VPH_APP_CODE,        VPH_APP_NAME,        DT_CODE,        DTT_CODE,        STATUS,        PROCESS_STATUS,        VERSION_NO,        SYSTEM_ID,        SYSTEM_NAME,        CREATED_DATE,        CREATED_BY,        CREATED_BY_NAME   FROM CORE_POWER_BI_REPORTS $WHERE  order by CPBR_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Dashboard Report CCD","filter":[{"filter_name":"App id","binding_name":"VPH_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Report Description","target_column":"REPORTS_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1584362555716"
		let event_params={"caller_name":"list__spap_by_click_on_list_search","event_desc":"SPAP by click on List search","event_type":"FILTER_CLICK","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_by_click_on_list_search","selector":"p_search_layout","profile_code":"BTL_1408_1584360407011","window_title":"Search","window_height":400,"window_width":"650px","window_close_icon":"Y","eventdes":"spap_by_click_on_list_search","eventcode":"E_1584362555716"}}
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

	//Handler for INTERNAL event of "svm select on list"
	svm_select_on_list__ide_link_for_power_bi_report(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_select_on_list"
		let destn_id=""
		let parent_source_id="list"
		let event_code="e_1652709938031"
		let event_params={"caller_name":"svm_select_on_list__ide_link_for_power_bi_report","event_desc":"ide link for power bi report","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "data entry back"
	data_entry_back__ee_by_click_data_entry_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_back"
		let destn_id="navigation_add"
		let parent_source_id=""
		let event_code="e_1584595113696"
		let event_params={"caller_name":"data_entry_back__ee_by_click_data_entry_back","event_desc":"EE by Click Data Entry Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_back","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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
	data_entry_back__de_by_click_on_data_entry_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_back"
		let destn_id="navigation_view"
		let parent_source_id=""
		let event_code="e_1584595319690"
		let event_params={"caller_name":"data_entry_back__de_by_click_on_data_entry_back","event_desc":"DE by Click on Data Entry Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry back"
	data_entry_back__tbc_by_click_on_back_to_nvg_clear() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_back"
		let destn_id="navigation_clear"
		let parent_source_id=""
		let event_code="e_1584597464692"
		let event_params={"caller_name":"data_entry_back__tbc_by_click_on_back_to_nvg_clear","event_desc":"TBC by click on Back to NVG Clear","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry back"
	data_entry_back__rs_by_click_on_back_actions() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587813016469"
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__ssp_on_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1584361356638"
		let event_params={"caller_name":"search_search__ssp_on_search","event_desc":"SSP on Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_on_search__brfq_on_search,"
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
	search_search__e_1587636808228() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587636808228"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__e_1587636808228","event_desc":"E_1587636808228","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for INTERNAL event of "ssp on search"
	ssp_on_search__brfq_on_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="ssp_on_search"
		let destn_id="list"
		let parent_source_id="search_search"
		let event_code="e_1584361409035"
		let event_params={"caller_name":"ssp_on_search__brfq_on_search","event_desc":"BRFQ on Search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665552451156","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Dashboard Report MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CPBR_ID","alias_name":"","mq_id":"MQ_1665551734982","date_format":false},{"column_name":"REPORTS_CODE","alias_name":"","mq_id":"MQ_1665551735180","date_format":false},{"column_name":"REPORTS_DESC","alias_name":"","mq_id":"MQ_1665551735396","date_format":false},{"column_name":"REPORTS_URL","alias_name":"","mq_id":"MQ_1665551735724","date_format":false}],"joins":[]},"eq_text":"select CPBR_ID,        REPORTS_CODE,        REPORTS_DESC,        REPORTS_URL,        VPH_APP_ID,        VPH_APP_CODE,        VPH_APP_NAME,        DT_CODE,        DTT_CODE,        STATUS,        PROCESS_STATUS,        VERSION_NO,        SYSTEM_ID,        SYSTEM_NAME,        CREATED_DATE,        CREATED_BY,        CREATED_BY_NAME   FROM CORE_POWER_BI_REPORTS $WHERE  order by CPBR_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Dashboard Report CCD","filter":[{"filter_name":"App id","binding_name":"VPH_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Report Description","target_column":"REPORTS_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cui_the_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1584361382484"
		let event_params={"caller_name":"search_clear__cui_the_search","event_desc":"CUI the search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__ee_by_click_on_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_edit"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584361563170"
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
	data_entry_edit__he_by_click_on_edit_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_edit"
		let destn_id="data_entry_edit"
		let parent_source_id=""
		let event_code="e_1584362027312"
		let event_params={"caller_name":"data_entry_edit__he_by_click_on_edit_action","event_desc":"HE by click on Edit Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	data_entry_edit__se_by_click_on_edit_to_save__action() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_edit"
		let destn_id="data_entry_save"
		let parent_source_id=""
		let event_code="e_1584363483912"
		let event_params={"caller_name":"data_entry_edit__se_by_click_on_edit_to_save__action","event_desc":"SE by click on edit to save  Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry edit"
	data_entry_edit__e_1587461249949() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_edit"
		let destn_id="data_entry_clear"
		let parent_source_id=""
		let event_code="e_1587461249949"
		let event_params={"caller_name":"data_entry_edit__e_1587461249949","event_desc":"E_1587461249949","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_edit","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry save"
	data_entry_save__ve_by_click_on_save_button() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_save"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584362243699"
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
		let event_code="e_1584362295998"
		let event_params={"caller_name":"ve_by_click_on_save_button__st_by_click_on_save_action","event_desc":"ST by click on save Action","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"ALL"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="st_by_click_on_save_action__re_by_click_on_save_to_list,st_by_click_on_save_action__im_by_click_on_save_action,"
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
	st_by_click_on_save_action__re_by_click_on_save_to_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="st_by_click_on_save_action"
		let destn_id="list"
		let parent_source_id="ve_by_click_on_save_button"
		let event_code="e_1584362374877"
		let event_params={"caller_name":"st_by_click_on_save_action__re_by_click_on_save_to_list","event_desc":"RE by click on Save to list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_save","raiseparam":{}}
		let handler_code="refresh_element"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665552451156","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Dashboard Report MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CPBR_ID","alias_name":"","mq_id":"MQ_1665551734982","date_format":false},{"column_name":"REPORTS_CODE","alias_name":"","mq_id":"MQ_1665551735180","date_format":false},{"column_name":"REPORTS_DESC","alias_name":"","mq_id":"MQ_1665551735396","date_format":false},{"column_name":"REPORTS_URL","alias_name":"","mq_id":"MQ_1665551735724","date_format":false}],"joins":[]},"eq_text":"select CPBR_ID,        REPORTS_CODE,        REPORTS_DESC,        REPORTS_URL,        VPH_APP_ID,        VPH_APP_CODE,        VPH_APP_NAME,        DT_CODE,        DTT_CODE,        STATUS,        PROCESS_STATUS,        VERSION_NO,        SYSTEM_ID,        SYSTEM_NAME,        CREATED_DATE,        CREATED_BY,        CREATED_BY_NAME   FROM CORE_POWER_BI_REPORTS $WHERE  order by CPBR_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Dashboard Report CCD","filter":[{"filter_name":"App id","binding_name":"VPH_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Report Description","target_column":"REPORTS_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.refresh_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1584362425726"
		let event_params={"caller_name":"st_by_click_on_save_action__im_by_click_on_save_action","event_desc":"IM by click on save Action","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Data has been saved successfully!","root_source_id":"data_entry_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_by_click_on_save_action__sp_by_click_on_save_action,"
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
	im_by_click_on_save_action__sp_by_click_on_save_action(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_by_click_on_save_action"
		let destn_id=""
		let parent_source_id="st_by_click_on_save_action"
		let event_code="e_1584438337893"
		let event_params={"caller_name":"im_by_click_on_save_action__sp_by_click_on_save_action","event_desc":"SP by click on save Action","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_save","raiseparam":{"profile_code":"BTL_1408_1584359909096"},"parent_event_result":"SUCCESS"}
		let handler_code="show_profile"
		let internals="sp_by_click_on_save_action__ee_by_click_on_save_to_add_action,sp_by_click_on_save_action__de_by_click_on_save_to_view_action,"
		let event_data={}
		let data_source={}
		try {
			this.handler.show_profile(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "sp by click on save action"
	sp_by_click_on_save_action__ee_by_click_on_save_to_add_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="sp_by_click_on_save_action"
		let destn_id="navigation_add"
		let parent_source_id="im_by_click_on_save_action"
		let event_code="e_1584438427812"
		let event_params={"caller_name":"sp_by_click_on_save_action__ee_by_click_on_save_to_add_action","event_desc":"EE by click on save to add Action","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_save","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for INTERNAL event of "sp by click on save action"
	sp_by_click_on_save_action__de_by_click_on_save_to_view_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="sp_by_click_on_save_action"
		let destn_id="navigation_view"
		let parent_source_id="im_by_click_on_save_action"
		let event_code="e_1584438465690"
		let event_params={"caller_name":"sp_by_click_on_save_action__de_by_click_on_save_to_view_action","event_desc":"DE by click on save to view Action","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_save","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry delete"
	data_entry_delete__e_1587814926985() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_delete"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587814926985"
		let event_params={"caller_name":"data_entry_delete__e_1587814926985","event_desc":"E_1587814926985","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","message_text":"Are you sure that you want to permanently delete the selected record?","root_source_id":"data_entry_delete","raiseparam":{"conf_msg":"Are you sure that you want to permanently delete the selected record?"}}
		let handler_code="conf_msg"
		let internals="e_1587814926985__dt_by_click_on_confs_msg,"
		let event_data={}
		let data_source={}
		try {
			this.handler.conf_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1587814926985"
	e_1587814926985__dt_by_click_on_confs_msg(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="YES"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1587814926985"
		let destn_id="list"
		let parent_source_id="data_entry_delete"
		let event_code="e_1601982711067"
		let event_params={"caller_name":"e_1587814926985__dt_by_click_on_confs_msg","event_desc":"DT by click on confs msg","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_delete","raiseparam":{"conf_msg":"","info_msg":"The record has been deleted successfully","clear_cache":"ALL"},"parent_event_result":"YES"}
		let handler_code="delete_tran"
		let internals="dt_by_click_on_confs_msg__re_by_click_on_deletes,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665552451156","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Dashboard Report MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CPBR_ID","alias_name":"","mq_id":"MQ_1665551734982","date_format":false},{"column_name":"REPORTS_CODE","alias_name":"","mq_id":"MQ_1665551735180","date_format":false},{"column_name":"REPORTS_DESC","alias_name":"","mq_id":"MQ_1665551735396","date_format":false},{"column_name":"REPORTS_URL","alias_name":"","mq_id":"MQ_1665551735724","date_format":false}],"joins":[]},"eq_text":"select CPBR_ID,        REPORTS_CODE,        REPORTS_DESC,        REPORTS_URL,        VPH_APP_ID,        VPH_APP_CODE,        VPH_APP_NAME,        DT_CODE,        DTT_CODE,        STATUS,        PROCESS_STATUS,        VERSION_NO,        SYSTEM_ID,        SYSTEM_NAME,        CREATED_DATE,        CREATED_BY,        CREATED_BY_NAME   FROM CORE_POWER_BI_REPORTS $WHERE  order by CPBR_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Dashboard Report CCD","filter":[{"filter_name":"App id","binding_name":"VPH_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Report Description","target_column":"REPORTS_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.delete_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "dt by click on confs msg"
	dt_by_click_on_confs_msg__re_by_click_on_deletes(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="dt_by_click_on_confs_msg"
		let destn_id="list"
		let parent_source_id="e_1587814926985"
		let event_code="e_1601982905241"
		let event_params={"caller_name":"dt_by_click_on_confs_msg__re_by_click_on_deletes","event_desc":"Re by click on deletes","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_delete","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="refresh_element"
		let internals="re_by_click_on_deletes__sp_by_click_on_res,re_by_click_on_deletes__e_1601982963472,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665552451156","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Dashboard Report MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CPBR_ID","alias_name":"","mq_id":"MQ_1665551734982","date_format":false},{"column_name":"REPORTS_CODE","alias_name":"","mq_id":"MQ_1665551735180","date_format":false},{"column_name":"REPORTS_DESC","alias_name":"","mq_id":"MQ_1665551735396","date_format":false},{"column_name":"REPORTS_URL","alias_name":"","mq_id":"MQ_1665551735724","date_format":false}],"joins":[]},"eq_text":"select CPBR_ID,        REPORTS_CODE,        REPORTS_DESC,        REPORTS_URL,        VPH_APP_ID,        VPH_APP_CODE,        VPH_APP_NAME,        DT_CODE,        DTT_CODE,        STATUS,        PROCESS_STATUS,        VERSION_NO,        SYSTEM_ID,        SYSTEM_NAME,        CREATED_DATE,        CREATED_BY,        CREATED_BY_NAME   FROM CORE_POWER_BI_REPORTS $WHERE  order by CPBR_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Dashboard Report CCD","filter":[{"filter_name":"App id","binding_name":"VPH_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Report Description","target_column":"REPORTS_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.refresh_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "re by click on deletes"
	re_by_click_on_deletes__sp_by_click_on_res(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="re_by_click_on_deletes"
		let destn_id=""
		let parent_source_id="dt_by_click_on_confs_msg"
		let event_code="e_1601982927833"
		let event_params={"caller_name":"re_by_click_on_deletes__sp_by_click_on_res","event_desc":"SP by click on RES","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_delete","raiseparam":{"profile_code":"BTL_1408_1584359909096"},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "re by click on deletes"
	re_by_click_on_deletes__e_1601982963472(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="re_by_click_on_deletes"
		let destn_id="data_entry"
		let parent_source_id="dt_by_click_on_confs_msg"
		let event_code="e_1601982963472"
		let event_params={"caller_name":"re_by_click_on_deletes__e_1601982963472","event_desc":"E_1601982963472","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"data_entry_delete","raiseparam":{"need_reset_key_column":"N"},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__re_by_click_on_click_to_list_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="list"
		let parent_source_id=""
		let event_code="e_1584368292757"
		let event_params={"caller_name":"navigation_clear__re_by_click_on_click_to_list_action","event_desc":"RE by click on click to list Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{}}
		let handler_code="reset_selection"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384453253":{"dtt_1304_1665384533560":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665384453253","dt_desc":"Customer DTG","dtt_code":"DTT_1304_1665384533560","dtt_desc":"NPSS Cust Proxy Address","ds_eligible":"DS_1665552451156","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Dashboard Report MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"CPBR_ID","alias_name":"","mq_id":"MQ_1665551734982","date_format":false},{"column_name":"REPORTS_CODE","alias_name":"","mq_id":"MQ_1665551735180","date_format":false},{"column_name":"REPORTS_DESC","alias_name":"","mq_id":"MQ_1665551735396","date_format":false},{"column_name":"REPORTS_URL","alias_name":"","mq_id":"MQ_1665551735724","date_format":false}],"joins":[]},"eq_text":"select CPBR_ID,        REPORTS_CODE,        REPORTS_DESC,        REPORTS_URL,        VPH_APP_ID,        VPH_APP_CODE,        VPH_APP_NAME,        DT_CODE,        DTT_CODE,        STATUS,        PROCESS_STATUS,        VERSION_NO,        SYSTEM_ID,        SYSTEM_NAME,        CREATED_DATE,        CREATED_BY,        CREATED_BY_NAME   FROM CORE_POWER_BI_REPORTS $WHERE  order by CPBR_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Dashboard Report CCD","filter":[{"filter_name":"App id","binding_name":"VPH_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Report Description","target_column":"REPORTS_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.reset_selection(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__ee_for_the_clear_after_the__add() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_add"
		let parent_source_id=""
		let event_code="e_1584530673501"
		let event_params={"caller_name":"navigation_clear__ee_for_the_clear_after_the__add","event_desc":"EE for the Clear after the  add","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation clear"
	navigation_clear__de_for_the_after_the_clear_button() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_clear"
		let destn_id="navigation_view"
		let parent_source_id=""
		let event_code="e_1584530697363"
		let event_params={"caller_name":"navigation_clear__de_for_the_after_the_clear_button","event_desc":"DE for the after the clear button","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_clear","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "data entry clear"
	data_entry_clear__cui_by_click_on_clear_action() { 
		let Dest_Is_ctrl=true
		
		let source_id="data_entry_clear"
		let destn_id="data_entry"
		let parent_source_id=""
		let event_code="e_1584368860768"
		let event_params={"caller_name":"data_entry_clear__cui_by_click_on_clear_action","event_desc":"CUI by click on clear Action","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"data_entry_clear","raiseparam":{"need_reset_key_column":"N"}}
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
