/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28490 
Modified By     : Admin 
Modified Date   : 2023-Mar-06 15:29 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_home_dashboard
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'

@Component({
	selector: 's_op_home_dashboard',
	templateUrl: './s_op_home_dashboard.component.html',
	styleUrls: ['./s_op_home_dashboard.component.css'],
	providers:[]
})
    
// Start of class 
export class s_op_home_dashboardComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_op_home_dashboard"
	wftpa_id : string = "WFT_NPSS_P_1304_1677930816872_0"
	cg_code : string = "CG_1304_1677926573167"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_default_profile"
	uicgc_1 : string = "search"
	uicgc_2 : string = "transaction_list"
	uicgc_4 : string = "navigation"
	key_events : any = {}
	btl_1408_1598521300065 : string = "p_search_layout"
	btl_1408_1598521214410 : string = "p_default_profile"
	forms : any = ["uicgc_1","uicgc_4"]
	p_search_layout__spap_from_nav_search_showpopup : boolean = false
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	transaction_list : any = {}
	navigation : any = {}
	navigation_search : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_1"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Home Dashboard UI","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_home_dashboard_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_home_dashboard_ui"
		
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
	
		// Component level properties - "Transaction List" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction List"
		this.transaction_list.uicgc_code = "uicgc_2"
		this.transaction_list.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1677932247224","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"Type","alias_name":"","mq_id":"MQ_1677928433068","date_format":false},{"column_name":"Total","alias_name":"","mq_id":"MQ_1677928433241","date_format":false},{"column_name":"IBMB","alias_name":"","mq_id":"MQ_1677928433417","date_format":false},{"column_name":"RMB","alias_name":"","mq_id":"MQ_1677928433585","date_format":false},{"column_name":"RIB","alias_name":"","mq_id":"MQ_1677928433769","date_format":false},{"column_name":"CMB","alias_name":"","mq_id":"MQ_1677928433945","date_format":false},{"column_name":"CIB","alias_name":"","mq_id":"MQ_1677928434130","date_format":false},{"column_name":"CMS","alias_name":"","mq_id":"MQ_1677928467185","date_format":false},{"column_name":"Manual","alias_name":"","mq_id":"MQ_1677928467361","date_format":false},{"column_name":"Pending_Screening","alias_name":"","mq_id":"MQ_1677928467521","date_format":false},{"column_name":"Pending_Maker","alias_name":"","mq_id":"MQ_1677928484313","date_format":false},{"column_name":"Pending_Checker","alias_name":"","mq_id":"MQ_1677928484473","date_format":false},{"column_name":"Send_to_CB","alias_name":"","mq_id":"MQ_1677928484633","date_format":false},{"column_name":"CBACK","alias_name":"","mq_id":"MQ_1677928498570","date_format":false},{"column_name":"CBNACK","alias_name":"","mq_id":"MQ_1677928498753","date_format":false},{"column_name":"Pending_T_1","alias_name":"","mq_id":"MQ_1677928498969","date_format":false},{"column_name":"Created_Date","alias_name":"","mq_id":"MQ_1677928517681","date_format":true}],"joins":[]},"eq_text":"SELECT Type,        Total,        IBMB,        RMB,        RIB,        CMB,        CIB,        CMS,        Manual,        Pending_Screening,        Pending_Maker,        Pending_Checker,        Send_to_CB,        CBACK,        CBNACK,        Pending_T_1,     Created_Date   FROM vw_dashboard_outward_data $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Home Dashboard MQ CCD","filter":[],"databinding":[{"header":"Type","target_column":"Type","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total","target_column":"Total","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBMB","target_column":"IBMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RMB","target_column":"RMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RIB","target_column":"RIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMB","target_column":"CMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CIB","target_column":"CIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMS","target_column":"CMS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Manual","target_column":"Manual","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Screening","target_column":"Pending_Screening","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Maker)","target_column":"Pending_Maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Checker)","target_column":"Pending_Checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Send to CB","target_column":"Send_to_CB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB ACK","target_column":"CBACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB NACK","target_column":"CBNACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (T-1)","target_column":"Pending_T_1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.navigation_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.navigation_search.dynamic_param = {}
		this.navigation_search.role = []
		this.navigation_search.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_from_pag_load()
	}

	//Handler for INTERNAL event of "cf from pag load"
	cf_from_pag_load__internal(parent_event_result){
		this.cf_from_pag_load__trigger_click_for_pg_load(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp from search ui"
	ssp_from_search_ui__internal(parent_event_result){
		this.ssp_from_search_ui__brfq_to_transaction_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__cp_from_search_btn_click()
		this.search_search__ve_for_search()
	}

	//Handler for INTERNAL event of "ve for search"
	ve_for_search__internal(parent_event_result){
		this.ve_for_search__ssp_from_search_ui(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_by_click_on_tl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__action_button_click(){
		this.navigation_search__spap_from_nav_search()
		this.navigation_search__cui_from_nav_search_btn_click()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_from_clear_btn_click()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_from_pag_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1598521589606"
		let event_params={"caller_name":"page_load__cf_from_pag_load","event_desc":"CF from pag load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
		let handler_code="create_form"
		let internals="cf_from_pag_load__trigger_click_for_pg_load,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cf from pag load"
	cf_from_pag_load__trigger_click_for_pg_load(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_from_pag_load"
		let destn_id="search_search"
		let parent_source_id="page_load"
		let event_code="e_1617890005980"
		let event_params={"caller_name":"cf_from_pag_load__trigger_click_for_pg_load","event_desc":"Trigger Click For pg load","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "ssp from search ui"
	ssp_from_search_ui__brfq_to_transaction_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_search_ui"
		let destn_id="transaction_list"
		let parent_source_id="ve_for_search"
		let event_code="e_1598521637958"
		let event_params={"caller_name":"ssp_from_search_ui__brfq_to_transaction_list","event_desc":"BRFQ to transaction list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1677932247224","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"Type","alias_name":"","mq_id":"MQ_1677928433068","date_format":false},{"column_name":"Total","alias_name":"","mq_id":"MQ_1677928433241","date_format":false},{"column_name":"IBMB","alias_name":"","mq_id":"MQ_1677928433417","date_format":false},{"column_name":"RMB","alias_name":"","mq_id":"MQ_1677928433585","date_format":false},{"column_name":"RIB","alias_name":"","mq_id":"MQ_1677928433769","date_format":false},{"column_name":"CMB","alias_name":"","mq_id":"MQ_1677928433945","date_format":false},{"column_name":"CIB","alias_name":"","mq_id":"MQ_1677928434130","date_format":false},{"column_name":"CMS","alias_name":"","mq_id":"MQ_1677928467185","date_format":false},{"column_name":"Manual","alias_name":"","mq_id":"MQ_1677928467361","date_format":false},{"column_name":"Pending_Screening","alias_name":"","mq_id":"MQ_1677928467521","date_format":false},{"column_name":"Pending_Maker","alias_name":"","mq_id":"MQ_1677928484313","date_format":false},{"column_name":"Pending_Checker","alias_name":"","mq_id":"MQ_1677928484473","date_format":false},{"column_name":"Send_to_CB","alias_name":"","mq_id":"MQ_1677928484633","date_format":false},{"column_name":"CBACK","alias_name":"","mq_id":"MQ_1677928498570","date_format":false},{"column_name":"CBNACK","alias_name":"","mq_id":"MQ_1677928498753","date_format":false},{"column_name":"Pending_T_1","alias_name":"","mq_id":"MQ_1677928498969","date_format":false},{"column_name":"Created_Date","alias_name":"","mq_id":"MQ_1677928517681","date_format":true}],"joins":[]},"eq_text":"SELECT Type,        Total,        IBMB,        RMB,        RIB,        CMB,        CIB,        CMS,        Manual,        Pending_Screening,        Pending_Maker,        Pending_Checker,        Send_to_CB,        CBACK,        CBNACK,        Pending_T_1,     Created_Date   FROM vw_dashboard_outward_data $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Home Dashboard MQ CCD","filter":[],"databinding":[{"header":"Type","target_column":"Type","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total","target_column":"Total","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBMB","target_column":"IBMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RMB","target_column":"RMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RIB","target_column":"RIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMB","target_column":"CMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CIB","target_column":"CIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMS","target_column":"CMS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Manual","target_column":"Manual","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Screening","target_column":"Pending_Screening","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Maker)","target_column":"Pending_Maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Checker)","target_column":"Pending_Checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Send to CB","target_column":"Send_to_CB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB ACK","target_column":"CBACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB NACK","target_column":"CBNACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (T-1)","target_column":"Pending_T_1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__cp_from_search_btn_click() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1598521965876"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__cp_from_search_btn_click","event_desc":"CP from search btn click","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__ve_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1677928173362"
		let event_params={"caller_name":"search_search__ve_for_search","event_desc":"VE for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_search__ssp_from_search_ui,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for search"
	ve_for_search__ssp_from_search_ui(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_search"
		let destn_id="search"
		let parent_source_id="search_search"
		let event_code="e_1598521630976"
		let event_params={"caller_name":"ve_for_search__ssp_from_search_ui","event_desc":"SSP from search UI","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_from_search_ui__brfq_to_transaction_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__svm_by_click_on_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1598531297905"
		let event_params={"caller_name":"transaction_list__svm_by_click_on_tl","event_desc":"SVM by click on TL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1677932247224","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Home Dashboard MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"Type","alias_name":"","mq_id":"MQ_1677928433068","date_format":false},{"column_name":"Total","alias_name":"","mq_id":"MQ_1677928433241","date_format":false},{"column_name":"IBMB","alias_name":"","mq_id":"MQ_1677928433417","date_format":false},{"column_name":"RMB","alias_name":"","mq_id":"MQ_1677928433585","date_format":false},{"column_name":"RIB","alias_name":"","mq_id":"MQ_1677928433769","date_format":false},{"column_name":"CMB","alias_name":"","mq_id":"MQ_1677928433945","date_format":false},{"column_name":"CIB","alias_name":"","mq_id":"MQ_1677928434130","date_format":false},{"column_name":"CMS","alias_name":"","mq_id":"MQ_1677928467185","date_format":false},{"column_name":"Manual","alias_name":"","mq_id":"MQ_1677928467361","date_format":false},{"column_name":"Pending_Screening","alias_name":"","mq_id":"MQ_1677928467521","date_format":false},{"column_name":"Pending_Maker","alias_name":"","mq_id":"MQ_1677928484313","date_format":false},{"column_name":"Pending_Checker","alias_name":"","mq_id":"MQ_1677928484473","date_format":false},{"column_name":"Send_to_CB","alias_name":"","mq_id":"MQ_1677928484633","date_format":false},{"column_name":"CBACK","alias_name":"","mq_id":"MQ_1677928498570","date_format":false},{"column_name":"CBNACK","alias_name":"","mq_id":"MQ_1677928498753","date_format":false},{"column_name":"Pending_T_1","alias_name":"","mq_id":"MQ_1677928498969","date_format":false},{"column_name":"Created_Date","alias_name":"","mq_id":"MQ_1677928517681","date_format":true}],"joins":[]},"eq_text":"SELECT Type,        Total,        IBMB,        RMB,        RIB,        CMB,        CIB,        CMS,        Manual,        Pending_Screening,        Pending_Maker,        Pending_Checker,        Send_to_CB,        CBACK,        CBNACK,        Pending_T_1,     Created_Date   FROM vw_dashboard_outward_data $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Home Dashboard MQ CCD","filter":[],"databinding":[{"header":"Type","target_column":"Type","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Total","target_column":"Total","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBMB","target_column":"IBMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RMB","target_column":"RMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"RIB","target_column":"RIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMB","target_column":"CMB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CIB","target_column":"CIB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CMS","target_column":"CMS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Manual","target_column":"Manual","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending Screening","target_column":"Pending_Screening","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Maker)","target_column":"Pending_Maker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (Checker)","target_column":"Pending_Checker","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Send to CB","target_column":"Send_to_CB","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB ACK","target_column":"CBACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB NACK","target_column":"CBNACK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Pending (T-1)","target_column":"Pending_T_1","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__spap_from_nav_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1598521737693"
		let event_params={"caller_name":"navigation_search__spap_from_nav_search","event_desc":"SPAP from Nav search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_from_nav_search","selector":"p_search_layout","profile_code":"BTL_1408_1598521300065","window_title":"Search","window_height":400,"window_width":"700px","window_close_icon":"Y","eventdes":"spap_from_nav_search","eventcode":"E_1598521737693"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__cui_from_nav_search_btn_click() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1598524561075"
		let event_params={"caller_name":"navigation_search__cui_from_nav_search_btn_click","event_desc":"CUi from Nav search btn click","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"need_reset_key_column":"N"}}
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
	search_clear__cui_from_clear_btn_click() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1598521932422"
		let event_params={"caller_name":"search_clear__cui_from_clear_btn_click","event_desc":"CUi from clear btn click","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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
