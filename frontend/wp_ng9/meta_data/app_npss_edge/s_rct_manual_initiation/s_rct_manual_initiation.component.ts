/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 35880 
Modified By     : Admin 
Modified Date   : 2024-Jun-28 8:0 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_rct_manual_initiation
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_change_routingkeyService} from '../../../custom_widget/torus_cs_change_routingkey/torus_cs_change_routingkey.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'
import {torus_cs_set_rule_mi_paramService} from '../../../custom_widget/torus_cs_set_rule_mi_param/torus_cs_set_rule_mi_param.service'
import {npss_cs_rev_get_usable_balanceService} from '../../../custom_widget/npss_cs_rev_get_usable_balance/npss_cs_rev_get_usable_balance.service'
import {npss_cs_outward_manual_initiationService} from '../../../custom_widget/npss_cs_outward_manual_initiation/npss_cs_outward_manual_initiation.service'
import {npss_cs_manual_initiation_get_dealService} from '../../../custom_widget/npss_cs_manual_initiation_get_deal/npss_cs_manual_initiation_get_deal.service'

@Component({
	selector: 's_rct_manual_initiation',
	templateUrl: './s_rct_manual_initiation.component.html',
	styleUrls: ['./s_rct_manual_initiation.component.css'],
	providers:[torus_cs_change_routingkeyService,torus_cs_show_hideService,torus_cs_set_rule_mi_paramService,npss_cs_rev_get_usable_balanceService,npss_cs_outward_manual_initiationService,npss_cs_manual_initiation_get_dealService]
})
    
// Start of class 
export class s_rct_manual_initiationComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_rct_manual_initiation"
	wftpa_id : string = "WFT_NPSS_P_1304_1672490487921_0"
	cg_code : string = "CG_1304_1672488801800"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID","dtt_1304_1695130590062":"NPSSNPPL_ID","dtt_1304_1695214768145":"NAL_ID","dtt_1304_1700459090330":"NPSSPN_ID","dtt_1304_1701251364899":"NPSSPNB_ID","dtt_1304_1707202677013":"NPSSFE_ID","dtt_1304_1711696447765":"NPSSFL_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "queue"
	uicgc_2 : string = "transaction_list"
	uicgc_3 : string = "navigation_ui"
	uicgc_4 : string = "search"
	uicgc_5 : string = "process_log_list"
	uicgc_6 : string = "cbs_ref_ui"
	uicgc_7 : string = "view_dr_cr_details"
	uicgc_8 : string = "back_ui"
	uicgc_9 : string = "view_payment_details"
	uicgc_10 : string = "message_detail"
	uicgc_11 : string = "history_detail"
	uicgc_12 : string = "message_back_ui"
	uicgc_13 : string = "message_detail_action"
	uicgc_14 : string = "message_detail_ui"
	uicgc_15 : string = "process_log_ui"
	uicgc_16 : string = "request_ui"
	uicgc_17 : string = "single_back_ui"
	uicgc_18 : string = "response_ui"
	uicgc_19 : string = "original_transaction_details"
	uicgc_20 : string = "payment_processing_details"
	uicgc_21 : string = "payment_processing_details_ui"
	uicgc_22 : string = "search_info_ui"
	uicgc_23 : string = "get_usable_balance_widget"
	uicgc_24 : string = "get_deal_ui"
	uicgc_25 : string = "sell_margin_rate_ui"
	key_events : any = {}
	btl_1304_1680586648550 : string = "p_fin_initate_layout"
	btl_1304_1672489774529 : string = "p_fab_initate_layout"
	btl_1304_1670245368385 : string = "p_view_req_and_res"
	btl_1304_1669459620728 : string = "p_view_message_ui_layout"
	btl_1304_1669459551241 : string = "p_view_message_list_layout"
	btl_1304_1669459508394 : string = "p_view_request_layout"
	btl_1304_1669459458643 : string = "p_view_response_layout"
	btl_1304_1669459405629 : string = "p_view_history_layout"
	btl_1304_1669202528774 : string = "p_vertical_tran_detail_profile"
	btl_1304_1668850424944 : string = "p_cbs_layout"
	btl_1304_1666856790983 : string = "p_search_layout"
	btl_1304_1666856599156 : string = "p_main_layout"
	forms : any = ["uicgc_16","uicgc_25","uicgc_6","uicgc_14","uicgc_21","uicgc_4","uicgc_18","uicgc_24","uicgc_17","uicgc_12","uicgc_13","uicgc_15","uicgc_8","uicgc_3"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	queue : any = {}
	transaction_list : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_tran : any = {}
	navigation_ui_view_process_log : any = {}
	navigation_ui_view_message_log : any = {}
	navigation_ui_initiate : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	process_log_list : any = {}
	cbs_ref_ui : any = {}
	cbs_ref_ui_save : any = {}
	view_dr_cr_details : any = {}
	back_ui : any = {}
	back_ui_back : any = {}
	view_payment_details : any = {}
	message_detail : any = {}
	history_detail : any = {}
	message_back_ui : any = {}
	message_back_ui_back : any = {}
	message_detail_action : any = {}
	message_detail_action_back : any = {}
	message_detail_action_view_message : any = {}
	message_detail_ui : any = {}
	process_log_ui : any = {}
	process_log_ui_back : any = {}
	process_log_ui_view_response : any = {}
	process_log_ui_view_request : any = {}
	process_log_ui_view_req_and_res : any = {}
	request_ui : any = {}
	single_back_ui : any = {}
	single_back_ui_back : any = {}
	response_ui : any = {}
	original_transaction_details : any = {}
	payment_processing_details : any = {}
	payment_processing_details_ui : any = {}
	payment_processing_details_ui_back : any = {}
	payment_processing_details_ui_save : any = {}
	payment_processing_details_ui_get_deal : any = {}
	search_info_ui : any = {}
	get_usable_balance_widget : any = {}
	get_deal_ui : any = {}
	sell_margin_rate_ui : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_change_routingkeyService:torus_cs_change_routingkeyService,private torus_cs_show_hideService:torus_cs_show_hideService,private torus_cs_set_rule_mi_paramService:torus_cs_set_rule_mi_paramService,private npss_cs_rev_get_usable_balanceService:npss_cs_rev_get_usable_balanceService,private npss_cs_outward_manual_initiationService:npss_cs_outward_manual_initiationService,private npss_cs_manual_initiation_get_dealService:npss_cs_manual_initiation_get_dealService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_1"
		this.queue.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672490830459","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS NTPL AI QUEUE MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1674561426906","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1674561427160","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1674561437360","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   NT.CREATED_DATE,   NT.STATUS,   NT.PROCESS_STATUS,   NT.UETR,   NT.PROCESSING_SYSTEM,   NT.TENANT_ID,   NT.MODIFIED_DATE,   NT.MODIFIED_DATE_UTC,   NT.CREATED_BY,   NT.CREATED_BY_NAME,   NT.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NT.DEPARTMENT_CODE,   NT.PROCESS_GROUP,   NT.VALUE_DATE,   NT.DBTR_ACCT_NO,   NT.CDTR_ACCT_NO,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_AMNT,   NT.PROCESS_TYPE,   NT.DBTR_IBAN  from   <TRAN_DB>.NPSS_TRANSACTIONS NT  inner join CORE_Q_STATUS_ROLES QR on   NT.STATUS = QR.PROCESS_QUEUE_STATUS   and NT.PROCESS_STATUS = QR.QUEUE_CODE  inner join CORE_APP_Q_SETUP PQ on   NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS NTPL AI Queue MQ CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.queue.context_menu = []
		this.queue.views = {}
		this.queue.onChangecomponent = new EventEmitter<any>()
		this.queue.show = true
		this.queue.dynamic_param = {}
	
		// Component level properties - "Transaction List" 
		this.transaction_list.uictrl_code = "datatable"
		this.transaction_list.uicgc_desc = "Transaction List"
		this.transaction_list.uicgc_code = "uicgc_2"
		this.transaction_list.params = {"need_pag_datatable":"Y","advance_dynamic_search":"N","need_search":"N"}
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491181877","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS NTPL AI Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1674562032536","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1674562038827","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1674562057475","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1674562062074","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1674562076291","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1674562085091","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1674562096226","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1674562107395","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1687524928600","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1687528367206","date_format":false},{"column_name":"CUST_SPLRATE_FLAG","alias_name":"","mq_id":"MQ_1689328998401","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  TRAN_INFO,  ACCOUNT_CURRENCY,  SELL_MARGIN,  SELL_RATE,  FORCE_POST_FLAG,  CUST_SPLRATE_FLAG FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.CR_ACCT_IDENTIFICATION,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.PROCESS_GROUP,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    CASE        WHEN A.DBTR_IBAN IS NULL THEN ''        ELSE A.DBTR_IBAN    END AS DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM,    A.TRAN_INFO,    A.ACCOUNT_CURRENCY,    A.SELL_MARGIN,    A.SELL_RATE,    A.FORCE_POST_FLAG,    A.CUST_SPLRATE_FLAG   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN <TRAN_DB>.TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS NTPL AI TRAN MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date  & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.transaction_list.context_menu = []
		this.transaction_list.views = {}
		this.transaction_list.onChangecomponent = new EventEmitter<any>()
		this.transaction_list.show = true
		this.transaction_list.dynamic_param = {}
	
		// Component level properties - "Navigation UI" 
		this.navigation_ui.uictrl_code = "dynamic_ui"
		this.navigation_ui.uicgc_desc = "Navigation UI"
		this.navigation_ui.uicgc_code = "uicgc_3"
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
		
		// "View Tran" Button of "Navigation UI" component
		this.navigation_ui_view_tran.label_name = "View Tran"
		this.navigation_ui_view_tran.show = true
		this.navigation_ui_view_tran.disabled = true
		this.navigation_ui_view_tran.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_tran.dynamic_param = {}
		this.navigation_ui_view_tran.role = []
		this.navigation_ui_view_tran.action = ""
		
		// "View Process Log" Button of "Navigation UI" component
		this.navigation_ui_view_process_log.label_name = "View Process Log"
		this.navigation_ui_view_process_log.show = true
		this.navigation_ui_view_process_log.disabled = true
		this.navigation_ui_view_process_log.params = {"icon_only":false,"uicgcc_style":"fa fa-building"}
		this.navigation_ui_view_process_log.dynamic_param = {}
		this.navigation_ui_view_process_log.role = []
		this.navigation_ui_view_process_log.action = ""
		
		// "View Message Log" Button of "Navigation UI" component
		this.navigation_ui_view_message_log.label_name = "View Message Log"
		this.navigation_ui_view_message_log.show = true
		this.navigation_ui_view_message_log.disabled = true
		this.navigation_ui_view_message_log.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_message_log.dynamic_param = {}
		this.navigation_ui_view_message_log.role = []
		this.navigation_ui_view_message_log.action = ""
		
		// "Initiate" Button of "Navigation UI" component
		this.navigation_ui_initiate.label_name = "Initiate"
		this.navigation_ui_initiate.show = true
		this.navigation_ui_initiate.disabled = false
		this.navigation_ui_initiate.params = {"icon_only":false,"uicgcc_style":"fa fa-thumb-tack"}
		this.navigation_ui_initiate.dynamic_param = {}
		this.navigation_ui_initiate.role = []
		this.navigation_ui_initiate.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Manual initiation SRCh","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_manual_initiation_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_manual_initiation_srch"
		
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
	
		// Component level properties - "Process Log List" 
		this.process_log_list.uictrl_code = "datatable"
		this.process_log_list.uicgc_desc = "Process Log List"
		this.process_log_list.uicgc_code = "uicgc_5"
		this.process_log_list.params = {"need_pag_datatable":"Y","advance_dynamic_search":"N","need_search":"N"}
		this.process_log_list.datasource = {}
		this.process_log_list.context_menu = []
		this.process_log_list.views = {}
		this.process_log_list.onChangecomponent = new EventEmitter<any>()
		this.process_log_list.show = true
		this.process_log_list.dynamic_param = {}
	
		// Component level properties - "CBS REF UI" 
		this.cbs_ref_ui.uictrl_code = "dynamic_ui"
		this.cbs_ref_ui.uicgc_desc = "CBS REF UI"
		this.cbs_ref_ui.uicgc_code = "uicgc_6"
		this.cbs_ref_ui.params = {}
		this.cbs_ref_ui.datasource = {}
		this.cbs_ref_ui.context_menu = []
		this.cbs_ref_ui.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS BCT REF NO UI","tab_order":0,"tab_name":"","uicgc_description":"CBS REF UI","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.cbs_ref_ui.onChangecomponent = new EventEmitter<any>()
		this.cbs_ref_ui.show = true
		this.cbs_ref_ui.dynamic_param = {}
		this.cbs_ref_ui.f_npss_bct_ref_no_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.cbs_ref_ui.form_name = "f_npss_bct_ref_no_ui"
		
		// "Save" Button of "CBS REF UI" component
		this.cbs_ref_ui_save.label_name = "Save"
		this.cbs_ref_ui_save.show = true
		this.cbs_ref_ui_save.disabled = false
		this.cbs_ref_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-save"}
		this.cbs_ref_ui_save.dynamic_param = {}
		this.cbs_ref_ui_save.role = []
		this.cbs_ref_ui_save.action = ""
	
		// Component level properties - "View Dr Cr Details" 
		this.view_dr_cr_details.uictrl_code = "datatable"
		this.view_dr_cr_details.uicgc_desc = "View Dr Cr Details"
		this.view_dr_cr_details.uicgc_code = "uicgc_7"
		this.view_dr_cr_details.params = {"need_search":"N","need_vertical":"Y"}
		this.view_dr_cr_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491462446","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1690460821298","date_format":true}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM,  VALUEDATEMI FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    TO_CHAR(A.VALUE_DATE,      'YYYY-MM-DD') AS VALUEDATEMI,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,      'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    A.DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    A.CR_ACCT_IDENTIFICATION,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN <TRAN_DB>.TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_dr_cr_details.context_menu = []
		this.view_dr_cr_details.views = {}
		this.view_dr_cr_details.onChangecomponent = new EventEmitter<any>()
		this.view_dr_cr_details.show = true
		this.view_dr_cr_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Back UI" 
		this.back_ui.uictrl_code = "dynamic_ui"
		this.back_ui.uicgc_desc = "Back UI"
		this.back_ui.uicgc_code = "uicgc_8"
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
		this.back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.back_ui_back.dynamic_param = {}
		this.back_ui_back.role = []
		this.back_ui_back.action = ""
	
		// Component level properties - "View Payment Details" 
		this.view_payment_details.uictrl_code = "datatable"
		this.view_payment_details.uicgc_desc = "View Payment Details"
		this.view_payment_details.uicgc_code = "uicgc_9"
		this.view_payment_details.params = {"need_search":"N","need_vertical":"Y"}
		this.view_payment_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491499750","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1690460821298","date_format":true}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM,  VALUEDATEMI FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    TO_CHAR(A.VALUE_DATE,      'YYYY-MM-DD') AS VALUEDATEMI,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,      'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    A.DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    A.CR_ACCT_IDENTIFICATION,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN <TRAN_DB>.TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"VALUEDATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_payment_details.context_menu = []
		this.view_payment_details.views = {}
		this.view_payment_details.onChangecomponent = new EventEmitter<any>()
		this.view_payment_details.show = true
		this.view_payment_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Message Detail" 
		this.message_detail.uictrl_code = "datatable"
		this.message_detail.uicgc_desc = "Message Detail"
		this.message_detail.uicgc_code = "uicgc_10"
		this.message_detail.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.message_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491616867","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   <TRAN_DB>.NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join <TRAN_DB>.NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.message_detail.context_menu = []
		this.message_detail.views = {}
		this.message_detail.onChangecomponent = new EventEmitter<any>()
		this.message_detail.show = true
		this.message_detail.dynamic_param = {}
	
		// Component level properties - "History Detail" 
		this.history_detail.uictrl_code = "datatable"
		this.history_detail.uicgc_desc = "History Detail"
		this.history_detail.uicgc_code = "uicgc_11"
		this.history_detail.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491568508","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1713241927843","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT,  ADDITIONAL_INFO from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE,   '-',   T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE,   '-',   CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE,   '-',   CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <TRAN_DB>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
		// Component level properties - "Message Back UI" 
		this.message_back_ui.uictrl_code = "dynamic_ui"
		this.message_back_ui.uicgc_desc = "Message Back UI"
		this.message_back_ui.uicgc_code = "uicgc_12"
		this.message_back_ui.params = {}
		this.message_back_ui.datasource = {}
		this.message_back_ui.context_menu = []
		this.message_back_ui.views = {}
		this.message_back_ui.onChangecomponent = new EventEmitter<any>()
		this.message_back_ui.show = true
		this.message_back_ui.dynamic_param = {}
		this.message_back_ui.f_message_back_ui = {"show":true}
		this.message_back_ui.current_view = "f_message_back_ui"
		
		// "Back" Button of "Message Back UI" component
		this.message_back_ui_back.label_name = "Back"
		this.message_back_ui_back.show = true
		this.message_back_ui_back.disabled = false
		this.message_back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.message_back_ui_back.dynamic_param = {}
		this.message_back_ui_back.role = []
		this.message_back_ui_back.action = ""
	
		// Component level properties - "Message Detail Action" 
		this.message_detail_action.uictrl_code = "dynamic_ui"
		this.message_detail_action.uicgc_desc = "Message Detail Action"
		this.message_detail_action.uicgc_code = "uicgc_13"
		this.message_detail_action.params = {}
		this.message_detail_action.datasource = {}
		this.message_detail_action.context_menu = []
		this.message_detail_action.views = {}
		this.message_detail_action.onChangecomponent = new EventEmitter<any>()
		this.message_detail_action.show = true
		this.message_detail_action.dynamic_param = {}
		this.message_detail_action.f_message_detail_action = {"show":true}
		this.message_detail_action.current_view = "f_message_detail_action"
		
		// "Back" Button of "Message Detail Action" component
		this.message_detail_action_back.label_name = "Back"
		this.message_detail_action_back.show = true
		this.message_detail_action_back.disabled = false
		this.message_detail_action_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.message_detail_action_back.dynamic_param = {}
		this.message_detail_action_back.role = []
		this.message_detail_action_back.action = ""
		
		// "View Message" Button of "Message Detail Action" component
		this.message_detail_action_view_message.label_name = "View Message"
		this.message_detail_action_view_message.show = true
		this.message_detail_action_view_message.disabled = true
		this.message_detail_action_view_message.params = {"icon_only":false,"uicgcc_style":"fa fa-css3"}
		this.message_detail_action_view_message.dynamic_param = {}
		this.message_detail_action_view_message.role = []
		this.message_detail_action_view_message.action = ""
	
		// Component level properties - "Message Detail UI" 
		this.message_detail_ui.uictrl_code = "dynamic_ui"
		this.message_detail_ui.uicgc_desc = "Message Detail UI"
		this.message_detail_ui.uicgc_code = "uicgc_14"
		this.message_detail_ui.params = {}
		this.message_detail_ui.datasource = {}
		this.message_detail_ui.context_menu = []
		this.message_detail_ui.views = {"first":"DTT_1304_1665903906193","is_tab_mode":"N","dtt_1304_1665903906193":{"0":[{"dttv_id":"NPSS Message Data UI","tab_order":0,"tab_name":"","uicgc_description":"Message Detail UI","role_description":"default","dtt_description":"NPSS TRN REQ RESP DTLS"}]}}
		this.message_detail_ui.onChangecomponent = new EventEmitter<any>()
		this.message_detail_ui.show = true
		this.message_detail_ui.dynamic_param = {}
		this.message_detail_ui.f_npss_message_data_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.message_detail_ui.form_name = "f_npss_message_data_ui"
	
		// Component level properties - "Process Log UI" 
		this.process_log_ui.uictrl_code = "dynamic_ui"
		this.process_log_ui.uicgc_desc = "Process Log UI"
		this.process_log_ui.uicgc_code = "uicgc_15"
		this.process_log_ui.params = {}
		this.process_log_ui.datasource = {}
		this.process_log_ui.context_menu = []
		this.process_log_ui.views = {}
		this.process_log_ui.onChangecomponent = new EventEmitter<any>()
		this.process_log_ui.show = true
		this.process_log_ui.dynamic_param = {}
		this.process_log_ui.f_process_log_ui = {"show":true}
		this.process_log_ui.current_view = "f_process_log_ui"
		
		// "Back" Button of "Process Log UI" component
		this.process_log_ui_back.label_name = "Back"
		this.process_log_ui_back.show = true
		this.process_log_ui_back.disabled = false
		this.process_log_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.process_log_ui_back.dynamic_param = {}
		this.process_log_ui_back.role = []
		this.process_log_ui_back.action = ""
		
		// "View Response" Button of "Process Log UI" component
		this.process_log_ui_view_response.label_name = "View Response"
		this.process_log_ui_view_response.show = true
		this.process_log_ui_view_response.disabled = true
		this.process_log_ui_view_response.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.process_log_ui_view_response.dynamic_param = {}
		this.process_log_ui_view_response.role = []
		this.process_log_ui_view_response.action = ""
		
		// "View Request" Button of "Process Log UI" component
		this.process_log_ui_view_request.label_name = "View Request"
		this.process_log_ui_view_request.show = true
		this.process_log_ui_view_request.disabled = true
		this.process_log_ui_view_request.params = {"icon_only":false,"uicgcc_style":"fa fa-expand"}
		this.process_log_ui_view_request.dynamic_param = {}
		this.process_log_ui_view_request.role = []
		this.process_log_ui_view_request.action = ""
		
		// "View Req and Res" Button of "Process Log UI" component
		this.process_log_ui_view_req_and_res.label_name = "View Req and Res"
		this.process_log_ui_view_req_and_res.show = true
		this.process_log_ui_view_req_and_res.disabled = true
		this.process_log_ui_view_req_and_res.params = {"icon_only":false,"uicgcc_style":"fa fa-expand"}
		this.process_log_ui_view_req_and_res.dynamic_param = {}
		this.process_log_ui_view_req_and_res.role = []
		this.process_log_ui_view_req_and_res.action = ""
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_16"
		this.request_ui.params = {}
		this.request_ui.datasource = {}
		this.request_ui.context_menu = []
		this.request_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Request UI","tab_order":0,"tab_name":"","uicgc_description":"Request UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.request_ui.onChangecomponent = new EventEmitter<any>()
		this.request_ui.show = true
		this.request_ui.dynamic_param = {}
		this.request_ui.f_npss_target_request_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.request_ui.form_name = "f_npss_target_request_ui"
	
		// Component level properties - "Single Back UI" 
		this.single_back_ui.uictrl_code = "dynamic_ui"
		this.single_back_ui.uicgc_desc = "Single Back UI"
		this.single_back_ui.uicgc_code = "uicgc_17"
		this.single_back_ui.params = {}
		this.single_back_ui.datasource = {}
		this.single_back_ui.context_menu = []
		this.single_back_ui.views = {}
		this.single_back_ui.onChangecomponent = new EventEmitter<any>()
		this.single_back_ui.show = true
		this.single_back_ui.dynamic_param = {}
		this.single_back_ui.f_single_back_ui = {"show":true}
		this.single_back_ui.current_view = "f_single_back_ui"
		
		// "Back" Button of "Single Back UI" component
		this.single_back_ui_back.label_name = "Back"
		this.single_back_ui_back.show = true
		this.single_back_ui_back.disabled = false
		this.single_back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.single_back_ui_back.dynamic_param = {}
		this.single_back_ui_back.role = []
		this.single_back_ui_back.action = ""
	
		// Component level properties - "Response UI" 
		this.response_ui.uictrl_code = "dynamic_ui"
		this.response_ui.uicgc_desc = "Response UI"
		this.response_ui.uicgc_code = "uicgc_18"
		this.response_ui.params = {}
		this.response_ui.datasource = {}
		this.response_ui.context_menu = []
		this.response_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Response UI","tab_order":0,"tab_name":"","uicgc_description":"Response UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.response_ui.onChangecomponent = new EventEmitter<any>()
		this.response_ui.show = true
		this.response_ui.dynamic_param = {}
		this.response_ui.f_npss_target_response_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.response_ui.form_name = "f_npss_target_response_ui"
	
		// Component level properties - "Original Transaction Details" 
		this.original_transaction_details.uictrl_code = "datatable"
		this.original_transaction_details.uicgc_desc = "Original Transaction Details"
		this.original_transaction_details.uicgc_code = "uicgc_19"
		this.original_transaction_details.params = {"need_search":"N","need_pag_datatable":"N","need_vertical":"Y"}
		this.original_transaction_details.datasource = {"e_1675144601561":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"E_1675144601561","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1675144852048","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS MI FH Org Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1675143066246","date_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1675143066396","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1675143066572","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1675143066748","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1675143066884","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1675143067052","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1675143067212","date_format":false,"currency_format":true},{"column_name":"CHARGE_AMOUNT","alias_name":"","mq_id":"MQ_1675143067380","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1675143067548","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1675143132300","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1675143132923","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1675143133107","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1675143133251","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1675143157635","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1675143157795","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1675143157947","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1675143158115","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1675143203387","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1675143203547","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1691585554296","date_format":true}],"joins":[]},"eq_text":"select  DISPUTE_REF_NO,  NPSST_ID,  TNPSST_ID,  VALUE_DATE,  CDTR_IBAN,  CDTR_ACCT_NAME,  PROCESS_REF_NO,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  VALUEDATEMI,  INTRBK_STTLM_AMNT,  CHARGE_AMOUNT,  INTRBK_STTLM_CUR,  DBTR_IBAN,  DBTR_ACCT_NAME,  BANK_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  UETR,  STATUS,  PROCESS_STATUS,  DATEMI,  DEPARTMENT_CODE from  (  select   NT.DISPUTE_REF_NO,   NT.NPSST_ID,   NT.VALUE_DATE,   NT.CDTR_IBAN,   NT.CDTR_ACCT_NAME,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.DBTR_IBAN,   NT.DBTR_ACCT_NAME,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   TO_CHAR(NT.VALUE_DATE,   'YYYY-MM-DD') as VALUEDATEMI,   NT.CR_ACCT_IDENTIFICATION,   NT.DBTR_ACCT_NO,   CMB.BANK_NAME,   NTPL.PROCESS_REF_NO,   NTPL.CHARGE_AMOUNT,   NT.UETR,   NTPL.STATUS,   NTPL.PROCESS_STATUS,   TO_CHAR(NT.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.NPSST_ID::text as TNPSST_ID  from   <TRAN_DB>.NPSS_TRANSACTIONS NT  inner join CORE_MEMBER_BANKS CMB on   NT.DR_SORT_CODE = CMB.BIC_CODE   and CMB.NEED_SYNC = 'Y'  left join <TRAN_DB>.NPSS_TRN_PROCESS_LOG NTPL on   NT.UETR = NTPL.UETR) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS MI FH Org Tran MQ CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_RULE_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Txn Value Date","target_column":"VALUEDATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"CR Account Number","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Core System Ref Number","target_column":"PROCESS_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref Number","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference Number","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Amount AED","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Txn Charges AED","target_column":"CHARGE_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Txn Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payer Account Number","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payer Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payee Bank Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Paying Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1672490155998":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"E_1672490155998","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1675144805481","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS MI Org Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1672487132737","date_format":true,"currency_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1672487138763","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1672487138947","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1672487139122","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1672487139275","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1672487139418","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1672487139579","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1672487166827","date_format":false,"currency_format":true},{"column_name":"CHARGE_AMOUNT","alias_name":"","mq_id":"MQ_1672487166995","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1672487168547","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1672487168722","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1672487194875","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1672487200627","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1672637884230","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1672637884691","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1672637885155","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1672637885611","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1672638195896","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1674646364875","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1674646365059","date_format":false},{"column_name":"EXCHANGE_RATE","alias_name":"","mq_id":"MQ_1678187078590","date_format":false},{"column_name":"gm_margin","alias_name":"","mq_id":"MQ_1678187078765","date_format":false},{"column_name":"tran_charge","alias_name":"","mq_id":"MQ_1678367752182","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1691585337500","date_format":true},{"column_name":"fx_Resv_text2","alias_name":"","mq_id":"MQ_1716209302421","date_format":false},{"column_name":"org_pay_endtoend_id","alias_name":"","mq_id":"MQ_1716209311476","date_format":false},{"column_name":"fx_resv_text4","alias_name":"","mq_id":"MQ_1716209321356","date_format":true},{"column_name":"additional_info","alias_name":"","mq_id":"MQ_1716209821501","date_format":false}],"joins":[]},"eq_text":"select  DISPUTE_REF_NO,  NPSST_ID,  TNPSST_ID,  VALUE_DATE,  CDTR_IBAN,  CDTR_ACCT_NAME,  CURRENCY,  PROCESS_REF_NO,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  INTRBK_STTLM_AMNT,  CHARGE_AMOUNT,  INTRBK_STTLM_CUR,  DBTR_IBAN,  DBTR_ACCT_NAME,  BANK_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  VALUEDATEMI,  FN_CARD_DECRYPT_AND_MASK_RPT(CR_ACCT_IDENTIFICATION) as CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  UETR,  STATUS,  PROCESS_STATUS,  DATEMI,  DEPARTMENT_CODE,  GM_MARGIN,  EXCHANGE_RATE,  TRAN_CHARGE,  fx_Resv_text2,  org_pay_endtoend_id,  fx_resv_text4,  additional_info from  (  select   NT.DISPUTE_REF_NO,   NT.NPSST_ID,   NT.VALUE_DATE,   NT.CDTR_IBAN,   NT.CDTR_ACCT_NAME,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.DBTR_IBAN,   NT.DBTR_ACCT_NAME,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.DBTR_ACCT_NO,   CNCA.CURRENCY,   CMB.BANK_NAME,   TO_CHAR(NT.VALUE_DATE,   'YYYY-MM-DD') as VALUEDATEMI,   NTPL.PROCESS_REF_NO,   NTPL.CHARGE_AMOUNT,   NT.UETR,   NTPL.STATUS,   NTPL.PROCESS_STATUS,   TO_CHAR(NT.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.NPSST_ID::text as TNPSST_ID,   PL.EXCHANGE_RATE,   PL.GM_MARGIN,   NT.TRAN_CHARGE,   NT.CR_ACCT_IDENTIFICATION,   NT.fx_Resv_text2,   NT.org_pay_endtoend_id,   NT.fx_resv_text4,   NTP.additional_info  from   <TRAN_DB>.NPSS_TRANSACTIONS NT  left join CORE_NC_CBS_ACCOUNTS CNCA on   NT.CDTR_IBAN = CNCA.ALTERNATE_ACCOUNT_ID  inner join CORE_MEMBER_BANKS CMB on   NT.DR_SORT_CODE = CMB.BIC_CODE   and CMB.NEED_SYNC = 'Y'  left join <TRAN_DB>.NPSS_TRN_PROCESS_LOG NTPL on   NT.UETR = NTPL.UETR  left join <TRAN_DB>.NPSS_TRN_PROCESS_LOG NTP on   NT.UETR = NTP.UETR   and NTP.PROCESS_NAME = 'Initiate Dispute Tran'  left join <TRAN_DB>.NPSS_TRN_PROCESS_LOG PL on   NT.UETR = PL.UETR   and PL.STATUS = 'IP_RCT_DEAL_RECEIVED'   and PL.PROCESS_NAME = 'Get Deal') V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS MI Org Tran CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_RULE_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Txn Value Date","target_column":"VALUEDATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Original CR Account Number","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account/Card Number","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Currency","target_column":"CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Core System Ref Number (T24/Elpaso/FD)","target_column":"PROCESS_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Clearing Sys Ref Number","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original E2E reference Number","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Txn Amount AED","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Orignal Txn Charges AED","target_column":"CHARGE_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Original Sell Rate","target_column":"EXCHANGE_RATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Sell Spread","target_column":"gm_margin","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Txn Amount (Account Currency)","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Txn Charges (Account Currency)","target_column":"tran_charge","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Payer Account Number","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Payer Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Paying Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.original_transaction_details.context_menu = []
		this.original_transaction_details.views = {}
		this.original_transaction_details.onChangecomponent = new EventEmitter<any>()
		this.original_transaction_details.show = true
		this.original_transaction_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Payment Processing Details" 
		this.payment_processing_details.uictrl_code = "datatable"
		this.payment_processing_details.uicgc_desc = "Payment Processing Details"
		this.payment_processing_details.uicgc_code = "uicgc_20"
		this.payment_processing_details.params = {"need_pag_datatable":"N","need_search":"N","need_vertical":"Y"}
		this.payment_processing_details.datasource = {"e_1675144659777":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"E_1675144659777","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1675145025455","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS MI FH Process Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1675143336680","date_format":true},{"column_name":"DBTRIBAN","alias_name":"","mq_id":"MQ_1675143336984","date_format":false},{"column_name":"DBTRACCTNAME","alias_name":"","mq_id":"MQ_1675143337144","date_format":false},{"column_name":"DRSORTCODE","alias_name":"","mq_id":"MQ_1675143337464","date_format":false},{"column_name":"CDTRIBAN","alias_name":"","mq_id":"MQ_1675143337608","date_format":false},{"column_name":"CDTRACCTNAME","alias_name":"","mq_id":"MQ_1675143337776","date_format":false},{"column_name":"CRSORTCODE","alias_name":"","mq_id":"MQ_1675143413759","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1675143413903","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1675144150062","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1691586126237","date_format":true}],"joins":[]},"eq_text":"select  NPSST_ID,  TNPSST_ID,  VALUE_DATE,  DBTRIBAN,  DBTRACCTNAME,  DRSORTCODE,  CLRSYSREF,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  PAYMENT_ENDTOEND_ID,  CDTRIBAN,  CDTRACCTNAME,  CRSORTCODE,  BANK_NAME,  VALUEDATEMI from  (  select   NT.NPSST_ID,   NT.VALUE_DATE,   NT.CDTR_IBAN as DBTRIBAN,   NT.CDTR_ACCT_NAME as DBTRACCTNAME,   NT.CR_SORT_CODE as DRSORTCODE,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.DBTR_IBAN as CDTRIBAN,   NT.DBTR_ACCT_NAME as CDTRACCTNAME,   NT.DR_SORT_CODE as CRSORTCODE,   TO_CHAR(NT.VALUE_DATE,   'YYYY-MM-DD') as VALUEDATEMI,   NT.CR_ACCT_IDENTIFICATION,   NT.DBTR_ACCT_NO,   CMB.BANK_NAME,   NT.NPSST_ID::text as TNPSST_ID  from   <TRAN_DB>.NPSS_TRANSACTIONS NT  inner join CORE_MEMBER_BANKS CMB on   NT.DR_SORT_CODE = CMB.BIC_CODE   and CMB.NEED_SYNC = 'Y') V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS MI FH Process Tran MQ CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Txn Value Date","target_column":"VALUEDATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"DR Account number","target_column":"DBTRIBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR Account Name","target_column":"DBTRACCTNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR Bank BIC","target_column":"DRSORTCODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Account Number","target_column":"CDTRIBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Account Name","target_column":"CDTRACCTNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Bank Bic","target_column":"CRSORTCODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original E2E ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1672490213838":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"E_1672490213838","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1675145021503","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Initiation MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1679508668437","date_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1679508668587","date_format":false},{"column_name":"DBTRACCTNAME","alias_name":"","mq_id":"MQ_1679508668731","date_format":false},{"column_name":"DRSORTCODE","alias_name":"","mq_id":"MQ_1679508668891","date_format":false},{"column_name":"CUSTOMER_POSTING_RESTRICTION_CODE","alias_name":"","mq_id":"MQ_1679508669037","date_format":false},{"column_name":"CUSTOMER_POSTING_RESTRICTION_DESCRIPTION","alias_name":"","mq_id":"MQ_1679508669197","date_format":false},{"column_name":"ACCOUNT_NUMBER","alias_name":"","mq_id":"MQ_1679508669341","date_format":false},{"column_name":"ACCOUNT_NAME","alias_name":"","mq_id":"MQ_1679508669501","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1679508669693","date_format":false},{"column_name":"CDTRACCTNAME","alias_name":"","mq_id":"MQ_1679508669837","date_format":false},{"column_name":"CRSORTCODE","alias_name":"","mq_id":"MQ_1679508904192","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1679508904344","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1679508904512","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1679508928063","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1679508928239","date_format":false},{"column_name":"restriction_desc","alias_name":"","mq_id":"MQ_1679508928407","date_format":false},{"column_name":"POSTING_RESTRICTION_CODE","alias_name":"","mq_id":"MQ_1679508928567","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1679508962372","date_format":false},{"column_name":"DBTRIBAN","alias_name":"","mq_id":"MQ_1679509875193","date_format":false},{"column_name":"CDTRIBAN","alias_name":"","mq_id":"MQ_1679509885672","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1687512178774","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1691585957134","date_format":true},{"column_name":"org_pay_endtoend_id","alias_name":"","mq_id":"MQ_1716208466161","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  TNPSST_ID,  VALUE_DATE,  CDTR_IBAN,  DBTRACCTNAME,  DRSORTCODE,  CLRSYSREF,  fn_card_decrypt_and_mask_rpt(CR_ACCT_IDENTIFICATION) as CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  PAYMENT_ENDTOEND_ID,  CDTRIBAN,  CDTRACCTNAME,  CRSORTCODE,  VALUEDATEMI,  BANK_NAME,  CUSTOMER_POSTING_RESTRICTION_CODE,  CUSTOMER_POSTING_RESTRICTION_DESCRIPTION,  ACCOUNT_NUMBER,  ACCOUNT_NAME,  RESTRICTION_DESC,  POSTING_RESTRICTION_CODE,  INTRBK_STTLM_CUR,  ACCOUNT_CURRENCY,  FORCE_POST_FLAG,  org_pay_endtoend_id from  (  select   NT.NPSST_ID,   NT.VALUE_DATE,   NT.CDTR_IBAN,   TO_CHAR(NT.VALUE_DATE,   'YYYY-MM-DD') as VALUEDATEMI,   NT.CDTR_ACCT_NAME as DBTRACCTNAME,   NT.CR_SORT_CODE as DRSORTCODE,   NT.CLRSYSREF,   NT.INTRBK_STTLM_CUR,   NT.PAYMENT_ENDTOEND_ID,   NT.DBTR_IBAN as CDTRIBAN,   NT.DBTR_ACCT_NAME as CDTRACCTNAME,   NT.DR_SORT_CODE as CRSORTCODE,   NT.DBTR_ACCT_NO,   NT.ACCOUNT_CURRENCY,   CNCA.CUSTOMER_POSTING_RESTRICTION_DESCRIPTION,   CNCA.CUSTOMER_POSTING_RESTRICTION_CODE,   NT.CR_ACCT_IDENTIFICATION,   case    when CNCA.ALTERNATE_ACCOUNT_TYPE in ('VA.IBAN', 'VA.BBAN') then CNCA.ACCOUNT_NUMBER    else null   end as ACCOUNT_NUMBER,   case    when CNCA.ALTERNATE_ACCOUNT_TYPE in ('VA.IBAN', 'VA.BBAN') then CNCA.ACCOUNT_NAME    else null   end as ACCOUNT_NAME,   NT.org_pay_endtoend_id,   CNCA.POSTING_RESTRICTION_CODE,   CMB.BANK_NAME,   NT.NPSST_ID::text as TNPSST_ID,   CNCPR.RESTRICTION_ID,   CNCPR.RESTRICTION_DESC,   NT.FORCE_POST_FLAG  from   <TRAN_DB>.NPSS_TRANSACTIONS NT  left join CORE_NC_CBS_ACCOUNTS CNCA on   NT.CDTR_IBAN = CNCA.ALTERNATE_ACCOUNT_ID  inner join CORE_MEMBER_BANKS CMB on   NT.DR_SORT_CODE = CMB.BIC_CODE   and CMB.NEED_SYNC = 'Y'  left join CORE_NC_POST_RESTRICTIONS CNCPR on   CNCPR.RESTRICTION_ID = CNCA.POSTING_RESTRICTION_CODE) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Initiation CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Txn Value Date","target_column":"VALUEDATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"DR Account Number","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account/Card Number","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR Account Name","target_column":"DBTRACCTNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Posting restriction code","target_column":"POSTING_RESTRICTION_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Posting restriction description","target_column":"restriction_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Real Account No","target_column":"ACCOUNT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Real Account Name","target_column":"ACCOUNT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Account Number","target_column":"CDTRIBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Account Name","target_column":"CDTRACCTNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Bank Bic","target_column":"CRSORTCODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original E2E ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.payment_processing_details.context_menu = []
		this.payment_processing_details.views = {}
		this.payment_processing_details.onChangecomponent = new EventEmitter<any>()
		this.payment_processing_details.show = true
		this.payment_processing_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Payment Processing Details UI" 
		this.payment_processing_details_ui.uictrl_code = "dynamic_ui"
		this.payment_processing_details_ui.uicgc_desc = "Payment Processing Details UI"
		this.payment_processing_details_ui.uicgc_code = "uicgc_21"
		this.payment_processing_details_ui.params = {}
		this.payment_processing_details_ui.datasource = {}
		this.payment_processing_details_ui.context_menu = []
		this.payment_processing_details_ui.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Manual initiation UI","tab_order":0,"tab_name":"","uicgc_description":"Payment Processing Details UI","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.payment_processing_details_ui.onChangecomponent = new EventEmitter<any>()
		this.payment_processing_details_ui.show = true
		this.payment_processing_details_ui.dynamic_param = {}
		this.payment_processing_details_ui.f_npss_manual_initiation_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.payment_processing_details_ui.form_name = "f_npss_manual_initiation_ui"
		
		// "Back" Button of "Payment Processing Details UI" component
		this.payment_processing_details_ui_back.label_name = "Back"
		this.payment_processing_details_ui_back.show = true
		this.payment_processing_details_ui_back.disabled = false
		this.payment_processing_details_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.payment_processing_details_ui_back.dynamic_param = {}
		this.payment_processing_details_ui_back.role = []
		this.payment_processing_details_ui_back.action = ""
		
		// "Save" Button of "Payment Processing Details UI" component
		this.payment_processing_details_ui_save.label_name = "Save"
		this.payment_processing_details_ui_save.show = true
		this.payment_processing_details_ui_save.disabled = false
		this.payment_processing_details_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.payment_processing_details_ui_save.dynamic_param = {}
		this.payment_processing_details_ui_save.role = []
		this.payment_processing_details_ui_save.action = ""
		
		// "Get Deal" Button of "Payment Processing Details UI" component
		this.payment_processing_details_ui_get_deal.label_name = "Get Deal"
		this.payment_processing_details_ui_get_deal.show = true
		this.payment_processing_details_ui_get_deal.disabled = false
		this.payment_processing_details_ui_get_deal.params = {"icon_only":false,"uicgcc_style":"fa fa-dollar"}
		this.payment_processing_details_ui_get_deal.dynamic_param = {}
		this.payment_processing_details_ui_get_deal.role = []
		this.payment_processing_details_ui_get_deal.action = ""
	
		// Component level properties - "Search Info UI" 
		this.search_info_ui.uictrl_code = "dynamic_form_search"
		this.search_info_ui.uicgc_desc = "Search Info UI"
		this.search_info_ui.uicgc_code = "uicgc_22"
		this.search_info_ui.params = {}
		this.search_info_ui.datasource = {}
		this.search_info_ui.context_menu = []
		this.search_info_ui.views = {}
		this.search_info_ui.onChangecomponent = new EventEmitter<any>()
		this.search_info_ui.show = true
		this.search_info_ui.dynamic_param = {}
	
		// Component level properties - "Get Usable Balance Widget" 
		this.get_usable_balance_widget.uictrl_code = "custom_widget"
		this.get_usable_balance_widget.uicgc_desc = "Get Usable Balance Widget"
		this.get_usable_balance_widget.uicgc_code = "uicgc_23"
		this.get_usable_balance_widget.params = {}
		this.get_usable_balance_widget.datasource = {}
		this.get_usable_balance_widget.context_menu = []
		this.get_usable_balance_widget.views = {}
		this.get_usable_balance_widget.onChangecomponent = new EventEmitter<any>()
		this.get_usable_balance_widget.show = true
		this.get_usable_balance_widget.dynamic_param = {}
	
		// Component level properties - "Get Deal UI" 
		this.get_deal_ui.uictrl_code = "dynamic_ui"
		this.get_deal_ui.uicgc_desc = "Get Deal UI"
		this.get_deal_ui.uicgc_code = "uicgc_24"
		this.get_deal_ui.params = {}
		this.get_deal_ui.datasource = {}
		this.get_deal_ui.context_menu = []
		this.get_deal_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS MI Get Deal UI","tab_order":0,"tab_name":"","uicgc_description":"Get Deal UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.get_deal_ui.onChangecomponent = new EventEmitter<any>()
		this.get_deal_ui.show = true
		this.get_deal_ui.dynamic_param = {}
		this.get_deal_ui.f_npss_mi_get_deal_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.get_deal_ui.form_name = "f_npss_mi_get_deal_ui"
	
		// Component level properties - "Sell Margin Rate UI" 
		this.sell_margin_rate_ui.uictrl_code = "dynamic_ui"
		this.sell_margin_rate_ui.uicgc_desc = "Sell Margin Rate UI"
		this.sell_margin_rate_ui.uicgc_code = "uicgc_25"
		this.sell_margin_rate_ui.params = {}
		this.sell_margin_rate_ui.datasource = {}
		this.sell_margin_rate_ui.context_menu = []
		this.sell_margin_rate_ui.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"Sell Control UICG","tab_order":0,"tab_name":"","uicgc_description":"Sell Margin Rate UI","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.sell_margin_rate_ui.onChangecomponent = new EventEmitter<any>()
		this.sell_margin_rate_ui.show = true
		this.sell_margin_rate_ui.dynamic_param = {}
		this.sell_margin_rate_ui.f_sell_control_uicg = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.sell_margin_rate_ui.form_name = "f_sell_control_uicg"
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__he_from_pg_to_view_details()
		this.page_load__cf_for_routing_key()
		this.page_load__he_for_pl_to_vm()
		this.page_load__de_for_initiate()
		this.page_load__e_1681970961613()
		this.page_load__he_for_sell_rate_ui()
		this.page_load__e_1688364440874()
		this.page_load__e_1688364501971()
	}

	//Handler for INTERNAL event of "cf for routing key"
	cf_for_routing_key__internal(parent_event_result){
		this.cf_for_routing_key__cf_for_pageload(parent_event_result)
	}

	//Handler for INTERNAL event of "cf for pageload"
	cf_for_pageload__internal(){
		this.cf_for_pageload__cc_for_show_hide_btn()
	}

	//Handler for INTERNAL event of "cc for show hide btn"
	cc_for_show_hide_btn__internal(parent_event_result){
		this.cc_for_show_hide_btn__tbc_for_search_in_pl(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__cu_for_pl()
		this.search_search__cu_for_tl()
		this.search_search__de_from_search_to_view_log_hst()
		this.search_search__de_from_search_to_view_message_details()
		this.search_search__validate_ele()
	}

	//Handler for INTERNAL event of "validate ele"
	validate_ele__internal(parent_event_result){
		this.validate_ele__ssp_for_search(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for search"
	ssp_for_search__internal(parent_event_result){
		this.ssp_for_search__brfq_for_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for queue"
	brfq_for_queue__internal(parent_event_result){
		this.brfq_for_queue__cp_after_search(parent_event_result)
		this.brfq_for_queue__e_1679058425774(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_for_queue()
	}

	//Handler for INTERNAL event of "svm for queue"
	svm_for_queue__internal(parent_event_result){
		this.svm_for_queue__cc_for_queue(parent_event_result)
		this.svm_for_queue__cc_for_set_rule_value_ude(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for queue"
	cc_for_queue__internal(parent_event_result){
		this.cc_for_queue__ssp_for_transaction_list(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for transaction list"
	ssp_for_transaction_list__internal(parent_event_result){
		this.ssp_for_transaction_list__brfq_from_queue_to_tran_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq from queue to tran list"
	brfq_from_queue_to_tran_list__internal(parent_event_result){
		this.brfq_from_queue_to_tran_list__sfr_for_tran_list_from__queue(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_for_tl()
		this.transaction_list__ee_for_back_in_vertical_tran()
		this.transaction_list__ee_for_tran_to_vd()
		this.transaction_list__ee_for_vlh()
		this.transaction_list__ee_for_vm()
		this.transaction_list__ee_for_initiate()
		this.transaction_list__e_1681970993373()
	}

	//Handler for INTERNAL event of "svm for tl"
	svm_for_tl__internal(parent_event_result){
		this.svm_for_tl__cc_for_show_hide_on_tran_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__action_button_click(){
		this.navigation_ui_search__spap_for_search()
		this.navigation_ui_search__cu_for_seach()
	}

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__action_button_click(){
		this.search_clear__cu_for_search()
	}

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__selection_changed(){
		this.process_log_list__svm_for_pl()
	}

	//Handler for INTERNAL event of "svm for pl"
	svm_for_pl__internal(parent_event_result){
		this.svm_for_pl__cc_for_tl(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for tl"
	cc_for_tl__internal(parent_event_result){
		this.cc_for_tl__brfq_for_tl(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for tl"
	brfq_for_tl__internal(parent_event_result){
		this.brfq_for_tl__sfr_for_tl(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__action_button_click(peventcontext){
		if(!peventcontext) { 
 			peventcontext = this.navigation_ui_initiate__sec_for_initiate_process()
		 }
		this.navigation_ui_initiate__brfq_for_fab_otd(peventcontext)
		this.navigation_ui_initiate__brfq_for_fab_ppd(peventcontext)
		this.navigation_ui_initiate__brfq_for_fh_otd(peventcontext)
		this.navigation_ui_initiate__brfq_for_fh_ppd(peventcontext)
		this.navigation_ui_initiate__cc_for_get_usable_balance_ide()
		this.navigation_ui_initiate__de_for_get_deal_ui()
		this.navigation_ui_initiate__e_1681971027551()
		this.navigation_ui_initiate__e_1681467635518__payment_processing_details_ui()
		this.navigation_ui_initiate__e_1681467714443__payment_processing_details_ui()
		this.navigation_ui_initiate__e_1685338706847__payment_processing_details_ui()
	}

	//Handler for INTERNAL event of "brfq for fab ppd"
	brfq_for_fab_ppd__internal(parent_event_result){
		this.brfq_for_fab_ppd__sfr_for_ppd_list(parent_event_result)
		this.brfq_for_fab_ppd__sp_for_fab(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for fab otd"
	brfq_for_fab_otd__internal(parent_event_result){
		this.brfq_for_fab_otd__sfr_for_otd_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for fh otd"
	brfq_for_fh_otd__internal(parent_event_result){
		this.brfq_for_fh_otd__sfr_for_fh_otd_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for fh ppd"
	brfq_for_fh_ppd__internal(parent_event_result){
		this.brfq_for_fh_ppd__sfr_for_fh_ppd_list(parent_event_result)
		this.brfq_for_fh_ppd__sp_for_fh(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__action_button_click(){
		this.navigation_ui_view_tran__brfq_for_vertical_tran_detail()
		this.navigation_ui_view_tran__sp_for_view_detail()
		this.navigation_ui_view_tran__brfq_for_vptdl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_back_from_main()
	}

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__action_button_click(){
		this.single_back_ui_back__sp_for_sb_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__action_button_click(){
		this.message_back_ui_back__sp_for_mb_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__action_button_click(){
		this.message_detail_action_back__sp_for_mda_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__action_button_click(){
		this.process_log_ui_back__sp_for_pl_back()
	}

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__selection_changed(){
		this.history_detail__ssr_for_req()
		this.history_detail__ssr_for_res()
		this.history_detail__ee_for_res()
		this.history_detail__ee_for_req()
		this.history_detail__ee_for_vreq_and_vres()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view request"
	process_log_ui_view_request__action_button_click(){
		this.process_log_ui_view_request__bt_for_req()
		this.process_log_ui_view_request__sp_for_req()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view response"
	process_log_ui_view_response__action_button_click(){
		this.process_log_ui_view_response__bt_for_res()
		this.process_log_ui_view_response__sp_for_res()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view process log"
	navigation_ui_view_process_log__action_button_click(){
		this.navigation_ui_view_process_log__brfq_for_hd()
		this.navigation_ui_view_process_log__sp_for_vlh()
	}

	//Handler for INTERNAL event of "brfq for hd"
	brfq_for_hd__internal(parent_event_result){
		this.brfq_for_hd__sfr_for_hd(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message log"
	navigation_ui_view_message_log__action_button_click(){
		this.navigation_ui_view_message_log__sp_for_vmd()
		this.navigation_ui_view_message_log__brfq_for_vm()
	}

	//Handler for INTERNAL event of "brfq for vm"
	brfq_for_vm__internal(){
		this.brfq_for_vm__sfr_for_vm()
	}

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__selection_changed(){
		this.message_detail__ssr_for_md_ui()
		this.message_detail__ee_for_sm()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__action_button_click(){
		this.message_detail_action_view_message__bt_for_md_ui()
		this.message_detail_action_view_message__sp_for_view_message_data()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__action_button_click(){
		this.process_log_ui_view_req_and_res__sp_for_vreq_and_vres()
		this.process_log_ui_view_req_and_res__bt_req()
		this.process_log_ui_view_req_and_res__bt_for_res()
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment processing details ui save"
	payment_processing_details_ui_save__action_button_click(){
		this.payment_processing_details_ui_save__ve_for_save()
	}

	//Handler for INTERNAL event of "ve for save"
	ve_for_save__internal(parent_event_result){
		this.ve_for_save__customer_manual_ide(parent_event_result)
	}

	//Handler for INTERNAL event of "customer manual ide"
	customer_manual_ide__internal(parent_event_result){
		this.customer_manual_ide__info_save(parent_event_result)
	}

	//Handler for INTERNAL event of "info save"
	info_save__internal(){
		this.info_save__rs_for_save()
	}

	//Handler for SELECTION_CHANGED event of "original transaction details"
	original_transaction_details__selection_changed(){
		this.original_transaction_details__svm_for_otd_list()
		this.original_transaction_details__bvm_for_txn_charges_aed__payment_processing_details_ui()
		this.original_transaction_details__bvm_for_txn_currency__payment_processing_details_ui()
		this.original_transaction_details__bvm_for_dis_ref_no__payment_processing_details_ui()
		this.original_transaction_details__bvm_for_amount__payment_processing_details_ui()
	}

	//Handler for SELECTION_CHANGED event of "payment processing details"
	payment_processing_details__selection_changed(){
		this.payment_processing_details__svm_for_ppd_list()
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment processing details ui back"
	payment_processing_details_ui_back__action_button_click(){
		this.payment_processing_details_ui_back__rs_for_initate_back()
	}

	//Handler for ACTION_BUTTON_CLICK event of "payment processing details ui get deal"
	payment_processing_details_ui_get_deal__action_button_click(){
		this.payment_processing_details_ui_get_deal__cc_for_get_deal_btn()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__he_from_pg_to_view_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1669202881766"
		let event_params={"caller_name":"page_load__he_from_pg_to_view_details","event_desc":"HE from PG to View Details","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__cf_for_routing_key() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669390894947"
		let event_params={"caller_name":"page_load__cf_for_routing_key","event_desc":"CF for Routing key","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cf_for_routing_key__cf_for_pageload,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_change_routingkeyService.fn_torus_cs_change_routingkey(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_pl_to_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_message_log"
		let parent_source_id=""
		let event_code="e_1669460758377"
		let event_params={"caller_name":"page_load__he_for_pl_to_vm","event_desc":"HE for PL to VM","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__de_for_initiate() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_initiate"
		let parent_source_id=""
		let event_code="e_1674623955680"
		let event_params={"caller_name":"page_load__de_for_initiate","event_desc":"DE for initiate","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__e_1681970961613() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="sell_margin_rate_ui"
		let parent_source_id=""
		let event_code="e_1681970961613"
		let event_params={"caller_name":"page_load__e_1681970961613","event_desc":"E_1681970961613","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_for_sell_rate_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="sell_margin_rate_ui"
		let parent_source_id=""
		let event_code="e_1683023072196"
		let event_params={"caller_name":"page_load__he_for_sell_rate_ui","event_desc":"HE For Sell Rate UI","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__e_1688364440874() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="payment_processing_details_ui_get_deal"
		let parent_source_id=""
		let event_code="e_1688364440874"
		let event_params={"caller_name":"page_load__e_1688364440874","event_desc":"E_1688364440874","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__e_1688364501971() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="get_deal_ui"
		let parent_source_id=""
		let event_code="e_1688364501971"
		let event_params={"caller_name":"page_load__e_1688364501971","event_desc":"E_1688364501971","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for INTERNAL event of "cf for routing key"
	cf_for_routing_key__cf_for_pageload(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_for_routing_key"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1669390917963"
		let event_params={"caller_name":"cf_for_routing_key__cf_for_pageload","event_desc":"CF for Pageload","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""},"parent_event_result":"SUCCESS"}
		let handler_code="create_form"
		let internals="cf_for_pageload__cc_for_show_hide_btn,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cf for pageload"
	cf_for_pageload__cc_for_show_hide_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="cf_for_pageload"
		let destn_id=""
		let parent_source_id="cf_for_routing_key"
		let event_code="e_1669390931114"
		let event_params={"caller_name":"cf_for_pageload__cc_for_show_hide_btn","event_desc":"CC for Show hide btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_show_hide_btn__tbc_for_search_in_pl,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for show hide btn"
	cc_for_show_hide_btn__tbc_for_search_in_pl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_show_hide_btn"
		let destn_id="search_search"
		let parent_source_id="cf_for_pageload"
		let event_code="e_1670847835917"
		let event_params={"caller_name":"cc_for_show_hide_btn__tbc_for_search_in_pl","event_desc":"TBC for search in PL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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
	search_search__cu_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666858218728"
		let event_params={"caller_name":"search_search__cu_for_pl","event_desc":"CU for PL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
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
	search_search__cu_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1666879035223"
		let event_params={"caller_name":"search_search__cu_for_tl","event_desc":"CU for TL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491181877","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS NTPL AI Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1674562032536","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1674562038827","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1674562057475","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1674562062074","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1674562076291","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1674562085091","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1674562096226","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1674562107395","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1687524928600","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1687528367206","date_format":false},{"column_name":"CUST_SPLRATE_FLAG","alias_name":"","mq_id":"MQ_1689328998401","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  TRAN_INFO,  ACCOUNT_CURRENCY,  SELL_MARGIN,  SELL_RATE,  FORCE_POST_FLAG,  CUST_SPLRATE_FLAG FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.CR_ACCT_IDENTIFICATION,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.PROCESS_GROUP,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    CASE        WHEN A.DBTR_IBAN IS NULL THEN ''        ELSE A.DBTR_IBAN    END AS DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM,    A.TRAN_INFO,    A.ACCOUNT_CURRENCY,    A.SELL_MARGIN,    A.SELL_RATE,    A.FORCE_POST_FLAG,    A.CUST_SPLRATE_FLAG   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN <TRAN_DB>.TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS NTPL AI TRAN MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date  & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__de_from_search_to_view_log_hst() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1669460383535"
		let event_params={"caller_name":"search_search__de_from_search_to_view_log_hst","event_desc":"DE from search to View Log HST","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__de_from_search_to_view_message_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_ui_view_message_log"
		let parent_source_id=""
		let event_code="e_1669460479988"
		let event_params={"caller_name":"search_search__de_from_search_to_view_message_details","event_desc":"DE from search to View Message Details","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__validate_ele() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1672633883134"
		let event_params={"caller_name":"search_search__validate_ele","event_desc":"Validate Ele","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="validate_ele__ssp_for_search,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "validate ele"
	validate_ele__ssp_for_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="validate_ele"
		let destn_id="search"
		let parent_source_id="search_search"
		let event_code="e_1672633889966"
		let event_params={"caller_name":"validate_ele__ssp_for_search","event_desc":"SSP for search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_search__brfq_for_queue,"
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
	ssp_for_search__brfq_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_search"
		let destn_id="queue"
		let parent_source_id="validate_ele"
		let event_code="e_1672633899293"
		let event_params={"caller_name":"ssp_for_search__brfq_for_queue","event_desc":"BRFQ for Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_queue__cp_after_search,brfq_for_queue__e_1679058425774,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672490830459","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS NTPL AI QUEUE MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1674561426906","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1674561427160","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1674561437360","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   NT.CREATED_DATE,   NT.STATUS,   NT.PROCESS_STATUS,   NT.UETR,   NT.PROCESSING_SYSTEM,   NT.TENANT_ID,   NT.MODIFIED_DATE,   NT.MODIFIED_DATE_UTC,   NT.CREATED_BY,   NT.CREATED_BY_NAME,   NT.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NT.DEPARTMENT_CODE,   NT.PROCESS_GROUP,   NT.VALUE_DATE,   NT.DBTR_ACCT_NO,   NT.CDTR_ACCT_NO,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_AMNT,   NT.PROCESS_TYPE,   NT.DBTR_IBAN  from   <TRAN_DB>.NPSS_TRANSACTIONS NT  inner join CORE_Q_STATUS_ROLES QR on   NT.STATUS = QR.PROCESS_QUEUE_STATUS   and NT.PROCESS_STATUS = QR.QUEUE_CODE  inner join CORE_APP_Q_SETUP PQ on   NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS NTPL AI Queue MQ CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for queue"
	brfq_for_queue__cp_after_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_queue"
		let destn_id=""
		let parent_source_id="ssp_for_search"
		let event_code="e_1672640592719"
		let event_params={"popup_info":{"context":""},"caller_name":"brfq_for_queue__cp_after_search","event_desc":"CP after search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "brfq for queue"
	brfq_for_queue__e_1679058425774(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_queue"
		let destn_id="queue"
		let parent_source_id="ssp_for_search"
		let event_code="e_1679058425774"
		let event_params={"caller_name":"brfq_for_queue__e_1679058425774","event_desc":"E_1679058425774","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672490830459","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS NTPL AI QUEUE MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1674561426906","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1674561427160","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1674561437360","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   NT.CREATED_DATE,   NT.STATUS,   NT.PROCESS_STATUS,   NT.UETR,   NT.PROCESSING_SYSTEM,   NT.TENANT_ID,   NT.MODIFIED_DATE,   NT.MODIFIED_DATE_UTC,   NT.CREATED_BY,   NT.CREATED_BY_NAME,   NT.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NT.DEPARTMENT_CODE,   NT.PROCESS_GROUP,   NT.VALUE_DATE,   NT.DBTR_ACCT_NO,   NT.CDTR_ACCT_NO,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_AMNT,   NT.PROCESS_TYPE,   NT.DBTR_IBAN  from   <TRAN_DB>.NPSS_TRANSACTIONS NT  inner join CORE_Q_STATUS_ROLES QR on   NT.STATUS = QR.PROCESS_QUEUE_STATUS   and NT.PROCESS_STATUS = QR.QUEUE_CODE  inner join CORE_APP_Q_SETUP PQ on   NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS NTPL AI Queue MQ CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "queue"
	queue__svm_for_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="queue"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1666857327033"
		let event_params={"caller_name":"queue__svm_for_queue","event_desc":"SVM for Queue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_queue__cc_for_queue,svm_for_queue__cc_for_set_rule_value_ude,"
		let event_data={"queue":{"e_1666857327033":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1666857327033","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"BULK","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"PROCESSING_SYSTEM","level":"MI_LEVEL","name":"MI_LEVEL_PROCESSING_SYSTEM","setd3name":"PROCESSING_SYSTEM"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"},{"type":"HARDCODED","column_name":"MI PL STATUS","level":"MI_LEVEL","name":"MI_LEVEL_RULE","setd3name":"RULE"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672490830459","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS NTPL AI QUEUE MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1674561426906","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1674561427160","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1674561437360","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   NT.CREATED_DATE,   NT.STATUS,   NT.PROCESS_STATUS,   NT.UETR,   NT.PROCESSING_SYSTEM,   NT.TENANT_ID,   NT.MODIFIED_DATE,   NT.MODIFIED_DATE_UTC,   NT.CREATED_BY,   NT.CREATED_BY_NAME,   NT.SYSTEM_ID,   QR.ROLE_ID,   QR.VPH_APP_ID as QR_APP_ID,   QR.VPH_APP_CODE,   QR.QUEUE_CODE,   QR.SCREEN_NAME as QR_SCREEN_NAME,   QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,   QR.SCREEN_MODULE as QR_MODULE,   PQ.QUEUE_DESC,   PQ.QUEUE_CODE,   PQ.VPH_APP_ID as Q_APP_ID,   QR.SORT_ORDER as QS_SORT_ORDER,   PQ.SORT_ORDER as Q_SORT_ORDER,   NT.DEPARTMENT_CODE,   NT.PROCESS_GROUP,   NT.VALUE_DATE,   NT.DBTR_ACCT_NO,   NT.CDTR_ACCT_NO,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_AMNT,   NT.PROCESS_TYPE,   NT.DBTR_IBAN  from   <TRAN_DB>.NPSS_TRANSACTIONS NT  inner join CORE_Q_STATUS_ROLES QR on   NT.STATUS = QR.PROCESS_QUEUE_STATUS   and NT.PROCESS_STATUS = QR.QUEUE_CODE  inner join CORE_APP_Q_SETUP PQ on   NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS NTPL AI Queue MQ CCD","filter":[{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for queue"
	svm_for_queue__cc_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_queue"
		let destn_id=""
		let parent_source_id="queue"
		let event_code="e_1666857352025"
		let event_params={"caller_name":"svm_for_queue__cc_for_queue","event_desc":"CC for Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_queue__ssp_for_transaction_list,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for queue"
	svm_for_queue__cc_for_set_rule_value_ude(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_queue"
		let destn_id=""
		let parent_source_id="queue"
		let event_code="e_1672725032440"
		let event_params={"caller_name":"svm_for_queue__cc_for_set_rule_value_ude","event_desc":"CC for Set Rule Value UDE","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_set_rule_mi_paramService.fn_torus_cs_set_rule_mi_param(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for queue"
	cc_for_queue__ssp_for_transaction_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_queue"
		let destn_id="search"
		let parent_source_id="svm_for_queue"
		let event_code="e_1666857404145"
		let event_params={"caller_name":"cc_for_queue__ssp_for_transaction_list","event_desc":"SSP for Transaction list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_for_transaction_list__brfq_from_queue_to_tran_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp for transaction list"
	ssp_for_transaction_list__brfq_from_queue_to_tran_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_transaction_list"
		let destn_id="transaction_list"
		let parent_source_id="cc_for_queue"
		let event_code="e_1670657055215"
		let event_params={"caller_name":"ssp_for_transaction_list__brfq_from_queue_to_tran_list","event_desc":"BRFQ from Queue to Tran List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_from_queue_to_tran_list__sfr_for_tran_list_from__queue,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491181877","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS NTPL AI Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1674562032536","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1674562038827","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1674562057475","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1674562062074","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1674562076291","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1674562085091","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1674562096226","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1674562107395","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1687524928600","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1687528367206","date_format":false},{"column_name":"CUST_SPLRATE_FLAG","alias_name":"","mq_id":"MQ_1689328998401","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  TRAN_INFO,  ACCOUNT_CURRENCY,  SELL_MARGIN,  SELL_RATE,  FORCE_POST_FLAG,  CUST_SPLRATE_FLAG FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.CR_ACCT_IDENTIFICATION,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.PROCESS_GROUP,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    CASE        WHEN A.DBTR_IBAN IS NULL THEN ''        ELSE A.DBTR_IBAN    END AS DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM,    A.TRAN_INFO,    A.ACCOUNT_CURRENCY,    A.SELL_MARGIN,    A.SELL_RATE,    A.FORCE_POST_FLAG,    A.CUST_SPLRATE_FLAG   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN <TRAN_DB>.TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS NTPL AI TRAN MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date  & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq from queue to tran list"
	brfq_from_queue_to_tran_list__sfr_for_tran_list_from__queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_from_queue_to_tran_list"
		let destn_id="transaction_list"
		let parent_source_id="ssp_for_transaction_list"
		let event_code="e_1670657063611"
		let event_params={"caller_name":"brfq_from_queue_to_tran_list__sfr_for_tran_list_from__queue","event_desc":"SFR For Tran List from  Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491181877","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS NTPL AI Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1674562032536","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1674562038827","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1674562057475","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1674562062074","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1674562076291","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1674562085091","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1674562096226","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1674562107395","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1687524928600","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1687528367206","date_format":false},{"column_name":"CUST_SPLRATE_FLAG","alias_name":"","mq_id":"MQ_1689328998401","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  TRAN_INFO,  ACCOUNT_CURRENCY,  SELL_MARGIN,  SELL_RATE,  FORCE_POST_FLAG,  CUST_SPLRATE_FLAG FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.CR_ACCT_IDENTIFICATION,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.PROCESS_GROUP,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    CASE        WHEN A.DBTR_IBAN IS NULL THEN ''        ELSE A.DBTR_IBAN    END AS DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM,    A.TRAN_INFO,    A.ACCOUNT_CURRENCY,    A.SELL_MARGIN,    A.SELL_RATE,    A.FORCE_POST_FLAG,    A.CUST_SPLRATE_FLAG   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN <TRAN_DB>.TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS NTPL AI TRAN MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date  & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__svm_for_tl() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="transaction_list"
		let parent_source_id=""
		let event_code="e_1666857595507"
		let event_params={"caller_name":"transaction_list__svm_for_tl","event_desc":"SVM for TL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_tl__cc_for_show_hide_on_tran_list,"
		let event_data={"transaction_list":{"e_1666857595507":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1666857595507","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"},{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"},{"type":"LOCAL","column_name":"NPSSTPL_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSTPL_ID","setd3name":"NPSSTPL_ID"},{"type":"LOCAL","column_name":"CDTR_IBAN","level":"MI_LEVEL","name":"MI_LEVEL_CDTR_IBAN","setd3name":"CDTR_IBAN"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491181877","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS NTPL AI Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1674562032536","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1674562038827","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1674562057475","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1674562062074","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1674562076291","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1674562085091","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1674562096226","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1674562107395","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1687524928600","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1687528367206","date_format":false},{"column_name":"CUST_SPLRATE_FLAG","alias_name":"","mq_id":"MQ_1689328998401","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  TRAN_INFO,  ACCOUNT_CURRENCY,  SELL_MARGIN,  SELL_RATE,  FORCE_POST_FLAG,  CUST_SPLRATE_FLAG FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.CR_ACCT_IDENTIFICATION,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.PROCESS_GROUP,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    CASE        WHEN A.DBTR_IBAN IS NULL THEN ''        ELSE A.DBTR_IBAN    END AS DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM,    A.TRAN_INFO,    A.ACCOUNT_CURRENCY,    A.SELL_MARGIN,    A.SELL_RATE,    A.FORCE_POST_FLAG,    A.CUST_SPLRATE_FLAG   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN <TRAN_DB>.TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS NTPL AI TRAN MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date  & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_back_in_vertical_tran() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="back_ui_back"
		let parent_source_id=""
		let event_code="e_1669202699210"
		let event_params={"caller_name":"transaction_list__ee_for_back_in_vertical_tran","event_desc":"EE for Back in Vertical tran","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_tran_to_vd() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1669284184598"
		let event_params={"caller_name":"transaction_list__ee_for_tran_to_vd","event_desc":"EE for Tran to VD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_vlh() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1669460418078"
		let event_params={"caller_name":"transaction_list__ee_for_vlh","event_desc":"EE for VLH","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_message_log"
		let parent_source_id=""
		let event_code="e_1669460652921"
		let event_params={"caller_name":"transaction_list__ee_for_vm","event_desc":"EE For VM","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_initiate() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_initiate"
		let parent_source_id=""
		let event_code="e_1674623969987"
		let event_params={"caller_name":"transaction_list__ee_for_initiate","event_desc":"EE for initiate","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"Y","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__e_1681970993373() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="sell_margin_rate_ui"
		let parent_source_id=""
		let event_code="e_1681970993373"
		let event_params={"caller_name":"transaction_list__e_1681970993373","event_desc":"E_1681970993373","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
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

	//Handler for INTERNAL event of "svm for tl"
	svm_for_tl__cc_for_show_hide_on_tran_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_tl"
		let destn_id=""
		let parent_source_id="transaction_list"
		let event_code="e_1679064182507"
		let event_params={"caller_name":"svm_for_tl__cc_for_show_hide_on_tran_list","event_desc":"CC for Show Hide on Tran List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__spap_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666857782776"
		let event_params={"caller_name":"navigation_ui_search__spap_for_search","event_desc":"SPAP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1666856790983","window_title":"Search","window_height":500,"window_width":"550px","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1666857782776"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui search"
	navigation_ui_search__cu_for_seach() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1667298696365"
		let event_params={"caller_name":"navigation_ui_search__cu_for_seach","event_desc":"CU for seach","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "search clear"
	search_clear__cu_for_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_clear"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1666858398186"
		let event_params={"caller_name":"search_clear__cu_for_search","event_desc":"CU for search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for SELECTION_CHANGED event of "process log list"
	process_log_list__svm_for_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_list"
		let destn_id="process_log_list"
		let parent_source_id=""
		let event_code="e_1666862672351"
		let event_params={"caller_name":"process_log_list__svm_for_pl","event_desc":"SVM for PL","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_pl__cc_for_tl,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for pl"
	svm_for_pl__cc_for_tl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_pl"
		let destn_id=""
		let parent_source_id="process_log_list"
		let event_code="e_1668851034462"
		let event_params={"caller_name":"svm_for_pl__cc_for_tl","event_desc":"CC for TL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_tl__brfq_for_tl,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for tl"
	cc_for_tl__brfq_for_tl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_tl"
		let destn_id="transaction_list"
		let parent_source_id="svm_for_pl"
		let event_code="e_1668851123025"
		let event_params={"caller_name":"cc_for_tl__brfq_for_tl","event_desc":"BRFQ for TL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_tl__sfr_for_tl,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491181877","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS NTPL AI Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1674562032536","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1674562038827","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1674562057475","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1674562062074","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1674562076291","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1674562085091","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1674562096226","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1674562107395","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1687524928600","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1687528367206","date_format":false},{"column_name":"CUST_SPLRATE_FLAG","alias_name":"","mq_id":"MQ_1689328998401","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  TRAN_INFO,  ACCOUNT_CURRENCY,  SELL_MARGIN,  SELL_RATE,  FORCE_POST_FLAG,  CUST_SPLRATE_FLAG FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.CR_ACCT_IDENTIFICATION,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.PROCESS_GROUP,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    CASE        WHEN A.DBTR_IBAN IS NULL THEN ''        ELSE A.DBTR_IBAN    END AS DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM,    A.TRAN_INFO,    A.ACCOUNT_CURRENCY,    A.SELL_MARGIN,    A.SELL_RATE,    A.FORCE_POST_FLAG,    A.CUST_SPLRATE_FLAG   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN <TRAN_DB>.TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS NTPL AI TRAN MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date  & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for tl"
	brfq_for_tl__sfr_for_tl(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_tl"
		let destn_id="transaction_list"
		let parent_source_id="cc_for_tl"
		let event_code="e_1668851206501"
		let event_params={"caller_name":"brfq_for_tl__sfr_for_tl","event_desc":"SFR for TL","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491181877","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS NTPL AI Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1674562032536","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1674562038827","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1674562057475","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1674562062074","date_format":false,"currency_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1674562076291","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1674562085091","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1674562096226","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1674562107395","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1687524928600","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1687528367206","date_format":false},{"column_name":"CUST_SPLRATE_FLAG","alias_name":"","mq_id":"MQ_1689328998401","date_format":false}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  TRAN_INFO,  ACCOUNT_CURRENCY,  SELL_MARGIN,  SELL_RATE,  FORCE_POST_FLAG,  CUST_SPLRATE_FLAG FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.CR_ACCT_IDENTIFICATION,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.PROCESS_GROUP,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    CASE        WHEN A.DBTR_IBAN IS NULL THEN ''        ELSE A.DBTR_IBAN    END AS DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM,    A.TRAN_INFO,    A.ACCOUNT_CURRENCY,    A.SELL_MARGIN,    A.SELL_RATE,    A.FORCE_POST_FLAG,    A.CUST_SPLRATE_FLAG   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN <TRAN_DB>.TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS NTPL AI TRAN MQ CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date  & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Inward Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__sec_for_initiate_process() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_initiate"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1675144548026"
		let event_params={"caller_name":"navigation_ui_initiate__sec_for_initiate_process","event_desc":"SEC for Initiate Process","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{}}
		let handler_code="set_event_context"
		let internals=""
		let event_data={"navigation_ui_initiate":{"e_1675144548026":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGCC_16","event_code":"E_1675144548026","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[],"set_event_context":"Y","sec_value":{"type":"SESSION_LEVEL","value":"ROOT_SCODE"}}}}}}}}}
		let data_source={}
		try {
			return this.handler.set_event_context(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__brfq_for_fab_otd(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFAB"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="navigation_ui_initiate"
		let destn_id="original_transaction_details"
		let parent_source_id=""
		let event_code="e_1672490155998"
		let event_params={"caller_name":"navigation_ui_initiate__brfq_for_fab_otd","event_desc":"BRFQ for FAB OTD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFAB","root_source_id":"navigation_ui_initiate","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"eventcontext":["NPSS_AEFAB"]}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_fab_otd__sfr_for_otd_list,"
		let event_data={}
		let data_source={"e_1672490155998":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"E_1672490155998","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1675144805481","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS MI Org Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1672487132737","date_format":true,"currency_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1672487138763","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1672487138947","date_format":false},{"column_name":"CURRENCY","alias_name":"","mq_id":"MQ_1672487139122","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1672487139275","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1672487139418","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1672487139579","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1672487166827","date_format":false,"currency_format":true},{"column_name":"CHARGE_AMOUNT","alias_name":"","mq_id":"MQ_1672487166995","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1672487168547","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1672487168722","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1672487194875","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1672487200627","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1672637884230","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1672637884691","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1672637885155","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1672637885611","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1672638195896","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1674646364875","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1674646365059","date_format":false},{"column_name":"EXCHANGE_RATE","alias_name":"","mq_id":"MQ_1678187078590","date_format":false},{"column_name":"gm_margin","alias_name":"","mq_id":"MQ_1678187078765","date_format":false},{"column_name":"tran_charge","alias_name":"","mq_id":"MQ_1678367752182","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1691585337500","date_format":true},{"column_name":"fx_Resv_text2","alias_name":"","mq_id":"MQ_1716209302421","date_format":false},{"column_name":"org_pay_endtoend_id","alias_name":"","mq_id":"MQ_1716209311476","date_format":false},{"column_name":"fx_resv_text4","alias_name":"","mq_id":"MQ_1716209321356","date_format":true},{"column_name":"additional_info","alias_name":"","mq_id":"MQ_1716209821501","date_format":false}],"joins":[]},"eq_text":"select  DISPUTE_REF_NO,  NPSST_ID,  TNPSST_ID,  VALUE_DATE,  CDTR_IBAN,  CDTR_ACCT_NAME,  CURRENCY,  PROCESS_REF_NO,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  INTRBK_STTLM_AMNT,  CHARGE_AMOUNT,  INTRBK_STTLM_CUR,  DBTR_IBAN,  DBTR_ACCT_NAME,  BANK_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  VALUEDATEMI,  FN_CARD_DECRYPT_AND_MASK_RPT(CR_ACCT_IDENTIFICATION) as CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  UETR,  STATUS,  PROCESS_STATUS,  DATEMI,  DEPARTMENT_CODE,  GM_MARGIN,  EXCHANGE_RATE,  TRAN_CHARGE,  fx_Resv_text2,  org_pay_endtoend_id,  fx_resv_text4,  additional_info from  (  select   NT.DISPUTE_REF_NO,   NT.NPSST_ID,   NT.VALUE_DATE,   NT.CDTR_IBAN,   NT.CDTR_ACCT_NAME,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.DBTR_IBAN,   NT.DBTR_ACCT_NAME,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.DBTR_ACCT_NO,   CNCA.CURRENCY,   CMB.BANK_NAME,   TO_CHAR(NT.VALUE_DATE,   'YYYY-MM-DD') as VALUEDATEMI,   NTPL.PROCESS_REF_NO,   NTPL.CHARGE_AMOUNT,   NT.UETR,   NTPL.STATUS,   NTPL.PROCESS_STATUS,   TO_CHAR(NT.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.NPSST_ID::text as TNPSST_ID,   PL.EXCHANGE_RATE,   PL.GM_MARGIN,   NT.TRAN_CHARGE,   NT.CR_ACCT_IDENTIFICATION,   NT.fx_Resv_text2,   NT.org_pay_endtoend_id,   NT.fx_resv_text4,   NTP.additional_info  from   <TRAN_DB>.NPSS_TRANSACTIONS NT  left join CORE_NC_CBS_ACCOUNTS CNCA on   NT.CDTR_IBAN = CNCA.ALTERNATE_ACCOUNT_ID  inner join CORE_MEMBER_BANKS CMB on   NT.DR_SORT_CODE = CMB.BIC_CODE   and CMB.NEED_SYNC = 'Y'  left join <TRAN_DB>.NPSS_TRN_PROCESS_LOG NTPL on   NT.UETR = NTPL.UETR  left join <TRAN_DB>.NPSS_TRN_PROCESS_LOG NTP on   NT.UETR = NTP.UETR   and NTP.PROCESS_NAME = 'Initiate Dispute Tran'  left join <TRAN_DB>.NPSS_TRN_PROCESS_LOG PL on   NT.UETR = PL.UETR   and PL.STATUS = 'IP_RCT_DEAL_RECEIVED'   and PL.PROCESS_NAME = 'Get Deal') V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS MI Org Tran CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_RULE_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Txn Value Date","target_column":"VALUEDATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Original CR Account Number","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account/Card Number","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Currency","target_column":"CURRENCY","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Core System Ref Number (T24/Elpaso/FD)","target_column":"PROCESS_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Clearing Sys Ref Number","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original E2E reference Number","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Txn Amount AED","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Orignal Txn Charges AED","target_column":"CHARGE_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Original Sell Rate","target_column":"EXCHANGE_RATE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Sell Spread","target_column":"gm_margin","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Txn Amount (Account Currency)","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Txn Charges (Account Currency)","target_column":"tran_charge","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Payer Account Number","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Payer Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Paying Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__brfq_for_fab_ppd(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFAB"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="navigation_ui_initiate"
		let destn_id="payment_processing_details"
		let parent_source_id=""
		let event_code="e_1672490213838"
		let event_params={"caller_name":"navigation_ui_initiate__brfq_for_fab_ppd","event_desc":"BRFQ for FAB PPD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFAB","root_source_id":"navigation_ui_initiate","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"eventcontext":["NPSS_AEFAB"]}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_fab_ppd__sfr_for_ppd_list,brfq_for_fab_ppd__sp_for_fab,"
		let event_data={}
		let data_source={"e_1672490213838":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"E_1672490213838","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1675145021503","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Manual Initiation MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1679508668437","date_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1679508668587","date_format":false},{"column_name":"DBTRACCTNAME","alias_name":"","mq_id":"MQ_1679508668731","date_format":false},{"column_name":"DRSORTCODE","alias_name":"","mq_id":"MQ_1679508668891","date_format":false},{"column_name":"CUSTOMER_POSTING_RESTRICTION_CODE","alias_name":"","mq_id":"MQ_1679508669037","date_format":false},{"column_name":"CUSTOMER_POSTING_RESTRICTION_DESCRIPTION","alias_name":"","mq_id":"MQ_1679508669197","date_format":false},{"column_name":"ACCOUNT_NUMBER","alias_name":"","mq_id":"MQ_1679508669341","date_format":false},{"column_name":"ACCOUNT_NAME","alias_name":"","mq_id":"MQ_1679508669501","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1679508669693","date_format":false},{"column_name":"CDTRACCTNAME","alias_name":"","mq_id":"MQ_1679508669837","date_format":false},{"column_name":"CRSORTCODE","alias_name":"","mq_id":"MQ_1679508904192","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1679508904344","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1679508904512","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1679508928063","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1679508928239","date_format":false},{"column_name":"restriction_desc","alias_name":"","mq_id":"MQ_1679508928407","date_format":false},{"column_name":"POSTING_RESTRICTION_CODE","alias_name":"","mq_id":"MQ_1679508928567","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1679508962372","date_format":false},{"column_name":"DBTRIBAN","alias_name":"","mq_id":"MQ_1679509875193","date_format":false},{"column_name":"CDTRIBAN","alias_name":"","mq_id":"MQ_1679509885672","date_format":false},{"column_name":"force_post_flag","alias_name":"","mq_id":"MQ_1687512178774","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1691585957134","date_format":true},{"column_name":"org_pay_endtoend_id","alias_name":"","mq_id":"MQ_1716208466161","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  TNPSST_ID,  VALUE_DATE,  CDTR_IBAN,  DBTRACCTNAME,  DRSORTCODE,  CLRSYSREF,  fn_card_decrypt_and_mask_rpt(CR_ACCT_IDENTIFICATION) as CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  PAYMENT_ENDTOEND_ID,  CDTRIBAN,  CDTRACCTNAME,  CRSORTCODE,  VALUEDATEMI,  BANK_NAME,  CUSTOMER_POSTING_RESTRICTION_CODE,  CUSTOMER_POSTING_RESTRICTION_DESCRIPTION,  ACCOUNT_NUMBER,  ACCOUNT_NAME,  RESTRICTION_DESC,  POSTING_RESTRICTION_CODE,  INTRBK_STTLM_CUR,  ACCOUNT_CURRENCY,  FORCE_POST_FLAG,  org_pay_endtoend_id from  (  select   NT.NPSST_ID,   NT.VALUE_DATE,   NT.CDTR_IBAN,   TO_CHAR(NT.VALUE_DATE,   'YYYY-MM-DD') as VALUEDATEMI,   NT.CDTR_ACCT_NAME as DBTRACCTNAME,   NT.CR_SORT_CODE as DRSORTCODE,   NT.CLRSYSREF,   NT.INTRBK_STTLM_CUR,   NT.PAYMENT_ENDTOEND_ID,   NT.DBTR_IBAN as CDTRIBAN,   NT.DBTR_ACCT_NAME as CDTRACCTNAME,   NT.DR_SORT_CODE as CRSORTCODE,   NT.DBTR_ACCT_NO,   NT.ACCOUNT_CURRENCY,   CNCA.CUSTOMER_POSTING_RESTRICTION_DESCRIPTION,   CNCA.CUSTOMER_POSTING_RESTRICTION_CODE,   NT.CR_ACCT_IDENTIFICATION,   case    when CNCA.ALTERNATE_ACCOUNT_TYPE in ('VA.IBAN', 'VA.BBAN') then CNCA.ACCOUNT_NUMBER    else null   end as ACCOUNT_NUMBER,   case    when CNCA.ALTERNATE_ACCOUNT_TYPE in ('VA.IBAN', 'VA.BBAN') then CNCA.ACCOUNT_NAME    else null   end as ACCOUNT_NAME,   NT.org_pay_endtoend_id,   CNCA.POSTING_RESTRICTION_CODE,   CMB.BANK_NAME,   NT.NPSST_ID::text as TNPSST_ID,   CNCPR.RESTRICTION_ID,   CNCPR.RESTRICTION_DESC,   NT.FORCE_POST_FLAG  from   <TRAN_DB>.NPSS_TRANSACTIONS NT  left join CORE_NC_CBS_ACCOUNTS CNCA on   NT.CDTR_IBAN = CNCA.ALTERNATE_ACCOUNT_ID  inner join CORE_MEMBER_BANKS CMB on   NT.DR_SORT_CODE = CMB.BIC_CODE   and CMB.NEED_SYNC = 'Y'  left join CORE_NC_POST_RESTRICTIONS CNCPR on   CNCPR.RESTRICTION_ID = CNCA.POSTING_RESTRICTION_CODE) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Manual Initiation CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Txn Value Date","target_column":"VALUEDATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"DR Account Number","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account/Card Number","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR Account Name","target_column":"DBTRACCTNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Posting restriction code","target_column":"POSTING_RESTRICTION_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Posting restriction description","target_column":"restriction_desc","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Real Account No","target_column":"ACCOUNT_NUMBER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Real Account Name","target_column":"ACCOUNT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Account Number","target_column":"CDTRIBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Account Name","target_column":"CDTRACCTNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Bank Bic","target_column":"CRSORTCODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original E2E ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__brfq_for_fh_otd(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFIN"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="navigation_ui_initiate"
		let destn_id="original_transaction_details"
		let parent_source_id=""
		let event_code="e_1675144601561"
		let event_params={"caller_name":"navigation_ui_initiate__brfq_for_fh_otd","event_desc":"BRFQ for FH OTD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFIN","root_source_id":"navigation_ui_initiate","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"eventcontext":["NPSS_AEFIN"]}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_fh_otd__sfr_for_fh_otd_list,"
		let event_data={}
		let data_source={"e_1675144601561":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_19","event_code":"E_1675144601561","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1675144852048","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS MI FH Org Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1675143066246","date_format":true},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1675143066396","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1675143066572","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1675143066748","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1675143066884","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1675143067052","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1675143067212","date_format":false,"currency_format":true},{"column_name":"CHARGE_AMOUNT","alias_name":"","mq_id":"MQ_1675143067380","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1675143067548","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1675143132300","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1675143132923","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1675143133107","date_format":false},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1675143133251","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1675143157635","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1675143157795","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1675143157947","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1675143158115","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1675143203387","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1675143203547","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1691585554296","date_format":true}],"joins":[]},"eq_text":"select  DISPUTE_REF_NO,  NPSST_ID,  TNPSST_ID,  VALUE_DATE,  CDTR_IBAN,  CDTR_ACCT_NAME,  PROCESS_REF_NO,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  VALUEDATEMI,  INTRBK_STTLM_AMNT,  CHARGE_AMOUNT,  INTRBK_STTLM_CUR,  DBTR_IBAN,  DBTR_ACCT_NAME,  BANK_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  UETR,  STATUS,  PROCESS_STATUS,  DATEMI,  DEPARTMENT_CODE from  (  select   NT.DISPUTE_REF_NO,   NT.NPSST_ID,   NT.VALUE_DATE,   NT.CDTR_IBAN,   NT.CDTR_ACCT_NAME,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.DBTR_IBAN,   NT.DBTR_ACCT_NAME,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   TO_CHAR(NT.VALUE_DATE,   'YYYY-MM-DD') as VALUEDATEMI,   NT.CR_ACCT_IDENTIFICATION,   NT.DBTR_ACCT_NO,   CMB.BANK_NAME,   NTPL.PROCESS_REF_NO,   NTPL.CHARGE_AMOUNT,   NT.UETR,   NTPL.STATUS,   NTPL.PROCESS_STATUS,   TO_CHAR(NT.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.NPSST_ID::text as TNPSST_ID  from   <TRAN_DB>.NPSS_TRANSACTIONS NT  inner join CORE_MEMBER_BANKS CMB on   NT.DR_SORT_CODE = CMB.BIC_CODE   and CMB.NEED_SYNC = 'Y'  left join <TRAN_DB>.NPSS_TRN_PROCESS_LOG NTPL on   NT.UETR = NTPL.UETR) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS MI FH Org Tran MQ CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_RULE_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Txn Value Date","target_column":"VALUEDATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"CR Account Number","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Core System Ref Number","target_column":"PROCESS_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing Sys Ref Number","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference Number","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Amount AED","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Txn Charges AED","target_column":"CHARGE_AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Txn Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payer Account Number","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payer Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Payee Bank Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Paying Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__brfq_for_fh_ppd(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["NPSS_AEFIN"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="navigation_ui_initiate"
		let destn_id="payment_processing_details"
		let parent_source_id=""
		let event_code="e_1675144659777"
		let event_params={"caller_name":"navigation_ui_initiate__brfq_for_fh_ppd","event_desc":"BRFQ for FH PPD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"NPSS_AEFIN","root_source_id":"navigation_ui_initiate","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"eventcontext":["NPSS_AEFIN"]}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_fh_ppd__sfr_for_fh_ppd_list,brfq_for_fh_ppd__sp_for_fh,"
		let event_data={}
		let data_source={"e_1675144659777":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"E_1675144659777","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1675145025455","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS MI FH Process Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1675143336680","date_format":true},{"column_name":"DBTRIBAN","alias_name":"","mq_id":"MQ_1675143336984","date_format":false},{"column_name":"DBTRACCTNAME","alias_name":"","mq_id":"MQ_1675143337144","date_format":false},{"column_name":"DRSORTCODE","alias_name":"","mq_id":"MQ_1675143337464","date_format":false},{"column_name":"CDTRIBAN","alias_name":"","mq_id":"MQ_1675143337608","date_format":false},{"column_name":"CDTRACCTNAME","alias_name":"","mq_id":"MQ_1675143337776","date_format":false},{"column_name":"CRSORTCODE","alias_name":"","mq_id":"MQ_1675143413759","date_format":false},{"column_name":"BANK_NAME","alias_name":"","mq_id":"MQ_1675143413903","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1675144150062","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1691586126237","date_format":true}],"joins":[]},"eq_text":"select  NPSST_ID,  TNPSST_ID,  VALUE_DATE,  DBTRIBAN,  DBTRACCTNAME,  DRSORTCODE,  CLRSYSREF,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  PAYMENT_ENDTOEND_ID,  CDTRIBAN,  CDTRACCTNAME,  CRSORTCODE,  BANK_NAME,  VALUEDATEMI from  (  select   NT.NPSST_ID,   NT.VALUE_DATE,   NT.CDTR_IBAN as DBTRIBAN,   NT.CDTR_ACCT_NAME as DBTRACCTNAME,   NT.CR_SORT_CODE as DRSORTCODE,   NT.CLRSYSREF,   NT.PAYMENT_ENDTOEND_ID,   NT.DBTR_IBAN as CDTRIBAN,   NT.DBTR_ACCT_NAME as CDTRACCTNAME,   NT.DR_SORT_CODE as CRSORTCODE,   TO_CHAR(NT.VALUE_DATE,   'YYYY-MM-DD') as VALUEDATEMI,   NT.CR_ACCT_IDENTIFICATION,   NT.DBTR_ACCT_NO,   CMB.BANK_NAME,   NT.NPSST_ID::text as TNPSST_ID  from   <TRAN_DB>.NPSS_TRANSACTIONS NT  inner join CORE_MEMBER_BANKS CMB on   NT.DR_SORT_CODE = CMB.BIC_CODE   and CMB.NEED_SYNC = 'Y') V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS MI FH Process Tran MQ CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Txn Value Date","target_column":"VALUEDATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"DR Account number","target_column":"DBTRIBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR Account Name","target_column":"DBTRACCTNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"DR Bank BIC","target_column":"DRSORTCODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Account Number","target_column":"CDTRIBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Account Name","target_column":"CDTRACCTNAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Bank Bic","target_column":"CRSORTCODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CR Bank Name","target_column":"BANK_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original E2E ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__cc_for_get_usable_balance_ide() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_initiate"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678368608079"
		let event_params={"caller_name":"navigation_ui_initiate__cc_for_get_usable_balance_ide","event_desc":"CC for Get Usable Balance IDE","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_rev_get_usable_balanceService.fn_npss_cs_rev_get_usable_balance(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__de_for_get_deal_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_initiate"
		let destn_id="get_deal_ui"
		let parent_source_id=""
		let event_code="e_1678865788345"
		let event_params={"caller_name":"navigation_ui_initiate__de_for_get_deal_ui","event_desc":"DE for Get deal ui","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__e_1681971027551() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_initiate"
		let destn_id="sell_margin_rate_ui"
		let parent_source_id=""
		let event_code="e_1681971027551"
		let event_params={"caller_name":"navigation_ui_initiate__e_1681971027551","event_desc":"E_1681971027551","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__e_1681467635518__payment_processing_details_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_initiate"
		let destn_id="npss_manual_initiation_ui_memory92"
		let parent_source_id=""
		let event_code="e_1681467635518"
		let event_params={"destn_comp_id":"payment_processing_details_ui","destn_ctrl_id":"memory92","caller_name":"navigation_ui_initiate__e_1681467635518__payment_processing_details_ui","event_desc":"E_1681467635518","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__e_1681467714443__payment_processing_details_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_initiate"
		let destn_id="npss_manual_initiation_ui_buy_rate"
		let parent_source_id=""
		let event_code="e_1681467714443"
		let event_params={"destn_comp_id":"payment_processing_details_ui","destn_ctrl_id":"buy_rate","caller_name":"navigation_ui_initiate__e_1681467714443__payment_processing_details_ui","event_desc":"E_1681467714443","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__e_1685338706847__payment_processing_details_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_initiate"
		let destn_id="npss_manual_initiation_ui_buy_margin"
		let parent_source_id=""
		let event_code="e_1685338706847"
		let event_params={"destn_comp_id":"payment_processing_details_ui","destn_ctrl_id":"buy_margin","caller_name":"navigation_ui_initiate__e_1685338706847__payment_processing_details_ui","event_desc":"E_1685338706847","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{}}
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

	//Handler for INTERNAL event of "brfq for fab ppd"
	brfq_for_fab_ppd__sfr_for_ppd_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_fab_ppd"
		let destn_id="payment_processing_details"
		let parent_source_id="navigation_ui_initiate"
		let event_code="e_1672492203413"
		let event_params={"caller_name":"brfq_for_fab_ppd__sfr_for_ppd_list","event_desc":"SFR for PPD List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for fab ppd"
	brfq_for_fab_ppd__sp_for_fab(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_fab_ppd"
		let destn_id=""
		let parent_source_id="navigation_ui_initiate"
		let event_code="e_1680587487372"
		let event_params={"caller_name":"brfq_for_fab_ppd__sp_for_fab","event_desc":"SP For FAB","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{"profile_code":"BTL_1304_1672489774529"},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "brfq for fab otd"
	brfq_for_fab_otd__sfr_for_otd_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_fab_otd"
		let destn_id="original_transaction_details"
		let parent_source_id="navigation_ui_initiate"
		let event_code="e_1672492216063"
		let event_params={"caller_name":"brfq_for_fab_otd__sfr_for_otd_list","event_desc":"SFR for OTD List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for fh otd"
	brfq_for_fh_otd__sfr_for_fh_otd_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_fh_otd"
		let destn_id="original_transaction_details"
		let parent_source_id="navigation_ui_initiate"
		let event_code="e_1675144628000"
		let event_params={"caller_name":"brfq_for_fh_otd__sfr_for_fh_otd_list","event_desc":"SFR for FH OTD List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for fh ppd"
	brfq_for_fh_ppd__sfr_for_fh_ppd_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_fh_ppd"
		let destn_id="payment_processing_details"
		let parent_source_id="navigation_ui_initiate"
		let event_code="e_1675144682152"
		let event_params={"caller_name":"brfq_for_fh_ppd__sfr_for_fh_ppd_list","event_desc":"SFR for FH PPD List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for fh ppd"
	brfq_for_fh_ppd__sp_for_fh(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_fh_ppd"
		let destn_id=""
		let parent_source_id="navigation_ui_initiate"
		let event_code="e_1680587468310"
		let event_params={"caller_name":"brfq_for_fh_ppd__sp_for_fh","event_desc":"SP for FH","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{"profile_code":"BTL_1304_1680586648550"},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__brfq_for_vertical_tran_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="view_dr_cr_details"
		let parent_source_id=""
		let event_code="e_1669202037388"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_for_vertical_tran_detail","event_desc":"BRFQ for Vertical Tran Detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_7","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491462446","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1690460821298","date_format":true}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM,  VALUEDATEMI FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    TO_CHAR(A.VALUE_DATE,      'YYYY-MM-DD') AS VALUEDATEMI,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,      'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    A.DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    A.CR_ACCT_IDENTIFICATION,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN <TRAN_DB>.TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__sp_for_view_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669202996861"
		let event_params={"caller_name":"navigation_ui_view_tran__sp_for_view_detail","event_desc":"SP for View Detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"profile_code":"BTL_1304_1669202528774"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__brfq_for_vptdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="view_payment_details"
		let parent_source_id=""
		let event_code="e_1669206394952"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_for_vptdl","event_desc":"BRFQ for VPTDL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491499750","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1690460821298","date_format":true}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM,  VALUEDATEMI FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    TO_CHAR(A.VALUE_DATE,      'YYYY-MM-DD') AS VALUEDATEMI,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,      'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    A.DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    A.CR_ACCT_IDENTIFICATION,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN <TRAN_DB>.TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"VALUEDATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1669203064139"
		let event_params={"caller_name":"back_ui_back__sp_for_back_from_main","event_desc":"SP for back from Main","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1666856599156"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__sp_for_sb_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="single_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669459802364"
		let event_params={"caller_name":"single_back_ui_back__sp_for_sb_back","event_desc":"SP for SB Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"single_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1669459405629"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__sp_for_mb_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669459823284"
		let event_params={"caller_name":"message_back_ui_back__sp_for_mb_back","event_desc":"SP for MB Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1669459551241"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__sp_for_mda_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669459834127"
		let event_params={"caller_name":"message_detail_action_back__sp_for_mda_back","event_desc":"SP for MDA Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_back","raiseparam":{"profile_code":"BTL_1304_1666856599156"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__sp_for_pl_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669459845231"
		let event_params={"caller_name":"process_log_ui_back__sp_for_pl_back","event_desc":"SP for PL Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_back","raiseparam":{"profile_code":"BTL_1304_1666856599156"}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ssr_for_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1669460041103"
		let event_params={"caller_name":"history_detail__ssr_for_req","event_desc":"SSR for Req","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ssr_for_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1669460098261"
		let event_params={"caller_name":"history_detail__ssr_for_res","event_desc":"SSR for Res","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ee_for_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_response"
		let parent_source_id=""
		let event_code="e_1669460221123"
		let event_params={"caller_name":"history_detail__ee_for_res","event_desc":"EE for Res","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ee_for_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_request"
		let parent_source_id=""
		let event_code="e_1669460247354"
		let event_params={"caller_name":"history_detail__ee_for_req","event_desc":"EE for Req","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ee_for_vreq_and_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1670245533168"
		let event_params={"caller_name":"history_detail__ee_for_vreq_and_vres","event_desc":"EE for VREQ and VRES","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view request"
	process_log_ui_view_request__bt_for_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_request"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1669460126277"
		let event_params={"caller_name":"process_log_ui_view_request__bt_for_req","event_desc":"BT for Req","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_request","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view request"
	process_log_ui_view_request__sp_for_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_request"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460536875"
		let event_params={"caller_name":"process_log_ui_view_request__sp_for_req","event_desc":"SP for Req","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_request","raiseparam":{"profile_code":"BTL_1304_1669459508394"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view response"
	process_log_ui_view_response__bt_for_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_response"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1669460148245"
		let event_params={"caller_name":"process_log_ui_view_response__bt_for_res","event_desc":"BT for Res","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_response","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view response"
	process_log_ui_view_response__sp_for_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_response"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460571570"
		let event_params={"caller_name":"process_log_ui_view_response__sp_for_res","event_desc":"SP for Res","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_response","raiseparam":{"profile_code":"BTL_1304_1669459458643"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view process log"
	navigation_ui_view_process_log__brfq_for_hd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_process_log"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1669460276825"
		let event_params={"caller_name":"navigation_ui_view_process_log__brfq_for_hd","event_desc":"BRFQ for HD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_hd__sfr_for_hd,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491568508","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1713241927843","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT,  ADDITIONAL_INFO from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE,   '-',   T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE,   '-',   CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE,   '-',   CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <TRAN_DB>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view process log"
	navigation_ui_view_process_log__sp_for_vlh() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_process_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460333496"
		let event_params={"caller_name":"navigation_ui_view_process_log__sp_for_vlh","event_desc":"SP for VLH","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{"profile_code":"BTL_1304_1669459405629"}}
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

	//Handler for INTERNAL event of "brfq for hd"
	brfq_for_hd__sfr_for_hd(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_hd"
		let destn_id="history_detail"
		let parent_source_id="navigation_ui_view_process_log"
		let event_code="e_1669460298876"
		let event_params={"caller_name":"brfq_for_hd__sfr_for_hd","event_desc":"SFR for HD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_11","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491568508","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false},{"column_name":"ADDITIONAL_INFO","alias_name":"","mq_id":"MQ_1713241927843","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT,  ADDITIONAL_INFO from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE,   'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE,   '-',   T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE,   '-',   CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE,   '-',   CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <TRAN_DB>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message log"
	navigation_ui_view_message_log__sp_for_vmd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460683952"
		let event_params={"caller_name":"navigation_ui_view_message_log__sp_for_vmd","event_desc":"SP for VMD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{"profile_code":"BTL_1304_1669459551241"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message log"
	navigation_ui_view_message_log__brfq_for_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_log"
		let destn_id="message_detail"
		let parent_source_id=""
		let event_code="e_1669460815182"
		let event_params={"caller_name":"navigation_ui_view_message_log__brfq_for_vm","event_desc":"BRFQ for VM","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_vm__sfr_for_vm,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491616867","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   <TRAN_DB>.NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join <TRAN_DB>.NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for vm"
	brfq_for_vm__sfr_for_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="brfq_for_vm"
		let destn_id="message_detail"
		let parent_source_id="navigation_ui_view_message_log"
		let event_code="e_1669460832873"
		let event_params={"caller_name":"brfq_for_vm__sfr_for_vm","event_desc":"SFR for VM","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{}}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_10","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1672491616867","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   <TRAN_DB>.NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join <TRAN_DB>.NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"IP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__ssr_for_md_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1669460869757"
		let event_params={"caller_name":"message_detail__ssr_for_md_ui","event_desc":"SSR for MD ui","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"message_detail","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__ee_for_sm() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail_action_view_message"
		let parent_source_id=""
		let event_code="e_1669460900211"
		let event_params={"caller_name":"message_detail__ee_for_sm","event_desc":"EE for SM","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"message_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__bt_for_md_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1669460923322"
		let event_params={"caller_name":"message_detail_action_view_message__bt_for_md_ui","event_desc":"BT for MD UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__sp_for_view_message_data() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460968210"
		let event_params={"caller_name":"message_detail_action_view_message__sp_for_view_message_data","event_desc":"SP for view message DATA","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"profile_code":"BTL_1304_1669459620728"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__sp_for_vreq_and_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670245429553"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__sp_for_vreq_and_vres","event_desc":"SP for VREQ and VRES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1670245368385"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__bt_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1670245582446"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_req","event_desc":"BT REQ","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__bt_for_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1670245617283"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_for_res","event_desc":"BT for RES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment processing details ui save"
	payment_processing_details_ui_save__ve_for_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_processing_details_ui_save"
		let destn_id="payment_processing_details_ui"
		let parent_source_id=""
		let event_code="e_1674640967070"
		let event_params={"caller_name":"payment_processing_details_ui_save__ve_for_save","event_desc":"VE for save","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_processing_details_ui_save","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_save__customer_manual_ide,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for save"
	ve_for_save__customer_manual_ide(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_save"
		let destn_id=""
		let parent_source_id="payment_processing_details_ui_save"
		let event_code="e_1674640989763"
		let event_params={"caller_name":"ve_for_save__customer_manual_ide","event_desc":"Customer manual ide","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_processing_details_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="customer_manual_ide__info_save,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_outward_manual_initiationService.fn_npss_cs_outward_manual_initiation(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "customer manual ide"
	customer_manual_ide__info_save(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="customer_manual_ide"
		let destn_id=""
		let parent_source_id="ve_for_save"
		let event_code="e_1674641027722"
		let event_params={"caller_name":"customer_manual_ide__info_save","event_desc":"info save","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Transaction has been initiated successfully","root_source_id":"payment_processing_details_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_save__rs_for_save,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info save"
	info_save__rs_for_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="info_save"
		let destn_id=""
		let parent_source_id="customer_manual_ide"
		let event_code="e_1674641050413"
		let event_params={"caller_name":"info_save__rs_for_save","event_desc":"RS For save","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"payment_processing_details_ui_save","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "original transaction details"
	original_transaction_details__svm_for_otd_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="original_transaction_details"
		let destn_id="original_transaction_details"
		let parent_source_id=""
		let event_code="e_1672492260558"
		let event_params={"caller_name":"original_transaction_details__svm_for_otd_list","event_desc":"SVM for OTD List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"original_transaction_details","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"original_transaction_details":{"e_1672492260558":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_19","event_code":"E_1672492260558","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"DBTR_IBAN","level":"MI_LEVEL","name":"MI_LEVEL_DBTR_IBAN","setd3name":"DBTR_IBAN"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "original transaction details"
	original_transaction_details__bvm_for_txn_charges_aed__payment_processing_details_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="original_transaction_details"
		let destn_id="npss_manual_initiation_ui_charge_amount"
		let parent_source_id=""
		let event_code="e_1672492604412"
		let event_params={"destn_comp_id":"payment_processing_details_ui","destn_ctrl_id":"charge_amount","caller_name":"original_transaction_details__bvm_for_txn_charges_aed__payment_processing_details_ui","event_desc":"BVM for Txn Charges AED","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"original_transaction_details","raiseparam":{}}
		let handler_code="bind_value_from_memory"
		let internals=""
		let event_data={"control":{"e_1672492604412":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665901217208":{"uicgc_code":"CONTROL","event_code":"E_1672492604412","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"CHARGE_AMOUNT","level":"MI_LEVEL","name":"MI_LEVEL_CHARGE_AMOUNT","setd3name":""}],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_CHARGE_AMOUNT","tb_data":"Y","column":"CHARGE_AMOUNT","d3name":""}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.bind_value_from_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "original transaction details"
	original_transaction_details__bvm_for_txn_currency__payment_processing_details_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="original_transaction_details"
		let destn_id="npss_manual_initiation_ui_intrbk_sttlm_cur"
		let parent_source_id=""
		let event_code="e_1672492721609"
		let event_params={"destn_comp_id":"payment_processing_details_ui","destn_ctrl_id":"intrbk_sttlm_cur","caller_name":"original_transaction_details__bvm_for_txn_currency__payment_processing_details_ui","event_desc":"BVM for TXN Currency","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"original_transaction_details","raiseparam":{}}
		let handler_code="bind_value_from_memory"
		let internals=""
		let event_data={"control":{"e_1672492721609":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665901217208":{"uicgc_code":"CONTROL","event_code":"E_1672492721609","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"INTRBK_STTLM_CUR","level":"MI_LEVEL","name":"MI_LEVEL_INTRBK_STTLM_CUR","setd3name":""}],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_INTRBK_STTLM_CUR","tb_data":"Y","column":"INTRBK_STTLM_CUR","d3name":""}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.bind_value_from_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "original transaction details"
	original_transaction_details__bvm_for_dis_ref_no__payment_processing_details_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="original_transaction_details"
		let destn_id="npss_manual_initiation_ui_dispute_ref_no"
		let parent_source_id=""
		let event_code="e_1672493101615"
		let event_params={"destn_comp_id":"payment_processing_details_ui","destn_ctrl_id":"dispute_ref_no","caller_name":"original_transaction_details__bvm_for_dis_ref_no__payment_processing_details_ui","event_desc":"BVM for Dis Ref No","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"original_transaction_details","raiseparam":{}}
		let handler_code="bind_value_from_memory"
		let internals=""
		let event_data={"control":{"e_1672493101615":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665901217208":{"uicgc_code":"CONTROL","event_code":"E_1672493101615","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"DISPUTE_REF_NO","level":"MI_LEVEL","name":"MI_LEVEL_DISPUTE_REF_NO","setd3name":""}],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_DISPUTE_REF_NO","tb_data":"Y","column":"DISPUTE_REF_NO","d3name":""}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.bind_value_from_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "original transaction details"
	original_transaction_details__bvm_for_amount__payment_processing_details_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="original_transaction_details"
		let destn_id="npss_manual_initiation_ui_memory92"
		let parent_source_id=""
		let event_code="e_1674641604662"
		let event_params={"destn_comp_id":"payment_processing_details_ui","destn_ctrl_id":"memory92","caller_name":"original_transaction_details__bvm_for_amount__payment_processing_details_ui","event_desc":"BVM for Amount","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"original_transaction_details","raiseparam":{}}
		let handler_code="bind_value_from_memory"
		let internals=""
		let event_data={"control":{"e_1674641604662":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665901217208":{"uicgc_code":"CONTROL","event_code":"E_1674641604662","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"INTRBK_STTLM_AMNT","level":"MI_LEVEL","name":"MI_LEVEL_INTRBK_STTLM_AMNT","setd3name":""}],"get_from_memory":[{"level":"MI_LEVEL","value":"MI_LEVEL_INTRBK_STTLM_AMNT","tb_data":"","column":"","d3name":""}],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.bind_value_from_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "payment processing details"
	payment_processing_details__svm_for_ppd_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_processing_details"
		let destn_id="payment_processing_details"
		let parent_source_id=""
		let event_code="e_1672492269991"
		let event_params={"caller_name":"payment_processing_details__svm_for_ppd_list","event_desc":"SVM for PPD List","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"payment_processing_details","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "payment processing details ui back"
	payment_processing_details_ui_back__rs_for_initate_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_processing_details_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672636868188"
		let event_params={"caller_name":"payment_processing_details_ui_back__rs_for_initate_back","event_desc":"RS for Initate Back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_processing_details_ui_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "payment processing details ui get deal"
	payment_processing_details_ui_get_deal__cc_for_get_deal_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="payment_processing_details_ui_get_deal"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1678865384305"
		let event_params={"caller_name":"payment_processing_details_ui_get_deal__cc_for_get_deal_btn","event_desc":"CC for Get deal btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"payment_processing_details_ui_get_deal","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_manual_initiation_get_dealService.fn_npss_cs_manual_initiation_get_deal(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
