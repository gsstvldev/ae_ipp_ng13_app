/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27703 
Modified By     : Admin 
Modified Date   : 2023-Jan-05 12:50 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_camt052
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'

@Component({
	selector: 's_view_camt052',
	templateUrl: './s_view_camt052.component.html',
	styleUrls: ['./s_view_camt052.component.css'],
	providers:[]
})
    
// Start of class 
export class s_view_camt052Component implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_view_camt052"
	wftpa_id : string = "WFT_NPSS_P_1304_1672475491944_0"
	cg_code : string = "CG_1304_1672474042221"
	key_column : any = {"dtt_1304_1672471459948":"NCAR_ID","dtt_1304_1672471952205":"NCACN_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "list"
	uicgc_2 : string = "navigation_ui"
	uicgc_3 : string = "message_data_ui"
	uicgc_4 : string = "search"
	uicgc_5 : string = "back_ui"
	key_events : any = {}
	btl_1304_1672474581833 : string = "p_message_data_layout"
	btl_1304_1672474543218 : string = "p_main_layout"
	btl_1304_1672474452916 : string = "p_search_layout"
	forms : any = ["uicgc_4","uicgc_3","uicgc_5","uicgc_2"]
	p_search_layout__spap_for_nav_search_showpopup : boolean = false
	list : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_message_data : any = {}
	message_data_ui : any = {}
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	back_ui : any = {}
	back_ui_back : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ) {
    
	}
    
	ngOnInit() {

		// Component level properties - "List" 
		this.list.uictrl_code = "datatable"
		this.list.uicgc_desc = "List"
		this.list.uicgc_code = "uicgc_1"
		this.list.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.list.datasource = {"default":{"dt_1304_1672471156312":{"dtt_1304_1672471459948":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1672471459948","dtt_desc":"NPSS CAMT Account Report","ds_eligible":"DS_1672476226315","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS CAMT Act Report AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CAMT_ACCOUNT_REPORT ~NCAR","category":"NPSS_CAMT_ACCOUNT_REPORT","loc":"9 342","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"ncar_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"report_id_checked":true,"rpt_created_datetime_checked":true,"iban_checked":true,"account_currency_checked":true,"bic_checked":true,"cr_dr_indicator_checked":true,"header_msg_id_checked":true,"account_name_checked":true,"balance_amount_checked":true,"rpt_bal_datetime_checked":true,"message_data_checked":true,"balance_type_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1672471459948"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NCAR_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"REPORT_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"RPT_CREATED_DATETIME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"BIC","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CR_DR_INDICATOR","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"HEADER_MSG_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"ACCOUNT_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"BALANCE_TYPE_CODE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"BALANCE_AMOUNT","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"RPT_BAL_DATETIME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MESSAGE_DATA","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NCAR","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CAMT_ACCOUNT_REPORT ","alias_name":"NCAR","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NCAR_ID,REPORT_ID,RPT_CREATED_DATETIME,IBAN,ACCOUNT_CURRENCY,BIC,CR_DR_INDICATOR,HEADER_MSG_ID,ACCOUNT_NAME,BALANCE_TYPE_CODE,BALANCE_AMOUNT,RPT_BAL_DATETIME,MESSAGE_DATA,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NCAR.NCAR_ID,NCAR.REPORT_ID,NCAR.RPT_CREATED_DATETIME,NCAR.IBAN,NCAR.ACCOUNT_CURRENCY,NCAR.BIC,NCAR.CR_DR_INDICATOR,NCAR.HEADER_MSG_ID,NCAR.ACCOUNT_NAME,NCAR.BALANCE_TYPE_CODE,NCAR.BALANCE_AMOUNT,NCAR.RPT_BAL_DATETIME,NCAR.MESSAGE_DATA,NCAR.CREATED_BY,NCAR.CREATED_BY_NAME,NCAR.CREATED_BY_STS_ID,NCAR.CREATED_DATE,NCAR.DT_CODE,NCAR.DT_DESCRIPTION,NCAR.DTT_CODE,NCAR.DTT_DESCRIPTION,NCAR.MODIFIED_BY,NCAR.MODIFIED_BY_NAME,NCAR.MODIFIED_BY_STS_ID,NCAR.MODIFIED_DATE,NCAR.PRCT_ID,NCAR.STATUS,NCAR.PROCESS_STATUS,NCAR.SYSTEM_ID,NCAR.SYSTEM_NAME,NCAR.TENANT_ID,NCAR.APP_ID,NCAR.VERSION_NO FROM NPSS_CAMT_ACCOUNT_REPORT  NCAR)T $WHERE order by NCAR_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS CAMT Acct Report AQ CCD","filter":[],"databinding":[{"header":"Header Msg ID","target_column":"HEADER_MSG_ID","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Report ID","target_column":"REPORT_ID","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Report Created Date & Time","target_column":"RPT_CREATED_DATETIME","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Account Currency","target_column":"ACCOUNT_CURRENCY","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Account Name","target_column":"ACCOUNT_NAME","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"BIC","target_column":"BIC","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Balance Type Code","target_column":"BALANCE_TYPE_CODE","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Balance Amount","target_column":"BALANCE_AMOUNT","alias_name":"NCAR","alignment":"Right","width":"","format":"","date_format":false,"currency_format":false},{"header":"Cr Dr Indicator","target_column":"CR_DR_INDICATOR","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Report Balance Date","target_column":"RPT_BAL_DATETIME","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		this.list.context_menu = []
		this.list.views = {}
		this.list.onChangecomponent = new EventEmitter<any>()
		this.list.show = true
		this.list.dynamic_param = {}
	
		// Component level properties - "Navigation UI" 
		this.navigation_ui.uictrl_code = "dynamic_ui"
		this.navigation_ui.uicgc_desc = "Navigation UI"
		this.navigation_ui.uicgc_code = "uicgc_2"
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
		
		// "View Message Data" Button of "Navigation UI" component
		this.navigation_ui_view_message_data.label_name = "View Message Data"
		this.navigation_ui_view_message_data.show = true
		this.navigation_ui_view_message_data.disabled = true
		this.navigation_ui_view_message_data.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_message_data.dynamic_param = {}
		this.navigation_ui_view_message_data.role = []
		this.navigation_ui_view_message_data.action = ""
	
		// Component level properties - "Message Data UI" 
		this.message_data_ui.uictrl_code = "dynamic_ui"
		this.message_data_ui.uicgc_desc = "Message Data UI"
		this.message_data_ui.uicgc_code = "uicgc_3"
		this.message_data_ui.params = {}
		this.message_data_ui.datasource = {}
		this.message_data_ui.context_menu = []
		this.message_data_ui.views = {"first":"DTT_1304_1672471459948","is_tab_mode":"N","dtt_1304_1672471459948":{"0":[{"dttv_id":"NPSS Camt 052 Message data UI","tab_order":0,"tab_name":"","uicgc_description":"Message Data UI","role_description":"default","dtt_description":"NPSS CAMT Account Report"}]}}
		this.message_data_ui.onChangecomponent = new EventEmitter<any>()
		this.message_data_ui.show = true
		this.message_data_ui.dynamic_param = {}
		this.message_data_ui.f_npss_camt_052_message_data_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.message_data_ui.form_name = "f_npss_camt_052_message_data_ui"
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1672471459948","is_tab_mode":"N","dtt_1304_1672471459948":{"0":[{"dttv_id":"NPSS Camt 052 SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS CAMT Account Report"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_camt_052_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_camt_052_srch"
		
		// "clear" Button of "Search" component
		this.search_clear.label_name = "clear"
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
	
		// Component level properties - "Back UI" 
		this.back_ui.uictrl_code = "dynamic_ui"
		this.back_ui.uicgc_desc = "Back UI"
		this.back_ui.uicgc_code = "uicgc_5"
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
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_in_page_load()
	}

	//Handler for INTERNAL event of "cf in page load"
	cf_in_page_load__internal(parent_event_result){
		this.cf_in_page_load__tbc_for_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_search()
		this.search_search__close_popup()
	}

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__internal(parent_event_result){
		this.ssp_for_search__brfq_for_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for list"
	brfq_for_list__internal(parent_event_result){
		this.brfq_for_list__sfr_for_list(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "list"
	list__selection_changed(){
		this.list__svm_for_list()
		this.list__ssr_for_md_ui()
		this.list__ee_for_vmd()
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message data"
	navigation_ui_view_message_data__action_button_click(){
		this.navigation_ui_view_message_data__sp_for_vmd()
		this.navigation_ui_view_message_data__bt_for_vmd()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__cui_for_nav_search()
		this.navigation_ui_search__spap_for_nav_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_for_search_clear()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_in_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672474768662"
		let event_params={"caller_name":"page_load__cf_in_page_load","event_desc":"CF in Page Load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
		let handler_code="create_form"
		let internals="cf_in_page_load__tbc_for_search,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cf in page load"
	cf_in_page_load__tbc_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_in_page_load"
		let destn_id="search_search"
		let parent_source_id="page_load"
		let event_code="e_1672474796989"
		let event_params={"caller_name":"cf_in_page_load__tbc_for_search","event_desc":"TBC for SEarch","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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
	search_search__ssp_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1672474819733"
		let event_params={"caller_name":"search_search__ssp_for_search","event_desc":"SSP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_search__brfq_for_list,"
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
	search_search__close_popup() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672481992207"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__close_popup","event_desc":"Close Popup","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__brfq_for_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search"
		let destn_id="list"
		let parent_source_id="search_search"
		let event_code="e_1672474843740"
		let event_params={"caller_name":"ssp_for_search__brfq_for_list","event_desc":"BRFQ for List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_list__sfr_for_list,"
		let event_data={}
		let data_source={"default":{"dt_1304_1672471156312":{"dtt_1304_1672471459948":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1672471459948","dtt_desc":"NPSS CAMT Account Report","ds_eligible":"DS_1672476226315","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS CAMT Act Report AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CAMT_ACCOUNT_REPORT ~NCAR","category":"NPSS_CAMT_ACCOUNT_REPORT","loc":"9 342","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"ncar_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"report_id_checked":true,"rpt_created_datetime_checked":true,"iban_checked":true,"account_currency_checked":true,"bic_checked":true,"cr_dr_indicator_checked":true,"header_msg_id_checked":true,"account_name_checked":true,"balance_amount_checked":true,"rpt_bal_datetime_checked":true,"message_data_checked":true,"balance_type_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1672471459948"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NCAR_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"REPORT_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"RPT_CREATED_DATETIME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"BIC","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CR_DR_INDICATOR","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"HEADER_MSG_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"ACCOUNT_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"BALANCE_TYPE_CODE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"BALANCE_AMOUNT","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"RPT_BAL_DATETIME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MESSAGE_DATA","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NCAR","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CAMT_ACCOUNT_REPORT ","alias_name":"NCAR","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NCAR_ID,REPORT_ID,RPT_CREATED_DATETIME,IBAN,ACCOUNT_CURRENCY,BIC,CR_DR_INDICATOR,HEADER_MSG_ID,ACCOUNT_NAME,BALANCE_TYPE_CODE,BALANCE_AMOUNT,RPT_BAL_DATETIME,MESSAGE_DATA,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NCAR.NCAR_ID,NCAR.REPORT_ID,NCAR.RPT_CREATED_DATETIME,NCAR.IBAN,NCAR.ACCOUNT_CURRENCY,NCAR.BIC,NCAR.CR_DR_INDICATOR,NCAR.HEADER_MSG_ID,NCAR.ACCOUNT_NAME,NCAR.BALANCE_TYPE_CODE,NCAR.BALANCE_AMOUNT,NCAR.RPT_BAL_DATETIME,NCAR.MESSAGE_DATA,NCAR.CREATED_BY,NCAR.CREATED_BY_NAME,NCAR.CREATED_BY_STS_ID,NCAR.CREATED_DATE,NCAR.DT_CODE,NCAR.DT_DESCRIPTION,NCAR.DTT_CODE,NCAR.DTT_DESCRIPTION,NCAR.MODIFIED_BY,NCAR.MODIFIED_BY_NAME,NCAR.MODIFIED_BY_STS_ID,NCAR.MODIFIED_DATE,NCAR.PRCT_ID,NCAR.STATUS,NCAR.PROCESS_STATUS,NCAR.SYSTEM_ID,NCAR.SYSTEM_NAME,NCAR.TENANT_ID,NCAR.APP_ID,NCAR.VERSION_NO FROM NPSS_CAMT_ACCOUNT_REPORT  NCAR)T $WHERE order by NCAR_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS CAMT Acct Report AQ CCD","filter":[],"databinding":[{"header":"Header Msg ID","target_column":"HEADER_MSG_ID","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Report ID","target_column":"REPORT_ID","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Report Created Date & Time","target_column":"RPT_CREATED_DATETIME","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Account Currency","target_column":"ACCOUNT_CURRENCY","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Account Name","target_column":"ACCOUNT_NAME","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"BIC","target_column":"BIC","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Balance Type Code","target_column":"BALANCE_TYPE_CODE","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Balance Amount","target_column":"BALANCE_AMOUNT","alias_name":"NCAR","alignment":"Right","width":"","format":"","date_format":false,"currency_format":false},{"header":"Cr Dr Indicator","target_column":"CR_DR_INDICATOR","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Report Balance Date","target_column":"RPT_BAL_DATETIME","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for list"
	brfq_for_list__sfr_for_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_list"
		let destn_id="list"
		let parent_source_id="ssp_for_search"
		let event_code="e_1672474861580"
		let event_params={"caller_name":"brfq_for_list__sfr_for_list","event_desc":"SFR for List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1672471156312":{"dtt_1304_1672471459948":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1672471459948","dtt_desc":"NPSS CAMT Account Report","ds_eligible":"DS_1672476226315","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS CAMT Act Report AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CAMT_ACCOUNT_REPORT ~NCAR","category":"NPSS_CAMT_ACCOUNT_REPORT","loc":"9 342","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"ncar_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"report_id_checked":true,"rpt_created_datetime_checked":true,"iban_checked":true,"account_currency_checked":true,"bic_checked":true,"cr_dr_indicator_checked":true,"header_msg_id_checked":true,"account_name_checked":true,"balance_amount_checked":true,"rpt_bal_datetime_checked":true,"message_data_checked":true,"balance_type_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1672471459948"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NCAR_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"REPORT_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"RPT_CREATED_DATETIME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"BIC","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CR_DR_INDICATOR","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"HEADER_MSG_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"ACCOUNT_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"BALANCE_TYPE_CODE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"BALANCE_AMOUNT","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"RPT_BAL_DATETIME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MESSAGE_DATA","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NCAR","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CAMT_ACCOUNT_REPORT ","alias_name":"NCAR","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NCAR_ID,REPORT_ID,RPT_CREATED_DATETIME,IBAN,ACCOUNT_CURRENCY,BIC,CR_DR_INDICATOR,HEADER_MSG_ID,ACCOUNT_NAME,BALANCE_TYPE_CODE,BALANCE_AMOUNT,RPT_BAL_DATETIME,MESSAGE_DATA,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NCAR.NCAR_ID,NCAR.REPORT_ID,NCAR.RPT_CREATED_DATETIME,NCAR.IBAN,NCAR.ACCOUNT_CURRENCY,NCAR.BIC,NCAR.CR_DR_INDICATOR,NCAR.HEADER_MSG_ID,NCAR.ACCOUNT_NAME,NCAR.BALANCE_TYPE_CODE,NCAR.BALANCE_AMOUNT,NCAR.RPT_BAL_DATETIME,NCAR.MESSAGE_DATA,NCAR.CREATED_BY,NCAR.CREATED_BY_NAME,NCAR.CREATED_BY_STS_ID,NCAR.CREATED_DATE,NCAR.DT_CODE,NCAR.DT_DESCRIPTION,NCAR.DTT_CODE,NCAR.DTT_DESCRIPTION,NCAR.MODIFIED_BY,NCAR.MODIFIED_BY_NAME,NCAR.MODIFIED_BY_STS_ID,NCAR.MODIFIED_DATE,NCAR.PRCT_ID,NCAR.STATUS,NCAR.PROCESS_STATUS,NCAR.SYSTEM_ID,NCAR.SYSTEM_NAME,NCAR.TENANT_ID,NCAR.APP_ID,NCAR.VERSION_NO FROM NPSS_CAMT_ACCOUNT_REPORT  NCAR)T $WHERE order by NCAR_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS CAMT Acct Report AQ CCD","filter":[],"databinding":[{"header":"Header Msg ID","target_column":"HEADER_MSG_ID","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Report ID","target_column":"REPORT_ID","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Report Created Date & Time","target_column":"RPT_CREATED_DATETIME","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Account Currency","target_column":"ACCOUNT_CURRENCY","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Account Name","target_column":"ACCOUNT_NAME","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"BIC","target_column":"BIC","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Balance Type Code","target_column":"BALANCE_TYPE_CODE","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Balance Amount","target_column":"BALANCE_AMOUNT","alias_name":"NCAR","alignment":"Right","width":"","format":"","date_format":false,"currency_format":false},{"header":"Cr Dr Indicator","target_column":"CR_DR_INDICATOR","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Report Balance Date","target_column":"RPT_BAL_DATETIME","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "list"
	list__svm_for_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="list"
		let parent_source_id=""
		let event_code="e_1672474885540"
		let event_params={"caller_name":"list__svm_for_list","event_desc":"SVM for List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"list":{"e_1672474885540":{"dts":{"dt_1304_1672471156312":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1672474885540","dt_code":"DT_1304_1672471156312","dtt_code":"","dt_desc":"NPSS Liquidity Management Group","dtt_desc":"NPSS CAMT Account Report","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"ncar_id","level":"MI_LEVEL","name":"MI_LEVEL_ncar_id","setd3name":"ncar_id"},{"type":"LOCAL","column_name":"header_msg_id","level":"MI_LEVEL","name":"MI_LEVEL_header_msg_id","setd3name":"header_msg_id"},{"type":"LOCAL","column_name":"message_data","level":"MI_LEVEL","name":"MI_LEVEL_message_data","setd3name":"message_data"},{"type":"LOCAL","column_name":"iban","level":"MI_LEVEL","name":"MI_LEVEL_iban","setd3name":"iban"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1672471156312":{"dtt_1304_1672471459948":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1672471459948","dtt_desc":"NPSS CAMT Account Report","ds_eligible":"DS_1672476226315","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS CAMT Act Report AQ","eq_type":"S","eq_mode":"A","eq_designer_json":{"columns":{"class":"go.GraphLinksModel","copiesarrays":true,"copiesarrayobjects":true,"linkfromportidproperty":"fromPort","linktoportidproperty":"toPort","nodedataarray":[{"key":"NPSS_CAMT_ACCOUNT_REPORT ~NCAR","category":"NPSS_CAMT_ACCOUNT_REPORT","loc":"9 342","leftarray":[],"rightarray":[],"toparray":[],"bottomarray":[],"ncar_id_checked":true,"created_by_checked":true,"created_by_name_checked":true,"created_by_sts_id_checked":true,"created_date_checked":true,"dtg_code_checked":true,"dtg_description_checked":true,"dt_code_checked":true,"dt_description_checked":true,"modified_by_checked":true,"modified_by_name_checked":true,"modified_by_sts_id_checked":true,"modified_date_checked":true,"prct_id_checked":true,"status_checked":true,"process_status_checked":true,"system_id_checked":true,"system_name_checked":true,"tenant_id_checked":true,"app_id_checked":true,"version_no_checked":true,"report_id_checked":true,"rpt_created_datetime_checked":true,"iban_checked":true,"account_currency_checked":true,"bic_checked":true,"cr_dr_indicator_checked":true,"header_msg_id_checked":true,"account_name_checked":true,"balance_amount_checked":true,"rpt_bal_datetime_checked":true,"message_data_checked":true,"balance_type_code_checked":true}],"linkdataarray":[]},"joins":[],"dtts":["DTT_1304_1672471459948"],"app_dtts":[]},"eq_json":{"columns":[{"column_name":"NCAR_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"REPORT_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"RPT_CREATED_DATETIME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"IBAN","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"ACCOUNT_CURRENCY","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"BIC","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CR_DR_INDICATOR","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"HEADER_MSG_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"ACCOUNT_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"BALANCE_TYPE_CODE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"BALANCE_AMOUNT","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"RPT_BAL_DATETIME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MESSAGE_DATA","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_BY","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_BY_STS_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"CREATED_DATE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DTG_CODE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DTG_DESCRIPTION","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DT_CODE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"DT_DESCRIPTION","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_BY_STS_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"MODIFIED_DATE","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"PRCT_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"STATUS","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"PROCESS_STATUS","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"SYSTEM_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"SYSTEM_NAME","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"TENANT_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"APP_ID","alias_name":"NCAR","date_format":false,"currency_format":false},{"column_name":"VERSION_NO","alias_name":"NCAR","date_format":false,"currency_format":false}],"joins":[{"table_name":"NPSS_CAMT_ACCOUNT_REPORT ","alias_name":"NCAR","join_type":"","condition":"","sort_order":""}]},"eq_text":"SELECT NCAR_ID,REPORT_ID,RPT_CREATED_DATETIME,IBAN,ACCOUNT_CURRENCY,BIC,CR_DR_INDICATOR,HEADER_MSG_ID,ACCOUNT_NAME,BALANCE_TYPE_CODE,BALANCE_AMOUNT,RPT_BAL_DATETIME,MESSAGE_DATA,CREATED_BY,CREATED_BY_NAME,CREATED_BY_STS_ID,CREATED_DATE,DT_CODE,DT_DESCRIPTION,DTT_CODE,DTT_DESCRIPTION,MODIFIED_BY,MODIFIED_BY_NAME,MODIFIED_BY_STS_ID,MODIFIED_DATE,PRCT_ID,STATUS,PROCESS_STATUS,SYSTEM_ID,SYSTEM_NAME,TENANT_ID,APP_ID,VERSION_NO,'SELECTED' NODE_CATEGORY FROM(SELECT NCAR.NCAR_ID,NCAR.REPORT_ID,NCAR.RPT_CREATED_DATETIME,NCAR.IBAN,NCAR.ACCOUNT_CURRENCY,NCAR.BIC,NCAR.CR_DR_INDICATOR,NCAR.HEADER_MSG_ID,NCAR.ACCOUNT_NAME,NCAR.BALANCE_TYPE_CODE,NCAR.BALANCE_AMOUNT,NCAR.RPT_BAL_DATETIME,NCAR.MESSAGE_DATA,NCAR.CREATED_BY,NCAR.CREATED_BY_NAME,NCAR.CREATED_BY_STS_ID,NCAR.CREATED_DATE,NCAR.DT_CODE,NCAR.DT_DESCRIPTION,NCAR.DTT_CODE,NCAR.DTT_DESCRIPTION,NCAR.MODIFIED_BY,NCAR.MODIFIED_BY_NAME,NCAR.MODIFIED_BY_STS_ID,NCAR.MODIFIED_DATE,NCAR.PRCT_ID,NCAR.STATUS,NCAR.PROCESS_STATUS,NCAR.SYSTEM_ID,NCAR.SYSTEM_NAME,NCAR.TENANT_ID,NCAR.APP_ID,NCAR.VERSION_NO FROM NPSS_CAMT_ACCOUNT_REPORT  NCAR)T $WHERE order by NCAR_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS CAMT Acct Report AQ CCD","filter":[],"databinding":[{"header":"Header Msg ID","target_column":"HEADER_MSG_ID","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Report ID","target_column":"REPORT_ID","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Report Created Date & Time","target_column":"RPT_CREATED_DATETIME","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Account Currency","target_column":"ACCOUNT_CURRENCY","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Account Name","target_column":"ACCOUNT_NAME","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"BIC","target_column":"BIC","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Balance Type Code","target_column":"BALANCE_TYPE_CODE","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Balance Amount","target_column":"BALANCE_AMOUNT","alias_name":"NCAR","alignment":"Right","width":"","format":"","date_format":false,"currency_format":false},{"header":"Cr Dr Indicator","target_column":"CR_DR_INDICATOR","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false},{"header":"Report Balance Date","target_column":"RPT_BAL_DATETIME","alias_name":"NCAR","alignment":"Left","width":"","format":"","date_format":false,"currency_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "list"
	list__ssr_for_md_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="message_data_ui"
		let parent_source_id=""
		let event_code="e_1672474999489"
		let event_params={"caller_name":"list__ssr_for_md_ui","event_desc":"SSR for MD UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{}}
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
	list__ee_for_vmd() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="navigation_ui_view_message_data"
		let parent_source_id=""
		let event_code="e_1672481928058"
		let event_params={"caller_name":"list__ee_for_vmd","event_desc":"EE for VMD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__sp_for_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672474913770"
		let event_params={"caller_name":"back_ui_back__sp_for_back","event_desc":"SP for Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1672474543218"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message data"
	navigation_ui_view_message_data__sp_for_vmd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_data"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672474945337"
		let event_params={"caller_name":"navigation_ui_view_message_data__sp_for_vmd","event_desc":"SP for VMD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_data","raiseparam":{"profile_code":"BTL_1304_1672474581833"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message data"
	navigation_ui_view_message_data__bt_for_vmd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_data"
		let destn_id="message_data_ui"
		let parent_source_id=""
		let event_code="e_1672474982345"
		let event_params={"caller_name":"navigation_ui_view_message_data__bt_for_vmd","event_desc":"BT for VMD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_data","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__cui_for_nav_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1672475021976"
		let event_params={"caller_name":"navigation_ui_search__cui_for_nav_search","event_desc":"CUI for Nav search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__spap_for_nav_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672475044312"
		let event_params={"caller_name":"navigation_ui_search__spap_for_nav_search","event_desc":"SPAP for Nav Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_nav_search","selector":"p_search_layout","profile_code":"BTL_1304_1672474452916","window_title":"Search","window_height":450,"window_width":"900px","window_close_icon":"Y","eventdes":"spap_for_nav_search","eventcode":"E_1672475044312"}}
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
	search_clear__cui_for_search_clear() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1672475092777"
		let event_params={"caller_name":"search_clear__cui_for_search_clear","event_desc":"CUI for search Clear","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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
