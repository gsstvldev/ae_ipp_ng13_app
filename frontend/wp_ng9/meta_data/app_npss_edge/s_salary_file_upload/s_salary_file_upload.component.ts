/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26354 
Modified By     : Admin 
Modified Date   : 2022-Oct-11 5:26 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_salary_file_upload
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_salary_file_upload',
	templateUrl: './s_salary_file_upload.component.html',
	styleUrls: ['./s_salary_file_upload.component.css'],
	providers:[torus_cs_show_hideService]
})
    
// Start of class 
export class s_salary_file_uploadComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_salary_file_upload"
	wftpa_id : string = "WFT_NPSS_P_1304_1665404385721_0"
	cg_code : string = "CG_1408_1652164714299"
	key_column : any = {"dtt_1304_1665384653050":"NPSSMPA_ID","dtt_1304_1665385495265":"NPSSMPB_ID","dtt_1304_1665385894443":"NPSSMPS_ID","dtt_1304_1665386514812":"NPSSMPCD_ID","dtt_1304_1665386727379":"NPSSMT_ID"}
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
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
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
		this.queue.datasource = {"default":{"dt_1304_1665384579126":{"dtt_1304_1665386727379":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dtt_code":"DTT_1304_1665386727379","ds_eligible":"DS_1665463562097","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Upload SETP Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1665463411602","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1665463411904","date_format":false},{"column_name":"count","alias_name":"","mq_id":"MQ_1665463412136","date_format":false},{"column_name":"queue_desc","alias_name":"","mq_id":"MQ_1665463412384","date_format":false}],"joins":[]},"eq_text":"SELECT   process_status,          status,          Count(status) count,          dt_code,          dtt_code,          queue_desc,          q_sort_order,          qs_sort_order,          product_code,          ffg_code,          create_flag,          upload_flag,          download_flag,          gateway_code FROM     (                     SELECT     ccst.process_status,                                ccst.status,                                ccst.created_date,                                ccst.system_id,                                ccst.created_by,                                ccst.dt_code,                                ccst.dtt_code,                                ccst.created_by_name,                                ccst.npssmt_id,                                ccst.cdtr_acct_no,                                ccst.dbtr_acct_no,                                ccst.intrbk_sttlm_amnt,                                ccst.dr_sort_code,                                ccst.cr_sort_code,                                ccst.tran_type_code,                                ccst.value_date,                                qr.role_id,                                qr.vph_app_id,                                qr.vph_app_code,                                qr.queue_code,                                pq.queue_desc,                                pq.queue_code,                                qr.sort_order AS qs_sort_order,                                pq.sort_order AS q_sort_order,                                cfp.ffg_code,                                cfp.product_code,                                cfp.create_flag,                                cfp.upload_flag,                                cfp.download_flag,                                cfp.gateway_code,                                pq.vph_app_id         AS pq_app_id,                                cfp.vph_app_id        AS cfp_app_id,                                cfp.screen_module     AS cfp_sm,                                cfp.screen_menu_group AS cfp_smg,                                cfp.screen_name       AS cfp_sn,                                qr.screen_module      AS qr_sm,                                qr.screen_menu_group  AS qr_smg,                                qr.screen_name        AS qr_sn                     FROM       npss_merc_transactions ccst                     INNER JOIN transaction_set TS                     ON         ts.trn_id = ccst.npssmt_id                     AND        ccst.dtt_code = ts.dtt_code                     INNER JOIN core_q_status_roles qr                     ON         ccst.status = qr.process_queue_status                     INNER JOIN core_app_q_setup pq                     ON         ccst.process_status = pq.queue_code                     INNER JOIN core_ffg_product_q CFP                     ON         cfp.queue_code = ccst.process_status) vw $WHERE GROUP BY q_sort_order,          process_status,          qs_sort_order,          status,          dt_code,          dtt_code,          queue_desc,          product_code,          ffg_code,          create_flag,          upload_flag,          download_flag,          gateway_code ORDER BY q_sort_order,          qs_sort_order"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Upload SETP Queue MQ CCD","filter":[{"filter_name":"CFP_APP_ID","binding_name":"CFP_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"CFP_SM","binding_name":"CFP_SM","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CFP_SMG","binding_name":"CFP_SMG","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CFP_SN","binding_name":"CFP_SN","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PQ_APP_ID","binding_name":"PQ_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PRODUCT_CODE","binding_name":"PRODUCT_CODE","binding_value":"","source_name":"ROOT_SCODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SM","binding_name":"QR_SM","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SMG","binding_name":"QR_SMG","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SN","binding_name":"QR_SN","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UPLOAD_FLAG","binding_name":"UPLOAD_FLAG","binding_value":"","source_name":"YES","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Queue","target_column":"queue_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.page_load__e_1591706388367()
		this.page_load__e_1591706487697()
		this.page_load__he_by_click_on_ed()
		this.page_load__de()
		this.page_load__he()
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_by_click_on_queue()
		this.queue__se_by_click_on_ql()
		this.queue__e_1599718910477()
	}

	//Handler for INTERNAL event of "svm by click on queue"
	svm_by_click_on_queue__internal(parent_event_result){
		this.svm_by_click_on_queue__trigger_exchange_ide_link(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation continue"
	navigation_continue__action_button_click(){
		this.navigation_continue__e_1599718825016()
		this.navigation_continue__e_1599718880166()
		this.navigation_continue__e_1599718940822()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation back"
	navigation_back__action_button_click(){
		this.navigation_back__e_1599718834662()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__e_1591706388367() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1591706388367"
		let event_params={"caller_name":"page_load__e_1591706388367","event_desc":"E_1591706388367","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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
	page_load__e_1591706487697() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1591706487697"
		let event_params={"caller_name":"page_load__e_1591706487697","event_desc":"E_1591706487697","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665386727379":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dtt_code":"DTT_1304_1665386727379","ds_eligible":"DS_1665463562097","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Upload SETP Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1665463411602","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1665463411904","date_format":false},{"column_name":"count","alias_name":"","mq_id":"MQ_1665463412136","date_format":false},{"column_name":"queue_desc","alias_name":"","mq_id":"MQ_1665463412384","date_format":false}],"joins":[]},"eq_text":"SELECT   process_status,          status,          Count(status) count,          dt_code,          dtt_code,          queue_desc,          q_sort_order,          qs_sort_order,          product_code,          ffg_code,          create_flag,          upload_flag,          download_flag,          gateway_code FROM     (                     SELECT     ccst.process_status,                                ccst.status,                                ccst.created_date,                                ccst.system_id,                                ccst.created_by,                                ccst.dt_code,                                ccst.dtt_code,                                ccst.created_by_name,                                ccst.npssmt_id,                                ccst.cdtr_acct_no,                                ccst.dbtr_acct_no,                                ccst.intrbk_sttlm_amnt,                                ccst.dr_sort_code,                                ccst.cr_sort_code,                                ccst.tran_type_code,                                ccst.value_date,                                qr.role_id,                                qr.vph_app_id,                                qr.vph_app_code,                                qr.queue_code,                                pq.queue_desc,                                pq.queue_code,                                qr.sort_order AS qs_sort_order,                                pq.sort_order AS q_sort_order,                                cfp.ffg_code,                                cfp.product_code,                                cfp.create_flag,                                cfp.upload_flag,                                cfp.download_flag,                                cfp.gateway_code,                                pq.vph_app_id         AS pq_app_id,                                cfp.vph_app_id        AS cfp_app_id,                                cfp.screen_module     AS cfp_sm,                                cfp.screen_menu_group AS cfp_smg,                                cfp.screen_name       AS cfp_sn,                                qr.screen_module      AS qr_sm,                                qr.screen_menu_group  AS qr_smg,                                qr.screen_name        AS qr_sn                     FROM       npss_merc_transactions ccst                     INNER JOIN transaction_set TS                     ON         ts.trn_id = ccst.npssmt_id                     AND        ccst.dtt_code = ts.dtt_code                     INNER JOIN core_q_status_roles qr                     ON         ccst.status = qr.process_queue_status                     INNER JOIN core_app_q_setup pq                     ON         ccst.process_status = pq.queue_code                     INNER JOIN core_ffg_product_q CFP                     ON         cfp.queue_code = ccst.process_status) vw $WHERE GROUP BY q_sort_order,          process_status,          qs_sort_order,          status,          dt_code,          dtt_code,          queue_desc,          product_code,          ffg_code,          create_flag,          upload_flag,          download_flag,          gateway_code ORDER BY q_sort_order,          qs_sort_order"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Upload SETP Queue MQ CCD","filter":[{"filter_name":"CFP_APP_ID","binding_name":"CFP_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"CFP_SM","binding_name":"CFP_SM","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CFP_SMG","binding_name":"CFP_SMG","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CFP_SN","binding_name":"CFP_SN","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PQ_APP_ID","binding_name":"PQ_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PRODUCT_CODE","binding_name":"PRODUCT_CODE","binding_value":"","source_name":"ROOT_SCODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SM","binding_name":"QR_SM","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SMG","binding_name":"QR_SMG","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SN","binding_name":"QR_SN","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UPLOAD_FLAG","binding_name":"UPLOAD_FLAG","binding_value":"","source_name":"YES","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Queue","target_column":"queue_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let internals="svm_by_click_on_queue__trigger_exchange_ide_link,"
		let event_data={"queue":{"e_1591784182177":{"dts":{"dt_1304_1665384579126":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1591784182177","dt_code":"DT_1304_1665384579126","dtt_code":"","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"FFG_CODE","level":"MI_LEVEL","name":"MI_LEVEL_FFG_CODE","setd3name":"FFG_CODE"},{"type":"LOCAL","column_name":"GATEWAY_CODE","level":"MI_LEVEL","name":"MI_LEVEL_GATEWAY_CODE","setd3name":"GATEWAY_CODE"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665386727379":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dtt_code":"DTT_1304_1665386727379","ds_eligible":"DS_1665463562097","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Upload SETP Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1665463411602","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1665463411904","date_format":false},{"column_name":"count","alias_name":"","mq_id":"MQ_1665463412136","date_format":false},{"column_name":"queue_desc","alias_name":"","mq_id":"MQ_1665463412384","date_format":false}],"joins":[]},"eq_text":"SELECT   process_status,          status,          Count(status) count,          dt_code,          dtt_code,          queue_desc,          q_sort_order,          qs_sort_order,          product_code,          ffg_code,          create_flag,          upload_flag,          download_flag,          gateway_code FROM     (                     SELECT     ccst.process_status,                                ccst.status,                                ccst.created_date,                                ccst.system_id,                                ccst.created_by,                                ccst.dt_code,                                ccst.dtt_code,                                ccst.created_by_name,                                ccst.npssmt_id,                                ccst.cdtr_acct_no,                                ccst.dbtr_acct_no,                                ccst.intrbk_sttlm_amnt,                                ccst.dr_sort_code,                                ccst.cr_sort_code,                                ccst.tran_type_code,                                ccst.value_date,                                qr.role_id,                                qr.vph_app_id,                                qr.vph_app_code,                                qr.queue_code,                                pq.queue_desc,                                pq.queue_code,                                qr.sort_order AS qs_sort_order,                                pq.sort_order AS q_sort_order,                                cfp.ffg_code,                                cfp.product_code,                                cfp.create_flag,                                cfp.upload_flag,                                cfp.download_flag,                                cfp.gateway_code,                                pq.vph_app_id         AS pq_app_id,                                cfp.vph_app_id        AS cfp_app_id,                                cfp.screen_module     AS cfp_sm,                                cfp.screen_menu_group AS cfp_smg,                                cfp.screen_name       AS cfp_sn,                                qr.screen_module      AS qr_sm,                                qr.screen_menu_group  AS qr_smg,                                qr.screen_name        AS qr_sn                     FROM       npss_merc_transactions ccst                     INNER JOIN transaction_set TS                     ON         ts.trn_id = ccst.npssmt_id                     AND        ccst.dtt_code = ts.dtt_code                     INNER JOIN core_q_status_roles qr                     ON         ccst.status = qr.process_queue_status                     INNER JOIN core_app_q_setup pq                     ON         ccst.process_status = pq.queue_code                     INNER JOIN core_ffg_product_q CFP                     ON         cfp.queue_code = ccst.process_status) vw $WHERE GROUP BY q_sort_order,          process_status,          qs_sort_order,          status,          dt_code,          dtt_code,          queue_desc,          product_code,          ffg_code,          create_flag,          upload_flag,          download_flag,          gateway_code ORDER BY q_sort_order,          qs_sort_order"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Upload SETP Queue MQ CCD","filter":[{"filter_name":"CFP_APP_ID","binding_name":"CFP_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"CFP_SM","binding_name":"CFP_SM","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CFP_SMG","binding_name":"CFP_SMG","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"CFP_SN","binding_name":"CFP_SN","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PQ_APP_ID","binding_name":"PQ_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PRODUCT_CODE","binding_name":"PRODUCT_CODE","binding_value":"","source_name":"ROOT_SCODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SM","binding_name":"QR_SM","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SMG","binding_name":"QR_SMG","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_SN","binding_name":"QR_SN","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UPLOAD_FLAG","binding_name":"UPLOAD_FLAG","binding_value":"","source_name":"YES","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Queue","target_column":"queue_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
	queue__e_1599718910477() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_continue"
		let parent_source_id=""
		let event_code="e_1599718910477"
		let event_params={"caller_name":"queue__e_1599718910477","event_desc":"E_1599718910477","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	svm_by_click_on_queue__trigger_exchange_ide_link(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_by_click_on_queue"
		let destn_id=""
		let parent_source_id="queue"
		let event_code="e_1641798979907"
		let event_params={"caller_name":"svm_by_click_on_queue__trigger_exchange_ide_link","event_desc":"Trigger Exchange IDE link","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation continue"
	navigation_continue__e_1599718825016() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_continue"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1599718825016"
		let event_params={"caller_name":"navigation_continue__e_1599718825016","event_desc":"E_1599718825016","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_continue","raiseparam":{"profile_code":"BTL_1408_1599718695457"}}
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
	navigation_continue__e_1599718880166() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_continue"
		let destn_id="navigation_back"
		let parent_source_id=""
		let event_code="e_1599718880166"
		let event_params={"caller_name":"navigation_continue__e_1599718880166","event_desc":"E_1599718880166","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_continue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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
	navigation_continue__e_1599718940822() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_continue"
		let destn_id="navigation_continue"
		let parent_source_id=""
		let event_code="e_1599718940822"
		let event_params={"caller_name":"navigation_continue__e_1599718940822","event_desc":"E_1599718940822","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_continue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	navigation_back__e_1599718834662() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1599718834662"
		let event_params={"caller_name":"navigation_back__e_1599718834662","event_desc":"E_1599718834662","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_back","raiseparam":{}}
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
