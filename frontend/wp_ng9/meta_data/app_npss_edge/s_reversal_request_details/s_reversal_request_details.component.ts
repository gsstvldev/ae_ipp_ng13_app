/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35872 
Modified By     : Admin 
Modified Date   : 2024-Jun-27 12:29 PM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_reversal_request_details
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
	selector: 's_reversal_request_details',
	templateUrl: './s_reversal_request_details.component.html',
	styleUrls: ['./s_reversal_request_details.component.css'],
	providers:[npss_c_export_pdf_for_reportService,npss_cs_export_excel_for_reportService,npss_c_cond_ctrl_validationService,npss_cs_dashboard_titleService,torus_cs_show_hideService]
})
    
// Start of class 
export class s_reversal_request_detailsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_reversal_request_details"
	wftpa_id : string = "WFT_NPSS_P_1304_1710146843033_0"
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
		this.list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1710333951252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Request Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1710161179732","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1710161180218","date_format":false,"currency_format":true},{"column_name":"TRAN_AMOUNT","alias_name":"","mq_id":"MQ_1710161180641","date_format":false,"currency_format":true},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1710161181098","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1710161181562","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1710161182034","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1710161182506","date_format":false},{"column_name":"BENEFICIARY_BANK","alias_name":"","mq_id":"MQ_1710161182978","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1710161183578","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1710161184114","date_format":false},{"column_name":"EXT_PURPOSE_CODE","alias_name":"","mq_id":"MQ_1710161184633","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1710161185097","date_format":false},{"column_name":"VALUEDATE","alias_name":"","mq_id":"MQ_1719481376161","date_format":false}],"joins":[]},"eq_text":"select  distinct NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  CHANNEL_ID,  INTRBK_STTLM_CUR,  REVERSAL_AMOUNT,  EXHF_ID,  VALUE_DATE,  VALUEDATE,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  PRODUCT_CODE,  PROCESS_TYPE,  CR_ACCT_IDENTIFICATION,  QUEUE,  TRAN_STATUS,  TENANT_ID,  PROCESSING_SYSTEM,  PAYMENT_TYPE,  PROCESS_GROUP,  DEPARTMENT_CODE,  INTRBK_STTLM_AMNT,  SENDER_REFERENCE_NUMBER,  DBTR_IBAN,  DBTR_ACCT_NAME,  CDTR_IBAN,  CDTR_ACCT_NAME,  BENEFICIARY_BANK,  EXT_PURPOSE_CODE,  CLRSYSREF,  CREATED_DATE,  CHANNEL_ID,  ORIGINATOR_REF_NUMBER,  TRAN_AMOUNT from  (  select   A.NPSST_ID,   A.VALUE_DATE,   to_char(A.VALUE_DATE,   'DD/MM/YYYY') as VALUEDATE,   A.CREATED_DATE,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_AMNT as TRAN_AMOUNT,   A.REVERSAL_AMOUNT,   A.INTRBK_STTLM_CUR,   FN_CARD_DECRYPT_AND_MASK_RPT(A.DBTR_ACCT_NO) as DBTR_ACCT_NO,   FN_CARD_DECRYPT_AND_MASK_RPT(A.CR_ACCT_IDENTIFICATION) as CR_ACCT_IDENTIFICATION,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   A.EXT_PURPOSE_CODE,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.PROCESS_TYPE,   A.DBTR_IBAN,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID as SENDER_REFERENCE_NUMBER,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.TENANT_ID,   A.PROCESSING_SYSTEM,   A.TRAN_REF_ID as ORIGINATOR_REF_NUMBER,   case    when A.EXHF_ID is null then UPPER('RCT')    else UPPER('BCT')   end as PAYMENT_TYPE,   A.PROCESS_GROUP,   NTPL.NPSSTPL_ID,   NTPL.PROCESS_NAME as MESSAGE_TYPE,   NTPL.PROCESS_REF_NO,   TO_CHAR(A.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.PROCESS_STATUS as QUEUE,   A.STATUS as TRAN_STATUS,   CMB.BANK_NAME as BENEFICIARY_BANK,   NTPL.T24_RETURN_CODE,   CONCAT(NTPL.T24_RETURN_CODE,   '-',   T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESC,   NTPL.CBUAE_RETURN_CODE,   CONCAT(NTPL.CBUAE_RETURN_CODE,   '-',   CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESC,   NTPL.REVERSAL_CODE,   CONCAT(NTPL.REVERSAL_CODE,   '-',   CCD.CD_DESCRIPTION) as REVERSAL_DESC,   NTPL.PROCESS_TIME  from   NPSS_TRANSACTIONS A  inner join NPSS_TRN_PROCESS_LOG NTPL on   A.UETR = NTPL.UETR  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = NTPL.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join CORE_MEMBER_BANKS CMB on   CMB.BIC_CODE = A.CR_SORT_CODE   and CMB.NEED_SYNC = 'Y'   and NTPL.PROCESS_NAME = 'Place pacs.007')VW where  PROCESS_TYPE = 'OP' $AND order by  NPSST_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Request Details MQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Value Date","target_column":"VALUEDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"TRAN_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Debtor Account","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Account","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Bank","target_column":"BENEFICIARY_BANK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Source Channel","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processed Date","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Purpose Code","target_column":"EXT_PURPOSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IPP Reference Number","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Reversal Request Details SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_reversal_request_details_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_reversal_request_details_srch"
		
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

	//Handler for INTERNAL event of "e 1708425960961"
	e_1708425960961__internal(parent_event_result){
		this.e_1708425960961__e_1708425977969(parent_event_result)
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
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1710333951252","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Reversal Request Details MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1710161179732","date_format":true},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1710161180218","date_format":false,"currency_format":true},{"column_name":"TRAN_AMOUNT","alias_name":"","mq_id":"MQ_1710161180641","date_format":false,"currency_format":true},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1710161181098","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1710161181562","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1710161182034","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1710161182506","date_format":false},{"column_name":"BENEFICIARY_BANK","alias_name":"","mq_id":"MQ_1710161182978","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1710161183578","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1710161184114","date_format":false},{"column_name":"EXT_PURPOSE_CODE","alias_name":"","mq_id":"MQ_1710161184633","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1710161185097","date_format":false},{"column_name":"VALUEDATE","alias_name":"","mq_id":"MQ_1719481376161","date_format":false}],"joins":[]},"eq_text":"select  distinct NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  CHANNEL_ID,  INTRBK_STTLM_CUR,  REVERSAL_AMOUNT,  EXHF_ID,  VALUE_DATE,  VALUEDATE,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  PRODUCT_CODE,  PROCESS_TYPE,  CR_ACCT_IDENTIFICATION,  QUEUE,  TRAN_STATUS,  TENANT_ID,  PROCESSING_SYSTEM,  PAYMENT_TYPE,  PROCESS_GROUP,  DEPARTMENT_CODE,  INTRBK_STTLM_AMNT,  SENDER_REFERENCE_NUMBER,  DBTR_IBAN,  DBTR_ACCT_NAME,  CDTR_IBAN,  CDTR_ACCT_NAME,  BENEFICIARY_BANK,  EXT_PURPOSE_CODE,  CLRSYSREF,  CREATED_DATE,  CHANNEL_ID,  ORIGINATOR_REF_NUMBER,  TRAN_AMOUNT from  (  select   A.NPSST_ID,   A.VALUE_DATE,   to_char(A.VALUE_DATE,   'DD/MM/YYYY') as VALUEDATE,   A.CREATED_DATE,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_AMNT as TRAN_AMOUNT,   A.REVERSAL_AMOUNT,   A.INTRBK_STTLM_CUR,   FN_CARD_DECRYPT_AND_MASK_RPT(A.DBTR_ACCT_NO) as DBTR_ACCT_NO,   FN_CARD_DECRYPT_AND_MASK_RPT(A.CR_ACCT_IDENTIFICATION) as CR_ACCT_IDENTIFICATION,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.UETR,   A.EXT_PURPOSE_CODE,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.PROCESS_TYPE,   A.DBTR_IBAN,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID as SENDER_REFERENCE_NUMBER,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.TENANT_ID,   A.PROCESSING_SYSTEM,   A.TRAN_REF_ID as ORIGINATOR_REF_NUMBER,   case    when A.EXHF_ID is null then UPPER('RCT')    else UPPER('BCT')   end as PAYMENT_TYPE,   A.PROCESS_GROUP,   NTPL.NPSSTPL_ID,   NTPL.PROCESS_NAME as MESSAGE_TYPE,   NTPL.PROCESS_REF_NO,   TO_CHAR(A.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.PROCESS_STATUS as QUEUE,   A.STATUS as TRAN_STATUS,   CMB.BANK_NAME as BENEFICIARY_BANK,   NTPL.T24_RETURN_CODE,   CONCAT(NTPL.T24_RETURN_CODE,   '-',   T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESC,   NTPL.CBUAE_RETURN_CODE,   CONCAT(NTPL.CBUAE_RETURN_CODE,   '-',   CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESC,   NTPL.REVERSAL_CODE,   CONCAT(NTPL.REVERSAL_CODE,   '-',   CCD.CD_DESCRIPTION) as REVERSAL_DESC,   NTPL.PROCESS_TIME  from   NPSS_TRANSACTIONS A  inner join NPSS_TRN_PROCESS_LOG NTPL on   A.UETR = NTPL.UETR  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = NTPL.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = NTPL.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = NTPL.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join CORE_MEMBER_BANKS CMB on   CMB.BIC_CODE = A.CR_SORT_CODE   and CMB.NEED_SYNC = 'Y'   and NTPL.PROCESS_NAME = 'Place pacs.007')VW where  PROCESS_TYPE = 'OP' $AND order by  NPSST_ID"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Reversal Request Details MQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Value Date","target_column":"VALUEDATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"TRAN_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Debtor Account","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Account","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Bank","target_column":"BENEFICIARY_BANK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Source Channel","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processed Date","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Purpose Code","target_column":"EXT_PURPOSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"IPP Reference Number","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
