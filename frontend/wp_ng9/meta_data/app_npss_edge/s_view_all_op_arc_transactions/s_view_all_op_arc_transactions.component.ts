/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 32175 
Modified By     : Admin 
Modified Date   : 2023-Sep-14 8:3 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_view_all_op_arc_transactions
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {torus_cs_change_routingkeyService} from '../../../custom_widget/torus_cs_change_routingkey/torus_cs_change_routingkey.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'
import {npss_cs_rct_already_postingService} from '../../../custom_widget/npss_cs_rct_already_posting/npss_cs_rct_already_posting.service'
import {npss_cs_arc_masking_req_resService} from '../../../custom_widget/npss_cs_arc_masking_req_res/npss_cs_arc_masking_req_res.service'
import {npss_cs_masking_req_resService} from '../../../custom_widget/npss_cs_masking_req_res/npss_cs_masking_req_res.service'

@Component({
	selector: 's_view_all_op_arc_transactions',
	templateUrl: './s_view_all_op_arc_transactions.component.html',
	styleUrls: ['./s_view_all_op_arc_transactions.component.css'],
	providers:[torus_cs_change_routingkeyService,torus_cs_show_hideService,npss_cs_rct_already_postingService,npss_cs_arc_masking_req_resService,npss_cs_masking_req_resService]
})
    
// Start of class 
export class s_view_all_op_arc_transactionsComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_view_all_op_arc_transactions"
	wftpa_id : string = "WFT_NPSS_P_1304_1686721810940_0"
	cg_code : string = "CG_1304_1686721532012"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID"}
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
	uicgc_7 : string = "back_ui"
	uicgc_8 : string = "view_dr_cr_details"
	uicgc_9 : string = "view_payment_details"
	uicgc_10 : string = "single_back_ui"
	uicgc_11 : string = "response_ui"
	uicgc_12 : string = "request_ui"
	uicgc_13 : string = "process_log_ui"
	uicgc_14 : string = "message_detail_ui"
	uicgc_15 : string = "message_detail_action"
	uicgc_16 : string = "message_detail"
	uicgc_17 : string = "message_back_ui"
	uicgc_18 : string = "history_detail"
	uicgc_19 : string = "view_api_failure__action_ui"
	uicgc_20 : string = "view_process_log_list"
	uicgc_21 : string = "view_req_back_ui"
	uicgc_22 : string = "view_api_res_ui"
	uicgc_23 : string = "api_queue"
	uicgc_24 : string = "process_log_search"
	uicgc_25 : string = "view_process_log_ui"
	uicgc_27 : string = "history_details"
	uicgc_28 : string = "view_failures_ui"
	uicgc_29 : string = "view_failures_actions"
	uicgc_30 : string = "view_pro_log_req_and_res_ui"
	key_events : any = {}
	btl_1304_1687778298351 : string = "p_view_process_log_view_req_and_res_layout"
	btl_1304_1686911652303 : string = "p_view_failures_layout"
	btl_1304_1686636346443 : string = "p_view_process_log_layout"
	btl_1304_1684313489625 : string = "p_view_process_log_search"
	btl_1304_1681997889274 : string = "p_message_details_layoout"
	btl_1304_1681966827545 : string = "p_view_api_req_layout"
	btl_1304_1681966510169 : string = "p_view_api_req_and_res_layout"
	btl_1304_1681966202861 : string = "p_view_api_failure_layout"
	btl_1304_1670244292991 : string = "p_view_req_and_res_profile"
	btl_1304_1669458494431 : string = "p_view_message_ui_layout"
	btl_1304_1669458390905 : string = "p_view_message_list_layout"
	btl_1304_1669458300218 : string = "p_view_request_layout"
	btl_1304_1669458178213 : string = "p_view_response_layout"
	btl_1304_1669457979784 : string = "p_view_history_layout"
	btl_1304_1669203307471 : string = "p_view_tran_detail_layout"
	btl_1304_1668850424944 : string = "p_cbs_layout"
	btl_1304_1666856790983 : string = "p_search_layout"
	btl_1304_1666856599156 : string = "p_main_layout"
	forms : any = ["uicgc_14","uicgc_11","uicgc_4","uicgc_22","uicgc_12","uicgc_24","uicgc_28","uicgc_30","uicgc_29","uicgc_25","uicgc_17","uicgc_21","uicgc_19","uicgc_10","uicgc_15","uicgc_13","uicgc_7","uicgc_6","uicgc_3"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	p_view_process_log_search__show_profile_popup_showpopup : boolean = false
	queue : any = {}
	transaction_list : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_tran : any = {}
	navigation_ui_view_process_log : any = {}
	navigation_ui_view_message_log : any = {}
	navigation_ui_view_api_transactions : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	process_log_list : any = {}
	cbs_ref_ui : any = {}
	cbs_ref_ui_save : any = {}
	back_ui : any = {}
	back_ui_back : any = {}
	view_dr_cr_details : any = {}
	view_payment_details : any = {}
	single_back_ui : any = {}
	single_back_ui_back : any = {}
	response_ui : any = {}
	request_ui : any = {}
	process_log_ui : any = {}
	process_log_ui_back : any = {}
	process_log_ui_view_response : any = {}
	process_log_ui_view_request : any = {}
	process_log_ui_view_req_and_res : any = {}
	process_log_ui_view_failures : any = {}
	message_detail_ui : any = {}
	message_detail_action : any = {}
	message_detail_action_back : any = {}
	message_detail_action_view_message : any = {}
	message_detail : any = {}
	message_back_ui : any = {}
	message_back_ui_back : any = {}
	history_detail : any = {}
	view_api_failure__action_ui : any = {}
	view_api_failure__action_ui_back : any = {}
	view_api_failure__action_ui_search : any = {}
	view_api_failure__action_ui_view_req_and_res : any = {}
	view_api_failure__action_ui_view_failure : any = {}
	view_api_failure__action_ui_view_process_log : any = {}
	view_process_log_list : any = {}
	view_req_back_ui : any = {}
	view_req_back_ui_back : any = {}
	view_api_res_ui : any = {}
	api_queue : any = {}
	process_log_search : any = {}
	process_log_search_search : any = {}
	process_log_search_clear : any = {}
	view_process_log_ui : any = {}
	view_process_log_ui_back : any = {}
	view_process_log_ui_view_req_and_res : any = {}
	history_details : any = {}
	view_failures_ui : any = {}
	view_failures_actions : any = {}
	view_failures_actions_back : any = {}
	view_pro_log_req_and_res_ui : any = {}
	view_pro_log_req_and_res_ui_back : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private torus_cs_change_routingkeyService:torus_cs_change_routingkeyService,private torus_cs_show_hideService:torus_cs_show_hideService,private npss_cs_rct_already_postingService:npss_cs_rct_already_postingService,private npss_cs_arc_masking_req_resService:npss_cs_arc_masking_req_resService,private npss_cs_masking_req_resService:npss_cs_masking_req_resService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_1"
		this.queue.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724189954","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"View All ARC Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686721830447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686721830622","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.PROCESS_TYPE,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_GROUP  from   <arc_tran_db>.NPSS_TRANSACTIONS NT )v $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC View All Queue CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724219235","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC View all transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1686721989274","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1686721989418","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686721989578","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686721989738","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1686721989906","date_format":true},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1686721990074","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1686722021994","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1686722022145","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686722022321","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686722022473","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686722058128","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1686722058288","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1686722058447","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1686722080240","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1686722080391","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686722080551","date_format":false},{"column_name":"cr_acct_identification_mask","alias_name":"","mq_id":"MQ_1686722105408","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification_mask,  CR_ACCT_IDENTIFICATION,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  DBTR_ACCT_NAME,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  DBTR_CUST_TYPE,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CDTR_ACCT_NAME,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  DR_SORT_CODE,  CR_SORT_CODE,  CATEGORY_PURPOSE,  CATEGORY_PURPOSE_PRTY,  BASE_CURRENCY,  BASE_AMOUNT,  HDR_TOTAL_RECORDS,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM,  CHARGE_BEARER,  REMITTANCE_INFO,  ACCOUNT_CURRENCY,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  ISSUER_TYPE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG,  PROCESS_TYPE,  PROCESS_GROUP from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_TYPE,   NT.PROCESS_GROUP  from   <arc_tran_db>.NPSS_TRANSACTIONS NT ) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC View all transaction CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Group","target_column":"PROCESS_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.navigation_ui_view_process_log.disabled = false
		this.navigation_ui_view_process_log.params = {"icon_only":false,"uicgcc_style":"fa fa-building"}
		this.navigation_ui_view_process_log.dynamic_param = {}
		this.navigation_ui_view_process_log.role = []
		this.navigation_ui_view_process_log.action = ""
		
		// "View Message Log" Button of "Navigation UI" component
		this.navigation_ui_view_message_log.label_name = "View Message Log"
		this.navigation_ui_view_message_log.show = true
		this.navigation_ui_view_message_log.disabled = false
		this.navigation_ui_view_message_log.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.navigation_ui_view_message_log.dynamic_param = {}
		this.navigation_ui_view_message_log.role = []
		this.navigation_ui_view_message_log.action = ""
		
		// "View API Transactions" Button of "Navigation UI" component
		this.navigation_ui_view_api_transactions.label_name = "View API Transactions"
		this.navigation_ui_view_api_transactions.show = true
		this.navigation_ui_view_api_transactions.disabled = false
		this.navigation_ui_view_api_transactions.params = {"icon_only":false,"uicgcc_style":"fa fa-eye-slash"}
		this.navigation_ui_view_api_transactions.dynamic_param = {}
		this.navigation_ui_view_api_transactions.role = []
		this.navigation_ui_view_api_transactions.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS OP Transaction Details SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_op_transaction_details_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_op_transaction_details_srch"
		
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
		this.cbs_ref_ui.views = {}
		this.cbs_ref_ui.onChangecomponent = new EventEmitter<any>()
		this.cbs_ref_ui.show = true
		this.cbs_ref_ui.dynamic_param = {}
		this.cbs_ref_ui.f_cbs_ref_ui = {"show":true}
		this.cbs_ref_ui.current_view = "f_cbs_ref_ui"
		
		// "Save" Button of "CBS REF UI" component
		this.cbs_ref_ui_save.label_name = "Save"
		this.cbs_ref_ui_save.show = true
		this.cbs_ref_ui_save.disabled = false
		this.cbs_ref_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-save"}
		this.cbs_ref_ui_save.dynamic_param = {}
		this.cbs_ref_ui_save.role = []
		this.cbs_ref_ui_save.action = ""
	
		// Component level properties - "Back UI" 
		this.back_ui.uictrl_code = "dynamic_ui"
		this.back_ui.uicgc_desc = "Back UI"
		this.back_ui.uicgc_code = "uicgc_7"
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
	
		// Component level properties - "View Dr Cr Details" 
		this.view_dr_cr_details.uictrl_code = "datatable"
		this.view_dr_cr_details.uicgc_desc = "View Dr Cr Details"
		this.view_dr_cr_details.uicgc_code = "uicgc_8"
		this.view_dr_cr_details.params = {"need_search":"N","need_vertical":"Y"}
		this.view_dr_cr_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724265186","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC Payment and Dr Cr Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1686722378592","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1686722378751","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1686722378911","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1686722379215","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1686722379375","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1686722379687","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1686722379839","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686722380015","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1686722380207","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1686722433334","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1686722433485","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1686722433637","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1686722433813","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1686722433974","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1686722468062","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1686722468213","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1686722468365","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686722468533","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1686722468701","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1686722500284","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1686722500419","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1686722500572","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1686722526444","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686722526595","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686722526747","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1686722526907","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686722527075","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1686722527243","date_format":false},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1686722574034","date_format":true},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686722574194","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1686722574354","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1686722574498","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1686722574650","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1686722605154","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1686722605314","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1686722605466","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1686722605633","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1686722636944","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1686722637096","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1686722637265","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686722637424","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1686722665712","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1686722665880","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_card_decrypt_and_mask(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_card_decrypt_and_mask(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   <arc_tran_db>.NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC Dr Cr Tran CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_dr_cr_details.context_menu = []
		this.view_dr_cr_details.views = {}
		this.view_dr_cr_details.onChangecomponent = new EventEmitter<any>()
		this.view_dr_cr_details.show = true
		this.view_dr_cr_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "View Payment Details" 
		this.view_payment_details.uictrl_code = "datatable"
		this.view_payment_details.uicgc_desc = "View Payment Details"
		this.view_payment_details.uicgc_code = "uicgc_9"
		this.view_payment_details.params = {"need_search":"N","need_vertical":"Y"}
		this.view_payment_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724342380","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC Payment and Dr Cr Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1686722378592","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1686722378751","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1686722378911","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1686722379215","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1686722379375","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1686722379687","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1686722379839","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686722380015","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1686722380207","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1686722433334","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1686722433485","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1686722433637","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1686722433813","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1686722433974","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1686722468062","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1686722468213","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1686722468365","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686722468533","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1686722468701","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1686722500284","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1686722500419","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1686722500572","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1686722526444","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686722526595","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686722526747","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1686722526907","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686722527075","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1686722527243","date_format":false},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1686722574034","date_format":true},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686722574194","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1686722574354","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1686722574498","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1686722574650","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1686722605154","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1686722605314","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1686722605466","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1686722605633","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1686722636944","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1686722637096","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1686722637265","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686722637424","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1686722665712","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1686722665880","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_card_decrypt_and_mask(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_card_decrypt_and_mask(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   <arc_tran_db>.NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_payment_details.context_menu = []
		this.view_payment_details.views = {}
		this.view_payment_details.onChangecomponent = new EventEmitter<any>()
		this.view_payment_details.show = true
		this.view_payment_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Single Back UI" 
		this.single_back_ui.uictrl_code = "dynamic_ui"
		this.single_back_ui.uicgc_desc = "Single Back UI"
		this.single_back_ui.uicgc_code = "uicgc_10"
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
		this.response_ui.uicgc_code = "uicgc_11"
		this.response_ui.params = {}
		this.response_ui.datasource = {}
		this.response_ui.context_menu = []
		this.response_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Response UI","tab_order":0,"tab_name":"","uicgc_description":"Response UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.response_ui.onChangecomponent = new EventEmitter<any>()
		this.response_ui.show = true
		this.response_ui.dynamic_param = {}
		this.response_ui.f_npss_target_response_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.response_ui.form_name = "f_npss_target_response_ui"
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_12"
		this.request_ui.params = {}
		this.request_ui.datasource = {}
		this.request_ui.context_menu = []
		this.request_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Request UI","tab_order":0,"tab_name":"","uicgc_description":"Request UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.request_ui.onChangecomponent = new EventEmitter<any>()
		this.request_ui.show = true
		this.request_ui.dynamic_param = {}
		this.request_ui.f_npss_target_request_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.request_ui.form_name = "f_npss_target_request_ui"
	
		// Component level properties - "Process Log UI" 
		this.process_log_ui.uictrl_code = "dynamic_ui"
		this.process_log_ui.uicgc_desc = "Process Log UI"
		this.process_log_ui.uicgc_code = "uicgc_13"
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
		
		// "View Failures" Button of "Process Log UI" component
		this.process_log_ui_view_failures.label_name = "View Failures"
		this.process_log_ui_view_failures.show = true
		this.process_log_ui_view_failures.disabled = false
		this.process_log_ui_view_failures.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.process_log_ui_view_failures.dynamic_param = {}
		this.process_log_ui_view_failures.role = []
		this.process_log_ui_view_failures.action = ""
	
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
	
		// Component level properties - "Message Detail Action" 
		this.message_detail_action.uictrl_code = "dynamic_ui"
		this.message_detail_action.uicgc_desc = "Message Detail Action"
		this.message_detail_action.uicgc_code = "uicgc_15"
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
	
		// Component level properties - "Message Detail" 
		this.message_detail.uictrl_code = "datatable"
		this.message_detail.uicgc_desc = "Message Detail"
		this.message_detail.uicgc_code = "uicgc_16"
		this.message_detail.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.message_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_16","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724133333","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1686735764458","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1686735764609","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686735764762","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686735764921","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686735765073","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1686735765217","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686735765369","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686735765529","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686735765689","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686735765841","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1686735766010","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1686735766137","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1686735848546","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1686735848713","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1686735848858","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1686735868802","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1686735879115","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1686735886242","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686735894418","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,  PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,   NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   <arc_tran_db>.NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join <arc_tran_db>.NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC REQ RESP CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.message_detail.context_menu = []
		this.message_detail.views = {}
		this.message_detail.onChangecomponent = new EventEmitter<any>()
		this.message_detail.show = true
		this.message_detail.dynamic_param = {}
	
		// Component level properties - "Message Back UI" 
		this.message_back_ui.uictrl_code = "dynamic_ui"
		this.message_back_ui.uicgc_desc = "Message Back UI"
		this.message_back_ui.uicgc_code = "uicgc_17"
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
	
		// Component level properties - "History Detail" 
		this.history_detail.uictrl_code = "datatable"
		this.history_detail.uicgc_desc = "History Detail"
		this.history_detail.uicgc_code = "uicgc_18"
		this.history_detail.params = {"need_search":"N"}
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724059339","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686734572576","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686734572602","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686734572953","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686734573129","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686734573289","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686734573457","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686734777940","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686734778108","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686734791773","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686734802404","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734802571","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686734830483","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686734839779","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686734849139","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686734857139","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686734864643","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686734873026","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686734879323","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686734879650","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686734879930","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734880138","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734905257","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734905426","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686734924257","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from  <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <arc_tran_db>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC HST Process Log CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"FT Number/ProcessRefNo","target_column":"PROCESS_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
		// Component level properties - "View API Failure  Action UI" 
		this.view_api_failure__action_ui.uictrl_code = "dynamic_ui"
		this.view_api_failure__action_ui.uicgc_desc = "View API Failure  Action UI"
		this.view_api_failure__action_ui.uicgc_code = "uicgc_19"
		this.view_api_failure__action_ui.params = {}
		this.view_api_failure__action_ui.datasource = {}
		this.view_api_failure__action_ui.context_menu = []
		this.view_api_failure__action_ui.views = {}
		this.view_api_failure__action_ui.onChangecomponent = new EventEmitter<any>()
		this.view_api_failure__action_ui.show = true
		this.view_api_failure__action_ui.dynamic_param = {}
		this.view_api_failure__action_ui.f_view_api_failure__action_ui = {"show":true}
		this.view_api_failure__action_ui.current_view = "f_view_api_failure__action_ui"
		
		// "Back" Button of "View API Failure  Action UI" component
		this.view_api_failure__action_ui_back.label_name = "Back"
		this.view_api_failure__action_ui_back.show = true
		this.view_api_failure__action_ui_back.disabled = false
		this.view_api_failure__action_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.view_api_failure__action_ui_back.dynamic_param = {}
		this.view_api_failure__action_ui_back.role = []
		this.view_api_failure__action_ui_back.action = ""
		
		// "Search" Button of "View API Failure  Action UI" component
		this.view_api_failure__action_ui_search.label_name = "Search"
		this.view_api_failure__action_ui_search.show = true
		this.view_api_failure__action_ui_search.disabled = false
		this.view_api_failure__action_ui_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.view_api_failure__action_ui_search.dynamic_param = {}
		this.view_api_failure__action_ui_search.role = []
		this.view_api_failure__action_ui_search.action = ""
		
		// "View Req and Res" Button of "View API Failure  Action UI" component
		this.view_api_failure__action_ui_view_req_and_res.label_name = "View Req and Res"
		this.view_api_failure__action_ui_view_req_and_res.show = true
		this.view_api_failure__action_ui_view_req_and_res.disabled = false
		this.view_api_failure__action_ui_view_req_and_res.params = {"icon_only":false,"uicgcc_style":"fa fa-share-square-o"}
		this.view_api_failure__action_ui_view_req_and_res.dynamic_param = {}
		this.view_api_failure__action_ui_view_req_and_res.role = []
		this.view_api_failure__action_ui_view_req_and_res.action = ""
		
		// "View Failure" Button of "View API Failure  Action UI" component
		this.view_api_failure__action_ui_view_failure.label_name = "View Failure"
		this.view_api_failure__action_ui_view_failure.show = true
		this.view_api_failure__action_ui_view_failure.disabled = false
		this.view_api_failure__action_ui_view_failure.params = {"icon_only":false,"uicgcc_style":"fa fa-eye"}
		this.view_api_failure__action_ui_view_failure.dynamic_param = {}
		this.view_api_failure__action_ui_view_failure.role = []
		this.view_api_failure__action_ui_view_failure.action = ""
		
		// "View Process Log" Button of "View API Failure  Action UI" component
		this.view_api_failure__action_ui_view_process_log.label_name = "View Process Log"
		this.view_api_failure__action_ui_view_process_log.show = true
		this.view_api_failure__action_ui_view_process_log.disabled = false
		this.view_api_failure__action_ui_view_process_log.params = {"icon_only":false,"uicgcc_style":"fa fa-building"}
		this.view_api_failure__action_ui_view_process_log.dynamic_param = {}
		this.view_api_failure__action_ui_view_process_log.role = []
		this.view_api_failure__action_ui_view_process_log.action = ""
	
		// Component level properties - "View Process Log List" 
		this.view_process_log_list.uictrl_code = "datatable"
		this.view_process_log_list.uicgc_desc = "View Process Log List"
		this.view_process_log_list.uicgc_code = "uicgc_20"
		this.view_process_log_list.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.view_process_log_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686744074239","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC API Process log detail MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686746881693","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686746902805","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686746902988","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686746921845","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922020","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922204","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922420","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686746960667","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746960835","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686746960979","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686746984396","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686746984563","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686747014658","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686747014842","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686747045962","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686747046131","date_format":false},{"column_name":"REQUEST_DATA_JSON","alias_name":"","mq_id":"MQ_1686747062201","date_format":false},{"column_name":"RESPONSE_DATA_JSON","alias_name":"","mq_id":"MQ_1686747062594","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686747092633","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686747092809","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686747092953","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686747115537","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686747115704","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686747147672","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686747147880","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1686747168464","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1686747168672","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1686747189496","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686747197399","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1686747197703","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1686747215368","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  API_PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  API_PROCESS_STATUS,  API_STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DT_CODE,  DTT_CODE,  V_CODE,  DBTR_IBAN,  AMOUNT,  TRAN_REF_ID,  row_num from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   row_number() over( partition by a.uetr  order by   a.npsstpl_id desc) as row_num  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y' union  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   case    when a.status = 'OP_AC_VAL_FAILED' then 1   end as row_num  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  where   a.status = 'OP_AC_VAL_FAILED') V where  row_num = 1 $AND order by  NPSSTPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC API Process log detail CCD","filter":[{"filter_name":"API_PROCESS_STATUS","binding_name":"API_PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_API_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"API_PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_API_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"API_STATUS","binding_value":"","source_name":"MI_LEVEL_API_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Validation Code","target_column":"V_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Error Code","target_column":"RESPONSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Uetr","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_process_log_list.context_menu = []
		this.view_process_log_list.views = {}
		this.view_process_log_list.onChangecomponent = new EventEmitter<any>()
		this.view_process_log_list.show = true
		this.view_process_log_list.dynamic_param = {}
	
		// Component level properties - "View Req Back UI" 
		this.view_req_back_ui.uictrl_code = "dynamic_ui"
		this.view_req_back_ui.uicgc_desc = "View Req Back UI"
		this.view_req_back_ui.uicgc_code = "uicgc_21"
		this.view_req_back_ui.params = {}
		this.view_req_back_ui.datasource = {}
		this.view_req_back_ui.context_menu = []
		this.view_req_back_ui.views = {}
		this.view_req_back_ui.onChangecomponent = new EventEmitter<any>()
		this.view_req_back_ui.show = true
		this.view_req_back_ui.dynamic_param = {}
		this.view_req_back_ui.f_view_req_back_ui = {"show":true}
		this.view_req_back_ui.current_view = "f_view_req_back_ui"
		
		// "Back" Button of "View Req Back UI" component
		this.view_req_back_ui_back.label_name = "Back"
		this.view_req_back_ui_back.show = true
		this.view_req_back_ui_back.disabled = false
		this.view_req_back_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.view_req_back_ui_back.dynamic_param = {}
		this.view_req_back_ui_back.role = []
		this.view_req_back_ui_back.action = ""
	
		// Component level properties - "View API Res UI" 
		this.view_api_res_ui.uictrl_code = "dynamic_ui"
		this.view_api_res_ui.uicgc_desc = "View API Res UI"
		this.view_api_res_ui.uicgc_code = "uicgc_22"
		this.view_api_res_ui.params = {}
		this.view_api_res_ui.datasource = {}
		this.view_api_res_ui.context_menu = []
		this.view_api_res_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Respose data UI","tab_order":0,"tab_name":"","uicgc_description":"View API Res UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.view_api_res_ui.onChangecomponent = new EventEmitter<any>()
		this.view_api_res_ui.show = true
		this.view_api_res_ui.dynamic_param = {}
		this.view_api_res_ui.f_npss_respose_data_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.view_api_res_ui.form_name = "f_npss_respose_data_ui"
	
		// Component level properties - "API Queue" 
		this.api_queue.uictrl_code = "datatable"
		this.api_queue.uicgc_desc = "API Queue"
		this.api_queue.uicgc_code = "uicgc_23"
		this.api_queue.params = {"need_pag_datatable":"Y","need_search":"N"}
		this.api_queue.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_23","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686743999207","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC API Process log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746157162","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686746224121","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686746239600","date_format":false},{"column_name":"API_STATUS","alias_name":"","mq_id":"MQ_1686746253056","date_format":false},{"column_name":"API_PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686746262888","date_format":false},{"column_name":"API_PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746271264","date_format":false}],"joins":[]},"eq_text":"select         distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when nt.process_type = 'OP' then 'Total'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) = current_date   and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when nt.channel_id = 'IBMB' then 'IBMB'    when nt.channel_id = 'RMB' then 'RMB'    when nt.channel_id = 'RIB' then 'RIB'    when nt.channel_id = 'CMB' then 'CMB'    when nt.channel_id = 'CIB' then 'CIB'    when nt.channel_id = 'CMS' then 'CMS'    when nt.channel_id = 'NFR' then 'NFR'    when nt.channel_id = 'CMSCMS' then 'CMSCMS'    when nt.channel_id = 'IPP' then 'IPP'    when nt.channel_id = 'CMSINF' then 'CMSINF'    when nt.channel_id = 'MOB' then 'MOB'    when nt.channel_id = 'MBL' then 'MBL'    when nt.channel_id = 'CMSCMD' then 'CMSCMD'    when nt.channel_id = 'IB' then 'IB'    when nt.channel_id = 'RIBINF' then 'RIBINF'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) = current_date    and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when nt.process_group in ('Manual', 'MANUAL', 'manual') then 'Manual'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) = current_date    and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when ntpl.process_name = 'Place Pacs008'     and ((     select      count(*) as count     from      npss_trn_process_log     where      npss_trn_process_log.process_name = 'PACS.008'      and npss_trn_process_log.uetr = ntpl.uetr )) = 0 then 'Pending Screening'     when ntpl.process_name = 'Place Pacs.007'     and ((     select      count(*) as count     from      npss_trn_process_log     where      npss_trn_process_log.process_name = 'PACS.007'      and npss_trn_process_log.uetr = ntpl.uetr )) = 0 then 'Pending Screening'     when ((ntpl.process_name = 'PACS.008'      and ntpl.processing_system <> 'IBM_MQ')     or (ntpl.process_name = 'PACS.008'      and ntpl.processing_system = 'IBM_MQ'      and ntpl.status = 'IP_RCT_EXCEPTION')     or (ntpl.process_name = 'PACS.007'      and ntpl.processing_system <> 'IBM_MQ')     or (ntpl.process_name = 'PACS.007'      and ntpl.processing_system = 'IBM_MQ'      and ntpl.status = 'IP_RCT_EXCEPTION')) then 'Pending Screening'     else 'OTHER'    end as Pending_Detais_OP   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr    and to_date(to_char(nt.created_date ,    'yyyy-mm-dd' ),    'yyyy-mm-dd' ) = current_date     and NT.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when ((ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTExceptionFailure'     and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE'))     or (ntpl.process_name = 'Receive Pacs004'      and nt.process_status = 'RCTExceptionFailure'      and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE'))      or (ntpl.process_name = 'Place Pacs.007'       and nt.status in ('OP_REVERSAL_REQ_REPAIR'))) then 'Pending (Maker)'    when ((ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTExceptionFailure'     and nt.status in ('OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY'))     or (ntpl.process_name = 'Receive Pacs004'      and nt.process_status = 'RCTExceptionFailure'      and nt.status in ('OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY'))      or (ntpl.process_name = 'Place Pacs.007'       and nt.status in ('OP_REVERSAL_REQ_INITIATED'))) then 'Pending (Checker)'    when ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTCompleted' then 'SEND TO CB'     when ntpl.process_name = 'Place Pacs.007' then 'SEND TO CB'     when ntpl.process_name = 'Place Pacs008'     and (nt.status = 'OP_RCT_STATUS_RECEIVED'      or nt.status = 'OP_P2P_STATUS_ACCEPTED'      or nt.status = 'OP_P2B_STATUS_ACCEPTED') then 'CBACK'     when ntpl.process_name = 'Place Pacs008'     and (nt.status = 'OP_AC_REV_POSTING_SUCCESS'      or nt.status = 'OP_AC_REV_POSTING_SUCCESS'      or nt.process_status = 'OP_AC_STATUS_REJECTED'      or nt.process_status = 'OP_P2P_REV_POSTING_SUCCESS'      or nt.process_status = 'OP_P2B_STATUS_REJECTED'      or nt.process_status = 'OP_P2B_REV_POSTING_SUCCESS') then 'CBNACK'     else 'OTHER'    end as Pending_Detais_OP   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr    and to_date(to_char(nt.created_date ,    'yyyy-mm-dd' ),    'yyyy-mm-dd' ) = current_date     and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when ((ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTExceptionFailure'     and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY'))     or (ntpl.process_name = 'Receive Pacs004'      and nt.process_status = 'RCTExceptionFailure'      and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY'))      or (ntpl.process_name = 'Place Pacs.007'       and nt.status in ('OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED'))) then 'Pending (T-1)'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and nt.process_type = 'OP'   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) < current_date    and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY', 'OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY', 'OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED')) v where  Pending_Detais_OP <> 'OTHER' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC API Process log CCD","filter":[{"filter_name":"STATUS","binding_name":"API_STATUS","binding_value":"","source_name":"OP_AC_MAND_VAL_FAILED,OP_AC_DUPL_VAL_FAILED,OP_P2B_FUND_RESERVED,OP_AC_PCODE_VAL_FAILED,OP_AC_PBANK_VAL_FAILED,OP_P2P_SENDER_IBAN_FAILED,OP_P2P_PAYMENT_FAILED, OP_P2P_POSTING_FAILURE,OP_P2P_POSTING_SUSPICIOUS,OP_P2B_FUND_UNFREEZED,OP_P2B_PAYMENT_FAILED,OP_P2B_FUND_RES_FAILURE,OP_P2B_FUND_RES_SUSPICIOUS,OP_P2B_FUND_UNFR_FAILURE,OP_P2B_FUND_UNFR_SUSPICIOUS,OP_P2B_FUND_AUTH_FAILURE,OP_P2B_FUND_AUTH_SUSPICIOUS,OP_P2P_DEBIT_POSTING_SUCCESS,OP_P2B_DEBIT_POSTING_SUCCESS,OP_INAU_DEBIT_POSTING_SUCCESS,OP_AUTH_DEBIT_POSTING_SUCCESS,OP_UNFREEZE_DEBIT_POSTING_SUCCESS,OP_P2P_DEBIT_POSTING_SUSCIPIOUS,OP_P2B_DEBIT_POSTING_SUSCIPIOUS,OP_INAU_DEBIT_POSTING_SUSCIPIOUS,OP_AUTH_DEBIT_POSTING_SUSCIPIOUS,OP_UNFREEZE_DEBIT_POSTING_SUSCIPIOUS,OP_P2P_POSTING_NOT_HAPPENED,OP_P2B_POSTING_NOT_HAPPENED,OP_INAU_POSTING_NOT_HAPPENED,OP_AUTH_POSTING_NOT_HAPPENED,OP_UNFREEZE_POSTING_NOT_HAPPENED,OP_P2B_REV_POSTING_SUCCESS,OP_P2P_REV_POSTING_SUCCESS,OP_AC_VAL_FAILED","source_value":"","source_type":"HARDCODED","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"API_PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"API_PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"API_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.api_queue.context_menu = []
		this.api_queue.views = {}
		this.api_queue.onChangecomponent = new EventEmitter<any>()
		this.api_queue.show = true
		this.api_queue.dynamic_param = {}
	
		// Component level properties - "Process Log Search" 
		this.process_log_search.uictrl_code = "dynamic_form_search"
		this.process_log_search.uicgc_desc = "Process Log Search"
		this.process_log_search.uicgc_code = "uicgc_24"
		this.process_log_search.params = {}
		this.process_log_search.datasource = {}
		this.process_log_search.context_menu = []
		this.process_log_search.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS View Tran API Process Log SCH","tab_order":0,"tab_name":"","uicgc_description":"Process Log Search","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.process_log_search.onChangecomponent = new EventEmitter<any>()
		this.process_log_search.show = true
		this.process_log_search.dynamic_param = {}
		this.process_log_search.f_npss_view_tran_api_process_log_sch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.process_log_search.form_name = "f_npss_view_tran_api_process_log_sch"
		
		// "Search" Button of "Process Log Search" component
		this.process_log_search_search.label_name = "Search"
		this.process_log_search_search.show = true
		this.process_log_search_search.disabled = false
		this.process_log_search_search.params = {"icon_only":false,"uicgcc_style":"fa fa-search"}
		this.process_log_search_search.dynamic_param = {}
		this.process_log_search_search.role = []
		this.process_log_search_search.action = ""
		
		// "Clear" Button of "Process Log Search" component
		this.process_log_search_clear.label_name = "Clear"
		this.process_log_search_clear.show = true
		this.process_log_search_clear.disabled = false
		this.process_log_search_clear.params = {"icon_only":false,"uicgcc_style":"fa fa-eraser"}
		this.process_log_search_clear.dynamic_param = {}
		this.process_log_search_clear.role = []
		this.process_log_search_clear.action = ""
	
		// Component level properties - "View Process log UI" 
		this.view_process_log_ui.uictrl_code = "dynamic_ui"
		this.view_process_log_ui.uicgc_desc = "View Process log UI"
		this.view_process_log_ui.uicgc_code = "uicgc_25"
		this.view_process_log_ui.params = {}
		this.view_process_log_ui.datasource = {}
		this.view_process_log_ui.context_menu = []
		this.view_process_log_ui.views = {}
		this.view_process_log_ui.onChangecomponent = new EventEmitter<any>()
		this.view_process_log_ui.show = true
		this.view_process_log_ui.dynamic_param = {}
		this.view_process_log_ui.f_view_process_log_ui = {"show":true}
		this.view_process_log_ui.current_view = "f_view_process_log_ui"
		
		// "Back" Button of "View Process log UI" component
		this.view_process_log_ui_back.label_name = "Back"
		this.view_process_log_ui_back.show = true
		this.view_process_log_ui_back.disabled = false
		this.view_process_log_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-fast-backward"}
		this.view_process_log_ui_back.dynamic_param = {}
		this.view_process_log_ui_back.role = []
		this.view_process_log_ui_back.action = ""
		
		// "View Req and Res" Button of "View Process log UI" component
		this.view_process_log_ui_view_req_and_res.label_name = "View Req and Res"
		this.view_process_log_ui_view_req_and_res.show = true
		this.view_process_log_ui_view_req_and_res.disabled = false
		this.view_process_log_ui_view_req_and_res.params = {"icon_only":false,"uicgcc_style":"fa fa-share-square-o"}
		this.view_process_log_ui_view_req_and_res.dynamic_param = {}
		this.view_process_log_ui_view_req_and_res.role = []
		this.view_process_log_ui_view_req_and_res.action = ""
	
		// Component level properties - "History Details" 
		this.history_details.uictrl_code = "datatable"
		this.history_details.uicgc_desc = "History Details"
		this.history_details.uicgc_code = "uicgc_27"
		this.history_details.params = {"need_search":"N"}
		this.history_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_27","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686744023631","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC HST Process log dtls MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686748295214","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686748295397","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686748295565","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686748295725","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686748295893","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686748438704","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686748438856","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686748439000","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686748439160","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686748495634","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748495817","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686748495961","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686748516938","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686748523178","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686748531018","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686748538378","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686748545354","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686748554730","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686748562091","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686748569522","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748576827","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748600459","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748608363","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686748616053","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <arc_tran_db>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC HST Process log dtls CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_details.context_menu = []
		this.history_details.views = {}
		this.history_details.onChangecomponent = new EventEmitter<any>()
		this.history_details.show = true
		this.history_details.dynamic_param = {}
	
		// Component level properties - "View Failures UI" 
		this.view_failures_ui.uictrl_code = "dynamic_ui"
		this.view_failures_ui.uicgc_desc = "View Failures UI"
		this.view_failures_ui.uicgc_code = "uicgc_28"
		this.view_failures_ui.params = {}
		this.view_failures_ui.datasource = {}
		this.view_failures_ui.context_menu = []
		this.view_failures_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS View Response Data UI","tab_order":0,"tab_name":"","uicgc_description":"View Failures UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.view_failures_ui.onChangecomponent = new EventEmitter<any>()
		this.view_failures_ui.show = true
		this.view_failures_ui.dynamic_param = {}
		this.view_failures_ui.f_npss_view_response_data_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.view_failures_ui.form_name = "f_npss_view_response_data_ui"
	
		// Component level properties - "View Failures Actions" 
		this.view_failures_actions.uictrl_code = "dynamic_ui"
		this.view_failures_actions.uicgc_desc = "View Failures Actions"
		this.view_failures_actions.uicgc_code = "uicgc_29"
		this.view_failures_actions.params = {}
		this.view_failures_actions.datasource = {}
		this.view_failures_actions.context_menu = []
		this.view_failures_actions.views = {}
		this.view_failures_actions.onChangecomponent = new EventEmitter<any>()
		this.view_failures_actions.show = true
		this.view_failures_actions.dynamic_param = {}
		this.view_failures_actions.f_view_failures_actions = {"show":true}
		this.view_failures_actions.current_view = "f_view_failures_actions"
		
		// "Back" Button of "View Failures Actions" component
		this.view_failures_actions_back.label_name = "Back"
		this.view_failures_actions_back.show = true
		this.view_failures_actions_back.disabled = false
		this.view_failures_actions_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.view_failures_actions_back.dynamic_param = {}
		this.view_failures_actions_back.role = []
		this.view_failures_actions_back.action = ""
	
		// Component level properties - "View pro log Req and Res UI" 
		this.view_pro_log_req_and_res_ui.uictrl_code = "dynamic_ui"
		this.view_pro_log_req_and_res_ui.uicgc_desc = "View pro log Req and Res UI"
		this.view_pro_log_req_and_res_ui.uicgc_code = "uicgc_30"
		this.view_pro_log_req_and_res_ui.params = {}
		this.view_pro_log_req_and_res_ui.datasource = {}
		this.view_pro_log_req_and_res_ui.context_menu = []
		this.view_pro_log_req_and_res_ui.views = {}
		this.view_pro_log_req_and_res_ui.onChangecomponent = new EventEmitter<any>()
		this.view_pro_log_req_and_res_ui.show = true
		this.view_pro_log_req_and_res_ui.dynamic_param = {}
		this.view_pro_log_req_and_res_ui.f_view_pro_log_req_and_res_ui = {"show":true}
		this.view_pro_log_req_and_res_ui.current_view = "f_view_pro_log_req_and_res_ui"
		
		// "Back" Button of "View pro log Req and Res UI" component
		this.view_pro_log_req_and_res_ui_back.label_name = "Back"
		this.view_pro_log_req_and_res_ui_back.show = true
		this.view_pro_log_req_and_res_ui_back.disabled = false
		this.view_pro_log_req_and_res_ui_back.params = {"icon_only":false,"uicgcc_style":"fa fa-backward"}
		this.view_pro_log_req_and_res_ui_back.dynamic_param = {}
		this.view_pro_log_req_and_res_ui_back.role = []
		this.view_pro_log_req_and_res_ui_back.action = ""
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__he_from_pg_to_view_details()
		this.page_load__cf_for_routing_key()
		this.page_load__de_for_pl_to_vm()
		this.page_load__he_for_pl_to_vm()
		this.page_load__de_for_vlh_from_pl()
		this.page_load__e_1681967558220()
		this.page_load__e_1681967577172()
		this.page_load__e_1686637866242()
	}

	//Handler for INTERNAL event of "cf for routing key"
	cf_for_routing_key__internal(parent_event_result){
		this.cf_for_routing_key__cf_for_pageload(parent_event_result)
	}

	//Handler for INTERNAL event of "cf for pageload"
	cf_for_pageload__internal(parent_event_result){
		this.cf_for_pageload__cc_for_show_hide_btn(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for show hide btn"
	cc_for_show_hide_btn__internal(parent_event_result){
		this.cc_for_show_hide_btn__tbc_from_page_load_to_search(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__ssp_for_pl_queue()
		this.search_search__cu_for_pl()
		this.search_search__cp_after_search()
		this.search_search__cu_for_tl()
		this.search_search__de_from_search_to_view_message_details()
		this.search_search__de_from_search_to_view_log_hst()
	}

	//Handler for INTERNAL event of "ssp for pl queue"
	ssp_for_pl_queue__internal(parent_event_result){
		this.ssp_for_pl_queue__brfq_for_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for queue"
	brfq_for_queue__internal(parent_event_result){
		this.brfq_for_queue__sfr_for_queue(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "queue"
	queue__selection_changed(){
		this.queue__svm_for_queue()
	}

	//Handler for INTERNAL event of "svm for queue"
	svm_for_queue__internal(parent_event_result){
		this.svm_for_queue__cc_for_queue(parent_event_result)
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
		this.brfq_from_queue_to_tran_list__sfr_for_tran_from_queue(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_for_tl()
		this.transaction_list__ee_from_tran_to_view_details()
		this.transaction_list__ee_for_vm()
		this.transaction_list__ee_for_vlh()
	}

	//Handler for INTERNAL event of "svm for tl"
	svm_for_tl__internal(parent_event_result){
		this.svm_for_tl__ide_show_hide_ide_link(parent_event_result)
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

	//Handler for ACTION_BUTTON_CLICK event of "cbs ref ui save"
	cbs_ref_ui_save__action_button_click(){
		this.cbs_ref_ui_save__cc_for_cbs_save()
	}

	//Handler for INTERNAL event of "cc for cbs save"
	cc_for_cbs_save__internal(parent_event_result){
		this.cc_for_cbs_save__info__for_cbs_save(parent_event_result)
	}

	//Handler for INTERNAL event of "info  for cbs save"
	info__for_cbs_save__internal(parent_event_result){
		this.info__for_cbs_save__rs_for_cbs_save(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__action_button_click(){
		this.navigation_ui_view_tran__sp_for_view_detail_tran()
		this.navigation_ui_view_tran__brfq_for_vertical_tran_detail()
		this.navigation_ui_view_tran__brfq_vprdl()
		this.navigation_ui_view_tran__e_1669461852485()
	}

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_back_to_main()
	}

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__selection_changed(){
		this.history_detail__ssr_from_hd_to_response()
		this.history_detail__ee_from_history_detail_to_view_reaponse()
		this.history_detail__ee_from_history_detail_to_view_req()
		this.history_detail__ssr_from_hd_to_req()
		this.history_detail__ee_for_vreq_vres()
		this.history_detail__svtm_from_history_detail()
		this.history_detail__ssr_from_history_details()
	}

	//Handler for INTERNAL event of "svtm from history detail"
	svtm_from_history_detail__internal(){
		this.svtm_from_history_detail__cc_show_hide_from_history_details()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__action_button_click(){
		this.message_back_ui_back__sp_for_message_back()
	}

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__selection_changed(){
		this.message_detail__ssr_for_mgsgs()
		this.message_detail__ee_from_message_detail_to_show_message()
		this.message_detail__svm_from_message_detail()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__action_button_click(){
		this.message_detail_action_back__sp_for_mda()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__action_button_click(){
		this.message_detail_action_view_message__e_1681998108732()
		this.message_detail_action_view_message__e_1686203804632()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view process log"
	navigation_ui_view_process_log__action_button_click(){
		this.navigation_ui_view_process_log__sp_for_vlh()
		this.navigation_ui_view_process_log__brfq_for_hdl()
	}

	//Handler for INTERNAL event of "brfq for hdl"
	brfq_for_hdl__internal(parent_event_result){
		this.brfq_for_hdl__sfr_for_history_detail(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message log"
	navigation_ui_view_message_log__action_button_click(){
		this.navigation_ui_view_message_log__sp_for_vmd()
		this.navigation_ui_view_message_log__brfq_for_vm()
	}

	//Handler for INTERNAL event of "brfq for vm"
	brfq_for_vm__internal(parent_event_result){
		this.brfq_for_vm__sfr_for_md(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__action_button_click(){
		this.process_log_ui_back__sp_to_main_layout()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view request"
	process_log_ui_view_request__action_button_click(){
		this.process_log_ui_view_request__bt_from_view_req_to_req_ui()
		this.process_log_ui_view_request__sp_for_view_request_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view response"
	process_log_ui_view_response__action_button_click(){
		this.process_log_ui_view_response__bt_from_view_response_to_response_ui()
		this.process_log_ui_view_response__sp_for_response_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__action_button_click(){
		this.single_back_ui_back__sp_for_reqres()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__action_button_click(){
		this.process_log_ui_view_req_and_res__sp_for_vreq()
		this.process_log_ui_view_req_and_res__e_1686142646533()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view api transactions"
	navigation_ui_view_api_transactions__action_button_click(){
		this.navigation_ui_view_api_transactions__e_1681974805898()
		this.navigation_ui_view_api_transactions__tbc_from_view_api_trn_btn_to_srch_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui back"
	view_api_failure__action_ui_back__action_button_click(){
		this.view_api_failure__action_ui_back__e_1681976743789()
	}

	//Handler for ACTION_BUTTON_CLICK event of "view req back ui back"
	view_req_back_ui_back__action_button_click(){
		this.view_req_back_ui_back__e_1681967204745()
	}

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui view failure"
	view_api_failure__action_ui_view_failure__action_button_click(){
		this.view_api_failure__action_ui_view_failure__e_1681967634402()
		this.view_api_failure__action_ui_view_failure__e_1681989229816()
	}

	//Handler for SELECTION_CHANGED event of "view process log list"
	view_process_log_list__selection_changed(){
		this.view_process_log_list__ssr_for_view_api_failure_action_ui()
		this.view_process_log_list__ssr_for_response_ui()
		this.view_process_log_list__ssr_from_vpl_list_to_request_ui()
		this.view_process_log_list__ee_from_view_req_and_res_btn()
		this.view_process_log_list__ee_for_view_failure_btn()
		this.view_process_log_list__ssr_for_view_api_res_ui()
		this.view_process_log_list__svtm_from_vpl_list()
		this.view_process_log_list__ee_for_view_process_log_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui view req and res"
	view_api_failure__action_ui_view_req_and_res__action_button_click(){
		this.view_api_failure__action_ui_view_req_and_res__e_1681967657665()
		this.view_api_failure__action_ui_view_req_and_res__e_1686917708011()
	}

	//Handler for SELECTION_CHANGED event of "api queue"
	api_queue__selection_changed(){
		this.api_queue__svm_for_api_queue()
	}

	//Handler for INTERNAL event of "svm for api queue"
	svm_for_api_queue__internal(parent_event_result){
		this.svm_for_api_queue__cc_for_api_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for api queue"
	cc_for_api_queue__internal(parent_event_result){
		this.cc_for_api_queue__ssp_from_cc_to_processlog_sch(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp from cc to processlog sch"
	ssp_from_cc_to_processlog_sch__internal(parent_event_result){
		this.ssp_from_cc_to_processlog_sch__brfq_for_view_process_log_list(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for view process log list"
	brfq_for_view_process_log_list__internal(parent_event_result){
		this.brfq_for_view_process_log_list__sfr_from_brfq_to_view_pro_log_list(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log search search"
	process_log_search_search__action_button_click(){
		this.process_log_search_search__ssp_from_search_btn_to_search_component()
		this.process_log_search_search__close_popup()
		this.process_log_search_search__e_1686199689330()
	}

	//Handler for INTERNAL event of "ssp from search btn to search component"
	ssp_from_search_btn_to_search_component__internal(parent_event_result){
		this.ssp_from_search_btn_to_search_component__brfq_from_ssp_to_api_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq from ssp to api queue"
	brfq_from_ssp_to_api_queue__internal(parent_event_result){
		this.brfq_from_ssp_to_api_queue__sfr_for_api_queue(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log search clear"
	process_log_search_clear__action_button_click(){
		this.process_log_search_clear__clear_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui search"
	view_api_failure__action_ui_search__action_button_click(){
		this.view_api_failure__action_ui_search__show_profile_popup()
		this.view_api_failure__action_ui_search__e_1684321183829()
	}

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui view process log"
	view_api_failure__action_ui_view_process_log__action_button_click(){
		this.view_api_failure__action_ui_view_process_log__sp_from_view_process_log_btn()
		this.view_api_failure__action_ui_view_process_log__brfq_for_history_details()
	}

	//Handler for INTERNAL event of "brfq for history details"
	brfq_for_history_details__internal(parent_event_result){
		this.brfq_for_history_details__sfr_for_history_details(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "history details"
	history_details__selection_changed(){
		this.history_details__svm_for_history_details()
	}

	//Handler for ACTION_BUTTON_CLICK event of "view process log ui back"
	view_process_log_ui_back__action_button_click(){
		this.view_process_log_ui_back__e_1686640338501()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view failures"
	process_log_ui_view_failures__action_button_click(){
		this.process_log_ui_view_failures__sp_from_view_failure()
		this.process_log_ui_view_failures__bt_from_view_failure_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "view failures actions back"
	view_failures_actions_back__action_button_click(){
		this.view_failures_actions_back__sp_from__back_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "view pro log req and res ui back"
	view_pro_log_req_and_res_ui_back__action_button_click(){
		this.view_pro_log_req_and_res_ui_back__sp_for_back_btn()
	}

	//Handler for ACTION_BUTTON_CLICK event of "view process log ui view req and res"
	view_process_log_ui_view_req_and_res__action_button_click(){
		this.view_process_log_ui_view_req_and_res__cc_for_request_response()
		this.view_process_log_ui_view_req_and_res__sp_from_view_req_and_res()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__he_from_pg_to_view_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1669203437968"
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
		let event_code="e_1669391062280"
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
	page_load__de_for_pl_to_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_message_log"
		let parent_source_id=""
		let event_code="e_1669459009261"
		let event_params={"caller_name":"page_load__de_for_pl_to_vm","event_desc":"DE for PL to VM","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_for_pl_to_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_message_log"
		let parent_source_id=""
		let event_code="e_1669459046512"
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
	page_load__de_for_vlh_from_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1669459120801"
		let event_params={"caller_name":"page_load__de_for_vlh_from_pl","event_desc":"DE for VLH from PL","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__e_1681967558220() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="view_api_failure__action_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1681967558220"
		let event_params={"caller_name":"page_load__e_1681967558220","event_desc":"E_1681967558220","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__e_1681967577172() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="view_api_failure__action_ui_view_failure"
		let parent_source_id=""
		let event_code="e_1681967577172"
		let event_params={"caller_name":"page_load__e_1681967577172","event_desc":"E_1681967577172","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__e_1686637866242() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="view_api_failure__action_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1686637866242"
		let event_params={"caller_name":"page_load__e_1686637866242","event_desc":"E_1686637866242","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for INTERNAL event of "cf for routing key"
	cf_for_routing_key__cf_for_pageload(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_for_routing_key"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1669391083728"
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
	cf_for_pageload__cc_for_show_hide_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_for_pageload"
		let destn_id=""
		let parent_source_id="cf_for_routing_key"
		let event_code="e_1669391113222"
		let event_params={"caller_name":"cf_for_pageload__cc_for_show_hide_btn","event_desc":"CC for Show hide btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_show_hide_btn__tbc_from_page_load_to_search,"
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
	cc_for_show_hide_btn__tbc_from_page_load_to_search(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_show_hide_btn"
		let destn_id="search_search"
		let parent_source_id="cf_for_pageload"
		let event_code="e_1669459284822"
		let event_params={"caller_name":"cc_for_show_hide_btn__tbc_from_page_load_to_search","event_desc":"TBC from Page Load to Search","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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
	search_search__ssp_for_pl_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1666857137821"
		let event_params={"caller_name":"search_search__ssp_for_pl_queue","event_desc":"SSP for PL Queue","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_for_pl_queue__brfq_for_queue,"
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
	search_search__cp_after_search() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1666872358013"
		let event_params={"popup_info":{"context":""},"caller_name":"search_search__cp_after_search","event_desc":"CP after search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724219235","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC View all transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1686721989274","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1686721989418","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686721989578","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686721989738","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1686721989906","date_format":true},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1686721990074","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1686722021994","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1686722022145","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686722022321","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686722022473","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686722058128","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1686722058288","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1686722058447","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1686722080240","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1686722080391","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686722080551","date_format":false},{"column_name":"cr_acct_identification_mask","alias_name":"","mq_id":"MQ_1686722105408","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification_mask,  CR_ACCT_IDENTIFICATION,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  DBTR_ACCT_NAME,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  DBTR_CUST_TYPE,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CDTR_ACCT_NAME,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  DR_SORT_CODE,  CR_SORT_CODE,  CATEGORY_PURPOSE,  CATEGORY_PURPOSE_PRTY,  BASE_CURRENCY,  BASE_AMOUNT,  HDR_TOTAL_RECORDS,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM,  CHARGE_BEARER,  REMITTANCE_INFO,  ACCOUNT_CURRENCY,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  ISSUER_TYPE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG,  PROCESS_TYPE,  PROCESS_GROUP from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_TYPE,   NT.PROCESS_GROUP  from   <arc_tran_db>.NPSS_TRANSACTIONS NT ) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC View all transaction CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Group","target_column":"PROCESS_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1669461702298"
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
	search_search__de_from_search_to_view_log_hst() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1669461731840"
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

	//Handler for INTERNAL event of "ssp for pl queue"
	ssp_for_pl_queue__brfq_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_pl_queue"
		let destn_id="queue"
		let parent_source_id="search_search"
		let event_code="e_1666857183261"
		let event_params={"caller_name":"ssp_for_pl_queue__brfq_for_queue","event_desc":"BRFQ for Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_queue__sfr_for_queue,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724189954","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"View All ARC Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686721830447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686721830622","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.PROCESS_TYPE,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_GROUP  from   <arc_tran_db>.NPSS_TRANSACTIONS NT )v $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC View All Queue CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for queue"
	brfq_for_queue__sfr_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_queue"
		let destn_id="queue"
		let parent_source_id="ssp_for_pl_queue"
		let event_code="e_1673683809175"
		let event_params={"caller_name":"brfq_for_queue__sfr_for_queue","event_desc":"SFR for queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724189954","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"View All ARC Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686721830447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686721830622","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.PROCESS_TYPE,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_GROUP  from   <arc_tran_db>.NPSS_TRANSACTIONS NT )v $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC View All Queue CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let internals="svm_for_queue__cc_for_queue,"
		let event_data={"queue":{"e_1666857327033":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1666857327033","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"PROCESSING_SYSTEM","level":"MI_LEVEL","name":"MI_LEVEL_PROCESSING_SYSTEM","setd3name":"PROCESSING_SYSTEM"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724189954","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"View All ARC Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686721830447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686721830622","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.PROCESS_TYPE,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_GROUP  from   <arc_tran_db>.NPSS_TRANSACTIONS NT )v $WHERE order by  PROCESSING_SYSTEM,  PROCESS_STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC View All Queue CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1670657774385"
		let event_params={"caller_name":"ssp_for_transaction_list__brfq_from_queue_to_tran_list","event_desc":"BRFQ from Queue to Tran List","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_from_queue_to_tran_list__sfr_for_tran_from_queue,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724219235","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC View all transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1686721989274","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1686721989418","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686721989578","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686721989738","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1686721989906","date_format":true},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1686721990074","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1686722021994","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1686722022145","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686722022321","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686722022473","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686722058128","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1686722058288","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1686722058447","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1686722080240","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1686722080391","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686722080551","date_format":false},{"column_name":"cr_acct_identification_mask","alias_name":"","mq_id":"MQ_1686722105408","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification_mask,  CR_ACCT_IDENTIFICATION,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  DBTR_ACCT_NAME,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  DBTR_CUST_TYPE,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CDTR_ACCT_NAME,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  DR_SORT_CODE,  CR_SORT_CODE,  CATEGORY_PURPOSE,  CATEGORY_PURPOSE_PRTY,  BASE_CURRENCY,  BASE_AMOUNT,  HDR_TOTAL_RECORDS,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM,  CHARGE_BEARER,  REMITTANCE_INFO,  ACCOUNT_CURRENCY,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  ISSUER_TYPE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG,  PROCESS_TYPE,  PROCESS_GROUP from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_TYPE,   NT.PROCESS_GROUP  from   <arc_tran_db>.NPSS_TRANSACTIONS NT ) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC View all transaction CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Group","target_column":"PROCESS_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq from queue to tran list"
	brfq_from_queue_to_tran_list__sfr_for_tran_from_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_from_queue_to_tran_list"
		let destn_id="transaction_list"
		let parent_source_id="ssp_for_transaction_list"
		let event_code="e_1670657784176"
		let event_params={"caller_name":"brfq_from_queue_to_tran_list__sfr_for_tran_from_queue","event_desc":"SFR for Tran from Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724219235","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC View all transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1686721989274","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1686721989418","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686721989578","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686721989738","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1686721989906","date_format":true},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1686721990074","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1686722021994","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1686722022145","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686722022321","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686722022473","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686722058128","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1686722058288","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1686722058447","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1686722080240","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1686722080391","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686722080551","date_format":false},{"column_name":"cr_acct_identification_mask","alias_name":"","mq_id":"MQ_1686722105408","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification_mask,  CR_ACCT_IDENTIFICATION,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  DBTR_ACCT_NAME,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  DBTR_CUST_TYPE,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CDTR_ACCT_NAME,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  DR_SORT_CODE,  CR_SORT_CODE,  CATEGORY_PURPOSE,  CATEGORY_PURPOSE_PRTY,  BASE_CURRENCY,  BASE_AMOUNT,  HDR_TOTAL_RECORDS,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM,  CHARGE_BEARER,  REMITTANCE_INFO,  ACCOUNT_CURRENCY,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  ISSUER_TYPE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG,  PROCESS_TYPE,  PROCESS_GROUP from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_TYPE,   NT.PROCESS_GROUP  from   <arc_tran_db>.NPSS_TRANSACTIONS NT ) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC View all transaction CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Group","target_column":"PROCESS_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let internals="svm_for_tl__ide_show_hide_ide_link,"
		let event_data={"transaction_list":{"e_1666857595507":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1666857595507","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"},{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724219235","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC View all transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1686721989274","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1686721989418","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686721989578","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686721989738","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1686721989906","date_format":true},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1686721990074","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1686722021994","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1686722022145","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686722022321","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686722022473","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686722058128","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1686722058288","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1686722058447","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1686722080240","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1686722080391","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686722080551","date_format":false},{"column_name":"cr_acct_identification_mask","alias_name":"","mq_id":"MQ_1686722105408","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification_mask,  CR_ACCT_IDENTIFICATION,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  DBTR_ACCT_NAME,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  DBTR_CUST_TYPE,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CDTR_ACCT_NAME,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  DR_SORT_CODE,  CR_SORT_CODE,  CATEGORY_PURPOSE,  CATEGORY_PURPOSE_PRTY,  BASE_CURRENCY,  BASE_AMOUNT,  HDR_TOTAL_RECORDS,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM,  CHARGE_BEARER,  REMITTANCE_INFO,  ACCOUNT_CURRENCY,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  ISSUER_TYPE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG,  PROCESS_TYPE,  PROCESS_GROUP from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_TYPE,   NT.PROCESS_GROUP  from   <arc_tran_db>.NPSS_TRANSACTIONS NT ) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC View all transaction CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Group","target_column":"PROCESS_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_from_tran_to_view_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1669203489144"
		let event_params={"caller_name":"transaction_list__ee_from_tran_to_view_details","event_desc":"EE from Tran to View Details","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
		let event_code="e_1669461820516"
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
	transaction_list__ee_for_vlh() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1669461902655"
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

	//Handler for INTERNAL event of "svm for tl"
	svm_for_tl__ide_show_hide_ide_link(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_tl"
		let destn_id=""
		let parent_source_id="transaction_list"
		let event_code="e_1671444880048"
		let event_params={"caller_name":"svm_for_tl__ide_show_hide_ide_link","event_desc":"IDE Show hide ide link","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{},"parent_event_result":"SUCCESS"}
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
		let event_params={"caller_name":"navigation_ui_search__spap_for_search","event_desc":"SPAP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1666856790983","window_title":"","window_height":400,"window_width":"700px","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1666857782776"}}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724219235","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC View all transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1686721989274","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1686721989418","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686721989578","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686721989738","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1686721989906","date_format":true},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1686721990074","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1686722021994","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1686722022145","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686722022321","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686722022473","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686722058128","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1686722058288","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1686722058447","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1686722080240","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1686722080391","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686722080551","date_format":false},{"column_name":"cr_acct_identification_mask","alias_name":"","mq_id":"MQ_1686722105408","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification_mask,  CR_ACCT_IDENTIFICATION,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  DBTR_ACCT_NAME,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  DBTR_CUST_TYPE,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CDTR_ACCT_NAME,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  DR_SORT_CODE,  CR_SORT_CODE,  CATEGORY_PURPOSE,  CATEGORY_PURPOSE_PRTY,  BASE_CURRENCY,  BASE_AMOUNT,  HDR_TOTAL_RECORDS,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM,  CHARGE_BEARER,  REMITTANCE_INFO,  ACCOUNT_CURRENCY,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  ISSUER_TYPE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG,  PROCESS_TYPE,  PROCESS_GROUP from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_TYPE,   NT.PROCESS_GROUP  from   <arc_tran_db>.NPSS_TRANSACTIONS NT ) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC View all transaction CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Group","target_column":"PROCESS_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724219235","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC View all transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1686721989274","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1686721989418","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686721989578","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686721989738","date_format":false},{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1686721989906","date_format":true},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1686721990074","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1686722021994","date_format":false,"currency_format":true},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1686722022145","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686722022321","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686722022473","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686722058128","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1686722058288","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1686722058447","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1686722080240","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1686722080391","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686722080551","date_format":false},{"column_name":"cr_acct_identification_mask","alias_name":"","mq_id":"MQ_1686722105408","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification_mask,  CR_ACCT_IDENTIFICATION,  UETR,  VALUE_DATE,  ACCP_DATE_TIME,  CREATED_DATE,  DATEMI,  EXHF_ID,  CDTR_IBAN,  TENANT_ID,  TRAN_REF_ID,  DEPARTMENT_CODE,  PAYMENT_ENDTOEND_ID,  CLRSYSREF,  CDTR_ACCT_NO,  DBTR_ACCT_NO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  STATUS,  PROCESSING_SYSTEM,  PROCESS_STATUS,  DBTR_ACCT_NAME,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  DBTR_CUST_TYPE,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  CDTR_ACCT_NAME,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  DR_SORT_CODE,  CR_SORT_CODE,  CATEGORY_PURPOSE,  CATEGORY_PURPOSE_PRTY,  BASE_CURRENCY,  BASE_AMOUNT,  HDR_TOTAL_RECORDS,  HDR_TOTAL_AMOUNT,  HDR_CLEARING_SYSTEM,  CHARGE_BEARER,  REMITTANCE_INFO,  ACCOUNT_CURRENCY,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  ISSUER_TYPE_CODE,  CBS_REF_NO,  CBS_POSTING_FLAG,  PROCESS_TYPE,  PROCESS_GROUP from  (  select   NT.NPSST_ID,   NT.UETR,   NT.VALUE_DATE,   NT.ACCP_DATE_TIME,   NT.CREATED_DATE,   TO_CHAR(NT.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   NT.DEPARTMENT_CODE,   NT.TENANT_ID,   NT.EXHF_ID,   NT.CDTR_IBAN,   NT.TRAN_REF_ID,   NT.PAYMENT_ENDTOEND_ID,   NT.CLRSYSREF,   NT.CDTR_ACCT_NO,   NT.DBTR_ACCT_NO,   NT.INTRBK_STTLM_CUR,   NT.INTRBK_STTLM_AMNT,   NT.STATUS,   NT.PROCESSING_SYSTEM,   NT.PROCESS_STATUS,   NT.DBTR_ACCT_NAME,   NT.DBTR_PHONE_NO,   NT.DBTR_EMAIL_ID,   NT.DBTR_DOCUMENT_ID,   NT.DBTR_IBAN,   NT.DBTR_CUST_TYPE,   NT.DBTR_PRVT_ID,   NT.DBTR_OTHER_ISSUER,   NT.CDTR_ACCT_NAME,   NT.CDTR_PHONE_NO,   NT.CDTR_EMAIL_ID,   NT.CDTR_DOCUMENT_ID,   NT.DR_SORT_CODE,   NT.CR_SORT_CODE,   NT.CATEGORY_PURPOSE,   NT.CATEGORY_PURPOSE_PRTY,   NT.CR_ACCT_IDENTIFICATION,   NT.BASE_CURRENCY,   NT.BASE_AMOUNT,   NT.HDR_TOTAL_RECORDS,   NT.HDR_TOTAL_AMOUNT,   NT.HDR_CLEARING_SYSTEM,   NT.CHARGE_BEARER,   NT.REMITTANCE_INFO,   NT.ACCOUNT_CURRENCY,   NT.CHANNEL_ID,   NT.CHANNEL_REFNO,   NT.CHANNEL_USERID,   NT.CHANNEL_PRODUCT,   NT.CHANNEL_SUB_PRODUCT,   NT.CHANNEL_TRAN_CODE,   NT.ISSUER_TYPE_CODE,   NT.CBS_REF_NO,   NT.CBS_POSTING_FLAG,   NT.PROCESS_TYPE,   NT.PROCESS_GROUP  from   <arc_tran_db>.NPSS_TRANSACTIONS NT ) V $WHERE order by  NPSST_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC View all transaction CCD","filter":[{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"currency_format":true},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Group","target_column":"PROCESS_GROUP","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "cbs ref ui save"
	cbs_ref_ui_save__cc_for_cbs_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="cbs_ref_ui_save"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1668850642032"
		let event_params={"caller_name":"cbs_ref_ui_save__cc_for_cbs_save","event_desc":"CC for CBS save","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"cbs_ref_ui_save","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_cbs_save__info__for_cbs_save,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_rct_already_postingService.fn_npss_cs_rct_already_posting(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for cbs save"
	cc_for_cbs_save__info__for_cbs_save(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_cbs_save"
		let destn_id=""
		let parent_source_id="cbs_ref_ui_save"
		let event_code="e_1668850685535"
		let event_params={"caller_name":"cc_for_cbs_save__info__for_cbs_save","event_desc":"INFO  for CBS save","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Transaction has been marked as already posted successfully","root_source_id":"cbs_ref_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info__for_cbs_save__rs_for_cbs_save,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info  for cbs save"
	info__for_cbs_save__rs_for_cbs_save(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info__for_cbs_save"
		let destn_id=""
		let parent_source_id="cc_for_cbs_save"
		let event_code="e_1668850696902"
		let event_params={"caller_name":"info__for_cbs_save__rs_for_cbs_save","event_desc":"RS for CBS save","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"cbs_ref_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__sp_for_view_detail_tran() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669203628429"
		let event_params={"caller_name":"navigation_ui_view_tran__sp_for_view_detail_tran","event_desc":"SP for View Detail Tran","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"profile_code":"BTL_1304_1669203307471"}}
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
		let event_code="e_1669203693291"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_for_vertical_tran_detail","event_desc":"BRFQ for Vertical Tran Detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724265186","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC Payment and Dr Cr Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1686722378592","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1686722378751","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1686722378911","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1686722379215","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1686722379375","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1686722379687","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1686722379839","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686722380015","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1686722380207","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1686722433334","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1686722433485","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1686722433637","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1686722433813","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1686722433974","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1686722468062","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1686722468213","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1686722468365","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686722468533","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1686722468701","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1686722500284","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1686722500419","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1686722500572","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1686722526444","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686722526595","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686722526747","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1686722526907","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686722527075","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1686722527243","date_format":false},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1686722574034","date_format":true},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686722574194","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1686722574354","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1686722574498","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1686722574650","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1686722605154","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1686722605314","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1686722605466","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1686722605633","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1686722636944","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1686722637096","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1686722637265","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686722637424","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1686722665712","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1686722665880","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_card_decrypt_and_mask(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_card_decrypt_and_mask(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   <arc_tran_db>.NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC Dr Cr Tran CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__brfq_vprdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="view_payment_details"
		let parent_source_id=""
		let event_code="e_1669206531360"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_vprdl","event_desc":"BRFQ VPRDL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724342380","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC Payment and Dr Cr Tran MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1686722378592","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1686722378751","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1686722378911","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1686722379215","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1686722379375","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1686722379687","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1686722379839","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686722380015","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1686722380207","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1686722433334","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1686722433485","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1686722433637","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1686722433813","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1686722433974","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1686722468062","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1686722468213","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1686722468365","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686722468533","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1686722468701","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1686722500284","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1686722500419","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1686722500572","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1686722526444","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686722526595","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686722526747","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1686722526907","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686722527075","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1686722527243","date_format":false},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1686722574034","date_format":true},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686722574194","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1686722574354","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1686722574498","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1686722574650","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1686722605154","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1686722605314","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1686722605466","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1686722605633","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1686722636944","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1686722637096","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1686722637265","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686722637424","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1686722665712","date_format":false},{"column_name":"PROCESS_GROUP","alias_name":"","mq_id":"MQ_1686722665880","date_format":false}],"joins":[]},"eq_text":"select  NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_card_decrypt_and_mask(CR_ACCT_IDENTIFICATION,  $PCIDSS_KEY) as CR_ACCT_IDENTIFICATION,  fn_card_decrypt_and_mask(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   A.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   A.CR_ACCT_IDENTIFICATION,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM  from   <arc_tran_db>.NPSS_TRANSACTIONS A  left join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__e_1669461852485() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1669461852485"
		let event_params={"caller_name":"navigation_ui_view_tran__e_1669461852485","event_desc":"E_1669461852485","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__sp_for_back_to_main() { 
		let Dest_Is_ctrl=true
		
		let source_id="back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669203731812"
		let event_params={"caller_name":"back_ui_back__sp_for_back_to_main","event_desc":"SP for Back to Main","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1666856599156"}}
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
	history_detail__ssr_from_hd_to_response() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1669459368070"
		let event_params={"caller_name":"history_detail__ssr_from_hd_to_response","event_desc":"SSR from HD to Response","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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
	history_detail__ee_from_history_detail_to_view_reaponse() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_response"
		let parent_source_id=""
		let event_code="e_1669459413573"
		let event_params={"caller_name":"history_detail__ee_from_history_detail_to_view_reaponse","event_desc":"EE from History Detail to View Reaponse","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	history_detail__ee_from_history_detail_to_view_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_request"
		let parent_source_id=""
		let event_code="e_1669459454974"
		let event_params={"caller_name":"history_detail__ee_from_history_detail_to_view_req","event_desc":"EE from History Detail to View Req","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	history_detail__ssr_from_hd_to_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1669459487054"
		let event_params={"caller_name":"history_detail__ssr_from_hd_to_req","event_desc":"SSR from HD to Req","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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
	history_detail__ee_for_vreq_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1670244586967"
		let event_params={"caller_name":"history_detail__ee_for_vreq_vres","event_desc":"EE for VReq VRes","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	history_detail__svtm_from_history_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1685948589446"
		let event_params={"caller_name":"history_detail__svtm_from_history_detail","event_desc":"SVTM from History Detail","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svtm_from_history_detail__cc_show_hide_from_history_details,"
		let event_data={"history_detail":{"e_1685948589446":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_18","event_code":"E_1685948589446","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSTPL_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSTPL_ID","setd3name":"NPSSTPL_ID"},{"type":"LOCAL","column_name":"PROCESS_NAME","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_NAME","setd3name":"PROCESS_NAME"},{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724059339","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686734572576","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686734572602","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686734572953","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686734573129","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686734573289","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686734573457","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686734777940","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686734778108","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686734791773","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686734802404","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734802571","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686734830483","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686734839779","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686734849139","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686734857139","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686734864643","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686734873026","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686734879323","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686734879650","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686734879930","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734880138","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734905257","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734905426","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686734924257","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from  <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <arc_tran_db>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC HST Process Log CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"FT Number/ProcessRefNo","target_column":"PROCESS_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__ssr_from_history_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="view_failures_ui"
		let parent_source_id=""
		let event_code="e_1686913642220"
		let event_params={"caller_name":"history_detail__ssr_from_history_details","event_desc":"SSR from history details","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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

	//Handler for INTERNAL event of "svtm from history detail"
	svtm_from_history_detail__cc_show_hide_from_history_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="svtm_from_history_detail"
		let destn_id=""
		let parent_source_id="history_detail"
		let event_code="e_1686913699829"
		let event_params={"caller_name":"svtm_from_history_detail__cc_show_hide_from_history_details","event_desc":"CC show hide from history details","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__sp_for_message_back() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669459556170"
		let event_params={"caller_name":"message_back_ui_back__sp_for_message_back","event_desc":"SP for message back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1669458390905"}}
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

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__ssr_for_mgsgs() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1669459657891"
		let event_params={"caller_name":"message_detail__ssr_for_mgsgs","event_desc":"SSR for MGSGS","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"message_detail","raiseparam":{}}
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
	message_detail__ee_from_message_detail_to_show_message() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail_action_view_message"
		let parent_source_id=""
		let event_code="e_1669459694162"
		let event_params={"caller_name":"message_detail__ee_from_message_detail_to_show_message","event_desc":"EE from Message Detail to Show Message","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"message_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__svm_from_message_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail"
		let parent_source_id=""
		let event_code="e_1687247110118"
		let event_params={"caller_name":"message_detail__svm_from_message_detail","event_desc":"SVM from message detail","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"message_detail","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"message_detail":{"e_1687247110118":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_16","event_code":"E_1687247110118","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"NPSSTRRD_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSTRRD_ID","setd3name":"NPSSTRRD_ID"},{"type":"LOCAL","column_name":"PROCESS_NAME","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_NAME","setd3name":"PROCESS_NAME"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_16","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724133333","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1686735764458","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1686735764609","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686735764762","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686735764921","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686735765073","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1686735765217","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686735765369","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686735765529","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686735765689","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686735765841","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1686735766010","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1686735766137","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1686735848546","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1686735848713","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1686735848858","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1686735868802","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1686735879115","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1686735886242","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686735894418","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,  PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,   NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   <arc_tran_db>.NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join <arc_tran_db>.NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC REQ RESP CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__sp_for_mda() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669459753832"
		let event_params={"caller_name":"message_detail_action_back__sp_for_mda","event_desc":"SP for MDA","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_back","raiseparam":{"profile_code":"BTL_1304_1666856599156"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__e_1681998108732() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1681998108732"
		let event_params={"caller_name":"message_detail_action_view_message__e_1681998108732","event_desc":"E_1681998108732","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"profile_code":"BTL_1304_1669458494431"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__e_1686203804632() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1686203804632"
		let event_params={"caller_name":"message_detail_action_view_message__e_1686203804632","event_desc":"E_1686203804632","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_arc_masking_req_resService.fn_npss_cs_arc_masking_req_res(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1669460061833"
		let event_params={"caller_name":"navigation_ui_view_process_log__sp_for_vlh","event_desc":"SP for VLH","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{"profile_code":"BTL_1304_1669457979784"}}
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
	navigation_ui_view_process_log__brfq_for_hdl() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_process_log"
		let destn_id="history_detail"
		let parent_source_id=""
		let event_code="e_1669460115545"
		let event_params={"caller_name":"navigation_ui_view_process_log__brfq_for_hdl","event_desc":"BRFQ for HDL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_hdl__sfr_for_history_detail,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724059339","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686734572576","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686734572602","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686734572953","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686734573129","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686734573289","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686734573457","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686734777940","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686734778108","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686734791773","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686734802404","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734802571","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686734830483","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686734839779","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686734849139","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686734857139","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686734864643","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686734873026","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686734879323","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686734879650","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686734879930","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734880138","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734905257","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734905426","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686734924257","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from  <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <arc_tran_db>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC HST Process Log CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"FT Number/ProcessRefNo","target_column":"PROCESS_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for hdl"
	brfq_for_hdl__sfr_for_history_detail(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_hdl"
		let destn_id="history_detail"
		let parent_source_id="navigation_ui_view_process_log"
		let event_code="e_1669460145870"
		let event_params={"caller_name":"brfq_for_hdl__sfr_for_history_detail","event_desc":"SFR for History Detail","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_18","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724059339","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686734572576","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686734572602","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686734572953","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686734573129","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686734573289","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686734573457","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686734777940","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686734778108","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686734791773","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686734802404","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734802571","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686734830483","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686734839779","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686734849139","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686734857139","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686734864643","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686734873026","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686734879323","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686734879650","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686734879930","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734880138","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734905257","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686734905426","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686734924257","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from  <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <arc_tran_db>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC HST Process Log CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"FT Number/ProcessRefNo","target_column":"PROCESS_REF_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1669460201522"
		let event_params={"caller_name":"navigation_ui_view_message_log__sp_for_vmd","event_desc":"SP for VMD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{"profile_code":"BTL_1304_1669458390905"}}
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
		let event_code="e_1669460366086"
		let event_params={"caller_name":"navigation_ui_view_message_log__brfq_for_vm","event_desc":"BRFQ for VM","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_vm__sfr_for_md,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_16","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724133333","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1686735764458","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1686735764609","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686735764762","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686735764921","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686735765073","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1686735765217","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686735765369","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686735765529","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686735765689","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686735765841","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1686735766010","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1686735766137","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1686735848546","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1686735848713","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1686735848858","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1686735868802","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1686735879115","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1686735886242","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686735894418","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,  PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,   NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   <arc_tran_db>.NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join <arc_tran_db>.NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC REQ RESP CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for vm"
	brfq_for_vm__sfr_for_md(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_vm"
		let destn_id="message_detail"
		let parent_source_id="navigation_ui_view_message_log"
		let event_code="e_1669460393893"
		let event_params={"caller_name":"brfq_for_vm__sfr_for_md","event_desc":"SFR for MD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_16","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686724133333","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1686735764458","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1686735764609","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686735764762","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686735764921","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686735765073","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1686735765217","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686735765369","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686735765529","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686735765689","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686735765841","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1686735766010","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1686735766137","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1686735848546","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1686735848713","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1686735848858","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1686735868802","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1686735879115","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1686735886242","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686735894418","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,  PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,   NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   <arc_tran_db>.NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join <arc_tran_db>.NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC REQ RESP CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "process log ui back"
	process_log_ui_back__sp_to_main_layout() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460484962"
		let event_params={"caller_name":"process_log_ui_back__sp_to_main_layout","event_desc":"SP to Main layout","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_back","raiseparam":{"profile_code":"BTL_1304_1666856599156"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view request"
	process_log_ui_view_request__bt_from_view_req_to_req_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_request"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1669460625758"
		let event_params={"caller_name":"process_log_ui_view_request__bt_from_view_req_to_req_ui","event_desc":"BT from View Req to Req UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_request","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
	process_log_ui_view_request__sp_for_view_request_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_request"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460658396"
		let event_params={"caller_name":"process_log_ui_view_request__sp_for_view_request_btn","event_desc":"SP for view Request btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_request","raiseparam":{"profile_code":"BTL_1304_1669458300218"}}
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
	process_log_ui_view_response__bt_from_view_response_to_response_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_response"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1669460727091"
		let event_params={"caller_name":"process_log_ui_view_response__bt_from_view_response_to_response_ui","event_desc":"BT from View Response to Response UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_response","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
	process_log_ui_view_response__sp_for_response_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_response"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460752211"
		let event_params={"caller_name":"process_log_ui_view_response__sp_for_response_btn","event_desc":"SP for Response btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_response","raiseparam":{"profile_code":"BTL_1304_1669458178213"}}
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
	single_back_ui_back__sp_for_reqres() { 
		let Dest_Is_ctrl=true
		
		let source_id="single_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669460836168"
		let event_params={"caller_name":"single_back_ui_back__sp_for_reqres","event_desc":"SP for REQ,RES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"single_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1669457979784"}}
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
	process_log_ui_view_req_and_res__sp_for_vreq() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670244529090"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__sp_for_vreq","event_desc":"SP for vreq","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1670244292991"}}
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
	process_log_ui_view_req_and_res__e_1686142646533() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1686142646533"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__e_1686142646533","event_desc":"E_1686142646533","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_arc_masking_req_resService.fn_npss_cs_arc_masking_req_res(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view api transactions"
	navigation_ui_view_api_transactions__e_1681974805898() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_api_transactions"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1681974805898"
		let event_params={"caller_name":"navigation_ui_view_api_transactions__e_1681974805898","event_desc":"E_1681974805898","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_api_transactions","raiseparam":{"profile_code":"BTL_1304_1681966202861"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view api transactions"
	navigation_ui_view_api_transactions__tbc_from_view_api_trn_btn_to_srch_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_api_transactions"
		let destn_id="process_log_search_search"
		let parent_source_id=""
		let event_code="e_1686115365937"
		let event_params={"caller_name":"navigation_ui_view_api_transactions__tbc_from_view_api_trn_btn_to_srch_btn","event_desc":"TBC From view api trn btn to srch btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_api_transactions","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui back"
	view_api_failure__action_ui_back__e_1681976743789() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_api_failure__action_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1681976743789"
		let event_params={"caller_name":"view_api_failure__action_ui_back__e_1681976743789","event_desc":"E_1681976743789","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_api_failure__action_ui_back","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view req back ui back"
	view_req_back_ui_back__e_1681967204745() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_req_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1681967204745"
		let event_params={"caller_name":"view_req_back_ui_back__e_1681967204745","event_desc":"E_1681967204745","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_req_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1681966202861"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui view failure"
	view_api_failure__action_ui_view_failure__e_1681967634402() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_api_failure__action_ui_view_failure"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1681967634402"
		let event_params={"caller_name":"view_api_failure__action_ui_view_failure__e_1681967634402","event_desc":"E_1681967634402","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_api_failure__action_ui_view_failure","raiseparam":{"profile_code":"BTL_1304_1681966827545"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui view failure"
	view_api_failure__action_ui_view_failure__e_1681989229816() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_api_failure__action_ui_view_failure"
		let destn_id="view_api_res_ui"
		let parent_source_id=""
		let event_code="e_1681989229816"
		let event_params={"caller_name":"view_api_failure__action_ui_view_failure__e_1681989229816","event_desc":"E_1681989229816","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_api_failure__action_ui_view_failure","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
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

	//Handler for SELECTION_CHANGED event of "view process log list"
	view_process_log_list__ssr_for_view_api_failure_action_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_process_log_list"
		let destn_id="view_api_failure__action_ui"
		let parent_source_id=""
		let event_code="e_1681967257508"
		let event_params={"caller_name":"view_process_log_list__ssr_for_view_api_failure_action_ui","event_desc":"SSR for view API Failure action UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"view_process_log_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "view process log list"
	view_process_log_list__ssr_for_response_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_process_log_list"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1681967383501"
		let event_params={"caller_name":"view_process_log_list__ssr_for_response_ui","event_desc":"SSR for response ui","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"view_process_log_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "view process log list"
	view_process_log_list__ssr_from_vpl_list_to_request_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_process_log_list"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1681967394348"
		let event_params={"caller_name":"view_process_log_list__ssr_from_vpl_list_to_request_ui","event_desc":"SSR from VPL list to request ui","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"view_process_log_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "view process log list"
	view_process_log_list__ee_from_view_req_and_res_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_process_log_list"
		let destn_id="view_api_failure__action_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1681967528863"
		let event_params={"caller_name":"view_process_log_list__ee_from_view_req_and_res_btn","event_desc":"EE from view req and res btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"view_process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "view process log list"
	view_process_log_list__ee_for_view_failure_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_process_log_list"
		let destn_id="view_api_failure__action_ui_view_failure"
		let parent_source_id=""
		let event_code="e_1681967544709"
		let event_params={"caller_name":"view_process_log_list__ee_for_view_failure_btn","event_desc":"EE for view failure btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"view_process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for SELECTION_CHANGED event of "view process log list"
	view_process_log_list__ssr_for_view_api_res_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_process_log_list"
		let destn_id="view_api_res_ui"
		let parent_source_id=""
		let event_code="e_1681989250949"
		let event_params={"caller_name":"view_process_log_list__ssr_for_view_api_res_ui","event_desc":"SSR for view API Res UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"view_process_log_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "view process log list"
	view_process_log_list__svtm_from_vpl_list() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_process_log_list"
		let destn_id="view_process_log_list"
		let parent_source_id=""
		let event_code="e_1686637045270"
		let event_params={"caller_name":"view_process_log_list__svtm_from_vpl_list","event_desc":"SVTM from VPL list","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"view_process_log_list","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"view_process_log_list":{"e_1686637045270":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_20","event_code":"E_1686637045270","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"},{"type":"LOCAL","column_name":"PROCESS_NAME","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_NAME","setd3name":"PROCESS_NAME"},{"type":"LOCAL","column_name":"NPSSTPL_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSTPL_ID","setd3name":"NPSSTPL_ID"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686744074239","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC API Process log detail MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686746881693","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686746902805","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686746902988","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686746921845","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922020","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922204","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922420","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686746960667","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746960835","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686746960979","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686746984396","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686746984563","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686747014658","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686747014842","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686747045962","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686747046131","date_format":false},{"column_name":"REQUEST_DATA_JSON","alias_name":"","mq_id":"MQ_1686747062201","date_format":false},{"column_name":"RESPONSE_DATA_JSON","alias_name":"","mq_id":"MQ_1686747062594","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686747092633","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686747092809","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686747092953","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686747115537","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686747115704","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686747147672","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686747147880","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1686747168464","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1686747168672","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1686747189496","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686747197399","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1686747197703","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1686747215368","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  API_PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  API_PROCESS_STATUS,  API_STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DT_CODE,  DTT_CODE,  V_CODE,  DBTR_IBAN,  AMOUNT,  TRAN_REF_ID,  row_num from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   row_number() over( partition by a.uetr  order by   a.npsstpl_id desc) as row_num  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y' union  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   case    when a.status = 'OP_AC_VAL_FAILED' then 1   end as row_num  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  where   a.status = 'OP_AC_VAL_FAILED') V where  row_num = 1 $AND order by  NPSSTPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC API Process log detail CCD","filter":[{"filter_name":"API_PROCESS_STATUS","binding_name":"API_PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_API_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"API_PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_API_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"API_STATUS","binding_value":"","source_name":"MI_LEVEL_API_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Validation Code","target_column":"V_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Error Code","target_column":"RESPONSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Uetr","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "view process log list"
	view_process_log_list__ee_for_view_process_log_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_process_log_list"
		let destn_id="view_api_failure__action_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1686637802151"
		let event_params={"caller_name":"view_process_log_list__ee_for_view_process_log_btn","event_desc":"EE for view process log btn","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"view_process_log_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui view req and res"
	view_api_failure__action_ui_view_req_and_res__e_1681967657665() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_api_failure__action_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1681967657665"
		let event_params={"caller_name":"view_api_failure__action_ui_view_req_and_res__e_1681967657665","event_desc":"E_1681967657665","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_api_failure__action_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1681966510169"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui view req and res"
	view_api_failure__action_ui_view_req_and_res__e_1686917708011() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_api_failure__action_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1686917708011"
		let event_params={"caller_name":"view_api_failure__action_ui_view_req_and_res__e_1686917708011","event_desc":"E_1686917708011","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_api_failure__action_ui_view_req_and_res","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_arc_masking_req_resService.fn_npss_cs_arc_masking_req_res(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "api queue"
	api_queue__svm_for_api_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="api_queue"
		let destn_id="api_queue"
		let parent_source_id=""
		let event_code="e_1681975061939"
		let event_params={"caller_name":"api_queue__svm_for_api_queue","event_desc":"SVM for API Queue","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"api_queue","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals="svm_for_api_queue__cc_for_api_queue,"
		let event_data={"api_queue":{"e_1681975061939":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_23","event_code":"E_1681975061939","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"API_PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_API_PROCESS_STATUS","setd3name":"API_PROCESS_STATUS"},{"type":"LOCAL","column_name":"API_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_API_STATUS","setd3name":"API_STATUS"},{"type":"LOCAL","column_name":"API_PROCESSING_SYSTEM","level":"MI_LEVEL","name":"MI_LEVEL_API_PROCESSING_SYSTEM","setd3name":"PROCESSING_SYSTEM"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_23","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686743999207","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC API Process log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746157162","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686746224121","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686746239600","date_format":false},{"column_name":"API_STATUS","alias_name":"","mq_id":"MQ_1686746253056","date_format":false},{"column_name":"API_PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686746262888","date_format":false},{"column_name":"API_PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746271264","date_format":false}],"joins":[]},"eq_text":"select         distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when nt.process_type = 'OP' then 'Total'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) = current_date   and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when nt.channel_id = 'IBMB' then 'IBMB'    when nt.channel_id = 'RMB' then 'RMB'    when nt.channel_id = 'RIB' then 'RIB'    when nt.channel_id = 'CMB' then 'CMB'    when nt.channel_id = 'CIB' then 'CIB'    when nt.channel_id = 'CMS' then 'CMS'    when nt.channel_id = 'NFR' then 'NFR'    when nt.channel_id = 'CMSCMS' then 'CMSCMS'    when nt.channel_id = 'IPP' then 'IPP'    when nt.channel_id = 'CMSINF' then 'CMSINF'    when nt.channel_id = 'MOB' then 'MOB'    when nt.channel_id = 'MBL' then 'MBL'    when nt.channel_id = 'CMSCMD' then 'CMSCMD'    when nt.channel_id = 'IB' then 'IB'    when nt.channel_id = 'RIBINF' then 'RIBINF'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) = current_date    and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when nt.process_group in ('Manual', 'MANUAL', 'manual') then 'Manual'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) = current_date    and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when ntpl.process_name = 'Place Pacs008'     and ((     select      count(*) as count     from      npss_trn_process_log     where      npss_trn_process_log.process_name = 'PACS.008'      and npss_trn_process_log.uetr = ntpl.uetr )) = 0 then 'Pending Screening'     when ntpl.process_name = 'Place Pacs.007'     and ((     select      count(*) as count     from      npss_trn_process_log     where      npss_trn_process_log.process_name = 'PACS.007'      and npss_trn_process_log.uetr = ntpl.uetr )) = 0 then 'Pending Screening'     when ((ntpl.process_name = 'PACS.008'      and ntpl.processing_system <> 'IBM_MQ')     or (ntpl.process_name = 'PACS.008'      and ntpl.processing_system = 'IBM_MQ'      and ntpl.status = 'IP_RCT_EXCEPTION')     or (ntpl.process_name = 'PACS.007'      and ntpl.processing_system <> 'IBM_MQ')     or (ntpl.process_name = 'PACS.007'      and ntpl.processing_system = 'IBM_MQ'      and ntpl.status = 'IP_RCT_EXCEPTION')) then 'Pending Screening'     else 'OTHER'    end as Pending_Detais_OP   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr    and to_date(to_char(nt.created_date ,    'yyyy-mm-dd' ),    'yyyy-mm-dd' ) = current_date     and NT.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when ((ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTExceptionFailure'     and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE'))     or (ntpl.process_name = 'Receive Pacs004'      and nt.process_status = 'RCTExceptionFailure'      and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE'))      or (ntpl.process_name = 'Place Pacs.007'       and nt.status in ('OP_REVERSAL_REQ_REPAIR'))) then 'Pending (Maker)'    when ((ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTExceptionFailure'     and nt.status in ('OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY'))     or (ntpl.process_name = 'Receive Pacs004'      and nt.process_status = 'RCTExceptionFailure'      and nt.status in ('OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY'))      or (ntpl.process_name = 'Place Pacs.007'       and nt.status in ('OP_REVERSAL_REQ_INITIATED'))) then 'Pending (Checker)'    when ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTCompleted' then 'SEND TO CB'     when ntpl.process_name = 'Place Pacs.007' then 'SEND TO CB'     when ntpl.process_name = 'Place Pacs008'     and (nt.status = 'OP_RCT_STATUS_RECEIVED'      or nt.status = 'OP_P2P_STATUS_ACCEPTED'      or nt.status = 'OP_P2B_STATUS_ACCEPTED') then 'CBACK'     when ntpl.process_name = 'Place Pacs008'     and (nt.status = 'OP_AC_REV_POSTING_SUCCESS'      or nt.status = 'OP_AC_REV_POSTING_SUCCESS'      or nt.process_status = 'OP_AC_STATUS_REJECTED'      or nt.process_status = 'OP_P2P_REV_POSTING_SUCCESS'      or nt.process_status = 'OP_P2B_STATUS_REJECTED'      or nt.process_status = 'OP_P2B_REV_POSTING_SUCCESS') then 'CBNACK'     else 'OTHER'    end as Pending_Detais_OP   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr    and to_date(to_char(nt.created_date ,    'yyyy-mm-dd' ),    'yyyy-mm-dd' ) = current_date     and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when ((ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTExceptionFailure'     and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY'))     or (ntpl.process_name = 'Receive Pacs004'      and nt.process_status = 'RCTExceptionFailure'      and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY'))      or (ntpl.process_name = 'Place Pacs.007'       and nt.status in ('OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED'))) then 'Pending (T-1)'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and nt.process_type = 'OP'   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) < current_date    and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY', 'OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY', 'OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED')) v where  Pending_Detais_OP <> 'OTHER' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC API Process log CCD","filter":[{"filter_name":"STATUS","binding_name":"API_STATUS","binding_value":"","source_name":"OP_AC_MAND_VAL_FAILED,OP_AC_DUPL_VAL_FAILED,OP_P2B_FUND_RESERVED,OP_AC_PCODE_VAL_FAILED,OP_AC_PBANK_VAL_FAILED,OP_P2P_SENDER_IBAN_FAILED,OP_P2P_PAYMENT_FAILED, OP_P2P_POSTING_FAILURE,OP_P2P_POSTING_SUSPICIOUS,OP_P2B_FUND_UNFREEZED,OP_P2B_PAYMENT_FAILED,OP_P2B_FUND_RES_FAILURE,OP_P2B_FUND_RES_SUSPICIOUS,OP_P2B_FUND_UNFR_FAILURE,OP_P2B_FUND_UNFR_SUSPICIOUS,OP_P2B_FUND_AUTH_FAILURE,OP_P2B_FUND_AUTH_SUSPICIOUS,OP_P2P_DEBIT_POSTING_SUCCESS,OP_P2B_DEBIT_POSTING_SUCCESS,OP_INAU_DEBIT_POSTING_SUCCESS,OP_AUTH_DEBIT_POSTING_SUCCESS,OP_UNFREEZE_DEBIT_POSTING_SUCCESS,OP_P2P_DEBIT_POSTING_SUSCIPIOUS,OP_P2B_DEBIT_POSTING_SUSCIPIOUS,OP_INAU_DEBIT_POSTING_SUSCIPIOUS,OP_AUTH_DEBIT_POSTING_SUSCIPIOUS,OP_UNFREEZE_DEBIT_POSTING_SUSCIPIOUS,OP_P2P_POSTING_NOT_HAPPENED,OP_P2B_POSTING_NOT_HAPPENED,OP_INAU_POSTING_NOT_HAPPENED,OP_AUTH_POSTING_NOT_HAPPENED,OP_UNFREEZE_POSTING_NOT_HAPPENED,OP_P2B_REV_POSTING_SUCCESS,OP_P2P_REV_POSTING_SUCCESS,OP_AC_VAL_FAILED","source_value":"","source_type":"HARDCODED","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"API_PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"API_PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"API_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for api queue"
	svm_for_api_queue__cc_for_api_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_api_queue"
		let destn_id=""
		let parent_source_id="api_queue"
		let event_code="e_1686122752509"
		let event_params={"caller_name":"svm_for_api_queue__cc_for_api_queue","event_desc":"CC for API Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"api_queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_api_queue__ssp_from_cc_to_processlog_sch,"
		let event_data={}
		let data_source={}
		try {
			this.torus_cs_show_hideService.fn_torus_cs_show_hide(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for api queue"
	cc_for_api_queue__ssp_from_cc_to_processlog_sch(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_api_queue"
		let destn_id="process_log_search"
		let parent_source_id="svm_for_api_queue"
		let event_code="e_1686122803254"
		let event_params={"caller_name":"cc_for_api_queue__ssp_from_cc_to_processlog_sch","event_desc":"SSP from CC to Processlog sch","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"api_queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="set_search_params"
		let internals="ssp_from_cc_to_processlog_sch__brfq_for_view_process_log_list,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp from cc to processlog sch"
	ssp_from_cc_to_processlog_sch__brfq_for_view_process_log_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_cc_to_processlog_sch"
		let destn_id="view_process_log_list"
		let parent_source_id="cc_for_api_queue"
		let event_code="e_1686123221886"
		let event_params={"caller_name":"ssp_from_cc_to_processlog_sch__brfq_for_view_process_log_list","event_desc":"BRFQ for View Process log list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"api_queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_view_process_log_list__sfr_from_brfq_to_view_pro_log_list,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686744074239","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC API Process log detail MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686746881693","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686746902805","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686746902988","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686746921845","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922020","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922204","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922420","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686746960667","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746960835","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686746960979","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686746984396","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686746984563","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686747014658","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686747014842","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686747045962","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686747046131","date_format":false},{"column_name":"REQUEST_DATA_JSON","alias_name":"","mq_id":"MQ_1686747062201","date_format":false},{"column_name":"RESPONSE_DATA_JSON","alias_name":"","mq_id":"MQ_1686747062594","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686747092633","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686747092809","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686747092953","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686747115537","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686747115704","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686747147672","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686747147880","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1686747168464","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1686747168672","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1686747189496","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686747197399","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1686747197703","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1686747215368","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  API_PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  API_PROCESS_STATUS,  API_STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DT_CODE,  DTT_CODE,  V_CODE,  DBTR_IBAN,  AMOUNT,  TRAN_REF_ID,  row_num from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   row_number() over( partition by a.uetr  order by   a.npsstpl_id desc) as row_num  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y' union  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   case    when a.status = 'OP_AC_VAL_FAILED' then 1   end as row_num  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  where   a.status = 'OP_AC_VAL_FAILED') V where  row_num = 1 $AND order by  NPSSTPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC API Process log detail CCD","filter":[{"filter_name":"API_PROCESS_STATUS","binding_name":"API_PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_API_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"API_PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_API_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"API_STATUS","binding_value":"","source_name":"MI_LEVEL_API_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Validation Code","target_column":"V_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Error Code","target_column":"RESPONSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Uetr","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for view process log list"
	brfq_for_view_process_log_list__sfr_from_brfq_to_view_pro_log_list(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_view_process_log_list"
		let destn_id="view_process_log_list"
		let parent_source_id="ssp_from_cc_to_processlog_sch"
		let event_code="e_1686123255932"
		let event_params={"caller_name":"brfq_for_view_process_log_list__sfr_from_brfq_to_view_pro_log_list","event_desc":"SFR from BRFQ to View pro log list","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"api_queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686744074239","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC API Process log detail MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686746881693","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686746902805","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686746902988","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686746921845","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922020","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922204","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922420","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686746960667","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746960835","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686746960979","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686746984396","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686746984563","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686747014658","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686747014842","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686747045962","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686747046131","date_format":false},{"column_name":"REQUEST_DATA_JSON","alias_name":"","mq_id":"MQ_1686747062201","date_format":false},{"column_name":"RESPONSE_DATA_JSON","alias_name":"","mq_id":"MQ_1686747062594","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686747092633","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686747092809","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686747092953","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686747115537","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686747115704","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686747147672","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686747147880","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1686747168464","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1686747168672","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1686747189496","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686747197399","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1686747197703","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1686747215368","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  API_PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  API_PROCESS_STATUS,  API_STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DT_CODE,  DTT_CODE,  V_CODE,  DBTR_IBAN,  AMOUNT,  TRAN_REF_ID,  row_num from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   row_number() over( partition by a.uetr  order by   a.npsstpl_id desc) as row_num  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y' union  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   case    when a.status = 'OP_AC_VAL_FAILED' then 1   end as row_num  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  where   a.status = 'OP_AC_VAL_FAILED') V where  row_num = 1 $AND order by  NPSSTPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC API Process log detail CCD","filter":[{"filter_name":"API_PROCESS_STATUS","binding_name":"API_PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_API_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"API_PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_API_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"API_STATUS","binding_value":"","source_name":"MI_LEVEL_API_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Validation Code","target_column":"V_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Error Code","target_column":"RESPONSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Uetr","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "process log search search"
	process_log_search_search__ssp_from_search_btn_to_search_component() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_search_search"
		let destn_id="process_log_search"
		let parent_source_id=""
		let event_code="e_1684312729984"
		let event_params={"caller_name":"process_log_search_search__ssp_from_search_btn_to_search_component","event_desc":"SSP from Search btn to Search Component","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_search_search","raiseparam":{}}
		let handler_code="set_search_params"
		let internals="ssp_from_search_btn_to_search_component__brfq_from_ssp_to_api_queue,"
		let event_data={}
		let data_source={}
		try {
			this.handler.set_search_params(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "process log search search"
	process_log_search_search__close_popup() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1684312933857"
		let event_params={"popup_info":{"context":""},"caller_name":"process_log_search_search__close_popup","event_desc":"Close popup","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_search_search","raiseparam":{}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log search search"
	process_log_search_search__e_1686199689330() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_search_search"
		let destn_id="view_process_log_list"
		let parent_source_id=""
		let event_code="e_1686199689330"
		let event_params={"caller_name":"process_log_search_search__e_1686199689330","event_desc":"E_1686199689330","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_20","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686744074239","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC API Process log detail MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686746881693","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686746902805","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686746902988","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686746921845","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922020","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922204","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686746922420","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686746960667","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746960835","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686746960979","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686746984396","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686746984563","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686747014658","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686747014842","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686747045962","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686747046131","date_format":false},{"column_name":"REQUEST_DATA_JSON","alias_name":"","mq_id":"MQ_1686747062201","date_format":false},{"column_name":"RESPONSE_DATA_JSON","alias_name":"","mq_id":"MQ_1686747062594","date_format":false},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686747092633","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686747092809","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686747092953","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686747115537","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686747115704","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686747147672","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686747147880","date_format":false},{"column_name":"DT_CODE","alias_name":"","mq_id":"MQ_1686747168464","date_format":false},{"column_name":"DTT_CODE","alias_name":"","mq_id":"MQ_1686747168672","date_format":false},{"column_name":"V_CODE","alias_name":"","mq_id":"MQ_1686747189496","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1686747197399","date_format":false},{"column_name":"AMOUNT","alias_name":"","mq_id":"MQ_1686747197703","date_format":false},{"column_name":"TRAN_REF_ID","alias_name":"","mq_id":"MQ_1686747215368","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  API_PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  API_PROCESS_STATUS,  API_STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DT_CODE,  DTT_CODE,  V_CODE,  DBTR_IBAN,  AMOUNT,  TRAN_REF_ID,  row_num from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   row_number() over( partition by a.uetr  order by   a.npsstpl_id desc) as row_num  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y' union  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM as API_PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS as API_PROCESS_STATUS,   A.STATUS as API_STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   A.ADDITIONAL_INFO,   A.V_CODE,   A.DBTR_IBAN,   A.AMOUNT,   A.TRAN_REF_ID,   T24RC.RETURN_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.RETURN_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   case    when a.status = 'OP_AC_VAL_FAILED' then 1   end as row_num  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES T24RC on   T24RC.RETURN_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  where   a.status = 'OP_AC_VAL_FAILED') V where  row_num = 1 $AND order by  NPSSTPL_ID desc"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC API Process log detail CCD","filter":[{"filter_name":"API_PROCESS_STATUS","binding_name":"API_PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_API_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"API_PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_API_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"STATUS","binding_name":"API_STATUS","binding_value":"","source_name":"MI_LEVEL_API_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Validation Code","target_column":"V_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Error Code","target_column":"RESPONSE_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"AMOUNT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Tran Ref ID","target_column":"TRAN_REF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Uetr","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ssp from search btn to search component"
	ssp_from_search_btn_to_search_component__brfq_from_ssp_to_api_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_from_search_btn_to_search_component"
		let destn_id="api_queue"
		let parent_source_id="process_log_search_search"
		let event_code="e_1686115610681"
		let event_params={"caller_name":"ssp_from_search_btn_to_search_component__brfq_from_ssp_to_api_queue","event_desc":"BRFQ from SSP to API Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_from_ssp_to_api_queue__sfr_for_api_queue,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_23","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686743999207","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC API Process log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746157162","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686746224121","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686746239600","date_format":false},{"column_name":"API_STATUS","alias_name":"","mq_id":"MQ_1686746253056","date_format":false},{"column_name":"API_PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686746262888","date_format":false},{"column_name":"API_PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746271264","date_format":false}],"joins":[]},"eq_text":"select         distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when nt.process_type = 'OP' then 'Total'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) = current_date   and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when nt.channel_id = 'IBMB' then 'IBMB'    when nt.channel_id = 'RMB' then 'RMB'    when nt.channel_id = 'RIB' then 'RIB'    when nt.channel_id = 'CMB' then 'CMB'    when nt.channel_id = 'CIB' then 'CIB'    when nt.channel_id = 'CMS' then 'CMS'    when nt.channel_id = 'NFR' then 'NFR'    when nt.channel_id = 'CMSCMS' then 'CMSCMS'    when nt.channel_id = 'IPP' then 'IPP'    when nt.channel_id = 'CMSINF' then 'CMSINF'    when nt.channel_id = 'MOB' then 'MOB'    when nt.channel_id = 'MBL' then 'MBL'    when nt.channel_id = 'CMSCMD' then 'CMSCMD'    when nt.channel_id = 'IB' then 'IB'    when nt.channel_id = 'RIBINF' then 'RIBINF'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) = current_date    and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when nt.process_group in ('Manual', 'MANUAL', 'manual') then 'Manual'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) = current_date    and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when ntpl.process_name = 'Place Pacs008'     and ((     select      count(*) as count     from      npss_trn_process_log     where      npss_trn_process_log.process_name = 'PACS.008'      and npss_trn_process_log.uetr = ntpl.uetr )) = 0 then 'Pending Screening'     when ntpl.process_name = 'Place Pacs.007'     and ((     select      count(*) as count     from      npss_trn_process_log     where      npss_trn_process_log.process_name = 'PACS.007'      and npss_trn_process_log.uetr = ntpl.uetr )) = 0 then 'Pending Screening'     when ((ntpl.process_name = 'PACS.008'      and ntpl.processing_system <> 'IBM_MQ')     or (ntpl.process_name = 'PACS.008'      and ntpl.processing_system = 'IBM_MQ'      and ntpl.status = 'IP_RCT_EXCEPTION')     or (ntpl.process_name = 'PACS.007'      and ntpl.processing_system <> 'IBM_MQ')     or (ntpl.process_name = 'PACS.007'      and ntpl.processing_system = 'IBM_MQ'      and ntpl.status = 'IP_RCT_EXCEPTION')) then 'Pending Screening'     else 'OTHER'    end as Pending_Detais_OP   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr    and to_date(to_char(nt.created_date ,    'yyyy-mm-dd' ),    'yyyy-mm-dd' ) = current_date     and NT.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when ((ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTExceptionFailure'     and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE'))     or (ntpl.process_name = 'Receive Pacs004'      and nt.process_status = 'RCTExceptionFailure'      and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE'))      or (ntpl.process_name = 'Place Pacs.007'       and nt.status in ('OP_REVERSAL_REQ_REPAIR'))) then 'Pending (Maker)'    when ((ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTExceptionFailure'     and nt.status in ('OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY'))     or (ntpl.process_name = 'Receive Pacs004'      and nt.process_status = 'RCTExceptionFailure'      and nt.status in ('OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY'))      or (ntpl.process_name = 'Place Pacs.007'       and nt.status in ('OP_REVERSAL_REQ_INITIATED'))) then 'Pending (Checker)'    when ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTCompleted' then 'SEND TO CB'     when ntpl.process_name = 'Place Pacs.007' then 'SEND TO CB'     when ntpl.process_name = 'Place Pacs008'     and (nt.status = 'OP_RCT_STATUS_RECEIVED'      or nt.status = 'OP_P2P_STATUS_ACCEPTED'      or nt.status = 'OP_P2B_STATUS_ACCEPTED') then 'CBACK'     when ntpl.process_name = 'Place Pacs008'     and (nt.status = 'OP_AC_REV_POSTING_SUCCESS'      or nt.status = 'OP_AC_REV_POSTING_SUCCESS'      or nt.process_status = 'OP_AC_STATUS_REJECTED'      or nt.process_status = 'OP_P2P_REV_POSTING_SUCCESS'      or nt.process_status = 'OP_P2B_STATUS_REJECTED'      or nt.process_status = 'OP_P2B_REV_POSTING_SUCCESS') then 'CBNACK'     else 'OTHER'    end as Pending_Detais_OP   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr    and to_date(to_char(nt.created_date ,    'yyyy-mm-dd' ),    'yyyy-mm-dd' ) = current_date     and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when ((ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTExceptionFailure'     and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY'))     or (ntpl.process_name = 'Receive Pacs004'      and nt.process_status = 'RCTExceptionFailure'      and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY'))      or (ntpl.process_name = 'Place Pacs.007'       and nt.status in ('OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED'))) then 'Pending (T-1)'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and nt.process_type = 'OP'   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) < current_date    and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY', 'OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY', 'OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED')) v where  Pending_Detais_OP <> 'OTHER' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC API Process log CCD","filter":[{"filter_name":"STATUS","binding_name":"API_STATUS","binding_value":"","source_name":"OP_AC_MAND_VAL_FAILED,OP_AC_DUPL_VAL_FAILED,OP_P2B_FUND_RESERVED,OP_AC_PCODE_VAL_FAILED,OP_AC_PBANK_VAL_FAILED,OP_P2P_SENDER_IBAN_FAILED,OP_P2P_PAYMENT_FAILED, OP_P2P_POSTING_FAILURE,OP_P2P_POSTING_SUSPICIOUS,OP_P2B_FUND_UNFREEZED,OP_P2B_PAYMENT_FAILED,OP_P2B_FUND_RES_FAILURE,OP_P2B_FUND_RES_SUSPICIOUS,OP_P2B_FUND_UNFR_FAILURE,OP_P2B_FUND_UNFR_SUSPICIOUS,OP_P2B_FUND_AUTH_FAILURE,OP_P2B_FUND_AUTH_SUSPICIOUS,OP_P2P_DEBIT_POSTING_SUCCESS,OP_P2B_DEBIT_POSTING_SUCCESS,OP_INAU_DEBIT_POSTING_SUCCESS,OP_AUTH_DEBIT_POSTING_SUCCESS,OP_UNFREEZE_DEBIT_POSTING_SUCCESS,OP_P2P_DEBIT_POSTING_SUSCIPIOUS,OP_P2B_DEBIT_POSTING_SUSCIPIOUS,OP_INAU_DEBIT_POSTING_SUSCIPIOUS,OP_AUTH_DEBIT_POSTING_SUSCIPIOUS,OP_UNFREEZE_DEBIT_POSTING_SUSCIPIOUS,OP_P2P_POSTING_NOT_HAPPENED,OP_P2B_POSTING_NOT_HAPPENED,OP_INAU_POSTING_NOT_HAPPENED,OP_AUTH_POSTING_NOT_HAPPENED,OP_UNFREEZE_POSTING_NOT_HAPPENED,OP_P2B_REV_POSTING_SUCCESS,OP_P2P_REV_POSTING_SUCCESS,OP_AC_VAL_FAILED","source_value":"","source_type":"HARDCODED","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"API_PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"API_PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"API_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq from ssp to api queue"
	brfq_from_ssp_to_api_queue__sfr_for_api_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_from_ssp_to_api_queue"
		let destn_id="api_queue"
		let parent_source_id="ssp_from_search_btn_to_search_component"
		let event_code="e_1686115648530"
		let event_params={"caller_name":"brfq_from_ssp_to_api_queue__sfr_for_api_queue","event_desc":"SFR for API Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"process_log_search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_23","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686743999207","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC API Process log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746157162","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686746224121","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686746239600","date_format":false},{"column_name":"API_STATUS","alias_name":"","mq_id":"MQ_1686746253056","date_format":false},{"column_name":"API_PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686746262888","date_format":false},{"column_name":"API_PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686746271264","date_format":false}],"joins":[]},"eq_text":"select         distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when nt.process_type = 'OP' then 'Total'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) = current_date   and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when nt.channel_id = 'IBMB' then 'IBMB'    when nt.channel_id = 'RMB' then 'RMB'    when nt.channel_id = 'RIB' then 'RIB'    when nt.channel_id = 'CMB' then 'CMB'    when nt.channel_id = 'CIB' then 'CIB'    when nt.channel_id = 'CMS' then 'CMS'    when nt.channel_id = 'NFR' then 'NFR'    when nt.channel_id = 'CMSCMS' then 'CMSCMS'    when nt.channel_id = 'IPP' then 'IPP'    when nt.channel_id = 'CMSINF' then 'CMSINF'    when nt.channel_id = 'MOB' then 'MOB'    when nt.channel_id = 'MBL' then 'MBL'    when nt.channel_id = 'CMSCMD' then 'CMSCMD'    when nt.channel_id = 'IB' then 'IB'    when nt.channel_id = 'RIBINF' then 'RIBINF'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) = current_date    and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when nt.process_group in ('Manual', 'MANUAL', 'manual') then 'Manual'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) = current_date    and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when ntpl.process_name = 'Place Pacs008'     and ((     select      count(*) as count     from      npss_trn_process_log     where      npss_trn_process_log.process_name = 'PACS.008'      and npss_trn_process_log.uetr = ntpl.uetr )) = 0 then 'Pending Screening'     when ntpl.process_name = 'Place Pacs.007'     and ((     select      count(*) as count     from      npss_trn_process_log     where      npss_trn_process_log.process_name = 'PACS.007'      and npss_trn_process_log.uetr = ntpl.uetr )) = 0 then 'Pending Screening'     when ((ntpl.process_name = 'PACS.008'      and ntpl.processing_system <> 'IBM_MQ')     or (ntpl.process_name = 'PACS.008'      and ntpl.processing_system = 'IBM_MQ'      and ntpl.status = 'IP_RCT_EXCEPTION')     or (ntpl.process_name = 'PACS.007'      and ntpl.processing_system <> 'IBM_MQ')     or (ntpl.process_name = 'PACS.007'      and ntpl.processing_system = 'IBM_MQ'      and ntpl.status = 'IP_RCT_EXCEPTION')) then 'Pending Screening'     else 'OTHER'    end as Pending_Detais_OP   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr    and to_date(to_char(nt.created_date ,    'yyyy-mm-dd' ),    'yyyy-mm-dd' ) = current_date     and NT.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when ((ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTExceptionFailure'     and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE'))     or (ntpl.process_name = 'Receive Pacs004'      and nt.process_status = 'RCTExceptionFailure'      and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE'))      or (ntpl.process_name = 'Place Pacs.007'       and nt.status in ('OP_REVERSAL_REQ_REPAIR'))) then 'Pending (Maker)'    when ((ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTExceptionFailure'     and nt.status in ('OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY'))     or (ntpl.process_name = 'Receive Pacs004'      and nt.process_status = 'RCTExceptionFailure'      and nt.status in ('OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY'))      or (ntpl.process_name = 'Place Pacs.007'       and nt.status in ('OP_REVERSAL_REQ_INITIATED'))) then 'Pending (Checker)'    when ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTCompleted' then 'SEND TO CB'     when ntpl.process_name = 'Place Pacs.007' then 'SEND TO CB'     when ntpl.process_name = 'Place Pacs008'     and (nt.status = 'OP_RCT_STATUS_RECEIVED'      or nt.status = 'OP_P2P_STATUS_ACCEPTED'      or nt.status = 'OP_P2B_STATUS_ACCEPTED') then 'CBACK'     when ntpl.process_name = 'Place Pacs008'     and (nt.status = 'OP_AC_REV_POSTING_SUCCESS'      or nt.status = 'OP_AC_REV_POSTING_SUCCESS'      or nt.process_status = 'OP_AC_STATUS_REJECTED'      or nt.process_status = 'OP_P2P_REV_POSTING_SUCCESS'      or nt.process_status = 'OP_P2B_STATUS_REJECTED'      or nt.process_status = 'OP_P2B_REV_POSTING_SUCCESS') then 'CBNACK'     else 'OTHER'    end as Pending_Detais_OP   from    npss_transactions nt   inner join npss_trn_process_log ntpl on    ntpl.uetr = nt.uetr    and to_date(to_char(nt.created_date ,    'yyyy-mm-dd' ),    'yyyy-mm-dd' ) = current_date     and nt.process_type = 'OP') v where  Pending_Detais_OP <> 'OTHER' $AND union select  distinct npsst_id,  uetr,  created_date,  type,  process_type,  Pending_Detais_OP,  intrbk_sttlm_cur ,  intrbk_sttlm_amnt ,  cdtr_iban ,  Fn_card_decrypt_and_mask_rpt(cr_acct_identification) as cr_acct_identification ,  dbtr_iban from  (  select   nt.npsst_id,   nt.department_code ,   nt.UETR,   nt.created_date ,   nt.process_type ,   nt.intrbk_sttlm_cur ,   nt.intrbk_sttlm_amnt ,   nt.cdtr_iban ,   nt.cr_acct_identification ,   nt.dbtr_iban,   nt.tenant_id,   ntpl.process_name,   case    when ntpl.process_name in ('Place Pacs008', 'PACS.008') then 'pacs.008'    when ntpl.process_name in ('Place Pacs.007', 'PACS.007') then 'pacs.007'    when ntpl.process_name = 'Receive Pacs004' then 'pacs.004'   end as type,   case    when ((ntpl.process_name = 'Place Pacs008'     and nt.process_status = 'RCTExceptionFailure'     and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY'))     or (ntpl.process_name = 'Receive Pacs004'      and nt.process_status = 'RCTExceptionFailure'      and nt.status in ('OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY'))      or (ntpl.process_name = 'Place Pacs.007'       and nt.status in ('OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED'))) then 'Pending (T-1)'    else 'OTHER'   end as Pending_Detais_OP  from   npss_transactions nt  inner join npss_trn_process_log ntpl on   ntpl.uetr = nt.uetr   and nt.process_type = 'OP'   and to_date(to_char(nt.created_date ,   'yyyy-mm-dd' ),   'yyyy-mm-dd' ) < current_date    and nt.status in ('OP_AC_REV_POSTING_FAILURE', 'OP_AC_RET_POSTING_FAILURE', 'OP_P2P_REV_POSTING_FAILURE' , 'OP_P2B_FUND_UNFR_FAILURE', 'OP_P2B_REV_POSTING_FAILURE', 'OP_AC_REV_POSTING_RETRY', 'OP_AC_RET_POSTING_RETRY', 'OP_P2P_REV_POSTING_RETRY', 'OP_P2B_FUND_UNFR_RETRY', 'OP_P2B_REV_POSTING_RETRY', 'OR_P2P_POSTING_FAILURE', 'OR_P2B_POSTING_FAILURE', 'OR_P2P_POSTING_RETRY', 'OR_P2B_POSTING_RETRY', 'OP_REVERSAL_REQ_REPAIR', 'OP_REVERSAL_REQ_INITIATED')) v where  Pending_Detais_OP <> 'OTHER' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC API Process log CCD","filter":[{"filter_name":"STATUS","binding_name":"API_STATUS","binding_value":"","source_name":"OP_AC_MAND_VAL_FAILED,OP_AC_DUPL_VAL_FAILED,OP_P2B_FUND_RESERVED,OP_AC_PCODE_VAL_FAILED,OP_AC_PBANK_VAL_FAILED,OP_P2P_SENDER_IBAN_FAILED,OP_P2P_PAYMENT_FAILED, OP_P2P_POSTING_FAILURE,OP_P2P_POSTING_SUSPICIOUS,OP_P2B_FUND_UNFREEZED,OP_P2B_PAYMENT_FAILED,OP_P2B_FUND_RES_FAILURE,OP_P2B_FUND_RES_SUSPICIOUS,OP_P2B_FUND_UNFR_FAILURE,OP_P2B_FUND_UNFR_SUSPICIOUS,OP_P2B_FUND_AUTH_FAILURE,OP_P2B_FUND_AUTH_SUSPICIOUS,OP_P2P_DEBIT_POSTING_SUCCESS,OP_P2B_DEBIT_POSTING_SUCCESS,OP_INAU_DEBIT_POSTING_SUCCESS,OP_AUTH_DEBIT_POSTING_SUCCESS,OP_UNFREEZE_DEBIT_POSTING_SUCCESS,OP_P2P_DEBIT_POSTING_SUSCIPIOUS,OP_P2B_DEBIT_POSTING_SUSCIPIOUS,OP_INAU_DEBIT_POSTING_SUSCIPIOUS,OP_AUTH_DEBIT_POSTING_SUSCIPIOUS,OP_UNFREEZE_DEBIT_POSTING_SUSCIPIOUS,OP_P2P_POSTING_NOT_HAPPENED,OP_P2B_POSTING_NOT_HAPPENED,OP_INAU_POSTING_NOT_HAPPENED,OP_AUTH_POSTING_NOT_HAPPENED,OP_UNFREEZE_POSTING_NOT_HAPPENED,OP_P2B_REV_POSTING_SUCCESS,OP_P2P_REV_POSTING_SUCCESS,OP_AC_VAL_FAILED","source_value":"","source_type":"HARDCODED","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"API_PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"API_PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"API_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "process log search clear"
	process_log_search_clear__clear_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_search_clear"
		let destn_id="process_log_search"
		let parent_source_id=""
		let event_code="e_1684313107602"
		let event_params={"caller_name":"process_log_search_clear__clear_ui","event_desc":"Clear UI","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_search_clear","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui search"
	view_api_failure__action_ui_search__show_profile_popup() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_api_failure__action_ui_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1684313686050"
		let event_params={"caller_name":"view_api_failure__action_ui_search__show_profile_popup","event_desc":"Show Profile popup","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_api_failure__action_ui_search","raiseparam":{"popup_category":"profile","variable":"p_view_process_log_search__show_profile_popup","selector":"p_view_process_log_search","profile_code":"BTL_1304_1684313489625","window_title":"","window_height":400,"window_width":"700px","window_close_icon":"Y","eventdes":"show_profile_popup","eventcode":"E_1684313686050"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui search"
	view_api_failure__action_ui_search__e_1684321183829() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_api_failure__action_ui_search"
		let destn_id="process_log_search"
		let parent_source_id=""
		let event_code="e_1684321183829"
		let event_params={"caller_name":"view_api_failure__action_ui_search__e_1684321183829","event_desc":"E_1684321183829","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_api_failure__action_ui_search","raiseparam":{"need_reset_key_column":"N"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui view process log"
	view_api_failure__action_ui_view_process_log__sp_from_view_process_log_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_api_failure__action_ui_view_process_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1686636586382"
		let event_params={"caller_name":"view_api_failure__action_ui_view_process_log__sp_from_view_process_log_btn","event_desc":"SP from view process log btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_api_failure__action_ui_view_process_log","raiseparam":{"profile_code":"BTL_1304_1686636346443"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view api failure  action ui view process log"
	view_api_failure__action_ui_view_process_log__brfq_for_history_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_api_failure__action_ui_view_process_log"
		let destn_id="history_details"
		let parent_source_id=""
		let event_code="e_1686637141525"
		let event_params={"caller_name":"view_api_failure__action_ui_view_process_log__brfq_for_history_details","event_desc":"BRFQ for History Details","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_api_failure__action_ui_view_process_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_history_details__sfr_for_history_details,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_27","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686744023631","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC HST Process log dtls MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686748295214","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686748295397","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686748295565","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686748295725","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686748295893","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686748438704","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686748438856","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686748439000","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686748439160","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686748495634","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748495817","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686748495961","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686748516938","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686748523178","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686748531018","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686748538378","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686748545354","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686748554730","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686748562091","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686748569522","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748576827","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748600459","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748608363","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686748616053","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <arc_tran_db>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC HST Process log dtls CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for history details"
	brfq_for_history_details__sfr_for_history_details(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_history_details"
		let destn_id="history_details"
		let parent_source_id="view_api_failure__action_ui_view_process_log"
		let event_code="e_1686637180072"
		let event_params={"caller_name":"brfq_for_history_details__sfr_for_history_details","event_desc":"SFR for History Details","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"view_api_failure__action_ui_view_process_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_27","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686744023631","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC HST Process log dtls MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686748295214","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686748295397","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686748295565","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686748295725","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686748295893","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686748438704","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686748438856","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686748439000","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686748439160","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686748495634","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748495817","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686748495961","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686748516938","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686748523178","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686748531018","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686748538378","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686748545354","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686748554730","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686748562091","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686748569522","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748576827","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748600459","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748608363","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686748616053","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <arc_tran_db>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC HST Process log dtls CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "history details"
	history_details__svm_for_history_details() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_details"
		let destn_id="history_details"
		let parent_source_id=""
		let event_code="e_1686637075213"
		let event_params={"caller_name":"history_details__svm_for_history_details","event_desc":"SVM for History Details","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_details","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"history_details":{"e_1686637075213":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_27","event_code":"E_1686637075213","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"},{"type":"LOCAL","column_name":"NPSSTPL_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSSTPL_ID","setd3name":"NPSSTPL_ID"},{"type":"LOCAL","column_name":"PROCESS_NAME","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_NAME","setd3name":"PROCESS_NAME"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_27","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1686744023631","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"ARC HST Process log dtls MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1686748295214","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1686748295397","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1686748295565","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1686748295725","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1686748295893","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1686748438704","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1686748438856","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1686748439000","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1686748439160","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1686748495634","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748495817","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1686748495961","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1686748516938","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1686748523178","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1686748531018","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1686748538378","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1686748545354","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1686748554730","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1686748562091","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1686748569522","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748576827","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748600459","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1686748608363","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1686748616053","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   <arc_tran_db>.NPSS_TRN_PROCESS_LOG A  left join <tran_db>.CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join <tran_db>.CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <arc_tran_db>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"ARC HST Process log dtls CCD","filter":[{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "view process log ui back"
	view_process_log_ui_back__e_1686640338501() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_process_log_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1686640338501"
		let event_params={"caller_name":"view_process_log_ui_back__e_1686640338501","event_desc":"E_1686640338501","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_process_log_ui_back","raiseparam":{"profile_code":"BTL_1304_1681966202861"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view failures"
	process_log_ui_view_failures__sp_from_view_failure() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_failures"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1686911866735"
		let event_params={"caller_name":"process_log_ui_view_failures__sp_from_view_failure","event_desc":"SP from view failure","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_failures","raiseparam":{"profile_code":"BTL_1304_1686911652303"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view failures"
	process_log_ui_view_failures__bt_from_view_failure_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_failures"
		let destn_id="view_failures_ui"
		let parent_source_id=""
		let event_code="e_1686912120285"
		let event_params={"caller_name":"process_log_ui_view_failures__bt_from_view_failure_btn","event_desc":"BT from view failure btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_failures","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":"","change_detection":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view failures actions back"
	view_failures_actions_back__sp_from__back_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_failures_actions_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1686912171735"
		let event_params={"caller_name":"view_failures_actions_back__sp_from__back_btn","event_desc":"SP from  back btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_failures_actions_back","raiseparam":{"profile_code":"BTL_1304_1669457979784"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view pro log req and res ui back"
	view_pro_log_req_and_res_ui_back__sp_for_back_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_pro_log_req_and_res_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1687778418835"
		let event_params={"caller_name":"view_pro_log_req_and_res_ui_back__sp_for_back_btn","event_desc":"SP for back btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_pro_log_req_and_res_ui_back","raiseparam":{"profile_code":"BTL_1304_1686636346443"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "view process log ui view req and res"
	view_process_log_ui_view_req_and_res__cc_for_request_response() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_process_log_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1687778477729"
		let event_params={"caller_name":"view_process_log_ui_view_req_and_res__cc_for_request_response","event_desc":"CC for request response","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_process_log_ui_view_req_and_res","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_masking_req_resService.fn_npss_cs_masking_req_res(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "view process log ui view req and res"
	view_process_log_ui_view_req_and_res__sp_from_view_req_and_res() { 
		let Dest_Is_ctrl=true
		
		let source_id="view_process_log_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1687778510401"
		let event_params={"caller_name":"view_process_log_ui_view_req_and_res__sp_from_view_req_and_res","event_desc":"SP from view req and res","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"view_process_log_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1687778298351"}}
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
