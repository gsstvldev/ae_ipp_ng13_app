/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34725 
Modified By     : Admin 
Modified Date   : 2024-Mar-12 8:37 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_bct_file_download
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {npss_c_trigger_exchange_componentService} from '../../../custom_widget/npss_c_trigger_exchange_component/npss_c_trigger_exchange_component.service'

@Component({
	selector: 's_bct_file_download',
	templateUrl: './s_bct_file_download.component.html',
	styleUrls: ['./s_bct_file_download.component.css'],
	providers:[npss_c_trigger_exchange_componentService]
})
    
// Start of class 
export class s_bct_file_downloadComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_bct_file_download"
	wftpa_id : string = "WFT_NPSS_P_1304_1667481508178_0"
	cg_code : string = "CG_1408_1652104682877"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID","dtt_1304_1695130590062":"NPSSNPPL_ID","dtt_1304_1695214768145":"NAL_ID","dtt_1304_1700459090330":"NPSSPN_ID","dtt_1304_1701251364899":"NPSSPNB_ID","dtt_1304_1707202677013":"NPSSFE_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_exchange_queue"
	uicgc_1 : string = "exchange_detail"
	uicgc_2 : string = "queue"
	uicgc_3 : string = "navigation"
	key_events : any = {}
	btl_1408_1599718695457 : string = "p_exchange_layouts"
	btl_1408_1599718623569 : string = "p_exchange_queue"
	btl_1408_1591701718289 : string = "p_exchange_layout"
	forms : any = ["uicgc_3"]
	exchange_detail : any = {}
	queue : any = {}
	navigation : any = {}
	navigation_continue : any = {}
	navigation_back : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private npss_c_trigger_exchange_componentService:npss_c_trigger_exchange_componentService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Exchange Detail" 
		this.exchange_detail.uictrl_code = "exg_download"
		this.exchange_detail.uicgc_desc = "Exchange Detail"
		this.exchange_detail.uicgc_code = "uicgc_1"
		this.exchange_detail.params = {}
		this.exchange_detail.datasource = {}
		this.exchange_detail.context_menu = []
		this.exchange_detail.views = {}
		this.exchange_detail.onChangecomponent = new EventEmitter<any>()
		this.exchange_detail.show = true
		this.exchange_detail.dynamic_param = {}
	
		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_2"
		this.queue.params = {"need_search":"N","advance_dynamic_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dtt_code":"DTT_1304_1665901217208","ds_eligible":"DS_1667481930375","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS File Download MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"queue_desc","alias_name":"","mq_id":"MQ_1667209621443","date_format":false}],"joins":[]},"eq_text":"SELECT queue_desc,        queue_code,        product_code,        ffg_code,        create_flag,        upload_flag,        download_flag,        gateway_code   FROM (SELECT qr.role_id,                qr.queue_code,                pq.queue_desc,                pq.queue_code as processqueuecode,                CFP.product_code,                CFP.ffg_code,                CFP.create_flag,                CFP.upload_flag,                CFP.download_flag,                CFP.gateway_code,                CFP.screen_module as CFP_SM,                CFP.screen_menu_group as CFP_SMG,                CFP.screen_name as CFP_SN,                qr.Screen_Module as QR_SM,                qr.screen_menu_group as QR_SMG,                qr.screen_name as QR_SN           FROM core_q_status_roles qr          INNER JOIN <tran_db>.core_app_q_setup pq ON pq.queue_code = qr.queue_code          INNER JOIN <tran_db>.core_ffg_product_q CFP ON CFP.queue_code = qr.queue_code) vw $WHERE  GROUP BY queue_desc,           queue_code,           product_code,           ffg_code,           create_flag,           upload_flag,           download_flag,           gateway_code"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS File Download MQ CCD","filter":[{"filter_name":"CFP_SM","binding_name":"CFP_SM","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"CFP_SMG","binding_name":"CFP_SMG","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CFP_SN","binding_name":"CFP_SN","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DOWNLOAD_FLAG","binding_name":"DOWNLOAD_FLAG","binding_value":"","source_name":"YES","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PRODUCT_CODE","binding_name":"PRODUCT_CODE","binding_value":"","source_name":"ROOT_SCODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SM","binding_name":"QR_SM","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SMG","binding_name":"QR_SMG","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SN","binding_name":"QR_SN","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"queue_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.queue.context_menu = []
		this.queue.views = {}
		this.queue.onChangecomponent = new EventEmitter<any>()
		this.queue.show = true
		this.queue.dynamic_param = {}
	
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
		
		// "Continue" Button of "Navigation" component
		this.navigation_continue.label_name = "Continue"
		this.navigation_continue.show = true
		this.navigation_continue.disabled = false
		this.navigation_continue.params = {"icon_only":false,"uicgcc_style":"fa fa-exchange"}
		this.navigation_continue.dynamic_param = {}
		this.navigation_continue.role = []
		this.navigation_continue.action = ""
		
		// "Back" Button of "Navigation" component
		this.navigation_back.label_name = "Back"
		this.navigation_back.show = true
		this.navigation_back.disabled = false
		this.navigation_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.navigation_back.dynamic_param = {}
		this.navigation_back.role = []
		this.navigation_back.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_for_pl()
		this.page_load__brfq_for_queue()
		this.page_load__he_by_click_on_ed()
		this.page_load__de()
		this.page_load__he()
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_by_click_on_queue()
		this.queue__se_by_click_on_ql()
		this.queue__ee_for_nav_continue()
	}

	//Handler for INTERNAL event of "svm by click on queue"
	svm_by_click_on_queue__internal(parent_event_result){
		this.svm_by_click_on_queue__cc_for_queue(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation continue"
	navigation_continue__action_button_click(){
		this.navigation_continue__sp_for_nav_continue()
		this.navigation_continue__se_for_nav_back()
		this.navigation_continue__he_for_nav_continue()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation back"
	navigation_back__action_button_click(){
		this.navigation_back__rs_for_nav_back()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1591706388367"
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

	//Handler for DPSINIT event of "page_load"
	page_load__brfq_for_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1591706487697"
		let event_params={"caller_name":"page_load__brfq_for_queue","event_desc":"BRFQ for Queue","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dtt_code":"DTT_1304_1665901217208","ds_eligible":"DS_1667481930375","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS File Download MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"queue_desc","alias_name":"","mq_id":"MQ_1667209621443","date_format":false}],"joins":[]},"eq_text":"SELECT queue_desc,        queue_code,        product_code,        ffg_code,        create_flag,        upload_flag,        download_flag,        gateway_code   FROM (SELECT qr.role_id,                qr.queue_code,                pq.queue_desc,                pq.queue_code as processqueuecode,                CFP.product_code,                CFP.ffg_code,                CFP.create_flag,                CFP.upload_flag,                CFP.download_flag,                CFP.gateway_code,                CFP.screen_module as CFP_SM,                CFP.screen_menu_group as CFP_SMG,                CFP.screen_name as CFP_SN,                qr.Screen_Module as QR_SM,                qr.screen_menu_group as QR_SMG,                qr.screen_name as QR_SN           FROM core_q_status_roles qr          INNER JOIN <tran_db>.core_app_q_setup pq ON pq.queue_code = qr.queue_code          INNER JOIN <tran_db>.core_ffg_product_q CFP ON CFP.queue_code = qr.queue_code) vw $WHERE  GROUP BY queue_desc,           queue_code,           product_code,           ffg_code,           create_flag,           upload_flag,           download_flag,           gateway_code"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS File Download MQ CCD","filter":[{"filter_name":"CFP_SM","binding_name":"CFP_SM","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"CFP_SMG","binding_name":"CFP_SMG","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CFP_SN","binding_name":"CFP_SN","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DOWNLOAD_FLAG","binding_name":"DOWNLOAD_FLAG","binding_value":"","source_name":"YES","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PRODUCT_CODE","binding_name":"PRODUCT_CODE","binding_value":"","source_name":"ROOT_SCODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SM","binding_name":"QR_SM","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SMG","binding_name":"QR_SMG","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SN","binding_name":"QR_SN","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"queue_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_by_click_on_ed() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="exchange_detail"
		let parent_source_id=""
		let event_code="e_1591956691421"
		let event_params={"caller_name":"page_load__he_by_click_on_ed","event_desc":"HE by click on ED","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__de() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_continue"
		let parent_source_id=""
		let event_code="e_1599718853117"
		let event_params={"caller_name":"page_load__de","event_desc":"DE","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"expression":""}}
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
	page_load__he() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_back"
		let parent_source_id=""
		let event_code="e_1599718868446"
		let event_params={"caller_name":"page_load__he","event_desc":"HE","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__svm_by_click_on_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1591784182177"
		let event_params={"caller_name":"queue__svm_by_click_on_queue","event_desc":"SVM by click on queue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_by_click_on_queue__cc_for_queue,"
		let event_data={"queue":{"e_1591784182177":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1591784182177","dt_code":"DT_1304_1665901130705","dtt_code":"","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"FFG_CODE","level":"MI_LEVEL","name":"MI_LEVEL_FFG_CODE","setd3name":"FFG_CODE"},{"type":"LOCAL","column_name":"GATEWAY_CODE","level":"MI_LEVEL","name":"MI_LEVEL_GATEWAY_CODE","setd3name":"GATEWAY_CODE"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dtt_code":"DTT_1304_1665901217208","ds_eligible":"DS_1667481930375","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS File Download MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"queue_desc","alias_name":"","mq_id":"MQ_1667209621443","date_format":false}],"joins":[]},"eq_text":"SELECT queue_desc,        queue_code,        product_code,        ffg_code,        create_flag,        upload_flag,        download_flag,        gateway_code   FROM (SELECT qr.role_id,                qr.queue_code,                pq.queue_desc,                pq.queue_code as processqueuecode,                CFP.product_code,                CFP.ffg_code,                CFP.create_flag,                CFP.upload_flag,                CFP.download_flag,                CFP.gateway_code,                CFP.screen_module as CFP_SM,                CFP.screen_menu_group as CFP_SMG,                CFP.screen_name as CFP_SN,                qr.Screen_Module as QR_SM,                qr.screen_menu_group as QR_SMG,                qr.screen_name as QR_SN           FROM core_q_status_roles qr          INNER JOIN <tran_db>.core_app_q_setup pq ON pq.queue_code = qr.queue_code          INNER JOIN <tran_db>.core_ffg_product_q CFP ON CFP.queue_code = qr.queue_code) vw $WHERE  GROUP BY queue_desc,           queue_code,           product_code,           ffg_code,           create_flag,           upload_flag,           download_flag,           gateway_code"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS File Download MQ CCD","filter":[{"filter_name":"CFP_SM","binding_name":"CFP_SM","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"CFP_SMG","binding_name":"CFP_SMG","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CFP_SN","binding_name":"CFP_SN","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DOWNLOAD_FLAG","binding_name":"DOWNLOAD_FLAG","binding_value":"","source_name":"YES","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PRODUCT_CODE","binding_name":"PRODUCT_CODE","binding_value":"","source_name":"ROOT_SCODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SM","binding_name":"QR_SM","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SMG","binding_name":"QR_SMG","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SN","binding_name":"QR_SN","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Queue","target_column":"queue_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue"
	queue__se_by_click_on_ql() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="exchange_detail"
		let parent_source_id=""
		let event_code="e_1591956708228"
		let event_params={"caller_name":"queue__se_by_click_on_ql","event_desc":"SE by click on QL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":""}}
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

	//Handler for SELECTION_CHANGED event of "queue"
	queue__ee_for_nav_continue() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_continue"
		let parent_source_id=""
		let event_code="e_1599718910477"
		let event_params={"caller_name":"queue__ee_for_nav_continue","event_desc":"EE for Nav Continue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for INTERNAL event of "svm by click on queue"
	svm_by_click_on_queue__cc_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_by_click_on_queue"
		let destn_id=""
		let parent_source_id="queue"
		let event_code="e_1666239958955"
		let event_params={"caller_name":"svm_by_click_on_queue__cc_for_queue","event_desc":"CC for Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_trigger_exchange_componentService.fn_npss_c_trigger_exchange_component(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation continue"
	navigation_continue__sp_for_nav_continue() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_continue"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1599718825016"
		let event_params={"caller_name":"navigation_continue__sp_for_nav_continue","event_desc":"SP for Nav Continue","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_continue","raiseparam":{"profile_code":"BTL_1408_1599718695457"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation continue"
	navigation_continue__se_for_nav_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_continue"
		let destn_id="navigation_back"
		let parent_source_id=""
		let event_code="e_1599718880166"
		let event_params={"caller_name":"navigation_continue__se_for_nav_back","event_desc":"SE for Nav Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_continue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation continue"
	navigation_continue__he_for_nav_continue() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_continue"
		let destn_id="navigation_continue"
		let parent_source_id=""
		let event_code="e_1599718940822"
		let event_params={"caller_name":"navigation_continue__he_for_nav_continue","event_desc":"HE for Nav continue","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_continue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation back"
	navigation_back__rs_for_nav_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1599718834662"
		let event_params={"caller_name":"navigation_back__rs_for_nav_back","event_desc":"RS for NAV Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_back","raiseparam":{}}
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
