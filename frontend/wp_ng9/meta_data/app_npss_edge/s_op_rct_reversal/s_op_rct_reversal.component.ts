/* ---------------------------------------------------------------------------
UI Framework    : Angular
Version         : 5.0 
Build ID        : 34657 
Modified By     : Admin 
Modified Date   : 2024-Mar-05 8:12 AM 
Generated From  : TORUS Low Code Platform 
Copyright       : Torus Innovations Pvt Ltd © Copyright 2018 
Screen Name     : s_op_rct_reversal
--------------------------------------------------------------------------- */

// Component Definition 
import { Component, OnInit,AfterViewInit, EventEmitter } from '@angular/core';
import {AppHandlerService} from '../../../scripts/fx/app.handler.service'
import {npss_c_reversal_amnt_ui_validateService} from '../../../custom_widget/npss_c_reversal_amnt_ui_validate/npss_c_reversal_amnt_ui_validate.service'
import {npss_cs_set_reversal_prd_system_setup_dateService} from '../../../custom_widget/npss_cs_set_reversal_prd_system_setup_date/npss_cs_set_reversal_prd_system_setup_date.service'
import {torus_cs_show_hideService} from '../../../custom_widget/torus_cs_show_hide/torus_cs_show_hide.service'
import {npss_set_action_mode_as_searchService} from '../../../custom_widget/npss_set_action_mode_as_search/npss_set_action_mode_as_search.service'
import {npss_cs_reversal_initiateService} from '../../../custom_widget/npss_cs_reversal_initiate/npss_cs_reversal_initiate.service'
import {npss_cs_rct_rev_approveService} from '../../../custom_widget/npss_cs_rct_rev_approve/npss_cs_rct_rev_approve.service'
import {npss_cs_reversal_send_to_makerService} from '../../../custom_widget/npss_cs_reversal_send_to_maker/npss_cs_reversal_send_to_maker.service'

@Component({
	selector: 's_op_rct_reversal',
	templateUrl: './s_op_rct_reversal.component.html',
	styleUrls: ['./s_op_rct_reversal.component.css'],
	providers:[npss_c_reversal_amnt_ui_validateService,npss_cs_set_reversal_prd_system_setup_dateService,torus_cs_show_hideService,npss_set_action_mode_as_searchService,npss_cs_reversal_initiateService,npss_cs_rct_rev_approveService,npss_cs_reversal_send_to_makerService]
})
    
// Start of class 
export class s_op_rct_reversalComponent implements OnInit,AfterViewInit {
	// Variables 
  	wftpa_description : string = "s_op_rct_reversal"
	wftpa_id : string = "WFT_NPSS_P_1304_1671186714687_0"
	cg_code : string = "CG_1304_1671185292510"
	key_column : any = {"dtt_1304_1665901217208":"NPSST_ID","dtt_1304_1665903906193":"NPSSTRRD_ID","dtt_1304_1665905039255":"NPSSTPL_ID","dtt_1304_1670492310194":"NPSSASP_ID","dtt_1304_1670589169341":"NPSSCAPL_ID","dtt_1304_1672928670076":"NPSSNL_ID","dtt_1304_1674198360280":"NPSSE_ID","dtt_1304_1681973868376":"NPSSPSR_ID","dtt_1304_1681974712398":"NPSSSBR_ID","dtt_1304_1681974988885":"NPSSBFSR_ID","dtt_1304_1695130590062":"NPSSNPPL_ID","dtt_1304_1695214768145":"NAL_ID","dtt_1304_1700459090330":"NPSSPN_ID","dtt_1304_1701251364899":"NPSSPNB_ID","dtt_1304_1707202677013":"NPSSFE_ID"}
	show_info_dialog : boolean = false
	show_confirm_dialog : boolean = false
	components : any = []
	current_profile : string = "p_main_layout"
	uicgc_1 : string = "queue"
	uicgc_2 : string = "transaction_list"
	uicgc_3 : string = "navigation_ui"
	uicgc_4 : string = "search"
	uicgc_6 : string = "view_dr_cr_details"
	uicgc_7 : string = "back_ui"
	uicgc_8 : string = "view_payment_details"
	uicgc_9 : string = "message_detail"
	uicgc_10 : string = "request_ui"
	uicgc_11 : string = "response_ui"
	uicgc_12 : string = "process_log_ui"
	uicgc_13 : string = "message_detail_action"
	uicgc_14 : string = "message_back_ui"
	uicgc_15 : string = "message_detail_ui"
	uicgc_16 : string = "single_back_ui"
	uicgc_17 : string = "history_detail"
	uicgc_18 : string = "initate_ui"
	uicgc_19 : string = "send_to_maker_ui"
	uicgc_20 : string = "search_info_ui"
	uicgc_21 : string = "initiate_custom_widget"
	uicgc_22 : string = "reversal_details"
	key_events : any = {}
	btl_1304_1672307215426 : string = "p_send_to_maker_layout"
	btl_1304_1671186172155 : string = "p_initate_layout"
	btl_1304_1670244943676 : string = "p_view_req_and_res_profile"
	btl_1304_1669368765629 : string = "p_view_history_layout"
	btl_1304_1669368715639 : string = "p_view_response_layout"
	btl_1304_1669368553036 : string = "p_view_request_layout"
	btl_1304_1669368481197 : string = "p_view_message_list_layout"
	btl_1304_1669368410590 : string = "p_view_message_ui_layout"
	btl_1304_1669200873578 : string = "p_vertical_layout"
	btl_1304_1666856790983 : string = "p_search_layout"
	btl_1304_1666856599156 : string = "p_main_layout"
	forms : any = ["uicgc_4","uicgc_15","uicgc_19","uicgc_20","uicgc_11","uicgc_18","uicgc_10","uicgc_16","uicgc_12","uicgc_13","uicgc_14","uicgc_7","uicgc_3"]
	p_search_layout__spap_for_search_showpopup : boolean = false
	p_initate_layout__sp_for_initate_showpopup : boolean = false
	p_send_to_maker_layout__stm_popup_showpopup : boolean = false
	queue : any = {}
	transaction_list : any = {}
	navigation_ui : any = {}
	navigation_ui_search : any = {}
	navigation_ui_view_tran : any = {}
	navigation_ui_view_process_log : any = {}
	navigation_ui_view_message_log : any = {}
	navigation_ui_approve : any = {}
	navigation_ui_initiate : any = {}
	navigation_ui_send_to_maker : any = {}
	navigation_ui_checker_on_load_trg : any = {}
	search : any = {}
	search_search : any = {}
	search_clear : any = {}
	view_dr_cr_details : any = {}
	back_ui : any = {}
	back_ui_back : any = {}
	view_payment_details : any = {}
	message_detail : any = {}
	request_ui : any = {}
	response_ui : any = {}
	process_log_ui : any = {}
	process_log_ui_back : any = {}
	process_log_ui_view_response : any = {}
	process_log_ui_view_request : any = {}
	process_log_ui_view_req_and_res : any = {}
	message_detail_action : any = {}
	message_detail_action_back : any = {}
	message_detail_action_view_message : any = {}
	message_back_ui : any = {}
	message_back_ui_back : any = {}
	message_detail_ui : any = {}
	single_back_ui : any = {}
	single_back_ui_back : any = {}
	history_detail : any = {}
	initate_ui : any = {}
	initate_ui_forward_to_checker : any = {}
	send_to_maker_ui : any = {}
	send_to_maker_ui_save : any = {}
	search_info_ui : any = {}
	initiate_custom_widget : any = {}
	reversal_details : any = {}


	// Constructor 
	constructor(private handler:AppHandlerService ,private npss_c_reversal_amnt_ui_validateService:npss_c_reversal_amnt_ui_validateService,private npss_cs_set_reversal_prd_system_setup_dateService:npss_cs_set_reversal_prd_system_setup_dateService,private torus_cs_show_hideService:torus_cs_show_hideService,private npss_set_action_mode_as_searchService:npss_set_action_mode_as_searchService,private npss_cs_reversal_initiateService:npss_cs_reversal_initiateService,private npss_cs_rct_rev_approveService:npss_cs_rct_rev_approveService,private npss_cs_reversal_send_to_makerService:npss_cs_reversal_send_to_makerService) {
    
	}
    
	ngOnInit() {

		// Component level properties - "Queue" 
		this.queue.uictrl_code = "datatable"
		this.queue.uicgc_desc = "Queue"
		this.queue.uicgc_code = "uicgc_1"
		this.queue.params = {"need_pag_datatable":"Y","need_search":"N","advance_dynamic_search":"N"}
		this.queue.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671187481122","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671186151268","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671186151686","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348524994","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   distinct UETR,   NPSSTRRD_REFNO,   PROCESS_TYPE,   CREATED_DATE,   STATUS,   PROCESS_STATUS,   PROCESS_REF_NO,   PROCESSING_SYSTEM,   TENANT_ID,   MODIFIED_DATE,   MODIFIED_DATE_UTC,   TS_ID,   LOCKED_BY,   LOCKED_BY_NAME,   CREATED_BY,   CREATED_BY_NAME,   SYSTEM_ID,   ROLE_ID,   QR_APP_ID,   VPH_APP_CODE,   QR_QUEUE_CODE,   QR_SCREEN_NAME,   QR_MENU_GROUP,   QR_MODULE,   QUEUE_DESC,   QUEUE_CODE,   Q_APP_ID,   QS_SORT_ORDER,   Q_SORT_ORDER,   DEPARTMENT_CODE,   PROCESS_GROUP,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   TRAN_REF_ID,   CHANNEL_REFNO,   CLRSYSREF,   PAYMENT_ENDTOEND_ID,   INTRBK_STTLM_AMNT,   REVERSAL_AMOUNT,   CR_ACCT_IDENTIFICATION,   DBTR_IBAN  from   (   select    NTPL.UETR,    NT.PROCESS_TYPE,    NT.CREATED_DATE,    NT.STATUS,    NT.PROCESS_STATUS,    NT.PROCESSING_SYSTEM,    NT.TENANT_ID,    NT.MODIFIED_DATE,    NT.MODIFIED_DATE_UTC,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    NT.CREATED_BY,    NT.CREATED_BY_NAME,    NT.SYSTEM_ID,    QR.ROLE_ID,    QR.VPH_APP_ID as QR_APP_ID,    QR.VPH_APP_CODE,    QR.QUEUE_CODE as QR_QUEUE_CODE,    QR.SCREEN_NAME as QR_SCREEN_NAME,    QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,    QR.SCREEN_MODULE as QR_MODULE,    PQ.QUEUE_DESC,    PQ.QUEUE_CODE,    PQ.VPH_APP_ID as Q_APP_ID,    QR.SORT_ORDER as QS_SORT_ORDER,    PQ.SORT_ORDER as Q_SORT_ORDER,    NT.DEPARTMENT_CODE,    NT.PROCESS_GROUP,    NT.VALUE_DATE,    NT.DBTR_ACCT_NO,    NT.CDTR_ACCT_NO,    NT.CDTR_IBAN,    NT.TRAN_REF_ID,    NT.CHANNEL_REFNO,    NT.CLRSYSREF,    NT.PAYMENT_ENDTOEND_ID,    NT.INTRBK_STTLM_AMNT,    NT.REVERSAL_AMOUNT,    NT.CR_ACCT_IDENTIFICATION,    NTPL.REVERSAL_CODE,    NTPL.NPSSTPL_ID,    NTPL.ADDITIONAL_INFO,    ntpl1. PROCESS_REF_NO,    NTPL.NPSSTRRD_REFNO,    NT.DBTR_IBAN   from    NPSS_TRANSACTIONS NT   inner join NPSS_TRN_PROCESS_LOG NTPL on    NTPL.UETR = NT.UETR   left join npss_trn_process_log ntpl1 on    ntpl1.uetr = nt.uetr    and NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on    NT.NPSST_ID = TS.TRN_ID    and NT.DTT_CODE = TS.DTT_CODE   inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on    NT.STATUS = QR.PROCESS_QUEUE_STATUS    and NT.PROCESS_STATUS = QR.QUEUE_CODE   inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on    NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW  where   PROCESS_TYPE = 'OP' $AND )V1 order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Queue CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1680525770431":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"E_1680525770431","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1680525952924","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671186151268","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671186151686","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348524994","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   distinct UETR,   NPSSTRRD_REFNO,   PROCESS_TYPE,   CREATED_DATE,   STATUS,   PROCESS_STATUS,   PROCESS_REF_NO,   PROCESSING_SYSTEM,   TENANT_ID,   MODIFIED_DATE,   MODIFIED_DATE_UTC,   TS_ID,   LOCKED_BY,   LOCKED_BY_NAME,   CREATED_BY,   CREATED_BY_NAME,   SYSTEM_ID,   ROLE_ID,   QR_APP_ID,   VPH_APP_CODE,   QR_QUEUE_CODE,   QR_SCREEN_NAME,   QR_MENU_GROUP,   QR_MODULE,   QUEUE_DESC,   QUEUE_CODE,   Q_APP_ID,   QS_SORT_ORDER,   Q_SORT_ORDER,   DEPARTMENT_CODE,   PROCESS_GROUP,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   TRAN_REF_ID,   CHANNEL_REFNO,   CLRSYSREF,   PAYMENT_ENDTOEND_ID,   INTRBK_STTLM_AMNT,   REVERSAL_AMOUNT,   CR_ACCT_IDENTIFICATION,   DBTR_IBAN  from   (   select    NTPL.UETR,    NT.PROCESS_TYPE,    NT.CREATED_DATE,    NT.STATUS,    NT.PROCESS_STATUS,    NT.PROCESSING_SYSTEM,    NT.TENANT_ID,    NT.MODIFIED_DATE,    NT.MODIFIED_DATE_UTC,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    NT.CREATED_BY,    NT.CREATED_BY_NAME,    NT.SYSTEM_ID,    QR.ROLE_ID,    QR.VPH_APP_ID as QR_APP_ID,    QR.VPH_APP_CODE,    QR.QUEUE_CODE as QR_QUEUE_CODE,    QR.SCREEN_NAME as QR_SCREEN_NAME,    QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,    QR.SCREEN_MODULE as QR_MODULE,    PQ.QUEUE_DESC,    PQ.QUEUE_CODE,    PQ.VPH_APP_ID as Q_APP_ID,    QR.SORT_ORDER as QS_SORT_ORDER,    PQ.SORT_ORDER as Q_SORT_ORDER,    NT.DEPARTMENT_CODE,    NT.PROCESS_GROUP,    NT.VALUE_DATE,    NT.DBTR_ACCT_NO,    NT.CDTR_ACCT_NO,    NT.CDTR_IBAN,    NT.TRAN_REF_ID,    NT.CHANNEL_REFNO,    NT.CLRSYSREF,    NT.PAYMENT_ENDTOEND_ID,    NT.INTRBK_STTLM_AMNT,    NT.REVERSAL_AMOUNT,    NT.CR_ACCT_IDENTIFICATION,    NTPL.REVERSAL_CODE,    NTPL.NPSSTPL_ID,    NTPL.ADDITIONAL_INFO,    ntpl1. PROCESS_REF_NO,    NTPL.NPSSTRRD_REFNO,    NT.DBTR_IBAN   from    NPSS_TRANSACTIONS NT   inner join NPSS_TRN_PROCESS_LOG NTPL on    NTPL.UETR = NT.UETR   left join npss_trn_process_log ntpl1 on    ntpl1.uetr = nt.uetr    and NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on    NT.NPSST_ID = TS.TRN_ID    and NT.DTT_CODE = TS.DTT_CODE   inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on    NT.STATUS = QR.PROCESS_QUEUE_STATUS    and NT.PROCESS_STATUS = QR.QUEUE_CODE   inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on    NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW  where   PROCESS_TYPE = 'OP' $AND )V1 order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Queue CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"OP_REVERSAL_REQ_REPAIR","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		this.transaction_list.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671188550885","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671187394600","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671187395070","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671187395390","date_format":false,"currency_format":true},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671187395598","date_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1671187395814","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671187504186","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671187504353","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671187504530","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671187504697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1671187504898","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1677910029248","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1677910029399","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1682330825296","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  REMARKS,  REVERSAL_AMOUNT from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   NTPL.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.CR_ACCT_IDENTIFICATION,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   A.REMARKS,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   NTPL.npsstpl_id,   NTPL.ADDITIONAL_INFO,   NTPL1.PROCESS_REF_NO,   NTPL.NPSSTRRD_REFNO  from   NPSS_TRANSACTIONS A  inner join NPSS_TRN_PROCESS_LOG NTPL on   NTPL.UETR = A.UETR   left join npss_trn_process_log ntpl1 on   ntpl1.uetr =a.uetr and  NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW where  PROCESS_TYPE = 'OP' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Transaction CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":true},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":"MI_LEVEL_DR_INFO:IBAN"},{"header":"Dr Card/Account No","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":"MI_LEVEL_DR_INFO:CARD"},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":250,"format":"","date_format":false}]}}}}}}
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
		
		// "Approve" Button of "Navigation UI" component
		this.navigation_ui_approve.label_name = "Approve"
		this.navigation_ui_approve.show = true
		this.navigation_ui_approve.disabled = true
		this.navigation_ui_approve.params = {"icon_only":false,"uicgcc_style":"fa fa-thumbs-o-up"}
		this.navigation_ui_approve.dynamic_param = {}
		this.navigation_ui_approve.role = []
		this.navigation_ui_approve.action = ""
		
		// "Initiate" Button of "Navigation UI" component
		this.navigation_ui_initiate.label_name = "Initiate"
		this.navigation_ui_initiate.show = true
		this.navigation_ui_initiate.disabled = true
		this.navigation_ui_initiate.params = {"icon_only":false,"uicgcc_style":"fa fa-ellipsis-h"}
		this.navigation_ui_initiate.dynamic_param = {}
		this.navigation_ui_initiate.role = []
		this.navigation_ui_initiate.action = ""
		
		// "Send to Maker" Button of "Navigation UI" component
		this.navigation_ui_send_to_maker.label_name = "Send to Maker"
		this.navigation_ui_send_to_maker.show = true
		this.navigation_ui_send_to_maker.disabled = true
		this.navigation_ui_send_to_maker.params = {"icon_only":false,"uicgcc_style":"fa fa-step-backward"}
		this.navigation_ui_send_to_maker.dynamic_param = {}
		this.navigation_ui_send_to_maker.role = []
		this.navigation_ui_send_to_maker.action = ""
		
		// "Checker On Load Trg" Button of "Navigation UI" component
		this.navigation_ui_checker_on_load_trg.label_name = "Checker On Load Trg"
		this.navigation_ui_checker_on_load_trg.show = true
		this.navigation_ui_checker_on_load_trg.disabled = false
		this.navigation_ui_checker_on_load_trg.params = {"icon_only":false,"uicgcc_style":""}
		this.navigation_ui_checker_on_load_trg.dynamic_param = {}
		this.navigation_ui_checker_on_load_trg.role = []
		this.navigation_ui_checker_on_load_trg.action = ""
	
		// Component level properties - "Search" 
		this.search.uictrl_code = "dynamic_form_search"
		this.search.uicgc_desc = "Search"
		this.search.uicgc_code = "uicgc_4"
		this.search.params = {}
		this.search.datasource = {}
		this.search.context_menu = []
		this.search.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS OP Reversal SRCH","tab_order":0,"tab_name":"","uicgc_description":"Search","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search.onChangecomponent = new EventEmitter<any>()
		this.search.show = true
		this.search.dynamic_param = {}
		this.search.f_npss_op_reversal_srch = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search.form_name = "f_npss_op_reversal_srch"
		
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
	
		// Component level properties - "View Dr Cr Details" 
		this.view_dr_cr_details.uictrl_code = "datatable"
		this.view_dr_cr_details.uicgc_desc = "View Dr Cr Details"
		this.view_dr_cr_details.uicgc_code = "uicgc_6"
		this.view_dr_cr_details.params = {"need_search":"N","need_vertical":"Y","advance_dynamic_search":"N"}
		this.view_dr_cr_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671188660865","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1690460821298","date_format":true}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM,  VALUEDATEMI FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    TO_CHAR(A.VALUE_DATE,      'YYYY-MM-DD') AS VALUEDATEMI,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,      'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    A.DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    A.CR_ACCT_IDENTIFICATION,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_dr_cr_details.context_menu = []
		this.view_dr_cr_details.views = {}
		this.view_dr_cr_details.onChangecomponent = new EventEmitter<any>()
		this.view_dr_cr_details.show = true
		this.view_dr_cr_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
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
	
		// Component level properties - "View Payment Details" 
		this.view_payment_details.uictrl_code = "datatable"
		this.view_payment_details.uicgc_desc = "View Payment Details"
		this.view_payment_details.uicgc_code = "uicgc_8"
		this.view_payment_details.params = {"need_search":"N","need_vertical":"Y"}
		this.view_payment_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671188720824","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1690460821298","date_format":true}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM,  VALUEDATEMI FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    TO_CHAR(A.VALUE_DATE,      'YYYY-MM-DD') AS VALUEDATEMI,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,      'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    A.DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    A.CR_ACCT_IDENTIFICATION,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"VALUEDATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.view_payment_details.context_menu = []
		this.view_payment_details.views = {}
		this.view_payment_details.onChangecomponent = new EventEmitter<any>()
		this.view_payment_details.show = true
		this.view_payment_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	
		// Component level properties - "Message Detail" 
		this.message_detail.uictrl_code = "datatable"
		this.message_detail.uicgc_desc = "Message Detail"
		this.message_detail.uicgc_code = "uicgc_9"
		this.message_detail.params = {"need_search":"N","need_pag_datatable":"Y"}
		this.message_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671191050037","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   <TRAN_DB>.NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join <TRAN_DB>.NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.message_detail.context_menu = []
		this.message_detail.views = {}
		this.message_detail.onChangecomponent = new EventEmitter<any>()
		this.message_detail.show = true
		this.message_detail.dynamic_param = {}
	
		// Component level properties - "Request UI" 
		this.request_ui.uictrl_code = "dynamic_ui"
		this.request_ui.uicgc_desc = "Request UI"
		this.request_ui.uicgc_code = "uicgc_10"
		this.request_ui.params = {}
		this.request_ui.datasource = {}
		this.request_ui.context_menu = []
		this.request_ui.views = {"first":"DTT_1304_1665905039255","is_tab_mode":"N","dtt_1304_1665905039255":{"0":[{"dttv_id":"NPSS Target Request UI","tab_order":0,"tab_name":"","uicgc_description":"Request UI","role_description":"default","dtt_description":"NPSS Trn Process Log"}]}}
		this.request_ui.onChangecomponent = new EventEmitter<any>()
		this.request_ui.show = true
		this.request_ui.dynamic_param = {}
		this.request_ui.f_npss_target_request_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.request_ui.form_name = "f_npss_target_request_ui"
	
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
	
		// Component level properties - "Process Log UI" 
		this.process_log_ui.uictrl_code = "dynamic_ui"
		this.process_log_ui.uicgc_desc = "Process Log UI"
		this.process_log_ui.uicgc_code = "uicgc_12"
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
	
		// Component level properties - "Message Back UI" 
		this.message_back_ui.uictrl_code = "dynamic_ui"
		this.message_back_ui.uicgc_desc = "Message Back UI"
		this.message_back_ui.uicgc_code = "uicgc_14"
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
	
		// Component level properties - "Message Detail UI" 
		this.message_detail_ui.uictrl_code = "dynamic_ui"
		this.message_detail_ui.uicgc_desc = "Message Detail UI"
		this.message_detail_ui.uicgc_code = "uicgc_15"
		this.message_detail_ui.params = {}
		this.message_detail_ui.datasource = {}
		this.message_detail_ui.context_menu = []
		this.message_detail_ui.views = {"first":"DTT_1304_1665903906193","is_tab_mode":"N","dtt_1304_1665903906193":{"0":[{"dttv_id":"NPSS Message Data UI","tab_order":0,"tab_name":"","uicgc_description":"Message Detail UI","role_description":"default","dtt_description":"NPSS TRN REQ RESP DTLS"}]}}
		this.message_detail_ui.onChangecomponent = new EventEmitter<any>()
		this.message_detail_ui.show = true
		this.message_detail_ui.dynamic_param = {}
		this.message_detail_ui.f_npss_message_data_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.message_detail_ui.form_name = "f_npss_message_data_ui"
	
		// Component level properties - "Single Back UI" 
		this.single_back_ui.uictrl_code = "dynamic_ui"
		this.single_back_ui.uicgc_desc = "Single Back UI"
		this.single_back_ui.uicgc_code = "uicgc_16"
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
	
		// Component level properties - "History Detail" 
		this.history_detail.uictrl_code = "datatable"
		this.history_detail.uicgc_desc = "History Detail"
		this.history_detail.uicgc_code = "uicgc_17"
		this.history_detail.params = {"need_search":"N"}
		this.history_detail.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_17","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671191081541","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <TRAN_DB>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.history_detail.context_menu = []
		this.history_detail.views = {}
		this.history_detail.onChangecomponent = new EventEmitter<any>()
		this.history_detail.show = true
		this.history_detail.dynamic_param = {}
	
		// Component level properties - "Initate UI" 
		this.initate_ui.uictrl_code = "dynamic_ui"
		this.initate_ui.uicgc_desc = "Initate UI"
		this.initate_ui.uicgc_code = "uicgc_18"
		this.initate_ui.params = {}
		this.initate_ui.datasource = {}
		this.initate_ui.context_menu = []
		this.initate_ui.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS OP Reversal UI","tab_order":0,"tab_name":"","uicgc_description":"Initate UI","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.initate_ui.onChangecomponent = new EventEmitter<any>()
		this.initate_ui.show = true
		this.initate_ui.dynamic_param = {}
		this.initate_ui.f_npss_op_reversal_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.initate_ui.form_name = "f_npss_op_reversal_ui"
		
		// "Forward to Checker" Button of "Initate UI" component
		this.initate_ui_forward_to_checker.label_name = "Forward to Checker"
		this.initate_ui_forward_to_checker.show = true
		this.initate_ui_forward_to_checker.disabled = false
		this.initate_ui_forward_to_checker.params = {"icon_only":false,"uicgcc_style":"fa fa-angle-double-right"}
		this.initate_ui_forward_to_checker.dynamic_param = {}
		this.initate_ui_forward_to_checker.role = []
		this.initate_ui_forward_to_checker.action = ""
	
		// Component level properties - "Send to Maker UI" 
		this.send_to_maker_ui.uictrl_code = "dynamic_ui"
		this.send_to_maker_ui.uicgc_desc = "Send to Maker UI"
		this.send_to_maker_ui.uicgc_code = "uicgc_19"
		this.send_to_maker_ui.params = {}
		this.send_to_maker_ui.datasource = {}
		this.send_to_maker_ui.context_menu = []
		this.send_to_maker_ui.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS Send to maker UI","tab_order":0,"tab_name":"","uicgc_description":"Send to Maker UI","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.send_to_maker_ui.onChangecomponent = new EventEmitter<any>()
		this.send_to_maker_ui.show = true
		this.send_to_maker_ui.dynamic_param = {}
		this.send_to_maker_ui.f_npss_send_to_maker_ui = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.send_to_maker_ui.form_name = "f_npss_send_to_maker_ui"
		
		// "Save" Button of "Send to Maker UI" component
		this.send_to_maker_ui_save.label_name = "Save"
		this.send_to_maker_ui_save.show = true
		this.send_to_maker_ui_save.disabled = false
		this.send_to_maker_ui_save.params = {"icon_only":false,"uicgcc_style":"fa fa-floppy-o"}
		this.send_to_maker_ui_save.dynamic_param = {}
		this.send_to_maker_ui_save.role = []
		this.send_to_maker_ui_save.action = ""
	
		// Component level properties - "Search Info UI" 
		this.search_info_ui.uictrl_code = "dynamic_ui"
		this.search_info_ui.uicgc_desc = "Search Info UI"
		this.search_info_ui.uicgc_code = "uicgc_20"
		this.search_info_ui.params = {}
		this.search_info_ui.datasource = {}
		this.search_info_ui.context_menu = []
		this.search_info_ui.views = {"first":"DTT_1304_1665901217208","is_tab_mode":"N","dtt_1304_1665901217208":{"0":[{"dttv_id":"NPSS MI UI DBTR INFO","tab_order":0,"tab_name":"","uicgc_description":"Search Info UI","role_description":"default","dtt_description":"NPSS Transactions"}]}}
		this.search_info_ui.onChangecomponent = new EventEmitter<any>()
		this.search_info_ui.show = true
		this.search_info_ui.dynamic_param = {}
		this.search_info_ui.f_npss_mi_ui_dbtr_info = {"show":false,"form_instance":{"ctrl":{},"dt_code":"","dtt_code":"","meta":[]}}
		this.search_info_ui.form_name = "f_npss_mi_ui_dbtr_info"
	
		// Component level properties - "Initiate custom widget" 
		this.initiate_custom_widget.uictrl_code = "custom_widget"
		this.initiate_custom_widget.uicgc_desc = "Initiate custom widget"
		this.initiate_custom_widget.uicgc_code = "uicgc_21"
		this.initiate_custom_widget.params = {}
		this.initiate_custom_widget.datasource = {}
		this.initiate_custom_widget.context_menu = []
		this.initiate_custom_widget.views = {}
		this.initiate_custom_widget.onChangecomponent = new EventEmitter<any>()
		this.initiate_custom_widget.show = true
		this.initiate_custom_widget.dynamic_param = {}
	
		// Component level properties - "Reversal Details" 
		this.reversal_details.uictrl_code = "datatable"
		this.reversal_details.uicgc_desc = "Reversal Details"
		this.reversal_details.uicgc_code = "uicgc_22"
		this.reversal_details.params = {"need_pag_datatable":"Y","need_search":"N","need_vertical":"Y"}
		this.reversal_details.datasource = {"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1677756429103","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal  Reversal code MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"reversal_code","alias_name":"","mq_id":"MQ_1677755761450","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1677755761593","date_format":false},{"column_name":"CD_DESCRIPTION","alias_name":"","mq_id":"MQ_1677841302739","date_format":false}],"joins":[]},"eq_text":"select  uetr,  npsst_id,  NPSSTPL_ID,  dtt_code,  dt_code,  reversal_code,  STATUS,  process_status,  REVERSAL_DESCRIPTION,  CD_DESCRIPTION from  (  select   ntpl.uetr,   ntpl.NPSSTPL_ID,   nt.npsst_id,   nt.dtt_code,   nt.dt_code,   reversal_code,   ntpl.STATUS,   ntpl.process_status,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   CD_DESCRIPTION  from   npss_trn_process_log ntpl  inner join npss_transactions nt on   NTPL.UETR = nt.UETR   left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = NTPL.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y')V $WHERE order by NPSSTPL_ID desc limit 1"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal  Code Desc CCD","filter":[{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Reversal Code","target_column":"reversal_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"CD_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		this.reversal_details.context_menu = []
		this.reversal_details.views = {}
		this.reversal_details.onChangecomponent = new EventEmitter<any>()
		this.reversal_details.show = true
		this.reversal_details.dynamic_param = {"column_header_name":"Field","value_header_name":"Value"}
	}
	// Methods
	ngAfterViewInit() {
		this.page_load();
	}

  
	// To handle page_load event
	page_load(){
		this.page_load__he_for_initiate()
		this.page_load__de_for_pl_to_vm()
		this.page_load__de_for_vlh_from_pl()
		this.page_load__cc_for_reversal_period_time()
		this.page_load__de_for_queue()
		this.page_load__he_for_pl_approve()
		this.page_load__he_for_stm()
		this.page_load__de_for_stm()
		this.page_load__e_1677818329441()
		this.page_load__he_for_checker_on_load_btn()
		this.page_load__tbc_on_checker_on_pageload()
	}

	//Handler for INTERNAL event of "cc for reversal period time"
	cc_for_reversal_period_time__internal(parent_event_result){
		this.cc_for_reversal_period_time__cf_for_routing_key(parent_event_result)
	}

	//Handler for INTERNAL event of "cf for routing key"
	cf_for_routing_key__internal(parent_event_result){
		this.cf_for_routing_key__cc_for_show_hide_btn(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__action_button_click(){
		this.search_search__cu_for_tl()
		this.search_search__de_from_search_to_view_message_details()
		this.search_search__de_from_search_to_view_log_hst()
		this.search_search__ve_for_search_infos()
		this.search_search__e_1677764315181()
		this.search_search__cc_for_search_to_set_mi_level_action_mode()
	}

	//Handler for INTERNAL event of "validate ele"
	validate_ele__internal(parent_event_result){
		this.validate_ele__ssp_for_pl_queue(parent_event_result)
		this.validate_ele__close_popups(parent_event_result)
	}

	//Handler for INTERNAL event of "ssp for pl queue"
	ssp_for_pl_queue__internal(parent_event_result){
		this.ssp_for_pl_queue__brfq_for_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for queue"
	brfq_for_queue__internal(parent_event_result){
		this.brfq_for_queue__sfr_for_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "ve for search infos"
	ve_for_search_infos__internal(parent_event_result){
		this.ve_for_search_infos__validate_ele(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for search to set mi level action mode"
	cc_for_search_to_set_mi_level_action_mode__internal(parent_event_result){
		this.cc_for_search_to_set_mi_level_action_mode__cc_for_show_hide_after_srch(parent_event_result)
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
		this.ssp_for_transaction_list__brfq_from_queue_to_tran(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq from queue to tran"
	brfq_from_queue_to_tran__internal(parent_event_result){
		this.brfq_from_queue_to_tran__sfr_tran_from_quee(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__selection_changed(){
		this.transaction_list__svm_for_tl()
		this.transaction_list__ee_for_vtd()
		this.transaction_list__ee_for_vm()
		this.transaction_list__ee_for_vlh()
		this.transaction_list__ee_for_tran_to_initate()
		this.transaction_list__ssr_for_initate()
		this.transaction_list__ee_for_approves()
		this.transaction_list__ee_for_send_to_maker()
		this.transaction_list__brfq_for_reversal_core()
		this.transaction_list__e_1677818351539()
	}

	//Handler for INTERNAL event of "svm for tl"
	svm_for_tl__internal(parent_event_result){
		this.svm_for_tl__cc_for_sh_ide(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for reversal core"
	brfq_for_reversal_core__internal(parent_event_result){
		this.brfq_for_reversal_core__e_1677764333587(parent_event_result)
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

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__action_button_click(){
		this.back_ui_back__sp_for_main()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view tran"
	navigation_ui_view_tran__action_button_click(){
		this.navigation_ui_view_tran__sp_for_view_detail()
		this.navigation_ui_view_tran__brfq_for_vtd()
		this.navigation_ui_view_tran__brfq_for_vptdl()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message back ui back"
	message_back_ui_back__action_button_click(){
		this.message_back_ui_back__sp_for_message_back()
	}

	//Handler for SELECTION_CHANGED event of "history detail"
	history_detail__selection_changed(){
		this.history_detail__ssr_from_hd_to_response()
		this.history_detail__ssr_from_hd_to_req()
		this.history_detail__ee_from_history_detail_to_view_reaponse()
		this.history_detail__ee_from_history_detail_to_view_req()
		this.history_detail__ee_for_vreq_and_vres()
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__action_button_click(){
		this.message_detail_action_back__sp_for_mda()
	}

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__action_button_click(){
		this.single_back_ui_back__sp_for_reqres()
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view response"
	process_log_ui_view_response__action_button_click(){
		this.process_log_ui_view_response__sp_for_response_btn()
		this.process_log_ui_view_response__bt_from_view_response_to_response_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view request"
	process_log_ui_view_request__action_button_click(){
		this.process_log_ui_view_request__sp_for_view_request_btn()
		this.process_log_ui_view_request__bt_from_view_req_to_req_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__action_button_click(){
		this.message_detail_action_view_message__sp_for_view_message_data()
		this.message_detail_action_view_message__bt_for_mgsg()
	}

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__selection_changed(){
		this.message_detail__ee_from_message_detail_to_show_message()
		this.message_detail__ssr_for_mgsgs()
	}

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__action_button_click(){
		this.process_log_ui_view_req_and_res__sp_for_vreq_and_vres()
		this.process_log_ui_view_req_and_res__bt_vreq()
		this.process_log_ui_view_req_and_res__bt_vres()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__action_button_click(){
		this.navigation_ui_initiate__sp_for_initate()
		this.navigation_ui_initiate__bt_for_initate()
		this.navigation_ui_initiate__de_for_initate__initate_ui()
		this.navigation_ui_initiate__e_1700737221672__initate_ui()
	}

	//Handler for ACTION_BUTTON_CLICK event of "initate ui forward to checker"
	initate_ui_forward_to_checker__action_button_click(){
		this.initate_ui_forward_to_checker__e_1680525493336()
	}

	//Handler for INTERNAL event of "e 1680525493336"
	e_1680525493336__internal(parent_event_result){
		this.e_1680525493336__cc_for_initate_ide(parent_event_result)
	}

	//Handler for INTERNAL event of "cc for initate ide"
	cc_for_initate_ide__internal(parent_event_result){
		this.cc_for_initate_ide__info_for_initate(parent_event_result)
	}

	//Handler for INTERNAL event of "info for initate"
	info_for_initate__internal(parent_event_result){
		this.info_for_initate__rs_for_initate(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui approve"
	navigation_ui_approve__action_button_click(){
		this.navigation_ui_approve__cc_for_approve_ide()
	}

	//Handler for INTERNAL event of "cc for approve ide"
	cc_for_approve_ide__internal(parent_event_result){
		this.cc_for_approve_ide__info_for_approve_ide(parent_event_result)
	}

	//Handler for INTERNAL event of "info for approve ide"
	info_for_approve_ide__internal(parent_event_result){
		this.info_for_approve_ide__rs_for_approve_ide(parent_event_result)
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui send to maker"
	navigation_ui_send_to_maker__action_button_click(){
		this.navigation_ui_send_to_maker__stm_popup()
	}

	//Handler for ACTION_BUTTON_CLICK event of "send to maker ui save"
	send_to_maker_ui_save__action_button_click(){
		this.send_to_maker_ui_save__cc_for_send_to_maker_save()
	}

	//Handler for INTERNAL event of "cc for send to maker save"
	cc_for_send_to_maker_save__internal(parent_event_result){
		this.cc_for_send_to_maker_save__im_for_send_to_maker_save(parent_event_result)
	}

	//Handler for INTERNAL event of "im for send to maker save"
	im_for_send_to_maker_save__internal(parent_event_result){
		this.im_for_send_to_maker_save__rs_for_send_to_maker_save(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "reversal details"
	reversal_details__selection_changed(){
		this.reversal_details__svm_for_reversal_code()
	}

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui checker on load trg"
	navigation_ui_checker_on_load_trg__action_button_click(peventcontext){
		if(!peventcontext) { 
 			peventcontext = this.navigation_ui_checker_on_load_trg__sec_for_checker_on_loaf_trg()
		 }
		this.navigation_ui_checker_on_load_trg__brfq_for_checker_queue(peventcontext)
		this.navigation_ui_checker_on_load_trg__brfq_for_maker(peventcontext)
	}

	//Handler for INTERNAL event of "brfq for checker queue"
	brfq_for_checker_queue__internal(parent_event_result){
		this.brfq_for_checker_queue__sfr_for_checker_on_load_trg_queue(parent_event_result)
	}

	//Handler for INTERNAL event of "brfq for maker"
	brfq_for_maker__internal(parent_event_result){
		this.brfq_for_maker__sfr_for_maker_on_load_trg_queue(parent_event_result)
	}

	//Handler for SELECTION_CHANGED event of "npss mi ui dbtr info memory97"
	npss_mi_ui_dbtr_info_memory97__selection_changed(){
		this.npss_mi_ui_dbtr_info_memory97__shc_for_search_ui__search_info_ui()
		this.npss_mi_ui_dbtr_info_memory97__svm_for_drinfo__search_info_ui()
	}

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_initiate() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_initiate"
		let parent_source_id=""
		let event_code="e_1667555863965"
		let event_params={"caller_name":"page_load__he_for_initiate","event_desc":"HE for initiate","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__de_for_pl_to_vm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_message_log"
		let parent_source_id=""
		let event_code="e_1669369737629"
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
	page_load__de_for_vlh_from_pl() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_view_process_log"
		let parent_source_id=""
		let event_code="e_1669370613900"
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
	page_load__cc_for_reversal_period_time() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669383689672"
		let event_params={"caller_name":"page_load__cc_for_reversal_period_time","event_desc":"CC for Reversal period time","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_reversal_period_time__cf_for_routing_key,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_set_reversal_prd_system_setup_dateService.fn_npss_cs_set_reversal_prd_system_setup_date(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__de_for_queue() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_initiate"
		let parent_source_id=""
		let event_code="e_1671185986430"
		let event_params={"caller_name":"page_load__de_for_queue","event_desc":"DE for Queue","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__he_for_pl_approve() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_approve"
		let parent_source_id=""
		let event_code="e_1671195516400"
		let event_params={"caller_name":"page_load__he_for_pl_approve","event_desc":"HE For PL Approve","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__he_for_stm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_send_to_maker"
		let parent_source_id=""
		let event_code="e_1672307345795"
		let event_params={"caller_name":"page_load__he_for_stm","event_desc":"HE for STM","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__de_for_stm() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_send_to_maker"
		let parent_source_id=""
		let event_code="e_1672307358284"
		let event_params={"caller_name":"page_load__de_for_stm","event_desc":"DE for STM","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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
	page_load__e_1677818329441() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="reversal_details"
		let parent_source_id=""
		let event_code="e_1677818329441"
		let event_params={"caller_name":"page_load__e_1677818329441","event_desc":"E_1677818329441","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
		let handler_code="hide_element"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1677756429103","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal  Reversal code MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"reversal_code","alias_name":"","mq_id":"MQ_1677755761450","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1677755761593","date_format":false},{"column_name":"CD_DESCRIPTION","alias_name":"","mq_id":"MQ_1677841302739","date_format":false}],"joins":[]},"eq_text":"select  uetr,  npsst_id,  NPSSTPL_ID,  dtt_code,  dt_code,  reversal_code,  STATUS,  process_status,  REVERSAL_DESCRIPTION,  CD_DESCRIPTION from  (  select   ntpl.uetr,   ntpl.NPSSTPL_ID,   nt.npsst_id,   nt.dtt_code,   nt.dt_code,   reversal_code,   ntpl.STATUS,   ntpl.process_status,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   CD_DESCRIPTION  from   npss_trn_process_log ntpl  inner join npss_transactions nt on   NTPL.UETR = nt.UETR   left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = NTPL.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y')V $WHERE order by NPSSTPL_ID desc limit 1"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal  Code Desc CCD","filter":[{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Reversal Code","target_column":"reversal_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"CD_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.hide_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for DPSINIT event of "page_load"
	page_load__he_for_checker_on_load_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_checker_on_load_trg"
		let parent_source_id=""
		let event_code="e_1680263871705"
		let event_params={"caller_name":"page_load__he_for_checker_on_load_btn","event_desc":"HE for Checker on Load BTN","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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
	page_load__tbc_on_checker_on_pageload() { 
		let Dest_Is_ctrl=true
		
		let source_id="page_load"
		let destn_id="navigation_ui_checker_on_load_trg"
		let parent_source_id=""
		let event_code="e_1680264298033"
		let event_params={"caller_name":"page_load__tbc_on_checker_on_pageload","event_desc":"TBC on CheckER On PageLoad","event_type":"DPSINIT","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{}}
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

	//Handler for INTERNAL event of "cc for reversal period time"
	cc_for_reversal_period_time__cf_for_routing_key(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_reversal_period_time"
		let destn_id=""
		let parent_source_id="page_load"
		let event_code="e_1669383717434"
		let event_params={"caller_name":"cc_for_reversal_period_time__cf_for_routing_key","event_desc":"CF for Routing key","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{"uicgc_code":""},"parent_event_result":"SUCCESS"}
		let handler_code="create_form"
		let internals="cf_for_routing_key__cc_for_show_hide_btn,"
		let event_data={}
		let data_source={}
		try {
			this.handler.create_form(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cf for routing key"
	cf_for_routing_key__cc_for_show_hide_btn(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cf_for_routing_key"
		let destn_id=""
		let parent_source_id="cc_for_reversal_period_time"
		let event_code="e_1669383940600"
		let event_params={"caller_name":"cf_for_routing_key__cc_for_show_hide_btn","event_desc":"CC for Show hide btn","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"dps_initialize","raiseparam":{},"parent_event_result":"SUCCESS"}
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
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671188550885","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671187394600","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671187395070","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671187395390","date_format":false,"currency_format":true},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671187395598","date_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1671187395814","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671187504186","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671187504353","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671187504530","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671187504697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1671187504898","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1677910029248","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1677910029399","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1682330825296","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  REMARKS,  REVERSAL_AMOUNT from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   NTPL.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.CR_ACCT_IDENTIFICATION,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   A.REMARKS,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   NTPL.npsstpl_id,   NTPL.ADDITIONAL_INFO,   NTPL1.PROCESS_REF_NO,   NTPL.NPSSTRRD_REFNO  from   NPSS_TRANSACTIONS A  inner join NPSS_TRN_PROCESS_LOG NTPL on   NTPL.UETR = A.UETR   left join npss_trn_process_log ntpl1 on   ntpl1.uetr =a.uetr and  NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW where  PROCESS_TYPE = 'OP' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Transaction CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":true},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":"MI_LEVEL_DR_INFO:IBAN"},{"header":"Dr Card/Account No","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":"MI_LEVEL_DR_INFO:CARD"},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":250,"format":"","date_format":false}]}}}}}}
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
		let event_code="e_1669369786347"
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
		let event_code="e_1669370569372"
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
	search_search__ve_for_search_infos() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="search_info_ui"
		let parent_source_id=""
		let event_code="e_1674478206800"
		let event_params={"caller_name":"search_search__ve_for_search_infos","event_desc":"VE for Search Infos","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="ve_for_search_infos__validate_ele,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__e_1677764315181() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id="reversal_details"
		let parent_source_id=""
		let event_code="e_1677764315181"
		let event_params={"caller_name":"search_search__e_1677764315181","event_desc":"E_1677764315181","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"need_reset_key_column":"N"}}
		let handler_code="clear_ui"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1677756429103","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal  Reversal code MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"reversal_code","alias_name":"","mq_id":"MQ_1677755761450","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1677755761593","date_format":false},{"column_name":"CD_DESCRIPTION","alias_name":"","mq_id":"MQ_1677841302739","date_format":false}],"joins":[]},"eq_text":"select  uetr,  npsst_id,  NPSSTPL_ID,  dtt_code,  dt_code,  reversal_code,  STATUS,  process_status,  REVERSAL_DESCRIPTION,  CD_DESCRIPTION from  (  select   ntpl.uetr,   ntpl.NPSSTPL_ID,   nt.npsst_id,   nt.dtt_code,   nt.dt_code,   reversal_code,   ntpl.STATUS,   ntpl.process_status,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   CD_DESCRIPTION  from   npss_trn_process_log ntpl  inner join npss_transactions nt on   NTPL.UETR = nt.UETR   left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = NTPL.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y')V $WHERE order by NPSSTPL_ID desc limit 1"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal  Code Desc CCD","filter":[{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Reversal Code","target_column":"reversal_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"CD_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.clear_ui(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "search search"
	search_search__cc_for_search_to_set_mi_level_action_mode() { 
		let Dest_Is_ctrl=true
		
		let source_id="search_search"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1680517815896"
		let event_params={"caller_name":"search_search__cc_for_search_to_set_mi_level_action_mode","event_desc":"CC for search to set mi_level_action mode","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_search_to_set_mi_level_action_mode__cc_for_show_hide_after_srch,"
		let event_data={}
		let data_source={}
		try {
			this.npss_set_action_mode_as_searchService.fn_npss_set_action_mode_as_search(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "validate ele"
	validate_ele__ssp_for_pl_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="validate_ele"
		let destn_id="search"
		let parent_source_id="ve_for_search_infos"
		let event_code="e_1671252454654"
		let event_params={"caller_name":"validate_ele__ssp_for_pl_queue","event_desc":"SSP for PL Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "validate ele"
	validate_ele__close_popups(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="validate_ele"
		let destn_id=""
		let parent_source_id="ve_for_search_infos"
		let event_code="e_1671274049098"
		let event_params={"popup_info":{"context":""},"caller_name":"validate_ele__close_popups","event_desc":"Close popups","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "ssp for pl queue"
	ssp_for_pl_queue__brfq_for_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_pl_queue"
		let destn_id="queue"
		let parent_source_id="validate_ele"
		let event_code="e_1671252481010"
		let event_params={"caller_name":"ssp_for_pl_queue__brfq_for_queue","event_desc":"BRFQ for Queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_queue__sfr_for_queue,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671187481122","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671186151268","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671186151686","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348524994","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   distinct UETR,   NPSSTRRD_REFNO,   PROCESS_TYPE,   CREATED_DATE,   STATUS,   PROCESS_STATUS,   PROCESS_REF_NO,   PROCESSING_SYSTEM,   TENANT_ID,   MODIFIED_DATE,   MODIFIED_DATE_UTC,   TS_ID,   LOCKED_BY,   LOCKED_BY_NAME,   CREATED_BY,   CREATED_BY_NAME,   SYSTEM_ID,   ROLE_ID,   QR_APP_ID,   VPH_APP_CODE,   QR_QUEUE_CODE,   QR_SCREEN_NAME,   QR_MENU_GROUP,   QR_MODULE,   QUEUE_DESC,   QUEUE_CODE,   Q_APP_ID,   QS_SORT_ORDER,   Q_SORT_ORDER,   DEPARTMENT_CODE,   PROCESS_GROUP,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   TRAN_REF_ID,   CHANNEL_REFNO,   CLRSYSREF,   PAYMENT_ENDTOEND_ID,   INTRBK_STTLM_AMNT,   REVERSAL_AMOUNT,   CR_ACCT_IDENTIFICATION,   DBTR_IBAN  from   (   select    NTPL.UETR,    NT.PROCESS_TYPE,    NT.CREATED_DATE,    NT.STATUS,    NT.PROCESS_STATUS,    NT.PROCESSING_SYSTEM,    NT.TENANT_ID,    NT.MODIFIED_DATE,    NT.MODIFIED_DATE_UTC,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    NT.CREATED_BY,    NT.CREATED_BY_NAME,    NT.SYSTEM_ID,    QR.ROLE_ID,    QR.VPH_APP_ID as QR_APP_ID,    QR.VPH_APP_CODE,    QR.QUEUE_CODE as QR_QUEUE_CODE,    QR.SCREEN_NAME as QR_SCREEN_NAME,    QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,    QR.SCREEN_MODULE as QR_MODULE,    PQ.QUEUE_DESC,    PQ.QUEUE_CODE,    PQ.VPH_APP_ID as Q_APP_ID,    QR.SORT_ORDER as QS_SORT_ORDER,    PQ.SORT_ORDER as Q_SORT_ORDER,    NT.DEPARTMENT_CODE,    NT.PROCESS_GROUP,    NT.VALUE_DATE,    NT.DBTR_ACCT_NO,    NT.CDTR_ACCT_NO,    NT.CDTR_IBAN,    NT.TRAN_REF_ID,    NT.CHANNEL_REFNO,    NT.CLRSYSREF,    NT.PAYMENT_ENDTOEND_ID,    NT.INTRBK_STTLM_AMNT,    NT.REVERSAL_AMOUNT,    NT.CR_ACCT_IDENTIFICATION,    NTPL.REVERSAL_CODE,    NTPL.NPSSTPL_ID,    NTPL.ADDITIONAL_INFO,    ntpl1. PROCESS_REF_NO,    NTPL.NPSSTRRD_REFNO,    NT.DBTR_IBAN   from    NPSS_TRANSACTIONS NT   inner join NPSS_TRN_PROCESS_LOG NTPL on    NTPL.UETR = NT.UETR   left join npss_trn_process_log ntpl1 on    ntpl1.uetr = nt.uetr    and NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on    NT.NPSST_ID = TS.TRN_ID    and NT.DTT_CODE = TS.DTT_CODE   inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on    NT.STATUS = QR.PROCESS_QUEUE_STATUS    and NT.PROCESS_STATUS = QR.QUEUE_CODE   inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on    NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW  where   PROCESS_TYPE = 'OP' $AND )V1 order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Queue CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1671252500241"
		let event_params={"caller_name":"brfq_for_queue__sfr_for_queue","event_desc":"SFR for queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671187481122","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671186151268","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671186151686","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348524994","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   distinct UETR,   NPSSTRRD_REFNO,   PROCESS_TYPE,   CREATED_DATE,   STATUS,   PROCESS_STATUS,   PROCESS_REF_NO,   PROCESSING_SYSTEM,   TENANT_ID,   MODIFIED_DATE,   MODIFIED_DATE_UTC,   TS_ID,   LOCKED_BY,   LOCKED_BY_NAME,   CREATED_BY,   CREATED_BY_NAME,   SYSTEM_ID,   ROLE_ID,   QR_APP_ID,   VPH_APP_CODE,   QR_QUEUE_CODE,   QR_SCREEN_NAME,   QR_MENU_GROUP,   QR_MODULE,   QUEUE_DESC,   QUEUE_CODE,   Q_APP_ID,   QS_SORT_ORDER,   Q_SORT_ORDER,   DEPARTMENT_CODE,   PROCESS_GROUP,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   TRAN_REF_ID,   CHANNEL_REFNO,   CLRSYSREF,   PAYMENT_ENDTOEND_ID,   INTRBK_STTLM_AMNT,   REVERSAL_AMOUNT,   CR_ACCT_IDENTIFICATION,   DBTR_IBAN  from   (   select    NTPL.UETR,    NT.PROCESS_TYPE,    NT.CREATED_DATE,    NT.STATUS,    NT.PROCESS_STATUS,    NT.PROCESSING_SYSTEM,    NT.TENANT_ID,    NT.MODIFIED_DATE,    NT.MODIFIED_DATE_UTC,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    NT.CREATED_BY,    NT.CREATED_BY_NAME,    NT.SYSTEM_ID,    QR.ROLE_ID,    QR.VPH_APP_ID as QR_APP_ID,    QR.VPH_APP_CODE,    QR.QUEUE_CODE as QR_QUEUE_CODE,    QR.SCREEN_NAME as QR_SCREEN_NAME,    QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,    QR.SCREEN_MODULE as QR_MODULE,    PQ.QUEUE_DESC,    PQ.QUEUE_CODE,    PQ.VPH_APP_ID as Q_APP_ID,    QR.SORT_ORDER as QS_SORT_ORDER,    PQ.SORT_ORDER as Q_SORT_ORDER,    NT.DEPARTMENT_CODE,    NT.PROCESS_GROUP,    NT.VALUE_DATE,    NT.DBTR_ACCT_NO,    NT.CDTR_ACCT_NO,    NT.CDTR_IBAN,    NT.TRAN_REF_ID,    NT.CHANNEL_REFNO,    NT.CLRSYSREF,    NT.PAYMENT_ENDTOEND_ID,    NT.INTRBK_STTLM_AMNT,    NT.REVERSAL_AMOUNT,    NT.CR_ACCT_IDENTIFICATION,    NTPL.REVERSAL_CODE,    NTPL.NPSSTPL_ID,    NTPL.ADDITIONAL_INFO,    ntpl1. PROCESS_REF_NO,    NTPL.NPSSTRRD_REFNO,    NT.DBTR_IBAN   from    NPSS_TRANSACTIONS NT   inner join NPSS_TRN_PROCESS_LOG NTPL on    NTPL.UETR = NT.UETR   left join npss_trn_process_log ntpl1 on    ntpl1.uetr = nt.uetr    and NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on    NT.NPSST_ID = TS.TRN_ID    and NT.DTT_CODE = TS.DTT_CODE   inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on    NT.STATUS = QR.PROCESS_QUEUE_STATUS    and NT.PROCESS_STATUS = QR.QUEUE_CODE   inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on    NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW  where   PROCESS_TYPE = 'OP' $AND )V1 order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Queue CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "ve for search infos"
	ve_for_search_infos__validate_ele(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ve_for_search_infos"
		let destn_id="search"
		let parent_source_id="search_search"
		let event_code="e_1671252440816"
		let event_params={"caller_name":"ve_for_search_infos__validate_ele","event_desc":"Validate Ele","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="validate_elements"
		let internals="validate_ele__ssp_for_pl_queue,validate_ele__close_popups,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for search to set mi level action mode"
	cc_for_search_to_set_mi_level_action_mode__cc_for_show_hide_after_srch(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_search_to_set_mi_level_action_mode"
		let destn_id=""
		let parent_source_id="search_search"
		let event_code="e_1680520049168"
		let event_params={"caller_name":"cc_for_search_to_set_mi_level_action_mode__cc_for_show_hide_after_srch","event_desc":"CC for show hide after srch","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"search_search","raiseparam":{},"parent_event_result":"SUCCESS"}
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
		let event_data={"queue":{"e_1666857327033":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_1","event_code":"E_1666857327033","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"HARDCODED","column_name":"BULK","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"},{"type":"LOCAL","column_name":"PROCESS_STATUS","level":"MI_LEVEL","name":"MI_LEVEL_PROCESS_STATUS","setd3name":"PROCESS_STATUS"},{"type":"LOCAL","column_name":"STATUS","level":"MI_LEVEL","name":"MI_LEVEL_STATUS","setd3name":"STATUS"},{"type":"LOCAL","column_name":"PROCESSING_SYSTEM","level":"MI_LEVEL","name":"MI_LEVEL_PROCESSING_SYSTEM","setd3name":"PROCESSING_SYSTEM"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671187481122","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671186151268","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671186151686","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348524994","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   distinct UETR,   NPSSTRRD_REFNO,   PROCESS_TYPE,   CREATED_DATE,   STATUS,   PROCESS_STATUS,   PROCESS_REF_NO,   PROCESSING_SYSTEM,   TENANT_ID,   MODIFIED_DATE,   MODIFIED_DATE_UTC,   TS_ID,   LOCKED_BY,   LOCKED_BY_NAME,   CREATED_BY,   CREATED_BY_NAME,   SYSTEM_ID,   ROLE_ID,   QR_APP_ID,   VPH_APP_CODE,   QR_QUEUE_CODE,   QR_SCREEN_NAME,   QR_MENU_GROUP,   QR_MODULE,   QUEUE_DESC,   QUEUE_CODE,   Q_APP_ID,   QS_SORT_ORDER,   Q_SORT_ORDER,   DEPARTMENT_CODE,   PROCESS_GROUP,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   TRAN_REF_ID,   CHANNEL_REFNO,   CLRSYSREF,   PAYMENT_ENDTOEND_ID,   INTRBK_STTLM_AMNT,   REVERSAL_AMOUNT,   CR_ACCT_IDENTIFICATION,   DBTR_IBAN  from   (   select    NTPL.UETR,    NT.PROCESS_TYPE,    NT.CREATED_DATE,    NT.STATUS,    NT.PROCESS_STATUS,    NT.PROCESSING_SYSTEM,    NT.TENANT_ID,    NT.MODIFIED_DATE,    NT.MODIFIED_DATE_UTC,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    NT.CREATED_BY,    NT.CREATED_BY_NAME,    NT.SYSTEM_ID,    QR.ROLE_ID,    QR.VPH_APP_ID as QR_APP_ID,    QR.VPH_APP_CODE,    QR.QUEUE_CODE as QR_QUEUE_CODE,    QR.SCREEN_NAME as QR_SCREEN_NAME,    QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,    QR.SCREEN_MODULE as QR_MODULE,    PQ.QUEUE_DESC,    PQ.QUEUE_CODE,    PQ.VPH_APP_ID as Q_APP_ID,    QR.SORT_ORDER as QS_SORT_ORDER,    PQ.SORT_ORDER as Q_SORT_ORDER,    NT.DEPARTMENT_CODE,    NT.PROCESS_GROUP,    NT.VALUE_DATE,    NT.DBTR_ACCT_NO,    NT.CDTR_ACCT_NO,    NT.CDTR_IBAN,    NT.TRAN_REF_ID,    NT.CHANNEL_REFNO,    NT.CLRSYSREF,    NT.PAYMENT_ENDTOEND_ID,    NT.INTRBK_STTLM_AMNT,    NT.REVERSAL_AMOUNT,    NT.CR_ACCT_IDENTIFICATION,    NTPL.REVERSAL_CODE,    NTPL.NPSSTPL_ID,    NTPL.ADDITIONAL_INFO,    ntpl1. PROCESS_REF_NO,    NTPL.NPSSTRRD_REFNO,    NT.DBTR_IBAN   from    NPSS_TRANSACTIONS NT   inner join NPSS_TRN_PROCESS_LOG NTPL on    NTPL.UETR = NT.UETR   left join npss_trn_process_log ntpl1 on    ntpl1.uetr = nt.uetr    and NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on    NT.NPSST_ID = TS.TRN_ID    and NT.DTT_CODE = TS.DTT_CODE   inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on    NT.STATUS = QR.PROCESS_QUEUE_STATUS    and NT.PROCESS_STATUS = QR.QUEUE_CODE   inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on    NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW  where   PROCESS_TYPE = 'OP' $AND )V1 order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Queue CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let internals="ssp_for_transaction_list__brfq_from_queue_to_tran,"
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
	ssp_for_transaction_list__brfq_from_queue_to_tran(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="ssp_for_transaction_list"
		let destn_id="transaction_list"
		let parent_source_id="cc_for_queue"
		let event_code="e_1670668441812"
		let event_params={"caller_name":"ssp_for_transaction_list__brfq_from_queue_to_tran","event_desc":"BRFQ FROM QUEUE TO TRAN","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"},"parent_event_result":"SUCCESS"}
		let handler_code="bind_record_from_query"
		let internals="brfq_from_queue_to_tran__sfr_tran_from_quee,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671188550885","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671187394600","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671187395070","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671187395390","date_format":false,"currency_format":true},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671187395598","date_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1671187395814","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671187504186","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671187504353","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671187504530","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671187504697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1671187504898","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1677910029248","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1677910029399","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1682330825296","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  REMARKS,  REVERSAL_AMOUNT from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   NTPL.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.CR_ACCT_IDENTIFICATION,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   A.REMARKS,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   NTPL.npsstpl_id,   NTPL.ADDITIONAL_INFO,   NTPL1.PROCESS_REF_NO,   NTPL.NPSSTRRD_REFNO  from   NPSS_TRANSACTIONS A  inner join NPSS_TRN_PROCESS_LOG NTPL on   NTPL.UETR = A.UETR   left join npss_trn_process_log ntpl1 on   ntpl1.uetr =a.uetr and  NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW where  PROCESS_TYPE = 'OP' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Transaction CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":true},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":"MI_LEVEL_DR_INFO:IBAN"},{"header":"Dr Card/Account No","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":"MI_LEVEL_DR_INFO:CARD"},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":250,"format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq from queue to tran"
	brfq_from_queue_to_tran__sfr_tran_from_quee(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_from_queue_to_tran"
		let destn_id="transaction_list"
		let parent_source_id="ssp_for_transaction_list"
		let event_code="e_1670668467066"
		let event_params={"caller_name":"brfq_from_queue_to_tran__sfr_tran_from_quee","event_desc":"SFR TRAN FROM QUEE","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"queue","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671188550885","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671187394600","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671187395070","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671187395390","date_format":false,"currency_format":true},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671187395598","date_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1671187395814","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671187504186","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671187504353","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671187504530","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671187504697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1671187504898","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1677910029248","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1677910029399","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1682330825296","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  REMARKS,  REVERSAL_AMOUNT from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   NTPL.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.CR_ACCT_IDENTIFICATION,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   A.REMARKS,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   NTPL.npsstpl_id,   NTPL.ADDITIONAL_INFO,   NTPL1.PROCESS_REF_NO,   NTPL.NPSSTRRD_REFNO  from   NPSS_TRANSACTIONS A  inner join NPSS_TRN_PROCESS_LOG NTPL on   NTPL.UETR = A.UETR   left join npss_trn_process_log ntpl1 on   ntpl1.uetr =a.uetr and  NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW where  PROCESS_TYPE = 'OP' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Transaction CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":true},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":"MI_LEVEL_DR_INFO:IBAN"},{"header":"Dr Card/Account No","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":"MI_LEVEL_DR_INFO:CARD"},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":250,"format":"","date_format":false}]}}}}}}
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
		let internals="svm_for_tl__cc_for_sh_ide,"
		let event_data={"transaction_list":{"e_1666857595507":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_2","event_code":"E_1666857595507","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"UETR","level":"MI_LEVEL","name":"MI_LEVEL_UETR","setd3name":"UETR"},{"type":"LOCAL","column_name":"NPSST_ID","level":"MI_LEVEL","name":"MI_LEVEL_NPSST_ID","setd3name":"NPSST_ID"},{"type":"HARDCODED","column_name":"SELECT","level":"MI_LEVEL","name":"MI_LEVEL_ACTION_MODE","setd3name":"ACTION_MODE"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_2","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671188550885","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1671187394600","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1671187395070","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1671187395390","date_format":false,"currency_format":true},{"column_name":"REVERSAL_AMOUNT","alias_name":"","mq_id":"MQ_1671187395598","date_format":true},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1671187395814","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1671187504186","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1671187504353","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1671187504530","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1671187504697","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1671187504898","date_format":false},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1677910029248","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1677910029399","date_format":false},{"column_name":"REMARKS","alias_name":"","mq_id":"MQ_1682330825296","date_format":false}],"joins":[]},"eq_text":"select  distinct UETR,  NPSST_ID,  DATEMI,  DEPARTMENT_CODE,  PROCESS_GROUP,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  fn_pcidss_decrypt(DBTR_ACCT_NO,  $PCIDSS_KEY) as DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  REMITTANCE_INFO,  category_purpose,  issuer_type_code,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  TRAN_REF_ID,  PROCESSING_SYSTEM,  REMARKS,  REVERSAL_AMOUNT from  (  select   A.NPSST_ID,   A.VALUE_DATE,   A.MODIFIED_DATE_UTC,   A.CREATED_DATE,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as DATEMI,   A.CDTR_ACCT_NO,   A.CDTR_ACCT_NAME,   A.INTRBK_STTLM_AMNT,   A.INTRBK_STTLM_CUR,   A.DBTR_ACCT_NO,   A.DBTR_ACCT_NAME,   A.DR_SORT_CODE,   A.CR_SORT_CODE,   A.DEPARTMENT_CODE,   A.PROCESS_GROUP,   NTPL.UETR,   a.category_purpose,   A.issuer_type_code,   A.HDR_MSG_ID,   A.PRODUCT_CODE,   A.CHANNEL_ID,   A.CHANNEL_REFNO,   A.CHANNEL_PRODUCT,   A.CHANNEL_SUB_PRODUCT,   A.CHANNEL_TRAN_CODE,   A.PROCESS_TYPE,   A.DBTR_PHONE_NO,   A.DBTR_EMAIL_ID,   A.DBTR_DOCUMENT_ID,   A.DBTR_IBAN,   A.CDTR_PHONE_NO,   A.CDTR_EMAIL_ID,   A.CDTR_DOCUMENT_ID,   A.CDTR_IBAN,   A.CLRSYSREF,   A.PAYMENT_ENDTOEND_ID,   A.TRAN_REF_ID,   A.ACCP_DATE_TIME,   A.EXHF_ID,   A.REMITTANCE_INFO,   A.INWARD_FILE_NAME,   A.PROCESS_STATUS,   A.CBS_REF_NO,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.VERSION_NO,   A.CR_ACCT_IDENTIFICATION,   A.DBTR_PRVT_ID,   A.DBTR_OTHER_ISSUER,   TS.TS_ID,   TS.LOCKED_BY,   TS.LOCKED_BY_NAME,   A.PROCESSING_SYSTEM,   A.REMARKS,   A.REVERSAL_AMOUNT,   NTPL.REVERSAL_CODE,   NTPL.npsstpl_id,   NTPL.ADDITIONAL_INFO,   NTPL1.PROCESS_REF_NO,   NTPL.NPSSTRRD_REFNO  from   NPSS_TRANSACTIONS A  inner join NPSS_TRN_PROCESS_LOG NTPL on   NTPL.UETR = A.UETR   left join npss_trn_process_log ntpl1 on   ntpl1.uetr =a.uetr and  NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on   TS.TRN_ID = A.NPSST_ID   and TS.DTT_CODE = A.DTT_CODE  order by   A.NPSST_ID desc) VW where  PROCESS_TYPE = 'OP' $AND"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Transaction CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"PROCESS_STATUS","binding_name":"PROCESS_STATUS","binding_value":"","source_name":"MI_LEVEL_PROCESS_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"PROCESSING_SYSTEM","binding_name":"PROCESSING_SYSTEM","binding_value":"","source_name":"MI_LEVEL_PROCESSING_SYSTEM","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Original Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":false,"currency_format":true},{"header":"Reversal Amount","target_column":"REVERSAL_AMOUNT","alias_name":"","alignment":"Right","width":"","format":"","date_format":true},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":"MI_LEVEL_DR_INFO:IBAN"},{"header":"Dr Card/Account No","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false,"dependson":"MI_LEVEL_DR_INFO:CARD"},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E Ref ID","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remarks","target_column":"REMARKS","alias_name":"","alignment":"Left","width":250,"format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_vtd() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_view_tran"
		let parent_source_id=""
		let event_code="e_1669202037318"
		let event_params={"caller_name":"transaction_list__ee_for_vtd","event_desc":"EE for VTD","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
		let event_code="e_1669369844570"
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
		let event_code="e_1669370516849"
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
	transaction_list__ee_for_tran_to_initate() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_initiate"
		let parent_source_id=""
		let event_code="e_1671186006094"
		let event_params={"caller_name":"transaction_list__ee_for_tran_to_initate","event_desc":"EE for Tran to initate","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"Y","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	transaction_list__ssr_for_initate() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="initate_ui"
		let parent_source_id=""
		let event_code="e_1671189135959"
		let event_params={"caller_name":"transaction_list__ssr_for_initate","event_desc":"SSR for initate","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{}}
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

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__ee_for_approves() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_approve"
		let parent_source_id=""
		let event_code="e_1671200192402"
		let event_params={"caller_name":"transaction_list__ee_for_approves","event_desc":"EE for Approves","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"Y","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	transaction_list__ee_for_send_to_maker() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="navigation_ui_send_to_maker"
		let parent_source_id=""
		let event_code="e_1672308448863"
		let event_params={"caller_name":"transaction_list__ee_for_send_to_maker","event_desc":"EE for Send to maker","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"Y","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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
	transaction_list__brfq_for_reversal_core() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="reversal_details"
		let parent_source_id=""
		let event_code="e_1677756081883"
		let event_params={"caller_name":"transaction_list__brfq_for_reversal_core","event_desc":"BRFQ for Reversal core","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_reversal_core__e_1677764333587,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1677756429103","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal  Reversal code MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"reversal_code","alias_name":"","mq_id":"MQ_1677755761450","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1677755761593","date_format":false},{"column_name":"CD_DESCRIPTION","alias_name":"","mq_id":"MQ_1677841302739","date_format":false}],"joins":[]},"eq_text":"select  uetr,  npsst_id,  NPSSTPL_ID,  dtt_code,  dt_code,  reversal_code,  STATUS,  process_status,  REVERSAL_DESCRIPTION,  CD_DESCRIPTION from  (  select   ntpl.uetr,   ntpl.NPSSTPL_ID,   nt.npsst_id,   nt.dtt_code,   nt.dt_code,   reversal_code,   ntpl.STATUS,   ntpl.process_status,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   CD_DESCRIPTION  from   npss_trn_process_log ntpl  inner join npss_transactions nt on   NTPL.UETR = nt.UETR   left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = NTPL.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y')V $WHERE order by NPSSTPL_ID desc limit 1"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal  Code Desc CCD","filter":[{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Reversal Code","target_column":"reversal_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"CD_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "transaction list"
	transaction_list__e_1677818351539() { 
		let Dest_Is_ctrl=true
		
		let source_id="transaction_list"
		let destn_id="reversal_details"
		let parent_source_id=""
		let event_code="e_1677818351539"
		let event_params={"caller_name":"transaction_list__e_1677818351539","event_desc":"E_1677818351539","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":"","hide_for":"","hide_except":"","hide_column":""}}
		let handler_code="show_element"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1677756429103","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal  Reversal code MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"reversal_code","alias_name":"","mq_id":"MQ_1677755761450","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1677755761593","date_format":false},{"column_name":"CD_DESCRIPTION","alias_name":"","mq_id":"MQ_1677841302739","date_format":false}],"joins":[]},"eq_text":"select  uetr,  npsst_id,  NPSSTPL_ID,  dtt_code,  dt_code,  reversal_code,  STATUS,  process_status,  REVERSAL_DESCRIPTION,  CD_DESCRIPTION from  (  select   ntpl.uetr,   ntpl.NPSSTPL_ID,   nt.npsst_id,   nt.dtt_code,   nt.dt_code,   reversal_code,   ntpl.STATUS,   ntpl.process_status,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   CD_DESCRIPTION  from   npss_trn_process_log ntpl  inner join npss_transactions nt on   NTPL.UETR = nt.UETR   left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = NTPL.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y')V $WHERE order by NPSSTPL_ID desc limit 1"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal  Code Desc CCD","filter":[{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Reversal Code","target_column":"reversal_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"CD_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.show_element(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "svm for tl"
	svm_for_tl__cc_for_sh_ide(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="svm_for_tl"
		let destn_id=""
		let parent_source_id="transaction_list"
		let event_code="e_1671194908304"
		let event_params={"caller_name":"svm_for_tl__cc_for_sh_ide","event_desc":"CC for SH ide","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for INTERNAL event of "brfq for reversal core"
	brfq_for_reversal_core__e_1677764333587(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_reversal_core"
		let destn_id="reversal_details"
		let parent_source_id="transaction_list"
		let event_code="e_1677764333587"
		let event_params={"caller_name":"brfq_for_reversal_core__e_1677764333587","event_desc":"E_1677764333587","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"transaction_list","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1677756429103","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal  Reversal code MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"reversal_code","alias_name":"","mq_id":"MQ_1677755761450","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1677755761593","date_format":false},{"column_name":"CD_DESCRIPTION","alias_name":"","mq_id":"MQ_1677841302739","date_format":false}],"joins":[]},"eq_text":"select  uetr,  npsst_id,  NPSSTPL_ID,  dtt_code,  dt_code,  reversal_code,  STATUS,  process_status,  REVERSAL_DESCRIPTION,  CD_DESCRIPTION from  (  select   ntpl.uetr,   ntpl.NPSSTPL_ID,   nt.npsst_id,   nt.dtt_code,   nt.dt_code,   reversal_code,   ntpl.STATUS,   ntpl.process_status,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   CD_DESCRIPTION  from   npss_trn_process_log ntpl  inner join npss_transactions nt on   NTPL.UETR = nt.UETR   left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = NTPL.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y')V $WHERE order by NPSSTPL_ID desc limit 1"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal  Code Desc CCD","filter":[{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Reversal Code","target_column":"reversal_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"CD_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_params={"caller_name":"navigation_ui_search__spap_for_search","event_desc":"SPAP for Search","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_search","raiseparam":{"popup_category":"profile","variable":"p_search_layout__spap_for_search","selector":"p_search_layout","profile_code":"BTL_1304_1666856790983","window_title":"Search","window_height":650,"window_width":"870px","window_close_icon":"Y","eventdes":"spap_for_search","eventcode":"E_1666857782776"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "back ui back"
	back_ui_back__sp_for_main() { 
		let Dest_Is_ctrl=true
		
		let source_id="back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669201104744"
		let event_params={"caller_name":"back_ui_back__sp_for_main","event_desc":"SP for Main","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"back_ui_back","raiseparam":{"profile_code":"BTL_1304_1666856599156"}}
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
	navigation_ui_view_tran__sp_for_view_detail() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669201196854"
		let event_params={"caller_name":"navigation_ui_view_tran__sp_for_view_detail","event_desc":"SP for View detail","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"profile_code":"BTL_1304_1669200873578"}}
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
	navigation_ui_view_tran__brfq_for_vtd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_tran"
		let destn_id="view_dr_cr_details"
		let parent_source_id=""
		let event_code="e_1669201266351"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_for_vtd","event_desc":"BRFQ for VTD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_6","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671188660865","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1690460821298","date_format":true}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM,  VALUEDATEMI FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    TO_CHAR(A.VALUE_DATE,      'YYYY-MM-DD') AS VALUEDATEMI,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,      'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    A.DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    A.CR_ACCT_IDENTIFICATION,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Dr Cr CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Tran Created Date & Time","target_column":"DATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Acceptance Date Time","target_column":"ACCP_DATE_TIME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Sort Code","target_column":"CR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr IBAN","target_column":"CDTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Identification","target_column":"CR_ACCT_IDENTIFICATION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Account Name","target_column":"CDTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Phone No","target_column":"CDTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Email Id","target_column":"CDTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Cr Document Id","target_column":"CDTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Sort Code","target_column":"DR_SORT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr IBAN","target_column":"DBTR_IBAN","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Identification","target_column":"DBTR_ACCT_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Account Name","target_column":"DBTR_ACCT_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Phone No","target_column":"DBTR_PHONE_NO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Email Id","target_column":"DBTR_EMAIL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Document Id","target_column":"DBTR_DOCUMENT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Private Identification","target_column":"DBTR_PRVT_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Dr Other Issuer","target_column":"DBTR_OTHER_ISSUER","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1669207084182"
		let event_params={"caller_name":"navigation_ui_view_tran__brfq_for_vptdl","event_desc":"BRFQ for VPTDL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_tran","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_8","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671188720824","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS Decr HST View Transaction MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"VALUE_DATE","alias_name":"","mq_id":"MQ_1673092056492","date_format":true},{"column_name":"CDTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092056684","date_format":false},{"column_name":"CDTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092056908","date_format":false},{"column_name":"INTRBK_STTLM_AMNT","alias_name":"","mq_id":"MQ_1673092057076","date_format":false,"currency_format":true},{"column_name":"DBTR_ACCT_NO","alias_name":"","mq_id":"MQ_1673092057228","date_format":false},{"column_name":"DBTR_ACCT_NAME","alias_name":"","mq_id":"MQ_1673092057420","date_format":false},{"column_name":"DR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092057588","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1673092057748","date_format":false},{"column_name":"PAYMENT_ENDTOEND_ID","alias_name":"","mq_id":"MQ_1673092057924","date_format":false},{"column_name":"PROCESS_TYPE","alias_name":"","mq_id":"MQ_1673092127114","date_format":false},{"column_name":"HDR_MSG_ID","alias_name":"","mq_id":"MQ_1673092127282","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1673092127458","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1673092127626","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1673092127778","date_format":false},{"column_name":"DBTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092127946","date_format":false},{"column_name":"DBTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092128266","date_format":false},{"column_name":"DBTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092128473","date_format":false},{"column_name":"DBTR_IBAN","alias_name":"","mq_id":"MQ_1673092236606","date_format":false},{"column_name":"CDTR_PHONE_NO","alias_name":"","mq_id":"MQ_1673092236782","date_format":false},{"column_name":"CDTR_EMAIL_ID","alias_name":"","mq_id":"MQ_1673092236942","date_format":false},{"column_name":"CDTR_DOCUMENT_ID","alias_name":"","mq_id":"MQ_1673092237110","date_format":false},{"column_name":"CDTR_IBAN","alias_name":"","mq_id":"MQ_1673092237270","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1673092237447","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1673092237623","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1673092290325","date_format":false},{"column_name":"NPSST_ID","alias_name":"","mq_id":"MQ_1673092290485","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1673092290653","date_format":true},{"column_name":"DATEMI","alias_name":"","mq_id":"MQ_1673092290821","date_format":true},{"column_name":"MODIFIED_DATE_UTC","alias_name":"","mq_id":"MQ_1673092290981","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1673092291149","date_format":false},{"column_name":"CLRSYSREF","alias_name":"","mq_id":"MQ_1673092291341","date_format":false},{"column_name":"DEPARTMENT_CODE","alias_name":"","mq_id":"MQ_1673092291501","date_format":false},{"column_name":"INTRBK_STTLM_CUR","alias_name":"","mq_id":"MQ_1673092354435","date_format":false},{"column_name":"ACCP_DATE_TIME","alias_name":"","mq_id":"MQ_1673092354603","date_format":false},{"column_name":"REMITTANCE_INFO","alias_name":"","mq_id":"MQ_1673092354779","date_format":false},{"column_name":"category_purpose","alias_name":"","mq_id":"MQ_1673092354947","date_format":false},{"column_name":"issuer_type_code","alias_name":"","mq_id":"MQ_1673092355115","date_format":false},{"column_name":"DBTR_PRVT_ID","alias_name":"","mq_id":"MQ_1673092355283","date_format":false},{"column_name":"DBTR_OTHER_ISSUER","alias_name":"","mq_id":"MQ_1673092355467","date_format":false},{"column_name":"CR_SORT_CODE","alias_name":"","mq_id":"MQ_1673092402433","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1673092402801","date_format":false},{"column_name":"CR_ACCT_IDENTIFICATION","alias_name":"","mq_id":"MQ_1673092403129","date_format":false},{"column_name":"VALUEDATEMI","alias_name":"","mq_id":"MQ_1690460821298","date_format":true}],"joins":[]},"eq_text":"SELECT NPSST_ID,  DATEMI,  ACCP_DATE_TIME,  DEPARTMENT_CODE,  CHANNEL_ID,  CHANNEL_PRODUCT,  CHANNEL_REFNO,  INTRBK_STTLM_CUR,  INTRBK_STTLM_AMNT,  EXHF_ID,  MODIFIED_DATE_UTC,  VALUE_DATE,  CREATED_DATE,  MODIFIED_DATE_UTC,  CDTR_ACCT_NO,  CDTR_ACCT_NAME,  FN_PCIDSS_DECRYPT(DBTR_ACCT_NO,    $PCIDSS_KEY) AS DBTR_ACCT_NO,  DBTR_ACCT_NAME,  DR_SORT_CODE,  CR_SORT_CODE,  UETR,  REMITTANCE_INFO,  CATEGORY_PURPOSE,  ISSUER_TYPE_CODE,  HDR_MSG_ID,  PRODUCT_CODE,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  PROCESS_TYPE,  DBTR_PHONE_NO,  DBTR_EMAIL_ID,  DBTR_DOCUMENT_ID,  DBTR_IBAN,  CDTR_PHONE_NO,  CDTR_EMAIL_ID,  CDTR_DOCUMENT_ID,  CDTR_IBAN,  CLRSYSREF,  PAYMENT_ENDTOEND_ID,  PROCESS_STATUS,  STATUS,  DT_CODE,  DTT_CODE,  TENANT_ID,  TS_ID,  LOCKED_BY,  LOCKED_BY_NAME,  VERSION_NO,  DBTR_PRVT_ID,  DBTR_OTHER_ISSUER,  FN_PCIDSS_DECRYPT(CR_ACCT_IDENTIFICATION,    $PCIDSS_KEY) AS CR_ACCT_IDENTIFICATION,  TRAN_REF_ID,  PROCESSING_SYSTEM,  VALUEDATEMI FROM  (SELECT A.NPSST_ID,    A.VALUE_DATE,    TO_CHAR(A.VALUE_DATE,      'YYYY-MM-DD') AS VALUEDATEMI,    A.MODIFIED_DATE_UTC,    A.CREATED_DATE,    TO_CHAR(A.CREATED_DATE,      'YYYY-MM-DD HH:MI:SS:MS AM') AS DATEMI,    A.CDTR_ACCT_NO,    A.CDTR_ACCT_NAME,    A.INTRBK_STTLM_AMNT,    A.INTRBK_STTLM_CUR,    A.DBTR_ACCT_NO,    A.DBTR_ACCT_NAME,    A.DR_SORT_CODE,    A.CR_SORT_CODE,    A.DEPARTMENT_CODE,    A.UETR,    A.CATEGORY_PURPOSE,    A.ISSUER_TYPE_CODE,    A.HDR_MSG_ID,    A.PRODUCT_CODE,    A.CHANNEL_ID,    A.CHANNEL_REFNO,    A.CHANNEL_PRODUCT,    A.CHANNEL_SUB_PRODUCT,    A.CHANNEL_TRAN_CODE,    A.PROCESS_TYPE,    A.DBTR_PHONE_NO,    A.DBTR_EMAIL_ID,    A.DBTR_DOCUMENT_ID,    A.DBTR_IBAN,    A.CDTR_PHONE_NO,    A.CDTR_EMAIL_ID,    A.CDTR_DOCUMENT_ID,    A.CDTR_IBAN,    A.CLRSYSREF,    A.PAYMENT_ENDTOEND_ID,    A.TRAN_REF_ID,    A.ACCP_DATE_TIME,    A.EXHF_ID,    A.REMITTANCE_INFO,    A.INWARD_FILE_NAME,    A.PROCESS_STATUS,    A.CBS_REF_NO,    A.STATUS,    A.DT_CODE,    A.DTT_CODE,    A.TENANT_ID,    A.VERSION_NO,    A.DBTR_PRVT_ID,    A.DBTR_OTHER_ISSUER,    A.CR_ACCT_IDENTIFICATION,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    A.PROCESSING_SYSTEM   FROM <TRAN_DB>.NPSS_TRANSACTIONS A   INNER JOIN TRANSACTION_SET TS ON TS.TRN_ID = A.NPSST_ID   AND TS.DTT_CODE = A.DTT_CODE   ORDER BY A.NPSST_ID DESC) VW $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Decr Vertical Payment CCD","filter":[{"filter_name":"NPSST_ID","binding_name":"NPSST_ID","binding_value":"","source_name":"MI_LEVEL_NPSST_ID","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"NUMBER","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Tran Id","target_column":"NPSST_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Txn Value Date","target_column":"VALUEDATEMI","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Department Code","target_column":"DEPARTMENT_CODE","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Id","target_column":"CHANNEL_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Product","target_column":"CHANNEL_PRODUCT","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Channel Refno","target_column":"CHANNEL_REFNO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount Account Currency","target_column":"INTRBK_STTLM_CUR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Amount","target_column":"INTRBK_STTLM_AMNT","alias_name":"","alignment":"Left","width":"","format":"CURRENCY:د.إ","date_format":false,"currency_format":true},{"header":"Batch Id","target_column":"EXHF_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Clearing System Ref No","target_column":"CLRSYSREF","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"E2E reference id","target_column":"PAYMENT_ENDTOEND_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Category Purpose","target_column":"category_purpose","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Issuer Type Code","target_column":"issuer_type_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Remittance Info","target_column":"REMITTANCE_INFO","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Status","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1669369103055"
		let event_params={"caller_name":"message_back_ui_back__sp_for_message_back","event_desc":"SP for message back","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1669368481197"}}
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
		let event_code="e_1669369424717"
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
	history_detail__ssr_from_hd_to_req() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1669370897180"
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
	history_detail__ee_from_history_detail_to_view_reaponse() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_response"
		let parent_source_id=""
		let event_code="e_1669370965782"
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
		let event_code="e_1669371000178"
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
	history_detail__ee_for_vreq_and_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="history_detail"
		let destn_id="process_log_ui_view_req_and_res"
		let parent_source_id=""
		let event_code="e_1670245191415"
		let event_params={"caller_name":"history_detail__ee_for_vreq_and_vres","event_desc":"EE for Vreq and Vres","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"history_detail","raiseparam":{"enable_disable_count":"","enable_disable_locked_by":"","disable_for":"","disable_except":"","disable_column":"","expression":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui view message log"
	navigation_ui_view_message_log__sp_for_vmd() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_message_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669369304130"
		let event_params={"caller_name":"navigation_ui_view_message_log__sp_for_vmd","event_desc":"SP for VMD","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{"profile_code":"BTL_1304_1669368481197"}}
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
		let event_code="e_1669369906378"
		let event_params={"caller_name":"navigation_ui_view_message_log__brfq_for_vm","event_desc":"BRFQ for VM","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_vm__sfr_for_md,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671191050037","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   <TRAN_DB>.NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join <TRAN_DB>.NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1669369943819"
		let event_params={"caller_name":"brfq_for_vm__sfr_for_md","event_desc":"SFR for MD","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_message_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665903906193":{"st_ds":{"default":{"uicgc_code":"UICGC_9","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665903906193","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671191050037","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS REQ RESP MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_CODE","alias_name":"","mq_id":"MQ_1668573850306","date_format":false},{"column_name":"PROCESS_DETAIL","alias_name":"","mq_id":"MQ_1668573852117","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1668573852786","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1668573853731","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1668573854459","date_format":false},{"column_name":"NPSSTRRD_ID","alias_name":"","mq_id":"MQ_1668573869044","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1668573871186","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573874178","date_format":false},{"column_name":"PARENT_NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1668573876315","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1668573884586","date_format":false},{"column_name":"EXHF_ID","alias_name":"","mq_id":"MQ_1668573900766","date_format":false},{"column_name":"MESSAGE_DESC","alias_name":"","mq_id":"MQ_1668573911947","date_format":false},{"column_name":"CHANNEL_ID","alias_name":"","mq_id":"MQ_1668573917043","date_format":false},{"column_name":"CHANNEL_PRODUCT","alias_name":"","mq_id":"MQ_1668573918291","date_format":false},{"column_name":"CHANNEL_REFNO","alias_name":"","mq_id":"MQ_1668573918796","date_format":false},{"column_name":"CHANNEL_SUB_PRODUCT","alias_name":"","mq_id":"MQ_1668573919355","date_format":false},{"column_name":"CHANNEL_TRAN_CODE","alias_name":"","mq_id":"MQ_1668573919955","date_format":false},{"column_name":"CHANNEL_USERID","alias_name":"","mq_id":"MQ_1668573925605","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1668587107858","date_format":false}],"joins":[]},"eq_text":"select  NPSSTRRD_ID,  MSG_ID,  UETR,  PARENT_NPSSTRRD_REFNO,  NPSSTRRD_REFNO,  PROCESS_CODE,  PROCESS_DETAIL,  EXHF_ID,  PROCESS_NAME,  MESSAGE_DESC,  CHANNEL_ID,  CHANNEL_REFNO,  CHANNEL_USERID,  CHANNEL_PRODUCT,  CHANNEL_SUB_PRODUCT,  CHANNEL_TRAN_CODE,  STATUS,  PROCESS_STATUS,PROCESS_TYPE,  MESSAGE_DATA,  CREATEDDATEMILISEC,  DT_CODE,  DTT_CODE from  (  select   NPSSTRRD.NPSSTRRD_ID,   NPSSTRRD.MSG_ID,   NPSSTRRD.UETR,   NPSSTRRD.PARENT_NPSSTRRD_REFNO,   NPSSTRRD.NPSSTRRD_REFNO,   NPSSTRRD.MESSAGE_DATA,   NPSSTRRD.PROCESS_CODE,   NPSSTRRD.PROCESS_DETAIL,   NPSSTRRD.EXHF_ID,   NPSSTRRD.PROCESS_NAME,   NPSSTRRD.MESSAGE_DESC,   NPSSTRRD.CHANNEL_ID,   NPSSTRRD.CHANNEL_REFNO,   NPSSTRRD.CHANNEL_USERID,   NPSSTRRD.CHANNEL_PRODUCT,   NPSSTRRD.CHANNEL_SUB_PRODUCT,   NPSSTRRD.CHANNEL_TRAN_CODE,   NPSSTRRD.CREATED_BY,   NPSSTRRD.CREATED_BY_NAME,   NPSSTRRD.CREATED_DATE,   NPSSTRRD.DT_CODE,   NPSSTRRD.DT_DESCRIPTION,   NPSSTRRD.DTT_CODE,   NPSSTRRD.DTT_DESCRIPTION,   NPSSTRRD.MODIFIED_BY,   NPSSTRRD.MODIFIED_BY_NAME,   NPSSTRRD.MODIFIED_DATE,   NPSSTRRD.STATUS,   NPSSTRRD.PROCESS_STATUS,NT.PROCESS_TYPE,   NPSSTRRD.SYSTEM_ID,   NPSSTRRD.SYSTEM_NAME,   NPSSTRRD.TENANT_ID,   NPSSTRRD.APP_ID,   NPSSTRRD.VERSION_NO,   TO_CHAR(NPSSTRRD.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC  from   <TRAN_DB>.NPSS_TRN_REQ_RESP_DTLS NPSSTRRD  inner join <TRAN_DB>.NPSS_TRANSACTIONS NT on   NPSSTRRD.UETR = NT.UETR) RR $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS REQ RES CCD","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Created Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Desc","target_column":"MESSAGE_DESC","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"UETR","target_column":"UETR","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Detail","target_column":"PROCESS_DETAIL","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1669369998718"
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action back"
	message_detail_action_back__sp_for_mda() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669370073664"
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

	//Handler for ACTION_BUTTON_CLICK event of "single back ui back"
	single_back_ui_back__sp_for_reqres() { 
		let Dest_Is_ctrl=true
		
		let source_id="single_back_ui_back"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669370137998"
		let event_params={"caller_name":"single_back_ui_back__sp_for_reqres","event_desc":"SP for REQ,RES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"single_back_ui_back","raiseparam":{"profile_code":"BTL_1304_1669368765629"}}
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
	navigation_ui_view_process_log__sp_for_vlh() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_view_process_log"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669370653200"
		let event_params={"caller_name":"navigation_ui_view_process_log__sp_for_vlh","event_desc":"SP for VLH","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{"profile_code":"BTL_1304_1669368765629"}}
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
		let event_code="e_1669370718785"
		let event_params={"caller_name":"navigation_ui_view_process_log__brfq_for_hdl","event_desc":"BRFQ for HDL","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N"}}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_hdl__sfr_for_history_detail,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_17","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671191081541","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <TRAN_DB>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
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
		let event_code="e_1669370750017"
		let event_params={"caller_name":"brfq_for_hdl__sfr_for_history_detail","event_desc":"SFR for History Detail","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_view_process_log","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665905039255":{"st_ds":{"default":{"uicgc_code":"UICGC_17","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665905039255","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671191081541","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS HST Process Log MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"NPSSTPL_ID","alias_name":"","mq_id":"MQ_1666177568065","date_format":false},{"column_name":"MSG_ID","alias_name":"","mq_id":"MQ_1666177568243","date_format":false},{"column_name":"UETR","alias_name":"","mq_id":"MQ_1666177568420","date_format":false},{"column_name":"NPSSTRRD_REFNO","alias_name":"","mq_id":"MQ_1666177568588","date_format":false},{"column_name":"PROCESS_NAME","alias_name":"","mq_id":"MQ_1666177568740","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1666177568908","date_format":false},{"column_name":"RESPONSE_CODE","alias_name":"","mq_id":"MQ_1666177569084","date_format":false},{"column_name":"PROCESS_REF_NO","alias_name":"","mq_id":"MQ_1666177779261","date_format":false},{"column_name":"RESPONSE_DATA","alias_name":"","mq_id":"MQ_1666177779430","date_format":false},{"column_name":"CREATED_DATE","alias_name":"","mq_id":"MQ_1666177779582","date_format":true},{"column_name":"RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666177862396","date_format":false},{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1666177862551","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1666177873590","date_format":false},{"column_name":"CREATEDDATEMILISEC","alias_name":"","mq_id":"MQ_1666329436524","date_format":true},{"column_name":"T24_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809408","date_format":false},{"column_name":"CBUAE_RETURN_CODE","alias_name":"","mq_id":"MQ_1666781809610","date_format":false},{"column_name":"REVERSAL_CODE","alias_name":"","mq_id":"MQ_1666781809810","date_format":false},{"column_name":"REVERSAL_DESC","alias_name":"","mq_id":"MQ_1666865255337","date_format":false},{"column_name":"T24_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255505","date_format":false},{"column_name":"CBUAE_RETURN_DESC","alias_name":"","mq_id":"MQ_1666865255657","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936092675","date_format":false},{"column_name":"T24_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093146","date_format":false},{"column_name":"CBUAE_RETURN_DESCRIPTION","alias_name":"","mq_id":"MQ_1666936093458","date_format":false},{"column_name":"TENANT_ID","alias_name":"","mq_id":"MQ_1667544156161","date_format":false}],"joins":[]},"eq_text":"select  REVERSAL_DESCRIPTION,  T24_RETURN_DESCRIPTION,  CBUAE_RETURN_DESCRIPTION,  NPSSTPL_ID,  MSG_ID,  UETR,  NPSSTRRD_REFNO,  PROCESS_NAME,  PROCESSING_SYSTEM,  RESPONSE_CODE,  PROCESS_REF_NO,  RESPONSE_DATA,  CREATED_DATE,  CREATEDDATEMILISEC,  PROCESS_STATUS,  STATUS,  REQUEST_DATA_JSON,  RESPONSE_DATA_JSON,  T24_RETURN_CODE,  CBUAE_RETURN_CODE,  REVERSAL_CODE,  REVERSAL_DESC,  T24_RETURN_DESC,  CBUAE_RETURN_DESC,  TENANT_ID,  DEPARTMENT_CODE,  DT_CODE,  DTT_CODE,  PROCESS_TYPE,  AMOUNT_CREDITED,  AMT_CR_LOC_CUR,  CHARGE_AMOUNT,  BUY_CURRENCY,  SELL_CURRENCY,  DEALT_AMOUNT,  EXCHANGE_RATE,  CONTRA_AMOUNT from  (  select   A.NPSSTPL_ID,   A.MSG_ID,   A.UETR,   NT.PROCESS_TYPE,   A.NPSSTRRD_REFNO,   A.PROCESS_NAME,   A.PROCESSING_SYSTEM,   A.RESPONSE_CODE,   A.PROCESS_REF_NO,   A.RESPONSE_DATA,   TO_CHAR(A.CREATED_DATE, 'YYYY-MM-DD HH:MI:SS:MS AM') as CREATEDDATEMILISEC,   A.CREATED_DATE,   A.PROCESS_STATUS,   A.STATUS,   A.DT_CODE,   A.DTT_CODE,   A.TENANT_ID,   A.REQUEST_DATA_JSON,   A.RESPONSE_DATA_JSON,   A.T24_RETURN_CODE,   NT.DEPARTMENT_CODE,   NT.NPSST_ID,   A.ADDITIONAL_INFO,   A.AMOUNT_CREDITED,   A.AMT_CR_LOC_CUR,   A.CHARGE_AMOUNT,   A.BUY_CURRENCY,   A.SELL_CURRENCY,   A.DEALT_AMOUNT,   A.EXCHANGE_RATE,   A.CONTRA_AMOUNT,   T24RC.ERROR_DESCRIPTION as T24_RETURN_DESC,   CONCAT(A.T24_RETURN_CODE, '-', T24RC.ERROR_DESCRIPTION) as T24_RETURN_DESCRIPTION,   A.CBUAE_RETURN_CODE,   CBUAERC.RETURN_DESCRIPTION as CBUAE_RETURN_DESC,   CONCAT(A.CBUAE_RETURN_CODE, '-', CBUAERC.RETURN_DESCRIPTION) as CBUAE_RETURN_DESCRIPTION,   A.REVERSAL_CODE,   CCD.CD_DESCRIPTION as REVERSAL_DESC,   CONCAT(A.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION  from   <TRAN_DB>.NPSS_TRN_PROCESS_LOG A  left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = A.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y'  left join CORE_NC_ERROR_CODES T24RC on   T24RC.ERROR_CODE = A.T24_RETURN_CODE   and T24RC.PROCESSING_SYSTEM = 'T24'   and T24RC.NEED_SYNC = 'Y'  left join CORE_NC_RETURN_CODES CBUAERC on   CBUAERC.RETURN_CODE = A.CBUAE_RETURN_CODE   and CBUAERC.PROCESSING_SYSTEM = 'CBUAE'   and CBUAERC.NEED_SYNC = 'Y'  left join <TRAN_DB>.NPSS_TRANSACTIONS NT on   NT.UETR = A.UETR  order by   A.NPSSTPL_ID) V $WHERE"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS Hst Process Log","filter":[{"filter_name":"PROCESS_TYPE","binding_name":"PROCESS_TYPE","binding_value":"","source_name":"OP","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"UETR","binding_name":"UETR","binding_value":"","source_name":"MI_LEVEL_UETR","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Transaction Date & Time","target_column":"CREATEDDATEMILISEC","alias_name":"","alignment":"Left","width":"","format":"","date_format":true},{"header":"Process Name","target_column":"PROCESS_NAME","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBS Return Code","target_column":"T24_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"CBUAE Return Description","target_column":"CBUAE_RETURN_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"REVERSAL_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Message Id","target_column":"MSG_ID","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
		let event_code="e_1669371047836"
		let event_params={"caller_name":"process_log_ui_view_response__sp_for_response_btn","event_desc":"SP for Response btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_response","raiseparam":{"profile_code":"BTL_1304_1669368715639"}}
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
		let event_code="e_1669371199695"
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view request"
	process_log_ui_view_request__sp_for_view_request_btn() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_request"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669371058834"
		let event_params={"caller_name":"process_log_ui_view_request__sp_for_view_request_btn","event_desc":"SP for view Request btn","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_request","raiseparam":{"profile_code":"BTL_1304_1669368553036"}}
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
		let event_code="e_1669371220910"
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

	//Handler for ACTION_BUTTON_CLICK event of "message detail action view message"
	message_detail_action_view_message__sp_for_view_message_data() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1669371398235"
		let event_params={"caller_name":"message_detail_action_view_message__sp_for_view_message_data","event_desc":"SP for view message DATA","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"profile_code":"BTL_1304_1669368410590"}}
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
	message_detail_action_view_message__bt_for_mgsg() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail_action_view_message"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1669371538474"
		let event_params={"caller_name":"message_detail_action_view_message__bt_for_mgsg","event_desc":"BT for MGSG","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"message_detail_action_view_message","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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

	//Handler for SELECTION_CHANGED event of "message detail"
	message_detail__ee_from_message_detail_to_show_message() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail_action_view_message"
		let parent_source_id=""
		let event_code="e_1669371471659"
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
	message_detail__ssr_for_mgsgs() { 
		let Dest_Is_ctrl=true
		
		let source_id="message_detail"
		let destn_id="message_detail_ui"
		let parent_source_id=""
		let event_code="e_1669371518812"
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

	//Handler for ACTION_BUTTON_CLICK event of "process log ui view req and res"
	process_log_ui_view_req_and_res__sp_for_vreq_and_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1670245068148"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__sp_for_vreq_and_vres","event_desc":"SP for VREQ and VRES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"profile_code":"BTL_1304_1670244943676"}}
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
	process_log_ui_view_req_and_res__bt_vreq() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="request_ui"
		let parent_source_id=""
		let event_code="e_1670245107113"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_vreq","event_desc":"BT VREQ","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
	process_log_ui_view_req_and_res__bt_vres() { 
		let Dest_Is_ctrl=true
		
		let source_id="process_log_ui_view_req_and_res"
		let destn_id="response_ui"
		let parent_source_id=""
		let event_code="e_1670245136335"
		let event_params={"caller_name":"process_log_ui_view_req_and_res__bt_vres","event_desc":"BT VRES","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"process_log_ui_view_req_and_res","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
	navigation_ui_initiate__sp_for_initate() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_initiate"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671186290676"
		let event_params={"caller_name":"navigation_ui_initiate__sp_for_initate","event_desc":"SP for INITATE","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{"popup_category":"profile","variable":"p_initate_layout__sp_for_initate","selector":"p_initate_layout","profile_code":"BTL_1304_1671186172155","window_title":"Initiate","window_height":400,"window_width":"550px","window_close_icon":"Y","eventdes":"sp_for_initate","eventcode":"E_1671186290676"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui initiate"
	navigation_ui_initiate__bt_for_initate() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_initiate"
		let destn_id="initate_ui"
		let parent_source_id=""
		let event_code="e_1671189181981"
		let event_params={"caller_name":"navigation_ui_initiate__bt_for_initate","event_desc":"BT for initate","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{"prevent_default_event":"N","need_blockchain_storage":"N","dt_code":"","dtt_code":"","key_column":"","key_value_level":"","key_value":""}}
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
	navigation_ui_initiate__de_for_initate__initate_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_initiate"
		let destn_id="npss_op_reversal_ui_intrbk_sttlm_amnt"
		let parent_source_id=""
		let event_code="e_1671196363242"
		let event_params={"destn_comp_id":"initate_ui","destn_ctrl_id":"intrbk_sttlm_amnt","caller_name":"navigation_ui_initiate__de_for_initate__initate_ui","event_desc":"DE for initate","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{}}
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
	navigation_ui_initiate__e_1700737221672__initate_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_initiate"
		let destn_id="npss_op_reversal_ui_remarks"
		let parent_source_id=""
		let event_code="e_1700737221672"
		let event_params={"destn_comp_id":"initate_ui","destn_ctrl_id":"remarks","caller_name":"navigation_ui_initiate__e_1700737221672__initate_ui","event_desc":"E_1700737221672","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_initiate","raiseparam":{"visible_collapse_count":"","visible_collapse_locked_by":""}}
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

	//Handler for ACTION_BUTTON_CLICK event of "initate ui forward to checker"
	initate_ui_forward_to_checker__e_1680525493336() { 
		let Dest_Is_ctrl=true
		
		let source_id="initate_ui_forward_to_checker"
		let destn_id="initate_ui"
		let parent_source_id=""
		let event_code="e_1680525493336"
		let event_params={"caller_name":"initate_ui_forward_to_checker__e_1680525493336","event_desc":"E_1680525493336","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"initate_ui_forward_to_checker","raiseparam":{}}
		let handler_code="validate_elements"
		let internals="e_1680525493336__cc_for_initate_ide,"
		let event_data={}
		let data_source={}
		try {
			this.handler.validate_elements(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "e 1680525493336"
	e_1680525493336__cc_for_initate_ide(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="e_1680525493336"
		let destn_id=""
		let parent_source_id="initate_ui_forward_to_checker"
		let event_code="e_1680525511525"
		let event_params={"caller_name":"e_1680525493336__cc_for_initate_ide","event_desc":"CC for initate ide","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"initate_ui_forward_to_checker","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="custom_connectors"
		let internals="cc_for_initate_ide__info_for_initate,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_reversal_initiateService.fn_npss_cs_reversal_initiate(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for initate ide"
	cc_for_initate_ide__info_for_initate(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_initate_ide"
		let destn_id=""
		let parent_source_id="e_1680525493336"
		let event_code="e_1680525574779"
		let event_params={"caller_name":"cc_for_initate_ide__info_for_initate","event_desc":"info for initate","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Reversal Request has been initiated successfully","root_source_id":"initate_ui_forward_to_checker","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_for_initate__rs_for_initate,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for initate"
	info_for_initate__rs_for_initate(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_for_initate"
		let destn_id=""
		let parent_source_id="cc_for_initate_ide"
		let event_code="e_1680525637920"
		let event_params={"caller_name":"info_for_initate__rs_for_initate","event_desc":"RS for Initate","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"initate_ui_forward_to_checker","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui approve"
	navigation_ui_approve__cc_for_approve_ide() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_approve"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1671189263416"
		let event_params={"caller_name":"navigation_ui_approve__cc_for_approve_ide","event_desc":"CC for approve ide","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_approve","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_approve_ide__info_for_approve_ide,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_rct_rev_approveService.fn_npss_cs_rct_rev_approve(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for approve ide"
	cc_for_approve_ide__info_for_approve_ide(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_approve_ide"
		let destn_id=""
		let parent_source_id="navigation_ui_approve"
		let event_code="e_1671189287267"
		let event_params={"caller_name":"cc_for_approve_ide__info_for_approve_ide","event_desc":"info for approve ide","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Reversal Request has been approved successfully","root_source_id":"navigation_ui_approve","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="info_for_approve_ide__rs_for_approve_ide,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "info for approve ide"
	info_for_approve_ide__rs_for_approve_ide(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="info_for_approve_ide"
		let destn_id=""
		let parent_source_id="cc_for_approve_ide"
		let event_code="e_1671189309426"
		let event_params={"caller_name":"info_for_approve_ide__rs_for_approve_ide","event_desc":"RS for approve ide","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_approve","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui send to maker"
	navigation_ui_send_to_maker__stm_popup() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_send_to_maker"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672307400251"
		let event_params={"caller_name":"navigation_ui_send_to_maker__stm_popup","event_desc":"STM Popup","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_send_to_maker","raiseparam":{"popup_category":"profile","variable":"p_send_to_maker_layout__stm_popup","selector":"p_send_to_maker_layout","profile_code":"BTL_1304_1672307215426","window_title":"","window_height":200,"window_width":"600px","window_close_icon":"Y","eventdes":"stm_popup","eventcode":"E_1672307400251"}}
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

	//Handler for ACTION_BUTTON_CLICK event of "send to maker ui save"
	send_to_maker_ui_save__cc_for_send_to_maker_save() { 
		let Dest_Is_ctrl=true
		
		let source_id="send_to_maker_ui_save"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1672307517079"
		let event_params={"caller_name":"send_to_maker_ui_save__cc_for_send_to_maker_save","event_desc":"CC for Send to maker save","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"send_to_maker_ui_save","raiseparam":{}}
		let handler_code="custom_connectors"
		let internals="cc_for_send_to_maker_save__im_for_send_to_maker_save,"
		let event_data={}
		let data_source={}
		try {
			this.npss_cs_reversal_send_to_makerService.fn_npss_cs_reversal_send_to_maker(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "cc for send to maker save"
	cc_for_send_to_maker_save__im_for_send_to_maker_save(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="cc_for_send_to_maker_save"
		let destn_id=""
		let parent_source_id="send_to_maker_ui_save"
		let event_code="e_1672307556237"
		let event_params={"caller_name":"cc_for_send_to_maker_save__im_for_send_to_maker_save","event_desc":"IM for Send to maker save","event_type":"INTERNAL","caller_event_context":"SUCCESS","message_text":"Reversal request has been sent to maker successfully","root_source_id":"send_to_maker_ui_save","raiseparam":{"info_msg":""},"parent_event_result":"SUCCESS"}
		let handler_code="info_msg"
		let internals="im_for_send_to_maker_save__rs_for_send_to_maker_save,"
		let event_data={}
		let data_source={}
		try {
			this.handler.info_msg(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "im for send to maker save"
	im_for_send_to_maker_save__rs_for_send_to_maker_save(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="im_for_send_to_maker_save"
		let destn_id=""
		let parent_source_id="cc_for_send_to_maker_save"
		let event_code="e_1672307575321"
		let event_params={"caller_name":"im_for_send_to_maker_save__rs_for_send_to_maker_save","event_desc":"RS for send to maker save","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"send_to_maker_ui_save","raiseparam":{},"parent_event_result":"SUCCESS"}
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

	//Handler for SELECTION_CHANGED event of "reversal details"
	reversal_details__svm_for_reversal_code() { 
		let Dest_Is_ctrl=true
		
		let source_id="reversal_details"
		let destn_id="reversal_details"
		let parent_source_id=""
		let event_code="e_1677943089962"
		let event_params={"caller_name":"reversal_details__svm_for_reversal_code","event_desc":"SVM for Reversal Code","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"reversal_details","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"reversal_details":{"e_1677943089962":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGC_22","event_code":"E_1677943089962","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"REVERSAL_CODE","level":"MI_LEVEL","name":"MI_LEVEL_REVERSAL_CODE","setd3name":"REVERSAL_CODE"}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_22","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1677756429103","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal  Reversal code MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"reversal_code","alias_name":"","mq_id":"MQ_1677755761450","date_format":false},{"column_name":"REVERSAL_DESCRIPTION","alias_name":"","mq_id":"MQ_1677755761593","date_format":false},{"column_name":"CD_DESCRIPTION","alias_name":"","mq_id":"MQ_1677841302739","date_format":false}],"joins":[]},"eq_text":"select  uetr,  npsst_id,  NPSSTPL_ID,  dtt_code,  dt_code,  reversal_code,  STATUS,  process_status,  REVERSAL_DESCRIPTION,  CD_DESCRIPTION from  (  select   ntpl.uetr,   ntpl.NPSSTPL_ID,   nt.npsst_id,   nt.dtt_code,   nt.dt_code,   reversal_code,   ntpl.STATUS,   ntpl.process_status,   CONCAT(NTPL.REVERSAL_CODE, '-', CCD.CD_DESCRIPTION) as REVERSAL_DESCRIPTION,   CD_DESCRIPTION  from   npss_trn_process_log ntpl  inner join npss_transactions nt on   NTPL.UETR = nt.UETR   left join CORE_NC_CODE_DESCRIPTIONS CCD on   CCD.CD_CODE = NTPL.REVERSAL_CODE   and CCD.CD_CATEGORY = 'REVERSAL_REASON_IDENTIFIER_CODE'   and CCD.NEED_SYNC = 'Y')V $WHERE order by NPSSTPL_ID desc limit 1"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal  Code Desc CCD","filter":[{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"MI_LEVEL_STATUS","source_value":"","source_type":"MI_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""}],"databinding":[{"header":"Reversal Code","target_column":"reversal_code","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Reversal Description","target_column":"CD_DESCRIPTION","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui checker on load trg"
	navigation_ui_checker_on_load_trg__sec_for_checker_on_loaf_trg() { 
		let Dest_Is_ctrl=true
		
		let source_id="navigation_ui_checker_on_load_trg"
		let destn_id=""
		let parent_source_id=""
		let event_code="e_1680264329401"
		let event_params={"caller_name":"navigation_ui_checker_on_load_trg__sec_for_checker_on_loaf_trg","event_desc":"SEC for Checker ON Loaf Trg","event_type":"ACTION_BUTTON_CLICK","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_checker_on_load_trg","raiseparam":{}}
		let handler_code="set_event_context"
		let internals=""
		let event_data={"navigation_ui_checker_on_load_trg":{"e_1680264329401":{"dts":{"dt_1304_1665901130705":{"dtts":{"":{"uicgc_code":"UICGCC_43","event_code":"E_1680264329401","dt_code":"DT_1304_1665901130705","dtt_code":"","dt_desc":"NPSS EDGE Transactions Group","dtt_desc":"NPSS Trn Process Log","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[],"get_from_memory":[],"set_event_context":"Y","sec_value":{"type":"SESSION_LEVEL","value":"APP_USER_ROLES"}}}}}}}}}
		let data_source={}
		try {
			return this.handler.set_event_context(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui checker on load trg"
	navigation_ui_checker_on_load_trg__brfq_for_checker_queue(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["708"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="navigation_ui_checker_on_load_trg"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1680263966263"
		let event_params={"caller_name":"navigation_ui_checker_on_load_trg__brfq_for_checker_queue","event_desc":"BRFQ for Checker Queue","event_type":"ACTION_BUTTON_CLICK","caller_event_context":708,"root_source_id":"navigation_ui_checker_on_load_trg","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"eventcontext":["708"]}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_checker_queue__sfr_for_checker_on_load_trg_queue,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671187481122","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671186151268","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671186151686","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348524994","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   distinct UETR,   NPSSTRRD_REFNO,   PROCESS_TYPE,   CREATED_DATE,   STATUS,   PROCESS_STATUS,   PROCESS_REF_NO,   PROCESSING_SYSTEM,   TENANT_ID,   MODIFIED_DATE,   MODIFIED_DATE_UTC,   TS_ID,   LOCKED_BY,   LOCKED_BY_NAME,   CREATED_BY,   CREATED_BY_NAME,   SYSTEM_ID,   ROLE_ID,   QR_APP_ID,   VPH_APP_CODE,   QR_QUEUE_CODE,   QR_SCREEN_NAME,   QR_MENU_GROUP,   QR_MODULE,   QUEUE_DESC,   QUEUE_CODE,   Q_APP_ID,   QS_SORT_ORDER,   Q_SORT_ORDER,   DEPARTMENT_CODE,   PROCESS_GROUP,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   TRAN_REF_ID,   CHANNEL_REFNO,   CLRSYSREF,   PAYMENT_ENDTOEND_ID,   INTRBK_STTLM_AMNT,   REVERSAL_AMOUNT,   CR_ACCT_IDENTIFICATION,   DBTR_IBAN  from   (   select    NTPL.UETR,    NT.PROCESS_TYPE,    NT.CREATED_DATE,    NT.STATUS,    NT.PROCESS_STATUS,    NT.PROCESSING_SYSTEM,    NT.TENANT_ID,    NT.MODIFIED_DATE,    NT.MODIFIED_DATE_UTC,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    NT.CREATED_BY,    NT.CREATED_BY_NAME,    NT.SYSTEM_ID,    QR.ROLE_ID,    QR.VPH_APP_ID as QR_APP_ID,    QR.VPH_APP_CODE,    QR.QUEUE_CODE as QR_QUEUE_CODE,    QR.SCREEN_NAME as QR_SCREEN_NAME,    QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,    QR.SCREEN_MODULE as QR_MODULE,    PQ.QUEUE_DESC,    PQ.QUEUE_CODE,    PQ.VPH_APP_ID as Q_APP_ID,    QR.SORT_ORDER as QS_SORT_ORDER,    PQ.SORT_ORDER as Q_SORT_ORDER,    NT.DEPARTMENT_CODE,    NT.PROCESS_GROUP,    NT.VALUE_DATE,    NT.DBTR_ACCT_NO,    NT.CDTR_ACCT_NO,    NT.CDTR_IBAN,    NT.TRAN_REF_ID,    NT.CHANNEL_REFNO,    NT.CLRSYSREF,    NT.PAYMENT_ENDTOEND_ID,    NT.INTRBK_STTLM_AMNT,    NT.REVERSAL_AMOUNT,    NT.CR_ACCT_IDENTIFICATION,    NTPL.REVERSAL_CODE,    NTPL.NPSSTPL_ID,    NTPL.ADDITIONAL_INFO,    ntpl1. PROCESS_REF_NO,    NTPL.NPSSTRRD_REFNO,    NT.DBTR_IBAN   from    NPSS_TRANSACTIONS NT   inner join NPSS_TRN_PROCESS_LOG NTPL on    NTPL.UETR = NT.UETR   left join npss_trn_process_log ntpl1 on    ntpl1.uetr = nt.uetr    and NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on    NT.NPSST_ID = TS.TRN_ID    and NT.DTT_CODE = TS.DTT_CODE   inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on    NT.STATUS = QR.PROCESS_QUEUE_STATUS    and NT.PROCESS_STATUS = QR.QUEUE_CODE   inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on    NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW  where   PROCESS_TYPE = 'OP' $AND )V1 order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Queue CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for ACTION_BUTTON_CLICK event of "navigation ui checker on load trg"
	navigation_ui_checker_on_load_trg__brfq_for_maker(peventcontext) { 
		let Dest_Is_ctrl=true
		let eventcontext =["705"]
		if(eventcontext.indexOf(peventcontext)==-1) return true;
		let source_id="navigation_ui_checker_on_load_trg"
		let destn_id="queue"
		let parent_source_id=""
		let event_code="e_1680525770431"
		let event_params={"caller_name":"navigation_ui_checker_on_load_trg__brfq_for_maker","event_desc":"BRFQ for maker","event_type":"ACTION_BUTTON_CLICK","caller_event_context":705,"root_source_id":"navigation_ui_checker_on_load_trg","raiseparam":{"solr_search_name":null,"need_key_column":"N","chart_type":"","chart_label":"","chart_series":"","chart_data":"","avoid_parent_search_param":"N","avoid_key_column_filter":"N"},"eventcontext":["705"]}
		let handler_code="bind_record_from_query"
		let internals="brfq_for_maker__sfr_for_maker_on_load_trg_queue,"
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671187481122","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671186151268","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671186151686","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348524994","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   distinct UETR,   NPSSTRRD_REFNO,   PROCESS_TYPE,   CREATED_DATE,   STATUS,   PROCESS_STATUS,   PROCESS_REF_NO,   PROCESSING_SYSTEM,   TENANT_ID,   MODIFIED_DATE,   MODIFIED_DATE_UTC,   TS_ID,   LOCKED_BY,   LOCKED_BY_NAME,   CREATED_BY,   CREATED_BY_NAME,   SYSTEM_ID,   ROLE_ID,   QR_APP_ID,   VPH_APP_CODE,   QR_QUEUE_CODE,   QR_SCREEN_NAME,   QR_MENU_GROUP,   QR_MODULE,   QUEUE_DESC,   QUEUE_CODE,   Q_APP_ID,   QS_SORT_ORDER,   Q_SORT_ORDER,   DEPARTMENT_CODE,   PROCESS_GROUP,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   TRAN_REF_ID,   CHANNEL_REFNO,   CLRSYSREF,   PAYMENT_ENDTOEND_ID,   INTRBK_STTLM_AMNT,   REVERSAL_AMOUNT,   CR_ACCT_IDENTIFICATION,   DBTR_IBAN  from   (   select    NTPL.UETR,    NT.PROCESS_TYPE,    NT.CREATED_DATE,    NT.STATUS,    NT.PROCESS_STATUS,    NT.PROCESSING_SYSTEM,    NT.TENANT_ID,    NT.MODIFIED_DATE,    NT.MODIFIED_DATE_UTC,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    NT.CREATED_BY,    NT.CREATED_BY_NAME,    NT.SYSTEM_ID,    QR.ROLE_ID,    QR.VPH_APP_ID as QR_APP_ID,    QR.VPH_APP_CODE,    QR.QUEUE_CODE as QR_QUEUE_CODE,    QR.SCREEN_NAME as QR_SCREEN_NAME,    QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,    QR.SCREEN_MODULE as QR_MODULE,    PQ.QUEUE_DESC,    PQ.QUEUE_CODE,    PQ.VPH_APP_ID as Q_APP_ID,    QR.SORT_ORDER as QS_SORT_ORDER,    PQ.SORT_ORDER as Q_SORT_ORDER,    NT.DEPARTMENT_CODE,    NT.PROCESS_GROUP,    NT.VALUE_DATE,    NT.DBTR_ACCT_NO,    NT.CDTR_ACCT_NO,    NT.CDTR_IBAN,    NT.TRAN_REF_ID,    NT.CHANNEL_REFNO,    NT.CLRSYSREF,    NT.PAYMENT_ENDTOEND_ID,    NT.INTRBK_STTLM_AMNT,    NT.REVERSAL_AMOUNT,    NT.CR_ACCT_IDENTIFICATION,    NTPL.REVERSAL_CODE,    NTPL.NPSSTPL_ID,    NTPL.ADDITIONAL_INFO,    ntpl1. PROCESS_REF_NO,    NTPL.NPSSTRRD_REFNO,    NT.DBTR_IBAN   from    NPSS_TRANSACTIONS NT   inner join NPSS_TRN_PROCESS_LOG NTPL on    NTPL.UETR = NT.UETR   left join npss_trn_process_log ntpl1 on    ntpl1.uetr = nt.uetr    and NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on    NT.NPSST_ID = TS.TRN_ID    and NT.DTT_CODE = TS.DTT_CODE   inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on    NT.STATUS = QR.PROCESS_QUEUE_STATUS    and NT.PROCESS_STATUS = QR.QUEUE_CODE   inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on    NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW  where   PROCESS_TYPE = 'OP' $AND )V1 order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Queue CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}},"e_1680525770431":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"E_1680525770431","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1680525952924","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671186151268","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671186151686","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348524994","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   distinct UETR,   NPSSTRRD_REFNO,   PROCESS_TYPE,   CREATED_DATE,   STATUS,   PROCESS_STATUS,   PROCESS_REF_NO,   PROCESSING_SYSTEM,   TENANT_ID,   MODIFIED_DATE,   MODIFIED_DATE_UTC,   TS_ID,   LOCKED_BY,   LOCKED_BY_NAME,   CREATED_BY,   CREATED_BY_NAME,   SYSTEM_ID,   ROLE_ID,   QR_APP_ID,   VPH_APP_CODE,   QR_QUEUE_CODE,   QR_SCREEN_NAME,   QR_MENU_GROUP,   QR_MODULE,   QUEUE_DESC,   QUEUE_CODE,   Q_APP_ID,   QS_SORT_ORDER,   Q_SORT_ORDER,   DEPARTMENT_CODE,   PROCESS_GROUP,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   TRAN_REF_ID,   CHANNEL_REFNO,   CLRSYSREF,   PAYMENT_ENDTOEND_ID,   INTRBK_STTLM_AMNT,   REVERSAL_AMOUNT,   CR_ACCT_IDENTIFICATION,   DBTR_IBAN  from   (   select    NTPL.UETR,    NT.PROCESS_TYPE,    NT.CREATED_DATE,    NT.STATUS,    NT.PROCESS_STATUS,    NT.PROCESSING_SYSTEM,    NT.TENANT_ID,    NT.MODIFIED_DATE,    NT.MODIFIED_DATE_UTC,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    NT.CREATED_BY,    NT.CREATED_BY_NAME,    NT.SYSTEM_ID,    QR.ROLE_ID,    QR.VPH_APP_ID as QR_APP_ID,    QR.VPH_APP_CODE,    QR.QUEUE_CODE as QR_QUEUE_CODE,    QR.SCREEN_NAME as QR_SCREEN_NAME,    QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,    QR.SCREEN_MODULE as QR_MODULE,    PQ.QUEUE_DESC,    PQ.QUEUE_CODE,    PQ.VPH_APP_ID as Q_APP_ID,    QR.SORT_ORDER as QS_SORT_ORDER,    PQ.SORT_ORDER as Q_SORT_ORDER,    NT.DEPARTMENT_CODE,    NT.PROCESS_GROUP,    NT.VALUE_DATE,    NT.DBTR_ACCT_NO,    NT.CDTR_ACCT_NO,    NT.CDTR_IBAN,    NT.TRAN_REF_ID,    NT.CHANNEL_REFNO,    NT.CLRSYSREF,    NT.PAYMENT_ENDTOEND_ID,    NT.INTRBK_STTLM_AMNT,    NT.REVERSAL_AMOUNT,    NT.CR_ACCT_IDENTIFICATION,    NTPL.REVERSAL_CODE,    NTPL.NPSSTPL_ID,    NTPL.ADDITIONAL_INFO,    ntpl1. PROCESS_REF_NO,    NTPL.NPSSTRRD_REFNO,    NT.DBTR_IBAN   from    NPSS_TRANSACTIONS NT   inner join NPSS_TRN_PROCESS_LOG NTPL on    NTPL.UETR = NT.UETR   left join npss_trn_process_log ntpl1 on    ntpl1.uetr = nt.uetr    and NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on    NT.NPSST_ID = TS.TRN_ID    and NT.DTT_CODE = TS.DTT_CODE   inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on    NT.STATUS = QR.PROCESS_QUEUE_STATUS    and NT.PROCESS_STATUS = QR.QUEUE_CODE   inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on    NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW  where   PROCESS_TYPE = 'OP' $AND )V1 order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Queue CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"STATUS","binding_name":"STATUS","binding_value":"","source_name":"OP_REVERSAL_REQ_REPAIR","source_value":"","source_type":"HARDCODED","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.bind_record_from_query(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for checker queue"
	brfq_for_checker_queue__sfr_for_checker_on_load_trg_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_checker_queue"
		let destn_id="queue"
		let parent_source_id="navigation_ui_checker_on_load_trg"
		let event_code="e_1680529862770"
		let event_params={"caller_name":"brfq_for_checker_queue__sfr_for_checker_on_load_trg_queue","event_desc":"SFR for Checker on load trg queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_checker_on_load_trg","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671187481122","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671186151268","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671186151686","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348524994","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   distinct UETR,   NPSSTRRD_REFNO,   PROCESS_TYPE,   CREATED_DATE,   STATUS,   PROCESS_STATUS,   PROCESS_REF_NO,   PROCESSING_SYSTEM,   TENANT_ID,   MODIFIED_DATE,   MODIFIED_DATE_UTC,   TS_ID,   LOCKED_BY,   LOCKED_BY_NAME,   CREATED_BY,   CREATED_BY_NAME,   SYSTEM_ID,   ROLE_ID,   QR_APP_ID,   VPH_APP_CODE,   QR_QUEUE_CODE,   QR_SCREEN_NAME,   QR_MENU_GROUP,   QR_MODULE,   QUEUE_DESC,   QUEUE_CODE,   Q_APP_ID,   QS_SORT_ORDER,   Q_SORT_ORDER,   DEPARTMENT_CODE,   PROCESS_GROUP,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   TRAN_REF_ID,   CHANNEL_REFNO,   CLRSYSREF,   PAYMENT_ENDTOEND_ID,   INTRBK_STTLM_AMNT,   REVERSAL_AMOUNT,   CR_ACCT_IDENTIFICATION,   DBTR_IBAN  from   (   select    NTPL.UETR,    NT.PROCESS_TYPE,    NT.CREATED_DATE,    NT.STATUS,    NT.PROCESS_STATUS,    NT.PROCESSING_SYSTEM,    NT.TENANT_ID,    NT.MODIFIED_DATE,    NT.MODIFIED_DATE_UTC,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    NT.CREATED_BY,    NT.CREATED_BY_NAME,    NT.SYSTEM_ID,    QR.ROLE_ID,    QR.VPH_APP_ID as QR_APP_ID,    QR.VPH_APP_CODE,    QR.QUEUE_CODE as QR_QUEUE_CODE,    QR.SCREEN_NAME as QR_SCREEN_NAME,    QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,    QR.SCREEN_MODULE as QR_MODULE,    PQ.QUEUE_DESC,    PQ.QUEUE_CODE,    PQ.VPH_APP_ID as Q_APP_ID,    QR.SORT_ORDER as QS_SORT_ORDER,    PQ.SORT_ORDER as Q_SORT_ORDER,    NT.DEPARTMENT_CODE,    NT.PROCESS_GROUP,    NT.VALUE_DATE,    NT.DBTR_ACCT_NO,    NT.CDTR_ACCT_NO,    NT.CDTR_IBAN,    NT.TRAN_REF_ID,    NT.CHANNEL_REFNO,    NT.CLRSYSREF,    NT.PAYMENT_ENDTOEND_ID,    NT.INTRBK_STTLM_AMNT,    NT.REVERSAL_AMOUNT,    NT.CR_ACCT_IDENTIFICATION,    NTPL.REVERSAL_CODE,    NTPL.NPSSTPL_ID,    NTPL.ADDITIONAL_INFO,    ntpl1. PROCESS_REF_NO,    NTPL.NPSSTRRD_REFNO,    NT.DBTR_IBAN   from    NPSS_TRANSACTIONS NT   inner join NPSS_TRN_PROCESS_LOG NTPL on    NTPL.UETR = NT.UETR   left join npss_trn_process_log ntpl1 on    ntpl1.uetr = nt.uetr    and NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on    NT.NPSST_ID = TS.TRN_ID    and NT.DTT_CODE = TS.DTT_CODE   inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on    NT.STATUS = QR.PROCESS_QUEUE_STATUS    and NT.PROCESS_STATUS = QR.QUEUE_CODE   inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on    NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW  where   PROCESS_TYPE = 'OP' $AND )V1 order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Queue CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for INTERNAL event of "brfq for maker"
	brfq_for_maker__sfr_for_maker_on_load_trg_queue(parent_event_result) { 
		let Dest_Is_ctrl=true
		let parentEventResult ="SUCCESS"
	if(parentEventResult!=parent_event_result) return true;
		let source_id="brfq_for_maker"
		let destn_id="queue"
		let parent_source_id="navigation_ui_checker_on_load_trg"
		let event_code="e_1680529869380"
		let event_params={"caller_name":"brfq_for_maker__sfr_for_maker_on_load_trg_queue","event_desc":"SFR for maker on load trg queue","event_type":"INTERNAL","caller_event_context":"SUCCESS","root_source_id":"navigation_ui_checker_on_load_trg","raiseparam":{},"parent_event_result":"SUCCESS"}
		let handler_code="select_first_record"
		let internals=""
		let event_data={}
		let data_source={"default":{"dt_1304_1665901130705":{"dtt_1304_1665901217208":{"st_ds":{"default":{"uicgc_code":"UICGC_1","event_code":"DEFAULT","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Trn Process Log","ds_eligible":"DS_1671187481122","ds_final":"","final_state":"","property_json":{"columns":{}},"system_type":"DEFAULT","eq_info":{"eq_code":"NPSS OP Reversal Queue MQ","eq_type":"S","eq_mode":"M","eq_designer_json":{},"eq_json":{"columns":[{"column_name":"PROCESS_STATUS","alias_name":"","mq_id":"MQ_1671186151268","date_format":false},{"column_name":"STATUS","alias_name":"","mq_id":"MQ_1671186151686","date_format":false},{"column_name":"PROCESSING_SYSTEM","alias_name":"","mq_id":"MQ_1675348524994","date_format":false}],"joins":[]},"eq_text":"select  distinct PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS from  (  select   distinct UETR,   NPSSTRRD_REFNO,   PROCESS_TYPE,   CREATED_DATE,   STATUS,   PROCESS_STATUS,   PROCESS_REF_NO,   PROCESSING_SYSTEM,   TENANT_ID,   MODIFIED_DATE,   MODIFIED_DATE_UTC,   TS_ID,   LOCKED_BY,   LOCKED_BY_NAME,   CREATED_BY,   CREATED_BY_NAME,   SYSTEM_ID,   ROLE_ID,   QR_APP_ID,   VPH_APP_CODE,   QR_QUEUE_CODE,   QR_SCREEN_NAME,   QR_MENU_GROUP,   QR_MODULE,   QUEUE_DESC,   QUEUE_CODE,   Q_APP_ID,   QS_SORT_ORDER,   Q_SORT_ORDER,   DEPARTMENT_CODE,   PROCESS_GROUP,   VALUE_DATE,   DBTR_ACCT_NO,   CDTR_ACCT_NO,   CDTR_IBAN,   TRAN_REF_ID,   CHANNEL_REFNO,   CLRSYSREF,   PAYMENT_ENDTOEND_ID,   INTRBK_STTLM_AMNT,   REVERSAL_AMOUNT,   CR_ACCT_IDENTIFICATION,   DBTR_IBAN  from   (   select    NTPL.UETR,    NT.PROCESS_TYPE,    NT.CREATED_DATE,    NT.STATUS,    NT.PROCESS_STATUS,    NT.PROCESSING_SYSTEM,    NT.TENANT_ID,    NT.MODIFIED_DATE,    NT.MODIFIED_DATE_UTC,    TS.TS_ID,    TS.LOCKED_BY,    TS.LOCKED_BY_NAME,    NT.CREATED_BY,    NT.CREATED_BY_NAME,    NT.SYSTEM_ID,    QR.ROLE_ID,    QR.VPH_APP_ID as QR_APP_ID,    QR.VPH_APP_CODE,    QR.QUEUE_CODE as QR_QUEUE_CODE,    QR.SCREEN_NAME as QR_SCREEN_NAME,    QR.SCREEN_MENU_GROUP as QR_MENU_GROUP,    QR.SCREEN_MODULE as QR_MODULE,    PQ.QUEUE_DESC,    PQ.QUEUE_CODE,    PQ.VPH_APP_ID as Q_APP_ID,    QR.SORT_ORDER as QS_SORT_ORDER,    PQ.SORT_ORDER as Q_SORT_ORDER,    NT.DEPARTMENT_CODE,    NT.PROCESS_GROUP,    NT.VALUE_DATE,    NT.DBTR_ACCT_NO,    NT.CDTR_ACCT_NO,    NT.CDTR_IBAN,    NT.TRAN_REF_ID,    NT.CHANNEL_REFNO,    NT.CLRSYSREF,    NT.PAYMENT_ENDTOEND_ID,    NT.INTRBK_STTLM_AMNT,    NT.REVERSAL_AMOUNT,    NT.CR_ACCT_IDENTIFICATION,    NTPL.REVERSAL_CODE,    NTPL.NPSSTPL_ID,    NTPL.ADDITIONAL_INFO,    ntpl1. PROCESS_REF_NO,    NTPL.NPSSTRRD_REFNO,    NT.DBTR_IBAN   from    NPSS_TRANSACTIONS NT   inner join NPSS_TRN_PROCESS_LOG NTPL on    NTPL.UETR = NT.UETR   left join npss_trn_process_log ntpl1 on    ntpl1.uetr = nt.uetr    and NTPL1.STATUS = 'IP_RCT_POSTING_SUCCESS'    and NTPL1.PROCESS_STATUS = 'RCTCompleted'   inner join TRANSACTION_SET TS on    NT.NPSST_ID = TS.TRN_ID    and NT.DTT_CODE = TS.DTT_CODE   inner join <TRAN_DB>.CORE_Q_STATUS_ROLES QR on    NT.STATUS = QR.PROCESS_QUEUE_STATUS    and NT.PROCESS_STATUS = QR.QUEUE_CODE   inner join <TRAN_DB>.CORE_APP_Q_SETUP PQ on    NT.PROCESS_STATUS = PQ.QUEUE_CODE) VW  where   PROCESS_TYPE = 'OP' $AND )V1 order by  PROCESSING_SYSTEM,  PROCESS_STATUS,  STATUS"},"listing_mode":"","locking_mode":"","locking_parameter":"","ccd_name":"NPSS OP Reversal Queue CCD","filter":[{"filter_name":"CREATED_DATE","binding_name":"CREATED_DATE","binding_value":"","source_name":"MI_LEVEL_CD","source_value":"","source_type":"MI_LEVEL","oprtr":">=","data_type":"DATE","conj_operator":"AND","group_no":""},{"filter_name":"CURRENT_MODULE_NAME","binding_name":"QR_MODULE","binding_value":"","source_name":"CURRENT_MODULE_NAME","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"","group_no":""},{"filter_name":"DEPARTMENT_CODE","binding_name":"DEPARTMENT_CODE","binding_value":"","source_name":"SYSTEM_EXTENDED_INFO.department_code","source_value":"","source_type":"SESSION_LEVEL","oprtr":"IN","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"MENU_GROUP","binding_name":"QR_MENU_GROUP","binding_value":"","source_name":"MENU_GROUP","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"Q_APP_ID","binding_name":"Q_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"QR_APP_ID","binding_name":"QR_APP_ID","binding_value":"","source_name":"APP_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"ROLE_ID","binding_name":"ROLE_ID","binding_value":"","source_name":"APP_USER_ROLES","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"SCREEN_NAME","binding_name":"QR_SCREEN_NAME","binding_value":"","source_name":"MENU_ITEM_CODE","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""},{"filter_name":"TENANT_ID","binding_name":"TENANT_ID","binding_value":"","source_name":"TENANT_ID","source_value":"","source_type":"SESSION_LEVEL","oprtr":"=","data_type":"TEXT","conj_operator":"AND","group_no":""}],"databinding":[{"header":"Processing System","target_column":"PROCESSING_SYSTEM","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Queue","target_column":"PROCESS_STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false},{"header":"Status","target_column":"STATUS","alias_name":"","alignment":"Left","width":"","format":"","date_format":false}]}}}}}}
		try {
			this.handler.select_first_record(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "npss mi ui dbtr info memory97"
	npss_mi_ui_dbtr_info_memory97__shc_for_search_ui__search_info_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="npss_mi_ui_dbtr_info_memory97"
		let destn_id="search"
		let parent_source_id=""
		let event_code="e_1674478234085"
		let event_params={"source_comp_id":"search_info_ui","source_ctrl_id":"memory97","caller_name":"npss_mi_ui_dbtr_info_memory97__shc_for_search_ui__search_info_ui","event_desc":"SHC for search UI","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"npss_mi_ui_dbtr_info~uicgc_20~ui~df_1304_1665901396659~97","raiseparam":{}}
		let handler_code="show_hide_controls"
		let internals=""
		let event_data={}
		let data_source={}
		try {
			this.handler.show_hide_controls(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
		} catch(e) {
 			console.log("Handler Error");
			console.log(e); 
 		} 
	} 

	//Handler for SELECTION_CHANGED event of "npss mi ui dbtr info memory97"
	npss_mi_ui_dbtr_info_memory97__svm_for_drinfo__search_info_ui() { 
		let Dest_Is_ctrl=true
		
		let source_id="npss_mi_ui_dbtr_info_memory97"
		let destn_id="npss_mi_ui_dbtr_info_memory97"
		let parent_source_id=""
		let event_code="e_1679576998936"
		let event_params={"source_comp_id":"search_info_ui","source_ctrl_id":"memory97","destn_comp_id":"search_info_ui","destn_ctrl_id":"memory97","caller_name":"npss_mi_ui_dbtr_info_memory97__svm_for_drinfo__search_info_ui","event_desc":"SVM for DRINFO","event_type":"SELECTION_CHANGED","caller_event_context":"SUCCESS","root_source_id":"npss_mi_ui_dbtr_info~uicgc_20~ui~df_1304_1665901396659~97","raiseparam":{}}
		let handler_code="set_value_to_memory"
		let internals=""
		let event_data={"control":{"e_1679576998936":{"dts":{"dt_1304_1665901130705":{"dtts":{"dtt_1304_1665901217208":{"uicgc_code":"CONTROL","event_code":"E_1679576998936","dt_code":"DT_1304_1665901130705","dt_desc":"NPSS EDGE Transactions Group","dtt_code":"DTT_1304_1665901217208","dtt_desc":"NPSS Transactions","eventdata":{"override_dt":"","dt_value":{"type":"","value":""},"override_dtt":"","dtt_value":{"type":"","value":""},"override_keycolumn":"","keycolumn":{"type":"","column_name":"","column_value":""},"override_keyvalue":"","keyvalue":{"type":"","column_value":""},"set_to_memory":[{"type":"LOCAL","column_name":"CD_CODE","level":"MI_LEVEL","name":"MI_LEVEL_DR_INFO","setd3name":""}],"get_from_memory":[],"set_event_context":null,"sec_value":null}}}}}}}}
		let data_source={}
		try {
			this.handler.set_value_to_memory(source_id,destn_id,parent_source_id,event_code,event_params,this,internals,handler_code,event_data,data_source)
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
