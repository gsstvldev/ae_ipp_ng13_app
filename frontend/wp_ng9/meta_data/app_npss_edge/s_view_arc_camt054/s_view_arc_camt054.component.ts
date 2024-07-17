/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 36052 
Modified By     : Admin 
Modified Date   : 2024-Jul-17 7:20 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_arc_camt054
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'

@Component({
	selector: 's_view_arc_camt054',
	templateUrl: './s_view_arc_camt054.component.html',
	styleUrls: ['./s_view_arc_camt054.component.css'],
	providers:[]
})
    
// Start of class 
export class s_view_arc_camt054Component implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_view_arc_camt054"
	wftpa_id : string = "WFT_NPSS_P_1304_1686730218335_0"
	cg_code : string = "CG_1304_1686727754366"
	key_column : any = {"dtt_1304_1672471459948":"NCAR_ID","dtt_1304_1672471952205":"NCACN_ID","dtt_1304_1721132786653":"NPSSCPL_ID"}
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
	forms : any = ["uicgc_3","uicgc_4","uicgc_5","uicgc_2"]
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
		this.list.datasource = {"default":{"dt_1304_1672471156312":{"dtt_1304_1672471952205":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1672471952205","dtt_desc":"NPSS CAMT Acc Crdr Ntfn","ds_eligible":"DS_1686731648252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS ARC CAMT Act CDTR Ntfi MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"HEADER_MSG_ID","alias_name":"","mq_id":"MQ_1686729374983","date_format":false},{"column_name":"NOTIFICATION_ID","alias_name":"","mq_id":"MQ_1686729375255","date_format":false},{"column_name":"NTFN_CREATED_DATETIME","alias_name":"","mq_id":"MQ_1686729375503","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1686729375759","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1686729376815","date_format":false},{"column_name":"LIMIT_AMOUNT","alias_name":"","mq_id":"MQ_1686729377207","date_format":false},{"column_name":"CR_DR_INDICATOR","alias_name":"","mq_id":"MQ_1686729377647","date_format":false},{"column_name":"NTFN_STATUS","alias_name":"","mq_id":"MQ_1686729378103","date_format":false},{"column_name":"BOOKING_DATETIME","alias_name":"","mq_id":"MQ_1686729378638","date_format":false},{"column_name":"END_TO_END_ID","alias_name":"","mq_id":"MQ_1686729379175","date_format":false}],"joins":[]},"eq_text":"SELECT NCACN_ID,  HEADER_MSG_ID,  NOTIFICATION_ID,  NTFN_CREATED_DATETIME,  IBAN,  CURRENCY,  LIMIT_AMOUNT,  CR_DR_INDICATOR,  NTFN_STATUS,  BOOKING_DATETIME,  END_TO_END_ID,  MESSAGE_DATA,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO,  'SELECTED' NODE_CATEGORY FROM  (SELECT NCACN.NCACN_ID,    NCACN.HEADER_MSG_ID,    NCACN.NOTIFICATION_ID,    NCACN.NTFN_CREATED_DATETIME,    NCACN.IBAN,    NCACN.CURRENCY,    NCACN.LIMIT_AMOUNT,    NCACN.CR_DR_INDICATOR,    NCACN.NTFN_STATUS,    NCACN.BOOKING_DATETIME,    NCACN.END_TO_END_ID,    NCACN.MESSAGE_DATA,    NCACN.CREATED_BY,    NCACN.CREATED_BY_NAME,    NCACN.CREATED_BY_STS_ID,    NCACN.CREATED_DATE,    NCACN.DT_CODE,    NCACN.DT_DESCRIPTION,    NCACN.DTT_CODE,    NCACN.DTT_DESCRIPTION,    NCACN.MODIFIED_BY,    NCACN.MODIFIED_BY_NAME,    NCACN.MODIFIED_BY_STS_ID,    NCACN.MODIFIED_DATE,    NCACN.PRCT_ID,    NCACN.STATUS,    NCACN.PROCESS_STATUS,    NCACN.SYSTEM_ID,    NCACN.SYSTEM_NAME,    NCACN.TENANT_ID,    NCACN.APP_ID,    NCACN.VERSION_NO   FROM <arc_tran_db>.NPSS_CAMT_ACC_CRDR_NTFN NCACN)V $WHERE ORDER BY NCACN_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS ARC CAMT Act CDTR Ntfi MQ CCD","filter":[],"databinding":[{"header":"Header Msg ID","target_column":"HEADER_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Notification ID","target_column":"NOTIFICATION_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date & Time","target_column":"NTFN_CREATED_DATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Number","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Limit Amount","target_column":"LIMIT_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false},{"header":"Cr Dr Indicator","target_column":"CR_DR_INDICATOR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Notification Status","target_column":"NTFN_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Booking Date & time","target_column":"BOOKING_DATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"End to End ID","target_column":"END_TO_END_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.message_data_ui.views = {"first":"DTT_1304_1672471952205","is_tab_mode":"N","dtt_1304_1672471952205":{"0":[{"dttv_id":"NPSS CAMT Act CDTR NtFi UI","tab_order":0,"tab_name":"","uicgc_description":"Message Data UI","role_description":"default","dtt_description":"NPSS CAMT Acc Crdr Ntfn"}]}}
		this.message_data_ui.onChangecomponent = new EventEmitter<any>()
		this.message_data_ui.show = true
		this.message_data_ui.dynamic_param = {}
		this.message_data_ui.f_npss_camt_act_cdtr_ntfi_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.message_data_ui.form_name = "f_npss_camt_act_cdtr_ntfi_ui"
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1672471952205","is_tab_mode":"N","dtt_1304_1672471952205":{"0":[{"dttv_id":"NPSS Camt Act CDTR Ntfi SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS CAMT Acc Crdr Ntfn"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_camt_act_cdtr_ntfi_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_camt_act_cdtr_ntfi_srch"
		
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
		let data_source={"default":{"dt_1304_1672471156312":{"dtt_1304_1672471952205":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1672471952205","dtt_desc":"NPSS CAMT Acc Crdr Ntfn","ds_eligible":"DS_1686731648252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS ARC CAMT Act CDTR Ntfi MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"HEADER_MSG_ID","alias_name":"","mq_id":"MQ_1686729374983","date_format":false},{"column_name":"NOTIFICATION_ID","alias_name":"","mq_id":"MQ_1686729375255","date_format":false},{"column_name":"NTFN_CREATED_DATETIME","alias_name":"","mq_id":"MQ_1686729375503","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1686729375759","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1686729376815","date_format":false},{"column_name":"LIMIT_AMOUNT","alias_name":"","mq_id":"MQ_1686729377207","date_format":false},{"column_name":"CR_DR_INDICATOR","alias_name":"","mq_id":"MQ_1686729377647","date_format":false},{"column_name":"NTFN_STATUS","alias_name":"","mq_id":"MQ_1686729378103","date_format":false},{"column_name":"BOOKING_DATETIME","alias_name":"","mq_id":"MQ_1686729378638","date_format":false},{"column_name":"END_TO_END_ID","alias_name":"","mq_id":"MQ_1686729379175","date_format":false}],"joins":[]},"eq_text":"SELECT NCACN_ID,  HEADER_MSG_ID,  NOTIFICATION_ID,  NTFN_CREATED_DATETIME,  IBAN,  CURRENCY,  LIMIT_AMOUNT,  CR_DR_INDICATOR,  NTFN_STATUS,  BOOKING_DATETIME,  END_TO_END_ID,  MESSAGE_DATA,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO,  'SELECTED' NODE_CATEGORY FROM  (SELECT NCACN.NCACN_ID,    NCACN.HEADER_MSG_ID,    NCACN.NOTIFICATION_ID,    NCACN.NTFN_CREATED_DATETIME,    NCACN.IBAN,    NCACN.CURRENCY,    NCACN.LIMIT_AMOUNT,    NCACN.CR_DR_INDICATOR,    NCACN.NTFN_STATUS,    NCACN.BOOKING_DATETIME,    NCACN.END_TO_END_ID,    NCACN.MESSAGE_DATA,    NCACN.CREATED_BY,    NCACN.CREATED_BY_NAME,    NCACN.CREATED_BY_STS_ID,    NCACN.CREATED_DATE,    NCACN.DT_CODE,    NCACN.DT_DESCRIPTION,    NCACN.DTT_CODE,    NCACN.DTT_DESCRIPTION,    NCACN.MODIFIED_BY,    NCACN.MODIFIED_BY_NAME,    NCACN.MODIFIED_BY_STS_ID,    NCACN.MODIFIED_DATE,    NCACN.PRCT_ID,    NCACN.STATUS,    NCACN.PROCESS_STATUS,    NCACN.SYSTEM_ID,    NCACN.SYSTEM_NAME,    NCACN.TENANT_ID,    NCACN.APP_ID,    NCACN.VERSION_NO   FROM <arc_tran_db>.NPSS_CAMT_ACC_CRDR_NTFN NCACN)V $WHERE ORDER BY NCACN_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS ARC CAMT Act CDTR Ntfi MQ CCD","filter":[],"databinding":[{"header":"Header Msg ID","target_column":"HEADER_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Notification ID","target_column":"NOTIFICATION_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date & Time","target_column":"NTFN_CREATED_DATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Number","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Limit Amount","target_column":"LIMIT_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false},{"header":"Cr Dr Indicator","target_column":"CR_DR_INDICATOR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Notification Status","target_column":"NTFN_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Booking Date & time","target_column":"BOOKING_DATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"End to End ID","target_column":"END_TO_END_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1672471156312":{"dtt_1304_1672471952205":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1672471952205","dtt_desc":"NPSS CAMT Acc Crdr Ntfn","ds_eligible":"DS_1686731648252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS ARC CAMT Act CDTR Ntfi MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"HEADER_MSG_ID","alias_name":"","mq_id":"MQ_1686729374983","date_format":false},{"column_name":"NOTIFICATION_ID","alias_name":"","mq_id":"MQ_1686729375255","date_format":false},{"column_name":"NTFN_CREATED_DATETIME","alias_name":"","mq_id":"MQ_1686729375503","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1686729375759","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1686729376815","date_format":false},{"column_name":"LIMIT_AMOUNT","alias_name":"","mq_id":"MQ_1686729377207","date_format":false},{"column_name":"CR_DR_INDICATOR","alias_name":"","mq_id":"MQ_1686729377647","date_format":false},{"column_name":"NTFN_STATUS","alias_name":"","mq_id":"MQ_1686729378103","date_format":false},{"column_name":"BOOKING_DATETIME","alias_name":"","mq_id":"MQ_1686729378638","date_format":false},{"column_name":"END_TO_END_ID","alias_name":"","mq_id":"MQ_1686729379175","date_format":false}],"joins":[]},"eq_text":"SELECT NCACN_ID,  HEADER_MSG_ID,  NOTIFICATION_ID,  NTFN_CREATED_DATETIME,  IBAN,  CURRENCY,  LIMIT_AMOUNT,  CR_DR_INDICATOR,  NTFN_STATUS,  BOOKING_DATETIME,  END_TO_END_ID,  MESSAGE_DATA,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO,  'SELECTED' NODE_CATEGORY FROM  (SELECT NCACN.NCACN_ID,    NCACN.HEADER_MSG_ID,    NCACN.NOTIFICATION_ID,    NCACN.NTFN_CREATED_DATETIME,    NCACN.IBAN,    NCACN.CURRENCY,    NCACN.LIMIT_AMOUNT,    NCACN.CR_DR_INDICATOR,    NCACN.NTFN_STATUS,    NCACN.BOOKING_DATETIME,    NCACN.END_TO_END_ID,    NCACN.MESSAGE_DATA,    NCACN.CREATED_BY,    NCACN.CREATED_BY_NAME,    NCACN.CREATED_BY_STS_ID,    NCACN.CREATED_DATE,    NCACN.DT_CODE,    NCACN.DT_DESCRIPTION,    NCACN.DTT_CODE,    NCACN.DTT_DESCRIPTION,    NCACN.MODIFIED_BY,    NCACN.MODIFIED_BY_NAME,    NCACN.MODIFIED_BY_STS_ID,    NCACN.MODIFIED_DATE,    NCACN.PRCT_ID,    NCACN.STATUS,    NCACN.PROCESS_STATUS,    NCACN.SYSTEM_ID,    NCACN.SYSTEM_NAME,    NCACN.TENANT_ID,    NCACN.APP_ID,    NCACN.VERSION_NO   FROM <arc_tran_db>.NPSS_CAMT_ACC_CRDR_NTFN NCACN)V $WHERE ORDER BY NCACN_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS ARC CAMT Act CDTR Ntfi MQ CCD","filter":[],"databinding":[{"header":"Header Msg ID","target_column":"HEADER_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Notification ID","target_column":"NOTIFICATION_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date & Time","target_column":"NTFN_CREATED_DATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Number","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Limit Amount","target_column":"LIMIT_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false},{"header":"Cr Dr Indicator","target_column":"CR_DR_INDICATOR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Notification Status","target_column":"NTFN_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Booking Date & time","target_column":"BOOKING_DATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"End to End ID","target_column":"END_TO_END_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_data={"list":{"e_1672474885540":{"dts":{"dt_1304_1672471156312":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1672474885540","dt_code":"DT_1304_1672471156312","dtt_code":"","dt_desc":"NPSS Liquidity Management Group","dtt_desc":"NPSS CAMT Acc Crdr Ntfn","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"header_msg_id","level":"MI_LEVEL","name":"MI_LEVEL_header_msg_id","setd3name":"header_msg_id"},{"type":"LOCAL","column_name":"iban","level":"MI_LEVEL","name":"MI_LEVEL_iban","setd3name":"iban"},{"type":"LOCAL","column_name":"ncacn_id","level":"MI_LEVEL","name":"MI_LEVEL_ncacn_id","setd3name":"ncacn_id"},{"type":"LOCAL","column_name":"notification_id","level":"MI_LEVEL","name":"MI_LEVEL_notification_id","setd3name":"notification_id"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1672471156312":{"dtt_1304_1672471952205":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1672471156312","dt_desc":"NPSS Liquidity Management Group","dtt_code":"DTT_1304_1672471952205","dtt_desc":"NPSS CAMT Acc Crdr Ntfn","ds_eligible":"DS_1686731648252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS ARC CAMT Act CDTR Ntfi MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"HEADER_MSG_ID","alias_name":"","mq_id":"MQ_1686729374983","date_format":false},{"column_name":"NOTIFICATION_ID","alias_name":"","mq_id":"MQ_1686729375255","date_format":false},{"column_name":"NTFN_CREATED_DATETIME","alias_name":"","mq_id":"MQ_1686729375503","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1686729375759","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1686729376815","date_format":false},{"column_name":"LIMIT_AMOUNT","alias_name":"","mq_id":"MQ_1686729377207","date_format":false},{"column_name":"CR_DR_INDICATOR","alias_name":"","mq_id":"MQ_1686729377647","date_format":false},{"column_name":"NTFN_STATUS","alias_name":"","mq_id":"MQ_1686729378103","date_format":false},{"column_name":"BOOKING_DATETIME","alias_name":"","mq_id":"MQ_1686729378638","date_format":false},{"column_name":"END_TO_END_ID","alias_name":"","mq_id":"MQ_1686729379175","date_format":false}],"joins":[]},"eq_text":"SELECT NCACN_ID,  HEADER_MSG_ID,  NOTIFICATION_ID,  NTFN_CREATED_DATETIME,  IBAN,  CURRENCY,  LIMIT_AMOUNT,  CR_DR_INDICATOR,  NTFN_STATUS,  BOOKING_DATETIME,  END_TO_END_ID,  MESSAGE_DATA,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO,  'SELECTED' NODE_CATEGORY FROM  (SELECT NCACN.NCACN_ID,    NCACN.HEADER_MSG_ID,    NCACN.NOTIFICATION_ID,    NCACN.NTFN_CREATED_DATETIME,    NCACN.IBAN,    NCACN.CURRENCY,    NCACN.LIMIT_AMOUNT,    NCACN.CR_DR_INDICATOR,    NCACN.NTFN_STATUS,    NCACN.BOOKING_DATETIME,    NCACN.END_TO_END_ID,    NCACN.MESSAGE_DATA,    NCACN.CREATED_BY,    NCACN.CREATED_BY_NAME,    NCACN.CREATED_BY_STS_ID,    NCACN.CREATED_DATE,    NCACN.DT_CODE,    NCACN.DT_DESCRIPTION,    NCACN.DTT_CODE,    NCACN.DTT_DESCRIPTION,    NCACN.MODIFIED_BY,    NCACN.MODIFIED_BY_NAME,    NCACN.MODIFIED_BY_STS_ID,    NCACN.MODIFIED_DATE,    NCACN.PRCT_ID,    NCACN.STATUS,    NCACN.PROCESS_STATUS,    NCACN.SYSTEM_ID,    NCACN.SYSTEM_NAME,    NCACN.TENANT_ID,    NCACN.APP_ID,    NCACN.VERSION_NO   FROM <arc_tran_db>.NPSS_CAMT_ACC_CRDR_NTFN NCACN)V $WHERE ORDER BY NCACN_ID DESC"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS ARC CAMT Act CDTR Ntfi MQ CCD","filter":[],"databinding":[{"header":"Header Msg ID","target_column":"HEADER_MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Notification ID","target_column":"NOTIFICATION_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Created Date & Time","target_column":"NTFN_CREATED_DATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Number","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Limit Amount","target_column":"LIMIT_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false},{"header":"Cr Dr Indicator","target_column":"CR_DR_INDICATOR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Notification Status","target_column":"NTFN_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Booking Date & time","target_column":"BOOKING_DATETIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"End to End ID","target_column":"END_TO_END_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
