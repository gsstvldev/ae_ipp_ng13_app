/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 29190 
Modified By     : Admin 
Modified Date   : 2023-Apr-21 8:9 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_payment_detail
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'
import {npss_cs_payment_detaiService} from '../../../custom_widget/npss_cs_payment_detai/npss_cs_payment_detai.service'
import {npss_cs_liquidity_position_responseService} from '../../../custom_widget/npss_cs_liquidity_position_response/npss_cs_liquidity_position_response.service'

@Component({
	selector: 's_payment_detail',
	templateUrl: './s_payment_detail.component.html',
	styleUrls: ['./s_payment_detail.component.css'],
	providers:[torus_cs_show_hideService,npss_cs_payment_detaiService,npss_cs_liquidity_position_responseService]
})
    
// Start of class 
export class s_payment_detailComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_payment_detail"
	wftpa_id : string = "WFT_NPSS_P_1304_1677329443326_0"
	cg_code : string = "CG_1304_1677329336057"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "api_input_ui_actions"
	uicgc_2 : string = "search"
	uicgc_3 : string = "request"
	uicgc_4 : string = "input_details"
	uicgc_5 : string = "response"
	key_events : any = {}
	btl_1304_1678182550451 : string = "p_search_layout"
	btl_1304_1678182109016 : string = "p_main_layout"
	forms : any = ["uicgc_2","uicgc_4","uicgc_1"]
	p_search_layout__spap_from_list_showpopup : boolean = false
	api_input_ui_actions : any = {}
	api_input_ui_actions_clear : any = {}
	api_input_ui_actions_fetch : any = {}
	api_input_ui_actions_trg_view_response : any = {}
	api_input_ui_actions_trg_hide : any = {}
	api_input_ui_actions_fetch_trg : any = {}
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	request : any = {}
	input_details : any = {}
	response : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_show_hideService:torus_cs_show_hideService,private npss_cs_payment_detaiService:npss_cs_payment_detaiService,private npss_cs_liquidity_position_responseService:npss_cs_liquidity_position_responseService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "API Input UI Actions" 
		this.api_input_ui_actions.uictrl_code = "dynamic_ui"
		this.api_input_ui_actions.uicgc_desc = "API Input UI Actions"
		this.api_input_ui_actions.uicgc_code = "uicgc_1"
		this.api_input_ui_actions.params = {}
		this.api_input_ui_actions.datasource = {}
		this.api_input_ui_actions.context_menu = []
		this.api_input_ui_actions.views = {}
		this.api_input_ui_actions.onChangecomponent = new EventEmitter<any>()
		this.api_input_ui_actions.show = true
		this.api_input_ui_actions.dynamic_param = {}
		this.api_input_ui_actions.f_api_input_ui_actions = {"show":true}
		this.api_input_ui_actions.current_view = "f_api_input_ui_actions"
		
		// "Clear" Button of "API Input UI Actions" component
		this.api_input_ui_actions_clear.label_name = "Clear"
		this.api_input_ui_actions_clear.show = true
		this.api_input_ui_actions_clear.disabled = false
		this.api_input_ui_actions_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.api_input_ui_actions_clear.dynamic_param = {}
		this.api_input_ui_actions_clear.role = []
		this.api_input_ui_actions_clear.action = ""
		
		// "Fetch" Button of "API Input UI Actions" component
		this.api_input_ui_actions_fetch.label_name = "Fetch"
		this.api_input_ui_actions_fetch.show = true
		this.api_input_ui_actions_fetch.disabled = false
		this.api_input_ui_actions_fetch.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.api_input_ui_actions_fetch.dynamic_param = {}
		this.api_input_ui_actions_fetch.role = []
		this.api_input_ui_actions_fetch.action = ""
		
		// "TRG View Response" Button of "API Input UI Actions" component
		this.api_input_ui_actions_trg_view_response.label_name = "TRG View Response"
		this.api_input_ui_actions_trg_view_response.show = true
		this.api_input_ui_actions_trg_view_response.disabled = false
		this.api_input_ui_actions_trg_view_response.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.api_input_ui_actions_trg_view_response.dynamic_param = {}
		this.api_input_ui_actions_trg_view_response.role = []
		this.api_input_ui_actions_trg_view_response.action = ""
		
		// "Trg hide" Button of "API Input UI Actions" component
		this.api_input_ui_actions_trg_hide.label_name = "Trg hide"
		this.api_input_ui_actions_trg_hide.show = true
		this.api_input_ui_actions_trg_hide.disabled = false
		this.api_input_ui_actions_trg_hide.params = {"icon_only":false,"uicgcc_style":""}
		this.api_input_ui_actions_trg_hide.dynamic_param = {}
		this.api_input_ui_actions_trg_hide.role = []
		this.api_input_ui_actions_trg_hide.action = ""
		
		// "Fetch trg" Button of "API Input UI Actions" component
		this.api_input_ui_actions_fetch_trg.label_name = "Fetch trg"
		this.api_input_ui_actions_fetch_trg.show = true
		this.api_input_ui_actions_fetch_trg.disabled = false
		this.api_input_ui_actions_fetch_trg.params = {"icon_only":false,"uicgcc_style":""}
		this.api_input_ui_actions_fetch_trg.dynamic_param = {}
		this.api_input_ui_actions_fetch_trg.role = []
		this.api_input_ui_actions_fetch_trg.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_2"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1670589169341","is_tab_mode":"N","dtt_1304_1670589169341":{"0":[{"dttv_id":"NPSS Payment Details SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"Core API Process Log"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_payment_details_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_payment_details_srch"
		
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
	
		// Component level properties - "Request" 
		this.request.uictrl_code = "datatable"
		this.request.uicgc_desc = "Request"
		this.request.uicgc_code = "uicgc_3"
		this.request.params = {"need_search":"N","need_pag_datatable":"Y","advance_dynamic_search":"Y","view_all":"Y"}
		this.request.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1670589169341":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1670589169341","dtt_desc":"Core API Process Log","ds_eligible":"DS_1677330007370","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Core API PLOG Liq Pos MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1677309546629","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1677309546860","date_format":false},{"column_name":"ACCOUNTHOLDERBIC","alias_name":"","mq_id":"MQ_1677309547107","date_format":false},{"column_name":"ACCOUNTNUMBER","alias_name":"","mq_id":"MQ_1677309565754","date_format":false},{"column_name":"DATETIME","alias_name":"","mq_id":"MQ_1677309566186","date_format":true},{"column_name":"DATASOURCE","alias_name":"","mq_id":"MQ_1677309586905","date_format":false},{"column_name":"CYCLENUMBER","alias_name":"","mq_id":"MQ_1677311049468","date_format":false},{"column_name":"SENDERBIC","alias_name":"","mq_id":"MQ_1677318148187","date_format":false},{"column_name":"FROMDATE","alias_name":"","mq_id":"MQ_1677318160384","date_format":true},{"column_name":"TODATE","alias_name":"","mq_id":"MQ_1677318160672","date_format":true},{"column_name":"REFTYPE","alias_name":"","mq_id":"MQ_1677327468115","date_format":false},{"column_name":"ref","alias_name":"","mq_id":"MQ_1677327468858","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1678106643760","date_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1678106643919","date_format":false},{"column_name":"FROM_DATE","alias_name":"","mq_id":"MQ_1680680668576","date_format":false},{"column_name":"TO_DATE","alias_name":"","mq_id":"MQ_1680680668734","date_format":false}],"joins":[]},"eq_text":"select  NPSSCAPL_ID,  PROCESS_NAME,  PROCESSING_SYSTEM,  CURRENCY,  ACCOUNTHOLDERBIC,  ACCOUNTNUMBER,  DATETIME,  RESPONSE_CODE,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  DATASOURCE,  SENDERBIC,  FROMDATE,  TODATE,  FROM_DATE,  TO_DATE,  REFTYPE,  ref,  CYCLENUMBER,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  PL_STATUS,  FROMTIME,  TOTIME from  (  select   NPSSCAPL.NPSSCAPL_ID,   NPSSCAPL.PROCESS_NAME,   NPSSCAPL.PROCESSING_SYSTEM,   NPSSCAPL.CURRENCY,   NPSSCAPL.ACCOUNTHOLDERBIC,   NPSSCAPL.ACCOUNTNUMBER,   NPSSCAPL.DATETIME,   NPSSCAPL.RESPONSE_CODE,   NPSSCAPL.PROCESS_REF_NO,   NPSSCAPL.REQUEST_DATA_JSON,   NPSSCAPL.RESPONSE_DATA_JSON,   NPSSCAPL.DATASOURCE,   NPSSCAPL.SENDERBIC,   NPSSCAPL.FROMDATE,   NPSSCAPL.TODATE,   to_char(NPSSCAPL.FROMDATE, 'DD/MM/YYYY') as FROM_DATE,   to_char(NPSSCAPL.TODATE, 'DD/MM/YYYY') as TO_DATE,   NPSSCAPL.REFTYPE,   NPSSCAPL.REF,   NPSSCAPL.CYCLENUMBER,   NPSSCAPL.CREATED_BY,   NPSSCAPL.CREATED_BY_NAME,   NPSSCAPL.CREATED_BY_STS_ID,   NPSSCAPL.CREATED_DATE,   NPSSCAPL.DT_CODE,   NPSSCAPL.DT_DESCRIPTION,   NPSSCAPL.DTT_CODE,   NPSSCAPL.DTT_DESCRIPTION,   NPSSCAPL.MODIFIED_BY,   NPSSCAPL.MODIFIED_BY_NAME,   NPSSCAPL.MODIFIED_BY_STS_ID,   NPSSCAPL.MODIFIED_DATE,   NPSSCAPL.PRCT_ID,   NPSSCAPL.STATUS,   NPSSCAPL.PROCESS_STATUS,   NPSSCAPL.SYSTEM_ID,   NPSSCAPL.SYSTEM_NAME,   NPSSCAPL.TENANT_ID,   NPSSCAPL.APP_ID,   NPSSCAPL.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NPSSCAPL.PL_STATUS,   NPSSCAPL.FROMTIME,   NPSSCAPL.TOTIME  from   NPSS_CORE_API_PROCESS_LOG NPSSCAPL  left join TRANSACTION_SET TS on   NPSSCAPL.NPSSCAPL_ID = TS.TRN_ID   and NPSSCAPL.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB> .CORE_Q_STATUS_ROLES QR on   NPSSCAPL.STATUS = QR.PROCESS_QUEUE_STATUS   and NPSSCAPL.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB> .CORE_APP_Q_SETUP PQ on   NPSSCAPL.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  NPSSCAPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Details CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"paymentDetail","source_value":"","source_type":"HARDCODED","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref Type","target_column":"REFTYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref","target_column":"ref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender BIC","target_column":"SENDERBIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Date","target_column":"DATETIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.request.context_menu = []
		this.request.views = {}
		this.request.onChangecomponent = new EventEmitter<any>()
		this.request.show = true
		this.request.dynamic_param = {}
	
		// Component level properties - "Input Details" 
		this.input_details.uictrl_code = "dynamic_ui"
		this.input_details.uicgc_desc = "Input Details"
		this.input_details.uicgc_code = "uicgc_4"
		this.input_details.params = {}
		this.input_details.datasource = {}
		this.input_details.context_menu = []
		this.input_details.views = {"first":"DTT_1304_1670589169341","is_tab_mode":"N","dtt_1304_1670589169341":{"0":[{"dttv_id":"NPSS Payment Detail UI","tab_order":0,"tab_name":"","uicgc_description":"Input Details","role_description":"default","dtt_description":"Core API Process Log"}]}}
		this.input_details.onChangecomponent = new EventEmitter<any>()
		this.input_details.show = true
		this.input_details.dynamic_param = {}
		this.input_details.f_npss_payment_detail_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.input_details.form_name = "f_npss_payment_detail_ui"
	
		// Component level properties - "Response" 
		this.response.uictrl_code = "custom_widget"
		this.response.uicgc_desc = "Response"
		this.response.uicgc_code = "uicgc_5"
		this.response.params = {}
		this.response.datasource = {}
		this.response.context_menu = []
		this.response.views = {}
		this.response.onChangecomponent = new EventEmitter<any>()
		this.response.show = true
		this.response.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__cf_for_pl()
		this.page_load__tbc_for_hide()
		this.page_load__hide_ele()
		this.page_load__de_for_call_api_btn_from_pg()
		this.page_load__he_on_page_laod_to_call_api_btn()
		this.page_load__he_for_fetch_trg()
	}

	//Handler for INTERNAL event of "cf for pl"
	cf_for_pl__internal(parent_event_result){
		this.cf_for_pl__cc_for_show_hide_on_page_load(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for show hide on page load"
	cc_for_show_hide_on_page_load__internal(parent_event_result){
		this.cc_for_show_hide_on_page_load__brfq_on_page_laod(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_search()
		this.search_search__cp_from_search_btn_click()
	}

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__internal(parent_event_result){
		this.ssp_for_search__brfq_for_srch(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__clear_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "api input ui actions clear"
	api_input_ui_actions_clear__action_button_click(){
		this.api_input_ui_actions_clear__cui_for_api()
	}

	//Handler for ACTION_BUTTON_CLICK event of "api input ui actions fetch"
	api_input_ui_actions_fetch__action_button_click(){
		this.api_input_ui_actions_fetch__ve_for_save_to_api()
	}

	//Handler for INTERNAL event of "ve for save to api"
	ve_for_save_to_api__internal(parent_event_result){
		this.ve_for_save_to_api__cc_from_fetch_btn_click(parent_event_result)
	}

	//Handler for INTERNAL event of "cc from fetch btn click"
	cc_from_fetch_btn_click__internal(parent_event_result){
		this.cc_from_fetch_btn_click__im_from_fetch_btn_click(parent_event_result)
	}

	//Handler for INTERNAL event of "im from fetch btn click"
	im_from_fetch_btn_click__internal(parent_event_result){
		this.im_from_fetch_btn_click__tbc_from_pass_im(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "api input ui actions trg view response"
	api_input_ui_actions_trg_view_response__action_button_click(){
		this.api_input_ui_actions_trg_view_response__ide_call()
	}

	//Handler for CHECKED_CHANGED event of "request"
	request__checked_changed(peventcontext){
		this.request__svm_for_checked_change(peventcontext)
		this.request__ee_for_call_api_btn(peventcontext)
	}

	//Handler for FILTER_CLICK event of "request"
	request__filter_click(){
		this.request__spap_from_list()
	}

	//Handler for SELECTION_CHANGED event of "request"
	request__selection_changed(){
		this.request__svtm_from_list()
		this.request__ee_for_view_res()
		this.request__tbc_for_view_res()
	}

	//Handler for INTERNAL event of "svm for checked change"
	svm_for_checked_change__internal(parent_event_result){
		this.svm_for_checked_change__cc_for_shw_hide_on_list(parent_event_result)
	}

	//Handler for INTERNAL event of "svtm from list"
	svtm_from_list__internal(parent_event_result){
		this.svtm_from_list__cc_for_show_hide_on_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "api input ui actions fetch trg"
	api_input_ui_actions_fetch_trg__action_button_click(){
		this.api_input_ui_actions_fetch_trg__brfq_from_fetch_trg()
	}

	//Handler for INTERNAL event of "brfq from fetch trg"
	brfq_from_fetch_trg__internal(parent_event_result){
		this.brfq_from_fetch_trg__sfr_from_fetch_trg(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "api input ui actions trg hide"
	api_input_ui_actions_trg_hide__action_button_click(){
		this.api_input_ui_actions_trg_hide__de_for_process_namepds__input_details()
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
		let internals="cf_for_pl__cc_for_show_hide_on_page_load,"
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
	page_load__tbc_for_hide() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="api_input_ui_actions_trg_hide"
		let parent_source_id=""
		let event_code="e_1677308869667"
		let event_params={"caller_name":"page_load__tbc_for_hide","event_desc":"TBC for hide","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__hide_ele() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="api_input_ui_actions_trg_hide"
		let parent_source_id=""
		let event_code="e_1677308877651"
		let event_params={"caller_name":"page_load__hide_ele","event_desc":"Hide Ele","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__de_for_call_api_btn_from_pg() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="api_input_ui_actions_trg_view_response"
		let parent_source_id=""
		let event_code="e_1677321256773"
		let event_params={"caller_name":"page_load__de_for_call_api_btn_from_pg","event_desc":"DE for Call API BTN from PG","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_on_page_laod_to_call_api_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="api_input_ui_actions_trg_view_response"
		let parent_source_id=""
		let event_code="e_1677321825499"
		let event_params={"caller_name":"page_load__he_on_page_laod_to_call_api_btn","event_desc":"HE on Page Laod to Call API BTN","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_fetch_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="api_input_ui_actions_fetch_trg"
		let parent_source_id=""
		let event_code="e_1678185042243"
		let event_params={"caller_name":"page_load__he_for_fetch_trg","event_desc":"HE for Fetch trg","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "cf for pl"
	cf_for_pl__cc_for_show_hide_on_page_load(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_for_pl"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1677321685069"
		let event_params={"caller_name":"cf_for_pl__cc_for_show_hide_on_page_load","event_desc":"CC for Show Hide on Page Load","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_show_hide_on_page_load__brfq_on_page_laod,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for show hide on page load"
	cc_for_show_hide_on_page_load__brfq_on_page_laod(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_show_hide_on_page_load"
		let destn_id="request"
		let parent_source_id="cf_for_pl"
		let event_code="e_1677321904762"
		let event_params={"caller_name":"cc_for_show_hide_on_page_load__brfq_on_page_laod","event_desc":"BRFQ on Page Laod","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1670589169341":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1670589169341","dtt_desc":"Core API Process Log","ds_eligible":"DS_1677330007370","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Core API PLOG Liq Pos MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1677309546629","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1677309546860","date_format":false},{"column_name":"ACCOUNTHOLDERBIC","alias_name":"","mq_id":"MQ_1677309547107","date_format":false},{"column_name":"ACCOUNTNUMBER","alias_name":"","mq_id":"MQ_1677309565754","date_format":false},{"column_name":"DATETIME","alias_name":"","mq_id":"MQ_1677309566186","date_format":true},{"column_name":"DATASOURCE","alias_name":"","mq_id":"MQ_1677309586905","date_format":false},{"column_name":"CYCLENUMBER","alias_name":"","mq_id":"MQ_1677311049468","date_format":false},{"column_name":"SENDERBIC","alias_name":"","mq_id":"MQ_1677318148187","date_format":false},{"column_name":"FROMDATE","alias_name":"","mq_id":"MQ_1677318160384","date_format":true},{"column_name":"TODATE","alias_name":"","mq_id":"MQ_1677318160672","date_format":true},{"column_name":"REFTYPE","alias_name":"","mq_id":"MQ_1677327468115","date_format":false},{"column_name":"ref","alias_name":"","mq_id":"MQ_1677327468858","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1678106643760","date_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1678106643919","date_format":false},{"column_name":"FROM_DATE","alias_name":"","mq_id":"MQ_1680680668576","date_format":false},{"column_name":"TO_DATE","alias_name":"","mq_id":"MQ_1680680668734","date_format":false}],"joins":[]},"eq_text":"select  NPSSCAPL_ID,  PROCESS_NAME,  PROCESSING_SYSTEM,  CURRENCY,  ACCOUNTHOLDERBIC,  ACCOUNTNUMBER,  DATETIME,  RESPONSE_CODE,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  DATASOURCE,  SENDERBIC,  FROMDATE,  TODATE,  FROM_DATE,  TO_DATE,  REFTYPE,  ref,  CYCLENUMBER,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  PL_STATUS,  FROMTIME,  TOTIME from  (  select   NPSSCAPL.NPSSCAPL_ID,   NPSSCAPL.PROCESS_NAME,   NPSSCAPL.PROCESSING_SYSTEM,   NPSSCAPL.CURRENCY,   NPSSCAPL.ACCOUNTHOLDERBIC,   NPSSCAPL.ACCOUNTNUMBER,   NPSSCAPL.DATETIME,   NPSSCAPL.RESPONSE_CODE,   NPSSCAPL.PROCESS_REF_NO,   NPSSCAPL.REQUEST_DATA_JSON,   NPSSCAPL.RESPONSE_DATA_JSON,   NPSSCAPL.DATASOURCE,   NPSSCAPL.SENDERBIC,   NPSSCAPL.FROMDATE,   NPSSCAPL.TODATE,   to_char(NPSSCAPL.FROMDATE, 'DD/MM/YYYY') as FROM_DATE,   to_char(NPSSCAPL.TODATE, 'DD/MM/YYYY') as TO_DATE,   NPSSCAPL.REFTYPE,   NPSSCAPL.REF,   NPSSCAPL.CYCLENUMBER,   NPSSCAPL.CREATED_BY,   NPSSCAPL.CREATED_BY_NAME,   NPSSCAPL.CREATED_BY_STS_ID,   NPSSCAPL.CREATED_DATE,   NPSSCAPL.DT_CODE,   NPSSCAPL.DT_DESCRIPTION,   NPSSCAPL.DTT_CODE,   NPSSCAPL.DTT_DESCRIPTION,   NPSSCAPL.MODIFIED_BY,   NPSSCAPL.MODIFIED_BY_NAME,   NPSSCAPL.MODIFIED_BY_STS_ID,   NPSSCAPL.MODIFIED_DATE,   NPSSCAPL.PRCT_ID,   NPSSCAPL.STATUS,   NPSSCAPL.PROCESS_STATUS,   NPSSCAPL.SYSTEM_ID,   NPSSCAPL.SYSTEM_NAME,   NPSSCAPL.TENANT_ID,   NPSSCAPL.APP_ID,   NPSSCAPL.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NPSSCAPL.PL_STATUS,   NPSSCAPL.FROMTIME,   NPSSCAPL.TOTIME  from   NPSS_CORE_API_PROCESS_LOG NPSSCAPL  left join TRANSACTION_SET TS on   NPSSCAPL.NPSSCAPL_ID = TS.TRN_ID   and NPSSCAPL.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB> .CORE_Q_STATUS_ROLES QR on   NPSSCAPL.STATUS = QR.PROCESS_QUEUE_STATUS   and NPSSCAPL.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB> .CORE_APP_Q_SETUP PQ on   NPSSCAPL.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  NPSSCAPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Details CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"paymentDetail","source_value":"","source_type":"HARDCODED","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref Type","target_column":"REFTYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref","target_column":"ref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender BIC","target_column":"SENDERBIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Date","target_column":"DATETIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__cp_from_search_btn_click() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678186156498"
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

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__brfq_for_srch(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search"
		let destn_id="request"
		let parent_source_id="search_search"
		let event_code="e_1677304184184"
		let event_params={"caller_name":"ssp_for_search__brfq_for_srch","event_desc":"BRFQ for srch","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1670589169341":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1670589169341","dtt_desc":"Core API Process Log","ds_eligible":"DS_1677330007370","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Core API PLOG Liq Pos MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1677309546629","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1677309546860","date_format":false},{"column_name":"ACCOUNTHOLDERBIC","alias_name":"","mq_id":"MQ_1677309547107","date_format":false},{"column_name":"ACCOUNTNUMBER","alias_name":"","mq_id":"MQ_1677309565754","date_format":false},{"column_name":"DATETIME","alias_name":"","mq_id":"MQ_1677309566186","date_format":true},{"column_name":"DATASOURCE","alias_name":"","mq_id":"MQ_1677309586905","date_format":false},{"column_name":"CYCLENUMBER","alias_name":"","mq_id":"MQ_1677311049468","date_format":false},{"column_name":"SENDERBIC","alias_name":"","mq_id":"MQ_1677318148187","date_format":false},{"column_name":"FROMDATE","alias_name":"","mq_id":"MQ_1677318160384","date_format":true},{"column_name":"TODATE","alias_name":"","mq_id":"MQ_1677318160672","date_format":true},{"column_name":"REFTYPE","alias_name":"","mq_id":"MQ_1677327468115","date_format":false},{"column_name":"ref","alias_name":"","mq_id":"MQ_1677327468858","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1678106643760","date_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1678106643919","date_format":false},{"column_name":"FROM_DATE","alias_name":"","mq_id":"MQ_1680680668576","date_format":false},{"column_name":"TO_DATE","alias_name":"","mq_id":"MQ_1680680668734","date_format":false}],"joins":[]},"eq_text":"select  NPSSCAPL_ID,  PROCESS_NAME,  PROCESSING_SYSTEM,  CURRENCY,  ACCOUNTHOLDERBIC,  ACCOUNTNUMBER,  DATETIME,  RESPONSE_CODE,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  DATASOURCE,  SENDERBIC,  FROMDATE,  TODATE,  FROM_DATE,  TO_DATE,  REFTYPE,  ref,  CYCLENUMBER,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  PL_STATUS,  FROMTIME,  TOTIME from  (  select   NPSSCAPL.NPSSCAPL_ID,   NPSSCAPL.PROCESS_NAME,   NPSSCAPL.PROCESSING_SYSTEM,   NPSSCAPL.CURRENCY,   NPSSCAPL.ACCOUNTHOLDERBIC,   NPSSCAPL.ACCOUNTNUMBER,   NPSSCAPL.DATETIME,   NPSSCAPL.RESPONSE_CODE,   NPSSCAPL.PROCESS_REF_NO,   NPSSCAPL.REQUEST_DATA_JSON,   NPSSCAPL.RESPONSE_DATA_JSON,   NPSSCAPL.DATASOURCE,   NPSSCAPL.SENDERBIC,   NPSSCAPL.FROMDATE,   NPSSCAPL.TODATE,   to_char(NPSSCAPL.FROMDATE, 'DD/MM/YYYY') as FROM_DATE,   to_char(NPSSCAPL.TODATE, 'DD/MM/YYYY') as TO_DATE,   NPSSCAPL.REFTYPE,   NPSSCAPL.REF,   NPSSCAPL.CYCLENUMBER,   NPSSCAPL.CREATED_BY,   NPSSCAPL.CREATED_BY_NAME,   NPSSCAPL.CREATED_BY_STS_ID,   NPSSCAPL.CREATED_DATE,   NPSSCAPL.DT_CODE,   NPSSCAPL.DT_DESCRIPTION,   NPSSCAPL.DTT_CODE,   NPSSCAPL.DTT_DESCRIPTION,   NPSSCAPL.MODIFIED_BY,   NPSSCAPL.MODIFIED_BY_NAME,   NPSSCAPL.MODIFIED_BY_STS_ID,   NPSSCAPL.MODIFIED_DATE,   NPSSCAPL.PRCT_ID,   NPSSCAPL.STATUS,   NPSSCAPL.PROCESS_STATUS,   NPSSCAPL.SYSTEM_ID,   NPSSCAPL.SYSTEM_NAME,   NPSSCAPL.TENANT_ID,   NPSSCAPL.APP_ID,   NPSSCAPL.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NPSSCAPL.PL_STATUS,   NPSSCAPL.FROMTIME,   NPSSCAPL.TOTIME  from   NPSS_CORE_API_PROCESS_LOG NPSSCAPL  left join TRANSACTION_SET TS on   NPSSCAPL.NPSSCAPL_ID = TS.TRN_ID   and NPSSCAPL.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB> .CORE_Q_STATUS_ROLES QR on   NPSSCAPL.STATUS = QR.PROCESS_QUEUE_STATUS   and NPSSCAPL.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB> .CORE_APP_Q_SETUP PQ on   NPSSCAPL.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  NPSSCAPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Details CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"paymentDetail","source_value":"","source_type":"HARDCODED","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref Type","target_column":"REFTYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref","target_column":"ref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender BIC","target_column":"SENDERBIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Date","target_column":"DATETIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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

	//Handler for ACTION_BUTTON_CLICK event of "api input ui actions clear"
	api_input_ui_actions_clear__cui_for_api() { 
		let Dest_Is_ctrl=true
		
		let source_id="api_input_ui_actions_clear"
		let destn_id="input_details"
		let parent_source_id=""
		let event_code="e_1677321303047"
		let event_params={"caller_name":"api_input_ui_actions_clear__cui_for_api","event_desc":"CUI for API","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_actions_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "api input ui actions fetch"
	api_input_ui_actions_fetch__ve_for_save_to_api() { 
		let Dest_Is_ctrl=true
		
		let source_id="api_input_ui_actions_fetch"
		let destn_id="input_details"
		let parent_source_id=""
		let event_code="e_1677321344128"
		let event_params={"caller_name":"api_input_ui_actions_fetch__ve_for_save_to_api","event_desc":"VE for Save to API","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_actions_fetch","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_save_to_api__cc_from_fetch_btn_click,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for save to api"
	ve_for_save_to_api__cc_from_fetch_btn_click(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_save_to_api"
		let destn_id=""
		let parent_source_id="api_input_ui_actions_fetch"
		let event_code="e_1678184418948"
		let event_params={"caller_name":"ve_for_save_to_api__cc_from_fetch_btn_click","event_desc":"CC from fetch btn click","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_actions_fetch","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_from_fetch_btn_click__im_from_fetch_btn_click,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_payment_detaiService.fn_npss_cs_payment_detai(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc from fetch btn click"
	cc_from_fetch_btn_click__im_from_fetch_btn_click(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_from_fetch_btn_click"
		let destn_id=""
		let parent_source_id="ve_for_save_to_api"
		let event_code="e_1678184428139"
		let event_params={"caller_name":"cc_from_fetch_btn_click__im_from_fetch_btn_click","event_desc":"IM from fetch btn click","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Core API paymentDetail has been called successfully","root_source_id":"api_input_ui_actions_fetch","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_from_fetch_btn_click__tbc_from_pass_im,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im from fetch btn click"
	im_from_fetch_btn_click__tbc_from_pass_im(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_from_fetch_btn_click"
		let destn_id="api_input_ui_actions_fetch_trg"
		let parent_source_id="cc_from_fetch_btn_click"
		let event_code="e_1678184584410"
		let event_params={"caller_name":"im_from_fetch_btn_click__tbc_from_pass_im","event_desc":"TBC from Pass IM","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_actions_fetch","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "api input ui actions trg view response"
	api_input_ui_actions_trg_view_response__ide_call() { 
		let Dest_Is_ctrl=true
		
		let source_id="api_input_ui_actions_trg_view_response"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1677305538537"
		let event_params={"caller_name":"api_input_ui_actions_trg_view_response__ide_call","event_desc":"ide call","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_actions_trg_view_response","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_liquidity_position_responseService.fn_npss_cs_liquidity_position_response(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for CHECKED_CHANGED event of "request"
	request__svm_for_checked_change(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["not call"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="request"
		let destn_id="request"
		let parent_source_id=""
		let event_code="e_1677321588412"
		let event_params={"caller_name":"request__svm_for_checked_change","event_desc":"SVM for Checked Change","event_type":"CHECKED_CHANGED","caller_event_context":"not call","root_source_id":"request","raiseparam":{},"eventcontext":["not call"]}
		let handler_code="set_value_to_memory"
		let internals="svm_for_checked_change__cc_for_shw_hide_on_list,"
		let event_data={"request":{"e_1677321588412":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_3","event_code":"E_1677321588412","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"Core API Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"MULTI","column_name":"NPSSCAPL_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSCAPL_ID","setd3name":"NPSSCAPL_ID"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1670589169341":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1670589169341","dtt_desc":"Core API Process Log","ds_eligible":"DS_1677330007370","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Core API PLOG Liq Pos MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1677309546629","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1677309546860","date_format":false},{"column_name":"ACCOUNTHOLDERBIC","alias_name":"","mq_id":"MQ_1677309547107","date_format":false},{"column_name":"ACCOUNTNUMBER","alias_name":"","mq_id":"MQ_1677309565754","date_format":false},{"column_name":"DATETIME","alias_name":"","mq_id":"MQ_1677309566186","date_format":true},{"column_name":"DATASOURCE","alias_name":"","mq_id":"MQ_1677309586905","date_format":false},{"column_name":"CYCLENUMBER","alias_name":"","mq_id":"MQ_1677311049468","date_format":false},{"column_name":"SENDERBIC","alias_name":"","mq_id":"MQ_1677318148187","date_format":false},{"column_name":"FROMDATE","alias_name":"","mq_id":"MQ_1677318160384","date_format":true},{"column_name":"TODATE","alias_name":"","mq_id":"MQ_1677318160672","date_format":true},{"column_name":"REFTYPE","alias_name":"","mq_id":"MQ_1677327468115","date_format":false},{"column_name":"ref","alias_name":"","mq_id":"MQ_1677327468858","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1678106643760","date_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1678106643919","date_format":false},{"column_name":"FROM_DATE","alias_name":"","mq_id":"MQ_1680680668576","date_format":false},{"column_name":"TO_DATE","alias_name":"","mq_id":"MQ_1680680668734","date_format":false}],"joins":[]},"eq_text":"select  NPSSCAPL_ID,  PROCESS_NAME,  PROCESSING_SYSTEM,  CURRENCY,  ACCOUNTHOLDERBIC,  ACCOUNTNUMBER,  DATETIME,  RESPONSE_CODE,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  DATASOURCE,  SENDERBIC,  FROMDATE,  TODATE,  FROM_DATE,  TO_DATE,  REFTYPE,  ref,  CYCLENUMBER,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  PL_STATUS,  FROMTIME,  TOTIME from  (  select   NPSSCAPL.NPSSCAPL_ID,   NPSSCAPL.PROCESS_NAME,   NPSSCAPL.PROCESSING_SYSTEM,   NPSSCAPL.CURRENCY,   NPSSCAPL.ACCOUNTHOLDERBIC,   NPSSCAPL.ACCOUNTNUMBER,   NPSSCAPL.DATETIME,   NPSSCAPL.RESPONSE_CODE,   NPSSCAPL.PROCESS_REF_NO,   NPSSCAPL.REQUEST_DATA_JSON,   NPSSCAPL.RESPONSE_DATA_JSON,   NPSSCAPL.DATASOURCE,   NPSSCAPL.SENDERBIC,   NPSSCAPL.FROMDATE,   NPSSCAPL.TODATE,   to_char(NPSSCAPL.FROMDATE, 'DD/MM/YYYY') as FROM_DATE,   to_char(NPSSCAPL.TODATE, 'DD/MM/YYYY') as TO_DATE,   NPSSCAPL.REFTYPE,   NPSSCAPL.REF,   NPSSCAPL.CYCLENUMBER,   NPSSCAPL.CREATED_BY,   NPSSCAPL.CREATED_BY_NAME,   NPSSCAPL.CREATED_BY_STS_ID,   NPSSCAPL.CREATED_DATE,   NPSSCAPL.DT_CODE,   NPSSCAPL.DT_DESCRIPTION,   NPSSCAPL.DTT_CODE,   NPSSCAPL.DTT_DESCRIPTION,   NPSSCAPL.MODIFIED_BY,   NPSSCAPL.MODIFIED_BY_NAME,   NPSSCAPL.MODIFIED_BY_STS_ID,   NPSSCAPL.MODIFIED_DATE,   NPSSCAPL.PRCT_ID,   NPSSCAPL.STATUS,   NPSSCAPL.PROCESS_STATUS,   NPSSCAPL.SYSTEM_ID,   NPSSCAPL.SYSTEM_NAME,   NPSSCAPL.TENANT_ID,   NPSSCAPL.APP_ID,   NPSSCAPL.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NPSSCAPL.PL_STATUS,   NPSSCAPL.FROMTIME,   NPSSCAPL.TOTIME  from   NPSS_CORE_API_PROCESS_LOG NPSSCAPL  left join TRANSACTION_SET TS on   NPSSCAPL.NPSSCAPL_ID = TS.TRN_ID   and NPSSCAPL.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB> .CORE_Q_STATUS_ROLES QR on   NPSSCAPL.STATUS = QR.PROCESS_QUEUE_STATUS   and NPSSCAPL.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB> .CORE_APP_Q_SETUP PQ on   NPSSCAPL.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  NPSSCAPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Details CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"paymentDetail","source_value":"","source_type":"HARDCODED","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref Type","target_column":"REFTYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref","target_column":"ref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender BIC","target_column":"SENDERBIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Date","target_column":"DATETIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for CHECKED_CHANGED event of "request"
	request__ee_for_call_api_btn(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["not call"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="request"
		let destn_id="api_input_ui_actions_trg_view_response"
		let parent_source_id=""
		let event_code="e_1677322950827"
		let event_params={"caller_name":"request__ee_for_call_api_btn","event_desc":"EE for Call API BTN","event_type":"CHECKED_CHANGED","caller_event_context":"not call","root_source_id":"request","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""},"eventcontext":["not call"]}
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

	//Handler for FILTER_CLICK event of "request"
	request__spap_from_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="request"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678183046921"
		let event_params={"caller_name":"request__spap_from_list","event_desc":"SPAP from list","event_type":"FILTER_CLICK","caller_event_context":"SUCCESS","root_source_id":"request","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_from_list","selector":"p_search_layout","profile_code":"BTL_1304_1678182550451","window_title":"Search","window_height":400,"window_width":"600px","window_close_icon":"Y","eventdes":"spap_from_list","eventcode":"E_1678183046921"}}
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

	//Handler for SELECTION_CHANGED event of "request"
	request__svtm_from_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="request"
		let destn_id="request"
		let parent_source_id=""
		let event_code="e_1678183073712"
		let event_params={"caller_name":"request__svtm_from_list","event_desc":"SVTM from list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"request","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svtm_from_list__cc_for_show_hide_on_list,"
		let event_data={"request":{"e_1678183073712":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_3","event_code":"E_1678183073712","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"Core API Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"NPSSCAPL_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSCAPL_ID","setd3name":"NPSSCAPL_ID"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1670589169341":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1670589169341","dtt_desc":"Core API Process Log","ds_eligible":"DS_1677330007370","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Core API PLOG Liq Pos MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1677309546629","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1677309546860","date_format":false},{"column_name":"ACCOUNTHOLDERBIC","alias_name":"","mq_id":"MQ_1677309547107","date_format":false},{"column_name":"ACCOUNTNUMBER","alias_name":"","mq_id":"MQ_1677309565754","date_format":false},{"column_name":"DATETIME","alias_name":"","mq_id":"MQ_1677309566186","date_format":true},{"column_name":"DATASOURCE","alias_name":"","mq_id":"MQ_1677309586905","date_format":false},{"column_name":"CYCLENUMBER","alias_name":"","mq_id":"MQ_1677311049468","date_format":false},{"column_name":"SENDERBIC","alias_name":"","mq_id":"MQ_1677318148187","date_format":false},{"column_name":"FROMDATE","alias_name":"","mq_id":"MQ_1677318160384","date_format":true},{"column_name":"TODATE","alias_name":"","mq_id":"MQ_1677318160672","date_format":true},{"column_name":"REFTYPE","alias_name":"","mq_id":"MQ_1677327468115","date_format":false},{"column_name":"ref","alias_name":"","mq_id":"MQ_1677327468858","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1678106643760","date_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1678106643919","date_format":false},{"column_name":"FROM_DATE","alias_name":"","mq_id":"MQ_1680680668576","date_format":false},{"column_name":"TO_DATE","alias_name":"","mq_id":"MQ_1680680668734","date_format":false}],"joins":[]},"eq_text":"select  NPSSCAPL_ID,  PROCESS_NAME,  PROCESSING_SYSTEM,  CURRENCY,  ACCOUNTHOLDERBIC,  ACCOUNTNUMBER,  DATETIME,  RESPONSE_CODE,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  DATASOURCE,  SENDERBIC,  FROMDATE,  TODATE,  FROM_DATE,  TO_DATE,  REFTYPE,  ref,  CYCLENUMBER,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  PL_STATUS,  FROMTIME,  TOTIME from  (  select   NPSSCAPL.NPSSCAPL_ID,   NPSSCAPL.PROCESS_NAME,   NPSSCAPL.PROCESSING_SYSTEM,   NPSSCAPL.CURRENCY,   NPSSCAPL.ACCOUNTHOLDERBIC,   NPSSCAPL.ACCOUNTNUMBER,   NPSSCAPL.DATETIME,   NPSSCAPL.RESPONSE_CODE,   NPSSCAPL.PROCESS_REF_NO,   NPSSCAPL.REQUEST_DATA_JSON,   NPSSCAPL.RESPONSE_DATA_JSON,   NPSSCAPL.DATASOURCE,   NPSSCAPL.SENDERBIC,   NPSSCAPL.FROMDATE,   NPSSCAPL.TODATE,   to_char(NPSSCAPL.FROMDATE, 'DD/MM/YYYY') as FROM_DATE,   to_char(NPSSCAPL.TODATE, 'DD/MM/YYYY') as TO_DATE,   NPSSCAPL.REFTYPE,   NPSSCAPL.REF,   NPSSCAPL.CYCLENUMBER,   NPSSCAPL.CREATED_BY,   NPSSCAPL.CREATED_BY_NAME,   NPSSCAPL.CREATED_BY_STS_ID,   NPSSCAPL.CREATED_DATE,   NPSSCAPL.DT_CODE,   NPSSCAPL.DT_DESCRIPTION,   NPSSCAPL.DTT_CODE,   NPSSCAPL.DTT_DESCRIPTION,   NPSSCAPL.MODIFIED_BY,   NPSSCAPL.MODIFIED_BY_NAME,   NPSSCAPL.MODIFIED_BY_STS_ID,   NPSSCAPL.MODIFIED_DATE,   NPSSCAPL.PRCT_ID,   NPSSCAPL.STATUS,   NPSSCAPL.PROCESS_STATUS,   NPSSCAPL.SYSTEM_ID,   NPSSCAPL.SYSTEM_NAME,   NPSSCAPL.TENANT_ID,   NPSSCAPL.APP_ID,   NPSSCAPL.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NPSSCAPL.PL_STATUS,   NPSSCAPL.FROMTIME,   NPSSCAPL.TOTIME  from   NPSS_CORE_API_PROCESS_LOG NPSSCAPL  left join TRANSACTION_SET TS on   NPSSCAPL.NPSSCAPL_ID = TS.TRN_ID   and NPSSCAPL.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB> .CORE_Q_STATUS_ROLES QR on   NPSSCAPL.STATUS = QR.PROCESS_QUEUE_STATUS   and NPSSCAPL.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB> .CORE_APP_Q_SETUP PQ on   NPSSCAPL.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  NPSSCAPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Details CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"paymentDetail","source_value":"","source_type":"HARDCODED","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref Type","target_column":"REFTYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref","target_column":"ref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender BIC","target_column":"SENDERBIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Date","target_column":"DATETIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "request"
	request__ee_for_view_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="request"
		let destn_id="api_input_ui_actions_trg_view_response"
		let parent_source_id=""
		let event_code="e_1678185332824"
		let event_params={"caller_name":"request__ee_for_view_res","event_desc":"EE for view res","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"request","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "request"
	request__tbc_for_view_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="request"
		let destn_id="api_input_ui_actions_trg_view_response"
		let parent_source_id=""
		let event_code="e_1678185530652"
		let event_params={"caller_name":"request__tbc_for_view_res","event_desc":"TBC for view res","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"request","raiseparam":{}}
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

	//Handler for INTERNAL event of "svm for checked change"
	svm_for_checked_change__cc_for_shw_hide_on_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_checked_change"
		let destn_id=""
		let parent_source_id="request"
		let event_code="e_1677322171892"
		let event_params={"caller_name":"svm_for_checked_change__cc_for_shw_hide_on_list","event_desc":"CC for Shw Hide on List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"request","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "svtm from list"
	svtm_from_list__cc_for_show_hide_on_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svtm_from_list"
		let destn_id=""
		let parent_source_id="request"
		let event_code="e_1678183251973"
		let event_params={"caller_name":"svtm_from_list__cc_for_show_hide_on_list","event_desc":"CC for Show Hide on List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"request","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "api input ui actions fetch trg"
	api_input_ui_actions_fetch_trg__brfq_from_fetch_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="api_input_ui_actions_fetch_trg"
		let destn_id="request"
		let parent_source_id=""
		let event_code="e_1678184110400"
		let event_params={"caller_name":"api_input_ui_actions_fetch_trg__brfq_from_fetch_trg","event_desc":"BRFQ from fetch trg","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_actions_fetch_trg","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_from_fetch_trg__sfr_from_fetch_trg,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1670589169341":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1670589169341","dtt_desc":"Core API Process Log","ds_eligible":"DS_1677330007370","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Core API PLOG Liq Pos MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1677309546629","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1677309546860","date_format":false},{"column_name":"ACCOUNTHOLDERBIC","alias_name":"","mq_id":"MQ_1677309547107","date_format":false},{"column_name":"ACCOUNTNUMBER","alias_name":"","mq_id":"MQ_1677309565754","date_format":false},{"column_name":"DATETIME","alias_name":"","mq_id":"MQ_1677309566186","date_format":true},{"column_name":"DATASOURCE","alias_name":"","mq_id":"MQ_1677309586905","date_format":false},{"column_name":"CYCLENUMBER","alias_name":"","mq_id":"MQ_1677311049468","date_format":false},{"column_name":"SENDERBIC","alias_name":"","mq_id":"MQ_1677318148187","date_format":false},{"column_name":"FROMDATE","alias_name":"","mq_id":"MQ_1677318160384","date_format":true},{"column_name":"TODATE","alias_name":"","mq_id":"MQ_1677318160672","date_format":true},{"column_name":"REFTYPE","alias_name":"","mq_id":"MQ_1677327468115","date_format":false},{"column_name":"ref","alias_name":"","mq_id":"MQ_1677327468858","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1678106643760","date_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1678106643919","date_format":false},{"column_name":"FROM_DATE","alias_name":"","mq_id":"MQ_1680680668576","date_format":false},{"column_name":"TO_DATE","alias_name":"","mq_id":"MQ_1680680668734","date_format":false}],"joins":[]},"eq_text":"select  NPSSCAPL_ID,  PROCESS_NAME,  PROCESSING_SYSTEM,  CURRENCY,  ACCOUNTHOLDERBIC,  ACCOUNTNUMBER,  DATETIME,  RESPONSE_CODE,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  DATASOURCE,  SENDERBIC,  FROMDATE,  TODATE,  FROM_DATE,  TO_DATE,  REFTYPE,  ref,  CYCLENUMBER,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  PL_STATUS,  FROMTIME,  TOTIME from  (  select   NPSSCAPL.NPSSCAPL_ID,   NPSSCAPL.PROCESS_NAME,   NPSSCAPL.PROCESSING_SYSTEM,   NPSSCAPL.CURRENCY,   NPSSCAPL.ACCOUNTHOLDERBIC,   NPSSCAPL.ACCOUNTNUMBER,   NPSSCAPL.DATETIME,   NPSSCAPL.RESPONSE_CODE,   NPSSCAPL.PROCESS_REF_NO,   NPSSCAPL.REQUEST_DATA_JSON,   NPSSCAPL.RESPONSE_DATA_JSON,   NPSSCAPL.DATASOURCE,   NPSSCAPL.SENDERBIC,   NPSSCAPL.FROMDATE,   NPSSCAPL.TODATE,   to_char(NPSSCAPL.FROMDATE, 'DD/MM/YYYY') as FROM_DATE,   to_char(NPSSCAPL.TODATE, 'DD/MM/YYYY') as TO_DATE,   NPSSCAPL.REFTYPE,   NPSSCAPL.REF,   NPSSCAPL.CYCLENUMBER,   NPSSCAPL.CREATED_BY,   NPSSCAPL.CREATED_BY_NAME,   NPSSCAPL.CREATED_BY_STS_ID,   NPSSCAPL.CREATED_DATE,   NPSSCAPL.DT_CODE,   NPSSCAPL.DT_DESCRIPTION,   NPSSCAPL.DTT_CODE,   NPSSCAPL.DTT_DESCRIPTION,   NPSSCAPL.MODIFIED_BY,   NPSSCAPL.MODIFIED_BY_NAME,   NPSSCAPL.MODIFIED_BY_STS_ID,   NPSSCAPL.MODIFIED_DATE,   NPSSCAPL.PRCT_ID,   NPSSCAPL.STATUS,   NPSSCAPL.PROCESS_STATUS,   NPSSCAPL.SYSTEM_ID,   NPSSCAPL.SYSTEM_NAME,   NPSSCAPL.TENANT_ID,   NPSSCAPL.APP_ID,   NPSSCAPL.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NPSSCAPL.PL_STATUS,   NPSSCAPL.FROMTIME,   NPSSCAPL.TOTIME  from   NPSS_CORE_API_PROCESS_LOG NPSSCAPL  left join TRANSACTION_SET TS on   NPSSCAPL.NPSSCAPL_ID = TS.TRN_ID   and NPSSCAPL.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB> .CORE_Q_STATUS_ROLES QR on   NPSSCAPL.STATUS = QR.PROCESS_QUEUE_STATUS   and NPSSCAPL.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB> .CORE_APP_Q_SETUP PQ on   NPSSCAPL.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  NPSSCAPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Details CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"paymentDetail","source_value":"","source_type":"HARDCODED","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref Type","target_column":"REFTYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref","target_column":"ref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender BIC","target_column":"SENDERBIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Date","target_column":"DATETIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq from fetch trg"
	brfq_from_fetch_trg__sfr_from_fetch_trg(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_from_fetch_trg"
		let destn_id="request"
		let parent_source_id="api_input_ui_actions_fetch_trg"
		let event_code="e_1678184132399"
		let event_params={"caller_name":"brfq_from_fetch_trg__sfr_from_fetch_trg","event_desc":"SFR from fetch trg","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_actions_fetch_trg","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1670589169341":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1670589169341","dtt_desc":"Core API Process Log","ds_eligible":"DS_1677330007370","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Core API PLOG Liq Pos MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1677309546629","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1677309546860","date_format":false},{"column_name":"ACCOUNTHOLDERBIC","alias_name":"","mq_id":"MQ_1677309547107","date_format":false},{"column_name":"ACCOUNTNUMBER","alias_name":"","mq_id":"MQ_1677309565754","date_format":false},{"column_name":"DATETIME","alias_name":"","mq_id":"MQ_1677309566186","date_format":true},{"column_name":"DATASOURCE","alias_name":"","mq_id":"MQ_1677309586905","date_format":false},{"column_name":"CYCLENUMBER","alias_name":"","mq_id":"MQ_1677311049468","date_format":false},{"column_name":"SENDERBIC","alias_name":"","mq_id":"MQ_1677318148187","date_format":false},{"column_name":"FROMDATE","alias_name":"","mq_id":"MQ_1677318160384","date_format":true},{"column_name":"TODATE","alias_name":"","mq_id":"MQ_1677318160672","date_format":true},{"column_name":"REFTYPE","alias_name":"","mq_id":"MQ_1677327468115","date_format":false},{"column_name":"ref","alias_name":"","mq_id":"MQ_1677327468858","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1678106643760","date_format":true},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1678106643919","date_format":false},{"column_name":"FROM_DATE","alias_name":"","mq_id":"MQ_1680680668576","date_format":false},{"column_name":"TO_DATE","alias_name":"","mq_id":"MQ_1680680668734","date_format":false}],"joins":[]},"eq_text":"select  NPSSCAPL_ID,  PROCESS_NAME,  PROCESSING_SYSTEM,  CURRENCY,  ACCOUNTHOLDERBIC,  ACCOUNTNUMBER,  DATETIME,  RESPONSE_CODE,  PROCESS_REF_NO,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  DATASOURCE,  SENDERBIC,  FROMDATE,  TODATE,  FROM_DATE,  TO_DATE,  REFTYPE,  ref,  CYCLENUMBER,  CREATED_BY,  CREATED_BY_NAME,  CREATED_BY_STS_ID,  CREATED_DATE,  DT_CODE,  DT_DESCRIPTION,  DTT_CODE,  DTT_DESCRIPTION,  MODIFIED_BY,  MODIFIED_BY_NAME,  MODIFIED_BY_STS_ID,  MODIFIED_DATE,  PRCT_ID,  STATUS,  PROCESS_STATUS,  SYSTEM_ID,  SYSTEM_NAME,  TENANT_ID,  APP_ID,  VERSION_NO,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  PL_STATUS,  FROMTIME,  TOTIME from  (  select   NPSSCAPL.NPSSCAPL_ID,   NPSSCAPL.PROCESS_NAME,   NPSSCAPL.PROCESSING_SYSTEM,   NPSSCAPL.CURRENCY,   NPSSCAPL.ACCOUNTHOLDERBIC,   NPSSCAPL.ACCOUNTNUMBER,   NPSSCAPL.DATETIME,   NPSSCAPL.RESPONSE_CODE,   NPSSCAPL.PROCESS_REF_NO,   NPSSCAPL.REQUEST_DATA_JSON,   NPSSCAPL.RESPONSE_DATA_JSON,   NPSSCAPL.DATASOURCE,   NPSSCAPL.SENDERBIC,   NPSSCAPL.FROMDATE,   NPSSCAPL.TODATE,   to_char(NPSSCAPL.FROMDATE, 'DD/MM/YYYY') as FROM_DATE,   to_char(NPSSCAPL.TODATE, 'DD/MM/YYYY') as TO_DATE,   NPSSCAPL.REFTYPE,   NPSSCAPL.REF,   NPSSCAPL.CYCLENUMBER,   NPSSCAPL.CREATED_BY,   NPSSCAPL.CREATED_BY_NAME,   NPSSCAPL.CREATED_BY_STS_ID,   NPSSCAPL.CREATED_DATE,   NPSSCAPL.DT_CODE,   NPSSCAPL.DT_DESCRIPTION,   NPSSCAPL.DTT_CODE,   NPSSCAPL.DTT_DESCRIPTION,   NPSSCAPL.MODIFIED_BY,   NPSSCAPL.MODIFIED_BY_NAME,   NPSSCAPL.MODIFIED_BY_STS_ID,   NPSSCAPL.MODIFIED_DATE,   NPSSCAPL.PRCT_ID,   NPSSCAPL.STATUS,   NPSSCAPL.PROCESS_STATUS,   NPSSCAPL.SYSTEM_ID,   NPSSCAPL.SYSTEM_NAME,   NPSSCAPL.TENANT_ID,   NPSSCAPL.APP_ID,   NPSSCAPL.VERSION_NO,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NPSSCAPL.PL_STATUS,   NPSSCAPL.FROMTIME,   NPSSCAPL.TOTIME  from   NPSS_CORE_API_PROCESS_LOG NPSSCAPL  left join TRANSACTION_SET TS on   NPSSCAPL.NPSSCAPL_ID = TS.TRN_ID   and NPSSCAPL.DTT_CODE = TS.DTT_CODE  inner join <TRAN_DB> .CORE_Q_STATUS_ROLES QR on   NPSSCAPL.STATUS = QR.PROCESS_QUEUE_STATUS   and NPSSCAPL.PROCESS_STATUS = QR.QUEUE_CODE  inner join <TRAN_DB> .CORE_APP_Q_SETUP PQ on   NPSSCAPL.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  NPSSCAPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Details CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_NAME","binding_name":"PROCESS_NAME","binding_value":"","source_name":"paymentDetail","source_value":"","source_type":"HARDCODED","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref Type","target_column":"REFTYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Ref","target_column":"ref","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender BIC","target_column":"SENDERBIC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Date","target_column":"DATETIME","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Created Date","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "api input ui actions trg hide"
	api_input_ui_actions_trg_hide__de_for_process_namepds__input_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="api_input_ui_actions_trg_hide"
		let destn_id="npss_payment_detail_ui_process_name"
		let parent_source_id=""
		let event_code="e_1677330272539"
		let event_params={"destn_comp_id":"input_details","destn_ctrl_id":"process_name","caller_name":"api_input_ui_actions_trg_hide__de_for_process_namepds__input_details","event_desc":"DE for Process namePDS","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"api_input_ui_actions_trg_hide","raiseparam":{}}
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
