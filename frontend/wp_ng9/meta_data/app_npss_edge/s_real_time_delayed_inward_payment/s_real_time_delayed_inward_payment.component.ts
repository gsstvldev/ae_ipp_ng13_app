/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35950 
Modified By     : Admin 
Modified Date   : 2024-Jul-04 10:19 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_real_time_delayed_inward_payment
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {npss_c_export_pdf_for_reportService} from '../../../custom_widget/npss_c_export_pdf_for_report/npss_c_export_pdf_for_report.service'
import {npss_cs_export_excel_for_reportService} from '../../../custom_widget/npss_cs_export_excel_for_report/npss_cs_export_excel_for_report.service'
import {npss_c_cond_ctrl_validationService} from '../../../custom_widget/npss_c_cond_ctrl_validation/npss_c_cond_ctrl_validation.service'
import {npss_cs_dashboard_titleService} from '../../../custom_widget/npss_cs_dashboard_title/npss_cs_dashboard_title.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'

@Component({
	selector: 's_real_time_delayed_inward_payment',
	templateUrl: './s_real_time_delayed_inward_payment.component.html',
	styleUrls: ['./s_real_time_delayed_inward_payment.component.css'],
	providers:[npss_c_export_pdf_for_reportService,npss_cs_export_excel_for_reportService,npss_c_cond_ctrl_validationService,npss_cs_dashboard_titleService,torus_cs_show_hideService]
})
    
// Start of class 
export class s_real_time_delayed_inward_paymentComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_real_time_delayed_inward_payment"
	wftpa_id : string = "WFT_NPSS_P_1304_1712148998876_0"
	cg_code : string = "CG_1304_1708326278471"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID","dtt_1304_1695130590062":"NPSSNPPL_ID","dtt_1304_1695214768145":"NAL_ID","dtt_1304_1700459090330":"NPSSPN_ID","dtt_1304_1701251364899":"NPSSPNB_ID","dtt_1304_1707202677013":"NPSSFE_ID","dtt_1304_1711696447765":"NPSSFL_ID"}
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
	constructor(private handler:AppHandlerService ,private npss_c_export_pdf_for_reportService:npss_c_export_pdf_for_reportService,private npss_cs_export_excel_for_reportService:npss_cs_export_excel_for_reportService,private npss_c_cond_ctrl_validationService:npss_c_cond_ctrl_validationService,private npss_cs_dashboard_titleService:npss_cs_dashboard_titleService,private torus_cs_show_hideService:torus_cs_show_hideService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "List" 
		this.list.uictrl_code = "datatable"
		this.list.uicgc_desc = "List"
		this.list.uicgc_code = "uicgc_1"
		this.list.params = {"need_search":"N","advance_dynamic_search":"N","need_pag_datatable":"Y"}
		this.list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1712211095837","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Real Time Delayed Inward Payment MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"UETR","alias_name":"","mq_id":"MQ_1712210556440","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1712210556608","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1712210556792","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1712210557112","date_format":false},{"column_name":"START_DATE","alias_name":"","mq_id":"MQ_1712210713474","date_format":false},{"column_name":"END_DATE","alias_name":"","mq_id":"MQ_1712210713673","date_format":false},{"column_name":"DIFFERENCE","alias_name":"","mq_id":"MQ_1712210733970","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1712210734209","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1712210752610","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1712210752882","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1712210773626","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1712210773921","date_format":false,"currency_format":true}],"joins":[]},"eq_text":"select  UETR,  CDTR_IBAN,  CDTR_ACCT_NAME,  CR_SORT_CODE,  DBTR_IBAN,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CLRSYSREF,  INTRBK_STTLM_AMNT,  PROCESS_TYPE,  PAYMENT_TYPE,  START_DATE,  END_DATE,  D_SECONDS,  D_MINUTES,  D_HOURS,  DIFFERENCE,  DEPARTMENT_CODE,  NT_RULE_GROUP,  PROCESSED_DATE,  TAT_EXPECTED from  (  select   UETR,   CDTR_IBAN,   CDTR_ACCT_NAME,   CR_SORT_CODE,   DBTR_IBAN,   DBTR_ACCT_NAME,   DR_SORT_CODE,   CLRSYSREF,   V.TENANT_ID,   INTRBK_STTLM_AMNT,   PROCESS_TYPE,   PROCESS_GROUP,   DEPARTMENT_CODE,   PAYMENT_TYPE,   START_DATE,   END_DATE,   D_SECONDS,   D_MINUTES,   D_HOURS,   case    when RB.TAT_FREQUENCY = UPPER('Seconds') then ROUND(V.D_SECONDS)    when RB.TAT_FREQUENCY = UPPER('Minutes') then ROUND(V.D_MINUTES)    when RB.TAT_FREQUENCY = UPPER('Hours') then ROUND(V.D_HOURS)   end as DIFFERENCE,   NT_RULE_GROUP,   RB.TAT_EXPECTED,   PROCESSED_DATE  from   (   select    NT.UETR,    NT.CDTR_IBAN,    NT.CDTR_ACCT_NAME,    NT.CR_SORT_CODE,    NT.DBTR_IBAN,    NT.DBTR_ACCT_NAME,    NT.DR_SORT_CODE,    NT.CLRSYSREF,    NT.INTRBK_STTLM_AMNT,    NT.TENANT_ID,    NT.PROCESS_GROUP,    NT.PRODUCT_CODE,    NT.PROCESS_TYPE,    NT.DEPARTMENT_CODE,    case     when NT.EXHF_ID is null then UPPER('RCT')     else UPPER('BCT')    end as PAYMENT_TYPE,    PL.CREATED_DATE as PL_CREATED_DATE,    TO_CHAR(PL1.CREATED_DATE,    'YYYY-MM-DD HH:MI:SS:MS AM') as START_DATE,    TO_CHAR(PL.CREATED_DATE,    'YYYY-MM-DD HH:MI:SS:MS AM') as END_DATE,    extract(EPOCH   from    (PL.CREATED_DATE - PL1.CREATED_DATE)) as D_SECONDS,    extract(EPOCH   from    (PL.CREATED_DATE - PL1.CREATED_DATE)) / 60 as D_MINUTES,    extract(EPOCH   from    (PL.CREATED_DATE - PL1.CREATED_DATE)) / (60 * 60) as D_HOURS,    NT.CREATED_DATE as PROCESSED_DATE,    'RCT_INWARD_PROCESS_SLA' as NT_RULE_GROUP   from    <TRAN_DB>.NPSS_TRANSACTIONS NT   inner join CORE_SYSTEM_EXTN CSE on    CSE.department_code = nt.DEPARTMENT_CODE   inner join (    select     PLR.NPSSTPL_ID,     PLR.UETR,     PLR.CREATED_DATE,     PLR.ROW_NUM    from     (     select      A.NPSSTPL_ID,      A.UETR,      A.CREATED_DATE,      row_number() over(partition by A.UETR     order by      A.NPSSTPL_ID desc) as ROW_NUM     from      <TRAN_DB>.NPSS_TRN_PROCESS_LOG A) PLR    where     PLR.ROW_NUM = 1) PL on    PL.UETR = NT.UETR   inner join (    select     PLR1.NPSSTPL_ID,     PLR1.UETR,     PLR1.CREATED_DATE,     PLR1.ROW_NUM    from     (     select      A1.NPSSTPL_ID,      A1.UETR,      A1.CREATED_DATE,      row_number() over(partition by A1.UETR     order by      A1.NPSSTPL_ID asc) as ROW_NUM     from      <TRAN_DB>.NPSS_TRN_PROCESS_LOG A1) PLR1    where     PLR1.ROW_NUM = 1) PL1 on    PL1.UETR = NT.UETR) V  inner join CORE_NC_RULE_BOOK_SETUP RB on   RB.RULE_CODE = V.NT_RULE_GROUP   and RB.RULE_CODE = 'RCT_INWARD_PROCESS_SLA'   and RB.NEED_SYNC = 'Y')V1 where  PROCESS_GROUP = UPPER('rct')  and PROCESS_TYPE = 'IP'  and DIFFERENCE > TAT_EXPECTED::INT $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Real Time Delayed Inward Payment MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payee IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payee Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payee BIC","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Start Time","target_column":"START_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"End Time","target_column":"END_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Difference (Sec)","target_column":"DIFFERENCE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payer IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payer Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payer BIC","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true}]}}}}}}
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
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Real Time Delayed Inward Payment SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_real_time_delayed_inward_payment_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_real_time_delayed_inward_payment_srch"
		
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
		this.search_search__cc_for_control()
	}

	//Handler for INTERNAL event of "cc for control"
	cc_for_control__internal(parent_event_result){
		this.cc_for_control__ssp_from_serach(parent_event_result)
		this.cc_for_control__close_popup(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp from serach"
	ssp_from_serach__internal(parent_event_result){
		this.ssp_from_serach__brfq_from_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq from list"
	brfq_from_list__internal(parent_event_result){
		this.brfq_from_list__ee_for_pdf_btn(parent_event_result)
		this.brfq_from_list__ee_for_excel_btn(parent_event_result)
	}

	//Handler for INTERNAL event of "e 1708425960961"
	e_1708425960961__internal(parent_event_result){
		this.e_1708425960961__e_1708425977969(parent_event_result)
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
	search_search__cc_for_control() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1710480264849"
		let event_params={"caller_name":"search_search__cc_for_control","event_desc":"CC for control","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_control__ssp_from_serach,cc_for_control__close_popup,"
		let event_data={}
		let data_source={}
		try {
			this.npss_c_cond_ctrl_validationService.fn_npss_c_cond_ctrl_validation(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for control"
	cc_for_control__ssp_from_serach(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_control"
		let destn_id="search"
		let parent_source_id="search_search"
		let event_code="e_1710480365033"
		let event_params={"caller_name":"cc_for_control__ssp_from_serach","event_desc":"SSP from Serach","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_from_serach__brfq_from_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for control"
	cc_for_control__close_popup(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_control"
		let destn_id=""
		let parent_source_id="search_search"
		let event_code="e_1710497251127"
		let event_params={"popup_info":{"context":""},"caller_name":"cc_for_control__close_popup","event_desc":"Close popup","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "ssp from serach"
	ssp_from_serach__brfq_from_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_serach"
		let destn_id="list"
		let parent_source_id="cc_for_control"
		let event_code="e_1710480399724"
		let event_params={"caller_name":"ssp_from_serach__brfq_from_list","event_desc":"BRFQ from List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_from_list__ee_for_pdf_btn,brfq_from_list__ee_for_excel_btn,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1712211095837","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Real Time Delayed Inward Payment MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"UETR","alias_name":"","mq_id":"MQ_1712210556440","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1712210556608","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1712210556792","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1712210557112","date_format":false},{"column_name":"START_DATE","alias_name":"","mq_id":"MQ_1712210713474","date_format":false},{"column_name":"END_DATE","alias_name":"","mq_id":"MQ_1712210713673","date_format":false},{"column_name":"DIFFERENCE","alias_name":"","mq_id":"MQ_1712210733970","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1712210734209","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1712210752610","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1712210752882","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1712210773626","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1712210773921","date_format":false,"currency_format":true}],"joins":[]},"eq_text":"select  UETR,  CDTR_IBAN,  CDTR_ACCT_NAME,  CR_SORT_CODE,  DBTR_IBAN,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CLRSYSREF,  INTRBK_STTLM_AMNT,  PROCESS_TYPE,  PAYMENT_TYPE,  START_DATE,  END_DATE,  D_SECONDS,  D_MINUTES,  D_HOURS,  DIFFERENCE,  DEPARTMENT_CODE,  NT_RULE_GROUP,  PROCESSED_DATE,  TAT_EXPECTED from  (  select   UETR,   CDTR_IBAN,   CDTR_ACCT_NAME,   CR_SORT_CODE,   DBTR_IBAN,   DBTR_ACCT_NAME,   DR_SORT_CODE,   CLRSYSREF,   V.TENANT_ID,   INTRBK_STTLM_AMNT,   PROCESS_TYPE,   PROCESS_GROUP,   DEPARTMENT_CODE,   PAYMENT_TYPE,   START_DATE,   END_DATE,   D_SECONDS,   D_MINUTES,   D_HOURS,   case    when RB.TAT_FREQUENCY = UPPER('Seconds') then ROUND(V.D_SECONDS)    when RB.TAT_FREQUENCY = UPPER('Minutes') then ROUND(V.D_MINUTES)    when RB.TAT_FREQUENCY = UPPER('Hours') then ROUND(V.D_HOURS)   end as DIFFERENCE,   NT_RULE_GROUP,   RB.TAT_EXPECTED,   PROCESSED_DATE  from   (   select    NT.UETR,    NT.CDTR_IBAN,    NT.CDTR_ACCT_NAME,    NT.CR_SORT_CODE,    NT.DBTR_IBAN,    NT.DBTR_ACCT_NAME,    NT.DR_SORT_CODE,    NT.CLRSYSREF,    NT.INTRBK_STTLM_AMNT,    NT.TENANT_ID,    NT.PROCESS_GROUP,    NT.PRODUCT_CODE,    NT.PROCESS_TYPE,    NT.DEPARTMENT_CODE,    case     when NT.EXHF_ID is null then UPPER('RCT')     else UPPER('BCT')    end as PAYMENT_TYPE,    PL.CREATED_DATE as PL_CREATED_DATE,    TO_CHAR(PL1.CREATED_DATE,    'YYYY-MM-DD HH:MI:SS:MS AM') as START_DATE,    TO_CHAR(PL.CREATED_DATE,    'YYYY-MM-DD HH:MI:SS:MS AM') as END_DATE,    extract(EPOCH   from    (PL.CREATED_DATE - PL1.CREATED_DATE)) as D_SECONDS,    extract(EPOCH   from    (PL.CREATED_DATE - PL1.CREATED_DATE)) / 60 as D_MINUTES,    extract(EPOCH   from    (PL.CREATED_DATE - PL1.CREATED_DATE)) / (60 * 60) as D_HOURS,    NT.CREATED_DATE as PROCESSED_DATE,    'RCT_INWARD_PROCESS_SLA' as NT_RULE_GROUP   from    <TRAN_DB>.NPSS_TRANSACTIONS NT   inner join CORE_SYSTEM_EXTN CSE on    CSE.department_code = nt.DEPARTMENT_CODE   inner join (    select     PLR.NPSSTPL_ID,     PLR.UETR,     PLR.CREATED_DATE,     PLR.ROW_NUM    from     (     select      A.NPSSTPL_ID,      A.UETR,      A.CREATED_DATE,      row_number() over(partition by A.UETR     order by      A.NPSSTPL_ID desc) as ROW_NUM     from      <TRAN_DB>.NPSS_TRN_PROCESS_LOG A) PLR    where     PLR.ROW_NUM = 1) PL on    PL.UETR = NT.UETR   inner join (    select     PLR1.NPSSTPL_ID,     PLR1.UETR,     PLR1.CREATED_DATE,     PLR1.ROW_NUM    from     (     select      A1.NPSSTPL_ID,      A1.UETR,      A1.CREATED_DATE,      row_number() over(partition by A1.UETR     order by      A1.NPSSTPL_ID asc) as ROW_NUM     from      <TRAN_DB>.NPSS_TRN_PROCESS_LOG A1) PLR1    where     PLR1.ROW_NUM = 1) PL1 on    PL1.UETR = NT.UETR) V  inner join CORE_NC_RULE_BOOK_SETUP RB on   RB.RULE_CODE = V.NT_RULE_GROUP   and RB.RULE_CODE = 'RCT_INWARD_PROCESS_SLA'   and RB.NEED_SYNC = 'Y')V1 where  PROCESS_GROUP = UPPER('rct')  and PROCESS_TYPE = 'IP'  and DIFFERENCE > TAT_EXPECTED::INT $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Real Time Delayed Inward Payment MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payee IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payee Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payee BIC","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Start Time","target_column":"START_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"End Time","target_column":"END_DATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Difference (Sec)","target_column":"DIFFERENCE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payer IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payer Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payer BIC","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq from list"
	brfq_from_list__ee_for_pdf_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_from_list"
		let destn_id="navigation_export_as_pdf"
		let parent_source_id="ssp_from_serach"
		let event_code="e_1720087292021"
		let event_params={"caller_name":"brfq_from_list__ee_for_pdf_btn","event_desc":"EE For PDF btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"enable_disable_count":"Y","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "brfq from list"
	brfq_from_list__ee_for_excel_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_from_list"
		let destn_id="navigation_export_as_excel"
		let parent_source_id="ssp_from_serach"
		let event_code="e_1720087344772"
		let event_params={"caller_name":"brfq_from_list__ee_for_excel_btn","event_desc":"EE For Excel btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"enable_disable_count":"Y","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""},"parent_event_result":"SUCCESS"}
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
