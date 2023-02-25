/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 28334 
Modified By     : Admin 
Modified Date   : 2023-Feb-25 7:1 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_liquidity_position
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_liquidity_position',
	templateUrl: './s_liquidity_position.component.html',
	styleUrls: ['./s_liquidity_position.component.css'],
	providers:[torus_cs_show_hideService]
})
    
// Start of class 
export class s_liquidity_positionComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_liquidity_position"
	wftpa_id : string = "WFT_NPSS_P_1304_1677305831812_0"
	cg_code : string = "CG_1304_1677303548188"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "api_input_ui"
	uicgc_2 : string = "search"
	uicgc_3 : string = "list"
	key_events : any = {}
	btl_1304_1677303885071 : string = "p_main_layout"
	forms : any = ["uicgc_1","uicgc_2"]
	api_input_ui : any = {}
	api_input_ui_clear : any = {}
	api_input_ui_save : any = {}
	api_input_ui_call_api : any = {}
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	list : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "API Input UI" 
		this.api_input_ui.uictrl_code = "dynamic_ui"
		this.api_input_ui.uicgc_desc = "API Input UI"
		this.api_input_ui.uicgc_code = "uicgc_1"
		this.api_input_ui.params = {}
		this.api_input_ui.datasource = {}
		this.api_input_ui.context_menu = []
		this.api_input_ui.views = {"first":"DTT_1304_1670589169341","is_tab_mode":"N","dtt_1304_1670589169341":{"0":[{"dttv_id":"NPSS Liq Pos UI","tab_order":0,"tab_name":"","uicgc_description":"API Input UI","role_description":"default","dtt_description":"Core API Process Log"}]}}
		this.api_input_ui.onChangecomponent = new EventEmitter<any>()
		this.api_input_ui.show = true
		this.api_input_ui.dynamic_param = {}
		this.api_input_ui.f_npss_liq_pos_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.api_input_ui.form_name = "f_npss_liq_pos_ui"
		
		// "Clear" Button of "API Input UI" component
		this.api_input_ui_clear.label_name = "Clear"
		this.api_input_ui_clear.show = true
		this.api_input_ui_clear.disabled = false
		this.api_input_ui_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.api_input_ui_clear.dynamic_param = {}
		this.api_input_ui_clear.role = []
		this.api_input_ui_clear.action = ""
		
		// "Save" Button of "API Input UI" component
		this.api_input_ui_save.label_name = "Save"
		this.api_input_ui_save.show = true
		this.api_input_ui_save.disabled = false
		this.api_input_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.api_input_ui_save.dynamic_param = {}
		this.api_input_ui_save.role = []
		this.api_input_ui_save.action = ""
		
		// "Call API" Button of "API Input UI" component
		this.api_input_ui_call_api.label_name = "Call API"
		this.api_input_ui_call_api.show = true
		this.api_input_ui_call_api.disabled = false
		this.api_input_ui_call_api.params = {"icon_only":false,"uicgcc_style":"fa fa-check"}
		this.api_input_ui_call_api.dynamic_param = {}
		this.api_input_ui_call_api.role = []
		this.api_input_ui_call_api.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_2"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1670589169341","is_tab_mode":"N","dtt_1304_1670589169341":{"0":[{"dttv_id":"NPSS Liq Pos  SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"Core API Process Log"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_liq_pos__srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_liq_pos__srch"
		
		// "Clear" Button of "Search" component
		this.search_clear.label_name = "Clear"
		this.search_clear.show = true
		this.search_clear.disabled = false
		this.search_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.search_clear.dynamic_param = {}
		this.search_clear.role = []
		this.search_clear.action = ""
		
		// "Search" Button of "Search" component
		this.search_search.label_name = "Search"
		this.search_search.show = true
		this.search_search.disabled = false
		this.search_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.search_search.dynamic_param = {}
		this.search_search.role = []
		this.search_search.action = ""
	
		// Component level properties - "List" 
		this.list.uictrl_code = "datatable"
		this.list.uicgc_desc = "List"
		this.list.uicgc_code = "uicgc_3"
		this.list.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1670589169341":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1670589169341","dtt_desc":"Core API Process Log","ds_eligible":"DS_1677305967358","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS CoreAPI Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670595016379","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1670595016738","date_format":true},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1670595017077","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1670595017229","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1670595018370","date_format":false}],"joins":[]},"eq_text":"SELECT DISTINCT PROCESSING_SYSTEM,                 STATUS,                 NPSSCAPL_ID,                 PROCESS_STATUS,                 CREATED_DATE,                 PROCESS_NAME,                 DT_CODE,                 DTT_CODE   FROM (SELECT TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                NT.NPSSCAPL_ID,                NT.PROCESS_NAME,                NT.PROCESSING_SYSTEM,                NT.RESPONSE_CODE,                NT.PROCESS_REF_NO,                NT.REQUEST_DATA_JSON,                NT.PROCESS_STATUS,                NT.STATUS,                NT.TENANT_ID,                NT.CREATED_DATE,                NT.DT_CODE,                NT.DTT_CODE           FROM NPSS_CORE_API_PROCESS_LOG NT           LEFT JOIN TRANSACTION_SET TS ON NT.NPSSCAPL_ID = TS.TRN_ID                                       AND NT.DTT_CODE = TS.DTT_CODE) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Core API Process log CCD","filter":[],"databinding":[{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.list.context_menu = []
		this.list.views = {}
		this.list.onChangecomponent = new EventEmitter<any>()
		this.list.show = true
		this.list.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_for_pl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_search()
	}

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__internal(parent_event_result){
		this.ssp_for_search__brfq_for_srch(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__clear_ui()
	}

	//Handler for SELECTION_CHANGED event of "list"
	list__selection_changed(){
		this.list__bt_for_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "api input ui clear"
	api_input_ui_clear__action_button_click(){
		this.api_input_ui_clear__cui_for_api()
	}

	//Handler for ACTION_BUTTON_CLICK event of "api input ui save"
	api_input_ui_save__action_button_click(){
		this.api_input_ui_save__validate_ele()
	}

	//Handler for INTERNAL event of "validate ele"
	validate_ele__internal(parent_event_result){
		this.validate_ele__save_tran_success(parent_event_result)
	}

	//Handler for INTERNAL event of "save tran success"
	save_tran_success__internal(parent_event_result){
		this.save_tran_success__info_for_save(parent_event_result)
	}

	//Handler for INTERNAL event of "info for save"
	info_for_save__internal(parent_event_result){
		this.info_for_save__rs_for_save(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "api input ui call api"
	api_input_ui_call_api__action_button_click(){
		this.api_input_ui_call_api__ide_call()
	}

	//Handler for INTERNAL event of "ide call"
	ide_call__internal(parent_event_result){
		this.ide_call__info_success_for_api(parent_event_result)
	}

	//Handler for INTERNAL event of "info success for api"
	info_success_for_api__internal(parent_event_result){
		this.info_success_for_api__rs__for_api(parent_event_result)
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1677304120726"
		let event_params={"caller_name":"page_load__cf_for_pl","event_desc":"CF for PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__ssp_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1677304169809"
		let event_params={"caller_name":"search_search__ssp_for_search","event_desc":"SSP for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_search__brfq_for_srch,"
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
	ssp_for_search__brfq_for_srch(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search"
		let destn_id="list"
		let parent_source_id="search_search"
		let event_code="e_1677304184184"
		let event_params={"caller_name":"ssp_for_search__brfq_for_srch","event_desc":"BRFQ for srch","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1670589169341":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1670589169341","dtt_desc":"Core API Process Log","ds_eligible":"DS_1677305967358","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS CoreAPI Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1670595016379","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1670595016738","date_format":true},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1670595017077","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1670595017229","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1670595018370","date_format":false}],"joins":[]},"eq_text":"SELECT DISTINCT PROCESSING_SYSTEM,                 STATUS,                 NPSSCAPL_ID,                 PROCESS_STATUS,                 CREATED_DATE,                 PROCESS_NAME,                 DT_CODE,                 DTT_CODE   FROM (SELECT TS.TS_ID,                TS.LOCKED_BY,                TS.LOCKED_BY_NAME,                NT.NPSSCAPL_ID,                NT.PROCESS_NAME,                NT.PROCESSING_SYSTEM,                NT.RESPONSE_CODE,                NT.PROCESS_REF_NO,                NT.REQUEST_DATA_JSON,                NT.PROCESS_STATUS,                NT.STATUS,                NT.TENANT_ID,                NT.CREATED_DATE,                NT.DT_CODE,                NT.DTT_CODE           FROM NPSS_CORE_API_PROCESS_LOG NT           LEFT JOIN TRANSACTION_SET TS ON NT.NPSSCAPL_ID = TS.TRN_ID                                       AND NT.DTT_CODE = TS.DTT_CODE) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Core API Process log CCD","filter":[],"databinding":[{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__clear_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1677304239070"
		let event_params={"caller_name":"search_clear__clear_ui","event_desc":"Clear UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__bt_for_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="api_input_ui"
		let parent_source_id=""
		let event_code="e_1677304602832"
		let event_params={"caller_name":"list__bt_for_list","event_desc":"BT for LIST","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "api input ui clear"
	api_input_ui_clear__cui_for_api() { 
		let Dest_Is_ctrl=true
		
		let source_id="api_input_ui_clear"
		let destn_id="api_input_ui"
		let parent_source_id=""
		let event_code="e_1677304621807"
		let event_params={"caller_name":"api_input_ui_clear__cui_for_api","event_desc":"CUI for API","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "api input ui save"
	api_input_ui_save__validate_ele() { 
		let Dest_Is_ctrl=true
		
		let source_id="api_input_ui_save"
		let destn_id="api_input_ui"
		let parent_source_id=""
		let event_code="e_1677305070997"
		let event_params={"caller_name":"api_input_ui_save__validate_ele","event_desc":"Validate ELE","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="validate_ele__save_tran_success,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "validate ele"
	validate_ele__save_tran_success(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="validate_ele"
		let destn_id="api_input_ui"
		let parent_source_id="api_input_ui_save"
		let event_code="e_1677305076773"
		let event_params={"caller_name":"validate_ele__save_tran_success","event_desc":"Save Tran success","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_save","raiseparam":{"reset_selection":"Y","need_clear_value":"Y","no_change_status_on_modify":"N","release_lock":"Y","clear_cache":"Y"},"parent_event_result":"SUCCESS"}
		let handler_code="save_tran"
		let internals="save_tran_success__info_for_save,"
		let event_data={}
		let data_source={}
		try {
			this.handler.save_tran(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "save tran success"
	save_tran_success__info_for_save(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="save_tran_success"
		let destn_id=""
		let parent_source_id="validate_ele"
		let event_code="e_1677305153943"
		let event_params={"caller_name":"save_tran_success__info_for_save","event_desc":"INFO for save","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"API Request has been saved successfully.","root_source_id":"api_input_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_for_save__rs_for_save,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for save"
	info_for_save__rs_for_save(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_for_save"
		let destn_id=""
		let parent_source_id="save_tran_success"
		let event_code="e_1677305175358"
		let event_params={"caller_name":"info_for_save__rs_for_save","event_desc":"RS for save","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "api input ui call api"
	api_input_ui_call_api__ide_call() { 
		let Dest_Is_ctrl=true
		
		let source_id="api_input_ui_call_api"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1677305538537"
		let event_params={"caller_name":"api_input_ui_call_api__ide_call","event_desc":"ide call","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_call_api","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="ide_call__info_success_for_api,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ide call"
	ide_call__info_success_for_api(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ide_call"
		let destn_id=""
		let parent_source_id="api_input_ui_call_api"
		let event_code="e_1677305568177"
		let event_params={"caller_name":"ide_call__info_success_for_api","event_desc":"info success for API","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Core API liquidityPosition has been called successfully, Pl see the request and response in View Process Logs screen.","root_source_id":"api_input_ui_call_api","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_success_for_api__rs__for_api,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info success for api"
	info_success_for_api__rs__for_api(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_success_for_api"
		let destn_id=""
		let parent_source_id="ide_call"
		let event_code="e_1677305765749"
		let event_params={"caller_name":"info_success_for_api__rs__for_api","event_desc":"RS  FOR API","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_call_api","raiseparam":{},"parent_event_result":"SUCCESS"}
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
