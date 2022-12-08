/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 27235 
Modified By     : Admin 
Modified Date   : 2022-Dec-08 12:14 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_simulator
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {npss_cs_sim_pack_008Service} from '../../../custom_widget/npss_cs_sim_pack_008/npss_cs_sim_pack_008.service'

@Component({
	selector: 's_rct_simulator',
	templateUrl: './s_rct_simulator.component.html',
	styleUrls: ['./s_rct_simulator.component.css'],
	providers:[npss_cs_sim_pack_008Service]
})
    
// Start of class 
export class s_rct_simulatorComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_rct_simulator"
	wftpa_id : string = "WFT_NPSS_P_1304_1670485750572_0"
	cg_code : string = "CG_1304_1670479637988"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_mainlayout"
	uicgc_1 : string = "data_entry"
	uicgc_2 : string = "navigation_ui"
	uicgc_3 : string = "list"
	uicgc_4 : string = "back_ui"
	key_events : any = {}
	btl_1304_1670482144272 : string = "p_mainlayout"
	btl_1304_1670481741540 : string = "p_list_layout"
	forms : any = ["uicgc_1","uicgc_2","uicgc_4"]
	data_entry : any = {}
	navigation_ui : any = {}
	navigation_ui_create_pacs008 : any = {}
	navigation_ui_view_list : any = {}
	list : any = {}
	back_ui : any = {}
	back_ui_back : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private npss_cs_sim_pack_008Service:npss_cs_sim_pack_008Service) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Data Entry" 
		this.data_entry.uictrl_code = "dynamic_ui"
		this.data_entry.uicgc_desc = "Data Entry"
		this.data_entry.uicgc_code = "uicgc_1"
		this.data_entry.params = {}
		this.data_entry.datasource = {}
		this.data_entry.context_menu = []
		this.data_entry.views = {"first":"DTT_1304_1670492310194","is_tab_mode":"N","dtt_1304_1670492310194":{"0":[{"dttv_id":"NPSS Simulator UI","tab_order":0,"tab_name":"","uicgc_description":"Data Entry","role_description":"default","dtt_description":"NPSS API Sim Pacs008"}]}}
		this.data_entry.onChangecomponent = new EventEmitter<any>()
		this.data_entry.show = true
		this.data_entry.dynamic_param = {}
		this.data_entry.f_npss_simulator_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.data_entry.form_name = "f_npss_simulator_ui"
	
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
		
		// "Create pacs008" Button of "Navigation UI" component
		this.navigation_ui_create_pacs008.label_name = "Create pacs008"
		this.navigation_ui_create_pacs008.show = true
		this.navigation_ui_create_pacs008.disabled = false
		this.navigation_ui_create_pacs008.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_ui_create_pacs008.dynamic_param = {}
		this.navigation_ui_create_pacs008.role = []
		this.navigation_ui_create_pacs008.action = ""
		
		// "View List" Button of "Navigation UI" component
		this.navigation_ui_view_list.label_name = "View List"
		this.navigation_ui_view_list.show = true
		this.navigation_ui_view_list.disabled = false
		this.navigation_ui_view_list.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_ui_view_list.dynamic_param = {}
		this.navigation_ui_view_list.role = []
		this.navigation_ui_view_list.action = ""
	
		// Component level properties - "List" 
		this.list.uictrl_code = "datatable"
		this.list.uicgc_desc = "List"
		this.list.uicgc_code = "uicgc_3"
		this.list.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1670492310194":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1670492310194","dtt_desc":"NPSS API Sim Pacs008","ds_eligible":"DS_1670493908626","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS RTC Simulator MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1670484259646","date_format":true},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1670484308992","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1670484318887","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1670484328575","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1670484339988","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1670484359228","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1670484406320","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1670484419176","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1670484426616","date_format":false},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1670485053171","date_format":false},{"column_name":"CR_ACCT_ID_CODE","alias_name":"","mq_id":"MQ_1670485062211","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSASP_ID,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CBS_REF_NO,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,       HDR_CLEARING_SYSTEM,       CR_ACCT_ID_CODE,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        TRAN_REF_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        TENANT_ID,        DT_CODE,        DTT_CODE,        DEPARTMENT_CODE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        ACCP_DATE_TIME   FROM (SELECT A.NPSSASP_ID,                A.VALUE_DATE,                A.CBS_REF_NO,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.DEPARTMENT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,              A.CR_ACCT_ID_CODE,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.ACCP_DATE_TIME,                A.TRAN_REF_ID,              A.HDR_CLEARING_SYSTEM,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.TENANT_ID,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                A.DBTR_PRVT_ID,                A.DBTR_OTHER_ISSUER           FROM NPSS_API_SIM_PACS008 A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSSASP_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSSASP_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS RCT Simulator CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"SimulatorRCTOutwardCreated","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"Simulator_RCT_OP_Created","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Clearing System","target_column":"HDR_CLEARING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender BIC","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary BIC","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Beneficiary IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Credit Card","target_column":"CR_ACCT_ID_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.list.context_menu = []
		this.list.views = {}
		this.list.onChangecomponent = new EventEmitter<any>()
		this.list.show = true
		this.list.dynamic_param = {}
	
		// Component level properties - "Back UI" 
		this.back_ui.uictrl_code = "dynamic_ui"
		this.back_ui.uicgc_desc = "Back UI"
		this.back_ui.uicgc_code = "uicgc_4"
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
		this.back_ui_back.params = {"icon_only":false,"uicgcc_style":""}
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
		this.page_load__cr_for_pl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui create pacs008"
	navigation_ui_create_pacs008__action_button_click(){
		this.navigation_ui_create_pacs008__cc_for_create_pacs008()
	}

	//Handler for INTERNAL event of "cc for create pacs008"
	cc_for_create_pacs008__internal(parent_event_result){
		this.cc_for_create_pacs008__info_for_pacs(parent_event_result)
	}

	//Handler for INTERNAL event of "info for pacs"
	info_for_pacs__internal(parent_event_result){
		this.info_for_pacs__rs_for_create_actions(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view list"
	navigation_ui_view_list__action_button_click(){
		this.navigation_ui_view_list__sp_for_view_list()
		this.navigation_ui_view_list__brfq_for_vl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_back_from_main()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__cr_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670479883561"
		let event_params={"caller_name":"page_load__cr_for_pl","event_desc":"CR for PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui create pacs008"
	navigation_ui_create_pacs008__cc_for_create_pacs008() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_create_pacs008"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670480333340"
		let event_params={"caller_name":"navigation_ui_create_pacs008__cc_for_create_pacs008","event_desc":"CC for create pacs008","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_create_pacs008","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_create_pacs008__info_for_pacs,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_sim_pack_008Service.fn_npss_cs_sim_pack_008(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for create pacs008"
	cc_for_create_pacs008__info_for_pacs(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_create_pacs008"
		let destn_id=""
		let parent_source_id="navigation_ui_create_pacs008"
		let event_code="e_1670480359099"
		let event_params={"caller_name":"cc_for_create_pacs008__info_for_pacs","event_desc":"info for pacs","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Simulator pacs008 has been created successfully","root_source_id":"navigation_ui_create_pacs008","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_for_pacs__rs_for_create_actions,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for pacs"
	info_for_pacs__rs_for_create_actions(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_for_pacs"
		let destn_id=""
		let parent_source_id="cc_for_create_pacs008"
		let event_code="e_1670480399898"
		let event_params={"caller_name":"info_for_pacs__rs_for_create_actions","event_desc":"RS for Create actions","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_create_pacs008","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view list"
	navigation_ui_view_list__sp_for_view_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_list"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670480425771"
		let event_params={"caller_name":"navigation_ui_view_list__sp_for_view_list","event_desc":"SP for view list","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_list","raiseparam":{"profile_code":"BTL_1304_1670481741540"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view list"
	navigation_ui_view_list__brfq_for_vl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_list"
		let destn_id="list"
		let parent_source_id=""
		let event_code="e_1670482293075"
		let event_params={"caller_name":"navigation_ui_view_list__brfq_for_vl","event_desc":"BRFQ for VL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1670492310194":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1670492310194","dtt_desc":"NPSS API Sim Pacs008","ds_eligible":"DS_1670493908626","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS RTC Simulator MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1670484259646","date_format":true},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1670484308992","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1670484318887","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1670484328575","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1670484339988","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1670484359228","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1670484406320","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1670484419176","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1670484426616","date_format":false},{"column_name":"HDR_CLEARING_SYSTEM","alias_name":"","mq_id":"MQ_1670485053171","date_format":false},{"column_name":"CR_ACCT_ID_CODE","alias_name":"","mq_id":"MQ_1670485062211","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSASP_ID,        MODIFIED_DATE_UTC,        DATEMI,        VALUE_DATE,        CBS_REF_NO,        CREATED_DATE,        MODIFIED_DATE_UTC,        CDTR_ACCT_NO,        CDTR_ACCT_NAME,        INTRBK_STTLM_AMNT,        INTRBK_STTLM_CUR,        DBTR_ACCT_NO,        DBTR_ACCT_NAME,        DR_SORT_CODE,        CR_SORT_CODE,        UETR,        HDR_MSG_ID,        PRODUCT_CODE,        CHANNEL_ID,        CHANNEL_REFNO,        CHANNEL_PRODUCT,        CHANNEL_SUB_PRODUCT,        CHANNEL_TRAN_CODE,        PROCESS_TYPE,        DBTR_PHONE_NO,        DBTR_EMAIL_ID,        DBTR_DOCUMENT_ID,        DBTR_IBAN,        CDTR_PHONE_NO,        CDTR_EMAIL_ID,        CDTR_DOCUMENT_ID,       HDR_CLEARING_SYSTEM,       CR_ACCT_ID_CODE,        CDTR_IBAN,        CLRSYSREF,        PAYMENT_ENDTOEND_ID,        TRAN_REF_ID,        EXHF_ID,        PROCESS_STATUS,        STATUS,        TENANT_ID,        DT_CODE,        DTT_CODE,        DEPARTMENT_CODE,        DBTR_PRVT_ID,        DBTR_OTHER_ISSUER,        ACCP_DATE_TIME   FROM (SELECT A.NPSSASP_ID,                A.VALUE_DATE,                A.CBS_REF_NO,                A.MODIFIED_DATE_UTC,                A.CREATED_DATE,                TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,                A.CDTR_ACCT_NO,                A.CDTR_ACCT_NAME,                A.INTRBK_STTLM_AMNT,                A.INTRBK_STTLM_CUR,                A.DBTR_ACCT_NO,                A.DBTR_ACCT_NAME,                A.DR_SORT_CODE,                A.CR_SORT_CODE,                A.DEPARTMENT_CODE,                A.UETR,                A.HDR_MSG_ID,                A.PRODUCT_CODE,                A.CHANNEL_ID,                A.CHANNEL_REFNO,                A.CHANNEL_PRODUCT,                A.CHANNEL_SUB_PRODUCT,                A.CHANNEL_TRAN_CODE,                A.PROCESS_TYPE,                A.DBTR_PHONE_NO,                A.DBTR_EMAIL_ID,                A.DBTR_DOCUMENT_ID,                A.DBTR_IBAN,                A.CDTR_PHONE_NO,                A.CDTR_EMAIL_ID,                A.CDTR_DOCUMENT_ID,              A.CR_ACCT_ID_CODE,                A.CDTR_IBAN,                A.CLRSYSREF,                A.PAYMENT_ENDTOEND_ID,                A.ACCP_DATE_TIME,                A.TRAN_REF_ID,              A.HDR_CLEARING_SYSTEM,                A.EXHF_ID,                A.REMITTANCE_INFO,                A.INWARD_FILE_NAME,                A.PROCESS_STATUS,                A.STATUS,                A.TENANT_ID,                A.DT_CODE,                A.DTT_CODE,                A.VERSION_NO,                A.DBTR_PRVT_ID,                A.DBTR_OTHER_ISSUER           FROM NPSS_API_SIM_PACS008 A           LEFT JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSSASP_ID                                       AND TS.DTT_CODE = A.DTT_CODE          ORDER BY A.NPSSASP_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS RCT Simulator CCD","filter":[{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"SimulatorRCTOutwardCreated","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"Simulator_RCT_OP_Created","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Value Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Clearing System","target_column":"HDR_CLEARING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender BIC","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary BIC","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Beneficiary IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Credit Card","target_column":"CR_ACCT_ID_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__sp_for_back_from_main() { 
		let Dest_Is_ctrl=true
		
		let source_id="back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670481947338"
		let event_params={"caller_name":"back_ui_back__sp_for_back_from_main","event_desc":"SP for back from Main","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1670482144272"}}
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
