/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34448 
Modified By     : Admin 
Modified Date   : 2024-Feb-20 10:7 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_outward_transactions_details
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'

@Component({
	selector: 's_op_outward_transactions_details',
	templateUrl: './s_op_outward_transactions_details.component.html',
	styleUrls: ['./s_op_outward_transactions_details.component.css'],
	providers:[]
})
    
// Start of class 
export class s_op_outward_transactions_detailsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_op_outward_transactions_details"
	wftpa_id : string = "WFT_NPSS_P_1304_1708423305620_0"
	cg_code : string = "CG_1304_1708421130995"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID","dtt_1304_1695130590062":"NPSSNPPL_ID","dtt_1304_1695214768145":"NAL_ID","dtt_1304_1700459090330":"NPSSPN_ID","dtt_1304_1701251364899":"NPSSPNB_ID","dtt_1304_1707202677013":"NPSSFE_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "navigation_ui"
	uicgc_2 : string = "search"
	uicgc_3 : string = "list"
	key_events : any = {}
	btl_1304_1708423148734 : string = "p_search_layout"
	btl_1304_1708423037856 : string = "p_main_layout"
	forms : any = ["uicgc_2","uicgc_1"]
	p_search_layout__e_1708423143623_showpopup : boolean = false
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_export_as_excel : any = {}
	navigation_ui_export_as_pdf : any = {}
	search : any = {}
	search_clear : any = {}
	search_search : any = {}
	list : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Navigation UI" 
		this.navigation_ui.uictrl_code = "dynamic_ui"
		this.navigation_ui.uicgc_desc = "Navigation UI"
		this.navigation_ui.uicgc_code = "uicgc_1"
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
		
		// "Export as Excel" Button of "Navigation UI" component
		this.navigation_ui_export_as_excel.label_name = "Export as Excel"
		this.navigation_ui_export_as_excel.show = true
		this.navigation_ui_export_as_excel.disabled = false
		this.navigation_ui_export_as_excel.params = {"icon_only":false,"uicgcc_style":"fa fa-file-excel-o"}
		this.navigation_ui_export_as_excel.dynamic_param = {}
		this.navigation_ui_export_as_excel.role = []
		this.navigation_ui_export_as_excel.action = ""
		
		// "Export as PDF" Button of "Navigation UI" component
		this.navigation_ui_export_as_pdf.label_name = "Export as PDF"
		this.navigation_ui_export_as_pdf.show = true
		this.navigation_ui_export_as_pdf.disabled = false
		this.navigation_ui_export_as_pdf.params = {"icon_only":false,"uicgcc_style":"fa fa-file-pdf-o"}
		this.navigation_ui_export_as_pdf.dynamic_param = {}
		this.navigation_ui_export_as_pdf.role = []
		this.navigation_ui_export_as_pdf.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_2"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Outward Transaction Details Report SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_outward_transaction_details_report_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_outward_transaction_details_report_srch"
		
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
	
		// Component level properties - "List" 
		this.list.uictrl_code = "datatable"
		this.list.uicgc_desc = "List"
		this.list.uicgc_code = "uicgc_3"
		this.list.params = {"need_search":"N","advance_dynamic_search":"Y"}
		this.list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1708423469275","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Outward Transaction Details Report List MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DEPARTMENT_NAME","alias_name":"","mq_id":"MQ_1708334553388","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1708334553890","date_format":false,"currency_format":true},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1708334554074","date_format":true},{"column_name":"PURPOSE_CODES","alias_name":"","mq_id":"MQ_1708334554274","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1708334554586","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1708334554946","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1708334879289","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1708334879448","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1708334879680","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1708334909545","date_format":false},{"column_name":"BENEFICIARY_BANK","alias_name":"","mq_id":"MQ_1708334909744","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1708335021968","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1708335022144","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1708335064236","date_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1708335064436","date_format":false},{"column_name":"CORE_BANK_ERRORS","alias_name":"","mq_id":"MQ_1708335130844","date_format":false},{"column_name":"CB_ERRORS","alias_name":"","mq_id":"MQ_1708335131019","date_format":false},{"column_name":"END_TO_END_ID","alias_name":"","mq_id":"MQ_1708335131219","date_format":false},{"column_name":"TRANSACTION_ID","alias_name":"","mq_id":"MQ_1708335168236","date_format":false},{"column_name":"FT_CI_REFERENCE_NUMBER","alias_name":"","mq_id":"MQ_1708335168419","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1708335168587","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1708335168771","date_format":false},{"column_name":"MAKER","alias_name":"","mq_id":"MQ_1708335503113","date_format":false},{"column_name":"CHECKER","alias_name":"","mq_id":"MQ_1708335514633","date_format":false}],"joins":[]},"eq_text":"SELECT DISTINCT UETR,  PROCESS_STATUS,  STATUS,  CREATED_DATE,  VALUE_DATE,  DEPARTMENT_NAME,  PAYMENT_ENDTOEND_ID,  DBTR_IBAN,  DBTR_ACCT_NAME,  CDTR_IBAN,  CDTR_ACCT_NAME,  CR_SORT_CODE,  CHANNEL_ID,  BENEFICIARY_BANK,  API_SUCCESS_FAILURE,  INTRBK_STTLM_AMNT,  PURPOSE_CODES,  CHANNEL_REFNO,  FN_CARD_DECRYPT_AND_MASK_RPT(CR_ACCT_IDENTIFICATION) AS CR_ACCT_IDENTIFICATION,  FN_CARD_DECRYPT_AND_MASK_RPT(DBTR_ACCT_NO) AS DBTR_ACCT_NO,  CB_ERRORS,  CORE_BANK_ERRORS,  MAKER,  CHECKER,  PROCESS_GROUP,  TRANSACTION_ID,  CATEGORY_PURPOSE,  FT_CI_REFERENCE_NUMBER,  END_TO_END_ID,  PROCESS_TYPE,  CLRSYSREF FROM  (SELECT NTPL.UETR,    NT.PROCESS_STATUS,    NT.STATUS,    NT.CREATED_DATE,    NT.VALUE_DATE,    NT.DEPARTMENT_CODE AS DEPARTMENT_NAME,    CASE        WHEN NT.PROCESS_GROUP = 'IBAN' THEN 'WEBI'        WHEN NT.PROCESS_GROUP = 'P2P' THEN 'MP2P'        WHEN NT.PROCESS_GROUP = 'P2B' THEN 'MP2B'        WHEN NT.PROCESS_GROUP = 'MANUAL' THEN 'WEBI'    END AS PURPOSE_CODES,    NT.PAYMENT_ENDTOEND_ID,    NT.DBTR_IBAN,    NT.DBTR_ACCT_NAME,    NT.CDTR_IBAN,    NT.CDTR_ACCT_NAME,    NT.CR_SORT_CODE,    NT.CHANNEL_ID,    NT.CHANNEL_REFNO,    NT.PROCESS_TYPE,    NT.TENANT_ID,     NT.DT_CODE,     NT.DTT_CODE,    NT.MAKER,    NT.CHECKER,    NT.CR_ACCT_IDENTIFICATION,    NT.DBTR_ACCT_NO,    NT.PROCESS_GROUP,    NT.CATEGORY_PURPOSE,    NT.INTRBK_STTLM_AMNT,    A13.CBUAERETURNCODE AS CB_ERRORS,    A11.T24RETURNCODE AS CORE_BANK_ERRORS,    A15.PROCESS_REF_NO AS CLRSYSREF,    NT.PAYMENT_ENDTOEND_ID AS END_TO_END_ID,    CMB.BANK_NAME AS BENEFICIARY_BANK,    CSE.S_DESCRIPTION,    NTPL.PROCESS_NAME,    CASE        WHEN NT.PROCESS_GROUP IN ('P2B',                                   'P2P') THEN NT.TRAN_REF_ID        WHEN NT.PROCESS_GROUP IN ('IBAN') THEN NT.MIDDLEWARE_REF_NO    END AS TRANSACTION_ID,    CASE        WHEN NT.PROCESS_GROUP IN ('IBAN') THEN NT.TRAN_REF_ID        WHEN NT.PROCESS_GROUP IN ('P2B',                                   'P2P') THEN NT.PAYMENT_ENDTOEND_ID    END AS FT_CI_REFERENCE_NUMBER,    CASE        WHEN NT.PROCESS_STATUS NOT IN ('RCTRejected') THEN 'Success'        WHEN NT.PROCESS_STATUS = 'RCTRejected' THEN 'Failure'    END AS API_SUCCESS_FAILURE   FROM NPSS_TRANSACTIONS NT   INNER JOIN NPSS_TRN_PROCESS_LOG NTPL ON NT.UETR = NTPL.UETR   LEFT JOIN    (SELECT NPSSTPL_ID,      UETR,      CBUAERETURNCODE     FROM      (SELECT A3.NPSSTPL_ID,        A3.UETR,        A3.STATUS,        A3.CBUAE_RETURN_CODE,        CONCAT(A3.CBUAE_RETURN_CODE,          '-',         CNEC1.ERROR_DESCRIPTION) AS CBUAERETURNCODE       FROM        (SELECT NPSSTPL_ID,          STATUS,          UETR,          CBUAE_RETURN_CODE,          ROW_NUM         FROM          (SELECT NPSSTPL_ID,            UETR,            STATUS,            CBUAE_RETURN_CODE,            ROW_NUMBER() OVER (PARTITION BY UETR                               ORDER BY NPSSTPL_ID DESC) AS ROW_NUM           FROM NPSS_TRN_PROCESS_LOG A01) F         WHERE ROW_NUM = 1 ) A3       LEFT JOIN CORE_NC_ERROR_CODES CNEC1 ON CNEC1.ERROR_CODE = A3.CBUAE_RETURN_CODE       AND CNEC1.PROCESSING_SYSTEM = 'CBUAE'       WHERE A3.STATUS IN ('OP_AC_REV_POSTING_FAILURE',                            'OP_P2P_REV_POSTING_FAILURE',                            'OP_P2B_REV_POSTING_FAILURE',                            'OP_AC_STATUS_REJECTED',                            'OP_P2P_STATUS_REJECTED',                            'OP_P2B_STATUS_REJECTED',                            'OP_AC_RET_POSTING_FAILURE')       ORDER BY NPSSTPL_ID DESC) A13) A13 ON A13.UETR = NT.UETR   LEFT JOIN    (SELECT NPSSTPL_ID,      UETR,      T24RETURNCODE     FROM      (SELECT A2.NPSSTPL_ID,        A2.UETR,        A2.T24_RETURN_CODE,        CONCAT(A2.T24_RETURN_CODE,          '-',         CNEC.ERROR_DESCRIPTION) AS T24RETURNCODE       FROM        (SELECT NPSSTPL_ID,          UETR,          T24_RETURN_CODE,          ROW_NUM         FROM          (SELECT NPSSTPL_ID,            UETR,            T24_RETURN_CODE,            ROW_NUMBER() OVER (PARTITION BY UETR                               ORDER BY NPSSTPL_ID DESC) AS ROW_NUM           FROM NPSS_TRN_PROCESS_LOG A1) F         WHERE ROW_NUM = 1 ) A2       LEFT JOIN CORE_NC_ERROR_CODES CNEC ON CNEC.ERROR_CODE = A2.T24_RETURN_CODE       WHERE A2.T24_RETURN_CODE IS NOT NULL       ORDER BY NPSSTPL_ID DESC) A12) A11 ON A11.UETR = NT.UETR   LEFT JOIN CORE_MEMBER_BANKS CMB ON CMB.BIC_CODE = NT.CR_SORT_CODE   AND CMB.NEED_SYNC = 'Y'   LEFT JOIN    (SELECT A15.NPSSTPL_ID,      A15.UETR,      A15.PROCESS_REF_NO     FROM      (SELECT A5.NPSSTPL_ID,        A5.UETR,        A5.PROCESS_REF_NO       FROM        (SELECT NPSSTPL_ID,          UETR,          PROCESS_REF_NO,          ROW_NUM         FROM          (SELECT NPSSTPL_ID,            UETR,            PROCESS_REF_NO,            ROW_NUMBER() OVER (PARTITION BY UETR                               ORDER BY NPSSTPL_ID DESC) AS ROW_NUM           FROM NPSS_TRN_PROCESS_LOG A05           WHERE A05.PROCESS_NAME = 'Receive Pacs002'            AND A05.PROCESS_TYPE = 'OP' ) F         WHERE F.ROW_NUM = 1 ) A5       ORDER BY A5.NPSSTPL_ID DESC) A15) A15 ON A15.UETR = NT.UETR   INNER JOIN CORE_SYSTEM_EXTN CSE ON CSE.DEPARTMENT_CODE = NT.DEPARTMENT_CODE) V1 WHERE PROCESS_TYPE = 'OP' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Outward Transaction Details Report List MQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Department Name","target_column":"DEPARTMENT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Amount Range","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Transaction Date Range","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Purpose Code","target_column":"PURPOSE_CODES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender Reference Number","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor Card Number","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Account","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Card Number","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Bank","target_column":"BENEFICIARY_BANK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Source Channel","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Core bank Error","target_column":"CORE_BANK_ERRORS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB Error","target_column":"CB_ERRORS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"End to End ID","target_column":"END_TO_END_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction ID","target_column":"TRANSACTION_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"FT/CI Reference Number","target_column":"FT_CI_REFERENCE_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clrsysrefno","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose Code","target_column":"CATEGORY_PURPOSE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Maker","target_column":"MAKER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Checker","target_column":"CHECKER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.list.context_menu = []
		this.list.views = {}
		this.list.onChangecomponent = new EventEmitter<any>()
		this.list.show = true
		this.list.dynamic_param = {}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__e_1708423107472()
	}

	//Handler for INTERNAL event of "e 1708423107472"
	e_1708423107472__internal(parent_event_result){
		this.e_1708423107472__e_1708423116760(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__e_1708423126151()
		this.search_search__e_1708423598487()
	}

	//Handler for INTERNAL event of "e 1708423126151"
	e_1708423126151__internal(parent_event_result){
		this.e_1708423126151__e_1708423131863(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__e_1708423143623()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__e_1708423261397()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__e_1708423107472() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708423107472"
		let event_params={"caller_name":"page_load__e_1708423107472","event_desc":"E_1708423107472","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""}}
		let handler_code="create_form"
		let internals="e_1708423107472__e_1708423116760,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1708423107472"
	e_1708423107472__e_1708423116760(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1708423107472"
		let destn_id="search_search"
		let parent_source_id="page_load"
		let event_code="e_1708423116760"
		let event_params={"caller_name":"e_1708423107472__e_1708423116760","event_desc":"E_1708423116760","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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
	search_search__e_1708423126151() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1708423126151"
		let event_params={"caller_name":"search_search__e_1708423126151","event_desc":"E_1708423126151","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="e_1708423126151__e_1708423131863,"
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
	search_search__e_1708423598487() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708423598487"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__e_1708423598487","event_desc":"E_1708423598487","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for INTERNAL event of "e 1708423126151"
	e_1708423126151__e_1708423131863(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1708423126151"
		let destn_id="list"
		let parent_source_id="search_search"
		let event_code="e_1708423131863"
		let event_params={"caller_name":"e_1708423126151__e_1708423131863","event_desc":"E_1708423131863","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_3","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","ds_eligible":"DS_1708423469275","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Outward Transaction Details Report List MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DEPARTMENT_NAME","alias_name":"","mq_id":"MQ_1708334553388","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1708334553890","date_format":false,"currency_format":true},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1708334554074","date_format":true},{"column_name":"PURPOSE_CODES","alias_name":"","mq_id":"MQ_1708334554274","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1708334554586","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1708334554946","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1708334879289","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1708334879448","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1708334879680","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1708334909545","date_format":false},{"column_name":"BENEFICIARY_BANK","alias_name":"","mq_id":"MQ_1708334909744","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1708335021968","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1708335022144","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1708335064236","date_format":true},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1708335064436","date_format":false},{"column_name":"CORE_BANK_ERRORS","alias_name":"","mq_id":"MQ_1708335130844","date_format":false},{"column_name":"CB_ERRORS","alias_name":"","mq_id":"MQ_1708335131019","date_format":false},{"column_name":"END_TO_END_ID","alias_name":"","mq_id":"MQ_1708335131219","date_format":false},{"column_name":"TRANSACTION_ID","alias_name":"","mq_id":"MQ_1708335168236","date_format":false},{"column_name":"FT_CI_REFERENCE_NUMBER","alias_name":"","mq_id":"MQ_1708335168419","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1708335168587","date_format":false},{"column_name":"CATEGORY_PURPOSE","alias_name":"","mq_id":"MQ_1708335168771","date_format":false},{"column_name":"MAKER","alias_name":"","mq_id":"MQ_1708335503113","date_format":false},{"column_name":"CHECKER","alias_name":"","mq_id":"MQ_1708335514633","date_format":false}],"joins":[]},"eq_text":"SELECT DISTINCT UETR,  PROCESS_STATUS,  STATUS,  CREATED_DATE,  VALUE_DATE,  DEPARTMENT_NAME,  PAYMENT_ENDTOEND_ID,  DBTR_IBAN,  DBTR_ACCT_NAME,  CDTR_IBAN,  CDTR_ACCT_NAME,  CR_SORT_CODE,  CHANNEL_ID,  BENEFICIARY_BANK,  API_SUCCESS_FAILURE,  INTRBK_STTLM_AMNT,  PURPOSE_CODES,  CHANNEL_REFNO,  FN_CARD_DECRYPT_AND_MASK_RPT(CR_ACCT_IDENTIFICATION) AS CR_ACCT_IDENTIFICATION,  FN_CARD_DECRYPT_AND_MASK_RPT(DBTR_ACCT_NO) AS DBTR_ACCT_NO,  CB_ERRORS,  CORE_BANK_ERRORS,  MAKER,  CHECKER,  PROCESS_GROUP,  TRANSACTION_ID,  CATEGORY_PURPOSE,  FT_CI_REFERENCE_NUMBER,  END_TO_END_ID,  PROCESS_TYPE,  CLRSYSREF FROM  (SELECT NTPL.UETR,    NT.PROCESS_STATUS,    NT.STATUS,    NT.CREATED_DATE,    NT.VALUE_DATE,    NT.DEPARTMENT_CODE AS DEPARTMENT_NAME,    CASE        WHEN NT.PROCESS_GROUP = 'IBAN' THEN 'WEBI'        WHEN NT.PROCESS_GROUP = 'P2P' THEN 'MP2P'        WHEN NT.PROCESS_GROUP = 'P2B' THEN 'MP2B'        WHEN NT.PROCESS_GROUP = 'MANUAL' THEN 'WEBI'    END AS PURPOSE_CODES,    NT.PAYMENT_ENDTOEND_ID,    NT.DBTR_IBAN,    NT.DBTR_ACCT_NAME,    NT.CDTR_IBAN,    NT.CDTR_ACCT_NAME,    NT.CR_SORT_CODE,    NT.CHANNEL_ID,    NT.CHANNEL_REFNO,    NT.PROCESS_TYPE,    NT.TENANT_ID,     NT.DT_CODE,     NT.DTT_CODE,    NT.MAKER,    NT.CHECKER,    NT.CR_ACCT_IDENTIFICATION,    NT.DBTR_ACCT_NO,    NT.PROCESS_GROUP,    NT.CATEGORY_PURPOSE,    NT.INTRBK_STTLM_AMNT,    A13.CBUAERETURNCODE AS CB_ERRORS,    A11.T24RETURNCODE AS CORE_BANK_ERRORS,    A15.PROCESS_REF_NO AS CLRSYSREF,    NT.PAYMENT_ENDTOEND_ID AS END_TO_END_ID,    CMB.BANK_NAME AS BENEFICIARY_BANK,    CSE.S_DESCRIPTION,    NTPL.PROCESS_NAME,    CASE        WHEN NT.PROCESS_GROUP IN ('P2B',                                   'P2P') THEN NT.TRAN_REF_ID        WHEN NT.PROCESS_GROUP IN ('IBAN') THEN NT.MIDDLEWARE_REF_NO    END AS TRANSACTION_ID,    CASE        WHEN NT.PROCESS_GROUP IN ('IBAN') THEN NT.TRAN_REF_ID        WHEN NT.PROCESS_GROUP IN ('P2B',                                   'P2P') THEN NT.PAYMENT_ENDTOEND_ID    END AS FT_CI_REFERENCE_NUMBER,    CASE        WHEN NT.PROCESS_STATUS NOT IN ('RCTRejected') THEN 'Success'        WHEN NT.PROCESS_STATUS = 'RCTRejected' THEN 'Failure'    END AS API_SUCCESS_FAILURE   FROM NPSS_TRANSACTIONS NT   INNER JOIN NPSS_TRN_PROCESS_LOG NTPL ON NT.UETR = NTPL.UETR   LEFT JOIN    (SELECT NPSSTPL_ID,      UETR,      CBUAERETURNCODE     FROM      (SELECT A3.NPSSTPL_ID,        A3.UETR,        A3.STATUS,        A3.CBUAE_RETURN_CODE,        CONCAT(A3.CBUAE_RETURN_CODE,          '-',         CNEC1.ERROR_DESCRIPTION) AS CBUAERETURNCODE       FROM        (SELECT NPSSTPL_ID,          STATUS,          UETR,          CBUAE_RETURN_CODE,          ROW_NUM         FROM          (SELECT NPSSTPL_ID,            UETR,            STATUS,            CBUAE_RETURN_CODE,            ROW_NUMBER() OVER (PARTITION BY UETR                               ORDER BY NPSSTPL_ID DESC) AS ROW_NUM           FROM NPSS_TRN_PROCESS_LOG A01) F         WHERE ROW_NUM = 1 ) A3       LEFT JOIN CORE_NC_ERROR_CODES CNEC1 ON CNEC1.ERROR_CODE = A3.CBUAE_RETURN_CODE       AND CNEC1.PROCESSING_SYSTEM = 'CBUAE'       WHERE A3.STATUS IN ('OP_AC_REV_POSTING_FAILURE',                            'OP_P2P_REV_POSTING_FAILURE',                            'OP_P2B_REV_POSTING_FAILURE',                            'OP_AC_STATUS_REJECTED',                            'OP_P2P_STATUS_REJECTED',                            'OP_P2B_STATUS_REJECTED',                            'OP_AC_RET_POSTING_FAILURE')       ORDER BY NPSSTPL_ID DESC) A13) A13 ON A13.UETR = NT.UETR   LEFT JOIN    (SELECT NPSSTPL_ID,      UETR,      T24RETURNCODE     FROM      (SELECT A2.NPSSTPL_ID,        A2.UETR,        A2.T24_RETURN_CODE,        CONCAT(A2.T24_RETURN_CODE,          '-',         CNEC.ERROR_DESCRIPTION) AS T24RETURNCODE       FROM        (SELECT NPSSTPL_ID,          UETR,          T24_RETURN_CODE,          ROW_NUM         FROM          (SELECT NPSSTPL_ID,            UETR,            T24_RETURN_CODE,            ROW_NUMBER() OVER (PARTITION BY UETR                               ORDER BY NPSSTPL_ID DESC) AS ROW_NUM           FROM NPSS_TRN_PROCESS_LOG A1) F         WHERE ROW_NUM = 1 ) A2       LEFT JOIN CORE_NC_ERROR_CODES CNEC ON CNEC.ERROR_CODE = A2.T24_RETURN_CODE       WHERE A2.T24_RETURN_CODE IS NOT NULL       ORDER BY NPSSTPL_ID DESC) A12) A11 ON A11.UETR = NT.UETR   LEFT JOIN CORE_MEMBER_BANKS CMB ON CMB.BIC_CODE = NT.CR_SORT_CODE   AND CMB.NEED_SYNC = 'Y'   LEFT JOIN    (SELECT A15.NPSSTPL_ID,      A15.UETR,      A15.PROCESS_REF_NO     FROM      (SELECT A5.NPSSTPL_ID,        A5.UETR,        A5.PROCESS_REF_NO       FROM        (SELECT NPSSTPL_ID,          UETR,          PROCESS_REF_NO,          ROW_NUM         FROM          (SELECT NPSSTPL_ID,            UETR,            PROCESS_REF_NO,            ROW_NUMBER() OVER (PARTITION BY UETR                               ORDER BY NPSSTPL_ID DESC) AS ROW_NUM           FROM NPSS_TRN_PROCESS_LOG A05           WHERE A05.PROCESS_NAME = 'Receive Pacs002'            AND A05.PROCESS_TYPE = 'OP' ) F         WHERE F.ROW_NUM = 1 ) A5       ORDER BY A5.NPSSTPL_ID DESC) A15) A15 ON A15.UETR = NT.UETR   INNER JOIN CORE_SYSTEM_EXTN CSE ON CSE.DEPARTMENT_CODE = NT.DEPARTMENT_CODE) V1 WHERE PROCESS_TYPE = 'OP' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Outward Transaction Details Report List MQ CCD","filter":[{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Department Name","target_column":"DEPARTMENT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Amount Range","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Transaction Date Range","target_column":"CREATED_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"Purpose Code","target_column":"PURPOSE_CODES","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Sender Reference Number","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Debtor Card Number","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Account","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Card Number","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Creditor Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Beneficiary Bank","target_column":"BENEFICIARY_BANK","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Source Channel","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date","target_column":"VALUE_DATE","alias_name":"","alignment":"Left","width":"","format":"date:\"dd-MM-yyyy HH:mm:ss\"","date_format":true},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Core bank Error","target_column":"CORE_BANK_ERRORS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CB Error","target_column":"CB_ERRORS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"End to End ID","target_column":"END_TO_END_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction ID","target_column":"TRANSACTION_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"FT/CI Reference Number","target_column":"FT_CI_REFERENCE_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clrsysrefno","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose Code","target_column":"CATEGORY_PURPOSE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Maker","target_column":"MAKER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Checker","target_column":"CHECKER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__e_1708423143623() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1708423143623"
		let event_params={"caller_name":"navigation_ui_search__e_1708423143623","event_desc":"E_1708423143623","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__e_1708423143623","selector":"p_search_layout","profile_code":"BTL_1304_1708423148734","window_title":"Search","window_height":535,"window_width":"950px","window_close_icon":"Y","eventdes":"e_1708423143623","eventcode":"E_1708423143623"}}
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
	search_clear__e_1708423261397() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1708423261397"
		let event_params={"caller_name":"search_clear__e_1708423261397","event_desc":"E_1708423261397","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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