/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34766 
Modified By     : Admin 
Modified Date   : 2024-Mar-14 12:11 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_payment_status_report
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {npss_c_export_pdf_for_reportService} from '../../../custom_widget/npss_c_export_pdf_for_report/npss_c_export_pdf_for_report.service'
import {npss_cs_export_excel_for_reportService} from '../../../custom_widget/npss_cs_export_excel_for_report/npss_cs_export_excel_for_report.service'
import {npss_cs_dashboard_titleService} from '../../../custom_widget/npss_cs_dashboard_title/npss_cs_dashboard_title.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_payment_status_report',
	templateUrl: './s_payment_status_report.component.html',
	styleUrls: ['./s_payment_status_report.component.css'],
	providers:[npss_c_export_pdf_for_reportService,npss_cs_export_excel_for_reportService,npss_cs_dashboard_titleService,torus_cs_show_hideService]
})
    
// Start of class 
export class s_payment_status_reportComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_payment_status_report"
	wftpa_id : string = "WFT_NPSS_P_1304_1710148316577_0"
	cg_code : string = "CG_1304_1708326278471"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID","dtt_1304_1695130590062":"NPSSNPPL_ID","dtt_1304_1695214768145":"NAL_ID","dtt_1304_1700459090330":"NPSSPN_ID","dtt_1304_1701251364899":"NPSSPNB_ID","dtt_1304_1707202677013":"NPSSFE_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "list"
	uicgc_2 : string = "navigation"
	uicgc_4 : string = "search"
	uicgc_6 : string = "home_dashboard_title"
	key_events : any = {}
	btl_1304_1708326962657 : string = "p_search_layout"
	btl_1304_1708326855714 : string = "p_main_layout"
	forms : any = ["uicgc_4","uicgc_2"]
	p_search_layout__spap_from_search_btn_showpopup : boolean = false
	list : any = {}
	navigation : any = {}
	navigation_search : any = {}
	navigation_export_as_excel : any = {}
	navigation_export_as_pdf : any = {}
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	home_dashboard_title : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private npss_c_export_pdf_for_reportService:npss_c_export_pdf_for_reportService,private npss_cs_export_excel_for_reportService:npss_cs_export_excel_for_reportService,private npss_cs_dashboard_titleService:npss_cs_dashboard_titleService,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "List" 
		this.list.uictrl_code = "datatable"
		this.list.uicgc_desc = "List"
		this.list.uicgc_code = "uicgc_1"
		this.list.params = {"need_search":"N","advance_dynamic_search":"N","need_pag_datatable":"Y"}
		this.list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1681973868376":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1681973868376","dtt_desc":"NPSS PAY STATUS REPORT","ds_eligible":"DS_1710334860944","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Payment Status Report MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSPSR_ID","alias_name":"","mq_id":"MQ_1710149868434","date_format":false},{"column_name":"timestamp","alias_name":"","mq_id":"MQ_1710149875426","date_format":true},{"column_name":"ORIGINATOR_REFERENCE","alias_name":"","mq_id":"MQ_1710149884298","date_format":false},{"column_name":"SENDER","alias_name":"","mq_id":"MQ_1710149896770","date_format":false},{"column_name":"PAYER","alias_name":"","mq_id":"MQ_1710149903258","date_format":false},{"column_name":"RECEIVER","alias_name":"","mq_id":"MQ_1710149907698","date_format":false},{"column_name":"BENEFICIARY","alias_name":"","mq_id":"MQ_1710149935386","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1710149940890","date_format":false,"currency_format":true},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1710149953994","date_format":false},{"column_name":"SOURCE","alias_name":"","mq_id":"MQ_1710149957918","date_format":false},{"column_name":"SENDER_REF","alias_name":"","mq_id":"MQ_1710149971846","date_format":false},{"column_name":"SYSTEM_REF","alias_name":"","mq_id":"MQ_1710149972022","date_format":false},{"column_name":"BATCH_REF","alias_name":"","mq_id":"MQ_1710149998902","date_format":false},{"column_name":"RETURN_ID","alias_name":"","mq_id":"MQ_1710150341422","date_format":false},{"column_name":"RETURN_REF","alias_name":"","mq_id":"MQ_1710150351894","date_format":false},{"column_name":"TRANSACTION_ID","alias_name":"","mq_id":"MQ_1710150352110","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1710150384933","date_format":false},{"column_name":"MESSAGE_TYPE","alias_name":"","mq_id":"MQ_1710150409108","date_format":false},{"column_name":"PAYMENT_STATUS","alias_name":"","mq_id":"MQ_1710150409372","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSPSR_ID,  timestamp,  ORIGINATOR_REFERENCE,  SENDER,  PAYER,  RECEIVER,  BENEFICIARY,  AMOUNT,  CURRENCY,  SOURCE,  SENDER_REF,  SYSTEM_REF,  BATCH_REF,  PAYMENT_STATUS,  CREATED_DATE,  RETURN_ID,  RETURN_REF,  TRANSACTION_ID,  UETR,  MESSAGE_TYPE,  TENANT_ID,  DT_CODE,  DTT_CODE,  VERSION_NO FROM  (SELECT P.NPSSPSR_ID,    P.TIMESTAMP,    P.ORIGINATOR_REFERENCE,    P.SENDER,    P.PAYER,    P.RECEIVER,    P.BENEFICIARY,    P.AMOUNT,    P.CURRENCY,    P.SOURCE,    P.SENDER_REF,    P.SYSTEM_REF,    P.BATCH_REF,    P.PAYMENT_STATUS,    P.CREATED_DATE,    P.RETURN_ID,    P.RETURN_REF,    P.TRANSACTION_ID,    P.UETR,    P.MESSAGE_TYPE,    P.TENANT_ID,    P.DT_CODE,  P.DTT_CODE,  P.VERSION_NO   FROM <TRAN_DB>.NPSS_PAY_STATUS_REPORT P)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Status Report MQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran ID","target_column":"NPSSPSR_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Timestamp","target_column":"timestamp","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Originator Reference","target_column":"ORIGINATOR_REFERENCE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender","target_column":"SENDER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payer","target_column":"PAYER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Receiver","target_column":"RECEIVER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary","target_column":"BENEFICIARY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Currency","target_column":"CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Source","target_column":"SOURCE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender Reference","target_column":"SENDER_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"System Reference","target_column":"SYSTEM_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Reference","target_column":"BATCH_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Return ID","target_column":"RETURN_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Return Ref","target_column":"RETURN_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction ID","target_column":"TRANSACTION_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Type","target_column":"MESSAGE_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Status","target_column":"PAYMENT_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		
		// "Search" Button of "Navigation" component
		this.navigation_search.label_name = "Search"
		this.navigation_search.show = true
		this.navigation_search.disabled = false
		this.navigation_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.navigation_search.dynamic_param = {}
		this.navigation_search.role = []
		this.navigation_search.action = ""
		
		// "Export as Excel" Button of "Navigation" component
		this.navigation_export_as_excel.label_name = "Export as Excel"
		this.navigation_export_as_excel.show = true
		this.navigation_export_as_excel.disabled = false
		this.navigation_export_as_excel.params = {"icon_only":false,"uicgcc_style":"fa fa-file-excel-o"}
		this.navigation_export_as_excel.dynamic_param = {}
		this.navigation_export_as_excel.role = []
		this.navigation_export_as_excel.action = ""
		
		// "Export as PDF" Button of "Navigation" component
		this.navigation_export_as_pdf.label_name = "Export as PDF"
		this.navigation_export_as_pdf.show = true
		this.navigation_export_as_pdf.disabled = false
		this.navigation_export_as_pdf.params = {"icon_only":false,"uicgcc_style":"fa fa-file-pdf-o"}
		this.navigation_export_as_pdf.dynamic_param = {}
		this.navigation_export_as_pdf.role = []
		this.navigation_export_as_pdf.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1681973868376","is_tab_mode":"N","dtt_1304_1681973868376":{"0":[{"dttv_id":"NPSS Payment Status Report SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS PAY STATUS REPORT"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_payment_status_report_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_payment_status_report_srch"
		
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
	
		// Component level properties - "Home Dashboard Title" 
		this.home_dashboard_title.uictrl_code = "custom_widget"
		this.home_dashboard_title.uicgc_desc = "Home Dashboard Title"
		this.home_dashboard_title.uicgc_code = "uicgc_6"
		this.home_dashboard_title.params = {}
		this.home_dashboard_title.datasource = {}
		this.home_dashboard_title.context_menu = []
		this.home_dashboard_title.views = {}
		this.home_dashboard_title.onChangecomponent = new EventEmitter<any>()
		this.home_dashboard_title.show = true
		this.home_dashboard_title.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__dashboard_ides()
		this.page_load__e_1708425960961()
		this.page_load__de_from_page_load()
		this.page_load__de_for_pdf()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__action_button_click(){
		this.navigation_search__spap_from_search_btn()
		this.navigation_search__cui_from_search_to_search_cmnt()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation export as pdf"
	navigation_export_as_pdf__action_button_click(){
		this.navigation_export_as_pdf__cc_for_export_as_pdf_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation export as excel"
	navigation_export_as_excel__action_button_click(){
		this.navigation_export_as_excel__cc_for_export_as_excel_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cui_from_clear_btn_to_search_cmnt()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__cp_from_search_btn()
		this.search_search__ve_from_search_to_search_cmnt()
	}

	//Handler for INTERNAL event of "ve from search to search cmnt"
	ve_from_search_to_search_cmnt__internal(parent_event_result){
		this.ve_from_search_to_search_cmnt__ssp_from_search_btn_to_search_cmnt(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp from search btn to search cmnt"
	ssp_from_search_btn_to_search_cmnt__internal(parent_event_result){
		this.ssp_from_search_btn_to_search_cmnt__brfq_from_ssp_to_list(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1708425960961"
	e_1708425960961__internal(parent_event_result){
		this.e_1708425960961__e_1708425977969(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1708425977969"
	e_1708425977969__internal(parent_event_result){
		this.e_1708425977969__e_1708425998864(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "list"
	list__selection_changed(){
		this.list__ee_for_excel()
		this.list__ee_for_pdf()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation search"
	navigation_search__spap_from_search_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708327114228"
		let event_params={"caller_name":"navigation_search__spap_from_search_btn","event_desc":"SPAP From Search Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_from_search_btn","selector":"p_search_layout","profile_code":"BTL_1304_1708326962657","window_title":"Search","window_height":535,"window_width":"950px","window_close_icon":"Y","eventdes":"spap_from_search_btn","eventcode":"E_1708327114228"}}
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
	navigation_search__cui_from_search_to_search_cmnt() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1708327196131"
		let event_params={"caller_name":"navigation_search__cui_from_search_to_search_cmnt","event_desc":"CUI From Search to Search Cmnt","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation export as pdf"
	navigation_export_as_pdf__cc_for_export_as_pdf_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_export_as_pdf"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708327227186"
		let event_params={"caller_name":"navigation_export_as_pdf__cc_for_export_as_pdf_btn","event_desc":"CC For Export As PDF Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_export_as_pdf","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_c_export_pdf_for_reportService.fn_npss_c_export_pdf_for_report(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation export as excel"
	navigation_export_as_excel__cc_for_export_as_excel_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_export_as_excel"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708327326964"
		let event_params={"caller_name":"navigation_export_as_excel__cc_for_export_as_excel_btn","event_desc":"CC For Export as Excel Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_export_as_excel","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_export_excel_for_reportService.fn_npss_cs_export_excel_for_report(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cui_from_clear_btn_to_search_cmnt() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1708327376371"
		let event_params={"caller_name":"search_clear__cui_from_clear_btn_to_search_cmnt","event_desc":"CUI From Clear Btn to Search cmnt","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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
	search_search__cp_from_search_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708327611591"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__cp_from_search_btn","event_desc":"CP From Search Btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
	search_search__ve_from_search_to_search_cmnt() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1710418116951"
		let event_params={"caller_name":"search_search__ve_from_search_to_search_cmnt","event_desc":"VE from Search to Search Cmnt","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_from_search_to_search_cmnt__ssp_from_search_btn_to_search_cmnt,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve from search to search cmnt"
	ve_from_search_to_search_cmnt__ssp_from_search_btn_to_search_cmnt(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_from_search_to_search_cmnt"
		let destn_id="search"
		let parent_source_id="search_search"
		let event_code="e_1710418144452"
		let event_params={"caller_name":"ve_from_search_to_search_cmnt__ssp_from_search_btn_to_search_cmnt","event_desc":"SSP From Search btn to Search Cmnt","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_from_search_btn_to_search_cmnt__brfq_from_ssp_to_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp from search btn to search cmnt"
	ssp_from_search_btn_to_search_cmnt__brfq_from_ssp_to_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_search_btn_to_search_cmnt"
		let destn_id="list"
		let parent_source_id="ve_from_search_to_search_cmnt"
		let event_code="e_1710418162971"
		let event_params={"caller_name":"ssp_from_search_btn_to_search_cmnt__brfq_from_ssp_to_list","event_desc":"BRFQ From SSP to List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1681973868376":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1681973868376","dtt_desc":"NPSS PAY STATUS REPORT","ds_eligible":"DS_1710334860944","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Payment Status Report MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSPSR_ID","alias_name":"","mq_id":"MQ_1710149868434","date_format":false},{"column_name":"timestamp","alias_name":"","mq_id":"MQ_1710149875426","date_format":true},{"column_name":"ORIGINATOR_REFERENCE","alias_name":"","mq_id":"MQ_1710149884298","date_format":false},{"column_name":"SENDER","alias_name":"","mq_id":"MQ_1710149896770","date_format":false},{"column_name":"PAYER","alias_name":"","mq_id":"MQ_1710149903258","date_format":false},{"column_name":"RECEIVER","alias_name":"","mq_id":"MQ_1710149907698","date_format":false},{"column_name":"BENEFICIARY","alias_name":"","mq_id":"MQ_1710149935386","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1710149940890","date_format":false,"currency_format":true},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1710149953994","date_format":false},{"column_name":"SOURCE","alias_name":"","mq_id":"MQ_1710149957918","date_format":false},{"column_name":"SENDER_REF","alias_name":"","mq_id":"MQ_1710149971846","date_format":false},{"column_name":"SYSTEM_REF","alias_name":"","mq_id":"MQ_1710149972022","date_format":false},{"column_name":"BATCH_REF","alias_name":"","mq_id":"MQ_1710149998902","date_format":false},{"column_name":"RETURN_ID","alias_name":"","mq_id":"MQ_1710150341422","date_format":false},{"column_name":"RETURN_REF","alias_name":"","mq_id":"MQ_1710150351894","date_format":false},{"column_name":"TRANSACTION_ID","alias_name":"","mq_id":"MQ_1710150352110","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1710150384933","date_format":false},{"column_name":"MESSAGE_TYPE","alias_name":"","mq_id":"MQ_1710150409108","date_format":false},{"column_name":"PAYMENT_STATUS","alias_name":"","mq_id":"MQ_1710150409372","date_format":false}],"joins":[]},"eq_text":"SELECT NPSSPSR_ID,  timestamp,  ORIGINATOR_REFERENCE,  SENDER,  PAYER,  RECEIVER,  BENEFICIARY,  AMOUNT,  CURRENCY,  SOURCE,  SENDER_REF,  SYSTEM_REF,  BATCH_REF,  PAYMENT_STATUS,  CREATED_DATE,  RETURN_ID,  RETURN_REF,  TRANSACTION_ID,  UETR,  MESSAGE_TYPE,  TENANT_ID,  DT_CODE,  DTT_CODE,  VERSION_NO FROM  (SELECT P.NPSSPSR_ID,    P.TIMESTAMP,    P.ORIGINATOR_REFERENCE,    P.SENDER,    P.PAYER,    P.RECEIVER,    P.BENEFICIARY,    P.AMOUNT,    P.CURRENCY,    P.SOURCE,    P.SENDER_REF,    P.SYSTEM_REF,    P.BATCH_REF,    P.PAYMENT_STATUS,    P.CREATED_DATE,    P.RETURN_ID,    P.RETURN_REF,    P.TRANSACTION_ID,    P.UETR,    P.MESSAGE_TYPE,    P.TENANT_ID,    P.DT_CODE,  P.DTT_CODE,  P.VERSION_NO   FROM <TRAN_DB>.NPSS_PAY_STATUS_REPORT P)V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Payment Status Report MQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran ID","target_column":"NPSSPSR_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Timestamp","target_column":"timestamp","alias_name":"","alignment":"Left","width":"","format":"date:\"dd/MM/yyyy\"","date_format":true},{"header":"Originator Reference","target_column":"ORIGINATOR_REFERENCE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender","target_column":"SENDER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payer","target_column":"PAYER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Receiver","target_column":"RECEIVER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary","target_column":"BENEFICIARY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Currency","target_column":"CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Source","target_column":"SOURCE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender Reference","target_column":"SENDER_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"System Reference","target_column":"SYSTEM_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Batch Reference","target_column":"BATCH_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Return ID","target_column":"RETURN_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Return Ref","target_column":"RETURN_REF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction ID","target_column":"TRANSACTION_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Type","target_column":"MESSAGE_TYPE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payment Status","target_column":"PAYMENT_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__dashboard_ides() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708425163365"
		let event_params={"caller_name":"page_load__dashboard_ides","event_desc":"dashboard ides","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_dashboard_titleService.fn_npss_cs_dashboard_title(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__e_1708425960961() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708425960961"
		let event_params={"caller_name":"page_load__e_1708425960961","event_desc":"E_1708425960961","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="e_1708425960961__e_1708425977969,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__de_from_page_load() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_export_as_excel"
		let parent_source_id=""
		let event_code="e_1710332916925"
		let event_params={"caller_name":"page_load__de_from_page_load","event_desc":"DE From Page load","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__de_for_pdf() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_export_as_pdf"
		let parent_source_id=""
		let event_code="e_1710332968676"
		let event_params={"caller_name":"page_load__de_for_pdf","event_desc":"DE For PDF","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for INTERNAL event of "e 1708425960961"
	e_1708425960961__e_1708425977969(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1708425960961"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1708425977969"
		let event_params={"caller_name":"e_1708425960961__e_1708425977969","event_desc":"E_1708425977969","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""},"parent_event_result":"SUCCESS"}
		let handler_code="create_form"
		let internals="e_1708425977969__e_1708425998864,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1708425977969"
	e_1708425977969__e_1708425998864(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1708425977969"
		let destn_id="search_search"
		let parent_source_id="e_1708425960961"
		let event_code="e_1708425998864"
		let event_params={"caller_name":"e_1708425977969__e_1708425998864","event_desc":"E_1708425998864","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for SELECTION_CHANGED event of "list"
	list__ee_for_excel() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="navigation_export_as_excel"
		let parent_source_id=""
		let event_code="e_1710333142998"
		let event_params={"caller_name":"list__ee_for_excel","event_desc":"EE For Excel","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	list__ee_for_pdf() { 
		let Dest_Is_ctrl=true
		
		let source_id="list"
		let destn_id="navigation_export_as_pdf"
		let parent_source_id=""
		let event_code="e_1710333190841"
		let event_params={"caller_name":"list__ee_for_pdf","event_desc":"EE For Pdf","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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