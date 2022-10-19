/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 26577 
Modified By     : Admin 
Modified Date   : 2022-Oct-19 15:6 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_merchant_file_creation
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {sprp_c_set_exg_additional_paramService} from '../../../custom_widget/sprp_c_set_exg_additional_param/sprp_c_set_exg_additional_param.service'

@Component({
	selector: 's_merchant_file_creation',
	templateUrl: './s_merchant_file_creation.component.html',
	styleUrls: ['./s_merchant_file_creation.component.css'],
	providers:[sprp_c_set_exg_additional_paramService]
})
    
// Start of class 
export class s_merchant_file_creationComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_merchant_file_creation"
	wftpa_id : string = "WFT_NPSS_P_1304_1665400761557_0"
	cg_code : string = "CG_1408_1652105276441"
	key_column : any = {"dtt_1304_1665384653050":"NPSSMPA_ID","dtt_1304_1665385495265":"NPSSMPB_ID","dtt_1304_1665385894443":"NPSSMPS_ID","dtt_1304_1665386514812":"NPSSMPCD_ID","dtt_1304_1665386727379":"NPSSMT_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_ips_layout"
	uicgc_1 : string = "navigation"
	uicgc_3 : string = "transactions_list"
	uicgc_9 : string = "search"
	uicgc_20 : string = "queue"
	uicgc_23 : string = "queue_search"
	key_events : any = {}
	btl_1408_1585747175326 : string = "p_ips_layout"
	btl_1408_1585633277240 : string = "p_search_layout"
	forms : any = ["uicgc_9","uicgc_1"]
	p_search_layout__spap_for_nav_search_showpopup : boolean = false
	navigation : any = {}
	navigation_search : any = {}
	navigation_create_trg : any = {}
	navigation_create : any = {}
	transactions_list : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	queue : any = {}
	queue_search : any = {}
	queue_search_search : any = {}
	queue_search_clear : any = {}
	exg_export_dynamic_show : boolean = false


	// Constructor 
	constructor(private handler:AppHandlerService ,private sprp_c_set_exg_additional_paramService:sprp_c_set_exg_additional_paramService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Navigation" 
		this.navigation.uictrl_code = "dynamic_ui"
		this.navigation.uicgc_desc = "Navigation"
		this.navigation.uicgc_code = "uicgc_1"
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
		
		// "Create trg" Button of "Navigation" component
		this.navigation_create_trg.label_name = "Create trg"
		this.navigation_create_trg.show = true
		this.navigation_create_trg.disabled = false
		this.navigation_create_trg.params = {"icon_only":false,"uicgcc_style":"fa fa-creative-commons"}
		this.navigation_create_trg.dynamic_param = {}
		this.navigation_create_trg.role = []
		this.navigation_create_trg.action = ""
		
		// "Create" Button of "Navigation" component
		this.navigation_create.label_name = "Create"
		this.navigation_create.show = true
		this.navigation_create.disabled = false
		this.navigation_create.params = {"icon_only":false,"uicgcc_style":"fa fa-creative-commons"}
		this.navigation_create.dynamic_param = {}
		this.navigation_create.role = []
		this.navigation_create.action = ""
	
		// Component level properties - "Transactions List" 
		this.transactions_list.uictrl_code = "datatable"
		this.transactions_list.uicgc_desc = "Transactions List"
		this.transactions_list.uicgc_code = "uicgc_3"
		this.transactions_list.params = {"need_search":"N","view_all":"Y","advance_dynamic_search":"N","need_pag_datatable":"Y"}
		this.transactions_list.datasource = {"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665405711483","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSSMPA Query","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665397486334","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665397486510","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665397486662","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665397486814","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665397487575","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665397570850","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665397573330","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665397574370","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665397601106","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665397601345","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665397601577","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665397622699","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665397622874","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665397623090","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665397623250","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665397653218","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665397653370","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665397653514","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665397682235","date_format":false}],"joins":[]},"eq_text":"Select NPSSMPA_ID,        CATEGORY,        MERC_CATEGORY_CODE,        MERCHANT,        DENOMINATION,        PROFESSIONAL,        MERCHANT_TAG,        IBAN,        USER_ID,        PARTICIPANT_CODE,        POI,        VAT_ID,        IPP_ID,        PHONE_NO,        DTT_CODE,        DT_CODE,        SYSTEM_ID,        STATUS,        PROCESS_STATUS,        EMAIL_ID   FROM NPSS_MERC_PROXY_ADDRESS $WHERE  ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS MQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.transactions_list.context_menu = []
		this.transactions_list.views = {}
		this.transactions_list.onChangecomponent = new EventEmitter<any>()
		this.transactions_list.show = true
		this.transactions_list.dynamic_param = {}
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_9"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665384653050","is_tab_mode":"N","dtt_1304_1665384653050":{"0":[{"dttv_id":"NPSS Address Srch UI","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Merc Proxy Address"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_address_srch_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_address_srch_ui"
		
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
	
		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_20"
		this.queue.params = {"need_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665404985811","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS File creation MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1665397921441","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1665397921785","date_format":false},{"column_name":"count","alias_name":"","mq_id":"MQ_1665397921960","date_format":false},{"column_name":"queue_desc","alias_name":"","mq_id":"MQ_1665397922104","date_format":false}],"joins":[]},"eq_text":"select process_status,        status,        count(status) count,        dt_code,        dtt_code,        queue_desc,        q_sort_order,        qs_sort_order,        ffg_code,        gateway_code,        create_flag   from (select imt.NPSSMPA_ID,                imt.CATEGORY,                imt.MERCHANT_TAG,                imt.IBAN,                imt.VAT_ID,                imt.MERC_CATEGORY_CODE,                imt.MERCHANT,                imt.DENOMINATION,                imt.PROFESSIONAL,                imt.USER_ID,                imt.PARTICIPANT_CODE,                imt.POI,                imt.IPP_ID,                imt.PHONE_NO,                imt.PRODUCT_CODE,                imt.EXHF_ID,                imt.process_status,                imt.status,                imt.created_date,                imt.system_id,                imt.created_by,                imt.dt_code,                imt.dtt_code,                imt.created_by_name,                qr.role_id,                qr.vph_app_id as qr_app_id,                qr.vph_app_code,                qr.queue_code,                qr.screen_name as qr_screen_name,                qr.screen_menu_group as qr_menu_group,                qr.screen_module as qr_module,                pq.queue_desc,                pq.queue_code,                pq.vph_app_id as q_app_id,                qr.sort_order as qs_sort_order,                pq.sort_order as q_sort_order,                cfp.ffg_code,                cfp.gateway_code,                cfp.create_flag           from NPSS_MERC_PROXY_ADDRESS imt          inner join CORE_Q_STATUS_ROLES qr on imt.status =                                               qr.process_queue_status          inner join CORE_APP_Q_SETUP pq on imt.process_status =                                            pq.queue_code           LEFT join core_ffg_product_q CFP ON CFP.QUEUE_CODE =                                               imt.process_status                                           and create_flag = 'YES') vw $WHERE  group by q_sort_order,           process_status,           qs_sort_order,           status,           dt_code,           dtt_code,           queue_desc,           ffg_code,           gateway_code,           create_flag  order by q_sort_order, qs_sort_order"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS File creation CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Queue","target_column":"queue_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.queue.context_menu = []
		this.queue.views = {}
		this.queue.onChangecomponent = new EventEmitter<any>()
		this.queue.show = true
		this.queue.dynamic_param = {}
	
		// Component level properties - "Queue Search" 
		this.queue_search.uictrl_code = "dynamic_form_search"
		this.queue_search.uicgc_desc = "Queue Search"
		this.queue_search.uicgc_code = "uicgc_23"
		this.queue_search.params = {}
		this.queue_search.datasource = {}
		this.queue_search.context_menu = []
		this.queue_search.views = {}
		this.queue_search.onChangecomponent = new EventEmitter<any>()
		this.queue_search.show = true
		this.queue_search.dynamic_param = {}
		
		// "Search" Button of "Queue Search" component
		this.queue_search_search.label_name = "Search"
		this.queue_search_search.show = true
		this.queue_search_search.disabled = false
		this.queue_search_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.queue_search_search.dynamic_param = {}
		this.queue_search_search.role = []
		this.queue_search_search.action = ""
		
		// "Clear" Button of "Queue Search" component
		this.queue_search_clear.label_name = "Clear"
		this.queue_search_clear.show = true
		this.queue_search_clear.disabled = false
		this.queue_search_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.queue_search_clear.dynamic_param = {}
		this.queue_search_clear.role = []
		this.queue_search_clear.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_on_page_load()
		this.page_load__he_for_nav_create()
		this.page_load__tbc_for_search()
		this.page_load__he_for_create()
	}

	//Handler for SELECTION_CHANGED event of "transactions list"
	transactions_list__selection_changed(){
		this.transactions_list__svm_by_click_on_bl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "uicgcc 18"
	uicgcc_18__action_button_click(){
		this.uicgcc_18__e_1587714421091()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__action_button_click(){
		this.navigation_search__cui_by_click_on_nav_search()
		this.navigation_search__rs_for_tl()
		this.navigation_search__cui_for_queue_search()
		this.navigation_search__spap_for_nav_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_by_click_on_f_search()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__cp_by_click_on()
		this.search_search__ssp_for_search()
	}

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__internal(parent_event_result){
		this.ssp_for_search__brfq_for_queue_list(parent_event_result)
		this.ssp_for_search__brfq_for_tl(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for queue list"
	brfq_for_queue_list__internal(parent_event_result){
		this.brfq_for_queue_list__cui_for_search(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_process_group_list()
		this.queue__se_for_nav_create()
	}

	//Handler for INTERNAL event of "svm process group list"
	svm_process_group_list__internal(parent_event_result){
		this.svm_process_group_list__ssp_for_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "queue search search"
	queue_search_search__action_button_click(){
		this.queue_search_search__ssp_for_q_search()
		this.queue_search_search__cp_for_q_search()
		this.queue_search_search__cui_for_tl()
	}

	//Handler for INTERNAL event of "ssp for q search"
	ssp_for_q_search__internal(parent_event_result){
		this.ssp_for_q_search__brfq_by_click_on_queue_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "queue search clear"
	queue_search_clear__action_button_click(){
		this.queue_search_clear__cui_for_queue_srch()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation create trg"
	navigation_create_trg__action_button_click(){
		this.navigation_create_trg__efc_for_queue()
	}

	//Handler for INTERNAL event of "efc for queue"
	efc_for_queue__internal(parent_event_result){
		this.efc_for_queue__rs_for_nav_create(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation create"
	navigation_create__action_button_click(){
		this.navigation_create__cc_for_create()
	}

	//Handler for INTERNAL event of "cc for create"
	cc_for_create__internal(parent_event_result){
		this.cc_for_create__tbc_for_create_trg(parent_event_result)
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cf_on_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1585633462566"
		let event_params={"caller_name":"page_load__cf_on_page_load","event_desc":"CF on Page Load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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
	page_load__he_for_nav_create() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_create_trg"
		let parent_source_id=""
		let event_code="e_1591627139925"
		let event_params={"caller_name":"page_load__he_for_nav_create","event_desc":"HE for Nav Create","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__tbc_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="search_search"
		let parent_source_id=""
		let event_code="e_1592396236214"
		let event_params={"caller_name":"page_load__tbc_for_search","event_desc":"TBC for Search","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_create() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_create"
		let parent_source_id=""
		let event_code="e_1665497289298"
		let event_params={"caller_name":"page_load__he_for_create","event_desc":"HE for create","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for SELECTION_CHANGED event of "transactions list"
	transactions_list__svm_by_click_on_bl() { 
		let Dest_Is_ctrl=true
		
		let source_id="transactions_list"
		let destn_id="transactions_list"
		let parent_source_id=""
		let event_code="e_1587386903647"
		let event_params={"caller_name":"transactions_list__svm_by_click_on_bl","event_desc":"SVM by click on BL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transactions_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"transactions_list":{"e_1587386903647":{"dts":{"dt_1304_1665384579126":{"dtts":{"":{"uicgc_code":"UICGC_3","event_code":"E_1587386903647","dt_code":"DT_1304_1665384579126","dtt_code":"","dt_desc":"Merchant DTG","dtt_desc":"NPSS Merc Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSMT_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSMT_ID","setd3name":"NPSSMT_ID"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665405711483","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSSMPA Query","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665397486334","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665397486510","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665397486662","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665397486814","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665397487575","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665397570850","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665397573330","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665397574370","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665397601106","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665397601345","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665397601577","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665397622699","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665397622874","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665397623090","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665397623250","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665397653218","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665397653370","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665397653514","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665397682235","date_format":false}],"joins":[]},"eq_text":"Select NPSSMPA_ID,        CATEGORY,        MERC_CATEGORY_CODE,        MERCHANT,        DENOMINATION,        PROFESSIONAL,        MERCHANT_TAG,        IBAN,        USER_ID,        PARTICIPANT_CODE,        POI,        VAT_ID,        IPP_ID,        PHONE_NO,        DTT_CODE,        DT_CODE,        SYSTEM_ID,        STATUS,        PROCESS_STATUS,        EMAIL_ID   FROM NPSS_MERC_PROXY_ADDRESS $WHERE  ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS MQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "uicgcc 18"
	uicgcc_18__e_1587714421091() { 
		let Dest_Is_ctrl=true
		
		let source_id="uicgcc_18"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587714421091"
		let event_params={"caller_name":"uicgcc_18__e_1587714421091","event_desc":"E_1587714421091","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"uicgcc_18","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__cui_by_click_on_nav_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1588918123155"
		let event_params={"caller_name":"navigation_search__cui_by_click_on_nav_search","event_desc":"CUI by click on nav search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"need_reset_key_column":"N"}}
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
	navigation_search__rs_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="transactions_list"
		let parent_source_id=""
		let event_code="e_1589554390004"
		let event_params={"caller_name":"navigation_search__rs_for_tl","event_desc":"RS for TL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{}}
		let handler_code="reset_selection"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665405711483","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSSMPA Query","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665397486334","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665397486510","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665397486662","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665397486814","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665397487575","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665397570850","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665397573330","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665397574370","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665397601106","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665397601345","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665397601577","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665397622699","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665397622874","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665397623090","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665397623250","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665397653218","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665397653370","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665397653514","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665397682235","date_format":false}],"joins":[]},"eq_text":"Select NPSSMPA_ID,        CATEGORY,        MERC_CATEGORY_CODE,        MERCHANT,        DENOMINATION,        PROFESSIONAL,        MERCHANT_TAG,        IBAN,        USER_ID,        PARTICIPANT_CODE,        POI,        VAT_ID,        IPP_ID,        PHONE_NO,        DTT_CODE,        DT_CODE,        SYSTEM_ID,        STATUS,        PROCESS_STATUS,        EMAIL_ID   FROM NPSS_MERC_PROXY_ADDRESS $WHERE  ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS MQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.reset_selection(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__cui_for_queue_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="queue_search"
		let parent_source_id=""
		let event_code="e_1590075921343"
		let event_params={"caller_name":"navigation_search__cui_for_queue_search","event_desc":"CUI for Queue Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"need_reset_key_column":"N"}}
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
	navigation_search__spap_for_nav_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1605876075838"
		let event_params={"caller_name":"navigation_search__spap_for_nav_search","event_desc":"SPAP for Nav Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_nav_search","selector":"p_search_layout","profile_code":"BTL_1408_1585633277240","window_title":"Search","window_height":700,"window_width":"800px","window_close_icon":"Y","eventdes":"spap_for_nav_search","eventcode":"E_1605876075838"}}
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
	search_clear__cui_by_click_on_f_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1585745595296"
		let event_params={"caller_name":"search_clear__cui_by_click_on_f_search","event_desc":"CUI by click on F Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{}}
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
	search_search__cp_by_click_on() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1587636373028"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__cp_by_click_on","event_desc":"CP by click on","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__ssp_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1592396247995"
		let event_params={"caller_name":"search_search__ssp_for_search","event_desc":"SSP for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_search__brfq_for_queue_list,"
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
	ssp_for_search__brfq_for_queue_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search"
		let destn_id="queue"
		let parent_source_id="search_search"
		let event_code="e_1592396262894"
		let event_params={"caller_name":"ssp_for_search__brfq_for_queue_list","event_desc":"BRFQ For queue list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_queue_list__cui_for_search,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665404985811","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS File creation MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1665397921441","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1665397921785","date_format":false},{"column_name":"count","alias_name":"","mq_id":"MQ_1665397921960","date_format":false},{"column_name":"queue_desc","alias_name":"","mq_id":"MQ_1665397922104","date_format":false}],"joins":[]},"eq_text":"select process_status,        status,        count(status) count,        dt_code,        dtt_code,        queue_desc,        q_sort_order,        qs_sort_order,        ffg_code,        gateway_code,        create_flag   from (select imt.NPSSMPA_ID,                imt.CATEGORY,                imt.MERCHANT_TAG,                imt.IBAN,                imt.VAT_ID,                imt.MERC_CATEGORY_CODE,                imt.MERCHANT,                imt.DENOMINATION,                imt.PROFESSIONAL,                imt.USER_ID,                imt.PARTICIPANT_CODE,                imt.POI,                imt.IPP_ID,                imt.PHONE_NO,                imt.PRODUCT_CODE,                imt.EXHF_ID,                imt.process_status,                imt.status,                imt.created_date,                imt.system_id,                imt.created_by,                imt.dt_code,                imt.dtt_code,                imt.created_by_name,                qr.role_id,                qr.vph_app_id as qr_app_id,                qr.vph_app_code,                qr.queue_code,                qr.screen_name as qr_screen_name,                qr.screen_menu_group as qr_menu_group,                qr.screen_module as qr_module,                pq.queue_desc,                pq.queue_code,                pq.vph_app_id as q_app_id,                qr.sort_order as qs_sort_order,                pq.sort_order as q_sort_order,                cfp.ffg_code,                cfp.gateway_code,                cfp.create_flag           from NPSS_MERC_PROXY_ADDRESS imt          inner join CORE_Q_STATUS_ROLES qr on imt.status =                                               qr.process_queue_status          inner join CORE_APP_Q_SETUP pq on imt.process_status =                                            pq.queue_code           LEFT join core_ffg_product_q CFP ON CFP.QUEUE_CODE =                                               imt.process_status                                           and create_flag = 'YES') vw $WHERE  group by q_sort_order,           process_status,           qs_sort_order,           status,           dt_code,           dtt_code,           queue_desc,           ffg_code,           gateway_code,           create_flag  order by q_sort_order, qs_sort_order"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS File creation CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Queue","target_column":"queue_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for queue list"
	brfq_for_queue_list__cui_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_queue_list"
		let destn_id="transactions_list"
		let parent_source_id="ssp_for_search"
		let event_code="e_1592457846713"
		let event_params={"caller_name":"brfq_for_queue_list__cui_for_search","event_desc":"CUI for search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665405711483","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSSMPA Query","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665397486334","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665397486510","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665397486662","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665397486814","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665397487575","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665397570850","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665397573330","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665397574370","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665397601106","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665397601345","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665397601577","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665397622699","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665397622874","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665397623090","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665397623250","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665397653218","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665397653370","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665397653514","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665397682235","date_format":false}],"joins":[]},"eq_text":"Select NPSSMPA_ID,        CATEGORY,        MERC_CATEGORY_CODE,        MERCHANT,        DENOMINATION,        PROFESSIONAL,        MERCHANT_TAG,        IBAN,        USER_ID,        PARTICIPANT_CODE,        POI,        VAT_ID,        IPP_ID,        PHONE_NO,        DTT_CODE,        DT_CODE,        SYSTEM_ID,        STATUS,        PROCESS_STATUS,        EMAIL_ID   FROM NPSS_MERC_PROXY_ADDRESS $WHERE  ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS MQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue"
	queue__svm_process_group_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1589891308856"
		let event_params={"caller_name":"queue__svm_process_group_list","event_desc":"SVM Process Group List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_process_group_list__ssp_for_search,"
		let event_data={"queue":{"e_1589891308856":{"dts":{"dt_1304_1665384579126":{"dtts":{"":{"uicgc_code":"UICGC_20","event_code":"E_1589891308856","dt_code":"DT_1304_1665384579126","dtt_code":"","dt_desc":"Merchant DTG","dtt_desc":"NPSS Merc Proxy Address","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"FFG_CODE","level":"MI_LEVEL","name":"MI_LEVEL_FFG_CODE","setd3name":"FFG_CODE"},{"type":"LOCAL","column_name":"GATEWAY_CODE","level":"MI_LEVEL","name":"MI_LEVEL_GATEWAY_CODE","setd3name":"GATEWAY_CODE"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665404985811","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS File creation MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1665397921441","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1665397921785","date_format":false},{"column_name":"count","alias_name":"","mq_id":"MQ_1665397921960","date_format":false},{"column_name":"queue_desc","alias_name":"","mq_id":"MQ_1665397922104","date_format":false}],"joins":[]},"eq_text":"select process_status,        status,        count(status) count,        dt_code,        dtt_code,        queue_desc,        q_sort_order,        qs_sort_order,        ffg_code,        gateway_code,        create_flag   from (select imt.NPSSMPA_ID,                imt.CATEGORY,                imt.MERCHANT_TAG,                imt.IBAN,                imt.VAT_ID,                imt.MERC_CATEGORY_CODE,                imt.MERCHANT,                imt.DENOMINATION,                imt.PROFESSIONAL,                imt.USER_ID,                imt.PARTICIPANT_CODE,                imt.POI,                imt.IPP_ID,                imt.PHONE_NO,                imt.PRODUCT_CODE,                imt.EXHF_ID,                imt.process_status,                imt.status,                imt.created_date,                imt.system_id,                imt.created_by,                imt.dt_code,                imt.dtt_code,                imt.created_by_name,                qr.role_id,                qr.vph_app_id as qr_app_id,                qr.vph_app_code,                qr.queue_code,                qr.screen_name as qr_screen_name,                qr.screen_menu_group as qr_menu_group,                qr.screen_module as qr_module,                pq.queue_desc,                pq.queue_code,                pq.vph_app_id as q_app_id,                qr.sort_order as qs_sort_order,                pq.sort_order as q_sort_order,                cfp.ffg_code,                cfp.gateway_code,                cfp.create_flag           from NPSS_MERC_PROXY_ADDRESS imt          inner join CORE_Q_STATUS_ROLES qr on imt.status =                                               qr.process_queue_status          inner join CORE_APP_Q_SETUP pq on imt.process_status =                                            pq.queue_code           LEFT join core_ffg_product_q CFP ON CFP.QUEUE_CODE =                                               imt.process_status                                           and create_flag = 'YES') vw $WHERE  group by q_sort_order,           process_status,           qs_sort_order,           status,           dt_code,           dtt_code,           queue_desc,           ffg_code,           gateway_code,           create_flag  order by q_sort_order, qs_sort_order"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS File creation CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Queue","target_column":"queue_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue"
	queue__se_for_nav_create() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="navigation_create"
		let parent_source_id=""
		let event_code="e_1665497158060"
		let event_params={"caller_name":"queue__se_for_nav_create","event_desc":"SE for Nav Create","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":"","expression":""}}
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

	//Handler for INTERNAL event of "svm process group list"
	svm_process_group_list__ssp_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_process_group_list"
		let destn_id="search"
		let parent_source_id="queue"
		let event_code="e_1590559620229"
		let event_params={"caller_name":"svm_process_group_list__ssp_for_search","event_desc":"SSP for Search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_search__brfq_for_tl,"
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
	ssp_for_search__brfq_for_tl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search"
		let destn_id="transactions_list"
		let parent_source_id="svm_process_group_list"
		let event_code="e_1592409695907"
		let event_params={"caller_name":"ssp_for_search__brfq_for_tl","event_desc":"BRFQ for TL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665405711483","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSSMPA Query","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665397486334","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665397486510","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665397486662","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665397486814","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665397487575","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665397570850","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665397573330","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665397574370","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665397601106","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665397601345","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665397601577","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665397622699","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665397622874","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665397623090","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665397623250","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665397653218","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665397653370","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665397653514","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665397682235","date_format":false}],"joins":[]},"eq_text":"Select NPSSMPA_ID,        CATEGORY,        MERC_CATEGORY_CODE,        MERCHANT,        DENOMINATION,        PROFESSIONAL,        MERCHANT_TAG,        IBAN,        USER_ID,        PARTICIPANT_CODE,        POI,        VAT_ID,        IPP_ID,        PHONE_NO,        DTT_CODE,        DT_CODE,        SYSTEM_ID,        STATUS,        PROCESS_STATUS,        EMAIL_ID   FROM NPSS_MERC_PROXY_ADDRESS $WHERE  ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS MQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "queue search search"
	queue_search_search__ssp_for_q_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_search_search"
		let destn_id="queue_search"
		let parent_source_id=""
		let event_code="e_1590067097727"
		let event_params={"caller_name":"queue_search_search__ssp_for_q_search","event_desc":"SSP for Q search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"queue_search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_q_search__brfq_by_click_on_queue_search,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "queue search search"
	queue_search_search__cp_for_q_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1590075010503"
		let event_params={"popup_info":{"context":""},"caller_name":"queue_search_search__cp_for_q_search","event_desc":"CP for Q search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"queue_search_search","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "queue search search"
	queue_search_search__cui_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_search_search"
		let destn_id="transactions_list"
		let parent_source_id=""
		let event_code="e_1590075087993"
		let event_params={"caller_name":"queue_search_search__cui_for_tl","event_desc":"CUI for TL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"queue_search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665405711483","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSSMPA Query","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSMPA_ID","alias_name":"","mq_id":"MQ_1665397486334","date_format":false},{"column_name":"CATEGORY","alias_name":"","mq_id":"MQ_1665397486510","date_format":false},{"column_name":"MERC_CATEGORY_CODE","alias_name":"","mq_id":"MQ_1665397486662","date_format":false},{"column_name":"MERCHANT","alias_name":"","mq_id":"MQ_1665397486814","date_format":false},{"column_name":"DENOMINATION","alias_name":"","mq_id":"MQ_1665397487575","date_format":false},{"column_name":"PROFESSIONAL","alias_name":"","mq_id":"MQ_1665397570850","date_format":false},{"column_name":"MERCHANT_TAG","alias_name":"","mq_id":"MQ_1665397573330","date_format":false},{"column_name":"IBAN","alias_name":"","mq_id":"MQ_1665397574370","date_format":false},{"column_name":"USER_ID","alias_name":"","mq_id":"MQ_1665397601106","date_format":false},{"column_name":"PARTICIPANT_CODE","alias_name":"","mq_id":"MQ_1665397601345","date_format":false},{"column_name":"POI","alias_name":"","mq_id":"MQ_1665397601577","date_format":false},{"column_name":"VAT_ID","alias_name":"","mq_id":"MQ_1665397622699","date_format":false},{"column_name":"IPP_ID","alias_name":"","mq_id":"MQ_1665397622874","date_format":false},{"column_name":"PHONE_NO","alias_name":"","mq_id":"MQ_1665397623090","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1665397623250","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1665397653218","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1665397653370","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1665397653514","date_format":false},{"column_name":"EMAIL_ID","alias_name":"","mq_id":"MQ_1665397682235","date_format":false}],"joins":[]},"eq_text":"Select NPSSMPA_ID,        CATEGORY,        MERC_CATEGORY_CODE,        MERCHANT,        DENOMINATION,        PROFESSIONAL,        MERCHANT_TAG,        IBAN,        USER_ID,        PARTICIPANT_CODE,        POI,        VAT_ID,        IPP_ID,        PHONE_NO,        DTT_CODE,        DT_CODE,        SYSTEM_ID,        STATUS,        PROCESS_STATUS,        EMAIL_ID   FROM NPSS_MERC_PROXY_ADDRESS $WHERE  ORDER BY NPSSMPA_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS MQ CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Type","target_column":"CATEGORY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant","target_column":"MERCHANT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Professional","target_column":"PROFESSIONAL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Merchant Tag","target_column":"MERCHANT_TAG","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Email ID","target_column":"EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IBAN","target_column":"IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Participant Code","target_column":"PARTICIPANT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Phone No","target_column":"PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for q search"
	ssp_for_q_search__brfq_by_click_on_queue_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_q_search"
		let destn_id="queue"
		let parent_source_id="queue_search_search"
		let event_code="e_1590067114320"
		let event_params={"caller_name":"ssp_for_q_search__brfq_by_click_on_queue_search","event_desc":"BRFQ by click on Queue Search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue_search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":""},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665404985811","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS File creation MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1665397921441","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1665397921785","date_format":false},{"column_name":"count","alias_name":"","mq_id":"MQ_1665397921960","date_format":false},{"column_name":"queue_desc","alias_name":"","mq_id":"MQ_1665397922104","date_format":false}],"joins":[]},"eq_text":"select process_status,        status,        count(status) count,        dt_code,        dtt_code,        queue_desc,        q_sort_order,        qs_sort_order,        ffg_code,        gateway_code,        create_flag   from (select imt.NPSSMPA_ID,                imt.CATEGORY,                imt.MERCHANT_TAG,                imt.IBAN,                imt.VAT_ID,                imt.MERC_CATEGORY_CODE,                imt.MERCHANT,                imt.DENOMINATION,                imt.PROFESSIONAL,                imt.USER_ID,                imt.PARTICIPANT_CODE,                imt.POI,                imt.IPP_ID,                imt.PHONE_NO,                imt.PRODUCT_CODE,                imt.EXHF_ID,                imt.process_status,                imt.status,                imt.created_date,                imt.system_id,                imt.created_by,                imt.dt_code,                imt.dtt_code,                imt.created_by_name,                qr.role_id,                qr.vph_app_id as qr_app_id,                qr.vph_app_code,                qr.queue_code,                qr.screen_name as qr_screen_name,                qr.screen_menu_group as qr_menu_group,                qr.screen_module as qr_module,                pq.queue_desc,                pq.queue_code,                pq.vph_app_id as q_app_id,                qr.sort_order as qs_sort_order,                pq.sort_order as q_sort_order,                cfp.ffg_code,                cfp.gateway_code,                cfp.create_flag           from NPSS_MERC_PROXY_ADDRESS imt          inner join CORE_Q_STATUS_ROLES qr on imt.status =                                               qr.process_queue_status          inner join CORE_APP_Q_SETUP pq on imt.process_status =                                            pq.queue_code           LEFT join core_ffg_product_q CFP ON CFP.QUEUE_CODE =                                               imt.process_status                                           and create_flag = 'YES') vw $WHERE  group by q_sort_order,           process_status,           qs_sort_order,           status,           dt_code,           dtt_code,           queue_desc,           ffg_code,           gateway_code,           create_flag  order by q_sort_order, qs_sort_order"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS File creation CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Queue","target_column":"queue_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "queue search clear"
	queue_search_clear__cui_for_queue_srch() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue_search_clear"
		let destn_id="queue_search"
		let parent_source_id=""
		let event_code="e_1590069515788"
		let event_params={"caller_name":"queue_search_clear__cui_for_queue_srch","event_desc":"CUI for Queue Srch","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"queue_search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation create trg"
	navigation_create_trg__efc_for_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_create_trg"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1652707327149"
		let event_params={"caller_name":"navigation_create_trg__efc_for_queue","event_desc":"EFC for Queue","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_create_trg","raiseparam":{"file_group_code":null,"hl_chaincode":"","hl_chaincode_function":"","hl_setup":""}}
		let handler_code="exg_file_creation"
		let internals="efc_for_queue__rs_for_nav_create,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665384579126":{"dtt_1304_1665384653050":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665384579126","dt_desc":"Merchant DTG","dtt_code":"DTT_1304_1665384653050","dtt_desc":"NPSS Merc Proxy Address","ds_eligible":"DS_1665404985811","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS File creation MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"process_status","alias_name":"","mq_id":"MQ_1665397921441","date_format":false},{"column_name":"status","alias_name":"","mq_id":"MQ_1665397921785","date_format":false},{"column_name":"count","alias_name":"","mq_id":"MQ_1665397921960","date_format":false},{"column_name":"queue_desc","alias_name":"","mq_id":"MQ_1665397922104","date_format":false}],"joins":[]},"eq_text":"select process_status,        status,        count(status) count,        dt_code,        dtt_code,        queue_desc,        q_sort_order,        qs_sort_order,        ffg_code,        gateway_code,        create_flag   from (select imt.NPSSMPA_ID,                imt.CATEGORY,                imt.MERCHANT_TAG,                imt.IBAN,                imt.VAT_ID,                imt.MERC_CATEGORY_CODE,                imt.MERCHANT,                imt.DENOMINATION,                imt.PROFESSIONAL,                imt.USER_ID,                imt.PARTICIPANT_CODE,                imt.POI,                imt.IPP_ID,                imt.PHONE_NO,                imt.PRODUCT_CODE,                imt.EXHF_ID,                imt.process_status,                imt.status,                imt.created_date,                imt.system_id,                imt.created_by,                imt.dt_code,                imt.dtt_code,                imt.created_by_name,                qr.role_id,                qr.vph_app_id as qr_app_id,                qr.vph_app_code,                qr.queue_code,                qr.screen_name as qr_screen_name,                qr.screen_menu_group as qr_menu_group,                qr.screen_module as qr_module,                pq.queue_desc,                pq.queue_code,                pq.vph_app_id as q_app_id,                qr.sort_order as qs_sort_order,                pq.sort_order as q_sort_order,                cfp.ffg_code,                cfp.gateway_code,                cfp.create_flag           from NPSS_MERC_PROXY_ADDRESS imt          inner join CORE_Q_STATUS_ROLES qr on imt.status =                                               qr.process_queue_status          inner join CORE_APP_Q_SETUP pq on imt.process_status =                                            pq.queue_code           LEFT join core_ffg_product_q CFP ON CFP.QUEUE_CODE =                                               imt.process_status                                           and create_flag = 'YES') vw $WHERE  group by q_sort_order,           process_status,           qs_sort_order,           status,           dt_code,           dtt_code,           queue_desc,           ffg_code,           gateway_code,           create_flag  order by q_sort_order, qs_sort_order"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS File creation CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Queue","target_column":"queue_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"status","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Count","target_column":"count","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.exg_file_creation(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "efc for queue"
	efc_for_queue__rs_for_nav_create(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="efc_for_queue"
		let destn_id=""
		let parent_source_id="navigation_create_trg"
		let event_code="e_1652707405758"
		let event_params={"caller_name":"efc_for_queue__rs_for_nav_create","event_desc":"RS for Nav Create","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_create_trg","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation create"
	navigation_create__cc_for_create() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_create"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1665497310415"
		let event_params={"caller_name":"navigation_create__cc_for_create","event_desc":"CC for create","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_create","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_create__tbc_for_create_trg,"
		let event_data={}
		let data_source={}
		try {
			this.sprp_c_set_exg_additional_paramService.fn_sprp_c_set_exg_additional_param(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for create"
	cc_for_create__tbc_for_create_trg(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_create"
		let destn_id="navigation_create_trg"
		let parent_source_id="navigation_create"
		let event_code="e_1665497354767"
		let event_params={"caller_name":"cc_for_create__tbc_for_create_trg","event_desc":"TBC for create trg","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_create","raiseparam":{},"parent_event_result":"SUCCESS"}
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
